// Структура курса по уровням (по аналогии с российской школьной программой)
export const courseLevels = [
  {
    id: 'beginner',
    name: 'Начальный уровень (A1)',
    description: 'Основы испанского языка',
    modules: ['module-1', 'module-2', 'module-3']
  },
  {
    id: 'elementary',
    name: 'Базовый уровень (A2)',
    description: 'Развитие базовых навыков',
    modules: ['module-4', 'module-5', 'module-6']
  },
  {
    id: 'intermediate',
    name: 'Средний уровень (B1)',
    description: 'Углубленное изучение',
    modules: ['module-7', 'module-8', 'module-9']
  }
]

// Модули обучения
export const modules = {
  'module-1': {
    id: 'module-1',
    title: 'Модуль 1: Знакомство с испанским',
    level: 'beginner',
    lessons: ['lesson-1-1', 'lesson-1-2', 'lesson-1-3'],
    description: 'Алфавит, приветствия, базовая лексика'
  },
  'module-2': {
    id: 'module-2',
    title: 'Модуль 2: Настоящее время',
    level: 'beginner',
    lessons: ['lesson-2-1', 'lesson-2-2', 'lesson-2-3'],
    description: 'Настоящее время правильных глаголов'
  },
  'module-3': {
    id: 'module-3',
    title: 'Модуль 3: Повседневная жизнь',
    level: 'beginner',
    lessons: ['lesson-3-1', 'lesson-3-2', 'lesson-3-3'],
    description: 'Лексика о семье, работе, хобби'
  }
}

