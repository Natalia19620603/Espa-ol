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

      // Provide specific error messages based on error type
      if (error.name === 'NotAllowedError') {
        console.error('Microphone access denied by user')
      } else if (error.name === 'NotFoundError') {
        console.error('No microphone device found')
      } else if (error.name === 'NotReadableError') {
        console.error('Microphone is already in use by another application')
      } else {
        console.error('Unknown microphone error:', error.message)
      }
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      // Check if MediaRecorder is supported
      if (!window.MediaRecorder) {
        throw new Error('MediaRecorder is not supported in this browser')
      }

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        try {
          if (audioChunksRef.current.length === 0) {
            console.error('No audio data recorded')
            alert('Не удалось записать аудио. Попробуйте еще раз.')
            return
          }

          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' })
          const url = URL.createObjectURL(audioBlob)
          setAudioURL(url)

          if (onRecordingComplete) {
            onRecordingComplete(audioBlob, url)
          }

          // Останавливаем все треки
          stream.getTracks().forEach(track => track.stop())
        } catch (err) {
          console.error('Error processing recording:', err)
          alert('Ошибка при обработке записи. Попробуйте снова.')
        }
      }

      mediaRecorder.onerror = (event) => {
        console.error('MediaRecorder error:', event.error)
        alert('Ошибка записи: ' + (event.error?.message || 'Неизвестная ошибка'))
        setIsRecording(false)
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

      let errorMessage = 'Не удалось начать запись. '
      if (error.name === 'NotAllowedError') {
        errorMessage += 'Доступ к микрофону запрещен. Пожалуйста, разрешите доступ в настройках браузера.'
      } else if (error.name === 'NotFoundError') {
        errorMessage += 'Микрофон не найден. Проверьте подключение микрофона.'
      } else if (error.name === 'NotReadableError') {
        errorMessage += 'Микрофон уже используется другим приложением.'
      } else if (error.message) {
        errorMessage += error.message
      } else {
        errorMessage += 'Проверьте разрешения микрофона.'
      }

      alert(errorMessage)
    }
  }

  const stopRecording = () => {
    try {
      const recorder = mediaRecorderRef.current

      if (!recorder) {
        console.error('MediaRecorder not initialized')
        return
      }

      // Check if recorder is in a state that can be stopped
      if (recorder.state === 'recording') {
        recorder.stop()
        setIsRecording(false)

        if (timerRef.current) {
          clearInterval(timerRef.current)
          timerRef.current = null
        }
      } else {
        console.warn('MediaRecorder is not recording, current state:', recorder.state)
        setIsRecording(false)
      }
    } catch (error) {
      console.error('Error stopping recording:', error)
      alert('Ошибка при остановке записи: ' + (error.message || 'Неизвестная ошибка'))
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
