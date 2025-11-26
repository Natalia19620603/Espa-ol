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
  },
  'module-4': {
    id: 'module-4',
    title: 'Модуль 4: Прошедшее время',
    level: 'elementary',
    lessons: ['lesson-4-1', 'lesson-4-2', 'lesson-4-3'],
    description: 'Pretérito perfecto и прошедшие события'
  },
  'module-5': {
    id: 'module-5',
    title: 'Модуль 5: Путешествия и места',
    level: 'elementary',
    lessons: ['lesson-5-1', 'lesson-5-2', 'lesson-5-3'],
    description: 'Лексика путешествий, направления, транспорт'
  },
  'module-6': {
    id: 'module-6',
    title: 'Модуль 6: Будущее время',
    level: 'elementary',
    lessons: ['lesson-6-1', 'lesson-6-2', 'lesson-6-3'],
    description: 'Планы, намерения, предсказания'
  },
  'module-7': {
    id: 'module-7',
    title: 'Модуль 7: Сослагательное наклонение',
    level: 'intermediate',
    lessons: ['lesson-7-1', 'lesson-7-2', 'lesson-7-3'],
    description: 'Subjuntivo presente: желания, сомнения, эмоции'
  },
  'module-8': {
    id: 'module-8',
    title: 'Модуль 8: Условные предложения',
    level: 'intermediate',
    lessons: ['lesson-8-1', 'lesson-8-2', 'lesson-8-3'],
    description: 'Условное наклонение, гипотетические ситуации'
  },
  'module-9': {
    id: 'module-9',
    title: 'Модуль 9: Литература и культура',
    level: 'intermediate',
    lessons: ['lesson-9-1', 'lesson-9-2', 'lesson-9-3'],
    description: 'Чтение аутентичных текстов, испанская культура'
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
  },

  // МОДУЛЬ 2: Настоящее время
  'lesson-2-1': {
    id: 'lesson-2-1',
    title: 'Урок 1: Правильные глаголы на -AR',
    moduleId: 'module-2',
    grammar: {
      title: 'Спряжение глаголов на -AR',
      content: `
# Правильные глаголы на -AR (Verbos regulares -AR)

Большинство глаголов в испанском оканчиваются на -AR, -ER, -IR.

## Спряжение глаголов на -AR в настоящем времени:

**HABLAR (говорить)**

| Местоимение | Форма | Перевод |
|-------------|-------|---------|
| yo | hablo | я говорю |
| tú | hablas | ты говоришь |
| él/ella/usted | habla | он/она говорит |
| nosotros/as | hablamos | мы говорим |
| vosotros/as | habláis | вы говорите |
| ellos/ellas/ustedes | hablan | они говорят |

## Другие частые глаголы на -AR:
- **estudiar** - учиться, изучать
- **trabajar** - работать
- **caminar** - ходить, гулять
- **bailar** - танцевать
- **cantar** - петь
- **comprar** - покупать
- **cocinar** - готовить
      `,
      examples: [
        { spanish: 'Yo estudio español', translation: 'Я изучаю испанский' },
        { spanish: 'Ella trabaja en Madrid', translation: 'Она работает в Мадриде' },
        { spanish: 'Nosotros caminamos en el parque', translation: 'Мы гуляем в парке' }
      ]
    },
    vocabulary: [
      { word: 'hablar', translation: 'говорить', audioUrl: null },
      { word: 'estudiar', translation: 'учиться, изучать', audioUrl: null },
      { word: 'trabajar', translation: 'работать', audioUrl: null },
      { word: 'caminar', translation: 'ходить, гулять', audioUrl: null },
      { word: 'bailar', translation: 'танцевать', audioUrl: null },
      { word: 'cantar', translation: 'петь', audioUrl: null },
      { word: 'comprar', translation: 'покупать', audioUrl: null },
      { word: 'cocinar', translation: 'готовить', audioUrl: null },
      { word: 'escuchar', translation: 'слушать', audioUrl: null },
      { word: 'mirar', translation: 'смотреть', audioUrl: null }
    ],
    readingText: {
      title: 'Mi rutina diaria',
      content: `Me llamo Ana y soy estudiante. Todos los días me levanto a las siete de la mañana. Desayuno café con tostadas y después camino hasta la universidad. Estudio literatura española y me gusta mucho.

Por las tardes, trabajo en una cafetería. Hablo con los clientes y preparo bebidas. Mi mejor amiga María trabaja conmigo. Ella canta muy bien y a veces toca la guitarra en la cafetería.

Por las noches, regreso a casa y cocino la cena. Después, estudio un poco más o miro una película. Los fines de semana, bailamos salsa con amigos. Me encanta bailar y escuchar música latina.

La vida de estudiante es ocupada pero muy interesante. Aprendo algo nuevo cada día y conozco personas de diferentes países. En la universidad hablamos español, inglés y a veces francés.`,
      translation: 'Меня зовут Ана и я студентка. Каждый день я встаю в семь утра. Завтракаю кофе с тостами и потом иду пешком до университета. Я изучаю испанскую литературу и мне это очень нравится...'
    },
    exercises: ['ex-2-1-1', 'ex-2-1-2', 'ex-2-1-3', 'ex-2-1-4', 'ex-2-1-5']
  },
  'lesson-2-2': {
    id: 'lesson-2-2',
    title: 'Урок 2: Правильные глаголы на -ER и -IR',
    moduleId: 'module-2',
    grammar: {
      title: 'Спряжение глаголов на -ER и -IR',
      content: `
# Глаголы на -ER и -IR

## COMER (есть, кушать) - глагол на -ER

| Местоимение | Forma |
|-------------|-------|
| yo | como |
| tú | comes |
| él/ella/usted | come |
| nosotros/as | comemos |
| vosotros/as | coméis |
| ellos/ellas/ustedes | comen |

## VIVIR (жить) - глагол на -IR

| Местоимение | Forma |
|-------------|-------|
| yo | vivo |
| tú | vives |
| él/ella/usted | vive |
| nosotros/as | vivimos |
| vosotros/as | vivís |
| ellos/ellas/ustedes | viven |

## Другие частые глаголы:
**-ER:** beber (пить), leer (читать), aprender (учиться), vender (продавать)
**-IR:** escribir (писать), abrir (открывать), recibir (получать)
      `,
      examples: [
        { spanish: 'Como pizza los viernes', translation: 'Я ем пиццу по пятницам' },
        { spanish: 'Ellos viven en Barcelona', translation: 'Они живут в Барселоне' },
        { spanish: 'Leemos libros interesantes', translation: 'Мы читаем интересные книги' }
      ]
    },
    vocabulary: [
      { word: 'comer', translation: 'есть, кушать', audioUrl: null },
      { word: 'beber', translation: 'пить', audioUrl: null },
      { word: 'leer', translation: 'читать', audioUrl: null },
      { word: 'aprender', translation: 'учиться, изучать', audioUrl: null },
      { word: 'vivir', translation: 'жить', audioUrl: null },
      { word: 'escribir', translation: 'писать', audioUrl: null },
      { word: 'abrir', translation: 'открывать', audioUrl: null },
      { word: 'recibir', translation: 'получать', audioUrl: null }
    ],
    readingText: {
      title: 'La familia García',
      content: `La familia García vive en un apartamento en el centro de Madrid. Son cuatro personas: el padre Antonio, la madre Carmen, y sus dos hijos, Pablo y Lucía.

Antonio trabaja como profesor en una escuela. Enseña matemáticas y le gusta mucho su trabajo. Por las mañanas, lee el periódico mientras bebe café. Carmen es médica y trabaja en un hospital. Ella ayuda a muchas personas cada día.

Pablo tiene 15 años y estudia en el instituto. Le encanta leer libros de aventuras y escribir cuentos. Su hermana Lucía tiene 12 años. Ella aprende a tocar el piano y practica todos los días. También le gusta pintar y tiene muchos cuadros en su habitación.

Los fines de semana, la familia come junta en casa. Preparan platos tradicionales españoles como paella o tortilla. Por las tardes, caminan por el Parque del Retiro. Es su lugar favorito en Madrid. A veces visitan museos o van al cine.

Los García son una familia muy unida. Comparten sus experiencias, aprenden unos de otros y disfrutan del tiempo juntos.`,
      translation: 'Семья Гарсия живет в квартире в центре Мадрида. Их четыре человека: отец Антонио, мать Кармен, и их двое детей, Пабло и Люсия...'
    },
    exercises: ['ex-2-2-1', 'ex-2-2-2', 'ex-2-2-3', 'ex-2-2-4']
  },
  'lesson-2-3': {
    id: 'lesson-2-3',
    title: 'Урок 3: Неправильные глаголы',
    moduleId: 'module-2',
    grammar: {
      title: 'Основные неправильные глаголы',
      content: `
# Неправильные глаголы (Verbos irregulares)

## IR (идти, ехать)
yo voy, tú vas, él/ella va, nosotros vamos, vosotros vais, ellos van

## HACER (делать)
yo hago, tú haces, él/ella hace, nosotros hacemos, vosotros hacéis, ellos hacen

## ESTAR (быть, находиться)
yo estoy, tú estás, él/ella está, nosotros estamos, vosotros estáis, ellos están

## VENIR (приходить)
yo vengo, tú vienes, él/ella viene, nosotros venimos, vosotros venís, ellos vienen

## Разница SER и ESTAR:
- **SER** - постоянные качества: Soy alto (Я высокий)
- **ESTAR** - временные состояния: Estoy cansado (Я уставший)
      `,
      examples: [
        { spanish: 'Voy al cine', translation: 'Я иду в кино' },
        { spanish: 'Hago mi tarea', translation: 'Я делаю свое домашнее задание' },
        { spanish: 'Estoy en casa', translation: 'Я нахожусь дома' }
      ]
    },
    vocabulary: [
      { word: 'ir', translation: 'идти, ехать', audioUrl: null },
      { word: 'hacer', translation: 'делать', audioUrl: null },
      { word: 'estar', translation: 'быть, находиться', audioUrl: null },
      { word: 'venir', translation: 'приходить', audioUrl: null },
      { word: 'tener', translation: 'иметь', audioUrl: null },
      { word: 'poder', translation: 'мочь', audioUrl: null },
      { word: 'querer', translation: 'хотеть', audioUrl: null },
      { word: 'saber', translation: 'знать', audioUrl: null }
    ],
    exercises: ['ex-2-3-1', 'ex-2-3-2', 'ex-2-3-3']
  },

  // МОДУЛЬ 3: Повседневная жизнь
  'lesson-3-1': {
    id: 'lesson-3-1',
    title: 'Урок 1: Семья и родственники',
    moduleId: 'module-3',
    grammar: {
      title: 'Притяжательные местоимения',
      content: `
# Притяжательные местоимения (Posesivos)

## Краткая форма (перед существительным):

| Русский | Español (ед.ч) | Español (мн.ч) |
|---------|----------------|----------------|
| мой/моя | mi | mis |
| твой/твоя | tu | tus |
| его/ее/Ваш | su | sus |
| наш/наша | nuestro/nuestra | nuestros/nuestras |
| ваш/ваша | vuestro/vuestra | vuestros/vuestras |
| их/Ваш | su | sus |

## Примеры:
- **Mi padre** - мой отец
- **Mis hermanos** - мои братья
- **Nuestra casa** - наш дом
- **Sus hijos** - его/ее/их дети
      `,
      examples: [
        { spanish: 'Mi familia es grande', translation: 'Моя семья большая' },
        { spanish: 'Tu hermana es simpática', translation: 'Твоя сестра симпатичная' },
        { spanish: 'Nuestros padres viven aquí', translation: 'Наши родители живут здесь' }
      ]
    },
    vocabulary: [
      { word: 'familia', translation: 'семья', audioUrl: null },
      { word: 'padre', translation: 'отец', audioUrl: null },
      { word: 'madre', translation: 'мать', audioUrl: null },
      { word: 'hermano', translation: 'брат', audioUrl: null },
      { word: 'hermana', translation: 'сестра', audioUrl: null },
      { word: 'abuelo', translation: 'дедушка', audioUrl: null },
      { word: 'abuela', translation: 'бабушка', audioUrl: null },
      { word: 'hijo', translation: 'сын', audioUrl: null },
      { word: 'hija', translation: 'дочь', audioUrl: null },
      { word: 'tío', translation: 'дядя', audioUrl: null },
      { word: 'tía', translation: 'тетя', audioUrl: null },
      { word: 'primo/prima', translation: 'двоюродный брат/сестра', audioUrl: null }
    ],
    readingText: {
      title: 'Mi familia',
      content: `Me llamo Carlos y voy a hablar sobre mi familia. Somos seis personas en total. Vivimos en una casa grande en las afueras de Valencia.

Mis padres se llaman José y María. Mi padre es ingeniero y trabaja en una empresa de construcción. Le gusta mucho su trabajo porque construye edificios importantes. Mi madre es profesora de inglés en una escuela primaria. Ella ama enseñar a los niños y siempre llega a casa con historias interesantes.

Tengo dos hermanos: mi hermano mayor Pedro tiene 20 años y estudia medicina en la universidad. Quiere ser médico como nuestro abuelo. Mi hermana pequeña Laura tiene solo 8 años. Es muy traviesa pero adorable. Le encanta dibujar y jugar con nuestro perro Max.

También vivo con mi abuela paterna, la madre de mi padre. Ella tiene 75 años pero es muy activa. Cocina delicioso y nos cuenta historias de cuando era joven. Todos los domingos, toda la familia come junta. Mi abuela prepara su famosa paella valenciana.

Tengo muchos tíos, tías y primos, pero no viven con nosotros. Los vemos en las fiestas y vacaciones. Mi tío Alberto vive en Barcelona y trabaja como músico. Cuando nos visita, toca la guitarra y cantamos juntos.

Me siento muy afortunado de tener una familia tan unida y cariñosa. Pasamos mucho tiempo juntos y nos apoyamos en todo momento.`,
      translation: 'Меня зовут Карлос и я расскажу о моей семье. Нас всего шесть человек. Мы живем в большом доме на окраине Валенсии...'
    },
    exercises: ['ex-3-1-1', 'ex-3-1-2', 'ex-3-1-3', 'ex-3-1-4']
  },
  'lesson-3-2': {
    id: 'lesson-3-2',
    title: 'Урок 2: Работа и профессии',
    moduleId: 'module-3',
    grammar: {
      title: 'Артикли и род существительных',
      content: `
# Артикли (Artículos)

## Определенные артикли (el, la, los, las):

| Род | Единственное | Множественное |
|-----|--------------|---------------|
| Мужской | el (el libro) | los (los libros) |
| Женский | la (la casa) | las (las casas) |

## Неопределенные артикли (un, una, unos, unas):

| Род | Единственное | Множественное |
|-----|--------------|---------------|
| Мужской | un (un perro) | unos (unos perros) |
| Женский | una (una gata) | unas (unas gatas) |

## Род профессий:
- Мужской: **el médico**, **el profesor**, **el ingeniero**
- Женский: **la médica**, **la profesora**, **la ingeniera**
      `,
      examples: [
        { spanish: 'Soy un estudiante', translation: 'Я студент' },
        { spanish: 'Ella es la profesora', translation: 'Она учительница' },
        { spanish: 'Ellos son médicos', translation: 'Они врачи' }
      ]
    },
    vocabulary: [
      { word: 'médico/a', translation: 'врач', audioUrl: null },
      { word: 'profesor/a', translation: 'учитель', audioUrl: null },
      { word: 'ingeniero/a', translation: 'инженер', audioUrl: null },
      { word: 'abogado/a', translation: 'адвокат', audioUrl: null },
      { word: 'enfermero/a', translation: 'медсестра', audioUrl: null },
      { word: 'cocinero/a', translation: 'повар', audioUrl: null },
      { word: 'policía', translation: 'полицейский', audioUrl: null },
      { word: 'bombero/a', translation: 'пожарный', audioUrl: null },
      { word: 'cantante', translation: 'певец/певица', audioUrl: null },
      { word: 'escritor/a', translation: 'писатель', audioUrl: null }
    ],
    exercises: ['ex-3-2-1', 'ex-3-2-2', 'ex-3-2-3']
  },
  'lesson-3-3': {
    id: 'lesson-3-3',
    title: 'Урок 3: Хобби и свободное время',
    moduleId: 'module-3',
    grammar: {
      title: 'Глаголы GUSTAR, ENCANTAR',
      content: `
# Глаголы GUSTAR (нравиться) и ENCANTAR (обожать)

Эти глаголы имеют особую конструкцию:

## Схема: Местоимение + GUSTA/GUSTAN + существительное

**С единственным числом (gusta):**
- Me **gusta** el café - Мне нравится кофе
- Te **gusta** la música - Тебе нравится музыка
- Le **gusta** bailar - Ему/ей нравится танцевать

**С множественным числом (gustan):**
- Me **gustan** los libros - Мне нравятся книги
- Te **gustan** las películas - Тебе нравятся фильмы
- Nos **gustan** los deportes - Нам нравятся виды спорта

## Косвенные местоимения:
me (мне), te (тебе), le (ему/ей/Вам), nos (нам), os (вам), les (им/Вам)

## ENCANTAR используется так же:
Me **encanta** la playa - Я обожаю пляж
      `,
      examples: [
        { spanish: 'Me gusta leer', translation: 'Мне нравится читать' },
        { spanish: 'Nos encanta viajar', translation: 'Мы обожаем путешествовать' },
        { spanish: 'Les gustan los deportes', translation: 'Им нравятся виды спорта' }
      ]
    },
    vocabulary: [
      { word: 'deporte', translation: 'спорт', audioUrl: null },
      { word: 'música', translation: 'музыка', audioUrl: null },
      { word: 'cine', translation: 'кино', audioUrl: null },
      { word: 'libro', translation: 'книга', audioUrl: null },
      { word: 'película', translation: 'фильм', audioUrl: null },
      { word: 'fútbol', translation: 'футбол', audioUrl: null },
      { word: 'natación', translation: 'плавание', audioUrl: null },
      { word: 'pintura', translation: 'живопись', audioUrl: null },
      { word: 'fotografía', translation: 'фотография', audioUrl: null },
      { word: 'viaje', translation: 'путешествие', audioUrl: null }
    ],
    exercises: ['ex-3-3-1', 'ex-3-3-2', 'ex-3-3-3']
  },

  // МОДУЛЬ 4: Прошедшее время (A2)
  'lesson-4-1': {
    id: 'lesson-4-1',
    title: 'Урок 1: Pretérito perfecto',
    moduleId: 'module-4',
    grammar: {
      title: 'Pretérito perfecto (Настоящее совершенное время)',
      content: `
# Pretérito perfecto

## Образование:
**Haber (настоящее время) + participio pasado**

## Спряжение HABER:
| Лицо | Форма |
|------|-------|
| yo | he |
| tú | has |
| él/ella/usted | ha |
| nosotros/as | hemos |
| vosotros/as | habéis |
| ellos/ellas/ustedes | han |

## Причастие прошедшего времени:

**Правильные формы:**
- Глаголы на -AR: **-ado** (hablar → hablado)
- Глаголы на -ER/-IR: **-ido** (comer → comido, vivir → vivido)

**Неправильные причастия:**
| Глагол | Причастие |
|--------|-----------|
| hacer | hecho |
| ver | visto |
| decir | dicho |
| escribir | escrito |
| poner | puesto |
| volver | vuelto |
| abrir | abierto |
| romper | roto |
| morir | muerto |

## Употребление:
Используется для действий в прошлом, которые:
1. Произошли недавно: **Esta semana he visitado el museo**
2. Имеют связь с настоящим: **Nunca he estado en España**
3. Результат виден сейчас: **He perdido las llaves** (и до сих пор не нашел)

## Слова-маркеры:
- **hoy** (сегодня)
- **esta semana** (на этой неделе)
- **este mes/año** (в этом месяце/году)
- **ya** (уже)
- **todavía no** (еще нет)
- **nunca** (никогда)
- **alguna vez** (когда-нибудь)
      `,
      examples: [
        { spanish: 'He comido paella hoy', translation: 'Я ел паэлью сегодня' },
        { spanish: '¿Has visto esta película?', translation: 'Ты видел этот фильм?' },
        { spanish: 'Nunca hemos estado en México', translation: 'Мы никогда не были в Мексике' },
        { spanish: 'Ella ha escrito un libro', translation: 'Она написала книгу' }
      ]
    },
    vocabulary: [
      { word: 'ya', translation: 'уже', audioUrl: null },
      { word: 'todavía', translation: 'еще, все еще', audioUrl: null },
      { word: 'nunca', translation: 'никогда', audioUrl: null },
      { word: 'alguna vez', translation: 'когда-нибудь', audioUrl: null },
      { word: 'esta semana', translation: 'на этой неделе', audioUrl: null },
      { word: 'este mes', translation: 'в этом месяце', audioUrl: null },
      { word: 'hoy', translation: 'сегодня', audioUrl: null },
      { word: 'reciente', translation: 'недавний', audioUrl: null },
      { word: 'visitar', translation: 'посещать', audioUrl: null },
      { word: 'terminar', translation: 'заканчивать', audioUrl: null },
      { word: 'perder', translation: 'терять', audioUrl: null },
      { word: 'ganar', translation: 'выигрывать, зарабатывать', audioUrl: null }
    ],
    readingText: {
      title: 'Una semana ocupada',
      content: `Esta semana ha sido muy productiva para mí. El lunes he empezado un nuevo proyecto en el trabajo. Es un desafío interesante y estoy muy motivado.

El martes he ido al gimnasio por primera vez en meses. Me ha costado mucho porque estaba muy fuera de forma, pero me he sentido muy bien después. He decidido ir tres veces por semana a partir de ahora.

El miércoles mi hermana ha llegado de Barcelona. Hacía mucho tiempo que no la veía. Hemos cenado juntas en mi restaurante favorito y hemos hablado durante horas. Me ha contado sobre su nuevo trabajo y sus planes para el futuro.

El jueves he terminado un informe importante que llevaba semanas preparando. Mi jefe lo ha leído y ha dicho que está muy bien hecho. Me ha felicitado delante de todo el equipo. Me he sentido muy orgullosa.

Hoy es viernes y he recibido mi salario. También he comprado los billetes para mis vacaciones en Italia el mes que viene. Nunca he estado allí y estoy muy emocionada. He reservado un hotel en Roma y he hecho una lista de todos los lugares que quiero visitar.

¿Y tú? ¿Qué has hecho esta semana? ¿Has tenido alguna experiencia interesante?`,
      translation: 'На этой неделе я была очень продуктивна. В понедельник я начала новый проект на работе...'
    },
    exercises: ['ex-4-1-1', 'ex-4-1-2', 'ex-4-1-3', 'ex-4-1-4', 'ex-4-1-5']
  },

  'lesson-4-2': {
    id: 'lesson-4-2',
    title: 'Урок 2: Pretérito indefinido',
    moduleId: 'module-4',
    grammar: {
      title: 'Pretérito indefinido (Простое прошедшее время)',
      content: `
# Pretérito indefinido (Pretérito perfecto simple)

## Правильные глаголы:

**Глаголы на -AR (hablar):**
| Лицо | Окончание | Пример |
|------|-----------|--------|
| yo | -é | hablé |
| tú | -aste | hablaste |
| él/ella/usted | -ó | habló |
| nosotros/as | -amos | hablamos |
| vosotros/as | -asteis | hablasteis |
| ellos/ellas/ustedes | -aron | hablaron |

**Глаголы на -ER/-IR (comer/vivir):**
| Лицо | Окончание | Пример |
|------|-----------|--------|
| yo | -í | comí, viví |
| tú | -iste | comiste, viviste |
| él/ella/usted | -ió | comió, vivió |
| nosotros/as | -imos | comimos, vivimos |
| vosotros/as | -isteis | comisteis, vivisteis |
| ellos/ellas/ustedes | -ieron | comieron, vivieron |

## Важные неправильные глаголы:

**SER/IR (одинаковые формы!):**
fui, fuiste, fue, fuimos, fuisteis, fueron

**ESTAR:**
estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron

**TENER:**
tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron

**HACER:**
hice, hiciste, hizo, hicimos, hicisteis, hicieron

**VENIR:**
vine, viniste, vino, vinimos, vinisteis, vinieron

**DECIR:**
dije, dijiste, dijo, dijimos, dijisteis, dijeron

**DAR:**
di, diste, dio, dimos, disteis, dieron

## Употребление:
Используется для законченных действий в прошлом:
1. Конкретное время: **Ayer fui al cine**
2. Определенный период: **Viví en Madrid dos años**
3. Последовательность событий: **Me levanté, desayuné y salí**

## Слова-маркеры:
- **ayer** (вчера)
- **anteayer** (позавчера)
- **el año pasado** (в прошлом году)
- **la semana pasada** (на прошлой неделе)
- **el otro día** (на днях)
- **hace dos días/semanas/meses** (два дня/недели/месяца назад)
      `,
      examples: [
        { spanish: 'Ayer comí en un restaurante italiano', translation: 'Вчера я ел в итальянском ресторане' },
        { spanish: 'El año pasado fui a España', translation: 'В прошлом году я ездил в Испанию' },
        { spanish: 'Hice la tarea anoche', translation: 'Я сделал домашку вчера вечером' },
        { spanish: 'Vinieron a visitarme la semana pasada', translation: 'Они приехали навестить меня на прошлой неделе' }
      ]
    },
    vocabulary: [
      { word: 'ayer', translation: 'вчера', audioUrl: null },
      { word: 'anteayer', translation: 'позавчера', audioUrl: null },
      { word: 'el año pasado', translation: 'в прошлом году', audioUrl: null },
      { word: 'la semana pasada', translation: 'на прошлой неделе', audioUrl: null },
      { word: 'el mes pasado', translation: 'в прошлом месяце', audioUrl: null },
      { word: 'hace', translation: 'назад (hace dos días)', audioUrl: null },
      { word: 'anoche', translation: 'вчера вечером', audioUrl: null },
      { word: 'visitar', translation: 'посещать', audioUrl: null },
      { word: 'comprar', translation: 'покупать', audioUrl: null },
      { word: 'viajar', translation: 'путешествовать', audioUrl: null },
      { word: 'recuerdo', translation: 'сувенир, воспоминание', audioUrl: null },
      { word: 'inolvidable', translation: 'незабываемый', audioUrl: null }
    ],
    readingText: {
      title: 'Mis vacaciones en Italia',
      content: `El verano pasado realicé el viaje de mis sueños: fui a Italia con mi mejor amiga Laura. Fue una experiencia absolutamente inolvidable.

Salimos de Madrid el 15 de julio. Nuestro primer destino fue Roma. Llegamos por la tarde y fuimos directamente al hotel. Era un pequeño hotel cerca del Vaticano, muy acogedor. Esa noche caminamos por el barrio y cenamos en una trattoria tradicional. Comimos pizza y pasta deliciosas.

Al día siguiente visitamos el Coliseo. ¡Fue impresionante! También vimos el Foro Romano y la Fontana di Trevi. Echamos monedas en la fuente e hicimos un deseo. Laura pidió encontrar el amor, y yo pedí volver a Italia algún día.

Después de tres días en Roma, tomamos el tren a Florencia. La ciudad nos enamoró completamente. Visitamos la Galería Uffizi y vimos obras maestras de Botticelli y Leonardo da Vinci. Laura compró muchos recuerdos: bolsos de cuero, joyas y chocolates.

Nuestro último destino fue Venecia. Llegamos en vaporetto desde el aeropuerto. La ciudad flotante nos dejó sin palabras. Paseamos en góndola por los canales, visitamos la Basílica de San Marcos y nos perdimos por las callejuelas encantadoras.

El viaje duró diez días. Cuando volvimos a España, estábamos cansadas pero felices. Todavía hablamos de ese viaje y miramos las fotos con nostalgia. Definitivamente quiero volver.`,
      translation: 'Прошлым летом я совершила путешествие своей мечты: поехала в Италию с моей лучшей подругой Лаурой...'
    },
    exercises: ['ex-4-2-1', 'ex-4-2-2', 'ex-4-2-3', 'ex-4-2-4', 'ex-4-2-5']
  },

  'lesson-4-3': {
    id: 'lesson-4-3',
    title: 'Урок 3: Pretérito imperfecto',
    moduleId: 'module-4',
    grammar: {
      title: 'Pretérito imperfecto vs Indefinido',
      content: `
# Pretérito imperfecto (Незавершенное прошедшее время)

## Образование:

**Глаголы на -AR (hablar):**
| Лицо | Окончание | Пример |
|------|-----------|--------|
| yo | -aba | hablaba |
| tú | -abas | hablabas |
| él/ella/usted | -aba | hablaba |
| nosotros/as | -ábamos | hablábamos |
| vosotros/as | -abais | hablabais |
| ellos/ellas/ustedes | -aban | hablaban |

**Глаголы на -ER/-IR (comer/vivir):**
| Лицо | Окончание | Пример |
|------|-----------|--------|
| yo | -ía | comía, vivía |
| tú | -ías | comías, vivías |
| él/ella/usted | -ía | comía, vivía |
| nosotros/as | -íamos | comíamos, vivíamos |
| vosotros/as | -íais | comíais, vivíais |
| ellos/ellas/ustedes | -ían | comían, vivían |

## Неправильные глаголы (только 3!):

**SER:** era, eras, era, éramos, erais, eran
**IR:** iba, ibas, iba, íbamos, ibais, iban
**VER:** veía, veías, veía, veíamos, veíais, veían

## Употребление Imperfecto:

1. **Описание в прошлом:**
   - Era una casa grande (Это был большой дом)
   - Hacía frío (Было холодно)

2. **Привычные действия:**
   - Todos los días iba al parque (Каждый день я ходил в парк)
   - Siempre comíamos juntos (Мы всегда ели вместе)

3. **Фоновое действие:**
   - Mientras leía, sonó el teléfono (Пока я читал, зазвонил телефон)

4. **Время, возраст в прошлом:**
   - Eran las tres (Было три часа)
   - Tenía 10 años (Мне было 10 лет)

## Imperfecto vs Indefinido:

**Indefinido** (законченное действие):
- Ayer fui al cine (Вчера я ходил в кино - и вернулся)
- Viví en Madrid dos años (Я жил в Мадриде 2 года - но больше не живу)

**Imperfecto** (незаконченное, фон, привычка):
- De niño iba al cine cada sábado (Ребенком я ходил в кино каждую субботу)
- Vivía en Madrid cuando te conocí (Я жил в Мадриде, когда познакомился с тобой)

## Комбинация:
**Imperfecto (фон) + Indefinido (действие):**
- Mientras **dormía** (imperfecto), **sonó** (indefinido) el teléfono
- **Llovía** (imperfecto) cuando **salí** (indefinido) de casa
      `,
      examples: [
        { spanish: 'Cuando era niño, jugaba fútbol', translation: 'Когда я был ребенком, я играл в футбол' },
        { spanish: 'Vivíamos en una casa grande', translation: 'Мы жили в большом доме' },
        { spanish: 'Mientras cocinaba, llegaron mis amigos', translation: 'Пока я готовил, пришли мои друзья' },
        { spanish: 'Hacía sol cuando salimos', translation: 'Было солнечно, когда мы вышли' }
      ]
    },
    vocabulary: [
      { word: 'niño/a', translation: 'ребенок', audioUrl: null },
      { word: 'infancia', translation: 'детство', audioUrl: null },
      { word: 'cuando', translation: 'когда', audioUrl: null },
      { word: 'mientras', translation: 'пока, в то время как', audioUrl: null },
      { word: 'siempre', translation: 'всегда', audioUrl: null },
      { word: 'todos los días', translation: 'каждый день', audioUrl: null },
      { word: 'normalmente', translation: 'обычно', audioUrl: null },
      { word: 'jugar', translation: 'играть', audioUrl: null },
      { word: 'contar', translation: 'рассказывать', audioUrl: null },
      { word: 'historia', translation: 'история, рассказ', audioUrl: null },
      { word: 'juventud', translation: 'молодость', audioUrl: null },
      { word: 'feliz', translation: 'счастливый', audioUrl: null }
    ],
    readingText: {
      title: 'Recuerdos de mi infancia',
      content: `Cuando pienso en mi infancia, siempre sonrío. Eran tiempos muy felices y sencillos.

Vivía en un pueblo pequeño cerca de Granada. Nuestra casa era antigua pero acogedora. Tenía un jardín enorme donde mi hermano y yo jugábamos durante horas. Había un árbol grande - un olivo centenario - donde construimos una casa en el árbol. Era nuestro lugar secreto.

Todos los días me levantaba temprano. Mi madre preparaba el desayuno mientras yo me vestía. Normalmente tomábamos chocolate caliente con churros. Después iba a la escuela a pie. El camino duraba unos veinte minutos, pero me gustaba porque pasaba por el parque y veía a los pájaros.

En la escuela tenía muchos amigos. Mi mejor amigo se llamaba Carlos. Éramos inseparables. Siempre nos sentábamos juntos y compartíamos nuestras meriendas. Después de las clases jugábamos al fútbol en el patio. Yo era portero y Carlos era delantero. Formábamos un gran equipo.

Los fines de semana eran especiales. Los sábados por la mañana iba al mercado con mi abuela. Ella compraba verduras frescas y hablaba con todos los vendedores. Conocía a todo el mundo. A mí me compraba dulces - siempre los mismos: caramelos de menta.

Los domingos comíamos en casa de mis abuelos. Mi abuela cocinaba platos deliciosos: paella, cocido, gazpacho en verano. Toda la familia se reunía: tíos, tías, primos. Después de comer, mi abuelo nos contaba historias de cuando era joven. Nosotros escuchábamos fascinados.

En verano íbamos a la playa. Pasábamos todo el mes de agosto en un apartamento pequeño en Málaga. Mis padres alquilaban el mismo apartamento cada año. Estaba a cinco minutos de la playa. Todos los días nadábamos, construíamos castillos de arena y jugábamos al voleibol. Por las noches paseábamos por el paseo marítimo y comíamos helado.

Ahora vivo en Madrid. Trabajo en una oficina y mi vida es muy diferente. Pero cuando vuelvo al pueblo y veo el olivo de mi infancia, todos esos recuerdos vuelven. Me siento otra vez ese niño feliz que jugaba sin preocupaciones.`,
      translation: 'Когда я думаю о своем детстве, я всегда улыбаюсь. Это были очень счастливые и простые времена...'
    },
    exercises: ['ex-4-3-1', 'ex-4-3-2', 'ex-4-3-3', 'ex-4-3-4', 'ex-4-3-5']
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
  },

  // Упражнения модуля 2
  'ex-2-1-1': {
    id: 'ex-2-1-1',
    type: 'grammar',
    title: 'Спряжение -AR глаголов',
    description: 'Выберите правильную форму глагола',
    questions: [
      { sentence: 'Yo ___ (hablar) español', options: ['hablo', 'hablas', 'habla', 'hablan'], correct: 0 },
      { sentence: 'Tú ___ (estudiar) mucho', options: ['estudio', 'estudias', 'estudia', 'estudian'], correct: 1 },
      { sentence: 'Ella ___ (trabajar) aquí', options: ['trabajo', 'trabajas', 'trabaja', 'trabajamos'], correct: 2 },
      { sentence: 'Nosotros ___ (caminar) en el parque', options: ['camino', 'caminas', 'camina', 'caminamos'], correct: 3 },
      { sentence: 'Ellos ___ (bailar) salsa', options: ['bailo', 'bailas', 'baila', 'bailan'], correct: 3 }
    ]
  },
  'ex-2-1-2': {
    id: 'ex-2-1-2',
    type: 'vocabulary',
    title: 'Глаголы действия',
    description: 'Сопоставьте глагол с переводом',
    questions: [
      { spanish: 'hablar', options: ['работать', 'говорить', 'учиться', 'готовить'], correct: 1 },
      { spanish: 'cocinar', options: ['танцевать', 'петь', 'готовить', 'покупать'], correct: 2 },
      { spanish: 'bailar', options: ['танцевать', 'гулять', 'работать', 'слушать'], correct: 0 },
      { spanish: 'comprar', options: ['готовить', 'покупать', 'продавать', 'учиться'], correct: 1 }
    ]
  },
  'ex-2-1-3': {
    id: 'ex-2-1-3',
    type: 'reading',
    title: 'Чтение: Rutina diaria',
    description: 'Прочитайте текст и ответьте',
    text: 'Ana se levanta a las siete. Desayuna café y camina a la universidad. Estudia literatura. Por las tardes trabaja en una cafetería.',
    questions: [
      { question: 'Во сколько встает Ана?', options: ['В 6:00', 'В 7:00', 'В 8:00', 'В 9:00'], correct: 1 },
      { question: 'Что изучает Ана?', options: ['Математику', 'Литературу', 'Медицину', 'Историю'], correct: 1 },
      { question: 'Где работает Ана?', options: ['В школе', 'В больнице', 'В кафетерии', 'В музее'], correct: 2 }
    ]
  },
  'ex-2-1-4': {
    id: 'ex-2-1-4',
    type: 'writing',
    title: 'Переведите предложения',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Я говорю', correct: 'hablo' },
      { russian: 'Ты работаешь', correct: 'trabajas' },
      { russian: 'Она учится', correct: 'estudia' },
      { russian: 'Мы гуляем', correct: 'caminamos' }
    ]
  },
  'ex-2-1-5': {
    id: 'ex-2-1-5',
    type: 'fillblank',
    title: 'Заполните пропуски',
    description: 'Вставьте правильную форму глагола',
    questions: [
      { sentence: 'Yo _____ (estudiar) español todos los días', verb: 'estudiar', correct: 'estudio' },
      { sentence: 'María _____ (cocinar) muy bien', verb: 'cocinar', correct: 'cocina' },
      { sentence: 'Nosotros _____ (hablar) tres idiomas', verb: 'hablar', correct: 'hablamos' }
    ]
  },
  'ex-2-2-1': {
    id: 'ex-2-2-1',
    type: 'grammar',
    title: 'Глаголы -ER и -IR',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Yo ___ (comer) pasta', options: ['como', 'comes', 'come', 'comen'], correct: 0 },
      { sentence: 'Ellos ___ (vivir) en España', options: ['vivo', 'vives', 'vive', 'viven'], correct: 3 },
      { sentence: 'Tú ___ (beber) agua', options: ['bebo', 'bebes', 'bebe', 'bebemos'], correct: 1 },
      { sentence: 'Nosotros ___ (escribir) emails', options: ['escribo', 'escribes', 'escribe', 'escribimos'], correct: 3 }
    ]
  },
  'ex-2-2-2': {
    id: 'ex-2-2-2',
    type: 'vocabulary',
    title: 'Словарный запас -ER/-IR',
    description: 'Выберите перевод',
    questions: [
      { spanish: 'leer', options: ['писать', 'читать', 'жить', 'пить'], correct: 1 },
      { spanish: 'vivir', options: ['есть', 'пить', 'жить', 'открывать'], correct: 2 },
      { spanish: 'escribir', options: ['писать', 'читать', 'получать', 'продавать'], correct: 0 }
    ]
  },
  'ex-2-2-3': {
    id: 'ex-2-2-3',
    type: 'reading',
    title: 'Чтение: Familia García',
    description: 'Ответьте на вопросы о тексте',
    text: 'La familia García vive en Madrid. Antonio es profesor y Carmen es médica. Pablo lee libros y Lucía aprende piano.',
    questions: [
      { question: 'Где живет семья?', options: ['В Барселоне', 'В Мадриде', 'В Валенсии', 'В Севилье'], correct: 1 },
      { question: 'Кто такая Кармен?', options: ['Учительница', 'Врач', 'Медсестра', 'Инженер'], correct: 1 },
      { question: 'Что делает Люсия?', options: ['Читает книги', 'Учит пиано', 'Рисует', 'Играет в футбол'], correct: 1 }
    ]
  },
  'ex-2-2-4': {
    id: 'ex-2-2-4',
    type: 'writing',
    title: 'Составьте предложения',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Я ем', correct: 'como' },
      { russian: 'Они живут', correct: 'viven' },
      { russian: 'Мы читаем', correct: 'leemos' },
      { russian: 'Ты пишешь', correct: 'escribes' }
    ]
  },
  'ex-2-3-1': {
    id: 'ex-2-3-1',
    type: 'grammar',
    title: 'Неправильные глаголы',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Yo ___ (ir) al cine', options: ['voy', 'vas', 'va', 'van'], correct: 0 },
      { sentence: 'Tú ___ (hacer) ejercicio', options: ['hago', 'haces', 'hace', 'hacen'], correct: 1 },
      { sentence: 'Ella ___ (estar) en casa', options: ['estoy', 'estás', 'está', 'están'], correct: 2 },
      { sentence: 'Nosotros ___ (venir) mañana', options: ['vengo', 'vienes', 'viene', 'venimos'], correct: 3 }
    ]
  },
  'ex-2-3-2': {
    id: 'ex-2-3-2',
    type: 'ser-estar',
    title: 'SER vs ESTAR',
    description: 'Выберите правильный глагол',
    questions: [
      { sentence: '___ alto (я высокий - постоянное)', options: ['Soy', 'Estoy'], correct: 0 },
      { sentence: '___ cansado (я уставший - временное)', options: ['Soy', 'Estoy'], correct: 1 },
      { sentence: 'María ___ médica (профессия)', options: ['es', 'está'], correct: 0 },
      { sentence: 'El libro ___ en la mesa (местонахождение)', options: ['es', 'está'], correct: 1 }
    ]
  },
  'ex-2-3-3': {
    id: 'ex-2-3-3',
    type: 'writing',
    title: 'Неправильные глаголы',
    description: 'Напишите форму глагола',
    questions: [
      { russian: 'Я иду (ir)', correct: 'voy' },
      { russian: 'Ты делаешь (hacer)', correct: 'haces' },
      { russian: 'Мы находимся (estar)', correct: 'estamos' }
    ]
  },

  // Упражнения модуля 3
  'ex-3-1-1': {
    id: 'ex-3-1-1',
    type: 'vocabulary',
    title: 'Семья',
    description: 'Выберите правильный перевод',
    questions: [
      { spanish: 'padre', options: ['мать', 'отец', 'брат', 'дедушка'], correct: 1 },
      { spanish: 'hermana', options: ['сестра', 'брат', 'мать', 'тетя'], correct: 0 },
      { spanish: 'abuelo', options: ['отец', 'дядя', 'дедушка', 'брат'], correct: 2 },
      { spanish: 'tío', options: ['брат', 'дядя', 'отец', 'дедушка'], correct: 1 }
    ]
  },
  'ex-3-1-2': {
    id: 'ex-3-1-2',
    type: 'grammar',
    title: 'Притяжательные местоимения',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: '___ padre (мой отец)', options: ['Mi', 'Tu', 'Su', 'Nuestro'], correct: 0 },
      { sentence: '___ hermanos (твои братья)', options: ['Mis', 'Tus', 'Sus', 'Nuestros'], correct: 1 },
      { sentence: '___ casa (наш дом)', options: ['Mi', 'Tu', 'Su', 'Nuestra'], correct: 3 },
      { sentence: '___ hijos (их дети)', options: ['Mis', 'Tus', 'Sus', 'Nuestros'], correct: 2 }
    ]
  },
  'ex-3-1-3': {
    id: 'ex-3-1-3',
    type: 'reading',
    title: 'Чтение: Mi familia',
    description: 'Ответьте на вопросы о семье Карлоса',
    text: 'Carlos vive con sus padres, dos hermanos y su abuela. Su padre es ingeniero y su madre es profesora. Pedro estudia medicina y Laura dibuja.',
    questions: [
      { question: 'Сколько человек в семье Карлоса?', options: ['4', '5', '6', '7'], correct: 2 },
      { question: 'Кто такой Педро?', options: ['Отец', 'Дядя', 'Брат', 'Дедушка'], correct: 2 },
      { question: 'Что изучает Педро?', options: ['Литературу', 'Медицину', 'Инженерию', 'Музыку'], correct: 1 }
    ]
  },
  'ex-3-1-4': {
    id: 'ex-3-1-4',
    type: 'writing',
    title: 'О семье',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'моя семья', correct: 'mi familia' },
      { russian: 'твоя мать', correct: 'tu madre' },
      { russian: 'наш отец', correct: 'nuestro padre' },
      { russian: 'их бабушка', correct: 'su abuela' }
    ]
  },
  'ex-3-2-1': {
    id: 'ex-3-2-1',
    type: 'vocabulary',
    title: 'Профессии',
    description: 'Выберите перевод профессии',
    questions: [
      { spanish: 'médico', options: ['учитель', 'врач', 'инженер', 'повар'], correct: 1 },
      { spanish: 'profesor', options: ['учитель', 'студент', 'врач', 'писатель'], correct: 0 },
      { spanish: 'cocinero', options: ['врач', 'учитель', 'повар', 'певец'], correct: 2 },
      { spanish: 'escritor', options: ['певец', 'писатель', 'учитель', 'врач'], correct: 1 }
    ]
  },
  'ex-3-2-2': {
    id: 'ex-3-2-2',
    type: 'articles',
    title: 'Артикли',
    description: 'Выберите правильный артикль',
    questions: [
      { word: 'libro (книга)', options: ['el', 'la', 'los', 'las'], correct: 0 },
      { word: 'casa (дом)', options: ['el', 'la', 'los', 'las'], correct: 1 },
      { word: 'libros (книги)', options: ['el', 'la', 'los', 'las'], correct: 2 },
      { word: 'casas (дома)', options: ['el', 'la', 'los', 'las'], correct: 3 }
    ]
  },
  'ex-3-2-3': {
    id: 'ex-3-2-3',
    type: 'writing',
    title: 'Профессии с артиклями',
    description: 'Напишите с правильным артиклем',
    questions: [
      { russian: 'врач (муж.)', correct: 'el médico' },
      { russian: 'учительница', correct: 'la profesora' },
      { russian: 'инженеры (мн.ч.)', correct: 'los ingenieros' }
    ]
  },
  'ex-3-3-1': {
    id: 'ex-3-3-1',
    type: 'grammar',
    title: 'Глагол GUSTAR',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Me ___ el café (ед.ч.)', options: ['gusta', 'gustan', 'gustas', 'gusto'], correct: 0 },
      { sentence: 'Te ___ los deportes (мн.ч.)', options: ['gusta', 'gustan', 'gustas', 'gusto'], correct: 1 },
      { sentence: 'Nos ___ bailar', options: ['gusta', 'gustan', 'gustamos', 'gusto'], correct: 0 },
      { sentence: 'Les ___ las películas', options: ['gusta', 'gustan', 'gustas', 'gusto'], correct: 1 }
    ]
  },
  'ex-3-3-2': {
    id: 'ex-3-3-2',
    type: 'vocabulary',
    title: 'Хобби и интересы',
    description: 'Сопоставьте слова',
    questions: [
      { spanish: 'deporte', options: ['музыка', 'спорт', 'кино', 'книга'], correct: 1 },
      { spanish: 'película', options: ['фильм', 'книга', 'музыка', 'спорт'], correct: 0 },
      { spanish: 'natación', options: ['футбол', 'плавание', 'живопись', 'фотография'], correct: 1 }
    ]
  },
  'ex-3-3-3': {
    id: 'ex-3-3-3',
    type: 'writing',
    title: 'Что вам нравится?',
    description: 'Напишите по-испански',
    questions: [
      { russian: 'Мне нравится музыка', correct: 'me gusta la música' },
      { russian: 'Тебе нравятся книги', correct: 'te gustan los libros' },
      { russian: 'Нам нравится путешествовать', correct: 'nos gusta viajar' }
    ]
  },

  // МОДУЛЬ 4: Прошедшее время (A2)
  'ex-4-1-1': {
    id: 'ex-4-1-1',
    type: 'grammar',
    title: 'Pretérito perfecto - формы',
    description: 'Выберите правильную форму причастия',
    questions: [
      { sentence: 'He ___ (hablar) con María', options: ['hablado', 'hablido', 'hablando', 'hablar'], correct: 0 },
      { sentence: 'Has ___ (comer) paella?', options: ['comado', 'comido', 'comiendo', 'comer'], correct: 1 },
      { sentence: 'Hemos ___ (vivir) aquí 5 años', options: ['vivado', 'viviendo', 'vivido', 'vivir'], correct: 2 },
      { sentence: 'Han ___ (estudiar) mucho', options: ['estudiado', 'estudido', 'estudiando', 'estudiar'], correct: 0 },
      { sentence: 'Ha ___ (escribir) un libro', options: ['escribado', 'escribido', 'escribiendo', 'escribir'], correct: 1 }
    ]
  },
  'ex-4-1-2': {
    id: 'ex-4-1-2',
    type: 'grammar',
    title: 'Неправильные причастия',
    description: 'Выберите правильную форму неправильного причастия',
    questions: [
      { sentence: 'He ___ (hacer) la tarea', options: ['hacido', 'hecho', 'haciendo', 'hacer'], correct: 1 },
      { sentence: 'Has ___ (ver) la película?', options: ['veído', 'vido', 'visto', 'ver'], correct: 2 },
      { sentence: 'Hemos ___ (decir) la verdad', options: ['decido', 'dicho', 'diciendo', 'decir'], correct: 1 },
      { sentence: 'Han ___ (poner) la mesa', options: ['ponido', 'puesto', 'poniendo', 'poner'], correct: 1 },
      { sentence: '¿Has ___ (volver) a casa?', options: ['volvido', 'volvido', 'vuelto', 'volver'], correct: 2 }
    ]
  },
  'ex-4-1-3': {
    id: 'ex-4-1-3',
    type: 'reading',
    title: 'Чтение: Experiencias recientes',
    description: 'Прочитайте текст и ответьте на вопросы',
    text: 'Esta semana ha sido muy interesante. El lunes he visitado a mis abuelos. El martes mi hermana ha llegado de Barcelona. Hemos comido juntas en un restaurante italiano. También he terminado un proyecto importante del trabajo. ¿Y tú? ¿Qué has hecho esta semana?',
    questions: [
      { question: 'Когда автор посетил бабушку и дедушку?', options: ['В понедельник', 'Во вторник', 'В среду', 'В четверг'], correct: 0 },
      { question: 'Откуда приехала сестра?', options: ['Из Мадрида', 'Из Барселоны', 'Из Валенсии', 'Из Севильи'], correct: 1 },
      { question: 'Где они поели?', options: ['В испанском ресторане', 'В китайском ресторане', 'В итальянском ресторане', 'Дома'], correct: 2 },
      { question: 'Что закончил автор?', options: ['Книгу', 'Проект', 'Урок', 'Фильм'], correct: 1 }
    ]
  },
  'ex-4-1-4': {
    id: 'ex-4-1-4',
    type: 'fillblank',
    title: 'Заполните пропуски',
    description: 'Вставьте правильную форму pretérito perfecto',
    questions: [
      { sentence: 'Yo _____ (terminar) el trabajo', verb: 'terminar', correct: 'he terminado' },
      { sentence: 'Nosotros _____ (viajar) a Italia', verb: 'viajar', correct: 'hemos viajado' },
      { sentence: 'Ellos _____ (abrir) la tienda', verb: 'abrir', correct: 'han abierto' },
      { sentence: '¿Tú _____ (hacer) la cena?', verb: 'hacer', correct: 'has hecho' }
    ]
  },
  'ex-4-1-5': {
    id: 'ex-4-1-5',
    type: 'writing',
    title: 'Недавние действия',
    description: 'Переведите на испанский (pretérito perfecto)',
    questions: [
      { russian: 'Я посетил музей', correct: 'he visitado el museo' },
      { russian: 'Мы съели пиццу', correct: 'hemos comido pizza' },
      { russian: 'Она написала письмо', correct: 'ha escrito una carta' },
      { russian: 'Они увидели фильм', correct: 'han visto la película' }
    ]
  },

  'ex-4-2-1': {
    id: 'ex-4-2-1',
    type: 'grammar',
    title: 'Pretérito indefinido - правильные глаголы',
    description: 'Выберите правильную форму прошедшего времени',
    questions: [
      { sentence: 'Ayer yo ___ (hablar) con Pedro', options: ['hablé', 'hablaste', 'habló', 'hablaron'], correct: 0 },
      { sentence: 'El año pasado ___ (vivir) en Madrid', options: ['viví', 'viviste', 'vivió', 'vivimos'], correct: 0 },
      { sentence: 'Tú ___ (comer) demasiado', options: ['comí', 'comiste', 'comió', 'comieron'], correct: 1 },
      { sentence: 'Nosotros ___ (bailar) toda la noche', options: ['bailé', 'bailaste', 'bailó', 'bailamos'], correct: 3 },
      { sentence: 'Ellos ___ (estudiar) medicina', options: ['estudié', 'estudiaste', 'estudió', 'estudiaron'], correct: 3 }
    ]
  },
  'ex-4-2-2': {
    id: 'ex-4-2-2',
    type: 'grammar',
    title: 'Неправильные формы indefinido',
    description: 'Выберите правильную неправильную форму',
    questions: [
      { sentence: 'Yo ___ (ir) a Barcelona', options: ['fuí', 'fui', 'fue', 'fueron'], correct: 1 },
      { sentence: 'Ella ___ (estar) enferma', options: ['estuví', 'estuviste', 'estuvo', 'estuvieron'], correct: 2 },
      { sentence: 'Nosotros ___ (tener) suerte', options: ['tuve', 'tuviste', 'tuvo', 'tuvimos'], correct: 3 },
      { sentence: 'Ellos ___ (hacer) el proyecto', options: ['hice', 'hiciste', 'hizo', 'hicieron'], correct: 3 },
      { sentence: '¿Tú ___ (venir) a la fiesta?', options: ['vení', 'viniste', 'vino', 'vinieron'], correct: 1 }
    ]
  },
  'ex-4-2-3': {
    id: 'ex-4-2-3',
    type: 'vocabulary',
    title: 'Выражения времени',
    description: 'Выберите правильный перевод',
    questions: [
      { spanish: 'ayer', options: ['вчера', 'сегодня', 'завтра', 'сейчас'], correct: 0 },
      { spanish: 'el año pasado', options: ['в этом году', 'в прошлом году', 'в следующем году', 'каждый год'], correct: 1 },
      { spanish: 'anteayer', options: ['вчера', 'позавчера', 'завтра', 'послезавтра'], correct: 1 },
      { spanish: 'la semana pasada', options: ['на этой неделе', 'на следующей неделе', 'на прошлой неделе', 'каждую неделю'], correct: 2 }
    ]
  },
  'ex-4-2-4': {
    id: 'ex-4-2-4',
    type: 'reading',
    title: 'Чтение: Mis últimas vacaciones',
    description: 'Прочитайте о прошлых каникулах',
    text: 'El verano pasado fui a Italia con mi familia. Visitamos Roma, Florencia y Venecia. En Roma vimos el Coliseo y comimos pizza deliciosa. Mi hermana compró muchos recuerdos. En Florencia mi padre visitó varios museos. Yo preferí caminar por las calles antiguas. Después fuimos a Venecia y paseamos en góndola. Fue un viaje inolvidable.',
    questions: [
      { question: 'Куда поехала семья?', options: ['В Испанию', 'В Италию', 'Во Францию', 'В Грецию'], correct: 1 },
      { question: 'Что они видели в Риме?', options: ['Тауэр', 'Эйфелеву башню', 'Колизей', 'Акрополь'], correct: 2 },
      { question: 'Кто купил много сувениров?', options: ['Отец', 'Мать', 'Сестра', 'Автор'], correct: 2 },
      { question: 'Что они делали в Венеции?', options: ['Катались на гондоле', 'Посещали музеи', 'Покупали сувениры', 'Ели пиццу'], correct: 0 }
    ]
  },
  'ex-4-2-5': {
    id: 'ex-4-2-5',
    type: 'writing',
    title: 'Прошедшие события',
    description: 'Переведите на испанский (pretérito indefinido)',
    questions: [
      { russian: 'Я поехал в Мадрид', correct: 'fui a Madrid' },
      { russian: 'Она купила книгу', correct: 'compró un libro' },
      { russian: 'Мы посетили музей', correct: 'visitamos el museo' },
      { russian: 'Они говорили по-испански', correct: 'hablaron español' }
    ]
  },

  'ex-4-3-1': {
    id: 'ex-4-3-1',
    type: 'grammar',
    title: 'Pretérito imperfecto - формы',
    description: 'Выберите правильную форму imperfecto',
    questions: [
      { sentence: 'Cuando era niño, yo ___ (jugar) fútbol', options: ['jugaba', 'jugabas', 'jugábamos', 'jugaban'], correct: 0 },
      { sentence: 'Tú ___ (vivir) en una casa grande', options: ['vivía', 'vivías', 'vivíamos', 'vivían'], correct: 1 },
      { sentence: 'Nosotros ___ (comer) juntos todos los días', options: ['comía', 'comías', 'comíamos', 'comían'], correct: 2 },
      { sentence: 'Ellos ___ (estudiar) por las tardes', options: ['estudiaba', 'estudiabas', 'estudiábamos', 'estudiaban'], correct: 3 },
      { sentence: 'Mi abuela ___ (cocinar) muy bien', options: ['cocinaba', 'cocinabas', 'cocinábamos', 'cocinaban'], correct: 0 }
    ]
  },
  'ex-4-3-2': {
    id: 'ex-4-3-2',
    type: 'grammar',
    title: 'Imperfecto vs Indefinido',
    description: 'Выберите правильное время',
    questions: [
      { sentence: 'Ayer ___ (ir) al cine (законченное действие)', options: ['iba', 'fui', 'he ido', 'voy'], correct: 1 },
      { sentence: 'De niño ___ (ser) muy tímido (описание)', options: ['fue', 'era', 'es', 'ha sido'], correct: 1 },
      { sentence: 'Mientras yo ___ (leer), sonó el teléfono (фон)', options: ['leí', 'leía', 'he leído', 'leo'], correct: 1 },
      { sentence: 'Ella ___ (llegar) a las 8 (конкретное время)', options: ['llegaba', 'llegó', 'ha llegado', 'llega'], correct: 1 },
      { sentence: 'Todos los días ___ (caminar) al trabajo (привычка)', options: ['caminé', 'caminaba', 'he caminado', 'camino'], correct: 1 }
    ]
  },
  'ex-4-3-3': {
    id: 'ex-4-3-3',
    type: 'reading',
    title: 'Чтение: Mi infancia',
    description: 'Прочитайте воспоминания о детстве',
    text: 'Cuando era niño, vivía en un pueblo pequeño cerca de Granada. Teníamos una casa con un jardín grande donde jugaba con mis hermanos. Todos los días iba a la escuela a pie. Me gustaba mucho estudiar, especialmente matemáticas y literatura. Los fines de semana visitábamos a mis abuelos. Mi abuela siempre preparaba comida deliciosa y mi abuelo nos contaba historias fascinantes de su juventud. En verano íbamos a la playa y pasábamos semanas enteras nadando y jugando en la arena. Eran tiempos muy felices.',
    questions: [
      { question: 'Где жил автор?', options: ['В большом городе', 'В маленьком городе', 'В столице', 'За границей'], correct: 1 },
      { question: 'Как он добирался до школы?', options: ['На автобусе', 'На машине', 'Пешком', 'На велосипеде'], correct: 2 },
      { question: 'Что готовила бабушка?', options: ['Сладости', 'Вкусную еду', 'Только десерты', 'Ничего'], correct: 1 },
      { question: 'Что делали летом?', options: ['Оставались дома', 'Ходили в горы', 'Ездили на пляж', 'Работали'], correct: 2 }
    ]
  },
  'ex-4-3-4': {
    id: 'ex-4-3-4',
    type: 'fillblank',
    title: 'Заполните правильным временем',
    description: 'Выберите между imperfecto и indefinido',
    questions: [
      { sentence: 'Cuando _____ (ser) joven, viajaba mucho', verb: 'ser (описание)', correct: 'era' },
      { sentence: 'Ayer _____ (comprar) un libro nuevo', verb: 'comprar (законченное)', correct: 'compré' },
      { sentence: 'Mientras yo _____ (cocinar), llegó mi madre', verb: 'cocinar (фон)', correct: 'cocinaba' },
      { sentence: 'El verano pasado _____ (ir) a México', verb: 'ir (конкретное)', correct: 'fui' }
    ]
  },
  'ex-4-3-5': {
    id: 'ex-4-3-5',
    type: 'writing',
    title: 'Описание прошлого',
    description: 'Переведите используя правильное время',
    questions: [
      { russian: 'Я был студентом (описание)', correct: 'era estudiante' },
      { russian: 'Вчера я купил машину', correct: 'ayer compré un coche' },
      { russian: 'Каждый день я читал газету', correct: 'cada día leía el periódico' },
      { russian: 'Они приехали в 5 часов', correct: 'llegaron a las cinco' }
    ]
  }
}
