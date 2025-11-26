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
  },

  // МОДУЛЬ 5: Путешествия и места (A2)
  'lesson-5-1': {
    id: 'lesson-5-1',
    title: 'Урок 1: Транспорт и направления',
    moduleId: 'module-5',
    grammar: {
      title: 'Предлоги места и направления',
      content: `
# Предлоги места и направления

## Предлоги места (dónde):

| Испанский | Русский | Пример |
|-----------|---------|--------|
| **en** | в, на | Estoy **en** casa |
| **a** | в, на (направление) | Voy **a** Madrid |
| **de** | из | Vengo **de** Barcelona |
| **cerca de** | рядом с | Vivo **cerca de** la estación |
| **lejos de** | далеко от | Está **lejos del** centro |
| **delante de** | перед | **Delante del** hotel |
| **detrás de** | за, позади | **Detrás de** la iglesia |
| **al lado de** | рядом с | **Al lado del** museo |
| **enfrente de** | напротив | **Enfrente de** la plaza |
| **entre** | между | **Entre** el banco y la farmacia |

## IR + A (направление):
- Voy **a** la playa (Я иду на пляж)
- Vas **al** aeropuerto (Ты едешь в аэропорт)
- Van **a** España (Они едут в Испанию)

## Транспорт:

**EN + транспорт (внутри):**
- **en coche** (на машине)
- **en tren** (на поезде)
- **en avión** (на самолёте)
- **en autobús** (на автобусе)
- **en metro** (на метро)
- **en barco** (на корабле)

**A + без транспорта:**
- **a pie** (пешком)
- **a caballo** (на лошади)

## Глаголы движения:

- **ir** (идти, ехать)
- **venir** (приходить, приезжать)
- **llegar** (прибывать)
- **salir** (уходить, выезжать)
- **viajar** (путешествовать)
- **caminar** (идти пешком)

## Давать указания:

- **Sigue recto** - Иди прямо
- **Gira a la derecha** - Поверни направо
- **Gira a la izquierda** - Поверни налево
- **Cruza la calle** - Перейди улицу
- **Está a dos calles** - Через две улицы
      `,
      examples: [
        { spanish: 'Voy a la estación en metro', translation: 'Я еду на станцию на метро' },
        { spanish: 'El hotel está cerca del aeropuerto', translation: 'Отель находится рядом с аэропортом' },
        { spanish: 'Viajamos a Italia en avión', translation: 'Мы летим в Италию на самолёте' },
        { spanish: 'La farmacia está enfrente del banco', translation: 'Аптека находится напротив банка' }
      ]
    },
    vocabulary: [
      { word: 'aeropuerto', translation: 'аэропорт', audioUrl: null },
      { word: 'estación', translation: 'станция, вокзал', audioUrl: null },
      { word: 'tren', translation: 'поезд', audioUrl: null },
      { word: 'avión', translation: 'самолёт', audioUrl: null },
      { word: 'autobús', translation: 'автобус', audioUrl: null },
      { word: 'metro', translation: 'метро', audioUrl: null },
      { word: 'taxi', translation: 'такси', audioUrl: null },
      { word: 'billete', translation: 'билет', audioUrl: null },
      { word: 'maleta', translation: 'чемодан', audioUrl: null },
      { word: 'mochila', translation: 'рюкзак', audioUrl: null },
      { word: 'mapa', translation: 'карта', audioUrl: null },
      { word: 'derecha', translation: 'право', audioUrl: null },
      { word: 'izquierda', translation: 'лево', audioUrl: null },
      { word: 'recto', translation: 'прямо', audioUrl: null }
    ],
    readingText: {
      title: 'Un día en Barcelona',
      content: `Hoy es mi primer día en Barcelona y estoy muy emocionado. He llegado al aeropuerto de El Prat esta mañana a las 10. Desde el aeropuerto he tomado el tren hasta la estación de Sants. El viaje ha durado unos 25 minutos y ha costado 4 euros. Es muy conveniente.

Mi hotel está en el centro, cerca de la Plaza de Catalunya. Desde Sants he tomado el metro - la línea verde hasta Passeig de Gràcia. Mi hotel está a solo dos calles de allí, entre una librería antigua y una cafetería con terraza. Es un hotel pequeño pero acogedor.

Después de dejar mi maleta en la habitación, he decidido explorar la ciudad a pie. Barcelona es perfecta para caminar. He empezado por Las Ramblas, la calle más famosa de la ciudad. Está llena de turistas, artistas callejeros y vendedores de flores. El ambiente es increíble.

He caminado hasta el Barrio Gótico. Las calles son estrechas y medievales. Me he perdido varias veces, pero cada esquina tiene algo interesante. He encontrado la Catedral de Barcelona - es impresionante. Está en una plaza grande rodeada de edificios históricos.

Para el almuerzo he ido a un restaurante tradicional al lado del mercado de La Boquería. He comido paella de mariscos y he bebido sangría. Delicioso. El mercado está enfrente del restaurante y he entrado a ver. Hay frutas exóticas, jamones ibéricos, quesos artesanales... es un paraíso gastronómico.

Por la tarde he tomado el autobús turístico para ver la Sagrada Familia. Está un poco lejos del centro, pero el autobús para justo delante. La basílica de Gaudí es espectacular. He sacado muchas fotos.

Ahora estoy de vuelta en el hotel. Mañana quiero visitar el Parque Güell y la playa de la Barceloneta. He comprado un billete de metro para tres días. Barcelona me encanta. Es una ciudad perfecta para viajar.`,
      translation: 'Сегодня мой первый день в Барселоне и я очень взволнован. Я прилетел в аэропорт Эль-Прат сегодня утром в 10...'
    },
    exercises: ['ex-5-1-1', 'ex-5-1-2', 'ex-5-1-3', 'ex-5-1-4', 'ex-5-1-5']
  },

  'lesson-5-2': {
    id: 'lesson-5-2',
    title: 'Урок 2: В отеле и ресторане',
    moduleId: 'module-5',
    grammar: {
      title: 'Условное наклонение (Condicional simple)',
      content: `
# Condicional simple (Условное наклонение)

## Образование:
**Инфинитив + окончания**

| Лицо | Окончание | Hablar | Comer | Vivir |
|------|-----------|--------|-------|-------|
| yo | -ía | hablaría | comería | viviría |
| tú | -ías | hablarías | comerías | vivirías |
| él/ella/usted | -ía | hablaría | comería | viviría |
| nosotros/as | -íamos | hablaríamos | comeríamos | viviríamos |
| vosotros/as | -íais | hablaríais | comeríais | viviríais |
| ellos/ellas/ustedes | -ían | hablarían | comerían | vivirían |

## Неправильные основы:

| Инфинитив | Основа | Пример |
|-----------|--------|--------|
| hacer | har- | haría |
| decir | dir- | diría |
| poder | podr- | podría |
| poner | pondr- | pondría |
| salir | saldr- | saldría |
| tener | tendr- | tendría |
| venir | vendr- | vendría |
| saber | sabr- | sabría |
| querer | querr- | querría |
| haber | habr- | habría |

## Употребление:

1. **Вежливые просьбы:**
   - ¿**Podría** ayudarme? (Могли бы вы мне помочь?)
   - **Me gustaría** una habitación (Я хотел бы номер)
   - ¿**Tendría** una mesa libre? (У вас есть свободный столик?)

2. **Советы:**
   - **Deberías** visitar el museo (Тебе следует посетить музей)
   - Yo **comería** la paella (Я бы съел паэлью)

3. **Условия (с SI):**
   - Si tuviera dinero, **viajaría** por el mundo
   - Si pudiera, **me quedaría** más tiempo

## Полезные фразы для отеля:

- **¿Tiene habitaciones libres?** - У вас есть свободные номера?
- **Quisiera reservar una habitación** - Я хотел бы забронировать номер
- **¿Cuánto cuesta por noche?** - Сколько стоит за ночь?
- **¿Está incluido el desayuno?** - Завтрак включён?
- **¿A qué hora es el check-out?** - Во сколько выселение?

## Полезные фразы для ресторана:

- **¿Me podría traer el menú?** - Не могли бы вы принести меню?
- **Quisiera pedir...** - Я хотел бы заказать...
- **¿Qué me recomendaría?** - Что вы бы мне порекомендовали?
- **La cuenta, por favor** - Счёт, пожалуйста
      `,
      examples: [
        { spanish: '¿Podría darme una habitación con vistas al mar?', translation: 'Могли бы вы дать мне номер с видом на море?' },
        { spanish: 'Me gustaría reservar para dos personas', translation: 'Я хотел бы забронировать на двоих' },
        { spanish: '¿Qué me recomendaría del menú?', translation: 'Что бы вы порекомендовали из меню?' },
        { spanish: 'Querríamos una mesa para cuatro', translation: 'Мы хотели бы столик на четверых' }
      ]
    },
    vocabulary: [
      { word: 'hotel', translation: 'отель', audioUrl: null },
      { word: 'habitación', translation: 'номер (в отеле)', audioUrl: null },
      { word: 'reserva', translation: 'бронь', audioUrl: null },
      { word: 'recepción', translation: 'рецепция', audioUrl: null },
      { word: 'llave', translation: 'ключ', audioUrl: null },
      { word: 'restaurante', translation: 'ресторан', audioUrl: null },
      { word: 'menú', translation: 'меню', audioUrl: null },
      { word: 'camarero/a', translation: 'официант/ка', audioUrl: null },
      { word: 'cuenta', translation: 'счёт', audioUrl: null },
      { word: 'propina', translation: 'чаевые', audioUrl: null },
      { word: 'plato', translation: 'блюдо', audioUrl: null },
      { word: 'postre', translation: 'десерт', audioUrl: null },
      { word: 'vino', translation: 'вино', audioUrl: null },
      { word: 'agua', translation: 'вода', audioUrl: null }
    ],
    readingText: {
      title: 'Experiencia en un hotel español',
      content: `Cuando llegué al Hotel Mediterráneo en Valencia, estaba un poco nerviosa. Era mi primera vez viajando sola por España. Pero desde el primer momento todo fue perfecto.

En la recepción me atendió una señora muy amable. Le dije: "Buenas tardes, tengo una reserva a nombre de Elena Petrov." Ella sonrió y me respondió: "Bienvenida, señorita Petrov. ¿Me podría mostrar su pasaporte, por favor?"

Mientras ella preparaba mi habitación, me preguntó: "¿Le gustaría una habitación con vistas al mar o al jardín?" Le respondí que preferiría vistas al mar. "Excelente elección", dijo ella. "Le daría la habitación 305. Tiene un balcón precioso."

Me explicó que el desayuno estaba incluido y se servía de 7 a 11 de la mañana en el restaurante del tercer piso. También me informó que el hotel tenía piscina, gimnasio y spa. Me dio la llave y un empleado llevó mi maleta a la habitación.

La habitación era hermosa. Tenía una cama grande, un escritorio, un sofá y un baño moderno. Desde el balcón se veía el mar Mediterráneo. Era espectacular.

Esa noche decidí cenar en el restaurante del hotel. El camarero fue muy atento. Me preguntó: "¿Qué le gustaría beber?" Pedí una copa de vino blanco. Luego me dijo: "De primer plato le recomendaría la ensalada valenciana o el gazpacho. De segundo, nuestra especialidad es la paella de mariscos."

Seguí su consejo y pedí el gazpacho y la paella. Estaba delicioso. De postre probé la crema catalana - un postre típico de la región. Todo fue perfecto.

Al día siguiente, en el desayuno, había una gran variedad: frutas frescas, yogures, panes, jamón ibérico, quesos, zumos naturales... Comí en la terraza disfrutando de las vistas.

Antes de salir a explorar la ciudad, pregunté en recepción: "¿Me podría recomendar lugares para visitar?" La recepcionista me dio un mapa y marcó los lugares imprescindibles: la Ciudad de las Artes y las Ciencias, la Catedral, el Mercado Central y la playa de la Malvarrosa.

Después de tres días maravillosos, llegó el momento de hacer el check-out. Le dije a la recepcionista: "Ha sido una estancia perfecta. Muchas gracias por todo." Ella me respondió: "El placer fue nuestro. Esperamos verla pronto de nuevo."

Sin duda volvería a ese hotel. El servicio fue excelente y todo el personal muy profesional y amable.`,
      translation: 'Когда я приехала в отель Mediterráneo в Валенсии, я была немного нервной. Это был мой первый раз путешествия по Испании в одиночку...'
    },
    exercises: ['ex-5-2-1', 'ex-5-2-2', 'ex-5-2-3', 'ex-5-2-4', 'ex-5-2-5']
  },

  'lesson-5-3': {
    id: 'lesson-5-3',
    title: 'Урок 3: Достопримечательности',
    moduleId: 'module-5',
    grammar: {
      title: 'Сравнительная и превосходная степень',
      content: `
# Сравнительная и превосходная степень

## Сравнительная степень:

**MÁS + прилагательное + QUE** (более... чем):
- Madrid es **más grande que** Valencia
- Este museo es **más interesante que** aquel

**MENOS + прилагательное + QUE** (менее... чем):
- Este hotel es **menos caro que** el otro
- Barcelona es **menos calurosa que** Sevilla

**TAN + прилагательное + COMO** (такой же... как):
- Esta iglesia es **tan antigua como** la catedral
- El parque es **tan bonito como** el jardín

## Неправильные формы:

| Прилагательное | Сравнительная | Перевод |
|----------------|---------------|---------|
| bueno | mejor | лучше |
| malo | peor | хуже |
| grande | mayor | больше |
| pequeño | menor | меньше |

**Примеры:**
- Este restaurante es **mejor que** ese
- Esta habitación es **peor que** la otra

## Превосходная степень:

**EL/LA/LOS/LAS + MÁS/MENOS + прилагательное (+ DE)**:
- **La más** bonita ciudad **de** España
- **El más** famoso museo **del** mundo
- **Los más** importantes monumentos

**Con неправильными формами:**
- **El mejor** hotel de la ciudad
- **La peor** experiencia de mi vida
- **El mayor** parque de Barcelona

## TANTO/TAN (столько):

**TAN + прилагательное:**
- Es **tan** hermoso

**TANTO/A/OS/AS + существительное:**
- Hay **tantos** turistas
- Tiene **tanta** historia

## Полезная лексика для описания мест:

**Положительные:**
- impresionante (впечатляющий)
- hermoso/a (прекрасный)
- espectacular (потрясающий)
- histórico/a (исторический)
- pintoresco/a (живописный)

**Размеры:**
- enorme (огромный)
- grande (большой)
- pequeño/a (маленький)
- espacioso/a (просторный)

**Характеристики:**
- antiguo/a (старинный)
- moderno/a (современный)
- famoso/a (знаменитый)
- popular (популярный)
      `,
      examples: [
        { spanish: 'La Sagrada Familia es el monumento más famoso de Barcelona', translation: 'Саграда Фамилия - самый знаменитый памятник Барселоны' },
        { spanish: 'Este museo es tan interesante como aquel', translation: 'Этот музей такой же интересный, как и тот' },
        { spanish: 'Madrid tiene más museos que Valencia', translation: 'В Мадриде больше музеев, чем в Валенсии' },
        { spanish: 'Es la mejor paella que he comido', translation: 'Это лучшая паэлья, которую я ел' }
      ]
    },
    vocabulary: [
      { word: 'monumento', translation: 'памятник', audioUrl: null },
      { word: 'museo', translation: 'музей', audioUrl: null },
      { word: 'catedral', translation: 'собор', audioUrl: null },
      { word: 'iglesia', translation: 'церковь', audioUrl: null },
      { word: 'castillo', translation: 'замок', audioUrl: null },
      { word: 'palacio', translation: 'дворец', audioUrl: null },
      { word: 'plaza', translation: 'площадь', audioUrl: null },
      { word: 'parque', translation: 'парк', audioUrl: null },
      { word: 'playa', translation: 'пляж', audioUrl: null },
      { word: 'centro histórico', translation: 'исторический центр', audioUrl: null },
      { word: 'turista', translation: 'турист', audioUrl: null },
      { word: 'guía', translation: 'гид', audioUrl: null },
      { word: 'entrada', translation: 'вход, билет', audioUrl: null },
      { word: 'recorrido', translation: 'маршрут, экскурсия', audioUrl: null }
    ],
    readingText: {
      title: 'Las maravillas de España',
      content: `España es uno de los países más visitados del mundo, y no es difícil entender por qué. Tiene una increíble combinación de historia, cultura, gastronomía y belleza natural.

Para mí, la ciudad más impresionante de España es Granada. La Alhambra es el monumento más espectacular que he visto en mi vida. Es un palacio y fortaleza árabe construido en el siglo XIII. Los jardines del Generalife son tan hermosos como el palacio mismo. Desde allí se ve toda la ciudad y las montañas de Sierra Nevada. Es mejor visitarla en primavera cuando hace buen tiempo pero no hay tantos turistas como en verano.

Barcelona es probablemente la ciudad más famosa de España. La arquitectura de Gaudí es única en el mundo. La Sagrada Familia es más grande de lo que imaginaba - lleva más de 140 años en construcción y todavía no está terminada. El Parque Güell es menos conocido pero igualmente fascinante. Las vistas desde allí son espectaculares.

Madrid, la capital, tiene los mejores museos de España. El Museo del Prado es tan importante como el Louvre de París. Tiene obras maestras de Velázquez, Goya y El Greco. El Museo Reina Sofía es más moderno y alberga el famoso "Guernica" de Picasso. La ciudad es más grande que Barcelona pero menos turística.

Sevilla es la ciudad más calurosa de España, especialmente en verano. La Catedral de Sevilla es la más grande de estilo gótico en el mundo. La Giralda, su campanario, era originalmente un minarete árabe. El barrio de Santa Cruz es el más pintoresco de la ciudad, con sus calles estrechas y patios llenos de flores.

Valencia es menos conocida que Barcelona o Madrid, pero no menos interesante. La Ciudad de las Artes y las Ciencias es el complejo arquitectónico más moderno de España. Fue diseñado por Santiago Calatrava y es tan impresionante de día como de noche. Valencia también es famosa por su playa urbana - la Malvarrosa es una de las mejores playas urbanas de Europa.

No puedo olvidar Toledo, la ciudad medieval mejor conservada de España. Sus calles son tan estrechas que apenas pasa un coche. La catedral es una de las más ricas de España en arte. Desde el Mirador del Valle se tiene la vista más completa de la ciudad.

Santiago de Compostela, en Galicia, es el destino más importante de peregrinación cristiana después de Roma y Jerusalén. La catedral es impresionante y la plaza del Obradoiro es una de las más bonitas de Europa.

Cada región de España es diferente. El norte es más verde y lluvioso, el sur más caluroso y seco. La comida del norte es tan buena como la del sur, pero completamente diferente. En el norte se come más pescado y marisco, en el sur más jamón y aceite de oliva.

Para mí, España es el país más diverso de Europa. Tiene playas mejores que Italia, montañas tan altas como en Suiza, y una cultura tan rica como Francia. No es sorprendente que sea uno de los destinos turísticos más populares del mundo.`,
      translation: 'Испания - одна из самых посещаемых стран в мире, и нетрудно понять почему...'
    },
    exercises: ['ex-5-3-1', 'ex-5-3-2', 'ex-5-3-3', 'ex-5-3-4', 'ex-5-3-5']
  },

  // МОДУЛЬ 6: Будущее время (A2)
  'lesson-6-1': {
    id: 'lesson-6-1',
    title: 'Урок 1: Futuro simple',
    moduleId: 'module-6',
    grammar: {
      title: 'Futuro simple (Простое будущее время)',
      content: `
# Futuro simple

## Образование:
**Инфинитив + окончания**

| Лицо | Окончание | Hablar | Comer | Vivir |
|------|-----------|--------|-------|-------|
| yo | -é | hablaré | comeré | viviré |
| tú | -ás | hablarás | comerás | vivirás |
| él/ella/usted | -á | hablará | comerá | vivirá |
| nosotros/as | -emos | hablaremos | comeremos | viviremos |
| vosotros/as | -éis | hablaréis | comeréis | viviréis |
| ellos/ellas/ustedes | -án | hablarán | comerán | vivirán |

## Неправильные основы (те же, что в condicional):

| Инфинитив | Основа | Пример |
|-----------|--------|--------|
| hacer | har- | haré, harás, hará... |
| decir | dir- | diré, dirás, dirá... |
| poder | podr- | podré, podrás, podrá... |
| poner | pondr- | pondré, pondrás, pondrá... |
| salir | saldr- | saldré, saldrás, saldrá... |
| tener | tendr- | tendré, tendrás, tendrá... |
| venir | vendr- | vendré, vendrás, vendrá... |
| saber | sabr- | sabré, sabrás, sabrá... |
| querer | querr- | querré, querrás, querrá... |
| haber | habr- | habré, habrás, habrá... |

## Употребление:

1. **Предсказания о будущем:**
   - Mañana **lloverá** (Завтра будет дождь)
   - El año que viene **viajaré** a España (В следующем году я поеду в Испанию)

2. **Планы и намерения:**
   - **Estudiaré** medicina (Я буду изучать медицину)
   - **Nos mudaremos** a Barcelona (Мы переедем в Барселону)

3. **Предположения о настоящем:**
   - **Serán** las tres (Наверное, три часа)
   - **Estará** en casa (Он, должно быть, дома)

## Слова-маркеры:

- **mañana** (завтра)
- **pasado mañana** (послезавтра)
- **la semana que viene / próxima** (на следующей неделе)
- **el mes que viene / próximo** (в следующем месяце)
- **el año que viene / próximo** (в следующем году)
- **en el futuro** (в будущем)
- **dentro de...** (через...) - dentro de dos días (через два дня)
- **pronto** (скоро)

## IR + A + инфинитив (альтернатива):

Для ближайшего будущего часто используется конструкция IR + A + инфинитив:
- **Voy a estudiar** (Я буду учиться)
- **Vas a viajar** (Ты поедешь)
- **Van a comer** (Они будут есть)

Futuro simple более формально и используется для более отдаленного будущего.
      `,
      examples: [
        { spanish: 'Mañana iré al médico', translation: 'Завтра я пойду к врачу' },
        { spanish: 'El próximo año estudiaré en España', translation: 'В следующем году я буду учиться в Испании' },
        { spanish: 'Haremos un viaje a Italia', translation: 'Мы совершим поездку в Италию' },
        { spanish: '¿Qué harás este fin de semana?', translation: 'Что ты будешь делать в эти выходные?' }
      ]
    },
    vocabulary: [
      { word: 'mañana', translation: 'завтра', audioUrl: null },
      { word: 'pasado mañana', translation: 'послезавтра', audioUrl: null },
      { word: 'próximo/a', translation: 'следующий/ая', audioUrl: null },
      { word: 'futuro', translation: 'будущее', audioUrl: null },
      { word: 'plan', translation: 'план', audioUrl: null },
      { word: 'sueño', translation: 'мечта', audioUrl: null },
      { word: 'meta', translation: 'цель', audioUrl: null },
      { word: 'esperar', translation: 'ждать, надеяться', audioUrl: null },
      { word: 'lograr', translation: 'достигать', audioUrl: null },
      { word: 'conseguir', translation: 'получать, добиваться', audioUrl: null },
      { word: 'cambiar', translation: 'менять', audioUrl: null },
      { word: 'mejorar', translation: 'улучшать', audioUrl: null },
      { word: 'realizar', translation: 'осуществлять', audioUrl: null },
      { word: 'cumplir', translation: 'выполнять, исполняться', audioUrl: null }
    ],
    readingText: {
      title: 'Mis planes para el futuro',
      content: `Me llamo Andrea y tengo 22 años. Acabo de terminar la universidad y ahora estoy pensando en mis planes para el futuro. Tengo muchos sueños y metas que quiero cumplir.

El mes que viene empezaré a trabajar en una empresa de marketing digital en Madrid. Será mi primer trabajo profesional y estoy muy emocionada, aunque también un poco nerviosa. Trabajaré como asistente de marketing, pero espero que con el tiempo podré ascender a puestos más altos. Aprenderé mucho sobre redes sociales, publicidad digital y estrategias de contenido.

Este trabajo me permitirá independizarme económicamente. Dentro de tres meses me mudaré a mi propio apartamento. Ahora vivo con mis padres, pero llegó el momento de tener mi propio espacio. Será un apartamento pequeño en el barrio de Malasaña, cerca de mi oficina. No tendré que tomar el metro - podré ir andando en quince minutos.

En cuanto al dinero, ahorraré una parte de mi salario cada mes. Tengo un plan: dentro de dos años tendré suficiente dinero para viajar por Sudamérica durante tres meses. Siempre he soñado con conocer Argentina, Chile, Perú y Colombia. Visitaré Machu Picchu, bailaré tango en Buenos Aires, exploraré la Patagonia y haré senderismo en los Andes. Será el viaje de mi vida.

Después de ese viaje, volveré a España y buscaré nuevas oportunidades profesionales. Tal vez haré un máster en marketing internacional, o quizás me mudaré a Barcelona para trabajar allí. También pienso aprender portugués - será muy útil si quiero trabajar con clientes latinoamericanos.

En cinco años me veo como gerente de marketing en una empresa importante. Hablaré inglés, español y portugués con fluidez. Habré viajado por muchos países y tendré experiencia internacional. Quizás incluso viviré en otro país - me encantaría trabajar unos años en Londres o Berlín.

En el plano personal, no tengo prisa por casarme o tener hijos. Primero quiero enfocarme en mi carrera y en realizarme profesionalmente. Pero quien sabe - tal vez en diez años estaré casada y tendré una familia. Lo que sí sé es que no dejaré de viajar y aprender cosas nuevas.

También tengo planes más pequeños pero importantes. Haré ejercicio regularmente - iré al gimnasio tres veces por semana. Leeré al menos un libro al mes. Mantendré el contacto con mis amigos de la universidad aunque todos estaremos ocupados con nuestros trabajos. Visitaré a mis padres los domingos y seguiré siendo una buena hija.

El futuro me da un poco de miedo, pero sobre todo me emociona. Sé que habrá desafíos y momentos difíciles, pero confío en que podré superarlos. Trabajaré duro, aprenderé de mis errores y nunca dejaré de perseguir mis sueños. El futuro está lleno de posibilidades y estoy lista para aprovech arlas.`,
      translation: 'Меня зовут Андреа и мне 22 года. Я только что закончила университет и сейчас думаю о своих планах на будущее...'
    },
    exercises: ['ex-6-1-1', 'ex-6-1-2', 'ex-6-1-3', 'ex-6-1-4', 'ex-6-1-5']
  },

  'lesson-6-2': {
    id: 'lesson-6-2',
    title: 'Урок 2: Планы и намерения',
    moduleId: 'module-6',
    grammar: {
      title: 'IR + A + инфинитив vs Futuro simple',
      content: `
# IR + A + infinitivo (Ближайшее будущее)

## Образование:
**IR (настоящее время) + A + инфинитив**

| Лицо | IR | Пример |
|------|----|--------|
| yo | voy | voy a estudiar |
| tú | vas | vas a comer |
| él/ella/usted | va | va a viajar |
| nosotros/as | vamos | vamos a salir |
| vosotros/as | vais | vais a trabajar |
| ellos/ellas/ustedes | van | van a vivir |

## Употребление IR + A + инфинитив:

1. **Ближайшие планы:**
   - **Voy a comer** ahora (Я сейчас буду есть)
   - Esta tarde **vamos a ver** una película (Сегодня вечером мы посмотрим фильм)

2. **Намерения:**
   - **Voy a estudiar** medicina (Я буду изучать медицину)
   - **Van a casarse** el año que viene (Они поженятся в следующем году)

3. **Очевидное будущее:**
   - ¡Cuidado! **Vas a caer** (Осторожно! Ты упадешь)
   - Mira esas nubes - **va a llover** (Посмотри на эти тучи - будет дождь)

## Разница: IR + A vs Futuro simple

**IR + A + infinitivo:**
- Более разговорное
- Ближайшее будущее
- Четкие планы и намерения
- **Voy a comprar** un coche (Я собираюсь купить машину)

**Futuro simple:**
- Более формальное
- Отдаленное будущее
- Предсказания
- **Compraré** un coche algún día (Я куплю машину когда-нибудь)

## Выражение намерений и желаний:

**PENSAR + инфинитив** (думать, планировать):
- **Pienso** viajar a Italia (Я планирую поехать в Италию)

**QUERER + инфинитив** (хотеть):
- **Quiero** aprender español (Я хочу выучить испанский)

**ESPERAR + инфинитив** (надеяться):
- **Espero** conseguir un buen trabajo (Я надеюсь получить хорошую работу)

**TENER LA INTENCIÓN DE + инфинитив** (иметь намерение):
- **Tengo la intención de** mudarme (Я намереваюсь переехать)

**DESEAR + инфинитив** (желать):
- **Deseo** mejorar mi vida (Я желаю улучшить свою жизнь)

## Вопросы о планах:

- **¿Qué vas a hacer...?** - Что ты собираешься делать...?
- **¿Qué harás...?** - Что ты будешь делать...?
- **¿Tienes planes para...?** - У тебя есть планы на...?
- **¿Qué piensas hacer...?** - Что ты думаешь делать...?
      `,
      examples: [
        { spanish: 'Voy a estudiar esta noche', translation: 'Я буду учиться сегодня вечером' },
        { spanish: '¿Qué vas a hacer mañana?', translation: 'Что ты будешь делать завтра?' },
        { spanish: 'Pienso mudarme a Barcelona', translation: 'Я планирую переехать в Барселону' },
        { spanish: 'Espero conseguir un buen trabajo', translation: 'Я надеюсь получить хорошую работу' }
      ]
    },
    vocabulary: [
      { word: 'proyecto', translation: 'проект', audioUrl: null },
      { word: 'objetivo', translation: 'цель, задача', audioUrl: null },
      { word: 'intención', translation: 'намерение', audioUrl: null },
      { word: 'propósito', translation: 'цель, намерение', audioUrl: null },
      { word: 'decisión', translation: 'решение', audioUrl: null },
      { word: 'carrera', translation: 'карьера', audioUrl: null },
      { word: 'éxito', translation: 'успех', audioUrl: null },
      { word: 'fracaso', translation: 'неудача', audioUrl: null },
      { word: 'oportunidad', translation: 'возможность', audioUrl: null },
      { word: 'desafío', translation: 'вызов, проблема', audioUrl: null },
      { word: 'mudanza', translation: 'переезд', audioUrl: null },
      { word: 'cambio', translation: 'изменение', audioUrl: null },
      { word: 'empezar', translation: 'начинать', audioUrl: null },
      { word: 'terminar', translation: 'заканчивать', audioUrl: null }
    },
    readingText: {
      title: '¿Qué vamos a hacer este fin de semana?',
      content: `Es jueves por la noche y mis amigos y yo estamos planeando el fin de semana. Todos tenemos ideas diferentes sobre qué vamos a hacer.

María dice: "Yo voy a quedarme en casa el sábado por la mañana. Tengo que limpiar mi apartamento porque está muy desordenado. Después, por la tarde, voy a ir de compras. Necesito ropa nueva para mi entrevista de trabajo del lunes. Espero encontrar algo bonito y profesional en las rebajas."

Carlos tiene otros planes: "Yo pienso ir a la playa el sábado si hace buen tiempo. El pronóstico dice que va a hacer sol y 28 grados. Voy a salir temprano, sobre las ocho de la mañana, para evitar el tráfico. ¿Alguien quiere venir conmigo? Va a ser un día perfecto para nadar y tomar el sol."

"Yo no puedo", dice Laura. "El sábado voy a ayudar a mi hermano con su mudanza. Se va a mudar a un apartamento nuevo y necesita ayuda con los muebles. Vamos a empezar a las nueve y probablemente terminaremos por la tarde. Va a ser un día agotador, pero mi hermano me va a invitar a cenar después como agradecimiento."

Miguel interrumpe: "¿Y qué vamos a hacer el sábado por la noche? Pienso organizar una cena en mi casa. Voy a cocinar mi especialidad - paella valenciana. ¿Os apetece venir? Vamos a ser unos ocho personas. Va a ser muy divertido."

"¡Me encantaría!" responde María. "Pero primero tengo que terminar mis compras. ¿A qué hora va a ser la cena?"

"Vamos a empezar sobre las nueve", dice Miguel. "Así todos tendrán tiempo de hacer sus cosas durante el día. Voy a comprar los ingredientes el sábado por la mañana en el mercado. Necesito arroz, mariscos, pollo, verduras... Va a ser una paella auténtica."

Laura pregunta: "¿Necesitas ayuda para cocinar? Puedo llegar temprano si quieres. Voy a terminar con la mudanza sobre las seis."

"Sería genial", dice Miguel. "Vamos a preparar todo juntos. También voy a hacer una sangría. Va a ser una cena memorable."

Carlos añade: "Yo voy a traer el postre. Pasaré por la mejor pastelería de la ciudad. Voy a comprar una tarta de chocolate. ¿Os parece bien?"

"Perfecto", dice Miguel. "¿Y el domingo? ¿Qué vamos a hacer?"

"El domingo por la mañana voy a dormir hasta tarde", dice Laura riendo. "Después de la mudanza del sábado voy a estar agotada. No pienso levantarme antes de las once."

María sugiere: "¿Qué tal si vamos a almorzar juntos el domingo? Conozco un restaurante nuevo que quiero probar. Dicen que van a abrir un buffet los domingos. Vamos a poder comer todo lo que queramos por un precio fijo."

"Buena idea", dice Carlos. "Después del almuerzo podríamos ir al cine. Van a estrenar una película nueva que quiero ver. Tengo la intención de ver todas las películas nominadas a los Oscar este año."

Miguel concluye: "Entonces está decidido. El sábado cada uno va a hacer sus cosas durante el día, por la noche vamos a cenar en mi casa, y el domingo vamos a almorzar juntos y luego iremos al cine. Va a ser un fin de semana fantástico."

Todos estamos de acuerdo. Ya tenemos planes para el fin de semana. Ahora solo queda esperar a que llegue el sábado. Va a ser genial pasar tiempo juntos.`,
      translation: 'Сейчас вечер четверга, и мы с друзьями планируем выходные. У всех разные идеи о том, что мы будем делать...'
    },
    exercises: ['ex-6-2-1', 'ex-6-2-2', 'ex-6-2-3', 'ex-6-2-4', 'ex-6-2-5']
  },

  'lesson-6-3': {
    id: 'lesson-6-3',
    title: 'Урок 3: Предсказания и прогнозы',
    moduleId: 'module-6',
    grammar: {
      title: 'Futuro для предположений',
      content: `
# Futuro для предположений о настоящем и будущем

## Предположения о настоящем:

Futuro simple часто используется для предположений о том, что происходит СЕЙЧАС:

**¿Qué hora es?** - Который час?
- **Serán** las tres (Наверное, три часа)

**¿Dónde está Juan?** - Где Хуан?
- **Estará** en casa (Он, должно быть, дома)

**¿Quién llamó?** - Кто звонил?
- **Será** mi madre (Это, наверное, моя мама)

**¿Cuántos años tiene?** - Сколько ему лет?
- **Tendrá** unos 30 años (Ему, должно быть, около 30)

## Структура:

**Futuro simple = "наверное", "должно быть", "вероятно"**

- **Habrá** mucha gente (Наверное, много людей)
- **Costará** caro (Это, должно быть, дорого стоит)
- **Sabrá** la respuesta (Он, должно быть, знает ответ)

## Предсказания о будущем:

**Основанные на фактах:**
- Según el pronóstico, mañana **lloverá** (По прогнозу, завтра будет дождь)
- Con esta política económica, la inflación **aumentará** (С этой экономической политикой инфляция вырастет)

**Предсказания-мнения:**
- En 20 años **habrá** coches voladores (Через 20 лет будут летающие машины)
- La tecnología **cambiará** nuestras vidas (Технология изменит наши жизни)
- **Viviremos** más tiempo gracias a la medicina (Мы будем жить дольше благодаря медицине)

## Вероятность (PROBABLEMENTE, SEGURAMENTE, POSIBLEMENTE):

**PROBABLEMENTE + futuro** (вероятно):
- **Probablemente** lloverá mañana
- **Probablemente** no vendrá

**SEGURAMENTE + futuro** (наверняка):
- **Seguramente** aprobará el examen
- **Seguramente** llegará tarde

**POSIBLEMENTE + subjuntivo** (возможно):
- **Posiblemente** venga (Возможно, он придет)

**QUIZÁ(S) / TAL VEZ + futuro/subjuntivo** (может быть):
- **Quizás** viajaré a España
- **Tal vez** llueva

## Условные предложения (SI + presente, futuro):

- **Si** tengo tiempo, **iré** al cine (Если у меня будет время, я пойду в кино)
- **Si** estudias, **aprobarás** (Если ты будешь учиться, ты сдашь)
- **Si** hace buen tiempo, **iremos** a la playa (Если будет хорошая погода, мы пойдем на пляж)

## Выражения будущего:

- **En el futuro** (в будущем)
- **Dentro de X años** (через X лет)
- **En X años** (через X лет)
- **Para el año 2050** (к 2050 году)
- **Tarde o temprano** (рано или поздно)
- **Con el tiempo** (со временем)
- **A largo plazo** (в долгосрочной перспективе)
      `,
      examples: [
        { spanish: '¿Dónde está María? - Estará en casa', translation: 'Где Мария? - Она, должно быть, дома' },
        { spanish: 'Según el pronóstico, mañana lloverá', translation: 'По прогнозу, завтра будет дождь' },
        { spanish: 'Si estudias, aprobarás el examen', translation: 'Если ты будешь учиться, ты сдашь экзамен' },
        { spanish: 'En el futuro viviremos más años', translation: 'В будущем мы будем жить дольше' }
      ]
    },
    vocabulary: [
      { word: 'predicción', translation: 'предсказание', audioUrl: null },
      { word: 'pronóstico', translation: 'прогноз', audioUrl: null },
      { word: 'probable', translation: 'вероятный', audioUrl: null },
      { word: 'posible', translation: 'возможный', audioUrl: null },
      { word: 'seguro', translation: 'уверенный, точный', audioUrl: null },
      { word: 'tecnología', translation: 'технология', audioUrl: null },
      { word: 'ciencia', translation: 'наука', audioUrl: null },
      { word: 'avance', translation: 'прогресс, достижение', audioUrl: null },
      { word: 'desarrollo', translation: 'развитие', audioUrl: null },
      { word: 'innovación', translation: 'инновация', audioUrl: null },
      { word: 'clima', translation: 'климат', audioUrl: null },
      { word: 'medio ambiente', translation: 'окружающая среда', audioUrl: null },
      { word: 'cambio climático', translation: 'изменение климата', audioUrl: null },
      { word: 'sociedad', translation: 'общество', audioUrl: null }
    },
    readingText: {
      title: 'El mundo en 2050',
      content: `¿Cómo será el mundo en 2050? Los expertos hacen muchas predicciones sobre cómo viviremos dentro de 25 años. Algunas son optimistas, otras preocupantes. Veamos qué cambios probablemente veremos.

**Tecnología y vida diaria**

La tecnología cambiará radicalmente nuestra vida cotidiana. Según los expertos, la inteligencia artificial estará presente en todos los aspectos de nuestra vida. Tendremos asistentes virtuales mucho más avanzados que los actuales. Estos asistentes sabrán nuestras preferencias, anticiparán nuestras necesidades y nos ayudarán a tomar decisiones.

Los coches autónomos serán la norma. No necesitaremos conducir - el coche nos llevará a donde queramos mientras nosotros trabajamos, leemos o descansamos. Probablemente tampoco tendremos que comprar coches. Simplemente llamaremos a un vehículo cuando lo necesitemos.

En nuestras casas, todo estará conectado a internet. La nevera sabrá qué alimentos faltan y los pedirá automáticamente. Las luces, la calefacción y los electrodomésticos se ajustarán solos según nuestras rutinas. Viviremos en casas inteligentes que casi pensarán por sí mismas.

**Trabajo y educación**

La forma en que trabajamos cambiará completamente. Muchas profesiones que existen hoy desaparecerán, reemplazadas por robots e inteligencia artificial. Pero también surgirán nuevos trabajos que ahora ni siquiera podemos imaginar.

El trabajo remoto será completamente normal. Muchas personas no tendrán una oficina fija - trabajarán desde casa, desde cafeterías o mientras viajan. Las reuniones se harán en realidad virtual, donde parecerá que todos están en la misma sala aunque estén en países diferentes.

La educación también será muy diferente. Probablemente las universidades tradicionales perderán importancia. Estudiaremos online, a nuestro propio ritmo, con programas personalizados según nuestros intereses y habilidades. La realidad virtual nos permitirá hacer prácticas en entornos simulados antes de trabajar en situaciones reales.

**Salud y medicina**

La medicina tendrá avances increíbles. Según los científicos, viviremos más años - la esperanza de vida llegará a los 90 o 100 años en muchos países. Algunas enfermedades que hoy son mortales se curarán fácilmente.

Tendremos medicina personalizada. Los doctores analizarán nuestro ADN y sabrán exactamente qué tratamientos funcionarán mejor para cada persona. Los sensores que llevaremos en el cuerpo monitorearán constantemente nuestra salud y detectarán problemas antes de que aparezcan síntomas.

Posiblemente habrá órganos artificiales para reemplazar los que fallen. Quizás incluso podremos imprimir órganos en 3D usando nuestras propias células. Esto resolverá el problema de la falta de donantes.

**Medio ambiente y energía**

Esta es el área más preocupante. Si no hacemos cambios ahora, el cambio climático empeorará. Las temperaturas subirán, habrá más sequías e inundaciones, y muchas especies se extinguirán.

Pero también hay esperanza. Probablemente usaremos energías renovables de forma masiva. Los paneles solares serán mucho más eficientes y baratos. Tal vez tengamos fusión nuclear, una fuente de energía limpia y prácticamente ilimitada.

Los coches eléctricos reemplazarán completamente a los de gasolina. Las ciudades tendrán menos contaminación y el aire será más limpio. Posiblemente cultivaremos comida en edificios verticales dentro de las ciudades, usando menos agua y tierra.

**Población y sociedad**

La población mundial llegará a unos 9.000 millones de personas. La mayoría vivirá en ciudades - habrá megaciudades de 30 o 40 millones de habitantes. Estas ciudades tendrán que ser muy eficientes en el uso de recursos.

La sociedad será más diversa y conectada globalmente. Viajar será más fácil y barato. Quizás tengamos vuelos supersónicos que crucen el Atlántico en dos horas. Algunos predicen que habrá colonias en Marte, aunque probablemente serán muy pequeñas.

¿Se cumplirán estas predicciones? Nadie lo sabe con certeza. El futuro dependerá de las decisiones que tomemos hoy. Pero una cosa es segura: el mundo de 2050 será muy diferente al de hoy.`,
      translation: 'Каким будет мир в 2050 году? Эксперты делают много предсказаний о том, как мы будем жить через 25 лет...'
    },
    exercises: ['ex-6-3-1', 'ex-6-3-2', 'ex-6-3-3', 'ex-6-3-4', 'ex-6-3-5']
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
  },

  // МОДУЛЬ 5: Путешествия и места
  'ex-5-1-1': {
    id: 'ex-5-1-1',
    type: 'vocabulary',
    title: 'Транспорт',
    description: 'Выберите правильный перевод',
    questions: [
      { spanish: 'avión', options: ['автобус', 'самолёт', 'поезд', 'такси'], correct: 1 },
      { spanish: 'tren', options: ['метро', 'автобус', 'поезд', 'машина'], correct: 2 },
      { spanish: 'aeropuerto', options: ['вокзал', 'аэропорт', 'гостиница', 'музей'], correct: 1 },
      { spanish: 'billete', options: ['чемодан', 'карта', 'билет', 'ключ'], correct: 2 },
      { spanish: 'maleta', options: ['рюкзак', 'сумка', 'чемодан', 'карта'], correct: 2 }
    ]
  },
  'ex-5-1-2': {
    id: 'ex-5-1-2',
    type: 'grammar',
    title: 'Предлоги места',
    description: 'Выберите правильный предлог',
    questions: [
      { sentence: 'El hotel está ___ la estación', options: ['cerca de', 'lejos', 'entre', 'desde'], correct: 0 },
      { sentence: 'Voy ___ Madrid', options: ['en', 'a', 'de', 'por'], correct: 1 },
      { sentence: 'La farmacia está ___ del banco', options: ['lejos', 'cerca', 'enfrente', 'entre'], correct: 2 },
      { sentence: 'Viajo ___ avión', options: ['a', 'de', 'en', 'por'], correct: 2 },
      { sentence: 'El museo está ___ la iglesia y el hotel', options: ['cerca', 'entre', 'enfrente', 'delante'], correct: 1 }
    ]
  },
  'ex-5-1-3': {
    id: 'ex-5-1-3',
    type: 'reading',
    title: 'Чтение: Un día en Barcelona',
    description: 'Ответьте на вопросы о тексте',
    text: 'He llegado al aeropuerto de El Prat. He tomado el tren hasta Sants y después el metro hasta Passeig de Gràcia. Mi hotel está cerca de la Plaza de Catalunya. He visitado Las Ramblas y el Barrio Gótico. La Sagrada Familia está lejos del centro.',
    questions: [
      { question: 'Как автор добрался из аэропорта?', options: ['На такси', 'На поезде', 'На автобусе', 'Пешком'], correct: 1 },
      { question: 'Где находится отель?', options: ['У вокзала', 'У аэропорта', 'У Plaza de Catalunya', 'У пляжа'], correct: 2 },
      { question: 'Какие места посетил автор?', options: ['Музеи', 'Las Ramblas и Barrio Gótico', 'Пляжи', 'Парки'], correct: 1 },
      { question: 'Где находится Sagrada Familia?', options: ['В центре', 'Далеко от центра', 'Рядом с отелем', 'У вокзала'], correct: 1 }
    ]
  },
  'ex-5-1-4': {
    id: 'ex-5-1-4',
    type: 'fillblank',
    title: 'Направления',
    description: 'Заполните пропуски предлогами',
    questions: [
      { sentence: 'Voy _____ la playa en autobús', verb: 'a/en', correct: 'a' },
      { sentence: 'El hotel está _____ del aeropuerto', verb: 'cerca/lejos', correct: 'cerca' },
      { sentence: 'Viajamos _____ tren', verb: 'en/a', correct: 'en' },
      { sentence: 'La estación está _____ de la plaza', verb: 'enfrente', correct: 'enfrente' }
    ]
  },
  'ex-5-1-5': {
    id: 'ex-5-1-5',
    type: 'writing',
    title: 'Как добраться',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Я еду в аэропорт на метро', correct: 'voy al aeropuerto en metro' },
      { russian: 'Отель рядом со станцией', correct: 'el hotel está cerca de la estación' },
      { russian: 'Мы путешествуем на поезде', correct: 'viajamos en tren' },
      { russian: 'Поверни направо', correct: 'gira a la derecha' }
    ]
  },

  'ex-5-2-1': {
    id: 'ex-5-2-1',
    type: 'grammar',
    title: 'Condicional simple - формы',
    description: 'Выберите правильную форму условного наклонения',
    questions: [
      { sentence: 'Yo ___ (viajar) más si tuviera tiempo', options: ['viajaría', 'viajarías', 'viajaríamos', 'viajarían'], correct: 0 },
      { sentence: '¿___ (poder-tú) ayudarme?', options: ['podría', 'podrías', 'podríamos', 'podrían'], correct: 1 },
      { sentence: 'Nosotros ___ (comer) paella', options: ['comería', 'comerías', 'comeríamos', 'comerían'], correct: 2 },
      { sentence: 'Me ___ (gustar) una habitación con vistas', options: ['gustaría', 'gustarías', 'gustaríamos', 'gustarían'], correct: 0 },
      { sentence: 'Ellos ___ (querer) reservar una mesa', options: ['querría', 'querrías', 'querríamos', 'querrían'], correct: 3 }
    ]
  },
  'ex-5-2-2': {
    id: 'ex-5-2-2',
    type: 'vocabulary',
    title: 'Отель и ресторан',
    description: 'Сопоставьте слова с переводом',
    questions: [
      { spanish: 'habitación', options: ['ключ', 'номер', 'рецепция', 'завтрак'], correct: 1 },
      { spanish: 'camarero', options: ['повар', 'официант', 'гид', 'турист'], correct: 1 },
      { spanish: 'cuenta', options: ['меню', 'счёт', 'чаевые', 'блюдо'], correct: 1 },
      { spanish: 'llave', options: ['номер', 'бронь', 'ключ', 'чемодан'], correct: 2 },
      { spanish: 'menú', options: ['счёт', 'блюдо', 'меню', 'десерт'], correct: 2 }
    ]
  },
  'ex-5-2-3': {
    id: 'ex-5-2-3',
    type: 'fillblank',
    title: 'Вежливые просьбы',
    description: 'Вставьте condicional для вежливой просьбы',
    questions: [
      { sentence: '¿_____ (poder) darme una habitación?', verb: 'poder', correct: 'podría' },
      { sentence: 'Me _____ (gustar) reservar una mesa', verb: 'gustar', correct: 'gustaría' },
      { sentence: '¿Qué me _____ (recomendar)?', verb: 'recomendar', correct: 'recomendaría' },
      { sentence: '_____ (querer) una habitación doble', verb: 'querer', correct: 'querría' }
    ]
  },
  'ex-5-2-4': {
    id: 'ex-5-2-4',
    type: 'reading',
    title: 'Чтение: En el hotel',
    description: 'Ответьте на вопросы',
    text: 'Llegué al Hotel Mediterráneo. En recepción me preguntaron si prefería vistas al mar o al jardín. Elegí vistas al mar. La habitación tenía un balcón precioso. El desayuno estaba incluido. En el restaurante, el camarero me recomendó la paella de mariscos.',
    questions: [
      { question: 'Что спросили в рецепции?', options: ['Имя', 'Паспорт', 'Вид из окна', 'Время приезда'], correct: 2 },
      { question: 'Что выбрал автор?', options: ['Вид на сад', 'Вид на море', 'Вид на горы', 'Вид на город'], correct: 1 },
      { question: 'Что было включено?', options: ['Завтрак', 'Обед', 'Ужин', 'Бассейн'], correct: 0 },
      { question: 'Что порекомендовал официант?', options: ['Газпачо', 'Паэлья с морепродуктами', 'Пицца', 'Салат'], correct: 1 }
    ]
  },
  'ex-5-2-5': {
    id: 'ex-5-2-5',
    type: 'writing',
    title: 'В ресторане',
    description: 'Переведите вежливые просьбы',
    questions: [
      { russian: 'Могли бы вы принести меню?', correct: 'podría traer el menú' },
      { russian: 'Я хотел бы забронировать столик', correct: 'me gustaría reservar una mesa' },
      { russian: 'Что вы порекомендуете?', correct: 'qué me recomendaría' },
      { russian: 'Счёт, пожалуйста', correct: 'la cuenta por favor' }
    ]
  },

  'ex-5-3-1': {
    id: 'ex-5-3-1',
    type: 'grammar',
    title: 'Сравнительная степень',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Madrid es ___ grande ___ Valencia', options: ['más...que', 'menos...que', 'tan...como', 'muy...de'], correct: 0 },
      { sentence: 'Este museo es ___ interesante ___ aquel', options: ['más...de', 'menos...que', 'tan...como', 'muy...que'], correct: 2 },
      { sentence: 'La Sagrada Familia es el monumento ___ famoso', options: ['más', 'menos', 'tan', 'muy'], correct: 0 },
      { sentence: 'Este hotel es ___ que ese (лучше)', options: ['más bueno', 'mejor', 'bueno', 'muy bueno'], correct: 1 },
      { sentence: 'Hay ___ turistas en verano', options: ['tan', 'tanto', 'tantos', 'tanta'], correct: 2 }
    ]
  },
  'ex-5-3-2': {
    id: 'ex-5-3-2',
    type: 'vocabulary',
    title: 'Достопримечательности',
    description: 'Выберите правильный перевод',
    questions: [
      { spanish: 'catedral', options: ['церковь', 'собор', 'музей', 'замок'], correct: 1 },
      { spanish: 'castillo', options: ['дворец', 'замок', 'музей', 'парк'], correct: 1 },
      { spanish: 'plaza', options: ['пляж', 'парк', 'площадь', 'улица'], correct: 2 },
      { spanish: 'entrada', options: ['выход', 'вход', 'площадь', 'гид'], correct: 1 },
      { spanish: 'guía', options: ['турист', 'билет', 'карта', 'гид'], correct: 3 }
    ]
  },
  'ex-5-3-3': {
    id: 'ex-5-3-3',
    type: 'grammar',
    title: 'Превосходная степень',
    description: 'Составьте превосходную степень',
    questions: [
      { sentence: '___ ciudad más bonita de España', options: ['La', 'El', 'Los', 'Las'], correct: 0 },
      { sentence: 'El ___ museo del mundo', options: ['más famoso', 'famoso más', 'muy famoso', 'tan famoso'], correct: 0 },
      { sentence: 'La ___ experiencia (mejor)', options: ['más buena', 'buena más', 'mejor', 'muy buena'], correct: 2 },
      { sentence: 'Los monumentos ___ importantes', options: ['muy', 'más', 'tan', 'tanto'], correct: 1 }
    ]
  },
  'ex-5-3-4': {
    id: 'ex-5-3-4',
    type: 'reading',
    title: 'Чтение: Ciudades españolas',
    description: 'Ответьте на вопросы о тексте',
    text: 'Granada es la ciudad más impresionante de España. La Alhambra es el monumento más espectacular. Barcelona es más famosa que Valencia. Madrid tiene los mejores museos. Sevilla es más calurosa que Barcelona. El Museo del Prado es tan importante como el Louvre.',
    questions: [
      { question: 'Какой город самый впечатляющий?', options: ['Барселона', 'Мадрид', 'Гранада', 'Севилья'], correct: 2 },
      { question: 'Какой музей сравнивают с Лувром?', options: ['Reina Sofía', 'Prado', 'Guggenheim', 'Picasso'], correct: 1 },
      { question: 'Где лучшие музеи?', options: ['В Барселоне', 'В Мадриде', 'В Севилье', 'В Валенсии'], correct: 1 },
      { question: 'Какой город более жаркий?', options: ['Барселона', 'Севилья', 'Мадрид', 'Валенсия'], correct: 1 }
    ]
  },
  'ex-5-3-5': {
    id: 'ex-5-3-5',
    type: 'writing',
    title: 'Сравнения',
    description: 'Переведите сравнения на испанский',
    questions: [
      { russian: 'Мадрид больше чем Валенсия', correct: 'Madrid es más grande que Valencia' },
      { russian: 'Самый знаменитый памятник', correct: 'el monumento más famoso' },
      { russian: 'Такой же интересный как', correct: 'tan interesante como' },
      { russian: 'Лучший отель города', correct: 'el mejor hotel de la ciudad' }
    ]
  },

  // МОДУЛЬ 6: Будущее время
  'ex-6-1-1': {
    id: 'ex-6-1-1',
    type: 'grammar',
    title: 'Futuro simple - правильные глаголы',
    description: 'Выберите правильную форму будущего времени',
    questions: [
      { sentence: 'Mañana yo ___ (estudiar) para el examen', options: ['estudiaré', 'estudiarás', 'estudiará', 'estudiarán'], correct: 0 },
      { sentence: 'Tú ___ (comer) paella en España', options: ['comeré', 'comerás', 'comerá', 'comeremos'], correct: 1 },
      { sentence: 'Nosotros ___ (vivir) en Barcelona', options: ['viviré', 'vivirás', 'vivirá', 'viviremos'], correct: 3 },
      { sentence: 'Ellos ___ (viajar) a Italia', options: ['viajaré', 'viajarás', 'viajará', 'viajarán'], correct: 3 },
      { sentence: 'Ella ___ (hablar) español perfectamente', options: ['hablaré', 'hablarás', 'hablará', 'hablarán'], correct: 2 }
    ]
  },
  'ex-6-1-2': {
    id: 'ex-6-1-2',
    type: 'grammar',
    title: 'Futuro simple - неправильные глаголы',
    description: 'Выберите правильную неправильную форму',
    questions: [
      { sentence: 'Yo ___ (hacer) la tarea mañana', options: ['haceré', 'haré', 'hacré', 'haciré'], correct: 1 },
      { sentence: 'Tú ___ (tener) que estudiar', options: ['tendrás', 'tenerás', 'tenirás', 'tenarás'], correct: 0 },
      { sentence: 'Nosotros ___ (poder) ir al cine', options: ['poderemos', 'podremos', 'poderamos', 'podiremos'], correct: 1 },
      { sentence: 'Ellos ___ (venir) a la fiesta', options: ['venirán', 'venerán', 'vendrán', 'venarán'], correct: 2 },
      { sentence: '¿___ (saber-tú) la respuesta?', options: ['saberás', 'sabrás', 'sabirás', 'sabarás'], correct: 1 }
    ]
  },
  'ex-6-1-3': {
    id: 'ex-6-1-3',
    type: 'vocabulary',
    title: 'Expresiones de futuro',
    description: 'Выберите правильный перевод',
    questions: [
      { spanish: 'mañana', options: ['вчера', 'завтра', 'сегодня', 'сейчас'], correct: 1 },
      { spanish: 'pasado mañana', options: ['позавчера', 'послезавтра', 'вчера', 'завтра'], correct: 1 },
      { spanish: 'la semana que viene', options: ['на прошлой неделе', 'на следующей неделе', 'на этой неделе', 'каждую неделю'], correct: 1 },
      { spanish: 'dentro de dos días', options: ['два дня назад', 'через два дня', 'два дня', 'в течение двух дней'], correct: 1 },
      { spanish: 'pronto', options: ['поздно', 'рано', 'скоро', 'медленно'], correct: 2 }
    ]
  },
  'ex-6-1-4': {
    id: 'ex-6-1-4',
    type: 'fillblank',
    title: 'Планы на будущее',
    description: 'Вставьте правильную форму futuro',
    questions: [
      { sentence: 'El año que viene _____ (viajar) a España', verb: 'viajar', correct: 'viajaré' },
      { sentence: 'Nosotros _____ (estudiar) medicina', verb: 'estudiar', correct: 'estudiaremos' },
      { sentence: 'Ellos _____ (hacer) un proyecto', verb: 'hacer', correct: 'harán' },
      { sentence: '¿Qué _____ (hacer-tú) mañana?', verb: 'hacer', correct: 'harás' }
    ]
  },
  'ex-6-1-5': {
    id: 'ex-6-1-5',
    type: 'writing',
    title: 'Futuro simple',
    description: 'Переведите на испанский (futuro simple)',
    questions: [
      { russian: 'Завтра я буду учиться', correct: 'mañana estudiaré' },
      { russian: 'Мы поедем в Испанию', correct: 'iremos a España' },
      { russian: 'Она будет жить в Мадриде', correct: 'vivirá en Madrid' },
      { russian: 'Они сделают работу', correct: 'harán el trabajo' }
    ]
  },

  'ex-6-2-1': {
    id: 'ex-6-2-1',
    type: 'grammar',
    title: 'IR + A + инфинитив',
    description: 'Выберите правильную форму IR',
    questions: [
      { sentence: 'Yo ___ a estudiar esta noche', options: ['voy', 'vas', 'va', 'vamos'], correct: 0 },
      { sentence: 'Tú ___ a comer paella', options: ['voy', 'vas', 'va', 'van'], correct: 1 },
      { sentence: 'Nosotros ___ a viajar mañana', options: ['voy', 'vas', 'va', 'vamos'], correct: 3 },
      { sentence: 'Ellos ___ a trabajar aquí', options: ['va', 'vamos', 'vais', 'van'], correct: 3 },
      { sentence: '¿Qué ___ a hacer tú?', options: ['voy', 'vas', 'va', 'van'], correct: 1 }
    ]
  },
  'ex-6-2-2': {
    id: 'ex-6-2-2',
    type: 'vocabulary',
    title: 'Планы и намерения',
    description: 'Выберите правильный перевод',
    questions: [
      { spanish: 'proyecto', options: ['проблема', 'проект', 'процесс', 'продукт'], correct: 1 },
      { spanish: 'objetivo', options: ['объект', 'цель', 'причина', 'результат'], correct: 1 },
      { spanish: 'intención', options: ['внимание', 'намерение', 'интерес', 'инвенция'], correct: 1 },
      { spanish: 'éxito', options: ['выход', 'успех', 'вход', 'экзамен'], correct: 1 },
      { spanish: 'carrera', options: ['карета', 'карьера', 'каре', 'корзина'], correct: 1 }
    ]
  },
  'ex-6-2-3': {
    id: 'ex-6-2-3',
    type: 'grammar',
    title: 'Выражение намерений',
    description: 'Выберите правильный глагол намерения',
    questions: [
      { sentence: '___ mudarme a Barcelona (планирую)', options: ['Pienso', 'Quiero', 'Espero', 'Deseo'], correct: 0 },
      { sentence: '___ aprender español (хочу)', options: ['Pienso', 'Quiero', 'Espero', 'Tengo'], correct: 1 },
      { sentence: '___ conseguir un buen trabajo (надеюсь)', options: ['Pienso', 'Quiero', 'Espero', 'Deseo'], correct: 2 },
      { sentence: '___ la intención de viajar (имею намерение)', options: ['Pienso', 'Quiero', 'Espero', 'Tengo'], correct: 3 }
    ]
  },
  'ex-6-2-4': {
    id: 'ex-6-2-4',
    type: 'reading',
    title: 'Чтение: Планы на выходные',
    description: 'Ответьте на вопросы',
    text: 'Es jueves y estamos planeando el fin de semana. María va a quedarse en casa el sábado. Carlos piensa ir a la playa. Laura va a ayudar con una mudanza. Miguel va a organizar una cena. Vamos a comer paella.',
    questions: [
      { question: 'Что будет делать Мария в субботу?', options: ['Поедет на пляж', 'Останется дома', 'Поможет с переездом', 'Организует ужин'], correct: 1 },
      { question: 'Куда планирует пойти Карлос?', options: ['В кино', 'На пляж', 'В ресторан', 'Домой'], correct: 1 },
      { question: 'Чем займется Лаура?', options: ['Шопингом', 'Готовкой', 'Переездом', 'Уборкой'], correct: 2 },
      { question: 'Что приготовит Мигель?', options: ['Пиццу', 'Пасту', 'Паэлью', 'Салат'], correct: 2 }
    ]
  },
  'ex-6-2-5': {
    id: 'ex-6-2-5',
    type: 'writing',
    title: 'IR + A',
    description: 'Переведите используя IR + A',
    questions: [
      { russian: 'Я собираюсь учиться', correct: 'voy a estudiar' },
      { russian: 'Мы собираемся поехать на пляж', correct: 'vamos a ir a la playa' },
      { russian: 'Она собирается готовить', correct: 'va a cocinar' },
      { russian: 'Что ты собираешься делать?', correct: 'qué vas a hacer' }
    ]
  },

  'ex-6-3-1': {
    id: 'ex-6-3-1',
    type: 'grammar',
    title: 'Futuro для предположений',
    description: 'Используйте futuro для предположения о настоящем',
    questions: [
      { sentence: '¿Qué hora es? - ___ las tres (наверное)', options: ['Son', 'Eran', 'Serán', 'Fueron'], correct: 2 },
      { sentence: '¿Dónde está Juan? - ___ en casa (должно быть)', options: ['Está', 'Estaba', 'Estará', 'Estuvo'], correct: 2 },
      { sentence: '¿Cuántos años tiene? - ___ 30 años (около)', options: ['Tiene', 'Tenía', 'Tendrá', 'Tuvo'], correct: 2 },
      { sentence: '¿Quién es? - ___ mi madre (наверное)', options: ['Es', 'Era', 'Será', 'Fue'], correct: 2 }
    ]
  },
  'ex-6-3-2': {
    id: 'ex-6-3-2',
    type: 'vocabulary',
    title: 'Будущее и технологии',
    description: 'Выберите правильный перевод',
    questions: [
      { spanish: 'predicción', options: ['предложение', 'предсказание', 'предположение', 'предпочтение'], correct: 1 },
      { spanish: 'tecnología', options: ['техника', 'технология', 'текстиль', 'тема'], correct: 1 },
      { spanish: 'desarrollo', options: 'развитие', 'развлечение', 'раздел', 'разделение'], correct: 0 },
      { spanish: 'clima', options: ['климат', 'клиент', 'клинка', 'клиника'], correct: 0 },
      { spanish: 'medio ambiente', options: ['средний возраст', 'окружающая среда', 'полдень', 'середина'], correct: 1 }
    ]
  },
  'ex-6-3-3': {
    id: 'ex-6-3-3',
    type: 'grammar',
    title: 'SI + presente, futuro',
    description: 'Выберите правильную форму в условном предложении',
    questions: [
      { sentence: 'Si tengo tiempo, ___ al cine', options: ['voy', 'fui', 'iré', 'iría'], correct: 2 },
      { sentence: 'Si estudias, ___ el examen', options: ['apruebas', 'aprobaste', 'aprobarás', 'aprobarías'], correct: 2 },
      { sentence: 'Si hace buen tiempo, ___ a la playa', options: ['vamos', 'fuimos', 'iremos', 'iríamos'], correct: 2 },
      { sentence: 'Si ella viene, ___ muy contentos', options: ['estamos', 'estuvimos', 'estaremos', 'estaríamos'], correct: 2 }
    ]
  },
  'ex-6-3-4': {
    id: 'ex-6-3-4',
    type: 'reading',
    title: 'Чтение: El mundo en 2050',
    description: 'Ответьте на вопросы о предсказаниях',
    text: 'En 2050 la tecnología cambiará nuestra vida. Tendremos coches autónomos. Viviremos más años gracias a la medicina. Los coches eléctricos reemplazarán a los de gasolina. La población llegará a 9.000 millones.',
    questions: [
      { question: 'Что изменит нашу жизнь?', options: ['Погода', 'Технология', 'Политика', 'Экономика'], correct: 1 },
      { question: 'Какие машины будут?', options: ['Автономные', 'Быстрые', 'Большие', 'Маленькие'], correct: 0 },
      { question: 'Какие машины заменят бензиновые?', options: ['Гибридные', 'Электрические', 'Дизельные', 'Водородные'], correct: 1 },
      { question: 'Сколько будет население?', options: ['8 млрд', '9 млрд', '10 млрд', '11 млрд'], correct: 1 }
    ]
  },
  'ex-6-3-5': {
    id: 'ex-6-3-5',
    type: 'writing',
    title: 'Предсказания',
    description: 'Переведите предсказания на испанский',
    questions: [
      { russian: 'Завтра будет дождь', correct: 'mañana lloverá' },
      { russian: 'Мы будем жить дольше', correct: 'viviremos más tiempo' },
      { russian: 'Технология изменит мир', correct: 'la tecnología cambiará el mundo' },
      { russian: 'Если ты учишься, ты сдашь экзамен', correct: 'si estudias aprobarás el examen' }
    ]
  }
}
