import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './LoginPage.module.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // Проверка: если пользователь уже авторизован, перенаправляем на курсы
  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      navigate('/courses')
    }
  }, [navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Простая проверка (в реальном приложении здесь будет API запрос)
    if (email && password) {
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify({ email, name: 'Пользователь' }))
      // Редирект на курсы
      navigate('/courses')
    } else {
      alert('Пожалуйста, заполните все поля')
    }
  }

  // Демо-вход для тестирования
  const handleDemoLogin = () => {
    localStorage.setItem('user', JSON.stringify({
      email: 'demo@example.com',
      name: 'Демо пользователь'
    }))
    navigate('/courses')
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Вход</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Введите ваш email"
              autoComplete="email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Введите пароль"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className={styles.button}>
            Войти
          </button>

          <button
            type="button"
            onClick={handleDemoLogin}
            className={styles.demoButton}
          >
            🚀 Быстрый вход (демо)
          </button>
        </form>

        <p className={styles.link}>
          Нет аккаунта? <Link to="/register" className={styles.linkText}>Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