// Уроки с грамматикой и упражнениями
export const lessons = {
  'lesson-1-1': {
    id: 'lesson-1-1',
    title: 'Урок 1: Испанский алфавит и произношение',
    moduleId: 'module-1',
    grammar: {
      title: 'Алфавит и правила чтения',
      content: `
# Испанский алфавит (El alfabeto español)

Испанский алфавит состоит из 27 букв:

**A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z**

## Особенности произношения:

- **Ñ (энье)** - [нь] como en "señor" (сеньор)
- **H** - не произносится: "hola" = [ола]
- **J** - [х] como en "hijo" (ихо)
- **LL** - [й/ль] como en "llamar" (йамар/льамар)
- **V** - произносится как [б]: "vino" = [бино]

## Правила ударения:

1. Слова на гласную, -n, -s: ударение на предпоследний слог (casa, hablan)
2. Остальные слова: ударение на последний слог (hablar, ciudad)
3. Акцент указывает исключения: música, café
      `,
      examples: [
        { spanish: 'Hola', translation: 'Привет', pronunciation: '[ола]' },
        { spanish: 'Adiós', translation: 'Пока', pronunciation: '[адьёс]' },
        { spanish: 'Señor', translation: 'Господин', pronunciation: '[сеньор]' }
      ]
    },
    vocabulary: [
      { word: 'hola', translation: 'привет', audioUrl: null },
      { word: 'adiós', translation: 'пока', audioUrl: null },
      { word: 'buenos días', translation: 'доброе утро', audioUrl: null },
      { word: 'buenas tardes', translation: 'добрый день', audioUrl: null },
      { word: 'buenas noches', translation: 'добрый вечер/спокойной ночи', audioUrl: null },
      { word: 'gracias', translation: 'спасибо', audioUrl: null },
      { word: 'por favor', translation: 'пожалуйста', audioUrl: null },
      { word: 'de nada', translation: 'не за что', audioUrl: null },
      { word: 'sí', translation: 'да', audioUrl: null },
      { word: 'no', translation: 'нет', audioUrl: null }
    ],
    exercises: ['ex-1-1-1', 'ex-1-1-2', 'ex-1-1-3', 'ex-1-1-4']
  },
  'lesson-1-2': {
    id: 'lesson-1-2',
    title: 'Урок 2: Приветствия и знакомство',
    moduleId: 'module-1',
    grammar: {
      title: 'Личные местоимения и глагол SER',
      content: `
# Личные местоимения (Pronombres personales)

| Русский | Español |
|---------|---------|
| я | yo |
| ты | tú |
| он/она/Вы (формально) | él/ella/usted |
| мы | nosotros/nosotras |
| вы | vosotros/vosotras |
| они/Вы (мн.ч.) | ellos/ellas/ustedes |

# Глагол SER (быть) - Presente

| Местоимение | Форма |
|-------------|-------|
| yo | soy |
| tú | eres |
| él/ella/usted | es |
| nosotros/as | somos |
| vosotros/as | sois |
| ellos/ellas/ustedes | son |

## Примеры:
- Yo **soy** estudiante - Я студент
- Tú **eres** inteligente - Ты умный
- Él **es** profesor - Он учитель
      `,
      examples: [
        { spanish: '¿Cómo te llamas?', translation: 'Как тебя зовут?', pronunciation: '[комо те льямас]' },
        { spanish: 'Me llamo María', translation: 'Меня зовут Мария', pronunciation: '[ме льямо мариа]' },
        { spanish: 'Mucho gusto', translation: 'Очень приятно', pronunciation: '[мучо густо]' }
      ]
    },
    vocabulary: [
      { word: '¿Cómo te llamas?', translation: 'как тебя зовут?', audioUrl: null },
      { word: 'Me llamo...', translation: 'меня зовут...', audioUrl: null },
      { word: '¿De dónde eres?', translation: 'откуда ты?', audioUrl: null },
      { word: 'Soy de...', translation: 'я из...', audioUrl: null },
      { word: 'mucho gusto', translation: 'очень приятно', audioUrl: null },
      { word: 'encantado/a', translation: 'рад/рада познакомиться', audioUrl: null },
      { word: '¿Cómo estás?', translation: 'как дела?', audioUrl: null },
      { word: 'Bien, gracias', translation: 'хорошо, спасибо', audioUrl: null }
    ],
    exercises: ['ex-1-2-1', 'ex-1-2-2', 'ex-1-2-3']
  },
  'lesson-1-3': {
    id: 'lesson-1-3',
    title: 'Урок 3: Числа и возраст',
    moduleId: 'module-1',
    grammar: {
      title: 'Числительные и глагол TENER',
      content: `
# Числительные 0-20

0 - cero, 1 - uno, 2 - dos, 3 - tres, 4 - cuatro, 5 - cinco
6 - seis, 7 - siete, 8 - ocho, 9 - nueve, 10 - diez
11 - once, 12 - doce, 13 - trece, 14 - catorce, 15 - quince
16 - dieciséis, 17 - diecisiete, 18 - dieciocho, 19 - diecinueve, 20 - veinte

# Глагол TENER (иметь) - Presente

| Местоимение | Форма |
|-------------|-------|
| yo | tengo |
| tú | tienes |
| él/ella/usted | tiene |
| nosotros/as | tenemos |
| vosotros/as | tenéis |
| ellos/ellas/ustedes | tienen |

## Выражение возраста:
- **Tengo 25 años** - Мне 25 лет
- **¿Cuántos años tienes?** - Сколько тебе лет?
      `
    },
    vocabulary: [
      { word: '¿Cuántos años tienes?', translation: 'сколько тебе лет?', audioUrl: null },
      { word: 'Tengo ... años', translation: 'мне ... лет', audioUrl: null },
      { word: 'número', translation: 'число', audioUrl: null },
      { word: 'edad', translation: 'возраст', audioUrl: null }
    ],
    exercises: ['ex-1-3-1', 'ex-1-3-2']
  }
}

