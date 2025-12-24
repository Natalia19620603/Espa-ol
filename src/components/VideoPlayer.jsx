import { useState, useRef, useEffect } from 'react'
import styles from './VideoPlayer.module.css'

function VideoPlayer({ videoUrl, title, subtitles = [] }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [currentSubtitle, setCurrentSubtitle] = useState('')
  const [showSubtitles, setShowSubtitles] = useState(true)
  const [volume, setVolume] = useState(1.0)
  const [isMuted, setIsMuted] = useState(false)
  const [error, setError] = useState(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      try {
        if (video.currentTime !== undefined && !isNaN(video.currentTime)) {
          setCurrentTime(video.currentTime)

          // Обновление субтитров
          if (showSubtitles && subtitles.length > 0) {
            const current = subtitles.find(
              sub => video.currentTime >= sub.start && video.currentTime <= sub.end
            )
            setCurrentSubtitle(current ? current.text : '')
          }
        }
      } catch (err) {
        console.error('Error updating video time:', err)
      }
    }

    const handleLoadedMetadata = () => {
      try {
        if (video.duration !== undefined && !isNaN(video.duration)) {
          setDuration(video.duration)
          setError(null)
        }
      } catch (err) {
        console.error('Error loading video metadata:', err)
        setError('Failed to load video metadata')
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    const handleError = (e) => {
      console.error('Video playback error:', e)
      setError('Unable to play video. The file may be corrupted or in an unsupported format.')
      setIsPlaying(false)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('error', handleError)
    }
  }, [showSubtitles, subtitles])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) {
      setError('Video player not initialized')
      return
    }

    try {
      if (isPlaying) {
        video.pause()
      } else {
        await video.play()
        setError(null)
      }
    } catch (err) {
      console.error('Error toggling video playback:', err)
      setError('Failed to play video. Please try again.')
      setIsPlaying(false)
    }
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    if (!video) {
      setError('Video player not initialized')
      return
    }

    try {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(1, x / rect.width))

      if (duration && !isNaN(duration) && isFinite(duration)) {
        const newTime = percentage * duration
        if (!isNaN(newTime) && isFinite(newTime)) {
          video.currentTime = newTime
          setError(null)
        } else {
          console.error('Invalid seek time calculated:', newTime)
          setError('Unable to seek to the requested position')
        }
      } else {
        console.error('Invalid duration:', duration)
        setError('Video duration not available yet')
      }
    } catch (err) {
      console.error('Error seeking video:', err)
      setError('Failed to seek video position')
    }
  }

  const changePlaybackRate = (rate) => {
    const video = videoRef.current
    if (!video) {
      setError('Video player not initialized')
      return
    }

    try {
      if (typeof rate === 'number' && rate > 0 && rate <= 2) {
        video.playbackRate = rate
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

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) {
      setError('Video player not initialized')
      return
    }

    try {
      video.muted = !isMuted
      setIsMuted(!isMuted)
      setError(null)
    } catch (err) {
      console.error('Error toggling mute:', err)
      setError('Failed to toggle mute')
    }
  }

  const handleVolumeChange = (e) => {
    const video = videoRef.current
    if (!video) {
      setError('Video player not initialized')
      return
    }

    try {
      const newVolume = parseFloat(e.target.value)
      if (!isNaN(newVolume) && newVolume >= 0 && newVolume <= 1) {
        video.volume = newVolume
        setVolume(newVolume)
        if (newVolume === 0) {
          setIsMuted(true)
        } else if (isMuted) {
          setIsMuted(false)
        }
        setError(null)
      } else {
        console.error('Invalid volume value:', newVolume)
        setError('Invalid volume value')
      }
    } catch (err) {
      console.error('Error changing volume:', err)
      setError('Failed to change volume')
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={styles.videoPlayerContainer}>
      {title && <h3 className={styles.videoTitle}>{title}</h3>}

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

      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src={videoUrl}
          className={styles.video}
          onClick={togglePlay}
        />

        {showSubtitles && currentSubtitle && (
          <div className={styles.subtitlesOverlay}>
            {currentSubtitle}
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

          <div className={styles.volumeControl}>
            <button
              className={styles.volumeButton}
              onClick={toggleMute}
              aria-label={isMuted ? 'Включить звук' : 'Выключить звук'}
            >
              {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className={styles.volumeSlider}
            />
          </div>

          <button
            className={`${styles.subtitlesButton} ${showSubtitles ? styles.active : ''}`}
            onClick={() => setShowSubtitles(!showSubtitles)}
            aria-label="Субтитры"
          >
            CC
          </button>

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
    </div>
  )
}

export default VideoPlayer
