import { useNavigate } from 'react-router-dom'
import styles from './DebugPage.module.css'

function DebugPage() {
  const navigate = useNavigate()

  const checkAuth = () => {
    const userData = localStorage.getItem('user')
    if (userData) {
      alert(`Пользователь авторизован: ${userData}`)
    } else {
      alert('Пользователь НЕ авторизован (localStorage пуст)')
    }
  }

  const clearStorage = () => {
    localStorage.clear()
    alert('localStorage очищен! Теперь можно войти заново.')
  }

  const goToLogin = () => {
    navigate('/login')
  }

  const goToCourses = () => {
    navigate('/courses')
  }

  const goToHome = () => {
    navigate('/')
  }

  const demoLogin = () => {
    localStorage.setItem('user', JSON.stringify({
      email: 'test@example.com',
      name: 'Тестовый пользователь'
    }))
    alert('Пользователь создан в localStorage!')
    navigate('/courses')
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>🔧 Панель отладки</h1>

        <div className={styles.section}>
          <h2>Проверка статуса</h2>
          <button onClick={checkAuth} className={styles.button}>
            Проверить авторизацию
          </button>
        </div>

        <div className={styles.section}>
          <h2>Очистка данных</h2>
          <button onClick={clearStorage} className={styles.buttonDanger}>
            Очистить localStorage
          </button>
        </div>

        <div className={styles.section}>
          <h2>Быстрый вход</h2>
          <button onClick={demoLogin} className={styles.buttonSuccess}>
            Войти как тестовый пользователь
          </button>
        </div>

        <div className={styles.section}>
          <h2>Навигация</h2>
          <div className={styles.buttonGroup}>
            <button onClick={goToHome} className={styles.buttonNav}>
              Главная
            </button>
            <button onClick={goToLogin} className={styles.buttonNav}>
              Вход
            </button>
            <button onClick={goToCourses} className={styles.buttonNav}>
              Курсы
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DebugPage