// Упражнения различных типов
export const exercises = {
  // Урок 1.1
  'ex-1-1-1': {
    id: 'ex-1-1-1',
    type: 'vocabulary',
    title: 'Запомните слова',
    description: 'Сопоставьте испанские слова с переводом',
    questions: [
      { spanish: 'hola', options: ['привет', 'пока', 'спасибо', 'да'], correct: 0 },
      { spanish: 'gracias', options: ['нет', 'спасибо', 'пожалуйста', 'привет'], correct: 1 },
      { spanish: 'adiós', options: ['да', 'нет', 'пока', 'привет'], correct: 2 },
      { spanish: 'por favor', options: ['спасибо', 'пожалуйста', 'привет', 'пока'], correct: 1 }
    ]
  },
  'ex-1-1-2': {
    id: 'ex-1-1-2',
    type: 'pronunciation',
    title: 'Произношение',
    description: 'Как произносится слово?',
    questions: [
      { word: 'hola', options: ['[хола]', '[ола]', '[гола]', '[кола]'], correct: 1 },
      { word: 'hijo', options: ['[хийо]', '[ихо]', '[гихо]', '[сихо]'], correct: 1 },
      { word: 'señor', options: ['[сенор]', '[сеньор]', '[синор]', '[шеньор]'], correct: 1 }
    ]
  },
  'ex-1-1-3': {
    id: 'ex-1-1-3',
    type: 'reading',
    title: 'Чтение',
    description: 'Прочитайте диалог и ответьте на вопросы',
    text: `
María: ¡Hola! Buenos días.
Juan: ¡Hola! Buenos días, María.
María: ¿Cómo estás?
Juan: Bien, gracias. ¿Y tú?
María: Muy bien, gracias.
    `,
    questions: [
      {
        question: 'Кто приветствует первым?',
        options: ['Хуан', 'Мария', 'Оба', 'Никто'],
        correct: 1
      },
      {
        question: 'Какое время суток?',
        options: ['Утро', 'День', 'Вечер', 'Ночь'],
        correct: 0
      }
    ]
  },
  'ex-1-1-4': {
    id: 'ex-1-1-4',
    type: 'writing',
    title: 'Письмо',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Привет', correct: 'hola' },
      { russian: 'Спасибо', correct: 'gracias' },
      { russian: 'Пожалуйста', correct: 'por favor' },
      { russian: 'Пока', correct: 'adiós' }
    ]
  },

  // Урок 1.2
  'ex-1-2-1': {
    id: 'ex-1-2-1',
    type: 'grammar',
    title: 'Глагол SER',
    description: 'Выберите правильную форму глагола',
    questions: [
      { sentence: 'Yo ___ estudiante', options: ['soy', 'eres', 'es', 'son'], correct: 0 },
      { sentence: 'Tú ___ inteligente', options: ['soy', 'eres', 'es', 'somos'], correct: 1 },
      { sentence: 'Él ___ profesor', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Nosotros ___ amigos', options: ['soy', 'somos', 'es', 'son'], correct: 1 }
    ]
  },
  'ex-1-2-2': {
    id: 'ex-1-2-2',
    type: 'vocabulary',
    title: 'Знакомство',
    description: 'Выберите правильный перевод',
    questions: [
      { spanish: '¿Cómo te llamas?', options: ['Как дела?', 'Как тебя зовут?', 'Откуда ты?', 'Сколько тебе лет?'], correct: 1 },
      { spanish: 'Me llamo Juan', options: ['Мне хорошо', 'Меня зовут Хуан', 'Я из Испании', 'Мне 20 лет'], correct: 1 },
      { spanish: 'Mucho gusto', options: ['Спасибо', 'Пожалуйста', 'Очень приятно', 'До свидания'], correct: 2 }
    ]
  },
  'ex-1-2-3': {
    id: 'ex-1-2-3',
    type: 'writing',
    title: 'Диалог знакомства',
    description: 'Заполните пропуски в диалоге',
    dialogue: [
      { speaker: 'A', text: '¡Hola! ¿Cómo ___ llamas?', blank: 'te' },
      { speaker: 'B', text: '___ llamo Pedro. ¿Y tú?', blank: 'Me' },
      { speaker: 'A', text: 'Yo soy Ana. Mucho ___', blank: 'gusto' },
      { speaker: 'B', text: 'Encantado. ¿De dónde ___?', blank: 'eres' }
    ]
  },

  // Урок 1.3
  'ex-1-3-1': {
    id: 'ex-1-3-1',
    type: 'vocabulary',
    title: 'Числа',
    description: 'Напишите числа словами',
    questions: [
      { number: '5', correct: 'cinco' },
      { number: '10', correct: 'diez' },
      { number: '15', correct: 'quince' },
      { number: '20', correct: 'veinte' }
    ]
  },
  'ex-1-3-2': {
    id: 'ex-1-3-2',
    type: 'grammar',
    title: 'Глагол TENER',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Yo ___ 25 años', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 0 },
      { sentence: 'Tú ___ un libro', options: ['tengo', 'tienes', 'tiene', 'tenemos'], correct: 1 },
      { sentence: 'Ella ___ dos hermanos', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 }
    ]
  }
}
