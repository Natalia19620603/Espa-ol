import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './HomePage.module.css'

function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    // Проверка авторизации - если пользователь авторизован, перенаправляем на курсы
    const userData = localStorage.getItem('user')
    if (userData) {
      navigate('/courses')
    }
  }, [navigate])

  const handleStart = () => {
    navigate('/login')
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Синтетическая школа испанского</h1>
        <p className={styles.description}>
          Изучайте испанский через синтез лексики, грамматики и контекста
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            📚 Структурированное освоение грамматики по принципу российской школьной программы
          </div>
          <div className={styles.feature}>
            📖 Поэтапное наращивание словарного запаса на основе аутентичных материалов
          </div>
          <div className={styles.feature}>
            ✍️ Развитие навыков чтения, аудирования, письма и грамматической компетенции через интерактивные упражнения
          </div>
          <div className={styles.feature}>
            👨‍🏫 Возможность персонального сопровождения преподавателя
          </div>
        </div>
        <button onClick={handleStart} className={styles.button}>
          Начать обучение
        </button>
      </div>
    </div>
  )
}

export default HomePage
