import { useState } from 'react'
import styles from './ExerciseComponent.module.css'

function ExerciseComponent({ exercise, onComplete, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  if (!exercise) return null

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion + 1 < exercise.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Завершение упражнения
      calculateScore(newAnswers)
      setShowResult(true)
    }
  }

  const calculateScore = (finalAnswers) => {
    let correct = 0
    exercise.questions.forEach((question, index) => {
      const userAnswer = finalAnswers[index]
      if (exercise.type === 'writing' || exercise.type === 'fillblank') {
        if (userAnswer?.toLowerCase().trim() === question.correct?.toLowerCase().trim()) {
          correct++
        }
      } else {
        if (userAnswer === question.correct) {
          correct++
        }
      }
    })
    setScore(correct)
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setScore(0)
  }

  const handleFinish = () => {
    if (score >= exercise.questions.length * 0.7) {
      onComplete()
    } else {
      handleReset()
    }
  }

  if (showResult) {
    const percentage = Math.round((score / exercise.questions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className={styles.container}>
        <div className={styles.resultContainer}>
          <div className={`${styles.resultCard} ${passed ? styles.passed : styles.failed}`}>
            <div className={styles.resultIcon}>
              {passed ? '🎉' : '😔'}
            </div>
            <h2 className={styles.resultTitle}>
              {passed ? 'Отлично!' : 'Нужно повторить'}
            </h2>
            <p className={styles.resultScore}>
              Ваш результат: {score} из {exercise.questions.length} ({percentage}%)
            </p>
            <p className={styles.resultMessage}>
              {passed
                ? 'Вы успешно завершили упражнение!'
                : 'Для прохождения нужно набрать минимум 70%. Попробуйте еще раз!'}
            </p>
            <div className={styles.resultButtons}>
              <button onClick={handleReset} className={styles.retryBtn}>
                Попробовать снова
              </button>
              {passed && (
                <button onClick={handleFinish} className={styles.finishBtn}>
                  Завершить
                </button>
              )}
              <button onClick={onBack} className={styles.backBtn}>
                Назад к уроку
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.exerciseContainer}>
        <div className={styles.header}>
          <button onClick={onBack} className={styles.backButton}>
            ← Назад
          </button>
          <h2 className={styles.title}>{exercise.title}</h2>
          <div className={styles.progress}>
            {currentQuestion + 1} / {exercise.questions.length}
          </div>
        </div>

        <p className={styles.description}>{exercise.description}</p>

        <div className={styles.questionContainer}>
          {exercise.type === 'vocabulary' && (
            <VocabularyQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'grammar' && (
            <GrammarQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'pronunciation' && (
            <PronunciationQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'reading' && (
            <ReadingQuestion
              text={exercise.text}
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'writing' && (
            <WritingQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'fillblank' && (
            <FillBlankQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'ser-estar' && (
            <SerEstarQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'articles' && (
            <ArticlesQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${((currentQuestion + 1) / exercise.questions.length) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  )
}

function VocabularyQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.spanish}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={styles.optionBtn}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function GrammarQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.sentence}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={styles.optionBtn}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function PronunciationQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Как произносится слово: <strong>{question.word}</strong>?</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={styles.optionBtn}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function ReadingQuestion({ text, question, onAnswer }) {
  return (
    <div className={styles.question}>
      <div className={styles.readingText}>
        {text}
      </div>
      <h3 className={styles.questionText}>{question.question}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={styles.optionBtn}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function WritingQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAnswer(input)
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Переведите: <strong>{question.russian}</strong></h3>
      <form onSubmit={handleSubmit} className={styles.writingForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.writingInput}
          placeholder="Введите перевод на испанском"
          autoFocus
        />
        <button type="submit" className={styles.submitBtn}>
          Ответить
        </button>
      </form>
    </div>
  )
}

function FillBlankQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAnswer(input)
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.sentence}</h3>
      <p className={styles.hint}>Глагол: {question.verb}</p>
      <form onSubmit={handleSubmit} className={styles.writingForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.writingInput}
          placeholder="Введите правильную форму глагола"
          autoFocus
        />
        <button type="submit" className={styles.submitBtn}>
          Ответить
        </button>
      </form>
    </div>
  )
}

function SerEstarQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.sentence}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={styles.optionBtn}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function ArticlesQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Выберите правильный артикль для: <strong>{question.word}</strong></h3>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={styles.optionBtn}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ExerciseComponent
