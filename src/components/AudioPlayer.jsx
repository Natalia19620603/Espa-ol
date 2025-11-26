import { useState, useRef, useEffect } from 'react'
import styles from './AudioPlayer.module.css'

function AudioPlayer({ audioUrl, text, showSubtitles = true, subtitles = [] }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [currentSubtitle, setCurrentSubtitle] = useState('')
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)

      // Обновление субтитров
      if (showSubtitles && subtitles.length > 0) {
        const current = subtitles.find(
          sub => audio.currentTime >= sub.start && audio.currentTime <= sub.end
        )
        setCurrentSubtitle(current ? current.text : '')
      }
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [showSubtitles, subtitles])

  const togglePlay = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    audio.currentTime = percentage * duration
  }

  const changePlaybackRate = (rate) => {
    const audio = audioRef.current
    audio.playbackRate = rate
    setPlaybackRate(rate)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioRef} src={audioUrl} />

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
