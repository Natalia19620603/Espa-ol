import styles from './HomePage.module.css'

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Синтетическая школа испанского</h1>
        <p className={styles.description}>
          Изучайте испанский через синтез лексики, грамматики и контекста
        </p>
        <button className={styles.button}>
          Начать обучение
        </button>
      </div>
    </div>
  )
}

export default HomePage
