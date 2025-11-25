import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './RegisterPage.module.css'

function RegisterPage() {
  const [name, setName] = useState('')
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
    if (name && email && password) {
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify({ name, email }))
      // Редирект на курсы
      navigate('/courses')
    } else {
      alert('Пожалуйста, заполните все поля')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Регистрация</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Введите ваше имя"
              autoComplete="name"
            />
          </div>

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
              placeholder="Придумайте пароль"
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className={styles.button}>
            Зарегистрироваться
          </button>
        </form>

        <p className={styles.link}>
          Уже есть аккаунт? <Link to="/login" className={styles.linkText}>Войти</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
