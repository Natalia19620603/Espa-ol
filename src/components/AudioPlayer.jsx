import { useState, useRef, useEffect } from 'react'
import styles from './AudioPlayer.module.css'

function AudioPlayer({ audioUrl, text, showSubtitles = true, subtitles = [] }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [currentSubtitle, setCurrentSubtitle] = useState('')
  const [error, setError] = useState(null)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      try {
        if (audio.currentTime !== undefined && !isNaN(audio.currentTime)) {
          setCurrentTime(audio.currentTime)

          // Обновление субтитров
          if (showSubtitles && subtitles.length > 0) {
            const current = subtitles.find(
              sub => audio.currentTime >= sub.start && audio.currentTime <= sub.end
            )
            setCurrentSubtitle(current ? current.text : '')
          }
        }
      } catch (err) {
        console.error('Error updating audio time:', err)
      }
    }

    const handleLoadedMetadata = () => {
      try {
        if (audio.duration !== undefined && !isNaN(audio.duration)) {
          // Check if the file is empty (0 duration or very short)
          if (audio.duration === 0 || audio.duration < 0.1) {
            setError('Audio file is empty or invalid. Please add the actual audio content.')
            setDuration(0)
            return
          }
          setDuration(audio.duration)
          setError(null)
        }
      } catch (err) {
        console.error('Error loading audio metadata:', err)
        setError('Failed to load audio metadata')
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    const handleError = (e) => {
      console.error('Audio playback error:', e)
      const target = e.target
      let errorMessage = 'Failed to play audio. Please try again.'

      if (target && target.error) {
        switch (target.error.code) {
          case target.error.MEDIA_ERR_ABORTED:
            errorMessage = 'Audio playback was aborted.'
            break
          case target.error.MEDIA_ERR_NETWORK:
            errorMessage = 'Network error occurred while loading audio.'
            break
          case target.error.MEDIA_ERR_DECODE:
            errorMessage = 'Audio file is corrupted or in an unsupported format.'
            break
          case target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorMessage = 'Audio file not found or format not supported. Please ensure the audio file exists and is properly formatted.'
            break
          default:
            errorMessage = 'Failed to play audio. The file may be missing or corrupted.'
        }
      }

      setError(errorMessage)
      setIsPlaying(false)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [showSubtitles, subtitles])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) {
      setError('Audio player not initialized')
      return
    }

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
        setError(null)
      }
    } catch (err) {
      console.error('Error toggling audio playback:', err)
      setError('Failed to play audio. Please try again.')
      setIsPlaying(false)
    }
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio) {
      setError('Audio player not initialized')
      return
    }

    try {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(1, x / rect.width))

      if (duration && !isNaN(duration) && isFinite(duration)) {
        const newTime = percentage * duration
        if (!isNaN(newTime) && isFinite(newTime)) {
          audio.currentTime = newTime
          setError(null)
        } else {
          console.error('Invalid seek time calculated:', newTime)
          setError('Unable to seek to the requested position')
        }
      } else {
        console.error('Invalid duration:', duration)
        setError('Audio duration not available yet')
      }
    } catch (err) {
      console.error('Error seeking audio:', err)
      setError('Failed to seek audio position')
    }
  }

  const changePlaybackRate = (rate) => {
    const audio = audioRef.current
    if (!audio) {
      setError('Audio player not initialized')
      return
    }

    try {
      if (typeof rate === 'number' && rate > 0 && rate <= 2) {
        audio.playbackRate = rate
        setPlaybackRate(rate)
        setError(null)
      } else {
        console.error('Invalid playback rate:', rate)
        setError('Invalid playback rate')
      }
    } catch (err) {
      console.error('Error changing playback rate:', err)
      setError('Failed to change playback speed')
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioRef} src={audioUrl} />

      {error && (
        <div className={styles.errorMessage} style={{
          color: '#d32f2f',
          padding: '8px',
          marginBottom: '8px',
          backgroundColor: '#ffebee',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          ⚠️ {error}
        </div>
      )}

      {showSubtitles && subtitles.length > 0 && (
        <div className={styles.subtitles}>
          {currentSubtitle || text}
        </div>
      )}

      <div className={styles.controls}>
        <button
          className={styles.playButton}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <div className={styles.timeInfo}>
          <span className={styles.time}>{formatTime(currentTime)}</span>
        </div>

        <div className={styles.progressBar} onClick={handleSeek}>
          <div
            className={styles.progressFill}
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        <div className={styles.timeInfo}>
          <span className={styles.time}>{formatTime(duration)}</span>
        </div>

        <div className={styles.speedControls}>
          <button
            className={`${styles.speedButton} ${playbackRate === 0.8 ? styles.active : ''}`}
            onClick={() => changePlaybackRate(0.8)}
          >
            0.8×
          </button>
          <button
            className={`${styles.speedButton} ${playbackRate === 1.0 ? styles.active : ''}`}
            onClick={() => changePlaybackRate(1.0)}
          >
            1.0×
          </button>
          <button
            className={`${styles.speedButton} ${playbackRate === 1.2 ? styles.active : ''}`}
            onClick={() => changePlaybackRate(1.2)}
          >
            1.2×
          </button>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
