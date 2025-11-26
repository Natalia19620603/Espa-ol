import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VideoPlayer from '../components/VideoPlayer'
import AudioPlayer from '../components/AudioPlayer'
import styles from './ListeningPage.module.css'

// Данные для аудирования (в будущем можно перенести в отдельный файл)
const listeningMaterials = {
  videos: [
    {
      id: 'video-1',
      title: 'Диалог в ресторане',
      level: 'A1',
      description: 'Простой диалог между официантом и посетителем',
      videoUrl: 'https://www.youtube.com/embed/uPEG68DzO0k', // Пример URL (замените на реальный)
      subtitles: [
        { start: 0, end: 3, text: '¡Buenas tardes! ¿Una mesa para cuántas personas?' },
        { start: 3, end: 5, text: 'Para dos personas, por favor.' },
        { start: 5, end: 8, text: 'Perfecto. Síganme, por favor.' }
      ],
      questions: [
        {
          question: '¿Cuántas personas necesitan una mesa?',
          options: ['Una persona', 'Dos personas', 'Tres personas', 'Cuatro personas'],
          correct: 1
        },
        {
          question: '¿Qué dice el camarero al principio?',
          options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hola'],
          correct: 1
        }
      ]
    },
    {
      id: 'video-2',
      title: 'Presentación personal',
      level: 'A1',
      description: 'Persona se presenta y habla sobre sí misma',
      videoUrl: 'https://www.youtube.com/embed/uPEG68DzO0k',
      subtitles: [
        { start: 0, end: 3, text: 'Hola, me llamo María y tengo 25 años.' },
        { start: 3, end: 6, text: 'Soy de Madrid, España.' },
        { start: 6, end: 9, text: 'Me gusta leer y viajar.' }
      ],
      questions: [
        {
          question: '¿Cómo se llama?',
          options: ['Ana', 'María', 'Carmen', 'Laura'],
          correct: 1
        },
        {
          question: '¿De dónde es?',
          options: ['Barcelona', 'Valencia', 'Madrid', 'Sevilla'],
          correct: 2
        }
      ]
    },
    {
      id: 'video-3',
      title: 'En el supermercado',
      level: 'A2',
      description: 'Comprando productos en el supermercado',
      videoUrl: 'https://www.youtube.com/embed/uPEG68DzO0k',
      subtitles: [
        { start: 0, end: 3, text: '¿Dónde están los tomates?' },
        { start: 3, end: 6, text: 'Los tomates están en la sección de verduras.' },
        { start: 6, end: 9, text: 'Gracias. ¿Y el pan?' }
      ],
      questions: [
        {
          question: '¿Qué busca la persona?',
          options: ['Frutas', 'Tomates', 'Pan', 'Leche'],
          correct: 1
        }
      ]
    }
  ],
  audios: [
    {
      id: 'audio-1',
      title: 'Números y precios',
      level: 'A1',
      description: 'Escucha y aprende los números del 1 al 100',
      audioUrl: '/audio/numbers.mp3', // Placeholder URL
      text: 'Uno, dos, tres, cuatro, cinco...',
      subtitles: [
        { start: 0, end: 2, text: 'Uno, dos, tres' },
        { start: 2, end: 4, text: 'Cuatro, cinco, seis' },
        { start: 4, end: 6, text: 'Siete, ocho, nueve, diez' }
      ],
      questions: [
        {
          question: '¿Cuántos números se mencionan?',
          options: ['5', '10', '15', '20'],
          correct: 1
        }
      ]
    },
    {
      id: 'audio-2',
      title: 'Los días de la semana',
      level: 'A1',
      description: 'Aprende los días de la semana en español',
      audioUrl: '/audio/days.mp3',
      text: 'Lunes, martes, miércoles, jueves, viernes, sábado, domingo',
      subtitles: [
        { start: 0, end: 3, text: 'Lunes, martes, miércoles' },
        { start: 3, end: 6, text: 'Jueves, viernes' },
        { start: 6, end: 9, text: 'Sábado, domingo' }
      ],
      questions: [
        {
          question: '¿Cuántos días tiene la semana?',
          options: ['5', '6', '7', '8'],
          correct: 2
        }
      ]
    },
    {
      id: 'audio-3',
      title: 'Conversación telefónica',
      level: 'A2',
      description: 'Diálogo por teléfono entre dos amigos',
      audioUrl: '/audio/phone.mp3',
      text: '¿Aló? Hola, ¿cómo estás? Bien, ¿y tú?',
      subtitles: [
        { start: 0, end: 2, text: '¿Aló? ¿Quién habla?' },
        { start: 2, end: 5, text: 'Hola, soy Juan. ¿Cómo estás?' },
        { start: 5, end: 8, text: 'Muy bien, gracias. ¿Y tú?' }
      ],
      questions: [
        {
          question: '¿Quién llama?',
          options: ['Pedro', 'Juan', 'Carlos', 'Luis'],
          correct: 1
        }
      ]
    }
  ]
}

