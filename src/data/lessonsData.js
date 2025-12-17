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
    lessons: ['lesson-1-1', 'lesson-1-2', 'lesson-1-3', 'lesson-1-4', 'lesson-1-5'],
    description: 'Алфавит, приветствия, базовая лексика, грамматические основы'
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
      intro: `# Испанский алфавит (El alfabeto español)

Испанский алфавит состоит из 27 букв:

**A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z**`,
      sections: [
        {
          id: 'vowels',
          title: '1. Гласные звуки',
          content: `
## 1. Гласные звуки

В испанском языке 5 гласных звуков: **a, e, i, o, u**

**A, a** - [а] — произносится как русский звук а в слове антенна
- mapa [мапа]
- papa [папа]
- malo [мало]

**E, e** - [э] — произносится как русский звук э в слове это
- café [кафэ]
- mete [мэтэ]
- nene [нэнэ]

**I, i** - [и] — произносится как русский звук и в слове игла
- tipo [типо]
- mina [мина]
- mil [миль]

**O, o** - [о] — произносится как русский звук о в слове окна
- mono [моно]
- tomo [томо]
- foto [фото]

**U, u** - [у] — произносится как русский звук у в слове утка
- fumo [фумо]
- luna [луна]
- puma [пума]
`
        },
        {
          id: 'consonants',
          title: '2. Согласные звуки',
          content: `
## 2. Согласные звуки

### B, b / V, v
- [б] — произносится как русский звук б в начале слова и после согласных m, n
- [б] — ослабленный между гласными (губы не смыкаются полностью)

**Важно:** Буквы b и v произносятся одинаково!
- bomba [бомба]
- vaso [басо]
- Cuba [куба]
- ave [абэ]

### C, c / Ch, ch

**C, c:**
- [θ] — перед гласными i, e произносится как глухой межзубный звук; кончик языка находится между зубами
- [к] — перед гласными a, o, u, на конце слова и перед согласными

**Ch, ch (c+h):**
- [ч] — во всех позициях

Примеры:
- cine [θинэ]
- cena [θэна]
- casa [каса]
- clase [класэ]
- chico [чико]
- noche [ночэ]

### D, d
- [д] — звонкий, как русский д в слове дом, в начале слова и после l, n
- [д] — звонкий межзубный во всех остальных позициях, особенно между гласными
- [θ] — на конце слова артикулируется как межзубный, но произносится ослаблено или не произносится

Примеры:
- disco [диско]
- caldo [кальдо]
- donde [дондэ]
- cada [када]
- idea [идэа]
- edad [эда]
- Madrid [мадри]

### F, f
- [ф] — произносится как русский ф во всех позициях

Примеры:
- fama [фама]
- flor [флор]

### G, g
- [х] — перед гласными i, e
- [г] — перед гласными a, o, u и согласными
- В сочетаниях **gue, gui** буква u не произносится, g читается как [г]
- Если u нужно прочитать, над ней ставятся две точки: **güe, güi**

Примеры:
- gente [хэнтэ]
- gitano [хитано]
- gato [гато]
- grande [грандэ]
- guerra [гэрра]
- guitarra [гитарра]
- lingüística [лингуистика]

### H, h
**Не обозначает никакого звука** (немая буква)
- hola [ола]
- ahora [аора]

### J, j
- [х] — произносится как русский х во всех позициях

Примеры:
- joven [хобэн]
- reloj [рэлох]

### K, k
- [к] — произносится как русский к (используется только в иностранных словах)

Примеры:
- kúpek [копэк]
- kilómetro [киломэтро]

### L, l / Ll, ll

**L, l:**
- [л] — в начале слова и между гласными
- [ль] — перед согласными и в конце слова

**Ll, ll:**
- [ль] или [й] — произносится как ль в слове "бульон" или как й в слове "район"

Примеры:
- lápiz [лапиθ]
- malo [мало]
- alma [альма]
- hotel [отэль]
- llave [льабэ] = [йабэ]
- pollo [польо] = [пойо]

### M, m
- [м] — произносится как русский звонкий м

Примеры:
- mano [мано]
- tomate [томатэ]

### N, n
- [н] — произносится как русский н
- [м] — перед согласными b, v, f, m, p произносится как м

Примеры:
- naranja [наранха]
- triunfo [триумфо]

### Ñ, ñ
- [нь] — произносится как русский нь в слове "варенье"

Примеры:
- niño [ниньо]
- España [эспанья]

### P, p
- [п] — произносится как русский п

Примеры:
- padre [падрэ]

### Q, q
- [к] — произносится как русский к
- **Важно:** После q всегда идет буква u, которая не читается!

Примеры:
- quinto [кинто]
- querer [кэрэр]

### R, r / rr

**R, r:**
- [р] — в середине слова произносится как русский р
- [рр] — произносится как раскатистое р в начале слова и после l, n, s

**rr:**
- [рр] — всегда произносится как раскатистое р в середине слова между гласными

Примеры:
- cartera [картэра]
- toro [торо]
- rico [ррико]
- Enrique [энррикэ]
- perro [пэрро]
- correr [коррэр]

### S, s
- [с] — произносится как приглушенный щелевой звук между с и ш
- [з] — перед звонкими согласными произносится как русский з
- [ø] — перед раскатистым r не произносится

Примеры:
- sala [сала]
- museo [мусэо]
- mismo [мизмо]
- asno [азно]
- Israel [ирраэль]

### T, t
- [т] — произносится как русский твердый глухой т
- **Важно:** Перед i не смягчается!

Примеры:
- tarde [тардэ]
- teatro [тэатро]

### W, w
- [w] — произносится как английский w (используется только в иностранных словах)

### X, x
- [кс] — произносится как русское кс между гласными
- [с] — произносится как русский с перед согласными
- **Исключение:** México [мэхико] — буква x произносится как [х]

Примеры:
- examen [эксамэн]
- texto [тэсто]
- México [мэхико]

### Y, y
- [й] — произносится как звук, подобный русскому й в сочетании с гласными
- [и] — произносится как русский и, если употребляется в качестве союза "и"

Примеры:
- mayo [майо]
- ayer [айэр]
- Ana y Lola [ана и лола]

### Z, z
- [θ] — произносится как глухой межзубный звук перед a, o, u и в конце слова

Примеры:
- zapato [θапато]
- lápiz [лапиθ]
`
        },
        {
          id: 'diphthongs',
          title: '3. Дифтонги и трифтонги',
          content: `
## 3. Дифтонги и трифтонги

Гласные **a, o, e** — сильные, гласные **i, u** — слабые.

**Дифтонг** — сочетание сильной + слабой (ai, au, oi, ou, ei, eu) или слабой + сильной (ia, io, ie, ua, uo, ue), которое образует один слог.

### Типы дифтонгов:

**ai, oi, ei** — слабая i читается как русская й:
- aire [айрэ], oigo [ойго], reino [ррэйно]

**ia, ie, io** — произносятся как сочетание ь с гласными (пьеса, бульон):
- piano [пьано], pieza [пьэθа], nervio [нэрбьо]

**au, eu, ou** — буква u произносится ослабленно:
- Paula [паула], Europa [эуропа]

**ua, uo, ue** — буква u произносится ослабленно:
- cuatro [куатро], antiguo [антигуо], pueblo [пуэбло]

**iu, ui** — ударной становится вторая гласная:
- viuda [бьуда], ruido [руидо]

**Две сильные гласные рядом** (ao, ae, oa, oe, ea, eo) произносятся раздельно:
- poeta [по-э-та], teatro [тэ-а-тро], Amadeo [а-ма-дэ-о]

**Трифтонг** — сочетание слабого + сильного + слабого гласных (iai, iei, uai, uei, uau), образует один слог:
- limpiáis [лимпьайс], limpiéis [лимпьэйс], Uruguay [уругуай], continuáis [континуайс]

### Примеры для отработки:

aire, aula, siete, radio, bueno, pueblo, Daniel, cuento, veinte, flauta, criado, guapo, edificio, Europa, puente, hierba, llueve, triunfo, trauma, causa, neutral, limpiáis, limpiéis, Uruguay, continuáis, paraguayo, estudiáis, estudiéis
`
        },
        {
          id: 'syllables',
          title: '4. Слогоделение',
          content: `
## 4. Слогоделение

Правила деления на слоги:

1. **1 согласная** между 2 гласными образует слог с последующей гласной:
   - mapa [ма-па], tomate [то-ма-тэ]

2. **2 согласные** между 2 гласными расходятся по одной к каждой гласной:
   - cerveza [θэр-бэ-θа], cuenta [куэн-та]

3. **Взрывные согласные b, c, f, g, p, t, d + l, r** не разделяются:
   - libro [ли-бро], tigre [ти-грэ], letra [лэ-тра]

4. **3 согласные** между 2 гласными (кроме неделимых сочетаний) делятся по формуле 2+1:
   - instituto [инс-ти-ту-то]; но: encontrar [эн-кон-трар]

5. **4 согласные** между 2 гласными делятся по формуле 2+2:
   - instructor [инс-трук-тор]

6. **Морфологическое слогоделение:**
   - aeropuerto [аэро-пуэр-то], automóvil [ауто-мо-биль]

7. **Не разделяются:** que, qui, gue, gui, rr, ll, ch, а также дифтонги:
   - perro [пэ-рро], muchacha [му-ча-ча], pequeño [пэ-кэ-ньо], guerra [гэ-рра]
`
        },
        {
          id: 'stress',
          title: '5. Правила ударения',
          content: `
## 5. Правила ударения

1. Слова на гласную, -n, -s: ударение на предпоследний слог (casa, hablan)
2. Остальные слова: ударение на последний слог (hablar, ciudad)
3. Акцент указывает исключения: música, café
`
        }
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
      { word: 'no', translation: 'нет', audioUrl: null },
      { word: '¿Qué tal?', translation: 'как дела?', audioUrl: null },
      { word: '¿Qué tal la vida?', translation: 'как жизнь?', audioUrl: null },
      { word: '¿Qué tal la familia?', translation: 'как семья?', audioUrl: null },
      { word: 'Bien, gracias.', translation: 'спасибо, хорошо', audioUrl: null },
      { word: 'Todo va bien.', translation: 'все хорошо (дословно: все идет хорошо)', audioUrl: null },
      { word: 'Más o menos bien.', translation: 'более или менее хорошо', audioUrl: null },
      { word: 'Así así.', translation: 'так себе', audioUrl: null },
      { word: 'Regular.', translation: 'так себе', audioUrl: null },
      { word: 'Muchas gracias.', translation: 'большое спасибо', audioUrl: null }
    ],
    readingText: {
      title: 'Primeras palabras y diálogos',
      content: `**Diálogo 1: En la calle**

- Hola. Buenos días. ¿Qué tal?
- Bien, gracias. ¿Y tú?
- Todo va bien, gracias.
- Me alegro. Hasta luego.
- Adiós.

**Diálogo 2: Encuentro con un amigo**

- ¡Hola! ¿Qué tal la vida?
- Más o menos bien. ¿Y tú?
- Regular. Muchas gracias por preguntar.
- De nada. ¿Qué tal la familia?
- Todo va bien, gracias.

**Diálogo 3: En la mañana**

- Buenos días. ¿Cómo estás?
- Bien, gracias. ¿Y tú?
- Así así. Por favor, ¿tienes un momento?
- Sí, claro.
- Muchas gracias.
- De nada.

**Diálogo 4: Despedida**

- Buenas tardes. ¿Qué tal?
- Bien, gracias.
- Me alegro. Adiós.
- Hasta luego. Buenas noches.`,
      translation: 'Первые слова и диалоги\n\n**Диалог 1: На улице**\n\n- Привет. Доброе утро. Как дела?\n- Спасибо, хорошо. А ты?\n- Все хорошо, спасибо.\n- Рад слышать. До скорого.\n- Пока.\n\n**Диалог 2: Встреча с другом**\n\n- Привет! Как жизнь?\n- Более или менее хорошо. А ты?\n- Так себе. Большое спасибо, что спросил.\n- Пожалуйста. Как семья?\n- Все хорошо, спасибо.\n\n**Диалог 3: Утром**\n\n- Доброе утро. Как дела?\n- Спасибо, хорошо. А ты?\n- Так себе. Пожалуйста, у тебя есть минутка?\n- Да, конечно.\n- Большое спасибо.\n- Пожалуйста.\n\n**Диалог 4: Прощание**\n\n- Добрый день. Как дела?\n- Спасибо, хорошо.\n- Рад слышать. Пока.\n- До скорого. Добрый вечер.',
      audioUrl: '/audio/lesson-1-1-reading.mp3',
      subtitles: [
        { start: 0, end: 3, text: 'Hola. Buenos días. ¿Qué tal?' },
        { start: 3, end: 6, text: 'Bien, gracias. ¿Y tú?' },
        { start: 6, end: 9, text: 'Todo va bien, gracias.' },
        { start: 9, end: 12, text: 'Hasta luego. Adiós.' }
      ]
    },
    exercises: ['ex-1-1-1', 'ex-1-1-2', 'ex-1-1-3', 'ex-1-1-4', 'ex-1-1-5-syn', 'ex-1-1-6-ctx', 'ex-1-1-7-pron-a', 'ex-1-1-8-pron-b', 'ex-1-1-9-pron-c', 'ex-1-1-10-pron-d', 'ex-1-1-11-pron-e', 'ex-1-1-12-tongue-twisters', 'ex-1-1-13-consonants', 'ex-1-1-14-special-consonants', 'ex-1-1-15-ckq']
  },
  'lesson-1-2': {
    id: 'lesson-1-2',
    title: 'Урок 2: Имя существительное. Артикль. Прилагательное',
    moduleId: 'module-1',
    grammar: {
      title: 'Имя существительное. Артикль. Прилагательное',
      intro: `В испанском языке существительные имеют категорию рода (мужской и женский). Артикль указывает род и число существительного. Прилагательные согласуются в роде и числе с существительными.`,
      sections: [
        {
          id: 'noun',
          title: 'ИМЯ СУЩЕСТВИТЕЛЬНОЕ',
          content: `## ИМЯ СУЩЕСТВИТЕЛЬНОЕ

В испанском языке существительные имеют категорию рода. Все существительные делятся на мужской род (masculino) и женский род (femenino).`
        },
        {
          id: 'noun-gender',
          title: 'РОД СУЩЕСТВИТЕЛЬНЫХ',
          content: `### РОД СУЩЕСТВИТЕЛЬНЫХ

Большинство существительных, оканчивающихся на гласную **-о**, относятся к мужскому роду, в то время как большинство существительных, оканчивающихся на гласную **-а**, относятся к женскому роду:

**masculino (m) / femenino (f)**

- chico (мальчик) — chica (девочка)
- amigo (друг) — amiga (подруга)
- hermano (брат) — casa (дом)
- libro (книга) — alumna (ученица)
- museo (музей) — playa (пляж)

#### Исключения:

**masculino:**
- papá (папа)
- día (день)
- policía (полицейский)

**femenino:**
- mano (рука)
- radio (радио)

К мужскому роду относятся существительные греческого происхождения, оканчивающиеся на **-ma** и **-ta**:
- problema (проблема)
- programa (программа)
- tema (тема)
- planeta (планета)

#### Существительные на -е

Существительные, оканчивающиеся на гласную **-е**, могут быть как мужского, так и женского рода:

**masculino:**
- padre (отец)
- café (кофе)
- coche (автомобиль)
- hombre (человек / мужчина)

**femenino:**
- madre (мать)
- calle (улица)
- noche (ночь)
- tarde (вечер / день)

#### Существительные на согласную

Существительные, оканчивающиеся на согласную, могут быть как мужского, так и женского рода:

**masculino:**
- amor (любовь)
- sol (солнце)
- avión (самолет)
- lápiz (карандаш)
- país (страна)
- césped (газон)

**femenino:**
- flor (цветок)
- sal (соль)
- operación (операция)
- luz (свет)
- crisis (кризис)
- pared (стена)

К женскому роду относятся существительные, оканчивающиеся на **-ción, -tión, -sión, -ad**:
- estación (станция)
- ciudad (город)
- cuestión (вопрос)
- verdad (правда)
- pensión (пенсия)
- felicidad (счастье)

Существительные, оканчивающиеся на **-ante, -iente, -ista**, обозначают лиц как мужского, так и женского пола. Род определяется по артиклю:
- el estudiante (студент), la estudiante (студентка)
- el cliente (клиент), la cliente (клиентка)
- el economista (экономист-мужчина), la economista (экономист-женщина)`
        },
        {
          id: 'noun-number',
          title: 'ЧИСЛО СУЩЕСТВИТЕЛЬНЫХ',
          content: `### ЧИСЛО СУЩЕСТВИТЕЛЬНЫХ (Множественное число)

В испанском языке существительные имеют категорию числа.

**Если существительное оканчивается на гласную — прибавляется окончание -s:**
- libro → libros
- casa → casas
- coche → coches

**Если существительное оканчивается на согласную — прибавляется окончание -es:**
- ciudad → ciudades
- flor → flores
- avión → aviones
- país → países

**Если существительное оканчивается на -z — буква z заменяется на c и добавляется окончание -es:**
- lápiz → lápices
- luz → luces

Существительные, оканчивающиеся в единственном числе на безударный слог **-as, -os, -us, -es, -is**, во множественном числе не изменяются (род определяется по артиклю):
- el lunes (понедельник) → los lunes (понедельники)
- la crisis (кризис) → las crisis (кризисы)
- el cumpleaños (день рождения) → los cumpleaños (дни рождения)

#### Существительные, употребляемые только в единственном или множественном числе

В испанском языке есть ряд существительных, которые употребляются только в единственном числе или только во множественном числе:
- salud f (здоровье)
- hambre f (голод)
- dinero m (деньги)
- vacaciones f (каникулы)`
        },
        {
          id: 'article',
          title: 'АРТИКЛЬ',
          content: `## АРТИКЛЬ

Артикль — маленькое служебное слово, которое играет роль определения существительного, указывая его род и число. Артикли делятся на определенные и неопределенные.`
        },
        {
          id: 'article-definite',
          title: 'ОПРЕДЕЛЕННЫЙ АРТИКЛЬ',
          content: `### ОПРЕДЕЛЕННЫЙ АРТИКЛЬ

Определенный артикль употребляется, когда говорится о конкретном предмете или предметах, известных говорящему или единственных в своем роде.

| Число | Мужской род | Женский род |
|-------|-------------|-------------|
| Единственное (singular) | el | la |
| Множественное (plural) | los | las |

**Примеры:**
- el libro (конкретная книга) — los libros
- la casa (конкретный дом) — las casas

Существует также определенный артикль среднего рода **lo**. У него нет множественного числа, и применяется он с единственной целью — создать существительные, обозначающие абстрактные понятия. Для этого артикль **lo** ставится перед прилагательным:
- lo interesante (интересное)
- lo nuevo (новое)
- lo bueno (хорошее)`
        },
        {
          id: 'article-indefinite',
          title: 'НЕОПРЕДЕЛЕННЫЙ АРТИКЛЬ',
          content: `### НЕОПРЕДЕЛЕННЫЙ АРТИКЛЬ

Неопределенный артикль указывает на то, что существительное упоминается впервые, не знакомо говорящему, или употребляется, когда говорится об одном предмете, относящемся к целому классу аналогичных предметов. Неопределенный артикль единственного и множественного числа употребляется также для обозначения количества предметов (несколько), или если за существительным следует определение.

<div style="overflow-x: auto;">

| Число | Мужской род | Женский род |
|-------|-------------|-------------|
| Единственное | un | una |
| Множественное | unos | unas |

</div>

**Примеры:**
- un libro (какой-то один) — unos libros (несколько)
- una casa (какой-то один) — unas casas (несколько)
- una flor bonita (красивый цветок)
- un día difícil (трудный день)`
        },
        {
          id: 'article-special',
          title: 'ОСОБЫЙ СЛУЧАЙ УПОТРЕБЛЕНИЯ АРТИКЛЯ',
          content: `### ОСОБЫЙ СЛУЧАЙ УПОТРЕБЛЕНИЯ АРТИКЛЯ

В испанском языке есть ряд существительных женского рода, начинающихся с ударной гласной **"а"** или **"ha"**, перед которыми в единственном числе следует ставить артикль мужского рода (**el**), чтобы избежать неблагозвучного стечения гласных. Во множественном числе артикль используется женского рода (**las**).

- el alma (душа) — las almas
- el ama (хозяйка) — las amas
- el agua (вода) — las aguas
- el águila (орел) — las águilas
- el aula (аудитория) — las aulas`
        },
        {
          id: 'adjective',
          title: 'ИМЯ ПРИЛАГАТЕЛЬНОЕ',
          content: `## ИМЯ ПРИЛАГАТЕЛЬНОЕ (El adjetivo)

### Согласование

Испанские прилагательные согласуются в роде и числе с существительными, которые они определяют.

### Группы прилагательных

Испанские прилагательные делятся на две основные группы:

#### 1. Прилагательные двух окончаний

Эти прилагательные имеют окончание **-о** в форме мужского рода единственного числа и окончание **-а** в форме женского рода единственного числа.

<div style="overflow-x: auto;">

| Мужской род | Женский род | Перевод |
|-------------|-------------|---------|
| blanco | blanca | белый / белая |
| negro | negra | черный / черная |

</div>

**Исключение:** Прилагательные, обозначающие национальность/происхождение, также имеют две формы, даже если оканчиваются на согласную:

<div style="overflow-x: auto;">

| Мужской род | Женский род | Пример |
|-------------|-------------|--------|
| un amigo español | una amiga española | испанский друг / испанская подруга |
| un estudiante alemán | una estudiante alemana | немецкий студент / немецкая студентка |

</div>

**Примеры прилагательных двух окончаний:**

<div style="overflow-x: auto;">

| Испанский | Русский |
|-----------|---------|
| bueno | хороший |
| nuevo | новый |
| enfermo | больной |
| largo | длинный |
| bonito / guapo | красивый |
| contento | довольный |
| barato | дешевый |
| soltero | холостой |

</div>

### Позиция прилагательного

В отличие от русского языка, испанские прилагательные, как правило, ставятся **после** определяемого существительного:

- un libro interesante (интересная книга)
- una casa blanca (белый дом)

#### Прилагательные, меняющие позицию

Качественные прилагательные **bueno** (хороший), **malo** (плохой), **grande** (большой, в значении «великий») иногда могут стоять перед определяемым словом.`
        },
        {
          id: 'adjective-one-ending',
          title: 'ПРИМЕРЫ ПРИЛАГАТЕЛЬНЫХ ОДНОГО ОКОНЧАНИЯ',
          content: `### ПРИЛАГАТЕЛЬНЫЕ ОДНОГО ОКОНЧАНИЯ

Прилагательные, оканчивающиеся в единственном числе на другую гласную (кроме **-о**) или на согласную, имеют одинаковую форму как в женском, так и в мужском роде.

<div style="overflow-x: auto;">

| Прилагательное | Мужской род (Пример) | Женский род (Пример) |
|----------------|---------------------|---------------------|
| azul | un lápiz azul | una flor azul |
| verde | un coche verde | una casa verde |
| feliz | un hombre feliz | una mujer feliz |

</div>

**Примеры прилагательных одного окончания:**

<div style="overflow-x: auto;">

| Испанский | Русский |
|-----------|---------|
| grande | большой |
| joven | молодой |
| regular | обычный |
| caliente | горячий |
| difícil | трудный |
| interesante | интересный |
| feliz | счастливый |
| alegre | веселый |

</div>`
        },
        {
          id: 'adjective-bueno-malo',
          title: 'BUENO MALO BUEN MAL',
          content: `### УСЕЧЕННЫЕ ФОРМЫ: BUENO, MALO, GRANDE

#### Grande → Gran

Прилагательное **grande** имеет усеченную форму **gran** перед существительными как мужского, так и женского рода:

- una gran idea (великая идея)
- un gran desafío (великий вызов)

#### Bueno/Malo → Buen/Mal

Прилагательные **bueno** и **malo** имеют усеченные формы **buen** и **mal** только перед существительными мужского рода единственного числа:

<div style="overflow-x: auto;">

| Полная форма | Усеченная форма | Сравнение |
|--------------|-----------------|-----------|
| un hombre bueno | un buen hombre | хороший человек / добрый человек |
| un hombre malo | un mal hombre | плохой человек / злой человек |

</div>`
        },
        {
          id: 'adjective-plural',
          title: 'ОБРАЗОВАНИЕ МНОЖЕСТВЕННОГО ЧИСЛА ПРИЛАГАТЕЛЬНЫХ',
          content: `### ОБРАЗОВАНИЕ МНОЖЕСТВЕННОГО ЧИСЛА ПРИЛАГАТЕЛЬНЫХ

Прилагательные, оканчивающиеся на **гласную**, образуют множественное число с помощью окончания **-s**:

- blanco → blancos
- española → españolas
- verde → verdes

Прилагательные, оканчивающиеся на **согласную**, образуют множественное число с помощью окончания **-es**:

- azul → azules
- español → españoles
- regular → regulares

### Прилагательные-антонимы

<div style="overflow-x: auto;">

| Испанский | Русский |
|-----------|---------|
| bueno / malo | хороший / плохой |
| guapo / feo | красивый / некрасивый |
| gordo / delgado | толстый / стройный |
| largo / corto | длинный / короткий |
| joven / viejo | молодой / старый |
| regular / raro | обычный / странный |
| nuevo / antiguo | новый / старый |
| grande / pequeño | большой / маленький |
| caro / barato | дорогой / дешевый |
| caliente / frío | горячий / холодный |
| casado / soltero | женатый / холостой |
| alegre / triste | веселый / грустный |
| alto / bajo | высокий / невысокий |
| difícil / fácil | трудный / легкий |
| rico / pobre | богатый / бедный |

</div>`
        }
      ]
    },
    vocabulary: [
      { word: 'chico', translation: 'мальчик', audioUrl: null },
      { word: 'chica', translation: 'девочка', audioUrl: null },
      { word: 'amigo', translation: 'друг', audioUrl: null },
      { word: 'amiga', translation: 'подруга', audioUrl: null },
      { word: 'hermano', translation: 'брат', audioUrl: null },
      { word: 'hermana', translation: 'сестра', audioUrl: null },
      { word: 'casa', translation: 'дом', audioUrl: null },
      { word: 'libro', translation: 'книга', audioUrl: null },
      { word: 'alumna', translation: 'ученица', audioUrl: null },
      { word: 'museo', translation: 'музей', audioUrl: null },
      { word: 'playa', translation: 'пляж', audioUrl: null },
      { word: 'papá', translation: 'папа', audioUrl: null },
      { word: 'día', translation: 'день', audioUrl: null },
      { word: 'policía', translation: 'полицейский', audioUrl: null },
      { word: 'mano', translation: 'рука', audioUrl: null },
      { word: 'radio', translation: 'радио', audioUrl: null },
      { word: 'problema', translation: 'проблема', audioUrl: null },
      { word: 'programa', translation: 'программа', audioUrl: null },
      { word: 'tema', translation: 'тема', audioUrl: null },
      { word: 'planeta', translation: 'планета', audioUrl: null },
      { word: 'padre', translation: 'отец', audioUrl: null },
      { word: 'madre', translation: 'мать', audioUrl: null },
      { word: 'café', translation: 'кофе', audioUrl: null },
      { word: 'calle', translation: 'улица', audioUrl: null },
      { word: 'coche', translation: 'автомобиль', audioUrl: null },
      { word: 'noche', translation: 'ночь', audioUrl: null },
      { word: 'hombre', translation: 'человек / мужчина', audioUrl: null },
      { word: 'mujer', translation: 'женщина', audioUrl: null },
      { word: 'tarde', translation: 'вечер / день', audioUrl: null },
      { word: 'amor', translation: 'любовь', audioUrl: null },
      { word: 'sol', translation: 'солнце', audioUrl: null },
      { word: 'avión', translation: 'самолет', audioUrl: null },
      { word: 'lápiz', translation: 'карандаш', audioUrl: null },
      { word: 'país', translation: 'страна', audioUrl: null },
      { word: 'flor', translation: 'цветок', audioUrl: null },
      { word: 'luz', translation: 'свет', audioUrl: null },
      { word: 'ciudad', translation: 'город', audioUrl: null },
      { word: 'estación', translation: 'станция', audioUrl: null },
      { word: 'felicidad', translation: 'счастье', audioUrl: null },
      { word: 'estudiante', translation: 'студент/студентка', audioUrl: null },
      { word: 'cliente', translation: 'клиент/клиентка', audioUrl: null },
      { word: 'economista', translation: 'экономист', audioUrl: null },
      { word: 'lunes', translation: 'понедельник', audioUrl: null },
      { word: 'dinero', translation: 'деньги', audioUrl: null },
      { word: 'vacaciones', translation: 'каникулы', audioUrl: null },
      { word: 'salud', translation: 'здоровье', audioUrl: null },
      { word: 'hambre', translation: 'голод', audioUrl: null },
      { word: 'crisis', translation: 'кризис', audioUrl: null },
      { word: 'pared', translation: 'стена', audioUrl: null },
      { word: 'césped', translation: 'газон', audioUrl: null },
      { word: 'cumpleaños', translation: 'день рождения', audioUrl: null },
      { word: 'alma', translation: 'душа', audioUrl: null },
      { word: 'ama', translation: 'хозяйка', audioUrl: null },
      { word: 'águila', translation: 'орёл', audioUrl: null },
      { word: 'el', translation: 'артикль м.р. ед.ч.', audioUrl: null },
      { word: 'la', translation: 'артикль ж.р. ед.ч.', audioUrl: null },
      { word: 'los', translation: 'артикль м.р. мн.ч.', audioUrl: null },
      { word: 'las', translation: 'артикль ж.р. мн.ч.', audioUrl: null },
      { word: 'un', translation: 'неопр. артикль м.р.', audioUrl: null },
      { word: 'una', translation: 'неопр. артикль ж.р.', audioUrl: null },
      { word: 'agua', translation: 'вода', audioUrl: null },
      { word: 'aula', translation: 'аудитория', audioUrl: null },
      { word: 'blanco, -a', translation: 'белый, -ая', audioUrl: null },
      { word: 'negro, -a', translation: 'чёрный, -ая', audioUrl: null },
      { word: 'bueno, -a', translation: 'хороший, -ая', audioUrl: null },
      { word: 'malo, -a', translation: 'плохой, -ая', audioUrl: null },
      { word: 'nuevo, -a', translation: 'новый, -ая', audioUrl: null },
      { word: 'viejo, -a', translation: 'старый, -ая', audioUrl: null },
      { word: 'antiguo, -a', translation: 'древний, старинный', audioUrl: null },
      { word: 'largo, -a', translation: 'длинный, -ая', audioUrl: null },
      { word: 'corto, -a', translation: 'короткий, -ая', audioUrl: null },
      { word: 'bonito, -a', translation: 'красивый, -ая', audioUrl: null },
      { word: 'guapo, -a', translation: 'красивый, -ая', audioUrl: null },
      { word: 'feo, -a', translation: 'некрасивый, -ая', audioUrl: null },
      { word: 'grande', translation: 'большой', audioUrl: null },
      { word: 'pequeño, -a', translation: 'маленький, -ая', audioUrl: null },
      { word: 'alto, -a', translation: 'высокий, -ая', audioUrl: null },
      { word: 'bajo, -a', translation: 'низкий, -ая', audioUrl: null },
      { word: 'gordo, -a', translation: 'толстый, -ая', audioUrl: null },
      { word: 'delgado, -a', translation: 'стройный, -ая', audioUrl: null },
      { word: 'joven', translation: 'молодой', audioUrl: null },
      { word: 'enfermo, -a', translation: 'больной, -ая', audioUrl: null },
      { word: 'contento, -a', translation: 'довольный, -ая', audioUrl: null },
      { word: 'feliz', translation: 'счастливый', audioUrl: null },
      { word: 'alegre', translation: 'весёлый', audioUrl: null },
      { word: 'triste', translation: 'грустный', audioUrl: null },
      { word: 'barato, -a', translation: 'дешёвый, -ая', audioUrl: null },
      { word: 'caro, -a', translation: 'дорогой, -ая', audioUrl: null },
      { word: 'soltero, -a', translation: 'холостой, незамужняя', audioUrl: null },
      { word: 'casado, -a', translation: 'женатый, замужняя', audioUrl: null },
      { word: 'azul', translation: 'синий', audioUrl: null },
      { word: 'verde', translation: 'зелёный', audioUrl: null },
      { word: 'rojo, -a', translation: 'красный, -ая', audioUrl: null },
      { word: 'amarillo, -a', translation: 'жёлтый, -ая', audioUrl: null },
      { word: 'naranja', translation: 'оранжевый', audioUrl: null },
      { word: 'rosa', translation: 'розовый', audioUrl: null },
      { word: 'gris', translation: 'серый', audioUrl: null },
      { word: 'marrón', translation: 'коричневый', audioUrl: null },
      { word: 'morado, -a', translation: 'фиолетовый, -ая', audioUrl: null },
      { word: 'regular', translation: 'обычный', audioUrl: null },
      { word: 'raro, -a', translation: 'странный, -ая', audioUrl: null },
      { word: 'caliente', translation: 'горячий', audioUrl: null },
      { word: 'frío, -a', translation: 'холодный, -ая', audioUrl: null },
      { word: 'difícil', translation: 'трудный', audioUrl: null },
      { word: 'fácil', translation: 'лёгкий', audioUrl: null },
      { word: 'interesante', translation: 'интересный', audioUrl: null },
      { word: 'rico, -a', translation: 'богатый, -ая', audioUrl: null },
      { word: 'pobre', translation: 'бедный', audioUrl: null }
    ],
    readingText: {
      title: 'La familia y la ciudad',
      content: `Hola. Buenos días. Un día bonito. El sol. La ciudad. La ciudad grande.

Un chico. Una chica. Un hermano. Una hermana. El padre. La madre. El papá. La familia. ¿Qué tal la familia? Todo va bien. Gracias.

Un amigo bueno. Una amiga buena. El hombre alto. La mujer alta. El estudiante joven. El economista. Un cliente.

La casa. La casa grande. La casa bonita. La casa nueva. Un museo. El museo interesante. El museo antiguo. Una playa. La playa bonita. Una calle. La calle larga. Una estación.

El lunes. El día largo. El día bueno. La tarde. La noche. La noche fría. Buenas tardes. Buenas noches.

Un libro. El libro nuevo. El libro interesante. Un lápiz. Una alumna. Un aula.

Un coche. El coche caro. Un avión. El avión grande.

Un café. El café caliente. El agua. El agua fría.

Una flor. La flor bonita. La flor blanca. El sol. La luz.

El país. La ciudad. El amor. La felicidad. La salud. El dinero. Las vacaciones. El cumpleaños. Más o menos bien. Regular.

Un hombre rico. Una mujer pobre. Un chico alegre. Una chica triste. Un padre feliz. Una madre contenta.

Adiós. Gracias. Muchas gracias. De nada. Por favor. ¿Qué tal? Bien.`,
      translation: 'Семья и город\n\nПривет. Доброе утро. Хороший день. Солнце. Город. Большой город.\n\nМальчик. Девочка. Брат. Сестра. Отец. Мать. Папа. Семья. Как семья? Все хорошо. Спасибо.\n\nХороший друг. Хорошая подруга. Высокий мужчина. Высокая женщина. Молодой студент. Экономист. Клиент.\n\nДом. Большой дом. Красивый дом. Новый дом. Музей. Интересный музей. Старинный музей. Пляж. Красивый пляж. Улица. Длинная улица. Станция.\n\nПонедельник. Длинный день. Хороший день. Вечер. Ночь. Холодная ночь. Добрый день. Добрый вечер.\n\nКнига. Новая книга. Интересная книга. Карандаш. Ученица. Аудитория.\n\nМашина. Дорогая машина. Самолет. Большой самолет.\n\nКофе. Горячий кофе. Вода. Холодная вода.\n\nЦветок. Красивый цветок. Белый цветок. Солнце. Свет.\n\nСтрана. Город. Любовь. Счастье. Здоровье. Деньги. Каникулы. День рождения. Более или менее хорошо. Так себе.\n\nБогатый мужчина. Бедная женщина. Веселый мальчик. Грустная девочка. Счастливый отец. Довольная мать.\n\nПока. Спасибо. Большое спасибо. Пожалуйста. Пожалуйста. Как дела? Хорошо.',
      audioUrl: '/audio/lesson-1-2-reading.mp3',
      subtitles: []
    },
    exercises: ['ex-1-2-1', 'ex-1-2-2', 'ex-1-2-3', 'ex-1-2-4', 'ex-1-2-5', 'ex-1-2-6', 'ex-1-2-7', 'ex-1-2-8', 'ex-1-2-9', 'ex-1-2-10']
  },
  'lesson-1-3': {
    id: 'lesson-1-3',
    title: 'Урок 3: Личные местоимения. Глаголы SER и ESTAR',
    moduleId: 'module-1',
    grammar: {
      title: 'Личные местоимения (Pronombres personales). Глаголы SER и ESTAR',
      intro: `В испанском языке личные местоимения имеют разные формы по родам во множественном числе. Глаголы **ser** и **estar** оба переводятся как «быть», но используются в разных контекстах.`,
      sections: [
        {
          id: 'nominative-forms',
          title: 'Формы в именительном падеже',
          content: `## Формы в именительном падеже

Испанские личные местоимения в именительном падеже (субъектные местоимения) имеют следующие формы:

| Лицо | Единственное число | Множественное число |
|------|-------------------|---------------------|
| 1-е лицо | yo (я) | nosotros (мы, м.р./смеш. группа) |
| | | nosotras (мы, ж.р.) |
| 2-е лицо | tú (ты) | vosotros (вы, м.р./смеш. группа) |
| | | vosotras (вы, ж.р.) |
| 3-е лицо | él (он) | ellos (они, м.р./смеш. группа) |
| | ella (она) | ellas (они, ж.р.) |
| Вежливая форма | usted (Вы, ед.ч.) | ustedes (Вы, мн.ч.) |`
        },
        {
          id: 'plural-gender',
          title: 'Родовое различие во множественном числе',
          content: `## Родовое различие во множественном числе

В отличие от русского языка, личные местоимения во множественном числе различаются по родам:

- **nosotros, vosotros, ellos** используются для группы, состоящей из лиц мужского пола или смешанной группы (мужчины + женщины).
- **nosotras, vosotras, ellas** используются только для группы, состоящей исключительно из лиц женского пола.`
        },
        {
          id: 'formal-forms',
          title: 'Вежливые формы',
          content: `## Вежливые формы

Местоимение **usted** (ед.ч., Вы) и **ustedes** (мн.ч., Вы) – это сокращения от архаичной формы Vuestra Merced (Ваша милость).

Поэтому они всегда употребляются с глаголами в форме третьего лица (например: Usted comprende — Вы понимаете, буквально: Ваша милость понимает).

При письме вежливые формы часто сокращаются:
- Единственное число: **Ud.** или **Vd.**
- Множественное число: **Uds.** или **Vds.**`
        },
        {
          id: 'pronoun-usage',
          title: 'Употребление местоимений',
          content: `## Употребление местоимений

Личные местоимения (кроме вежливых форм) в устной и письменной речи, как правило, опускаются, так как лицо глагола ясно по его спряжению.

Они используются только в случаях, когда:
- Есть противопоставление (например: **Yo leo, pero tú escribes** — Я читаю, а ты пишешь).
- Местоимение является логическим или грамматическим центром фразы (для акцента или ясности).`
        },
        {
          id: 'verb-ser',
          title: 'Глагол SER (быть, являться)',
          content: `## Глагол SER (быть, являться)

Глаголы **ser** и **estar** оба переводятся как «быть», «являться», «находиться», но используются в разных контекстах. Оба глагола выполняют роль глагола-связки, которая обязательна в испанском предложении (в отличие от русского).

### Спряжение в настоящем времени (Presente de Indicativo)

| Местоимение | Форма SER |
|-------------|-----------|
| yo | soy |
| tú | eres |
| él, ella, usted | es |
| nosotros, nosotras | somos |
| vosotros, vosotras | sois |
| ellos, ellas, ustedes | son |`
        },
        {
          id: 'ser-usage',
          title: 'Употребление Ser',
          content: `## Употребление Ser

Ser используется для обозначения постоянных, неотъемлемых характеристик, то есть того, что определяет подлежащее:

| Контекст | Пример | Перевод |
|----------|--------|---------|
| Имя или фамилия | Soy Pablo. | Меня зовут Павел. |
| Родственные связи | Don Juan es el padre de José. | Дон Хуан — отец Хосе. |
| Происхождение/Национальность | Yo soy ruso. Soy de Moscú. | Я — русский. Я из Москвы. |
| Род занятий/Профессия | Ana es economista. | Анна — экономист. |
| Качество (характер, свойство) | Somos jóvenes. José es alegre. | Мы — молоды. Хосе веселый (по характеру). |`
        },
        {
          id: 'verb-estar',
          title: 'Глагол ESTAR (быть, находиться)',
          content: `## Глагол ESTAR (быть, находиться)

### Спряжение в настоящем времени (Presente de Indicativo)

| Местоимение | Форма ESTAR |
|-------------|-------------|
| yo | estoy |
| tú | estás |
| él, ella, usted | está |
| nosotros, nosotras | estamos |
| vosotros, vosotras | estáis |
| ellos, ellas, ustedes | están |`
        },
        {
          id: 'estar-usage',
          title: 'Употребление Estar',
          content: `## Употребление Estar

Estar используется для обозначения временных состояний, положений или местонахождения:

| Контекст | Пример | Перевод |
|----------|--------|---------|
| Местонахождение | Los amigos están en la playa. | Друзья (находятся) на пляже. |
| | Nosotros estamos en casa. | Мы (находимся) дома. |
| Временный признак/состояние | Lola está enferma. | Лола больна (сейчас). |
| Самочувствие | Estoy bien. | Я хорошо себя чувствую. |
| Временная эмоция | Usted está contento. José está alegre. | Вы довольны (в данный момент). Хосе весел (в данный момент). |`
        },
        {
          id: 'ser-estar-comparison',
          title: 'Сравнение Ser и Estar',
          content: `## Сравнение Ser и Estar

Некоторые прилагательные могут сочетаться с обоими глаголами, но при этом меняется смысл высказывания, так как Ser говорит о постоянном качестве, а Estar — о временном состоянии:

| SER (Постоянное качество) | ESTAR (Временное состояние) |
|---------------------------|----------------------------|
| José es alegre. (Хосе веселый по характеру.) | José está alegre. (Хосе весел в данный момент.) |
| Pilar es guapa. (Пилар красивая в целом.) | Pilar está guapa. (Пилар нарядная/хорошо выглядит сейчас.) |
| Es una cuestión regular. (Обычный вопрос.) | Estoy regular. (Я неважно себя чувствую.) |`
        }
      ]
    },
    vocabulary: [
      { word: 'yo', translation: 'я', audioUrl: null },
      { word: 'tú', translation: 'ты', audioUrl: null },
      { word: 'él', translation: 'он', audioUrl: null },
      { word: 'ella', translation: 'она', audioUrl: null },
      { word: 'nosotros', translation: 'мы (м.р.)', audioUrl: null },
      { word: 'nosotras', translation: 'мы (ж.р.)', audioUrl: null },
      { word: 'vosotros', translation: 'вы (м.р.)', audioUrl: null },
      { word: 'vosotras', translation: 'вы (ж.р.)', audioUrl: null },
      { word: 'ellos', translation: 'они (м.р.)', audioUrl: null },
      { word: 'ellas', translation: 'они (ж.р.)', audioUrl: null },
      { word: 'usted', translation: 'Вы (вежл., ед.ч.)', audioUrl: null },
      { word: 'ustedes', translation: 'Вы (вежл., мн.ч.)', audioUrl: null },
      { word: 'ser', translation: 'быть, являться', audioUrl: null },
      { word: 'estar', translation: 'быть, находиться', audioUrl: null },
      { word: 'soy', translation: '(я) есть/являюсь', audioUrl: null },
      { word: 'eres', translation: '(ты) есть/являешься', audioUrl: null },
      { word: 'es', translation: '(он/она/Вы) есть/является', audioUrl: null },
      { word: 'somos', translation: '(мы) есть/являемся', audioUrl: null },
      { word: 'sois', translation: '(вы) есть/являетесь', audioUrl: null },
      { word: 'son', translation: '(они/Вы) есть/являются', audioUrl: null },
      { word: 'estoy', translation: '(я) нахожусь', audioUrl: null },
      { word: 'estás', translation: '(ты) находишься', audioUrl: null },
      { word: 'está', translation: '(он/она/Вы) находится', audioUrl: null },
      { word: 'estamos', translation: '(мы) находимся', audioUrl: null },
      { word: 'estáis', translation: '(вы) находитесь', audioUrl: null },
      { word: 'están', translation: '(они/Вы) находятся', audioUrl: null },
      { word: 'en', translation: 'в', audioUrl: null },
      { word: 'de', translation: 'из, от', audioUrl: null },
      { word: 'bien', translation: 'хорошо', audioUrl: null },
      { word: '¿Cómo te llamas?', translation: 'как тебя зовут?', audioUrl: null },
      { word: 'Me llamo', translation: 'меня зовут', audioUrl: null },
      { word: '¿De dónde eres?', translation: 'откуда ты?', audioUrl: null },
      { word: '¿Cómo estás?', translation: 'как (ты) себя чувствуешь?', audioUrl: null },
      { word: '¿Cómo es?', translation: 'какой он/она?', audioUrl: null },
      { word: 'Mucho gusto', translation: 'очень приятно', audioUrl: null },
      { word: 'Encantado, -a', translation: 'рад(а) познакомиться', audioUrl: null },
      { word: '¿Dónde?', translation: 'где?', audioUrl: null },
      { word: 'ahora', translation: 'сейчас', audioUrl: null },
      { word: '¿Cómo se llama usted?', translation: 'как Вас зовут?', audioUrl: null },
      { word: 'señor', translation: 'господин', audioUrl: null },
      { word: 'señora', translation: 'госпожа', audioUrl: null },
      { word: 'señorita', translation: 'сеньорита', audioUrl: null },
      { word: 'don', translation: 'дон (почтительное обращение)', audioUrl: null },
      { word: 'doña', translation: 'донья (почтительное обращение)', audioUrl: null },
      { word: 'mi', translation: 'мой, моя, моё', audioUrl: null },
      { word: 'tu', translation: 'твой, твоя, твоё', audioUrl: null },
      { word: 'su', translation: 'его, её, Ваш', audioUrl: null }
    ],
    readingText: {
      title: 'Palabras y frases',
      content: `Hola. Yo soy Ana y soy chica. Ella es mi amiga María. María es joven y guapa. El libro es grande y azul. La casa es blanca. El padre es alto y bueno.



Buenos días, ¿Cómo estás? Yo estoy bien, gracias. Ahora estoy en la playa. El sol es caliente. Un chico está en el coche. Su coche es nuevo y barato. Mi hermana es alumna. Ella está contenta. La ciudad es grande, pero mi casa es pequeña.



El día es largo y la noche es fría. Mi hermano es feliz y soltero. Ahora él está en casa. Un libro interesante está en la mesa. Nosotros somos clientes ricos, pero estamos enfermos. La flor es bonita y verde. ¿Dónde están los aviones? Los aviones son grandes. Tú eres economista. Tu trabajo es difícil, pero es interesante.`,
      translation: `**Приветствия и выражения**
Привет! Доброе утро. Добрый день. Добрый вечер/Спокойной ночи.
Спасибо. Большое спасибо. Пожалуйста (ответ). Пожалуйста (просьба).
Пока. Очень приятно. Рад познакомиться (м.р.). Рада познакомиться (ж.р.).

**Семья**
Отец. Мать. Брат. Сестра.
Мой отец. Моя мать. Твой брат. Твоя сестра.
Молодой мальчик. Молодая девочка.
Высокий мужчина. Высокая женщина.
Хороший друг. Хорошая подруга.

**Описания**
Большая книга. Большой дом.
Красивый день. Красивый город.
Интересный музей. Красивый пляж.
Горячий кофе. Холодная ночь.
Белое солнце. Белый свет.
Дорогая машина. Дорогой цветок.

**Места**
Дом. Музей. Пляж. Город.
Длинная улица. Длинный день.
Дома. В музее. На пляже. В городе.

**Качества и состояния**
Счастливый. Довольный. Весёлый. Грустный.
Больной. Молодой. Старый. Высокий. Низкий.
Красивый. Симпатичный. Некрасивый. Хороший. Плохой.
Новый. Старинный. Большой. Маленький.
Толстый. Стройный. Богатый. Бедный.

**Предметы и вещи**
Новая книга. Новый дом.
Маленький карандаш. Маленькая рука.
Зелёная машина. Синий цветок.
Большой самолёт. Большая станция.
Деньги. Любовь. Счастье. Здоровье.`,
      audioUrl: '/audio/lesson-1-3-reading.mp3',
      subtitles: [
        { start: 0, end: 4, text: '¡Hola! ¿Cómo te llamas?' },
        { start: 4, end: 8, text: 'Me llamo Ana. ¿Y tú?' },
        { start: 8, end: 12, text: 'Buenos días. ¿Cómo se llama usted?' },
        { start: 12, end: 16, text: '¿Cómo estás?' },
        { start: 16, end: 20, text: '¿Cómo es tu amigo?' }
      ]
    },
    exercises: ['ex-1-3-1', 'ex-1-3-2', 'ex-1-3-4', 'ex-1-3-5', 'ex-1-3-3']
  },
  'lesson-1-4': {
    id: 'lesson-1-4',
    title: 'Урок 4: Профессии и национальности. Обобщение уроков 1, 2, 3',
    moduleId: 'module-1',
    grammar: {
      title: 'Профессии, страны и национальности',
      intro: 'В этом уроке мы изучаем, как говорить о профессиях, странах и национальностях на испанском языке. Все новые слова вы найдете в разделе "Словарь".',
      sections: [
        {
          id: 'professions-gender',
          title: 'Род и число профессий',
          content: `
**Профессии мужского рода обычно оканчиваются на -o:**
- médico (врач-мужчина) → médica (врач-женщина)
- abogado (адвокат-мужчина) → abogada (адвокат-женщина)
- ingeniero (инженер-мужчина) → ingeniera (инженер-женщина)

**Профессии на -e или -ista имеют одинаковую форму для обоих родов:**
- el/la estudiante (студент/студентка)
- el/la periodista (журналист/журналистка)
- el/la cantante (певец/певица)

**Некоторые профессии имеют особые формы женского рода:**
- actor (актер) → actriz (актриса)
- escritor (писатель) → escritora (писательница)
- profesor (преподаватель) → profesora (преподавательница)
          `
        },
        {
          id: 'nationalities-gender',
          title: 'Национальности: род и согласование',
          content: `
**Национальности на -o/-a:**
- ruso (русский) → rusa (русская)
- italiano (итальянец) → italiana (итальянка)

**Национальности на согласную добавляют -a для женского рода:**
- español (испанец) → española (испанка)
- francés (француз) → francesa (француженка)
- alemán (немец) → alemана (немка)

**Национальности на -e или -í не изменяются:**
- belga (бельгиец/бельгийка)
- marroquí (марокканец/марокканка)

**Множественное число:**
- españoles (испанцы), españolas (испанки)
- franceses (французы), francesas (француженки)
- alemanes (немцы), alemanas (немки)
          `
        },
        {
          id: 'ser-estar-usage',
          title: 'Использование с глаголами SER и ESTAR',
          content: `
**Глагол SER используется для:**
- Профессий: Yo soy médico. (Я врач.)
- Национальностей: Ella es española. (Она испанка.)
- Происхождения: Somos de Rusia. (Мы из России.)

**Глагол ESTAR используется для:**
- Местонахождения: Estoy en Madrid. (Я в Мадриде.)
- Временного состояния: El médico está ocupado. (Врач занят.)
          `
        }
      ]
    },
    vocabulary: [
      { word: 'abogado, -a', translation: 'адвокат', audioUrl: null },
      { word: 'actor', translation: 'актер', audioUrl: null },
      { word: 'actriz', translation: 'актриса', audioUrl: null },
      { word: 'banquero', translation: 'банкир', audioUrl: null },
      { word: 'médico, -a', translation: 'врач', audioUrl: null },
      { word: 'guía', translation: 'гид', audioUrl: null },
      { word: 'periodista', translation: 'журналист', audioUrl: null },
      { word: 'ingeniero, -a', translation: 'инженер', audioUrl: null },
      { word: 'enfermera', translation: 'медсестра', audioUrl: null },
      { word: 'músico', translation: 'музыкант', audioUrl: null },
      { word: 'camarero, -a', translation: 'официант', audioUrl: null },
      { word: 'escritor, -a', translation: 'писатель', audioUrl: null },
      { word: 'cocinero, -a', translation: 'повар', audioUrl: null },
      { word: 'poeta', translation: 'поэт', audioUrl: null },
      { word: 'profesor, -a', translation: 'преподаватель', audioUrl: null },
      { word: 'dependiente, -a', translation: 'продавец', audioUrl: null },
      { word: 'constructor', translation: 'строитель', audioUrl: null },
      { word: 'pintor, -a', translation: 'художник', audioUrl: null },
      { word: 'economista', translation: 'экономист', audioUrl: null },
      { word: 'jurista', translation: 'юрист', audioUrl: null },
      { word: 'España', translation: 'Испания', audioUrl: null },
      { word: 'Rusia', translation: 'Россия', audioUrl: null },
      { word: 'Francia', translation: 'Франция', audioUrl: null },
      { word: 'Bélgica', translation: 'Бельгия', audioUrl: null },
      { word: 'Holanda', translation: 'Голландия', audioUrl: null },
      { word: 'Italia', translation: 'Италия', audioUrl: null },
      { word: 'Grecia', translation: 'Греция', audioUrl: null },
      { word: 'Portugal', translation: 'Португалия', audioUrl: null },
      { word: 'Alemania', translation: 'Германия', audioUrl: null },
      { word: 'Dinamarca', translation: 'Дания', audioUrl: null },
      { word: 'China', translation: 'Китай', audioUrl: null },
      { word: 'Japón', translation: 'Япония', audioUrl: null },
      { word: 'Turquía', translation: 'Турция', audioUrl: null },
      { word: 'Inglaterra', translation: 'Англия', audioUrl: null },
      { word: 'Estados Unidos', translation: 'США', audioUrl: null },
      { word: 'Marruecos', translation: 'Марокко', audioUrl: null },
      { word: 'Madrid', translation: 'Мадрид', audioUrl: null },
      { word: 'Moscú', translation: 'Москва', audioUrl: null },
      { word: 'París', translation: 'Париж', audioUrl: null },
      { word: 'Berlín', translation: 'Берлин', audioUrl: null },
      { word: 'Roma', translation: 'Рим', audioUrl: null },
      { word: 'Londres', translation: 'Лондон', audioUrl: null },
      { word: 'Bruselas', translation: 'Брюссель', audioUrl: null },
      { word: 'Ámsterdam', translation: 'Амстердам', audioUrl: null },
      { word: 'Atenas', translation: 'Афины', audioUrl: null },
      { word: 'Lisboa', translation: 'Лиссабон', audioUrl: null },
      { word: 'Copenhague', translation: 'Копенгаген', audioUrl: null },
      { word: 'Pekín', translation: 'Пекин', audioUrl: null },
      { word: 'Tokio', translation: 'Токио', audioUrl: null },
      { word: 'Estambul', translation: 'Стамбул', audioUrl: null },
      { word: 'Washington', translation: 'Вашингтон', audioUrl: null },
      { word: 'Rabat', translation: 'Рабат', audioUrl: null },
      { word: 'español, -a', translation: 'испанец, испанка', audioUrl: null },
      { word: 'ruso, -a', translation: 'русский, русская', audioUrl: null },
      { word: 'francés, -esa', translation: 'француз, француженка', audioUrl: null },
      { word: 'alemán, -ana', translation: 'немец, немка', audioUrl: null },
      { word: 'italiano, -a', translation: 'итальянец, итальянка', audioUrl: null },
      { word: 'inglés, -esa', translation: 'англичанин, англичанка', audioUrl: null },
      { word: 'belga', translation: 'бельгиец, бельгийка', audioUrl: null },
      { word: 'holandés, -esa', translation: 'голландец, голландка', audioUrl: null },
      { word: 'griego, -a', translation: 'грек, гречанка', audioUrl: null },
      { word: 'portugués, -esa', translation: 'португалец, португалка', audioUrl: null },
      { word: 'danés, -esa', translation: 'датчанин, датчанка', audioUrl: null },
      { word: 'chino, -a', translation: 'китаец, китаянка', audioUrl: null },
      { word: 'japonés, -esa', translation: 'японец, японка', audioUrl: null },
      { word: 'turco, -a', translation: 'турок, турчанка', audioUrl: null },
      { word: 'norteamericano, -a', translation: 'американец, американка', audioUrl: null },
      { word: 'marroquí', translation: 'марокканец, марокканка', audioUrl: null },
      { word: 'alto, -a', translation: 'высокий, высокая', audioUrl: null },
      { word: 'bajo, -a', translation: 'низкий, низкая', audioUrl: null },
      { word: 'guapo, -a', translation: 'красивый, красивая', audioUrl: null },
      { word: 'soltera, -o', translation: 'холостой, незамужняя', audioUrl: null },
      { word: 'ocupado, -a', translation: 'занятый, занятая', audioUrl: null }
    ],
    readingText: {
      title: 'Mi familia',
      content: `Me llamo Ana. Soy joven y alta. Estoy contenta. Ahora estoy en casa.

Mi padre es bueno y alto. Mi madre es guapa y alegre. Ella es joven.

Mi hermano es grande y soltero. Él es feliz. Ahora él está en casa. Mi hermana es pequeña y bonita. Ella es alumna. Ahora ella está en la ciudad.

Una amiga: ella es joven y guapa. Ella es estudiante. Ahora está en el museo. El museo es antiguo y grande.

Un amigo: él es alto y delgado. Él es alegre. Ahora está en la playa. La playa es bonita.

La casa es grande y blanca. Está en una calle larga. El día es bonito. El sol es caliente. La noche es fría.`,
      translation: `Меня зовут Ана. Я молодая и высокая. Я довольна. Сейчас я дома.

Мой отец хороший и высокий. Моя мать красивая и веселая. Она молодая.

Мой брат большой и холостой. Он счастливый. Сейчас он дома. Моя сестра маленькая и красивая. Она ученица. Сейчас она в городе.

Одна подруга: она молодая и красивая. Она студентка. Сейчас она в музее. Музей старинный и большой.

Один друг: он высокий и стройный. Он веселый. Сейчас он на пляже. Пляж красивый.

Дом большой и белый. Он находится на длинной улице. День красивый. Солнце горячее. Ночь холодная.`,
      audioUrl: '/audio/lesson-1-3-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Soy Elena Petrova, de Rusia. ¿Y usted?' },
        { start: 5, end: 10, text: 'Soy Miguel Romero. Soy abogado.' },
        { start: 10, end: 15, text: '¿Eres tú Andrés, el hermano de Lola?' },
        { start: 15, end: 20, text: 'Soy Carlos, un amigo de Lola. Soy periodista.' },
        { start: 20, end: 25, text: 'Soy David Schmidt. Soy ingeniero.' }
      ]
    },
    exercises: ['ex-1-4-1', 'ex-1-4-2', 'ex-1-4-3', 'ex-1-4-5', 'ex-1-4-6', 'ex-1-4-7', 'ex-1-4-8', 'ex-1-4-9', 'ex-1-4-10', 'ex-1-4-test']
  },

  'lesson-1-5': {
    id: 'lesson-1-5',
    title: 'Урок 5: Предлоги, числительные, глаголы',
    moduleId: 'module-1',
        grammar: {
      title: 'Простые предлоги. Числительные. Правильные глаголы',
      intro: `# Грамматика урока

В этом уроке мы изучим:
- Простые предлоги и их употребление
- Количественные числительные от 0 до 100
- Спряжение правильных глаголов в настоящем времени
- Выражения с глаголом TOMAR`,
      sections: [
        {
          id: 'preposicion-a',
          title: 'Предлог "a"',
          collapsible: true,
          defaultOpen: false,
          content: `
## Предлог "a"

Указывает направление движения куда-либо, то есть используется, чтобы ответить на вопрос **куда?**

### Слияние с артиклем

Предлог **a** сливается с определенным артиклем мужского рода единственного числа **el**, образуя форму **al**:

**a + el → al**

### Примеры использования:

**Направление движения:**
- ir a la escuela — идти в школу
- ir al restaurante — идти в ресторан
- ir a la fiesta — ехать / идти на вечеринку

**Перед одушевленными существительными:**

Употребляется перед одушевленными существительными в винительном и дательном падежах. Используется, чтобы ответить на вопрос **кого?** или **кому?**

- ver a mi amigo — видеть (кого?) моего друга
- dar un regalo a la profesora — дать (кому?) учительнице подарок
`
        },
        {
          id: 'preposicion-de',
          title: 'Предлог "de"',
          collapsible: true,
          defaultOpen: false,
          content: `
## Предлог "de"

### 1. Указание точки отправления

Указывает точку, из которой начато движение, то есть используется, чтобы ответить на вопрос **откуда?**

**Слияние:** Предлог **de** сливается с определенным артиклем мужского рода единственного числа **el**, образуя форму **del**:

**de + el → del**

**Примеры:**
- venir de la playa — приходить с пляжа
- salir del museo — выходить из музея

### 2. Принадлежность и родительный падеж

Передает значение русского родительного падежа (**кого? чего?**), указывает на принадлежность:

- Es la hermana del pintor. — Это сестра художника.
- Los libros de la estudiante son caros. — Книги студентки дорогие.
`
        },
        {
          id: 'preposicion-en',
          title: 'Предлог "en"',
          collapsible: true,
          defaultOpen: false,
          content: `
## Предлог "en"

### 1. Местонахождение

Соответствует русским предлогам **в**, **на**. Указывает на местонахождение. Используется, чтобы ответить на вопрос **где?**

**Примеры:**
- Estamos en el hotel. — Мы в отеле.
- El lápiz está en la mesa. — Карандаш на столе.

### 2. Способ передвижения

С глаголом **ir** указывает на способ передвижения:

- viajar en tren — путешествовать на поезде
- ir en coche — ехать на машине
- ir en autobús — ехать на автобусе
`
        },
        {
          id: 'otras-preposiciones',
          title: 'Предлоги "con", "por", "para", "sin"',
          collapsible: true,
          defaultOpen: false,
          content: `
## Предлоги "con", "por", "para", "sin"

### con — с, вместе с

- ir al cine con amigos — идти в кино с друзьями
- café con leche — кофе с молоком

### por — по, через, из-за

- hablar por teléfono — говорить по телефону
- pasar por la calle — проходить по улице

### para — для

- Este regalo es para ti. — Этот подарок для тебя.
- estudiar para el examen — учиться для экзамена

### sin — без

- vivir sin problemas — жить без проблем
- café sin azúcar — кофе без сахара
`
        },
        {
          id: 'numerales',
          title: 'Количественные числительные 0–100',
          collapsible: true,
          defaultOpen: false,
          content: `
## Количественные числительные 0–100

### Таблица числительных

| Число | Español | Число | Español |
|-------|---------|-------|---------|
| 0 | cero | 21 | veintiuno |
| 1 | uno | 30 | treinta |
| 2 | dos | 40 | cuarenta |
| 3 | tres | 50 | cincuenta |
| 4 | cuatro | 60 | sesenta |
| 5 | cinco | 70 | setenta |
| 6 | seis | 80 | ochenta |
| 7 | siete | 90 | noventa |
| 8 | ocho | 100 | cien, ciento |
| 9 | nueve | | |
| 10 | diez | | |
| 11 | once | | |
| 12 | doce | | |
| 13 | trece | | |
| 14 | catorce | | |
| 15 | quince | | |
| 16 | dieciséis | | |
| 17 | diecisiete | | |
| 18 | dieciocho | | |
| 19 | diecinueve | | |
| 20 | veinte | | |

### Примечания:

- Числа 11—15 имеют особую форму
- С 30 до 99 пишутся раздельно с союзом **y**: treinta y uno, cuarenta y dos
- Усеченная форма **un** употребляется перед существительными мужского рода
- Форма женского рода: **una**
- 100: **cien** (когда стоит отдельно), **ciento** (перед другими числами: ciento uno)
`
        },
        {
          id: 'verbos-regulares',
          title: 'Спряжение правильных глаголов в настоящем времени',
          collapsible: true,
          defaultOpen: false,
          content: `
## Спряжение правильных глаголов в настоящем времени изъявительного наклонения (Presente de Indicativo)

Испанские глаголы делятся на три спряжения в зависимости от окончания их инфинитива (неопределенной формы):

- **I спряжение:** глаголы на **-ar** (например, hablar)
- **II спряжение:** глаголы на **-er** (например, comer)
- **III спряжение:** глаголы на **-ir** (например, vivir)

Для спряжения правильных глаголов необходимо отбросить окончание инфинитива (-ar, -er, -ir) и добавить соответствующие личные окончания.
`
        },
        {
          id: 'tabla-conjugacion',
          title: 'Таблица спряжения правильных глаголов',
          collapsible: true,
          defaultOpen: false,
          content: `
## Таблица спряжения правильных глаголов

| Местоимение | I спряжение (-AR) | II спряжение (-ER) | III спряжение (-IR) |
|------------|-------------------|--------------------|--------------------|
| yo | -o (habl**o**) | -o (com**o**) | -o (viv**o**) |
| tú | -as (habl**as**) | -es (com**es**) | -es (viv**es**) |
| él, ella, usted | -a (habl**a**) | -e (com**e**) | -e (viv**e**) |
| nosotros (-as) | -amos (habl**amos**) | -emos (com**emos**) | -imos (viv**imos**) |
| vosotros (-as) | -áis (habl**áis**) | -éis (com**éis**) | -ís (viv**ís**) |
| ellos, ellas, ustedes | -an (habl**an**) | -en (com**en**) | -en (viv**en**) |
`
        },
        {
          id: 'ejemplos-verbos',
          title: 'Примеры правильных глаголов и их употребление',
          collapsible: true,
          defaultOpen: false,
          content: `
## Примеры правильных глаголов и их употребление

### I спряжение (-AR)

| Глагол | Значение | Пример | Перевод |
|--------|----------|--------|---------|
| hablar | говорить | Nosotros hablamos en voz baja. | Мы говорим тихо. |
| llamar | звать, звонить | Yo llamo a mi amiga María. | Я зову мою подругу Марию. |
| preguntar | спрашивать | ¿Tú preguntas por el precio? | Ты спрашиваешь о цене? |
| escuchar | слушать | La señora escucha la radio. | Сеньора слушает радио. |
| tomar | брать, есть, пить | Ellos toman un coche nuevo. | Они берут новую машину. |

### II спряжение (-ER)

| Глагол | Значение | Пример | Перевод |
|--------|----------|--------|---------|
| leer | читать | Vosotras leéis un libro. | Вы (ж.р.) читаете книгу. |
| aprender | учить | Mi hermano aprende español. | Мой брат учит испанский. |
| comprender | понимать | ¿Ustedes comprenden el problema? | Вы понимаете проблему? |
| comer | есть, кушать | Yo como pan en casa. | Я ем хлеб дома. |

### III спряжение (-IR)

| Глагол | Значение | Пример | Перевод |
|--------|----------|--------|---------|
| abrir | открывать | El cliente abre la puerta. | Клиент открывает дверь. |
| escribir | писать | Ella escribe un artículo difícil. | Она пишет трудную статью. |
| vivir | жить | Ellos viven en un país rico. | Они живут в богатой стране. |
`
        },
        {
          id: 'verbo-tomar',
          title: 'Выражения с глаголом TOMAR',
          collapsible: true,
          defaultOpen: false,
          content: `
## Выражения с глаголом TOMAR

Глагол **tomar** — один из наиболее многозначных глаголов в испанском языке. В зависимости от контекста он может переводиться как **брать**, **есть**, **пить**, **принимать** или **садиться на транспорт**.

### 1. Значение "Брать / Получать"

- tomar libros para leer — брать книги, чтобы читать
- tomar un taxi — взять такси

### 2. Значение "Есть / Пить" (Прием пищи или напитков)

- tomar agua — пить воду
- tomar café — пить кофе
- tomar un bocadillo — есть бутерброд

### 3. Значение "Садиться на транспорт"

- tomar el metro — сесть на метро
- tomar el tranvía — сесть на трамвай
- tomar el tren — сесть на поезд
- tomar el autobús — сесть на автобус

### 4. Другие устойчивые выражения

- tomar en serio — принимать всерьез
- tomar medicinas — принимать лекарства
- tomar el sol — загорать
- tomar una decisión — принять решение
`
        }
      ]
    },
    vocabulary: [
      { word: 'a', translation: 'в, на (направление)', audioUrl: null },
      { word: 'de', translation: 'из, от, о', audioUrl: null },
      { word: 'en', translation: 'в, на (местонахождение)', audioUrl: null },
      { word: 'con', translation: 'с, вместе с', audioUrl: null },
      { word: 'por', translation: 'по, через', audioUrl: null },
      { word: 'para', translation: 'для', audioUrl: null },
      { word: 'sin', translation: 'без', audioUrl: null },
      { word: 'al', translation: 'в (a + el)', audioUrl: null },
      { word: 'del', translation: 'из (de + el)', audioUrl: null },
      { word: 'cero', translation: 'ноль', audioUrl: null },
      { word: 'uno', translation: 'один', audioUrl: null },
      { word: 'dos', translation: 'два', audioUrl: null },
      { word: 'tres', translation: 'три', audioUrl: null },
      { word: 'cuatro', translation: 'четыре', audioUrl: null },
      { word: 'cinco', translation: 'пять', audioUrl: null },
      { word: 'seis', translation: 'шесть', audioUrl: null },
      { word: 'siete', translation: 'семь', audioUrl: null },
      { word: 'ocho', translation: 'восемь', audioUrl: null },
      { word: 'nueve', translation: 'девять', audioUrl: null },
      { word: 'diez', translation: 'десять', audioUrl: null },
      { word: 'once', translation: 'одиннадцать', audioUrl: null },
      { word: 'doce', translation: 'двенадцать', audioUrl: null },
      { word: 'trece', translation: 'тринадцать', audioUrl: null },
      { word: 'catorce', translation: 'четырнадцать', audioUrl: null },
      { word: 'quince', translation: 'пятнадцать', audioUrl: null },
      { word: 'dieciséis', translation: 'шестнадцать', audioUrl: null },
      { word: 'diecisiete', translation: 'семнадцать', audioUrl: null },
      { word: 'dieciocho', translation: 'восемнадцать', audioUrl: null },
      { word: 'diecinueve', translation: 'девятнадцать', audioUrl: null },
      { word: 'veinte', translation: 'двадцать', audioUrl: null },
      { word: 'veintiuno', translation: 'двадцать один', audioUrl: null },
      { word: 'treinta', translation: 'тридцать', audioUrl: null },
      { word: 'cuarenta', translation: 'сорок', audioUrl: null },
      { word: 'cincuenta', translation: 'пятьдесят', audioUrl: null },
      { word: 'sesenta', translation: 'шестьдесят', audioUrl: null },
      { word: 'setenta', translation: 'семьдесят', audioUrl: null },
      { word: 'ochenta', translation: 'восемьдесят', audioUrl: null },
      { word: 'noventa', translation: 'девяносто', audioUrl: null },
      { word: 'cien', translation: 'сто', audioUrl: null },
      { word: 'ciento', translation: 'сто (перед другими числами)', audioUrl: null },
      { word: 'hablar', translation: 'говорить, разговаривать', audioUrl: null },
      { word: 'llamar', translation: 'звать, звонить', audioUrl: null },
      { word: 'preguntar', translation: 'спрашивать', audioUrl: null },
      { word: 'escuchar', translation: 'слушать', audioUrl: null },
      { word: 'tomar', translation: 'брать, есть, пить', audioUrl: null },
      { word: 'leer', translation: 'читать', audioUrl: null },
      { word: 'aprender', translation: 'учить', audioUrl: null },
      { word: 'comprender', translation: 'понимать', audioUrl: null },
      { word: 'comer', translation: 'есть, кушать', audioUrl: null },
      { word: 'beber', translation: 'пить', audioUrl: null },
      { word: 'abrir', translation: 'открывать', audioUrl: null },
      { word: 'escribir', translation: 'писать', audioUrl: null },
      { word: 'vivir', translation: 'жить', audioUrl: null },
      { word: 'recibir', translation: 'получать', audioUrl: null },
      { word: 'agua', translation: 'вода (f)', audioUrl: null },
      { word: 'bocadillo', translation: 'бутерброд (m)', audioUrl: null },
      { word: 'metro', translation: 'метро (m)', audioUrl: null },
      { word: 'tranvía', translation: 'трамвай (m)', audioUrl: null },
      { word: 'tren', translation: 'поезд (m)', audioUrl: null },
      { word: 'taxi', translation: 'такси (m)', audioUrl: null },
      { word: 'medicinas', translation: 'лекарства (f pl)', audioUrl: null },
      { word: 'sol', translation: 'солнце (m)', audioUrl: null },
      { word: 'libro', translation: 'книга (m)', audioUrl: null },
      { word: 'escuela', translation: 'школа (f)', audioUrl: null },
      { word: 'restaurante', translation: 'ресторан (m)', audioUrl: null },
      { word: 'fiesta', translation: 'вечеринка (f)', audioUrl: null },
      { word: 'amigo', translation: 'друг (m)', audioUrl: null },
      { word: 'amiga', translation: 'подруга (f)', audioUrl: null },
      { word: 'regalo', translation: 'подарок (m)', audioUrl: null },
      { word: 'profesor', translation: 'учитель, преподаватель (m)', audioUrl: null },
      { word: 'profesora', translation: 'учительница, преподавательница (f)', audioUrl: null },
      { word: 'playa', translation: 'пляж (m)', audioUrl: null },
      { word: 'museo', translation: 'музей (m)', audioUrl: null },
      { word: 'hermano', translation: 'брат (m)', audioUrl: null },
      { word: 'hermana', translation: 'сестра (f)', audioUrl: null },
      { word: 'pintor', translation: 'художник (m)', audioUrl: null },
      { word: 'estudiante', translation: 'студент, студентка (m/f)', audioUrl: null },
      { word: 'hotel', translation: 'отель (m)', audioUrl: null },
      { word: 'lápiz', translation: 'карандаш (m)', audioUrl: null },
      { word: 'mesa', translation: 'стол (f)', audioUrl: null },
      { word: 'coche', translation: 'машина (m)', audioUrl: null },
      { word: 'cine', translation: 'кино (m)', audioUrl: null },
      { word: 'voz baja', translation: 'тихо, шепотом', audioUrl: null },
      { word: 'precio', translation: 'цена (m)', audioUrl: null },
      { word: 'radio', translation: 'радио (f)', audioUrl: null },
      { word: 'señora', translation: 'сеньора, госпожа (f)', audioUrl: null },
      { word: 'señor', translation: 'сеньор, господин (m)', audioUrl: null },
      { word: 'en serio', translation: 'всерьез', audioUrl: null },
      { word: 'puerta', translation: 'дверь (f)', audioUrl: null },
      { word: 'cliente', translation: 'клиент (m/f)', audioUrl: null },
      { word: 'artículo', translation: 'статья (m)', audioUrl: null },
      { word: 'país', translation: 'страна (m)', audioUrl: null },
      { word: 'pan', translation: 'хлеб (m)', audioUrl: null },
      { word: 'casa', translation: 'дом (f)', audioUrl: null },
      { word: 'noche', translation: 'ночь (f)', audioUrl: null },
      { word: 'ir', translation: 'идти, ехать', audioUrl: null },
      { word: 'venir', translation: 'приходить', audioUrl: null },
      { word: 'salir', translation: 'выходить', audioUrl: null },
      { word: 'viajar', translation: 'путешествовать', audioUrl: null },
      { word: 'dar', translation: 'давать', audioUrl: null },
      { word: 'ver', translation: 'видеть', audioUrl: null },
      { word: 'estar', translation: 'находиться, быть (временное состояние)', audioUrl: null },
      { word: 'problema', translation: 'проблема (m)', audioUrl: null },
      { word: 'teléfono', translation: 'телефон (m)', audioUrl: null },
      { word: 'tiempo', translation: 'время (m), погода', audioUrl: null },
      { word: 'palabra', translation: 'слово (f)', audioUrl: null },
      { word: 'mensaje', translation: 'сообщение (m)', audioUrl: null },
      { word: 'carta', translation: 'письмо (f)', audioUrl: null },
      { word: 'periódico', translation: 'газета (m)', audioUrl: null },
      { word: 'zumo', translation: 'сок (m)', audioUrl: null },
      { word: 'naranja', translation: 'апельсин (f)', audioUrl: null },
      { word: 'fruta', translation: 'фрукт (f)', audioUrl: null },
      { word: 'café', translation: 'кофе (m)', audioUrl: null },
      { word: 'vender', translation: 'продавать', audioUrl: null },
      { word: 'responder', translation: 'отвечать', audioUrl: null },
      { word: 'correr', translation: 'бегать', audioUrl: null },
      { word: 'subir', translation: 'подниматься', audioUrl: null },
      { word: 'partir', translation: 'уезжать', audioUrl: null }
    ],
    readingText: {
      title: 'Diálogos en la ciudad',
      content: `**Diálogo en la ciudad**

Juan: ¡Hola! Yo soy Juan. ¿Y tú?
Ana: Me llamo Ana. Soy joven y alegre.
Juan: ¡Mucho gusto! La ciudad es grande.
Ana: Sí, es grande y bonita. Ahora estoy en la calle.
Juan: Yo estoy en casa.
Ana: ¡Adiós!
Juan: ¡Adiós!

**Diálogo sobre ubicación y origen**

Felipe: Buenos días, señora. ¿Cómo se llama usted?
Doña Clara: Me llamo Doña Clara. Soy rica.
Felipe: Encantado. Yo soy Felipe, soy estudiante. Soy de Rusia.
Doña Clara: Qué interesante... ¿De dónde es su hermano?
Felipe: Mi hermano es de China. Él es ingeniero y está casado.
Doña Clara: Yo estoy en casa. ¿Dónde está el museo?
Felipe: Vengo del museo. El museo es antiguo.

**Diálogo sobre estados y rutinas**

Pedro: ¡Hola! ¿Cómo estás?
Marta: Estoy regular. Mi mano está fría y tengo veinticinco años.
Pedro: ¡Qué lástima! ¿Estás enferma?
Marta: No, no estoy enferma, estoy triste. Soy soltera. ¿Y tú?
Pedro: Yo soy policía. Soy alto y delgado. Ahora voy a la escuela con mi amigo Carlos.
Marta: ¿Es fácil la escuela?
Pedro: Es difícil, pero es interesante. Estamos contentos.
Marta: Mi hermano está en la playa. El sol es caliente.`,
      translation: 'Диалог в городе\n\nХуан: Привет! Я Хуан. А ты?\nАна: Меня зовут Ана. Я молодая и веселая.\nХуан: Очень приятно! Город большой.\nАна: Да, он большой и красивый. Сейчас я на улице.\nХуан: Я дома.\nАна: Пока!\nХуан: Пока!\n\nДиалог о местонахождении и происхождении\n\nФелипе: Доброе утро, сеньора. Как вас зовут?\nДонья Клара: Меня зовут Донья Клара. Я богата.\nФелипе: Рад познакомиться. Я Фелипе, я студент. Я из России.\nДонья Клара: Как интересно... Откуда ваш брат?\nФелипе: Мой брат из Китая. Он инженер и женат.\nДонья Клара: Я дома. Где находится музей?\nФелипе: Я иду из музея. Музей старинный.\n\nДиалог о состояниях и распорядке\n\nПедро: Привет! Как дела?\nМарта: Так себе. Моя рука холодная, и мне двадцать пять лет.\nПедро: Как жаль! Ты больна?\nМарта: Нет, я не больна, я грустная. Я не замужем. А ты?\nПедро: Я полицейский. Я высокий и стройный. Сейчас я иду в школу с моим другом Карлосом.\nМарта: Легко ли в школе?\nПедро: Сложно, но интересно. Мы довольны.\nМарта: Мой брат на пляже. Солнце горячее.',
      audioUrl: '/audio/lesson-2-1-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: '¡Hola! Yo soy Juan. ¿Y tú?' },
        { start: 5, end: 10, text: 'Me llamo Ana. Soy joven y alegre.' },
        { start: 10, end: 15, text: 'Buenos días, señora. ¿Cómo se llama usted?' },
        { start: 15, end: 20, text: '¡Hola! ¿Cómo estás?' }
      ]
    },
    exercises: ['ex-2-1-1', 'ex-2-1-2', 'ex-2-1-3', 'ex-2-1-4', 'ex-2-1-5', 'ex-2-1-6-conj', 'ex-2-1-7-err', 'ex-2-2-1', 'ex-2-2-2', 'ex-2-2-4', 'ex-2-1-8-transform', 'ex-2-1-9-verbforms']
  },

  // МОДУЛЬ 2: Настоящее время
  'lesson-2-1': {
    id: 'lesson-2-1',
    title: 'Урок 1: Глаголы IR, TENER, OÍR',
    moduleId: 'module-2',
    grammar: {
      title: 'Неправильные глаголы IR, TENER, OÍR',
      intro: `В этом уроке мы изучим:
- Глагол IR (идти, ехать) и его спряжение
- Употребление глагола IR с предлогами
- Конструкцию ir + a + инфинитив для выражения будущего
- Глагол TENER (иметь) и его спряжение
- Глагол OÍR (слышать) и его спряжение`,
      sections: [
        {
          id: 'verb-ir',
          title: 'Глагол IR (идти, ехать)',
          collapsible: true,
          defaultOpen: false,
          content: `| Лицо | Форма | Русский |
|------|-------|---------|
| yo | voy | Я иду |
| tú | vas | Ты идешь |
| él/ella/usted | va | Он/она идет |
| nosotros(-as) | vamos | Мы идем |
| vosotros(-as) | vais | Вы идете |
| ellos/ellas/ustedes | van | Они идут |`
        },
        {
          id: 'ir-a',
          title: 'Глагол ir с предлогом а обозначает направление движения вперед от говорящего',
          collapsible: true,
          defaultOpen: false,
          content: `Определенный артикль мужского рода единственного числа **el** сливается с предлогом **а**, образуя форму **al**:

- ir a la oficina — идти в офис, на работу
- ir al bar — идти в бар
- ir al teatro — идти в театр
- ir al café — идти в кафе
- ir a casa — идти домой
- ir a Rusia — ехать в Россию

**Примеры:**
- Vamos de vacaciones a España en avión. — Мы летим в отпуск в Испанию.
- Yo voy a la oficina a pie y Sergio va en taxi. — Я хожу на работу пешком, а Сергей ездит на такси.`
        },
        {
          id: 'ir-en',
          title: 'Глагол ir с предлогом en указывает на способ передвижения',
          collapsible: true,
          defaultOpen: false,
          content: `- ir en coche — ехать на машине
- ir en taxi — ехать на такси
- ir en autobús — ехать на автобусе
- ir en tren — ехать на поезде
- ir en avión — лететь на самолете
- ir en barco — плыть на корабле
- ir a pie / ir andando — идти пешком`
        },
        {
          id: 'ir-de',
          title: 'Глагол ir с предлогом de указывает на цель передвижения',
          collapsible: true,
          defaultOpen: false,
          content: `- ir de compras — идти за покупками
- ir de vacaciones — ехать в отпуск, на каникулы`
        },
        {
          id: 'ir-infinitive',
          title: 'Конструкция ir + a + инфинитив',
          collapsible: true,
          defaultOpen: false,
          content: `Используется для:
- выражения намерения что-то сделать
- выражения ближайшего будущего времени

**Примеры:**
- Voy a descansar un poco. — Я собираюсь немного отдохнуть.
- ¿Qué vas a tomar, té o café? — Что ты будешь пить, чай или кофе?`
        },
        {
          id: 'verb-tener',
          title: 'Глагол TENER (иметь)',
          collapsible: true,
          defaultOpen: false,
          content: `| Лицо | Форма | Русский |
|------|-------|---------|
| yo | tengo | Я имею |
| tú | tienes | Ты имеешь |
| él/ella/usted | tiene | Он/она имеет |
| nosotros(-as) | tenemos | Мы имеем |
| vosotros(-as) | tenéis | Вы имеете |
| ellos/ellas/ustedes | tienen | Они имеют |

**Выражения:** tener hambre, tener sed, tener años, tener razón`
        },
        {
          id: 'tener-meanings',
          title: 'РАЗНЫЕ ЗНАЧЕНИЯ ГЛАГОЛА TENER',
          collapsible: true,
          defaultOpen: false,
          content: `## РАЗНЫЕ ЗНАЧЕНИЯ ГЛАГОЛА TENER

### Выражения с глаголом TENER

| Испанский | Русский |
|-----------|---------|
| tener ... años | иметь ... лет |
| tener familia (f) | иметь семью |
| tener padre / madre | иметь отца / мать |
| tener dinero (m) | иметь деньги |
| tener calor (m) | страдать от жары |
| tener frío (m) | мерзнуть |
| tener hambre (f) | быть голодным / хотеть есть |
| tener sed (f) | испытывать жажду / хотеть пить |
| tener sueño (m) | хотеть спать |
| tener miedo (m) | бояться (испытывать страх) |
| tener razón (f) | быть правым |
| tener suerte (f) | быть удачливым |
| tener prisa (f) | торопиться, спешить |
| tener tiempo (m) | иметь время |

### Конструкция tener que + инфинитив

Конструкция **tener que + инфинитив** имеет значение **быть должным сделать что-либо**.

### Примеры:

- Tengo diez años. — Мне десять лет.
- Él no tiene padres. — У него нет родителей.
- ¿Tienes sueño? — Ты хочешь спать?
- Ella tiene razón. — Она права.
- No tenemos tiempo. — У нас нет времени.
- Tenéis prisa. — Вы торопитесь.
- Usted tiene suerte. — Вам повезло.
- Ellos no tienen miedo. — Они не боятся.
- Tengo calor. — Мне жарко.
- Tienes que tomar la medicina. — Ты должен принять лекарство.`
        },
        {
          id: 'verb-oir',
          title: 'Глагол OÍR (слышать)',
          collapsible: true,
          defaultOpen: false,
          content: `| Лицо | Форма | Русский |
|------|-------|---------|
| yo | oigo | Я слышу |
| tú | oyes | Ты слышишь |
| él/ella/usted | oye | Он/она слышит |
| nosotros(-as) | oímos | Мы слышим |
| vosotros(-as) | oís | Вы слышите |
| ellos/ellas/ustedes | oyen | Они слышат |`
        },
        {
          id: 'tener-meanings',
          title: 'Разные значения глагола TENER',
          collapsible: true,
          defaultOpen: false,
          content: `## Разные значения глагола TENER

Глагол TENER используется во многих устойчивых выражениях для обозначения различных состояний:

### Выражения с TENER:

- **tener ... años** — иметь ... лет
- **tener familia** — иметь семью
- **tener padre / madre** — иметь отца / мать
- **tener dinero** — иметь деньги
- **tener calor** — страдать от жары
- **tener frío** — мерзнуть
- **tener hambre** — быть голодным / хотеть есть
- **tener sed** — испытывать жажду / хотеть пить
- **tener sueño** — хотеть спать
- **tener miedo** — бояться (испытывать страх)
- **tener razón** — быть правым
- **tener suerte** — быть удачливым
- **tener prisa** — торопиться, спешить
- **tener tiempo** — иметь время

### Конструкция tener que + инфинитив

Конструкция **tener que + инфинитив** имеет значение **быть должным сделать что-либо**.

**Примеры:**

| Испанский | Русский |
|-----------|---------|
| Tengo veintiún años. | Мне 21 год. |
| Él no tiene familia. | У него нет семьи. |
| ¿Tienes sueño? | Хочешь спать? |
| Ella tiene razón. | Она права. |
| No tenemos tiempo. | У нас нет времени. |
| Tenéis prisa. | Вы спешите. |
| Usted tiene suerte. | Вам везет. |
| Ellos no tienen miedo. | Они не боятся. |
| Tengo calor. | Мне жарко. |
| Tengo que ir al médico. | Я должен пойти к врачу. |
| Tienes que estudiar más. | Ты должен больше заниматься. |
| Él tiene que trabajar hoy. | Он должен работать сегодня. |
| Tenemos que comprar pan. | Мы должны купить хлеб. |
| Tenéis que escuchar al profesor. | Вы должны слушать преподавателя. |
| Ellos tienen que venir mañana. | Они должны прийти завтра. |`
        }
      ]
    },
    vocabulary: [
      { word: 'ir', translation: 'идти, ехать', audioUrl: null },
      { word: 'hacer', translation: 'делать', audioUrl: null },
      { word: 'estar', translation: 'быть, находиться', audioUrl: null },
      { word: 'venir', translation: 'приходить', audioUrl: null },
      { word: 'tener', translation: 'иметь', audioUrl: null },
      { word: 'tener ... años', translation: 'иметь ... лет', audioUrl: null },
      { word: 'tener familia', translation: 'иметь семью', audioUrl: null },
      { word: 'tener padre / madre', translation: 'иметь отца / мать', audioUrl: null },
      { word: 'tener dinero', translation: 'иметь деньги', audioUrl: null },
      { word: 'tener calor', translation: 'страдать от жары', audioUrl: null },
      { word: 'tener frío', translation: 'мерзнуть', audioUrl: null },
      { word: 'tener hambre', translation: 'быть голодным / хотеть есть', audioUrl: null },
      { word: 'tener sed', translation: 'испытывать жажду / хотеть пить', audioUrl: null },
      { word: 'tener sueño', translation: 'хотеть спать', audioUrl: null },
      { word: 'tener miedo', translation: 'бояться (испытывать страх)', audioUrl: null },
      { word: 'tener razón', translation: 'быть правым', audioUrl: null },
      { word: 'tener suerte', translation: 'быть удачливым', audioUrl: null },
      { word: 'tener prisa', translation: 'торопиться, спешить', audioUrl: null },
      { word: 'tener tiempo', translation: 'иметь время', audioUrl: null },
      { word: 'tener que + инфинитив', translation: 'быть должным сделать что-либо', audioUrl: null },
      { word: 'poder', translation: 'мочь', audioUrl: null },
      { word: 'querer', translation: 'хотеть', audioUrl: null },
      { word: 'saber', translation: 'знать', audioUrl: null },
      { word: 'oír', translation: 'слышать', audioUrl: null },
      { word: 'bar', translation: 'бар', audioUrl: null },
      { word: 'teatro', translation: 'театр', audioUrl: null },
      { word: 'café', translation: 'кафе', audioUrl: null },
      { word: 'casa', translation: 'дом', audioUrl: null },
      { word: 'coche', translation: 'машина', audioUrl: null },
      { word: 'taxi', translation: 'такси', audioUrl: null },
      { word: 'autobús', translation: 'автобус', audioUrl: null },
      { word: 'tren', translation: 'поезд', audioUrl: null },
      { word: 'avión', translation: 'самолет', audioUrl: null },
      { word: 'barco', translation: 'корабль', audioUrl: null },
      { word: 'a pie', translation: 'пешком', audioUrl: null },
      { word: 'compras', translation: 'покупки', audioUrl: null },
      { word: 'vacaciones', translation: 'отпуск, каникулы', audioUrl: null },
      { word: 'descansar', translation: 'отдыхать', audioUrl: null },
      { word: 'té', translation: 'чай', audioUrl: null },
      { word: 'familia', translation: 'семья (f)', audioUrl: null },
      { word: 'padre', translation: 'отец (m)', audioUrl: null },
      { word: 'madre', translation: 'мать (f)', audioUrl: null },
      { word: 'dinero', translation: 'деньги (m)', audioUrl: null },
      { word: 'calor', translation: 'жара (m)', audioUrl: null },
      { word: 'frío', translation: 'холод (m)', audioUrl: null },
      { word: 'hambre', translation: 'голод (f)', audioUrl: null },
      { word: 'sed', translation: 'жажда (f)', audioUrl: null },
      { word: 'sueño', translation: 'сон (m)', audioUrl: null },
      { word: 'miedo', translation: 'страх (m)', audioUrl: null },
      { word: 'razón', translation: 'правота (f)', audioUrl: null },
      { word: 'suerte', translation: 'удача (f)', audioUrl: null },
      { word: 'prisa', translation: 'спешка (f)', audioUrl: null },
      { word: 'tiempo', translation: 'время (m)', audioUrl: null },
      { word: 'medicina', translation: 'лекарство (f)', audioUrl: null },
      { word: 'tener ... años', translation: 'иметь ... лет', audioUrl: null },
      { word: 'tener hambre', translation: 'быть голодным', audioUrl: null },
      { word: 'tener sed', translation: 'хотеть пить', audioUrl: null },
      { word: 'tener sueño', translation: 'хотеть спать', audioUrl: null },
      { word: 'tener miedo', translation: 'бояться', audioUrl: null },
      { word: 'tener razón', translation: 'быть правым', audioUrl: null },
      { word: 'tener suerte', translation: 'быть удачливым', audioUrl: null },
      { word: 'tener prisa', translation: 'торопиться', audioUrl: null },
      { word: 'tener calor', translation: 'страдать от жары', audioUrl: null },
      { word: 'tener frío', translation: 'мерзнуть', audioUrl: null },
      { word: 'tener que', translation: 'быть должным', audioUrl: null }
    ],
    readingText: {
      title: 'Mis planes',
      content: `Me llamo Carmen. Soy médica de España, de Valencia. Tengo treinta años. Vivo en Madrid con mi hermana. Ella es profesora de italiano.

Hoy es viernes y tengo planes para el fin de semana. Voy a ir de compras al centro. Quiero comprar un libro nuevo y tomar café en mi bar favorito. Voy a ir en autobús porque está lejos de casa.

Mi hermana va a ir al teatro con sus amigos. Van a ver una obra española. Ella va en coche. Después van a ir a un café cerca del teatro.

El sábado voy a tomar el tren a Barcelona. Tengo una amiga allí. Ella es italiana, es periodista. Vamos a ir a la playa y tomar el sol. También vamos a comer en un restaurante bueno. Me gusta mucho Barcelona.

El domingo voy a volver a Madrid. Voy a estar en casa. Quiero leer un libro y escribir mensajes a mi familia en Valencia. Por la tarde voy a ir al cine con mi hermana.

Mi hermana quiere ir de vacaciones a Italia en agosto. Yo quiero ir a Rusia en septiembre. Vamos a ir en avión. Tengo un amigo ruso en Moscú. Él es ingeniero. Él aprende español. Hablamos por teléfono cada semana.

Los fines de semana son buenos. No voy a la oficina. Puedo descansar y hacer cosas que me gustan.`,
      translation: 'Мои планы\n\nМеня зовут Кармен. Я врач из Испании, из Валенсии. Мне тридцать лет. Я живу в Мадриде с моей сестрой. Она преподаватель итальянского.\n\nСегодня пятница, и у меня есть планы на выходные. Я собираюсь пойти за покупками в центр. Хочу купить новую книгу и выпить кофе в моем любимом баре. Я поеду на автобусе, потому что это далеко от дома.\n\nМоя сестра собирается пойти в театр с друзьями. Они собираются посмотреть испанскую пьесу. Она поедет на машине. Потом они пойдут в кафе рядом с театром.\n\nВ субботу я собираюсь сесть на поезд до Барселоны. У меня там есть подруга. Она итальянка, журналистка. Мы пойдем на пляж и будем загорать. Также мы поедим в хорошем ресторане. Мне очень нравится Барселона.\n\nВ воскресенье я вернусь в Мадрид. Я буду дома. Хочу почитать книгу и написать сообщения моей семье в Валенсии. Днем я пойду в кино с сестрой.\n\nМоя сестра хочет поехать в отпуск в Италию в августе. Я хочу поехать в Россию в сентябре. Мы полетим на самолете. У меня есть друг-россиянин в Москве. Он инженер. Он изучает испанский. Мы говорим по телефону каждую неделю.\n\nВыходные хорошие. Я не хожу в офис. Могу отдохнуть и делать вещи, которые мне нравятся.',
      audioUrl: '/audio/lesson-2-3-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Me llamo Carmen. Soy médica de España.' },
        { start: 5, end: 10, text: 'Hoy es viernes y tengo planes para el fin de semana.' },
        { start: 10, end: 15, text: 'Voy a ir de compras al centro.' },
        { start: 15, end: 20, text: 'El sábado voy a tomar el tren a Barcelona.' },
        { start: 20, end: 25, text: 'Los fines de semana puedo descansar.' }
      ]
    },
    exercises: [
      'ex-2-2-ir-conjugation',
      'ex-2-2-tener-conjugation-new',
      'ex-2-2-oir-conjugation-new',
      'ex-2-2-tener-expressions',
      'ex-2-2-ir-infinitive-new',
      'ex-2-2-ir-prepositions-new',
      'ex-2-2-tener-que',
      'ex-2-2-mixed-verbs',
      'ex-2-2-tener-fillblank',
      'ex-2-2-vocab-expressions',
      'ex-2-2-translation-rus-esp'
    ]
  },
  'lesson-2-2': {
    id: 'lesson-2-2',
    title: 'Урок 2 Указательные местоимения и наречия. Притяжательные местоимения . Черты характера. Описание внешности',
    moduleId: 'module-2',
    grammar: {
      title: 'Указательные местоимения и наречия. Притяжательные местоимения',
      intro: `# Грамматика урока

В этом уроке мы изучим:
- Указательные местоимения для обозначения близости и дальности
- Самостоятельное употребление указательных местоимений
- Форма среднего рода (нейтральные формы)
- Указательные наречия места
- Притяжательные местоимения`,
      sections: [
        {
          id: 'demonstrativos',
          title: 'Указательные местоимения',
          collapsible: true,
          defaultOpen: false,
          content: `
## Указательные местоимения (Demonstrativos)

Указательные местоимения в испанском языке используются для обозначения предметов и людей в зависимости от их расстояния от говорящего.

### Таблица форм по расстоянию:

| Расстояние | Мужской род ед.ч | Женский род ед.ч | Мужской род мн.ч | Женский род мн.ч | Значение |
|------------|------------------|------------------|------------------|------------------|----------|
| **Близко** (aquí) | este | esta | estos | estas | этот, эта, эти |
| **На расстоянии** (ahí) | ese | esa | esos | esas | тот, та, те |
| **Далеко** (allí) | aquel | aquella | aquellos | aquellas | вон тот, вон та, вон те |

### Употребление перед существительными:

**ESTE (этот) - близко к говорящему:**
- **Este chico** es alto. – Этот мальчик высокий.
- **Esta chica** es guapa. – Эта девочка красивая.
- **Estos ojos** son azules. – Эти глаза голубые.
- **Estas cejas** son pobladas. – Эти брови густые.

**ESE (тот) - на некотором расстоянии:**
- **Ese hombre** es bajo. – Тот мужчина низкий.
- **Esa mujer** es delgada. – Та женщина стройная.
- **Esos niños** son alegres. – Те дети веселые.
- **Esas gafas** son nuevas. – Те очки новые.

**AQUEL (вон тот) - далеко от говорящего:**
- **Aquel señor** es viejo. – Вон тот господин старый.
- **Aquella señora** tiene pelo cano. – Вон та дама имеет седые волосы.
- **Aquellos hermanos** son trabajadores. – Вон те братья трудолюбивые.
- **Aquellas estudiantes** son inteligentes. – Вон те студентки умные.

### Примеры с описанием внешности:
- **Este pelo** es rizado y negro. – Эти волосы вьющиеся и черные.
- **Esa nariz** es recta. – Тот нос прямой.
- **Aquellos labios** son carnosos. – Вон те губы полные.
- **Esta barba** es larga. – Эта борода длинная.
`
        },
        {
          id: 'adverbios-lugar',
          title: 'Наречия обстоятельства места (Adverbios de lugar)',
          collapsible: true,
          defaultOpen: false,
          content: `
## Наречия обстоятельства места (Adverbios de lugar)

Указательные наречия места показывают, **где** находится человек или предмет. Они часто употребляются вместе с указательными местоимениями.

### Основные наречия:

| Наречие | Расстояние | Значение | Пример |
|---------|------------|----------|--------|
| **aquí** | близко к говорящему | здесь, тут | **Aquí** está mi amigo. – Здесь мой друг. |
| **acá** | близко (менее точно) | сюда, здесь | Ven **acá**. – Иди сюда. |
| **ahí** | на расстоянии | там (рядом с собеседником) | **Ahí** está tu hermana. – Там твоя сестра. |
| **allí** | далеко | там | **Allí** vive mi profesor. – Там живет мой учитель. |
| **allá** | далеко (менее точно) | туда, там | Vamos **allá**. – Пойдем туда. |

### Соответствие наречий и указательных местоимений:

| Наречие | Указательное местоимение | Пример |
|---------|-------------------------|--------|
| aquí, acá | este, esta, estos, estas | **Este chico** está **aquí**. – Этот мальчик здесь. |
| ahí | ese, esa, esos, esas | **Esa mujer** está **ahí**. – Та женщина там. |
| allí, allá | aquel, aquella, aquellos, aquellas | **Aquel hombre** está **allí**. – Вон тот мужчина там. |

### Примеры с описанием людей:

**AQUÍ (здесь) + ESTE (этот):**
- Ven **aquí**, mira **esta** foto. – Иди сюда, посмотри на эту фотографию.
- **Aquí** tenemos a **este** niño alegre. – Здесь у нас этот веселый ребенок.
- **Este** amigo **aquí** es muy inteligente. – Этот друг здесь очень умный.

**AHÍ (там) + ESE (тот):**
- **Ahí** está **ese** chico guapo. – Там тот красивый мальчик.
- Mira **ahí**, **esa** chica tiene ojos verdes. – Посмотри там, та девочка имеет зеленые глаза.
- **Ese** señor **ahí** es mi padre. – Тот господин там - мой отец.

**ALLÍ (там, далеко) + AQUEL (вон тот):**
- **Allí**, **aquel** hombre tiene barba. – Там, вон тот мужчина с бородой.
- Mira **allí**, **aquella** mujer es muy alta. – Посмотри туда, вон та женщина очень высокая.
- **Aquellos** estudiantes **allí** son trabajadores. – Вон те студенты там трудолюбивые.

### Различие между aquí/acá и allí/allá:

- **aquí / allí** – более точное указание на место
- **acá / allá** – менее точное, часто с глаголами движения

Ejemplos:
- Mi hermano está **aquí**. – Мой брат здесь.
- Tu amiga vive **allí**. – Твоя подруга живет там.
- Ven **acá**, quiero ver tus ojos. – Иди сюда, я хочу увидеть твои глаза.
- Vamos **allá**, mi familia está **allá**. – Пойдем туда, моя семья там.
`
        },
        {
          id: 'demonstrativos-standalone',
          title: 'Указательные местоимения, употребляемые самостоятельно (Pronombres demostrativos)',
          collapsible: true,
          defaultOpen: false,
          content: `
## Указательные местоимения, употребляемые самостоятельно

Когда указательные местоимения употребляются **без существительного** (самостоятельно), они заменяют уже упомянутое слово.

### Формы:

| Без существительного | Мужской род | Женский род |
|----------------------|-------------|-------------|
| **Близко** | éste, éstos | ésta, éstas |
| **На расстоянии** | ése, ésos | ésa, ésas |
| **Далеко** | aquél, aquéllos | aquélla, aquéllas |

**Важно:** В современном испанском акцент (ударение) не обязателен, но помогает избежать путаницы.

### Примеры с описанием людей:

**1. Сравнение внешности:**
- ¿Qué chico es más alto: **este** o **ese**? – Какой мальчик выше: этот или тот?
- **Este** es rubio, pero **ese** es moreno. – Этот блондин, но тот брюнет.
- Mi hermano es **este**, no **aquel**. – Мой брат - этот, не вон тот.

**2. Описание характера:**
- **Este** es alegre, **ese** es triste. – Этот веселый, тот грустный.
- **Esta** es trabajadora, **aquella** es perezosa. – Эта трудолюбивая, вон та ленивая.
- **Estos** son inteligentes, **esos** son tontos. – Эти умные, те глупые.

**3. Описание внешности:**
- **Esta** tiene ojos azules, **esa** tiene ojos pardos. – У этой голубые глаза, у той карие глаза.
- **Este** es alto y delgado, **aquel** es bajo y gordo. – Этот высокий и стройный, вон тот низкий и толстый.
- **Estos** tienen pelo corto, **aquellos** tienen pelo largo. – У этих короткие волосы, у вон тех длинные волосы.

**4. Указание на людей:**
- **Este** es mi amigo. – Это мой друг.
- **Esa** es mi hermana. – Та - моя сестра.
- **Aquellos** son mis profesores. – Вон те - мои учителя.

**5. Вопросы:**
- ¿**Este** es tu padre? – Этот твой отец?
- ¿**Esa** es tu madre? – Та твоя мать?
- ¿**Aquellos** son tus hermanos? – Вон те твои братья?
`
        },
        {
          id: 'demonstrativos-neutro',
          title: 'Местоимения среднего рода (Formas neutras)',
          collapsible: true,
          defaultOpen: false,
          content: `
## Местоимения среднего рода (Formas neutras)

Нейтральные формы указательных местоимений используются для обозначения **абстрактных понятий, ситуаций или неопределенных вещей**. Они **никогда не имеют акцента** и **не изменяются по числам**.

### Три нейтральные формы:

| Форма | Расстояние | Значение |
|-------|------------|----------|
| **esto** | близко | это (то, что здесь) |
| **eso** | на расстоянии | то (то, что там) |
| **aquello** | далеко | то (то, что вон там) |

### Употребление:

**1. Для обозначения неизвестных вещей:**
- ¿Qué es **esto**? – Что это (такое)?
- **Eso** es interesante. – Это интересно.
- No entiendo **aquello**. – Я не понимаю то.

**2. Для обозначения ситуаций или качеств:**
- **Esto** es importante para mi familia. – Это важно для моей семьи.
- **Eso** no me gusta. – Мне это не нравится.
- **Aquello** fue terrible. – То было ужасно.

**3. Про характер и качества:**
- **Esto** es bueno – ser alegre. – Это хорошо - быть веселым.
- **Eso** de ser perezoso es malo. – Это (то, что касается) быть ленивым - плохо.
- **Aquello** era su problema – era muy tímido. – То была его проблема - он был очень застенчивым.

**4. В вопросах:**
- ¿Qué es **esto** que veo? – Что это я вижу?
- ¿Para qué sirve **eso**? – Для чего это служит?
- ¿Cómo se llama **aquello**? – Как называется то?

**5. Примеры с описанием:**
- **Esto** es mi pelo. – Это мои волосы.
- ¿Qué es **eso**? - Son mis gafas. – Что это? - Это мои очки.
- **Aquello** es una cicatriz. – То - шрам.

**Важно:** Нейтральные формы **никогда не употребляются с существительными**:
- ❌ esto hombre
- ✅ este hombre
- ✅ esto (само по себе)
`
        },
        {
          id: 'posesivos',
          title: 'Притяжательные местоимения',
          collapsible: true,
          defaultOpen: false,
          content: `
## Притяжательные местоимения

Притяжательные местоимения показывают принадлежность. В испанском языке они согласуются с **предметом обладания** (а не с владельцем) в роде и числе.

### Таблица притяжательных местоимений-прилагательных:

| Лицо | Единственное число | Множественное число | Пример | Перевод |
|------|-------------------|---------------------|---------|---------|
| **yo** | mi | mis | **Mi** hermano es alto. | Мой брат высокий. |
| **tú** | tu | tus | **Tu** hermana es guapa. | Твоя сестра красивая. |
| **él/ella/Ud.** | su | sus | **Su** padre es viejo. | Его/Её/Ваш отец старый. |
| **nosotros/-as** | nuestro/nuestra | nuestros/nuestras | **Nuestro** amigo es alegre. | Наш друг веселый. |
| **vosotros/-as** | vuestro/vuestra | vuestros/vuestras | **Vuestros** ojos son azules. | Ваши глаза голубые. |
| **ellos/ellas/Uds.** | su | sus | **Sus** hijos son inteligentes. | Их/Ваши дети умные. |

### Основные правила:

**1. Местоимения mi, tu, su** изменяются только по числам:
- **mi** amigo (мой друг) → **mis** amigos (мои друзья)
- **tu** hermana (твоя сестра) → **tus** hermanas (твои сестры)
- **su** hijo (его сын) → **sus** hijos (его дети)

**2. Местоимения nuestro, vuestro** изменяются и по родам, и по числам:
- **nuestro** padre (наш отец - м.р.)
- **nuestra** madre (наша мать - ж.р.)
- **nuestros** hermanos (наши братья - м.р., мн.ч.)
- **nuestras** hermanas (наши сестры - ж.р., мн.ч.)

### Примеры с описанием внешности:

**С частями тела:**
- **Mi** pelo es largo y rubio. – Мои волосы длинные и светлые.
- **Tus** ojos son verdes. – Твои глаза зеленые.
- **Su** nariz es chata. – Его/Её нос курносый.
- **Nuestras** cejas son pobladas. – Наши брови густые.
- **Vuestros** labios son finos. – Ваши губы тонкие.

**С характеристиками:**
- **Mi** hermano es trabajador. – Мой брат трудолюбивый.
- **Tu** amiga es alegre. – Твоя подруга веселая.
- **Su** padre es serio. – Его/Её отец серьезный.
- **Nuestra** profesora es inteligente. – Наша учительница умная.
- **Vuestro** amigo es tímido. – Ваш друг застенчивый.

**С предметами:**
- **Mis** gafas son nuevas. – Мои очки новые.
- **Tu** barba es larga. – Твоя борода длинная.
- **Sus** bigotes son negros. – Его усы черные.

### Уточнение su/sus:

Формы **su** и **sus** могут означать: его, её, Ваш/Ваша, их. Для уточнения используют:

**el / la / los / las + [существительное] + de + [местоимение]**

Примеры:
- Es **su** hermano. (Это его/её/Ваш/их брат - неясно)
- Es el hermano **de ella**. (Это её брат.)
- Es el hermano **de él**. (Это его брат.)
- Es el hermano **de usted**. (Это Ваш брат.)
`
        },
        {
          id: 'posesivos-pronombres',
          title: 'Притяжательные местоимения-существительные',
          collapsible: true,
          defaultOpen: false,
          content: `
## Притяжательные местоимения-существительные

Эти формы **заменяют существительное** и обычно используются с определенным артиклем (**el, la, los, las**).

### Таблица:

| Лицо | М.р. ед.ч / Ж.р. ед.ч | М.р. мн.ч / Ж.р. мн.ч | Перевод |
|------|----------------------|----------------------|---------|
| **yo** | el mío / la mía | los míos / las mías | мой, моя / мои |
| **tú** | el tuyo / la tuya | los tuyos / las tuyas | твой, твоя / твои |
| **él/ella/Ud.** | el suyo / la suya | los suyos / las suyas | его/её/Ваш |
| **nosotros/-as** | el nuestro / la nuestra | los nuestros / las nuestras | наш, наша / наши |
| **vosotros/-as** | el vuestro / la vuestra | los vuestros / las vuestras | ваш, ваша / ваши |
| **ellos/ellas/Uds.** | el suyo / la suya | los suyos / las suyas | их/Ваш |

### Отличие от притяжательных местоимений-прилагательных:

| Тип | С артиклем | Позиция | Пример |
|-----|-----------|---------|---------|
| **Прилагательное** | ❌ Без артикля | Перед существительным | **Mi** hermano es alto. |
| **Существительное** | ✅ С артиклем | Вместо существительного | **El mío** es alto. |

### Примеры использования:

**1. Сравнение:**
- Mi hermano es rubio. ¿Y **el tuyo**?
  - (Мой брат блондин. А твой?)
- Tu amiga es alegre, pero **la mía** es triste.
  - (Твоя подруга веселая, но моя грустная.)

**2. Множественное число:**
- Mis ojos son azules, pero **los suyos** son pardos.
  - (Мои глаза голубые, но его/её (глаза) карие.)
- Nuestros hijos son pequeños, pero **los vuestros** son altos.
  - (Наши дети маленькие, но ваши (дети) высокие.)

**3. После глагола SER (без артикля):**
- Esta familia es **mía**. (Эта семья моя.)
- Este amigo es **tuyo**. (Этот друг твой.)
- Estos hermanos son **suyos**. (Эти братья его/её/Ваши/их.)
- ¿Estas gafas son **tuyas**? (Эти очки твои?)

**4. Примеры с описанием:**
- Mi pelo es largo, **el tuyo** es corto.
  - (Мои волосы длинные, твои короткие.)
- Tus ojos son verdes, **los míos** son azules.
  - (Твои глаза зеленые, мои голубые.)
- Su nariz es recta, **la nuestra** es chata.
  - (Его/Её нос прямой, наш курносый.)
- Nuestro padre es alto, **el vuestro** es bajo.
  - (Наш отец высокий, ваш низкий.)
`
        },
        {
          id: 'posesivos-adjetivos',
          title: 'Притяжательные местоимения-прилагательные (Adjetivos posesivos)',
          collapsible: true,
          defaultOpen: false,
          content: `
## Притяжательные местоимения-прилагательные (Adjetivos posesivos)

В испанском языке притяжательные местоимения делятся на местоимения-прилагательные (которые ставятся перед существительным) и местоимения-существительные (которые заменяют существительное и обычно используются с артиклем).

Эти формы всегда предшествуют существительному и согласуются с ним в числе. Формы **nuestro** и **vuestro** также согласуются в роде.

### Таблица притяжательных местоимений-прилагательных:

| Личное местоимение | Форма (Единственное число) | Форма (Множественное число) | Пример использования | Перевод |
|-------------------|---------------------------|----------------------------|---------------------|---------|
| **Yo** (я) | mi | mis | Mi familia es grande. | Моя семья большая. |
| **Tú** (ты) | tu | tus | ¿Dónde están tus hermanos? | Где твои братья? |
| **Él/Ella/Ud.** (он/она/Вы) | su | sus | Su padre es médico. | Его/Её/Ваш отец врач. |
| **Nosotros/-as** (мы) | nuestro / nuestra | nuestros / nuestras | Nuestra madre trabaja aquí. | Наша мама работает здесь. |
| **Vosotros/-as** (вы) | vuestro / vuestra | vuestros / vuestras | Vuestros abuelos son amables. | Ваши дедушка и бабушка добрые. |
| **Ellos/Ellas/Uds.** (они/Вы) | su | sus | Sus hijos estudian español. | Их/Ваши дети изучают испанский. |

### Основные правила:

**1. Местоимения mi, tu, su** изменяются только по числам:
- **mi** hijo (мой сын) → **mis** hijos (мои дети)
- **tu** hermana (твоя сестра) → **tus** hermanas (твои сестры)
- **su** primo (его двоюродный брат) → **sus** primos (его двоюродные братья)

**2. Местоимения nuestro, vuestro** изменяются и по родам, и по числам:
- **nuestro** padre (наш отец - м.р.)
- **nuestra** madre (наша мать - ж.р.)
- **nuestros** padres (наши родители - м.р., мн.ч.)
- **nuestras** abuelas (наши бабушки - ж.р., мн.ч.)

**3. Притяжательные местоимения-прилагательные всегда стоят ПЕРЕД существительным:**
- mi familia (моя семья)
- tu esposo (твой супруг)
- nuestra nieta (наша внучка)
`
        },
        {
          id: 'posesivos-adjetivos-peculiaridades',
          title: 'Особенности употребления притяжательных местоимений-прилагательных',
          collapsible: true,
          defaultOpen: false,
          content: `
## Особенности употребления притяжательных местоимений-прилагательных

### А. Согласование по роду и числу:

Притяжательные местоимения согласуются с **предметом обладания**, а не с обладателем:

**Примеры:**
- **Mi** hermano (Мой брат - единственное число)
- **Mis** hermanos (Мои братья - множественное число)
- **Nuestra** familia (Наша семья - женский род, единственное число)
- **Nuestros** parientes (Наши родственники - мужской род, множественное число)

**Важно:** В испанском языке род притяжательного местоимения определяется родом **существительного** (предмета), а не владельца:
- Pedro habla de **su** madre. (Педро говорит о своей матери - "madre" женского рода, но "su" не имеет формы рода)
- María habla de **su** padre. (Мария говорит о своем отце - "padre" мужского рода, но "su" также не изменяется)
- Pedro habla de **sus** abuelos. (Педро говорит о своих дедушках - множественное число)

### Б. Уточнение su/sus (Формы 3-го лица):

Формы **su** и **sus** могут означать:
- его (de él)
- её (de ella)
- Ваш/Ваша (de usted)
- их (de ellos/ellas)
- Ваши (de ustedes)

Чтобы избежать двусмысленности, вместо **su/sus** часто используют конструкцию:

**el / la / los / las + [существительное] + de + [личное местоимение]**

**Примеры уточнения:**

**Двусмысленное:**
- Es **su** hijo. (Это его/ее/Ваш/их сын - неясно, чей именно)

**Уточнение:**
- Es el hijo **de ella**. (Это её сын.)
- Es el hijo **de él**. (Это его сын.)
- Es el hijo **de usted**. (Это Ваш сын.)
- Es el hijo **de ellos**. (Это их сын.)

**Другие примеры:**
- Son los padres **de ustedes**. (Это Ваши родители - уважительная форма мн.ч.)
- Es la esposa **de él**. (Это его жена.)
- Son los nietos **de ellas**. (Это их внуки - говорим о женщинах.)

### В. Отсутствие артикля:

В испанском языке притяжательные местоимения-прилагательные **не употребляются с артиклем**:

✅ **mi** familia (моя семья)
❌ **la mi** familia

✅ **nuestros** hijos (наши дети)
❌ **los nuestros** hijos

**Исключение:** С частями тела и личными вещами в испанском часто используется определенный артикль вместо притяжательного местоимения:

- Me duele **la** cabeza. (У меня болит голова - буквально "мне болит *голова*")
- Me lavo **las** manos. (Я мою руки - буквально "я мою *руки*")
`
        },
        {
          id: 'posesivos-pronombres-ejemplos',
          title: 'Примеры использования притяжательных местоимений-существительных',
          collapsible: true,
          defaultOpen: false,
          content: `
## Примеры использования притяжательных местоимений-существительных

### А. Замена существительного (с артиклем):

Когда мы хотим избежать повторения существительного, мы используем притяжательное местоимение-существительное **с артиклем**.

**Примеры:**

**1. Сравнение:**
- Mi esposo trabaja aquí. ¿Y **el tuyo**?
  - (Мой муж работает здесь. А твой?)
  - *"el tuyo" заменяет "tu esposo"*

- Tu abuela vive en Madrid, pero **la mía** vive en Barcelona.
  - (Твоя бабушка живет в Мадриде, но моя живет в Барселоне.)
  - *"la mía" заменяет "mi abuela"*

**2. Множественное число:**
- Nuestros hijos son pequeños, pero **los suyos** son mayores.
  - (Наши дети маленькие, но их (дети) взрослые.)
  - *"los suyos" заменяет "sus hijos"*

- Vuestros padres están aquí, **los nuestros** llegan mañana.
  - (Ваши родители здесь, наши приезжают завтра.)
  - *"los nuestros" заменяет "nuestros padres"*

**3. Уточнение принадлежности:**
- Este nieto es **el de Pedro**, no **el tuyo**.
  - (Этот внук Педро, не твой.)

- Estas hermanas son **las de ella**, no **las mías**.
  - (Эти сестры её, не мои.)

### Б. После глагола ser (без артикля):

После глагола **ser** (быть) притяжательные местоимения-существительные обычно употребляются **БЕЗ артикля** и обозначают принадлежность.

**Примеры:**

**1. Указание на владельца:**
- Esta familia es **mía**.
  - (Эта семья моя.)

- Este marido es **tuyo**.
  - (Этот муж твой.)

- Estos parientes son **suyos**.
  - (Эти родственники его/её/Ваши/их.)

**2. Вопросы о принадлежности:**
- ¿Estos nietos son **vuestros**?
  - (Эти внуки ваши - обращение к нескольким людям?)

- ¿Esta esposa es **nuestra**?
  - (Эта супруга наша?)

- ¿Estos hijos son **suyos**, señora?
  - (Эти дети Ваши, сеньора?)

**3. Множественное число:**
- Esas primas son **nuestras**.
  - (Те двоюродные сестры наши.)

- Aquellos tíos son **vuestros**.
  - (Вон те дяди ваши.)

### В. В роли определения (без артикля):

В стилистических целях или в обращениях притяжательные местоимения-существительные могут употребляться **после существительного БЕЗ артикля**.

**Примеры:**

**1. В разговорной речи (неопределенный артикль + существительное + притяжательное):**
- Un primo **mío** vive en México.
  - (Один мой двоюродный брат живет в Мексике.)

- Una tía **tuya** trabaja en el hospital.
  - (Одна твоя тетя работает в больнице.)

- Unos parientes **nuestros** vienen mañana.
  - (Одни наши родственники приезжают завтра.)

**2. В обращениях и восклицаниях:**
- ¡**Hijo mío**!
  - (Сын мой!)

- **Amor mío**, te quiero.
  - (Любовь моя, я тебя люблю.)

- **Hermana mía**, ayúdame.
  - (Сестра моя, помоги мне.)

**3. В устойчивых выражениях с семьей:**
- por culpa **mía** (по моей вине)
- en opinión **nuestra** (по нашему мнению)
- de parte **suya** (от его/её имени)

**Важное различие:**

| С артиклем | Без артикля |
|-----------|-------------|
| **El** hermano **mío** = мой брат (конкретный, определенный) | **Un** hermano **mío** = один мой брат (неопределенный) |
| **La** familia **mía** = моя семья (о которой уже говорили) | Es familia **mía** (после ser - это моя семья) |
`
        }
      ]
    },
    vocabulary: [
      // Aspecto físico - Внешний вид
      { word: 'aspecto físico', translation: 'внешний вид', audioUrl: null },
      { word: 'simpático', translation: 'симпатичный', audioUrl: null },
      { word: 'antipático', translation: 'неприятный', audioUrl: null },
      { word: 'feo', translation: 'некрасивый', audioUrl: null },
      { word: 'guapo', translation: 'красивый', audioUrl: null },
      { word: 'hermoso', translation: 'красивый', audioUrl: null },
      { word: 'alto', translation: 'высокий', audioUrl: null },
      { word: 'bajo', translation: 'низкий', audioUrl: null },
      { word: 'gordo', translation: 'толстый', audioUrl: null },
      { word: 'delgado', translation: 'стройный', audioUrl: null },
      { word: 'flaco', translation: 'худой', audioUrl: null },
      { word: 'atlético', translation: 'спортивное телосложение', audioUrl: null },
      { word: 'jorobado', translation: 'горбатый', audioUrl: null },
      { word: 'cojo', translation: 'хромой', audioUrl: null },

      // Edad - Возраст
      { word: 'edad', translation: 'возраст (f)', audioUrl: null },
      { word: 'niño', translation: 'ребенок', audioUrl: null },
      { word: 'adolescente', translation: 'подросток (m/f)', audioUrl: null },
      { word: 'joven', translation: 'молодой', audioUrl: null },
      { word: 'maduro', translation: 'средних лет', audioUrl: null },
      { word: 'viejo', translation: 'старый', audioUrl: null },

      // Pelo - Волосы
      { word: 'pelo', translation: 'волосы (m)', audioUrl: null },
      { word: 'liso', translation: 'прямые', audioUrl: null },
      { word: 'rizado', translation: 'вьющиеся', audioUrl: null },
      { word: 'corto', translation: 'короткие', audioUrl: null },
      { word: 'largo', translation: 'длинные', audioUrl: null },
      { word: 'calvo', translation: 'лысый', audioUrl: null },
      { word: 'moreno', translation: 'брюнет', audioUrl: null },
      { word: 'rubio', translation: 'блондин', audioUrl: null },
      { word: 'pelirrojo', translation: 'рыжий', audioUrl: null },
      { word: 'castaño', translation: 'шатен', audioUrl: null },
      { word: 'cano', translation: 'седой', audioUrl: null },

      // Facciones - Черты лица
      { word: 'facciones', translation: 'черты лица (f)', audioUrl: null },
      { word: 'ojos', translation: 'глаза (m)', audioUrl: null },
      { word: 'grandes', translation: 'большие', audioUrl: null },
      { word: 'pequeños', translation: 'маленькие', audioUrl: null },
      { word: 'azules', translation: 'голубые', audioUrl: null },
      { word: 'grises', translation: 'серые', audioUrl: null },
      { word: 'pardos', translation: 'карие', audioUrl: null },
      { word: 'verdes', translation: 'зеленые', audioUrl: null },
      { word: 'nariz', translation: 'нос (f)', audioUrl: null },
      { word: 'recta', translation: 'прямой', audioUrl: null },
      { word: 'ancha', translation: 'широкий', audioUrl: null },
      { word: 'chata', translation: 'курносый', audioUrl: null },
      { word: 'labios', translation: 'губы (m)', audioUrl: null },
      { word: 'finos', translation: 'тонкие', audioUrl: null },
      { word: 'carnosos', translation: 'полные', audioUrl: null },
      { word: 'cejas', translation: 'брови (f)', audioUrl: null },
      { word: 'pobladas', translation: 'густые', audioUrl: null },

      // Otros detalles (lleva) - Особые приметы
      { word: 'bigotes', translation: 'усы (m)', audioUrl: null },
      { word: 'barba', translation: 'борода (f)', audioUrl: null },
      { word: 'gafas', translation: 'очки (f)', audioUrl: null },
      { word: 'tatuaje', translation: 'татуировка (m)', audioUrl: null },
      { word: 'lunar', translation: 'родинка (m)', audioUrl: null },
      { word: 'cicatriz', translation: 'шрам (f)', audioUrl: null },

      // Carácter - Характер
      { word: 'carácter', translation: 'характер (m)', audioUrl: null },
      { word: 'alegre', translation: 'веселый', audioUrl: null },
      { word: 'triste', translation: 'грустный', audioUrl: null },
      { word: 'cortés', translation: 'вежливый', audioUrl: null },
      { word: 'serio', translation: 'серьезный', audioUrl: null },
      { word: 'tranquilo', translation: 'спокойный', audioUrl: null },
      { word: 'trabajador', translation: 'трудолюбивый', audioUrl: null },
      { word: 'formal', translation: 'аккуратный / педантичный', audioUrl: null },
      { word: 'puntual', translation: 'пунктуальный', audioUrl: null },
      { word: 'educado', translation: 'воспитанный', audioUrl: null },
      { word: 'egoísta', translation: 'эгоист (m/f)', audioUrl: null },
      { word: 'perezoso', translation: 'ленивый', audioUrl: null },
      { word: 'generoso', translation: 'щедрый', audioUrl: null },
      { word: 'avaro', translation: 'жадный', audioUrl: null },
      { word: 'tímido', translation: 'скромный / застенчивый', audioUrl: null },
      { word: 'curioso', translation: 'любопытный', audioUrl: null },
      { word: 'astuto', translation: 'хитрый', audioUrl: null },
      { word: 'presumido', translation: 'тщеславный', audioUrl: null },
      { word: 'bondadoso', translation: 'добрый', audioUrl: null },
      { word: 'prudente', translation: 'осторожный / благоразумный', audioUrl: null },
      { word: 'comunicativo', translation: 'общительный', audioUrl: null },
      { word: 'honrado', translation: 'честный', audioUrl: null },
      { word: 'valiente', translation: 'смелый', audioUrl: null },
      { word: 'sincero', translation: 'искренний', audioUrl: null },
      { word: 'fiel', translation: 'верный', audioUrl: null },
      { word: 'terco', translation: 'упрямый', audioUrl: null },
      { word: 'cariñoso', translation: 'нежный', audioUrl: null },
      { word: 'inteligente', translation: 'умный', audioUrl: null },
      { word: 'tonto', translation: 'глупый', audioUrl: null }
    ],
    readingText: {
      title: 'Mis amigos y mi familia',
      content: `Hola, me llamo Elena. Soy estudiante y tengo veinte años. Vivo en Madrid con mi familia. Quiero hablar de mi familia y mis amigos.

Este es mi padre. Se llama Carlos y tiene cincuenta años. Es alto y delgado. Tiene pelo cano y corto. Sus ojos son pardos. Lleva gafas. Mi padre es serio y trabajador. Es profesor en una universidad. También es muy inteligente y honrado.

Esta es mi madre. Se llama Ana y tiene cuarenta y ocho años. Ella es guapa y alegre. Tiene pelo largo y rubio. Sus ojos son azules. Mi madre es bondadosa y generosa. Es médica y ayuda a muchas personas.

Tengo dos hermanos. Este es Miguel, mi hermano mayor. Tiene veinticinco años. Es alto y atlético. Tiene pelo corto y negro. Es moreno, como mi padre. Miguel es comunicativo y valiente. Es policía.

Esta es mi hermana pequeña, Sofía. Tiene quince años. Es baja y delgada. Tiene pelo largo y rizado. Es pelirroja con ojos verdes. Sofía es tímida pero muy inteligente. Es estudiante, como yo.

Ahora quiero hablar de mis amigos. Ese chico ahí es Pablo, mi mejor amigo. Pablo es bajo y gordo, pero muy alegre y curioso. Tiene pelo corto y castaño. Sus ojos son grises. Lleva bigotes. Pablo es muy sincero y fiel. Siempre está alegre.

Aquella chica allí es Carmen. Ella es mi amiga de la universidad. Carmen es muy guapa. Es alta y delgada. Tiene pelo liso y negro. Sus ojos son grandes y pardos. Tiene cejas pobladas y labios carnosos. Carmen es seria y tranquila, pero también es muy cariñosa con sus amigos.

Todos mis amigos y mi familia son muy importantes para mí. Somos todos diferentes: altos y bajos, alegres y serios, rubios y morenos. Pero todos somos buenos amigos y una familia feliz.`,
      translation: 'Привет, меня зовут Елена. Я студентка, мне двадцать лет. Я живу в Мадриде со своей семьей. Я хочу рассказать о моей семье и моих друзьях.\n\nЭто мой отец. Его зовут Карлос, ему пятьдесят лет. Он высокий и стройный. У него седые короткие волосы. Его глаза карие. Он носит очки. Мой отец серьезный и трудолюбивый. Он преподаватель в университете. Также он очень умный и честный.\n\nЭто моя мама. Её зовут Ана, ей сорок восемь лет. Она красивая и веселая. У неё длинные светлые волосы. Её глаза голубые. Моя мама добрая и щедрая. Она врач и помогает многим людям.\n\nУ меня два брата и сестры. Это Мигель, мой старший брат. Ему двадцать пять лет. Он высокий и спортивного телосложения. У него короткие черные волосы. Он брюнет, как мой отец. Мигель общительный и смелый. Он полицейский.\n\nЭто моя младшая сестра, София. Ей пятнадцать лет. Она низкая и худая. У неё длинные вьющиеся волосы. Она рыжая с зелеными глазами. София застенчивая, но очень умная. Она студентка, как и я.\n\nТеперь я хочу рассказать о моих друзьях. Вон тот парень - Пабло, мой лучший друг. Пабло низкий и толстый, но очень веселый и любопытный. У него короткие каштановые волосы. Его глаза серые. Он носит усы. Пабло очень искренний и верный. Он всегда веселый.\n\nВон та девушка - Кармен. Она моя подруга из университета. Кармен очень красивая. Она высокая и стройная. У неё прямые черные волосы. Её глаза большие и карие. У неё густые брови и полные губы. Кармен серьезная и спокойная, но также очень нежная со своими друзьями.\n\nВсе мои друзья и моя семья очень важны для меня. Мы все разные: высокие и низкие, веселые и серьезные, блондины и брюнеты. Но все мы хорошие друзья и счастливая семья.',
      audioUrl: '/audio/lesson-2-3-reading.mp3'
    },
    exercises: [
      'ex-2-3-1',
      'ex-2-3-2',
      'ex-2-3-3',
      'ex-2-3-4',
      'ex-2-3-5',
      'ex-2-3-6',
      'ex-2-3-7',
      'ex-2-3-8',
      'ex-2-3-9',
      'ex-2-3-10',
      'ex-2-3-11',
      'ex-2-3-12',
      'ex-2-3-13',
      'ex-2-3-14',
      'ex-2-3-15',
      'ex-3-1-demonstrativos',
      'ex-3-1-posesivos-mi-tu-su',
      'ex-3-1-posesivos-nuestro',
      'ex-3-1-demonstrativos-sust',
      'ex-3-1-posesivos-pronombres',
      'ex-3-1-neutros',
      'ex-3-1-adverbios-lugar',
      'ex-3-1-su-aclaracion',
      'ex-3-1-combinado'
    ]
  },

  // МОДУЛЬ 3: Повседневная жизнь
  'lesson-2-3': {
    id: 'lesson-2-3',
    title: 'Урок 3: Семья и родственники. Вопросительные предложения в испанском языке. Глаголы QUERER, PODER, VENIR, DECIR',
    moduleId: 'module-2',
    grammar: {
      title: 'Вопросительные предложения в испанском языке',
      intro: `# Вопросительные предложения в испанском языке

В испанском языке порядок слов в предложении относительно гибок, но в вопросительных конструкциях действуют четкие правила.`,
      sections: [
        {
          id: 'word-order-intonation',
          title: 'Порядок слов и интонация',
          collapsible: true,
          defaultOpen: false,
          content: `
## Порядок слов и интонация

### 1. Повествовательное предложение

**Порядок слов:** Обычно прямой: Подлежащее + Сказуемое + Дополнение / Обстоятельства.

**Интонация:** Характеризуется повышением тона до последнего ударного слога, а затем понижением до точки.

**Пример:** Mi hermano estudia medicina en Barcelona. (Мой брат изучает медицину в Барселоне.)

### 2. Вопросительное предложение (Общий вопрос)

**Порядок слов:** Употребляется обратный порядок слов (инверсия), то есть Сказуемое + Подлежащее + Дополнение / Обстоятельства.

**Интонация:** Тон повышается от начала фразы и достигает максимума перед конечным вопросительным знаком (восходящая интонация). Интонация общего вопроса в испанском языке схожа с русской.

**Пример:** ¿Estudia tu hermano medicina en Barcelona?
(Изучает ли твой брат медицину в Барселоне?)
`
        },
        {
          id: 'question-types',
          title: 'Типы вопросов',
          collapsible: true,
          defaultOpen: false,
          content: `
## Типы вопросов

Вопросы делятся на три основных типа:

### 1. Общие вопросы (Preguntas totales)

Предполагают ответ да (Sí) или нет (No).

**Пример:**

¿Compraste las entradas para el concierto?

— Sí, las compré esta mañana. (Да, я их купил сегодня утром.)
— No, todavía no las he comprado. (Нет, я их еще не купил.)

### 2. Альтернативные вопросы (Preguntas alternativas)

Содержат союз **o** (или) и предлагают выбор из двух или более вариантов.

**Интонация:** Тон повышается на первом варианте и понижается на последнем.

**Пример:**

¿Quieres café o té para desayunar?
(Ты хочешь кофе или чай на завтрак?)

### 3. Специальные вопросы (Preguntas parciales)

Задаются с помощью вопросительных слов к различным членам предложения. В испанском языке в специальном вопросе (в отличие от русского) тон понижается к концу предложения (нисходящая интонация).

**Пример:**

¿Cómo llegaste tan rápido?
`
        },
        {
          id: 'question-words',
          title: 'Вопросительные слова специального вопроса',
          collapsible: true,
          defaultOpen: false,
          content: `
## Вопросительные слова специального вопроса

Все вопросительные слова (кроме cuyo/a/os/as, которое редко используется в прямых вопросах) обязательно пишутся с графическим ударением (tilde):

| Категория | Вопросительные слова | Значение | Пример |
|-----------|---------------------|----------|--------|
| **К Подлежащему** | ¿Quién? (ед.ч.) / ¿Quiénes? (мн.ч.) | Кто? (одушевленное) | ¿Quién me llama por teléfono? (Кто мне звонит по телефону?) |
| | ¿Qué? | Что? (неодушевленное) | ¿Qué pasó en la reunión de ayer? (Что произошло на вчерашней встрече?) |
| **К Дополнению (одуш.)** | ¿A quién? / ¿Con quién? / ¿De quién? и т.д. | Кого? / С кем? / О ком? | ¿A quién enviaste este correo? (Кому ты отправил это письмо?) |
| **К Дополнению (неодуш.)** | ¿Qué? / ¿De qué? / ¿Con qué? и т.д. | Что? / О чем? / С чем? | ¿De qué trata la nueva serie? (О чем этот новый сериал?) |
| **К Определению (выбор)** | ¿Cuál? (ед.ч.) / ¿Cuáles? (мн.ч.) | Какой? / Который? (если есть выбор из группы) | ¿Cuál es tu coche de estos tres? (Какая из этих трех машин твоя?) |
| **К Определению (качество)** | ¿Cómo? + гл. ser/estar | Какой? Каков? Какова? | ¿Cómo es el carácter de tu jefe? (Какой характер у твоего начальника?) |
| | ¿Qué? + сущ. | Какой? Какая? Какие? | ¿Qué libro me recomiendas leer? (Какую книгу ты мне посоветуешь почитать?) |
| **К Обстоятельству времени** | ¿Cuándo? | Когда? | ¿Cuándo llega el tren de Madrid? (Когда прибывает поезд из Мадрида?) |
| **К Обстоятельству места** | ¿Dónde? / ¿Adónde? / ¿De dónde? | Где? / Куда? / Откуда? | ¿Dónde dejaste mi paraguas? (Где ты оставил мой зонт?) |
| **К Обстоятельству причины** | ¿Por qué? | Почему? (В ответе: Porque... – потому что...) | ¿Por qué no viniste a la fiesta? (Почему ты не пришел на вечеринку?) |
| **К Обстоятельству образа действия** | ¿Cómo? | Как? Каким образом? | ¿Cómo se escribe tu nombre en español? (Как пишется твое имя по-испански?) |
| **К Количеству** | ¿Cuánto/a/os/as? | Сколько? (Согласуется в роде и числе с существительным) | ¿Cuántas personas trabajan en tu equipo? (Сколько человек работает в твоей команде?) |
`
        },
        {
          id: 'quien-vs-que',
          title: 'Отличие: ¿Quién eres? vs. ¿Qué eres?',
          collapsible: true,
          defaultOpen: false,
          content: `
## Отличие: ¿Quién eres? vs. ¿Qué eres?

При знакомстве, чтобы узнать, кто Вы / ты, в испанском языке используется различие между ¿Quién? и ¿Qué? в зависимости от интересующей информации:

### ¿Quién es usted (eres)? (Кто Вы/ты?)

Интересует **имя, личность или родственная связь**.

**Ответ:** Soy Pedro López, soy el vecino de Laura. (Я Педро Лопес, я сосед Лауры.)

### ¿Qué es usted (eres)? (Кто Вы/ты по роду занятий?)

Интересует **национальность, профессия или род занятий**.

**Ответ:** Soy arquitecto. No soy español, soy cubano. (Я архитектор. Я не испанец, я кубинец.)
`
        },
        {
          id: 'verbo-querer',
          title: 'Глагол QUERER (хотеть, желать, любить)',
          collapsible: true,
          defaultOpen: false,
          content: `
## Глагол индивидуального спряжения QUERER (хотеть, желать, любить)

Выучите спряжение этого глагола в настоящем времени:

| Лицо | Форма | Перевод |
|------|-------|---------|
| yo | quiero | Я хочу. |
| tú | quieres | Ты хочешь. |
| él, ella, usted | quiere | Он / она хочет. Вы хотите. |
| nosotros (-as) | queremos | Мы хотим. |
| vosotros (-as) | queréis | Вы хотите. (неформ., Испания) |
| ellos, ellas, ustedes | quieren | Они хотят. Вы хотите. |

### Употребление глагола QUERER

**1. Querer + инфинитив** – выражение желания совершить действие:

- Quiero estudiar español. (Я хочу изучать испанский.)
- ¿Quieres venir conmigo? (Ты хочешь пойти со мной?)
- Mi hermano quiere ser médico. (Мой брат хочет быть врачом.)

**2. Querer + существительное** – желание обладать чем-то:

- Queremos una casa grande. (Мы хотим большой дом.)
- ¿Qué quieres de regalo? (Что ты хочешь в подарок?)
- Ellos quieren café. (Они хотят кофе.)

**3. Querer (a alguien)** – любить кого-то, относиться с симпатией:

- Quiero mucho a mi familia. (Я очень люблю свою семью.)
- ¿Quieres a tu hermano? (Ты любишь своего брата?)
`
        },
        {
          id: 'verbo-poder',
          title: 'Глагол PODER (мочь)',
          collapsible: true,
          defaultOpen: false,
          content: `
## Глагол индивидуального спряжения PODER (мочь)

Выучите спряжение этого глагола в настоящем времени:

| Лицо | Форма | Перевод |
|------|-------|---------|
| yo | puedo | Я могу. |
| tú | puedes | Ты можешь. |
| él, ella, usted | puede | Он (она) может. Вы можете. |
| nosotros (-as) | podemos | Мы можем. |
| vosotros (-as) | podéis | Вы можете. (неформ., Испания) |
| ellos, ellas, ustedes | pueden | Они могут. Вы можете. |

### Употребление глагола PODER

Глагол **poder** используется с инфинитивом смыслового глагола для выражения возможности совершить действие:

- Puedo hablar español. (Я могу говорить по-испански.)
- ¿Puedes venir mañana? (Ты можешь прийти завтра?)
- Mi padre no puede trabajar hoy. (Мой отец не может работать сегодня.)
- Podemos estudiar en la biblioteca. (Мы можем учиться в библиотеке.)
- ¿Podéis ayudarme? (Вы можете мне помочь?)
- Ellos pueden venir a la fiesta. (Они могут прийти на вечеринку.)
`
        },
        {
          id: 'verbo-venir',
          title: 'Глагол VENIR (приходить, приезжать)',
          collapsible: true,
          defaultOpen: false,
          content: `
## Глагол индивидуального спряжения VENIR (приходить, приезжать)

Запомните его спряжение в настоящем времени:

| Лицо | Форма | Перевод |
|------|-------|---------|
| yo | vengo | Я прихожу. |
| tú | vienes | Ты приходишь. |
| él, ella, usted | viene | Он / она приходит. Вы приходите. |
| nosotros (-as) | venimos | Мы приходим. |
| vosotros (-as) | venís | Вы приходите. (неформ., Испания) |
| ellos, ellas, ustedes | vienen | Они приходят. Вы приходите. |

### Примеры использования

- Vengo a la universidad en autobús. (Я приезжаю в университет на автобусе.)
- ¿Vienes de Madrid? (Ты приезжаешь из Мадрида?)
- Mi amigo viene a mi casa esta tarde. (Мой друг приходит ко мне домой сегодня вечером.)
- Venimos de la biblioteca. (Мы идем из библиотеки.)
- ¿De dónde venís? (Откуда вы приходите?)
- Mis padres vienen mañana. (Мои родители приезжают завтра.)
`
        },
        {
          id: 'verbo-decir',
          title: 'Глагол DECIR (говорить, сказать)',
          collapsible: true,
          defaultOpen: false,
          content: `
## Глагол индивидуального спряжения DECIR (говорить, сказать)

Выучите спряжение этого глагола в настоящем времени:

| Лицо | Форма | Перевод |
|------|-------|---------|
| yo | digo | Я говорю. |
| tú | dices | Ты говоришь. |
| él, ella, usted | dice | Он / она говорит. Вы говорите. |
| nosotros (-as) | decimos | Мы говорим. |
| vosotros (-as) | decís | Вы говорите. (неформ., Испания) |
| ellos, ellas, ustedes | dicen | Они говорят. Вы говорите. |

### Примеры использования

- Siempre digo la verdad. (Я всегда говорю правду.)
- ¿Qué dices? (Что ты говоришь?)
- Mi madre dice que tengo que estudiar. (Моя мама говорит, что я должен учиться.)
- Decimos "buenos días" por la mañana. (Мы говорим "доброе утро" утром.)
- ¿Qué decís vosotros? (Что вы говорите?)
- Ellos dicen que vienen mañana. (Они говорят, что приедут завтра.)
`
        }
      ]
    },
    vocabulary: [
      // Семейная лексика
      { word: 'familia', translation: 'семья', audioUrl: null },
      { word: 'matrimonio', translation: 'супружеская пара / брак', audioUrl: null },
      { word: 'padre', translation: 'отец', audioUrl: null },
      { word: 'madre', translation: 'мать', audioUrl: null },
      { word: 'padres', translation: 'родители', audioUrl: null },
      { word: 'marido', translation: 'муж', audioUrl: null },
      { word: 'mujer', translation: 'жена', audioUrl: null },
      { word: 'esposo', translation: 'супруг', audioUrl: null },
      { word: 'esposa', translation: 'супруга', audioUrl: null },
      { word: 'hijo', translation: 'сын', audioUrl: null },
      { word: 'hija', translation: 'дочь', audioUrl: null },
      { word: 'hijos', translation: 'дети', audioUrl: null },
      { word: 'abuelo', translation: 'дедушка', audioUrl: null },
      { word: 'abuela', translation: 'бабушка', audioUrl: null },
      { word: 'nieto', translation: 'внук', audioUrl: null },
      { word: 'nieta', translation: 'внучка', audioUrl: null },
      { word: 'hermano', translation: 'брат', audioUrl: null },
      { word: 'hermana', translation: 'сестра', audioUrl: null },
      { word: 'mellizos', translation: 'близнецы (м.р.)', audioUrl: null },
      { word: 'mellizas', translation: 'близнецы (ж.р.)', audioUrl: null },
      { word: 'padrino', translation: 'крестный отец', audioUrl: null },
      { word: 'madrina', translation: 'крестная мать', audioUrl: null },
      { word: 'tío', translation: 'дядя', audioUrl: null },
      { word: 'tía', translation: 'тетя', audioUrl: null },
      { word: 'primo', translation: 'двоюродный брат', audioUrl: null },
      { word: 'prima', translation: 'двоюродная сестра', audioUrl: null },
      { word: 'sobrino', translation: 'племянник', audioUrl: null },
      { word: 'sobrina', translation: 'племянница', audioUrl: null },
      { word: 'suegro', translation: 'свекор / тесть', audioUrl: null },
      { word: 'suegra', translation: 'свекровь / теща', audioUrl: null },
      { word: 'yerno', translation: 'зять (муж дочери)', audioUrl: null },
      { word: 'nuera', translation: 'невестка (жена сына)', audioUrl: null },
      { word: 'cuñado', translation: 'сват / свояк / деверь / шурин', audioUrl: null },
      { word: 'cuñada', translation: 'сватья / свояченица / золовка', audioUrl: null },
      { word: 'padrastro', translation: 'отчим', audioUrl: null },
      { word: 'madrastra', translation: 'мачеха', audioUrl: null },
      { word: 'hijastro', translation: 'пасынок', audioUrl: null },
      { word: 'hijastra', translation: 'падчерица', audioUrl: null },
      { word: 'pariente', translation: 'родственник / родственница', audioUrl: null },

      // Указательные местоимения
      { word: 'este', translation: 'этот (м.р., ед.ч.)', audioUrl: null },
      { word: 'esta', translation: 'эта (ж.р., ед.ч.)', audioUrl: null },
      { word: 'estos', translation: 'эти (м.р., мн.ч.)', audioUrl: null },
      { word: 'estas', translation: 'эти (ж.р., мн.ч.)', audioUrl: null },
      { word: 'ese', translation: 'тот (м.р., ед.ч.)', audioUrl: null },
      { word: 'esa', translation: 'та (ж.р., ед.ч.)', audioUrl: null },
      { word: 'esos', translation: 'те (м.р., мн.ч.)', audioUrl: null },
      { word: 'esas', translation: 'те (ж.р., мн.ч.)', audioUrl: null },
      { word: 'aquel', translation: 'вон тот (м.р., ед.ч.)', audioUrl: null },
      { word: 'aquella', translation: 'вон та (ж.р., ед.ч.)', audioUrl: null },
      { word: 'aquellos', translation: 'вон те (м.р., мн.ч.)', audioUrl: null },
      { word: 'aquellas', translation: 'вон те (ж.р., мн.ч.)', audioUrl: null },

      // Нейтральные формы
      { word: 'esto', translation: 'это (нейтральное, близко)', audioUrl: null },
      { word: 'eso', translation: 'то (нейтральное, на расстоянии)', audioUrl: null },
      { word: 'aquello', translation: 'то (нейтральное, далеко)', audioUrl: null },

      // Наречия места
      { word: 'aquí', translation: 'здесь, тут', audioUrl: null },
      { word: 'ahí', translation: 'там (на расстоянии)', audioUrl: null },
      { word: 'allí', translation: 'там (далеко)', audioUrl: null },

      // Притяжательные местоимения-прилагательные
      { word: 'mi', translation: 'мой, моя (ед.ч.)', audioUrl: null },
      { word: 'mis', translation: 'мои (мн.ч.)', audioUrl: null },
      { word: 'tu', translation: 'твой, твоя (ед.ч.)', audioUrl: null },
      { word: 'tus', translation: 'твои (мн.ч.)', audioUrl: null },
      { word: 'su', translation: 'его, её, Ваш (ед.ч.)', audioUrl: null },
      { word: 'sus', translation: 'его, её, Ваши (мн.ч.)', audioUrl: null },
      { word: 'nuestro', translation: 'наш (м.р., ед.ч.)', audioUrl: null },
      { word: 'nuestra', translation: 'наша (ж.р., ед.ч.)', audioUrl: null },
      { word: 'nuestros', translation: 'наши (м.р., мн.ч.)', audioUrl: null },
      { word: 'nuestras', translation: 'наши (ж.р., мн.ч.)', audioUrl: null },
      { word: 'vuestro', translation: 'ваш (м.р., ед.ч.)', audioUrl: null },
      { word: 'vuestra', translation: 'ваша (ж.р., ед.ч.)', audioUrl: null },
      { word: 'vuestros', translation: 'ваши (м.р., мн.ч.)', audioUrl: null },
      { word: 'vuestras', translation: 'ваши (ж.р., мн.ч.)', audioUrl: null },

      // Притяжательные местоимения-существительные
      { word: 'el mío', translation: 'мой (м.р., с артиклем)', audioUrl: null },
      { word: 'la mía', translation: 'моя (ж.р., с артиклем)', audioUrl: null },
      { word: 'los míos', translation: 'мои (м.р., мн.ч., с артиклем)', audioUrl: null },
      { word: 'las mías', translation: 'мои (ж.р., мн.ч., с артиклем)', audioUrl: null },
      { word: 'el tuyo', translation: 'твой (м.р., с артиклем)', audioUrl: null },
      { word: 'la tuya', translation: 'твоя (ж.р., с артиклем)', audioUrl: null },
      { word: 'los tuyos', translation: 'твои (м.р., мн.ч., с артиклем)', audioUrl: null },
      { word: 'las tuyas', translation: 'твои (ж.р., мн.ч., с артиклем)', audioUrl: null },
      { word: 'el suyo', translation: 'его/её/Ваш (м.р., с артиклем)', audioUrl: null },
      { word: 'la suya', translation: 'его/её/Ваша (ж.р., с артиклем)', audioUrl: null },
      { word: 'los suyos', translation: 'его/её/Ваши (м.р., мн.ч., с артиклем)', audioUrl: null },
      { word: 'las suyas', translation: 'его/её/Ваши (ж.р., мн.ч., с артиклем)', audioUrl: null },

      // Глаголы индивидуального спряжения
      { word: 'querer', translation: 'хотеть, желать, любить', audioUrl: null },
      { word: 'poder', translation: 'мочь', audioUrl: null },
      { word: 'venir', translation: 'приходить, приезжать', audioUrl: null },
      { word: 'decir', translation: 'говорить, сказать', audioUrl: null }
    ],
    readingText: {
      title: 'En la universidad',
      content: `María y Carlos se encuentran en la universidad. Es el primer día del nuevo semestre.

María: ¡Hola! ¿Cómo te llamas?
Carlos: Me llamo Carlos. ¿Y tú?
María: Soy María. ¿Eres estudiante aquí?
Carlos: Sí, estudio medicina. ¿Qué estudias tú?
María: Estudio literatura española. ¿De dónde eres?
Carlos: Soy de Valencia. ¿Y tú?
María: Soy de Madrid. Vivo con mi familia aquí. ¿Dónde vives tú?
Carlos: Vivo en una residencia estudiantil. ¿Cuántos años tienes?
María: Tengo diecinueve. ¿Y tú?
Carlos: Tengo veinte años. ¿Tienes hermanos?
María: Sí, tengo tres hermanos. Mi padre es ingeniero y mi madre es abogada. ¿Qué hacen tus padres?
Carlos: Mi padre es médico y mi madre es profesora. ¿Por qué estudias literatura?
María: Porque quiero ser escritora. ¿Por qué estudias medicina?
Carlos: Porque quiero ayudar a las personas. ¿Cuándo empiezan tus clases?
María: A las diez. ¿Y las tuyas?
Carlos: A las nueve. ¿Adónde vas ahora?
María: Voy a la cafetería. ¿Quieres venir conmigo?
Carlos: ¡Claro! Pero primero necesito ir a la biblioteca. ¿Puedes esperar?
María: Sí, puedo esperar. ¿Dónde está la biblioteca?
Carlos: Está en el edificio principal. Vengo en cinco minutos.
María: Bien. ¿Qué libro necesitas?
Carlos: Necesito un libro de anatomía. Mi profesor dice que es muy importante.
María: ¿Qué dice tu profesor?
Carlos: Dice que tenemos que leer este libro para el examen. ¿Tú también tienes exámenes esta semana?
María: Sí, tengo dos exámenes. No puedo estudiar todo. ¿Puedes ayudarme?
Carlos: Claro, puedo ayudarte. ¿Cuándo quieres estudiar?
María: ¿Puedes venir a mi casa mañana?
Carlos: Sí, puedo venir mañana por la tarde. ¿A qué hora?
María: A las cinco. Mi familia quiere conocerte.
Carlos: ¡Perfecto! Entonces, ¿vamos ahora a la biblioteca y después a la cafetería?
María: ¡Vamos!`,
      translation: 'В университете\n\nМария и Карлос встречаются в университете. Это первый день нового семестра.\n\nМария: Привет! Как тебя зовут?\nКарлос: Меня зовут Карлос. А тебя?\nМария: Я Мария. Ты студент здесь?\nКарлос: Да, я изучаю медицину. Что ты изучаешь?\nМария: Я изучаю испанскую литературу. Откуда ты?\nКарлос: Я из Валенсии. А ты?\nМария: Я из Мадрида. Живу здесь с семьей. Где ты живешь?\nКарлос: Я живу в студенческом общежитии. Сколько тебе лет?\nМария: Мне девятнадцать. А тебе?\nКарлос: Мне двадцать лет. У тебя есть братья и сестры?\nМария: Да, у меня три брата. Мой отец инженер, а мать адвокат. Кем работают твои родители?\nКарлос: Мой отец врач, а мать учительница. Почему ты изучаешь литературу?\nМария: Потому что хочу быть писательницей. Почему ты изучаешь медицину?\nКарлос: Потому что хочу помогать людям. Когда начинаются твои занятия?\nМария: В десять. А твои?\nКарлос: В девять. Куда ты сейчас идешь?\nМария: Я иду в кафетерий. Хочешь пойти со мной?\nКарлос: Конечно! Но сначала мне нужно пойти в библиотеку. Можешь подождать?\nМария: Да, могу подождать. Где находится библиотека?\nКарлос: Она в главном здании. Приду через пять минут.\nМария: Хорошо. Какая книга тебе нужна?\nКарлос: Мне нужна книга по анатомии. Мой преподаватель говорит, что она очень важна.\nМария: Что говорит твой преподаватель?\nКарлос: Он говорит, что мы должны прочитать эту книгу для экзамена. У тебя тоже есть экзамены на этой неделе?\nМария: Да, у меня два экзамена. Я не могу выучить все. Можешь помочь мне?\nКарлос: Конечно, могу помочь. Когда ты хочешь заниматься?\nМария: Можешь прийти ко мне домой завтра?\nКарлос: Да, могу прийти завтра после обеда. Во сколько?\nМария: В пять. Моя семья хочет познакомиться с тобой.\nКарлос: Отлично! Тогда пойдем сейчас в библиотеку, а потом в кафетерий?\nМария: Пойдем!',
      audioUrl: '/audio/lesson-3-1-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'María y Carlos se encuentran en la universidad. Es el primer día del nuevo semestre.' },
        { start: 5, end: 10, text: '¡Hola! ¿Cómo te llamas? - Me llamo Carlos.' },
        { start: 10, end: 15, text: '¿Eres estudiante aquí? - Sí, estudio medicina.' },
        { start: 15, end: 20, text: '¿De dónde eres? - Soy de Valencia.' },
        { start: 20, end: 25, text: '¿Tienes hermanos? - Sí, tengo tres hermanos.' },
        { start: 25, end: 30, text: '¿Por qué estudias medicina? - Porque quiero ayudar a las personas.' },
        { start: 30, end: 35, text: '¿Quieres venir conmigo a la cafetería? - ¡Claro!' },
        { start: 35, end: 40, text: '¿Puedes esperar? - Sí, puedo esperar.' },
        { start: 40, end: 45, text: 'Mi profesor dice que es muy importante.' },
        { start: 45, end: 50, text: '¿Puedes ayudarme? - Claro, puedo ayudarte.' },
        { start: 50, end: 55, text: '¿Puedes venir a mi casa mañana? - Sí, puedo venir.' },
        { start: 55, end: 60, text: 'Mi familia quiere conocerte. - ¡Perfecto!' }
      ]
    },
    exercises: ['ex-2-3-1', 'ex-2-3-2', 'ex-2-3-3', 'ex-2-3-4', 'ex-2-3-5', 'ex-2-3-6', 'ex-2-3-7', 'ex-2-3-8', 'ex-2-3-9', 'ex-2-3-10', 'ex-2-3-11', 'ex-2-3-12', 'ex-2-3-13', 'ex-2-3-14', 'ex-2-3-15', 'ex-3-1-demonstrativos', 'ex-3-1-posesivos-mi-tu-su', 'ex-3-1-posesivos-nuestro', 'ex-3-1-demonstrativos-sust', 'ex-3-1-posesivos-pronombres', 'ex-3-1-neutros', 'ex-3-1-adverbios-lugar', 'ex-3-1-su-aclaracion', 'ex-3-1-combinado', 'ex-3-1-16']
  },
  'lesson-3-1': {
    id: 'lesson-3-1',
    title: 'Урок 1: Безличная глагольная форма HAY. Mucho / poco / muy / tanto / tan / tal. Мой дом.',
    moduleId: 'module-3',
    grammar: {
      title: 'Безличная глагольная форма HAY',
      intro: `Безличная глагольная форма **hay** (от инфинитива глагола **haber**) соответствует русским глагольным формам **есть, имеется, имеются** (в значении наличия чего-либо в определенном месте).

**Hay** в утвердительной форме при переводе на русский язык обычно опускается, а отрицательная форма **no hay** переводится словом **нет**.

Повествовательные предложения с формой **hay** начинаются с обстоятельства места. Следующее за **hay** существительное является прямым дополнением.`,
      sections: [
        {
          id: 'hay-articles',
          title: 'Правила употребления артиклей с HAY',
          collapsible: true,
          defaultOpen: false,
          content: `| Конструкция | Артикль/Форма | Перевод на русский |
|-------------|---------------|-------------------|
| hay + un/una + существительное в ед.ч. | Неопределенный артикль | En la cocina hay un plato. (На кухне есть тарелка.) |
| hay + Ø + существительное во мн.ч. | Без артикля | En la cocina hay platos. (На кухне есть тарелки.) |
| no hay + Ø + существительное в ед.ч. | Без артикля | En la calle no hay farmacia. (На улице нет аптеки.) |
| no hay + Ø + существительное во мн.ч. | Без артикля | En el jardín no hay flores. (В саду нет цветов.) |`
        },
        {
          id: 'hay-que',
          title: 'Конструкция HAY QUE + Инфинитив',
          collapsible: true,
          defaultOpen: false,
          content: `Конструкция **hay que + инфинитив** переводится как **"надо/нужно сделать что-либо"** и не указывает лицо, которое должно совершить действие.

**Примеры:**
- **Hay que comprar pan.** (Надо купить хлеб.)
- **No hay que hablar con ellos.** (Не надо разговаривать с ними.)
- **Hay que estudiar para el examen.** (Нужно готовиться к экзамену.)`
        },
        {
          id: 'ser-estar-hay-comparison',
          title: 'Сравнение SER, ESTAR и HAY (HABER)',
          collapsible: true,
          defaultOpen: false,
          content: `Обратите внимание на то, что русскому глаголу **"быть"** в испанском языке соответствуют следующие глаголы:

- **ser** — быть, являться (для характеристики, профессии, происхождения, времени)
- **estar** — быть, находиться (для местоположения, временного состояния, здоровья)
- **hay (haber)** — быть, иметься (для обозначения наличия, существования)

В отличие от русского языка, в испанских высказываниях не допускается опущение этих глаголов.`
        },
        {
          id: 'hay-examples',
          title: 'Примеры с HAY (Наличие)',
          collapsible: true,
          defaultOpen: false,
          content: `| Испанский пример | Перевод на русский |
|------------------|-------------------|
| En el parque hay muchos niños. | В парке много детей. |
| No hay leche en el frigorífico. | В холодильнике нет молока. |
| En el centro comercial hay una tienda de ropa muy buena. | В торговом центре есть очень хороший магазин одежды. |
| En esta zona no hay aparcamiento gratuito. | В этой зоне нет бесплатной парковки. |
| En el cielo hay muchas estrellas esta noche. | Сегодня ночью на небе много звезд. |
| En mi barrio no hay árboles. | В моем районе нет деревьев. |
| ¡Mira! Aquí hay un mensaje para ti. | Смотри! Здесь есть сообщение для тебя. |`
        },
        {
          id: 'hay-que-examples',
          title: 'Примеры с HAY QUE (Необходимость)',
          collapsible: true,
          defaultOpen: false,
          content: `| Испанский пример | Перевод на русский |
|------------------|-------------------|
| Hay que llamar a la policía ahora mismo. | Нужно позвонить в полицию прямо сейчас. |
| No hay que beber alcohol antes de conducir. | Нельзя пить алкоголь перед вождением. |
| Para entrar al museo hay que comprar una entrada. | Чтобы войти в музей, нужно купить билет. |`
        },
        {
          id: 'ser-estar-hay-table',
          title: 'Сравнение SER / ESTAR / HAY',
          collapsible: true,
          defaultOpen: false,
          content: `| Глагол | Испанский пример | Перевод на русский |
|--------|------------------|-------------------|
| SER (Характеристика) | El café es caliente. | Кофе горячий (по своей природе). |
| ESTAR (Состояние) | El café está aquí, en la mesa. | Кофе находится здесь, на столе. |
| HAY (Наличие) | En la cafetería hay mucho café. | В кафе есть много кофе (в наличии). |
| SER (Профессия) | Mi hermana es profesora. | Моя сестра — преподаватель. |
| ESTAR (Местоположение) | ¿Estáis vosotros en casa? | Вы находитесь дома? |
| HAY (Наличие) | En la clase hay quince estudiantes. | В классе есть пятнадцать студентов. |`
        },
        {
          id: 'adjectives-mucho-poco-tanto',
          title: 'Прилагательные Mucho, Poco, Tanto',
          collapsible: true,
          defaultOpen: false,
          content: `**Mucho** (много), **poco** (мало), **tanto** (столько) — это прилагательные, которые изменяются по родам и числам и согласуются с существительными.

| Форма | Мужской род ед.ч. | Женский род ед.ч. | Мужской род мн.ч. | Женский род мн.ч. |
|-------|-------------------|-------------------|-------------------|-------------------|
| mucho | mucho dinero | mucha agua | muchos libros | muchas personas |
| poco | poco tiempo | poca comida | pocos estudiantes | pocas opciones |
| tanto | tanto trabajo | tanta gente | tantos problemas | tantas ideas |

**Примеры:**
- Hay **mucha** gente en la calle. (На улице много людей.)
- Tengo **poco** dinero. (У меня мало денег.)
- ¿Por qué hay **tantos** coches aquí? (Почему здесь столько машин?)
- En este restaurante hay **muchos** platos vegetarianos. (В этом ресторане много вегетарианских блюд.)`
        },
        {
          id: 'adverbs-mucho-poco-tanto',
          title: 'Наречия Mucho, Poco, Tanto',
          collapsible: true,
          defaultOpen: false,
          content: `Когда **mucho**, **poco**, **tanto** используются как наречия (с глаголами), они **НЕ изменяются** и всегда имеют форму мужского рода единственного числа.

**Схема:** Глагол + mucho/poco/tanto

**Примеры:**
- Trabajo **mucho**. (Я много работаю.)
- Duermo **poco**. (Я мало сплю.)
- Mi hermano habla **tanto** que me cansa. (Мой брат говорит столько, что меня утомляет.)
- Me gusta **mucho** esta película. (Мне очень нравится этот фильм.)
- Como **poco** por la mañana. (Я мало ем по утрам.)

**Важно:** С глаголами всегда используется форма **mucho/poco/tanto** (без изменений)!`
        },
        {
          id: 'adverbs-muy-tan',
          title: 'Наречия Muy и Tan',
          collapsible: true,
          defaultOpen: false,
          content: `**Muy** (очень) и **tan** (так, такой) — это наречия, которые **НЕ изменяются** и используются перед прилагательными или другими наречиями.

**Схема:** Muy/Tan + прилагательное/наречие

| Наречие | Использование | Примеры |
|---------|---------------|---------|
| muy | Очень (перед прилагательными и наречиями) | La casa es **muy** grande. (Дом очень большой.)<br>Hablas **muy** rápido. (Ты говоришь очень быстро.) |
| tan | Так, такой (перед прилагательными и наречиями, часто в восклицаниях или сравнениях) | ¡La película es **tan** interesante! (Фильм такой интересный!)<br>No corras **tan** rápido. (Не беги так быстро.) |

**Различие muy и mucho:**
- **Muy** + прилагательное: Estoy **muy** cansado. (Я очень устал.)
- Глагол + **mucho**: Trabajo **mucho**. (Я много работаю.)

**Ошибка:** ~~Estoy mucho cansado.~~ ❌
**Правильно:** Estoy **muy** cansado. ✅`
        },
        {
          id: 'adjective-tal',
          title: 'Прилагательное Tal',
          collapsible: true,
          defaultOpen: false,
          content: `**Tal** (такой) — это прилагательное, которое изменяется только по числам: **tal** (ед.ч.) и **tales** (мн.ч.).

**Особенность:** **Tal/tales** используется **БЕЗ артикля** перед существительным!

| Форма | Пример | Перевод |
|-------|--------|---------|
| tal (ед.ч.) | No he visto **tal** cosa. | Я не видел такой вещи. |
| tal (ед.ч.) | ¿Cómo puedes decir **tal** mentira? | Как ты можешь говорить такую ложь? |
| tales (мн.ч.) | No me gustan **tales** actitudes. | Мне не нравятся такие отношения. |
| tales (мн.ч.) | **Tales** personas no merecen respeto. | Такие люди не заслуживают уважения. |

**Устойчивые выражения:**
- **tal vez** — может быть, возможно
- **tal como** — так как, таким образом как
- **un tal / una tal** — некий, некая (с артиклем!): Llamó **un tal** Pedro. (Звонил некий Педро.)`
        },
        {
          id: 'comparison-tanto-tal',
          title: 'Сравнение Tanto и Tal',
          collapsible: true,
          defaultOpen: false,
          content: `**Tanto/tanta/tantos/tantas** и **tal/tales** часто путают, но они используются в разных контекстах.

| Слово | Тип | Согласование | Использование | Пример |
|-------|-----|--------------|---------------|--------|
| **tanto/a/os/as** | Прилагательное | Род + число | Количество (столько) | Hay **tantas** personas. (Столько людей.) |
| **tanto** | Наречие | Не изменяется | С глаголами (столько) | Hablas **tanto**. (Ты говоришь столько.) |
| **tal/tales** | Прилагательное | Только число | Качество (такой) | **Tal** comportamiento es inaceptable. (Такое поведение неприемлемо.) |
| **tan** | Наречие | Не изменяется | Перед прилагательными (так) | Es **tan** bonito. (Это так красиво.) |

**Сравнение в предложениях:**
- Tengo **tantos** libros que no sé dónde ponerlos. (У меня столько книг, что не знаю, куда их положить.) — количество
- Nunca he visto **tales** libros. (Я никогда не видел таких книг.) — качество

**Запомните:**
- **Tanto** = сколько (количество): ¿Cuánto? — **Tanto**.
- **Tal** = какой (качество): ¿Qué tipo? — **Tal**.

**Примеры контраста:**
- No necesito **tanta** ayuda. (Мне не нужно столько помощи.) — количество
- No necesito **tal** ayuda. (Мне не нужна такая помощь.) — качество/тип помощи`
        }
      ]
    },
    vocabulary: [
      { word: 'hogar', translation: 'дом (домашний очаг)', audioUrl: null },
      { word: 'piso', translation: 'этаж / квартира', audioUrl: null },
      { word: 'planta baja', translation: 'цокольный этаж', audioUrl: null },
      { word: 'apartamento', translation: 'квартира', audioUrl: null },
      { word: 'entrada', translation: 'вход', audioUrl: null },
      { word: 'escalera', translation: 'лестница', audioUrl: null },
      { word: 'pared', translation: 'стена', audioUrl: null },
      { word: 'techo', translation: 'потолок / крыша', audioUrl: null },
      { word: 'suelo', translation: 'пол', audioUrl: null },
      { word: 'habitación', translation: 'комната', audioUrl: null },
      { word: 'cuarto', translation: 'комната', audioUrl: null },
      { word: 'cuarto de baño', translation: 'ванная комната / туалет', audioUrl: null },
      { word: 'aseo', translation: 'туалет', audioUrl: null },
      { word: 'recibidor', translation: 'прихожая', audioUrl: null },
      { word: 'pasillo', translation: 'коридор', audioUrl: null },
      { word: 'dormitorio', translation: 'спальня', audioUrl: null },
      { word: 'salón', translation: 'гостиная', audioUrl: null },
      { word: 'comedor', translation: 'столовая', audioUrl: null },
      { word: 'cocina', translation: 'кухня', audioUrl: null },
      { word: 'despacho', translation: 'кабинет', audioUrl: null },
      { word: 'cortinas', translation: 'шторы', audioUrl: null },
      { word: 'alfombra', translation: 'ковер', audioUrl: null },
      { word: 'mueble', translation: 'мебель', audioUrl: null },
      { word: 'mesa', translation: 'стол', audioUrl: null },
      { word: 'mesita de noche', translation: 'прикроватная тумбочка', audioUrl: null },
      { word: 'escritorio', translation: 'письменный стол', audioUrl: null },
      { word: 'silla', translation: 'стул', audioUrl: null },
      { word: 'sillón', translation: 'кресло', audioUrl: null },
      { word: 'cama', translation: 'кровать', audioUrl: null },
      { word: 'sofá', translation: 'софа', audioUrl: null },
      { word: 'armario', translation: 'шкаф платяной', audioUrl: null },
      { word: 'armario empotrado', translation: 'встроенный шкаф', audioUrl: null },
      { word: 'estantería', translation: 'полка / стеллаж', audioUrl: null },
      { word: 'aparador', translation: 'буфет', audioUrl: null },
      { word: 'cómoda', translation: 'комод', audioUrl: null },
      { word: 'tocador', translation: 'туалетный столик', audioUrl: null },
      { word: 'espejo', translation: 'зеркало', audioUrl: null },
      { word: 'lámpara', translation: 'лампа', audioUrl: null },
      { word: 'lámpara de pie', translation: 'торшер', audioUrl: null },
      { word: 'araña', translation: 'люстра', audioUrl: null },
      { word: 'televisor', translation: 'телевизор', audioUrl: null },
      { word: 'ordenador', translation: 'компьютер', audioUrl: null },
      { word: 'electrodomésticos', translation: 'электробытовые приборы', audioUrl: null },
      { word: 'frigorífico', translation: 'холодильник', audioUrl: null },
      { word: 'horno microondas', translation: 'микроволновая печь', audioUrl: null },
      { word: 'cocina de gas', translation: 'газовая плита', audioUrl: null },
      { word: 'cocina eléctrica', translation: 'электроплита', audioUrl: null },
      { word: 'lavadora', translation: 'стиральная машина', audioUrl: null },
      { word: 'lavavajillas', translation: 'посудомоечная машина', audioUrl: null }
    ],
    readingText: {
      title: 'Buscando un apartamento',
      content: `**Ana:** Buenas tardes. Quiero ver el apartamento que está en alquiler.

**Agente:** ¡Buenas tardes! Claro, puedo enseñarle el piso. Es muy bonito. Está en la planta baja.

**Ana:** ¿Cuántas habitaciones hay?

**Agente:** Hay tres dormitorios, un salón grande, una cocina, un cuarto de baño y un pasillo. También hay un recibidor pequeño.

**Ana:** ¿Hay muebles?

**Agente:** Sí, hay muchos muebles. En el salón hay un sofá muy cómodo, dos sillones, una mesa y una televisor grande. También hay muchas estanterías.

**Ana:** ¿Y en la cocina?

**Agente:** En la cocina hay un frigorífico nuevo, una cocina eléctrica, un horno microondas, una lavadora y un lavavajillas. La cocina es muy moderna.

**Ana:** ¿Qué hay en los dormitorios?

**Agente:** En el dormitorio principal hay una cama grande, un armario empotrado, una cómoda y dos mesitas de noche. En los otros dormitorios hay camas pequeñas y armarios.

**Ana:** ¿Hay cortinas en las habitaciones?

**Agente:** Sí, hay cortinas en todas las habitaciones. Son muy bonitas.

**Ana:** ¿Y alfombras?

**Agente:** En el salón hay una alfombra grande. En los dormitorios no hay alfombras, pero el suelo es de madera.

**Ana:** ¿Cuántos cuartos de baño hay?

**Agente:** Hay solo un cuarto de baño, pero es muy espacioso. Tiene un espejo grande y mucha luz.

**Ana:** ¿Hay ascensor en el edificio?

**Agente:** No, no hay ascensor. Solo hay escaleras. Pero el apartamento está en la planta baja, no es un problema.

**Ana:** ¿Qué más hay en el apartamento?

**Agente:** En el pasillo hay lámparas. En el salón hay una araña muy elegante y una lámpara de pie. También hay un ordenador en uno de los dormitorios.

**Ana:** Me gusta mucho. Es muy acogedor. ¿Cuánto cuesta?

**Agente:** Cuesta setecientos cincuenta euros al mes.

**Ana:** Es un poco caro, pero el piso es muy bonito y hay muchos muebles. Quiero alquilarlo.

**Agente:** ¡Perfecto! Hay que firmar el contrato mañana.

**Ana:** Muy bien. Muchas gracias.

**Agente:** De nada. ¡Hasta mañana!`,
      translation: `**Анна:** Добрый день. Я хочу посмотреть квартиру, которая сдается в аренду.

**Агент:** Добрый день! Конечно, я могу показать вам квартиру. Она очень красивая. Находится на цокольном этаже.

**Анна:** Сколько комнат есть?

**Агент:** Есть три спальни, большая гостиная, кухня, ванная комната и коридор. Также есть маленькая прихожая.

**Анна:** Есть мебель?

**Агент:** Да, есть много мебели. В гостиной есть очень удобный диван, два кресла, стол и большой телевизор. Также есть много полок.

**Анна:** А на кухне?

**Агент:** На кухне есть новый холодильник, электроплита, микроволновая печь, стиральная машина и посудомоечная машина. Кухня очень современная.

**Анна:** Что есть в спальнях?

**Агент:** В главной спальне есть большая кровать, встроенный шкаф, комод и две прикроватные тумбочки. В других спальнях есть маленькие кровати и шкафы.

**Анна:** Есть шторы в комнатах?

**Агент:** Да, во всех комнатах есть шторы. Они очень красивые.

**Анна:** А ковры?

**Агент:** В гостиной есть большой ковер. В спальнях нет ковров, но пол деревянный.

**Анна:** Сколько ванных комнат есть?

**Агент:** Есть только одна ванная комната, но она очень просторная. В ней большое зеркало и много света.

**Анна:** В здании есть лифт?

**Агент:** Нет, лифта нет. Только лестница. Но квартира на цокольном этаже, это не проблема.

**Анна:** Что еще есть в квартире?

**Агент:** В коридоре есть лампы. В гостиной есть очень элегантная люстра и торшер. Также в одной из спален есть компьютер.

**Анна:** Мне очень нравится. Она очень уютная. Сколько стоит?

**Агент:** Стоит семьсот пятьдесят евро в месяц.

**Анна:** Это немного дорого, но квартира очень красивая и есть много мебели. Я хочу ее снять.

**Агент:** Отлично! Нужно подписать контракт завтра.

**Анна:** Хорошо. Большое спасибо.

**Агент:** Пожалуйста. До завтра!`,
      audioUrl: null,
      comprehensionQuestions: [
        { question: '¿Qué quiere ver Ana?', correct: 'el apartamento', alternatives: ['quiere ver el apartamento', 'el apartamento en alquiler', 'quiere ver el piso'] },
        { question: '¿Dónde está el apartamento?', correct: 'en la planta baja', alternatives: ['está en la planta baja', 'planta baja', 'en el primer piso'] },
        { question: '¿Cuántos dormitorios hay?', correct: 'tres', alternatives: ['hay tres dormitorios', 'tres dormitorios', '3'] },
        { question: '¿Qué hay en el salón?', correct: 'un sofá, dos sillones, una mesa, un televisor y estanterías', alternatives: ['sofá sillones mesa televisor estanterías', 'hay un sofá, dos sillones, una mesa, un televisor y estanterías'] },
        { question: '¿La cocina es moderna o antigua?', correct: 'moderna', alternatives: ['es moderna', 'la cocina es moderna', 'muy moderna'] },
        { question: '¿Qué electrodomésticos hay en la cocina?', correct: 'frigorífico, cocina eléctrica, horno microondas, lavadora y lavavajillas', alternatives: ['un frigorífico, una cocina eléctrica, un horno microondas, una lavadora y un lavavajillas', 'frigorífico cocina horno lavadora lavavajillas'] },
        { question: '¿Qué muebles hay en el dormitorio principal?', correct: 'una cama grande, un armario empotrado, una cómoda y dos mesitas de noche', alternatives: ['cama armario cómoda mesitas', 'hay una cama grande, un armario empotrado, una cómoda y dos mesitas de noche'] },
        { question: '¿Hay cortinas en las habitaciones?', correct: 'sí', alternatives: ['sí hay', 'hay cortinas', 'sí, hay cortinas'] },
        { question: '¿Hay alfombras en los dormitorios?', correct: 'no', alternatives: ['no hay', 'no hay alfombras', 'no, no hay alfombras'] },
        { question: '¿Dónde hay una alfombra?', correct: 'en el salón', alternatives: ['hay una alfombra en el salón', 'en la sala'] },
        { question: '¿Hay cuadros en las paredes?', correct: 'sí', alternatives: ['sí hay', 'hay cuadros', 'sí, hay cuadros'] },
        { question: '¿Hay lámparas en el apartamento?', correct: 'sí', alternatives: ['sí hay', 'hay lámparas', 'sí, hay lámparas'] },
        { question: '¿Hay ascensor en el edificio?', correct: 'no', alternatives: ['no hay', 'no hay ascensor', 'no, solo escalera'] },
        { question: '¿Cuánto cuesta el apartamento al mes?', correct: 'setecientos cincuenta euros', alternatives: ['750 euros', '750', 'setecientos cincuenta'] },
        { question: '¿Ana quiere alquilar el apartamento?', correct: 'sí', alternatives: ['sí quiere', 'quiere alquilarlo', 'sí, quiere alquilarlo'] }
      ]
    },
    exercises: ['ex-3-1-1', 'ex-3-1-2', 'ex-3-1-3', 'ex-3-1-4', 'ex-3-1-5']
  },
  'lesson-3-2': {
    id: 'lesson-3-2',
    title: 'Урок 2: Виды жилья и аренда помещения. Предлоги обстоятельства места и времени. Глаголы индивидуального спряжения в настоящем времени (Presente de Indicativo). Устойчивые выражения с глаголами poner, dar и hacer.',
    moduleId: 'module-3',
    grammar: {
      title: 'Предлоги обстоятельства места и времени',
      intro: `Ниже представлен словарь с основными предлогами и выражениями для обозначения места и времени.`,
      sections: [
        {
          id: 'prepositions',
          title: 'Предлоги обстоятельства места и времени',
          collapsible: true,
          defaultOpen: false,
          content: `| Испанское выражение | Перевод на русский язык |
|---------------------|-------------------------|
| cerca de la casa | рядом с домом |
| al lado de la estación | около вокзала |
| junto al monumento | у (рядом) памятника |
| lejos de la playa | далеко от пляжа |
| a la izquierda de la puerta | слева от двери |
| a la derecha de la ventana | справа от окна |
| frente al / enfrente del despacho | напротив кабинета |
| delante del / ante el cine | перед кинотеатром |
| detrás del / tras el hotel | позади (сзади) гостиницы |
| alrededor del / en torno al patio | вокруг двора |
| entre la ventana y la puerta | между окном и дверью |
| dentro del ascensor | внутри лифта |
| en el armario | в (внутри) шкафу |
| fuera de la oficina | вне (снаружи / за пределами) офиса |
| encima del ordenador | над (сверху) компьютером |
| debajo de la cama | под (снизу) кроватью |
| sobre la / en la mesa | на столе |
| en medio de la calle | посреди улицы |
| al fondo del parque | в глубине парка |
| antes de la operación | до (перед) операции |
| después del programa | после программы |
| durante las vacaciones | в течение (во время) отпуска |

**Употребление antes de / después de с инфинитивом:**

- antes de preguntar (перед тем, как спросить)
- antes de comer (перед едой)
- después de leer (после того, как кто-то прочитал)`
        },
        {
          id: 'irregular-verbs',
          title: 'Глаголы индивидуального спряжения в настоящем времени (Presente de Indicativo)',
          collapsible: true,
          defaultOpen: false,
          content: `| Инфинитив | Перевод | Yo | Tú | Él/Ella/Usted | Nosotros/as | Vosotros/as | Ellos/Ellas/Ustedes |
|-----------|---------|----|----|---------------|-------------|-------------|---------------------|
| caber | помещаться | quepo | cabes | cabe | cabemos | cabéis | caben |
| caer | падать | caigo | caes | cae | caemos | caéis | caen |
| dar | давать | doy | das | da | damos | dais | dan |
| hacer | делать | hago | haces | hace | hacemos | hacéis | hacen |
| poner | класть | pongo | pones | pone | ponemos | ponéis | ponen |
| saber | знать, уметь | sé | sabes | sabe | sabemos | sabéis | saben |
| salir | выходить | salgo | sales | sale | salimos | salís | salen |
| traer | приносить | traigo | traes | trae | traemos | traéis | traen |
| ver | видеть | veo | ves | ve | vemos | veis | ven |`
        },
        {
          id: 'expressions',
          title: 'Устойчивые выражения с глаголами poner, dar и hacer',
          collapsible: true,
          defaultOpen: false,
          content: `**PONER:**
- poner la mesa — накрывать на стол
- poner orden — наводить порядок
- poner la radio (la tele) — включать радио (телевизор)

**DAR:**
- dar un paseo / una vuelta — прогуляться
- dar un beso — поцеловать
- dar las gracias — благодарить
- dar recuerdos — передавать привет
- dar clases — проводить занятия
- dar una fiesta — устраивать праздник
- el reloj da las tres — часы бьют 3 часа
- las ventanas dan al patio — окна выходят во двор

**HACER:**
- hacer preguntas — задавать вопросы
- hacer la cama — убирать (заправлять) постель
- hacer la maleta — собирать чемодан
- hacer ruido — шуметь
- hacer caso a / de — обращать внимание на кого-л. / на что-л.`
        }
      ]
    },
    vocabulary: [
      // Предлоги и выражения места
      { word: 'cerca de', translation: 'рядом с', audioUrl: null },
      { word: 'al lado de', translation: 'около', audioUrl: null },
      { word: 'junto a', translation: 'у, рядом', audioUrl: null },
      { word: 'lejos de', translation: 'далеко от', audioUrl: null },
      { word: 'a la izquierda de', translation: 'слева от', audioUrl: null },
      { word: 'a la derecha de', translation: 'справа от', audioUrl: null },
      { word: 'frente a', translation: 'напротив', audioUrl: null },
      { word: 'enfrente de', translation: 'напротив', audioUrl: null },
      { word: 'delante de', translation: 'перед', audioUrl: null },
      { word: 'ante', translation: 'перед', audioUrl: null },
      { word: 'detrás de', translation: 'позади, сзади', audioUrl: null },
      { word: 'tras', translation: 'позади', audioUrl: null },
      { word: 'alrededor de', translation: 'вокруг', audioUrl: null },
      { word: 'en torno a', translation: 'вокруг', audioUrl: null },
      { word: 'entre', translation: 'между', audioUrl: null },
      { word: 'dentro de', translation: 'внутри', audioUrl: null },
      { word: 'en', translation: 'в, на', audioUrl: null },
      { word: 'fuera de', translation: 'вне, снаружи', audioUrl: null },
      { word: 'encima de', translation: 'над, сверху', audioUrl: null },
      { word: 'debajo de', translation: 'под, снизу', audioUrl: null },
      { word: 'sobre', translation: 'на', audioUrl: null },
      { word: 'en medio de', translation: 'посреди', audioUrl: null },
      { word: 'al fondo de', translation: 'в глубине', audioUrl: null },

      // Предлоги времени
      { word: 'antes de', translation: 'до, перед', audioUrl: null },
      { word: 'después de', translation: 'после', audioUrl: null },
      { word: 'durante', translation: 'в течение, во время', audioUrl: null },

      // Существительные для примеров
      { word: 'casa', translation: 'дом', audioUrl: null },
      { word: 'estación', translation: 'вокзал', audioUrl: null },
      { word: 'monumento', translation: 'памятник', audioUrl: null },
      { word: 'playa', translation: 'пляж', audioUrl: null },
      { word: 'puerta', translation: 'дверь', audioUrl: null },
      { word: 'ventana', translation: 'окно', audioUrl: null },
      { word: 'despacho', translation: 'кабинет', audioUrl: null },
      { word: 'cine', translation: 'кинотеатр', audioUrl: null },
      { word: 'hotel', translation: 'гостиница', audioUrl: null },
      { word: 'patio', translation: 'двор', audioUrl: null },
      { word: 'ascensor', translation: 'лифт', audioUrl: null },
      { word: 'armario', translation: 'шкаф', audioUrl: null },
      { word: 'oficina', translation: 'офис', audioUrl: null },
      { word: 'ordenador', translation: 'компьютер', audioUrl: null },
      { word: 'cama', translation: 'кровать', audioUrl: null },
      { word: 'mesa', translation: 'стол', audioUrl: null },
      { word: 'calle', translation: 'улица', audioUrl: null },
      { word: 'parque', translation: 'парк', audioUrl: null },
      { word: 'operación', translation: 'операция', audioUrl: null },
      { word: 'programa', translation: 'программа', audioUrl: null },
      { word: 'vacaciones', translation: 'отпуск, каникулы', audioUrl: null },

      // Глаголы индивидуального спряжения
      { word: 'caber', translation: 'помещаться', audioUrl: null },
      { word: 'caer', translation: 'падать', audioUrl: null },
      { word: 'dar', translation: 'давать', audioUrl: null },
      { word: 'hacer', translation: 'делать', audioUrl: null },
      { word: 'poner', translation: 'класть, ставить', audioUrl: null },
      { word: 'saber', translation: 'знать, уметь', audioUrl: null },
      { word: 'salir', translation: 'выходить', audioUrl: null },
      { word: 'traer', translation: 'приносить', audioUrl: null },
      { word: 'ver', translation: 'видеть', audioUrl: null },

      // Выражения с глаголами
      { word: 'poner la mesa', translation: 'накрывать на стол', audioUrl: null },
      { word: 'poner orden', translation: 'наводить порядок', audioUrl: null },
      { word: 'poner la radio', translation: 'включать радио', audioUrl: null },
      { word: 'dar un paseo', translation: 'прогуляться', audioUrl: null },
      { word: 'dar una vuelta', translation: 'прогуляться', audioUrl: null },
      { word: 'dar un beso', translation: 'поцеловать', audioUrl: null },
      { word: 'dar las gracias', translation: 'благодарить', audioUrl: null },
      { word: 'dar recuerdos', translation: 'передавать привет', audioUrl: null },
      { word: 'dar clases', translation: 'проводить занятия', audioUrl: null },
      { word: 'dar una fiesta', translation: 'устраивать праздник', audioUrl: null },
      { word: 'hacer preguntas', translation: 'задавать вопросы', audioUrl: null },
      { word: 'hacer la cama', translation: 'убирать постель', audioUrl: null },
      { word: 'hacer la maleta', translation: 'собирать чемодан', audioUrl: null },
      { word: 'hacer ruido', translation: 'шуметь', audioUrl: null },
      { word: 'hacer caso', translation: 'обращать внимание', audioUrl: null },

      // Недвижимость и аренда жилья
      { word: 'vivienda', translation: 'жилье', audioUrl: null },
      { word: 'inmobiliario', translation: 'недвижимость', audioUrl: null },
      { word: 'anuncio', translation: 'объявление / реклама', audioUrl: null },
      { word: 'propietario', translation: 'собственник', audioUrl: null },
      { word: 'edificio', translation: 'здание', audioUrl: null },
      { word: 'espacio', translation: 'помещение', audioUrl: null },
      { word: 'local', translation: 'помещение (для учреждения и т.п.)', audioUrl: null },
      { word: 'alquilar', translation: 'арендовать (помещение) / сдать в аренду', audioUrl: null },
      { word: 'alquiler', translation: 'арендная плата', audioUrl: null },
      { word: 'superficie', translation: 'площадь', audioUrl: null },
      { word: 'adosado', translation: 'таунхаус', audioUrl: null },
      { word: 'dúplex', translation: 'двухуровневая квартира', audioUrl: null },
      { word: 'estudio', translation: 'однокомнатная квартира / студия', audioUrl: null },
      { word: 'chalé', translation: 'загородный дом', audioUrl: null },
      { word: 'garaje', translation: 'гараж', audioUrl: null },
      { word: 'portal', translation: 'подъезд', audioUrl: null },
      { word: 'portero', translation: 'консьерж', audioUrl: null },
      { word: 'ducha', translation: 'душ', audioUrl: null },
      { word: 'bañera', translation: 'ванна', audioUrl: null },
      { word: 'calefacción', translation: 'отопление', audioUrl: null },
      { word: 'terraza', translation: 'лоджия', audioUrl: null },
      { word: 'reparación', translation: 'ремонт', audioUrl: null },
      { word: 'reforma', translation: 'капитальный ремонт', audioUrl: null },
      { word: 'barrio', translation: 'район', audioUrl: null },
      { word: 'zona', translation: 'пространство / район / участок', audioUrl: null },
      { word: 'agencia inmobiliaria', translation: 'агентство недвижимости', audioUrl: null },
      { word: 'alquilar la vivienda', translation: 'снять (сдать) жилье', audioUrl: null },
      { word: 'aire acondicionado', translation: 'кондиционер', audioUrl: null },
      { word: 'metros cuadrados', translation: 'квадратные метры', audioUrl: null },
      { word: 'apartamento en alquiler', translation: 'квартира в аренду', audioUrl: null },
      { word: 'apartamento en venta', translation: 'квартира на продажу', audioUrl: null },
      { word: 'piso amueblado', translation: 'меблированная квартира', audioUrl: null },
      { word: 'piso exterior', translation: 'квартира с окнами на улицу', audioUrl: null },
      { word: 'piso interior', translation: 'квартира с окнами во двор', audioUrl: null },
      { word: 'piso reparado', translation: 'квартира после ремонта', audioUrl: null },
      { word: 'portero automático', translation: 'домофон', audioUrl: null },
      { word: 'vidrios dobles', translation: 'двойные стеклопакеты', audioUrl: null },
      { word: 'aparcamiento subterráneo', translation: 'подземная парковка', audioUrl: null },
      { word: 'casa rural', translation: 'сельский дом', audioUrl: null }
    ],
    readingText: {
      title: 'Buscando piso en Madrid',
      content: `Laura y Miguel buscan un apartamento en alquiler en Madrid. Ellos viven con los padres de Laura, pero quieren alquilar su propia vivienda. Hoy visitan una agencia inmobiliaria en el centro de la ciudad.

**Agente:** Buenos días. ¿En qué puedo ayudarles?

**Laura:** Buenos días. Buscamos un piso en alquiler. Queremos un apartamento con dos dormitorios.

**Agente:** Perfecto. ¿En qué barrio prefieren vivir?

**Miguel:** Preferimos un barrio cerca del centro, pero no queremos un piso muy caro.

**Agente:** Entiendo. Tengo varios pisos en alquiler. Hay un apartamento muy bonito al lado del parque del Retiro. Está en un edificio moderno con ascensor.

**Laura:** ¿Cuántos metros cuadrados tiene?

**Agente:** Tiene ochenta metros cuadrados. Hay un salón grande, dos dormitorios, una cocina, un baño y una terraza pequeña.

**Miguel:** ¿El piso está amueblado?

**Agente:** Sí, es un piso amueblado. Hay muebles en todos los dormitorios. En el salón hay un sofá, una mesa y sillas. También hay una televisión grande.

**Laura:** ¿Y la cocina? ¿Qué hay en la cocina?

**Agente:** En la cocina hay un frigorífico nuevo, una cocina de gas, un horno y un lavavajillas. También hay una lavadora.

**Miguel:** Perfecto. ¿El apartamento tiene calefacción?

**Agente:** Sí, claro. Tiene calefacción y aire acondicionado. En invierno hace mucho frío, y en verano hace mucho calor en Madrid.

**Laura:** ¿Es un piso exterior o interior?

**Agente:** Es un piso exterior. Las ventanas del salón y del dormitorio principal dan a la calle. El otro dormitorio da al patio interior del edificio.

**Miguel:** ¿Hay garaje o aparcamiento?

**Agente:** Sí, el edificio tiene aparcamiento subterráneo. Caben dos coches. El aparcamiento está debajo del edificio.

**Laura:** ¿En qué piso está el apartamento?

**Agente:** Está en el tercer piso. El edificio tiene ascensor y portero automático. También hay un portero que trabaja durante el día.

**Miguel:** ¿Qué hay cerca del edificio?

**Agente:** El edificio está en una zona muy buena. Delante del edificio hay una parada de autobús. A la derecha hay un supermercado grande, y a la izquierda hay una farmacia. Detrás del edificio está el parque. Entre el parque y la calle principal hay muchas tiendas y restaurantes.

**Laura:** Me gusta mucho. ¿Cuánto cuesta el alquiler?

**Agente:** El alquiler es de novecientos euros al mes. El precio incluye el aparcamiento, pero no incluye la calefacción.

**Miguel:** Es un poco caro, pero el piso es muy bonito.

**Agente:** ¿Quieren ver el piso? Puedo llamar al propietario. Sé que él está en casa hoy.

**Laura:** Sí, claro. Queremos verlo. ¿Cuándo podemos ir?

**Agente:** Podemos ir ahora. Yo salgo de la agencia en cinco minutos y vamos juntos. El edificio está muy cerca de aquí. ¿Traen el coche?

**Miguel:** No, venimos en metro. ¿Está lejos?

**Agente:** No, no está lejos. Podemos ir a pie. Solo cinco minutos.

**Laura:** Perfecto. Antes de ver el piso, tengo algunas preguntas. ¿El piso tiene vidrios dobles?

**Agente:** Sí, todas las ventanas tienen vidrios dobles. No cae mucho ruido de la calle.

**Miguel:** ¿Y el baño? ¿Tiene ducha o bañera?

**Agente:** Tiene una ducha moderna. No hay bañera, pero la ducha es muy grande y cómoda.

**Laura:** Una pregunta más. ¿Cuándo podemos hacer la mudanza? ¿El piso está libre?

**Agente:** El piso está libre desde el primero de marzo. El propietario hace una pequeña reparación en la cocina durante esta semana, pero después está listo.

**Miguel:** Muy bien. Vamos a ver el piso. Creo que es perfecto para nosotros.

**Agente:** Excelente. Vamos. Durante el camino puedo dar más información sobre el barrio y sobre otros servicios que hay en la zona.`,
      translation: `Лаура и Мигель ищут квартиру в аренду в Мадриде. Они живут с родителями Лауры, но хотят снять собственное жилье. Сегодня они посещают агентство недвижимости в центре города.

**Агент:** Доброе утро. Чем могу помочь?

**Лаура:** Доброе утро. Мы ищем квартиру в аренду. Хотим квартиру с двумя спальнями.

**Агент:** Отлично. В каком районе предпочитаете жить?

**Мигель:** Предпочитаем район рядом с центром, но не хотим очень дорогую квартиру.

**Агент:** Понимаю. У меня есть несколько квартир в аренду. Есть очень красивая квартира рядом с парком Ретиро. Она в современном здании с лифтом.

**Лаура:** Сколько квадратных метров?

**Агент:** Восемьдесят квадратных метров. Есть большая гостиная, две спальни, кухня, ванная комната и небольшая лоджия.

**Мигель:** Квартира меблирована?

**Агент:** Да, это меблированная квартира. Есть мебель во всех спальнях. В гостиной есть диван, стол и стулья. Также есть большой телевизор.

**Лаура:** А кухня? Что есть на кухне?

**Агент:** На кухне есть новый холодильник, газовая плита, духовка и посудомоечная машина. Также есть стиральная машина.

**Мигель:** Отлично. В квартире есть отопление?

**Агент:** Да, конечно. Есть отопление и кондиционер. Зимой очень холодно, а летом очень жарко в Мадриде.

**Лаура:** Это квартира с окнами на улицу или во двор?

**Агент:** Это квартира с окнами на улицу. Окна гостиной и главной спальни выходят на улицу. Другая спальня выходит во внутренний двор здания.

**Мигель:** Есть гараж или парковка?

**Агент:** Да, в здании есть подземная парковка. Помещаются две машины. Парковка находится под зданием.

**Лаура:** На каком этаже квартира?

**Агент:** На третьем этаже. В здании есть лифт и домофон. Также есть консьерж, который работает в течение дня.

**Мигель:** Что находится рядом со зданием?

**Агент:** Здание находится в очень хорошем районе. Перед зданием есть автобусная остановка. Справа большой супермаркет, а слева аптека. Позади здания парк. Между парком и главной улицей много магазинов и ресторанов.

**Лаура:** Мне очень нравится. Сколько стоит аренда?

**Агент:** Аренда девятьсот евро в месяц. Цена включает парковку, но не включает отопление.

**Мигель:** Это немного дорого, но квартира очень красивая.

**Агент:** Хотите посмотреть квартиру? Могу позвонить собственнику. Я знаю, что он дома сегодня.

**Лаура:** Да, конечно. Хотим посмотреть. Когда можем пойти?

**Агент:** Можем пойти сейчас. Я выхожу из агентства через пять минут и идем вместе. Здание очень близко отсюда. Вы на машине?

**Мигель:** Нет, мы на метро. Это далеко?

**Агент:** Нет, не далеко. Можем пойти пешком. Всего пять минут.

**Лаура:** Отлично. Перед тем как посмотреть квартиру, у меня есть несколько вопросов. В квартире двойные стеклопакеты?

**Агент:** Да, все окна с двойными стеклопакетами. Не проникает много шума с улицы.

**Мигель:** А ванная? Там душ или ванна?

**Агент:** Там современный душ. Нет ванны, но душ очень большой и удобный.

**Лаура:** Еще один вопрос. Когда можем переехать? Квартира свободна?

**Агент:** Квартира свободна с первого марта. Собственник делает небольшой ремонт на кухне в течение этой недели, но потом она готова.

**Мигель:** Очень хорошо. Идем посмотреть квартиру. Думаю, она идеальна для нас.

**Агент:** Отлично. Идем. По дороге могу дать больше информации о районе и о других услугах, которые есть в этом районе.`,
      audioUrl: null,
      comprehensionQuestions: [
        { question: '¿Qué buscan Laura y Miguel?', correct: 'un piso en alquiler', alternatives: ['buscan un piso en alquiler', 'un apartamento en alquiler', 'buscan un apartamento en alquiler'] },
        { question: '¿Dónde viven Laura y Miguel ahora?', correct: 'con los padres de Laura', alternatives: ['viven con los padres de Laura', 'con los padres', 'con sus padres'] },
        { question: '¿Cuántos dormitorios quieren Laura y Miguel?', correct: 'dos', alternatives: ['dos dormitorios', '2', '2 dormitorios'] },
        { question: '¿Cuántos metros cuadrados tiene el piso?', correct: 'ochenta', alternatives: ['ochenta metros cuadrados', '80', '80 metros cuadrados'] },
        { question: '¿El piso está amueblado o sin muebles?', correct: 'amueblado', alternatives: ['está amueblado', 'es un piso amueblado', 'tiene muebles'] },
        { question: '¿Qué electrodomésticos hay en la cocina?', correct: 'frigorífico, cocina de gas, horno, lavavajillas y lavadora', alternatives: ['un frigorífico, una cocina de gas, un horno, un lavavajillas y una lavadora', 'frigorífico cocina horno lavavajillas lavadora'] },
        { question: '¿El piso tiene calefacción?', correct: 'sí', alternatives: ['sí tiene', 'tiene calefacción', 'sí, tiene calefacción'] },
        { question: '¿Es un piso exterior o interior?', correct: 'exterior', alternatives: ['es un piso exterior', 'es exterior', 'piso exterior'] },
        { question: '¿En qué piso está el apartamento?', correct: 'en el tercer piso', alternatives: ['tercer piso', 'en el tercero', 'en el 3'] },
        { question: '¿El edificio tiene ascensor?', correct: 'sí', alternatives: ['sí tiene', 'tiene ascensor', 'sí, tiene ascensor'] },
        { question: '¿Qué hay delante del edificio?', correct: 'una parada de autobús', alternatives: ['hay una parada de autobús', 'parada de autobús', 'una parada'] },
        { question: '¿Cuánto cuesta el alquiler al mes?', correct: 'novecientos euros', alternatives: ['900 euros', '900', 'novecientos'] },
        { question: '¿El precio incluye el aparcamiento?', correct: 'sí', alternatives: ['sí incluye', 'incluye el aparcamiento', 'sí, incluye el aparcamiento'] },
        { question: '¿Cuándo está libre el piso?', correct: 'desde el primero de marzo', alternatives: ['el primero de marzo', 'el 1 de marzo', 'desde marzo'] },
        { question: '¿Cómo van a ir a ver el piso?', correct: 'a pie', alternatives: ['van a pie', 'andando', 'caminando'] }
      ]
    },
    exercises: ['ex-3-2-1', 'ex-3-2-2', 'ex-3-2-3', 'ex-3-2-4', 'ex-3-2-5', 'ex-3-2-6', 'ex-3-2-7', 'ex-3-2-8', 'ex-3-2-9', 'ex-3-2-10', 'ex-3-2-11']
  },
  'lesson-3-3': {
    id: 'lesson-3-3',
    title: 'Урок 3: Местоимения — косвенные дополнения: дательный падеж. Глагол gustar. Местоимения — прямые дополнения: винительный падеж. Одновременное употребление местоимений прямого и косвенного дополнения',
    moduleId: 'module-3',
    grammar: {
      title: 'Местоимения и глагол gustar',
      intro: `Личные местоимения в испанском языке изменяются по падежам. Дательный падеж личных местоимений может быть образован с помощью предлога **a**. Также в испанском языке существует беспредложная форма личных местоимений в дательном падеже.`,
      sections: [
        {
          id: 'pronoun-forms',
          title: 'Формы местоимений в дательном падеже',
          collapsible: true,
          defaultOpen: false,
          content: `| Именительный падеж (Кто?) | Дательный падеж (Кому? Чему?) |
|---------------------------|-------------------------------|
| yo | me (мне) / a mí (мне) |
| tú | te (тебе) / a ti (тебе) |
| él / ella / usted | le (ему / ей / Вам) / a él / a ella / a usted (ему / ей / Вам) |
| nosotros (-as) | nos (нам) / a nosotros (-as) (нам) |
| vosotros (-as) | os (вам) / a vosotros (-as) (вам) |
| ellos (-as) / ustedes | les (им / Вам) / a ellos (-as) / a ustedes (им / Вам) |`
        },
        {
          id: 'word-order',
          title: 'Порядок слов и обязательность беспредложной формы',
          collapsible: true,
          defaultOpen: false,
          content: `**Беспредложная форма личных местоимений в дательном падеже ставится перед глаголом в личной форме**; в отрицательном предложении — после отрицания **no**:

- ¿Qué **me** dices? (Что ты **мне** говоришь?)
- No **te** digo nada. (Я **тебе** ничего не говорю.)

**Беспредложная форма дательного падежа личных местоимений употребляется обязательно.** Предложная форма не употребляется самостоятельно, а лишь вместе с беспредложной для уточнения. Как правило, требуется уточнение для 3-го лица, так как форма единственного числа **le** означает *ему / ей / Вам*, а форма множественного числа **les** — *им / Вам*.

### Примеры:

| Español | Русский |
|---------|---------|
| Yo **te** compro un café. | Я покупаю **тебе** кофе. |
| Mi madre **nos** da las gracias. | Моя мама благодарит **нас**. |
| ¿Por qué no **me** escribes? | Почему ты **мне** не пишешь? |
| Pablo **le** habla **a su hermana** de la fiesta. | Пабло говорит **своей сестре** о празднике. (Уточнение *a su hermana* для *le*) |
| Nosotros **les** explicamos la lección **a los estudiantes**. | Мы объясняем урок **студентам**. (Уточнение *a los estudiantes* для *les*) |
| El camarero **os** trae la cuenta. | Официант приносит **вам** (vosotros) счет. |
| Ella no **le** da la mano **a él**. | Она не подает руку **ему**. (Уточнение *a él* для *le*) |`
        },
        {
          id: 'non-finite-verbs',
          title: 'Местоимения с неличными формами глагола',
          collapsible: true,
          defaultOpen: false,
          content: `Беспредложная форма личных местоимений с **неличными формами глагола (инфинитив, герундий)** ставится **после** них и **пишется слитно**:

- Quiero hacer**te** un regalo. (Хочу сделать **тебе** подарок.)
- Mi padre está explicándo**nos** la ruta. (Мой папа объясняет **нам** маршрут.)
- Voy a dar**les** el dinero **a mis amigos**. (Я собираюсь дать **им** деньги моим друзьям.)`
        },
        {
          id: 'gustar-verb',
          title: 'Глагол GUSTAR',
          collapsible: true,
          defaultOpen: false,
          content: `Испанский глагол **gustar** соответствует русскому глаголу **нравиться, любить** (о неодушевленных предметах):

| Español | Русский |
|---------|---------|
| Nos gusta el libro. | Мы любим книгу. / Нам нравится книга. |
| Me gusta Juan. | Мне нравится Хуан. |

Глагол **gustar** сопровождается **местоимением-дополнением дательного падежа** (me, te, le, nos, os, les), которое **обязательно** употребляется в предложении.

Подлежащее, выраженное существительным, при глаголе gustar всегда имеет **определенный артикль**. Глагол gustar преимущественно употребляется в **3-м лице единственного или множественного числа**, в зависимости от числа существительного-подлежащего:

| Español | Русский |
|---------|---------|
| No me gusta el agua. | Мне не нравится вода. |
| Te gustan los perros pequeños. | Тебе нравятся (ты любишь) маленькие собаки. |

### Gustar с инфинитивом

Если подлежащее выражено **инфинитивом**, то глагол gustar имеет форму **3-го лица единственного числа**:

| Español | Русский |
|---------|---------|
| Me gusta bailar. | Я люблю танцевать. |
| A ellos les gusta estudiar español. | Им нравится изучать испанский. |

### Gustar с личным местоимением

В том случае, если подлежащее выражено **личным местоимением**, оно определяет лицо и число глагола gustar:

| Español | Русский |
|---------|---------|
| Tú me gustas mucho. | Ты мне очень нравишься. |

### Различие между gustar и querer

Следует различать глаголы **gustar** и **querer**. Посмотрите на примеры и сравните:

| GUSTAR (нравиться) | QUERER (хотеть, любить) |
|-------------------|------------------------|
| Me gustan los zapatos. (Мне нравятся туфли/обувь.) | Quiero un café. (Я хочу кофе.) |
| A mi hermana le gusta este color. (Моей сестре нравится этот цвет.) | Mi madre quiere mucho a mi padre. (Моя мама очень любит моего папу.) |
| A usted le gusta la calma. (Вы любите спокойствие.) | Mi amigo quiere viajar a Madrid. (Мой друг хочет поехать в Мадрид.) |`
        },
        {
          id: 'direct-object-pronouns',
          title: 'Местоимения — прямые дополнения: винительный падеж',
          collapsible: true,
          defaultOpen: false,
          content: `Беспредложные формы личных местоимений винительного падежа используются для обозначения **прямого дополнения** (отвечает на вопрос Кого? Что?).

| Именительный падеж (Кто?) | Винительный падеж (Кого? Что?) |
|---------------------------|-------------------------------|
| yo | me (меня) |
| tú | te (тебя) |
| él | lo (его, это) |
| ella | la (её, это) |
| usted | lo / la (Вас) |
| nosotros (-as) | nos (нас) |
| vosotros (-as) | os (вас) |
| ellos | los (их, это) |
| ellas | las (их, это) |
| ustedes | los / las (Вас) |

### Употребление lo

Местоимение **lo** используется:
1. **Для мужского рода единственного числа** (одушевленные и неодушевленные предметы):
   - ¿Ves el libro? — Sí, **lo** veo. (Видишь книгу? — Да, вижу **её**.)
   - ¿Conoces a Juan? — Sí, **lo** conozco. (Знаешь Хуана? — Да, знаю **его**.)

2. **В значении "это", "об этом"**:
   - **Lo** sé. (Я знаю **это**.)
   - No **lo** entiendo. (Я не понимаю **этого**.)

**Примечание**: В некоторых регионах Испании вместо **lo** для одушевленных существительных мужского рода употребляется **le**:
- ¿Conoces a mi hermano? — Sí, **le** conozco. (Знаешь моего брата? — Да, знаю **его**.)

### Порядок слов

Беспредложные формы личных местоимений винительного падежа **ставятся перед глаголом** в личной форме. В отрицательном предложении — **после отрицания no**:

- Mi amiga **me** llama. (Моя подруга звонит **мне**.)
- No **te** veo. (Я **тебя** не вижу.)
- Carlos **la** compra. (Карлос покупает **её** / **это**.)
- Ellos no **nos** entienden. (Они не понимают **нас**.)

### С неличными формами глагола

С **инфинитивом и герундием** местоимения ставятся **после** них и **пишутся слитно**:

- Quiero comprar**lo**. (Хочу купить **это/его**.)
- Estoy leyéndo**la**. (Я читаю **её** / **это**. — про книгу)
- Voy a llamar**te**. (Я собираюсь позвонить **тебе**.)

### Примеры

| Español | Русский |
|---------|---------|
| ¿Dónde está mi bolso? — **Lo** tengo yo. | Где моя сумка? — **Она** у меня. |
| ¿Ves a María? — Sí, **la** veo. | Видишь Марию? — Да, вижу **её**. |
| ¿Compras los libros? — Sí, **los** compro. | Покупаешь книги? — Да, покупаю **их**. |
| ¿Me escuchas? | Ты **меня** слушаешь? |
| Ellos no **nos** invitan a la fiesta. | Они не приглашают **нас** на праздник. |`
        },
        {
          id: 'combined-pronouns',
          title: 'Одновременное употребление местоимений прямого и косвенного дополнения',
          collapsible: true,
          defaultOpen: false,
          content: `Когда в предложении одновременно используются местоимения **дательного** (косвенное дополнение) и **винительного** (прямое дополнение) падежей, они ставятся **перед глаголом** в следующем порядке:

**ДАТЕЛЬНЫЙ + ВИНИТЕЛЬНЫЙ** (в отличие от русского языка, где порядок обычно обратный)

### Порядок местоимений

| Дательный падеж (Кому?) | Винительный падеж (Что? Кого?) |
|------------------------|-------------------------------|
| me | lo, la, los, las |
| te | lo, la, los, las |
| **se** | lo, la, los, las |
| nos | lo, la, los, las |
| os | lo, la, los, las |
| **se** | lo, la, los, las |

### Важное правило: le/les → se

Когда местоимения **le** или **les** (дательный падеж) употребляются вместе с местоимениями **lo, la, los, las** (винительный падеж), **le** и **les** заменяются на **se**:

- le + lo/la/los/las → **se** lo/la/los/las
- les + lo/la/los/las → **se** lo/la/los/las

### Примеры

| Español | Русский |
|---------|---------|
| Mi madre **me lo** da. | Моя мама даёт **это мне** / даёт **мне это**. |
| Te compro un regalo. → **Te lo** compro. | Покупаю тебе подарок. → Покупаю **его тебе** / **тебе его**. |
| ¿Le das el libro a Juan? → Sí, **se lo** doy. | Даёшь книгу Хуану? — Да, даю **её ему**. |
| Les explico la lección. → **Se la** explico. | Объясняю им урок. → Объясняю **его им**. |
| ¿Nos traes las llaves? — Sí, **os las** traigo. | Приносишь нам ключи? — Да, приношу **их вам**. |
| Ella le compra un café a su amiga. → Ella **se lo** compra. | Она покупает кофе своей подруге. → Она покупает **его ей**. |

### С неличными формами глагола

С инфинитивом и герундием местоимения ставятся **после** них и **пишутся слитно**:

- Quiero dar**te lo**. (Хочу дать **это тебе**.)
- Voy a comprar**se lo** a mi padre. (Собираюсь купить **это ему** для моего отца.)
- Estoy explicándo**se la**. (Я объясняю **это им/ему/ей**.)

### Уточнение для se

Так как **se** заменяет и **le**, и **les**, для уточнения часто добавляются предложные конструкции **a él, a ella, a usted, a ellos, a ellas, a ustedes**:

- **Se lo** doy **a él**. (Даю **это ему**.)
- **Se la** explico **a ustedes**. (Объясняю **это Вам**.)
- Mi hermano **se los** compra **a sus amigos**. (Мой брат покупает **их своим друзьям**.)`
        }
      ]
    },
    vocabulary: [],
    exercises: ['ex-3-3-1', 'ex-3-3-2', 'ex-3-3-3', 'ex-3-3-4', 'ex-3-3-5', 'ex-3-3-6', 'ex-3-3-7', 'ex-3-3-8', 'ex-3-3-9', 'ex-3-3-10', 'ex-3-3-11', 'ex-3-3-12', 'ex-3-3-13', 'ex-3-3-14', 'ex-3-3-15']
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
      translation: 'Напряженная неделя\n\nЭта неделя была очень продуктивной для меня. В понедельник я начала новый проект на работе. Это интересный вызов, и я очень мотивирована.\n\nВо вторник я пошла в спортзал впервые за несколько месяцев. Мне было очень тяжело, потому что я была не в форме, но я чувствовала себя очень хорошо после. Я решила ходить три раза в неделю с этого момента.\n\nВ среду моя сестра приехала из Барселоны. Прошло много времени с тех пор, как я ее видела. Мы поужинали вместе в моем любимом ресторане и проговорили часами. Она рассказала мне о своей новой работе и планах на будущее.\n\nВ четверг я закончила важный отчет, который готовила неделями. Мой начальник прочитал его и сказал, что он очень хорошо сделан. Он похвалил меня перед всей командой. Я почувствовала себя очень гордой.\n\nСегодня пятница, и я получила зарплату. Я также купила билеты на отпуск в Италии в следующем месяце. Я никогда там не была и очень взволнована. Я забронировала отель в Риме и составила список всех мест, которые хочу посетить.\n\nА ты? Что ты делал на этой неделе? У тебя был какой-нибудь интересный опыт?',
      audioUrl: '/audio/lesson-4-1-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Esta semana ha sido muy productiva para mí.' },
        { start: 5, end: 10, text: 'El lunes he empezado un nuevo proyecto en el trabajo.' },
        { start: 10, end: 15, text: 'El martes he ido al gimnasio por primera vez en meses.' },
        { start: 15, end: 20, text: 'El miércoles mi hermana ha llegado de Barcelona.' }
      ]
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
      translation: 'Мой отпуск в Италии\n\nПрошлым летом я совершила путешествие своей мечты: поехала в Италию с моей лучшей подругой Лаурой. Это был абсолютно незабываемый опыт.\n\nМы уехали из Мадрида 15 июля. Нашим первым пунктом назначения был Рим. Мы прибыли днем и пошли прямо в отель. Это был маленький отель рядом с Ватиканом, очень уютный. В тот вечер мы гуляли по району и ужинали в традиционной траттории. Мы ели вкусную пиццу и пасту.\n\nНа следующий день мы посетили Колизей. Это было впечатляюще! Мы также увидели Римский Форум и фонтан Треви. Мы бросили монеты в фонтан и загадали желания. Лаура попросила найти любовь, а я попросила вернуться в Италию когда-нибудь.\n\nПосле трех дней в Риме мы сели на поезд во Флоренцию. Город нас полностью очаровал. Мы посетили галерею Уффици и увидели шедевры Боттичелли и Леонардо да Винчи. Лаура купила много сувениров: кожаные сумки, украшения и шоколад.\n\nНашим последним пунктом назначения была Венеция. Мы прибыли на вапоретто из аэропорта. Плавучий город оставил нас без слов. Мы катались на гондоле по каналам, посетили базилику Сан-Марко и терялись по очаровательным улочкам.\n\nПутешествие длилось десять дней. Когда мы вернулись в Испанию, мы были уставшими, но счастливыми. Мы до сих пор говорим о том путешествии и смотрим фотографии с ностальгией. Я определенно хочу вернуться.',
      audioUrl: '/audio/lesson-4-2-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'El verano pasado realicé el viaje de mis sueños.' },
        { start: 5, end: 10, text: 'Fui a Italia con mi mejor amiga Laura.' },
        { start: 10, end: 15, text: 'Nuestro primer destino fue Roma.' },
        { start: 15, end: 20, text: 'Visitamos el Coliseo. ¡Fue impresionante!' }
      ]
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
      translation: 'Воспоминания о моем детстве\n\nКогда я думаю о своем детстве, я всегда улыбаюсь. Это были очень счастливые и простые времена.\n\nЯ жил в маленькой деревне недалеко от Гранады. Наш дом был старинным, но уютным. У него был огромный сад, где мы с братом играли часами. Там было большое дерево - вековая олива - где мы построили дом на дереве. Это было наше секретное место.\n\nКаждый день я вставал рано. Моя мать готовила завтрак, пока я одевался. Обычно мы пили горячий шоколад с чуррос. Потом я шел в школу пешком. Дорога занимала около двадцати минут, но мне нравилось, потому что я проходил через парк и видел птиц.\n\nВ школе у меня было много друзей. Моего лучшего друга звали Карлос. Мы были неразлучны. Мы всегда сидели вместе и делились нашими полдниками. После занятий мы играли в футбол во дворе. Я был вратарем, а Карлос нападающим. Мы составляли отличную команду.\n\nВыходные были особенными. По субботам утром я ходил на рынок с бабушкой. Она покупала свежие овощи и разговаривала со всеми продавцами. Она знала всех. Она покупала мне сладости - всегда одни и те же: мятные леденцы.\n\nПо воскресеньям мы ели в доме моих бабушки и дедушки. Моя бабушка готовила вкусные блюда: паэлью, кocido, гаспачо летом. Вся семья собиралась: дяди, тети, двоюродные братья. После еды мой дедушка рассказывал нам истории о том, когда он был молодым. Мы слушали, зачарованные.\n\nЛетом мы ездили на пляж. Мы проводили весь август в маленькой квартире в Малаге. Мои родители арендовали ту же квартиру каждый год. Она была в пяти минутах от пляжа. Каждый день мы плавали, строили замки из песка и играли в волейбол. По вечерам мы гуляли по набережной и ели мороженое.\n\nТеперь я живу в Мадриде. Я работаю в офисе, и моя жизнь очень отличается. Но когда я возвращаюсь в деревню и вижу оливу моего детства, все эти воспоминания возвращаются. Я снова чувствую себя тем счастливым ребенком, который играл беззаботно.',
      audioUrl: '/audio/lesson-4-3-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Cuando pienso en mi infancia, siempre sonrío.' },
        { start: 5, end: 10, text: 'Vivía en un pueblo pequeño cerca de Granada.' },
        { start: 10, end: 15, text: 'Todos los días me levantaba temprano.' },
        { start: 15, end: 20, text: 'En la escuela tenía muchos amigos.' }
      ]
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
      translation: `Сегодня мой первый день в Барселоне и я очень взволнован. Я прилетел в аэропорт Эль-Прат сегодня утром в 10. Из аэропорта я сел на поезд до станции Сантс. Поездка заняла около 25 минут и стоила 4 евро. Очень удобно.

Мой отель находится в центре, недалеко от площади Каталонии. От Сантс я сел на метро - зелёную линию до Пасео де Грасия. Мой отель всего в двух кварталах оттуда, между старинным книжным магазином и кафе с террасой. Это небольшой, но уютный отель.

После того как оставил чемодан в номере, я решил исследовать город пешком. Барселона идеальна для прогулок. Я начал с Лас-Рамблас, самой известной улицы города. Она полна туристов, уличных артистов и продавцов цветов. Атмосфера невероятная.

Я дошёл до Готического квартала. Улицы узкие и средневековые. Я несколько раз заблудился, но на каждом углу есть что-то интересное. Я нашёл Барселонский собор - он впечатляющий. Он находится на большой площади, окружённой историческими зданиями.

На обед я пошёл в традиционный ресторан рядом с рынком Бокерия. Я съел паэлью с морепродуктами и выпил сангрию. Восхитительно. Рынок находится напротив ресторана, и я зашёл посмотреть. Там экзотические фрукты, иберийский хамон, ремесленные сыры... это гастрономический рай.

Во второй половине дня я сел на туристический автобус, чтобы увидеть Саграда Фамилия. Она находится немного далеко от центра, но автобус останавливается прямо перед ней. Базилика Гауди впечатляет. Я сделал много фотографий.

Сейчас я вернулся в отель. Завтра хочу посетить парк Гуэль и пляж Барселонета. Я купил билет на метро на три дня. Мне очень нравится Барселона. Это идеальный город для путешествий.`,
      audioUrl: '/audio/lesson-5-1-reading.mp3'
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
      translation: `Когда я приехала в отель Mediterráneo в Валенсии, я была немного нервной. Это был мой первый раз путешествия по Испании в одиночку. Но с первого момента всё было идеально.

На рецепции меня встретила очень приветливая женщина. Я сказала ей: "Добрый день, у меня бронь на имя Елена Петрова." Она улыбнулась и ответила: "Добро пожаловать, сеньорита Петрова. Не могли бы вы показать ваш паспорт, пожалуйста?"

Пока она готовила мой номер, она спросила: "Вы хотели бы номер с видом на море или на сад?" Я ответила, что предпочла бы вид на море. "Отличный выбор," сказала она. "Я дам вам номер 305. У него прекрасный балкон."

Она объяснила, что завтрак включён и подаётся с 7 до 11 утра в ресторане на третьем этаже. Также она сообщила мне, что в отеле есть бассейн, тренажёрный зал и спа. Она дала мне ключ, и сотрудник отнёс мой чемодан в номер.

Номер был прекрасным. В нём была большая кровать, письменный стол, диван и современная ванная комната. С балкона было видно Средиземное море. Это было впечатляюще.

В тот вечер я решила поужинать в ресторане отеля. Официант был очень внимателен. Он спросил меня: "Что бы вы хотели выпить?" Я заказала бокал белого вина. Затем он сказал: "На первое я бы рекомендовал валенсийский салат или гаспачо. На второе наша фирменное блюдо - паэлья с морепродуктами."

Я последовала его совету и заказала гаспачо и паэлью. Было восхитительно. На десерт я попробовала каталонский крем - типичный десерт региона. Всё было идеально.

На следующий день на завтраке был большой выбор: свежие фрукты, йогурты, хлеб, иберийский хамон, сыры, натуральные соки... Я ела на террасе, наслаждаясь видами.

Перед тем как отправиться изучать город, я спросила на рецепции: "Не могли бы вы порекомендовать места для посещения?" Администратор дала мне карту и отметила обязательные к посещению места: Город искусств и наук, Собор, Центральный рынок и пляж Мальварроса.

После трёх чудесных дней пришло время выселяться. Я сказала администратору: "Пребывание было идеальным. Большое спасибо за всё." Она ответила мне: "Нам было приятно. Надеемся увидеть вас снова в ближайшее время."

Без сомнения, я вернулась бы в этот отель. Обслуживание было превосходным, а весь персонал очень профессиональным и приветливым.`,
      audioUrl: '/audio/lesson-5-2-reading.mp3'
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
      translation: `Испания - одна из самых посещаемых стран в мире, и нетрудно понять почему. Она имеет невероятное сочетание истории, культуры, гастрономии и природной красоты.

Для меня самый впечатляющий город Испании - это Гранада. Альгамбра - самый зрелищный памятник, который я видел в своей жизни. Это арабский дворец и крепость, построенные в XIII веке. Сады Хенералифе так же прекрасны, как и сам дворец. Оттуда виден весь город и горы Сьерра-Невада. Лучше посещать её весной, когда стоит хорошая погода, но ещё не так много туристов, как летом.

Барселона - вероятно, самый известный город Испании. Архитектура Гауди уникальна в мире. Саграда Фамилия больше, чем я представлял - она строится уже более 140 лет и всё ещё не закончена. Парк Гуэль менее известен, но столь же очарователен. Виды оттуда впечатляющие.

Мадрид, столица, имеет лучшие музеи Испании. Музей Прадо так же важен, как Лувр в Париже. В нём есть шедевры Веласкеса, Гойи и Эль Греко. Музей Рейна София более современный и хранит знаменитую "Гернику" Пикассо. Город больше, чем Барселона, но менее туристический.

Севилья - самый жаркий город Испании, особенно летом. Севильский собор - самый большой готический собор в мире. Хиральда, его колокольня, изначально была арабским минаретом. Район Санта-Крус - самый живописный в городе, с узкими улочками и внутренними двориками, полными цветов.

Валенсия менее известна, чем Барселона или Мадрид, но не менее интересна. Город искусств и наук - самый современный архитектурный комплекс Испании. Он был спроектирован Сантьяго Калатравой и так же впечатляет днём, как и ночью. Валенсия также знаменита своим городским пляжем - Мальварроса считается одним из лучших городских пляжей Европы.

Не могу забыть Толедо, наиболее хорошо сохранившийся средневековый город Испании. Его улицы настолько узкие, что едва проезжает машина. Собор - один из самых богатых в Испании по искусству. Со смотровой площадки Мирадор-дель-Валье открывается самый полный вид на город.

Сантьяго-де-Компостела, в Галисии, - самое важное место христианского паломничества после Рима и Иерусалима. Собор впечатляет, а площадь Обрадоиро - одна из самых красивых в Европе.

Каждый регион Испании разный. Север более зелёный и дождливый, юг более жаркий и сухой. Еда на севере такая же хорошая, как и на юге, но совершенно другая. На севере едят больше рыбы и морепродуктов, на юге больше хамона и оливкового масла.

Для меня Испания - самая разнообразная страна Европы. У неё пляжи лучше, чем в Италии, горы такие же высокие, как в Швейцарии, и культура такая же богатая, как во Франции. Неудивительно, что она является одним из самых популярных туристических направлений в мире.`,
      audioUrl: '/audio/lesson-5-3-reading.mp3'
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
      translation: `Меня зовут Андреа и мне 22 года. Я только что закончила университет и сейчас думаю о своих планах на будущее. У меня много мечт и целей, которые я хочу осуществить.

В следующем месяце я начну работать в компании цифрового маркетинга в Мадриде. Это будет моя первая профессиональная работа, и я очень взволнована, хотя также немного нервничаю. Я буду работать ассистентом по маркетингу, но надеюсь, что со временем смогу подняться на более высокие должности. Я многому научусь о социальных сетях, цифровой рекламе и контент-стратегиях.

Эта работа позволит мне стать финансово независимой. Через три месяца я переезжу в свою собственную квартиру. Сейчас я живу с родителями, но пришло время иметь своё собственное пространство. Это будет маленькая квартира в районе Маласанья, рядом с моим офисом. Мне не придётся ездить на метро - я смогу дойти пешком за пятнадцать минут.

Что касается денег, я буду откладывать часть зарплаты каждый месяц. У меня есть план: через два года у меня будет достаточно денег, чтобы путешествовать по Южной Америке три месяца. Я всегда мечтала познакомиться с Аргентиной, Чили, Перу и Колумбией. Я посещу Мачу-Пикчу, станцую танго в Буэнос-Айресе, исследую Патагонию и пойду в поход в Анды. Это будет путешествие моей жизни.

После этого путешествия я вернусь в Испанию и буду искать новые профессиональные возможности. Возможно, я получу степень магистра в международном маркетинге, или, может быть, переезжу в Барселону работать там. Я также думаю выучить португальский - это будет очень полезно, если я захочу работать с латиноамериканскими клиентами.

Через пять лет я вижу себя менеджером по маркетингу в важной компании. Я буду свободно говорить по-английски, по-испански и по-португальски. Я объездю много стран и буду иметь международный опыт. Возможно, я даже буду жить в другой стране - мне бы очень хотелось поработать несколько лет в Лондоне или Берлине.

В личном плане я не спешу выходить замуж или иметь детей. Сначала я хочу сосредоточиться на карьере и профессиональной реализации. Но кто знает - может быть, через десять лет я буду замужем и у меня будет семья. То, что я точно знаю, это то, что я не перестану путешествовать и узнавать что-то новое.

У меня также есть более мелкие, но важные планы. Я буду регулярно заниматься спортом - буду ходить в спортзал три раза в неделю. Я буду читать хотя бы одну книгу в месяц. Я буду поддерживать контакт с друзьями из университета, хотя все мы будем заняты своей работой. Я буду навещать родителей по воскресеньям и продолжу быть хорошей дочерью.

Будущее меня немного пугает, но прежде всего волнует. Я знаю, что будут трудности и сложные моменты, но я уверена, что смогу их преодолеть. Я буду усердно работать, учиться на своих ошибках и никогда не перестану преследовать свои мечты. Будущее полно возможностей, и я готова их использовать.`,
      audioUrl: '/audio/lesson-6-1-reading.mp3'
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
    ],
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
      translation: `Сейчас вечер четверга, и мы с друзьями планируем выходные. У всех разные идеи о том, что мы будем делать.

Мария говорит: "Я собираюсь остаться дома в субботу утром. Мне нужно убрать квартиру, потому что она очень неопрятная. Потом, во второй половине дня, я пойду за покупками. Мне нужна новая одежда для собеседования в понедельник. Надеюсь найти что-то красивое и профессиональное на распродаже."

У Карлоса другие планы: "Я думаю поехать на пляж в субботу, если будет хорошая погода. Прогноз говорит, что будет солнечно и 28 градусов. Я выеду рано, около восьми утра, чтобы избежать пробок. Кто-нибудь хочет поехать со мной? Это будет идеальный день для плавания и загорания."

"Я не могу", говорит Лаура. "В субботу я буду помогать брату с переездом. Он переезжает в новую квартиру и ему нужна помощь с мебелью. Мы начнём в девять и, вероятно, закончим во второй половине дня. Это будет изнурительный день, но брат пригласит меня на ужин потом в знак благодарности."

Мигель прерывает: "А что мы будем делать в субботу вечером? Я думаю организовать ужин у себя дома. Я приготовлю свою фирменное блюдо - валенсийскую паэлью. Хотите прийти? Нас будет человек восемь. Будет очень весело."

"С удовольствием!" отвечает Мария. "Но сначала мне нужно закончить покупки. Во сколько будет ужин?"

"Начнём около девяти", говорит Мигель. "Так у всех будет время сделать свои дела в течение дня. Я куплю ингредиенты в субботу утром на рынке. Мне нужен рис, морепродукты, курица, овощи... Это будет настоящая паэлья."

Лаура спрашивает: "Тебе нужна помощь с готовкой? Я могу прийти пораньше, если хочешь. Я закончу с переездом около шести."

"Было бы здорово", говорит Мигель. "Мы приготовим всё вместе. Я также сделаю сангрию. Это будет незабываемый ужин."

Карлос добавляет: "Я принесу десерт. Зайду в лучшую кондитерскую города. Я куплю шоколадный торт. Вам подходит?"

"Отлично", говорит Мигель. "А в воскресенье? Что мы будем делать?"

"В воскресенье утром я буду спать допоздна", говорит Лаура, смеясь. "После субботнего переезда я буду измотана. Не собираюсь вставать раньше одиннадцати."

Мария предлагает: "Как насчёт того, чтобы пообедать вместе в воскресенье? Я знаю новый ресторан, который хочу попробовать. Говорят, что они открывают буфет по воскресеньям. Мы сможем есть всё, что захотим, за фиксированную цену."

"Хорошая идея", говорит Карлос. "После обеда мы могли бы пойти в кино. Они показывают новый фильм, который я хочу посмотреть. Я намереваюсь посмотреть все фильмы, номинированные на Оскар в этом году."

Мигель заключает: "Тогда решено. В субботу каждый будет заниматься своими делами в течение дня, вечером мы поужинаем у меня дома, а в воскресенье пообедаем вместе, а затем пойдём в кино. Это будут фантастические выходные."

Мы все согласны. Теперь у нас есть планы на выходные. Осталось только дождаться субботы. Будет здорово провести время вместе.`,
      audioUrl: '/audio/lesson-6-2-reading.mp3'
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
    ],
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
      translation: `Каким будет мир в 2050 году? Эксперты делают много предсказаний о том, как мы будем жить через 25 лет. Некоторые оптимистичны, другие вызывают беспокойство. Давайте посмотрим, какие изменения мы, вероятно, увидим.

**Технологии и повседневная жизнь**

Технологии радикально изменят нашу повседневную жизнь. По мнению экспертов, искусственный интеллект будет присутствовать во всех аспектах нашей жизни. У нас будут виртуальные ассистенты гораздо более продвинутые, чем нынешние. Эти ассистенты будут знать наши предпочтения, предугадывать наши потребности и помогать нам принимать решения.

Беспилотные автомобили станут нормой. Нам не нужно будет водить - машина отвезёт нас куда угодно, пока мы работаем, читаем или отдыхаем. Вероятно, нам также не придётся покупать автомобили. Мы просто вызовем транспортное средство, когда нам нужно.

В наших домах всё будет подключено к интернету. Холодильник будет знать, каких продуктов не хватает, и закажет их автоматически. Свет, отопление и бытовая техника будут настраиваться сами в соответствии с нашим распорядком. Мы будем жить в умных домах, которые почти будут думать сами.

**Работа и образование**

То, как мы работаем, полностью изменится. Многие профессии, которые существуют сегодня, исчезнут, замененные роботами и искусственным интеллектом. Но также появятся новые работы, которые мы сейчас даже не можем представить.

Удалённая работа станет совершенно нормальной. У многих людей не будет фиксированного офиса - они будут работать из дома, из кафе или во время путешествий. Встречи будут проходить в виртуальной реальности, где будет казаться, что все находятся в одной комнате, хотя они находятся в разных странах.

Образование тоже будет очень отличаться. Вероятно, традиционные университеты потеряют значимость. Мы будем учиться онлайн, в своём собственном темпе, с персонализированными программами в соответствии с нашими интересами и способностями. Виртуальная реальность позволит нам практиковаться в смоделированных средах до работы в реальных ситуациях.

**Здоровье и медицина**

В медицине будут невероятные достижения. По мнению учёных, мы будем жить дольше - продолжительность жизни достигнет 90 или 100 лет во многих странах. Некоторые болезни, которые сегодня смертельны, будут легко излечиваться.

У нас будет персонализированная медицина. Врачи будут анализировать нашу ДНК и будут точно знать, какие методы лечения будут работать лучше для каждого человека. Датчики, которые мы будем носить на теле, будут постоянно контролировать наше здоровье и обнаруживать проблемы до появления симптомов.

Возможно, будут искусственные органы для замены тех, которые откажут. Возможно, мы даже сможем печатать органы на 3D-принтере, используя наши собственные клетки. Это решит проблему нехватки доноров.

**Окружающая среда и энергия**

Это самая тревожная область. Если мы не внесём изменения сейчас, изменение климата ухудшится. Температуры поднимутся, будет больше засух и наводнений, и многие виды вымрут.

Но есть и надежда. Вероятно, мы будем массово использовать возобновляемые источники энергии. Солнечные панели будут намного эффективнее и дешевле. Возможно, у нас будет термоядерный синтез, чистый и практически неограниченный источник энергии.

Электромобили полностью заменят бензиновые. В городах будет меньше загрязнения, а воздух станет чище. Возможно, мы будем выращивать еду в вертикальных зданиях внутри городов, используя меньше воды и земли.

**Население и общество**

Мировое население достигнет около 9 миллиардов человек. Большинство будет жить в городах - будут мегаполисы с 30 или 40 миллионами жителей. Эти города должны будут быть очень эффективны в использовании ресурсов.

Общество будет более разнообразным и глобально связанным. Путешествовать будет проще и дешевле. Возможно, у нас будут сверхзвуковые рейсы, которые пересекут Атлантику за два часа. Некоторые предсказывают, что будут колонии на Марсе, хотя, вероятно, они будут очень маленькими.

Сбудутся ли эти предсказания? Никто не знает наверняка. Будущее будет зависеть от решений, которые мы примем сегодня. Но одно точно: мир 2050 года будет очень отличаться от сегодняшнего.`,
      audioUrl: '/audio/lesson-6-3-reading.mp3'
    },
    exercises: ['ex-6-3-1', 'ex-6-3-2', 'ex-6-3-3', 'ex-6-3-4', 'ex-6-3-5']
  },

  // МОДУЛЬ 7: Сослагательное наклонение (B1)
  'lesson-7-1': {
    id: 'lesson-7-1',
    title: 'Урок 1: Presente de subjuntivo - образование',
    moduleId: 'module-7',
    grammar: {
      title: 'Presente de subjuntivo (Настоящее время сослагательного наклонения)',
      content: `
# Presente de subjuntivo - Образование

Subjuntivo (сослагательное наклонение) выражает субъективность: желания, сомнения, эмоции, неуверенность.

## Образование:

**1. Берем форму YO настоящего времени (indicativo)**
**2. Убираем -O**
**3. Добавляем "противоположные" окончания:**

### Глаголы на -AR → окончания -ER/-IR:

| Лицо | HABLAR | Окончание |
|------|--------|-----------|
| yo | hable | -e |
| tú | hables | -es |
| él/ella/usted | hable | -e |
| nosotros/as | hablemos | -emos |
| vosotros/as | habléis | -éis |
| ellos/ellas/ustedes | hablen | -en |

### Глаголы на -ER/-IR → окончания -AR:

| Лицо | COMER | VIVIR | Окончание |
|------|-------|-------|-----------|
| yo | coma | viva | -a |
| tú | comas | vivas | -as |
| él/ella/usted | coma | viva | -a |
| nosotros/as | comamos | vivamos | -amos |
| vosotros/as | comáis | viváis | -áis |
| ellos/ellas/ustedes | coman | vivan | -an |

## Неправильные глаголы (от формы YO):

**Изменения в корне сохраняются:**

| Infinitivo | YO (indicativo) | Subjuntivo |
|------------|-----------------|------------|
| tener | tengo | tenga, tengas, tenga... |
| venir | vengo | venga, vengas, venga... |
| hacer | hago | haga, hagas, haga... |
| decir | digo | diga, digas, diga... |
| conocer | conozco | conozca, conozcas, conozca... |
| poner | pongo | ponga, pongas, ponga... |
| salir | salgo | salga, salgas, salga... |
| traer | traigo | traiga, traigas, traiga... |

**Полностью неправильные:**

| Infinitivo | Subjuntivo |
|------------|------------|
| ser | sea, seas, sea, seamos, seáis, sean |
| estar | esté, estés, esté, estemos, estéis, estén |
| ir | vaya, vayas, vaya, vayamos, vayáis, vayan |
| haber | haya, hayas, haya, hayamos, hayáis, hayan |
| saber | sepa, sepas, sepa, sepamos, sepáis, sepan |
| dar | dé, des, dé, demos, deis, den |

**Глаголы с изменением гласной (e→ie, o→ue):**

| Infinitivo | Subjuntivo |
|------------|------------|
| querer | quiera, quieras, quiera, queramos, queráis, quieran |
| pensar | piense, pienses, piense, pensemos, penséis, piensen |
| poder | pueda, puedas, pueda, podamos, podáis, puedan |
| dormir | duerma, duermas, duerma, durmamos, durmáis, duerman |

## Правило памяти:

**AR ↔ ER/IR меняются местами!**
- hablar (AR) → habl**e** (как ER)
- comer (ER) → com**a** (как AR)
- vivir (IR) → viv**a** (как AR)
      `,
      examples: [
        { spanish: 'Yo hablo (indicativo) → que yo hable (subjuntivo)', translation: 'Я говорю → чтобы я говорил' },
        { spanish: 'Tú comes → que tú comas', translation: 'Ты ешь → чтобы ты ел' },
        { spanish: 'Él tiene → que él tenga', translation: 'У него есть → чтобы у него было' },
        { spanish: 'Nosotros somos → que seamos', translation: 'Мы есть → чтобы мы были' }
      ]
    },
    vocabulary: [
      { word: 'deseo', translation: 'желание', audioUrl: null },
      { word: 'duda', translation: 'сомнение', audioUrl: null },
      { word: 'emoción', translation: 'эмоция', audioUrl: null },
      { word: 'ojalá', translation: 'хоть бы, если бы', audioUrl: null },
      { word: 'tal vez', translation: 'может быть', audioUrl: null },
      { word: 'quizás', translation: 'возможно', audioUrl: null },
      { word: 'esperar', translation: 'надеяться', audioUrl: null },
      { word: 'querer', translation: 'хотеть', audioUrl: null },
      { word: 'necesitar', translation: 'нуждаться', audioUrl: null },
      { word: 'preferir', translation: 'предпочитать', audioUrl: null },
      { word: 'sugerir', translation: 'предлагать', audioUrl: null },
      { word: 'recomendar', translation: 'рекомендовать', audioUrl: null },
      { word: 'aconsejar', translation: 'советовать', audioUrl: null },
      { word: 'pedir', translation: 'просить', audioUrl: null }
    ],
    readingText: {
      title: 'Aprendiendo el subjuntivo',
      content: `El subjuntivo es uno de los aspectos más difíciles del español para los estudiantes extranjeros. Muchos dicen: "Espero que no sea tan complicado" - ¡y ya están usando el subjuntivo sin darse cuenta!

El subjuntivo no es un tiempo verbal, sino un modo. Mientras que el indicativo expresa hechos y certezas, el subjuntivo expresa la subjetividad: deseos, dudas, emociones, posibilidades. Es la diferencia entre el mundo real y el mundo de nuestros pensamientos y sentimientos.

Veamos algunos ejemplos básicos. Cuando dices "Quiero que vengas a mi fiesta", estás usando el subjuntivo ("vengas") porque expresas un deseo. No es un hecho - la persona todavía no ha venido. Compara con "Sé que vienes a mi fiesta" (indicativo) - aquí es un hecho, una certeza.

Otro ejemplo: "Espero que haga buen tiempo mañana". Aquí usamos "haga" (subjuntivo de hacer) porque es una esperanza, no una certeza. El tiempo no está en nuestro control. Si dijéramos "Sé que hará buen tiempo" (futuro indicativo), estaríamos muy seguros.

Las expresiones con "ojalá" siempre llevan subjuntivo. "Ojalá" viene del árabe "law sha Allah" (si Dios quiere). Por ejemplo: "Ojalá apruebe el examen", "Ojalá llueva pronto", "Ojalá tengas un buen día". Son todos deseos.

Cuando expresamos dudas, también usamos subjuntivo: "Dudo que él sepa la respuesta", "No creo que ella venga", "Es posible que llueva". La duda y la incertidumbre son el territorio del subjuntivo.

Las emociones también requieren subjuntivo: "Me alegro de que estés aquí", "Siento que te sientas mal", "Me sorprende que no sepas esto". Nuestras emociones sobre algo son subjetivas, no hechos objetivos.

Para formar el subjuntivo presente, recuerda esta regla sencilla: los verbos -AR toman las terminaciones de -ER/-IR, y viceversa. Es como si los verbos "intercambiaran ropa". HABLAR (AR) se viste como los verbos ER: hable, hables, hable. COMER (ER) se viste como los verbos AR: coma, comas, coma.

Los irregulares siguen el patrón de la primera persona del presente indicativo. Si dices "Yo tengo", el subjuntivo será "que yo tenga". Si dices "Yo hago", será "que yo haga". Hay algunas excepciones totalmente irregulares como SER (sea), ESTAR (esté), IR (vaya), SABER (sepa), pero son pocas.

¿Es difícil? Sí. ¿Es imposible? No. Con práctica y exposición constante, el subjuntivo se vuelve natural. Los hispanohablantes lo usan automáticamente desde niños. Tú también puedes. Solo necesitas que practiques mucho, que leas ejemplos, que escuches español auténtico y que no tengas miedo de cometer errores.

Espero que este texto te ayude a entender mejor el subjuntivo. Ojalá sigas estudiando con entusiasmo. Es importante que no te desanimes. Dudo que sea fácil, pero estoy seguro de que puedes aprenderlo. ¡Que tengas éxito en tu aprendizaje!`,
      translation: `Subjuntivo - один из самых сложных аспектов испанского для иностранных студентов. Многие говорят: "Надеюсь, это не так сложно" - и уже используют subjuntivo, даже не осознавая этого!

Subjuntivo - это не время глагола, а наклонение. В то время как изъявительное наклонение выражает факты и уверенность, subjuntivo выражает субъективность: желания, сомнения, эмоции, возможности. Это разница между реальным миром и миром наших мыслей и чувств.

Давайте рассмотрим несколько базовых примеров. Когда вы говорите "Quiero que vengas a mi fiesta" (Я хочу, чтобы ты пришёл на мою вечеринку), вы используете subjuntivo ("vengas"), потому что выражаете желание. Это не факт - человек ещё не пришёл. Сравните с "Sé que vienes a mi fiesta" (Я знаю, что ты придёшь на мою вечеринку) - здесь это факт, уверенность.

Другой пример: "Espero que haga buen tiempo mañana" (Надеюсь, завтра будет хорошая погода). Здесь мы используем "haga" (subjuntivo от hacer), потому что это надежда, а не уверенность. Погода не в нашем контроле. Если бы мы сказали "Sé que hará buen tiempo" (Я знаю, что будет хорошая погода), мы были бы очень уверены.

Выражения с "ojalá" всегда требуют subjuntivo. "Ojalá" происходит от арабского "law sha Allah" (если Бог захочет). Например: "Ojalá apruebe el examen" (Хоть бы я сдал экзамен), "Ojalá llueva pronto" (Хоть бы скорее пошёл дождь), "Ojalá tengas un buen día" (Желаю тебе хорошего дня). Все это желания.

Когда мы выражаем сомнения, мы также используем subjuntivo: "Dudo que él sepa la respuesta" (Сомневаюсь, что он знает ответ), "No creo que ella venga" (Не думаю, что она придёт), "Es posible que llueva" (Возможно, пойдёт дождь). Сомнение и неуверенность - территория subjuntivo.

Эмоции также требуют subjuntivo: "Me alegro de que estés aquí" (Я рад, что ты здесь), "Siento que te sientas mal" (Сожалею, что ты плохо себя чувствуешь), "Me sorprende que no sepas esto" (Меня удивляет, что ты этого не знаешь). Наши эмоции о чём-то субъективны, а не объективные факты.

Чтобы образовать presente de subjuntivo, запомните это простое правило: глаголы -AR берут окончания -ER/-IR, и наоборот. Как будто глаголы "обмениваются одеждой". HABLAR (AR) одевается как глаголы ER: hable, hables, hable. COMER (ER) одевается как глаголы AR: coma, comas, coma.

Неправильные глаголы следуют образцу первого лица настоящего времени. Если вы говорите "Yo tengo", subjuntivo будет "que yo tenga". Если говорите "Yo hago", будет "que yo haga". Есть несколько полностью неправильных исключений, как SER (sea), ESTAR (esté), IR (vaya), SABER (sepa), но их немного.

Это сложно? Да. Это невозможно? Нет. С практикой и постоянным воздействием subjuntivo становится естественным. Носители испанского языка используют его автоматически с детства. Вы тоже можете. Вам просто нужно много практиковаться, читать примеры, слушать аутентичный испанский и не бояться ошибок.

Надеюсь, этот текст поможет вам лучше понять subjuntivo. Хоть бы вы продолжали учиться с энтузиазмом. Важно, чтобы вы не падали духом. Сомневаюсь, что это легко, но я уверен, что вы можете это выучить. Желаю вам успехов в обучении!`,
      audioUrl: '/audio/lesson-7-1-reading.mp3'
    },
    exercises: ['ex-7-1-1', 'ex-7-1-2', 'ex-7-1-3', 'ex-7-1-4', 'ex-7-1-5']
  },

  'lesson-7-2': {
    id: 'lesson-7-2',
    title: 'Урок 2: Употребление subjuntivo - желания и эмоции',
    moduleId: 'module-7',
    grammar: {
      title: 'Когда использовать Subjuntivo',
      content: `
# Употребление Subjuntivo

## 1. ЖЕЛАНИЯ и ПРОСЬБЫ (QUE + subjuntivo):

**Querer que** (хотеть, чтобы):
- **Quiero que** vengas - Я хочу, чтобы ты пришел
- **Queremos que** estudies - Мы хотим, чтобы ты учился

**Esperar que** (надеяться, что):
- **Espero que** te guste - Надеюсь, тебе понравится
- **Esperamos que** haga buen tiempo - Надеемся, будет хорошая погода

**Necesitar que** (нуждаться, чтобы):
- **Necesito que** me ayudes - Мне нужно, чтобы ты мне помог

**Preferir que** (предпочитать, чтобы):
- **Prefiero que** vengas temprano - Я предпочитаю, чтобы ты пришел рано

## 2. ЭМОЦИИ и ЧУВСТВА:

**Me alegro de que** (я рад, что):
- **Me alegro de que** estés aquí - Я рад, что ты здесь

**Siento que** (сожалею, что):
- **Siento que** no puedas venir - Сожалею, что ты не можешь прийти

**Me sorprende que** (меня удивляет, что):
- **Me sorprende que** no lo sepas - Меня удивляет, что ты это не знаешь

**Tengo miedo de que** (боюсь, что):
- **Tengo miedo de que** llueva - Боюсь, что пойдет дождь

**Me molesta que** (меня раздражает, что):
- **Me molesta que** llegues tarde - Меня раздражает, что ты опаздываешь

## 3. СОМНЕНИЯ и ОТРИЦАНИЕ:

**Dudar que** (сомневаться, что):
- **Dudo que** venga - Сомневаюсь, что он придет

**No creer que** (не верить, что):
- **No creo que** sea verdad - Не верю, что это правда

**No estar seguro de que** (не быть уверенным, что):
- **No estoy seguro de que** funcione - Не уверен, что это сработает

**No pensar que** (не думать, что):
- **No pienso que** tengas razón - Не думаю, что ты прав

⚠️ НО: "Creo que" (indicativo), "Pienso que" (indicativo) - уверенность

## 4. OJALÁ (если бы, хоть бы):

**Ojalá** всегда требует subjuntivo:
- **Ojalá** llueva - Хоть бы пошел дождь
- **Ojalá** tengas suerte - Хоть бы тебе повезло
- **Ojalá** sea verdad - Если бы это было правдой

## 5. БЕЗЛИЧНЫЕ ВЫРАЖЕНИЯ:

**Es importante que** (важно, чтобы):
- **Es importante que** estudies - Важно, чтобы ты учился

**Es necesario que** (необходимо, чтобы):
- **Es necesario que** vengas - Необходимо, чтобы ты пришел

**Es posible que** (возможно, что):
- **Es posible que** llueva - Возможно, пойдет дождь

**Es probable que** (вероятно, что):
- **Es probable que** llegue tarde - Вероятно, он опоздает

**Es bueno/malo que** (хорошо/плохо, что):
- **Es bueno que** practiques - Хорошо, что ты практикуешь

**Es una pena que** (жаль, что):
- **Es una pena que** no puedas venir - Жаль, что ты не можешь прийти

## Структура предложения:

**[Главное предложение] + QUE + [subjuntivo]**

- Quiero + que + tú vengas
- Espero + que + llueva
- Me alegro de + que + estés aquí

⚠️ **ВАЖНО:** Если подлежащее одно, используем инфинитив:
- **Quiero venir** (я хочу прийти - один субъект)
- **Quiero que vengas** (я хочу, чтобы ТЫ пришел - два субъекта)
      `,
      examples: [
        { spanish: 'Quiero que estudies más', translation: 'Я хочу, чтобы ты учился больше' },
        { spanish: 'Me alegro de que estés bien', translation: 'Я рад, что ты в порядке' },
        { spanish: 'Dudo que venga mañana', translation: 'Сомневаюсь, что он придет завтра' },
        { spanish: 'Ojalá haga buen tiempo', translation: 'Хоть бы была хорошая погода' }
      ]
    },
    vocabulary: [
      { word: 'alegrarse', translation: 'радоваться', audioUrl: null },
      { word: 'sentir', translation: 'сожалеть, чувствовать', audioUrl: null },
      { word: 'sorprender', translation: 'удивлять', audioUrl: null },
      { word: 'molestar', translation: 'раздражать', audioUrl: null },
      { word: 'temer', translation: 'бояться', audioUrl: null },
      { word: 'dudar', translation: 'сомневаться', audioUrl: null },
      { word: 'creer', translation: 'верить', audioUrl: null },
      { word: 'importante', translation: 'важный', audioUrl: null },
      { word: 'necesario', translation: 'необходимый', audioUrl: null },
      { word: 'posible', translation: 'возможный', audioUrl: null },
      { word: 'probable', translation: 'вероятный', audioUrl: null },
      { word: 'pena', translation: 'жалость', audioUrl: null },
      { word: 'verdad', translation: 'правда', audioUrl: null },
      { word: 'razón', translation: 'причина, правота', audioUrl: null }
    ],
    readingText: {
      title: 'Carta a un amigo',
      content: `Querido Miguel:

¿Cómo estás? Espero que estés bien y que tu familia también esté bien. Hace mucho tiempo que no nos vemos y te echo de menos.

Te escribo porque quiero que sepas que voy a viajar a Madrid el mes que viene. ¡Tengo tantas ganas de verte! Espero que tengas tiempo libre para que podamos encontrarnos. Sería genial que pudiéramos pasar un fin de semana juntos como en los viejos tiempos.

Me alegro mucho de que hayas conseguido ese nuevo trabajo del que me hablaste. Es importante que estés contento con lo que haces. Espero que tus compañeros sean agradables y que el jefe te trate bien. Ojalá tengas mucho éxito en tu nueva posición.

Sobre mi vida, bueno, hay cambios. Es posible que me mude a otra ciudad pronto. Mi empresa quiere que trabaje en la oficina de Barcelona. No estoy seguro de que sea una buena idea dejar Madrid, pero es una gran oportunidad profesional. Temo que sea difícil adaptarme a una nueva ciudad, pero espero que todo salga bien.

También tengo noticias sobre Laura. ¿Te acuerdas de ella? Pues resulta que está comprometida. Me sorprende que se case tan joven - solo tiene 25 años. Pero me alegro de que haya encontrado a alguien que la haga feliz. Espero que me inviten a la boda. Sería una pena que no pudiéramos estar allí para celebrarlo con ella.

Sobre mis estudios de español, sigo practicando. Mi profesor quiere que lea más en español y que escriba composiciones cada semana. Es necesario que practique la gramática, especialmente el subjuntivo. ¡Es tan difícil! Dudo que algún día lo domine completamente, pero es importante que siga intentándolo.

¿Y tú? ¿Qué tal tu curso de inglés? Espero que hayas progresado mucho. Es fundamental que practiques hablando, no solo estudiando gramática. Te recomiendo que veas series en inglés con subtítulos. Es una forma excelente de aprender.

Bueno, Miguel, espero que esta carta te encuentre bien. Es posible que vaya a Madrid entre el 15 y el 20 de marzo. Ojalá podamos vernos entonces. Por favor, escríbeme pronto. Necesito que me confirmes si estarás libre esas fechas.

Te mando un abrazo fuerte. Espero que tengamos noticias pronto y que nos veamos dentro de poco.

Tu amigo,
Carlos

P.D.: Es probable que lleve a mi novia Ana. Espero que no te importe que ella venga también. Estoy seguro de que te caerá muy bien.`,
      translation: `Дорогой Мигель!

Как дела? Надеюсь, у тебя все хорошо и твоя семья тоже в порядке. Прошло много времени с тех пор, как мы виделись, и я скучаю по тебе.

Пишу тебе, потому что хочу, чтобы ты знал, что собираюсь поехать в Мадрид в следующем месяце. Так хочу тебя увидеть! Надеюсь, у тебя будет свободное время, чтобы мы смогли встретиться. Было бы здорово, если бы мы смогли провести выходные вместе, как в старые времена.

Я очень рад, что ты получил ту новую работу, о которой мне рассказывал. Важно, чтобы ты был доволен тем, что делаешь. Надеюсь, что твои коллеги приятные и что начальник хорошо к тебе относится. Хоть бы у тебя был большой успех на новой должности.

Что касается моей жизни, ну, есть изменения. Возможно, я скоро переезжу в другой город. Моя компания хочет, чтобы я работал в барселонском офисе. Я не уверен, что покидать Мадрид - хорошая идея, но это большая профессиональная возможность. Боюсь, что будет трудно адаптироваться к новому городу, но надеюсь, что все получится хорошо.

У меня также есть новости о Лауре. Помнишь её? Оказывается, она помолвлена. Меня удивляет, что она выходит замуж так молодо - ей всего 25 лет. Но я рад, что она нашла кого-то, кто делает её счастливой. Надеюсь, что меня пригласят на свадьбу. Было бы жаль, если бы мы не смогли быть там, чтобы отпраздновать это с ней.

Что касается моих занятий испанским, я продолжаю практиковаться. Мой учитель хочет, чтобы я больше читал на испанском и писал сочинения каждую неделю. Необходимо, чтобы я практиковал грамматику, особенно subjuntivo. Это так сложно! Сомневаюсь, что когда-нибудь полностью освою его, но важно продолжать пытаться.

А ты? Как твой курс английского? Надеюсь, ты много продвинулся. Очень важно практиковаться в разговоре, а не только изучать грамматику. Рекомендую тебе смотреть сериалы на английском с субтитрами. Это отличный способ учиться.

Ну, Мигель, надеюсь, это письмо застанет тебя в добром здравии. Возможно, я буду в Мадриде между 15 и 20 марта. Хоть бы мы смогли увидеться тогда. Пожалуйста, напиши мне поскорее. Мне нужно, чтобы ты подтвердил, будешь ли ты свободен в эти даты.

Посылаю тебе крепкое объятие. Надеюсь, у нас скоро будут новости и что мы увидимся в ближайшее время.

Твой друг,
Карлос

P.S.: Вероятно, я возьму с собой мою девушку Ану. Надеюсь, ты не будешь против, что она тоже придёт. Уверен, она тебе очень понравится.`,
      audioUrl: '/audio/lesson-7-2-reading.mp3'
    },
    exercises: ['ex-7-2-1', 'ex-7-2-2', 'ex-7-2-3', 'ex-7-2-4', 'ex-7-2-5']
  },

  'lesson-7-3': {
    id: 'lesson-7-3',
    title: 'Урок 3: Subjuntivo в придаточных предложениях',
    moduleId: 'module-7',
    grammar: {
      title: 'Subjuntivo в разных типах придаточных предложений',
      content: `
# Subjuntivo в придаточных предложениях

## 1. ВРЕМЕННЫЕ КОНСТРУКЦИИ (cuando, hasta que, antes de que):

### CUANDO:
- **Futuro**: Cuando **vengas**, hablaremos (Когда ты придешь, мы поговорим) - **subjuntivo**
- **Presente/pasado**: Cuando **vienes**, hablamos (Когда ты приходишь, мы говорим) - indicativo
- **Pasado**: Cuando **viniste**, hablamos (Когда ты пришел, мы поговорили) - indicativo

### HASTA QUE (пока не):
- Esperaré **hasta que llegues** - Подожду, пока ты не придешь

### ANTES DE QUE (перед тем как):
- Llámame **antes de que salgas** - Позвони мне перед тем как выйдешь
- ⚠️ Всегда subjuntivo!

### EN CUANTO / TAN PRONTO COMO (как только):
- **En cuanto termine**, te llamo - Как только закончу, позвоню

## 2. ЦЕЛЬ (para que, a fin de que):

**PARA QUE** (чтобы, для того чтобы):
- Te lo explico **para que entiendas** - Объясняю тебе, чтобы ты понял
- Hablo despacio **para que me comprendas** - Говорю медленно, чтобы ты меня понял

⚠️ **Один субъект** = PARA + infinitivo:
- Estudio **para aprender** (я учусь, чтобы выучить)
- Trabajo **para ganar dinero** (я работаю, чтобы заработать)

## 3. УСЛОВИЕ (con tal de que, siempre que, a menos que):

**CON TAL DE QUE** (при условии что):
- Iré **con tal de que vengas** tú también - Пойду при условии, что ты тоже придешь

**SIEMPRE QUE** (при условии что):
- Te ayudo **siempre que me lo pidas** - Помогу тебе, если ты попросишь

**A MENOS QUE** (если только не):
- Iremos **a menos que llueva** - Пойдем, если только не будет дождя

**SIN QUE** (без того чтобы):
- Salió **sin que nadie lo viera** - Вышел, чтобы никто не видел

## 4. УСТУПКА (aunque):

**AUNQUE** + subjuntivo (даже если - неизвестно):
- **Aunque llueva**, iré - Даже если будет дождь, пойду (не знаем, будет ли)

**AUNQUE** + indicativo (хотя - факт):
- **Aunque llueve**, iré - Хотя идет дождь, пойду (идет сейчас)

## 5. НЕОПРЕДЕЛЕННОЕ / НЕСУЩЕСТВУЮЩЕЕ:

### Busco... / Necesito... (ищу/нужен):
- **Busco una casa que tenga jardín** - Ищу дом, у которого есть сад (не знаю, существует ли)
- Tengo una casa que **tiene** jardín - У меня есть дом с садом (indicativo - конкретный)

### No hay nadie que... (нет никого, кто):
- **No hay nadie que sepa** la respuesta - Нет никого, кто знает ответ

### ¿Hay alguien que...? (есть кто-то, кто?):
- **¿Hay alguien que hable** ruso? - Есть кто-то, кто говорит по-русски?

## 6. БЕЗЛИЧНЫЕ КОНСТРУКЦИИ:

**Sea como sea** - Как бы то ни было
**Pase lo que pase** - Что бы ни случилось
**Diga lo que diga** - Что бы он ни говорил
**Cueste lo que cueste** - Чего бы это ни стоило

## Схема выбора:

**¿Факт или субъективность?**
- Факт, уверенность, привычка → **INDICATIVO**
- Желание, сомнение, эмоция, будущее → **SUBJUNTIVO**

**¿Определенное или неопределенное?**
- Конкретное, существующее → **INDICATIVO**
- Неопределенное, несуществующее → **SUBJUNTIVO**
      `,
      examples: [
        { spanish: 'Cuando vengas, hablaremos', translation: 'Когда ты придешь, мы поговорим' },
        { spanish: 'Te llamo para que sepas la verdad', translation: 'Звоню тебе, чтобы ты знал правду' },
        { spanish: 'Busco un libro que explique el subjuntivo', translation: 'Ищу книгу, которая объясняет subjuntivo' },
        { spanish: 'Aunque llueva, iremos al parque', translation: 'Даже если будет дождь, пойдем в парк' }
      ]
    },
    vocabulary: [
      { word: 'cuando', translation: 'когда', audioUrl: null },
      { word: 'hasta que', translation: 'пока не', audioUrl: null },
      { word: 'antes de que', translation: 'перед тем как', audioUrl: null },
      { word: 'para que', translation: 'чтобы', audioUrl: null },
      { word: 'aunque', translation: 'хотя, даже если', audioUrl: null },
      { word: 'con tal de que', translation: 'при условии что', audioUrl: null },
      { word: 'a menos que', translation: 'если только не', audioUrl: null },
      { word: 'sin que', translation: 'без того чтобы', audioUrl: null },
      { word: 'en cuanto', translation: 'как только', audioUrl: null },
      { word: 'tan pronto como', translation: 'как только', audioUrl: null },
      { word: 'buscar', translation: 'искать', audioUrl: null },
      { word: 'encontrar', translation: 'находить', audioUrl: null },
      { word: 'existir', translation: 'существовать', audioUrl: null },
      { word: 'haber', translation: 'иметься', audioUrl: null }
    ],
    readingText: {
      title: 'El Camino de Santiago',
      content: `El Camino de Santiago es una de las rutas de peregrinación más famosas del mundo. Miles de personas lo recorren cada año, ya sea por motivos religiosos, espirituales o simplemente por la aventura. Aunque cada peregrino tiene sus propias razones, todos comparten una experiencia única.

Muchos peregrinos buscan una experiencia que les cambie la vida. Buscan algo que no pueden encontrar en su rutina diaria. Algunos buscan respuestas a preguntas importantes: "¿Qué quiero hacer con mi vida?", "¿Soy feliz?", "¿Qué es realmente importante para mí?" El Camino ofrece tiempo y espacio para reflexionar sobre estas cuestiones.

Antes de que empieces el Camino, es importante que prepares bien. Necesitas entrenar físicamente para que tu cuerpo aguante las largas caminatas. También es necesario que lleves solo lo esencial en tu mochila. Un consejo: pase lo que pase, no lleves más de 10 kilos. Muchos principiantes cometen el error de llevar demasiadas cosas, y luego tienen que enviarlas a casa porque no pueden cargar tanto peso.

El Camino tiene varias rutas. La más popular es el Camino Francés, que empieza en los Pirineos y termina en Santiago de Compostela. Dura aproximadamente 30-35 días. Aunque hay otras rutas más cortas, muchos peregrinos prefieren hacer el Camino completo para que la experiencia sea más profunda.

En el Camino conocerás personas de todo el mundo. No hay nadie que no tenga una historia interesante que contar. Conocerás a gente que camina para superar una pérdida, otros que buscan dirección en su vida, algunos que quieren probar sus límites físicos, y muchos que simplemente quieren desconectar del estrés moderno.

Los albergues para peregrinos (llamados "albergues") son lugares especiales donde puedes descansar. Son económicos, simples, pero llenos de camaradería. Aunque no son lujosos, ofrecen todo lo que necesitas: una cama, una ducha y, lo más importante, compañía de otros peregrinos. Por la noche, todos comparten historias del día. Es común que hagas amigos que duren toda la vida.

En cuanto llegues a Santiago, sentirás una mezcla de emociones. Alegría por haberlo logrado, tristeza porque la aventura termina, gratitud por la experiencia. La tradición dice que cuando llegues a la catedral, debes abrazar la estatua del apóstol Santiago. Muchos peregrinos lloran en este momento - es el final de un viaje que los ha transformado.

Pero el verdadero Camino no termina en Santiago. Como dicen los peregrinos experimentados: "El Camino no acaba cuando llegas a Santiago, sino cuando Santiago llega a ti". Los cambios que experimentes en el Camino te acompañarán para siempre.

Si estás pensando en hacer el Camino, mi consejo es: hazlo. No importa que no estés en perfecta forma física. No importa que no sepas exactamente por qué quieres ir. No importa que tengas dudas. Muchos peregrinos empiezan el Camino con dudas y preguntas, y lo terminan con paz y claridad.

Ojalá algún día puedas experimentar el Camino de Santiago. Es posible que sea la experiencia más transformadora de tu vida. Y cuando vuelvas, espero que compartas tu historia con otros, para que más personas se animen a hacer este viaje increíble.

Como dicen en español: "Ultreia!" (¡Adelante!) - el saludo tradicional entre peregrinos del Camino de Santiago.`,
      translation: `Путь Святого Иакова - один из самых знаменитых паломнических маршрутов в мире. Тысячи людей проходят его каждый год, будь то по религиозным, духовным причинам или просто ради приключения. Хотя у каждого паломника свои причины, все они разделяют уникальный опыт.

Многие паломники ищут опыт, который изменит их жизнь. Они ищут что-то, что не могут найти в своей повседневной рутине. Некоторые ищут ответы на важные вопросы: "Что я хочу делать со своей жизнью?", "Счастлив ли я?", "Что действительно важно для меня?" Путь предлагает время и пространство для размышлений об этих вопросах.

Прежде чем вы начнёте Путь, важно хорошо подготовиться. Вам нужно тренироваться физически, чтобы ваше тело выдержало длинные прогулки. Также необходимо, чтобы вы брали с собой только самое необходимое в рюкзаке. Совет: что бы ни случилось, не берите более 10 килограммов. Многие новички совершают ошибку, беря слишком много вещей, а потом им приходится отправлять их домой, потому что не могут нести такой вес.

Путь имеет несколько маршрутов. Самый популярный - Французский путь, который начинается в Пиренеях и заканчивается в Сантьяго-де-Компостела. Он длится примерно 30-35 дней. Хотя есть и более короткие маршруты, многие паломники предпочитают пройти Путь полностью, чтобы опыт был более глубоким.

На Пути вы познакомитесь с людьми со всего мира. Нет никого, у кого не было бы интересной истории. Вы встретите людей, которые идут, чтобы преодолеть потерю, других, которые ищут направление в жизни, некоторых, кто хочет проверить свои физические пределы, и многих, кто просто хочет отключиться от современного стресса.

Паломнические приюты (называемые "альберге") - особенные места, где можно отдохнуть. Они экономичны, просты, но полны товарищества. Хотя они не роскошны, они предлагают всё, что вам нужно: кровать, душ и, что самое важное, компанию других паломников. Вечером все делятся историями дня. Часто вы заводите друзей на всю жизнь.

Как только вы прибудете в Сантьяго, вы почувствуете смесь эмоций. Радость от того, что добились этого, грусть от того, что приключение заканчивается, благодарность за опыт. Традиция гласит, что когда вы приедете в собор, вы должны обнять статую апостола Святого Иакова. Многие паломники плачут в этот момент - это конец путешествия, которое их преобразило.

Но настоящий Путь не заканчивается в Сантьяго. Как говорят опытные паломники: "Путь не заканчивается, когда вы приезжаете в Сантьяго, а когда Сантьяго приходит к вам". Изменения, которые вы испытаете на Пути, будут сопровождать вас навсегда.

Если вы думаете о том, чтобы пройти Путь, мой совет: сделайте это. Неважно, что вы не в идеальной физической форме. Неважно, что вы точно не знаете, почему хотите идти. Неважно, что у вас есть сомнения. Многие паломники начинают Путь с сомнениями и вопросами, а заканчивают с миром и ясностью.

Хоть бы когда-нибудь вы смогли испытать Путь Святого Иакова. Возможно, это будет самый преобразующий опыт вашей жизни. И когда вернётесь, надеюсь, вы поделитесь своей историей с другими, чтобы больше людей решились на это невероятное путешествие.

Как говорят по-испански: "Ultreia!" (Вперёд!) - традиционное приветствие среди паломников Пути Святого Иакова.`,
      audioUrl: '/audio/lesson-7-3-reading.mp3'
    },
    exercises: ['ex-7-3-1', 'ex-7-3-2', 'ex-7-3-3', 'ex-7-3-4', 'ex-7-3-5']
  },

  // ============ МОДУЛЬ 8: УСЛОВНЫЕ ПРЕДЛОЖЕНИЯ (B1) ============

  'lesson-8-1': {
    id: 'lesson-8-1',
    title: 'Урок 1: Реальные условия (Tipo 1)',
    moduleId: 'module-8',
    grammar: {
      title: 'Условные предложения первого типа (Condicionales reales)',
      content: `
# Условные предложения Tipo 1 (Реальные условия)

Используются для описания **реальных**, **возможных** ситуаций в настоящем или будущем.

## Структура:

**Si + PRESENTE, FUTURO / IMPERATIVO / PRESENTE**

### Формула 1: Si + presente, futuro

| Условие (si + presente) | Результат (futuro) |
|-------------------------|---------------------|
| Si **llueve** | **llevaré** paraguas |
| Si **estudias** | **aprobarás** el examen |
| Si **tengo** tiempo | te **llamaré** |

**Примеры:**
- Si **hace** buen tiempo, **iremos** a la playa (Если будет хорошая погода, пойдем на пляж)
- Si **llegas** tarde, te **esperaré** (Если опоздаешь, я подожду)
- Si **necesitas** ayuda, me **dirás** (Если нужна помощь, скажешь мне)

### Формула 2: Si + presente, imperativo

| Условие | Команда |
|---------|---------|
| Si **tienes** frío | **cierra** la ventana |
| Si **estás** cansado | **descansa** |

**Примеры:**
- Si **ves** a María, **dile** que la llamo (Если увидишь Марию, скажи ей, что позвоню)
- Si **quieres** café, **prepáralo** (Если хочешь кофе, приготовь)

### Формула 3: Si + presente, presente

Для **универсальных истин**, **привычек**, **общих правил**:

**Примеры:**
- Si **calientas** el agua a 100°, **hierve** (Если нагреваешь воду до 100°, она кипит)
- Si **como** mucho, **engordo** (Если ем много, толстею)
- Si no **duermo** bien, **estoy** cansado (Если плохо сплю, я устаю)

## ¡IMPORTANTE!

⚠️ **НИКОГДА не используйте futuro после SI:**
- ❌ Si **llegaré** tarde... (НЕПРАВИЛЬНО)
- ✓ Si **llego** tarde... (ПРАВИЛЬНО)

⚠️ **Порядок можно менять:**
- Si llueve, me quedo en casa = Me quedo en casa si llueve
- Si estudias, aprobarás = Aprobarás si estudias

## Другие союзы (не только SI):

Эти же правила работают с другими условными союзами:

| Союз | Значение | Пример |
|------|----------|--------|
| **cuando** | когда | Cuando **termine**, te llamo |
| **en cuanto** | как только | En cuanto **llegues**, empezamos |
| **mientras** | пока | Mientras **esté** aquí, ayudo |
| **hasta que** | пока не | Hasta que **vuelvas**, espero |`,
      examples: [
        { spanish: 'Si estudias mucho, aprobarás el examen', russian: 'Если будешь много учиться, сдашь экзамен' },
        { spanish: 'Si hace sol mañana, iremos a la playa', russian: 'Если завтра будет солнечно, пойдем на пляж' },
        { spanish: 'Llámame si necesitas ayuda', russian: 'Позвони мне, если нужна помощь' },
        { spanish: 'Si ves a Juan, dile que lo busco', russian: 'Если увидишь Хуана, скажи, что ищу его' },
        { spanish: 'Si el agua hierve, apaga el fuego', russian: 'Если вода закипит, выключи огонь' }
      ]
    },
    vocabulary: [
      { word: 'la condición', translation: 'условие', audioUrl: null },
      { word: 'si', translation: 'если', audioUrl: null },
      { word: 'en caso de que', translation: 'в случае если', audioUrl: null },
      { word: 'a menos que', translation: 'если только не', audioUrl: null },
      { word: 'mientras', translation: 'пока', audioUrl: null },
      { word: 'cuando', translation: 'когда', audioUrl: null },
      { word: 'en cuanto', translation: 'как только', audioUrl: null },
      { word: 'hasta que', translation: 'пока не', audioUrl: null },
      { word: 'siempre que', translation: 'при условии что', audioUrl: null },
      { word: 'a no ser que', translation: 'разве что', audioUrl: null },
      { word: 'aprobar', translation: 'сдать (экзамен)', audioUrl: null },
      { word: 'suspender', translation: 'провалить (экзамен)', audioUrl: null },
      { word: 'conseguir', translation: 'достичь, получить', audioUrl: null },
      { word: 'lograr', translation: 'добиться', audioUrl: null },
      { word: 'realizar', translation: 'осуществить', audioUrl: null }
    ],
    readingText: {
      title: 'Planes para el futuro',
      content: `María está en su último año de universidad y piensa mucho en su futuro. Tiene muchos planes, pero también muchas dudas. "Si **consigo** el trabajo en Barcelona, **me mudaré** allí inmediatamente", piensa. "Pero si no me **aceptan**, **buscaré** otras opciones en Madrid o Valencia".

Su mejor amiga Laura le da consejos: "Si **quieres** ese trabajo, **prepara** bien la entrevista. Si **estudias** sobre la empresa, **causarás** buena impresión. Y si no **funciona**, no **te preocupes**: siempre hay otras oportunidades".

María sabe que tiene razón. "Si **trabajo** duro, **tendré** éxito", se repite a sí misma. "Y si las cosas no **salen** como planeo, **aprenderé** de la experiencia".

Mientras tanto, María también piensa en su vida personal. "Si **me mudo** a Barcelona, **estaré** lejos de mi familia", reflexiona. "Pero si **me quedo** aquí, quizás **pierda** esta gran oportunidad profesional".

Su madre le dice: "Hija, si **tomas** esta decisión, te **apoyaremos** completamente. Si **necesitas** volver a casa, siempre **tendrás** un lugar aquí. Y si **decides** quedarte en Barcelona, **iremos** a visitarte seguido".

El día de la entrevista llega. María está nerviosa. "Si **respondo** bien las preguntas, **tengo** posibilidades", piensa. "Si me **olvido** de algo, **será** terrible". Pero cuando entra en la oficina, se siente más tranquila.

El entrevistador es amable. "Si **tiene** alguna pregunta, **hágala** sin problema", le dice. María pregunta sobre el puesto, las responsabilidades, las oportunidades de crecimiento. La entrevista va muy bien.

Después de la entrevista, María llama a Laura: "¡Creo que fue bien! Si me **llaman** la próxima semana, **significa** que estoy en la segunda fase. Si no me **contactan**, **sabré** que no me eligieron".

Pasan tres días. María revisa su correo constantemente. "Si **llega** un email hoy, **lo abriré** inmediatamente", piensa. "Si no **recibo** noticias esta semana, **llamaré** para preguntar".

El viernes por la tarde, su teléfono suena. Es un número de Barcelona. "Hola María, si **todavía está** interesada en el puesto, **nos gustaría** invitarla a una segunda entrevista".

¡Sí! María está emocionada. "Si **voy** a la segunda entrevista, **daré** lo mejor de mí", decide. "Y si **me ofrecen** el trabajo, **lo aceptaré** sin dudarlo".

Laura la felicita: "¡Sabía que lo **conseguirías**! Si **sigues** así, **llegarás** muy lejos. Y cuando **empieces** el trabajo, **celebraremos** juntas".

Ahora María tiene que prepararse para la segunda entrevista. "Si **estudio** más sobre la empresa, **estaré** mejor preparada", piensa. "Si **practico** mis respuestas, **me sentiré** más segura. Y si **soy** yo misma, **será** suficiente".

Su padre también le da un consejo: "Hija, si **crees** en ti misma, los demás también **creerán** en ti. Si **vas** con confianza, **transmitirás** profesionalismo. Y recuerda: si esta oportunidad no **funciona**, **habrá** otras".

La noche antes de la segunda entrevista, María reflexiona: "Si **duermo** bien esta noche, **estaré** descansada mañana. Si **me levanto** temprano, **tendré** tiempo para prepararme bien. Y si **todo sale** bien, mañana a esta hora quizás **tendré** un nuevo trabajo".

Mañana sabrá el resultado. Pero una cosa es segura: si María **sigue** trabajando duro y **cree** en sí misma, **tendrá** éxito en cualquier camino que elija.`,
      translation: `Мария на последнем курсе университета и много думает о будущем. У неё много планов, но также много сомнений. "Если я получу работу в Барселоне, я переезжу туда немедленно", думает она. "Но если меня не примут, буду искать другие варианты в Мадриде или Валенсии".

Её лучшая подруга Лаура даёт ей советы: "Если ты хочешь эту работу, хорошо подготовься к собеседованию. Если ты изучишь информацию о компании, произведёшь хорошее впечатление. А если не получится, не волнуйся: всегда есть другие возможности".

Мария знает, что она права. "Если я буду усердно работать, у меня будет успех", повторяет она себе. "А если всё пойдёт не по плану, я научусь на этом опыте".

Тем временем Мария также думает о личной жизни. "Если я переезжу в Барселону, буду далеко от семьи", размышляет она. "Но если останусь здесь, возможно упущу эту большую профессиональную возможность".

Её мать говорит ей: "Дочка, если ты примешь это решение, мы полностью тебя поддержим. Если тебе нужно будет вернуться домой, у тебя всегда будет место здесь. А если решишь остаться в Барселоне, мы будем приезжать в гости часто".

Наступает день собеседования. Мария нервничает. "Если я хорошо отвечу на вопросы, у меня есть шансы", думает она. "Если что-то забуду, будет ужасно". Но когда она входит в офис, чувствует себя спокойнее.

Интервьюер приветливый. "Если у вас есть какой-либо вопрос, задавайте без проблем", говорит он ей. Мария спрашивает о должности, обязанностях, возможностях роста. Собеседование проходит очень хорошо.

После собеседования Мария звонит Лауре: "Думаю, всё прошло хорошо! Если мне позвонят на следующей неделе, значит я во второй фазе. Если не свяжутся, буду знать, что меня не выбрали".

Проходит три дня. Мария постоянно проверяет почту. "Если придёт письмо сегодня, открою его немедленно", думает она. "Если не получу новостей на этой неделе, позвоню, чтобы узнать".

В пятницу вечером звонит телефон. Это номер из Барселоны. "Здравствуйте, Мария, если вы всё ещё заинтересованы в должности, мы бы хотели пригласить вас на второе собеседование".

Да! Мария в восторге. "Если пойду на второе собеседование, сделаю всё возможное", решает она. "А если мне предложат работу, приму без колебаний".

Лаура её поздравляет: "Я знала, что ты справишься! Если продолжишь в том же духе, зайдёшь далеко. А когда начнёшь работу, отпразднуем вместе".

Теперь Марии нужно готовиться ко второму собеседованию. "Если изучу больше информации о компании, буду лучше подготовлена", думает она. "Если попрактикуюсь в ответах, буду чувствовать себя увереннее. А если буду сама собой, этого будет достаточно".

Её отец также даёт ей совет: "Дочка, если ты веришь в себя, другие тоже поверят в тебя. Если пойдёшь с уверенностью, будешь излучать профессионализм. И помни: если эта возможность не сработает, будут другие".

Ночью перед вторым собеседованием Мария размышляет: "Если хорошо высплюсь сегодня, завтра буду отдохнувшей. Если встану рано, будет время хорошо подготовиться. А если всё пройдёт хорошо, завтра в это время возможно у меня будет новая работа".

Завтра она узнает результат. Но одно точно: если Мария продолжит усердно работать и верить в себя, она добьётся успеха на любом пути, который выберет.`,
      audioUrl: '/audio/lesson-8-1-reading.mp3'
    },
    exercises: ['ex-8-1-1', 'ex-8-1-2', 'ex-8-1-3', 'ex-8-1-4', 'ex-8-1-5']
  },

  'lesson-8-2': {
    id: 'lesson-8-2',
    title: 'Урок 2: Нереальные условия (Tipo 2)',
    moduleId: 'module-8',
    grammar: {
      title: 'Условные предложения второго типа (Condicionales irreales)',
      content: `
# Условные предложения Tipo 2 (Нереальные/маловероятные условия)

Используются для описания **гипотетических**, **нереальных** или **маловероятных** ситуаций в **настоящем** или **будущем**.

## Структура:

**Si + IMPERFECTO DE SUBJUNTIVO, CONDICIONAL SIMPLE**

## Imperfecto de subjuntivo - образование:

**Основа: 3 лицо множественного числа Pretérito indefinido**

**Ellos hablar-ON → habla- + окончания**
**Ellos comier-ON → comie- + окончания**

| Лицо | Окончания | Hablar | Comer | Vivir |
|------|-----------|--------|-------|-------|
| yo | -ra / -se | hablara / hablase | comiera / comiese | viviera / viviese |
| tú | -ras / -ses | hablaras / hablases | comieras / comieses | vivieras / vivieses |
| él/ella | -ra / -se | hablara / hablase | comiera / comiese | viviera / viviese |
| nosotros | -ramos / -semos | habláramos / hablásemos | comiéramos / comiésemos | viviéramos / viviésemos |
| vosotros | -rais / -seis | hablarais / hablaseis | comierais | comieseis | vivierais / vivieseis |
| ellos | -ran / -sen | hablaran / hablasen | comieran / comiesen | vivieran / viviesen |

**В современном испанском обе формы (-ra и -se) равнозначны, но форма на -RA более распространена.**

### Неправильные глаголы:

Основа берется от **pretérito indefinido (ellos)**:

| Infinitivo | Ellos (indefinido) | Imperfecto subjuntivo |
|------------|--------------------|-----------------------|
| ser / ir | fueron | fuera, fueras, fuera... |
| tener | tuvieron | tuviera, tuvieras... |
| poder | pudieron | pudiera, pudieras... |
| hacer | hicieron | hiciera, hicieras... |
| decir | dijeron | dijera, dijeras... |
| estar | estuvieron | estuviera, estuvieras... |
| saber | supieron | supiera, supieras... |
| querer | quisieron | quisiera, quisieras... |
| venir | vinieron | viniera, vinieras... |
| poner | pusieron | pusiera, pusieras... |

## Condicional simple - повторение:

**Infinitivo + окончания: -ía, -ías, -ía, -íamos, -íais, -ían**

## Uso:

### 1. Ситуации противоречащие реальности СЕЙЧАС:

- **Si tuviera dinero, viajaría por el mundo** (Если бы у меня были деньги, я бы путешествовал - но их нет)
- **Si fuera rica, no trabajaría** (Если бы я была богатой, не работала бы - но я не богата)
- **Si viviera en España, hablaría español mejor** (Если бы я жил в Испании, говорил бы лучше по-испански - но я не живу)

### 2. Маловероятные ситуации в будущем:

- **Si me tocara la lotería, compraría una casa** (Если бы я выиграл в лотерею, купил бы дом - маловероятно)
- **Si encontrara un tesoro, sería millonario** (Если бы нашел сокровище, был бы миллионером)

### 3. Вежливые просьбы и советы:

- **Si pudieras ayudarme, te lo agradecería** (Если бы ты мог помочь, был бы благодарен - вежливая просьба)
- **¿Qué harías tú en mi lugar?** (Что бы ты сделал на моем месте?)

## ¡CUIDADO!

❌ **Si tendría dinero, viajaría** (НЕПРАВИЛЬНО - condicional после si)
✓ **Si tuviera dinero, viajaría** (ПРАВИЛЬНО - imperfecto subjuntivo после si)

## Разница Type 1 vs Type 2:

| Type 1 (реальное) | Type 2 (нереальное) |
|-------------------|---------------------|
| Si **tengo** dinero, **compraré** un coche | Si **tuviera** dinero, **compraría** un coche |
| (Если будут деньги - возможно) | (Если бы были - но их нет) |
| Si **hace** sol, **iremos** | Si **hiciera** sol, **iríamos** |
| (Если будет солнечно - возможно) | (Если бы было - но нет) |

## Примеры в контексте:

**¿Qué harías si...?** (Что бы ты сделал, если бы...?)

- Si **tuviera** un millón de euros, **viajaría** por todo el mundo
- Si **pudiera** hablar con cualquier persona, **elegiría** a mi abuelo
- Si **fuera** presidente, **cambiaría** muchas leyes
- Si **supiera** tocar la guitarra, **formaría** una banda
- Si **viviera** 200 años, **aprendería** todos los idiomas del mundo`,
      examples: [
        { spanish: 'Si tuviera más tiempo, aprendería a tocar piano', russian: 'Если бы у меня было больше времени, я бы научился играть на пианино' },
        { spanish: 'Si fuera rico, viajaría por todo el mundo', russian: 'Если бы я был богатым, путешествовал бы по всему миру' },
        { spanish: '¿Qué harías si ganaras la lotería?', russian: 'Что бы ты сделал, если бы выиграл в лотерею?' },
        { spanish: 'Si pudiera volar, iría a visitarte cada día', russian: 'Если бы я мог летать, навещал бы тебя каждый день' },
        { spanish: 'Si viviera en España, hablaría español perfectamente', russian: 'Если бы я жил в Испании, говорил бы по-испански идеально' }
      ]
    },
    vocabulary: [
      { word: 'soñar', translation: 'мечтать', audioUrl: null },
      { word: 'desear', translation: 'желать', audioUrl: null },
      { word: 'imaginar', translation: 'воображать', audioUrl: null },
      { word: 'suponer', translation: 'предполагать', audioUrl: null },
      { word: 'la hipótesis', translation: 'гипотеза', audioUrl: null },
      { word: 'irreal', translation: 'нереальный', audioUrl: null },
      { word: 'imposible', translation: 'невозможный', audioUrl: null },
      { word: 'improbable', translation: 'маловероятный', audioUrl: null },
      { word: 'el sueño', translation: 'мечта', audioUrl: null },
      { word: 'la fantasía', translation: 'фантазия', audioUrl: null },
      { word: 'ideal', translation: 'идеальный', audioUrl: null },
      { word: 'perfecto', translation: 'совершенный', audioUrl: null },
      { word: 'ganar la lotería', translation: 'выиграть в лотерею', audioUrl: null },
      { word: 'cambiar el mundo', translation: 'изменить мир', audioUrl: null },
      { word: 'en mi lugar', translation: 'на моем месте', audioUrl: null }
    ],
    readingText: {
      title: 'Si yo fuera...',
      content: `Un grupo de amigos está sentado en una cafetería hablando sobre sus sueños y fantasías. La pregunta del día es: "Si pudieras ser otra persona por un día, ¿quién serías?"

Ana empieza: "Si **pudiera** ser alguien por un día, **sería** una astronauta. Si **fuera** astronauta, **viajaría** al espacio y **vería** la Tierra desde arriba. Si **estuviera** en el espacio, **flotaría** en gravedad cero. ¡**Sería** increíble! Si **tuviera** esa oportunidad, **tomaría** mil fotos para mostrarles a todos".

Carlos responde: "Eso está bien, pero si yo **pudiera** elegir, **sería** un músico famoso. Si **fuera** músico, **tocaría** en estadios llenos de gente. Si **tuviera** ese talento, **compondría** canciones que llegaran al corazón de millones de personas. Y si **ganara** mucho dinero con la música, **ayudaría** a jóvenes artistas a empezar sus carreras".

Laura tiene otra idea: "Si yo **pudiera** ser alguien, **elegiría** ser una científica que descubre la cura para enfermedades graves. Si **encontrara** esa cura, **salvaría** millones de vidas. Si **tuviera** ese poder, **dedicaría** toda mi vida a la investigación. Nada me **haría** más feliz que ayudar a la humanidad de esa manera".

Miguel es más práctico: "Mis sueños son más simples. Si **tuviera** mucho dinero, no **trabajaría** tanto. Si no **necesitara** trabajar, **pasaría** más tiempo con mi familia. Si **pudiera**, **viajaría** con ellos por el mundo. Si **viviera** sin preocupaciones económicas, **sería** mucho más feliz".

Sofía dice: "Yo tengo una pregunta diferente: ¿Qué **harían** si pudieran volver al pasado? Si yo **pudiera** viajar en el tiempo, **volvería** a mi infancia. Si **fuera** niña otra vez, **jugaría** más y me **preocuparía** menos. Si **supiera** entonces lo que sé ahora, **disfrutaría** más de cada momento".

David añade: "Si yo **pudiera** cambiar algo del pasado, **estudiaría** más en la universidad. Si **hubiera** estudiado más, ahora **tendría** un mejor trabajo. Pero bueno, si **me arrepintiera** de todo, no **viviría** el presente. Si **pasara** todo el tiempo pensando en el pasado, **perdería** el hoy".

Ana pregunta: "¿Y qué **harían** si tuvieran un superpoder? Si yo **tuviera** un superpoder, **elegiría** poder volar. Si **pudiera** volar, **iría** a visitar a todos mis amigos cuando quisiera. Si **volara**, nunca más **estaría** atrapada en el tráfico".

Carlos ríe: "Si yo **tuviera** un superpoder, **sería** la invisibilidad. Si **fuera** invisible, **podría** entrar gratis a todos los conciertos. Aunque si lo **pensara** bien, eso no sería muy ético. Si **hiciera** eso, básicamente **estaría** robando".

Laura dice: "Mi superpoder sería leer mentes. Si **pudiera** leer mentes, **sabría** lo que realmente piensan las personas. Aunque si **tuviera** ese poder, quizás **descubriría** cosas que preferiría no saber. Si **supiera** todos los secretos de la gente, probablemente **sería** muy incómodo".

Miguel propone otra pregunta: "Si **pudieran** vivir en cualquier época histórica, ¿cuál **elegirían**? Si yo **pudiera**, **viviría** en el Renacimiento. Si **estuviera** en esa época, **conocería** a Leonardo da Vinci y Miguel Ángel. Si **viviera** entonces, **vería** cómo se creaban esas obras maestras".

Sofía responde: "Yo prefiero el futuro. Si **pudiera** ver el futuro, **viajaría** 100 años adelante. Si **estuviera** en 2125, **vería** qué tecnología existe. Si el mundo **fuera** mejor entonces, **sería** muy esperanzador. Pero si **fuera** peor, preferiría no saberlo".

David reflexiona: "¿Saben qué? Si yo **pudiera** cambiar algo, **cambiaría** el sistema educativo. Si la educación **fuera** diferente, los niños **aprenderían** más felices. Si las escuelas **enseñaran** habilidades prácticas, los jóvenes **estarían** mejor preparados para la vida. Si los maestros **ganaran** más dinero, **tendríamos** mejores profesionales educando a nuestros hijos".

Ana concluye: "Todas estas son fantasías bonitas. Pero si **pensara** en lo que realmente importa, **diría** que si **tuviera** salud, **tendría** todo. Si mi familia **estuviera** bien, yo **estaría** feliz. Si **pudiera** elegir entre riqueza y salud, **elegiría** salud sin dudar. Porque si **estás** sano, **puedes** conseguir todo lo demás. Pero si **pierdes** la salud, todo lo demás **pierde** sentido".

Todos asienten. Al final, si **pudieran** tener cualquier cosa, **elegirían** las mismas cosas simples: salud, amor, tiempo con seres queridos y paz. Las grandes fantasías son divertidas para imaginar, pero la verdadera felicidad está en las cosas simples que ya tienen.`,
      translation: `Группа друзей сидит в кафе и говорит о мечтах и фантазиях. Вопрос дня: "Если бы ты мог быть кем-то другим на один день, кем бы ты был?"

Ана начинает: "Если бы я могла быть кем-то на один день, я была бы астронавтом. Если бы я была астронавтом, я бы полетела в космос и увидела Землю сверху. Если бы я была в космосе, я бы плавала в невесомости. Это было бы невероятно! Если бы у меня была такая возможность, я бы сделала тысячу фотографий, чтобы показать всем".

Карлос отвечает: "Это хорошо, но если бы я мог выбирать, я был бы знаменитым музыкантом. Если бы я был музыкантом, я бы играл на стадионах, полных людей. Если бы у меня был такой талант, я бы сочинял песни, которые доходили бы до сердец миллионов людей. А если бы я зарабатывал много денег музыкой, я бы помогал молодым артистам начать свою карьеру".

У Лауры другая идея: "Если бы я могла быть кем-то, я бы выбрала быть учёным, который открывает лекарство от серьёзных болезней. Если бы я нашла это лекарство, я бы спасла миллионы жизней. Если бы у меня была такая сила, я бы посвятила всю свою жизнь исследованиям. Ничто не сделало бы меня счастливее, чем помочь человечеству таким образом".

Мигель более практичен: "Мои мечты проще. Если бы у меня было много денег, я бы не работал так много. Если бы мне не нужно было работать, я бы проводил больше времени с семьёй. Если бы я мог, я бы путешествовал с ними по миру. Если бы я жил без финансовых забот, я был бы гораздо счастливее".

София говорит: "У меня другой вопрос: что бы вы сделали, если бы могли вернуться в прошлое? Если бы я могла путешествовать во времени, я бы вернулась в детство. Если бы я снова была ребёнком, я бы больше играла и меньше волновалась. Если бы я тогда знала то, что знаю сейчас, я бы больше наслаждалась каждым моментом".

Давид добавляет: "Если бы я мог изменить что-то в прошлом, я бы больше учился в университете. Если бы я больше учился, у меня сейчас была бы лучшая работа. Но хорошо, если бы я сожалел обо всём, я бы не жил настоящим. Если бы я всё время думал о прошлом, я бы потерял сегодня".

Ана спрашивает: "А что бы вы сделали, если бы у вас была суперсила? Если бы у меня была суперсила, я бы выбрала способность летать. Если бы я могла летать, я бы навещала всех моих друзей, когда захочу. Если бы я летала, я бы никогда больше не застревала в пробках".

Карлос смеётся: "Если бы у меня была суперсила, это была бы невидимость. Если бы я был невидимым, я мог бы входить бесплатно на все концерты. Хотя если бы я хорошо подумал, это было бы не очень этично. Если бы я делал это, я бы в основном воровал".

Лаура говорит: "Моя суперсила была бы читать мысли. Если бы я могла читать мысли, я бы знала, что на самом деле думают люди. Хотя если бы у меня была такая сила, возможно я бы узнала вещи, которые предпочла бы не знать. Если бы я знала все секреты людей, вероятно было бы очень неловко".

Мигель предлагает другой вопрос: "Если бы вы могли жить в любую историческую эпоху, какую бы выбрали? Если бы я мог, я бы жил в эпоху Возрождения. Если бы я был в ту эпоху, я бы познакомился с Леонардо да Винчи и Микеланджело. Если бы я жил тогда, я бы видел, как создавались эти шедевры".

София отвечает: "Я предпочитаю будущее. Если бы я могла увидеть будущее, я бы путешествовала на 100 лет вперёд. Если бы я была в 2125 году, я бы увидела, какие существуют технологии. Если бы мир был лучше тогда, это было бы очень обнадёживающим. Но если бы он был хуже, я предпочла бы не знать".

Давид размышляет: "Знаете что? Если бы я мог что-то изменить, я бы изменил систему образования. Если бы образование было другим, дети бы учились более счастливо. Если бы школы учили практическим навыкам, молодёжь была бы лучше подготовлена к жизни. Если бы учителя зарабатывали больше денег, у нас были бы лучшие профессионалы, обучающие наших детей".

Ана заключает: "Всё это красивые фантазии. Но если бы я думала о том, что действительно важно, я бы сказала, что если бы у меня было здоровье, у меня было бы всё. Если бы моя семья была в порядке, я была бы счастлива. Если бы я могла выбирать между богатством и здоровьем, я бы выбрала здоровье без сомнений. Потому что если ты здоров, ты можешь получить всё остальное. Но если ты потеряешь здоровье, всё остальное теряет смысл".

Все кивают. В конце концов, если бы они могли иметь что угодно, они бы выбрали те же простые вещи: здоровье, любовь, время с близкими и мир. Большие фантазии интересно представлять, но настоящее счастье в простых вещах, которые у них уже есть.`,
      audioUrl: '/audio/lesson-8-2-reading.mp3'
    },
    exercises: ['ex-8-2-1', 'ex-8-2-2', 'ex-8-2-3', 'ex-8-2-4', 'ex-8-2-5']
  },

  'lesson-8-3': {
    id: 'lesson-8-3',
    title: 'Урок 3: Условия в прошлом (Tipo 3)',
    moduleId: 'module-8',
    grammar: {
      title: 'Условные предложения третьего типа (Condicionales pasados)',
      content: `
# Условные предложения Tipo 3 (Нереальные условия в прошлом)

Используются для описания **нереальных ситуаций в прошлом** - того, что **НЕ произошло**, но **могло бы** произойти при других обстоятельствах.

## Структура:

**Si + PLUSCUAMPERFECTO DE SUBJUNTIVO, CONDICIONAL COMPUESTO**

## Pluscuamperfecto de subjuntivo - образование:

**Imperfecto de subjuntivo глагола HABER + participio pasado**

| Лицо | Haber (imp. subj.) | + participio | Пример |
|------|-------------------|--------------|---------|
| yo | hubiera / hubiese | hablado/comido/vivido | hubiera hablado |
| tú | hubieras / hubieses | hablado/comido/vivido | hubieras comido |
| él/ella | hubiera / hubiese | hablado/comido/vivido | hubiera vivido |
| nosotros | hubiéramos / hubiésemos | hablado/comido/vivido | hubiéramos estado |
| vosotros | hubierais / hubieseis | hablado/comido/vivido | hubierais ido |
| ellos | hubieran / hubiesen | hablado/comido/vivido | hubieran sido |

## Condicional compuesto (perfecto) - образование:

**Condicional simple глагола HABER + participio pasado**

| Лицо | Haber (condicional) | + participio |
|------|---------------------|--------------|
| yo | habría | hablado/comido/vivido |
| tú | habrías | hablado/comido/vivido |
| él/ella | habría | hablado/comido/vivido |
| nosotros | habríamos | hablado/comido/vivido |
| vosotros | habríais | hablado/comido/vivido |
| ellos | habrían | hablado/comido/vivido |

## Uso - Сожаления и упущенные возможности:

### Формула:
**Si + hubiera/hubiese + participio, habría + participio**

**Примеры:**

- **Si hubiera estudiado, habría aprobado**
  (Если бы я учился, я бы сдал - но не учился и не сдал)

- **Si hubieras venido, te habrías divertido**
  (Если бы ты пришел, повеселился бы - но не пришел)

- **Si hubiera sabido, habría ido**
  (Если бы знал, пошел бы - но не знал и не пошел)

- **Si hubiéramos salido antes, habríamos llegado a tiempo**
  (Если бы вышли раньше, прибыли бы вовремя - но опоздали)

## Сравнение всех трех типов:

| Тип | Формула | Значение | Пример |
|-----|---------|----------|--------|
| **Tipo 1** | Si + presente, futuro | Реально, возможно | Si **estudias**, **aprobarás** |
| **Tipo 2** | Si + imp. subj., condicional | Нереально сейчас | Si **estudiaras**, **aprobarías** |
| **Tipo 3** | Si + plucp. subj., cond. compuesto | Нереально в прошлом | Si **hubieras estudiado**, **habrías aprobado** |

## Mismo ejemplo en los tres tipos:

**Тема: экзамен**

1. **Si estudias, aprobarás** - Если будешь учиться, сдашь (возможно, экзамен еще не был)
2. **Si estudiaras, aprobarías** - Если бы ты учился, сдал бы (но ты не учишься)
3. **Si hubieras estudiado, habrías aprobado** - Если бы ты учился, сдал бы (но не учился и провалил)

## Вариации Tipo 3:

### 1. Смешанные условия (Mixed conditionals):

**Прошлое условие → Настоящий результат:**

- **Si hubiera estudiado medicina, ahora sería doctor**
  (Если бы я изучал медицину, сейчас был бы врачом)

- **Si no hubiera fumado tanto, ahora estaría más sano**
  (Если бы не курил так много, сейчас был бы здоровее)

### 2. Выражение упрека (reproches):

- **Si me hubieras escuchado, no estarías en problemas**
  (Если бы ты меня послушал, не был бы в беде)

- **Si hubieras llegado a tiempo, habrías visto el comienzo**
  (Если бы пришел вовремя, увидел бы начало)

### 3. Con "de + infinitivo" (неформальная замена):

В разговорном испанском вместо pluscuamperfecto de subjuntivo часто используют **de + haber + participio**:

- **De haberlo sabido, habría venido** = Si lo hubiera sabido, habría venido
- **De tener dinero, lo habría comprado** = Si hubiera tenido dinero, lo habría comprado

## Otros marcadores condicionales:

| Выражение | Значение | Пример |
|-----------|----------|--------|
| **Como si** | как будто | Habla como si **supiera** todo |
| **Aunque** | хотя | Aunque **lloviera**, iría |
| **En caso de que** | в случае если | En caso de que **venga**, avísame |
| **A no ser que** | если только не | No iré a no ser que **vengas** |

## ¡ERRORES COMUNES!

❌ Si **hubiera tenido**, **tendría** dinero (смешивание времен неправильно)
✓ Si **hubiera tenido** dinero, lo **habría comprado** (оба в прошлом)
✓ Si **hubiera estudiado** medicina, **sería** doctor (прошлое→настоящее, OK)

❌ Si **habría sabido**, habría venido (condicional после si)
✓ Si **hubiera sabido**, habría venido (pluscuamperfecto subjuntivo после si)`,
      examples: [
        { spanish: 'Si hubiera estudiado más, habría aprobado el examen', russian: 'Если бы я больше учился, сдал бы экзамен' },
        { spanish: 'Si hubieras venido, te habrías divertido mucho', russian: 'Если бы ты пришел, очень повеселился бы' },
        { spanish: 'Si hubiera sabido, no habría dicho nada', russian: 'Если бы знал, ничего бы не сказал' },
        { spanish: 'Si hubiéramos salido antes, habríamos llegado a tiempo', russian: 'Если бы вышли раньше, прибыли бы вовремя' },
        { spanish: 'De haberlo sabido, habría actuado diferente', russian: 'Знай я это, поступил бы иначе' }
      ]
    },
    vocabulary: [
      { word: 'arrepentirse', translation: 'сожалеть, раскаиваться', audioUrl: null },
      { word: 'lamentar', translation: 'сожалеть', audioUrl: null },
      { word: 'el arrepentimiento', translation: 'сожаление, раскаяние', audioUrl: null },
      { word: 'la oportunidad perdida', translation: 'упущенная возможность', audioUrl: null },
      { word: 'el error', translation: 'ошибка', audioUrl: null },
      { word: 'la equivocación', translation: 'заблуждение, ошибка', audioUrl: null },
      { word: 'darse cuenta', translation: 'осознать, понять', audioUrl: null },
      { word: 'culpar', translation: 'винить', audioUrl: null },
      { word: 'la culpa', translation: 'вина', audioUrl: null },
      { word: 'perdonar', translation: 'прощать', audioUrl: null },
      { word: 'el perdón', translation: 'прощение', audioUrl: null },
      { word: 'la lección', translation: 'урок (в переносном смысле)', audioUrl: null },
      { word: 'aprender de los errores', translation: 'учиться на ошибках', audioUrl: null },
      { word: 'si hubiera sabido', translation: 'если бы я знал', audioUrl: null },
      { word: 'debería haber', translation: 'должен был бы', audioUrl: null }
    ],
    readingText: {
      title: 'Arrepentimientos y lecciones',
      content: `Roberto tiene 65 años y está sentado en el parque, reflexionando sobre su vida. Como todos, tiene algunos arrepentimientos sobre decisiones que tomó - o que no tomó - en el pasado.

"Si **hubiera estudiado** ingeniería como quería mi padre, **habría tenido** una carrera más estable", piensa. "Pero si **hubiera hecho** eso, nunca **habría descubierto** mi pasión por el arte. Si no **hubiera ido** a esa escuela de arte, no **habría conocido** a mi esposa Elena. Y si no la **hubiera conocido**, no **habría tenido** a mis tres hijos maravillosos. Así que, pensándolo bien, ¿fue realmente un error?"

Roberto recuerda cuando tenía 25 años. "Si **hubiera aceptado** ese trabajo en Nueva York, **habría ganado** mucho dinero. Si **hubiera vivido** allí, **habría tenido** una vida completamente diferente. Pero si me **hubiera mudado**, **habría estado** lejos de mi familia. Si **hubiera elegido** el dinero sobre la familia, ¿**habría sido** más feliz? Lo dudo".

Piensa en su hija mayor, Carmen. "Si le **hubiera dedicado** más tiempo cuando era niña, nuestra relación **sería** mejor ahora. Si no **hubiera trabajado** tanto, **habría visto** más de su infancia. Si **hubiera estado** presente en esos momentos importantes, quizás ahora **hablaríamos** más. Ese es un arrepentimiento que llevo conmigo".

Su hijo Pablo tuvo problemas en la adolescencia. "Si **hubiera sido** más estricto con él, quizás no **habría tenido** esos problemas con las drogas. Pero si **hubiera sido** demasiado estricto, tal vez **habría sido** peor. Si **hubiera sabido** qué hacer, lo **habría hecho**. Pero nadie te enseña a ser padre perfecto. Si alguien me **hubiera dado** un manual, **habría sido** útil", piensa con ironía.

Roberto recuerda una oportunidad de negocio. "Un amigo me propuso invertir en una empresa que ahora vale millones. Si **hubiera invertido** ese dinero, **sería** millonario. Si **hubiera tenido** el valor de arriesgar, mi vida **sería** muy diferente. Pero si **hubiera perdido** ese dinero, mi familia **habría sufrido**. Tomé la decisión segura. Si pudiera volver atrás, ¿**cambiaría** esa decisión? Probablemente no".

Piensa en su salud. "Si **hubiera dejado** de fumar antes, **estaría** más sano ahora. Si **hubiera hecho** más ejercicio, no **tendría** estos problemas de corazón. Si **hubiera cuidado** mejor mi salud, **habría tenido** más energía para jugar con mis nietos. Ese es otro arrepentimiento real".

Pero Roberto también piensa en las buenas decisiones. "Si no **hubiera arriesgado** todo para abrir mi propia galería de arte, **habría trabajado** para otros toda mi vida. Si no **hubiera seguido** mi pasión, **habría sido** infeliz. Si **hubiera escuchado** a la gente que decía que el arte no da dinero, nunca **habría tenido** la satisfación de vivir de lo que amo".

Recuerda un momento crucial. "Si no **hubiera perdonado** a Elena cuando tuvimos esa gran pelea hace 30 años, **habríamos divorciado**. Si **hubiera dejado** que el orgullo ganara, **habría perdido** al amor de mi vida. Si no **hubiera aprendido** que el perdón es más importante que tener razón, **estaría** solo ahora".

Su nieta Lucía se le acerca. Tiene 18 años y está llena de dudas sobre su futuro. "Abuelo, tengo miedo de tomar las decisiones equivocadas. ¿Y si elijo mal? ¿Y si **pierdo** oportunidades? ¿Y si me **arrepiento** después?"

Roberto sonríe. "Lucía, si **hubiera sabido** todo cuando era joven, quizás **habría evitado** algunos errores. Pero si no **hubiera cometido** esos errores, no **habría aprendido** las lecciones más importantes de mi vida. Si **hubiera tenido** miedo de equivocarme, nunca **habría hecho** nada".

"Si **hubiera esperado** a estar completamente seguro de cada decisión, **habría perdido** todas las oportunidades. Si no **hubiera arriesgado**, nunca **habría ganado**. Si **hubiera vivido** mi vida tratando de evitar errores, **habría evitado** también los mejores momentos".

"Algunos arrepentimientos son inevitables. Si **hubiera podido** ver el futuro, **habría hecho** algunas cosas diferentes. Pero la vida no funciona así. Si todos **pudiéramos** ver el futuro, no **tendríamos** que tomar decisiones, y las decisiones son lo que nos hace humanos".

Lucía escucha atentamente. Roberto continúa: "Si me **preguntaras** cuál es la lección más importante, te **diría** esto: Si **hubieras vivido** sin arriesgar nada, **habrías vivido**, pero no realmente. Si **tuvieras** la oportunidad de elegir entre una vida segura pero aburrida y una vida con riesgos pero llena de experiencias, ¿qué **elegirías**?"

"Los grandes arrepentimientos de la vida no son por las cosas que hiciste mal, sino por las cosas que nunca intentaste. Si **hubiera sido** más valiente, **habría intentado** más cosas. Si no **hubiera tenido** miedo, **habría viajado** más, **habría conocido** más gente, **habría probado** más experiencias".

"Pero también hay que ser sabio. Si **hubiera sido** completamente temerario, **habría arruinado** mi vida. El truco es encontrar el equilibrio. Si **hubiera sabido** eso a los 18, me **habría ahorrado** algunas preocupaciones".

Lucía abraza a su abuelo. "Gracias, abuelo. Si no **hubiera hablado** contigo hoy, **habría seguido** con miedo. Ahora entiendo que los errores son parte de aprender".

Roberto sonríe. Si alguien le **hubiera dicho** hace 40 años que sus arrepentimientos se **convertirían** en sabiduría, no lo **habría creído**. Pero así funciona la vida. Los errores del pasado son las lecciones del presente.

Y si **pudiera** dar un consejo a su yo joven, **sería** este: "No tengas miedo de equivocarte. Ten miedo de no intentar".`,
      translation: `Роберто 65 лет, и он сидит в парке, размышляя о своей жизни. Как у всех, у него есть некоторые сожаления о решениях, которые он принял - или не принял - в прошлом.

"Если бы я изучал инженерное дело, как хотел мой отец, у меня была бы более стабильная карьера", думает он. "Но если бы я сделал это, я бы никогда не открыл свою страсть к искусству. Если бы я не пошёл в ту художественную школу, я бы не встретил мою жену Елену. А если бы я её не встретил, у меня не было бы трёх замечательных детей. Так что, если подумать, было ли это действительно ошибкой?"

Роберто вспоминает, когда ему было 25 лет. "Если бы я принял ту работу в Нью-Йорке, я бы заработал много денег. Если бы я жил там, у меня была бы совершенно другая жизнь. Но если бы я переехал, я был бы далеко от семьи. Если бы я выбрал деньги вместо семьи, был бы я счастливее? Сомневаюсь".

Он думает о своей старшей дочери Кармен. "Если бы я посвятил ей больше времени, когда она была ребёнком, наши отношения были бы лучше сейчас. Если бы я не работал так много, я бы видел больше её детства. Если бы я присутствовал в те важные моменты, возможно сейчас мы бы больше разговаривали. Это сожаление, которое я ношу с собой".

У его сына Пабло были проблемы в подростковом возрасте. "Если бы я был более строгим с ним, возможно у него не было бы тех проблем с наркотиками. Но если бы я был слишком строгим, может быть было бы хуже. Если бы я знал, что делать, я бы это сделал. Но никто не учит быть идеальным отцом. Если бы кто-то дал мне инструкцию, это было бы полезно", думает он с иронией.

Роберто вспоминает деловую возможность. "Друг предложил мне инвестировать в компанию, которая сейчас стоит миллионы. Если бы я вложил те деньги, я был бы миллионером. Если бы у меня была смелость рискнуть, моя жизнь была бы очень другой. Но если бы я потерял те деньги, моя семья бы пострадала. Я принял безопасное решение. Если бы я мог вернуться назад, изменил бы я то решение? Вероятно, нет".

Он думает о здоровье. "Если бы я бросил курить раньше, я был бы здоровее сейчас. Если бы я больше занимался спортом, у меня не было бы этих проблем с сердцем. Если бы я лучше заботился о здоровье, у меня было бы больше энергии играть с внуками. Это ещё одно реальное сожаление".

Но Роберто также думает о хороших решениях. "Если бы я не рискнул всем, чтобы открыть свою собственную художественную галерею, я бы всю жизнь работал на других. Если бы я не последовал своей страсти, я был бы несчастен. Если бы я слушал людей, которые говорили, что искусство не приносит денег, я бы никогда не имел удовлетворения жить тем, что люблю".

Он вспоминает решающий момент. "Если бы я не простил Елену, когда у нас была та большая ссора 30 лет назад, мы бы развелись. Если бы я позволил гордости победить, я бы потерял любовь всей моей жизни. Если бы я не научился, что прощение важнее, чем быть правым, я был бы один сейчас".

Его внучка Люсия подходит к нему. Ей 18 лет, и она полна сомнений о будущем. "Дедушка, я боюсь принять неправильные решения. Что если я выберу неправильно? Что если я упущу возможности? Что если потом пожалею?"

Роберто улыбается. "Люсия, если бы я знал всё, когда был молодым, возможно я бы избежал некоторых ошибок. Но если бы я не совершил тех ошибок, я бы не выучил самые важные уроки в моей жизни. Если бы я боялся ошибиться, я бы никогда ничего не сделал".

"Если бы я ждал полной уверенности в каждом решении, я бы потерял все возможности. Если бы я не рисковал, я бы никогда не выиграл. Если бы я прожил жизнь, пытаясь избежать ошибок, я бы избежал также и лучших моментов".

"Некоторые сожаления неизбежны. Если бы я мог видеть будущее, я бы сделал некоторые вещи по-другому. Но жизнь так не работает. Если бы все мы могли видеть будущее, нам не нужно было бы принимать решения, а решения - это то, что делает нас людьми".

Люсия внимательно слушает. Роберто продолжает: "Если бы ты спросила меня, какой самый важный урок, я бы сказал вот что: Если бы ты прожила, не рискуя ничем, ты бы прожила, но не по-настоящему. Если бы у тебя был выбор между безопасной, но скучной жизнью и жизнью с рисками, но полной опыта, что бы ты выбрала?"

"Большие сожаления в жизни - это не то, что ты сделал неправильно, а то, что ты никогда не пытался. Если бы я был смелее, я бы попробовал больше вещей. Если бы я не боялся, я бы больше путешествовал, познакомился с большим количеством людей, попробовал больше опыта".

"Но также нужно быть мудрым. Если бы я был совершенно безрассудным, я бы разрушил свою жизнь. Хитрость в том, чтобы найти баланс. Если бы я знал это в 18, я бы избавил себя от некоторых беспокойств".

Люсия обнимает дедушку. "Спасибо, дедушка. Если бы я не поговорила с тобой сегодня, я бы продолжала бояться. Теперь я понимаю, что ошибки - часть обучения".

Роберто улыбается. Если бы кто-то сказал ему 40 лет назад, что его сожаления превратятся в мудрость, он бы не поверил. Но так работает жизнь. Ошибки прошлого - уроки настоящего.

И если бы он мог дать совет своему молодому я, это было бы: "Не бойся ошибиться. Бойся не попробовать".`,
      audioUrl: '/audio/lesson-8-3-reading.mp3'
    },
    exercises: ['ex-8-3-1', 'ex-8-3-2', 'ex-8-3-3', 'ex-8-3-4', 'ex-8-3-5']
  },

  // ============ МОДУЛЬ 9: ЛИТЕРАТУРА И КУЛЬТУРА (B1) ============

  'lesson-9-1': {
    id: 'lesson-9-1',
    title: 'Урок 1: Испанская литература',
    moduleId: 'module-9',
    grammar: {
      title: 'Обзор испанской литературы',
      content: `
# Historia de la literatura española

Испанская литература - одна из богатейших литературных традиций мира.

## 1. EDAD MEDIA - до XV века

### Cantar de Mio Cid (XII век)
Эпическая поэма о Сиде, национальном герое Испании.

## 2. SIGLO DE ORO - XVI-XVII века

### Miguel de Cervantes (1547-1616)
**"Don Quijote de la Mancha"** - величайший роман всех времен.

**Темы:** реальность vs воображение, идеализм, благородство.

**Знаменитая цитата:**
> "En un lugar de la Mancha, de cuyo nombre no quiero acordarme..."

### Lope de Vega (1562-1635)
Написал около 1500 пьес! **"Fuenteovejuna"** - драма о восстании.

### Calderón de la Barca (1600-1681)
**"La vida es sueño"** - философская драма.

## 3. SIGLO XIX - Романтизм

### Gustavo Adolfo Bécquer (1836-1870)
**"Rimas y Leyendas"** - романтические стихи.

## 4. GENERACIÓN DEL 27

### Federico García Lorca (1898-1936)
Величайший поэт XX века.

**Произведения:**
- **"Romancero gitano"**
- **"Bodas de sangre"**
- **"La casa de Bernarda Alba"**

**Темы:** любовь, смерть, судьба, Андалусия.

## 5. LITERATURA CONTEMPORÁNEA

- Carlos Ruiz Zafón - **"La sombra del viento"**
- Javier Marías - философская проза
- Mario Vargas Llosa - Нобелевская премия 2010`,
      examples: [
        { spanish: 'Don Quijote es la obra más famosa de Cervantes', russian: 'Дон Кихот - самое знаменитое произведение Сервантеса' },
        { spanish: 'Lorca fue uno de los mejores poetas del siglo XX', russian: 'Лорка был одним из лучших поэтов XX века' },
        { spanish: 'Me encanta leer poesía en español', russian: 'Мне очень нравится читать поэзию на испанском' }
      ]
    },
    vocabulary: [
      { word: 'la literatura', translation: 'литература', audioUrl: null },
      { word: 'el escritor', translation: 'писатель', audioUrl: null },
      { word: 'el poeta', translation: 'поэт', audioUrl: null },
      { word: 'la novela', translation: 'роман', audioUrl: null },
      { word: 'el cuento', translation: 'рассказ', audioUrl: null },
      { word: 'el poema', translation: 'стихотворение', audioUrl: null },
      { word: 'la obra de teatro', translation: 'пьеса', audioUrl: null },
      { word: 'el personaje', translation: 'персонаж', audioUrl: null },
      { word: 'la trama', translation: 'сюжет', audioUrl: null },
      { word: 'el tema', translation: 'тема', audioUrl: null },
      { word: 'el símbolo', translation: 'символ', audioUrl: null },
      { word: 'la metáfora', translation: 'метафора', audioUrl: null },
      { word: 'el siglo', translation: 'век', audioUrl: null },
      { word: 'la época', translation: 'эпоха', audioUrl: null },
      { word: 'el Premio Nobel', translation: 'Нобелевская премия', audioUrl: null }
    ],
    readingText: {
      title: 'Don Quijote: El ingenioso hidalgo',
      content: `Don Quijote de la Mancha es la obra más importante de la literatura española. Escrita por Miguel de Cervantes en dos partes (1605 y 1615), esta novela ha sido traducida a más idiomas que cualquier otro libro excepto la Biblia.

La historia comienza con Alonso Quijano, un hidalgo que lee tantas novelas de caballerías que pierde la razón. Decide convertirse en caballero andante con el nombre de Don Quijote de la Mancha. Encuentra una vieja armadura, toma un caballo flaco llamado Rocinante, y escoge a Dulcinea del Toboso como su dama.

Para su segunda salida, convence a Sancho Panza de ser su escudero. Sancho es todo lo contrario: bajo, gordo y práctico, mientras Don Quijote es alto, flaco e idealista. Juntos forman una de las parejas más famosas de la literatura.

El episodio más famoso es la aventura de los molinos de viento. Don Quijote ve molinos y cree que son gigantes. Sancho intenta explicarle que son molinos, pero Don Quijote no escucha. Ataca con su lanza, el viento mueve las aspas y lo arroja al suelo. Don Quijote insiste en que un mago convirtió a los gigantes en molinos.

Esta escena es perfecta para entender el mensaje. Don Quijote vive en fantasía: las ventas son castillos, las prostitutas son damas, los molinos son gigantes. Sancho representa la realidad, pero gradualmente también empieza a creer en las fantasías.

En la segunda parte, Don Quijote y Sancho se vuelven famosos. Sancho finalmente gobierna una ínsula con sorprendente sabiduría. Pero el final es melancólico. Don Quijote regresa a casa derrotado. En su lecho de muerte, recupera la cordura y muere cuerdo. Todos lloran porque prefieren al loco idealista que al sensato Alonso Quijano.

¿Cuál es el mensaje? Cervantes muestra el conflicto entre idealismo y realismo. Don Quijote es ridículo pero noble, valiente y generoso. Quiere hacer el bien y luchar contra la injusticia. ¿Es mejor vivir con nobles ideales aunque seamos llamados locos, o con los pies en la tierra sin grandes sueños?

Hoy, "luchar contra molinos de viento" significa luchar contra enemigos imaginarios. Pero el libro nos enseña que vale la pena soñar y luchar por un mundo mejor. Como dijo Don Quijote: "Yo sé quién soy". La locura de soñar es, a veces, la única cordura verdadera.`,
      translation: `Дон Кихот Ламанчский - самое важное произведение испанской литературы. Написанный Мигелем де Сервантесом в двух частях (1605 и 1615), этот роман был переведён на больше языков, чем любая другая книга, кроме Библии.

История начинается с Алонсо Кихано, идальго, который читает столько рыцарских романов, что теряет рассудок. Он решает стать странствующим рыцарем с именем Дон Кихот Ламанчский. Он находит старые доспехи, берёт худую лошадь по кличке Росинант и выбирает Дульсинею Тобосскую своей дамой.

Для второго выхода он убеждает Санчо Пансу быть его оруженосцем. Санчо - полная противоположность: низкий, толстый и практичный, в то время как Дон Кихот высокий, худой и идеалист. Вместе они образуют одну из самых знаменитых пар в литературе.

Самый известный эпизод - приключение с ветряными мельницами. Дон Кихот видит мельницы и думает, что это великаны. Санчо пытается объяснить, что это мельницы, но Дон Кихот не слушает. Он атакует с копьём, ветер вращает лопасти и сбрасывает его на землю. Дон Кихот настаивает, что волшебник превратил великанов в мельницы.

Эта сцена идеально демонстрирует послание. Дон Кихот живёт в фантазии: трактиры - это замки, проститутки - дамы, мельницы - великаны. Санчо представляет реальность, но постепенно и он начинает верить в фантазии.

Во второй части Дон Кихот и Санчо становятся знаменитыми. Санчо, наконец, управляет островом с удивительной мудростью. Но конец меланхоличен. Дон Кихот возвращается домой побеждённым. На смертном одре он обретает рассудок и умирает в здравом уме. Все плачут, потому что предпочитают сумасшедшего идеалиста разумному Алонсо Кихано.

Каково послание? Сервантес показывает конфликт между идеализмом и реализмом. Дон Кихот смешон, но благороден, храбр и великодушен. Он хочет творить добро и бороться с несправедливостью. Лучше ли жить с благородными идеалами, даже если нас называют сумасшедшими, или с ногами на земле без великих мечтаний?

Сегодня "бороться с ветряными мельницами" означает бороться с воображаемыми врагами. Но книга учит нас, что стоит мечтать и бороться за лучший мир. Как сказал Дон Кихот: "Я знаю, кто я". Безумие мечтать - иногда единственное настоящее здравомыслие.`,
      audioUrl: '/audio/lesson-9-1-reading.mp3'
    },
    exercises: ['ex-9-1-1', 'ex-9-1-2', 'ex-9-1-3', 'ex-9-1-4', 'ex-9-1-5']
  },

  'lesson-9-2': {
    id: 'lesson-9-2',
    title: 'Урок 2: Испанские традиции',
    moduleId: 'module-9',
    grammar: {
      title: 'Культура и традиции Испании',
      content: `
# Tradiciones españolas

## 1. FIESTAS PRINCIPALES

### Las Fallas (Валенсия, март)
Огромные скульптуры сжигаются в последнюю ночь.

### Semana Santa (Страстная неделя)
Религиозные процессии с платформами, особенно в Севилье.

### San Fermín (Памплона, июль)
Знаменитый **encierro** - бег быков по улицам.

### La Tomatina (Буньол, август)
Битва помидорами - 20,000 человек, 150 тонн помидоров!

### Nochevieja (31 декабря)
Традиция есть 12 виноградин под 12 ударов часов.

### Reyes Magos (6 января)
Три короля приносят подарки детям.

## 2. FLAMENCO

Андалузское искусство:
- **Cante** (пение)
- **Baile** (танец)
- **Toque** (гитара)
- **Duende** - магия исполнения

## 3. GASTRONOMÍA

### Las tapas
Маленькие закуски в барах.

**Популярные:**
- Jamón ibérico
- Tortilla española
- Patatas bravas
- Pulpo a la gallega

### Horario de comidas:
- Desayuno: 7-9
- Almuerzo: 14-15:30 (главный прием)
- Cena: 21-22:30 (поздний)

## 4. EXPRESIONES

- ¡Olé! - Браво!
- ¡Vale! - ОК!
- ¡Qué guay! - Как круто!`,
      examples: [
        { spanish: 'Me encanta ir de tapas', russian: 'Мне нравится ходить на тапас' },
        { spanish: 'La Semana Santa es impresionante', russian: 'Страстная неделя впечатляет' },
        { spanish: 'En España se cena muy tarde', russian: 'В Испании ужинают поздно' }
      ]
    },
    vocabulary: [
      { word: 'la fiesta', translation: 'праздник', audioUrl: null },
      { word: 'la tradición', translation: 'традиция', audioUrl: null },
      { word: 'la costumbre', translation: 'обычай', audioUrl: null },
      { word: 'el desfile', translation: 'парад', audioUrl: null },
      { word: 'bailar', translation: 'танцевать', audioUrl: null },
      { word: 'cantar', translation: 'петь', audioUrl: null },
      { word: 'la gastronomía', translation: 'гастрономия', audioUrl: null },
      { word: 'la tapa', translation: 'тапа', audioUrl: null },
      { word: 'el jamón', translation: 'хамон', audioUrl: null },
      { word: 'celebrar', translation: 'праздновать', audioUrl: null },
      { word: 'los fuegos artificiales', translation: 'фейерверки', audioUrl: null },
      { word: 'el traje típico', translation: 'традиционный костюм', audioUrl: null },
      { word: 'la procesión', translation: 'процессия', audioUrl: null },
      { word: 'el plato típico', translation: 'традиционное блюдо', audioUrl: null },
      { word: 'la celebración', translation: 'празднование', audioUrl: null }
    ],
    readingText: {
      title: 'Un año de fiestas españolas',
      content: `Si hay algo que caracteriza a España, son sus fiestas. Cada mes tiene celebraciones únicas.

Enero empieza con Reyes Magos el 6 de enero. La noche anterior, Melchor, Gaspar y Baltasar llegan en cabalgata. Los niños dejan zapatos en la puerta con agua para los camellos. Por la mañana, encuentran regalos si han sido buenos, o carbón dulce si no. Las familias comen Roscón de Reyes con una figura escondida dentro.

Marzo en Valencia significa Las Fallas. Durante todo el año, los valencianos construyen enormes esculturas de cartón llamadas "fallas". Durante cinco días, la ciudad se llena de música y pólvora. La mascletà al mediodía hace temblar toda la ciudad. La noche del 19, la Cremà, todas las fallas se queman. Es mágico y melancólico: meses de trabajo en cenizas.

Abril trae Semana Santa, especialmente impresionante en Sevilla. Los costaleros cargan pasos de toneladas al ritmo de tambores. Los nazarenos con capirotes caminan descalzos. Cuando pasa una Virgen bella, la gente grita "¡Guapa!" Una saeta surge de un balcón y todo se detiene.

Después de Semana Santa, Sevilla celebra la Feria de Abril. Miles de casetas con baile de sevillanas, rebujito y jamón. Las mujeres lucen trajes de flamenca, los caballos andaluces pasean. La feria dura una semana.

Julio trae San Fermines en Pamplona. El 6 de julio lanzan el chupinazo y gritan "¡Viva San Fermín!" Durante nueve días, cada mañana seis toros corren 850 metros en tres minutos. Miles de personas corren delante. Es aterrador y emocionante.

Agosto trae La Tomatina en Buñol. 20,000 personas se lanzan 150 toneladas de tomates durante una hora. Las calles se vuelven ríos rojos. Es absurdo y divertido.

Diciembre termina con Nochevieja. En toda España, la gente come doce uvas en doce segundos al ritmo de las campanadas - doce deseos para doce meses. Después, ¡fiesta hasta el amanecer!

Lo especial de las fiestas españolas es que no son espectáculos turísticos. Son tradiciones vivas que las comunidades practican apasionadamente. Muestran el carácter español: pasional, comunitario, festivo. Son la celebración de la vida misma.

Y cuando un extranjero pregunta cuál es la mejor fiesta, cualquier español responde: "¡La de mi pueblo, claro!"`,
      translation: `Если что-то характеризует Испанию - это праздники. Каждый месяц имеет уникальные празднования.

Январь начинается с Дня Трёх Королей 6 января. Накануне вечером Мельхиор, Гаспар и Бальтазар прибывают в процессии. Дети оставляют туфли у двери с водой для верблюдов. Утром они находят подарки, если были хорошими, или сладкий уголь, если нет. Семьи едят Королевский пирог со спрятанной внутри фигуркой.

Март в Валенсии означает Лас Фальяс. В течение всего года валенсийцы строят огромные картонные скульптуры, называемые "фальяс". В течение пяти дней город наполняется музыкой и порохом. Полуденная маскалета заставляет дрожать весь город. Ночью 19-го, Кремá, все фальяс сжигаются. Это волшебно и меланхолично: месяцы работы в пепле.

Апрель приносит Страстную неделю, особенно впечатляющую в Севилье. Костальеро несут платформы весом в тонны под ритм барабанов. Назарены в капюшонах идут босиком. Когда проходит красивая статуя Девы Марии, люди кричат "¡Guapa!" Саэта раздаётся с балкона, и всё останавливается.

После Страстной недели Севилья празднует Апрельскую ярмарку. Тысячи палаток с танцами севильяны, ребухито и хамоном. Женщины носят платья фламенко, андалузские лошади гуляют. Ярмарка длится неделю.

Июль приносит Сан-Фермины в Памплоне. 6 июля запускают чупиназо и кричат "¡Viva San Fermín!" В течение девяти дней каждое утро шесть быков пробегают 850 метров за три минуты. Тысячи людей бегут впереди. Это пугающе и захватывающе.

Август приносит Томатину в Буньоле. 20,000 человек бросают 150 тонн помидоров в течение часа. Улицы превращаются в красные реки. Это абсурдно и весело.

Декабрь заканчивается Новым годом. По всей Испании люди едят двенадцать виноградин за двенадцать секунд под ритм ударов колокола - двенадцать желаний на двенадцать месяцев. Потом - вечеринка до рассвета!

Особенность испанских праздников в том, что это не туристические представления. Это живые традиции, которые сообщества практикуют с страстью. Они показывают испанский характер: страстный, общинный, праздничный. Это празднование самой жизни.

И когда иностранец спрашивает, какой праздник лучший, любой испанец отвечает: "Праздник моего города, конечно!"`,
      audioUrl: '/audio/lesson-9-2-reading.mp3'
    },
    exercises: ['ex-9-2-1', 'ex-9-2-2', 'ex-9-2-3', 'ex-9-2-4', 'ex-9-2-5']
  },

  'lesson-9-3': {
    id: 'lesson-9-3',
    title: 'Урок 3: Современная культура',
    moduleId: 'module-9',
    grammar: {
      title: 'Cultura española contemporánea',
      content: `
# Cultura moderna

## 1. CINE

### Pedro Almodóvar (род. 1949)
Самый знаменитый режиссер. 2 Оскара.

**Фильмы:**
- "Todo sobre mi madre" (1999)
- "Hable con ella" (2002)
- "Volver" (2006)

## 2. MÚSICA

### Flamenco moderno:
- **Rosalía** - современное фламенко + урбан

### Pop:
- Alejandro Sanz
- Shakira

## 3. ARQUITECTURA

### Antoni Gaudí (1852-1926)
- **La Sagrada Familia** - строится с 1882
- **Park Güell**
- **Casa Batlló**

## 4. ARTE

### Pablo Picasso (1881-1973)
Основатель кубизма. **"Guernica"** (1937).

### Salvador Dalí (1904-1989)
Сюрреалист. Тающие часы.

## 5. DEPORTES

### Fútbol
Национальная страсть.
- Real Madrid vs FC Barcelona ("El Clásico")
- Чемпионы мира 2010

### Tenis
- Rafael Nadal
- Carlos Alcaraz

## 6. GASTRONOMÍA

### Ferran Adrià
Революционизировал кухню молекулярной гастрономией.

## 7. LITERATURA

- Carlos Ruiz Zafón - "La sombra del viento"
- Javier Marías - философская проза`,
      examples: [
        { spanish: 'Almodóvar es mi director favorito', russian: 'Альмодовар - мой любимый режиссер' },
        { spanish: 'La Sagrada Familia es impresionante', russian: 'Саграда Фамилия впечатляет' },
        { spanish: 'El fútbol es una pasión nacional', russian: 'Футбол - национальная страсть' }
      ]
    },
    vocabulary: [
      { word: 'el cine', translation: 'кино', audioUrl: null },
      { word: 'la película', translation: 'фильм', audioUrl: null },
      { word: 'el director', translation: 'режиссер', audioUrl: null },
      { word: 'la música', translation: 'музыка', audioUrl: null },
      { word: 'el cantante', translation: 'певец', audioUrl: null },
      { word: 'el arte', translation: 'искусство', audioUrl: null },
      { word: 'el pintor', translation: 'художник', audioUrl: null },
      { word: 'la arquitectura', translation: 'архитектура', audioUrl: null },
      { word: 'el edificio', translation: 'здание', audioUrl: null },
      { word: 'el deporte', translation: 'спорт', audioUrl: null },
      { word: 'el equipo', translation: 'команда', audioUrl: null },
      { word: 'el partido', translation: 'матч', audioUrl: null },
      { word: 'contemporáneo', translation: 'современный', audioUrl: null },
      { word: 'mundial', translation: 'мировой', audioUrl: null },
      { word: 'el actor', translation: 'актер', audioUrl: null }
    ],
    readingText: {
      title: 'España moderna: tradición y futuro',
      content: `Camino por Madrid en 2025 y veo un país que mezcla tradición y modernidad. Esta mañana pasé por la Puerta del Sol con su oso y madroño medieval, pero alrededor la gente llevaba smartphones y en pantallas se anunciaba el último filme español nominado al Oscar.

En una cafetería, sonaba Rosalía - la cantante que revolucionó el flamenco fusionándolo con reggaeton. Hace treinta años esto habría sido impensable. El flamenco era sagrado. Pero Rosalía demostró que puedes honrar la tradición transformándola. Sus videos tienen millones de visitas. Ha colaborado con Billie Eilish. El flamenco gitano-andaluz ahora suena en Tokio y Nueva York.

Fui al Museo Reina Sofía a ver el "Guernica" de Picasso. Este cuadro de 1937 sobre el bombardeo durante la Guerra Civil sigue siendo relevante. Picasso cambió el arte mundial. El cubismo que inventó todavía influye hoy.

Por la tarde, vi una película de Almodóvar. Sus películas son inconfundiblemente españolas - melodramáticas, coloridas, emotivas - pero hablan de temas universales. Ha ganado dos Oscars. Penélope Cruz y Antonio Banderas son estrellas de Hollywood pero siempre vuelven a España.

Pasé por el Bernabéu, casa del Real Madrid. El fútbol es una religión. "El Clásico" con Barcelona paraliza el país - 400 millones lo ven mundialmente. España ganó la Copa del Mundo en 2010. Toda España salió a celebrar. Todas las divisiones desaparecieron.

Cené en un restaurante de tapas modernizado - deconstrucciones, espumas. La influencia de Ferran Adrià está en todas partes. España tiene más restaurantes Michelin que nunca.

Caminé por Malasaña, el distrito hipster. Bares llenos, arte urbano, tiendas vintage. En una librería hojeé a Ruiz Zafón y Javier Marías - autores españoles traducidos a docenas de idiomas.

En el metro escuché español, inglés, árabe, chino. Madrid se ha vuelto internacional. España ha pasado de país de emigración a inmigración.

Esto trae desafíos. Cataluña quiere independencia. El País Vasco tiene su cultura. ¿Qué significa ser español con tantas identidades regionales? Esta tensión entre lo local y nacional define la España moderna.

Pero algo nunca cambia: la importancia de la familia, la pasión por la vida, la sobremesa, las plazas llenas de gente, las fiestas de pueblo.

España ha producido grandes artistas: Velázquez, Goya, Picasso, Dalí, Miró. Escritores como Cervantes, Lorca. Arquitectos como Gaudí y Calatrava. Cineastas como Buñuel y Almodóvar. Para un país pequeño, el impacto cultural ha sido inmenso.

El español es hablado por 600 millones mundialmente - el segundo idioma del mundo. España sigue siendo el corazón histórico del idioma.

Mañana iré a Barcelona a ver la Sagrada Familia de Gaudí, construyéndose durante 140 años. Es el símbolo perfecto: un proyecto ambicioso, único, que mezcla tradición e innovación, que ha tomado generaciones pero nunca perdió su visión.

España mira al futuro mientras honra el pasado. En esa tensión creativa está su genio.`,
      translation: `Иду по Мадриду в 2025 году и вижу страну, смешивающую традицию и современность. Сегодня утром я прошёл мимо Пуэрта-дель-Соль с её средневековым медведем и земляничным деревом, но вокруг люди носили смартфоны, а на экранах рекламировался последний испанский фильм, номинированный на Оскар.

В кафе играла Росалия - певица, которая революционизировала фламенко, слив его с реггетоном. Тридцать лет назад это было бы немыслимо. Фламенко было священным. Но Росалия показала, что можно чтить традицию, трансформируя её. Её видео имеют миллионы просмотров. Она сотрудничала с Билли Айлиш. Цыганско-андалузское фламенко теперь звучит в Токио и Нью-Йорке.

Я пошёл в музей Рейна София посмотреть "Гернику" Пикассо. Эта картина 1937 года о бомбардировке во время Гражданской войны остаётся актуальной. Пикассо изменил мировое искусство. Кубизм, который он изобрёл, до сих пор влияет на искусство сегодня.

Во второй половине дня я посмотрел фильм Альмодовара. Его фильмы безошибочно испанские - мелодраматические, красочные, эмоциональные - но говорят о универсальных темах. Он выиграл два Оскара. Пенелопа Крус и Антонио Бандерас - звёзды Голливуда, но всегда возвращаются в Испанию.

Я прошёл мимо Бернабеу, дома Реал Мадрида. Футбол - это религия. "Эль Класико" с Барселоной парализует страну - 400 миллионов смотрят по всему миру. Испания выиграла Чемпионат мира в 2010 году. Вся Испания вышла праздновать. Все разделения исчезли.

Я поужинал в модернизированном ресторане тапас - деконструкции, пены. Влияние Феррана Адриа повсюду. В Испании теперь больше ресторанов Мишлен, чем когда-либо.

Я прогулялся по Маласанье, хипстерскому району. Переполненные бары, уличное искусство, винтажные магазины. В книжном магазине я просматривал Руиса Сафона и Хавьера Мариаса - испанских авторов, переведённых на десятки языков.

В метро я слышал испанский, английский, арабский, китайский. Мадрид стал международным. Испания перешла от страны эмиграции к иммиграции.

Это приносит вызовы. Каталония хочет независимости. Страна Басков имеет свою культуру. Что значит быть испанцем с таким количеством региональных идентичностей? Это напряжение между местным и национальным определяет современную Испанию.

Но кое-что никогда не меняется: важность семьи, страсть к жизни, собремеса, площади, полные людей, деревенские праздники.

Испания произвела великих художников: Веласкес, Гойя, Пикассо, Дали, Миро. Писателей, как Сервантес, Лорка. Архитекторов, как Гауди и Калатрава. Кинорежиссёров, как Бунюэль и Альмодовар. Для маленькой страны культурное влияние было огромным.

На испанском говорят 600 миллионов человек по всему миру - второй язык мира. Испания остаётся историческим сердцем языка.

Завтра я поеду в Барселону, чтобы увидеть Саграда Фамилия Гауди, строящуюся уже 140 лет. Это идеальный символ: амбициозный, уникальный проект, который смешивает традицию и инновацию, который занял поколения, но никогда не терял своего видения.

Испания смотрит в будущее, чтя прошлое. В этом творческом напряжении её гений.`,
      audioUrl: '/audio/lesson-9-3-reading.mp3'
    },
    exercises: ['ex-9-3-1', 'ex-9-3-2', 'ex-9-3-3', 'ex-9-3-4', 'ex-9-3-5']
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
      { spanish: 'por favor', options: ['спасибо', 'пожалуйста', 'привет', 'пока'], correct: 1 },
      { spanish: '¿Qué tal?', options: ['как дела?', 'как семья?', 'большое спасибо', 'так себе'], correct: 0 },
      { spanish: 'Todo va bien.', options: ['так себе', 'все хорошо', 'как жизнь?', 'пожалуйста'], correct: 1 },
      { spanish: 'Muchas gracias.', options: ['пожалуйста', 'так себе', 'большое спасибо', 'как дела?'], correct: 2 },
      { spanish: 'Regular.', options: ['все хорошо', 'спасибо', 'так себе', 'как дела?'], correct: 2 },
      { spanish: 'Buenos días', options: ['доброе утро', 'добрый вечер', 'спокойной ночи', 'привет'], correct: 0 },
      { spanish: 'Buenas tardes', options: ['доброе утро', 'добрый день', 'спокойной ночи', 'пока'], correct: 1 },
      { spanish: 'Buenas noches', options: ['доброе утро', 'добрый день', 'добрый вечер/спокойной ночи', 'привет'], correct: 2 },
      { spanish: '¿Cómo estás?', options: ['как дела?', 'что нового?', 'как семья?', 'пока'], correct: 0 },
      { spanish: 'De nada', options: ['спасибо', 'пожалуйста', 'не за что', 'извините'], correct: 2 },
      { spanish: 'Perdón', options: ['привет', 'пока', 'извините', 'спасибо'], correct: 2 },
      { spanish: '¿Qué tal la familia?', options: ['как дела?', 'как семья?', 'что нового?', 'все хорошо'], correct: 1 }
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
      { word: 'señor', options: ['[сенор]', '[сеньор]', '[синор]', '[шеньор]'], correct: 1 },
      { word: 'gracias', options: ['[грасиас]', '[грациас]', '[грашиас]', '[граθиас]'], correct: 3 },
      { word: 'familia', options: ['[фамилия]', '[фамилиа]', '[вамилиа]', '[фамиља]'], correct: 1 },
      { word: 'español', options: ['[эспанол]', '[испаньол]', '[эспаньол]', '[испанол]'], correct: 2 },
      { word: 'buenos días', options: ['[буенос диас]', '[бвенос диас]', '[буэнос диас]', '[бьенос диас]'], correct: 2 },
      { word: 'llama', options: ['[лама]', '[льяма]', '[јама]', '[ляма]'], correct: 2 },
      { word: 'mujer', options: ['[мухер]', '[мужер]', '[муер]', '[мучер]'], correct: 0 },
      { word: 'cerveza', options: ['[сервеса]', '[θервеθа]', '[сервеза]', '[кервеза]'], correct: 1 },
      { word: 'ciudad', options: ['[сиудад]', '[θиудад]', '[киудад]', '[θьюдад]'], correct: 1 },
      { word: 'quiero', options: ['[куиеро]', '[квиеро]', '[киеро]', '[кьеро]'], correct: 2 },
      { word: 'hablar', options: ['[хаблар]', '[аблар]', '[габлар]', '[хабляр]'], correct: 1 },
      { word: 'rojo', options: ['[рохо]', '[рожо]', '[рохё]', '[рро-хо]'], correct: 0 },
      { word: 'adiós', options: ['[адиос]', '[адиос]', '[адьос]', '[адьёс]'], correct: 0 }
    ]
  },
  'ex-1-1-3': {
    id: 'ex-1-1-3',
    type: 'reading',
    title: 'Чтение',
    description: 'Прочитайте диалог и ответьте на вопросы',
    text: `
Pedro: ¡Hola! Buenos días. ¿Qué tal?
Ana: Bien, gracias. ¿Y tú?
Pedro: Todo va bien. ¿Qué tal la familia?
Ana: Más o menos bien, gracias. Mi madre está enferma, pero no es grave.
Pedro: Lo siento mucho. Me alegro de que no sea grave.
Ana: Gracias por preguntar. ¿Y tu familia?
Pedro: Todos están bien, gracias. Mi hermano vive en Madrid ahora.
Ana: ¡Qué bien! ¿Le gusta Madrid?
Pedro: Sí, le encanta. Trabaja en una empresa española.
Ana: Perfecto. Bueno, tengo que irme.
Pedro: Claro. ¡Hasta luego!
Ana: ¡Adiós! Que tengas un buen día.
Pedro: Igualmente. Muchas gracias.
    `,
    questions: [
      {
        question: 'Кто приветствует первым?',
        options: ['Ана', 'Педро', 'Оба', 'Никто'],
        correct: 1
      },
      {
        question: 'Какое время суток?',
        options: ['Утро', 'День', 'Вечер', 'Ночь'],
        correct: 0
      },
      {
        question: 'Как дела у семьи Аны?',
        options: ['Очень хорошо', 'Более или менее хорошо', 'Плохо', 'Отлично'],
        correct: 1
      },
      {
        question: 'Кто болен?',
        options: ['Мать Аны', 'Отец Педро', 'Брат Педро', 'Ана'],
        correct: 0
      },
      {
        question: 'Насколько серьезна болезнь?',
        options: ['Очень серьезно', 'Не серьезно', 'Критически', 'Неизвестно'],
        correct: 1
      },
      {
        question: 'Где сейчас живет брат Педро?',
        options: ['В Барселоне', 'В Мадриде', 'В Валенсии', 'В Севилье'],
        correct: 1
      },
      {
        question: 'Как брат Педро относится к Мадриду?',
        options: ['Не нравится', 'Так себе', 'Нравится', 'Очень нравится'],
        correct: 3
      },
      {
        question: 'Где работает брат Педро?',
        options: ['В русской компании', 'В испанской компании', 'В банке', 'В школе'],
        correct: 1
      },
      {
        question: 'Кто должен уйти?',
        options: ['Педро', 'Ана', 'Оба', 'Никто'],
        correct: 1
      },
      {
        question: 'Как Педро прощается?',
        options: ['Adiós', 'Hasta luego', 'Buenos días', 'Buenas noches'],
        correct: 1
      },
      {
        question: 'Что Ана желает Педро?',
        options: ['Спокойной ночи', 'Хорошего дня', 'Удачи', 'Ничего не желает'],
        correct: 1
      },
      {
        question: 'Что отвечает Педро на пожелание Аны?',
        options: ['De nada', 'Gracias', 'Igualmente', 'Perdón'],
        correct: 2
      },
      {
        question: 'Сколько раз упоминается слово "gracias" в диалоге?',
        options: ['Один раз', 'Два раза', 'Три раза', 'Четыре раза'],
        correct: 3
      },
      {
        question: 'Кто первым спрашивает о семье?',
        options: ['Ана', 'Педро', 'Никто', 'Оба одновременно'],
        correct: 1
      },
      {
        question: 'Какое общее настроение диалога?',
        options: ['Грустное', 'Дружелюбное', 'Формальное', 'Напряженное'],
        correct: 1
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
      { russian: 'Пока', correct: 'adiós' },
      { russian: 'Как дела?', correct: '¿qué tal?' },
      { russian: 'Все хорошо', correct: 'todo va bien' },
      { russian: 'Большое спасибо', correct: 'muchas gracias' },
      { russian: 'Так себе', correct: 'regular' },
      { russian: 'Доброе утро', correct: 'buenos días' },
      { russian: 'Добрый день', correct: 'buenas tardes' },
      { russian: 'Добрый вечер', correct: 'buenas noches' },
      { russian: 'Как семья?', correct: '¿qué tal la familia?' },
      { russian: 'Не за что', correct: 'de nada' },
      { russian: 'Извините', correct: 'perdón' },
      { russian: 'До скорого', correct: 'hasta luego' }
    ]
  },

  // Урок 1.2
  'ex-1-2-1': {
    id: 'ex-1-2-1',
    type: 'grammar',
    title: 'Род существительных',
    description: 'Определите род существительного (masculino или femenino)',
    questions: [
      { sentence: 'libro', options: ['masculino', 'femenino'], correct: 0 },
      { sentence: 'casa', options: ['masculino', 'femenino'], correct: 1 },
      { sentence: 'chico', options: ['masculino', 'femenino'], correct: 0 },
      { sentence: 'playa', options: ['masculino', 'femenino'], correct: 1 },
      { sentence: 'día', options: ['masculino', 'femenino'], correct: 0 },
      { sentence: 'mano', options: ['masculino', 'femenino'], correct: 1 },
      { sentence: 'problema', options: ['masculino', 'femenino'], correct: 0 },
      { sentence: 'padre', options: ['masculino', 'femenino'], correct: 0 },
      { sentence: 'madre', options: ['masculino', 'femenino'], correct: 1 },
      { sentence: 'sol', options: ['masculino', 'femenino'], correct: 0 },
      { sentence: 'flor', options: ['masculino', 'femenino'], correct: 1 },
      { sentence: 'ciudad', options: ['masculino', 'femenino'], correct: 1 },
      { sentence: 'avión', options: ['masculino', 'femenino'], correct: 0 },
      { sentence: 'estación', options: ['masculino', 'femenino'], correct: 1 },
      { sentence: 'lápiz', options: ['masculino', 'femenino'], correct: 0 }
    ]
  },
  'ex-1-2-2': {
    id: 'ex-1-2-2',
    type: 'grammar',
    title: 'Множественное число',
    description: 'Образуйте множественное число существительного',
    questions: [
      { sentence: 'libro', options: ['libros', 'libroes', 'libres', 'libro'], correct: 0 },
      { sentence: 'casa', options: ['casas', 'casaes', 'casses', 'casa'], correct: 0 },
      { sentence: 'ciudad', options: ['ciudads', 'ciudades', 'ciudas', 'ciudad'], correct: 1 },
      { sentence: 'flor', options: ['flors', 'flores', 'florres', 'flor'], correct: 1 },
      { sentence: 'lápiz', options: ['lápizs', 'lápizes', 'lápices', 'lápiz'], correct: 2 },
      { sentence: 'luz', options: ['luzs', 'luzes', 'luces', 'luz'], correct: 2 },
      { sentence: 'coche', options: ['coches', 'cochees', 'cochs', 'coche'], correct: 0 },
      { sentence: 'avión', options: ['aviónos', 'aviónes', 'aviones', 'aviós'], correct: 2 },
      { sentence: 'lunes', options: ['luneses', 'luns', 'lunos', 'lunes'], correct: 3 },
      { sentence: 'país', options: ['paiss', 'paises', 'países', 'país'], correct: 2 },
      { sentence: 'estudiante', options: ['estudiantes', 'estudiantos', 'estudiantees', 'estudiante'], correct: 0 },
      { sentence: 'padre', options: ['padres', 'padrees', 'padr'], correct: 0 },
      { sentence: 'hermano', options: ['hermanos', 'hermanoes', 'hermans', 'hermano'], correct: 0 },
      { sentence: 'problema', options: ['problemas', 'problemaes', 'problemoes', 'problema'], correct: 0 },
      { sentence: 'madre', options: ['madres', 'madrees', 'madr', 'madre'], correct: 0 }
    ]
  },
  'ex-1-2-3': {
    id: 'ex-1-2-3',
    type: 'grammar',
    title: 'Определенный артикль',
    description: 'Выберите правильный определенный артикль (el, la, los, las)',
    questions: [
      { sentence: '___ libro', options: ['el', 'la', 'los', 'las'], correct: 0 },
      { sentence: '___ casa', options: ['el', 'la', 'los', 'las'], correct: 1 },
      { sentence: '___ libros', options: ['el', 'la', 'los', 'las'], correct: 2 },
      { sentence: '___ casas', options: ['el', 'la', 'los', 'las'], correct: 3 },
      { sentence: '___ chico', options: ['el', 'la', 'los', 'las'], correct: 0 },
      { sentence: '___ chica', options: ['el', 'la', 'los', 'las'], correct: 1 },
      { sentence: '___ padre', options: ['el', 'la', 'los', 'las'], correct: 0 },
      { sentence: '___ madre', options: ['el', 'la', 'los', 'las'], correct: 1 },
      { sentence: '___ flores', options: ['el', 'la', 'los', 'las'], correct: 3 },
      { sentence: '___ sol', options: ['el', 'la', 'los', 'las'], correct: 0 },
      { sentence: '___ ciudad', options: ['el', 'la', 'los', 'las'], correct: 1 },
      { sentence: '___ estudiantes', options: ['el', 'la', 'los', 'las'], correct: 2 },
      { sentence: '___ agua', options: ['el', 'la', 'los', 'las'], correct: 0 },
      { sentence: '___ aula', options: ['el', 'la', 'los', 'las'], correct: 0 },
      { sentence: '___ día', options: ['el', 'la', 'los', 'las'], correct: 0 }
    ]
  },
  'ex-1-2-6': {
    id: 'ex-1-2-6',
    type: 'grammar',
    title: 'Неопределенный артикль',
    description: 'Выберите правильный неопределенный артикль (un, una, unos, unas)',
    questions: [
      { sentence: '___ libro', options: ['un', 'una', 'unos', 'unas'], correct: 0 },
      { sentence: '___ casa', options: ['un', 'una', 'unos', 'unas'], correct: 1 },
      { sentence: '___ libros', options: ['un', 'una', 'unos', 'unas'], correct: 2 },
      { sentence: '___ casas', options: ['un', 'una', 'unos', 'unas'], correct: 3 },
      { sentence: '___ chico', options: ['un', 'una', 'unos', 'unas'], correct: 0 },
      { sentence: '___ chica', options: ['un', 'una', 'unos', 'unas'], correct: 1 },
      { sentence: '___ amigos', options: ['un', 'una', 'unos', 'unas'], correct: 2 },
      { sentence: '___ flores', options: ['un', 'una', 'unos', 'unas'], correct: 3 },
      { sentence: '___ padre', options: ['un', 'una', 'unos', 'unas'], correct: 0 },
      { sentence: '___ madre', options: ['un', 'una', 'unos', 'unas'], correct: 1 },
      { sentence: '___ estudiante', options: ['un', 'una', 'unos', 'unas'], correct: 0 },
      { sentence: '___ coche', options: ['un', 'una', 'unos', 'unas'], correct: 0 },
      { sentence: '___ ciudad', options: ['un', 'una', 'unos', 'unas'], correct: 1 },
      { sentence: '___ problema', options: ['un', 'una', 'unos', 'unas'], correct: 0 },
      { sentence: '___ flor bonita', options: ['un', 'una', 'unos', 'unas'], correct: 1 }
    ]
  },
  'ex-1-2-4': {
    id: 'ex-1-2-4',
    type: 'reading-comprehension',
    title: 'Понимание прочитанного',
    description: 'Прочитайте текст "Mi día en la ciudad" и ответьте на вопросы',
    texts: [
      { text: 'Hola. Buenos días. Me llamo Carlos. Soy un chico. Soy un estudiante.', question: '¿Cómo se llama el chico?', options: ['Juan', 'Carlos', 'Pedro', 'Miguel'], correct: 1 },
      { text: 'Soy un chico. Soy un estudiante.', question: '¿Quién es Carlos?', options: ['un padre', 'un estudiante', 'un economista', 'un cliente'], correct: 1 },
      { text: 'El lunes es un día bonito. El sol brilla en la ciudad.', question: '¿Qué día es?', options: ['martes', 'viernes', 'lunes', 'domingo'], correct: 2 },
      { text: 'El sol brilla en la ciudad. La ciudad es grande.', question: '¿Cómo es la ciudad?', options: ['pequeña', 'grande', 'bonita', 'nueva'], correct: 1 },
      { text: 'El lunes es un día bonito.', question: '¿Cómo es el día?', options: ['malo', 'bonito', 'triste', 'largo'], correct: 1 },
      { text: 'Por la mañana, el padre y la madre toman un café en la casa.', question: '¿Dónde toman café?', options: ['en el museo', 'en la casa', 'en la calle', 'en la oficina'], correct: 1 },
      { text: 'El padre y la madre toman un café en la casa.', question: '¿Qué toman el padre y la madre?', options: ['agua', 'café', 'libro', 'flor'], correct: 1 },
      { text: 'El hermano lee un libro.', question: '¿Qué hace el hermano?', options: ['estudia', 'lee', 'trabaja', 'camina'], correct: 1 },
      { text: 'La chica estudia en el aula con una alumna.', question: '¿Dónde estudia la chica?', options: ['en casa', 'en el museo', 'en el aula', 'en la calle'], correct: 2 },
      { text: 'La chica estudia en el aula con una alumna.', question: '¿Con quién estudia la chica?', options: ['con el hermano', 'con una alumna', 'con el padre', 'con Carlos'], correct: 1 },
      { text: 'El amigo de Carlos vive en la calle. La calle es larga.', question: '¿Cómo es la calle?', options: ['corta', 'larga', 'pequeña', 'nueva'], correct: 1 },
      { text: 'En la calle hay un museo, una estación y una playa.', question: '¿Qué hay en la calle?', options: ['solo un museo', 'museo, estación y playa', 'solo una playa', 'oficina y casa'], correct: 1 },
      { text: 'El museo es interesante. La playa es bonita.', question: '¿Cómo es el museo?', options: ['interesante', 'grande', 'bonito', 'pequeño'], correct: 0 },
      { text: 'El museo es interesante. La playa es bonita.', question: '¿Cómo es la playa?', options: ['interesante', 'grande', 'bonita', 'pequeña'], correct: 2 },
      { text: 'Por la tarde, Carlos va al museo en un coche. El coche es rápido.', question: '¿Cómo es el coche?', options: ['lento', 'rápido', 'viejo', 'pequeño'], correct: 1 },
      { text: 'Por la tarde, Carlos va al museo.', question: '¿Adónde va Carlos?', options: ['a casa', 'al museo', 'a la playa', 'a la estación'], correct: 1 },
      { text: 'En el museo hay una flor bonita. La luz del sol ilumina la flor.', question: '¿Qué hay en el museo?', options: ['un libro', 'una flor bonita', 'un lápiz', 'un café'], correct: 1 },
      { text: 'En el museo hay una flor bonita. La luz del sol ilumina la flor.', question: '¿Qué ilumina la flor?', options: ['la luz de la luna', 'la luz del sol', 'la lámpara', 'la vela'], correct: 1 },
      { text: 'El economista trabaja en la oficina. El cliente espera.', question: '¿Dónde trabaja el economista?', options: ['en casa', 'en el museo', 'en la oficina', 'en la calle'], correct: 2 },
      { text: 'El economista trabaja en la oficina. El cliente espera.', question: '¿Qué hace el cliente?', options: ['trabaja', 'espera', 'lee', 'estudia'], correct: 1 },
      { text: 'El hombre y la mujer hablan.', question: '¿Qué hacen el hombre y la mujer?', options: ['hablan', 'caminan', 'estudian', 'trabajan'], correct: 0 },
      { text: 'Por la noche, Carlos está en casa. La casa es cómoda.', question: '¿Dónde está Carlos por la noche?', options: ['en el museo', 'en la oficina', 'en casa', 'en la calle'], correct: 2 },
      { text: 'La casa es cómoda.', question: '¿Cómo es la casa?', options: ['grande', 'pequeña', 'cómoda', 'bonita'], correct: 2 },
      { text: 'Carlos lee un libro con un lápiz en la mano.', question: '¿Qué tiene Carlos en la mano?', options: ['un libro', 'un lápiz', 'una flor', 'un café'], correct: 1 },
      { text: 'Carlos lee un libro con un lápiz en la mano.', question: '¿Qué lee Carlos?', options: ['un programa', 'un tema', 'un libro', 'un problema'], correct: 2 },
      { text: '¿Qué tal? Todo va bien.', question: '¿Cómo está todo?', options: ['mal', 'regular', 'bien', 'muy mal'], correct: 2 }
    ]
  },
  'ex-1-2-5': {
    id: 'ex-1-2-5',
    type: 'vocabulary',
    title: 'Словарь',
    description: 'Выберите правильный перевод слова',
    questions: [
      { spanish: 'chico', options: ['девочка', 'мальчик', 'друг', 'брат'], correct: 1 },
      { spanish: 'chica', options: ['мальчик', 'девочка', 'подруга', 'сестра'], correct: 1 },
      { spanish: 'amigo', options: ['брат', 'отец', 'друг', 'студент'], correct: 2 },
      { spanish: 'amiga', options: ['сестра', 'подруга', 'мать', 'девочка'], correct: 1 },
      { spanish: 'hermano', options: ['отец', 'друг', 'брат', 'дядя'], correct: 2 },
      { spanish: 'hermana', options: ['мать', 'сестра', 'подруга', 'тётя'], correct: 1 },
      { spanish: 'casa', options: ['улица', 'город', 'дом', 'машина'], correct: 2 },
      { spanish: 'libro', options: ['библиотека', 'книга', 'карандаш', 'бумага'], correct: 1 },
      { spanish: 'alumna', options: ['учительница', 'студентка', 'ученица', 'девочка'], correct: 2 },
      { spanish: 'museo', options: ['библиотека', 'театр', 'музей', 'кино'], correct: 2 },
      { spanish: 'playa', options: ['море', 'пляж', 'река', 'озеро'], correct: 1 },
      { spanish: 'papá', options: ['мама', 'папа', 'дядя', 'дедушка'], correct: 1 },
      { spanish: 'día', options: ['ночь', 'день', 'вечер', 'утро'], correct: 1 },
      { spanish: 'policía', options: ['врач', 'полицейский', 'солдат', 'пожарный'], correct: 1 },
      { spanish: 'mano', options: ['нога', 'рука', 'голова', 'палец'], correct: 1 },
      { spanish: 'radio', options: ['телевизор', 'радио', 'телефон', 'компьютер'], correct: 1 },
      { spanish: 'problema', options: ['вопрос', 'ответ', 'проблема', 'решение'], correct: 2 },
      { spanish: 'programa', options: ['план', 'проект', 'программа', 'задание'], correct: 2 },
      { spanish: 'tema', options: ['урок', 'вопрос', 'тема', 'ответ'], correct: 2 },
      { spanish: 'planeta', options: ['звезда', 'луна', 'планета', 'солнце'], correct: 2 },
      { spanish: 'padre', options: ['мать', 'отец', 'брат', 'друг'], correct: 1 },
      { spanish: 'madre', options: ['отец', 'мать', 'сестра', 'бабушка'], correct: 1 },
      { spanish: 'café', options: ['чай', 'молоко', 'кофе', 'сок'], correct: 2 },
      { spanish: 'calle', options: ['дом', 'город', 'улица', 'дорога'], correct: 2 },
      { spanish: 'coche', options: ['автобус', 'поезд', 'автомобиль', 'велосипед'], correct: 2 },
      { spanish: 'noche', options: ['день', 'утро', 'вечер', 'ночь'], correct: 3 },
      { spanish: 'hombre', options: ['женщина', 'мальчик', 'человек / мужчина', 'отец'], correct: 2 },
      { spanish: 'mujer', options: ['девочка', 'женщина', 'мать', 'сестра'], correct: 1 },
      { spanish: 'tarde', options: ['утро', 'ночь', 'вечер / день', 'полдень'], correct: 2 },
      { spanish: 'amor', options: ['дружба', 'любовь', 'счастье', 'радость'], correct: 1 },
      { spanish: 'sol', options: ['луна', 'звезда', 'солнце', 'небо'], correct: 2 },
      { spanish: 'avión', options: ['поезд', 'автобус', 'машина', 'самолет'], correct: 3 },
      { spanish: 'lápiz', options: ['ручка', 'бумага', 'карандаш', 'книга'], correct: 2 },
      { spanish: 'país', options: ['город', 'область', 'страна', 'деревня'], correct: 2 },
      { spanish: 'flor', options: ['дерево', 'трава', 'цветок', 'растение'], correct: 2 },
      { spanish: 'luz', options: ['тень', 'темнота', 'свет', 'огонь'], correct: 2 },
      { spanish: 'ciudad', options: ['страна', 'город', 'улица', 'дом'], correct: 1 },
      { spanish: 'estación', options: ['вокзал', 'станция', 'остановка', 'аэропорт'], correct: 1 },
      { spanish: 'felicidad', options: ['радость', 'грусть', 'счастье', 'удовольствие'], correct: 2 },
      { spanish: 'estudiante', options: ['учитель', 'студент', 'ученик', 'профессор'], correct: 1 },
      { spanish: 'cliente', options: ['продавец', 'клиент', 'покупатель', 'хозяин'], correct: 1 },
      { spanish: 'economista', options: ['юрист', 'бухгалтер', 'экономист', 'финансист'], correct: 2 },
      { spanish: 'lunes', options: ['воскресенье', 'суббота', 'понедельник', 'вторник'], correct: 2 },
      { spanish: 'dinero', options: ['золото', 'деньги', 'богатство', 'монета'], correct: 1 },
      { spanish: 'vacaciones', options: ['выходные', 'праздник', 'каникулы', 'отпуск'], correct: 2 },
      { spanish: 'agua', options: ['воздух', 'вода', 'земля', 'огонь'], correct: 1 },
      { spanish: 'aula', options: ['школа', 'класс', 'аудитория', 'кабинет'], correct: 2 },
      { spanish: 'blanco', options: ['чёрный', 'белый', 'серый', 'красный'], correct: 1 },
      { spanish: 'negro', options: ['белый', 'чёрный', 'серый', 'синий'], correct: 1 },
      { spanish: 'bueno', options: ['плохой', 'хороший', 'средний', 'отличный'], correct: 1 },
      { spanish: 'malo', options: ['хороший', 'средний', 'плохой', 'ужасный'], correct: 2 },
      { spanish: 'nuevo', options: ['старый', 'новый', 'древний', 'современный'], correct: 1 },
      { spanish: 'viejo', options: ['молодой', 'новый', 'старый', 'древний'], correct: 2 },
      { spanish: 'largo', options: ['короткий', 'длинный', 'широкий', 'узкий'], correct: 1 },
      { spanish: 'corto', options: ['длинный', 'короткий', 'высокий', 'низкий'], correct: 1 },
      { spanish: 'bonito', options: ['некрасивый', 'красивый', 'обычный', 'странный'], correct: 1 },
      { spanish: 'guapo', options: ['некрасивый', 'красивый', 'обычный', 'средний'], correct: 1 },
      { spanish: 'feo', options: ['красивый', 'некрасивый', 'обычный', 'хороший'], correct: 1 },
      { spanish: 'grande', options: ['маленький', 'средний', 'большой', 'огромный'], correct: 2 },
      { spanish: 'pequeño', options: ['большой', 'маленький', 'средний', 'крошечный'], correct: 1 },
      { spanish: 'alto', options: ['низкий', 'высокий', 'средний', 'большой'], correct: 1 },
      { spanish: 'bajo', options: ['высокий', 'средний', 'низкий', 'маленький'], correct: 2 },
      { spanish: 'joven', options: ['старый', 'молодой', 'средний', 'зрелый'], correct: 1 },
      { spanish: 'feliz', options: ['грустный', 'счастливый', 'весёлый', 'радостный'], correct: 1 },
      { spanish: 'alegre', options: ['грустный', 'весёлый', 'счастливый', 'радостный'], correct: 1 },
      { spanish: 'triste', options: ['весёлый', 'счастливый', 'грустный', 'печальный'], correct: 2 },
      { spanish: 'barato', options: ['дорогой', 'дешёвый', 'средний', 'бесплатный'], correct: 1 },
      { spanish: 'caro', options: ['дешёвый', 'средний', 'дорогой', 'бесплатный'], correct: 2 },
      { spanish: 'azul', options: ['красный', 'зелёный', 'синий', 'жёлтый'], correct: 2 },
      { spanish: 'verde', options: ['синий', 'зелёный', 'жёлтый', 'красный'], correct: 1 },
      { spanish: 'caliente', options: ['холодный', 'тёплый', 'горячий', 'прохладный'], correct: 2 },
      { spanish: 'frío', options: ['горячий', 'тёплый', 'холодный', 'прохладный'], correct: 2 },
      { spanish: 'difícil', options: ['лёгкий', 'простой', 'трудный', 'сложный'], correct: 2 },
      { spanish: 'fácil', options: ['трудный', 'лёгкий', 'простой', 'сложный'], correct: 1 },
      { spanish: 'interesante', options: ['скучный', 'интересный', 'занимательный', 'увлекательный'], correct: 1 },
      { spanish: 'rico', options: ['бедный', 'богатый', 'состоятельный', 'нищий'], correct: 1 },
      { spanish: 'pobre', options: ['богатый', 'бедный', 'нищий', 'состоятельный'], correct: 1 }
    ]
  },

  // Урок 1.3
  'ex-1-3-1': {
    id: 'ex-1-3-1',
    type: 'grammar',
    title: 'Упражнение на спряжение и согласование',
    description: 'Выбери фразу с глаголом и прилагательным в правильной форме',
    questions: [
      { pattern: 'Yo soy rusa.', result: 'María y yo somos rusas.', question: 'Преобразуйте предложение с María y yo', options: ['María y yo soy rusa.', 'María y yo somos rusas.', 'María y yo son rusas.', 'María y yo eres rusas.'], correct: 1 },
      { pattern: 'Tú eres economista.', result: 'Carmen y tú sois economistas.', question: 'Преобразуйте предложение с Carmen y tú', options: ['Carmen y tú eres economistas.', 'Carmen y tú sois economistas.', 'Carmen y tú son economistas.', 'Carmen y tú somos economistas.'], correct: 1 },
      { pattern: 'Luis es joven.', result: 'Luis y Andrés son jóvenes.', question: 'Преобразуйте предложение с Luis y Andrés', options: ['Luis y Andrés es joven.', 'Luis y Andrés son jóvenes.', 'Luis y Andrés sois jóvenes.', 'Luis y Andrés somos jóvenes.'], correct: 1 },
      { pattern: 'Tú estás casado.', result: 'Nosotros estamos casados.', question: 'Преобразуйте предложение с Nosotros', options: ['Nosotros estás casado.', 'Nosotros estamos casados.', 'Nosotros están casados.', 'Nosotros estoy casado.'], correct: 1 },
      { pattern: 'María y yo somos españolas.', result: 'César y Susana son españoles.', question: 'Преобразуйте предложение с César y Susana', options: ['César y Susana somos españolas.', 'César y Susana son españoles.', 'César y Susana sois españoles.', 'César y Susana es español.'], correct: 1 },
      { pattern: 'Ellas son de Madrid.', result: 'Vosotros sois de Madrid.', question: 'Преобразуйте предложение с Vosotros', options: ['Vosotros son de Madrid.', 'Vosotros sois de Madrid.', 'Vosotros somos de Madrid.', 'Vosotros es de Madrid.'], correct: 1 },
      { pattern: 'Los amigos están en la playa.', result: 'Enrique está en la playa.', question: 'Преобразуйте предложение с Enrique', options: ['Enrique están en la playa.', 'Enrique está en la playa.', 'Enrique estamos en la playa.', 'Enrique estoy en la playa.'], correct: 1 },
      { pattern: 'Luisa y tú estáis enfermos.', result: 'Luisa está enferma.', question: 'Преобразуйте предложение с Luisa', options: ['Luisa estáis enfermos.', 'Luisa está enferma.', 'Luisa estamos enfermas.', 'Luisa están enferma.'], correct: 1 },
      { pattern: 'Clara y yo somos felices.', result: 'Ustedes son felices.', question: 'Преобразуйте предложение с Ustedes', options: ['Ustedes somos felices.', 'Ustedes son felices.', 'Ustedes sois felices.', 'Ustedes es feliz.'], correct: 1 },
      { pattern: 'Vosotros estáis guapos.', result: 'Nosotras estamos guapas.', question: 'Преобразуйте предложение с Nosotras', options: ['Nosotras estáis guapos.', 'Nosotras estamos guapas.', 'Nosotras están guapas.', 'Nosotras estoy guapa.'], correct: 1 }
    ]
  },
  'ex-1-3-2': {
    id: 'ex-1-3-2',
    type: 'grammar',
    title: 'Выбор глагола SER или ESTAR',
    description: 'Выберите по смыслу глагол ser или estar и поставьте его в соответствующую форму',
    questions: [
      { sentence: 'Yo ___ estudiante.', options: ['soy', 'estoy', 'eres', 'estás'], correct: 0 },
      { sentence: 'Tú ___ en casa.', options: ['eres', 'soy', 'estás', 'estoy'], correct: 2 },
      { sentence: 'Ella ___ joven y guapa.', options: ['está', 'es', 'están', 'son'], correct: 1 },
      { sentence: 'Nosotros ___ en el museo.', options: ['somos', 'estamos', 'sois', 'estáis'], correct: 1 },
      { sentence: 'Vosotros ___ felices (по характеру).', options: ['estáis', 'sois', 'están', 'son'], correct: 1 },
      { sentence: 'Ellos ___ enfermos (сейчас).', options: ['son', 'están', 'sois', 'estáis'], correct: 1 },
      { sentence: 'Usted ___ de la ciudad.', options: ['está', 'es', 'están', 'son'], correct: 1 },
      { sentence: 'Mi hermano ___ alto.', options: ['está', 'es', 'están', 'son'], correct: 1 },
      { sentence: 'Mi hermana ___ en la playa.', options: ['es', 'está', 'son', 'están'], correct: 1 },
      { sentence: 'Los amigos ___ alegres (по характеру).', options: ['están', 'son', 'estáis', 'sois'], correct: 1 },
      { sentence: 'El libro ___ malo.', options: ['está', 'es', 'están', 'son'], correct: 1 },
      { sentence: 'Las niñas ___ en casa.', options: ['son', 'están', 'sois', 'estáis'], correct: 1 },
      { sentence: 'Yo ___ contento (сейчас).', options: ['soy', 'estoy', 'eres', 'estás'], correct: 1 },
      { sentence: 'María ___ buena (по характеру).', options: ['está', 'es', 'están', 'son'], correct: 1 },
      { sentence: 'Mi padre y mi madre ___ buenos.', options: ['están', 'son', 'estáis', 'sois'], correct: 1 }
    ]
  },
  'ex-1-3-3': {
    id: 'ex-1-3-3',
    type: 'translation',
    title: 'Перевод предложений на испанский язык',
    description: 'Переведите предложения на испанский, используя глаголы SER или ESTAR. ВАЖНО: Отсутствие знака ударения (á, é, í, ó, ú) и точки в конце предложения считается ошибкой!',
    questions: [
      { russian: 'Ты стройная, красивая и молодая.', correct: 'Tú eres delgada, guapa y joven.' },
      { russian: 'Мы — русские, из Москвы.', correct: 'Nosotros somos rusos, de Moscú.' },
      { russian: 'Они женаты и счастливы.', correct: 'Ellos están casados y son felices.' },
      { russian: 'Анна и Рауль на пляже.', correct: 'Ana y Raúl están en la playa.' },
      { russian: 'Книга плохая и дорогая.', correct: 'El libro es malo y caro.' },
      { russian: 'Девочки дома.', correct: 'Las niñas están en casa.' },
      { russian: 'Я в Испании. Я счастлив.', correct: 'Yo estoy en España. Yo soy feliz.' },
      { russian: 'Мария и Елена — студентки. Они из Испании.', correct: 'María y Elena son estudiantes. Ellas son de España.' },
      { russian: 'Филипп — брат Мерседес.', correct: 'Felipe es el hermano de Mercedes.' },
      { russian: 'Сеньора, Вы веселая и добрая.', correct: 'Señora, Usted es alegre y buena.' },
      { russian: 'Я студент.', correct: 'Yo soy estudiante.' },
      { russian: 'Ты дома.', correct: 'Tú estás en casa.' },
      { russian: 'Он молодой.', correct: 'Él es joven.' },
      { russian: 'Она в музее.', correct: 'Ella está en el museo.' },
      { russian: 'Мы счастливы.', correct: 'Nosotros somos felices.' },
      { russian: 'Вы на пляже.', correct: 'Vosotros estáis en la playa.' },
      { russian: 'Они студенты.', correct: 'Ellos son estudiantes.' },
      { russian: 'Я хорошо себя чувствую.', correct: 'Yo estoy bien.' },
      { russian: 'Мой брат высокий.', correct: 'Mi hermano es alto.' },
      { russian: 'Моя сестра больна.', correct: 'Mi hermana está enferma.' }
    ]
  },
  'ex-1-3-4': {
    id: 'ex-1-3-4',
    type: 'grammar',
    title: 'Completa con la forma correcta de SER o ESTAR',
    description: 'Elige la conjugación correcta (soy, eres, es... o estoy, estás, está...) para cada frase, según el significado (característica o ubicación/estado)',
    questions: [
      { sentence: 'La noche ________ fría.', options: ['es', 'está', 'son', 'están'], correct: 0 },
      { sentence: 'Nosotros ________ clientes ricos.', options: ['somos', 'estamos', 'sois', 'estáis'], correct: 0 },
      { sentence: 'Mi hermano ________ soltero.', options: ['es', 'está', 'son', 'están'], correct: 0 },
      { sentence: 'El libro ________ en la mesa.', options: ['está', 'es', 'están', 'son'], correct: 0 },
      { sentence: 'Tú ________ economista.', options: ['eres', 'estás', 'soy', 'estoy'], correct: 0 },
      { sentence: 'Los aviones ________ grandes.', options: ['son', 'están', 'es', 'está'], correct: 0 },
      { sentence: 'La flor ________ verde y bonita.', options: ['es', 'está', 'son', 'están'], correct: 0 },
      { sentence: 'Nosotros ________ enfermos ahora.', options: ['estamos', 'somos', 'estáis', 'sois'], correct: 0 },
      { sentence: 'El día ________ largo.', options: ['es', 'está', 'son', 'están'], correct: 0 },
      { sentence: '¿Dónde ________ los chicos?', options: ['están', 'son', 'está', 'es'], correct: 0 }
    ]
  },
  'ex-1-3-5': {
    id: 'ex-1-3-5',
    type: 'grammar',
    title: 'Completa con SER o ESTAR - Parte 2',
    description: 'Elige la conjugación correcta para cada frase, según el significado (característica o ubicación/estado)',
    questions: [
      { sentence: 'Yo ________ Ana y ________ una chica.', options: ['soy... soy', 'estoy... estoy', 'soy... estoy', 'estoy... soy'], correct: 0 },
      { sentence: 'El padre ________ un hombre alto y bueno.', options: ['es', 'está', 'son', 'están'], correct: 0 },
      { sentence: 'Ella ________ mi amiga María.', options: ['es', 'está', 'son', 'están'], correct: 0 },
      { sentence: 'Tú ________ mi profesor/a.', options: ['eres', 'estás', 'soy', 'estoy'], correct: 0 },
      { sentence: 'Mi trabajo ________ difícil.', options: ['es', 'está', 'son', 'están'], correct: 0 },
      { sentence: 'Mi hermana ________ contenta ahora.', options: ['está', 'es', 'están', 'son'], correct: 0 },
      { sentence: 'Él ________ en casa.', options: ['está', 'es', 'están', 'son'], correct: 0 },
      { sentence: 'Yo ________ en España.', options: ['estoy', 'soy', 'estás', 'eres'], correct: 0 },
      { sentence: 'Ustedes ________ casados.', options: ['están', 'son', 'estáis', 'sois'], correct: 0 },
      { sentence: 'Nosotras ________ en la playa.', options: ['estamos', 'somos', 'estáis', 'sois'], correct: 0 }
    ]
  },
  'ex-1-2-7': {
    id: 'ex-1-2-7',
    type: 'grammar',
    title: 'Согласование существительных с прилагательными',
    description: 'A) Согласование по роду (Единственное число). Образец: un señor gordo → una señora gorda',
    questions: [
      { pattern: 'un día largo', options: ['una calle larga', 'una calle largo', 'un calle largo', 'un calle larga'], correct: 0 },
      { pattern: 'un coche caro', options: ['una casa cara', 'una casa caro', 'un casa caro', 'un casa cara'], correct: 0 },
      { pattern: 'un hombre casado', options: ['una mujer casada', 'una mujer casado', 'un mujer casado', 'un mujer casada'], correct: 0 },
      { pattern: 'un café caliente', options: ['una mano caliente', 'una mano caliento', 'un mano caliente', 'un mano caliento'], correct: 0 },
      { pattern: 'un padre feliz', options: ['una madre feliz', 'una madre feliza', 'un madre feliz', 'un madre feliza'], correct: 0 },
      { pattern: 'un museo grande', options: ['una ciudad grande', 'una ciudad granda', 'un ciudad grande', 'un ciudad granda'], correct: 0 },
      { pattern: 'un tema raro', options: ['una operación rara', 'una operación raro', 'un operación raro', 'un operación rara'], correct: 0 },
      { pattern: 'un policía joven', options: ['una señorita joven', 'una señorita jovina', 'un señorita joven', 'un señorita jovina'], correct: 0 }
    ]
  },
  'ex-1-2-8': {
    id: 'ex-1-2-8',
    type: 'grammar',
    title: 'Согласование по числу (Множественное число)',
    description: 'B) Согласование по числу. Образец: una casa nueva → las casas nuevas',
    questions: [
      { pattern: 'un libro interesante', options: ['los libros interesantes', 'los libros interesante', 'las libros interesantes', 'las libros interesante'], correct: 0 },
      { pattern: 'una flor blanca', options: ['las flores blancas', 'las flores blanca', 'los flores blancas', 'los flores blanca'], correct: 0 },
      { pattern: 'un amigo enfermo', options: ['los amigos enfermos', 'los amigos enfermo', 'las amigos enfermos', 'las amigos enfermo'], correct: 0 },
      { pattern: 'una mujer fea', options: ['las mujeres feas', 'las mujeres fea', 'los mujeres feas', 'los mujeres fea'], correct: 0 },
      { pattern: 'un problema grave', options: ['los problemas graves', 'los problemas grave', 'las problemas graves', 'las problemas grave'], correct: 0 },
      { pattern: 'una chica alegre', options: ['las chicas alegres', 'las chicas alegre', 'los chicas alegres', 'los chicas alegre'], correct: 0 },
      { pattern: 'un avión pequeño', options: ['los aviones pequeños', 'los aviones pequeño', 'las aviones pequeños', 'las aviones pequeño'], correct: 0 },
      { pattern: 'una cuestión regular', options: ['las cuestiones regulares', 'las cuestiones regular', 'los cuestiones regulares', 'los cuestiones regular'], correct: 0 }
    ]
  },
  'ex-1-2-9': {
    id: 'ex-1-2-9',
    type: 'vocabulary',
    title: 'Замените прилагательные на антонимы',
    description: 'Замените прилагательные в словосочетаниях на их антонимы',
    questions: [
      { spanish: 'un libro nuevo', options: ['un libro viejo', 'un libro malo', 'un libro pequeño', 'un libro feo'], correct: 0 },
      { spanish: 'una casa grande', options: ['una casa pequeña', 'una casa mala', 'una casa fea', 'una casa vieja'], correct: 0 },
      { spanish: 'un chico alto', options: ['un chico bajo', 'un chico pequeño', 'un chico gordo', 'un chico feo'], correct: 0 },
      { spanish: 'una chica guapa', options: ['una chica fea', 'una chica mala', 'una chica baja', 'una chica vieja'], correct: 0 },
      { spanish: 'un día bueno', options: ['un día malo', 'un día pequeño', 'un día corto', 'un día feo'], correct: 0 },
      { spanish: 'un café caliente', options: ['un café frío', 'un café malo', 'un café barato', 'un café pequeño'], correct: 0 },
      { spanish: 'un hombre rico', options: ['un hombre pobre', 'un hombre malo', 'un hombre bajo', 'un hombre feo'], correct: 0 },
      { spanish: 'una calle larga', options: ['una calle corta', 'una calle pequeña', 'una calle mala', 'una calle fea'], correct: 0 },
      { spanish: 'un coche caro', options: ['un coche barato', 'un coche malo', 'un coche pequeño', 'un coche viejo'], correct: 0 },
      { spanish: 'un amigo feliz', options: ['un amigo triste', 'un amigo malo', 'un amigo enfermo', 'un amigo bajo'], correct: 0 },
      { spanish: 'una flor blanca', options: ['una flor negra', 'una flor mala', 'una flor pequeña', 'una flor fea'], correct: 0 },
      { spanish: 'un hombre joven', options: ['un hombre viejo', 'un hombre malo', 'un hombre bajo', 'un hombre feo'], correct: 0 },
      { spanish: 'un chico delgado', options: ['un chico gordo', 'un chico malo', 'un chico bajo', 'un chico feo'], correct: 0 },
      { spanish: 'una casa bonita', options: ['una casa fea', 'una casa mala', 'una casa pequeña', 'una casa vieja'], correct: 0 },
      { spanish: 'un problema difícil', options: ['un problema fácil', 'un problema malo', 'un problema pequeño', 'un problema viejo'], correct: 0 }
    ]
  },
  'ex-1-2-10': {
    id: 'ex-1-2-10',
    type: 'translation',
    title: 'Переведите на испанский язык словосочетания',
    description: 'Переведите словосочетания на испанский язык, используя определенные артикли. ВАЖНО: Отсутствие знака ударения (á, é, í, ó, ú) считается ошибкой!',
    questions: [
      { russian: 'большой дом', correct: 'la casa grande' },
      { russian: 'красивая книга', correct: 'el libro bonito' },
      { russian: 'молодой студент', correct: 'el estudiante joven' },
      { russian: 'хорошая мать', correct: 'la madre buena' },
      { russian: 'высокий отец', correct: 'el padre alto' },
      { russian: 'маленький брат', correct: 'el hermano pequeño' },
      { russian: 'красивая сестра', correct: 'la hermana guapa' },
      { russian: 'интересный музей', correct: 'el museo interesante' },
      { russian: 'красивый пляж', correct: 'la playa bonita' },
      { russian: 'большой город', correct: 'la ciudad grande' },
      { russian: 'длинная улица', correct: 'la calle larga' },
      { russian: 'горячий кофе', correct: 'el café caliente' },
      { russian: 'холодная ночь', correct: 'la noche fría' },
      { russian: 'белое солнце', correct: 'el sol blanco' },
      { russian: 'дорогая машина', correct: 'el coche caro' },
      { russian: 'синий цветок', correct: 'la flor azul' },
      { russian: 'зелёная машина', correct: 'el coche verde' },
      { russian: 'счастливый друг', correct: 'el amigo feliz' },
      { russian: 'довольная подруга', correct: 'la amiga contenta' },
      { russian: 'больная женщина', correct: 'la mujer enferma' }
    ]
  },

  // Упражнения урока 1.4
  'ex-1-4-1': {
    id: 'ex-1-4-1',
    type: 'vocabulary',
    title: 'Профессии',
    description: 'Выберите правильный перевод профессии',
    questions: [
      { spanish: 'médico', options: ['учитель', 'врач', 'художник', 'юрист'], correct: 1 },
      { spanish: 'profesor', options: ['преподаватель', 'писатель', 'музыкант', 'повар'], correct: 0 },
      { spanish: 'abogado', options: ['актер', 'адвокат', 'банкир', 'гид'], correct: 1 },
      { spanish: 'camarero', options: ['строитель', 'продавец', 'официант', 'инженер'], correct: 2 },
      { spanish: 'ingeniero', options: ['инженер', 'поэт', 'журналист', 'медсестра'], correct: 0 },
      { spanish: 'periodista', options: ['повар', 'журналист', 'художник', 'актер'], correct: 1 },
      { spanish: 'músico', options: ['музыкант', 'писатель', 'экономист', 'поэт'], correct: 0 },
      { spanish: 'constructor', options: ['продавец', 'врач', 'строитель', 'юрист'], correct: 2 },
      { spanish: 'escritor', options: ['писатель', 'художник', 'актер', 'гид'], correct: 0 },
      { spanish: 'pintor', options: ['поэт', 'музыкант', 'художник', 'банкир'], correct: 2 },
      { spanish: 'actor', options: ['актер', 'журналист', 'повар', 'врач'], correct: 0 },
      { spanish: 'actriz', options: ['медсестра', 'актриса', 'продавец', 'банкир'], correct: 1 },
      { spanish: 'banquero', options: ['банкир', 'гид', 'поэт', 'юрист'], correct: 0 },
      { spanish: 'guía', options: ['повар', 'гид', 'экономист', 'строитель'], correct: 1 },
      { spanish: 'enfermera', options: ['медсестра', 'актриса', 'продавец', 'художник'], correct: 0 },
      { spanish: 'cocinero', options: ['музыкант', 'писатель', 'повар', 'адвокат'], correct: 2 },
      { spanish: 'poeta', options: ['поэт', 'актер', 'гид', 'инженер'], correct: 0 },
      { spanish: 'dependiente', options: ['строитель', 'продавец', 'журналист', 'врач'], correct: 1 },
      { spanish: 'economista', options: ['юрист', 'экономист', 'банкир', 'поэт'], correct: 1 },
      { spanish: 'jurista', options: ['адвокат', 'юрист', 'музыкант', 'преподаватель'], correct: 1 }
    ]
  },
  'ex-1-4-2': {
    id: 'ex-1-4-2',
    type: 'vocabulary',
    title: 'Страны и столицы',
    description: 'Выберите правильную столицу страны',
    questions: [
      { spanish: 'España', options: ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'], correct: 1 },
      { spanish: 'Rusia', options: ['San Petersburgo', 'Kiev', 'Moscú', 'Minsk'], correct: 2 },
      { spanish: 'Francia', options: ['Lyon', 'París', 'Marsella', 'Niza'], correct: 1 },
      { spanish: 'Alemania', options: ['Múnich', 'Hamburgo', 'Frankfurt', 'Berlín'], correct: 3 },
      { spanish: 'Italia', options: ['Milán', 'Venecia', 'Roma', 'Florencia'], correct: 2 },
      { spanish: 'Inglaterra', options: ['Manchester', 'Liverpool', 'Birmingham', 'Londres'], correct: 3 },
      { spanish: 'Portugal', options: ['Oporto', 'Coimbra', 'Lisboa', 'Faro'], correct: 2 },
      { spanish: 'Grecia', options: ['Salónica', 'Atenas', 'Creta', 'Rodas'], correct: 1 }
    ]
  },
  'ex-1-4-3': {
    id: 'ex-1-4-3',
    type: 'vocabulary',
    title: 'Национальности',
    description: 'Выберите правильную национальность',
    questions: [
      { spanish: 'De España → ', options: ['español', 'españo', 'españés', 'españí'], correct: 0 },
      { spanish: 'De Rusia → ', options: ['rusiano', 'rusío', 'ruso', 'rusés'], correct: 2 },
      { spanish: 'De Francia → ', options: ['francés', 'franceño', 'franzo', 'franciano'], correct: 0 },
      { spanish: 'De Alemania → ', options: ['alemanés', 'alemano', 'alemán', 'alemanio'], correct: 2 },
      { spanish: 'De Italia → ', options: ['italieno', 'italiano', 'italianés', 'italio'], correct: 1 },
      { spanish: 'De Inglaterra → ', options: ['ingleso', 'ingliano', 'inglés', 'ingléño'], correct: 2 },
      { spanish: 'De Portugal → ', options: ['portugano', 'portugués', 'portugano', 'portugalés'], correct: 1 },
      { spanish: 'De China → ', options: ['chinanés', 'chinío', 'chino', 'chinano'], correct: 2 },
      { spanish: 'De Bélgica → ', options: ['belgo', 'belgués', 'belga', 'belgano'], correct: 2 },
      { spanish: 'De Holanda → ', options: ['holandés', 'holando', 'holandano', 'holandío'], correct: 0 },
      { spanish: 'De Grecia → ', options: ['greciano', 'griego', 'grecés', 'grecío'], correct: 1 },
      { spanish: 'De Dinamarca → ', options: ['dinamarqués', 'dinamano', 'dinamarcano', 'danés'], correct: 3 },
      { spanish: 'De Japón → ', options: ['japano', 'japonés', 'japoniano', 'japonío'], correct: 1 },
      { spanish: 'De Turquía → ', options: ['turco', 'turqués', 'turquiano', 'turquío'], correct: 0 },
      { spanish: 'De Estados Unidos → ', options: ['estadosunidense', 'norteamericano', 'americanés', 'estadounidense'], correct: 1 },
      { spanish: 'De Marruecos → ', options: ['marroqués', 'marroquí', 'marruecano', 'marroquino'], correct: 1 }
    ]
  },
  'ex-1-4-4': {
    id: 'ex-1-4-4',
    type: 'reading',
    title: 'Чтение',
    description: 'Прочитайте текст и ответьте на вопросы',
    text: `
Tengo un amigo. Mi amigo se llama Carlos. Carlos tiene una casa bonita. La casa es grande y blanca.

Carlos tiene un coche. El coche es verde y pequeño. También tiene una flor azul en la casa.
    `,
    questions: [
      {
        question: 'Как зовут друга?',
        options: ['Педро', 'Карлос', 'Хуан', 'Ана'],
        correct: 1
      },
      {
        question: 'Какого цвета дом?',
        options: ['Зеленый', 'Синий', 'Белый', 'Красный'],
        correct: 2
      },
      {
        question: 'Какой автомобиль у Карлоса?',
        options: ['Большой и белый', 'Маленький и зеленый', 'Большой и зеленый', 'Маленький и синий'],
        correct: 1
      }
    ]
  },
  'ex-1-4-5': {
    id: 'ex-1-4-5',
    type: 'grammar',
    title: 'SER с профессиями и национальностями',
    description: 'Выберите правильную форму глагола SER',
    questions: [
      { sentence: 'Yo ___ médico', options: ['soy', 'eres', 'es', 'son'], correct: 0 },
      { sentence: 'Ella ___ española', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Nosotros ___ profesores', options: ['soy', 'somos', 'es', 'son'], correct: 1 },
      { sentence: 'Tú ___ ingeniero', options: ['soy', 'eres', 'es', 'son'], correct: 1 },
      { sentence: 'Ellos ___ de Rusia', options: ['soy', 'eres', 'es', 'son'], correct: 3 },
      { sentence: 'Usted ___ periodista', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Mi amiga ___ alemana', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Vosotros ___ músicos', options: ['soy', 'sois', 'es', 'son'], correct: 1 },
      { sentence: 'El constructor ___ de Italia', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Yo ___ ruso', options: ['soy', 'eres', 'es', 'son'], correct: 0 },
      { sentence: 'Mi hermano ___ actor', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Ellas ___ francesas', options: ['soy', 'eres', 'es', 'son'], correct: 3 },
      { sentence: 'Tú ___ de China', options: ['soy', 'eres', 'es', 'son'], correct: 1 },
      { sentence: 'Nosotras ___ enfermeras', options: ['soy', 'somos', 'es', 'son'], correct: 1 },
      { sentence: 'El poeta ___ japonés', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Ustedes ___ economistas', options: ['soy', 'eres', 'es', 'son'], correct: 3 },
      { sentence: 'Mi padre ___ cocinero', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Vosotras ___ pintoras', options: ['soy', 'sois', 'es', 'son'], correct: 1 },
      { sentence: 'Él ___ portugués de Lisboa', options: ['soy', 'eres', 'es', 'son'], correct: 2 },
      { sentence: 'Yo ___ banquero', options: ['soy', 'eres', 'es', 'son'], correct: 0 }
    ]
  },
  'ex-1-4-6': {
    id: 'ex-1-4-6',
    type: 'translation',
    title: 'Перевод с профессиями',
    description: 'Переведите предложения на испанский. ВАЖНО: Отсутствие знака ударения (á, é, í, ó, ú) и точки в конце предложения считается ошибкой!',
    questions: [
      { russian: 'Я врач.', correct: 'Soy médico.', alternatives: ['Yo soy médico.'] },
      { russian: 'Она учитель.', correct: 'Es profesora.', alternatives: ['Ella es profesora.'] },
      { russian: 'Мы из Испании.', correct: 'Somos de España.', alternatives: ['Nosotros somos de España.', 'Nosotras somos de España.'] },
      { russian: 'Он испанец.', correct: 'Es español.', alternatives: ['Él es español.'] },
      { russian: 'Ты адвокат.', correct: 'Eres abogado.', alternatives: ['Tú eres abogado.'] },
      { russian: 'Они журналисты.', correct: 'Son periodistas.', alternatives: ['Ellos son periodistas.', 'Ellas son periodistas.'] },
      { russian: 'Я в Мадриде (сейчас).', correct: 'Estoy en Madrid.', alternatives: ['Yo estoy en Madrid.'] },
      { russian: 'Она довольна.', correct: 'Está contenta.', alternatives: ['Ella está contenta.'] },
      { russian: 'Вы (уваж.) из России.', correct: 'Es de Rusia.', alternatives: ['Usted es de Rusia.'] },
      { russian: 'Мой друг - инженер.', correct: 'Mi amigo es ingeniero.' },
      { russian: 'Моя сестра - художница.', correct: 'Mi hermana es pintora.' },
      { russian: 'Они повара из Италии.', correct: 'Son cocineros de Italia.', alternatives: ['Ellos son cocineros de Italia.', 'Ellas son cocineras de Italia.'] },
      { russian: 'Ты итальянец?', correct: '¿Eres italiano?', alternatives: ['¿Tú eres italiano?'] },
      { russian: 'Мой отец - строитель.', correct: 'Mi padre es constructor.' },
      { russian: 'Официанты заняты сегодня.', correct: 'Los camareros están ocupados hoy.' },
      { russian: 'Она актриса из Франции.', correct: 'Es actriz de Francia.', alternatives: ['Ella es actriz de Francia.'] },
      { russian: 'Вы писатель?', correct: '¿Es escritor?', alternatives: ['¿Es usted escritor?', '¿Usted es escritor?'] },
      { russian: 'Они немцы из Берлина.', correct: 'Son alemanes de Berlín.', alternatives: ['Ellos son alemanes de Berlín.', 'Ellas son alemanas de Berlín.'] },
      { russian: 'Мы продавцы, мы заняты.', correct: 'Somos dependientes, estamos ocupados.', alternatives: ['Nosotros somos dependientes, estamos ocupados.', 'Nosotras somos dependientas, estamos ocupadas.'] },
      { russian: 'Моя мама - медсестра в больнице.', correct: 'Mi madre es enfermera en el hospital.' }
    ]
  },
  'ex-1-4-test': {
    id: 'ex-1-4-test',
    type: 'translation',
    title: 'TEST - Обобщение',
    description: 'Часть 1: Измените род и/или число. Часть 2: SER или ESTAR. Часть 3: Перевод. ВАЖНО: Отсутствие знака ударения (á, é, í, ó, ú) и точки в конце предложения считается ошибкой!',
    questions: [
      { russian: 'un amigo enfermo (Мн.ч.)', correct: 'unos amigos enfermos' },
      { russian: 'el libro antiguo (Мн.ч.)', correct: 'los libros antiguos' },
      { russian: 'una chica bonita (Мн.ч.)', correct: 'unas chicas bonitas' },
      { russian: 'el perro blanco (Ж.р. ед.ч.)', correct: 'la perra blanca' },
      { russian: 'una mujer rica (Мн.ч.)', correct: 'unas mujeres ricas' },
      { russian: 'un hombre triste (Мн.ч.)', correct: 'unos hombres tristes' },
      { russian: 'la estación fría (Мн.ч.)', correct: 'las estaciones frías' },
      { russian: 'el lápiz azul (Мн.ч.)', correct: 'los lápices azules' },
      { russian: 'la luz blanca (Мн.ч.)', correct: 'las luces blancas' },
      { russian: 'un cliente difícil (Ж.р. ед.ч.)', correct: 'una clienta difícil' },
      { russian: 'el alumno joven (Ж.р. мн.ч.)', correct: 'las alumnas jóvenes' },
      { russian: 'una calle larga (Мн.ч.)', correct: 'unas calles largas' },
      { russian: 'el policía alto (Ж.р. ед.ч.)', correct: 'la policía alta' },
      { russian: 'el padre feliz (Мн.ч.)', correct: 'los padres felices' },
      { russian: 'la mano pequeña (Мн.ч.)', correct: 'las manos pequeñas' },
      { russian: 'Mi casa ES/ESTÁ pequeña, pero ES/ESTÁ limpia ahora.', correct: 'Mi casa es pequeña, pero está limpia ahora.' },
      { russian: 'La hermana de Pedro ES/ESTÁ joven y ES/ESTÁ en el museo.', correct: 'La hermana de Pedro es joven y está en el museo.' },
      { russian: 'Yo SOY/ESTOY soltero, pero SOY/ESTOY muy contento.', correct: 'Yo soy soltero, pero estoy muy contento.' },
      { russian: 'El lunes ES/ESTÁ un día difícil.', correct: 'El lunes es un día difícil.' },
      { russian: 'Ustedes ES/ESTÁN en crisis.', correct: 'Ustedes están en crisis.' },
      { russian: 'Nosotras SOMOS/ESTAMOS enfermas.', correct: 'Nosotras estamos enfermas.' },
      { russian: 'Tú ERES/ESTÁS mi cliente, ¿verdad?', correct: 'Tú eres mi cliente, ¿verdad?' },
      { russian: 'El café ES/ESTÁ caliente, pero ES/ESTÁ bueno.', correct: 'El café está caliente, pero es bueno.' },
      { russian: 'Las ciudades ERES/SON grandes.', correct: 'Las ciudades son grandes.' },
      { russian: '¿Cómo ES/ESTÁ tu madre? (Вопрос о самочувствии)', correct: '¿Cómo está tu madre?' },
      { russian: 'El señor ES/ESTÁ gordo.', correct: 'El señor es gordo.' },
      { russian: 'La alumna ES/ESTÁ en el aula ahora.', correct: 'La alumna está en el aula ahora.' },
      { russian: '¿De dónde SOIS/ESTÁIS vosotros?', correct: '¿De dónde sois vosotros?' },
      { russian: 'Mi hermano ES/ESTÁ casado.', correct: 'Mi hermano está casado.' },
      { russian: 'El problema ES/ESTÁ grave y ES/ESTÁ difícil.', correct: 'El problema es grave y es difícil.' },
      { russian: 'Привет! Мой брат — студент.', correct: '¡Hola! Mi hermano es estudiante.' },
      { russian: 'Карандаш — синий, а книга — белая.', correct: 'El lápiz es azul y el libro es blanco.' },
      { russian: 'Мы (ж.р.) не замужем, мы холосты.', correct: 'Nosotras somos solteras.' },
      { russian: 'Вы (tú) сейчас на пляже?', correct: '¿Estás en la playa ahora?' },
      { russian: 'Моя рука холодная.', correct: 'Mi mano está fría.' },
      { russian: 'Они (мужчины) очень богаты.', correct: 'Ellos son muy ricos.' },
      { russian: 'Госпожа, Вы — добрая.', correct: 'Señora, usted es buena.' },
      { russian: 'Свет — это проблема.', correct: 'La luz es un problema.' },
      { russian: 'Мой отец — полицейский.', correct: 'Mi padre es policía.' },
      { russian: 'Как жизнь? — Все хорошо.', correct: '¿Qué tal la vida? — Todo va bien.' },
      { russian: 'Мы (смешанная группа) довольны.', correct: 'Nosotros estamos contentos.' },
      { russian: 'Ее (su) дом — новый и дешевый.', correct: 'Su casa es nueva y barata.' },
      { russian: 'Девочки (chicas) некрасивые.', correct: 'Las chicas son feas.' },
      { russian: 'Вы (ustedes) на каникулах?', correct: '¿Ustedes están de vacaciones?' },
      { russian: 'Дон Хуан — высокий и стройный.', correct: 'Don Juan es alto y delgado.' }
    ]
  },
  'ex-1-4-7': {
    id: 'ex-1-4-7',
    type: 'grammar',
    title: 'Артикли: определенные и неопределенные',
    description: 'Выберите правильный артикль',
    questions: [
      { sentence: '___ casa es grande', options: ['El', 'La', 'Un', 'Una'], correct: 1 },
      { sentence: '___ libro es interesante', options: ['el', 'la', 'un', 'una'], correct: 0 },
      { sentence: 'Tengo ___ amigo español', options: ['el', 'la', 'un', 'una'], correct: 2 },
      { sentence: 'Ella es ___ médica', options: ['el', 'la', 'un', 'una'], correct: 3 },
      { sentence: '___ estudiantes están en el aula', options: ['El', 'La', 'Los', 'Las'], correct: 2 },
      { sentence: 'Necesito ___ lápiz azul', options: ['el', 'la', 'un', 'una'], correct: 2 },
      { sentence: '___ flores son bonitas', options: ['El', 'La', 'Los', 'Las'], correct: 3 },
      { sentence: 'Tenemos ___ coche nuevo', options: ['el', 'la', 'un', 'una'], correct: 2 },
      { sentence: '___ mano está fría', options: ['El', 'La', 'Un', 'Una'], correct: 1 },
      { sentence: 'Veo ___ aviones grandes', options: ['el', 'la', 'los', 'las'], correct: 2 },
      { sentence: 'Es ___ profesora de español', options: ['el', 'la', 'un', 'una'], correct: 3 },
      { sentence: '___ día es largo', options: ['El', 'La', 'Un', 'Una'], correct: 0 },
      { sentence: 'Tengo ___ hermana pequeña', options: ['el', 'la', 'un', 'una'], correct: 3 },
      { sentence: '___ ciudades son antiguas', options: ['El', 'La', 'Los', 'Las'], correct: 3 },
      { sentence: 'Hay ___ problema difícil', options: ['el', 'la', 'un', 'una'], correct: 2 }
    ]
  },
  'ex-1-4-8': {
    id: 'ex-1-4-8',
    type: 'grammar',
    title: 'Согласование прилагательных в роде и числе',
    description: 'Выберите правильную форму прилагательного',
    questions: [
      { sentence: 'La casa es ___', options: ['blanco', 'blanca', 'blancos', 'blancas'], correct: 1 },
      { sentence: 'El coche es ___', options: ['nuevo', 'nueva', 'nuevos', 'nuevas'], correct: 0 },
      { sentence: 'Los libros son ___', options: ['interesante', 'interesantes', 'interesanta', 'interesantas'], correct: 1 },
      { sentence: 'Las flores son ___', options: ['bonito', 'bonita', 'bonitos', 'bonitas'], correct: 3 },
      { sentence: 'El lápiz es ___', options: ['azul', 'azula', 'azules', 'azulas'], correct: 0 },
      { sentence: 'La chica es ___', options: ['guapo', 'guapa', 'guapos', 'guapas'], correct: 1 },
      { sentence: 'Los hermanos son ___', options: ['alto', 'alta', 'altos', 'altas'], correct: 2 },
      { sentence: 'Las ciudades son ___', options: ['grande', 'grandes', 'granda', 'grandas'], correct: 1 },
      { sentence: 'El museo es ___', options: ['antiguo', 'antigua', 'antiguos', 'antiguas'], correct: 0 },
      { sentence: 'Las profesoras son ___', options: ['joven', 'jovena', 'jóvenes', 'jóvenas'], correct: 2 },
      { sentence: 'El día es ___', options: ['largo', 'larga', 'largos', 'largas'], correct: 0 },
      { sentence: 'La noche es ___', options: ['frío', 'fría', 'fríos', 'frías'], correct: 1 },
      { sentence: 'Los hombres son ___', options: ['feliz', 'feliza', 'felices', 'felizas'], correct: 2 },
      { sentence: 'Las manos están ___', options: ['caliente', 'calientes', 'calienta', 'calientas'], correct: 1 },
      { sentence: 'El padre es ___', options: ['bueno', 'buena', 'buenos', 'buenas'], correct: 0 }
    ]
  },
  'ex-1-4-9': {
    id: 'ex-1-4-9',
    type: 'grammar',
    title: 'Профессии и национальности: род',
    description: 'Выберите правильную форму профессии или национальности',
    questions: [
      { sentence: 'Ella es ___ (médico)', options: ['médico', 'médica', 'médicos', 'médicas'], correct: 1 },
      { sentence: 'Él es ___ (español)', options: ['español', 'española', 'españoles', 'españolas'], correct: 0 },
      { sentence: 'Mi hermana es ___ (profesor)', options: ['profesor', 'profesora', 'profesores', 'profesoras'], correct: 1 },
      { sentence: 'Carlos es ___ (italiano)', options: ['italiano', 'italiana', 'italianos', 'italianas'], correct: 0 },
      { sentence: 'María es ___ (periodista)', options: ['periodisto', 'periodista', 'periodistos', 'periodistas'], correct: 1 },
      { sentence: 'Mi padre es ___ (ingeniero)', options: ['ingeniero', 'ingeniera', 'ingenieros', 'ingenieras'], correct: 0 },
      { sentence: 'Ana es ___ (francés)', options: ['francés', 'francesa', 'franceses', 'francesas'], correct: 1 },
      { sentence: 'Juan es ___ (actor)', options: ['actor', 'actora', 'actriz', 'actores'], correct: 0 },
      { sentence: 'Ella es ___ (actor)', options: ['actor', 'actora', 'actriz', 'actores'], correct: 2 },
      { sentence: 'Mi amigo es ___ (alemán)', options: ['alemán', 'alemana', 'alemanes', 'alemanas'], correct: 0 },
      { sentence: 'Elena es ___ (ruso)', options: ['ruso', 'rusa', 'rusos', 'rusas'], correct: 1 },
      { sentence: 'Mi hermano es ___ (cocinero)', options: ['cocinero', 'cocinera', 'cocineros', 'cocineras'], correct: 0 },
      { sentence: 'La señora es ___ (portugués)', options: ['portugués', 'portuguesa', 'portugueses', 'portuguesas'], correct: 1 },
      { sentence: 'Él es ___ (estudiante)', options: ['estudianto', 'estudiante', 'estudiantos', 'estudiantes'], correct: 1 },
      { sentence: 'Carmen es ___ (pintor)', options: ['pintor', 'pintora', 'pintores', 'pintoras'], correct: 1 }
    ]
  },
  'ex-1-4-10': {
    id: 'ex-1-4-10',
    type: 'grammar',
    title: 'Множественное число существительных',
    description: 'Выберите правильную форму множественного числа',
    questions: [
      { sentence: 'casa → ___', options: ['casas', 'casaes', 'cases', 'casases'], correct: 0 },
      { sentence: 'libro → ___', options: ['libroes', 'libres', 'libros', 'libroses'], correct: 2 },
      { sentence: 'ciudad → ___', options: ['ciudads', 'ciudades', 'ciudadses', 'ciudads'], correct: 1 },
      { sentence: 'lápiz → ___', options: ['lápizs', 'lápizes', 'lápices', 'lápizses'], correct: 2 },
      { sentence: 'flor → ___', options: ['flors', 'flores', 'florses', 'floraes'], correct: 1 },
      { sentence: 'avión → ___', options: ['aviónes', 'avions', 'aviones', 'avionses'], correct: 2 },
      { sentence: 'luz → ___', options: ['luzs', 'luzes', 'luces', 'luzses'], correct: 2 },
      { sentence: 'profesor → ___', options: ['profesors', 'profesores', 'profesorses', 'profesoraes'], correct: 1 },
      { sentence: 'mujer → ___', options: ['mujers', 'mujeres', 'mujerses', 'mujeraes'], correct: 1 },
      { sentence: 'café → ___', options: ['cafés', 'cafees', 'cafeses', 'cafes'], correct: 3 },
      { sentence: 'coche → ___', options: ['coches', 'cochees', 'cochses', 'cocha'], correct: 0 },
      { sentence: 'estudiante → ___', options: ['estudiantees', 'estudiantes', 'estudiantos', 'estudiantses'], correct: 1 },
      { sentence: 'país → ___', options: ['paíss', 'países', 'paiss', 'países'], correct: 3 },
      { sentence: 'problema → ___', options: ['problemas', 'problemases', 'problemes', 'problemses'], correct: 0 },
      { sentence: 'el lunes → ___', options: ['los luneses', 'los luns', 'los lunes', 'las lunes'], correct: 2 }
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
    title: 'Чтение: Диалоги в городе',
    description: 'Прочитайте текст и ответьте на вопросы',
    text: 'Диалог en la ciudad: Juan: ¡Hola! Yo soy Juan. ¿Y tú? Ana: Me llamo Ana. Soy joven y alegre. Juan: ¡Mucho gusto! La ciudad es grande. Ana: Sí, es grande y bonita. Ahora estoy en la calle. Juan: Yo estoy en casa. || Diálogo sobre ubicación: Felipe: Buenos días, señora. ¿Cómo se llama usted? Doña Clara: Me llamo Doña Clara. Soy rica. Felipe: Encantado. Yo soy Felipe, soy estudiante. Soy de Rusia. Doña Clara: Qué interesante... ¿De dónde es su hermano? Felipe: Mi hermano es de China. Él es ingeniero y está casado. || Diálogo sobre estados: Pedro: ¡Hola! ¿Cómo estás? Marta: Estoy regular. Mi mano está fría y tengo veinticinco años. Pedro: ¡Qué lástima! ¿Estás enferma? Marta: No, no estoy enferma, estoy triste. Soy soltera. ¿Y tú? Pedro: Yo soy policía. Soy alto y delgado. Ahora voy a la escuela con mi amigo Carlos. Marta: ¿Es fácil la escuela? Pedro: Es difícil, pero es interesante. Estamos contentos. Marta: Mi hermano está en la playa. El sol es caliente.',
    questions: [
      { question: '¿Cómo se llama el chico en el primer diálogo?', options: ['Pedro', 'Felipe', 'Juan', 'Carlos'], correct: 2 },
      { question: '¿Cómo es Ana?', options: ['Triste y vieja', 'Joven y alegre', 'Rica y alta', 'Enferma y regular'], correct: 1 },
      { question: '¿Cómo es la ciudad según Juan?', options: ['Pequeña', 'Antigua', 'Grande', 'Fría'], correct: 2 },
      { question: '¿Dónde está Ana ahora?', options: ['En casa', 'En el museo', 'En la calle', 'En la playa'], correct: 2 },
      { question: '¿Dónde está Juan?', options: ['En la calle', 'En casa', 'En la escuela', 'En el museo'], correct: 1 },
      { question: '¿Cómo se llama la señora rica?', options: ['Ana', 'Marta', 'Doña Clara', 'No dice'], correct: 2 },
      { question: '¿De dónde es Felipe?', options: ['De China', 'De Rusia', 'De España', 'De Perú'], correct: 1 },
      { question: '¿Qué es Felipe?', options: ['Ingeniero', 'Estudiante', 'Policía', 'Profesor'], correct: 1 },
      { question: '¿De dónde es el hermano de Felipe?', options: ['De Rusia', 'De España', 'De China', 'De Italia'], correct: 2 },
      { question: '¿Qué es el hermano de Felipe?', options: ['Estudiante', 'Policía', 'Ingeniero', 'Profesor'], correct: 2 },
      { question: '¿Cuántos años tiene Marta?', options: ['Veinte años', 'Veinticinco años', 'Treinta años', 'Dieciocho años'], correct: 1 },
      { question: '¿Qué es Pedro?', options: ['Estudiante', 'Ingeniero', 'Policía', 'Médico'], correct: 2 },
      { question: '¿Cómo es Pedro?', options: ['Bajo y gordo', 'Alto y delgado', 'Joven y alegre', 'Viejo y triste'], correct: 1 },
      { question: '¿Adónde va Pedro?', options: ['Al museo', 'A la playa', 'A la escuela', 'A casa'], correct: 2 },
      { question: '¿Cómo es la escuela según Pedro?', options: ['Fácil pero aburrida', 'Difícil pero interesante', 'Grande y bonita', 'Pequeña y antigua'], correct: 1 },
      { question: '¿Dónde está el hermano de Marta?', options: ['En casa', 'En la escuela', 'En el museo', 'En la playa'], correct: 3 },
      { question: '¿Cómo es el sol según Marta?', options: ['Frío', 'Caliente', 'Grande', 'Pequeño'], correct: 1 }
    ]
  },
  'ex-2-1-4': {
    id: 'ex-2-1-4',
    type: 'writing',
    title: 'Переведите предложения',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Я говорю по-испански, а мой друг слушает новости.', correct: 'yo hablo español y mi amigo escucha las noticias' },
      { russian: 'Ты звонишь твоей маме по телефону?', correct: '¿tú llamas a tu madre por teléfono?' },
      { russian: 'Он спрашивает о цене такси, потому что оно дорогое (ser).', correct: 'él pregunta por el precio del taxi porque es caro' },
      { russian: 'Мы слушаем радио, потому что сейчас дома (estar).', correct: 'nosotros escuchamos la radio porque estamos en casa ahora' },
      { russian: 'Вы (vosotros) пьете сок в доме, потому что вы больны (estar)?', correct: '¿vosotros bebéis zumo en casa porque estáis enfermos?' },
      { russian: 'Они (ellas) едят бутерброды в кафе, и они веселые (estar).', correct: 'ellas comen bocadillos en el café y están alegres' },
      { russian: 'Вы (usted) принимаете эту проблему всерьез?', correct: '¿usted toma este problema en serio?' },
      { russian: 'Она загорает на пляже, и она счастлива (ser).', correct: 'ella toma el sol en la playa y es feliz' },
      { russian: 'Я сажусь на поезд, потому что он новый (ser).', correct: 'yo tomo el tren porque es nuevo' },
      { russian: 'Моя мама принимает лекарства, и она старая (ser).', correct: 'mi madre toma medicinas y es vieja' },
      { russian: 'Мы читаем интересную книгу, и она большая (ser).', correct: 'nosotros leemos un libro interesante y es grande' },
      { russian: 'Ты учишь новые слова? Это легко (ser)?', correct: '¿tú aprendes palabras nuevas? ¿es fácil?' },
      { russian: 'Они (ellos) понимают проблему, и она серьезная (ser).', correct: 'ellos comprenden el problema y es serio' },
      { russian: 'Ребенок ест дома с аппетитом, потому что он голоден (estar).', correct: 'el niño come en casa con apetito porque está hambriento' },
      { russian: 'Я не понимаю гида, потому что он немец (ser).', correct: 'yo no comprendo al guía porque es alemán' },
      { russian: 'Вы (ustedes) открываете окно, потому что в комнате горячо (estar).', correct: 'ustedes abren la ventana porque está caliente en la habitación' },
      { russian: 'Я пишу письмо моей сестре, она экономист (ser).', correct: 'yo escribo una carta a mi hermana, ella es economista' },
      { russian: 'Мы живем в большом городе, и он красивый (ser).', correct: 'nosotros vivimos en una ciudad grande y es bonita' },
      { russian: 'Вы (vosotros) пишете о жизни в Испании?', correct: '¿vosotros escribís sobre la vida en España?' },
      { russian: 'Мой отец живет в старом доме, и сейчас он одинок (estar).', correct: 'mi padre vive en una casa vieja y ahora está solo' }
    ]
  },
  'ex-2-1-5': {
    id: 'ex-2-1-5',
    type: 'fillblank',
    title: 'Заполните пропуски',
    description: 'Вставьте правильную форму глагола',
    questions: [
      { sentence: 'Yo _____ (hablar) español con mis amigos', verb: 'hablar', correct: 'hablo' },
      { sentence: 'Ana _____ (ser) joven y alegre', verb: 'ser', correct: 'es' },
      { sentence: 'La ciudad _____ (ser) grande y bonita', verb: 'ser', correct: 'es' },
      { sentence: 'Ana _____ (estar) en la calle ahora', verb: 'estar', correct: 'está' },
      { sentence: 'Juan _____ (estar) en casa', verb: 'estar', correct: 'está' },
      { sentence: 'Felipe _____ (ser) estudiante', verb: 'ser', correct: 'es' },
      { sentence: 'El hermano de Felipe _____ (ser) ingeniero', verb: 'ser', correct: 'es' },
      { sentence: 'Marta _____ (tener) veinticinco años', verb: 'tener', correct: 'tiene' },
      { sentence: 'Pedro _____ (ser) policía', verb: 'ser', correct: 'es' },
      { sentence: 'Pedro _____ (ir) a la escuela con Carlos', verb: 'ir', correct: 'va' },
      { sentence: 'La escuela _____ (ser) difícil pero interesante', verb: 'ser', correct: 'es' },
      { sentence: 'Nosotros _____ (estar) contentos', verb: 'estar', correct: 'estamos' },
      { sentence: 'El hermano de Marta _____ (estar) en la playa', verb: 'estar', correct: 'está' },
      { sentence: 'Yo _____ (escuchar) la radio en casa', verb: 'escuchar', correct: 'escucho' },
      { sentence: 'Ellos _____ (vivir) en una ciudad grande', verb: 'vivir', correct: 'viven' }
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
      { sentence: 'Nosotros ___ (escribir) emails', options: ['escribo', 'escribes', 'escribe', 'escribimos'], correct: 3 },
      { sentence: 'Ella ___ (leer) libros', options: ['leo', 'lees', 'lee', 'leen'], correct: 2 },
      { sentence: 'Vosotros ___ (aprender) español', options: ['aprendo', 'aprendes', 'aprende', 'aprendéis'], correct: 3 },
      { sentence: 'Yo ___ (abrir) la puerta', options: ['abro', 'abres', 'abre', 'abren'], correct: 0 },
      { sentence: 'Ellas ___ (comer) frutas', options: ['como', 'comes', 'come', 'comen'], correct: 3 },
      { sentence: 'Usted ___ (vivir) en Madrid', options: ['vivo', 'vives', 'vive', 'viven'], correct: 2 },
      { sentence: 'Nosotras ___ (leer) el periódico', options: ['leo', 'lees', 'lee', 'leemos'], correct: 3 },
      { sentence: 'Tú ___ (escribir) cartas', options: ['escribo', 'escribes', 'escribe', 'escriben'], correct: 1 },
      { sentence: 'Él ___ (beber) café', options: ['bebo', 'bebes', 'bebe', 'beben'], correct: 2 },
      { sentence: 'Ustedes ___ (aprender) italiano', options: ['aprendo', 'aprendes', 'aprende', 'aprenden'], correct: 3 },
      { sentence: 'Yo ___ (recibir) mensajes', options: ['recibo', 'recibes', 'recibe', 'reciben'], correct: 0 },
      { sentence: 'Nosotros ___ (comer) en casa', options: ['como', 'comes', 'comemos', 'comen'], correct: 2 }
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
      { spanish: 'escribir', options: ['писать', 'читать', 'получать', 'продавать'], correct: 0 },
      { spanish: 'comer', options: ['пить', 'есть', 'открывать', 'учиться'], correct: 1 },
      { spanish: 'beber', options: ['есть', 'пить', 'читать', 'жить'], correct: 1 },
      { spanish: 'aprender', options: ['учиться', 'писать', 'открывать', 'получать'], correct: 0 },
      { spanish: 'abrir', options: ['писать', 'открывать', 'получать', 'есть'], correct: 1 },
      { spanish: 'recibir', options: ['писать', 'открывать', 'получать', 'учиться'], correct: 2 },
      { spanish: 'comprender', options: ['понимать', 'покупать', 'продавать', 'писать'], correct: 0 },
      { spanish: 'tomar', options: ['есть', 'брать, пить', 'открывать', 'писать'], correct: 1 },
      { spanish: 'vender', options: ['покупать', 'продавать', 'понимать', 'брать'], correct: 1 },
      { spanish: 'responder', options: ['спрашивать', 'отвечать', 'говорить', 'слушать'], correct: 1 },
      { spanish: 'correr', options: ['ходить', 'бегать', 'прыгать', 'летать'], correct: 1 },
      { spanish: 'subir', options: ['опускаться', 'подниматься', 'входить', 'выходить'], correct: 1 },
      { spanish: 'partir', options: ['приходить', 'оставаться', 'уезжать', 'входить'], correct: 2 }
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
      { russian: 'Ты пишешь', correct: 'escribes' },
      { russian: 'Она пьет воду', correct: 'ella bebe agua' },
      { russian: 'Вы (вежл.) учитесь', correct: 'usted aprende' },
      { russian: 'Я открываю дверь', correct: 'abro la puerta' },
      { russian: 'Он получает письма', correct: 'recibe cartas' },
      { russian: 'Мы пьем кофе', correct: 'bebemos café' },
      { russian: 'Они (ж.р.) едят фрукты', correct: 'ellas comen frutas' },
      { russian: 'Ты живешь в Мадриде', correct: 'vives en Madrid' },
      { russian: 'Я читаю книги', correct: 'leo libros' },
      { russian: 'Вы (друзья) пишете', correct: 'escribís' },
      { russian: 'Она учится', correct: 'aprende' },
      { russian: 'Мы берем автобус', correct: 'tomamos el autobús' }
    ]
  },

  'ex-2-2-ir-a-lugar': {
    id: 'ex-2-2-ir-a-lugar',
    type: 'fillblank',
    title: 'Ir a + Lugar/Actividad',
    description: 'Completa las frases usando la forma correcta del verbo IR y la preposición A. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ al gimnasio después del trabajo.', correct: 'voy' },
      { sentence: 'Mi familia y yo _____ a visitar a mis abuelos.', correct: 'vamos' },
      { sentence: 'El profesor _____ a dar una clase sobre historia.', correct: 'va' },
      { sentence: 'Tú _____ a la farmacia por la medicina.', correct: 'vas' },
      { sentence: 'Ellos _____ a cenar en un restaurante nuevo.', correct: 'van' },
      { sentence: 'Usted _____ a hablar con el director.', correct: 'va' },
      { sentence: 'Vosotros _____ a la piscina municipal mañana.', correct: 'vais' },
      { sentence: 'Mi amigo _____ a buscar trabajo.', correct: 'va' },
      { sentence: 'Los niños _____ a jugar al fútbol al campo.', correct: 'van' },
      { sentence: '¿A qué hora _____ ustedes a la reunión?', correct: 'van' }
    ]
  },

  'ex-2-2-ir-de-en': {
    id: 'ex-2-2-ir-de-en',
    type: 'fillblank',
    title: 'Ir de + Actividad / Ir en + Medio de transporte',
    description: 'Completa las frases usando la forma correcta del verbo IR y la preposición necesaria (DE o EN). Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Nosotros _____ en bicicleta por el campo.', correct: 'vamos' },
      { sentence: 'Mi hermana _____ de viaje a Alemania en verano.', correct: 'va' },
      { sentence: 'Tú _____ en patinete eléctrico a tu cita.', correct: 'vas' },
      { sentence: 'Yo _____ de excursión con mis compañeros.', correct: 'voy' },
      { sentence: 'El mensajero _____ en motocicleta a entregar el paquete.', correct: 'va' },
      { sentence: 'Ustedes _____ en autobús para ahorrar dinero.', correct: 'van' },
      { sentence: 'La señora _____ de compras cada fin de semana.', correct: 'va' },
      { sentence: 'Vosotros _____ en metro a la universidad.', correct: 'vais' },
      { sentence: 'El capitán _____ en barco a las islas.', correct: 'va' },
      { sentence: 'Mis tíos _____ en crucero por el Mediterráneo.', correct: 'van' }
    ]
  },

  'ex-2-2-ir-translation': {
    id: 'ex-2-2-ir-translation',
    type: 'writing',
    title: 'Перевод на испанский с глаголом IR',
    description: 'Переведите предложения на испанский. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { question: 'Мы едем в театр на метро.', correct: 'Vamos al teatro en metro.' },
      { question: 'Я еду на работу на машине.', correct: 'Voy al trabajo en coche.' },
      { question: 'Петр и Мария не идут в кино, они будут писать статью.', correct: 'Pedro y María no van al cine, van a escribir un artículo.' },
      { question: 'Ты едешь в Валенсию на поезде, а я плыву на корабле.', correct: 'Tú vas a Valencia en tren y yo voy en barco.' },
      { question: 'Они ходят за покупками пешком.', correct: 'Ellos van de compras a pie.' },
      { question: 'Вы (vosotros) летите на каникулы в Испанию на самолете.', correct: 'Vosotros vais de vacaciones a España en avión.' },
      { question: 'Она собирается поговорить с врачом.', correct: 'Ella va a hablar con el médico.' }
    ]
  },

  'ex-2-2-tener-translation': {
    id: 'ex-2-2-tener-translation',
    type: 'writing',
    title: 'Выражения с глаголом TENER',
    description: 'Переведите предложения с испанского на русский',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { question: 'Mi primo tiene dieciocho años.', correct: 'Моему двоюродному брату восемнадцать лет.' },
      { question: 'Nosotros tenemos una casa muy grande.', correct: 'У нас есть очень большой дом.' },
      { question: 'Los estudiantes tienen mucha hambre a esta hora.', correct: 'Студенты очень голодны в это время.' },
      { question: 'Yo tengo la culpa de ese error.', correct: 'Я виноват в этой ошибке.' },
      { question: '¿Ustedes tienen la información necesaria?', correct: 'У вас есть необходимая информация?' },
      { question: 'Yo no tengo paciencia con el tráfico.', correct: 'У меня нет терпения к пробкам.' },
      { question: '¡Hoy tenemos muy buena suerte!', correct: 'Сегодня нам очень повезло!' },
      { question: '¿Vosotros tenéis frío aquí?', correct: 'Вам здесь холодно?' },
      { question: 'El gato tiene mucha sed después de correr.', correct: 'Кот очень хочет пить после бега.' },
      { question: 'Tenemos que comprar un nuevo ordenador.', correct: 'Мы должны купить новый компьютер.' }
    ]
  },

  'ex-2-2-tener-translation-2': {
    id: 'ex-2-2-tener-translation-2',
    type: 'writing',
    title: 'Перевод на русский с глаголом TENER',
    description: 'Переведите предложения с испанского на русский',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { question: 'Yo no tengo tiempo libre.', correct: 'У меня нет свободного времени.' },
      { question: 'Ella tiene ocho meses.', correct: 'Ей восемь месяцев.' },
      { question: 'Mi perro tiene mucha sed.', correct: 'Моя собака очень хочет пить.' },
      { question: 'Nosotros tenemos una reunión.', correct: 'У нас есть встреча.' },
      { question: 'Mi jefe tiene mucha prisa.', correct: 'Мой начальник очень спешит.' },
      { question: 'Los vecinos tienen cuarenta y cinco años.', correct: 'Соседям сорок пять лет.' },
      { question: 'Vosotras tenéis razón.', correct: 'Вы правы.' },
      { question: 'Tú tienes que estudiar más.', correct: 'Ты должен учиться больше.' },
      { question: 'Mis padres y yo tenemos mucho calor.', correct: 'Моим родителям и мне очень жарко.' },
      { question: 'El coche tiene que pasar la ITV (Inspección Técnica de Vehículo).', correct: 'Машина должна пройти техосмотр.' }
    ]
  },

  'ex-2-2-tener-conjugation': {
    id: 'ex-2-2-tener-conjugation',
    type: 'fillblank',
    title: 'Поставьте глагол TENER в соответствующую форму',
    description: 'Заполните пропуски правильной формой глагола TENER. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ mucha hambre ahora.', correct: 'tengo' },
      { sentence: 'Tú _____ sueño.', correct: 'tienes' },
      { sentence: 'Mi hermano _____ nueve años.', correct: 'tiene' },
      { sentence: 'Nosotros _____ un perro pequeño.', correct: 'tenemos' },
      { sentence: 'Vosotros _____ que ir al supermercado.', correct: 'tenéis' },
      { sentence: 'Ellas _____ un coche rojo.', correct: 'tienen' },
      { sentence: 'Usted _____ sed.', correct: 'tiene' },
      { sentence: 'Yo _____ un libro interesante.', correct: 'tengo' },
      { sentence: 'Los chicos _____ calor.', correct: 'tienen' },
      { sentence: 'Tú _____ que hacer la tarea.', correct: 'tienes' }
    ]
  },

  'ex-2-2-tener-rus-esp': {
    id: 'ex-2-2-tener-rus-esp',
    type: 'writing',
    title: 'Перевод с русского на испанский с глаголом TENER',
    description: 'Переведите предложения с русского на испанский, используя глагол TENER. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { question: 'У меня есть собака.', correct: 'Yo tengo un perro.' },
      { question: 'Тебе пятнадцать лет.', correct: 'Tú tienes quince años.' },
      { question: 'Нам очень холодно.', correct: 'Nosotros tenemos mucho frío.' },
      { question: 'У них нет времени.', correct: 'Ellos no tienen tiempo.' },
      { question: 'Вы (Usted) должны работать.', correct: 'Usted tiene que trabajar.' },
      { question: 'Ему жарко.', correct: 'Él tiene calor.' },
      { question: 'У нас есть один друг.', correct: 'Nosotros tenemos un amigo.' },
      { question: 'Они хотят пить.', correct: 'Ellos tienen sed.' },
      { question: 'Вы (Vosotros) должны купить хлеб.', correct: 'Vosotros tenéis que comprar pan.' },
      { question: 'У нее большая семья.', correct: 'Ella tiene una familia grande.' }
    ]
  },

  'ex-2-2-oir-conjugation': {
    id: 'ex-2-2-oir-conjugation',
    type: 'fillblank',
    title: 'Поставьте глагол OÍR в соответствующую форму',
    description: 'Заполните пропуски правильной формой глагола OÍR в настоящем времени. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ la radio todas las mañanas.', correct: 'oigo' },
      { sentence: '¿Tú _____ ese ruido extraño?', correct: 'oyes' },
      { sentence: 'El bebé no _____ al perro que ladra.', correct: 'oye' },
      { sentence: 'Nosotros _____ la música alta de los vecinos.', correct: 'oímos' },
      { sentence: 'Ustedes _____ las noticias en la televisión.', correct: 'oyen' },
      { sentence: 'Vosotros _____ la voz del profesor muy bien.', correct: 'oís' },
      { sentence: 'Mi madre _____ mi canción favorita.', correct: 'oye' },
      { sentence: 'Yo no _____ nada, habla más fuerte.', correct: 'oigo' },
      { sentence: 'Tú y tu amigo _____ el teléfono sonar.', correct: 'oís' },
      { sentence: 'Ana y yo _____ el mar desde la ventana.', correct: 'oímos' },
      { sentence: 'Yo _____ la música, pero no me gusta.', correct: 'oigo' },
      { sentence: 'El niño _____ a su abuela en el teléfono.', correct: 'oye' },
      { sentence: 'Nosotros _____ la lluvia caer.', correct: 'oímos' },
      { sentence: 'Ustedes no _____ la campana de la iglesia.', correct: 'oyen' },
      { sentence: 'Pablo y yo _____ las campanas muy fuerte.', correct: 'oímos' },
      { sentence: 'Tú _____ la explicación, pero no la entiendes.', correct: 'oyes' },
      { sentence: 'La chica no _____ la radio porque _____ mal.', correct: 'oye' },
      { sentence: 'Ellos no _____ el coche que pasa.', correct: 'oyen' },
      { sentence: '¿Vosotros _____ el ruido de la calle?', correct: 'oís' },
      { sentence: 'Yo no _____ nada porque hay mucho ruido aquí.', correct: 'oigo' }
    ]
  },

  'ex-2-2-new-1-ir-contexts': {
    id: 'ex-2-2-new-1-ir-contexts',
    type: 'fillblank',
    title: 'Глагол IR в различных контекстах',
    description: 'Заполните пропуски правильной формой глагола IR. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ a la escuela cada día.', correct: 'voy' },
      { sentence: 'Tú _____ al museo con tu familia.', correct: 'vas' },
      { sentence: 'Mi hermano _____ a casa en autobús.', correct: 'va' },
      { sentence: 'Nosotros _____ al cine los viernes.', correct: 'vamos' },
      { sentence: 'Ellos _____ a la playa en verano.', correct: 'van' },
      { sentence: 'Usted _____ al restaurante con amigos.', correct: 'va' },
      { sentence: 'Vosotros _____ a la fiesta mañana.', correct: 'vais' },
      { sentence: 'María y Ana _____ al café después de clase.', correct: 'van' },
      { sentence: 'El profesor _____ a la oficina por la tarde.', correct: 'va' },
      { sentence: 'Yo no _____ al teatro hoy.', correct: 'voy' },
      { sentence: '¿Tú _____ a la estación en taxi?', correct: 'vas' },
      { sentence: 'Mi padre _____ al hotel en coche.', correct: 'va' },
      { sentence: 'Nosotros _____ a la ciudad grande.', correct: 'vamos' },
      { sentence: 'Las chicas _____ a la calle para hablar.', correct: 'van' },
      { sentence: 'El estudiante _____ a la clase de español.', correct: 'va' }
    ]
  },

  'ex-2-2-new-2-ir-prepositions': {
    id: 'ex-2-2-new-2-ir-prepositions',
    type: 'fillblank',
    title: 'IR с предлогами A, DE, EN',
    description: 'Заполните пропуски формой IR и нужной конструкцией. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ al bar a tomar café.', correct: 'voy' },
      { sentence: 'Nosotros _____ en metro a la universidad.', correct: 'vamos' },
      { sentence: 'Tú _____ de compras al centro.', correct: 'vas' },
      { sentence: 'Ella _____ en coche al trabajo.', correct: 'va' },
      { sentence: 'Ellos _____ de vacaciones a España.', correct: 'van' },
      { sentence: 'Yo _____ en tren a Barcelona.', correct: 'voy' },
      { sentence: 'Vosotros _____ al teatro en taxi.', correct: 'vais' },
      { sentence: 'Mi amigo _____ a pie a casa.', correct: 'va' },
      { sentence: 'Nosotros _____ en avión a Rusia.', correct: 'vamos' },
      { sentence: 'Las hermanas _____ de compras cada día.', correct: 'van' },
      { sentence: 'Tú _____ en barco a la isla.', correct: 'vas' },
      { sentence: 'El señor _____ en autobús a la oficina.', correct: 'va' },
      { sentence: 'Yo _____ al café con mis amigos.', correct: 'voy' },
      { sentence: 'Ustedes _____ de vacaciones en agosto.', correct: 'van' },
      { sentence: 'Mi familia y yo _____ al museo a pie.', correct: 'vamos' }
    ]
  },

  'ex-2-2-new-3-ir-infinitive': {
    id: 'ex-2-2-new-3-ir-infinitive',
    type: 'fillblank',
    title: 'Конструкция IR + A + инфинитив',
    description: 'Заполните пропуски формой IR для выражения будущего намерения. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ a descansar un poco.', correct: 'voy' },
      { sentence: 'Tú _____ a tomar té o café.', correct: 'vas' },
      { sentence: 'Ella _____ a leer un libro.', correct: 'va' },
      { sentence: 'Nosotros _____ a escribir cartas.', correct: 'vamos' },
      { sentence: 'Ellos _____ a comer en el restaurante.', correct: 'van' },
      { sentence: 'Yo _____ a beber agua fría.', correct: 'voy' },
      { sentence: 'Vosotros _____ a vivir en Madrid.', correct: 'vais' },
      { sentence: 'El estudiante _____ a aprender español.', correct: 'va' },
      { sentence: 'Nosotros _____ a abrir la puerta.', correct: 'vamos' },
      { sentence: 'Las chicas _____ a hablar por teléfono.', correct: 'van' },
      { sentence: 'Tú _____ a comprender el problema.', correct: 'vas' },
      { sentence: 'Mi hermano _____ a recibir un regalo.', correct: 'va' },
      { sentence: 'Yo _____ a tomar el sol en la playa.', correct: 'voy' },
      { sentence: 'Ustedes _____ a escuchar la radio.', correct: 'van' },
      { sentence: 'Mi madre _____ a preguntar el precio.', correct: 'va' }
    ]
  },

  'ex-2-2-new-4-tener-conjugation': {
    id: 'ex-2-2-new-4-tener-conjugation',
    type: 'fillblank',
    title: 'Спряжение глагола TENER',
    description: 'Заполните пропуски правильной формой глагола TENER. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ un libro nuevo.', correct: 'tengo' },
      { sentence: 'Tú _____ una casa grande.', correct: 'tienes' },
      { sentence: 'Ella _____ un hermano y una hermana.', correct: 'tiene' },
      { sentence: 'Nosotros _____ muchos amigos.', correct: 'tenemos' },
      { sentence: 'Ellos _____ un coche caro.', correct: 'tienen' },
      { sentence: 'Usted _____ tiempo para hablar.', correct: 'tiene' },
      { sentence: 'Vosotros _____ dinero para las vacaciones.', correct: 'tenéis' },
      { sentence: 'Mi padre _____ un trabajo difícil.', correct: 'tiene' },
      { sentence: 'Yo no _____ clase hoy.', correct: 'tengo' },
      { sentence: '¿Tú _____ el lápiz azul?', correct: 'tienes' },
      { sentence: 'La estudiante _____ muchos libros.', correct: 'tiene' },
      { sentence: 'Nosotros _____ una mesa grande en casa.', correct: 'tenemos' },
      { sentence: 'Las chicas _____ agua fría.', correct: 'tienen' },
      { sentence: 'El señor _____ una familia alegre.', correct: 'tiene' },
      { sentence: 'Yo _____ un amigo español.', correct: 'tengo' }
    ]
  },

  'ex-2-2-new-5-tener-expressions': {
    id: 'ex-2-2-new-5-tener-expressions',
    type: 'fillblank',
    title: 'Выражения с глаголом TENER',
    description: 'Заполните пропуски формой TENER с выражениями возраста, голода, жажды. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ veinte años.', correct: 'tengo' },
      { sentence: 'Tú _____ hambre después de clase.', correct: 'tienes' },
      { sentence: 'Él _____ sed y bebe agua.', correct: 'tiene' },
      { sentence: 'Nosotros _____ treinta años.', correct: 'tenemos' },
      { sentence: 'Ellas _____ razón en este problema.', correct: 'tienen' },
      { sentence: 'Mi hermana _____ veinticinco años.', correct: 'tiene' },
      { sentence: 'Vosotros _____ hambre y sed.', correct: 'tenéis' },
      { sentence: 'La señora _____ cincuenta años.', correct: 'tiene' },
      { sentence: 'Yo _____ sed, quiero tomar café.', correct: 'tengo' },
      { sentence: '¿Tú _____ hambre? Vamos al restaurante.', correct: 'tienes' },
      { sentence: 'Mi padre _____ cuarenta años.', correct: 'tiene' },
      { sentence: 'Nosotros no _____ razón.', correct: 'tenemos' },
      { sentence: 'Los estudiantes _____ hambre a las dos.', correct: 'tienen' },
      { sentence: 'Yo _____ dieciocho años.', correct: 'tengo' },
      { sentence: 'Tú _____ razón, el libro es interesante.', correct: 'tienes' }
    ]
  },

  'ex-2-2-new-6-oir-contexts': {
    id: 'ex-2-2-new-6-oir-contexts',
    type: 'fillblank',
    title: 'Глагол OÍR в различных ситуациях',
    description: 'Заполните пропуски правильной формой глагола OÍR. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ música en casa.', correct: 'oigo' },
      { sentence: 'Tú _____ la radio cada mañana.', correct: 'oyes' },
      { sentence: 'Ella _____ el teléfono.', correct: 'oye' },
      { sentence: 'Nosotros _____ a la profesora.', correct: 'oímos' },
      { sentence: 'Ellos _____ las noticias.', correct: 'oyen' },
      { sentence: 'Yo no _____ nada.', correct: 'oigo' },
      { sentence: 'Vosotros _____ la música alta.', correct: 'oís' },
      { sentence: 'Mi madre _____ mi voz.', correct: 'oye' },
      { sentence: 'Nosotros _____ el mar.', correct: 'oímos' },
      { sentence: '¿Tú _____ el problema?', correct: 'oyes' },
      { sentence: 'El señor _____ la explicación.', correct: 'oye' },
      { sentence: 'Yo _____ la noche fría.', correct: 'oigo' },
      { sentence: 'Las chicas _____ a su amiga.', correct: 'oyen' },
      { sentence: 'Ustedes no _____ bien.', correct: 'oyen' },
      { sentence: 'Mi hermano _____ la música en español.', correct: 'oye' }
    ]
  },

  'ex-2-2-new-7-mixed-verbs': {
    id: 'ex-2-2-new-7-mixed-verbs',
    type: 'fillblank',
    title: 'Смешанные упражнения IR, TENER, OÍR',
    description: 'Заполните пропуски правильной формой глагола IR, TENER или OÍR. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ a la oficina y _____ música.', correct: 'voy, oigo' },
      { sentence: 'Tú _____ sed y _____ a tomar agua.', correct: 'tienes, vas' },
      { sentence: 'Ella _____ un libro y _____ a leer.', correct: 'tiene, va' },
      { sentence: 'Nosotros _____ la radio y _____ al trabajo.', correct: 'oímos, vamos' },
      { sentence: 'Ellos _____ hambre y _____ al restaurante.', correct: 'tienen, van' },
      { sentence: 'Yo _____ veinte años y _____ a la universidad.', correct: 'tengo, voy' },
      { sentence: 'Vosotros _____ al cine y _____ una película.', correct: 'vais, oís' },
      { sentence: 'Mi hermana _____ un hermano y _____ a casa.', correct: 'tiene, va' },
      { sentence: 'Yo _____ el teléfono y _____ a responder.', correct: 'oigo, voy' },
      { sentence: 'Tú _____ razón, nosotros _____ a la playa.', correct: 'tienes, vamos' },
      { sentence: 'El profesor _____ a la clase y _____ a los estudiantes.', correct: 'va, oye' },
      { sentence: 'Nosotros _____ un problema y _____ a hablar.', correct: 'tenemos, vamos' },
      { sentence: 'Las chicas _____ la música y _____ en metro.', correct: 'oyen, van' },
      { sentence: 'Yo no _____ nada, _____ a casa.', correct: 'oigo, voy' },
      { sentence: 'Ustedes _____ tiempo y _____ al museo.', correct: 'tienen, van' }
    ]
  },

  'ex-2-2-new-8-translation': {
    id: 'ex-2-2-new-8-translation',
    type: 'writing',
    title: 'Перевод с русского на испанский',
    description: 'Переведите предложения с глаголами IR, TENER, OÍR на испанский. Внимание: ударения и знаки препинания считаются ошибкой',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { question: 'Я иду в школу каждый день.', correct: 'Voy a la escuela cada día.' },
      { question: 'Ты имеешь большой дом и красивую машину.', correct: 'Tienes una casa grande y un coche bonito.' },
      { question: 'Она слышит музыку в кафе.', correct: 'Ella oye música en el café.' },
      { question: 'Мы едем на пляж на автобусе.', correct: 'Vamos a la playa en autobús.' },
      { question: 'Они имеют много друзей в городе.', correct: 'Tienen muchos amigos en la ciudad.' },
      { question: 'Я слышу радио утром.', correct: 'Oigo la radio por la mañana.' },
      { question: 'Вы (vosotros) идете в театр пешком.', correct: 'Vais al teatro a pie.' },
      { question: 'Мой брат имеет двадцать пять лет.', correct: 'Mi hermano tiene veinticinco años.' },
      { question: 'Мы слышим море из дома.', correct: 'Oímos el mar desde casa.' },
      { question: 'Ты собираешься читать книгу.', correct: 'Vas a leer un libro.' },
      { question: 'Она имеет голод и жажду.', correct: 'Ella tiene hambre y sed.' },
      { question: 'Они едут в Испанию на отдых.', correct: 'Van de vacaciones a España.' },
      { question: 'Я слышу телефон и иду отвечать.', correct: 'Oigo el teléfono y voy a responder.' },
      { question: 'Вы (usted) имеете право, музей интересный.', correct: 'Usted tiene razón, el museo es interesante.' },
      { question: 'Мы идем в кино на машине.', correct: 'Vamos al cine en coche.' }
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
      { sentence: 'Nosotros ___ (venir) mañana', options: ['vengo', 'vienes', 'viene', 'venimos'], correct: 3 },
      { sentence: 'Yo ___ (tener) veinte años', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 0 },
      { sentence: 'Ellos ___ (ir) al teatro', options: ['voy', 'vas', 'va', 'van'], correct: 3 },
      { sentence: 'Usted ___ (querer) café', options: ['quiero', 'quieres', 'quiere', 'quieren'], correct: 2 },
      { sentence: 'Nosotras ___ (poder) ayudar', options: ['puedo', 'puedes', 'puede', 'podemos'], correct: 3 },
      { sentence: 'Tú ___ (saber) español', options: ['sé', 'sabes', 'sabe', 'saben'], correct: 1 },
      { sentence: 'Yo ___ (oír) música', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 0 },
      { sentence: 'Vosotros ___ (ir) en tren', options: ['voy', 'vais', 'va', 'van'], correct: 1 },
      { sentence: 'Ella ___ (tener) un coche', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 },
      { sentence: 'Ustedes ___ (venir) en autobús', options: ['vengo', 'vienes', 'viene', 'vienen'], correct: 3 },
      { sentence: 'Nosotros ___ (estar) en Madrid', options: ['estoy', 'estás', 'está', 'estamos'], correct: 3 },
      { sentence: 'Tú ___ (hacer) la comida', options: ['hago', 'haces', 'hace', 'hacen'], correct: 1 }
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
      { sentence: 'El libro ___ en la mesa (местонахождение)', options: ['es', 'está'], correct: 1 },
      { sentence: 'Nosotros ___ de Rusia (происхождение)', options: ['somos', 'estamos'], correct: 0 },
      { sentence: 'Tú ___ en la oficina (местонахождение)', options: ['eres', 'estás'], correct: 1 },
      { sentence: 'Ellos ___ profesores (профессия)', options: ['son', 'están'], correct: 0 },
      { sentence: 'La casa ___ grande (постоянное качество)', options: ['es', 'está'], correct: 0 },
      { sentence: 'Yo ___ feliz hoy (временное состояние)', options: ['soy', 'estoy'], correct: 1 },
      { sentence: 'Vosotros ___ españoles (национальность)', options: ['sois', 'estáis'], correct: 0 },
      { sentence: 'El café ___ frío (временное состояние)', options: ['es', 'está'], correct: 1 },
      { sentence: 'Mi hermana ___ inteligente (постоянная черта)', options: ['es', 'está'], correct: 0 },
      { sentence: 'Los estudiantes ___ en clase (местонахождение)', options: ['son', 'están'], correct: 1 },
      { sentence: 'Usted ___ muy amable (постоянная черта)', options: ['es', 'está'], correct: 0 },
      { sentence: 'Nosotras ___ cansadas después del trabajo (временное)', options: ['somos', 'estamos'], correct: 1 }
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
      { russian: 'Мы находимся (estar)', correct: 'estamos' },
      { russian: 'Они приходят (venir)', correct: 'vienen' },
      { russian: 'Она имеет (tener)', correct: 'tiene' },
      { russian: 'Я могу (poder)', correct: 'puedo' },
      { russian: 'Вы хотите (querer, вежл.)', correct: 'quiere' },
      { russian: 'Ты знаешь (saber)', correct: 'sabes' },
      { russian: 'Я слышу (oír)', correct: 'oigo' },
      { russian: 'Мы идем в театр (ir)', correct: 'vamos al teatro' },
      { russian: 'Она едет на автобусе (ir)', correct: 'va en autobús' },
      { russian: 'Я собираюсь отдыхать (ir a + descansar)', correct: 'voy a descansar' },
      { russian: 'Они собираются купить (ir a + comprar)', correct: 'van a comprar' },
      { russian: 'Мы едем в отпуск (ir de vacaciones)', correct: 'vamos de vacaciones' },
      { russian: 'Ты идешь за покупками (ir de compras)', correct: 'vas de compras' }
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
      { spanish: 'desarrollo', options: ['развитие', 'развлечение', 'раздел', 'разделение'], correct: 0 },
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
  },

  // МОДУЛЬ 7: Subjuntivo
  'ex-7-1-1': {
    id: 'ex-7-1-1',
    type: 'grammar',
    title: 'Образование subjuntivo - AR глаголы',
    description: 'Выберите правильную форму subjuntivo',
    questions: [
      { sentence: 'Quiero que tú ___ (hablar) español', options: ['hablas', 'hables', 'hable', 'hablen'], correct: 1 },
      { sentence: 'Es importante que nosotros ___ (estudiar)', options: ['estudiamos', 'estudien', 'estudiemos', 'estudie'], correct: 2 },
      { sentence: 'Espero que ella ___ (trabajar) aquí', options: ['trabaja', 'trabaje', 'trabajas', 'trabajen'], correct: 1 },
      { sentence: 'Necesito que ellos ___ (ayudar)', options: ['ayudan', 'ayude', 'ayudes', 'ayuden'], correct: 3 }
    ]
  },
  'ex-7-1-2': {
    id: 'ex-7-1-2',
    type: 'grammar',
    title: 'Образование subjuntivo - ER/IR глаголы',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Quiero que tú ___ (comer) verduras', options: ['comes', 'comas', 'coma', 'coman'], correct: 1 },
      { sentence: 'Espero que él ___ (vivir) feliz', options: ['vive', 'viva', 'vivas', 'vivan'], correct: 1 },
      { sentence: 'Es necesario que nosotros ___ (escribir)', options: ['escribimos', 'escriban', 'escribamos', 'escriba'], correct: 2 },
      { sentence: 'Dudo que ellos ___ (aprender) rápido', options: ['aprenden', 'aprenda', 'aprendan', 'aprendas'], correct: 2 }
    ]
  },
  'ex-7-1-3': {
    id: 'ex-7-1-3',
    type: 'grammar',
    title: 'Неправильные формы subjuntivo',
    description: 'Выберите правильную неправильную форму',
    questions: [
      { sentence: 'Quiero que tú ___ (ser) feliz', options: ['eres', 'seas', 'sea', 'sean'], correct: 1 },
      { sentence: 'Espero que él ___ (estar) bien', options: ['está', 'esté', 'estés', 'estén'], correct: 1 },
      { sentence: 'Dudo que ellos ___ (ir) mañana', options: ['van', 'vaya', 'vayas', 'vayan'], correct: 3 },
      { sentence: 'Es importante que tú ___ (saber) esto', options: ['sabes', 'sepas', 'sepa', 'sepan'], correct: 1 },
      { sentence: 'Necesito que ella ___ (hacer) la tarea', options: ['hace', 'haga', 'hagas', 'hagan'], correct: 1 }
    ]
  },
  'ex-7-1-4': {
    id: 'ex-7-1-4',
    type: 'fillblank',
    title: 'Completar con subjuntivo',
    description: 'Вставьте правильную форму subjuntivo',
    questions: [
      { sentence: 'Quiero que tú _____ (venir) a mi fiesta', verb: 'venir', correct: 'vengas' },
      { sentence: 'Espero que _____ (haber) comida', verb: 'haber', correct: 'haya' },
      { sentence: 'Es necesario que nosotros _____ (tener) paciencia', verb: 'tener', correct: 'tengamos' },
      { sentence: 'Dudo que él _____ (poder) hacerlo', verb: 'poder', correct: 'pueda' }
    ]
  },
  'ex-7-1-5': {
    id: 'ex-7-1-5',
    type: 'writing',
    title: 'Traducción subjuntivo',
    description: 'Переведите используя subjuntivo',
    questions: [
      { russian: 'Я хочу, чтобы ты пришел', correct: 'quiero que vengas' },
      { russian: 'Надеюсь, что он знает', correct: 'espero que sepa' },
      { russian: 'Важно, чтобы мы учились', correct: 'es importante que estudiemos' },
      { russian: 'Сомневаюсь, что они придут', correct: 'dudo que vengan' }
    ]
  },

  'ex-7-2-1': {
    id: 'ex-7-2-1',
    type: 'grammar',
    title: 'Желания с subjuntivo',
    description: 'Выберите правильную форму после querer/esperar',
    questions: [
      { sentence: 'Quiero que tú ___ (estudiar) más', options: ['estudias', 'estudies', 'estudie', 'estudien'], correct: 1 },
      { sentence: 'Espero que ___ (llover) mañana', options: ['llueve', 'llueva', 'lluevas', 'lluevan'], correct: 1 },
      { sentence: 'Necesitamos que ellos nos ___ (ayudar)', options: ['ayudan', 'ayude', 'ayudes', 'ayuden'], correct: 3 },
      { sentence: 'Prefiero que tú ___ (venir) temprano', options: ['vienes', 'vengas', 'venga', 'vengan'], correct: 1 }
    ]
  },
  'ex-7-2-2': {
    id: 'ex-7-2-2',
    type: 'grammar',
    title: 'Эмоции с subjuntivo',
    description: 'Выберите subjuntivo после выражений эмоций',
    questions: [
      { sentence: 'Me alegro de que tú ___ (estar) aquí', options: ['estás', 'estés', 'esté', 'estén'], correct: 1 },
      { sentence: 'Siento que ella no ___ (poder) venir', options: ['puede', 'pueda', 'puedas', 'puedan'], correct: 1 },
      { sentence: 'Me sorprende que ellos no lo ___ (saber)', options: ['saben', 'sepa', 'sepas', 'sepan'], correct: 3 },
      { sentence: 'Tengo miedo de que ___ (llover)', options: ['llueve', 'llueva', 'lluevas', 'lluevan'], correct: 1 }
    ]
  },
  'ex-7-2-3': {
    id: 'ex-7-2-3',
    type: 'grammar',
    title: 'Ojalá с subjuntivo',
    description: 'Выберите форму после ojalá',
    questions: [
      { sentence: 'Ojalá ___ (hacer) buen tiempo', options: ['hace', 'haga', 'hagas', 'hagan'], correct: 1 },
      { sentence: 'Ojalá tú ___ (tener) suerte', options: ['tienes', 'tengas', 'tenga', 'tengan'], correct: 1 },
      { sentence: 'Ojalá ellos ___ (venir) a la fiesta', options: ['vienen', 'venga', 'vengas', 'vengan'], correct: 3 },
      { sentence: 'Ojalá ___ (ser) verdad', options: ['es', 'sea', 'seas', 'sean'], correct: 1 }
    ]
  },
  'ex-7-2-4': {
    id: 'ex-7-2-4',
    type: 'reading',
    title: 'Чтение: Carta a un amigo',
    description: 'Ответьте на вопросы о письме',
    text: 'Espero que estés bien. Quiero que sepas que voy a Madrid. Me alegro de que hayas conseguido trabajo. Es posible que me mude a Barcelona. Dudo que sea fácil. Espero que me inviten a la boda de Laura.',
    questions: [
      { question: 'Куда поедет автор?', options: ['В Барселону', 'В Мадрид', 'В Валенсию', 'В Севилью'], correct: 1 },
      { question: 'Что автор думает о переезде?', options: ['Уверен', 'Сомневается', 'Не хочет', 'Рад'], correct: 1 },
      { question: 'О чьей свадьбе говорится?', options: ['Мигеля', 'Карлоса', 'Лауры', 'Аны'], correct: 2 },
      { question: 'Что получил Мигель?', options: ['Письмо', 'Работу', 'Машину', 'Квартиру'], correct: 1 }
    ]
  },
  'ex-7-2-5': {
    id: 'ex-7-2-5',
    type: 'writing',
    title: 'Желания и эмоции',
    description: 'Переведите используя subjuntivo',
    questions: [
      { russian: 'Я рад, что ты здесь', correct: 'me alegro de que estés aquí' },
      { russian: 'Хоть бы шел дождь', correct: 'ojalá llueva' },
      { russian: 'Сожалею, что ты не можешь прийти', correct: 'siento que no puedas venir' },
      { russian: 'Важно, чтобы ты знал', correct: 'es importante que sepas' }
    ]
  },

  'ex-7-3-1': {
    id: 'ex-7-3-1',
    type: 'grammar',
    title: 'CUANDO с subjuntivo',
    description: 'Выберите правильную форму после cuando',
    questions: [
      { sentence: 'Cuando ___ (llegar-futuro), hablaremos', options: ['llegas', 'llegues', 'llegue', 'lleguen'], correct: 1 },
      { sentence: 'Cuando ___ (venir-presente habitual), comemos', options: ['vienes', 'vengas', 'venga', 'vengan'], correct: 0 },
      { sentence: 'Cuando ___ (tener-futuro) tiempo, te llamo', options: ['tienes', 'tengas', 'tenga', 'tengan'], correct: 2 },
      { sentence: 'Cuando ___ (ser-pasado) niño, jugaba', options: ['fue', 'era', 'sea', 'fuera'], correct: 1 }
    ]
  },
  'ex-7-3-2': {
    id: 'ex-7-3-2',
    type: 'grammar',
    title: 'PARA QUE с subjuntivo',
    description: 'Выберите форму после para que',
    questions: [
      { sentence: 'Te lo explico para que ___ (entender)', options: ['entiendes', 'entiendas', 'entienda', 'entiendan'], correct: 1 },
      { sentence: 'Hablo despacio para que me ___ (comprender)', options: ['comprendes', 'comprendas', 'comprenda', 'comprendan'], correct: 1 },
      { sentence: 'Trabajo para que mi familia ___ (vivir) bien', options: ['vive', 'viva', 'vivas', 'vivan'], correct: 3 },
      { sentence: 'Te llamo para que ___ (saber) la verdad', options: ['sabes', 'sepas', 'sepa', 'sepan'], correct: 1 }
    ]
  },
  'ex-7-3-3': {
    id: 'ex-7-3-3',
    type: 'grammar',
    title: 'Busco... с subjuntivo',
    description: 'Неопределенное vs определенное',
    questions: [
      { sentence: 'Busco una casa que ___ jardín (неопределенное)', options: ['tiene', 'tenga', 'tengas', 'tengan'], correct: 1 },
      { sentence: 'Tengo una casa que ___ jardín (определенное)', options: ['tiene', 'tenga', 'tengas', 'tengan'], correct: 0 },
      { sentence: 'No hay nadie que ___ la respuesta', options: ['sabe', 'sepa', 'sepas', 'sepan'], correct: 1 },
      { sentence: '¿Hay alguien que ___ ruso?', options: ['habla', 'hable', 'hablas', 'hablen'], correct: 1 }
    ]
  },
  'ex-7-3-4': {
    id: 'ex-7-3-4',
    type: 'reading',
    title: 'Чтение: El Camino de Santiago',
    description: 'Ответьте на вопросы о Пути',
    text: 'El Camino de Santiago es famoso. Antes de que empieces, prepara bien. Aunque hay rutas cortas, muchos prefieren el Camino completo. No hay nadie que no tenga historia. En cuanto llegues a Santiago, sentirás emociones. Ojalá algún día puedas hacerlo.',
    questions: [
      { question: 'Что нужно сделать перед началом?', options: ['Купить билет', 'Подготовиться', 'Позвонить', 'Написать'], correct: 1 },
      { question: 'Какой путь предпочитают многие?', options: ['Короткий', 'Средний', 'Полный', 'Быстрый'], correct: 2 },
      { question: 'Что почувствуешь в Сантьяго?', options: ['Усталость', 'Эмоции', 'Голод', 'Холод'], correct: 1 },
      { question: 'Что говорится о паломниках?', options: ['Все молодые', 'Все старые', 'У всех есть история', 'Все испанцы'], correct: 2 }
    ]
  },
  'ex-7-3-5': {
    id: 'ex-7-3-5',
    type: 'writing',
    title: 'Придаточные предложения',
    description: 'Переведите используя subjuntivo',
    questions: [
      { russian: 'Когда ты придешь, поговорим', correct: 'cuando vengas hablaremos' },
      { russian: 'Хоть бы ты мог прийти', correct: 'ojalá puedas venir' },
      { russian: 'Ищу книгу, которая объясняет это', correct: 'busco un libro que explique esto' },
      { russian: 'Даже если будет дождь, пойдем', correct: 'aunque llueva iremos' }
    ]
  },

  // ============ МОДУЛЬ 8: УСЛОВНЫЕ ПРЕДЛОЖЕНИЯ (B1) ============

  // Урок 8.1 - Реальные условия
  'ex-8-1-1': {
    id: 'ex-8-1-1',
    type: 'grammar',
    title: 'Si + presente, futuro',
    description: 'Выберите правильную форму глагола',
    questions: [
      { sentence: 'Si mañana ___ (llover), me quedaré en casa', options: ['lloverá', 'llueve', 'lloviera', 'llueva'], correct: 1 },
      { sentence: 'Si tú ___ (estudiar), aprobarás', options: ['estudias', 'estudiarás', 'estudies', 'estudiaras'], correct: 0 },
      { sentence: 'Si ellos ___ (venir), les hablaré', options: ['vendrán', 'vienen', 'vengan', 'vinieran'], correct: 1 },
      { sentence: 'Si yo ___ (tener) tiempo, te llamaré', options: ['tendré', 'tengo', 'tenga', 'tuviera'], correct: 1 },
      { sentence: 'Si nosotros ___ (salir) ahora, llegaremos a tiempo', options: ['saldremos', 'salimos', 'salgamos', 'saliéramos'], correct: 1 }
    ]
  },
  'ex-8-1-2': {
    id: 'ex-8-1-2',
    type: 'grammar',
    title: 'Si + presente, imperativo',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Si ___ (ver-tú) a Juan, dile que lo busco', options: ['verás', 'ves', 'veas', 'vieras'], correct: 1 },
      { sentence: 'Si ___ (estar-tú) cansado, descansa', options: ['estarás', 'estás', 'estés', 'estuvieras'], correct: 1 },
      { sentence: 'Si ___ (querer-tú) café, prepáralo', options: ['querrás', 'quieres', 'quieras', 'quisieras'], correct: 1 },
      { sentence: 'Si ___ (tener-tú) frío, cierra la ventana', options: ['tendrás', 'tienes', 'tengas', 'tuvieras'], correct: 1 },
      { sentence: 'Si no ___ (entender-tú), pregúntame', options: ['entenderás', 'entiendes', 'entiendas', 'entendieras'], correct: 1 }
    ]
  },
  'ex-8-1-3': {
    id: 'ex-8-1-3',
    type: 'fillblank',
    title: 'Completar condicionales',
    description: 'Complete con la forma correcta del verbo',
    questions: [
      { sentence: 'Si hace buen tiempo mañana, (nosotros-ir) ___ a la playa', correct: 'iremos' },
      { sentence: 'Si estudias duro, (tú-aprobar) ___ el examen', correct: 'aprobarás' },
      { sentence: 'Si me necesitas, (yo-estar) ___ aquí', correct: 'estaré' },
      { sentence: 'Si ellos llegan tarde, (nosotros-esperar) ___ ', correct: 'esperaremos' },
      { sentence: 'Si tienes hambre, (tú-comer) ___ algo', correct: 'come' }
    ]
  },
  'ex-8-1-4': {
    id: 'ex-8-1-4',
    type: 'reading',
    title: 'Чтение: Planes de María',
    description: 'Ответьте на вопросы о тексте',
    text: 'María busca trabajo en Barcelona. Si consigue el trabajo, se mudará allí. Si no la aceptan, buscará en Madrid. Su madre dice: si necesitas volver, siempre tendrás un lugar aquí. María piensa: si trabajo duro, tendré éxito.',
    questions: [
      { question: 'Куда переедет Мария, если получит работу?', options: ['В Мадрид', 'В Барселону', 'В Валенсию', 'В Севилью'], correct: 1 },
      { question: 'Что сделает Мария, если ее не примут?', options: ['Вернется домой', 'Будет искать в Мадриде', 'Уедет за границу', 'Остановится'], correct: 1 },
      { question: 'Что говорит мать?', options: ['Не уезжай', 'Всегда можешь вернуться', 'Это опасно', 'Подумай еще'], correct: 1 },
      { question: 'Что думает Мария?', options: ['Что все легко', 'Что будет трудно', 'Что работа даст успех', 'Что не хочет ехать'], correct: 2 }
    ]
  },
  'ex-8-1-5': {
    id: 'ex-8-1-5',
    type: 'writing',
    title: 'Условия первого типа',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Если будет дождь, останусь дома', correct: 'si llueve me quedaré en casa' },
      { russian: 'Если ты придешь, поговорим', correct: 'si vienes hablaremos' },
      { russian: 'Если увидишь Анну, передай привет', correct: 'si ves a ana dale recuerdos' },
      { russian: 'Если буду свободен, позвоню', correct: 'si estoy libre llamaré' }
    ]
  },

  // Урок 8.2 - Нереальные условия
  'ex-8-2-1': {
    id: 'ex-8-2-1',
    type: 'grammar',
    title: 'Imperfecto de subjuntivo',
    description: 'Выберите правильную форму imperfecto subjuntivo',
    questions: [
      { sentence: 'Si yo ___ (tener) dinero, viajaría', options: ['tengo', 'tenga', 'tuviera', 'tendría'], correct: 2 },
      { sentence: 'Si tú ___ (ser) rico, ¿qué harías?', options: ['eres', 'seas', 'fueras', 'serías'], correct: 2 },
      { sentence: 'Si nosotros ___ (poder) volar, iríamos al espacio', options: ['podemos', 'podamos', 'pudiéramos', 'podríamos'], correct: 2 },
      { sentence: 'Si ellos ___ (vivir) aquí, nos veríamos más', options: ['viven', 'vivan', 'vivieran', 'vivirían'], correct: 2 },
      { sentence: 'Si ella ___ (estudiar) más, aprobaría', options: ['estudia', 'estudie', 'estudiara', 'estudiaría'], correct: 2 }
    ]
  },
  'ex-8-2-2': {
    id: 'ex-8-2-2',
    type: 'grammar',
    title: 'Tipo 1 vs Tipo 2',
    description: 'Elija el tipo correcto según el contexto',
    questions: [
      { sentence: 'Si ___ (tener-yo) tiempo mañana, te llamo (REAL)', options: ['tengo', 'tenga', 'tuviera', 'tendría'], correct: 0 },
      { sentence: 'Si ___ (tener-yo) un millón, viajaría (IRREAL)', options: ['tengo', 'tenga', 'tuviera', 'tendría'], correct: 2 },
      { sentence: 'Si ___ (estudiar-tú), aprobarás (REAL)', options: ['estudias', 'estudies', 'estudiaras', 'estudiarías'], correct: 0 },
      { sentence: 'Si ___ (estudiar-tú) medicina, serías doctor (IRREAL)', options: ['estudias', 'estudies', 'estudiaras', 'estudiarías'], correct: 2 },
      { sentence: 'Si ___ (llover) mañana, no iré (REAL)', options: ['llueve', 'llueva', 'lloviera', 'llovería'], correct: 0 }
    ]
  },
  'ex-8-2-3': {
    id: 'ex-8-2-3',
    type: 'fillblank',
    title: 'Completar con condicional',
    description: 'Complete con la forma correcta',
    questions: [
      { sentence: 'Si tuviera dinero, (yo-comprar) ___ una casa', correct: 'compraría' },
      { sentence: 'Si fuera rica, no (yo-trabajar) ___ ', correct: 'trabajaría' },
      { sentence: 'Si pudiéramos volar, (nosotros-ir) ___ al espacio', correct: 'iríamos' },
      { sentence: '¿Qué (tú-hacer) ___ si ganaras la lotería?', correct: 'harías' },
      { sentence: 'Si viviera en España, (yo-hablar) ___ mejor español', correct: 'hablaría' }
    ]
  },
  'ex-8-2-4': {
    id: 'ex-8-2-4',
    type: 'reading',
    title: 'Чтение: ¿Qué harías?',
    description: 'Ответьте на вопросы',
    text: 'Ana dice: "Si pudiera ser alguien, sería astronauta. Si fuera astronauta, viajaría al espacio". Carlos responde: "Si yo fuera músico, tocaría en estadios. Si ganara dinero, ayudaría a jóvenes artistas". Laura dice: "Si encontrara la cura para enfermedades, salvaría millones de vidas".',
    questions: [
      { question: 'Кем бы хотела стать Ана?', options: ['Музыкантом', 'Астронавтом', 'Врачом', 'Ученым'], correct: 1 },
      { question: 'Что бы сделал Карлос с деньгами?', options: ['Купил дом', 'Путешествовал', 'Помог молодым артистам', 'Открыл бизнес'], correct: 2 },
      { question: 'Что бы сделала Лаура?', options: ['Нашла лекарство', 'Полетела в космос', 'Играла музыку', 'Путешествовала'], correct: 0 },
      { question: 'Все мечты...', options: ['Реальные', 'Нереальные/гипотетические', 'Прошлые', 'Будущие точные'], correct: 1 }
    ]
  },
  'ex-8-2-5': {
    id: 'ex-8-2-5',
    type: 'writing',
    title: 'Условия второго типа',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Если бы у меня были деньги, купил бы машину', correct: 'si tuviera dinero compraría un coche' },
      { russian: 'Если бы я был богатым, путешествовал бы', correct: 'si fuera rico viajaría' },
      { russian: 'Что бы ты сделал на моем месте?', correct: 'qué harías en mi lugar' },
      { russian: 'Если бы я мог летать, был бы счастлив', correct: 'si pudiera volar sería feliz' }
    ]
  },

  // Урок 8.3 - Условия в прошлом
  'ex-8-3-1': {
    id: 'ex-8-3-1',
    type: 'grammar',
    title: 'Pluscuamperfecto de subjuntivo',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Si ___ (estudiar-yo), habría aprobado', options: ['estudié', 'estudie', 'hubiera estudiado', 'habría estudiado'], correct: 2 },
      { sentence: 'Si ___ (venir-tú), te habrías divertido', options: ['viniste', 'vengas', 'hubieras venido', 'habrías venido'], correct: 2 },
      { sentence: 'Si ___ (saber-yo), habría ido', options: ['supe', 'sepa', 'hubiera sabido', 'habría sabido'], correct: 2 },
      { sentence: 'Si ___ (salir-nosotros) antes, habríamos llegado', options: ['salimos', 'salgamos', 'hubiéramos salido', 'habríamos salido'], correct: 2 },
      { sentence: 'Si ellos ___ (llamar), habría contestado', options: ['llamaron', 'llamen', 'hubieran llamado', 'habrían llamado'], correct: 2 }
    ]
  },
  'ex-8-3-2': {
    id: 'ex-8-3-2',
    type: 'grammar',
    title: 'Tres tipos de condicionales',
    description: 'Identifique el tipo correcto',
    questions: [
      { sentence: 'Si estudias, aprobarás', options: ['Tipo 1 (real)', 'Tipo 2 (irreal presente)', 'Tipo 3 (irreal pasado)'], correct: 0 },
      { sentence: 'Si estudiaras, aprobarías', options: ['Tipo 1 (real)', 'Tipo 2 (irreal presente)', 'Tipo 3 (irreal pasado)'], correct: 1 },
      { sentence: 'Si hubieras estudiado, habrías aprobado', options: ['Tipo 1 (real)', 'Tipo 2 (irreal presente)', 'Tipo 3 (irreal pasado)'], correct: 2 },
      { sentence: 'Si tengo tiempo, te llamo', options: ['Tipo 1 (real)', 'Tipo 2 (irreal presente)', 'Tipo 3 (irreal pasado)'], correct: 0 },
      { sentence: 'Si hubiera sabido, habría venido', options: ['Tipo 1 (real)', 'Tipo 2 (irreal presente)', 'Tipo 3 (irreal pasado)'], correct: 2 }
    ]
  },
  'ex-8-3-3': {
    id: 'ex-8-3-3',
    type: 'fillblank',
    title: 'Completar condicionales pasados',
    description: 'Complete con la forma correcta',
    questions: [
      { sentence: 'Si hubiera estudiado más, (yo-aprobar) ___ ', correct: 'habría aprobado' },
      { sentence: 'Si hubieras venido, (tú-divertirse) ___ ', correct: 'te habrías divertido' },
      { sentence: 'Si hubiera sabido, no (yo-decir) ___ nada', correct: 'habría dicho' },
      { sentence: 'Si hubiéramos salido antes, (nosotros-llegar) ___ a tiempo', correct: 'habríamos llegado' },
      { sentence: 'Si me hubieran invitado, (yo-ir) ___ ', correct: 'habría ido' }
    ]
  },
  'ex-8-3-4': {
    id: 'ex-8-3-4',
    type: 'reading',
    title: 'Чтение: Arrepentimientos',
    description: 'Ответьте на вопросы',
    text: 'Roberto reflexiona: "Si hubiera estudiado ingeniería, habría tenido una carrera estable. Pero si hubiera hecho eso, nunca habría conocido a Elena. Si le hubiera dedicado más tiempo a mi hija, nuestra relación sería mejor ahora. Si hubiera dejado de fumar antes, estaría más sano".',
    questions: [
      { question: 'Что было бы, если бы Роберто учился на инженера?', options: ['Был бы богат', 'Имел бы стабильную карьеру', 'Жил бы в Нью-Йорке', 'Был бы несчастлив'], correct: 1 },
      { question: 'Что было бы, если бы выбрал инженерию?', options: ['Не встретил бы Елену', 'Был бы богаче', 'Жил бы лучше', 'Работал бы меньше'], correct: 0 },
      { question: 'О чем сожалеет с дочерью?', options: ['Не дал денег', 'Не дал времени', 'Был строгим', 'Уехал'], correct: 1 },
      { question: 'Какое сожаление о здоровье?', options: ['Мало спал', 'Плохо ел', 'Не бросил курить раньше', 'Не занимался спортом'], correct: 2 }
    ]
  },
  'ex-8-3-5': {
    id: 'ex-8-3-5',
    type: 'writing',
    title: 'Условия третьего типа',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Если бы я учился, сдал бы экзамен', correct: 'si hubiera estudiado habría aprobado' },
      { russian: 'Если бы ты пришел, повеселился бы', correct: 'si hubieras venido te habrías divertido' },
      { russian: 'Если бы я знал, не сказал бы ничего', correct: 'si hubiera sabido no habría dicho nada' },
      { russian: 'Если бы мы вышли раньше, успели бы', correct: 'si hubiéramos salido antes habríamos llegado a tiempo' }
    ]
  },

  // ============ МОДУЛЬ 9: ЛИТЕРАТУРА И КУЛЬТУРА (B1) ============

  // Урок 9.1 - Испанская литература
  'ex-9-1-1': {
    id: 'ex-9-1-1',
    type: 'reading',
    title: 'Чтение: Don Quijote',
    description: 'Ответьте на вопросы о Дон Кихоте',
    text: 'Don Quijote es la obra más importante de Cervantes. Alonso Quijano lee muchas novelas de caballerías y se vuelve loco. Se convierte en Don Quijote con Sancho Panza como escudero. En el episodio famoso, ataca molinos de viento creyendo que son gigantes. Sancho es práctico, Don Quijote es idealista.',
    questions: [
      { question: 'Кто написал Дон Кихота?', options: ['Lorca', 'Cervantes', 'Lope de Vega', 'Calderón'], correct: 1 },
      { question: 'Почему Алонсо сходит с ума?', options: ['От болезни', 'От любви', 'От чтения рыцарских романов', 'От бедности'], correct: 2 },
      { question: 'Кто такой Санчо Панса?', options: ['Конь', 'Оруженосец', 'Враг', 'Брат'], correct: 1 },
      { question: 'За кого принимает мельницы?', options: ['За замки', 'За великанов', 'За драконов', 'За армии'], correct: 1 }
    ]
  },
  'ex-9-1-2': {
    id: 'ex-9-1-2',
    type: 'vocabulary',
    title: 'Литературная лексика',
    description: 'Сопоставьте слова',
    questions: [
      { spanish: 'la novela', options: ['стихотворение', 'роман', 'пьеса', 'рассказ'], correct: 1 },
      { spanish: 'el poeta', options: ['поэт', 'писатель', 'актер', 'художник'], correct: 0 },
      { spanish: 'el personaje', options: ['персонаж', 'автор', 'читатель', 'критик'], correct: 0 },
      { spanish: 'la obra de teatro', options: ['роман', 'стих', 'пьеса', 'эссе'], correct: 2 }
    ]
  },
  'ex-9-1-3': {
    id: 'ex-9-1-3',
    type: 'grammar',
    title: 'Литературные периоды',
    description: 'Выберите правильный ответ',
    questions: [
      { sentence: 'Cervantes escribió Don Quijote en el ___', options: ['Edad Media', 'Siglo de Oro', 'Siglo XIX', 'Siglo XX'], correct: 1 },
      { sentence: 'Lorca fue parte de la ___', options: ['Generación del 98', 'Generación del 27', 'Generación del 50', 'Generación Beat'], correct: 1 },
      { sentence: '"La vida es sueño" es una obra de ___', options: ['Cervantes', 'Lorca', 'Calderón', 'Bécquer'], correct: 2 },
      { sentence: 'El "Romancero gitano" es de ___', options: ['Cervantes', 'Lorca', 'Lope de Vega', 'Machado'], correct: 1 }
    ]
  },
  'ex-9-1-4': {
    id: 'ex-9-1-4',
    type: 'fillblank',
    title: 'Completar sobre literatura',
    description: 'Complete las frases',
    questions: [
      { sentence: 'Don Quijote fue escrito por Miguel de ___ ', correct: 'Cervantes' },
      { sentence: 'Lorca escribió "Bodas de ___ "', correct: 'sangre' },
      { sentence: 'El Siglo de ___ fue el período más brillante', correct: 'Oro' },
      { sentence: 'Sancho Panza es el ___ de Don Quijote', correct: 'escudero' }
    ]
  },
  'ex-9-1-5': {
    id: 'ex-9-1-5',
    type: 'writing',
    title: 'Опишите произведение',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Дон Кихот - самая знаменитая книга Сервантеса', correct: 'don quijote es el libro más famoso de cervantes' },
      { russian: 'Лорка был великим поэтом', correct: 'lorca fue un gran poeta' },
      { russian: 'Мне нравится читать испанскую литературу', correct: 'me gusta leer literatura española' },
      { russian: 'Эта пьеса очень интересная', correct: 'esta obra de teatro es muy interesante' }
    ]
  },

  // Урок 9.2 - Испанские традиции
  'ex-9-2-1': {
    id: 'ex-9-2-1',
    type: 'reading',
    title: 'Чтение: Праздники Испании',
    description: 'Ответьте на вопросы',
    text: 'España tiene muchas fiestas. En enero están los Reyes Magos con regalos para niños. En marzo, Valencia celebra Las Fallas quemando enormes esculturas. En julio, Pamplona tiene San Fermín con el encierro de toros. En agosto, Buñol celebra La Tomatina lanzando tomates. En diciembre, la gente come 12 uvas en Nochevieja.',
    questions: [
      { question: 'Cuándo es el Día de Reyes?', options: ['En marzo', 'En enero', 'En julio', 'En diciembre'], correct: 1 },
      { question: '¿Qué se quema en Las Fallas?', options: ['Libros', 'Ropa', 'Esculturas', 'Árboles'], correct: 2 },
      { question: '¿Dónde es el encierro de toros?', options: ['Valencia', 'Sevilla', 'Pamplona', 'Buñol'], correct: 2 },
      { question: '¿Cuántas uvas se comen en Nochevieja?', options: ['6', '10', '12', '24'], correct: 2 }
    ]
  },
  'ex-9-2-2': {
    id: 'ex-9-2-2',
    type: 'vocabulary',
    title: 'Лексика праздников',
    description: 'Сопоставьте слова',
    questions: [
      { spanish: 'la fiesta', options: ['праздник', 'работа', 'школа', 'больница'], correct: 0 },
      { spanish: 'celebrar', options: ['работать', 'праздновать', 'учиться', 'спать'], correct: 1 },
      { spanish: 'bailar', options: ['петь', 'танцевать', 'бегать', 'плавать'], correct: 1 },
      { spanish: 'la tapa', options: ['стол', 'стул', 'закуска', 'тарелка'], correct: 2 }
    ]
  },
  'ex-9-2-3': {
    id: 'ex-9-2-3',
    type: 'grammar',
    title: 'Традиции и культура',
    description: 'Выберите правильный ответ',
    questions: [
      { sentence: 'El flamenco es un arte de ___', options: ['Cataluña', 'Galicia', 'Andalucía', 'País Vasco'], correct: 2 },
      { sentence: 'La paella es típica de ___', options: ['Madrid', 'Valencia', 'Sevilla', 'Barcelona'], correct: 1 },
      { sentence: 'En España se cena a las ___', options: ['18:00', '19:00', '20:00', '21:00 o más tarde'], correct: 3 },
      { sentence: 'Las tapas son ___', options: ['postres', 'bebidas', 'pequeñas porciones de comida', 'platos principales'], correct: 2 }
    ]
  },
  'ex-9-2-4': {
    id: 'ex-9-2-4',
    type: 'fillblank',
    title: 'Completar sobre tradiciones',
    description: 'Complete las frases',
    questions: [
      { sentence: 'En Nochevieja se comen doce ___ ', correct: 'uvas' },
      { sentence: 'Los Reyes Magos traen ___ a los niños', correct: 'regalos' },
      { sentence: 'El ___ es una danza tradicional andaluza', correct: 'flamenco' },
      { sentence: 'Las ___ son pequeñas porciones de comida', correct: 'tapas' }
    ]
  },
  'ex-9-2-5': {
    id: 'ex-9-2-5',
    type: 'writing',
    title: 'Описание традиций',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Мне нравится ходить на тапас', correct: 'me gusta ir de tapas' },
      { russian: 'Испанские праздники очень интересные', correct: 'las fiestas españolas son muy interesantes' },
      { russian: 'В Испании ужинают поздно', correct: 'en españa se cena tarde' },
      { russian: 'Фламенко - традиционный танец', correct: 'el flamenco es un baile tradicional' }
    ]
  },

  // Урок 9.3 - Современная культура
  'ex-9-3-1': {
    id: 'ex-9-3-1',
    type: 'reading',
    title: 'Чтение: Культура Испании',
    description: 'Ответьте на вопросы',
    text: 'La cultura española moderna es rica y diversa. Almodóvar es un director famoso con dos Oscars. La Sagrada Familia de Gaudí se construye desde 1882. Picasso pintó el "Guernica" en 1937. El fútbol es una pasión nacional - Real Madrid y Barcelona juegan "El Clásico". España ganó la Copa del Mundo en 2010.',
    questions: [
      { question: 'Cuántos Oscars ganó Almodóvar?', options: ['Uno', 'Dos', 'Tres', 'Ninguno'], correct: 1 },
      { question: '¿Desde cuándo se construye la Sagrada Familia?', options: ['1882', '1900', '1950', '2000'], correct: 0 },
      { question: '¿Quién pintó el Guernica?', options: ['Dalí', 'Picasso', 'Miró', 'Goya'], correct: 1 },
      { question: '¿Cuándo ganó España el Mundial?', options: ['2006', '2008', '2010', '2014'], correct: 2 }
    ]
  },
  'ex-9-3-2': {
    id: 'ex-9-3-2',
    type: 'vocabulary',
    title: 'Лексика культуры',
    description: 'Сопоставьте слова',
    questions: [
      { spanish: 'el cine', options: ['кино', 'театр', 'музей', 'парк'], correct: 0 },
      { spanish: 'el director', options: ['актер', 'режиссер', 'писатель', 'певец'], correct: 1 },
      { spanish: 'el deporte', options: ['искусство', 'спорт', 'музыка', 'танец'], correct: 1 },
      { spanish: 'el edificio', options: ['здание', 'улица', 'город', 'страна'], correct: 0 }
    ]
  },
  'ex-9-3-3': {
    id: 'ex-9-3-3',
    type: 'grammar',
    title: 'Культура и искусство',
    description: 'Выберите правильный ответ',
    questions: [
      { sentence: 'Gaudí fue un ___ catalán', options: ['pintor', 'escritor', 'arquitecto', 'músico'], correct: 2 },
      { sentence: 'Picasso fue el creador del ___', options: ['surrealismo', 'cubismo', 'impresionismo', 'realismo'], correct: 1 },
      { sentence: 'Real Madrid y Barcelona juegan ___', options: ['El Derbi', 'El Clásico', 'La Final', 'El Torneo'], correct: 1 },
      { sentence: 'Rosalía mezcla flamenco con ___', options: ['rock', 'jazz', 'reggaeton', 'salsa'], correct: 2 }
    ]
  },
  'ex-9-3-4': {
    id: 'ex-9-3-4',
    type: 'fillblank',
    title: 'Completar sobre cultura',
    description: 'Complete las frases',
    questions: [
      { sentence: 'Pedro ___ es un famoso director español', correct: 'Almodóvar' },
      { sentence: 'La Sagrada ___ es una basílica en Barcelona', correct: 'Familia' },
      { sentence: 'Pablo ___ pintó el Guernica', correct: 'Picasso' },
      { sentence: 'Rafael ___ es un tenista español famoso', correct: 'Nadal' }
    ]
  },                                                                                                                                                
  'ex-9-3-5': {
    id: 'ex-9-3-5',
    type: 'writing',
    title: 'Современная культура',
    description: 'Переведите на испанский',
    questions: [
      { russian: 'Альмодовар - мой любимый режиссер', correct: 'almodóvar es mi director favorito' },
      { russian: 'Футбол - национальная страсть', correct: 'el fútbol es una pasión nacional' },
      { russian: 'Саграда Фамилия очень впечатляет', correct: 'la sagrada familia es muy impresionante' },
      { russian: 'Испанское искусство известно во всем мире', correct: 'el arte español es conocido en todo el mundo' }
    ]
  },

// ===== ИНТЕГРИРОВАННЫЕ УПРАЖНЕНИЯ В УРОКИ =====

  'ex-1-1-5-syn': {
    id: 'ex-1-1-5-syn',
    type: 'synonyms',
    title: 'Синонимы приветствий',
    description: 'Выберите правильный ответ',
    questions: [
      { word: 'hola', options: ['adiós', 'buenos días', 'no', 'nada'], correct: 1 },
      { word: 'gracias', options: ['por favor', 'de nada', 'muchas gracias', 'perdón'], correct: 2 },
      { word: '¿Cómo estás?', options: ['¿Qué tal?', 'Regular', 'Bien', 'Adiós'], correct: 0 },
      { word: 'Así así', options: ['Todo va bien', 'Regular', 'Muchas gracias', 'Hola'], correct: 1 },
      { word: 'De nada', options: ['No hay de qué', 'Por favor', 'Hola', 'Adiós'], correct: 0 },
      { word: 'Buenos días', options: ['Buenas tardes', 'Hola', 'Adiós', 'Gracias'], correct: 1 },
      { word: 'Adiós', options: ['Hola', 'Hasta luego', 'Buenos días', 'Gracias'], correct: 1 },
      { word: '¿Qué tal?', options: ['¿Cómo estás?', 'Bien', 'Gracias', 'Adiós'], correct: 0 },
      { word: 'Todo va bien', options: ['Regular', 'Bien', 'Mal', 'Hola'], correct: 1 },
      { word: 'Por favor', options: ['Gracias', 'De nada', 'Por favor de verdad', 'Hola'], correct: 2 },
      { word: 'Hasta luego', options: ['Hola', 'Hasta pronto', 'Buenos días', 'Gracias'], correct: 1 },
      { word: 'Buenas noches', options: ['Buenos días', 'Buenas tardes', 'Hola de noche', 'Por favor'], correct: 2 },
      { word: 'Perdón', options: ['Gracias', 'Disculpa', 'Hola', 'Adiós'], correct: 1 },
      { word: 'Muchas gracias', options: ['Por favor', 'Muchísimas gracias', 'Hola', 'Adiós'], correct: 1 },
      { word: 'Bien', options: ['Mal', 'Regular', 'Todo va bien', 'Adiós'], correct: 2 }
    ]
  },

  'ex-1-1-6-ctx': {
    id: 'ex-1-1-6-ctx',
    type: 'context',
    title: 'Приветствия в контексте',
    description: 'Выберите подходящее приветствие или фразу для каждой ситуации. Обратите внимание на время суток и контекст общения.',
    questions: [
      { context: '🌅 Утро', sentence: 'Son las 10 de la mañana. Digo: ___', options: ['buenas noches', 'buenos días', 'buenas tardes', 'adiós'], correct: 1 },
      { context: '🤝 Помощь', sentence: 'Alguien me ayuda. Digo: ___', options: ['adiós', 'gracias', 'hola', 'no'], correct: 1 },
      { context: '😐 Так себе', sentence: 'Mi amigo pregunta "¿Cómo estás?". No estoy muy bien. Digo: ___', options: ['Todo va bien', 'Regular', 'Bien, gracias', 'Buenos días'], correct: 1 },
      { context: '👨‍👩‍👧‍👦 Семья', sentence: 'Pregunto por la familia de mi amigo: ___', options: ['¿Qué tal la familia?', '¿Qué tal?', 'Muchas gracias', 'De nada'], correct: 0 },
      { context: '🙏 Большая благодарность', sentence: 'Alguien me ayuda mucho. Digo: ___', options: ['Gracias', 'Muchas gracias', 'Por favor', 'Adiós'], correct: 1 },
      { context: '🌤️ День', sentence: 'Son las 3 de la tarde. Digo: ___', options: ['buenos días', 'buenas tardes', 'buenas noches', 'hasta luego'], correct: 1 },
      { context: '🌙 Вечер', sentence: 'Son las 10 de la noche. Digo: ___', options: ['buenos días', 'buenas tardes', 'buenas noches', 'hola'], correct: 2 },
      { context: '👋 Встреча на улице', sentence: 'Veo a mi amigo en la calle. Digo: ___', options: ['adiós', 'hola', 'gracias', 'perdón'], correct: 1 },
      { context: '🏢 Офис - уход', sentence: 'Me voy de la oficina. Digo a mis compañeros: ___', options: ['hola', 'buenos días', 'hasta luego', 'por favor'], correct: 2 },
      { context: '😊 Ответ на благодарность', sentence: 'Alguien me dice "Gracias". Yo respondo: ___', options: ['gracias', 'de nada', 'hola', 'adiós'], correct: 1 },
      { context: '🆘 Просьба о помощи', sentence: 'Necesito ayuda. Digo: ___', options: ['gracias', 'adiós', 'por favor', 'buenos días'], correct: 2 },
      { context: '😬 Извинение', sentence: 'Piso el pie de alguien sin querer. Digo: ___', options: ['hola', 'perdón', 'gracias', 'adiós'], correct: 1 },
      { context: '😄 Отличное настроение', sentence: 'Mi amigo pregunta "¿Qué tal?". Estoy muy bien. Digo: ___', options: ['regular', 'mal', 'todo va bien', 'adiós'], correct: 2 },
      { context: '📅 Увидимся завтра', sentence: 'Veo a alguien mañana. Al despedirme digo: ___', options: ['adiós para siempre', 'hasta mañana', 'buenos días', 'hola'], correct: 1 },
      { context: '🙂 Нормально', sentence: 'Alguien me pregunta "¿Cómo estás?". Estoy normal. Digo: ___', options: ['excelente', 'así así', 'mal', 'adiós'], correct: 1 }
    ]
  },

  'ex-1-1-7-pron-a': {
    id: 'ex-1-1-7-pron-a',
    type: 'pronunciation',
    title: 'Произношение f, l, m, n, p, t, ll',
    description: 'Прочтите вслух и повторите слова. Обратите внимание на произношение согласных f, l, m, n, p, t, ll',
    words: [
      { word: 'papá', pronunciation: '[папа́]', audioUrl: null },
      { word: 'mamá', pronunciation: '[мама́]', audioUrl: null },
      { word: 'Ana', pronunciation: '[а́на]', audioUrl: null },
      { word: 'Anita', pronunciation: '[ани́та]', audioUrl: null },
      { word: 'Nina', pronunciation: '[ни́на]', audioUrl: null },
      { word: 'Pepe', pronunciation: '[пэ́пэ]', audioUrl: null },
      { word: 'Pepita', pronunciation: '[пэпи́та]', audioUrl: null },
      { word: 'Timoteo', pronunciation: '[тимотэ́о]', audioUrl: null },
      { word: 'apetito', pronunciation: '[апэти́то]', audioUrl: null },
      { word: 'patata', pronunciation: '[пата́та]', audioUrl: null },
      { word: 'tomo', pronunciation: '[то́мо]', audioUrl: null },
      { word: 'tema', pronunciation: '[тэ́ма]', audioUrl: null },
      { word: 'tipo', pronunciation: '[ти́по]', audioUrl: null },
      { word: 'moto', pronunciation: '[мо́то]', audioUrl: null },
      { word: 'foto', pronunciation: '[фо́то]', audioUrl: null },
      { word: 'fama', pronunciation: '[фа́ма]', audioUrl: null },
      { word: 'mono', pronunciation: '[мо́но]', audioUrl: null },
      { word: 'mano', pronunciation: '[ма́но]', audioUrl: null },
      { word: 'mina', pronunciation: '[ми́на]', audioUrl: null },
      { word: 'mapa', pronunciation: '[ма́па]', audioUrl: null },
      { word: 'malo', pronunciation: '[ма́ло]', audioUrl: null },
      { word: 'puma', pronunciation: '[пу́ма]', audioUrl: null },
      { word: 'ama', pronunciation: '[а́ма]', audioUrl: null },
      { word: 'pampa', pronunciation: '[па́мпа]', audioUrl: null },
      { word: 'pino', pronunciation: '[пи́но]', audioUrl: null },
      { word: 'fumo', pronunciation: '[фу́мо]', audioUrl: null },
      { word: 'fino', pronunciation: '[фи́но]', audioUrl: null },
      { word: 'Felipe', pronunciation: '[фэли́пэ]', audioUrl: null },
      { word: 'teléfono', pronunciation: '[тэлэ́фоно]', audioUrl: null },
      { word: 'Lina', pronunciation: '[ли́на]', audioUrl: null },
      { word: 'Elena', pronunciation: '[элэ́на]', audioUrl: null },
      { word: 'Lima', pronunciation: '[ли́ма]', audioUrl: null },
      { word: 'Lola', pronunciation: '[ло́ла]', audioUrl: null },
      { word: 'Lolita', pronunciation: '[лоли́та]', audioUrl: null },
      { word: 'luna', pronunciation: '[лу́на]', audioUrl: null },
      { word: 'alumno', pronunciation: '[алу́мно]', audioUrl: null },
      { word: 'plomo', pronunciation: '[пло́мо]', audioUrl: null },
      { word: 'pluma', pronunciation: '[плу́ма]', audioUrl: null },
      { word: 'pleno', pronunciation: '[плэ́но]', audioUrl: null },
      { word: 'mal', pronunciation: '[маль]', audioUrl: null },
      { word: 'tal', pronunciation: '[таль]', audioUrl: null },
      { word: 'mil', pronunciation: '[миль]', audioUrl: null },
      { word: 'papel', pronunciation: '[папэль]', audioUrl: null },
      { word: 'final', pronunciation: '[финаль]', audioUrl: null },
      { word: 'alma', pronunciation: '[а́льма]', audioUrl: null },
      { word: 'pulpo', pronunciation: '[пу́льпо]', audioUrl: null },
      { word: 'alto', pronunciation: '[а́льто]', audioUrl: null },
      { word: 'alpino', pronunciation: '[альпи́но]', audioUrl: null },
      { word: 'alfana', pronunciation: '[альфа́на]', audioUrl: null },
      { word: 'lloro', pronunciation: '[льо́ро] / [йо́ро]', audioUrl: null },
      { word: 'gallina', pronunciation: '[гальи́на] / [гайи́на]', audioUrl: null },
      { word: 'llanto', pronunciation: '[льа́нто] / [йа́нто]', audioUrl: null },
      { word: 'billete', pronunciation: '[бильэ́тэ] / [бийэ́тэ]', audioUrl: null },
      { word: 'detalle', pronunciation: '[дэта́лье] / [дэта́йе]', audioUrl: null },
      { word: 'millón', pronunciation: '[мильо́н] / [мийо́н]', audioUrl: null },
      { word: 'batalla', pronunciation: '[бата́лья] / [бата́йа]', audioUrl: null },
      { word: 'botella', pronunciation: '[ботэ́лья] / [ботэ́йа]', audioUrl: null },
      { word: 'paella', pronunciation: '[паэ́лья] / [паэ́йа]', audioUrl: null },
      { word: 'tortilla', pronunciation: '[торти́лья] / [торти́йа]', audioUrl: null }
    ]
  },

  'ex-1-1-8-pron-b': {
    id: 'ex-1-1-8-pron-b',
    type: 'pronunciation',
    title: 'Произношение s, c, z, h, ch',
    description: 'Прочтите вслух и повторите слова. Обратите внимание на произношение согласных s, c, z, h, ch',
    words: [
      { word: 'asunto', pronunciation: '[асу́нто]', audioUrl: null },
      { word: 'peseta', pronunciation: '[пэсэ́та]', audioUrl: null },
      { word: 'museo', pronunciation: '[мусэ́о]', audioUrl: null },
      { word: 'estilo', pronunciation: '[эсти́ло]', audioUrl: null },
      { word: 'poesía', pronunciation: '[поэси́а]', audioUrl: null },
      { word: 'Alfonso', pronunciation: '[альфо́нсо]', audioUrl: null },
      { word: 'Susana', pronunciation: '[суса́на]', audioUrl: null },
      { word: 'asno', pronunciation: '[а́сно]', audioUrl: null },
      { word: 'mismo', pronunciation: '[ми́смо]', audioUrl: null },
      { word: 'turismo', pronunciation: '[тури́смо]', audioUrl: null },
      { word: 'cena', pronunciation: '[θэ́на] / [сэ́на]', audioUrl: null },
      { word: 'cine', pronunciation: '[θи́нэ] / [си́нэ]', audioUrl: null },
      { word: 'zapato', pronunciation: '[θапа́то] / [сапа́то]', audioUrl: null },
      { word: 'zona', pronunciation: '[θо́на] / [со́на]', audioUrl: null },
      { word: 'azul', pronunciation: '[аθу́ль] / [асу́ль]', audioUrl: null },
      { word: 'plaza', pronunciation: '[пла́θа] / [пла́са]', audioUrl: null },
      { word: 'paz', pronunciation: '[паθ] / [пас]', audioUrl: null },
      { word: 'lápiz', pronunciation: '[ла́пиθ] / [ла́пис]', audioUrl: null },
      { word: 'ceniza', pronunciation: '[θэни́θа] / [сэни́са]', audioUrl: null },
      { word: 'Azucena', pronunciation: '[аθуθэ́на] / [асусэ́на]', audioUrl: null },
      { word: 'ascensor', pronunciation: '[асθэнсо́р] / [ассэнсо́р]', audioUrl: null },
      { word: 'suceso', pronunciation: '[суθэ́со] / [сусэ́со]', audioUrl: null },
      { word: 'dieciséis', pronunciation: '[дьеθисэ́йс] / [диесисэ́йс]', audioUrl: null },
      { word: 'necesito', pronunciation: '[нэθэси́то] / [нэсэси́то]', audioUrl: null },
      { word: 'francesa', pronunciation: '[франθэ́са] / [франсэ́са]', audioUrl: null },
      { word: 'fascismo', pronunciation: '[фасθи́смо] / [фасси́смо]', audioUrl: null },
      { word: 'escena', pronunciation: '[эсθэ́на] / [эссэ́на]', audioUrl: null },
      { word: 'cereza', pronunciation: '[θэрэ́θа] / [сэрэ́са]', audioUrl: null },
      { word: 'Asunción', pronunciation: '[асунθьо́н] / [асунсьо́н]', audioUrl: null },
      { word: 'hola', pronunciation: '[о́ла]', audioUrl: null },
      { word: 'ahora', pronunciation: '[ао́ра]', audioUrl: null },
      { word: 'historia', pronunciation: '[исто́рья]', audioUrl: null },
      { word: 'heroísmo', pronunciation: '[эрои́смо]', audioUrl: null },
      { word: 'hospital', pronunciation: '[оспита́ль]', audioUrl: null },
      { word: 'hablar', pronunciation: '[абла́р]', audioUrl: null },
      { word: 'himno', pronunciation: '[и́мно]', audioUrl: null },
      { word: 'humor', pronunciation: '[умо́р]', audioUrl: null },
      { word: 'prohibir', pronunciation: '[проиби́р]', audioUrl: null },
      { word: 'deshecho', pronunciation: '[дэсэ́чо]', audioUrl: null },
      { word: 'poncho', pronunciation: '[по́нчо]', audioUrl: null },
      { word: 'muchacho', pronunciation: '[муча́чо]', audioUrl: null },
      { word: 'mucho', pronunciation: '[му́чо]', audioUrl: null },
      { word: 'techo', pronunciation: '[тэ́чо]', audioUrl: null },
      { word: 'machete', pronunciation: '[мачэ́тэ]', audioUrl: null },
      { word: 'Chile', pronunciation: '[чи́лэ]', audioUrl: null },
      { word: 'lucha', pronunciation: '[лу́ча]', audioUrl: null },
      { word: 'plancha', pronunciation: '[пла́нча]', audioUrl: null },
      { word: 'mochila', pronunciation: '[мочи́ла]', audioUrl: null },
      { word: 'chimenea', pronunciation: '[чимэнэ́а]', audioUrl: null }
    ]
  },

  'ex-1-1-9-pron-c': {
    id: 'ex-1-1-9-pron-c',
    type: 'pronunciation',
    title: 'Произношение b, v, d',
    description: 'Прочтите вслух и повторите слова. Обратите внимание на произношение согласных b, v, d',
    words: [
      { word: 'bomba', pronunciation: '[бо́мба]', audioUrl: null },
      { word: 'vela', pronunciation: '[бэ́ла]', audioUrl: null },
      { word: 'hombre', pronunciation: '[о́мбрэ]', audioUrl: null },
      { word: 'vino', pronunciation: '[би́но]', audioUrl: null },
      { word: 'invito', pronunciation: '[имби́то]', audioUrl: null },
      { word: 'Barcelona', pronunciation: '[барθэло́на] / [барсэло́на]', audioUrl: null },
      { word: 'Valencia', pronunciation: '[балэ́нθья] / [валэ́нсиа]', audioUrl: null },
      { word: 'nube', pronunciation: '[ну́βэ]', audioUrl: null },
      { word: 'sabor', pronunciation: '[саβо́р]', audioUrl: null },
      { word: 'lavar', pronunciation: '[лаβа́р]', audioUrl: null },
      { word: 'labor', pronunciation: '[лаβо́р]', audioUrl: null },
      { word: 'cava', pronunciation: '[ка́βа]', audioUrl: null },
      { word: 'Cuba', pronunciation: '[ку́βа]', audioUrl: null },
      { word: 'La Habana', pronunciation: '[ла аβа́на]', audioUrl: null },
      { word: 'dama', pronunciation: '[да́ма]', audioUrl: null },
      { word: 'documento', pronunciation: '[докумэ́нто]', audioUrl: null },
      { word: 'defecto', pronunciation: '[дэфэ́кто]', audioUrl: null },
      { word: 'donde', pronunciation: '[до́ндэ]', audioUrl: null },
      { word: 'andando', pronunciation: '[анда́ндо]', audioUrl: null },
      { word: 'aldea', pronunciation: '[альдэ́а]', audioUrl: null },
      { word: 'Aldo', pronunciation: '[а́льдо]', audioUrl: null },
      { word: 'padre', pronunciation: '[па́ðрэ]', audioUrl: null },
      { word: 'moneda', pronunciation: '[монэ́ða]', audioUrl: null },
      { word: 'soldado', pronunciation: '[сольда́ðо]', audioUrl: null },
      { word: 'facultad', pronunciation: '[факульта́ð]', audioUrl: null },
      { word: 'universidad', pronunciation: '[унибэрсида́ð]', audioUrl: null },
      { word: 'Madrid', pronunciation: '[мадри́ð]', audioUrl: null },
      { word: 'edad', pronunciation: '[эда́ð]', audioUrl: null }
    ]
  },

  'ex-1-1-10-pron-d': {
    id: 'ex-1-1-10-pron-d',
    type: 'pronunciation',
    title: 'Произношение ñ, y, r, rr',
    description: 'Прочтите вслух и повторите слова. Обратите внимание на произношение согласных ñ, y, r, rr',
    words: [
      { word: 'señor', pronunciation: '[сэньо́р]', audioUrl: null },
      { word: 'español', pronunciation: '[эспаньо́ль]', audioUrl: null },
      { word: 'señorita', pronunciation: '[сэньори́та]', audioUrl: null },
      { word: 'doña', pronunciation: '[до́нья]', audioUrl: null },
      { word: 'niño', pronunciation: '[ни́ньо]', audioUrl: null },
      { word: 'madrileño', pronunciation: '[мадрилэ́ньо]', audioUrl: null },
      { word: 'brasileño', pronunciation: '[брасилэ́ньо]', audioUrl: null },
      { word: 'yate', pronunciation: '[йа́тэ]', audioUrl: null },
      { word: 'mayo', pronunciation: '[ма́йо]', audioUrl: null },
      { word: 'playa', pronunciation: '[пла́йа]', audioUrl: null },
      { word: 'desayuno', pronunciation: '[дэсайу́но]', audioUrl: null },
      { word: 'proyecto', pronunciation: '[пройэ́кто]', audioUrl: null },
      { word: 'leyenda', pronunciation: '[лэйэ́нда]', audioUrl: null },
      { word: 'yodo', pronunciation: '[йо́до]', audioUrl: null },
      { word: 'teatro', pronunciation: '[тэа́тро]', audioUrl: null },
      { word: 'ópera', pronunciation: '[о́пэра]', audioUrl: null },
      { word: 'tractor', pronunciation: '[тракто́р]', audioUrl: null },
      { word: 'árabe', pronunciation: '[а́рабэ]', audioUrl: null },
      { word: 'director', pronunciation: '[дирэкто́р]', audioUrl: null },
      { word: 'torero', pronunciation: '[торэ́ро]', audioUrl: null },
      { word: 'actriz', pronunciation: '[актри́θ] / [актри́с]', audioUrl: null },
      { word: 'ramo', pronunciation: '[рра́мо]', audioUrl: null },
      { word: 'rosa', pronunciation: '[рро́са]', audioUrl: null },
      { word: 'zorro', pronunciation: '[θо́рро] / [со́рро]', audioUrl: null },
      { word: 'corrida', pronunciation: '[корри́да]', audioUrl: null },
      { word: 'párrafo', pronunciation: '[па́ррафо]', audioUrl: null },
      { word: 'reportero', pronunciation: '[ррэпортэ́ро]', audioUrl: null },
      { word: 'Rafael', pronunciation: '[ррафаэ́ль]', audioUrl: null }
    ]
  },

  'ex-1-1-11-pron-e': {
    id: 'ex-1-1-11-pron-e',
    type: 'pronunciation',
    title: 'Произношение g, j, q, k, x',
    description: 'Прочтите вслух и повторите слова. Обратите внимание на произношение согласных g, j, q, k, x',
    words: [
      { word: 'goma', pronunciation: '[го́ма]', audioUrl: null },
      { word: 'ganso', pronunciation: '[га́нсо]', audioUrl: null },
      { word: 'gusano', pronunciation: '[гуса́но]', audioUrl: null },
      { word: 'emigrante', pronunciation: '[эмигра́нтэ]', audioUrl: null },
      { word: 'hidalgo', pronunciation: '[ида́льго]', audioUrl: null },
      { word: 'Miguel', pronunciation: '[мигэ́ль]', audioUrl: null },
      { word: 'malagueño', pronunciation: '[малагэ́ньо]', audioUrl: null },
      { word: 'guillotina', pronunciation: '[гильоти́на]', audioUrl: null },
      { word: 'pingüino', pronunciation: '[пингуи́но]', audioUrl: null },
      { word: 'cigüeña', pronunciation: '[θигуэ́нья] / [сигуэ́нья]', audioUrl: null },
      { word: 'genial', pronunciation: '[хэньа́ль]', audioUrl: null },
      { word: 'álgebra', pronunciation: '[а́льхэбра]', audioUrl: null },
      { word: 'original', pronunciation: '[орихина́ль]', audioUrl: null },
      { word: 'jefe', pronunciation: '[хэ́фэ]', audioUrl: null },
      { word: 'gitano', pronunciation: '[хита́но]', audioUrl: null },
      { word: 'Jorge', pronunciation: '[хо́рхэ]', audioUrl: null },
      { word: 'garaje', pronunciation: '[гара́хэ]', audioUrl: null },
      { word: 'ingeniero', pronunciation: '[инхэньэ́ро]', audioUrl: null },
      { word: 'gigante', pronunciation: '[хига́нтэ]', audioUrl: null },
      { word: 'reloj', pronunciation: '[ррэло́х]', audioUrl: null },
      { word: 'quinto', pronunciation: '[ки́нто]', audioUrl: null },
      { word: 'cuatro', pronunciation: '[куа́тро]', audioUrl: null },
      { word: 'quince', pronunciation: '[ки́нθэ] / [ки́нсэ]', audioUrl: null },
      { word: 'poco', pronunciation: '[по́ко]', audioUrl: null },
      { word: 'pequeño', pronunciation: '[пэкэ́ньо]', audioUrl: null },
      { word: 'ecologista', pronunciation: '[эколохи́ста]', audioUrl: null },
      { word: 'queso', pronunciation: '[кэ́со]', audioUrl: null },
      { word: 'equipaje', pronunciation: '[экипа́хэ]', audioUrl: null },
      { word: 'quiero', pronunciation: '[кьэ́ро]', audioUrl: null },
      { word: 'queja', pronunciation: '[кэ́ха]', audioUrl: null },
      { word: 'taxi', pronunciation: '[та́кси]', audioUrl: null },
      { word: 'examen', pronunciation: '[экса́мэн]', audioUrl: null },
      { word: 'texto', pronunciation: '[тэ́ксто]', audioUrl: null },
      { word: 'extra', pronunciation: '[э́кстра]', audioUrl: null },
      { word: 'experimento', pronunciation: '[экспэримэ́нто]', audioUrl: null },
      { word: 'exótico', pronunciation: '[эксо́тико]', audioUrl: null },
      { word: 'excelente', pronunciation: '[эксθэлэ́нтэ] / [экссэлэ́нтэ]', audioUrl: null },
      { word: 'éxito', pronunciation: '[э́ксито]', audioUrl: null },
      { word: 'oxígeno', pronunciation: '[окси́хэно]', audioUrl: null },
      { word: 'México', pronunciation: '[мэ́хико]', audioUrl: null }
    ]
  },

  'ex-1-1-12-tongue-twisters': {
    id: 'ex-1-1-12-tongue-twisters',
    type: 'pronunciation',
    title: 'Скороговорки',
    description: 'Прочтите вслух и повторите скороговорки для отработки произношения',
    words: [
      { word: 'Tú tío Timoteo toma té.', pronunciation: '[ту тио тимотэ́о то́ма тэ]', audioUrl: null },
      { word: 'La sopa sin sal está sosa.', pronunciation: '[ла со́па син саль эста́ со́са]', audioUrl: null },
      { word: 'Los sucesos se suceden sin cesar.', pronunciation: '[лос суθэ́сос сэ суθэ́дэн син θэса́р] / [лос сусэ́сос сэ сусэ́дэн син сэса́р]', audioUrl: null },
      { word: 'César y Susana necesitan cinco lápices azules.', pronunciation: '[θэ́сар и суса́на нэθэси́тан θи́нко ла́пиθэс аθу́лэс] / [сэ́сар и суса́на нэсэси́тан си́нко ла́писэс асу́лэс]', audioUrl: null }
    ]
  },

  'ex-1-1-13-consonants': {
    id: 'ex-1-1-13-consonants',
    type: 'pronunciation',
    title: 'Произношение твердых согласных',
    description: 'Прочтите вслух и повторите слова. Обратите внимание на произношение согласных P, F, T, N, M, L, S, R, RR',
    words: [
      { word: 'P, F, T, N, M', pronunciation: 'Произносятся как твердые русские звуки. Никогда не смягчаются.', audioUrl: null },
      { word: 'mapa', pronunciation: '[мапа]', audioUrl: null },
      { word: 'papá', pronunciation: '[папа́]', audioUrl: null },
      { word: 'fama', pronunciation: '[фама]', audioUrl: null },
      { word: 'tema', pronunciation: '[тэма]', audioUrl: null },
      { word: 'patata', pronunciation: '[патата]', audioUrl: null },
      { word: 'moto', pronunciation: '[мото]', audioUrl: null },
      { word: 'mamá', pronunciation: '[мама́]', audioUrl: null },
      { word: 'Ana', pronunciation: '[ана]', audioUrl: null },
      { word: 'L', pronunciation: '[l] - как русский Л (не очень твердый) в начале слова и между гласными. [l\'] - перед согласными и в конце слова как ЛЬ.', audioUrl: null },
      { word: 'limón', pronunciation: '[лимон]', audioUrl: null },
      { word: 'Lola', pronunciation: '[лола]', audioUrl: null },
      { word: 'pelo', pronunciation: '[пэло]', audioUrl: null },
      { word: 'malo', pronunciation: '[мало]', audioUrl: null },
      { word: 'mal', pronunciation: '[маль]', audioUrl: null },
      { word: 'pulpo', pronunciation: '[пульпо]', audioUrl: null },
      { word: 'mil', pronunciation: '[миль]', audioUrl: null },
      { word: 'tal', pronunciation: '[таль]', audioUrl: null },
      { word: 'él', pronunciation: '[эль]', audioUrl: null },
      { word: 'S', pronunciation: '[s] - произносится как приглушенный звук между русскими С и Ш.', audioUrl: null },
      { word: 'salsa', pronunciation: '[сальса]', audioUrl: null },
      { word: 'sopa', pronunciation: '[сопа]', audioUrl: null },
      { word: 'museo', pronunciation: '[мусэо]', audioUrl: null },
      { word: 'mes', pronunciation: '[мэс]', audioUrl: null },
      { word: 'R', pronunciation: '[r] - в середине и конце слова как русский Р. [ř] - раскатистое Р в начале слова и после L, N, S.', audioUrl: null },
      { word: 'toro', pronunciation: '[торо]', audioUrl: null },
      { word: 'primo', pronunciation: '[примо]', audioUrl: null },
      { word: 'enero', pronunciation: '[энэро]', audioUrl: null },
      { word: 'fruta', pronunciation: '[фрута]', audioUrl: null },
      { word: 'mar', pronunciation: '[мар]', audioUrl: null },
      { word: 'flor', pronunciation: '[флор]', audioUrl: null },
      { word: 'Roma', pronunciation: '[ррома]', audioUrl: null },
      { word: 'ruso', pronunciation: '[ррусо]', audioUrl: null },
      { word: 'Enrique', pronunciation: '[энррикэ]', audioUrl: null },
      { word: 'el rumbo', pronunciation: '[эль ррумбо]', audioUrl: null },
      { word: 'las rosas', pronunciation: '[лас ррросас]', audioUrl: null },
      { word: 'RR', pronunciation: '[ř] - встречается только в середине слова и всегда произносится как раскатистое Р.', audioUrl: null },
      { word: 'perro', pronunciation: '[пэрро]', audioUrl: null },
      { word: 'error', pronunciation: '[эррор]', audioUrl: null },
      { word: 'torre', pronunciation: '[торрэ]', audioUrl: null },
      { word: 'carretera', pronunciation: '[каррэтэра]', audioUrl: null },
      { word: 'carroza', pronunciation: '[карроса]', audioUrl: null }
    ]
  },

  'ex-1-1-14-special-consonants': {
    id: 'ex-1-1-14-special-consonants',
    type: 'pronunciation',
    title: 'Необычные испанские согласные: H, Ñ, LL, CH',
    description: 'Прослушайте и повторите слова. Обратите внимание на особенности произношения этих согласных',
    words: [
      { word: 'H', pronunciation: 'Буква H в испанском языке НЕ ПРОИЗНОСИТСЯ (немая).' },
      { word: 'hola', pronunciation: '[о́ла]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'hasta', pronunciation: '[а́ста]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'historia', pronunciation: '[исто́риа]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'hoja', pronunciation: '[о́ха]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'Ñ', pronunciation: '[ɲ] - произносится как мягкое НЬ (похоже на русское "нь" в слове "конь").' },
      { word: 'España', pronunciation: '[эспа́нья]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'niño', pronunciation: '[ни́ньо]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'niña', pronunciation: '[ни́нья]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'caña', pronunciation: '[ка́нья]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'paño', pronunciation: '[па́ньо]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'ñoño', pronunciation: '[ньо́ньо]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'LL', pronunciation: '[ʎ] / [j] - произносится как мягкое ЛЬ или Й (в зависимости от региона).' },
      { word: 'me llamo', pronunciation: '[мэ льа́мо] / [мэ йа́мо]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'llama', pronunciation: '[льа́ма] / [йа́ма]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'lleno', pronunciation: '[льэ́но] / [йэ́но]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'lluvia', pronunciation: '[льу́вья] / [йу́вья]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'llorar', pronunciation: '[льора́р] / [йора́р]', audioUrl: '/audio/h, ñ, ll, ch.mp3' },
      { word: 'CH', pronunciation: '[ʧ] - произносится как русское Ч.' },
      { word: 'chao', pronunciation: '[ча́о]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'chico', pronunciation: '[чи́ко]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'muchacho', pronunciation: '[муча́чо]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'chocar', pronunciation: '[чока́р]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'Chema', pronunciation: '[чэ́ма]', audioUrl: '/audio/La letra CH.mp3' }
    ]
  },

  'ex-1-1-15-ckq': {
    id: 'ex-1-1-15-ckq',
    type: 'pronunciation',
    title: 'Согласные C, K, Q',
    description: 'Прослушайте и повторите слова. Изучите правила произношения C, K и Q в разных позициях',
    words: [
      { word: 'Q (+ ue, ui)', pronunciation: '[k] - всегда идет с буквой U (que, qui), буква U не читается, произносится как К.' },
      { word: 'que', pronunciation: '[кэ]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'quien', pronunciation: '[кьэн]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'querer', pronunciation: '[кэрэ́р]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'te quiero', pronunciation: '[тэ кьэ́ро]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'K', pronunciation: '[k] - всегда произносится как русское К (встречается редко, в основном в иностранных словах).' },
      { word: 'kefor', pronunciation: '[кэфо́р]', audioUrl: '/audio/La K.mp3' },
      { word: 'kilo', pronunciation: '[ки́ло]', audioUrl: '/audio/La K.mp3' },
      { word: 'kilómetro', pronunciation: '[кило́мэтро]', audioUrl: '/audio/La K.mp3' },
      { word: 'koala', pronunciation: '[коа́ла]', audioUrl: '/audio/La K.mp3' },
      { word: 'kiwi', pronunciation: '[ки́ви]', audioUrl: '/audio/La K.mp3' },
      { word: 'C', pronunciation: '[k] перед A, O, U и [θ]/[s] перед E, I - произносится как русское К или С.' },
      { word: 'coca cola', pronunciation: '[ко́ка ко́ла]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'música', pronunciation: '[му́сика]', audioUrl: null },
      { word: 'época', pronunciation: '[э́пока]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'poco', pronunciation: '[по́ко]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'clima', pronunciation: '[кли́ма]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'casa', pronunciation: '[ка́са]', audioUrl: '/audio/c, q, k.mp3' },
      { word: 'tic tac', pronunciation: '[тик так]', audioUrl: '/audio/c, q, k.mp3' }
    ]
  },

  'ex-1-1-16-audio-ll-y': {
    id: 'ex-1-1-16-audio-ll-y',
    type: 'pronunciation',
    title: 'Аудио упражнение: LL и Y',
    description: 'Прослушайте и повторите слова с буквами LL и Y',
    words: [
      { word: 'lloro', pronunciation: '[льо́ро] / [йо́ро]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'gallina', pronunciation: '[гальи́на] / [гайи́на]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'llanto', pronunciation: '[льа́нто] / [йа́нто]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'billete', pronunciation: '[бильэ́тэ] / [бийэ́тэ]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'detalle', pronunciation: '[дэта́лье] / [дэта́йе]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'millón', pronunciation: '[мильо́н] / [мийо́н]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'batalla', pronunciation: '[бата́лья] / [бата́йа]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'botella', pronunciation: '[ботэ́лья] / [ботэ́йа]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'paella', pronunciation: '[паэ́лья] / [паэ́йа]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'tortilla', pronunciation: '[торти́лья] / [торти́йа]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'yate', pronunciation: '[йа́тэ]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'mayo', pronunciation: '[ма́йо]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'playa', pronunciation: '[пла́йа]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'desayuno', pronunciation: '[дэсайу́но]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'proyecto', pronunciation: '[пройэ́кто]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'leyenda', pronunciation: '[лэйэ́нда]', audioUrl: '/audio/LL,Y.mp3' },
      { word: 'yodo', pronunciation: '[йо́до]', audioUrl: '/audio/LL,Y.mp3' }
    ]
  },

  'ex-1-1-17-audio-letra-l': {
    id: 'ex-1-1-17-audio-letra-l',
    type: 'pronunciation',
    title: 'Аудио упражнение: буква L',
    description: 'Прослушайте и повторите слова с буквой L',
    words: [
      { word: 'Lina', pronunciation: '[ли́на]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'Elena', pronunciation: '[элэ́на]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'Lima', pronunciation: '[ли́ма]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'Lola', pronunciation: '[ло́ла]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'Lolita', pronunciation: '[лоли́та]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'luna', pronunciation: '[лу́на]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'alumno', pronunciation: '[алу́мно]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'plomo', pronunciation: '[пло́мо]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'pluma', pronunciation: '[плу́ма]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'pleno', pronunciation: '[плэ́но]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'mal', pronunciation: '[маль]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'tal', pronunciation: '[таль]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'mil', pronunciation: '[миль]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'papel', pronunciation: '[папэль]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'final', pronunciation: '[финаль]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'alma', pronunciation: '[а́льма]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'pulpo', pronunciation: '[пу́льпо]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'alto', pronunciation: '[а́льто]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'alpino', pronunciation: '[альпи́но]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'alfana', pronunciation: '[альфа́на]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'limón', pronunciation: '[лимон]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'pelo', pronunciation: '[пэло]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'malo', pronunciation: '[мало]', audioUrl: '/audio/La letra L.mp3' },
      { word: 'él', pronunciation: '[эль]', audioUrl: '/audio/La letra L.mp3' }
    ]
  },

  'ex-1-1-18-audio-letra-s': {
    id: 'ex-1-1-18-audio-letra-s',
    type: 'pronunciation',
    title: 'Аудио упражнение: буква S',
    description: 'Прослушайте и повторите слова с буквой S',
    words: [
      { word: 'asunto', pronunciation: '[асу́нто]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'peseta', pronunciation: '[пэсэ́та]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'museo', pronunciation: '[мусэ́о]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'estilo', pronunciation: '[эсти́ло]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'poesía', pronunciation: '[поэси́а]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'Alfonso', pronunciation: '[альфо́нсо]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'Susana', pronunciation: '[суса́на]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'asno', pronunciation: '[а́сно]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'mismo', pronunciation: '[ми́смо]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'turismo', pronunciation: '[тури́смо]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'salsa', pronunciation: '[сальса]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'sopa', pronunciation: '[сопа]', audioUrl: '/audio/La letra S.mp3' },
      { word: 'mes', pronunciation: '[мэс]', audioUrl: '/audio/La letra S.mp3' }
    ]
  },

  'ex-1-1-19-audio-za-zo-zu-ce-ci': {
    id: 'ex-1-1-19-audio-za-zo-zu-ce-ci',
    type: 'pronunciation',
    title: 'Аудио упражнение: ZA, ZO, ZU, CE, CI',
    description: 'Прослушайте и повторите слова с буквами Z, CE, CI',
    words: [
      { word: 'cena', pronunciation: '[θэ́на] / [сэ́на]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'cine', pronunciation: '[θи́нэ] / [си́нэ]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'zapato', pronunciation: '[θапа́то] / [сапа́то]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'zona', pronunciation: '[θо́на] / [со́на]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'azul', pronunciation: '[аθу́ль] / [асу́ль]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'plaza', pronunciation: '[пла́θа] / [пла́са]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'paz', pronunciation: '[паθ] / [пас]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'lápiz', pronunciation: '[ла́пиθ] / [ла́пис]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'ceniza', pronunciation: '[θэни́θа] / [сэни́са]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'Azucena', pronunciation: '[аθуθэ́на] / [асусэ́на]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'ascensor', pronunciation: '[асθэнсо́р] / [ассэнсо́р]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'suceso', pronunciation: '[суθэ́со] / [сусэ́со]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'dieciséis', pronunciation: '[дьеθисэ́йс] / [диесисэ́йс]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'necesito', pronunciation: '[нэθэси́то] / [нэсэси́то]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'francesa', pronunciation: '[франθэ́са] / [франсэ́са]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'fascismo', pronunciation: '[фасθи́смо] / [фасси́смо]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'escena', pronunciation: '[эсθэ́на] / [эссэ́на]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'cereza', pronunciation: '[θэрэ́θа] / [сэрэ́са]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'Asunción', pronunciation: '[асунθьо́н] / [асунсьо́н]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' },
      { word: 'música', pronunciation: '[му́сика]', audioUrl: '/audio/ZA, ZO, ZU, CE, CI.mp3' }
    ]
  },

  'ex-1-1-20-audio-letra-ch': {
    id: 'ex-1-1-20-audio-letra-ch',
    type: 'pronunciation',
    title: 'Аудио упражнение: буква CH',
    description: 'Прослушайте и повторите слова с буквами CH',
    words: [
      { word: 'poncho', pronunciation: '[по́нчо]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'muchacho', pronunciation: '[муча́чо]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'mucho', pronunciation: '[му́чо]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'techo', pronunciation: '[тэ́чо]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'machete', pronunciation: '[мачэ́тэ]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'Chile', pronunciation: '[чи́лэ]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'lucha', pronunciation: '[лу́ча]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'plancha', pronunciation: '[пла́нча]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'mochila', pronunciation: '[мочи́ла]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'chimenea', pronunciation: '[чимэнэ́а]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'chao', pronunciation: '[ча́о]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'chico', pronunciation: '[чи́ко]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'chocar', pronunciation: '[чока́р]', audioUrl: '/audio/La letra CH.mp3' },
      { word: 'Chema', pronunciation: '[чэ́ма]', audioUrl: '/audio/La letra CH.mp3' }
    ]
  },

  'ex-1-1-21-audio-ga-go-gu': {
    id: 'ex-1-1-21-audio-ga-go-gu',
    type: 'pronunciation',
    title: 'Аудио упражнение: GA, GO, GU',
    description: 'Прослушайте и повторите слова с буквами GA, GO, GU',
    words: [
      { word: 'goma', pronunciation: '[го́ма]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'ganso', pronunciation: '[га́нсо]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'gusano', pronunciation: '[гуса́но]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'emigrante', pronunciation: '[эмигра́нтэ]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'hidalgo', pronunciation: '[ида́льго]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'Miguel', pronunciation: '[мигэ́ль]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'malagueño', pronunciation: '[малагэ́ньо]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'guillotina', pronunciation: '[гильоти́на]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'pingüino', pronunciation: '[пингуи́но]', audioUrl: '/audio/GA, GO, GU.mp3' },
      { word: 'cigüeña', pronunciation: '[θигуэ́нья] / [сигуэ́нья]', audioUrl: '/audio/GA, GO, GU.mp3' }
    ]
  },

  'ex-1-1-22-audio-j-g': {
    id: 'ex-1-1-22-audio-j-g',
    type: 'pronunciation',
    title: 'Аудио упражнение: J и G перед E, I',
    description: 'Прослушайте и повторите слова с буквами J и G перед E, I',
    words: [
      { word: 'genial', pronunciation: '[хэньа́ль]', audioUrl: '/audio/J, G.mp3' },
      { word: 'álgebra', pronunciation: '[а́льхэбра]', audioUrl: '/audio/J, G.mp3' },
      { word: 'original', pronunciation: '[орихина́ль]', audioUrl: '/audio/J, G.mp3' },
      { word: 'jefe', pronunciation: '[хэ́фэ]', audioUrl: '/audio/J, G.mp3' },
      { word: 'gitano', pronunciation: '[хита́но]', audioUrl: '/audio/J, G.mp3' },
      { word: 'Jorge', pronunciation: '[хо́рхэ]', audioUrl: '/audio/J, G.mp3' },
      { word: 'garaje', pronunciation: '[гара́хэ]', audioUrl: '/audio/J, G.mp3' },
      { word: 'ingeniero', pronunciation: '[инхэньэ́ро]', audioUrl: '/audio/J, G.mp3' },
      { word: 'gigante', pronunciation: '[хига́нтэ]', audioUrl: '/audio/J, G.mp3' },
      { word: 'reloj', pronunciation: '[ррэло́х]', audioUrl: '/audio/J, G.mp3' }
    ]
  },

  'ex-1-1-23-audio-letra-k': {
    id: 'ex-1-1-23-audio-letra-k',
    type: 'pronunciation',
    title: 'Аудио упражнение: буква K',
    description: 'Прослушайте и повторите слова с буквой K',
    words: [
      { word: 'kefor', pronunciation: '[кэфо́р]', audioUrl: '/audio/La K.mp3' },
      { word: 'kilo', pronunciation: '[ки́ло]', audioUrl: '/audio/La K.mp3' },
      { word: 'kilómetro', pronunciation: '[кило́мэтро]', audioUrl: '/audio/La K.mp3' },
      { word: 'koala', pronunciation: '[коа́ла]', audioUrl: '/audio/La K.mp3' },
      { word: 'kiwi', pronunciation: '[ки́ви]', audioUrl: '/audio/La K.mp3' }
    ]
  },

  'ex-1-1-24-audio-ara-aro': {
    id: 'ex-1-1-24-audio-ara-aro',
    type: 'pronunciation',
    title: 'Аудио упражнение: буква R',
    description: 'Прослушайте и повторите слова с буквой R',
    words: [
      { word: 'teatro', pronunciation: '[тэа́тро]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'ópera', pronunciation: '[о́пэра]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'tractor', pronunciation: '[тракто́р]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'árabe', pronunciation: '[а́рабэ]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'director', pronunciation: '[дирэкто́р]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'torero', pronunciation: '[торэ́ро]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'actriz', pronunciation: '[актри́θ] / [актри́с]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'ramo', pronunciation: '[рра́мо]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'rosa', pronunciation: '[рро́са]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'zorro', pronunciation: '[θо́рро] / [со́рро]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'corrida', pronunciation: '[корри́да]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'párrafo', pronunciation: '[па́ррафо]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'reportero', pronunciation: '[ррэпортэ́ро]', audioUrl: '/audio/ARA, ARO.mp3' },
      { word: 'Rafael', pronunciation: '[ррафаэ́ль]', audioUrl: '/audio/ARA, ARO.mp3' }
    ]
  },

  'ex-2-1-6-conj': {
    id: 'ex-2-1-6-conj',
    type: 'conjugation',
    title: 'Спряжение AR глаголов',
    description: 'Выберите правильную форму глагола',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { verb: 'hablar', tense: 'Presente', pronoun: 'yo', options: ['hablas', 'hablo', 'habla', 'hablamos'], correct: 1 },
      { verb: 'hablar', tense: 'Presente', pronoun: 'tú', options: ['hablo', 'habla', 'hablas', 'hablan'], correct: 2 },
      { verb: 'hablar', tense: 'Presente', pronoun: 'él', options: ['habla', 'hablo', 'hablan', 'habláis'], correct: 0 },
      { verb: 'hablar', tense: 'Presente', pronoun: 'nosotros', options: ['hablan', 'habláis', 'hablamos', 'habla'], correct: 2 },
      { verb: 'hablar', tense: 'Presente', pronoun: 'ellos', options: ['hablan', 'habla', 'hablamos', 'habláis'], correct: 0 },
      { verb: 'llamar', tense: 'Presente', pronoun: 'yo', options: ['llama', 'llamo', 'llamas', 'llamamos'], correct: 1 },
      { verb: 'llamar', tense: 'Presente', pronoun: 'ella', options: ['llaman', 'llamo', 'llama', 'llamas'], correct: 2 },
      { verb: 'llamar', tense: 'Presente', pronoun: 'vosotros', options: ['llamáis', 'llaman', 'llamamos', 'llama'], correct: 0 },
      { verb: 'preguntar', tense: 'Presente', pronoun: 'tú', options: ['pregunto', 'pregunta', 'preguntas', 'preguntan'], correct: 2 },
      { verb: 'preguntar', tense: 'Presente', pronoun: 'nosotros', options: ['preguntamos', 'preguntan', 'pregunta', 'preguntáis'], correct: 0 },
      { verb: 'preguntar', tense: 'Presente', pronoun: 'ellas', options: ['pregunta', 'preguntamos', 'preguntan', 'pregunto'], correct: 2 },
      { verb: 'escuchar', tense: 'Presente', pronoun: 'yo', options: ['escuchas', 'escucha', 'escucho', 'escuchan'], correct: 2 },
      { verb: 'escuchar', tense: 'Presente', pronoun: 'usted', options: ['escucha', 'escucho', 'escuchas', 'escuchan'], correct: 0 },
      { verb: 'escuchar', tense: 'Presente', pronoun: 'nosotras', options: ['escuchamos', 'escuchan', 'escucha', 'escucho'], correct: 0 },
      { verb: 'tomar', tense: 'Presente', pronoun: 'yo', options: ['tomas', 'toma', 'tomo', 'toman'], correct: 2 },
      { verb: 'tomar', tense: 'Presente', pronoun: 'tú', options: ['tomo', 'tomas', 'toma', 'tomamos'], correct: 1 },
      { verb: 'tomar', tense: 'Presente', pronoun: 'él', options: ['tomo', 'tomas', 'toma', 'tomamos'], correct: 2 },
      { verb: 'tomar', tense: 'Presente', pronoun: 'ellos', options: ['toman', 'toma', 'tomamos', 'tomo'], correct: 0 }
    ]
  },

  'ex-2-1-7-err': {
    id: 'ex-2-1-7-err',
    type: 'error-correction',
    title: 'Исправьте ошибки',
    description: 'Найдите и исправьте ошибку в предложении',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo hablas español en casa', correct: 'yo hablo español en casa', error: 'hablas' },
      { sentence: 'Tú llaman a tu madre por teléfono', correct: 'tú llamas a tu madre por teléfono', error: 'llaman' },
      { sentence: 'Ella preguntar por el precio del taxi', correct: 'ella pregunta por el precio del taxi', error: 'preguntar' },
      { sentence: 'Nosotros escucha la radio en casa', correct: 'nosotros escuchamos la radio en casa', error: 'escucha' },
      { sentence: 'Vosotros toma agua en el restaurante', correct: 'vosotros tomáis agua en el restaurante', error: 'toma' },
      { sentence: 'Ellos comen bocadillo en el café', correct: 'ellos comen bocadillos en el café', error: 'bocadillo' },
      { sentence: 'Yo leo un libros grande', correct: 'yo leo un libro grande', error: 'libros' },
      { sentence: 'Tú aprendes palabra nuevas', correct: 'tú aprendes palabras nuevas', error: 'palabra' },
      { sentence: 'Él comprende el problemas serio', correct: 'él comprende el problema serio', error: 'problemas' },
      { sentence: 'Nosotros vivimos en una ciudad grandes', correct: 'nosotros vivimos en una ciudad grande', error: 'grandes' },
      { sentence: 'Ella escribe una cartas a su hermana', correct: 'ella escribe una carta a su hermana', error: 'cartas' },
      { sentence: 'Yo abro las puerta del coche', correct: 'yo abro la puerta del coche', error: 'las' },
      { sentence: 'Ustedes bebe zumo de naranja', correct: 'ustedes beben zumo de naranja', error: 'bebe' },
      { sentence: 'Mi padre vive en un casa vieja', correct: 'mi padre vive en una casa vieja', error: 'un' },
      { sentence: 'Nosotras recibir mensajes importantes', correct: 'nosotras recibimos mensajes importantes', error: 'recibir' }
    ]
  },

  'ex-2-1-8-transform': {
    id: 'ex-2-1-8-transform',
    type: 'writing',
    title: 'Transformación de Sujetos y Conjugación',
    description: 'Cambie el sujeto de la frase por el que se indica entre paréntesis y conjugue el verbo correctamente',
    questions: [
      { russian: 'Yo vivo en Barcelona. → (Ellos)', correct: 'ellos viven en barcelona' },
      { russian: 'Tú lees el periódico. → (Usted)', correct: 'usted lee el periódico' },
      { russian: 'Nosotros comprendemos la lección. → (Yo)', correct: 'yo comprendo la lección' },
      { russian: 'La chica toma el sol. → (Las chicas y tú)', correct: 'las chicas y tú tomáis el sol' },
      { russian: 'Ustedes hablan ruso. → (Mi hermana y yo)', correct: 'mi hermana y yo hablamos ruso' },
      { russian: 'Vosotros coméis un bocadillo. → (Ella)', correct: 'ella come un bocadillo' },
      { russian: 'Ellos preguntan por la dirección. → (El señor y la señora)', correct: 'el señor y la señora preguntan por la dirección' },
      { russian: 'Tú estás triste ahora. → (Nosotros)', correct: 'nosotros estamos tristes ahora' },
      { russian: 'Yo soy estudiante. → (Pablo y él)', correct: 'pablo y él son estudiantes' },
      { russian: 'Vosotros abrís la ventana. → (Yo)', correct: 'yo abro la ventana' }
    ]
  },

  'ex-2-1-9-verbforms': {
    id: 'ex-2-1-9-verbforms',
    type: 'fillblank',
    title: 'Ponga los verbos en la forma verbal correcta',
    description: 'Ponga el verbo en infinitivo (entre paréntesis) en la forma de Presente de Indicativo que le corresponda',
    questions: [
      { sentence: 'Mi padre _____ (escribir) una carta a mi hermano', verb: 'escribir', correct: 'escribe' },
      { sentence: 'Nosotras _____ (vivir) en una ciudad grande', verb: 'vivir', correct: 'vivimos' },
      { sentence: 'Yo _____ (aprender) las palabras nuevas', verb: 'aprender', correct: 'aprendo' },
      { sentence: 'Ellos _____ (comer) fruta en el día', verb: 'comer', correct: 'comen' },
      { sentence: 'Usted _____ (escuchar) la radio en casa', verb: 'escuchar', correct: 'escucha' },
      { sentence: 'El policía _____ (tomar) el metro para ir al museo', verb: 'tomar', correct: 'toma' },
      { sentence: 'Tú _____ (ser) alto y guapo', verb: 'ser', correct: 'eres' },
      { sentence: 'Vosotros _____ (estar) enfermos y _____ (tomar) medicinas', verb: 'estar, tomar', correct: 'estáis, tomáis' },
      { sentence: 'Los clientes no _____ (comprender) el problema difícil', verb: 'comprender', correct: 'comprenden' },
      { sentence: 'La chica _____ (abrir) la puerta del coche', verb: 'abrir', correct: 'abre' },
      { sentence: 'Mi madre _____ (ser) abogada y _____ (estar) en París ahora', verb: 'ser, estar', correct: 'es, está' },
      { sentence: 'La calle _____ (ser) larga y _____ (estar) fría', verb: 'ser, estar', correct: 'es, está' },
      { sentence: 'Yo _____ (llamar) al economista porque tengo una pregunta', verb: 'llamar', correct: 'llamo' },
      { sentence: '¿Ustedes _____ (leer) sobre el tema interesante?', verb: 'leer', correct: 'leen' },
      { sentence: 'Nosotros no _____ (hablar) inglés', verb: 'hablar', correct: 'hablamos' }
    ]
  },

  'ex-1-5-translation': {
    id: 'ex-1-5-translation',
    type: 'translation',
    title: 'Перевод с русского на испанский',
    description: 'Переведите предложения с русского на испанский',
    reviewTime: 15,
    questions: [
      { russian: 'Эти подарки для моей сестры, а те подарки для нашего друга.', correct: 'Estos regalos son para mi hermana, y esos regalos son para nuestro amigo.', alternatives: ['Estos regalos son para mi hermana y esos regalos son para nuestro amigo', 'Estos regalos para mi hermana, y esos regalos para nuestro amigo'] },
      { russian: 'Я не включаю свет, потому что не хочу читать.', correct: 'No enciendo la luz porque no quiero leer.', alternatives: ['Yo no enciendo la luz porque no quiero leer'] },
      { russian: 'Почему вы (usted) не хотите пойти на этот концерт с вашей дочерью?', correct: '¿Por qué no quiere ir a este concierto con su hija?', alternatives: ['¿Por qué usted no quiere ir a este concierto con su hija?'] },
      { russian: 'Вы (vosotros) не видите нашу собаку, потому что она спит под столом.', correct: 'No veis a nuestro perro porque duerme debajo de la mesa.', alternatives: ['Vosotros no veis a nuestro perro porque duerme debajo de la mesa', 'No veis nuestro perro porque duerme debajo de la mesa'] },
      { russian: 'У моего брата есть новая машина. Она не быстрая, но очень удобная и экономичная.', correct: 'Mi hermano tiene un coche nuevo. No es rápido, pero es muy cómodo y económico.', alternatives: ['Mi hermano tiene un coche nuevo. No es rápido pero es muy cómodo y económico'] },
      { russian: 'Где ты купил эти фрукты? — Я купил их на рынке. Там всегда свежие продукты.', correct: '¿Dónde compraste estas frutas? — Las compré en el mercado. Allí siempre hay productos frescos.', alternatives: ['¿Dónde has comprado estas frutas? — Las he comprado en el mercado. Allí siempre hay productos frescos'] },
      { russian: 'Как чувствует себя ваш сын? — Он уже здоров, он пошел в школу. А ваша дочь? — Моя еще спит.', correct: '¿Cómo se siente su hijo? — Ya está sano, fue a la escuela. ¿Y su hija? — La mía todavía duerme.', alternatives: ['¿Cómo se siente tu hijo? — Ya está sano, fue a la escuela. ¿Y tu hija? — La mía todavía duerme'] },
      { russian: 'Она всегда ходит в магазин вечером. Она покупает хлеб и молоко, чтобы приготовить завтрак.', correct: 'Siempre va a la tienda por la tarde. Compra pan y leche para preparar el desayuno.', alternatives: ['Ella siempre va a la tienda por la tarde. Compra pan y leche para preparar el desayuno'] },
      { russian: 'Нам не везет! Наш новый сосед шумный, невоспитанный и ленивый. Он не работает и много спит.', correct: '¡No tenemos suerte! Nuestro nuevo vecino es ruidoso, maleducado y perezoso. No trabaja y duerme mucho.', alternatives: ['¡No tenemos suerte! Nuestro vecino nuevo es ruidoso, maleducado y perezoso. No trabaja y duerme mucho'] },
      { russian: 'Ты должен извиниться перед ним. Он хочет, чтобы ты признал свою ошибку.', correct: 'Debes disculparte ante él. Quiere que reconozcas tu error.', alternatives: ['Tú debes disculparte ante él. Él quiere que reconozcas tu error'] },
      { russian: 'Этот телефон уже очень старый, поэтому, когда ты звонишь, я плохо слышу тебя.', correct: 'Este teléfono ya es muy viejo, por eso cuando llamas, te oigo mal.', alternatives: ['Este teléfono ya es muy viejo por eso cuando llamas te oigo mal', 'Este teléfono ya es muy viejo, por eso cuando tú llamas, yo te oigo mal'] },
      { russian: 'Я не могу написать это письмо, потому что не знаю немецкого языка. Мне очень жаль.', correct: 'No puedo escribir esta carta porque no sé alemán. Lo siento mucho.', alternatives: ['Yo no puedo escribir esta carta porque no sé alemán. Lo siento mucho'] }
    ]
  },

  'ex-3-1-5-def': {
    id: 'ex-3-1-5-def',
    type: 'definitions',
    title: 'Определения семейных слов',
    description: 'Выберите правильный ответ',
    questions: [
      { definition: 'El hijo de mi hermano', options: ['tío', 'primo', 'sobrino', 'abuelo'], correct: 2 },
      { definition: 'La madre de mi padre', options: ['tía', 'abuela', 'hermana', 'madre'], correct: 1 }
    ]
  },

  'ex-3-1-6-coll': {
    id: 'ex-3-1-6-coll',
    type: 'collocations',
    title: 'Словосочетания о семье',
    description: 'Выберите правильный ответ',
    questions: [
      { word: 'familia', options: ['grande', 'alto', 'rápido', 'verde'], correct: 0 },
      { word: 'hermano', options: ['mayor', 'nueva', 'bajo', 'frío'], correct: 0 }
    ]
  },

  // Упражнения для урока 3.1 - Указательные и притяжательные местоимения
  'ex-3-1-demonstrativos': {
    id: 'ex-3-1-demonstrativos',
    type: 'grammar',
    title: 'Указательные местоимения este/ese/aquel',
    description: 'Выберите правильное указательное местоимение',
    showCorrectAnswer: true,
    questions: [
      { sentence: '___ libro (aquí) es interesante', options: ['Este', 'Ese', 'Aquel', 'Estos'], correct: 0 },
      { sentence: '___ casa (ahí) es grande', options: ['Este', 'Ese', 'Aquel', 'Esta'], correct: 1 },
      { sentence: '___ montañas (allí) son altas', options: ['Estas', 'Esas', 'Aquellas', 'Aquella'], correct: 2 },
      { sentence: '___ hermanos (aquí) son mis primos', options: ['Este', 'Estos', 'Esos', 'Aquellos'], correct: 1 },
      { sentence: '___ abuelos (ahí) viven en Madrid', options: ['Este', 'Ese', 'Esos', 'Aquellos'], correct: 2 },
      { sentence: '___ familia (allí) es muy grande', options: ['Este', 'Esa', 'Aquella', 'Estas'], correct: 2 },
      { sentence: '___ padres (aquí) trabajan en el hospital', options: ['Este', 'Estos', 'Esos', 'Aquel'], correct: 1 },
      { sentence: '___ mujer (ahí) es mi tía', options: ['Este', 'Esta', 'Esa', 'Aquella'], correct: 2 },
      { sentence: '___ niños (aquí) son mis sobrinos', options: ['Este', 'Ese', 'Estos', 'Esos'], correct: 2 },
      { sentence: '___ hombre (allí) es mi suegro', options: ['Este', 'Ese', 'Aquel', 'Estos'], correct: 2 }
    ]
  },

  'ex-3-1-posesivos-mi-tu-su': {
    id: 'ex-3-1-posesivos-mi-tu-su',
    type: 'grammar',
    title: 'Притяжательные местоимения mi/tu/su',
    description: 'Выберите правильное притяжательное местоимение',
    showCorrectAnswer: true,
    questions: [
      { sentence: '___ padre es médico (я)', options: ['Mi', 'Tu', 'Su', 'Mis'], correct: 0 },
      { sentence: '___ madre trabaja aquí (ты)', options: ['mi', 'tu', 'su', 'tus'], correct: 1 },
      { sentence: '___ hermanos estudian español (он)', options: ['mi', 'tu', 'su', 'sus'], correct: 3 },
      { sentence: '___ familia es grande (я)', options: ['Mi', 'Tu', 'Su', 'Mis'], correct: 0 },
      { sentence: '___ abuelos viven en Barcelona (ты)', options: ['mi', 'tu', 'tus', 'su'], correct: 2 },
      { sentence: '___ esposa se llama Ana (él)', options: ['mi', 'tu', 'su', 'sus'], correct: 2 },
      { sentence: '___ hijos son pequeños (она)', options: ['mi', 'tu', 'su', 'sus'], correct: 3 },
      { sentence: '___ tío vive en Valencia (я)', options: ['Mi', 'Tu', 'Su', 'Mis'], correct: 0 },
      { sentence: '___ primos vienen mañana (ты)', options: ['mi', 'tu', 'tus', 'su'], correct: 2 },
      { sentence: '___ marido trabaja en el banco (ella)', options: ['mi', 'tu', 'su', 'sus'], correct: 2 }
    ]
  },

  'ex-3-1-posesivos-nuestro': {
    id: 'ex-3-1-posesivos-nuestro',
    type: 'grammar',
    title: 'Притяжательные местоимения nuestro/vuestro',
    description: 'Выберите правильную форму притяжательного местоимения',
    showCorrectAnswer: true,
    questions: [
      { sentence: '___ padre trabaja aquí (мы)', options: ['nuestro', 'nuestra', 'nuestros', 'nuestras'], correct: 0 },
      { sentence: '___ madre cocina bien (мы)', options: ['nuestro', 'nuestra', 'nuestros', 'nuestras'], correct: 1 },
      { sentence: '___ hermanos estudian (вы)', options: ['vuestro', 'vuestra', 'vuestros', 'vuestras'], correct: 2 },
      { sentence: '___ familia es alegre (мы)', options: ['nuestro', 'nuestra', 'nuestros', 'nuestras'], correct: 1 },
      { sentence: '___ abuelas viven aquí (вы)', options: ['vuestro', 'vuestra', 'vuestros', 'vuestras'], correct: 3 },
      { sentence: '___ hijos son buenos (мы)', options: ['nuestro', 'nuestra', 'nuestros', 'nuestras'], correct: 2 },
      { sentence: '___ tíos vienen hoy (вы)', options: ['vuestro', 'vuestra', 'vuestros', 'vuestras'], correct: 2 },
      { sentence: '___ casa está en Madrid (мы)', options: ['nuestro', 'nuestra', 'nuestros', 'nuestras'], correct: 1 },
      { sentence: '___ padres trabajan (вы)', options: ['vuestro', 'vuestra', 'vuestros', 'vuestras'], correct: 2 },
      { sentence: '___ nieta se llama María (мы)', options: ['nuestro', 'nuestra', 'nuestros', 'nuestras'], correct: 1 }
    ]
  },

  'ex-3-1-demonstrativos-sust': {
    id: 'ex-3-1-demonstrativos-sust',
    type: 'grammar',
    title: 'Указательные местоимения без существительного',
    description: 'Выберите правильный ответ',
    showCorrectAnswer: true,
    questions: [
      { sentence: '¿Qué libro prefieres: ___ o ese?', options: ['este', 'esta', 'estos', 'estas'], correct: 0 },
      { sentence: '___ es mi hermano', options: ['Este', 'Esta', 'Ese', 'Aquel'], correct: 0 },
      { sentence: '¿___ son tus padres?', options: ['Este', 'Estos', 'Esos', 'Aquellos'], correct: 1 },
      { sentence: '___ es mi abuela', options: ['Este', 'Esta', 'Ese', 'Esa'], correct: 1 },
      { sentence: 'No me gusta este coche, prefiero ___', options: ['este', 'ese', 'aquel', 'estos'], correct: 2 },
      { sentence: '___ son mis primos', options: ['Este', 'Ese', 'Estos', 'Esos'], correct: 2 },
      { sentence: 'Esa casa es bonita, pero ___ es más grande', options: ['este', 'esta', 'aquella', 'aquel'], correct: 2 },
      { sentence: '___ es mi familia', options: ['Este', 'Esta', 'Ese', 'Aquel'], correct: 1 },
      { sentence: '¿___ son tus hermanos?', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 2 },
      { sentence: '___ son muy amables', options: ['Este', 'Ese', 'Aquel', 'Aquellos'], correct: 3 }
    ]
  },

  'ex-3-1-posesivos-pronombres': {
    id: 'ex-3-1-posesivos-pronombres',
    type: 'grammar',
    title: 'Притяжательные местоимения-существительные',
    description: 'Выберите правильную форму',
    showCorrectAnswer: true,
    questions: [
      { sentence: 'Mi familia es grande. ¿Y ___?', options: ['la tuya', 'el tuyo', 'los tuyos', 'las tuyas'], correct: 0 },
      { sentence: 'Este libro es ___', options: ['mío', 'mía', 'míos', 'mías'], correct: 0 },
      { sentence: 'Nuestros hijos son pequeños, pero ___ son mayores', options: ['el suyo', 'la suya', 'los suyos', 'las suyas'], correct: 2 },
      { sentence: '¿Esta casa es ___?', options: ['vuestro', 'vuestra', 'vuestros', 'vuestras'], correct: 1 },
      { sentence: 'Mi padre trabaja aquí. ¿Y ___?', options: ['la tuya', 'el tuyo', 'los tuyos', 'las tuyas'], correct: 1 },
      { sentence: 'Estos niños son ___', options: ['mío', 'mía', 'míos', 'mías'], correct: 2 },
      { sentence: 'Tu abuela vive en Madrid, pero ___ vive en Barcelona', options: ['el mío', 'la mía', 'los míos', 'las mías'], correct: 1 },
      { sentence: 'Vuestros padres están aquí, ___ llegan mañana', options: ['el nuestro', 'la nuestra', 'los nuestros', 'las nuestras'], correct: 2 },
      { sentence: '¿Estos hermanos son ___?', options: ['tuyo', 'tuya', 'tuyos', 'tuyas'], correct: 2 },
      { sentence: 'Un primo ___ vive en México', options: ['mío', 'mía', 'míos', 'mías'], correct: 0 }
    ]
  },

  'ex-3-1-neutros': {
    id: 'ex-3-1-neutros',
    type: 'grammar',
    title: 'Нейтральные формы esto/eso/aquello',
    description: 'Выберите правильную нейтральную форму',
    showCorrectAnswer: true,
    questions: [
      { sentence: '¿Qué es ___? (что это здесь)', options: ['esto', 'eso', 'aquello', 'este'], correct: 0 },
      { sentence: '___ es interesante (то там)', options: ['esto', 'eso', 'aquello', 'ese'], correct: 1 },
      { sentence: 'No entiendo ___ (то вон там)', options: ['esto', 'eso', 'aquello', 'aquel'], correct: 2 },
      { sentence: '___ es un problema', options: ['Esto', 'Eso', 'Aquello', 'Este'], correct: 0 },
      { sentence: '___ no me gusta', options: ['Esto', 'Eso', 'Aquello', 'Ese'], correct: 1 },
      { sentence: '¿Qué es ___ que veo?', options: ['esto', 'eso', 'aquello', 'este'], correct: 0 },
      { sentence: '¿Para qué sirve ___?', options: ['esto', 'eso', 'aquello', 'ese'], correct: 1 },
      { sentence: '___ fue terrible', options: ['Esto', 'Eso', 'Aquello', 'Aquel'], correct: 2 },
      { sentence: '___ es muy bonito', options: ['Esto', 'Eso', 'Aquello', 'Este'], correct: 0 },
      { sentence: 'No comprendo ___', options: ['esto', 'eso', 'aquello', 'este'], correct: 0 }
    ]
  },

  'ex-3-1-adverbios-lugar': {
    id: 'ex-3-1-adverbios-lugar',
    type: 'grammar',
    title: 'Наречия места aquí/ahí/allí',
    description: 'Выберите правильное наречие места (ESTE=aquí, ESE=ahí, AQUEL=allí)',
    showCorrectAnswer: true,
    questions: [
      { sentence: '___ está mi casa (ESTE - близко)', options: ['Aquí', 'Ahí', 'Allí'], correct: 0 },
      { sentence: 'Mi familia vive ___ (ESTE - близко)', options: ['aquí', 'ahí', 'allí'], correct: 0 },
      { sentence: '___ vive mi abuela (AQUEL - далеко)', options: ['Aquí', 'Ahí', 'Allí'], correct: 2 },
      { sentence: 'Mis abuelos viven ___ (AQUEL - далеко)', options: ['aquí', 'ahí', 'allí'], correct: 2 },
      { sentence: 'Este libro está ___ (близко)', options: ['aquí', 'ahí', 'allí'], correct: 0 },
      { sentence: 'Ese coche está ___ (на расстоянии)', options: ['aquí', 'ahí', 'allí'], correct: 1 },
      { sentence: 'Aquel edificio está ___ (далеко)', options: ['aquí', 'ahí', 'allí'], correct: 2 },
      { sentence: '¿Está tu padre ___ ? (ESE - там)', options: ['aquí', 'ahí', 'allí'], correct: 1 },
      { sentence: 'Esos hermanos viven ___ (на расстоянии)', options: ['aquí', 'ahí', 'allí'], correct: 1 },
      { sentence: 'Aquellos primos están ___ (далеко)', options: ['aquí', 'ahí', 'allí'], correct: 2 }
    ]
  },

  'ex-3-1-su-aclaracion': {
    id: 'ex-3-1-su-aclaracion',
    type: 'grammar',
    title: 'Уточнение su/sus',
    description: 'Уточните, чье это (вместо su используйте de él/de ella/de usted/de ellos)',
    showCorrectAnswer: true,
    questions: [
      { sentence: 'Pedro habla de su hijo. Es el hijo ___ (Педро говорит о своем сыне)', options: ['de él', 'de ella', 'de usted', 'de ellos'], correct: 0 },
      { sentence: 'María habla de sus hermanas. Son las hermanas ___ (Мария говорит о своих сестрах)', options: ['de él', 'de ella', 'de usted', 'de ellos'], correct: 1 },
      { sentence: 'Señor López, ¿es su padre? Es el padre ___ (Сеньор Лопес, это Ваш отец?)', options: ['de él', 'de ella', 'de usted', 'de ellos'], correct: 2 },
      { sentence: 'Mis tíos hablan de sus hijos. Son los hijos ___ (Мои дяди говорят о своих детях)', options: ['de él', 'de ella', 'de usted', 'de ellos'], correct: 3 },
      { sentence: 'Carlos habla de su madre. Es la madre ___ (Карлос говорит о своей матери)', options: ['de él', 'de ella', 'de ustedes', 'de ellas'], correct: 0 },
      { sentence: 'Ana presenta su familia. Es la familia ___ (Ана представляет свою семью)', options: ['de él', 'de ella', 'de usted', 'de ellos'], correct: 1 },
      { sentence: 'Señores, ¿son sus padres? Son los padres ___ (Господа, это Ваши родители?)', options: ['de él', 'de ella', 'de ustedes', 'de ellos'], correct: 2 },
      { sentence: 'Elena habla de su marido. Es el marido ___ (Елена говорит о своем муже)', options: ['de él', 'de ella', 'de usted', 'de ellos'], correct: 1 },
      { sentence: 'Las hermanas hablan de sus tías. Son las tías ___ (Сестры говорят о своих тетях)', options: ['de él', 'de ella', 'de ellas', 'de usted'], correct: 2 },
      { sentence: 'Miguel presenta su esposa. Es la esposa ___ (Мигель представляет свою жену)', options: ['de él', 'de ella', 'de usted', 'de ellos'], correct: 0 }
    ]
  },

  'ex-3-1-combinado': {
    id: 'ex-3-1-combinado',
    type: 'grammar',
    title: 'Перевод с русского на испанский',
    description: 'Переведите предложения с русского на испанский, используя указательные и притяжательные местоимения',
    showCorrectAnswer: true,
    questions: [
      { sentence: 'Это моя мама', options: ['Esta es mi madre', 'Este es mi madre', 'Esa es mi madre', 'Esto es mi madre'], correct: 0 },
      { sentence: 'Тот дом очень большой', options: ['Este casa es muy grande', 'Esa casa es muy grande', 'Aquella casa es muy grande', 'Ese casa es muy grande'], correct: 1 },
      { sentence: 'Вон те книги на столе', options: ['Aquellos libros están en la mesa', 'Esos libros están en la mesa', 'Estos libros están en la mesa', 'Aquel libros están en la mesa'], correct: 0 },
      { sentence: 'Мой брат живет здесь', options: ['Mi hermano vive aquí', 'Mi hermano vive ahí', 'Mi hermano vive allí', 'Mis hermanos vive aquí'], correct: 0 },
      { sentence: 'Это твоя сестра?', options: ['¿Esta es tu hermana?', '¿Este es tu hermana?', '¿Esa es tu hermana?', '¿Esto es tu hermana?'], correct: 0 },
      { sentence: 'Наша семья большая', options: ['Nuestro familia es grande', 'Nuestra familia es grande', 'Nuestros familia es grande', 'Nuestras familia es grande'], correct: 1 },
      { sentence: 'Те люди — мои друзья', options: ['Esos son mis amigos', 'Estos son mis amigos', 'Aquellos son mis amigos', 'Esas son mis amigos'], correct: 0 },
      { sentence: 'Что это?', options: ['¿Qué es esto?', '¿Qué es eso?', '¿Qué es este?', '¿Qué es ese?'], correct: 0 },
      { sentence: 'Твой отец работает там?', options: ['¿Tu padre trabaja ahí?', '¿Tu padre trabaja aquí?', '¿Su padre trabaja ahí?', '¿Tus padres trabaja ahí?'], correct: 0 },
      { sentence: 'Вон та машина красивая', options: ['Aquel coche es bonito', 'Aquella coche es bonito', 'Ese coche es bonito', 'Este coche es bonito'], correct: 0 }
    ]
  },

  'ex-3-1-lectura': {
    id: 'ex-3-1-lectura',
    type: 'reading',
    title: 'Понимание текста о семье',
    description: 'Прочитайте текст и ответьте на вопросы',
    showCorrectAnswer: true,
    text: 'Esta es mi familia. Estos son mis padres: mi padre Roberto y mi madre Isabel. Ellos trabajan en Madrid. Nuestros abuelos viven con nosotros. Ese hombre es mi abuelo Pablo y esa mujer es mi abuela Carmen. Mi tío Pedro vive allí, en Barcelona. Su esposa es mi tía Laura. Ellos tienen dos hijos: mis primos Jorge y Marta. La mía es una familia grande y alegre.',
    questions: [
      { question: '¿Cómo se llama el padre?', options: ['Pablo', 'Pedro', 'Roberto', 'Jorge'], correct: 2 },
      { question: '¿Dónde trabajan los padres?', options: ['En Barcelona', 'En Madrid', 'En Valencia', 'En Sevilla'], correct: 1 },
      { question: '¿Quién vive con la familia?', options: ['Los tíos', 'Los primos', 'Los abuelos', 'El padrino'], correct: 2 },
      { question: '¿Cómo se llama el abuelo?', options: ['Roberto', 'Pedro', 'Pablo', 'Jorge'], correct: 2 },
      { question: '¿Dónde vive el tío Pedro?', options: ['En Madrid', 'En Barcelona', 'En Valencia', 'En Sevilla'], correct: 1 },
      { question: '¿Cómo se llama la esposa del tío Pedro?', options: ['Isabel', 'Carmen', 'Laura', 'Marta'], correct: 2 },
      { question: '¿Cuántos hijos tienen los tíos?', options: ['Uno', 'Dos', 'Tres', 'Cuatro'], correct: 1 },
      { question: '¿Cómo se llaman los primos?', options: ['Roberto y Pablo', 'Pedro y Laura', 'Jorge y Marta', 'Pablo y Carmen'], correct: 2 },
      { question: '¿Quién es Carmen?', options: ['La madre', 'La tía', 'La abuela', 'La prima'], correct: 2 },
      { question: '¿Cómo es la familia?', options: ['Pequeña', 'Grande y alegre', 'Triste', 'Pequeña y alegre'], correct: 1 }
    ]
  },

  'ex-7-1-6-subj': {
    id: 'ex-7-1-6-subj',
    type: 'subjunctive',
    title: 'Сослагательное наклонение',
    description: 'Выберите правильный ответ',
    questions: [
      { sentence: 'Espero que tú ___ bien', hint: 'esperar que + subjuntivo', options: ['estás', 'estés', 'estarás', 'estar'], correct: 1 },
      { sentence: 'Quiero que nosotros ___ juntos', hint: 'querer que + subjuntivo', options: ['vamos', 'vayamos', 'iremos', 'ir'], correct: 1 }
    ]
  },

  'ex-7-1-7-err': {
    id: 'ex-7-1-7-err',
    type: 'error-correction',
    title: 'Исправьте ошибки с subjuntivo',
    description: 'Выберите правильный ответ',
    questions: [
      { sentence: 'Espero que vienes mañana', correct: 'espero que vengas mañana' },
      { sentence: 'Quiero que tú haces esto', correct: 'quiero que tú hagas esto' }
    ]
  },

  'ex-8-1-6-cond': {
    id: 'ex-8-1-6-cond',
    type: 'conditional',
    title: 'Условные предложения',
    description: 'Выберите правильный ответ',
    questions: [
      { sentence: 'Si tengo dinero, ___ un coche', options: ['compro', 'compraré', 'compraría', 'comprara'], correct: 1 },
      { sentence: 'Si tuviera tiempo, ___ contigo', options: ['voy', 'iré', 'iría', 'fuera'], correct: 2 }
    ]
  },

  'ex-8-1-7-tc': {
    id: 'ex-8-1-7-tc',
    type: 'tense-choice',
    title: 'Выбор времени в условиях',
    description: 'Выберите правильный ответ',
    questions: [
      { context: 'Si llueve mañana, ___ en casa (реальное условие)', options: ['quedo', 'quedaré', 'quedaría', 'quedara'], correct: 1 },
      { context: 'Si ___ rico, viajaría por el mundo (нереальное условие)', options: ['soy', 'seré', 'sería', 'fuera'], correct: 3 }
    ]
  },

// Total integrated exercises created: 10

    // ===== ДЕМОНСТРАЦИОННЫЕ УПРАЖНЕНИЯ ДЛЯ НОВЫХ ТИПОВ =====

  'ex-demo-conjugation': {
    id: 'ex-demo-conjugation',
    type: 'conjugation',
    title: 'Спряжение глаголов',
    description: 'Выберите правильную форму глагола',
    questions: [
      { verb: 'hablar', tense: 'Presente', pronoun: 'yo', options: ['hablo', 'hablas', 'habla', 'hablamos'], correct: 0 },
      { verb: 'comer', tense: 'Pretérito', pronoun: 'tú', options: ['comes', 'comiste', 'comías', 'comerás'], correct: 1 },
      { verb: 'vivir', tense: 'Futuro', pronoun: 'ella', options: ['vive', 'vivía', 'vivirá', 'viviera'], correct: 2 }
    ]
  },

  'ex-demo-word-order': {
    id: 'ex-demo-word-order',
    type: 'word-order',
    title: 'Порядок слов',
    description: 'Составьте правильное предложение',
    questions: [
      { words: ['es', 'Madrid', 'capital', 'la', 'de', 'España'], correct: 'madrid es la capital de españa' },
      { words: ['me', 'gusta', 'mucho', 'español', 'el'], correct: 'me gusta mucho el español' }
    ]
  },

  'ex-demo-transformation': {
    id: 'ex-demo-transformation',
    type: 'transformation',
    title: 'Трансформация предложений',
    description: 'Преобразуйте предложение',
    questions: [
      { instruction: 'Преобразуйте в вопрос:', sentence: 'María habla español', correct: '¿habla maría español?' },
      { instruction: 'Преобразуйте в отрицание:', sentence: 'Tengo tiempo', correct: 'no tengo tiempo' }
    ]
  },

  'ex-demo-error-correction': {
    id: 'ex-demo-error-correction',
    type: 'error-correction',
    title: 'Исправление ошибок',
    description: 'Найдите и исправьте ошибку',
    questions: [
      { sentence: 'Yo es estudiante', correct: 'yo soy estudiante' },
      { sentence: 'Me gusta los libros', correct: 'me gustan los libros' },
      { sentence: 'Ella va a el cine', correct: 'ella va al cine' }
    ]
  },

  'ex-demo-tense-choice': {
    id: 'ex-demo-tense-choice',
    type: 'tense-choice',
    title: 'Выбор времени',
    description: 'Какое время использовать?',
    questions: [
      { context: 'Ayer ___ al supermercado', options: ['voy', 'fui', 'iré', 'iba'], correct: 1 },
      { context: 'Mañana ___ a mi abuela', options: ['visito', 'visité', 'visitaré', 'visitaba'], correct: 2 }
    ]
  },

  'ex-demo-prepositions': {
    id: 'ex-demo-prepositions',
    type: 'prepositions',
    title: 'Предлоги',
    description: 'Выберите правильный предлог',
    questions: [
      { sentence: 'Voy ___ Madrid', options: ['a', 'en', 'de', 'por'], correct: 0 },
      { sentence: 'Estudio ___ la tarde', options: ['a', 'en', 'de', 'por'], correct: 3 },
      { sentence: 'Vengo ___ España', options: ['a', 'en', 'de', 'por'], correct: 2 }
    ]
  },

  'ex-demo-pronouns': {
    id: 'ex-demo-pronouns',
    type: 'pronouns',
    title: 'Местоимения',
    description: 'Выберите правильное местоимение',
    questions: [
      { sentence: '___ gusta el español', options: ['yo', 'me', 'mi', 'mí'], correct: 1 },
      { sentence: '___ llamo Ana', options: ['yo', 'me', 'mi', 'mí'], correct: 1 }
    ]
  },

  'ex-demo-agreement': {
    id: 'ex-demo-agreement',
    type: 'agreement',
    title: 'Согласование',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Las casas son ___', options: ['blanco', 'blanca', 'blancos', 'blancas'], correct: 3 },
      { sentence: 'El libro está ___', options: ['abierto', 'abierta', 'abiertos', 'abiertas'], correct: 0 }
    ]
  },

  'ex-demo-subjunctive': {
    id: 'ex-demo-subjunctive',
    type: 'subjunctive',
    title: 'Сослагательное наклонение',
    description: 'Используйте Subjuntivo',
    questions: [
      { sentence: 'Espero que ___ bien', hint: 'После espero que - subjuntivo', options: ['estás', 'estés', 'estarás', 'estabas'], correct: 1 },
      { sentence: 'Quiero que tú ___', hint: 'Желание требует subjuntivo', options: ['vienes', 'vengas', 'vendrás', 'venías'], correct: 1 }
    ]
  },

  'ex-demo-conditional': {
    id: 'ex-demo-conditional',
    type: 'conditional',
    title: 'Условные предложения',
    description: 'Выберите правильную форму',
    questions: [
      { sentence: 'Si tengo tiempo, ___ al cine', options: ['voy', 'iré', 'iría', 'fuera'], correct: 1 },
      { sentence: 'Si tuviera dinero, ___ un coche', options: ['compro', 'compraré', 'compraría', 'comprara'], correct: 2 }
    ]
  },

  'ex-demo-synonyms': {
    id: 'ex-demo-synonyms',
    type: 'synonyms',
    title: 'Синонимы',
    description: 'Найдите синоним',
    questions: [
      { word: 'bonito', options: ['feo', 'hermoso', 'malo', 'triste'], correct: 1 },
      { word: 'grande', options: ['pequeño', 'enorme', 'corto', 'fino'], correct: 1 },
      { word: 'rápido', options: ['lento', 'veloz', 'pesado', 'débil'], correct: 1 }
    ]
  },

  'ex-demo-antonyms': {
    id: 'ex-demo-antonyms',
    type: 'antonyms',
    title: 'Антонимы',
    description: 'Найдите антоним',
    questions: [
      { word: 'caliente', options: ['tibio', 'fresco', 'frío', 'templado'], correct: 2 },
      { word: 'alto', options: ['grande', 'largo', 'bajo', 'ancho'], correct: 2 },
      { word: 'nuevo', options: ['moderno', 'reciente', 'viejo', 'actual'], correct: 2 }
    ]
  },

  'ex-demo-collocations': {
    id: 'ex-demo-collocations',
    type: 'collocations',
    title: 'Словосочетания',
    description: 'Выберите правильное сочетание',
    questions: [
      { word: 'tomar', options: ['una decisión', 'una casa', 'un árbol', 'una montaña'], correct: 0 },
      { word: 'hacer', options: ['una puerta', 'una pregunta', 'un río', 'un pájaro'], correct: 1 },
      { word: 'dar', options: ['una mesa', 'las gracias', 'un libro', 'una ciudad'], correct: 1 }
    ]
  },

  'ex-demo-definitions': {
    id: 'ex-demo-definitions',
    type: 'definitions',
    title: 'Определения',
    description: 'Найдите слово по определению',
    questions: [
      { definition: 'Lugar donde vives', options: ['calle', 'casa', 'tienda', 'parque'], correct: 1 },
      { definition: 'Comida que se toma por la mañana', options: ['cena', 'comida', 'desayuno', 'merienda'], correct: 2 },
      { definition: 'Persona que enseña en la escuela', options: ['estudiante', 'médico', 'profesor', 'cocinero'], correct: 2 }
    ]
  },

  'ex-demo-context': {
    id: 'ex-demo-context',
    type: 'context',
    title: 'Слова в контексте',
    description: 'Выберите подходящее слово',
    questions: [
      { sentence: 'Tengo mucha sed, necesito ___', options: ['comer', 'beber', 'dormir', 'correr'], correct: 1 },
      { sentence: 'Hace frío, voy a ponerme un ___', options: ['bañador', 'abrigo', 'paraguas', 'sombrero'], correct: 1 }
    ]
  },

  'ex-demo-word-formation': {
    id: 'ex-demo-word-formation',
    type: 'word-formation',
    title: 'Словообразование',
    description: 'Образуйте новое слово',
    questions: [
      { instruction: 'Образуйте прилагательное', baseWord: 'belleza', correct: 'bello' },
      { instruction: 'Образуйте наречие', baseWord: 'rápido', correct: 'rápidamente' }
    ]
  },

  'ex-demo-categorization': {
    id: 'ex-demo-categorization',
    type: 'categorization',
    title: 'Категоризация',
    description: 'Распределите слова',
    questions: [
      {
        categories: ['Фрукты', 'Овощи'],
        words: ['manzana', 'zanahoria', 'plátano', 'tomate'],
        correct: {
          'manzana': 'Фрукты',
          'zanahoria': 'Овощи',
          'plátano': 'Фрукты',
          'tomate': 'Овощи'
        }
      }
    ]
  },

  'ex-demo-false-friends': {
    id: 'ex-demo-false-friends',
    type: 'false-friends',
    title: 'Ложные друзья',
    description: 'Осторожно с переводом!',
    questions: [
      { spanishWord: 'embarazada', options: ['смущенная', 'беременная', 'расстроенная', 'удивленная'], correct: 1 },
      { spanishWord: 'constipado', options: ['запор', 'простуда', 'усталость', 'голод'], correct: 1 }
    ]
  },

  'ex-demo-idioms': {
    id: 'ex-demo-idioms',
    type: 'idioms',
    title: 'Идиомы',
    description: 'Что означает выражение?',
    questions: [
      { idiom: 'Estar en las nubes', options: ['витать в облаках', 'летать на самолете', 'смотреть на небо', 'быть высоко'], correct: 0 },
      { idiom: 'Costar un ojo de la cara', options: ['стоить очень дорого', 'быть красивым', 'быть опасным', 'быть далеко'], correct: 0 }
    ]
  },

  'ex-demo-word-family': {
    id: 'ex-demo-word-family',
    type: 'word-family',
    title: 'Семьи слов',
    description: 'Найдите однокоренное слово',
    questions: [
      { word: 'libro', options: ['librería', 'libertad', 'limpio', 'libro'], correct: 0 },
      { word: 'trabajo', options: ['traje', 'trabajador', 'trampa', 'tren'], correct: 1 }
    ]
  },

  // Упражнения для урока 2-2
  'ex-2-2-ir-conjugation': {
    id: 'ex-2-2-ir-conjugation',
    type: 'grammar',
    title: 'Спряжение глагола IR',
    description: 'Выберите правильную форму глагола IR',
    questions: [
      { sentence: 'Yo ___ al teatro', options: ['voy', 'vas', 'va', 'van'], correct: 0 },
      { sentence: 'Tú ___ a casa', options: ['voy', 'vas', 'va', 'vamos'], correct: 1 },
      { sentence: 'Él ___ al café', options: ['voy', 'vas', 'va', 'vais'], correct: 2 },
      { sentence: 'Ella ___ a la oficina', options: ['voy', 'vas', 'va', 'van'], correct: 2 },
      { sentence: 'Nosotros ___ al bar', options: ['voy', 'vas', 'vamos', 'vais'], correct: 2 },
      { sentence: 'Vosotros ___ a Rusia', options: ['vas', 'va', 'vamos', 'vais'], correct: 3 },
      { sentence: 'Ellos ___ de compras', options: ['va', 'vamos', 'vais', 'van'], correct: 3 },
      { sentence: 'Usted ___ al restaurante', options: ['voy', 'vas', 'va', 'van'], correct: 2 },
      { sentence: 'Ustedes ___ de vacaciones', options: ['va', 'vamos', 'vais', 'van'], correct: 3 },
      { sentence: 'María ___ a la playa', options: ['voy', 'vas', 'va', 'van'], correct: 2 },
      { sentence: 'Mis amigos ___ al cine', options: ['va', 'vamos', 'vais', 'van'], correct: 3 },
      { sentence: 'Mi hermana ___ al centro', options: ['voy', 'vas', 'va', 'vamos'], correct: 2 },
      { sentence: 'Tú y yo ___ al parque', options: ['vas', 'va', 'vamos', 'van'], correct: 2 },
      { sentence: 'Pedro y Ana ___ al museo', options: ['va', 'vamos', 'vais', 'van'], correct: 3 },
      { sentence: 'Juan ___ a España', options: ['voy', 'vas', 'va', 'van'], correct: 2 }
    ]
  },

  'ex-2-2-tener-conjugation-new': {
    id: 'ex-2-2-tener-conjugation-new',
    type: 'grammar',
    title: 'Спряжение глагола TENER',
    description: 'Выберите правильную форму глагола TENER',
    questions: [
      { sentence: 'Yo ___ un libro', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 0 },
      { sentence: 'Tú ___ hambre', options: ['tengo', 'tienes', 'tiene', 'tenemos'], correct: 1 },
      { sentence: 'Él ___ sed', options: ['tengo', 'tienes', 'tiene', 'tenéis'], correct: 2 },
      { sentence: 'Ella ___ veinte años', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 },
      { sentence: 'Nosotros ___ tiempo', options: ['tengo', 'tienes', 'tenemos', 'tenéis'], correct: 2 },
      { sentence: 'Vosotros ___ prisa', options: ['tienes', 'tiene', 'tenemos', 'tenéis'], correct: 3 },
      { sentence: 'Ellos ___ miedo', options: ['tiene', 'tenemos', 'tenéis', 'tienen'], correct: 3 },
      { sentence: 'Usted ___ razón', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 },
      { sentence: 'Ustedes ___ suerte', options: ['tiene', 'tenemos', 'tenéis', 'tienen'], correct: 3 },
      { sentence: 'Mi padre ___ dinero', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 },
      { sentence: 'Mis hermanos ___ familia', options: ['tiene', 'tenemos', 'tenéis', 'tienen'], correct: 3 },
      { sentence: 'María ___ sueño', options: ['tengo', 'tienes', 'tiene', 'tenemos'], correct: 2 },
      { sentence: 'Tú y yo ___ calor', options: ['tienes', 'tiene', 'tenemos', 'tienen'], correct: 2 },
      { sentence: 'Ana y Pedro ___ frío', options: ['tiene', 'tenemos', 'tenéis', 'tienen'], correct: 3 },
      { sentence: 'Mi madre ___ un coche', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 }
    ]
  },

  'ex-2-2-oir-conjugation-new': {
    id: 'ex-2-2-oir-conjugation-new',
    type: 'grammar',
    title: 'Спряжение глагола OÍR',
    description: 'Выберите правильную форму глагола OÍR',
    questions: [
      { sentence: 'Yo ___ música', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 0 },
      { sentence: 'Tú ___ la radio', options: ['oigo', 'oyes', 'oye', 'oímos'], correct: 1 },
      { sentence: 'Él ___ las noticias', options: ['oigo', 'oyes', 'oye', 'oís'], correct: 2 },
      { sentence: 'Ella ___ bien', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 2 },
      { sentence: 'Nosotros ___ el teléfono', options: ['oigo', 'oyes', 'oímos', 'oís'], correct: 2 },
      { sentence: 'Vosotros ___ música clásica', options: ['oyes', 'oye', 'oímos', 'oís'], correct: 3 },
      { sentence: 'Ellos ___ voces', options: ['oye', 'oímos', 'oís', 'oyen'], correct: 3 },
      { sentence: 'Usted ___ mal', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 2 },
      { sentence: 'Ustedes ___ el ruido', options: ['oye', 'oímos', 'oís', 'oyen'], correct: 3 },
      { sentence: 'Mi hermana ___ la televisión', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 2 },
      { sentence: 'Mis amigos ___ canciones', options: ['oye', 'oímos', 'oís', 'oyen'], correct: 3 },
      { sentence: 'Juan ___ un sonido', options: ['oigo', 'oyes', 'oye', 'oímos'], correct: 2 },
      { sentence: 'Tú y yo ___ la música', options: ['oyes', 'oye', 'oímos', 'oyen'], correct: 2 },
      { sentence: 'Pedro y Ana ___ el concierto', options: ['oye', 'oímos', 'oís', 'oyen'], correct: 3 },
      { sentence: 'Carlos ___ la conversación', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 2 }
    ]
  },

  'ex-2-2-tener-expressions': {
    id: 'ex-2-2-tener-expressions',
    type: 'fillblank',
    title: 'Выражения с TENER',
    description: 'Заполните пропуски правильным выражением',
    questions: [
      { sentence: 'Yo _____ diez años', verb: 'tener', correct: 'tengo' },
      { sentence: 'Tú _____ hambre', verb: 'tener', correct: 'tienes' },
      { sentence: 'Él _____ sed', verb: 'tener', correct: 'tiene' },
      { sentence: 'Ella _____ sueño', verb: 'tener', correct: 'tiene' },
      { sentence: 'Nosotros _____ calor', verb: 'tener', correct: 'tenemos' },
      { sentence: 'Vosotros _____ frío', verb: 'tener', correct: 'tenéis' },
      { sentence: 'Ellos _____ miedo', verb: 'tener', correct: 'tienen' },
      { sentence: 'Usted _____ razón', verb: 'tener', correct: 'tiene' },
      { sentence: 'Ustedes _____ suerte', verb: 'tener', correct: 'tienen' },
      { sentence: 'Mi padre _____ prisa', verb: 'tener', correct: 'tiene' },
      { sentence: 'Mis hermanos _____ tiempo', verb: 'tener', correct: 'tienen' },
      { sentence: 'María _____ dinero', verb: 'tener', correct: 'tiene' },
      { sentence: 'Tú y yo _____ familia', verb: 'tener', correct: 'tenemos' },
      { sentence: 'Ana y Pedro _____ un coche', verb: 'tener', correct: 'tienen' },
      { sentence: 'Juan _____ madre', verb: 'tener', correct: 'tiene' }
    ]
  },

  'ex-2-2-ir-infinitive-new': {
    id: 'ex-2-2-ir-infinitive-new',
    type: 'grammar',
    title: 'Конструкция IR + A + инфинитив',
    description: 'Выберите правильный вариант',
    questions: [
      { sentence: 'Yo voy ___ descansar', options: ['a', 'de', 'en', 'por'], correct: 0 },
      { sentence: 'Tú vas ___ comer', options: ['a', 'de', 'en', 'por'], correct: 0 },
      { sentence: 'Él va ___ beber té', options: ['a', 'de', 'en', 'por'], correct: 0 },
      { sentence: 'Nosotros vamos ___ leer', options: ['a', 'de', 'en', 'por'], correct: 0 },
      { sentence: 'Vosotros vais ___ escribir', options: ['a', 'de', 'en', 'por'], correct: 0 },
      { sentence: 'Ellos van ___ trabajar', options: ['a', 'de', 'en', 'por'], correct: 0 },
      { sentence: 'Yo voy a ___ un libro', options: ['leer', 'leo', 'lee', 'leen'], correct: 0 },
      { sentence: 'Tú vas a ___ al teatro', options: ['ir', 'voy', 'vas', 'van'], correct: 0 },
      { sentence: 'Ella va a ___ la radio', options: ['escuchar', 'escucho', 'escucha', 'escuchan'], correct: 0 },
      { sentence: 'Nosotros vamos a ___ español', options: ['hablar', 'hablo', 'hablas', 'hablan'], correct: 0 },
      { sentence: 'Vosotros vais a ___ en casa', options: ['estar', 'estoy', 'estás', 'están'], correct: 0 },
      { sentence: 'Ellos van a ___ medicina', options: ['tomar', 'tomo', 'tomas', 'toman'], correct: 0 },
      { sentence: '¿Vas a ___ café?', options: ['tomar', 'tomo', 'tomas', 'toman'], correct: 0 },
      { sentence: 'Voy a ___ a mi madre', options: ['llamar', 'llamo', 'llamas', 'llaman'], correct: 0 },
      { sentence: 'Van a ___ de vacaciones', options: ['ir', 'voy', 'vas', 'van'], correct: 0 }
    ]
  },

  'ex-2-2-ir-prepositions-new': {
    id: 'ex-2-2-ir-prepositions-new',
    type: 'fillblank',
    title: 'Глагол IR с предлогами',
    description: 'Заполните пропуски правильным предлогом',
    questions: [
      { sentence: 'Yo voy _____ casa', correct: 'a' },
      { sentence: 'Tú vas _____ el teatro', correct: 'al' },
      { sentence: 'Él va _____ coche', correct: 'en' },
      { sentence: 'Ella va _____ taxi', correct: 'en' },
      { sentence: 'Nosotros vamos _____ compras', correct: 'de' },
      { sentence: 'Vosotros vais _____ vacaciones', correct: 'de' },
      { sentence: 'Ellos van _____ autobús', correct: 'en' },
      { sentence: 'Voy _____ tren', correct: 'en' },
      { sentence: 'Vas _____ la oficina', correct: 'a' },
      { sentence: 'Va _____ avión', correct: 'en' },
      { sentence: 'Vamos _____ el café', correct: 'al' },
      { sentence: 'Vais _____ pie', correct: 'a' },
      { sentence: 'Van _____ el bar', correct: 'al' },
      { sentence: 'Voy _____ España', correct: 'a' },
      { sentence: 'Vas _____ barco', correct: 'en' }
    ]
  },

  'ex-2-2-tener-que': {
    id: 'ex-2-2-tener-que',
    type: 'grammar',
    title: 'Конструкция TENER QUE + инфинитив',
    description: 'Выберите правильный вариант',
    questions: [
      { sentence: 'Yo tengo ___ estudiar', options: ['que', 'de', 'a', 'en'], correct: 0 },
      { sentence: 'Tú tienes ___ trabajar', options: ['que', 'de', 'a', 'en'], correct: 0 },
      { sentence: 'Él tiene ___ comer', options: ['que', 'de', 'a', 'en'], correct: 0 },
      { sentence: 'Nosotros tenemos ___ ir', options: ['que', 'de', 'a', 'en'], correct: 0 },
      { sentence: 'Vosotros tenéis ___ leer', options: ['que', 'de', 'a', 'en'], correct: 0 },
      { sentence: 'Ellos tienen ___ escribir', options: ['que', 'de', 'a', 'en'], correct: 0 },
      { sentence: 'Tengo que ___ medicina', options: ['tomar', 'tomo', 'tomas', 'toman'], correct: 0 },
      { sentence: 'Tienes que ___ a casa', options: ['ir', 'voy', 'vas', 'van'], correct: 0 },
      { sentence: 'Tiene que ___ español', options: ['hablar', 'hablo', 'hablas', 'hablan'], correct: 0 },
      { sentence: 'Tenemos que ___ el libro', options: ['leer', 'leo', 'lee', 'leen'], correct: 0 },
      { sentence: 'Tenéis que ___ temprano', options: ['llegar', 'llego', 'llegas', 'llegan'], correct: 0 },
      { sentence: 'Tienen que ___ la verdad', options: ['decir', 'digo', 'dices', 'dicen'], correct: 0 },
      { sentence: '¿Tengo que ___ ahora?', options: ['salir', 'salgo', 'sales', 'salen'], correct: 0 },
      { sentence: 'Tenemos que ___ en casa', options: ['estar', 'estoy', 'estás', 'están'], correct: 0 },
      { sentence: 'Tienen que ___ la puerta', options: ['abrir', 'abro', 'abres', 'abren'], correct: 0 }
    ]
  },

  'ex-2-2-mixed-verbs': {
    id: 'ex-2-2-mixed-verbs',
    type: 'grammar',
    title: 'Смешанное упражнение: IR, TENER, OÍR',
    description: 'Выберите правильную форму глагола',
    questions: [
      { sentence: 'Yo (ir) ___ al cine', options: ['voy', 'tengo', 'oigo', 'va'], correct: 0 },
      { sentence: 'Tú (tener) ___ hambre', options: ['vas', 'tienes', 'oyes', 'tiene'], correct: 1 },
      { sentence: 'Él (oír) ___ música', options: ['va', 'tiene', 'oye', 'van'], correct: 2 },
      { sentence: 'Nosotros (ir) ___ a España', options: ['vamos', 'tenemos', 'oímos', 'van'], correct: 0 },
      { sentence: 'Vosotros (tener) ___ tiempo', options: ['vais', 'tenéis', 'oís', 'tienen'], correct: 1 },
      { sentence: 'Ellos (oír) ___ la radio', options: ['van', 'tienen', 'oyen', 'vas'], correct: 2 },
      { sentence: 'Yo (tener) ___ veinte años', options: ['voy', 'tengo', 'oigo', 'va'], correct: 1 },
      { sentence: 'Tú (ir) ___ al bar', options: ['vas', 'tienes', 'oyes', 'tiene'], correct: 0 },
      { sentence: 'Ella (oír) ___ bien', options: ['va', 'tiene', 'oye', 'van'], correct: 2 },
      { sentence: 'Nosotros (tener) ___ prisa', options: ['vamos', 'tenemos', 'oímos', 'van'], correct: 1 },
      { sentence: 'Vosotros (ir) ___ de compras', options: ['vais', 'tenéis', 'oís', 'tienen'], correct: 0 },
      { sentence: 'Ellos (tener) ___ sed', options: ['van', 'tienen', 'oyen', 'vas'], correct: 1 },
      { sentence: 'Usted (ir) ___ a casa', options: ['va', 'tiene', 'oye', 'van'], correct: 0 },
      { sentence: 'Ustedes (oír) ___ las noticias', options: ['van', 'tienen', 'oyen', 'vas'], correct: 2 },
      { sentence: 'María (tener) ___ frío', options: ['va', 'tiene', 'oye', 'van'], correct: 1 }
    ]
  },

  'ex-2-2-tener-fillblank': {
    id: 'ex-2-2-tener-fillblank',
    type: 'fillblank',
    title: 'Заполните пропуски с глаголом TENER',
    description: 'Вставьте правильную форму глагола TENER',
    questions: [
      { sentence: 'Yo _____ que estudiar español', verb: 'tener', correct: 'tengo' },
      { sentence: 'Tú _____ mucha suerte', verb: 'tener', correct: 'tienes' },
      { sentence: 'Él _____ que ir al médico', verb: 'tener', correct: 'tiene' },
      { sentence: 'Ella _____ veinticinco años', verb: 'tener', correct: 'tiene' },
      { sentence: 'Nosotros _____ hambre', verb: 'tener', correct: 'tenemos' },
      { sentence: 'Vosotros _____ que tomar el autobús', verb: 'tener', correct: 'tenéis' },
      { sentence: 'Ellos _____ miedo de los perros', verb: 'tener', correct: 'tienen' },
      { sentence: 'Yo _____ sed y calor', verb: 'tener', correct: 'tengo' },
      { sentence: 'Tú _____ razón siempre', verb: 'tener', correct: 'tienes' },
      { sentence: 'Mi madre _____ prisa', verb: 'tener', correct: 'tiene' },
      { sentence: 'Mis hermanos _____ que trabajar', verb: 'tener', correct: 'tienen' },
      { sentence: 'Usted _____ mucho dinero', verb: 'tener', correct: 'tiene' },
      { sentence: 'Ustedes _____ una familia grande', verb: 'tener', correct: 'tienen' },
      { sentence: 'Pedro y yo _____ que leer el libro', verb: 'tener', correct: 'tenemos' },
      { sentence: 'Ana _____ sueño', verb: 'tener', correct: 'tiene' }
    ]
  },

  'ex-2-2-vocab-expressions': {
    id: 'ex-2-2-vocab-expressions',
    type: 'vocabulary',
    title: 'Выражения с TENER',
    description: 'Сопоставьте выражение с переводом',
    questions: [
      { spanish: 'tener hambre', options: ['быть правым', 'быть голодным', 'иметь время', 'бояться'], correct: 1 },
      { spanish: 'tener sed', options: ['хотеть спать', 'хотеть пить', 'торопиться', 'мерзнуть'], correct: 1 },
      { spanish: 'tener sueño', options: ['хотеть спать', 'хотеть есть', 'быть удачливым', 'иметь семью'], correct: 0 },
      { spanish: 'tener miedo', options: ['иметь деньги', 'бояться', 'быть правым', 'торопиться'], correct: 1 },
      { spanish: 'tener razón', options: ['быть голодным', 'быть удачливым', 'быть правым', 'иметь время'], correct: 2 },
      { spanish: 'tener suerte', options: ['быть удачливым', 'бояться', 'торопиться', 'мерзнуть'], correct: 0 },
      { spanish: 'tener prisa', options: ['иметь время', 'торопиться', 'быть правым', 'хотеть пить'], correct: 1 },
      { spanish: 'tener calor', options: ['мерзнуть', 'страдать от жары', 'хотеть спать', 'бояться'], correct: 1 },
      { spanish: 'tener frío', options: ['страдать от жары', 'мерзнуть', 'хотеть есть', 'быть правым'], correct: 1 },
      { spanish: 'tener tiempo', options: ['торопиться', 'бояться', 'иметь время', 'быть удачливым'], correct: 2 },
      { spanish: 'tener dinero', options: ['иметь деньги', 'иметь семью', 'быть голодным', 'хотеть пить'], correct: 0 },
      { spanish: 'tener familia', options: ['иметь время', 'иметь семью', 'иметь деньги', 'быть правым'], correct: 1 },
      { spanish: 'tener que', options: ['быть должным', 'иметь что-то', 'хотеть что-то', 'идти куда-то'], correct: 0 },
      { spanish: 'tener ... años', options: ['быть старым', 'иметь ... лет', 'быть молодым', 'иметь время'], correct: 1 },
      { spanish: 'ir de compras', options: ['идти домой', 'идти в магазин', 'идти за покупками', 'идти на работу'], correct: 2 }
    ]
  },

  'ex-2-2-translation-rus-esp': {
    id: 'ex-2-2-translation-rus-esp',
    type: 'writing',
    title: 'Перевод с русского на испанский',
    description: 'Переведите предложения на испанский',
    questions: [
      { russian: 'Я иду в театр на автобусе.', correct: 'Voy al teatro en autobús', alternatives: ['Yo voy al teatro en autobús'] },
      { russian: 'Ты хочешь есть и пить?', correct: '¿Tienes hambre y sed?', alternatives: ['¿Tú tienes hambre y sed?'] },
      { russian: 'Он слышит музыку в кафе.', correct: 'Oye música en el café', alternatives: ['Él oye música en el café'] },
      { russian: 'Мы едем в отпуск в Испанию.', correct: 'Vamos de vacaciones a España', alternatives: ['Nosotros vamos de vacaciones a España'] },
      { russian: 'Вы (vosotros) должны принять лекарство.', correct: 'Tenéis que tomar la medicina', alternatives: ['Vosotros tenéis que tomar la medicina'] },
      { russian: 'Они идут за покупками в центр.', correct: 'Van de compras al centro', alternatives: ['Ellos van de compras al centro', 'Ellas van de compras al centro'] },
      { russian: 'Мне двадцать лет и я студент.', correct: 'Tengo veinte años y soy estudiante' },
      { russian: 'Она торопится на работу на такси.', correct: 'Tiene prisa y va a la oficina en taxi', alternatives: ['Ella tiene prisa y va a la oficina en taxi'] },
      { russian: 'Мы слышим радио дома.', correct: 'Oímos la radio en casa', alternatives: ['Nosotros oímos la radio en casa'] },
      { russian: 'Ты едешь домой на машине?', correct: '¿Vas a casa en coche?', alternatives: ['¿Tú vas a casa en coche?'] },
      { russian: 'Им холодно, и они хотят спать.', correct: 'Tienen frío y tienen sueño', alternatives: ['Ellos tienen frío y tienen sueño', 'Ellas tienen frío y tienen sueño'] },
      { russian: 'Я собираюсь отдыхать в воскресенье.', correct: 'Voy a descansar el domingo', alternatives: ['Yo voy a descansar el domingo'] },
      { russian: 'У моей матери есть семья и деньги.', correct: 'Mi madre tiene familia y dinero' },
      { russian: 'Вы правы, это трудно.', correct: 'Tiene razón, es difícil', alternatives: ['Usted tiene razón, es difícil'] },
      { russian: 'Мы боимся, но должны идти.', correct: 'Tenemos miedo pero tenemos que ir', alternatives: ['Nosotros tenemos miedo pero tenemos que ir'] }
    ]
  },

  // УПРАЖНЕНИЯ ДЛЯ МОДУЛЯ 2 УРОК 3
  'ex-2-3-1': {
    id: 'ex-2-3-1',
    type: 'grammar',
    title: 'Указательные местоимения: ESTE, ESTA, ESTOS, ESTAS',
    description: 'Выберите правильную форму указательного местоимения ESTE (этот/эта/эти - близко)',
    reviewTime: 10,
    questions: [
      { sentence: '... chico es alto y rubio.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 0 },
      { sentence: '... chica es guapa y alegre.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 1 },
      { sentence: '... ojos son azules.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 2 },
      { sentence: '... cejas son pobladas.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 3 },
      { sentence: '... pelo es largo y liso.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 0 },
      { sentence: '... nariz es recta.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 1 },
      { sentence: '... hombre es viejo.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 0 },
      { sentence: '... mujer es delgada.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 1 },
      { sentence: '... niños son alegres.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 2 },
      { sentence: '... gafas son nuevas.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 3 },
      { sentence: '... barba es larga.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 1 },
      { sentence: '... labios son carnosos.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 2 },
      { sentence: '... hermano es trabajador.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 0 },
      { sentence: '... hermana es inteligente.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 1 },
      { sentence: '... amigos son sinceros.', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 2 }
    ]
  },

  'ex-2-3-2': {
    id: 'ex-2-3-2',
    type: 'grammar',
    title: 'Указательные местоимения: ESE, ESA, ESOS, ESAS',
    description: 'Выберите правильную форму указательного местоимения ESE (тот/та/те - на расстоянии)',
    reviewTime: 10,
    questions: [
      { sentence: '... señor es bajo.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 0 },
      { sentence: '... señora es alta.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 1 },
      { sentence: '... estudiantes son trabajadores.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 2 },
      { sentence: '... profesoras son inteligentes.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 3 },
      { sentence: '... pelo es corto.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 0 },
      { sentence: '... nariz es chata.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 1 },
      { sentence: '... bigotes son negros.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 2 },
      { sentence: '... facciones son bonitas.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 3 },
      { sentence: '... niño es perezoso.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 0 },
      { sentence: '... amiga es generosa.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 1 },
      { sentence: '... hombres son valientes.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 2 },
      { sentence: '... mujeres son educadas.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 3 },
      { sentence: '... libro es interesante.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 0 },
      { sentence: '... casa es grande.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 1 },
      { sentence: '... ojos son verdes.', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 2 }
    ]
  },

  'ex-2-3-3': {
    id: 'ex-2-3-3',
    type: 'grammar',
    title: 'Указательные местоимения: AQUEL, AQUELLA, AQUELLOS, AQUELLAS',
    description: 'Выберите правильную форму указательного местоимения AQUEL (вон тот/та/те - далеко)',
    reviewTime: 10,
    questions: [
      { sentence: '... chico es moreno.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 0 },
      { sentence: '... chica tiene pelo cano.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 1 },
      { sentence: '... hermanos son altos.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 2 },
      { sentence: '... hermanas son guapas.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 3 },
      { sentence: '... hombre es gordo.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 0 },
      { sentence: '... mujer es delgada.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 1 },
      { sentence: '... niños son curiosos.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 2 },
      { sentence: '... gafas son caras.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 3 },
      { sentence: '... señor es calvo.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 0 },
      { sentence: '... señora es vieja.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 1 },
      { sentence: '... estudiantes son serios.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 2 },
      { sentence: '... profesoras son cortés.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 3 },
      { sentence: '... padre es tranquilo.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 0 },
      { sentence: '... madre es cariñosa.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 1 },
      { sentence: '... amigos son fieles.', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 2 }
    ]
  },

  'ex-2-3-4': {
    id: 'ex-2-3-4',
    type: 'grammar',
    title: 'Смешанные указательные местоимения',
    description: 'Выберите правильную форму указательного местоимения (este/ese/aquel)',
    reviewTime: 10,
    questions: [
      { sentence: '... (близко) amigo es alegre.', options: ['Este', 'Ese', 'Aquel'], correct: 0 },
      { sentence: '... (там) mujer es bonita.', options: ['Esta', 'Esa', 'Aquella'], correct: 1 },
      { sentence: '... (вон там) señor es viejo.', options: ['Este', 'Ese', 'Aquel'], correct: 2 },
      { sentence: '... (здесь) ojos son pardos.', options: ['Estos', 'Esos', 'Aquellos'], correct: 0 },
      { sentence: '... (там) cejas son pobladas.', options: ['Estas', 'Esas', 'Aquellas'], correct: 1 },
      { sentence: '... (вон там) labios son finos.', options: ['Estos', 'Esos', 'Aquellos'], correct: 2 },
      { sentence: '... (близко) hermana es inteligente.', options: ['Esta', 'Esa', 'Aquella'], correct: 0 },
      { sentence: '... (там) hermano es trabajador.', options: ['Este', 'Ese', 'Aquel'], correct: 1 },
      { sentence: '... (вон там) niños son tímidos.', options: ['Estos', 'Esos', 'Aquellos'], correct: 2 },
      { sentence: '... (здесь) pelo es rizado.', options: ['Este', 'Ese', 'Aquel'], correct: 0 },
      { sentence: '... (там) nariz es ancha.', options: ['Esta', 'Esa', 'Aquella'], correct: 1 },
      { sentence: '... (вон там) barba es larga.', options: ['Esta', 'Esa', 'Aquella'], correct: 2 },
      { sentence: '... (близко) estudiante es puntual.', options: ['Este', 'Ese', 'Aquel'], correct: 0 },
      { sentence: '... (там) profesor es serio.', options: ['Este', 'Ese', 'Aquel'], correct: 1 },
      { sentence: '... (вон там) chica es pelirroja.', options: ['Esta', 'Esa', 'Aquella'], correct: 2 }
    ]
  },

  'ex-2-3-5': {
    id: 'ex-2-3-5',
    type: 'grammar',
    title: 'Указательные местоимения без существительного',
    description: 'Выберите правильную форму указательного местоимения, которое заменяет существительное',
    reviewTime: 10,
    questions: [
      { sentence: 'Mi hermano es rubio, pero ... es moreno. (тот)', options: ['este', 'ese', 'aquel'], correct: 1 },
      { sentence: '... es mi amiga. (эта)', options: ['Esta', 'Esa', 'Aquella'], correct: 0 },
      { sentence: '¿Qué chico es más alto: este o ...? (тот)', options: ['este', 'ese', 'aquel'], correct: 1 },
      { sentence: '... son mis profesores. (вон те)', options: ['Estos', 'Esos', 'Aquellos'], correct: 2 },
      { sentence: 'Esta chica es alegre, pero ... es triste. (та)', options: ['esta', 'esa', 'aquella'], correct: 1 },
      { sentence: '¿... es tu padre? (этот)', options: ['Este', 'Ese', 'Aquel'], correct: 0 },
      { sentence: 'Estos ojos son azules, ... son verdes. (те)', options: ['estos', 'esos', 'aquellos'], correct: 1 },
      { sentence: '... tiene pelo largo. (эта)', options: ['Esta', 'Esa', 'Aquella'], correct: 0 },
      { sentence: 'Este es alto, ... es bajo. (вон тот)', options: ['este', 'ese', 'aquel'], correct: 2 },
      { sentence: '... es mi hermana. (та)', options: ['Esta', 'Esa', 'Aquella'], correct: 1 },
      { sentence: 'Estas son mis gafas, ... son tuyas. (те)', options: ['estas', 'esas', 'aquellas'], correct: 1 },
      { sentence: '... son inteligentes. (эти)', options: ['Estos', 'Esos', 'Aquellos'], correct: 0 },
      { sentence: 'Mi amigo es trabajador, ... es perezoso. (вон тот)', options: ['este', 'ese', 'aquel'], correct: 2 },
      { sentence: '... es mi libro. (этот)', options: ['Este', 'Ese', 'Aquel'], correct: 0 },
      { sentence: 'Esta mujer es joven, ... es vieja. (та)', options: ['esta', 'esa', 'aquella'], correct: 1 }
    ]
  },

  'ex-2-3-6': {
    id: 'ex-2-3-6',
    type: 'grammar',
    title: 'Нейтральные формы: ESTO, ESO, AQUELLO',
    description: 'Выберите правильную нейтральную форму указательного местоимения',
    reviewTime: 10,
    questions: [
      { sentence: '¿Qué es ...? (это - близко)', options: ['esto', 'eso', 'aquello'], correct: 0 },
      { sentence: '... es interesante. (то)', options: ['Esto', 'Eso', 'Aquello'], correct: 1 },
      { sentence: 'No entiendo ... . (то - далеко)', options: ['esto', 'eso', 'aquello'], correct: 2 },
      { sentence: '... es mi pelo. (это - здесь)', options: ['Esto', 'Eso', 'Aquello'], correct: 0 },
      { sentence: '¿Qué es ...? - Son mis gafas. (то)', options: ['esto', 'eso', 'aquello'], correct: 1 },
      { sentence: '... es bueno - ser alegre. (это)', options: ['Esto', 'Eso', 'Aquello'], correct: 0 },
      { sentence: '... de ser perezoso es malo. (то)', options: ['Esto', 'Eso', 'Aquello'], correct: 1 },
      { sentence: '... no me gusta. (то)', options: ['Esto', 'Eso', 'Aquello'], correct: 1 },
      { sentence: '¿Para qué sirve ...? (это)', options: ['esto', 'eso', 'aquello'], correct: 0 },
      { sentence: '... fue terrible. (то - далеко)', options: ['Esto', 'Eso', 'Aquello'], correct: 2 },
      { sentence: '... es importante para mi familia. (это)', options: ['Esto', 'Eso', 'Aquello'], correct: 0 },
      { sentence: '... era su problema. (то - далеко)', options: ['Esto', 'Eso', 'Aquello'], correct: 2 },
      { sentence: '¿Qué es ... que veo? (это)', options: ['esto', 'eso', 'aquello'], correct: 0 },
      { sentence: '¿Cómo se llama ...? (то - далеко)', options: ['esto', 'eso', 'aquello'], correct: 2 },
      { sentence: '... es una cicatriz. (то - далеко)', options: ['Esto', 'Eso', 'Aquello'], correct: 2 }
    ]
  },

  'ex-2-3-7': {
    id: 'ex-2-3-7',
    type: 'grammar',
    title: 'Наречия места с указательными местоимениями',
    description: 'Выберите правильное наречие места (aquí/ahí/allí)',
    reviewTime: 10,
    questions: [
      { sentence: '... está mi amigo. (здесь)', options: ['Aquí', 'Ahí', 'Allí'], correct: 0 },
      { sentence: '... está tu hermana. (там)', options: ['Aquí', 'Ahí', 'Allí'], correct: 1 },
      { sentence: '... vive mi profesor. (там - далеко)', options: ['Aquí', 'Ahí', 'Allí'], correct: 2 },
      { sentence: 'Este chico está ... . (здесь)', options: ['aquí', 'ahí', 'allí'], correct: 0 },
      { sentence: 'Esa mujer está ... . (там)', options: ['aquí', 'ahí', 'allí'], correct: 1 },
      { sentence: 'Aquel hombre está ... . (там - далеко)', options: ['aquí', 'ahí', 'allí'], correct: 2 },
      { sentence: 'Ven ... , mira esta foto. (сюда)', options: ['aquí', 'ahí', 'allí'], correct: 0 },
      { sentence: 'Mira ... , ese chico es guapo. (туда)', options: ['aquí', 'ahí', 'allí'], correct: 1 },
      { sentence: 'Vamos ... , mi familia está allá. (туда - далеко)', options: ['aquí', 'ahí', 'allí'], correct: 2 },
      { sentence: '... tenemos a este niño alegre. (здесь)', options: ['Aquí', 'Ahí', 'Allí'], correct: 0 },
      { sentence: '... está ese señor bajo. (там)', options: ['Aquí', 'Ahí', 'Allí'], correct: 1 },
      { sentence: 'Mira ... , aquella mujer es muy alta. (туда - далеко)', options: ['aquí', 'ahí', 'allí'], correct: 2 },
      { sentence: 'Este amigo ... es muy inteligente. (здесь)', options: ['aquí', 'ahí', 'allí'], correct: 0 },
      { sentence: 'Ese señor ... es mi padre. (там)', options: ['aquí', 'ahí', 'allí'], correct: 1 },
      { sentence: 'Aquellos estudiantes ... son trabajadores. (там - далеко)', options: ['aquí', 'ahí', 'allí'], correct: 2 }
    ]
  },

  'ex-2-3-8': {
    id: 'ex-2-3-8',
    type: 'grammar',
    title: 'Притяжательные местоимения: MI, TU, SU',
    description: 'Выберите правильную форму притяжательного местоимения (mi/mis, tu/tus, su/sus)',
    reviewTime: 10,
    questions: [
      { sentence: '... hermano es alto. (мой)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 0 },
      { sentence: '... hermanos son altos. (мои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 1 },
      { sentence: '... amiga es alegre. (твоя)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 2 },
      { sentence: '... amigas son alegres. (твои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 3 },
      { sentence: '... pelo es largo. (мои волосы)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 0 },
      { sentence: '... ojos son azules. (твои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 3 },
      { sentence: '... padre es viejo. (его)', options: ['Su', 'Sus', 'Mi', 'Mis'], correct: 0 },
      { sentence: '... hijos son inteligentes. (их)', options: ['Su', 'Sus', 'Tu', 'Tus'], correct: 1 },
      { sentence: '... nariz es recta. (его)', options: ['Su', 'Sus', 'Mi', 'Mis'], correct: 0 },
      { sentence: '... gafas son nuevas. (мои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 1 },
      { sentence: '... barba es larga. (твоя)', options: ['Mi', 'Tu', 'Su', 'Mis'], correct: 1 },
      { sentence: '... bigotes son negros. (его)', options: ['Su', 'Sus', 'Mi', 'Mis'], correct: 1 },
      { sentence: '... hermana es guapa. (моя)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 0 },
      { sentence: '... profesores son serios. (твои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 3 },
      { sentence: '... madre es cariñosa. (его)', options: ['Su', 'Sus', 'Mi', 'Mis'], correct: 0 }
    ]
  },

  'ex-2-3-9': {
    id: 'ex-2-3-9',
    type: 'grammar',
    title: 'Притяжательные местоимения: NUESTRO, VUESTRO',
    description: 'Выберите правильную форму притяжательного местоимения (nuestro/nuestra/nuestros/nuestras, vuestro/vuestra/vuestros/vuestras)',
    reviewTime: 10,
    questions: [
      { sentence: '... padre es alto. (наш)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 0 },
      { sentence: '... madre es guapa. (наша)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 1 },
      { sentence: '... hermanos son alegres. (наши - мн.ч., м.р.)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 2 },
      { sentence: '... hermanas son inteligentes. (наши - мн.ч., ж.р.)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 3 },
      { sentence: '... amigo es trabajador. (ваш)', options: ['Vuestro', 'Vuestra', 'Vuestros', 'Vuestras'], correct: 0 },
      { sentence: '... amiga es generosa. (ваша)', options: ['Vuestro', 'Vuestra', 'Vuestros', 'Vuestras'], correct: 1 },
      { sentence: '... ojos son verdes. (ваши)', options: ['Vuestro', 'Vuestra', 'Vuestros', 'Vuestras'], correct: 2 },
      { sentence: '... cejas son pobladas. (ваши)', options: ['Vuestro', 'Vuestra', 'Vuestros', 'Vuestras'], correct: 3 },
      { sentence: '... profesor es serio. (наш)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 0 },
      { sentence: '... profesora es inteligente. (наша)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 1 },
      { sentence: '... labios son carnosos. (наши)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 2 },
      { sentence: '... gafas son nuevas. (ваши)', options: ['Vuestro', 'Vuestra', 'Vuestros', 'Vuestras'], correct: 3 },
      { sentence: '... pelo es corto. (наши волосы)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 0 },
      { sentence: '... familia es grande. (ваша)', options: ['Vuestro', 'Vuestra', 'Vuestros', 'Vuestras'], correct: 1 },
      { sentence: '... hijos son pequeños. (наши)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 2 }
    ]
  },

  'ex-2-3-10': {
    id: 'ex-2-3-10',
    type: 'grammar',
    title: 'Все притяжательные местоимения',
    description: 'Выберите правильную форму притяжательного местоимения',
    reviewTime: 10,
    questions: [
      { sentence: '... hermano es rubio. (мой)', options: ['Mi', 'Tu', 'Nuestro', 'Vuestro'], correct: 0 },
      { sentence: '... hermana es morena. (твоя)', options: ['Mi', 'Tu', 'Nuestra', 'Su'], correct: 1 },
      { sentence: '... padre es viejo. (наш)', options: ['Mi', 'Tu', 'Nuestro', 'Vuestro'], correct: 2 },
      { sentence: '... madre es joven. (ваша)', options: ['Mi', 'Tu', 'Nuestra', 'Vuestra'], correct: 3 },
      { sentence: '... ojos son azules. (мои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 1 },
      { sentence: '... pelo es largo. (твои волосы)', options: ['Mi', 'Tu', 'Nuestro', 'Su'], correct: 1 },
      { sentence: '... hijos son altos. (его)', options: ['Mi', 'Su', 'Sus', 'Tus'], correct: 2 },
      { sentence: '... amigos son alegres. (наши)', options: ['Mi', 'Nuestro', 'Nuestros', 'Vuestros'], correct: 2 },
      { sentence: '... profesora es inteligente. (ваша)', options: ['Mi', 'Tu', 'Nuestra', 'Vuestra'], correct: 3 },
      { sentence: '... gafas son nuevas. (мои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 1 },
      { sentence: '... casa es grande. (наша)', options: ['Mi', 'Tu', 'Nuestra', 'Vuestra'], correct: 2 },
      { sentence: '... barba es larga. (твоя)', options: ['Mi', 'Tu', 'Su', 'Nuestra'], correct: 1 },
      { sentence: '... nariz es recta. (его)', options: ['Mi', 'Tu', 'Su', 'Nuestro'], correct: 2 },
      { sentence: '... cejas son pobladas. (наши)', options: ['Mi', 'Nuestro', 'Nuestras', 'Vuestras'], correct: 2 },
      { sentence: '... amiga es guapa. (ваша)', options: ['Mi', 'Tu', 'Nuestra', 'Vuestra'], correct: 3 }
    ]
  },

  'ex-2-3-11': {
    id: 'ex-2-3-11',
    type: 'grammar',
    title: 'Притяжательные местоимения-существительные',
    description: 'Выберите правильную форму притяжательного местоимения-существительного (el mío, el tuyo, etc.)',
    reviewTime: 10,
    questions: [
      { sentence: 'Mi hermano es rubio. ¿Y ...? (твой)', options: ['el mío', 'el tuyo', 'el suyo', 'el nuestro'], correct: 1 },
      { sentence: 'Tu amiga es alegre, pero ... es triste. (моя)', options: ['la mía', 'la tuya', 'la suya', 'la nuestra'], correct: 0 },
      { sentence: 'Mis ojos son azules, pero ... son pardos. (его)', options: ['los míos', 'los tuyos', 'los suyos', 'los nuestros'], correct: 2 },
      { sentence: 'Nuestros hijos son pequeños, pero ... son altos. (ваши)', options: ['los míos', 'los tuyos', 'los suyos', 'los vuestros'], correct: 3 },
      { sentence: 'Mi pelo es largo, ... es corto. (твои волосы)', options: ['el mío', 'el tuyo', 'el suyo', 'el nuestro'], correct: 1 },
      { sentence: 'Tus ojos son verdes, ... son azules. (мои)', options: ['los míos', 'los tuyos', 'los suyos', 'los nuestros'], correct: 0 },
      { sentence: 'Su nariz es recta, ... es chata. (наша)', options: ['la mía', 'la tuya', 'la suya', 'la nuestra'], correct: 3 },
      { sentence: 'Nuestro padre es alto, ... es bajo. (ваш)', options: ['el mío', 'el tuyo', 'el suyo', 'el vuestro'], correct: 3 },
      { sentence: 'Esta familia es ... . (моя)', options: ['mía', 'tuya', 'suya', 'nuestra'], correct: 0 },
      { sentence: 'Este amigo es ... . (твой)', options: ['mío', 'tuyo', 'suyo', 'nuestro'], correct: 1 },
      { sentence: '¿Estas gafas son ...? (твои)', options: ['mías', 'tuyas', 'suyas', 'nuestras'], correct: 1 },
      { sentence: 'Estos hermanos son ... . (его)', options: ['míos', 'tuyos', 'suyos', 'nuestros'], correct: 2 },
      { sentence: 'Mi hermana es guapa, ... también. (твоя)', options: ['la mía', 'la tuya', 'la suya', 'la nuestra'], correct: 1 },
      { sentence: 'Tu hermano es trabajador, ... es perezoso. (мой)', options: ['el mío', 'el tuyo', 'el suyo', 'el nuestro'], correct: 0 },
      { sentence: 'Su casa es pequeña, ... es grande. (наша)', options: ['la mía', 'la tuya', 'la suya', 'la nuestra'], correct: 3 }
    ]
  },

  'ex-2-3-12': {
    id: 'ex-2-3-12',
    type: 'grammar',
    title: 'Указательные и притяжательные местоимения',
    description: 'Выберите правильную форму местоимения (указательное или притяжательное)',
    reviewTime: 10,
    questions: [
      { sentence: '... hermano es alto. (мой)', options: ['Mi', 'Este', 'Tu', 'Ese'], correct: 0 },
      { sentence: '... chico es rubio. (этот)', options: ['Mi', 'Este', 'Tu', 'Ese'], correct: 1 },
      { sentence: '... amiga es alegre. (твоя)', options: ['Mi', 'Esta', 'Tu', 'Esa'], correct: 2 },
      { sentence: '... mujer es guapa. (та)', options: ['Mi', 'Esta', 'Tu', 'Esa'], correct: 3 },
      { sentence: '... padre es serio. (наш)', options: ['Nuestro', 'Este', 'Vuestro', 'Ese'], correct: 0 },
      { sentence: '... señor es viejo. (тот)', options: ['Nuestro', 'Este', 'Vuestro', 'Ese'], correct: 3 },
      { sentence: '... ojos son azules. (мои)', options: ['Mis', 'Estos', 'Tus', 'Esos'], correct: 0 },
      { sentence: '... labios son carnosos. (эти)', options: ['Mis', 'Estos', 'Tus', 'Esos'], correct: 1 },
      { sentence: '... pelo es largo. (твои волосы)', options: ['Mi', 'Este', 'Tu', 'Ese'], correct: 2 },
      { sentence: '... hombre está aquí. (этот)', options: ['Mi', 'Este', 'Tu', 'Ese'], correct: 1 },
      { sentence: '... familia es grande. (ваша)', options: ['Nuestra', 'Esta', 'Vuestra', 'Esa'], correct: 2 },
      { sentence: '... chica está allí. (вон та)', options: ['Mi', 'Esta', 'Aquella', 'Esa'], correct: 2 },
      { sentence: '... hermanos son trabajadores. (наши)', options: ['Mis', 'Estos', 'Nuestros', 'Esos'], correct: 2 },
      { sentence: '... estudiantes están ahí. (те)', options: ['Mis', 'Estos', 'Nuestros', 'Esos'], correct: 3 },
      { sentence: '... nariz es chata. (его)', options: ['Mi', 'Esta', 'Su', 'Esa'], correct: 2 }
    ]
  },

  'ex-2-3-13': {
    id: 'ex-2-3-13',
    type: 'grammar',
    title: 'Согласование местоимений с существительными',
    description: 'Выберите правильную форму местоимения, которая согласуется с существительным',
    reviewTime: 10,
    questions: [
      { sentence: '... cejas son pobladas. (эти)', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 3 },
      { sentence: '... labios son finos. (эти)', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 2 },
      { sentence: '... gafas son nuevas. (мои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 1 },
      { sentence: '... pelo es rizado. (мои волосы)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 0 },
      { sentence: '... nariz es recta. (эта)', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 1 },
      { sentence: '... ojos son verdes. (твои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 3 },
      { sentence: '... barba es larga. (его)', options: ['Su', 'Sus', 'Mi', 'Mis'], correct: 0 },
      { sentence: '... bigotes son negros. (esos)', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 2 },
      { sentence: '... facciones son bonitas. (наши)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 3 },
      { sentence: '... hermanos son altos. (вон те)', options: ['Aquel', 'Aquella', 'Aquellos', 'Aquellas'], correct: 2 },
      { sentence: '... hermanas son guapas. (ваши)', options: ['Vuestro', 'Vuestra', 'Vuestros', 'Vuestras'], correct: 3 },
      { sentence: '... estudiantes son inteligentes. (эти)', options: ['Este', 'Esta', 'Estos', 'Estas'], correct: 2 },
      { sentence: '... profesoras son serias. (те)', options: ['Ese', 'Esa', 'Esos', 'Esas'], correct: 3 },
      { sentence: '... amigos son alegres. (наши)', options: ['Nuestro', 'Nuestra', 'Nuestros', 'Nuestras'], correct: 2 },
      { sentence: '... amigas son generosas. (твои)', options: ['Mi', 'Mis', 'Tu', 'Tus'], correct: 3 }
    ]
  },

  'ex-2-3-14': {
    id: 'ex-2-3-14',
    type: 'translation',
    title: 'Перевод: отработка грамматики',
    description: 'Переведите предложения с русского на испанский, используя указательные и притяжательные местоимения',
    reviewTime: 10,
    questions: [
      { russian: 'Этот мальчик высокий.', correct: 'Este chico es alto.' },
      { russian: 'Та девочка красивая.', correct: 'Esa chica es guapa.' },
      { russian: 'Вон тот мужчина старый.', correct: 'Aquel hombre es viejo.' },
      { russian: 'Мой брат трудолюбивый.', correct: 'Mi hermano es trabajador.' },
      { russian: 'Твоя сестра умная.', correct: 'Tu hermana es inteligente.' },
      { russian: 'Его отец серьезный.', correct: 'Su padre es serio.' },
      { russian: 'Наша мама добрая.', correct: 'Nuestra madre es bondadosa.' },
      { russian: 'Ваши глаза зеленые.', correct: 'Vuestros ojos son verdes.' },
      { russian: 'Эти волосы длинные.', correct: 'Este pelo es largo.' },
      { russian: 'Те очки новые.', correct: 'Esas gafas son nuevas.' },
      { russian: 'Что это?', correct: '¿Qué es esto?' },
      { russian: 'Это интересно.', correct: 'Eso es interesante.' },
      { russian: 'Мой друг здесь.', correct: 'Mi amigo está aquí.' },
      { russian: 'Твой брат блондин, а мой брюнет.', correct: 'Tu hermano es rubio, pero el mío es moreno.' },
      { russian: 'Эта семья моя.', correct: 'Esta familia es mía.' }
    ]
  },

  'ex-2-3-15': {
    id: 'ex-2-3-15',
    type: 'translation',
    title: 'Перевод: словарь урока (внешность и характер)',
    description: 'Переведите предложения с русского на испанский, используя словарь урока о внешности и характере',
    reviewTime: 10,
    questions: [
      { russian: 'Мой брат высокий и стройный.', correct: 'Mi hermano es alto y delgado.' },
      { russian: 'Его сестра красивая, у неё голубые глаза.', correct: 'Su hermana es guapa, tiene ojos azules.' },
      { russian: 'Этот мужчина низкий и толстый.', correct: 'Este hombre es bajo y gordo.' },
      { russian: 'Та женщина имеет длинные вьющиеся волосы.', correct: 'Esa mujer tiene pelo largo y rizado.' },
      { russian: 'Вон тот мальчик блондин с зелеными глазами.', correct: 'Aquel chico es rubio con ojos verdes.' },
      { russian: 'Моя подруга веселая и общительная.', correct: 'Mi amiga es alegre y comunicativa.' },
      { russian: 'Твой отец серьезный и трудолюбивый.', correct: 'Tu padre es serio y trabajador.' },
      { russian: 'Этот студент умный и честный.', correct: 'Este estudiante es inteligente y honrado.' },
      { russian: 'Та девочка застенчивая, но добрая.', correct: 'Esa chica es tímida, pero bondadosa.' },
      { russian: 'У него прямой нос и полные губы.', correct: 'Él tiene nariz recta y labios carnosos.' },
      { russian: 'У неё густые брови и большие глаза.', correct: 'Ella tiene cejas pobladas y ojos grandes.' },
      { russian: 'Этот господин имеет очки и бороду.', correct: 'Este señor tiene gafas y barba.' },
      { russian: 'Мой отец старый, у него седые волосы.', correct: 'Mi padre es viejo, tiene pelo cano.' },
      { russian: 'Вон те дети веселые и любопытные.', correct: 'Aquellos niños son alegres y curiosos.' },
      { russian: 'Наша учительница молодая, умная и добрая.', correct: 'Nuestra profesora es joven, inteligente y bondadosa.' }
    ]
  },

  // Модуль 3 Урок 1 - Упражнения на вопросительные предложения
  'ex-3-1-1': {
    id: 'ex-3-1-1',
    type: 'grammar',
    title: 'Общие вопросы: порядок слов',
    description: 'Выберите правильный общий вопрос',
    reviewTime: 10,
    questions: [
      { sentence: 'María es estudiante.', options: ['¿Es María estudiante?', '¿María es estudiante?', '¿Estudiante es María?', '¿Es estudiante María?'], correct: 0 },
      { sentence: 'Carlos vive en Madrid.', options: ['¿Vive Carlos en Madrid?', '¿Carlos vive en Madrid?', '¿En Madrid vive Carlos?', '¿Vive en Madrid Carlos?'], correct: 0 },
      { sentence: 'Ellos son amigos.', options: ['¿Son ellos amigos?', '¿Ellos son amigos?', '¿Amigos son ellos?', '¿Son amigos ellos?'], correct: 0 },
      { sentence: 'Tu hermano trabaja aquí.', options: ['¿Trabaja tu hermano aquí?', '¿Tu hermano trabaja aquí?', '¿Aquí trabaja tu hermano?', '¿Trabaja aquí tu hermano?'], correct: 0 },
      { sentence: 'La clase es interesante.', options: ['¿Es la clase interesante?', '¿La clase es interesante?', '¿Interesante es la clase?', '¿Es interesante la clase?'], correct: 0 },
      { sentence: 'Nosotros estudiamos español.', options: ['¿Estudiamos nosotros español?', '¿Nosotros estudiamos español?', '¿Español estudiamos nosotros?', '¿Estudiamos español nosotros?'], correct: 0 },
      { sentence: 'Tus padres están en casa.', options: ['¿Están tus padres en casa?', '¿Tus padres están en casa?', '¿En casa están tus padres?', '¿Están en casa tus padres?'], correct: 0 },
      { sentence: 'Ella tiene un perro.', options: ['¿Tiene ella un perro?', '¿Ella tiene un perro?', '¿Un perro tiene ella?', '¿Tiene un perro ella?'], correct: 0 },
      { sentence: 'Vosotros sois profesores.', options: ['¿Sois vosotros profesores?', '¿Vosotros sois profesores?', '¿Profesores sois vosotros?', '¿Sois profesores vosotros?'], correct: 0 },
      { sentence: 'Mi familia es grande.', options: ['¿Es mi familia grande?', '¿Mi familia es grande?', '¿Grande es mi familia?', '¿Es grande mi familia?'], correct: 0 }
    ]
  },

  'ex-3-1-2': {
    id: 'ex-3-1-2',
    type: 'grammar',
    title: 'Вопросительные слова: ¿Quién? / ¿Qué?',
    description: 'Выберите правильное вопросительное слово. Помните: ¿Quién? - кто это (человек), ¿Qué? - что, какая профессия',
    reviewTime: 10,
    questions: [
      { sentence: '¿___ es tu nombre? (что)', options: ['Qué', 'Quién', 'Cuál', 'Cómo'], correct: 0 },
      { sentence: '¿___ es tu padre? (кто это)', options: ['Quién', 'Qué', 'Cuál', 'Dónde'], correct: 0 },
      { sentence: '¿___ eres tú? - Soy estudiante. (профессия)', options: ['Qué', 'Quién', 'Cuál', 'Cómo'], correct: 0 },
      { sentence: '¿___ llama por teléfono? (кто)', options: ['Quién', 'Qué', 'Cuál', 'Cómo'], correct: 0 },
      { sentence: '¿___ estudias en la universidad? (что)', options: ['Qué', 'Quién', 'Cuál', 'Dónde'], correct: 0 },
      { sentence: '¿___ es esta mujer? (кто это)', options: ['Quién', 'Qué', 'Cuál', 'Cómo'], correct: 0 },
      { sentence: '¿___ es tu profesión? (профессия)', options: ['Qué', 'Quién', 'Cuándo', 'Cómo'], correct: 0 },
      { sentence: '¿___ son tus amigos? (кто это)', options: ['Quiénes', 'Qué', 'Cuáles', 'Cómo'], correct: 0 },
      { sentence: '¿___ haces en tu tiempo libre? (что)', options: ['Qué', 'Quién', 'Cuándo', 'Dónde'], correct: 0 },
      { sentence: '¿___ vive en esta casa? (кто)', options: ['Quién', 'Qué', 'Cuándo', 'Cómo'], correct: 0 }
    ]
  },

  'ex-3-1-3': {
    id: 'ex-3-1-3',
    type: 'grammar',
    title: 'Вопросительные слова: ¿Dónde? / ¿Adónde? / ¿De dónde?',
    description: 'Выберите правильное вопросительное слово для места',
    reviewTime: 10,
    questions: [
      { sentence: '¿___ vives? - Vivo en Madrid.', options: ['Dónde', 'Adónde', 'De dónde', 'Cuándo'], correct: 0 },
      { sentence: '¿___ vas? - Voy a la universidad.', options: ['Adónde', 'Dónde', 'De dónde', 'Cuándo'], correct: 0 },
      { sentence: '¿___ eres? - Soy de España.', options: ['De dónde', 'Dónde', 'Adónde', 'Cuándo'], correct: 0 },
      { sentence: '¿___ está tu hermano? - Está en casa.', options: ['Dónde', 'Adónde', 'De dónde', 'Cuándo'], correct: 0 },
      { sentence: '¿___ viajan ustedes? - Viajamos a Barcelona.', options: ['Adónde', 'Dónde', 'De dónde', 'Por qué'], correct: 0 },
      { sentence: '¿___ es tu padre? - Es de Valencia.', options: ['De dónde', 'Dónde', 'Adónde', 'Cómo'], correct: 0 },
      { sentence: '¿___ trabaja María? - Trabaja en un hospital.', options: ['Dónde', 'Adónde', 'De dónde', 'Cuándo'], correct: 0 },
      { sentence: '¿___ vais esta tarde? - Vamos al cine.', options: ['Adónde', 'Dónde', 'De dónde', 'Cuándo'], correct: 0 },
      { sentence: '¿___ son tus abuelos? - Son de Sevilla.', options: ['De dónde', 'Dónde', 'Adónde', 'Quiénes'], correct: 0 },
      { sentence: '¿___ estudias español? - Estudio en la universidad.', options: ['Dónde', 'Adónde', 'De dónde', 'Cuándo'], correct: 0 }
    ]
  },

  'ex-3-1-4': {
    id: 'ex-3-1-4',
    type: 'grammar',
    title: 'Вопросительные слова: общие',
    description: 'Выберите правильное вопросительное слово',
    reviewTime: 10,
    questions: [
      { sentence: '¿___ te llamas? - Me llamo Ana.', options: ['Cómo', 'Qué', 'Quién', 'Cuándo'], correct: 0 },
      { sentence: '¿___ años tienes? - Tengo veinte años.', options: ['Cuántos', 'Cuánto', 'Qué', 'Cómo'], correct: 0 },
      { sentence: '¿___ es tu cumpleaños? - Es en mayo.', options: ['Cuándo', 'Dónde', 'Qué', 'Cómo'], correct: 0 },
      { sentence: '¿___ estudias español? - Porque me gusta.', options: ['Por qué', 'Cuándo', 'Dónde', 'Cómo'], correct: 0 },
      { sentence: '¿___ hermanos tienes? - Tengo dos hermanos.', options: ['Cuántos', 'Cuánto', 'Qué', 'Quién'], correct: 0 },
      { sentence: '¿___ está tu madre? - Está bien, gracias.', options: ['Cómo', 'Dónde', 'Quién', 'Qué'], correct: 0 },
      { sentence: '¿___ cuesta este libro? - Cuesta diez euros.', options: ['Cuánto', 'Cuántos', 'Qué', 'Cómo'], correct: 0 },
      { sentence: '¿___ empiezan las clases? - Empiezan a las nueve.', options: ['Cuándo', 'Dónde', 'Cómo', 'Qué'], correct: 0 },
      { sentence: '¿___ es tu color favorito? - Es azul.', options: ['Cuál', 'Qué', 'Cómo', 'Dónde'], correct: 0 },
      { sentence: '¿___ vas a la universidad? - Voy en autobús.', options: ['Cómo', 'Cuándo', 'Dónde', 'Por qué'], correct: 0 }
    ]
  },

  'ex-3-1-5': {
    id: 'ex-3-1-5',
    type: 'grammar',
    title: 'Альтернативные вопросы',
    description: 'Выберите правильный альтернативный вопрос',
    reviewTime: 10,
    questions: [
      { sentence: 'чай или кофе?', options: ['¿Té o café?', '¿Té y café?', '¿Qué té o café?', '¿Es té o café?'], correct: 0 },
      { sentence: 'Ты студент или преподаватель?', options: ['¿Eres estudiante y profesor?', '¿Eres estudiante o profesor?', '¿Qué eres estudiante o profesor?', '¿Estás estudiante o profesor?'], correct: 1 },
      { sentence: 'Твоя сестра высокая или низкая?', options: ['¿Tu hermana es alta y baja?', '¿Cómo es tu hermana alta o baja?', '¿Tu hermana es alta o baja?', '¿Está tu hermana alta o baja?'], correct: 2 },
      { sentence: 'Вы идете в кино или в театр?', options: ['¿Vais al cine y al teatro?', '¿Adónde vais al cine o al teatro?', '¿Estáis al cine o al teatro?', '¿Vais al cine o al teatro?'], correct: 3 },
      { sentence: 'Это твоя книга или его книга?', options: ['¿Es tu libro o su libro?', '¿Es tu libro y su libro?', '¿Qué es tu libro o su libro?', '¿Está tu libro o su libro?'], correct: 0 },
      { sentence: 'Они живут в Мадриде или в Барселоне?', options: ['¿Viven en Madrid y en Barcelona?', '¿Viven en Madrid o en Barcelona?', '¿Dónde viven en Madrid o en Barcelona?', '¿Están en Madrid o en Barcelona?'], correct: 1 },
      { sentence: 'Твой отец врач или учитель?', options: ['¿Tu padre es médico y profesor?', '¿Qué es tu padre médico o profesor?', '¿Tu padre es médico o profesor?', '¿Está tu padre médico o profesor?'], correct: 2 },
      { sentence: 'Урок утром или вечером?', options: ['¿La clase es por la mañana y por la tarde?', '¿Cuándo es la clase por la mañana o por la tarde?', '¿Está la clase por la mañana o por la tarde?', '¿La clase es por la mañana o por la tarde?'], correct: 3 },
      { sentence: 'У тебя кот или собака?', options: ['¿Tienes un gato o un perro?', '¿Tienes un gato y un perro?', '¿Qué tienes un gato o un perro?', '¿Estás un gato o un perro?'], correct: 0 },
      { sentence: 'Это молоко или вода?', options: ['¿Es leche y agua?', '¿Es leche o agua?', '¿Qué es leche o agua?', '¿Está leche o agua?'], correct: 1 }
    ]
  },

  'ex-3-1-6': {
    id: 'ex-3-1-6',
    type: 'grammar',
    title: 'Образование вопросов',
    description: 'Выберите правильный вопрос к выделенной части',
    reviewTime: 10,
    questions: [
      { sentence: 'María estudia en la universidad. (María)', options: ['¿Quién estudia en la universidad?', '¿Qué estudia en la universidad?', '¿Dónde estudia María?', '¿Cómo estudia María?'], correct: 0 },
      { sentence: 'Carlos vive en Madrid. (en Madrid)', options: ['¿Dónde vive Carlos?', '¿Quién vive en Madrid?', '¿Cómo vive Carlos?', '¿Cuándo vive Carlos?'], correct: 0 },
      { sentence: 'Ella trabaja en un hospital. (en un hospital)', options: ['¿Dónde trabaja ella?', '¿Quién trabaja?', '¿Qué trabaja ella?', '¿Cómo trabaja ella?'], correct: 0 },
      { sentence: 'Mi padre es médico. (médico)', options: ['¿Qué es tu padre?', '¿Quién es médico?', '¿Dónde es tu padre?', '¿Cómo es tu padre?'], correct: 0 },
      { sentence: 'Nosotros estudiamos español. (español)', options: ['¿Qué estudiáis?', '¿Quién estudia español?', '¿Dónde estudiáis?', '¿Cuándo estudiáis?'], correct: 0 },
      { sentence: 'Las clases empiezan a las nueve. (a las nueve)', options: ['¿Cuándo empiezan las clases?', '¿Dónde empiezan las clases?', '¿Qué empiezan las clases?', '¿Cómo empiezan las clases?'], correct: 0 },
      { sentence: 'Tengo tres hermanos. (tres)', options: ['¿Cuántos hermanos tienes?', '¿Quién tiene hermanos?', '¿Qué tienes?', '¿Dónde tienes hermanos?'], correct: 0 },
      { sentence: 'Voy al cine. (al cine)', options: ['¿Adónde vas?', '¿Quién va al cine?', '¿Cuándo vas?', '¿Cómo vas?'], correct: 0 },
      { sentence: 'Ella es de Valencia. (de Valencia)', options: ['¿De dónde es ella?', '¿Quién es de Valencia?', '¿Qué es ella?', '¿Cómo es ella?'], correct: 0 },
      { sentence: 'Estudio porque me gusta. (porque me gusta)', options: ['¿Por qué estudias?', '¿Quién estudia?', '¿Qué estudias?', '¿Dónde estudias?'], correct: 0 }
    ]
  },

  'ex-3-1-7': {
    id: 'ex-3-1-7',
    type: 'word-order',
    title: 'Порядок слов в вопросах',
    description: 'Расставьте слова в правильном порядке',
    reviewTime: 10,
    questions: [
      { words: ['¿', 'Dónde', 'vives', 'tú', '?'], correct: ['¿', 'Dónde', 'vives', 'tú', '?'] },
      { words: ['¿', 'Cómo', 'te', 'llamas', '?'], correct: ['¿', 'Cómo', 'te', 'llamas', '?'] },
      { words: ['¿', 'Qué', 'estudias', 'en', 'la', 'universidad', '?'], correct: ['¿', 'Qué', 'estudias', 'en', 'la', 'universidad', '?'] },
      { words: ['¿', 'Cuántos', 'años', 'tienes', '?'], correct: ['¿', 'Cuántos', 'años', 'tienes', '?'] },
      { words: ['¿', 'De', 'dónde', 'es', 'tu', 'padre', '?'], correct: ['¿', 'De', 'dónde', 'es', 'tu', 'padre', '?'] },
      { words: ['¿', 'Adónde', 'vas', 'esta', 'tarde', '?'], correct: ['¿', 'Adónde', 'vas', 'esta', 'tarde', '?'] },
      { words: ['¿', 'Por', 'qué', 'estudias', 'español', '?'], correct: ['¿', 'Por', 'qué', 'estudias', 'español', '?'] },
      { words: ['¿', 'Quién', 'es', 'tu', 'profesor', '?'], correct: ['¿', 'Quién', 'es', 'tu', 'profesor', '?'] },
      { words: ['¿', 'Cuándo', 'empiezan', 'las', 'clases', '?'], correct: ['¿', 'Cuándo', 'empiezan', 'las', 'clases', '?'] },
      { words: ['¿', 'Cómo', 'está', 'tu', 'familia', '?'], correct: ['¿', 'Cómo', 'está', 'tu', 'familia', '?'] }
    ]
  },

  'ex-3-1-8': {
    id: 'ex-3-1-8',
    type: 'translation',
    title: 'Перевод вопросов',
    description: 'Переведите вопросы с русского на испанский',
    reviewTime: 10,
    questions: [
      { russian: 'Как тебя зовут?', correct: '¿Cómo te llamas?', alternatives: ['¿Cómo se llama usted?'] },
      { russian: 'Где ты живешь?', correct: '¿Dónde vives?', alternatives: ['¿Dónde vive usted?'] },
      { russian: 'Сколько тебе лет?', correct: '¿Cuántos años tienes?', alternatives: ['¿Cuántos años tiene usted?'] },
      { russian: 'Откуда ты?', correct: '¿De dónde eres?', alternatives: ['¿De dónde es usted?'] },
      { russian: 'Что ты изучаешь?', correct: '¿Qué estudias?', alternatives: ['¿Qué estudia usted?'] },
      { russian: 'Куда ты идешь?', correct: '¿Adónde vas?', alternatives: ['¿Adónde va usted?'] },
      { russian: 'Почему ты изучаешь испанский?', correct: '¿Por qué estudias español?', alternatives: ['¿Por qué estudia usted español?'] },
      { russian: 'Когда начинаются уроки?', correct: '¿Cuándo empiezan las clases?', alternatives: ['¿Cuándo comienzan las clases?'] },
      { russian: 'Кто твой учитель?', correct: '¿Quién es tu profesor?', alternatives: ['¿Quién es su profesor?'] },
      { russian: 'Как дела?', correct: '¿Cómo estás?', alternatives: ['¿Cómo está usted?', '¿Qué tal?'] }
    ]
  },

  'ex-3-1-9': {
    id: 'ex-3-1-9',
    type: 'error-correction',
    title: 'Исправление ошибок в вопросах',
    description: 'Найдите и исправьте ошибку в вопросительном предложении',
    reviewTime: 10,
    questions: [
      { incorrect: '¿Que es tu nombre?', correct: '¿Cuál es tu nombre?', explanation: 'Используем ¿Cuál? для выбора из вариантов' },
      { incorrect: '¿Donde vives tu?', correct: '¿Dónde vives?', explanation: 'Нужен знак ударения: Dónde' },
      { incorrect: '¿Cuando empieza la clase?', correct: '¿Cuándo empieza la clase?', explanation: 'Нужен знак ударения: Cuándo' },
      { incorrect: '¿Como te llamas?', correct: '¿Cómo te llamas?', explanation: 'Нужен знак ударения: Cómo' },
      { incorrect: '¿De donde eres tu?', correct: '¿De dónde eres?', explanation: 'Нужен знак ударения: dónde' },
      { incorrect: '¿Adonde vas tu?', correct: '¿Adónde vas?', explanation: 'Нужен знак ударения: Adónde' },
      { incorrect: '¿Por que estudias español?', correct: '¿Por qué estudias español?', explanation: 'Нужен знак ударения и пробел: Por qué' },
      { incorrect: '¿Quien es tu profesor?', correct: '¿Quién es tu profesor?', explanation: 'Нужен знак ударения: Quién' },
      { incorrect: '¿Cuanto años tienes?', correct: '¿Cuántos años tienes?', explanation: 'Согласование по числу и знак ударения: Cuántos' },
      { incorrect: '¿Que haces tu?', correct: '¿Qué haces?', explanation: 'Нужен знак ударения: Qué' }
    ]
  },

  // Упражнения на глаголы индивидуального спряжения
  'ex-3-1-10': {
    id: 'ex-3-1-10',
    type: 'grammar',
    title: 'Глагол QUERER: спряжение',
    description: 'Выберите правильную форму глагола QUERER',
    reviewTime: 10,
    questions: [
      { sentence: 'Yo ___ estudiar español.', options: ['quiero', 'quieres', 'quiere', 'quieren'], correct: 0 },
      { sentence: '¿Tú ___ venir conmigo?', options: ['quieres', 'quiero', 'quiere', 'queremos'], correct: 0 },
      { sentence: 'Mi hermano ___ ser médico.', options: ['quiere', 'quiero', 'quieres', 'quieren'], correct: 0 },
      { sentence: 'Nosotros ___ una casa grande.', options: ['queremos', 'quiero', 'quieres', 'quieren'], correct: 0 },
      { sentence: '¿Vosotros ___ café o té?', options: ['queréis', 'queremos', 'quieren', 'quiero'], correct: 0 },
      { sentence: 'Ellos ___ viajar a España.', options: ['quieren', 'queremos', 'quiero', 'quiere'], correct: 0 },
      { sentence: 'Yo ___ mucho a mi familia.', options: ['quiero', 'quieres', 'quiere', 'queremos'], correct: 0 },
      { sentence: '¿Qué ___ tú de regalo?', options: ['quieres', 'quiero', 'quiere', 'queremos'], correct: 0 },
      { sentence: 'Mi madre ___ un coche nuevo.', options: ['quiere', 'quiero', 'quieres', 'quieren'], correct: 0 },
      { sentence: 'Nosotros ___ ser profesores.', options: ['queremos', 'quiero', 'quieren', 'quiere'], correct: 0 }
    ]
  },

  'ex-3-1-11': {
    id: 'ex-3-1-11',
    type: 'grammar',
    title: 'Глагол PODER: спряжение',
    description: 'Выберите правильную форму глагола PODER',
    reviewTime: 10,
    questions: [
      { sentence: 'Yo ___ hablar español.', options: ['puedo', 'puedes', 'puede', 'pueden'], correct: 0 },
      { sentence: '¿Tú ___ venir mañana?', options: ['puedes', 'puedo', 'puede', 'podemos'], correct: 0 },
      { sentence: 'Mi padre no ___ trabajar hoy.', options: ['puede', 'puedo', 'puedes', 'pueden'], correct: 0 },
      { sentence: 'Nosotros ___ estudiar en la biblioteca.', options: ['podemos', 'puedo', 'puedes', 'pueden'], correct: 0 },
      { sentence: '¿Vosotros ___ ayudarme?', options: ['podéis', 'podemos', 'pueden', 'puedo'], correct: 0 },
      { sentence: 'Ellos ___ venir a la universidad.', options: ['pueden', 'podemos', 'puedo', 'puede'], correct: 0 },
      { sentence: 'Yo no ___ ir a la fiesta.', options: ['puedo', 'puedes', 'puede', 'podemos'], correct: 0 },
      { sentence: '¿Tú ___ leer este libro?', options: ['puedes', 'puedo', 'puede', 'podemos'], correct: 0 },
      { sentence: 'Ella ___ cocinar muy bien.', options: ['puede', 'puedo', 'puedes', 'pueden'], correct: 0 },
      { sentence: 'Nosotros ___ hablar tres idiomas.', options: ['podemos', 'puedo', 'pueden', 'puede'], correct: 0 }
    ]
  },

  'ex-3-1-12': {
    id: 'ex-3-1-12',
    type: 'grammar',
    title: 'Глагол VENIR: спряжение',
    description: 'Выберите правильную форму глагола VENIR',
    reviewTime: 10,
    questions: [
      { sentence: 'Yo ___ a la universidad en autobús.', options: ['vengo', 'vienes', 'viene', 'vienen'], correct: 0 },
      { sentence: '¿Tú ___ de Madrid?', options: ['vienes', 'vengo', 'viene', 'venimos'], correct: 0 },
      { sentence: 'Mi amigo ___ a mi casa esta tarde.', options: ['viene', 'vengo', 'vienes', 'vienen'], correct: 0 },
      { sentence: 'Nosotros ___ de la biblioteca.', options: ['venimos', 'vengo', 'vienes', 'vienen'], correct: 0 },
      { sentence: '¿De dónde ___ vosotros?', options: ['venís', 'venimos', 'vienen', 'vengo'], correct: 0 },
      { sentence: 'Mis padres ___ mañana.', options: ['vienen', 'venimos', 'vengo', 'viene'], correct: 0 },
      { sentence: 'Yo ___ de España.', options: ['vengo', 'vienes', 'viene', 'venimos'], correct: 0 },
      { sentence: '¿Tú ___ a la clase hoy?', options: ['vienes', 'vengo', 'viene', 'venimos'], correct: 0 },
      { sentence: 'Ella ___ de la escuela.', options: ['viene', 'vengo', 'vienes', 'vienen'], correct: 0 },
      { sentence: 'Nosotros ___ aquí todos los días.', options: ['venimos', 'vengo', 'vienen', 'viene'], correct: 0 }
    ]
  },

  'ex-3-1-13': {
    id: 'ex-3-1-13',
    type: 'grammar',
    title: 'Глагол DECIR: спряжение',
    description: 'Выберите правильную форму глагола DECIR',
    reviewTime: 10,
    questions: [
      { sentence: 'Yo siempre ___ la verdad.', options: ['digo', 'dices', 'dice', 'dicen'], correct: 0 },
      { sentence: '¿Qué ___ tú?', options: ['dices', 'digo', 'dice', 'decimos'], correct: 0 },
      { sentence: 'Mi madre ___ que tengo que estudiar.', options: ['dice', 'digo', 'dices', 'dicen'], correct: 0 },
      { sentence: 'Nosotros ___ "buenos días" por la mañana.', options: ['decimos', 'digo', 'dices', 'dicen'], correct: 0 },
      { sentence: '¿Qué ___ vosotros?', options: ['decís', 'decimos', 'dicen', 'digo'], correct: 0 },
      { sentence: 'Ellos ___ que vienen mañana.', options: ['dicen', 'decimos', 'digo', 'dice'], correct: 0 },
      { sentence: 'Yo no ___ mentiras.', options: ['digo', 'dices', 'dice', 'decimos'], correct: 0 },
      { sentence: '¿Qué ___ tu padre?', options: ['dice', 'digo', 'dices', 'dicen'], correct: 0 },
      { sentence: 'Tú ___ que estudias español.', options: ['dices', 'digo', 'dice', 'decimos'], correct: 0 },
      { sentence: 'Nosotros ___ "adiós" cuando salimos.', options: ['decimos', 'digo', 'dicen', 'dice'], correct: 0 }
    ]
  },

  'ex-3-1-14': {
    id: 'ex-3-1-14',
    type: 'translation',
    title: 'Перевод с русского на испанский',
    description: 'Переведите предложения с русского на испанский',
    reviewTime: 10,
    questions: [
      { russian: 'Мой сын молод, поэтому не женат, но у него есть невеста.', correct: 'Mi hijo es joven, por eso no está casado, pero tiene novia.', alternatives: ['Mi hijo es joven, por eso no está casado pero tiene novia', 'Mi hijo es joven por eso no está casado, pero tiene novia', 'Mi hijo es joven por eso no está casado pero tiene novia'] },
      { russian: 'Рикардо, ты где? — Я в баре, хочу пойти домой, но не могу.', correct: 'Ricardo, ¿dónde estás? — Estoy en el bar, quiero ir a casa, pero no puedo.', alternatives: ['Ricardo ¿dónde estás? Estoy en el bar, quiero ir a casa pero no puedo', '¿Ricardo, dónde estás? — Estoy en el bar, quiero ir a casa, pero no puedo'] },
      { russian: 'Мы идем пешком, потому что не спешим, у нас есть время.', correct: 'Vamos a pie porque no tenemos prisa, tenemos tiempo.', alternatives: ['Vamos a pie porque no tenemos prisa tenemos tiempo', 'Nosotros vamos a pie porque no tenemos prisa, tenemos tiempo', 'Nosotros vamos a pie porque no tenemos prisa tenemos tiempo'] },
      { russian: 'Откуда вы (vosotros) и кто вы по профессии? — Это Наталья, она из России, она — экономист, а я из Валенсии, я — инженер.', correct: '¿De dónde sois y qué sois de profesión? — Esta es Natalia, es de Rusia, es economista, y yo soy de Valencia, soy ingeniero.', alternatives: ['¿De dónde sois y qué sois de profesión? Esta es Natalia, es de Rusia, es economista y yo soy de Valencia, soy ingeniero', '¿De dónde sois y cuál es vuestra profesión? — Esta es Natalia, es de Rusia, es economista, y yo soy de Valencia, soy ingeniero'] },
      { russian: 'Отец спрашивает свою дочь, кем она хочет стать. Она говорит, что хочет быть актрисой.', correct: 'El padre pregunta a su hija qué quiere ser. Ella dice que quiere ser actriz.', alternatives: ['El padre pregunta a su hija qué quiere ser y ella dice que quiere ser actriz', 'El padre le pregunta a su hija qué quiere ser. Ella dice que quiere ser actriz'] },
      { russian: 'Они внимательно слушают преподавателя, потому что им надо написать статью на эту тему.', correct: 'Escuchan atentamente al profesor porque tienen que escribir un artículo sobre este tema.', alternatives: ['Ellos escuchan atentamente al profesor porque tienen que escribir un artículo sobre este tema', 'Escuchan con atención al profesor porque tienen que escribir un artículo sobre este tema'] },
      { russian: 'Ты собираешься позвонить своему другу, чтобы спросить, как он себя чувствует.', correct: 'Vas a llamar a tu amigo para preguntar cómo se siente.', alternatives: ['Tú vas a llamar a tu amigo para preguntar cómo se siente', 'Vas a llamar a tu amigo para preguntarle cómo se siente'] },
      { russian: 'Я звоню в дверь, но они не открывают. Я не понимаю, почему.', correct: 'Llamo a la puerta, pero no abren. No comprendo por qué.', alternatives: ['Yo llamo a la puerta, pero no abren. No comprendo por qué', 'Llamo a la puerta pero no abren. No entiendo por qué', 'Llamo a la puerta, pero no abren. No entiendo por qué'] },
      { russian: 'Когда ты приходишь домой рано, ты ешь, читаешь газеты, слушаешь радио и разговариваешь со своими друзьями по телефону.', correct: 'Cuando llegas a casa temprano, comes, lees periódicos, escuchas la radio y hablas con tus amigos por teléfono.', alternatives: ['Cuando vienes a casa temprano, comes, lees periódicos, escuchas la radio y hablas con tus amigos por teléfono', 'Cuando tú llegas a casa temprano, comes, lees periódicos, escuchas la radio y hablas con tus amigos por teléfono'] },
      { russian: 'У тебя новая машина? — Нет, она не моя. Это машина моего отца, у меня нет машины.', correct: '¿Tienes un coche nuevo? — No, no es mío. Es el coche de mi padre, no tengo coche.', alternatives: ['¿Tienes coche nuevo? — No, no es mío. Es el coche de mi padre, no tengo coche', '¿Tienes un coche nuevo? No, no es mío. Es el coche de mi padre, no tengo coche'] }
    ]
  },

  'ex-3-1-16': {
    id: 'ex-3-1-16',
    type: 'multi-part',
    title: 'Обобщение',
    description: 'Комплексное упражнение на повторение пройденного материала',
    reviewTime: 15,
    parts: [
      {
        id: 'part-1',
        title: 'Задание 1. Вставка предлогов',
        type: 'fillblank',
        description: 'Вставьте необходимые предлоги в пробелы',
        questions: [
          { sentence: 'Vamos ___ el gimnasio ___ metro.', correct: 'a, en', blanks: 2 },
          { sentence: 'Mi hermano está ___ Alemania, él no vuelve ___ casa.', correct: 'en, a', blanks: 2 },
          { sentence: 'Ella habla ___ teléfono ___ su jefe.', correct: 'por, con', blanks: 2 },
          { sentence: 'Compramos un regalo ___ nuestro hijo.', correct: 'para', blanks: 1 },
          { sentence: '¿Vas ___ pie ___ la escuela?', correct: 'a, a', blanks: 2 },
          { sentence: 'La ensalada es ___ verduras y macarrones.', correct: 'de', blanks: 1 }
        ]
      },
      {
        id: 'part-3',
        title: 'Задание 2. Перевод на испанский язык',
        type: 'translation',
        description: 'Переведите следующие фразы с русского на испанский язык',
        questions: [
          { russian: 'Мой ноутбук старый, а твой — новый.', correct: 'Mi portátil es viejo, y el tuyo es nuevo.', alternatives: ['Mi portátil es viejo y el tuyo es nuevo', 'Mi ordenador portátil es viejo, y el tuyo es nuevo'] },
          { russian: 'Их тетя живет в Испании, а наша — в Италии.', correct: 'Su tía vive en España, y la nuestra vive en Italia.', alternatives: ['Su tía vive en España y la nuestra vive en Italia', 'La tía de ellos vive en España, y la nuestra vive en Italia'] },
          { russian: 'Это их чемодан? — Нет, не их.', correct: '¿Esta es su maleta? — No, no es suya.', alternatives: ['¿Es su maleta? — No, no es suya', '¿Esta maleta es suya? — No, no es suya'] },
          { russian: 'Моей сестре 30 лет, а его — 25.', correct: 'Mi hermana tiene 30 años, y la suya tiene 25.', alternatives: ['Mi hermana tiene treinta años, y la suya tiene veinticinco', 'Mi hermana tiene 30 años y la suya tiene 25'] },
          { russian: 'Мы пьем чай с нашим дедушкой.', correct: 'Bebemos té con nuestro abuelo.', alternatives: ['Tomamos té con nuestro abuelo', 'Nosotros bebemos té con nuestro abuelo'] },
          { russian: 'Его друг живет хорошо. А Ваши (usted)?', correct: 'Su amigo vive bien. ¿Y los suyos?', alternatives: ['El amigo de él vive bien. ¿Y los suyos?', 'Su amigo vive bien. ¿Y sus amigos?'] }
        ]
      },
      {
        id: 'part-4',
        title: 'Задание 3. Спряжение глаголов',
        type: 'fillblank',
        description: 'Поставьте глаголы в скобках в соответствующую форму Настоящего времени',
        questions: [
          { sentence: '(Ser, yo) director de la empresa. (Tener, yo) 45 años.', verb: 'ser, tener', correct: 'Soy, Tengo', blanks: 2 },
          { sentence: '(Venir, vosotros) del trabajo tarde porque (trabajar) mucho.', verb: 'venir, trabajar', correct: 'Venís, trabajáis', blanks: 2 },
          { sentence: '(Querer, ellos) comer ahora, pero no (tener) tiempo.', verb: 'querer, tener', correct: 'Quieren, tienen', blanks: 2 },
          { sentence: '(Leer, tú) este artículo y (dar, tú) tu opinión.', verb: 'leer, dar', correct: 'Lees, das', blanks: 2 },
          { sentence: 'Usted (escribir) un libro. El libro (ser) muy largo.', verb: 'escribir, ser', correct: 'escribe, es', blanks: 2 },
          { sentence: 'Yo (oír) música. ¿(Poder, tú) subir el volumen?', verb: 'oír, poder', correct: 'oigo, Puedes', blanks: 2 },
          { sentence: '(Ir, nosotros) a la playa porque (estar) de vacaciones.', verb: 'ir, estar', correct: 'Vamos, estamos', blanks: 2 }
        ]
      },
      {
        id: 'part-6',
        title: 'Задание 4. Перевод с русского на испанский',
        type: 'translation',
        description: 'Переведите предложения с русского на испанский',
        questions: [
          { russian: 'Мой сын молод, поэтому не женат, но у него есть невеста.', correct: 'Mi hijo es joven, por eso no está casado, pero tiene novia.', alternatives: ['Mi hijo es joven, por eso no está casado pero tiene novia', 'Mi hijo es joven por eso no está casado, pero tiene novia', 'Mi hijo es joven por eso no está casado pero tiene novia'] },
          { russian: 'Рикардо, ты где? — Я в баре, хочу пойти домой, но не могу.', correct: 'Ricardo, ¿dónde estás? — Estoy en el bar, quiero ir a casa, pero no puedo.', alternatives: ['Ricardo ¿dónde estás? Estoy en el bar, quiero ir a casa pero no puedo', '¿Ricardo, dónde estás? — Estoy en el bar, quiero ir a casa, pero no puedo'] },
          { russian: 'Мы идем пешком, потому что не спешим, у нас есть время.', correct: 'Vamos a pie porque no tenemos prisa, tenemos tiempo.', alternatives: ['Vamos a pie porque no tenemos prisa tenemos tiempo', 'Nosotros vamos a pie porque no tenemos prisa, tenemos tiempo', 'Nosotros vamos a pie porque no tenemos prisa tenemos tiempo'] },
          { russian: 'Отец спрашивает свою дочь, кем она хочет стать. Она говорит, что хочет быть актрисой.', correct: 'El padre pregunta a su hija qué quiere ser. Ella dice que quiere ser actriz.', alternatives: ['El padre pregunta a su hija qué quiere ser y ella dice que quiere ser actriz', 'El padre le pregunta a su hija qué quiere ser. Ella dice que quiere ser actriz'] },
          { russian: 'Они внимательно слушают преподавателя, потому что им надо написать статью на эту тему.', correct: 'Escuchan atentamente al profesor porque tienen que escribir un artículo sobre este tema.', alternatives: ['Ellos escuchan atentamente al profesor porque tienen que escribir un artículo sobre este tema', 'Escuchan con atención al profesor porque tienen que escribir un artículo sobre este tema'] },
          { russian: 'Ты собираешься позвонить своему другу, чтобы спросить, как он себя чувствует.', correct: 'Vas a llamar a tu amigo para preguntar cómo se siente.', alternatives: ['Tú vas a llamar a tu amigo para preguntar cómo se siente', 'Vas a llamar a tu amigo para preguntarle cómo se siente'] },
          { russian: 'Я звоню в дверь, но они не открывают. Я не понимаю, почему.', correct: 'Llamo a la puerta, pero no abren. No comprendo por qué.', alternatives: ['Yo llamo a la puerta, pero no abren. No comprendo por qué', 'Llamo a la puerta pero no abren. No entiendo por qué', 'Llamo a la puerta, pero no abren. No entiendo por qué'] },
          { russian: 'У тебя новая машина? — Нет, она не моя. Это машина моего отца, у меня нет машины.', correct: '¿Tienes un coche nuevo? — No, no es mío. Es el coche de mi padre, no tengo coche.', alternatives: ['¿Tienes coche nuevo? — No, no es mío. Es el coche de mi padre, no tengo coche', '¿Tienes un coche nuevo? No, no es mío. Es el coche de mi padre, no tengo coche'] }
        ]
      }
    ]
  },

  // Módulo 3 Lección 1 - Упражнения на HAY и квантификаторы
  'ex-3-1-1': {
    id: 'ex-3-1-1',
    type: 'fillblank',
    title: 'Упражнение 1: Использование HAY',
    description: 'Вставьте hay или no hay в предложения',
    questions: [
      { sentence: 'En el salón ___ un sofá grande.', correct: 'hay', blanks: 1 },
      { sentence: 'En la cocina ___ un frigorífico.', correct: 'hay', blanks: 1 },
      { sentence: 'En mi dormitorio ___ una cama y un armario.', correct: 'hay', blanks: 1 },
      { sentence: 'En el baño ___ un espejo.', correct: 'hay', blanks: 1 },
      { sentence: 'En este piso ___ ascensor, solo escaleras.', correct: 'no hay', blanks: 1 },
      { sentence: 'En la mesa ___ libros y cuadernos.', correct: 'hay', blanks: 1 },
      { sentence: 'En el comedor ___ una mesa grande.', correct: 'hay', blanks: 1 },
      { sentence: 'En mi habitación ___ televisor.', correct: 'no hay', blanks: 1 },
      { sentence: 'En la pared ___ cuadros bonitos.', correct: 'hay', blanks: 1 },
      { sentence: 'En el despacho ___ un escritorio y una silla.', correct: 'hay', blanks: 1 },
      { sentence: 'En la entrada ___ un espejo grande.', correct: 'hay', blanks: 1 },
      { sentence: 'En el pasillo ___ ventanas.', correct: 'no hay', blanks: 1 },
      { sentence: 'En el suelo ___ una alfombra.', correct: 'hay', blanks: 1 },
      { sentence: 'En la cocina ___ una lavadora y un lavavajillas.', correct: 'hay', blanks: 1 },
      { sentence: 'En el salón ___ cortinas azules.', correct: 'hay', blanks: 1 }
    ]
  },

  'ex-3-1-2': {
    id: 'ex-3-1-2',
    type: 'fillblank',
    title: 'Упражнение 2: MUCHO / POCO (согласование)',
    description: 'Вставьте правильную форму mucho/mucha/muchos/muchas или poco/poca/pocos/pocas',
    questions: [
      { sentence: 'En mi casa hay ___ habitaciones. (mucho)', correct: 'muchas', blanks: 1 },
      { sentence: 'En la cocina hay ___ espacio. (poco)', correct: 'poco', blanks: 1 },
      { sentence: 'En el salón hay ___ muebles. (mucho)', correct: 'muchos', blanks: 1 },
      { sentence: 'En mi dormitorio hay ___ luz. (poco)', correct: 'poca', blanks: 1 },
      { sentence: 'Hay ___ sillas en el comedor. (mucho)', correct: 'muchas', blanks: 1 },
      { sentence: 'Tengo ___ tiempo libre. (poco)', correct: 'poco', blanks: 1 },
      { sentence: 'En la estantería hay ___ libros. (mucho)', correct: 'muchos', blanks: 1 },
      { sentence: 'En el frigorífico hay ___ comida. (poco)', correct: 'poca', blanks: 1 },
      { sentence: 'Hay ___ personas en la fiesta. (mucho)', correct: 'muchas', blanks: 1 },
      { sentence: 'Tenemos ___ dinero este mes. (poco)', correct: 'poco', blanks: 1 },
      { sentence: 'Hay ___ trabajo hoy. (mucho)', correct: 'mucho', blanks: 1 },
      { sentence: 'En la clase hay ___ estudiantes. (poco)', correct: 'pocos', blanks: 1 },
      { sentence: 'Hay ___ agua en el vaso. (poco)', correct: 'poca', blanks: 1 },
      { sentence: 'Tengo ___ amigos en esta ciudad. (mucho)', correct: 'muchos', blanks: 1 },
      { sentence: 'Hay ___ leche en el frigorífico. (poco)', correct: 'poca', blanks: 1 }
    ]
  },

  'ex-3-1-3': {
    id: 'ex-3-1-3',
    type: 'fillblank',
    title: 'Упражнение 3: MUY / MUCHO',
    description: 'Вставьте muy или mucho/mucha/muchos/muchas',
    questions: [
      { sentence: 'La casa es ___ grande.', correct: 'muy', blanks: 1 },
      { sentence: 'Trabajo ___ todos los días.', correct: 'mucho', blanks: 1 },
      { sentence: 'El piso es ___ cómodo.', correct: 'muy', blanks: 1 },
      { sentence: 'Me gusta ___ esta habitación.', correct: 'mucho', blanks: 1 },
      { sentence: 'Las cortinas son ___ bonitas.', correct: 'muy', blanks: 1 },
      { sentence: 'Leo ___ por las noches.', correct: 'mucho', blanks: 1 },
      { sentence: 'El sofá es ___ cómodo.', correct: 'muy', blanks: 1 },
      { sentence: 'Estudio español ___ .', correct: 'mucho', blanks: 1 },
      { sentence: 'La cocina es ___ moderna.', correct: 'muy', blanks: 1 },
      { sentence: 'Duermo ___ los fines de semana.', correct: 'mucho', blanks: 1 },
      { sentence: 'El dormitorio es ___ pequeño.', correct: 'muy', blanks: 1 },
      { sentence: 'Viajo ___ por trabajo.', correct: 'mucho', blanks: 1 },
      { sentence: 'La lámpara es ___ elegante.', correct: 'muy', blanks: 1 },
      { sentence: 'Hablo ___ por teléfono.', correct: 'mucho', blanks: 1 },
      { sentence: 'El cuadro es ___ interesante.', correct: 'muy', blanks: 1 }
    ]
  },

  'ex-3-1-4': {
    id: 'ex-3-1-4',
    type: 'fillblank',
    title: 'Упражнение 4: TANTO / TAN',
    description: 'Вставьте tan или tanto/tanta/tantos/tantas',
    questions: [
      { sentence: 'La casa es ___ bonita.', correct: 'tan', blanks: 1 },
      { sentence: 'Hay ___ muebles en el salón.', correct: 'tantos', blanks: 1 },
      { sentence: 'El piso es ___ grande.', correct: 'tan', blanks: 1 },
      { sentence: 'No tengo ___ tiempo.', correct: 'tanto', blanks: 1 },
      { sentence: 'Las habitaciones son ___ luminosas.', correct: 'tan', blanks: 1 },
      { sentence: 'Hay ___ personas aquí.', correct: 'tantas', blanks: 1 },
      { sentence: 'El sofá es ___ cómodo.', correct: 'tan', blanks: 1 },
      { sentence: '¿Por qué trabajas ___ ?', correct: 'tanto', blanks: 1 },
      { sentence: 'La cocina es ___ moderna.', correct: 'tan', blanks: 1 },
      { sentence: 'No necesito ___ cosas.', correct: 'tantas', blanks: 1 },
      { sentence: 'El espejo es ___ elegante.', correct: 'tan', blanks: 1 },
      { sentence: 'Tengo ___ libros que no sé dónde ponerlos.', correct: 'tantos', blanks: 1 },
      { sentence: 'La alfombra es ___ suave.', correct: 'tan', blanks: 1 },
      { sentence: 'No bebo ___ café.', correct: 'tanto', blanks: 1 },
      { sentence: 'El dormitorio es ___ acogedor.', correct: 'tan', blanks: 1 }
    ]
  },

  'ex-3-1-5': {
    id: 'ex-3-1-5',
    type: 'translation',
    title: 'Упражнение 5: Перевод (HAY + квантификаторы)',
    description: 'Переведите предложения с русского на испанский',
    questions: [
      { russian: 'В гостиной есть большой диван и много кресел.', correct: 'En el salón hay un sofá grande y muchos sillones.', alternatives: ['En el salón hay un sofá grande y muchas sillas', 'Hay un sofá grande y muchos sillones en el salón'] },
      { russian: 'В моей спальне очень мало мебели.', correct: 'En mi dormitorio hay muy pocos muebles.', alternatives: ['En mi dormitorio hay poca mebela', 'Hay muy pocos muebles en mi dormitorio'] },
      { russian: 'На кухне есть холодильник, газовая плита и микроволновая печь.', correct: 'En la cocina hay un frigorífico, una cocina de gas y un horno microondas.', alternatives: ['En la cocina hay frigorífico, cocina de gas y horno microondas', 'Hay un frigorífico, una cocina de gas y un horno microondas en la cocina'] },
      { russian: 'В этой квартире нет стиральной машины.', correct: 'En este apartamento no hay lavadora.', alternatives: ['En este piso no hay lavadora', 'No hay lavadora en este apartamento'] },
      { russian: 'В прихожей есть очень красивое зеркало.', correct: 'En el recibidor hay un espejo muy bonito.', alternatives: ['En la entrada hay un espejo muy bonito', 'Hay un espejo muy bonito en el recibidor'] },
      { russian: 'На стене так много картин!', correct: '¡En la pared hay tantos cuadros!', alternatives: ['¡Hay tantos cuadros en la pared!', 'En la pared hay muchos cuadros'] },
      { russian: 'В столовой нет стульев, только кресла.', correct: 'En el comedor no hay sillas, solo sillones.', alternatives: ['En el comedor no hay sillas solo sillones', 'No hay sillas en el comedor, solo sillones'] },
      { russian: 'Нужно купить новую кровать для спальни.', correct: 'Hay que comprar una cama nueva para el dormitorio.', alternatives: ['Hay que comprar cama nueva para el dormitorio', 'Es necesario comprar una cama nueva para el dormitorio'] },
      { russian: 'В кабинете есть письменный стол и много полок.', correct: 'En el despacho hay un escritorio y muchas estanterías.', alternatives: ['En el despacho hay escritorio y muchas estanterías', 'Hay un escritorio y muchas estanterías en el despacho'] },
      { russian: 'На полу такой красивый ковер!', correct: '¡En el suelo hay una alfombra tan bonita!', alternatives: ['¡Hay una alfombra tan bonita en el suelo!', 'En el suelo hay un tapete tan bonito'] },
      { russian: 'В ванной комнате очень мало места.', correct: 'En el cuarto de baño hay muy poco espacio.', alternatives: ['En el baño hay muy poco espacio', 'Hay muy poco espacio en el cuarto de baño'] },
      { russian: 'На этом этаже нет лифта.', correct: 'En este piso no hay ascensor.', alternatives: ['No hay ascensor en este piso', 'En esta planta no hay ascensor'] },
      { russian: 'В гостиной есть очень большой телевизор.', correct: 'En el salón hay un televisor muy grande.', alternatives: ['En la sala hay un televisor muy grande', 'Hay un televisor muy grande en el salón'] },
      { russian: 'В коридоре столько дверей!', correct: '¡En el pasillo hay tantas puertas!', alternatives: ['¡Hay tantas puertas en el pasillo!', 'En el pasillo hay muchas puertas'] },
      { russian: 'Нужно убрать эти вещи с дивана.', correct: 'Hay que quitar estas cosas del sofá.', alternatives: ['Es necesario quitar estas cosas del sofá', 'Hay que sacar estas cosas del sofá'] }
    ]
  },

  // Módulo 3 Lección 2 - Упражнения на предлоги и неправильные глаголы
  'ex-3-2-1': {
    id: 'ex-3-2-1',
    type: 'fillblank',
    title: 'Упражнение 1: Предлоги места',
    description: 'Вставьте подходящий предлог места',
    questions: [
      { sentence: 'El banco está ___ la farmacia y la panadería.', correct: 'entre', blanks: 1 },
      { sentence: 'El supermercado está ___ mi casa.', correct: 'cerca de', blanks: 1 },
      { sentence: 'La estación está ___ el centro de la ciudad.', correct: 'lejos de', blanks: 1 },
      { sentence: 'El cine está ___ del teatro.', correct: 'enfrente', blanks: 1 },
      { sentence: 'La biblioteca está ___ la escuela.', correct: 'al lado de', blanks: 1 },
      { sentence: 'Hay un parque ___ de mi edificio.', correct: 'delante', blanks: 1 },
      { sentence: 'El restaurante está ___ del museo.', correct: 'detrás', blanks: 1 },
      { sentence: 'La lámpara está ___ la mesa.', correct: 'encima de', blanks: 1 },
      { sentence: 'El gato está ___ la cama.', correct: 'debajo de', blanks: 1 },
      { sentence: 'Los niños están ___ la casa jugando.', correct: 'dentro de', blanks: 1 },
      { sentence: 'El perro está ___ el jardín.', correct: 'fuera de', blanks: 1 },
      { sentence: 'El hospital está ___ de la plaza.', correct: 'cerca', blanks: 1 },
      { sentence: 'Vivo ___ la oficina de correos.', correct: 'al lado de', blanks: 1 },
      { sentence: 'La iglesia está ___ el ayuntamiento.', correct: 'enfrente de', blanks: 1 },
      { sentence: 'Hay un cuadro ___ del sofá.', correct: 'encima', blanks: 1 }
    ]
  },

  'ex-3-2-2': {
    id: 'ex-3-2-2',
    type: 'fillblank',
    title: 'Упражнение 2: Предлоги времени',
    description: 'Вставьте antes de, después de или durante',
    questions: [
      { sentence: '___ comer, siempre me lavo las manos.', correct: 'Antes de', blanks: 1 },
      { sentence: '___ la clase, el profesor hace preguntas.', correct: 'Durante', blanks: 1 },
      { sentence: '___ trabajar, voy al gimnasio.', correct: 'Después de', blanks: 1 },
      { sentence: '___ dormir, leo un libro.', correct: 'Antes de', blanks: 1 },
      { sentence: '___ las vacaciones, viajamos mucho.', correct: 'Durante', blanks: 1 },
      { sentence: '___ desayunar, bebo café.', correct: 'Después de', blanks: 1 },
      { sentence: '___ salir, apago las luces.', correct: 'Antes de', blanks: 1 },
      { sentence: '___ la película, no hablo.', correct: 'Durante', blanks: 1 },
      { sentence: '___ cenar, veo la televisión.', correct: 'Después de', blanks: 1 },
      { sentence: '___ estudiar, preparo mis libros.', correct: 'Antes de', blanks: 1 },
      { sentence: '___ el viaje, duermo en el avión.', correct: 'Durante', blanks: 1 },
      { sentence: '___ la cena, lavo los platos.', correct: 'Después de', blanks: 1 },
      { sentence: '___ entrar, llamo a la puerta.', correct: 'Antes de', blanks: 1 },
      { sentence: '___ el invierno, hace mucho frío.', correct: 'Durante', blanks: 1 },
      { sentence: '___ levantarme, me ducho.', correct: 'Después de', blanks: 1 }
    ]
  },

  'ex-3-2-3': {
    id: 'ex-3-2-3',
    type: 'fillblank',
    title: 'Упражнение 3: Глагол HACER',
    description: 'Поставьте глагол hacer в правильную форму',
    questions: [
      { sentence: 'Yo ___ los deberes por la tarde.', verb: 'hacer', correct: 'hago', blanks: 1 },
      { sentence: 'Tú ___ la cama cada mañana.', verb: 'hacer', correct: 'haces', blanks: 1 },
      { sentence: 'Él ___ preguntas en clase.', verb: 'hacer', correct: 'hace', blanks: 1 },
      { sentence: 'Nosotros ___ ejercicio todos los días.', verb: 'hacer', correct: 'hacemos', blanks: 1 },
      { sentence: 'Vosotros ___ la comida juntos.', verb: 'hacer', correct: 'hacéis', blanks: 1 },
      { sentence: 'Ellos ___ un viaje a España.', verb: 'hacer', correct: 'hacen', blanks: 1 },
      { sentence: '¿Qué ___ (tú) este fin de semana?', verb: 'hacer', correct: 'haces', blanks: 1 },
      { sentence: 'Yo siempre ___ mi trabajo bien.', verb: 'hacer', correct: 'hago', blanks: 1 },
      { sentence: 'María ___ yoga por las mañanas.', verb: 'hacer', correct: 'hace', blanks: 1 },
      { sentence: 'Nosotros ___ las maletas para el viaje.', verb: 'hacer', correct: 'hacemos', blanks: 1 },
      { sentence: '¿___ (vosotros) deporte?', verb: 'hacer', correct: 'Hacéis', blanks: 1 },
      { sentence: 'Los estudiantes ___ muchas preguntas.', verb: 'hacer', correct: 'hacen', blanks: 1 },
      { sentence: 'Yo ___ la compra los sábados.', verb: 'hacer', correct: 'hago', blanks: 1 },
      { sentence: 'Tú ___ mucho ruido.', verb: 'hacer', correct: 'haces', blanks: 1 },
      { sentence: 'Mi padre ___ el café por la mañana.', verb: 'hacer', correct: 'hace', blanks: 1 }
    ]
  },

  'ex-3-2-4': {
    id: 'ex-3-2-4',
    type: 'fillblank',
    title: 'Упражнение 4: Глагол PONER',
    description: 'Поставьте глагол poner в правильную форму',
    questions: [
      { sentence: 'Yo ___ la mesa para cenar.', verb: 'poner', correct: 'pongo', blanks: 1 },
      { sentence: 'Tú ___ la música muy alta.', verb: 'poner', correct: 'pones', blanks: 1 },
      { sentence: 'Ella ___ los libros en la estantería.', verb: 'poner', correct: 'pone', blanks: 1 },
      { sentence: 'Nosotros ___ las flores en el jarrón.', verb: 'poner', correct: 'ponemos', blanks: 1 },
      { sentence: 'Vosotros ___ la televisión por la noche.', verb: 'poner', correct: 'ponéis', blanks: 1 },
      { sentence: 'Ellos ___ los platos en el lavavajillas.', verb: 'poner', correct: 'ponen', blanks: 1 },
      { sentence: '¿Dónde ___ (tú) las llaves?', verb: 'poner', correct: 'pones', blanks: 1 },
      { sentence: 'Yo ___ la ropa en el armario.', verb: 'poner', correct: 'pongo', blanks: 1 },
      { sentence: 'Mi madre ___ sal en la comida.', verb: 'poner', correct: 'pone', blanks: 1 },
      { sentence: 'Nosotros ___ atención en clase.', verb: 'poner', correct: 'ponemos', blanks: 1 },
      { sentence: '¿___ (vosotros) las sillas en su lugar?', verb: 'poner', correct: 'Ponéis', blanks: 1 },
      { sentence: 'Los niños ___ los juguetes en la caja.', verb: 'poner', correct: 'ponen', blanks: 1 },
      { sentence: 'Yo siempre ___ las cosas en orden.', verb: 'poner', correct: 'pongo', blanks: 1 },
      { sentence: 'Tú ___ mucho azúcar en el café.', verb: 'poner', correct: 'pones', blanks: 1 },
      { sentence: 'El profesor ___ ejemplos en la pizarra.', verb: 'poner', correct: 'pone', blanks: 1 }
    ]
  },

  'ex-3-2-5': {
    id: 'ex-3-2-5',
    type: 'fillblank',
    title: 'Упражнение 5: Глагол DAR',
    description: 'Поставьте глагол dar в правильную форму',
    questions: [
      { sentence: 'Yo ___ un paseo por el parque.', verb: 'dar', correct: 'doy', blanks: 1 },
      { sentence: 'Tú ___ clases de español.', verb: 'dar', correct: 'das', blanks: 1 },
      { sentence: 'Él ___ las gracias a todos.', verb: 'dar', correct: 'da', blanks: 1 },
      { sentence: 'Nosotros ___ una fiesta el sábado.', verb: 'dar', correct: 'damos', blanks: 1 },
      { sentence: 'Vosotros ___ la mano cuando saludáis.', verb: 'dar', correct: 'dais', blanks: 1 },
      { sentence: 'Ellos ___ regalos en Navidad.', verb: 'dar', correct: 'dan', blanks: 1 },
      { sentence: '¿___ (tú) un paseo cada día?', verb: 'dar', correct: 'Das', blanks: 1 },
      { sentence: 'Yo ___ mi opinión cuando es necesario.', verb: 'dar', correct: 'doy', blanks: 1 },
      { sentence: 'La profesora ___ explicaciones claras.', verb: 'dar', correct: 'da', blanks: 1 },
      { sentence: 'Nosotros ___ las noticias a la familia.', verb: 'dar', correct: 'damos', blanks: 1 },
      { sentence: '¿___ (vosotros) los buenos días?', verb: 'dar', correct: 'Dais', blanks: 1 },
      { sentence: 'Los padres ___ consejos a sus hijos.', verb: 'dar', correct: 'dan', blanks: 1 },
      { sentence: 'Yo ___ las llaves al portero.', verb: 'dar', correct: 'doy', blanks: 1 },
      { sentence: 'Tú ___ mucha importancia a los detalles.', verb: 'dar', correct: 'das', blanks: 1 },
      { sentence: 'Mi hermano ___ recuerdos a todos.', verb: 'dar', correct: 'da', blanks: 1 }
    ]
  },

  'ex-3-2-6': {
    id: 'ex-3-2-6',
    type: 'fillblank',
    title: 'Упражнение 6: Глаголы SABER, SALIR, VER',
    description: 'Поставьте глагол в правильную форму',
    questions: [
      { sentence: 'Yo ___ hablar francés.', verb: 'saber', correct: 'sé', blanks: 1 },
      { sentence: 'Nosotros ___ de casa a las ocho.', verb: 'salir', correct: 'salimos', blanks: 1 },
      { sentence: 'Ellos ___ la televisión por la noche.', verb: 'ver', correct: 'ven', blanks: 1 },
      { sentence: '¿___ (tú) dónde está el banco?', verb: 'saber', correct: 'Sabes', blanks: 1 },
      { sentence: 'Yo ___ con mis amigos los viernes.', verb: 'salir', correct: 'salgo', blanks: 1 },
      { sentence: 'Nosotros ___ muchas películas.', verb: 'ver', correct: 'vemos', blanks: 1 },
      { sentence: 'María ___ tocar el piano.', verb: 'saber', correct: 'sabe', blanks: 1 },
      { sentence: 'Vosotros ___ tarde del trabajo.', verb: 'salir', correct: 'salís', blanks: 1 },
      { sentence: 'Yo ___ a mis padres cada semana.', verb: 'ver', correct: 'veo', blanks: 1 },
      { sentence: 'Ellos ___ la verdad.', verb: 'saber', correct: 'saben', blanks: 1 },
      { sentence: 'El tren ___ a las tres.', verb: 'salir', correct: 'sale', blanks: 1 },
      { sentence: '¿___ (vosotros) el problema?', verb: 'ver', correct: 'Veis', blanks: 1 },
      { sentence: '¿___ (usted) cocinar?', verb: 'saber', correct: 'Sabe', blanks: 1 },
      { sentence: 'Tú ___ mucho en el periódico.', verb: 'salir', correct: 'sales', blanks: 1 },
      { sentence: 'Mi hermana ___ todo desde su ventana.', verb: 'ver', correct: 've', blanks: 1 }
    ]
  },

  'ex-3-2-7': {
    id: 'ex-3-2-7',
    type: 'fillblank',
    title: 'Упражнение 7: Глаголы CABER, CAER, TRAER',
    description: 'Поставьте глагол в правильную форму',
    questions: [
      { sentence: 'Yo no ___ en este coche pequeño.', verb: 'caber', correct: 'quepo', blanks: 1 },
      { sentence: 'Las hojas ___ de los árboles en otoño.', verb: 'caer', correct: 'caen', blanks: 1 },
      { sentence: 'Yo ___ el pan de la panadería.', verb: 'traer', correct: 'traigo', blanks: 1 },
      { sentence: '¿___ (tú) en el ascensor?', verb: 'caber', correct: 'Cabes', blanks: 1 },
      { sentence: 'Tú siempre ___ cuando esquías.', verb: 'caer', correct: 'caes', blanks: 1 },
      { sentence: 'Nosotros ___ vino para la cena.', verb: 'traer', correct: 'traemos', blanks: 1 },
      { sentence: 'Todos ___ en el autobús.', verb: 'caber', correct: 'caben', blanks: 1 },
      { sentence: 'Yo ___ bien a todos.', verb: 'caer', correct: 'caigo', blanks: 1 },
      { sentence: '¿Qué ___ (vosotros) a la fiesta?', verb: 'traer', correct: 'traéis', blanks: 1 },
      { sentence: 'Esta mesa no ___ en la habitación.', verb: 'caber', correct: 'cabe', blanks: 1 },
      { sentence: 'La lluvia ___ sobre el tejado.', verb: 'caer', correct: 'cae', blanks: 1 },
      { sentence: 'Los estudiantes ___ sus libros a clase.', verb: 'traer', correct: 'traen', blanks: 1 },
      { sentence: 'Nosotros ___ en este taxi.', verb: 'caber', correct: 'cabemos', blanks: 1 },
      { sentence: 'Vosotros ___ mal a mi hermano.', verb: 'caer', correct: 'caéis', blanks: 1 },
      { sentence: 'Tú ___ buenas noticias.', verb: 'traer', correct: 'traes', blanks: 1 }
    ]
  },

  'ex-3-2-8': {
    id: 'ex-3-2-8',
    type: 'fillblank',
    title: 'Упражнение 8: Смешанные предлоги и глаголы',
    description: 'Вставьте предлог или глагол в правильной форме',
    questions: [
      { sentence: 'Voy al banco ___ sacar dinero.', correct: 'para', blanks: 1 },
      { sentence: 'Yo ___ (hacer) la compra los domingos.', verb: 'hacer', correct: 'hago', blanks: 1 },
      { sentence: 'El restaurante está ___ el cine.', correct: 'cerca del', blanks: 1 },
      { sentence: 'Nosotros ___ (poner) la mesa antes de comer.', verb: 'poner', correct: 'ponemos', blanks: 1 },
      { sentence: '___ la tarde, estudio español.', correct: 'Por', blanks: 1 },
      { sentence: 'Ellos ___ (dar) un paseo cada día.', verb: 'dar', correct: 'dan', blanks: 1 },
      { sentence: 'La farmacia está ___ de la panadería.', correct: 'al lado', blanks: 1 },
      { sentence: 'Yo ___ (salir) de casa temprano.', verb: 'salir', correct: 'salgo', blanks: 1 },
      { sentence: '___ estudiar, descanso un poco.', correct: 'Después de', blanks: 1 },
      { sentence: 'Tú ___ (ver) muchas películas.', verb: 'ver', correct: 'ves', blanks: 1 },
      { sentence: 'El parque está ___ mi casa.', correct: 'delante de', blanks: 1 },
      { sentence: 'Nosotros ___ (saber) la respuesta.', verb: 'saber', correct: 'sabemos', blanks: 1 },
      { sentence: '___ la clase, el profesor explica la gramática.', correct: 'Durante', blanks: 1 },
      { sentence: 'Yo ___ (traer) el postre a la cena.', verb: 'traer', correct: 'traigo', blanks: 1 },
      { sentence: 'Vivo ___ la estación de metro.', correct: 'lejos de', blanks: 1 }
    ]
  },

  'ex-3-2-9': {
    id: 'ex-3-2-9',
    type: 'transformation',
    title: 'Упражнение 9: Трансформация предложений',
    description: 'Измените форму глагола согласно новому подлежащему',
    questions: [
      { russian: 'Yo hago ejercicio. → Nosotros', correct: 'Nosotros hacemos ejercicio.', alternatives: ['nosotros hacemos ejercicio'] },
      { russian: 'Tú pones la mesa. → Él', correct: 'Él pone la mesa.', alternatives: ['él pone la mesa'] },
      { russian: 'Ella da un paseo. → Yo', correct: 'Yo doy un paseo.', alternatives: ['yo doy un paseo'] },
      { russian: 'Nosotros sabemos la verdad. → Tú', correct: 'Tú sabes la verdad.', alternatives: ['tú sabes la verdad'] },
      { russian: 'Vosotros salís tarde. → Ellos', correct: 'Ellos salen tarde.', alternatives: ['ellos salen tarde'] },
      { russian: 'Ellos ven la televisión. → Yo', correct: 'Yo veo la televisión.', alternatives: ['yo veo la televisión'] },
      { russian: 'Yo quepo en el coche. → Nosotros', correct: 'Nosotros cabemos en el coche.', alternatives: ['nosotros cabemos en el coche'] },
      { russian: 'Tú caes bien. → Ellos', correct: 'Ellos caen bien.', alternatives: ['ellos caen bien'] },
      { russian: 'Él trae el vino. → Yo', correct: 'Yo traigo el vino.', alternatives: ['yo traigo el vino'] },
      { russian: 'Nosotros hacemos preguntas. → Ella', correct: 'Ella hace preguntas.', alternatives: ['ella hace preguntas'] },
      { russian: 'Vosotros ponéis atención. → Tú', correct: 'Tú pones atención.', alternatives: ['tú pones atención'] },
      { russian: 'Ellos dan las gracias. → Yo', correct: 'Yo doy las gracias.', alternatives: ['yo doy las gracias'] },
      { russian: 'Yo sé cocinar. → Vosotros', correct: 'Vosotros sabéis cocinar.', alternatives: ['vosotros sabéis cocinar'] },
      { russian: 'Tú sales con amigos. → Nosotros', correct: 'Nosotros salimos con amigos.', alternatives: ['nosotros salimos con amigos'] },
      { russian: 'Ella ve el problema. → Ellos', correct: 'Ellos ven el problema.', alternatives: ['ellos ven el problema'] }
    ]
  },

  'ex-3-2-10': {
    id: 'ex-3-2-10',
    type: 'translation',
    title: 'Упражнение 10: Перевод с русского на испанский',
    description: 'Переведите предложения с русского на испанский',
    questions: [
      { russian: 'Банк находится рядом с аптекой.', correct: 'El banco está al lado de la farmacia.', alternatives: ['El banco está cerca de la farmacia', 'El banco queda al lado de la farmacia'] },
      { russian: 'Я делаю домашнее задание после ужина.', correct: 'Hago los deberes después de cenar.', alternatives: ['Yo hago los deberes después de cenar', 'Hago la tarea después de cenar'] },
      { russian: 'Во время урока мы задаем много вопросов.', correct: 'Durante la clase hacemos muchas preguntas.', alternatives: ['Durante la clase preguntamos mucho', 'Nosotros hacemos muchas preguntas durante la clase'] },
      { russian: 'Мы гуляем по парку каждый день.', correct: 'Damos un paseo por el parque cada día.', alternatives: ['Nosotros damos un paseo por el parque cada día', 'Paseamos por el parque cada día'] },
      { russian: 'Она накрывает на стол перед едой.', correct: 'Ella pone la mesa antes de comer.', alternatives: ['Pone la mesa antes de comer'] },
      { russian: 'Я знаю, где находится музей.', correct: 'Sé dónde está el museo.', alternatives: ['Yo sé dónde está el museo', 'Sé dónde se encuentra el museo'] },
      { russian: 'Они выходят из дома рано утром.', correct: 'Salen de casa temprano por la mañana.', alternatives: ['Ellos salen de casa temprano por la mañana', 'Salen de la casa temprano por la mañana'] },
      { russian: 'Я вижу своих друзей каждую неделю.', correct: 'Veo a mis amigos cada semana.', alternatives: ['Yo veo a mis amigos cada semana', 'Veo a mis amigos todas las semanas'] },
      { russian: 'Мы не помещаемся в этой маленькой машине.', correct: 'No cabemos en este coche pequeño.', alternatives: ['Nosotros no cabemos en este coche pequeño', 'No cabemos en este auto pequeño'] },
      { russian: 'Я приношу хлеб из пекарни.', correct: 'Traigo el pan de la panadería.', alternatives: ['Yo traigo el pan de la panadería', 'Traigo pan de la panadería'] },
      { russian: 'Супермаркет находится напротив школы.', correct: 'El supermercado está enfrente de la escuela.', alternatives: ['El supermercado queda enfrente de la escuela', 'El supermercado está frente a la escuela'] },
      { russian: 'Перед сном я читаю книгу.', correct: 'Antes de dormir leo un libro.', alternatives: ['Leo un libro antes de dormir', 'Antes de acostarme leo un libro'] },
      { russian: 'Мы делаем упражнения каждое утро.', correct: 'Hacemos ejercicio cada mañana.', alternatives: ['Nosotros hacemos ejercicio cada mañana', 'Hacemos ejercicios cada mañana'] },
      { russian: 'Они хорошо относятся ко мне.', correct: 'Me caen bien.', alternatives: ['Ellos me caen bien', 'Caen bien conmigo'] },
      { russian: 'Вокзал находится далеко от центра города.', correct: 'La estación está lejos del centro de la ciudad.', alternatives: ['La estación queda lejos del centro de la ciudad', 'La estación de tren está lejos del centro'] }
    ]
  },

  'ex-3-2-11': {
    id: 'ex-3-2-11',
    type: 'translation',
    title: 'Упражнение 11: Перевод (повторение грамматики модулей 1-3)',
    description: 'Переведите предложения с русского на испанский',
    questions: [
      { russian: 'Я не знаю, где живет твой друг. Можешь написать его адрес?', correct: 'No sé dónde vive tu amigo. ¿Puedes escribir su dirección?', alternatives: ['No sé donde vive tu amigo. Puedes escribir su dirección', 'No sé dónde vive tu amigo. ¿Puedes escribir su domicilio?'] },
      { russian: 'Почему здесь так шумно? — У соседей сегодня праздник. Не надо обращать внимание на шум.', correct: '¿Por qué hay tanto ruido aquí? — Los vecinos tienen una fiesta hoy. No hay que hacer caso del ruido.', alternatives: ['¿Por qué está tan ruidoso aquí? — Los vecinos dan una fiesta hoy. No hay que hacer caso al ruido', '¿Por qué hace tanto ruido aquí? — Los vecinos tienen fiesta hoy. No hay que prestar atención al ruido'] },
      { russian: 'Марта спешит, у нее мало времени, она собирает чемодан и едет на вокзал на такси.', correct: 'Marta tiene prisa, tiene poco tiempo, hace la maleta y va a la estación en taxi.', alternatives: ['Marta tiene prisa, no tiene mucho tiempo, hace la maleta y va a la estación en taxi', 'Marta se apresura, tiene poco tiempo, hace la maleta y va a la estación en taxi'] },
      { russian: 'Когда мы видим (встречаем) дона Антонио, он всегда передает привет нашим родителям.', correct: 'Cuando vemos a don Antonio, siempre da recuerdos a nuestros padres.', alternatives: ['Cuando vemos a don Antonio, él siempre da recuerdos a nuestros padres', 'Cuando encontramos a don Antonio, siempre da recuerdos a nuestros padres'] },
      { russian: 'Бабушка не включает телевизор, потому что плохо видит. Я включаю радио, и мы слушаем новости.', correct: 'La abuela no pone la televisión porque ve mal. Yo pongo la radio y escuchamos las noticias.', alternatives: ['La abuela no pone la tele porque ve mal. Pongo la radio y escuchamos las noticias', 'Mi abuela no pone la televisión porque ve mal. Yo pongo la radio y escuchamos noticias'] },
      { russian: 'Мой сын не умеет читать, но знает много стихов.', correct: 'Mi hijo no sabe leer, pero sabe muchas poesías.', alternatives: ['Mi hijo no sabe leer pero sabe muchos poemas', 'Mi hijo no sabe leer, pero conoce muchas poesías'] },
      { russian: 'Когда ты приходишь на работу, всегда приносишь сегодняшние газеты.', correct: 'Cuando vienes al trabajo, siempre traes los periódicos de hoy.', alternatives: ['Cuando llegas al trabajo, siempre traes los periódicos del día', 'Cuando vienes a trabajar, siempre traes los periódicos de hoy'] },
      { russian: 'Мы видим, что он не умеет танцевать, поэтому падает.', correct: 'Vemos que no sabe bailar, por eso cae.', alternatives: ['Vemos que él no sabe bailar, por eso cae', 'Vemos que no sabe bailar por eso cae'] },
      { russian: 'Я навожу порядок в твоем кабинете, Анна накрывает на стол, а ты ничего не делаешь. Почему? — Не хочу.', correct: 'Pongo orden en tu despacho, Ana pone la mesa, y tú no haces nada. ¿Por qué? — No quiero.', alternatives: ['Yo pongo orden en tu despacho, Ana pone la mesa y tú no haces nada. ¿Por qué? — No quiero', 'Pongo orden en tu oficina, Ana pone la mesa, y tú no haces nada. ¿Por qué? — No quiero'] },
      { russian: 'Их окна выходят во двор. Они видят, когда их сосед выходит из дома и когда приходит.', correct: 'Sus ventanas dan al patio. Ven cuando su vecino sale de casa y cuando llega.', alternatives: ['Sus ventanas dan al patio. Ellos ven cuando su vecino sale de casa y cuando viene', 'Las ventanas de ellos dan al patio. Ven cuando su vecino sale de la casa y cuando llega'] }
    ]
  },

  // Módulo 3 Lección 3 - Упражнения на местоимения и глагол gustar
  'ex-3-3-1': {
    id: 'ex-3-3-1',
    type: 'fillblank',
    title: 'Упражнение 1: Местоимения дательного падежа (косвенное дополнение)',
    description: 'Вставьте подходящее местоимение: me, te, le, nos, os, les',
    questions: [
      { sentence: 'Mi madre ___ da dinero a mí.', correct: 'me', blanks: 1 },
      { sentence: '¿Qué ___ digo a ti?', correct: 'te', blanks: 1 },
      { sentence: 'El profesor ___ explica la lección a nosotros.', correct: 'nos', blanks: 1 },
      { sentence: 'Yo ___ escribo una carta a ella.', correct: 'le', blanks: 1 },
      { sentence: '¿___ compras un regalo a ellos?', correct: 'Les', blanks: 1 },
      { sentence: 'Mis amigos ___ traen flores a mí.', correct: 'me', blanks: 1 },
      { sentence: 'El camarero ___ trae la cuenta a vosotros.', correct: 'os', blanks: 1 },
      { sentence: 'Yo siempre ___ digo la verdad a ti.', correct: 'te', blanks: 1 },
      { sentence: 'Nosotros ___ damos las gracias a usted.', correct: 'le', blanks: 1 },
      { sentence: 'Ella ___ lee un cuento a los niños.', correct: 'les', blanks: 1 }
    ]
  },

  'ex-3-3-2': {
    id: 'ex-3-3-2',
    type: 'fillblank',
    title: 'Упражнение 2: Глагол GUSTAR',
    description: 'Поставьте глагол gustar в правильную форму',
    questions: [
      { sentence: 'A mí me ___ el café.', correct: 'gusta', blanks: 1 },
      { sentence: 'A ti te ___ los perros.', correct: 'gustan', blanks: 1 },
      { sentence: 'A ella le ___ bailar.', correct: 'gusta', blanks: 1 },
      { sentence: 'A nosotros nos ___ las películas españolas.', correct: 'gustan', blanks: 1 },
      { sentence: 'A vosotros os ___ estudiar español.', correct: 'gusta', blanks: 1 },
      { sentence: 'A ellos les ___ los libros de aventuras.', correct: 'gustan', blanks: 1 },
      { sentence: '¿Te ___ esta ciudad?', correct: 'gusta', blanks: 1 },
      { sentence: 'No me ___ los lunes.', correct: 'gustan', blanks: 1 },
      { sentence: 'A Juan le ___ cocinar.', correct: 'gusta', blanks: 1 },
      { sentence: 'A mis padres les ___ viajar.', correct: 'gusta', blanks: 1 }
    ]
  },

  'ex-3-3-3': {
    id: 'ex-3-3-3',
    type: 'fillblank',
    title: 'Упражнение 3: Местоимения винительного падежа (прямое дополнение)',
    description: 'Вставьте подходящее местоимение: me, te, lo, la, nos, os, los, las',
    questions: [
      { sentence: '¿Ves a María? — Sí, ___ veo.', correct: 'la', blanks: 1 },
      { sentence: '¿Compras el libro? — Sí, ___ compro.', correct: 'lo', blanks: 1 },
      { sentence: 'Ella ___ llama a mí todos los días.', correct: 'me', blanks: 1 },
      { sentence: '¿___ escuchas a nosotros?', correct: 'Nos', blanks: 1 },
      { sentence: 'Yo ___ veo a ti en el parque.', correct: 'te', blanks: 1 },
      { sentence: '¿Conoces a mis hermanos? — Sí, ___ conozco.', correct: 'los', blanks: 1 },
      { sentence: '¿Tienes las llaves? — Sí, ___ tengo.', correct: 'las', blanks: 1 },
      { sentence: 'El profesor ___ enseña español a vosotros.', correct: 'os', blanks: 1 },
      { sentence: '¿Entiendes la pregunta? — No, no ___ entiendo.', correct: 'la', blanks: 1 },
      { sentence: 'Mis padres ___ invitan a cenar a nosotros.', correct: 'nos', blanks: 1 }
    ]
  },

  'ex-3-3-4': {
    id: 'ex-3-3-4',
    type: 'fillblank',
    title: 'Упражнение 4: Одновременное употребление местоимений',
    description: 'Замените существительные местоимениями. Используйте se lo, se la, se los, se las, me lo, te la и т.д.',
    questions: [
      { sentence: 'Doy el libro a Juan. → ___ ___ doy.', correct: 'Se lo', blanks: 1 },
      { sentence: 'Compro las flores a ti. → ___ ___ compro.', correct: 'Te las', blanks: 1 },
      { sentence: 'Mi madre da la llave a mí. → Mi madre ___ ___ da.', correct: 'me la', blanks: 1 },
      { sentence: 'Explicamos la lección a ellos. → ___ ___ explicamos.', correct: 'Se la', blanks: 1 },
      { sentence: 'Traes los libros a nosotros. → ___ ___ traes.', correct: 'Nos los', blanks: 1 },
      { sentence: 'El camarero trae el café a ella. → El camarero ___ ___ trae.', correct: 'se lo', blanks: 1 },
      { sentence: 'Escribo una carta a ustedes. → ___ ___ escribo.', correct: 'Se la', blanks: 1 },
      { sentence: '¿Das el dinero a mí? → ¿___ ___ das?', correct: 'Me lo', blanks: 1 },
      { sentence: 'Enseño las fotos a vosotros. → ___ ___ enseño.', correct: 'Os las', blanks: 1 },
      { sentence: 'Ellos cuentan la historia a nosotros. → Ellos ___ ___ cuentan.', correct: 'nos la', blanks: 1 }
    ]
  },

  'ex-3-3-5': {
    id: 'ex-3-3-5',
    type: 'transformation',
    title: 'Упражнение 5: Замена существительного местоимением',
    description: 'Замените выделенное существительное местоимением винительного падежа',
    questions: [
      { sentence: 'Veo a mi amiga en la calle.', answer: 'La veo en la calle.' },
      { sentence: 'Compro el periódico cada día.', answer: 'Lo compro cada día.' },
      { sentence: 'Llamo a mis padres por teléfono.', answer: 'Los llamo por teléfono.' },
      { sentence: 'Estudiamos las lecciones por la tarde.', answer: 'Las estudiamos por la tarde.' },
      { sentence: 'Ellos conocen a Juan.', answer: 'Ellos lo conocen.' },
      { sentence: 'Mi hermana lee el libro.', answer: 'Mi hermana lo lee.' },
      { sentence: '¿Tienes las entradas?', answer: '¿Las tienes?' },
      { sentence: 'No entiendo la pregunta.', answer: 'No la entiendo.' },
      { sentence: 'Invitamos a María a la fiesta.', answer: 'La invitamos a la fiesta.' },
      { sentence: 'El profesor explica la gramática.', answer: 'El profesor la explica.' }
    ]
  },

  'ex-3-3-6': {
    id: 'ex-3-3-6',
    type: 'fillblank',
    title: 'Упражнение 6: Смешанная практика местоимений',
    description: 'Вставьте правильное местоимение (дательный или винительный падеж)',
    questions: [
      { sentence: 'A mí ___ gusta el chocolate.', correct: 'me', blanks: 1 },
      { sentence: '¿Ves a Carlos? — Sí, ___ veo.', correct: 'lo', blanks: 1 },
      { sentence: 'Mi padre ___ da dinero a mí.', correct: 'me', blanks: 1 },
      { sentence: '¿Conoces esta canción? — Sí, ___ conozco.', correct: 'la', blanks: 1 },
      { sentence: 'El profesor ___ explica la lección a nosotros.', correct: 'nos', blanks: 1 },
      { sentence: '¿Tienes los libros? — Sí, ___ tengo.', correct: 'los', blanks: 1 },
      { sentence: 'A ellos ___ gustan las películas de acción.', correct: 'les', blanks: 1 },
      { sentence: 'Yo ___ llamo a ti mañana.', correct: 'te', blanks: 1 },
      { sentence: '¿Ves a mis hermanas? — No, no ___ veo.', correct: 'las', blanks: 1 },
      { sentence: 'A nosotros ___ gusta viajar.', correct: 'nos', blanks: 1 }
    ]
  },

  'ex-3-3-7': {
    id: 'ex-3-3-7',
    type: 'fillblank',
    title: 'Упражнение 7: Местоимения с инфинитивом и герундием',
    description: 'Вставьте местоимение в правильное место (слитно с инфинитивом/герундием)',
    questions: [
      { sentence: 'Quiero hacer___ un regalo. (te)', correct: 'te', blanks: 1 },
      { sentence: 'Voy a llamar___ mañana. (la)', correct: 'la', blanks: 1 },
      { sentence: 'Estoy explicándo___ la lección. (les)', correct: 'les', blanks: 1 },
      { sentence: 'Necesito dar___ el libro. (le)', correct: 'le', blanks: 1 },
      { sentence: 'Está mirando___ desde la ventana. (nos)', correct: 'nos', blanks: 1 },
      { sentence: 'Quiero comprar___ en esta tienda. (los)', correct: 'los', blanks: 1 },
      { sentence: 'Voy a decir___ la verdad. (te)', correct: 'te', blanks: 1 },
      { sentence: 'Estoy escribiendo___ un correo. (le)', correct: 'le', blanks: 1 },
      { sentence: 'Puedo traer___ las llaves. (os)', correct: 'os', blanks: 1 },
      { sentence: 'Está enseñándo___ español. (me)', correct: 'me', blanks: 1 }
    ]
  },

  'ex-3-3-8': {
    id: 'ex-3-3-8',
    type: 'fillblank',
    title: 'Упражнение 8: Глаголы типа gustar (encantar, interesar, doler)',
    description: 'Вставьте правильное местоимение и форму глагола',
    questions: [
      { sentence: 'A mí ___ ___ la música clásica. (encantar)', correct: 'me encanta', blanks: 1 },
      { sentence: 'A ti ___ ___ los idiomas. (interesar)', correct: 'te interesan', blanks: 1 },
      { sentence: 'A ella ___ ___ la cabeza. (doler)', correct: 'le duele', blanks: 1 },
      { sentence: 'A nosotros ___ ___ viajar. (encantar)', correct: 'nos encanta', blanks: 1 },
      { sentence: 'A vosotros ___ ___ las matemáticas. (interesar)', correct: 'os interesan', blanks: 1 },
      { sentence: 'A ellos ___ ___ los pies. (doler)', correct: 'les duelen', blanks: 1 },
      { sentence: '¿A ti ___ ___ el arte moderno? (interesar)', correct: 'te interesa', blanks: 1 },
      { sentence: 'A mi hermana ___ ___ bailar. (encantar)', correct: 'le encanta', blanks: 1 },
      { sentence: 'A mí ___ ___ el estómago. (doler)', correct: 'me duele', blanks: 1 },
      { sentence: 'A mis padres ___ ___ las novelas históricas. (encantar)', correct: 'les encantan', blanks: 1 }
    ]
  },

  'ex-3-3-9': {
    id: 'ex-3-3-9',
    type: 'fillblank',
    title: 'Упражнение 9: Выбор правильного местоимения',
    description: 'Выберите и вставьте правильное местоимение',
    questions: [
      { sentence: '___ gusta el café. (A mí)', correct: 'Me', blanks: 1 },
      { sentence: 'Veo a María y ___ saludo.', correct: 'la', blanks: 1 },
      { sentence: 'Mi profesor ___ explica la gramática. (a nosotros)', correct: 'nos', blanks: 1 },
      { sentence: '¿Tienes el libro? — Sí, ___ tengo aquí.', correct: 'lo', blanks: 1 },
      { sentence: 'Doy el regalo a Juan. → ___ ___ doy.', correct: 'Se lo', blanks: 1 },
      { sentence: 'A ellos ___ encantan los deportes.', correct: 'les', blanks: 1 },
      { sentence: '¿Conoces a mis hermanos? — No, no ___ conozco.', correct: 'los', blanks: 1 },
      { sentence: 'El camarero ___ trae el menú. (a vosotros)', correct: 'os', blanks: 1 },
      { sentence: 'Compro flores y ___ pongo en el jarrón.', correct: 'las', blanks: 1 },
      { sentence: 'Mi madre ___ da consejos. (a mí)', correct: 'me', blanks: 1 }
    ]
  },

  'ex-3-3-10': {
    id: 'ex-3-3-10',
    type: 'transformation',
    title: 'Упражнение 10: Утвердительные и отрицательные предложения',
    description: 'Преобразуйте утвердительное предложение в отрицательное, сохраняя местоимения',
    questions: [
      { sentence: 'Me gusta el invierno.', answer: 'No me gusta el invierno.' },
      { sentence: 'Lo veo todos los días.', answer: 'No lo veo todos los días.' },
      { sentence: 'Te escribo cartas.', answer: 'No te escribo cartas.' },
      { sentence: 'Nos explica la lección.', answer: 'No nos explica la lección.' },
      { sentence: 'La conozco bien.', answer: 'No la conozco bien.' },
      { sentence: 'Les gusta bailar.', answer: 'No les gusta bailar.' },
      { sentence: 'Os doy el dinero.', answer: 'No os doy el dinero.' },
      { sentence: 'Los invitamos a la fiesta.', answer: 'No los invitamos a la fiesta.' },
      { sentence: 'Me lo das.', answer: 'No me lo das.' },
      { sentence: 'Se la explicamos.', answer: 'No se la explicamos.' }
    ]
  },

  'ex-3-3-11': {
    id: 'ex-3-3-11',
    type: 'fillblank',
    title: 'Упражнение 11: Местоимения в контексте',
    description: 'Вставьте правильное местоимение дательного падежа',
    questions: [
      { sentence: 'Mi abuela ___ cuenta historias interesantes a nosotros.', correct: 'nos', blanks: 1 },
      { sentence: 'El médico ___ pregunta a mí sobre mi salud.', correct: 'me', blanks: 1 },
      { sentence: '¿Por qué no ___ dices la verdad a mí?', correct: 'me', blanks: 1 },
      { sentence: 'Yo ___ presto dinero a ti cuando lo necesitas.', correct: 'te', blanks: 1 },
      { sentence: 'El guía turístico ___ muestra la ciudad a ellos.', correct: 'les', blanks: 1 },
      { sentence: 'Nosotros ___ mandamos un paquete a vosotros.', correct: 'os', blanks: 1 },
      { sentence: 'El profesor ___ enseña español a ella.', correct: 'le', blanks: 1 },
      { sentence: '¿___ compras un regalo a tu hermana?', correct: 'Le', blanks: 1 },
      { sentence: 'Mis padres ___ dan buenos consejos a mí.', correct: 'me', blanks: 1 },
      { sentence: 'Yo ___ escribo correos electrónicos a ustedes.', correct: 'les', blanks: 1 }
    ]
  },

  'ex-3-3-12': {
    id: 'ex-3-3-12',
    type: 'fillblank',
    title: 'Упражнение 12: Местоимения в контексте',
    description: 'Вставьте правильное местоимение винительного падежа',
    questions: [
      { sentence: '¿Dónde está mi móvil? — ___ tienes en la mano.', correct: 'Lo', blanks: 1 },
      { sentence: '¿Conoces a Ana y María? — Sí, ___ conozco del colegio.', correct: 'las', blanks: 1 },
      { sentence: 'Este libro es muy interesante. Necesito leer___.', correct: 'lo', blanks: 1 },
      { sentence: '¿Ves a mi hermano en la foto? — Sí, ___ veo al lado de tu padre.', correct: 'lo', blanks: 1 },
      { sentence: '¿Tienes las entradas para el concierto? — No, no ___ tengo todavía.', correct: 'las', blanks: 1 },
      { sentence: 'Mi hermana ___ llama a mí todos los domingos.', correct: 'me', blanks: 1 },
      { sentence: '¿___ puedes ayudar a nosotros con los deberes?', correct: 'Nos', blanks: 1 },
      { sentence: 'Vuestros amigos ___ buscan a vosotros.', correct: 'os', blanks: 1 },
      { sentence: 'Esta canción es bonita. Quiero escuchar___ otra vez.', correct: 'la', blanks: 1 },
      { sentence: '¿Entiendes estos ejercicios? — Sí, ___ entiendo bien.', correct: 'los', blanks: 1 }
    ]
  },

  'ex-3-3-13': {
    id: 'ex-3-3-13',
    type: 'fillblank',
    title: 'Упражнение 13: Комбинированные местоимения (продвинутый уровень)',
    description: 'Вставьте правильную комбинацию местоимений',
    questions: [
      { sentence: '¿Me das la llave? — Sí, ___ ___ doy ahora.', correct: 'te la', blanks: 1 },
      { sentence: 'Mi padre compra un coche a mi hermano. → Mi padre ___ ___ compra.', correct: 'se lo', blanks: 1 },
      { sentence: '¿Nos traes las bebidas? — Claro, ___ ___ traigo.', correct: 'os las', blanks: 1 },
      { sentence: 'Le doy los regalos a María. → ___ ___ doy.', correct: 'Se los', blanks: 1 },
      { sentence: 'Te mando un mensaje. → ___ ___ mando.', correct: 'Te lo', blanks: 1 },
      { sentence: 'Ellos nos explican las reglas. → Ellos ___ ___ explican.', correct: 'nos las', blanks: 1 },
      { sentence: 'Les enseño mi casa a ustedes. → ___ ___ enseño.', correct: 'Se la', blanks: 1 },
      { sentence: '¿Me prestas tu bicicleta? — Sí, ___ ___ presto.', correct: 'te la', blanks: 1 },
      { sentence: 'Doy las llaves a vosotros. → ___ ___ doy.', correct: 'Os las', blanks: 1 },
      { sentence: 'El camarero le sirve el café a ella. → El camarero ___ ___ sirve.', correct: 'se lo', blanks: 1 }
    ]
  },

  'ex-3-3-14': {
    id: 'ex-3-3-14',
    type: 'fillblank',
    title: 'Упражнение 14: Обобщающая практика',
    description: 'Комплексное упражнение на все типы местоимений',
    questions: [
      { sentence: 'A mis amigos ___ encanta viajar.', correct: 'les', blanks: 1 },
      { sentence: '¿Ves el error? — Sí, ___ veo perfectamente.', correct: 'lo', blanks: 1 },
      { sentence: 'Mi profesora ___ explica la gramática muy bien.', correct: 'nos', blanks: 1 },
      { sentence: 'Compro flores para mamá y ___ ___ doy por la mañana.', correct: 'se las', blanks: 1 },
      { sentence: '¿___ gusta este restaurante?', correct: 'Te', blanks: 1 },
      { sentence: 'Necesito hablar contigo. Voy a llamar___ esta noche.', correct: 'te', blanks: 1 },
      { sentence: '¿Conoces a estas chicas? — No, no ___ conozco.', correct: 'las', blanks: 1 },
      { sentence: 'Mis abuelos ___ mandan postales desde España.', correct: 'nos', blanks: 1 },
      { sentence: 'Tengo tu libro. ___ ___ devuelvo mañana.', correct: 'Te lo', blanks: 1 },
      { sentence: 'A nosotros no ___ interesa este tema.', correct: 'nos', blanks: 1 }
    ]
  },

  'ex-3-3-15': {
    id: 'ex-3-3-15',
    type: 'translation',
    title: 'Упражнение 15: Перевод с русского на испанский',
    description: 'Переведите предложения с русского на испанский, используя грамматику и лексику модулей 1-3',
    questions: [
      { russian: 'Мне нравится этот город, потому что здесь много парков и музеев.', correct: 'Me gusta esta ciudad porque aquí hay muchos parques y museos.', alternatives: ['Me gusta esta ciudad porque hay muchos parques y museos aquí', 'Me gusta esta ciudad, porque aquí hay muchos parques y museos'] },
      { russian: 'Моя сестра звонит мне каждый день и рассказывает о своей работе.', correct: 'Mi hermana me llama cada día y me cuenta sobre su trabajo.', alternatives: ['Mi hermana me llama todos los días y me habla de su trabajo', 'Mi hermana me llama cada día y me habla sobre su trabajo'] },
      { russian: 'Я не вижу твою сумку. Где она?', correct: 'No veo tu bolso. ¿Dónde está?', alternatives: ['No veo tu bolsa. ¿Dónde está?', 'No veo tu bolso. ¿Dónde está él?'] },
      { russian: 'Учитель объясняет нам новую грамматику, но мы ее не понимаем.', correct: 'El profesor nos explica la gramática nueva, pero no la entendemos.', alternatives: ['El profesor nos explica la nueva gramática, pero no la entendemos', 'El maestro nos explica la gramática nueva pero no la entendemos'] },
      { russian: 'Хуан покупает цветы и дарит их своей маме.', correct: 'Juan compra flores y se las da a su madre.', alternatives: ['Juan compra flores y se las regala a su madre', 'Juan compra flores y se las da a su mamá'] },
      { russian: 'Им очень нравится испанский язык, они изучают его каждый день.', correct: 'A ellos les gusta mucho el español, lo estudian cada día.', alternatives: ['Les gusta mucho el español, lo estudian cada día', 'A ellos les gusta mucho el español, lo estudian todos los días'] },
      { russian: 'Где находится твоя квартира? — Она находится в центре города, рядом с банком.', correct: '¿Dónde está tu piso? — Está en el centro de la ciudad, al lado del banco.', alternatives: ['¿Dónde está tu apartamento? — Está en el centro, al lado del banco', '¿Dónde se encuentra tu piso? — Está en el centro de la ciudad, al lado del banco'] },
      { russian: 'Мы хотим арендовать квартиру с двумя спальнями и балконом.', correct: 'Queremos alquilar un piso con dos dormitorios y balcón.', alternatives: ['Queremos alquilar un apartamento con dos dormitorios y balcón', 'Queremos alquilar un piso de dos dormitorios con balcón'] },
      { russian: 'Моему брату нужна мебель для новой квартиры. Я помогаю ему ее выбирать.', correct: 'Mi hermano necesita muebles para el piso nuevo. Le ayudo a elegirlos.', alternatives: ['A mi hermano le hacen falta muebles para su piso nuevo. Yo le ayudo a elegirlos', 'Mi hermano necesita muebles para su apartamento nuevo. Le ayudo a escogerlos'] },
      { russian: 'Официант приносит нам меню, и мы заказываем кофе с молоком.', correct: 'El camarero nos trae el menú y pedimos café con leche.', alternatives: ['El camarero nos trae la carta y pedimos café con leche', 'El mesero nos trae el menú y pedimos café con leche'] },
      { russian: 'Ты знаешь этих студентов? — Да, я их знаю. Они учатся в моем университете.', correct: '¿Conoces a estos estudiantes? — Sí, los conozco. Estudian en mi universidad.', alternatives: ['¿Conoces a estos estudiantes? — Sí, yo los conozco. Ellos estudian en mi universidad', '¿Conoces estos estudiantes? — Sí, los conozco. Estudian en mi universidad'] },
      { russian: 'Мои родители живут далеко от города, но часто приезжают к нам в гости.', correct: 'Mis padres viven lejos de la ciudad, pero vienen a visitarnos a menudo.', alternatives: ['Mis padres viven lejos de la ciudad pero nos visitan a menudo', 'Mis padres viven lejos de la ciudad, pero vienen a vernos a menudo'] },
      { russian: 'Перед ужином я накрываю на стол, а после ужина мою посуду.', correct: 'Antes de cenar pongo la mesa y después de cenar lavo los platos.', alternatives: ['Antes de la cena pongo la mesa y después de la cena lavo los platos', 'Antes de cenar pongo la mesa y después de cenar friego los platos'] },
      { russian: 'В этом районе много магазинов, кафе и ресторанов. Мне очень нравится здесь жить.', correct: 'En este barrio hay muchas tiendas, cafeterías y restaurantes. Me gusta mucho vivir aquí.', alternatives: ['En este barrio hay muchas tiendas, cafés y restaurantes. Me encanta vivir aquí', 'En esta zona hay muchas tiendas, cafeterías y restaurantes. Me gusta mucho vivir aquí'] },
      { russian: 'Бабушка дает мне ключи от квартиры и просит полить цветы.', correct: 'La abuela me da las llaves del piso y me pide regar las flores.', alternatives: ['Mi abuela me da las llaves del apartamento y me pide regar las plantas', 'La abuela me da las llaves de la casa y me pide regar las flores'] }
    ]
  }
}
