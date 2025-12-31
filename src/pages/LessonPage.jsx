import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { lessons, exercises as exercisesData } from '../data/lessonsData'
import ExerciseComponent from '../components/ExerciseComponent'
import AudioPlayer from '../components/AudioPlayer'
import PronunciationRecorder from '../components/PronunciationRecorder'
import styles from './LessonPage.module.css'

// Компонент флипкарточки для словаря
function FlashCard({ word, translation }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`${styles.flashCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.flashCardInner}>
        <div className={styles.flashCardFront}>
          <div className={styles.vocabularyWord}>{word}</div>
        </div>
        <div className={styles.flashCardBack}>
          <div className={styles.vocabularyTranslation}>{translation}</div>
        </div>
      </div>
    </div>
  )
}

function LessonPage() {
  const [user, setUser] = useState(null)
  const [currentExercise, setCurrentExercise] = useState(null)
  const [openSections, setOpenSections] = useState({})
  const [activeExerciseTab, setActiveExerciseTab] = useState(0)
  const [activeExerciseSubtab, setActiveExerciseSubtab] = useState(0)
  const [activeReadingTab, setActiveReadingTab] = useState(0)
  const [activeVocabularyTab, setActiveVocabularyTab] = useState(0)
  const [activeVideoTab, setActiveVideoTab] = useState(0)
  const [activeSubtab, setActiveSubtab] = useState(0)
  const [videoError, setVideoError] = useState(null)
  const [canPlayMP4, setCanPlayMP4] = useState(true)
  const { lessonId } = useParams()
  const navigate = useNavigate()

  const lesson = lessons[lessonId]

  // Определяем начальную вкладку в зависимости от наличия данных
  const getInitialTab = () => {
    if (lesson?.grammar) return 'grammar'
    if (lesson?.vocabulary) return 'vocabulary'
    if (lesson?.readingText) return 'reading'
    if (lesson?.exercises) return 'exercises'
    return 'vocabulary'
  }

  const [activeTab, setActiveTab] = useState(getInitialTab())

  useEffect(() => {
    try {
      const userData = localStorage.getItem('user')
      if (userData) {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
      } else {
        navigate('/login')
      }
    } catch (error) {
      console.error('Error reading user data from localStorage:', error)
      // Clear invalid data and redirect to login
      localStorage.removeItem('user')
      navigate('/login')
    }
  }, [navigate])

  // Reset video tab when lesson changes
  useEffect(() => {
    setActiveVideoTab(0)
    setActiveSubtab(0)
    setActiveExerciseTab(0)
    setActiveReadingTab(0)
    setActiveVocabularyTab(0)
    setVideoError(null)
  }, [lessonId])

  // Reset video error and subtab when changing video tabs
  useEffect(() => {
    setVideoError(null)
    setActiveSubtab(0)
  }, [activeVideoTab])

  // Check if browser can play MP4 videos
  useEffect(() => {
    const video = document.createElement('video')
    const canPlay = video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
    setCanPlayMP4(canPlay === 'probably' || canPlay === 'maybe')

    if (!canPlay || canPlay === '') {
      console.warn('Browser may not support MP4 video format')
    }
  }, [])

  const handleExerciseClick = (exerciseId) => {
    setCurrentExercise(exerciseId)
    setActiveTab('exercises')
  }

  const handleExerciseComplete = (exerciseId) => {
    try {
      // Сохранение прогресса
      const progressData = localStorage.getItem('progress') || '{}'
      const progress = JSON.parse(progressData)

      if (!progress[lessonId]) {
        progress[lessonId] = { completed: false, exercisesCompleted: 0 }
      }

      // Обновление счетчика выполненных упражнений
      const completedExercises = new Set(progress[lessonId].completedExerciseIds || [])
      completedExercises.add(exerciseId)
      progress[lessonId].completedExerciseIds = Array.from(completedExercises)
      progress[lessonId].exercisesCompleted = completedExercises.size

      // Проверка завершения урока
      if (lesson && lesson.exercises && completedExercises.size === lesson.exercises.length) {
        progress[lessonId].completed = true
      }

      localStorage.setItem('progress', JSON.stringify(progress))
      setCurrentExercise(null)
    } catch (error) {
      console.error('Error saving exercise progress:', error)
      if (error.name === 'QuotaExceededError') {
        alert('Недостаточно места для сохранения прогресса. Очистите хранилище браузера.')
      } else if (error instanceof SyntaxError) {
        console.error('Invalid JSON in localStorage, resetting progress')
        localStorage.removeItem('progress')
      } else {
        alert('Ошибка при сохранении прогресса: ' + (error.message || 'Неизвестная ошибка'))
      }
      setCurrentExercise(null)
    }
  }

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  // Helper function to safely get progress from localStorage
  const getProgress = () => {
    try {
      const progressData = localStorage.getItem('progress') || '{}'
      return JSON.parse(progressData)
    } catch (error) {
      console.error('Error reading progress from localStorage:', error)
      return {}
    }
  }

  const renderMarkdown = (text) => {
    if (!text) return null

    // Простой парсер markdown
    return text.split('\n').map((line, index) => {
      // Заголовки
      if (line.startsWith('# ')) {
        return <h2 key={index} className={styles.mdH2}>{line.substring(2)}</h2>
      }
      if (line.startsWith('## ')) {
        return <h3 key={index} className={styles.mdH3}>{line.substring(3)}</h3>
      }

      // Жирный текст
      if (line.includes('**')) {
        const parts = line.split('**')
        return (
          <p key={index} className={styles.mdP}>
            {parts.map((part, i) =>
              i % 2 === 0 ? part : <strong key={i}>{part}</strong>
            )}
          </p>
        )
      }

      // Списки
      if (line.startsWith('- ')) {
        return <li key={index} className={styles.mdLi}>{line.substring(2)}</li>
      }

      // Таблицы (упрощенно)
      if (line.startsWith('|')) {
        const cells = line.split('|').filter(cell => cell.trim())
        return (
          <tr key={index}>
            {cells.map((cell, i) => (
              <td key={i} className={styles.mdTd}>{cell.trim()}</td>
            ))}
          </tr>
        )
      }

      // Обычный текст
      if (line.trim()) {
        return <p key={index} className={styles.mdP}>{line}</p>
      }

      return <br key={index} />
    })
  }

  if (!user || !lesson) {
    return null
  }

  if (currentExercise) {
    const exercise = exercisesData[currentExercise]
    return (
      <div className={styles.container}>
        <ExerciseComponent
          exercise={exercise}
          onComplete={() => handleExerciseComplete(currentExercise)}
          onBack={() => setCurrentExercise(null)}
        />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          onClick={() => navigate(`/module/${lesson.moduleId}`)}
          className={styles.backBtn}
        >
          ← Назад к модулю
        </button>
        <h1 className={styles.title}>{lesson.title}</h1>
      </header>

      <div className={styles.tabs}>
        {lesson.grammar && (
          <button
            className={`${styles.tab} ${activeTab === 'grammar' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('grammar')}
          >
            📚 Грамматика
          </button>
        )}
        <button
          className={`${styles.tab} ${activeTab === 'vocabulary' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          📝 Словарь
        </button>
        {lesson.readingText && (
          <button
            className={`${styles.tab} ${activeTab === 'reading' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('reading')}
          >
            📖 Чтение
          </button>
        )}
        {(lesson.videoUrl || lesson.videoTabs || lesson.audioUrl || lesson.audioTabs) && (
          <button
            className={`${styles.tab} ${activeTab === 'video' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('video')}
          >
            🎬 АУДИО
          </button>
        )}
        {lesson.dialogues && lesson.dialogues.length > 0 && (
          <button
            className={`${styles.tab} ${activeTab === 'dialogues' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('dialogues')}
          >
            💬 Диалоги
          </button>
        )}
        {lesson.culturalNotes && (
          <button
            className={`${styles.tab} ${activeTab === 'culture' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('culture')}
          >
            🌍 Культура
          </button>
        )}
        <button
          className={`${styles.tab} ${activeTab === 'exercises' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('exercises')}
        >
          ✏️ Упражнения
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'pronunciation' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('pronunciation')}
        >
          🎙️ Произношение
        </button>
      </div>

      <main className={styles.main}>
        {activeTab === 'grammar' && (
          <div className={styles.grammarSection}>
            <h2 className={styles.sectionTitle}>{lesson.grammar?.title}</h2>

            {/* Intro текст если есть */}
            {lesson.grammar?.intro && (
              <div className={styles.grammarIntro}>
                {renderMarkdown(lesson.grammar.intro)}
              </div>
            )}

            {/* Секции с аккордеоном если есть */}
            {lesson.grammar?.sections ? (
              <div className={styles.grammarSections}>
                {lesson.grammar.sections.map((section) => (
                  <div key={section.id} className={styles.grammarSectionItem}>
                    <button
                      className={`${styles.sectionButton} ${openSections[section.id] ? styles.sectionButtonOpen : ''}`}
                      onClick={() => toggleSection(section.id)}
                    >
                      <span>{section.title}</span>
                      <span className={styles.sectionArrow}>
                        {openSections[section.id] ? '▼' : '▶'}
                      </span>
                    </button>
                    {openSections[section.id] && (
                      <div className={styles.sectionContent}>
                        {renderMarkdown(section.content)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* Старый формат с content если sections нет */
              <div className={styles.grammarContent}>
                {renderMarkdown(lesson.grammar?.content)}
              </div>
            )}

            {lesson.grammar?.examples && lesson.grammar.examples.length > 0 && (
              <div className={styles.examplesSection}>
                <h3 className={styles.subsectionTitle}>Примеры:</h3>
                {lesson.grammar.examples.map((example, index) => (
                  <div key={index} className={styles.exampleCard}>
                    <div className={styles.spanish}>{example.spanish}</div>
                    <div className={styles.translation}>{example.translation}</div>
                    {example.pronunciation && (
                      <div className={styles.pronunciation}>{example.pronunciation}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'vocabulary' && (
          <div className={styles.vocabularySection}>
            {(() => {
              // Check if vocabulary is organized in tabs
              const hasVocabularyTabs = Array.isArray(lesson.vocabulary) &&
                lesson.vocabulary.length > 0 &&
                lesson.vocabulary[0].tab !== undefined

              if (hasVocabularyTabs) {
                // Render vocabulary with tabs
                const currentVocabulary = lesson.vocabulary[activeVocabularyTab]
                return (
                  <div>
                    <div className={styles.exerciseTabs}>
                      {lesson.vocabulary.map((tabData, index) => (
                        <button
                          key={index}
                          className={`${styles.exerciseTab} ${activeVocabularyTab === index ? styles.activeExerciseTab : ''}`}
                          onClick={() => setActiveVocabularyTab(index)}
                        >
                          {tabData.tab}
                        </button>
                      ))}
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>Новые слова</h2>
                      <p className={styles.flashcardHint}>💡 Нажмите на карточку, чтобы увидеть перевод</p>
                      <div className={styles.vocabularyList}>
                        {currentVocabulary.words && currentVocabulary.words.map((item, index) => (
                          <FlashCard key={index} word={item.word} translation={item.translation} />
                        ))}
                      </div>
                    </div>
                  </div>
                )
              } else {
                // Render single vocabulary list (backward compatibility)
                return (
                  <div>
                    <h2 className={styles.sectionTitle}>Новые слова</h2>
                    <p className={styles.flashcardHint}>💡 Нажмите на карточку, чтобы увидеть перевод</p>
                    <div className={styles.vocabularyList}>
                      {lesson.vocabulary && lesson.vocabulary.map((item, index) => (
                        <FlashCard key={index} word={item.word} translation={item.translation} />
                      ))}
                    </div>
                  </div>
                )
              }
            })()}
          </div>
        )}

        {activeTab === 'reading' && lesson.readingText && (
          <div className={styles.readingSection}>
            {(() => {
              // Check if readingText is organized in tabs
              const hasReadingTabs = Array.isArray(lesson.readingText) &&
                lesson.readingText.length > 0 &&
                lesson.readingText[0].tab !== undefined

              if (hasReadingTabs) {
                // Render reading with tabs
                const currentReading = lesson.readingText[activeReadingTab]
                return (
                  <div>
                    <div className={styles.exerciseTabs}>
                      {lesson.readingText.map((tabData, index) => (
                        <button
                          key={index}
                          className={`${styles.exerciseTab} ${activeReadingTab === index ? styles.activeExerciseTab : ''}`}
                          onClick={() => setActiveReadingTab(index)}
                        >
                          {tabData.tab}
                        </button>
                      ))}
                    </div>
                    <div>
                      <h2 className={styles.sectionTitle}>{currentReading.title}</h2>

                      {/* Аудио для текста */}
                      {currentReading.audioUrl && (
                        <AudioPlayer
                          audioUrl={currentReading.audioUrl}
                          text={currentReading.content}
                          subtitles={currentReading.subtitles || []}
                        />
                      )}

                      <div className={styles.readingContent}>
                        <div className={styles.spanishText}>
                          {currentReading.content.split('\n').map((paragraph, index) => {
                            if (paragraph.trim()) {
                              // Check if paragraph contains HTML tags
                              if (paragraph.includes('<img') || paragraph.includes('<')) {
                                return <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />;
                              }
                              return <p key={index}>{paragraph}</p>;
                            }
                            return null;
                          })}
                        </div>
                        {currentReading.translation && (
                          <div className={styles.translationHint}>
                            <details>
                              <summary>Показать перевод</summary>
                              <p>{currentReading.translation}</p>
                            </details>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              } else {
                // Render single reading text (backward compatibility)
                return (
                  <div>
                    <h2 className={styles.sectionTitle}>{lesson.readingText.title}</h2>

                    {/* Аудио для текста */}
                    {lesson.readingText.audioUrl && (
                      <AudioPlayer
                        audioUrl={lesson.readingText.audioUrl}
                        text={lesson.readingText.content}
                        subtitles={lesson.readingText.subtitles || []}
                      />
                    )}

                    <div className={styles.readingContent}>
                      <div className={styles.spanishText}>
                        {lesson.readingText.content.split('\n').map((paragraph, index) => (
                          paragraph.trim() && <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      {lesson.readingText.translation && (
                        <div className={styles.translationHint}>
                          <details>
                            <summary>Показать перевод</summary>
                            <p>{lesson.readingText.translation}</p>
                          </details>
                        </div>
                      )}
                    </div>
                  </div>
                )
              }
            })()}
          </div>
        )}

        {activeTab === 'video' && (lesson.videoUrl || lesson.videoTabs || lesson.audioUrl || lesson.audioTabs) && (
          <div className={styles.videoSection}>
            <h2 className={styles.sectionTitle}>АУДИО</h2>
            {!canPlayMP4 && (
              <div style={{
                padding: '15px',
                backgroundColor: '#fff3cd',
                border: '1px solid #ffc107',
                borderRadius: '8px',
                marginBottom: '20px',
                color: '#856404',
                fontSize: '14px'
              }}>
                ⚠️ Ваш браузер может не поддерживать воспроизведение видео в формате MP4. Рекомендуем использовать последние версии Chrome, Firefox или Safari.
              </div>
            )}
            {(() => {
              // Check if video/audio is organized in tabs
              const hasVideoTabs = Array.isArray(lesson.videoTabs) &&
                lesson.videoTabs.length > 0 &&
                lesson.videoTabs[0].tab !== undefined

              const hasAudioTabs = Array.isArray(lesson.audioTabs) &&
                lesson.audioTabs.length > 0 &&
                lesson.audioTabs[0].tab !== undefined

              if (hasAudioTabs) {
                // Render audio with tabs
                const currentAudio = lesson.audioTabs[activeVideoTab]
                return (
                  <div>
                    <div className={styles.exerciseTabs} style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      overflowX: 'auto',
                      maxWidth: '100%'
                    }}>
                      {lesson.audioTabs.map((tabData, index) => (
                        <button
                          key={index}
                          className={`${styles.exerciseTab} ${activeVideoTab === index ? styles.activeExerciseTab : ''}`}
                          onClick={() => setActiveVideoTab(index)}
                          style={{
                            flex: '0 0 auto',
                            minWidth: 'fit-content',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tabData.tab}
                        </button>
                      ))}
                    </div>
                    <div className={styles.audioContainer} style={{ marginTop: '20px', width: '100%', maxWidth: '800px' }}>
                      <AudioPlayer
                        key={activeVideoTab}
                        audioUrl={currentAudio.audioUrl}
                        text=""
                        subtitles={currentAudio.subtitles || []}
                      />
                    </div>
                  </div>
                )
              } else if (hasVideoTabs) {
                // Render video with tabs
                const currentVideo = lesson.videoTabs[activeVideoTab]
                const hasSubtabs = currentVideo.subtabs && Array.isArray(currentVideo.subtabs) && currentVideo.subtabs.length > 0
                const activeContent = hasSubtabs ? currentVideo.subtabs[activeSubtab] : currentVideo

                return (
                  <div>
                    {/* Main tabs */}
                    <div className={styles.exerciseTabs} style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      overflowX: 'auto',
                      maxWidth: '100%'
                    }}>
                      {lesson.videoTabs.map((tabData, index) => (
                        <button
                          key={index}
                          className={`${styles.exerciseTab} ${activeVideoTab === index ? styles.activeExerciseTab : ''}`}
                          onClick={() => setActiveVideoTab(index)}
                          style={{
                            flex: '0 0 auto',
                            minWidth: 'fit-content',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tabData.tab}
                        </button>
                      ))}
                    </div>

                    {/* Subtabs if they exist */}
                    {hasSubtabs && (
                      <div className={styles.exerciseTabs} style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        overflowX: 'auto',
                        maxWidth: '100%',
                        marginTop: '10px'
                      }}>
                        {currentVideo.subtabs.map((subtabData, index) => (
                          <button
                            key={index}
                            className={`${styles.exerciseTab} ${activeSubtab === index ? styles.activeExerciseTab : ''}`}
                            onClick={() => setActiveSubtab(index)}
                            style={{
                              flex: '0 0 auto',
                              minWidth: 'fit-content',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {subtabData.tab}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className={styles.videoContainer} style={{ marginTop: '20px', width: '100%', maxWidth: '800px' }}>
                      {activeContent.videoUrl && !videoError && (
                        <video
                          key={`${activeVideoTab}-${activeSubtab}`}
                          controls
                          className={styles.videoPlayer}
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            borderRadius: '8px',
                            display: 'block'
                          }}
                          onError={(e) => {
                            console.error('Ошибка загрузки видео:', activeContent.videoUrl, e)
                            setVideoError(`Не удалось загрузить видео. Файл может отсутствовать или быть поврежден.`)
                          }}
                          onLoadStart={() => setVideoError(null)}
                        >
                          <source src={activeContent.videoUrl} type="video/mp4" />
                          Ваш браузер не поддерживает воспроизведение видео.
                        </video>
                      )}
                      {activeContent.videoUrl && videoError && (
                        <div style={{
                          padding: '30px',
                          backgroundColor: '#fff3cd',
                          border: '2px solid #ffc107',
                          borderRadius: '8px',
                          textAlign: 'center',
                          color: '#856404'
                        }}>
                          <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚠️</div>
                          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                            Ошибка загрузки видео
                          </div>
                          <div style={{ fontSize: '14px', marginBottom: '15px' }}>
                            {videoError}
                          </div>
                          <div style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace', marginBottom: '15px' }}>
                            Файл: {activeContent.videoUrl}
                          </div>
                          <div style={{
                            fontSize: '13px',
                            color: '#555',
                            textAlign: 'left',
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '4px',
                            marginTop: '10px'
                          }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💡 Попробуйте:</div>
                            <ul style={{ margin: '0', paddingLeft: '20px', textAlign: 'left' }}>
                              <li>Обновите страницу (Ctrl+R или Cmd+R)</li>
                              <li>Попробуйте другой браузер (Chrome, Firefox, Safari)</li>
                              <li>Проверьте подключение к интернету</li>
                              <li>Очистите кеш браузера</li>
                            </ul>
                          </div>
                        </div>
                      )}
                      {activeContent.audioUrl && (
                        <AudioPlayer
                          key={`${activeVideoTab}-${activeSubtab}`}
                          audioUrl={activeContent.audioUrl}
                          text=""
                          subtitles={activeContent.subtitles || []}
                        />
                      )}
                    </div>
                  </div>
                )
              } else if (lesson.videoUrl) {
                // Render single video
                return (
                  <div className={styles.videoContainer} style={{ width: '100%', maxWidth: '800px' }}>
                    {!videoError && (
                      <video
                        controls
                        className={styles.videoPlayer}
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxWidth: '100%',
                          borderRadius: '8px',
                          display: 'block'
                        }}
                        onError={(e) => {
                          console.error('Ошибка загрузки видео:', lesson.videoUrl, e)
                          setVideoError(`Не удалось загрузить видео. Файл может отсутствовать или быть поврежден.`)
                        }}
                        onLoadStart={() => setVideoError(null)}
                      >
                        <source src={lesson.videoUrl} type="video/mp4" />
                        Ваш браузер не поддерживает воспроизведение видео.
                      </video>
                    )}
                    {videoError && (
                      <div style={{
                        padding: '30px',
                        backgroundColor: '#fff3cd',
                        border: '2px solid #ffc107',
                        borderRadius: '8px',
                        textAlign: 'center',
                        color: '#856404'
                      }}>
                        <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚠️</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                          Ошибка загрузки видео
                        </div>
                        <div style={{ fontSize: '14px', marginBottom: '15px' }}>
                          {videoError}
                        </div>
                        <div style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace', marginBottom: '15px' }}>
                          Файл: {lesson.videoUrl}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: '#555',
                          textAlign: 'left',
                          backgroundColor: '#f8f9fa',
                          padding: '15px',
                          borderRadius: '4px',
                          marginTop: '10px'
                        }}>
                          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💡 Попробуйте:</div>
                          <ul style={{ margin: '0', paddingLeft: '20px', textAlign: 'left' }}>
                            <li>Обновите страницу (Ctrl+R или Cmd+R)</li>
                            <li>Попробуйте другой браузер (Chrome, Firefox, Safari)</li>
                            <li>Проверьте подключение к интернету</li>
                            <li>Очистите кеш браузера</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )
              } else if (lesson.audioUrl) {
                // Render single audio
                return (
                  <div className={styles.audioContainer}>
                    <AudioPlayer
                      audioUrl={lesson.audioUrl}
                      text=""
                      subtitles={lesson.audioSubtitles || []}
                    />
                  </div>
                )
              }
            })()}
          </div>
        )}

        {activeTab === 'dialogues' && lesson.dialogues && (
          <div className={styles.dialoguesSection}>
            <h2 className={styles.sectionTitle}>Диалоги</h2>
            {lesson.dialogues.map((dialogue, index) => (
              <div key={index} className={styles.dialogueCard}>
                <h3 className={styles.dialogueTitle}>{dialogue.title}</h3>
                {dialogue.audioUrl && (
                  <AudioPlayer
                    audioUrl={dialogue.audioUrl}
                    text={dialogue.lines?.map(l => l.text).join('\n')}
                  />
                )}
                <div className={styles.dialogueContent}>
                  {dialogue.lines?.map((line, lineIndex) => (
                    <div key={lineIndex} className={styles.dialogueLine}>
                      <span className={styles.speaker}>{line.speaker}:</span>
                      <span className={styles.dialogueText}>{line.text}</span>
                      {line.translation && (
                        <span className={styles.dialogueTranslation}>({line.translation})</span>
                      )}
                    </div>
                  ))}
                </div>
                {dialogue.translation && (
                  <div className={styles.dialogueFullTranslation}>
                    <details>
                      <summary>Показать полный перевод</summary>
                      <p>{dialogue.translation}</p>
                    </details>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'culture' && lesson.culturalNotes && (
          <div className={styles.cultureSection}>
            <h2 className={styles.sectionTitle}>Культурные заметки</h2>
            <div className={styles.cultureContent}>
              {typeof lesson.culturalNotes === 'string' ? (
                renderMarkdown(lesson.culturalNotes)
              ) : (
                <>
                  {lesson.culturalNotes.title && (
                    <h3 className={styles.cultureTitle}>{lesson.culturalNotes.title}</h3>
                  )}
                  {lesson.culturalNotes.content && (
                    <div className={styles.cultureText}>
                      {renderMarkdown(lesson.culturalNotes.content)}
                    </div>
                  )}
                  {lesson.culturalNotes.facts && lesson.culturalNotes.facts.length > 0 && (
                    <div className={styles.cultureFacts}>
                      <h4>Интересные факты:</h4>
                      <ul>
                        {lesson.culturalNotes.facts.map((fact, index) => (
                          <li key={index}>{fact}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === 'pronunciation' && (
          <div className={styles.pronunciationSection}>
            <h2 className={styles.sectionTitle}>Практика произношения</h2>
            <p className={styles.pronunciationDescription}>
              Прочитайте текст вслух и запишите свое произношение. Сравните с оригиналом.
            </p>

            {lesson.readingText && (
              <PronunciationRecorder text={lesson.readingText.content} />
            )}

            {lesson.grammar?.examples && lesson.grammar.examples.length > 0 && (
              <div className={styles.examplesPronunciation}>
                <h3 className={styles.subsectionTitle}>Примеры для практики:</h3>
                {lesson.grammar.examples.map((example, index) => (
                  <div key={index} className={styles.pronunciationExample}>
                    <PronunciationRecorder text={example.spanish} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'exercises' && (
          <div className={styles.exercisesSection}>
            <h2 className={styles.sectionTitle}>Упражнения</h2>
            {(() => {
              // Check if exercises are organized in tabs
              const hasExerciseTabs = lesson.exercises &&
                lesson.exercises.length > 0 &&
                typeof lesson.exercises[0] === 'object' &&
                lesson.exercises[0].tab !== undefined

              if (hasExerciseTabs) {
                // Check if tabs have subtabs (nested structure)
                const hasSubtabs = lesson.exercises[0].subtabs !== undefined

                if (hasSubtabs) {
                  // Render exercises with nested tabs (chapter tabs + exercise type subtabs)
                  const currentChapter = lesson.exercises[activeExerciseTab]
                  const currentSubtab = currentChapter.subtabs[activeExerciseSubtab]

                  return (
                    <div>
                      {/* Chapter tabs */}
                      <div className={styles.exerciseTabs}>
                        {lesson.exercises.map((tabData, index) => (
                          <button
                            key={index}
                            className={`${styles.exerciseTab} ${activeExerciseTab === index ? styles.activeExerciseTab : ''}`}
                            onClick={() => {
                              setActiveExerciseTab(index)
                              setActiveExerciseSubtab(0)
                            }}
                          >
                            {tabData.tab}
                          </button>
                        ))}
                      </div>

                      {/* Exercise type subtabs */}
                      <div className={styles.exerciseSubtabs}>
                        {currentChapter.subtabs.map((subtab, index) => (
                          <button
                            key={index}
                            className={`${styles.exerciseSubtab} ${activeExerciseSubtab === index ? styles.activeExerciseSubtab : ''}`}
                            onClick={() => setActiveExerciseSubtab(index)}
                          >
                            {subtab.name}
                          </button>
                        ))}
                      </div>

                      {/* Exercises list */}
                      <div className={styles.exercisesList}>
                        {currentSubtab.exercises.length === 0 ? (
                          <p className={styles.noExercises}>Упражнения скоро будут добавлены</p>
                        ) : (
                          currentSubtab.exercises.map((exerciseId, index) => {
                            const exercise = exercisesData[exerciseId]
                            if (!exercise) return null

                            const progress = getProgress()
                            const lessonProgress = progress[lessonId] || {}
                            const isCompleted = (lessonProgress.completedExerciseIds || []).includes(exerciseId)

                            return (
                              <div
                                key={exerciseId}
                                className={`${styles.exerciseCard} ${isCompleted ? styles.completed : ''}`}
                                onClick={() => handleExerciseClick(exerciseId)}
                              >
                                <div className={styles.exerciseNumber}>{index + 1}</div>
                                <div className={styles.exerciseInfo}>
                                  <h3 className={styles.exerciseTitle}>{exercise.title}</h3>
                                  <p className={styles.exerciseDescription}>{exercise.description}</p>
                                  <span className={styles.exerciseType}>
                                    Тип: {getExerciseTypeName(exercise.type)}
                                  </span>
                                </div>
                                {isCompleted && (
                                  <div className={styles.completedBadge}>✓</div>
                                )}
                              </div>
                            )
                          })
                        )}
                      </div>
                    </div>
                  )
                } else {
                  // Render exercises with simple tabs (no subtabs)
                  return (
                    <div>
                      <div className={styles.exerciseTabs}>
                        {lesson.exercises.map((tabData, index) => (
                          <button
                            key={index}
                            className={`${styles.exerciseTab} ${activeExerciseTab === index ? styles.activeExerciseTab : ''}`}
                            onClick={() => setActiveExerciseTab(index)}
                          >
                            {tabData.tab}
                          </button>
                        ))}
                      </div>
                      <div className={styles.exercisesList}>
                        {lesson.exercises[activeExerciseTab].exerciseIds.map((exerciseId, index) => {
                          const exercise = exercisesData[exerciseId]
                          if (!exercise) return null

                          const progress = getProgress()
                          const lessonProgress = progress[lessonId] || {}
                          const isCompleted = (lessonProgress.completedExerciseIds || []).includes(exerciseId)

                          return (
                            <div
                              key={exerciseId}
                              className={`${styles.exerciseCard} ${isCompleted ? styles.completed : ''}`}
                              onClick={() => handleExerciseClick(exerciseId)}
                            >
                              <div className={styles.exerciseNumber}>{index + 1}</div>
                              <div className={styles.exerciseInfo}>
                                <h3 className={styles.exerciseTitle}>{exercise.title}</h3>
                                <p className={styles.exerciseDescription}>{exercise.description}</p>
                                <span className={styles.exerciseType}>
                                  Тип: {getExerciseTypeName(exercise.type)}
                                </span>
                              </div>
                              {isCompleted && (
                                <div className={styles.completedBadge}>✓</div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                }
              } else {
                // Render exercises without tabs (simple array)
                return (
                  <div className={styles.exercisesList}>
                    {lesson.exercises && lesson.exercises.map((exerciseId, index) => {
                      const exercise = exercisesData[exerciseId]
                      if (!exercise) return null

                      const progress = getProgress()
                      const lessonProgress = progress[lessonId] || {}
                      const isCompleted = (lessonProgress.completedExerciseIds || []).includes(exerciseId)

                      return (
                        <div
                          key={exerciseId}
                          className={`${styles.exerciseCard} ${isCompleted ? styles.completed : ''}`}
                          onClick={() => handleExerciseClick(exerciseId)}
                        >
                          <div className={styles.exerciseNumber}>{index + 1}</div>
                          <div className={styles.exerciseInfo}>
                            <h3 className={styles.exerciseTitle}>{exercise.title}</h3>
                            <p className={styles.exerciseDescription}>{exercise.description}</p>
                            <span className={styles.exerciseType}>
                              Тип: {getExerciseTypeName(exercise.type)}
                            </span>
                          </div>
                          {isCompleted && (
                            <div className={styles.completedBadge}>✓</div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )
              }
            })()}
          </div>
        )}
      </main>
    </div>
  )
}

function getExerciseTypeName(type) {
  const types = {
    vocabulary: 'Словарный запас',
    grammar: 'Грамматика',
    reading: 'Чтение',
    writing: 'Письмо',
    pronunciation: 'Произношение',
    fillblank: 'Заполнение пропусков',
    'ser-estar': 'SER vs ESTAR',
    articles: 'Артикли',
    // Grammar types
    conjugation: 'Спряжение',
    'word-order': 'Порядок слов',
    transformation: 'Трансформация',
    'error-correction': 'Исправление ошибок',
    'tense-choice': 'Выбор времени',
    prepositions: 'Предлоги',
    pronouns: 'Местоимения',
    agreement: 'Согласование',
    subjunctive: 'Сослагательное наклонение',
    conditional: 'Условное наклонение',
    // Vocabulary types
    synonyms: 'Синонимы',
    antonyms: 'Антонимы',
    collocations: 'Словосочетания',
    definitions: 'Определения',
    context: 'Контекст',
    'word-formation': 'Словообразование',
    categorization: 'Категоризация',
    'false-friends': 'Ложные друзья переводчика',
    idioms: 'Идиомы',
    'word-family': 'Словарные семьи',
    // Additional types
    matching: 'Соответствие',
    'dialogue-practice': 'Практика диалогов',
    'reading-comprehension': 'Понимание прочитанного',
    translation: 'Перевод'
  }
  return types[type] || type
}

export default LessonPage