function ListeningPage() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('videos')
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      navigate('/login')
    }
  }, [navigate])

  const handleSelectItem = (item) => {
    setSelectedItem(item)
    setCurrentQuestion(0)
    setUserAnswers([])
    setShowResults(false)
  }

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = answerIndex
    setUserAnswers(newAnswers)

    if (currentQuestion < selectedItem.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let correct = 0
    selectedItem.questions.forEach((q, index) => {
      if (userAnswers[index] === q.correct) {
        correct++
      }
    })
    return correct
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setUserAnswers([])
    setShowResults(false)
  }

  if (!user) {
    return null
  }

  if (selectedItem) {
    const isVideo = selectedItem.videoUrl !== undefined
    const correctAnswers = showResults ? calculateScore() : 0

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <button
            onClick={() => setSelectedItem(null)}
            className={styles.backBtn}
          >
            ← Назад к списку
          </button>
          <div className={styles.headerInfo}>
            <h1 className={styles.title}>{selectedItem.title}</h1>
            <span className={styles.levelBadge}>{selectedItem.level}</span>
          </div>
        </header>

        <div className={styles.playerSection}>
          <p className={styles.description}>{selectedItem.description}</p>

          {isVideo ? (
            <VideoPlayer
              videoUrl={selectedItem.videoUrl}
              subtitles={selectedItem.subtitles}
            />
          ) : (
            <AudioPlayer
              audioUrl={selectedItem.audioUrl}
              text={selectedItem.text}
              subtitles={selectedItem.subtitles}
            />
          )}
        </div>

        <div className={styles.questionsSection}>
          <h2 className={styles.questionsTitle}>Вопросы на понимание</h2>

          {!showResults ? (
            <div className={styles.questionCard}>
              <div className={styles.questionHeader}>
                <span className={styles.questionNumber}>
                  Вопрос {currentQuestion + 1} из {selectedItem.questions.length}
                </span>
              </div>

              <h3 className={styles.questionText}>
                {selectedItem.questions[currentQuestion].question}
              </h3>

              <div className={styles.optionsList}>
                {selectedItem.questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={styles.optionButton}
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.resultsCard}>
              <div className={styles.resultsHeader}>
                <span className={styles.resultsIcon}>
                  {correctAnswers === selectedItem.questions.length ? '🎉' : '📊'}
                </span>
                <h3 className={styles.resultsTitle}>
                  Результаты: {correctAnswers} из {selectedItem.questions.length}
                </h3>
              </div>

              <div className={styles.resultsList}>
                {selectedItem.questions.map((q, index) => (
                  <div key={index} className={styles.resultItem}>
                    <div className={styles.resultQuestion}>{q.question}</div>
                    <div className={styles.resultAnswer}>
                      Ваш ответ: {q.options[userAnswers[index]]}
                      {userAnswers[index] === q.correct ? ' ✓' : ' ✗'}
                    </div>
                    {userAnswers[index] !== q.correct && (
                      <div className={styles.correctAnswer}>
                        Правильный ответ: {q.options[q.correct]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button className={styles.retryButton} onClick={resetQuiz}>
                Пройти снова
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={() => navigate('/courses')} className={styles.backBtn}>
          ← Назад к курсам
        </button>
        <h1 className={styles.title}>Аудирование</h1>
      </header>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'videos' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          🎥 Видео ({listeningMaterials.videos.length})
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'audios' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('audios')}
        >
          🎧 Аудио ({listeningMaterials.audios.length})
        </button>
      </div>

      <main className={styles.main}>
        <div className={styles.materialsGrid}>
          {activeTab === 'videos' &&
            listeningMaterials.videos.map((video) => (
              <div
                key={video.id}
                className={styles.materialCard}
                onClick={() => handleSelectItem(video)}
              >
                <div className={styles.materialIcon}>🎥</div>
                <div className={styles.materialInfo}>
                  <h3 className={styles.materialTitle}>{video.title}</h3>
                  <p className={styles.materialDescription}>{video.description}</p>
                  <div className={styles.materialMeta}>
                    <span className={styles.materialLevel}>{video.level}</span>
                    <span className={styles.materialQuestions}>
                      {video.questions.length} вопрос(ов)
                    </span>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === 'audios' &&
            listeningMaterials.audios.map((audio) => (
              <div
                key={audio.id}
                className={styles.materialCard}
                onClick={() => handleSelectItem(audio)}
              >
                <div className={styles.materialIcon}>🎧</div>
                <div className={styles.materialInfo}>
                  <h3 className={styles.materialTitle}>{audio.title}</h3>
                  <p className={styles.materialDescription}>{audio.description}</p>
                  <div className={styles.materialMeta}>
                    <span className={styles.materialLevel}>{audio.level}</span>
                    <span className={styles.materialQuestions}>
                      {audio.questions.length} вопрос(ов)
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  )
}

export default ListeningPage
