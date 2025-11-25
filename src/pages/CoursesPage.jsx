import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { courseLevels, modules } from '../data/lessonsData'
import styles from './CoursesPage.module.css'

function CoursesPage() {
  const [user, setUser] = useState(null)
  const [progress, setProgress] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    // Проверка авторизации
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
      // Загрузка прогресса
      const savedProgress = localStorage.getItem('progress')
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress))
      }
    } else {
      navigate('/login')
    }
  }, [navigate])

  const getModuleProgress = (moduleId) => {
    return progress[moduleId] || { completed: false, lessonsCompleted: 0 }
  }

  const handleModuleClick = (moduleId) => {
    navigate(`/module/${moduleId}`)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  if (!user) {
    return null
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Синтетическая школа испанского</h1>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name || user.email}</span>
            <button onClick={() => navigate('/profile')} className={styles.profileBtn}>
              Профиль
            </button>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Выйти
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h2>Структурированное обучение испанскому языку</h2>
          <p>
            Освойте испанский через системное изучение грамматики, наращивание
            словарного запаса и развитие практических навыков
          </p>
        </section>

        {courseLevels.map((level) => (
          <section key={level.id} className={styles.levelSection}>
            <div className={styles.levelHeader}>
              <h2 className={styles.levelTitle}>{level.name}</h2>
              <p className={styles.levelDescription}>{level.description}</p>
            </div>

            <div className={styles.modulesGrid}>
              {level.modules.map((moduleId) => {
                const module = modules[moduleId]
                if (!module) return null

                const moduleProgress = getModuleProgress(moduleId)
                const totalLessons = module.lessons?.length || 0
                const completedLessons = moduleProgress.lessonsCompleted || 0
                const progressPercent = totalLessons > 0
                  ? Math.round((completedLessons / totalLessons) * 100)
                  : 0

                return (
                  <div
                    key={moduleId}
                    className={styles.moduleCard}
                    onClick={() => handleModuleClick(moduleId)}
                  >
                    <div className={styles.moduleHeader}>
                      <h3 className={styles.moduleTitle}>{module.title}</h3>
                      {moduleProgress.completed && (
                        <span className={styles.completedBadge}>✓</span>
                      )}
                    </div>
                    <p className={styles.moduleDescription}>{module.description}</p>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <p className={styles.progressText}>
                      {completedLessons} из {totalLessons} уроков
                    </p>
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        <section className={styles.features}>
          <h2>Преимущества платформы</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Структурированная грамматика</h3>
              <p>Освоение грамматики по принципу российской школьной программы</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📖</div>
              <h3>Аутентичные материалы</h3>
              <p>Поэтапное наращивание словарного запаса на основе реальных текстов</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✍️</div>
              <h3>Интерактивные упражнения</h3>
              <p>Развитие навыков чтения, аудирования, письма и грамматики</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👨‍🏫</div>
              <h3>Поддержка преподавателя</h3>
              <p>Возможность персонального сопровождения</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CoursesPage
