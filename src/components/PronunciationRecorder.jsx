import { useState, useRef, useEffect } from 'react'
import styles from './PronunciationRecorder.module.css'

function PronunciationRecorder({ text, onRecordingComplete }) {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState('')
  const [recordingTime, setRecordingTime] = useState(0)
  const [hasPermission, setHasPermission] = useState(null)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])
  const timerRef = useRef(null)

  useEffect(() => {
    // Проверка поддержки браузером
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setHasPermission(false)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const requestPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setHasPermission(true)
      stream.getTracks().forEach(track => track.stop()) // Останавливаем превью
    } catch (error) {
      console.error('Ошибка доступа к микрофону:', error)
      setHasPermission(false)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(audioBlob)
        setAudioURL(url)

        if (onRecordingComplete) {
          onRecordingComplete(audioBlob, url)
        }

        // Останавливаем все треки
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)

      // Таймер записи
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)
    } catch (error) {
      console.error('Ошибка начала записи:', error)
      alert('Не удалось начать запись. Проверьте разрешения микрофона.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const resetRecording = () => {
    setAudioURL('')
    setRecordingTime(0)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (hasPermission === false) {
    return (
      <div className={styles.recorderContainer}>
        <div className={styles.errorMessage}>
          <p>❌ Микрофон недоступен</p>
          <p className={styles.errorDetail}>
            Пожалуйста, разрешите доступ к микрофону в настройках браузера
          </p>
        </div>
      </div>
    )
  }

  if (hasPermission === null) {
    return (
      <div className={styles.recorderContainer}>
        <div className={styles.permissionRequest}>
          <p>🎤 Для записи произношения требуется доступ к микрофону</p>
          <button className={styles.permissionButton} onClick={requestPermission}>
            Разрешить доступ
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.recorderContainer}>
      {text && (
        <div className={styles.textToRead}>
          <p className={styles.instruction}>Прочитайте вслух:</p>
          <p className={styles.targetText}>{text}</p>
        </div>
      )}

      <div className={styles.recorderControls}>
        {!audioURL && !isRecording && (
          <button
            className={styles.recordButton}
            onClick={startRecording}
          >
            <span className={styles.recordIcon}>🎙️</span>
            Начать запись
          </button>
        )}

        {isRecording && (
          <div className={styles.recordingActive}>
            <button
              className={styles.stopButton}
              onClick={stopRecording}
            >
              <span className={styles.stopIcon}>⏹</span>
              Остановить
            </button>
            <div className={styles.recordingIndicator}>
              <span className={styles.recordingDot}></span>
              <span className={styles.recordingTime}>{formatTime(recordingTime)}</span>
            </div>
          </div>
        )}

        {audioURL && (
          <div className={styles.playbackSection}>
            <div className={styles.playbackHeader}>
              <span className={styles.successIcon}>✓</span>
              <span>Запись готова</span>
            </div>
            <audio controls src={audioURL} className={styles.audioPlayback} />
            <div className={styles.playbackActions}>
              <button
                className={styles.retryButton}
                onClick={resetRecording}
              >
                🔄 Записать заново
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PronunciationRecorder
