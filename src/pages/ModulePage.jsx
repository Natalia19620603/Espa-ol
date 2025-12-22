import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { modules, lessons } from '../data/lessonsData'
import styles from './ModulePage.module.css'

function ModulePage() {
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState({})
  const { moduleId } = useParams()
  const navigate = useNavigate()

  const module = modules[moduleId]

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
      const savedProgress = localStorage.getItem('progress')
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress))
      }
    } else {
      navigate('/login')
    }
  }, [navigate])

  const getLessonProgress = (lessonId) => {
    return progress[lessonId] || { completed: false, exercisesCompleted: 0 }
  }

  const handleLessonClick = (lessonId) => {
    navigate(`/lesson/${lessonId}`)
  }

  if (!user || !module) {
    return null
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={() => navigate('/courses')} className={styles.backBtn}>
          ← Назад к курсам
        </button>
        <h1 className={styles.title}>{module.title}</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.moduleInfo}>
          <p className={styles.description}>{module.description}</p>
        </div>

        <div className={styles.lessonsContainer}>
          <h2 className={styles.sectionTitle}>Уроки</h2>

          <div className={styles.lessonsList}>
            {module.lessons && module.lessons.map((lessonId, index) => {
              const lesson = lessons[lessonId]
              if (!lesson) return null

              const lessonProgress = getLessonProgress(lessonId)
              const totalExercises = lesson.exercises?.length || 0
              const completedExercises = lessonProgress.exercisesCompleted || 0

              // Count total words (handle both flat and tabbed vocabulary)
              let wordCount = 0
              if (lesson.vocabulary && Array.isArray(lesson.vocabulary)) {
                if (lesson.vocabulary.length > 0 && lesson.vocabulary[0].words) {
                  // Tabbed vocabulary
                  wordCount = lesson.vocabulary.reduce((sum, tab) => sum + (tab.words?.length || 0), 0)
                } else {
                  // Flat vocabulary
                  wordCount = lesson.vocabulary.length
                }
              }

              return (
                <div
                  key={lessonId}
                  className={`${styles.lessonCard} ${lessonProgress.completed ? styles.completed : ''}`}
                  onClick={() => handleLessonClick(lessonId)}
                >
                  <div className={styles.lessonNumber}>{index + 1}</div>
                  <div className={styles.lessonContent}>
                    <h3 className={styles.lessonTitle}>{lesson.title}</h3>

                    <div className={styles.lessonMeta}>
                      <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>📚</span>
                        <span>Грамматика: {lesson.grammar?.title}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>📝</span>
                        <span>Слов: {wordCount}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>✏️</span>
                        <span>Упражнений: {totalExercises}</span>
                      </div>
                    </div>

                    {totalExercises > 0 && (
                      <div className={styles.exerciseProgress}>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progressFill}
                            style={{
                              width: `${(completedExercises / totalExercises) * 100}%`
                            }}
                          />
                        </div>
                        <span className={styles.progressText}>
                          {completedExercises}/{totalExercises} выполнено
                        </span>
                      </div>
                    )}
                  </div>

                  {lessonProgress.completed && (
                    <div className={styles.completedBadge}>✓</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ModulePage
