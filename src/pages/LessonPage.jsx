import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { lessons, exercises as exercisesData } from '../data/lessonsData'
import ExerciseComponent from '../components/ExerciseComponent'
import AudioPlayer from '../components/AudioPlayer'
import PronunciationRecorder from '../components/PronunciationRecorder'
import styles from './LessonPage.module.css'

function LessonPage() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('grammar')
  const [currentExercise, setCurrentExercise] = useState(null)
  const { lessonId } = useParams()
  const navigate = useNavigate()

  const lesson = lessons[lessonId]

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      navigate('/login')
    }
  }, [navigate])

  const handleExerciseClick = (exerciseId) => {
    setCurrentExercise(exerciseId)
    setActiveTab('exercises')
  }

  const handleExerciseComplete = (exerciseId) => {
    // Сохранение прогресса
    const progress = JSON.parse(localStorage.getItem('progress') || '{}')
    if (!progress[lessonId]) {
      progress[lessonId] = { completed: false, exercisesCompleted: 0 }
    }

    // Обновление счетчика выполненных упражнений
    const completedExercises = new Set(progress[lessonId].completedExerciseIds || [])
    completedExercises.add(exerciseId)
    progress[lessonId].completedExerciseIds = Array.from(completedExercises)
    progress[lessonId].exercisesCompleted = completedExercises.size

    // Проверка завершения урока
    if (completedExercises.size === lesson.exercises.length) {
      progress[lessonId].completed = true
    }

    localStorage.setItem('progress', JSON.stringify(progress))
    setCurrentExercise(null)
  }

  const renderMarkdown = (text) => {
    if (!text) return null

    // Простой парсер markdown
    return text.split('\n').map((line, index) => {
      // Заголовки
      if (line.startsWith('# ')) {
        return <h2 key={index} className={styles.mdH2}>{line.substring(2)}</h2>
      }
      if (line.startsWith('## ')) {
        return <h3 key={index} className={styles.mdH3}>{line.substring(3)}</h3>
      }

      // Жирный текст
      if (line.includes('**')) {
        const parts = line.split('**')
        return (
          <p key={index} className={styles.mdP}>
            {parts.map((part, i) =>
              i % 2 === 0 ? part : <strong key={i}>{part}</strong>
            )}
          </p>
        )
      }

      // Списки
      if (line.startsWith('- ')) {
        return <li key={index} className={styles.mdLi}>{line.substring(2)}</li>
      }

      // Таблицы (упрощенно)
      if (line.startsWith('|')) {
        const cells = line.split('|').filter(cell => cell.trim())
        return (
          <tr key={index}>
            {cells.map((cell, i) => (
              <td key={i} className={styles.mdTd}>{cell.trim()}</td>
            ))}
          </tr>
        )
      }

      // Обычный текст
      if (line.trim()) {
        return <p key={index} className={styles.mdP}>{line}</p>
      }

      return <br key={index} />
    })
  }

  if (!user || !lesson) {
    return null
  }

  if (currentExercise) {
    const exercise = exercisesData[currentExercise]
    return (
      <div className={styles.container}>
        <ExerciseComponent
          exercise={exercise}
          onComplete={() => handleExerciseComplete(currentExercise)}
          onBack={() => setCurrentExercise(null)}
        />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          onClick={() => navigate(`/module/${lesson.moduleId}`)}
          className={styles.backBtn}
        >
          ← Назад к модулю
        </button>
        <h1 className={styles.title}>{lesson.title}</h1>
      </header>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'grammar' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('grammar')}
        >
          📚 Грамматика
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'vocabulary' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          📝 Словарь
        </button>
        {lesson.readingText && (
          <button
            className={`${styles.tab} ${activeTab === 'reading' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('reading')}
          >
            📖 Чтение
          </button>
        )}
        {lesson.dialogues && lesson.dialogues.length > 0 && (
          <button
            className={`${styles.tab} ${activeTab === 'dialogues' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('dialogues')}
          >
            💬 Диалоги
          </button>
        )}
        {lesson.culturalNotes && (
          <button
            className={`${styles.tab} ${activeTab === 'culture' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('culture')}
          >
            🌍 Культура
          </button>
        )}
        <button
          className={`${styles.tab} ${activeTab === 'exercises' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('exercises')}
        >
          ✏️ Упражнения
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'pronunciation' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('pronunciation')}
        >
          🎙️ Произношение
        </button>
      </div>

      <main className={styles.main}>
        {activeTab === 'grammar' && (
          <div className={styles.grammarSection}>
            <h2 className={styles.sectionTitle}>{lesson.grammar?.title}</h2>
            <div className={styles.grammarContent}>
              {renderMarkdown(lesson.grammar?.content)}
            </div>

            {lesson.grammar?.examples && lesson.grammar.examples.length > 0 && (
              <div className={styles.examplesSection}>
                <h3 className={styles.subsectionTitle}>Примеры:</h3>
                {lesson.grammar.examples.map((example, index) => (
                  <div key={index} className={styles.exampleCard}>
                    <div className={styles.spanish}>{example.spanish}</div>
                    <div className={styles.translation}>{example.translation}</div>
                    {example.pronunciation && (
                      <div className={styles.pronunciation}>{example.pronunciation}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'vocabulary' && (
          <div className={styles.vocabularySection}>
            <h2 className={styles.sectionTitle}>Новые слова</h2>
            <div className={styles.vocabularyList}>
              {lesson.vocabulary && lesson.vocabulary.map((item, index) => (
                <div key={index} className={styles.vocabularyCard}>
                  <div className={styles.vocabularyWord}>{item.word}</div>
                  <div className={styles.vocabularyTranslation}>{item.translation}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reading' && lesson.readingText && (
          <div className={styles.readingSection}>
            <h2 className={styles.sectionTitle}>{lesson.readingText.title}</h2>

            {/* Аудио для текста */}
            {lesson.readingText.audioUrl && (
              <AudioPlayer
                audioUrl={lesson.readingText.audioUrl}
                text={lesson.readingText.content}
                subtitles={lesson.readingText.subtitles || []}
              />
            )}

            <div className={styles.readingContent}>
              <div className={styles.spanishText}>
                {lesson.readingText.content.split('\n').map((paragraph, index) => (
                  paragraph.trim() && <p key={index}>{paragraph}</p>
                ))}
              </div>
              {lesson.readingText.translation && (
                <div className={styles.translationHint}>
                  <details>
                    <summary>Показать перевод</summary>
                    <p>{lesson.readingText.translation}</p>
                  </details>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'dialogues' && lesson.dialogues && (
          <div className={styles.dialoguesSection}>
            <h2 className={styles.sectionTitle}>Диалоги</h2>
            {lesson.dialogues.map((dialogue, index) => (
              <div key={index} className={styles.dialogueCard}>
                <h3 className={styles.dialogueTitle}>{dialogue.title}</h3>
                {dialogue.audioUrl && (
                  <AudioPlayer
                    audioUrl={dialogue.audioUrl}
                    text={dialogue.lines?.map(l => l.text).join('\n')}
                  />
                )}
                <div className={styles.dialogueContent}>
                  {dialogue.lines?.map((line, lineIndex) => (
                    <div key={lineIndex} className={styles.dialogueLine}>
                      <span className={styles.speaker}>{line.speaker}:</span>
                      <span className={styles.dialogueText}>{line.text}</span>
                      {line.translation && (
                        <span className={styles.dialogueTranslation}>({line.translation})</span>
                      )}
                    </div>
                  ))}
                </div>
                {dialogue.translation && (
                  <div className={styles.dialogueFullTranslation}>
                    <details>
                      <summary>Показать полный перевод</summary>
                      <p>{dialogue.translation}</p>
                    </details>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'culture' && lesson.culturalNotes && (
          <div className={styles.cultureSection}>
            <h2 className={styles.sectionTitle}>Культурные заметки</h2>
            <div className={styles.cultureContent}>
              {typeof lesson.culturalNotes === 'string' ? (
                renderMarkdown(lesson.culturalNotes)
              ) : (
                <>
                  {lesson.culturalNotes.title && (
                    <h3 className={styles.cultureTitle}>{lesson.culturalNotes.title}</h3>
                  )}
                  {lesson.culturalNotes.content && (
                    <div className={styles.cultureText}>
                      {renderMarkdown(lesson.culturalNotes.content)}
                    </div>
                  )}
                  {lesson.culturalNotes.facts && lesson.culturalNotes.facts.length > 0 && (
                    <div className={styles.cultureFacts}>
                      <h4>Интересные факты:</h4>
                      <ul>
                        {lesson.culturalNotes.facts.map((fact, index) => (
                          <li key={index}>{fact}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === 'pronunciation' && (
          <div className={styles.pronunciationSection}>
            <h2 className={styles.sectionTitle}>Практика произношения</h2>
            <p className={styles.pronunciationDescription}>
              Прочитайте текст вслух и запишите свое произношение. Сравните с оригиналом.
            </p>

            {lesson.readingText && (
              <PronunciationRecorder text={lesson.readingText.content} />
            )}

            {lesson.grammar?.examples && lesson.grammar.examples.length > 0 && (
              <div className={styles.examplesPronunciation}>
                <h3 className={styles.subsectionTitle}>Примеры для практики:</h3>
                {lesson.grammar.examples.map((example, index) => (
                  <div key={index} className={styles.pronunciationExample}>
                    <PronunciationRecorder text={example.spanish} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'exercises' && (
          <div className={styles.exercisesSection}>
            <h2 className={styles.sectionTitle}>Упражнения</h2>
            <div className={styles.exercisesList}>
              {lesson.exercises && lesson.exercises.map((exerciseId, index) => {
                const exercise = exercisesData[exerciseId]
                if (!exercise) return null

                const progress = JSON.parse(localStorage.getItem('progress') || '{}')
                const lessonProgress = progress[lessonId] || {}
                const isCompleted = (lessonProgress.completedExerciseIds || []).includes(exerciseId)

                return (
                  <div
                    key={exerciseId}
                    className={`${styles.exerciseCard} ${isCompleted ? styles.completed : ''}`}
                    onClick={() => handleExerciseClick(exerciseId)}
                  >
                    <div className={styles.exerciseNumber}>{index + 1}</div>
                    <div className={styles.exerciseInfo}>
                      <h3 className={styles.exerciseTitle}>{exercise.title}</h3>
                      <p className={styles.exerciseDescription}>{exercise.description}</p>
                      <span className={styles.exerciseType}>
                        Тип: {getExerciseTypeName(exercise.type)}
                      </span>
                    </div>
                    {isCompleted && (
                      <div className={styles.completedBadge}>✓</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

function getExerciseTypeName(type) {
  const types = {
    vocabulary: 'Словарный запас',
    grammar: 'Грамматика',
    reading: 'Чтение',
    writing: 'Письмо',
    pronunciation: 'Произношение',
    fillblank: 'Заполнение пропусков',
    'ser-estar': 'SER vs ESTAR',
    articles: 'Артикли',
    // Grammar types
    conjugation: 'Спряжение',
    'word-order': 'Порядок слов',
    transformation: 'Трансформация',
    'error-correction': 'Исправление ошибок',
    'tense-choice': 'Выбор времени',
    prepositions: 'Предлоги',
    pronouns: 'Местоимения',
    agreement: 'Согласование',
    subjunctive: 'Сослагательное наклонение',
    conditional: 'Условное наклонение',
    // Vocabulary types
    synonyms: 'Синонимы',
    antonyms: 'Антонимы',
    collocations: 'Словосочетания',
    definitions: 'Определения',
    context: 'Контекст',
    'word-formation': 'Словообразование',
    categorization: 'Категоризация',
    'false-friends': 'Ложные друзья переводчика',
    idioms: 'Идиомы',
    'word-family': 'Словарные семьи',
    // Additional types
    matching: 'Соответствие',
    'dialogue-practice': 'Практика диалогов',
    'reading-comprehension': 'Понимание прочитанного',
    translation: 'Перевод'
  }
  return types[type] || type
}

export default LessonPage
