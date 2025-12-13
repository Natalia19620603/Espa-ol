import { useState, useEffect, useMemo } from 'react'
import styles from './ExerciseComponent.module.css'

// Функция для перемешивания массива
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function ExerciseComponent({ exercise, onComplete, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
  const [userAnswer, setUserAnswer] = useState(null)
  const [feedbackTimeoutId, setFeedbackTimeoutId] = useState(null)

  // Перемешиваем опции для каждого вопроса один раз при загрузке
  const shuffledQuestions = useMemo(() => {
    if (!exercise || !exercise.questions) return []

    return exercise.questions.map(question => {
      if (!question.options) return question

      // Создаем массив с индексами и опциями
      const indexedOptions = question.options.map((option, index) => ({
        option,
        originalIndex: index
      }))

      // Перемешиваем
      const shuffled = shuffleArray(indexedOptions)

      // Находим новый индекс правильного ответа
      const newCorrectIndex = shuffled.findIndex(item => item.originalIndex === question.correct)

      return {
        ...question,
        options: shuffled.map(item => item.option),
        correct: newCorrectIndex
      }
    })
  }, [exercise])

  if (!exercise) return null

  const handleAnswer = (answer) => {
    // Для аудио упражнений (с exercise.words) просто переходим к следующему
    if (exercise.words) {
      proceedToNext(answer)
      return
    }

    const questions = shuffledQuestions.length > 0 ? shuffledQuestions : exercise.questions
    const currentQ = questions[currentQuestion]

    // Проверяем правильность ответа для multiple choice
    const isCorrect = (['vocabulary', 'grammar', 'ser-estar', 'articles', 'pronunciation', 'reading', 'conjugation', 'tense-choice', 'prepositions', 'pronouns', 'agreement', 'subjunctive', 'conditional', 'synonyms', 'antonyms', 'collocations', 'definitions', 'context', 'false-friends', 'idioms', 'word-family', 'matching', 'dialogue-practice', 'reading-comprehension'].includes(exercise.type))
      ? answer === currentQ.correct
      : true // для text input типов проверим позже

    setUserAnswer(answer)

    if (!isCorrect && ['vocabulary', 'grammar', 'ser-estar', 'articles', 'pronunciation', 'reading', 'conjugation', 'tense-choice', 'prepositions', 'pronouns', 'agreement', 'subjunctive', 'conditional', 'synonyms', 'antonyms', 'collocations', 'definitions', 'context', 'false-friends', 'idioms', 'word-family', 'matching', 'dialogue-practice', 'reading-comprehension'].includes(exercise.type)) {
      // Показываем правильный ответ
      setShowCorrectAnswer(true)
      const id = setTimeout(() => {
        setShowCorrectAnswer(false)
        setUserAnswer(null)
        proceedToNext(answer)
      }, 15000) // Показываем 15 секунд
      setFeedbackTimeoutId(id)
    } else {
      proceedToNext(answer)
    }
  }

  const handleSkipFeedback = () => {
    if (feedbackTimeoutId) {
      clearTimeout(feedbackTimeoutId)
      setFeedbackTimeoutId(null)
    }
    setShowCorrectAnswer(false)
    const currentAnswer = userAnswer
    setUserAnswer(null)
    proceedToNext(currentAnswer)
  }

  const proceedToNext = (answer) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    const totalQuestions = exercise.texts?.length || exercise.questions?.length || exercise.words?.length || 0
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Завершение упражнения
      calculateScore(newAnswers)
      setShowResult(true)
    }
  }

  const calculateScore = (finalAnswers) => {
    let correct = 0
    const items = exercise.texts || exercise.words || (shuffledQuestions.length > 0 ? shuffledQuestions : exercise.questions)
    items.forEach((question, index) => {
      const userAnswer = finalAnswers[index]

      // Audio pronunciation exercises - all answers are correct (just listening)
      if (exercise.words) {
        correct++
        return
      }

      // Text input types (need string comparison)
      if (['writing', 'fillblank', 'transformation', 'error-correction', 'word-formation', 'translation'].includes(exercise.type)) {
        const normalizedAnswer = userAnswer?.toLowerCase().trim()
        const normalizedCorrect = question.correct?.toLowerCase().trim()

        // Check if answer matches the main correct answer
        let isCorrect = normalizedAnswer === normalizedCorrect

        // If not, check alternatives if they exist
        if (!isCorrect && question.alternatives && Array.isArray(question.alternatives)) {
          isCorrect = question.alternatives.some(alt =>
            normalizedAnswer === alt?.toLowerCase().trim()
          )
        }

        if (isCorrect) {
          correct++
        }
      }
      // Word order (compare sentence)
      else if (exercise.type === 'word-order') {
        if (userAnswer?.toLowerCase().trim() === question.correct?.toLowerCase().trim()) {
          correct++
        }
      }
      // Categorization (compare JSON)
      else if (exercise.type === 'categorization') {
        try {
          const userCategories = JSON.parse(userAnswer || '{}')
          const correctCategories = question.correct
          let allCorrect = true
          for (const [word, category] of Object.entries(correctCategories)) {
            if (userCategories[word] !== category) {
              allCorrect = false
              break
            }
          }
          if (allCorrect) correct++
        } catch (e) {
          // Invalid JSON, incorrect answer
        }
      }
      // Multiple choice types (compare index)
      else {
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
    const totalQuestions = exercise.texts?.length || exercise.questions?.length || exercise.words?.length || 0
    if (score >= totalQuestions * 0.7) {
      onComplete()
    } else {
      handleReset()
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      // Remove the last answer from the answers array
      setAnswers(answers.slice(0, -1))
      // Reset any feedback states
      setShowCorrectAnswer(false)
      setUserAnswer(null)
    }
  }

  const handleNextQuestion = () => {
    const totalQuestions = exercise.texts?.length || exercise.questions?.length || exercise.words?.length || 0
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
      // Add null answer for skipped question
      setAnswers([...answers, null])
      // Reset any feedback states
      setShowCorrectAnswer(false)
      setUserAnswer(null)
    }
  }

  if (showResult) {
    const totalQuestions = exercise.texts?.length || exercise.questions?.length || exercise.words?.length || 0
    const percentage = Math.round((score / totalQuestions) * 100)
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
              Ваш результат: {score} из {totalQuestions} ({percentage}%)
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

  const totalQuestions = exercise.texts?.length || exercise.questions?.length || exercise.words?.length || 0

  return (
    <div className={styles.container}>
      <div className={styles.exerciseContainer}>
        <div className={styles.header}>
          <button onClick={onBack} className={styles.backButton}>
            ← Назад
          </button>
          <h2 className={styles.title}>{exercise.title}</h2>
          <div className={styles.progress}>
            {currentQuestion + 1} / {totalQuestions}
          </div>
        </div>

        <p className={styles.description}>{exercise.description}</p>

        {exercise.introAudio && (
          <div className={styles.introAudioContainer}>
            <button
              onClick={() => {
                const audio = new Audio(exercise.introAudio)
                audio.play()
              }}
              className={styles.introAudioBtn}
            >
              🔊 Прослушать общее произношение согласных
            </button>
          </div>
        )}

        <div className={styles.questionContainer}>
          {exercise.type === 'vocabulary' && (
            <VocabularyQuestion
              question={shuffledQuestions.length > 0 ? shuffledQuestions[currentQuestion] : exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              showCorrectAnswer={showCorrectAnswer}
              userAnswer={userAnswer}
            />
          )}
          {exercise.type === 'grammar' && (
            <GrammarQuestion
              question={shuffledQuestions.length > 0 ? shuffledQuestions[currentQuestion] : exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              showCorrectAnswer={showCorrectAnswer}
              userAnswer={userAnswer}
              onSkipFeedback={handleSkipFeedback}
            />
          )}
          {exercise.type === 'pronunciation' && exercise.words && (
            <AudioPronunciationQuestion
              word={exercise.words[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'pronunciation' && exercise.questions && (
            <PronunciationQuestion
              question={shuffledQuestions.length > 0 ? shuffledQuestions[currentQuestion] : exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              showCorrectAnswer={showCorrectAnswer}
              userAnswer={userAnswer}
            />
          )}
          {exercise.type === 'reading' && (
            <ReadingQuestion
              text={exercise.text}
              question={shuffledQuestions.length > 0 ? shuffledQuestions[currentQuestion] : exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              showCorrectAnswer={showCorrectAnswer}
              userAnswer={userAnswer}
            />
          )}
          {exercise.type === 'writing' && (
            <WritingQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              onSkipFeedback={handleSkipFeedback}
            />
          )}
          {exercise.type === 'fillblank' && (
            <FillBlankQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              onSkipFeedback={handleSkipFeedback}
            />
          )}
          {exercise.type === 'ser-estar' && (
            <SerEstarQuestion
              question={shuffledQuestions.length > 0 ? shuffledQuestions[currentQuestion] : exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              showCorrectAnswer={showCorrectAnswer}
              userAnswer={userAnswer}
            />
          )}
          {exercise.type === 'articles' && (
            <ArticlesQuestion
              question={shuffledQuestions.length > 0 ? shuffledQuestions[currentQuestion] : exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              showCorrectAnswer={showCorrectAnswer}
              userAnswer={userAnswer}
            />
          )}
          {/* Grammar Exercise Types */}
          {exercise.type === 'conjugation' && (
            <ConjugationQuestion
              question={shuffledQuestions.length > 0 ? shuffledQuestions[currentQuestion] : exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              showCorrectAnswer={showCorrectAnswer}
              userAnswer={userAnswer}
            />
          )}
          {exercise.type === 'word-order' && (
            <WordOrderQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'transformation' && (
            <TransformationQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'error-correction' && (
            <ErrorCorrectionQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              onSkipFeedback={handleSkipFeedback}
            />
          )}
          {exercise.type === 'tense-choice' && (
            <TenseChoiceQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'prepositions' && (
            <PrepositionsQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'pronouns' && (
            <PronounsQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'agreement' && (
            <AgreementQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'subjunctive' && (
            <SubjunctiveQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'conditional' && (
            <ConditionalQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {/* Vocabulary Exercise Types */}
          {exercise.type === 'synonyms' && (
            <SynonymsQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'antonyms' && (
            <AntonymsQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'collocations' && (
            <CollocationsQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'definitions' && (
            <DefinitionsQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'context' && (
            <ContextQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'word-formation' && (
            <WordFormationQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'categorization' && (
            <CategorizationQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'false-friends' && (
            <FalseFriendsQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'idioms' && (
            <IdiomsQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'word-family' && (
            <WordFamilyQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {/* Additional Exercise Types */}
          {exercise.type === 'matching' && (
            <MatchingQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'dialogue-practice' && (
            <DialoguePracticeQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'reading-comprehension' && (
            <ReadingComprehensionQuestion
              question={exercise.texts ? exercise.texts[currentQuestion] : exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          )}
          {exercise.type === 'translation' && (
            <TranslationQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
              exerciseId={exercise.id}
              currentQuestionIndex={currentQuestion}
            />
          )}
          {exercise.type === 'multi-part' && (
            <MultiPartExercise
              exercise={exercise}
              onComplete={onComplete}
              onBack={onBack}
            />
          )}
          {exercise.type === 'external' && (
            <ExternalExercise
              url={exercise.embedUrl || exercise.url}
              title={exercise.title}
              onComplete={onComplete}
            />
          )}
        </div>

        {exercise.type !== 'external' && exercise.type !== 'multi-part' && (
          <>
            <div className={styles.questionNavigation}>
              <button
                onClick={handlePreviousQuestion}
                className={styles.prevQuestionBtn}
                disabled={currentQuestion === 0}
              >
                ← НАЗАД
              </button>
              <div className={styles.questionCounter}>
                Вопрос {currentQuestion + 1} из {totalQuestions}
              </div>
              <button
                onClick={handleNextQuestion}
                className={styles.nextQuestionBtn}
                disabled={currentQuestion >= totalQuestions - 1}
              >
                ВПЕРЕД →
              </button>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${((currentQuestion + 1) / totalQuestions) * 100}%`
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function MultiPartExercise({ exercise, onComplete, onBack }) {
  const [currentPart, setCurrentPart] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  if (!exercise.parts || exercise.parts.length === 0) {
    return <div>Нет доступных заданий</div>
  }

  const part = exercise.parts[currentPart]
  const totalParts = exercise.parts.length
  const totalQuestionsInPart = part.questions?.length || 0

  // Подсчет общего количества вопросов во всех частях
  const totalQuestions = exercise.parts.reduce((sum, p) => sum + (p.questions?.length || 0), 0)
  const questionsCompletedBefore = exercise.parts.slice(0, currentPart).reduce((sum, p) => sum + (p.questions?.length || 0), 0)
  const globalQuestionNumber = questionsCompletedBefore + currentQuestion + 1

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, { partId: part.id, questionIndex: currentQuestion, answer }]
    setAnswers(newAnswers)

    if (currentQuestion + 1 < totalQuestionsInPart) {
      setCurrentQuestion(currentQuestion + 1)
    } else if (currentPart + 1 < totalParts) {
      // Переход к следующей части
      setCurrentPart(currentPart + 1)
      setCurrentQuestion(0)
    } else {
      // Все части завершены
      calculateScore(newAnswers)
      setShowResult(true)
    }
  }

  const calculateScore = (finalAnswers) => {
    let correct = 0
    exercise.parts.forEach((part) => {
      part.questions?.forEach((question, qIndex) => {
        const userAnswer = finalAnswers.find(a => a.partId === part.id && a.questionIndex === qIndex)
        if (!userAnswer) return

        if (['fillblank', 'transformation', 'translation'].includes(part.type)) {
          const normalizedAnswer = userAnswer.answer?.toLowerCase().trim()
          const normalizedCorrect = question.correct?.toLowerCase().trim()

          let isCorrect = normalizedAnswer === normalizedCorrect
          if (!isCorrect && question.alternatives && Array.isArray(question.alternatives)) {
            isCorrect = question.alternatives.some(alt => normalizedAnswer === alt?.toLowerCase().trim())
          }
          if (isCorrect) correct++
        } else if (part.type === 'question-formation') {
          const normalizedAnswer = userAnswer.answer?.toLowerCase().trim()
          const normalizedCorrect = question.correct?.toLowerCase().trim()

          let isCorrect = normalizedAnswer === normalizedCorrect
          if (!isCorrect && question.alternatives && Array.isArray(question.alternatives)) {
            isCorrect = question.alternatives.some(alt => normalizedAnswer === alt?.toLowerCase().trim())
          }
          if (isCorrect) correct++
        }
      })
    })
    setScore(correct)
  }

  const handleReset = () => {
    setCurrentPart(0)
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setScore(0)
  }

  const handleFinish = () => {
    if (score >= totalQuestions * 0.7) {
      onComplete()
    } else {
      handleReset()
    }
  }

  if (showResult) {
    const percentage = Math.round((score / totalQuestions) * 100)
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
              Ваш результат: {score} из {totalQuestions} ({percentage}%)
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
    <div>
      <div className={styles.partHeader}>
        <h3>{part.title}</h3>
        <p>{part.description}</p>
        <p className={styles.partProgress}>
          Часть {currentPart + 1} из {totalParts} | Вопрос {globalQuestionNumber} из {totalQuestions}
        </p>
      </div>

      {part.type === 'fillblank' && (
        <FillBlankQuestion
          question={part.questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
      {part.type === 'transformation' && (
        <TransformationQuestion
          question={part.questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
      {part.type === 'translation' && (
        <TranslationQuestion
          question={part.questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
      {part.type === 'question-formation' && (
        <QuestionFormationQuestion
          question={part.questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${(globalQuestionNumber / totalQuestions) * 100}%`
          }}
        />
      </div>
    </div>
  )
}

function QuestionFormationQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    setInput('')
    setShowFeedback(false)
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }, [question])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const normalizedInput = input.toLowerCase().trim()
      const normalizedCorrect = question.correct?.toLowerCase().trim()

      let isCorrect = normalizedInput === normalizedCorrect
      if (!isCorrect && question.alternatives && Array.isArray(question.alternatives)) {
        isCorrect = question.alternatives.some(alt => normalizedInput === alt?.toLowerCase().trim())
      }

      if (!isCorrect) {
        setShowFeedback(true)
        const id = setTimeout(() => {
          setShowFeedback(false)
          onAnswer(input)
          setInput('')
        }, 15000)
        setTimeoutId(id)
      } else {
        onAnswer(input)
        setInput('')
      }
    }
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Сформулируйте вопрос:</h3>
      <p className={styles.sentenceContext}>{question.russian}</p>
      {question.highlight && (
        <p className={styles.hint}>Подчеркнутое слово: <strong>{question.highlight}</strong></p>
      )}
      <form onSubmit={handleSubmit} className={styles.writingForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${styles.writingInput} ${showFeedback ? styles.wrongAnswer : ''}`}
          placeholder="Введите вопрос на испанском"
          autoFocus
          disabled={showFeedback}
        />
        <button type="submit" className={styles.submitBtn} disabled={showFeedback}>
          Ответить
        </button>
      </form>
      {showFeedback && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.correct}
        </p>
      )}
    </div>
  )
}

function VocabularyQuestion({ question, onAnswer, showCorrectAnswer, userAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.spanish}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isUserAnswer = userAnswer === index
          const isCorrectAnswer = question.correct === index
          const showFeedback = showCorrectAnswer && (isUserAnswer || isCorrectAnswer)

          return (
            <button
              key={index}
              onClick={() => !showCorrectAnswer && onAnswer(index)}
              className={`${styles.optionBtn} ${showFeedback ? (isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer) : ''}`}
              disabled={showCorrectAnswer}
            >
              {option}
              {showFeedback && isCorrectAnswer && ' ✓'}
              {showFeedback && isUserAnswer && !isCorrectAnswer && ' ✗'}
            </button>
          )
        })}
      </div>
      {showCorrectAnswer && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.options[question.correct]}
        </p>
      )}
    </div>
  )
}

function GrammarQuestion({ question, onAnswer, showCorrectAnswer, userAnswer, onSkipFeedback }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.sentence || question.question}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isUserAnswer = userAnswer === index
          const isCorrectAnswer = question.correct === index
          const showFeedback = showCorrectAnswer && (isUserAnswer || isCorrectAnswer)

          return (
            <button
              key={index}
              onClick={() => !showCorrectAnswer && onAnswer(index)}
              className={`${styles.optionBtn} ${showFeedback ? (isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer) : ''}`}
              disabled={showCorrectAnswer}
            >
              {option}
              {showFeedback && isCorrectAnswer && ' ✓'}
              {showFeedback && isUserAnswer && !isCorrectAnswer && ' ✗'}
            </button>
          )
        })}
      </div>
      {showCorrectAnswer && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.options[question.correct]}
        </p>
      )}
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

function ReadingQuestion({ text, question, onAnswer, showCorrectAnswer, userAnswer, onSkipFeedback }) {
  return (
    <div className={styles.question}>
      <div className={styles.readingText}>
        {text}
      </div>
      <h3 className={styles.questionText}>{question.question}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isUserAnswer = userAnswer === index
          const isCorrectAnswer = question.correct === index
          const showFeedback = showCorrectAnswer && (isUserAnswer || isCorrectAnswer)

          return (
            <button
              key={index}
              onClick={() => !showCorrectAnswer && onAnswer(index)}
              className={`${styles.optionBtn} ${showFeedback ? (isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer) : ''}`}
              disabled={showCorrectAnswer}
            >
              {option}
              {showFeedback && isCorrectAnswer && ' ✓'}
              {showFeedback && isUserAnswer && !isCorrectAnswer && ' ✗'}
            </button>
          )
        })}
      </div>
      {showCorrectAnswer && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.options[question.correct]}
        </p>
      )}
    </div>
  )
}

function WritingQuestion({ question, onAnswer, showCorrectAnswer, userAnswer, onSkipFeedback }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  // Сбросить состояние при изменении вопроса
  useEffect(() => {
    setInput('')
    setShowFeedback(false)
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }, [question])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        const id = setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 15000)
        setTimeoutId(id)
      } else {
        setInput('')
        onAnswer(input)
      }
    }
  }

  const handleSkip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setShowFeedback(false)
    const currentInput = input
    setInput('')
    onAnswer(currentInput)
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Переведите: <strong>{question.question || question.russian}</strong></h3>
      <form onSubmit={handleSubmit} className={styles.writingForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${styles.writingInput} ${showFeedback ? styles.wrongAnswer : ''}`}
          placeholder="Введите перевод на испанском"
          autoFocus
          disabled={showFeedback}
        />
        <button type="submit" className={styles.submitBtn} disabled={showFeedback}>
          Ответить
        </button>
      </form>
      {showFeedback && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.correct}
        </p>
      )}
    </div>
  )
}

function FillBlankQuestion({ question, onAnswer, onSkipFeedback }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  // Сбросить состояние при изменении вопроса
  useEffect(() => {
    setInput('')
    setShowFeedback(false)
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }, [question])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        const id = setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 15000)
        setTimeoutId(id)
      } else {
        setInput('')
        onAnswer(input)
      }
    }
  }

  const handleSkip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setShowFeedback(false)
    const currentInput = input
    setInput('')
    onAnswer(currentInput)
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
          className={`${styles.writingInput} ${showFeedback ? styles.wrongAnswer : ''}`}
          placeholder="Введите правильную форму глагола"
          autoFocus
          disabled={showFeedback}
        />
        <button type="submit" className={styles.submitBtn} disabled={showFeedback}>
          Ответить
        </button>
      </form>
      {showFeedback && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.correct}
        </p>
      )}
    </div>
  )
}

function SerEstarQuestion({ question, onAnswer, showCorrectAnswer, userAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.sentence}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isUserAnswer = userAnswer === index
          const isCorrectAnswer = question.correct === index
          const showFeedback = showCorrectAnswer && (isUserAnswer || isCorrectAnswer)

          return (
            <button
              key={index}
              onClick={() => !showCorrectAnswer && onAnswer(index)}
              className={`${styles.optionBtn} ${showFeedback ? (isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer) : ''}`}
              disabled={showCorrectAnswer}
            >
              {option}
              {showFeedback && isCorrectAnswer && ' ✓'}
              {showFeedback && isUserAnswer && !isCorrectAnswer && ' ✗'}
            </button>
          )
        })}
      </div>
      {showCorrectAnswer && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.options[question.correct]}
        </p>
      )}
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

// ===== GRAMMAR EXERCISE TYPES =====

function ConjugationQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>
        Проспрягайте глагол <strong>{question.verb}</strong> ({question.tense}):{' '}
        <strong>{question.pronoun}</strong>
      </h3>
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

function WordOrderQuestion({ question, onAnswer }) {
  const [selectedWords, setSelectedWords] = useState([])
  const [availableWords, setAvailableWords] = useState(question.words || [])
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // Сбросить состояние при изменении вопроса
  useEffect(() => {
    setSelectedWords([])
    setAvailableWords(question.words || [])
    setShowFeedback(false)
    setIsCorrect(false)
  }, [question])

  const handleWordClick = (word, index) => {
    if (showFeedback) return
    setSelectedWords([...selectedWords, word])
    setAvailableWords(availableWords.filter((_, i) => i !== index))
  }

  const handleRemoveWord = (index) => {
    if (showFeedback) return
    const word = selectedWords[index]
    setSelectedWords(selectedWords.filter((_, i) => i !== index))
    setAvailableWords([...availableWords, word])
  }

  // Функция для нормализации ответа (убрать личные местоимения)
  const normalizeAnswer = (answer) => {
    const pronouns = ['yo', 'tú', 'él', 'ella', 'usted', 'nosotros', 'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'ustedes']
    const words = answer.toLowerCase().trim().split(/\s+/)
    return words.filter(word => !pronouns.includes(word)).join(' ')
  }

  const handleSubmit = () => {
    const userAnswer = selectedWords.join(' ')
    const normalizedUserAnswer = normalizeAnswer(userAnswer)
    const normalizedCorrectAnswer = normalizeAnswer(question.correct.join ? question.correct.join(' ') : question.correct)

    const correct = normalizedUserAnswer === normalizedCorrectAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    setTimeout(() => {
      onAnswer(userAnswer)
      setShowFeedback(false)
      setSelectedWords([])
      setAvailableWords(question.words || [])
    }, 15000)
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Расставьте слова в правильном порядке:</h3>
      <div className={styles.wordOrderContainer}>
        <div className={styles.selectedWords}>
          {selectedWords.map((word, index) => (
            <button
              key={index}
              onClick={() => handleRemoveWord(index)}
              className={`${styles.selectedWord} ${showFeedback ? (isCorrect ? styles.correctAnswer : styles.wrongAnswer) : ''}`}
              disabled={showFeedback}
            >
              {word} {!showFeedback && '✕'}
            </button>
          ))}
        </div>
        <div className={styles.availableWords}>
          {availableWords.map((word, index) => (
            <button
              key={index}
              onClick={() => handleWordClick(word, index)}
              className={styles.wordBtn}
              disabled={showFeedback}
            >
              {word}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={selectedWords.length === 0 || showFeedback}
          className={styles.submitBtn}
        >
          Проверить
        </button>
        {showFeedback && !isCorrect && (
          <p className={styles.correctAnswerText}>
            Правильный ответ: {question.correct.join ? question.correct.join(' ') : question.correct}
          </p>
        )}
        {showFeedback && isCorrect && (
          <p className={styles.correctAnswerText} style={{color: 'green'}}>
            Правильно! ✓
          </p>
        )}
      </div>
    </div>
  )
}

function TransformationQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  // Сбросить состояние при изменении вопроса
  useEffect(() => {
    setInput('')
    setShowFeedback(false)
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }, [question])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        const id = setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 15000)
        setTimeoutId(id)
      } else {
        setInput('')
        onAnswer(input)
      }
    }
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.instruction}</h3>
      <p className={styles.sentenceToTransform}>{question.sentence}</p>
      <form onSubmit={handleSubmit} className={styles.writingForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${styles.writingInput} ${showFeedback ? styles.wrongAnswer : ''}`}
          placeholder="Введите трансформированное предложение"
          autoFocus
          disabled={showFeedback}
        />
        <button type="submit" className={styles.submitBtn} disabled={showFeedback}>
          Ответить
        </button>
      </form>
      {showFeedback && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.correct}
        </p>
      )}
    </div>
  )
}

function ErrorCorrectionQuestion({ question, onAnswer, onSkipFeedback }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  // Сбросить состояние при изменении вопроса
  useEffect(() => {
    setInput('')
    setShowFeedback(false)
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }, [question])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        const id = setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 15000)
        setTimeoutId(id)
      } else {
        setInput('')
        onAnswer(input)
      }
    }
  }

  const handleSkip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setShowFeedback(false)
    const currentInput = input
    setInput('')
    onAnswer(currentInput)
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Найдите и исправьте ошибку:</h3>
      <p className={styles.errorSentence}>{question.incorrect || question.sentence}</p>
      <form onSubmit={handleSubmit} className={styles.writingForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${styles.writingInput} ${showFeedback ? styles.wrongAnswer : ''}`}
          placeholder="Введите исправленное предложение"
          autoFocus
          disabled={showFeedback}
        />
        <button type="submit" className={styles.submitBtn} disabled={showFeedback}>
          Ответить
        </button>
      </form>
      {showFeedback && (
        <>
          <p className={styles.correctAnswerText}>
            Правильный ответ: {question.correct}
          </p>
          {question.explanation && (
            <p className={styles.explanationText}>
              💡 {question.explanation}
            </p>
          )}
        </>
      )}
    </div>
  )
}

function TenseChoiceQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Выберите правильное время для предложения:</h3>
      <p className={styles.contextSentence}>{question.context}</p>
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

function PrepositionsQuestion({ question, onAnswer }) {
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

function PronounsQuestion({ question, onAnswer }) {
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

function AgreementQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Выберите правильную форму согласования:</h3>
      <p className={styles.sentenceContext}>{question.sentence}</p>
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

function SubjunctiveQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.sentence}</h3>
      <p className={styles.hint}>💡 {question.hint}</p>
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

function ConditionalQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Выберите правильную форму для условного предложения:</h3>
      <p className={styles.conditionalSentence}>{question.sentence}</p>
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

// ===== VOCABULARY EXERCISE TYPES =====

function SynonymsQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>
        Выберите синоним к слову: <strong>{question.word}</strong>
      </h3>
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

function AntonymsQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>
        Выберите антоним к слову: <strong>{question.word}</strong>
      </h3>
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

function CollocationsQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>
        Выберите правильное словосочетание: <strong>{question.word}</strong> + ...
      </h3>
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

function DefinitionsQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Какое слово соответствует определению:</h3>
      <p className={styles.definition}>{question.definition}</p>
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

function ContextQuestion({ question, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index)
    setShowFeedback(true)

    // Автоматически переходим к следующему вопросу через 15 секунд
    setTimeout(() => {
      setShowFeedback(false)
      setSelectedAnswer(null)
      onAnswer(index)
    }, 15000)
  }

  const getButtonClass = (index) => {
    if (!showFeedback) {
      return styles.optionBtn
    }

    // Показываем правильный ответ зеленым
    if (index === question.correct) {
      return `${styles.optionBtn} ${styles.correctAnswer}`
    }

    // Показываем выбранный неправильный ответ красным
    if (index === selectedAnswer && index !== question.correct) {
      return `${styles.optionBtn} ${styles.wrongAnswer}`
    }

    return styles.optionBtn
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Выберите слово, подходящее по контексту:</h3>
      {question.context && (
        <div className={styles.contextBadge}>
          {question.context}
        </div>
      )}
      <p className={styles.contextSentence}>{question.sentence}</p>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && handleAnswerClick(index)}
            className={getButtonClass(index)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function WordFormationQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  // Сбросить состояние при изменении вопроса
  useEffect(() => {
    setInput('')
    setShowFeedback(false)
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }, [question])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        const id = setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 15000)
        setTimeoutId(id)
      } else {
        setInput('')
        onAnswer(input)
      }
    }
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.instruction}</h3>
      <p className={styles.baseWord}>
        Базовое слово: <strong>{question.baseWord}</strong>
      </p>
      <form onSubmit={handleSubmit} className={styles.writingForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${styles.writingInput} ${showFeedback ? styles.wrongAnswer : ''}`}
          placeholder="Введите образованное слово"
          autoFocus
          disabled={showFeedback}
        />
        <button type="submit" className={styles.submitBtn} disabled={showFeedback}>
          Ответить
        </button>
      </form>
      {showFeedback && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.correct}
        </p>
      )}
    </div>
  )
}

function CategorizationQuestion({ question, onAnswer }) {
  const [categories, setCategories] = useState({})
  const [availableWords, setAvailableWords] = useState(question.words || [])

  const handleCategoryClick = (word, category) => {
    setCategories({
      ...categories,
      [word]: category
    })
    setAvailableWords(availableWords.filter(w => w !== word))
  }

  const handleSubmit = () => {
    onAnswer(JSON.stringify(categories))
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Распределите слова по категориям:</h3>
      <div className={styles.categorizationContainer}>
        {question.categories.map((category, catIndex) => (
          <div key={catIndex} className={styles.category}>
            <h4>{category}</h4>
            <div className={styles.categoryWords}>
              {Object.entries(categories)
                .filter(([_, cat]) => cat === category)
                .map(([word]) => (
                  <span key={word} className={styles.categorizedWord}>
                    {word}
                  </span>
                ))}
            </div>
          </div>
        ))}
        <div className={styles.availableWords}>
          {availableWords.map((word, index) => (
            <div key={index} className={styles.wordWithCategories}>
              <span className={styles.word}>{word}</span>
              {question.categories.map((category, catIndex) => (
                <button
                  key={catIndex}
                  onClick={() => handleCategoryClick(word, category)}
                  className={styles.categoryBtn}
                >
                  → {category}
                </button>
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={availableWords.length > 0}
          className={styles.submitBtn}
        >
          Проверить
        </button>
      </div>
    </div>
  )
}

function FalseFriendsQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>
        Что означает испанское слово <strong>{question.spanishWord}</strong>?
      </h3>
      <p className={styles.hint}>⚠️ Осторожно, ложный друг переводчика!</p>
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

function IdiomsQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Что означает выражение:</h3>
      <p className={styles.idiom}><strong>{question.idiom}</strong></p>
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

function WordFamilyQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>
        Выберите слово из той же семьи, что и: <strong>{question.word}</strong>
      </h3>
      <p className={styles.hint}>💡 Слова одного корня</p>
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

// ===== ADDITIONAL EXERCISE TYPES =====

function MatchingQuestion({ question, onAnswer }) {
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

function DialoguePracticeQuestion({ question, onAnswer }) {
  return (
    <div className={styles.question}>
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

function ReadingComprehensionQuestion({ question, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index)
    setShowFeedback(true)

    // Автоматически переходим к следующему вопросу через 15 секунд
    setTimeout(() => {
      setShowFeedback(false)
      setSelectedAnswer(null)
      onAnswer(index)
    }, 15000)
  }

  const getButtonClass = (index) => {
    if (!showFeedback) {
      return styles.optionBtn
    }

    // Показываем правильный ответ зеленым
    if (index === question.correct) {
      return `${styles.optionBtn} ${styles.correctAnswer}`
    }

    // Показываем выбранный неправильный ответ красным
    if (index === selectedAnswer && index !== question.correct) {
      return `${styles.optionBtn} ${styles.wrongAnswer}`
    }

    return styles.optionBtn
  }

  return (
    <div className={styles.question}>
      {question.text && (
        <div className={styles.readingText}>
          <p>{question.text}</p>
        </div>
      )}
      <h3 className={styles.questionText}>{question.question}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && handleAnswerClick(index)}
            className={getButtonClass(index)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function TranslationQuestion({ question, onAnswer, exerciseId, currentQuestionIndex = 0 }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  // Сбросить состояние при изменении вопроса
  useEffect(() => {
    setInput('')
    setShowFeedback(false)
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }, [question])

  // Функция для нормализации ответа (убрать личные местоимения и лишние пробелы)
  const normalizeAnswer = (answer) => {
    const pronouns = ['yo', 'tú', 'él', 'ella', 'usted', 'nosotros', 'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'ustedes']
    // Убираем лишние пробелы и приводим к нижнему регистру
    const normalized = answer.toLowerCase().trim().replace(/\s+/g, ' ')
    const words = normalized.split(/\s+/)
    // Удаляем личные местоимения только если они стоят в начале предложения или после вопросительного знака
    const filtered = words.filter((word, index) => {
      // Проверяем, является ли слово личным местоимением
      if (pronouns.includes(word)) {
        // Оставляем местоимение только если оно не в начале и предыдущее слово не "¿"
        return index > 0 && words[index - 1] !== '¿'
      }
      return true
    })
    return filtered.join(' ')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const normalizedInput = normalizeAnswer(input)
      const normalizedCorrect = normalizeAnswer(question.correct)

      // Проверяем основной ответ
      let isCorrect = normalizedInput === normalizedCorrect

      // Если не совпадает, проверяем альтернативы
      if (!isCorrect && question.alternatives && Array.isArray(question.alternatives)) {
        isCorrect = question.alternatives.some(alt => normalizeAnswer(alt) === normalizedInput)
      }

      if (!isCorrect) {
        setShowFeedback(true)
        const id = setTimeout(() => {
          setShowFeedback(false)
          onAnswer(input)
          setInput('')
        }, 15000)
        setTimeoutId(id)
      } else {
        onAnswer(input)
        setInput('')
      }
    }
  }

  const handleSkipFeedback = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setShowFeedback(false)
    onAnswer(input)
    setInput('')
  }

  // Определяем текст для заголовка в зависимости от ID упражнения и номера вопроса
  let questionPrefix = 'Переведите'

  if (exerciseId === 'ex-1-4-test') {
    // Упражнение TEST с тремя частями
    if (currentQuestionIndex < 15) {
      questionPrefix = 'Часть 1: Измените род и/или число'
    } else if (currentQuestionIndex < 30) {
      questionPrefix = 'Часть 2: SER или ESTAR'
    } else {
      questionPrefix = 'Часть 3: Перевод'
    }
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{questionPrefix}: <strong>{question.russian}</strong></h3>
      <form onSubmit={handleSubmit} className={styles.writingForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${styles.writingInput} ${showFeedback ? styles.wrongAnswer : ''}`}
          placeholder="Введите перевод на испанском"
          autoFocus
          disabled={showFeedback}
        />
        <button type="submit" className={styles.submitBtn} disabled={showFeedback}>
          Ответить
        </button>
      </form>
      {showFeedback && (
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.correct}
        </p>
      )}
    </div>
  )
}

function AudioPronunciationQuestion({ word, onAnswer }) {
  const [audio, setAudio] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = () => {
    if (word.audioUrl) {
      // Останавливаем предыдущее аудио если оно играет
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }

      const newAudio = new Audio(word.audioUrl)
      newAudio.onended = () => setIsPlaying(false)
      newAudio.play()
      setAudio(newAudio)
      setIsPlaying(true)
    }
  }

  const stopAudio = () => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
    }
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>
        <strong>{word.word}</strong>
      </h3>
      <p className={styles.pronunciation}>
        Произношение: {word.pronunciation}
      </p>
      {word.audioUrl && (
        <div className={styles.audioControls}>
          <button onClick={playAudio} className={styles.audioBtn} disabled={isPlaying}>
            🔊 Прослушать
          </button>
          {isPlaying && (
            <button onClick={stopAudio} className={styles.stopBtn}>
              ⏹ Стоп
            </button>
          )}
        </div>
      )}
      <div className={styles.nextBtnContainer}>
        <button onClick={() => onAnswer(0)} className={styles.nextBtn}>
          Далее →
        </button>
      </div>
    </div>
  )
}

function ExternalExercise({ url, title, onComplete }) {
  return (
    <div className={styles.externalExercise}>
      <div className={styles.externalDescription}>
        <p>Интерактивное упражнение открывается во внешнем окне. После выполнения нажмите кнопку "Завершить".</p>
      </div>
      <div className={styles.iframeContainer}>
        <iframe
          src={url}
          className={styles.externalIframe}
          title={title}
          allowFullScreen
        />
      </div>
      <div className={styles.externalActions}>
        <button onClick={() => onComplete()} className={styles.completeBtn}>
          Завершить упражнение
        </button>
      </div>
    </div>
  )
}

export default ExerciseComponent
