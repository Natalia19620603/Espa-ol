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
      setTimeout(() => {
        setShowCorrectAnswer(false)
        setUserAnswer(null)
        proceedToNext(answer)
      }, 2000) // Показываем 2 секунды
    } else {
      proceedToNext(answer)
    }
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
        if (userAnswer?.toLowerCase().trim() === question.correct?.toLowerCase().trim()) {
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
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`
            }}
          />
        </div>
      </div>
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

function GrammarQuestion({ question, onAnswer, showCorrectAnswer, userAnswer }) {
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

function WritingQuestion({ question, onAnswer, showCorrectAnswer, userAnswer }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 2000)
      } else {
        onAnswer(input)
      }
    }
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Переведите: <strong>{question.russian}</strong></h3>
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

function FillBlankQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 2000)
      } else {
        onAnswer(input)
      }
    }
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

  const handleWordClick = (word, index) => {
    setSelectedWords([...selectedWords, word])
    setAvailableWords(availableWords.filter((_, i) => i !== index))
  }

  const handleRemoveWord = (index) => {
    const word = selectedWords[index]
    setSelectedWords(selectedWords.filter((_, i) => i !== index))
    setAvailableWords([...availableWords, word])
  }

  const handleSubmit = () => {
    const answer = selectedWords.join(' ')
    onAnswer(answer)
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
              className={styles.selectedWord}
            >
              {word} ✕
            </button>
          ))}
        </div>
        <div className={styles.availableWords}>
          {availableWords.map((word, index) => (
            <button
              key={index}
              onClick={() => handleWordClick(word, index)}
              className={styles.wordBtn}
            >
              {word}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={selectedWords.length === 0}
          className={styles.submitBtn}
        >
          Проверить
        </button>
      </div>
    </div>
  )
}

function TransformationQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 2000)
      } else {
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

function ErrorCorrectionQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 2000)
      } else {
        onAnswer(input)
      }
    }
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>Найдите и исправьте ошибку:</h3>
      <p className={styles.errorSentence}>{question.sentence}</p>
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
        <p className={styles.correctAnswerText}>
          Правильный ответ: {question.correct}
        </p>
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

function WordFormationQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        setTimeout(() => {
          setShowFeedback(false)
          setInput('')
          onAnswer(input)
        }, 2000)
      } else {
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

function TranslationQuestion({ question, onAnswer, exerciseId, currentQuestionIndex = 0 }) {
  const [input, setInput] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const isCorrect = input.toLowerCase().trim() === question.correct?.toLowerCase().trim()
      if (!isCorrect) {
        setShowFeedback(true)
        setTimeout(() => {
          setShowFeedback(false)
          onAnswer(input)
          setInput('')
        }, 2000)
      } else {
        onAnswer(input)
      }
    }
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
  const playAudio = () => {
    if (word.audioUrl) {
      const audio = new Audio(word.audioUrl)
      audio.play()
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
        <button onClick={playAudio} className={styles.audioBtn}>
          🔊 Прослушать
        </button>
      )}
      <div className={styles.nextBtnContainer}>
        <button onClick={() => onAnswer(0)} className={styles.nextBtn}>
          Далее →
        </button>
      </div>
    </div>
  )
}

export default ExerciseComponent
