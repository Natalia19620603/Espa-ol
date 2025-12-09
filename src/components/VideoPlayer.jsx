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
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)

      // Обновление субтитров
      if (showSubtitles && subtitles.length > 0) {
        const current = subtitles.find(
          sub => video.currentTime >= sub.start && video.currentTime <= sub.end
        )
        setCurrentSubtitle(current ? current.text : '')
      }
    }

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [showSubtitles, subtitles])

  const togglePlay = () => {
    const video = videoRef.current
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    video.currentTime = percentage * duration
  }

  const changePlaybackRate = (rate) => {
    const video = videoRef.current
    video.playbackRate = rate
    setPlaybackRate(rate)
  }

  const toggleMute = () => {
    const video = videoRef.current
    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e) => {
    const video = videoRef.current
    const newVolume = parseFloat(e.target.value)
    video.volume = newVolume
    setVolume(newVolume)
    if (newVolume === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
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
