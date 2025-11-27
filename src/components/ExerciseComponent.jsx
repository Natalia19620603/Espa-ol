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

    const totalQuestions = exercise.texts?.length || exercise.questions?.length || 0
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
    const items = exercise.texts || exercise.questions
    items.forEach((question, index) => {
      const userAnswer = finalAnswers[index]

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
    const totalQuestions = exercise.texts?.length || exercise.questions?.length || 0
    if (score >= totalQuestions * 0.7) {
      onComplete()
    } else {
      handleReset()
    }
  }

  if (showResult) {
    const totalQuestions = exercise.texts?.length || exercise.questions?.length || 0
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

  const totalQuestions = exercise.texts?.length || exercise.questions?.length || 0

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
          {/* Grammar Exercise Types */}
          {exercise.type === 'conjugation' && (
            <ConjugationQuestion
              question={exercise.questions[currentQuestion]}
              onAnswer={handleAnswer}
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

  const handleSubmit = (e) => {
    e.preventDefault()
    onAnswer(input)
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
          className={styles.writingInput}
          placeholder="Введите трансформированное предложение"
          autoFocus
        />
        <button type="submit" className={styles.submitBtn}>
          Ответить
        </button>
      </form>
    </div>
  )
}

function ErrorCorrectionQuestion({ question, onAnswer }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAnswer(input)
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
          className={styles.writingInput}
          placeholder="Введите исправленное предложение"
          autoFocus
        />
        <button type="submit" className={styles.submitBtn}>
          Ответить
        </button>
      </form>
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

  const handleSubmit = (e) => {
    e.preventDefault()
    onAnswer(input)
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
          className={styles.writingInput}
          placeholder="Введите образованное слово"
          autoFocus
        />
        <button type="submit" className={styles.submitBtn}>
          Ответить
        </button>
      </form>
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

function TranslationQuestion({ question, onAnswer }) {
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

export default ExerciseComponent
