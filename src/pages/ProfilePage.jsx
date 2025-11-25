import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ProfilePage.module.css'

function ProfilePage() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Получаем данные пользователя из localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      // Если пользователь не авторизован, редирект на страницу входа
      navigate('/login')
    }
  }, [navigate])

  const handleLogout = () => {
    // Удаляем данные пользователя
    localStorage.removeItem('user')
    // Сначала обновляем состояние, чтобы избежать ошибок рендеринга
    setUser(null)
    // Редирект на главную
    navigate('/')
  }

  if (!user) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Профиль пользователя</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.avatar}>
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>

          <div className={styles.infoGroup}>
            <label className={styles.label}>Имя</label>
            <div className={styles.value}>{user.name || 'Не указано'}</div>
          </div>

          <div className={styles.infoGroup}>
            <label className={styles.label}>Email</label>
            <div className={styles.value}>{user.email || 'Не указано'}</div>
          </div>

          <button onClick={handleLogout} className={styles.button}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
