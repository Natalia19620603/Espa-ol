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
    lessons: ['lesson-1-1', 'lesson-1-2', 'lesson-1-3', 'lesson-1-4'],
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
    title: 'Модуль 3',
    level: 'beginner',
    lessons: ['lesson-3-1', 'lesson-3-2', 'lesson-3-3'],
    description: ''
  },
  'module-4': {
    id: 'module-4',
    title: 'Модуль 4',
    level: 'elementary',
    lessons: ['lesson-4-1', 'lesson-4-2', 'lesson-4-3'],
    description: ''
  },
  'module-5': {
    id: 'module-5',
    title: 'Модуль 5',
    level: 'elementary',
    lessons: ['lesson-5-1', 'lesson-5-2', 'lesson-5-3'],
    description: ''
  },
  'module-6': {
    id: 'module-6',
    title: 'Модуль 6',
    level: 'elementary',
    lessons: ['lesson-6-1', 'lesson-6-2', 'lesson-6-3'],
    description: ''
  },
  'module-7': {
    id: 'module-7',
    title: 'Модуль 7',
    level: 'intermediate',
    lessons: ['lesson-7-1', 'lesson-7-2', 'lesson-7-3'],
    description: ''
  },
  'module-8': {
    id: 'module-8',
    title: 'Модуль 8',
    level: 'intermediate',
    lessons: ['lesson-8-1', 'lesson-8-2', 'lesson-8-3'],
    description: ''
  },
  'module-9': {
    id: 'module-9',
    title: 'Модуль 9',
    level: 'intermediate',
    lessons: ['lesson-9-1', 'lesson-9-2', 'lesson-9-3'],
    description: ''
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

## § 1. Гласные звуки

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

## § 2. Согласные звуки

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

## Слова для отработки произношения

### a) f, l, m, n, p, t, ll

papá, mamá, Ana, Anita, Nina, Pepe, Pepita, Timoteo, apetito, patata, tomo, tema, tipo, moto, foto, fama, mono, mano, mina, mapa, malo, puma, ama, pampa, pino, fumo, fino, Felipe, teléfono, Lina, Elena, Lima, Lola, Lolita, luna, alumno, plomo, pluma, pleno, mal, tal, mil, papel, final, alma, pulpo, alto, alpino, alfana

lloro [льoро] / [йоро], gallina [гальина] / [гайина], llanto [льанто] / [йанто], billete [бильетэ] / [бийетэ], detalle [дэталье] / [дэтайе], millón [мильон] / [мийон], batalla [батальа] / [батайа], botella [ботэльа] / [ботейа], paella [паэльа] / [паэйа], tortilla [тортильа] / [тортийа]

### b) s, c, z, h, ch

asunto, peseta, museo, estilo, poesía, Alfonso, Susana, asno, mismo, turismo, cena, cine, zapato, zona, azul, plaza, paz, lápiz, ceniza, Azucena, ascensor, suceso, dieciséis, necesito, francesa, fascismo, escena, cereza, Asunción

hola, ahora, historia, heroísmo, hospital, hablar, himno, humor, prohibir, deshecho

poncho, muchacho, mucho, techo, machete, Chile, lucha, plancha, mochila, chimenea

### c) b, v, d

bomba, vela, hombre, vino, invito, Barcelona, Valencia, nube, sabor, lavar, labor, cava, Cuba, La Habana

dama, documento, defecto, donde, andando, aldea, Aldo, padre, moneda, soldado, facultad, universidad, Madrid, edad

### d) ñ, y, r, rr

señor, español, señorita, doña, niño, madrileño, brasileño

yate, mayo, playa, desayuno, proyecto, leyenda, yodo

teatro, ópera, tractor, árabe, director, torero, actriz, ramo, rosa, zorro, corrida, párrafo, reportero, Rafael

### e) g, j, q, k, x

goma, ganso, gusano, emigrante, hidalgo, Miguel, malagueño, guillotina, pingüino, cigüeña

genial, álgebra, original, jefe, gitano, Jorge, garaje, ingeniero, gigante, reloj

quinto, cuatro, quince, poco, pequeño, ecologista, queso, equipaje, quiero, queja

taxi, examen, texto, extra, experimento, exótico, excelente, éxito, oxígeno, México

## Скороговорки

1. Tú tío Timoteo toma té. [Ту тио тимотэо тома тэ]
2. La sopa sin sal está sosa. [Ла сопа син саль эста соса]
3. Los sucesos se suceden sin cesar. [Лос суθэсос сэ суθэдэн син θэсар]
4. César y Susana necesitan cinco lápices azules. [θэсар и сусана нэθэситан θинко лапиθэс аθулэс]

## § 3. Дифтонги и трифтонги

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

## § 4. Слогоделение

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

## Правила ударения

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
    exercises: ['ex-1-1-1', 'ex-1-1-2', 'ex-1-1-3', 'ex-1-1-4', 'ex-1-1-5-syn', 'ex-1-1-6-ctx']
  },
  'lesson-1-2': {
    id: 'lesson-1-2',
    title: 'Урок 2: Имя существительное. Артикль. Прилагательное',
    moduleId: 'module-1',
    grammar: {
      title: 'Имя существительное. Артикль',
      content: `
# 1. Имя существительное

В испанском языке существительные имеют категорию рода. Все существительные делятся на мужской род (masculino) и женский род (femenino).

## Род существительных

Большинство существительных, оканчивающихся на гласную **-о**, относятся к мужскому роду, в то время как большинство существительных, оканчивающихся на гласную **-а**, относятся к женскому роду:

**masculino (m) / femenino (f)**

- chico (мальчик) — chica (девочка)
- amigo (друг) — amiga (подруга)
- hermano (брат) — casa (дом)
- libro (книга) — alumna (ученица)
- museo (музей) — playa (пляж)

### Исключения:

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

### Существительные на -е

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

### Существительные на согласную

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
- el economista (экономист-мужчина), la economista (экономист-женщина)

## Число существительных (Множественное число)

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

### Существительные, употребляемые только в единственном или множественном числе

В испанском языке есть ряд существительных, которые употребляются только в единственном числе или только во множественном числе:
- salud f (здоровье)
- hambre f (голод)
- dinero m (деньги)
- vacaciones f (каникулы)

# 2. Артикль

Артикль — маленькое служебное слово, которое играет роль определения существительного, указывая его род и число. Артикли делятся на определенные и неопределенные.

## Определенный артикль

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
- lo bueno (хорошее)

## Неопределенный артикль

Неопределенный артикль указывает на то, что существительное упоминается впервые, не знакомо говорящему, или употребляется, когда говорится об одном предмете, относящемся к целому классу аналогичных предметов. Неопределенный артикль единственного и множественного числа употребляется также для обозначения количества предметов (несколько), или если за существительным следует определение.

| Число | Мужской род | Женский род |
|-------|-------------|-------------|
| Единственное | un | una |
| Множественное | unos | unas |

**Примеры:**
- un libro (какой-то один) — unos libros (несколько)
- una casa (какой-то один) — unas casas (несколько)
- una flor bonita (красивый цветок)
- un día difícil (трудный день)

## Особый случай употребления артикля

В испанском языке есть ряд существительных женского рода, начинающихся с ударной гласной **"а"** или **"ha"**, перед которыми в единственном числе следует ставить артикль мужского рода (**el**), чтобы избежать неблагозвучного стечения гласных. Во множественном числе артикль используется женского рода (**las**).

- el alma (душа) — las almas
- el ama (хозяйка) — las amas
- el agua (вода) — las aguas
- el águila (орел) — las águilas
- el aula (аудитория) — las aulas

## Имя прилагательное (El adjetivo)

### Согласование

Испанские прилагательные согласуются в роде и числе с существительными, которые они определяют.

### Группы прилагательных

Испанские прилагательные делятся на две основные группы:

#### 1. Прилагательные двух окончаний

Эти прилагательные имеют окончание **-о** в форме мужского рода единственного числа и окончание **-а** в форме женского рода единственного числа.

| Мужской род | Женский род | Перевод |
|-------------|-------------|---------|
| blanco | blanca | белый / белая |
| negro | negra | черный / черная |

**Исключение:** Прилагательные, обозначающие национальность/происхождение, также имеют две формы, даже если оканчиваются на согласную:

| Мужской род | Женский род | Пример |
|-------------|-------------|--------|
| un amigo español | una amiga española | испанский друг / испанская подруга |
| un estudiante alemán | una estudiante alemana | немецкий студент / немецкая студентка |

**Примеры прилагательных двух окончаний:**

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

#### 2. Прилагательные одного окончания

Прилагательные, оканчивающиеся в единственном числе на другую гласную (кроме **-о**) или на согласную, имеют одинаковую форму как в женском, так и в мужском роде.

| Прилагательное | Мужской род (Пример) | Женский род (Пример) |
|----------------|---------------------|---------------------|
| azul | un lápiz azul (синий карандаш) | una flor azul (синий цветок) |
| verde | un coche verde (зеленый автомобиль) | una casa verde (зеленый дом) |
| feliz | un hombre feliz | una mujer feliz |

**Примеры прилагательных одного окончания:**

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

### Позиция прилагательного

В отличие от русского языка, испанские прилагательные, как правило, ставятся **после** определяемого существительного:

- un libro interesante (интересная книга)
- una casa blanca (белый дом)

#### Прилагательные, меняющие позицию

Качественные прилагательные **bueno** (хороший), **malo** (плохой), **grande** (большой, в значении «великий») иногда могут стоять перед определяемым словом.

### Усеченные формы (Apócope)

#### Grande → Gran

Прилагательное **grande** имеет усеченную форму **gran** перед существительными как мужского, так и женского рода:

- una gran idea (великая идея)
- un gran desafío (великий вызов)

#### Bueno/Malo → Buen/Mal

Прилагательные **bueno** и **malo** имеют усеченные формы **buen** и **mal** только перед существительными мужского рода единственного числа:

| Полная форма (После сущ.) | Усеченная форма (Перед сущ.) | Сравнение значений |
|---------------------------|-----------------------------|--------------------|
| un hombre bueno (хороший человек) | un buen hombre (добрый человек) | Часто меняется от физического качества к моральному. |
| un hombre malo (плохой человек) | un mal hombre (злой человек) | |

### Образование множественного числа

Прилагательные, оканчивающиеся на **гласную**, образуют множественное число с помощью окончания **-s**:

- blanco → blancos
- española → españolas
- verde → verdes

Прилагательные, оканчивающиеся на **согласную**, образуют множественное число с помощью окончания **-es**:

- azul → azules
- español → españoles
- regular → regulares

### Прилагательные-антонимы

| Антонимы (Испанский) | Антонимы (Русский) |
|----------------------|--------------------|
| bueno / malo | хороший / плохой |
| guapo / feo | красивый / некрасивый |
| gordo / delgado | толстый / стройный |
| largo / corto | длинный / короткий |
| joven / viejo | молодой / старый |
| regular / raro | обычный / странный |
| nuevo / viejo / antiguo | новый / старый |
| grande / pequeño | большой / маленький |
| caro / barato | дорогой / дешевый |
| caliente / frío | горячий / холодный |
| casado / soltero | женатый / холостой |
| alegre / triste | веселый / грустный |
| alto / bajo | высокий / невысокий |
| difícil / fácil | трудный / легкий |
| rico / pobre | богатый / бедный |
      `,
      examples: []
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
      content: `
# Личные местоимения (Pronombres personales)

## Формы в именительном падеже

Испанские личные местоимения в именительном падеже (субъектные местоимения) имеют следующие формы:

| Лицо | Единственное число | Множественное число |
|------|-------------------|---------------------|
| 1-е лицо | yo (я) | nosotros (мы, м.р./смеш. группа) |
| | | nosotras (мы, ж.р.) |
| 2-е лицо | tú (ты) | vosotros (вы, м.р./смеш. группа) |
| | | vosotras (вы, ж.р.) |
| 3-е лицо | él (он) | ellos (они, м.р./смеш. группа) |
| | ella (она) | ellas (они, ж.р.) |
| Вежливая форма | usted (Вы, ед.ч.) | ustedes (Вы, мн.ч.) |

## Родовое различие во множественном числе

В отличие от русского языка, личные местоимения во множественном числе различаются по родам:

- **nosotros, vosotros, ellos** используются для группы, состоящей из лиц мужского пола или смешанной группы (мужчины + женщины).
- **nosotras, vosotras, ellas** используются только для группы, состоящей исключительно из лиц женского пола.

## Вежливые формы

Местоимение **usted** (ед.ч., Вы) и **ustedes** (мн.ч., Вы) – это сокращения от архаичной формы Vuestra Merced (Ваша милость).

Поэтому они всегда употребляются с глаголами в форме третьего лица (например: Usted comprende — Вы понимаете, буквально: Ваша милость понимает).

При письме вежливые формы часто сокращаются:
- Единственное число: **Ud.** или **Vd.**
- Множественное число: **Uds.** или **Vds.**

## Употребление местоимений

Личные местоимения (кроме вежливых форм) в устной и письменной речи, как правило, опускаются, так как лицо глагола ясно по его спряжению.

Они используются только в случаях, когда:
- Есть противопоставление (например: **Yo leo, pero tú escribes** — Я читаю, а ты пишешь).
- Местоимение является логическим или грамматическим центром фразы (для акцента или ясности).

# § 5. Глаголы SER и ESTAR

Глаголы **ser** и **estar** оба переводятся как «быть», «являться», «находиться», но используются в разных контекстах. Оба глагола выполняют роль глагола-связки, которая обязательна в испанском предложении (в отличие от русского).

## Глагол SER (быть, являться)

### Спряжение в настоящем времени (Presente de Indicativo)

| Местоимение | Форма SER |
|-------------|-----------|
| yo | soy |
| tú | eres |
| él, ella, usted | es |
| nosotros, nosotras | somos |
| vosotros, vosotras | sois |
| ellos, ellas, ustedes | son |

### Употребление Ser

Ser используется для обозначения постоянных, неотъемлемых характеристик, то есть того, что определяет подлежащее:

| Контекст | Пример | Перевод |
|----------|--------|---------|
| Имя или фамилия | Soy Pablo. | Меня зовут Павел. |
| Родственные связи | Don Juan es el padre de José. | Дон Хуан — отец Хосе. |
| Происхождение/Национальность | Yo soy ruso. Soy de Moscú. | Я — русский. Я из Москвы. |
| Род занятий/Профессия | Ana es economista. | Анна — экономист. |
| Качество (характер, свойство) | Somos jóvenes. José es alegre. | Мы — молоды. Хосе веселый (по характеру). |

## Глагол ESTAR (быть, находиться)

### Спряжение в настоящем времени (Presente de Indicativo)

| Местоимение | Форма ESTAR |
|-------------|-------------|
| yo | estoy |
| tú | estás |
| él, ella, usted | está |
| nosotros, nosotras | estamos |
| vosotros, vosotras | estáis |
| ellos, ellas, ustedes | están |

### Употребление Estar

Estar используется для обозначения временных состояний, положений или местонахождения:

| Контекст | Пример | Перевод |
|----------|--------|---------|
| Местонахождение | Los amigos están en la playa. | Друзья (находятся) на пляже. |
| | Nosotros estamos en casa. | Мы (находимся) дома. |
| Временный признак/состояние | Lola está enferma. | Лола больна (сейчас). |
| Самочувствие | Estoy bien. | Я хорошо себя чувствую. |
| Временная эмоция | Usted está contento. José está alegre. | Вы довольны (в данный момент). Хосе весел (в данный момент). |

## Сравнение Ser и Estar

Некоторые прилагательные могут сочетаться с обоими глаголами, но при этом меняется смысл высказывания, так как Ser говорит о постоянном качестве, а Estar — о временном состоянии:

| SER (Постоянное качество) | ESTAR (Временное состояние) |
|---------------------------|----------------------------|
| José es alegre. (Хосе веселый по характеру.) | José está alegre. (Хосе весел в данный момент.) |
| Pilar es guapa. (Пилар красивая в целом.) | Pilar está guapa. (Пилар нарядная/хорошо выглядит сейчас.) |
| Es una cuestión regular. (Обычный вопрос.) | Estoy regular. (Я неважно себя чувствую.) |
      `
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
      content: `
В этом уроке мы изучаем, как говорить о профессиях, странах и национальностях на испанском языке. Все новые слова вы найдете в разделе "Словарь".

## Род и число профессий

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

## Национальности: род и согласование

**Национальности на -o/-a:**
- ruso (русский) → rusa (русская)
- italiano (итальянец) → italiana (итальянка)

**Национальности на согласную добавляют -a для женского рода:**
- español (испанец) → española (испанка)
- francés (француз) → francesa (француженка)
- alemán (немец) → alemana (немка)

**Национальности на -e или -í не изменяются:**
- belga (бельгиец/бельгийка)
- marroquí (марокканец/марокканка)

**Множественное число:**
- españoles (испанцы), españolas (испанки)
- franceses (французы), francesas (француженки)
- alemanes (немцы), alemanas (немки)

## Использование с глаголами SER и ESTAR

**Глагол SER используется для:**
- Профессий: Yo soy médico. (Я врач.)
- Национальностей: Ella es española. (Она испанка.)
- Происхождения: Somos de Rusia. (Мы из России.)

**Глагол ESTAR используется для:**
- Местонахождения: Estoy en Madrid. (Я в Мадриде.)
- Временного состояния: El médico está ocupado. (Врач занят.)
      `
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
      title: 'Diálogos: SER, ESTAR, Profesiones',
      content: `**Diálogo 1. Приветствие и знакомство (Официальный)**

— Soy Elena Petrova, de Rusia. ¿Y usted?
— Soy Miguel Romero. Soy abogado. Mucho gusto.
— Igualmente. ¿Es usted de Madrid?
— No, soy español, de Sevilla. Soy constructor.
— ¡Qué interesante! Yo soy profesora. Mi marido es músico.
— Es una profesión interesante. ¿Está usted contenta?
— Sí, estoy muy contenta.

**Diálogo 2. Местоположение и состояние (Неофициальный)**

— ¡Hola! ¿Eres tú Andrés, el hermano de Lola?
— ¡Hola! Sí, soy yo. ¿Y tú?
— Soy Carlos, un amigo de Lola. Soy periodista. ¿Qué tal la vida, Andrés?
— Regular, gracias. ¿Estás enfermo?
— No, estoy en casa, no estoy enfermo, pero estoy un poco triste hoy.
— ¡Qué lástima! ¿Dónde está Lola?
— Está en Barcelona. Ella es camarera allí.
— ¡Ah! ¿Y está feliz?
— Sí, está muy feliz. ¡Hasta luego!

**Diálogo 3. Описание и национальность**

— Buenos días. Soy David Schmidt.
— Mucho gusto. Soy Carmen Flores.
— Encantado. ¿Es usted de Alemania?
— Sí, soy alemana, de Berlín. ¿Y usted?
— Yo soy portugués, de Lisboa. Soy ingeniero, ¿y usted es arquitecta?
— No, soy dependienta.
— Usted es muy guapa y alta. ¿Está usted casada?
— No, soy soltera. Usted también es guapo.
— Gracias. Estoy contento de conocerla.
— Igualmente.`,
      translation: `**Диалог 1. Приветствие и знакомство (Официальный)**

— Я Елена Петрова, из России. А вы?
— Я Мигель Ромеро. Я адвокат. Очень приятно.
— Взаимно. Вы из Мадрида?
— Нет, я испанец, из Севильи. Я строитель.
— Как интересно! Я преподаватель. Мой муж - музыкант.
— Это интересная профессия. Вы довольны?
— Да, я очень довольна.

**Диалог 2. Местоположение и состояние (Неофициальный)**

— Привет! Ты Андрес, брат Лолы?
— Привет! Да, это я. А ты?
— Я Карлос, друг Лолы. Я журналист. Как жизнь, Андрес?
— Так себе, спасибо. Ты болен?
— Нет, я дома, я не болен, но сегодня немного грустный.
— Как жаль! Где Лола?
— Она в Барселоне. Она там официантка.
— Ах! И она счастлива?
— Да, она очень счастлива. До встречи!

**Диалог 3. Описание и национальность**

— Доброе утро. Я Дэвид Шмидт.
— Очень приятно. Я Кармен Флорес.
— Рад познакомиться. Вы из Германии?
— Да, я немка, из Берлина. А вы?
— Я португалец, из Лиссабона. Я инженер, а вы архитектор?
— Нет, я продавец.
— Вы очень красивая и высокая. Вы замужем?
— Нет, я не замужем. Вы тоже красивый.
— Спасибо. Я рад познакомиться с вами.
— Взаимно.`,
      audioUrl: '/audio/lesson-1-4-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Soy Elena Petrova, de Rusia. ¿Y usted?' },
        { start: 5, end: 10, text: 'Soy Miguel Romero. Soy abogado.' },
        { start: 10, end: 15, text: '¿Eres tú Andrés, el hermano de Lola?' },
        { start: 15, end: 20, text: 'Soy Carlos, un amigo de Lola. Soy periodista.' },
        { start: 20, end: 25, text: 'Soy David Schmidt. Soy ingeniero.' }
      ]
    },
    exercises: ['ex-1-4-1', 'ex-1-4-2', 'ex-1-4-3', 'ex-1-4-5', 'ex-1-4-6', 'ex-1-4-test']
  },

  // МОДУЛЬ 2: Настоящее время
  'lesson-2-1': {
    id: 'lesson-2-1',
    title: 'Урок 1: Предлоги и числительные',
    moduleId: 'module-2',
    grammar: {
      title: 'Простые предлоги.Числительные. Правильные глаголы',
      content: `
# 1. Простые предлоги

## Предлог "a"

Указывает направление движения куда-либо, то есть используется, чтобы ответить на вопрос куда?

**Слияние:** Предлог a сливается с определенным артиклем мужского рода единственного числа el, образуя форму al:
a + el → al

**Примеры:**
- ir a la escuela — идти в школу
- ir al restaurante — идти в ресторан
- ir a la fiesta — ехать / идти на вечеринку

Употребляется перед одушевленными существительными в винительном и дательном падежах. Используется, чтобы ответить на вопрос кого? или кому?

**Примеры:**
- ver a mi amigo — видеть (кого?) моего друга
- dar un regalo a la profesora — дать (кому?) учительнице подарок

## Предлог "de"

Указывает точку, из которой начато движение, то есть используется, чтобы ответить на вопрос откуда?

**Слияние:** Предлог de сливается с определенным артиклем мужского рода единственного числа el, образуя форму del:
de + el → del

**Примеры:**
- venir de la playa — приходить с пляжа
- salir del museo — выходить из музея

Передает значение русского родительного падежа (кого? чего?), указывает на принадлежность:
- Es la hermana del pintor. — Это сестра художника.
- Los libros de la estudiante son caros. — Книги студентки дорогие.

## Предлог "en"

Соответствует русским предлогам в, на. Указывает на местонахождение. Используется, чтобы ответить на вопрос где?

**Примеры:**
- Estamos en el hotel. — Мы в отеле.
- El lápiz está en la mesa. — Карандаш на столе.

С глаголом ir указывает на способ передвижения:
- viajar en tren — путешествовать на поезде
- ir en coche — ехать на машине

## Предлоги "con", "por", "para", "sin"

- **con** — с, вместе с: ir al cine con amigos
- **por** — по, про: hablar por teléfono
- **para** — для: Este regalo es para ti.
- **sin** — без: vivir sin problemas

# 2. Количественные числительные 0–100

| Número | Español | Número | Español |
|--------|---------|--------|---------|
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

**Примечания:**
- Числа 11—15 имеют особую форму
- С 30 до 99 пишутся раздельно с союзом y: treinta y uno
- Усеченная форма un употребляется перед существительными мужского рода
- Форма женского рода: una

# 3. Спряжение правильных глаголов в настоящем времени изъявительного наклонения (Presente de Indicativo)

Испанские глаголы делятся на три спряжения в зависимости от окончания их инфинитива (неопределенной формы):

I спряжение: глаголы на -ar (например, hablar)

II спряжение: глаголы на -er (например, comer)

III спряжение: глаголы на -ir (например, vivir)

Для спряжения правильных глаголов необходимо отбросить окончание инфинитива (-ar, -er, -ir) и добавить соответствующие личные окончания.

## Таблица спряжения правильных глаголов

| Местоимение | I спряжение (-AR) | II спряжение (-ER) | III спряжение (-IR) |
|------------|-------------------|--------------------|--------------------|
| yo | -o (habl-o) | -o (com-o) | -o (viv-o) |
| tú | -as (habl-as) | -es (com-es) | -es (viv-es) |
| él, ella, usted | -a (habl-a) | -e (com-e) | -e (viv-e) |
| nosotros (-as) | -amos (habl-amos) | -emos (com-emos) | -imos (viv-imos) |
| vosotros (-as) | -áis (habl-áis) | -éis (com-éis) | -ís (viv-ís) |
| ellos, ellas, ustedes | -an (habl-an) | -en (com-en) | -en (viv-en) |

## Примеры правильных глаголов и их употребление

### I спряжение (-AR)

| Глагол | Значение | Пример | Перевод |
|--------|----------|--------|---------|
| hablar | говорить, разговаривать | Nosotros hablamos en voz baja. | Мы говорим тихо. |
| llamar | звать, звонить | Yo llamo a mi amiga María. | Я зову мою подругу Марию. |
| preguntar | спрашивать | ¿Tú preguntas por el precio? | Ты спрашиваешь о цене? |
| escuchar | слушать | La señora escucha la radio. | Сеньора слушает радио. |
| tomar | брать, есть, пить | Ellos toman un coche nuevo. | Они берут новую машину. |

### II спряжение (-ER)

| Глагол | Значение | Пример | Перевод |
|--------|----------|--------|---------|
| leer | читать | Vosotras leéis un libro en la noche. | Вы (ж.р.) читаете книгу ночью. |
| aprender | учить | Mi hermano aprende español. | Мой брат учит испанский. |
| comprender | понимать | ¿Ustedes comprenden el problema? | Вы (вежл., мн.ч.) понимаете проблему? |
| comer | есть, кушать | Yo como pan en casa. | Я ем хлеб дома. |

### III спряжение (-IR)

| Глагол | Значение | Пример | Перевод |
|--------|----------|--------|---------|
| abrir | открывать | El cliente abre la puerta. | Клиент открывает дверь. |
| escribir | писать | Ella escribe un artículo difícil. | Она пишет трудную статью. |
| vivir | жить | Ellos viven en un país rico. | Они живут в богатой стране. |

# 4. Выражения с глаголом TOMAR

Глагол tomar — один из наиболее многозначных глаголов в испанском языке. В зависимости от контекста он может переводиться как брать, есть, пить, принимать или садиться на транспорт.

Ниже приведены основные группы словосочетаний с глаголом tomar для запоминания:

## 1. Значение "Брать / Получать"

tomar libros para leer — брать книги, чтобы читать

## 2. Значение "Есть / Пить" (Прием пищи или напитков)

tomar agua (f) — пить воду

tomar un bocadillo (m) — есть бутерброд

## 3. Значение "Садиться на транспорт" (Выбирать маршрут)

tomar el metro — сесть на метро

tomar el tranvía — сесть на трамвай

tomar el tren — сесть на поезд

tomar un taxi — сесть на такси

## 4. Другие устойчивые выражения

tomar en serio — принимать всерьез

tomar medicinas — принимать лекарства

tomar el sol — загорать
      `
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
  'lesson-2-2': {
    id: 'lesson-2-2',
    title: 'Урок 2: Правильные глаголы в настоящем времени',
    moduleId: 'module-2',
    grammar: {
      title: 'Правильные глаголы -ER и -IR в настоящем времени',
      content: `
# Правильные глаголы -ER и -IR в настоящем времени

В испанском языке глаголы делятся на три группы в зависимости от окончания инфинитива: -AR, -ER, -IR. В этом уроке изучаем спряжение правильных глаголов на -ER и -IR.

## 1. Глаголы на -ER (например: COMER - есть)

Чтобы проспрягать правильный глагол на -ER, нужно убрать окончание -ER и добавить соответствующее личное окончание:

| Местоимение | Окончание | COMER | Перевод |
|-------------|-----------|-------|---------|
| yo | -o | como | я ем |
| tú | -es | comes | ты ешь |
| él, ella, usted | -e | come | он/она ест, Вы едите |
| nosotros (-as) | -emos | comemos | мы едим |
| vosotros (-as) | -éis | coméis | вы едите |
| ellos, ellas, ustedes | -en | comen | они едят, Вы (вежл.) едите |

### Примеры глаголов на -ER:

- **BEBER** (пить): bebo, bebes, bebe, bebemos, bebéis, beben
- **LEER** (читать): leo, lees, lee, leemos, leéis, leen
- **APRENDER** (учить, изучать): aprendo, aprendes, aprende, aprendemos, aprendéis, aprenden
- **VENDER** (продавать): vendo, vendes, vende, vendemos, vendéis, venden
- **RESPONDER** (отвечать): respondo, respondes, responde, respondemos, respondéis, responden
- **CORRER** (бежать): corro, corres, corre, corremos, corréis, corren

### Примеры предложений с глаголами на -ER:

- Yo **como** pasta todos los días. (Я ем пасту каждый день.)
- Tú **bebes** agua. (Ты пьешь воду.)
- Ella **lee** libros en español. (Она читает книги на испанском.)
- Nosotros **aprendemos** español. (Мы учим испанский.)
- Vosotros **vendéis** frutas. (Вы продаете фрукты.)
- Ellos **corren** en el parque. (Они бегают в парке.)

## 2. Глаголы на -IR (например: VIVIR - жить)

Чтобы проспрягать правильный глагол на -IR, нужно убрать окончание -IR и добавить соответствующее личное окончание:

| Местоимение | Окончание | VIVIR | Перевод |
|-------------|-----------|-------|---------|
| yo | -o | vivo | я живу |
| tú | -es | vives | ты живешь |
| él, ella, usted | -e | vive | он/она живет, Вы живете |
| nosotros (-as) | -imos | vivimos | мы живем |
| vosotros (-as) | -ís | vivís | вы живете |
| ellos, ellas, ustedes | -en | viven | они живут, Вы (вежл.) живете |

### Примеры глаголов на -IR:

- **ESCRIBIR** (писать): escribo, escribes, escribe, escribimos, escribís, escriben
- **ABRIR** (открывать): abro, abres, abre, abrimos, abrís, abren
- **RECIBIR** (получать): recibo, recibes, recibe, recibimos, recibís, reciben
- **SUBIR** (подниматься): subo, subes, sube, subimos, subís, suben
- **PARTIR** (уходить, отправляться): parto, partes, parte, partimos, partís, parten

### Примеры предложений с глаголами на -IR:

- Yo **vivo** en Madrid. (Я живу в Мадриде.)
- Tú **escribes** cartas. (Ты пишешь письма.)
- Él **abre** la puerta. (Он открывает дверь.)
- Nosotros **recibimos** mensajes. (Мы получаем сообщения.)
- Vosotros **subís** las escaleras. (Вы поднимаетесь по лестнице.)
- Ellas **viven** en España. (Они живут в Испании.)

## Сходства и различия глаголов -ER и -IR

**Сходства:**
- Окончания для yo, tú, él/ella/usted, ellos/ellas/ustedes **одинаковые**: -o, -es, -e, -en

**Различия:**
- Окончания для nosotros и vosotros **разные**:
  - -ER: -emos, -éis
  - -IR: -imos, -ís
      `,
      examples: [
        { spanish: 'Yo como pasta', translation: 'Я ем пасту' },
        { spanish: 'Tú bebes agua', translation: 'Ты пьешь воду' },
        { spanish: 'Ella lee libros', translation: 'Она читает книги' },
        { spanish: 'Nosotros vivimos en Madrid', translation: 'Мы живем в Мадриде' },
        { spanish: 'Ellos escriben cartas', translation: 'Они пишут письма' }
      ]
    },
    vocabulary: [
      { word: 'comer', translation: 'есть', audioUrl: null },
      { word: 'beber', translation: 'пить', audioUrl: null },
      { word: 'leer', translation: 'читать', audioUrl: null },
      { word: 'aprender', translation: 'учить, изучать', audioUrl: null },
      { word: 'vender', translation: 'продавать', audioUrl: null },
      { word: 'responder', translation: 'отвечать', audioUrl: null },
      { word: 'correr', translation: 'бежать, бегать', audioUrl: null },
      { word: 'comprender', translation: 'понимать', audioUrl: null },
      { word: 'vivir', translation: 'жить', audioUrl: null },
      { word: 'escribir', translation: 'писать', audioUrl: null },
      { word: 'abrir', translation: 'открывать', audioUrl: null },
      { word: 'recibir', translation: 'получать', audioUrl: null },
      { word: 'subir', translation: 'подниматься', audioUrl: null },
      { word: 'partir', translation: 'уходить, отправляться', audioUrl: null },
      { word: 'decidir', translation: 'решать', audioUrl: null },
      { word: 'dividir', translation: 'делить', audioUrl: null },
      { word: 'pasta', translation: 'паста, макароны (f)', audioUrl: null },
      { word: 'agua', translation: 'вода (f)', audioUrl: null },
      { word: 'libro', translation: 'книга (m)', audioUrl: null },
      { word: 'carta', translation: 'письмо (f)', audioUrl: null },
      { word: 'mensaje', translation: 'сообщение (m)', audioUrl: null },
      { word: 'puerta', translation: 'дверь (f)', audioUrl: null },
      { word: 'frutas', translation: 'фрукты (f pl)', audioUrl: null },
      { word: 'escaleras', translation: 'лестница (f pl)', audioUrl: null },
      { word: 'periódico', translation: 'газета (m)', audioUrl: null },
      { word: 'email', translation: 'электронная почта (m)', audioUrl: null },
      { word: 'todos los días', translation: 'каждый день', audioUrl: null },
      { word: 'en español', translation: 'на испанском', audioUrl: null },
      { word: 'en el parque', translation: 'в парке', audioUrl: null }
    ],
    readingText: {
      title: 'Mi día en Madrid',
      content: `Hola, me llamo Pedro. Soy estudiante. Soy de Rusia pero vivo en Madrid. Tengo veinte años.

Cada mañana yo tomo café con leche en casa. Después tomo el autobús a la universidad. La universidad está en el centro de Madrid. Voy de casa a la universidad en treinta minutos.

En la universidad estudio español. Hablo con mis amigos. Ellos son de Italia, Francia y Alemania. Nosotros hablamos español en clase. También leemos libros en español y escribimos textos.

A las dos tomo el almuerzo en el café de la universidad. Como bocadillos y tomo un zumo de naranja. Mi amigo italiano toma agua con la comida.

Por la tarde voy a casa. Leo libros en español y aprendo palabras nuevas. A veces escribo mensajes a mi familia en Rusia.

Mi amiga Ana es española, de Barcelona. Ella es profesora. Ana toma el tren de Barcelona a Madrid cada semana. Ella vive con su hermana en un apartamento pequeño.

Los fines de semana tomamos el sol en el parque. Es muy bonito estar en Madrid.`,
      translation: 'Привет, меня зовут Педро. Я студент. Я из России, но живу в Мадриде. Мне двадцать лет.\n\nКаждое утро я пью кофе с молоком дома. Потом я сажусь на автобус до университета. Университет находится в центре Мадрида. Я еду из дома в университет за тридцать минут.\n\nВ университете я изучаю испанский. Я разговариваю с моими друзьями. Они из Италии, Франции и Германии. Мы говорим по-испански на занятиях. Также мы читаем книги на испанском и пишем тексты.\n\nВ два часа я обедаю в университетском кафе. Я ем бутерброды и пью апельсиновый сок. Мой итальянский друг пьет воду с едой.\n\nВо второй половине дня я иду домой. Я читаю книги на испанском и учу новые слова. Иногда я пишу сообщения моей семье в России.\n\nМоя подруга Ана испанка, из Барселоны. Она преподаватель. Ана едет на поезде из Барселоны в Мадрид каждую неделю. Она живет со своей сестрой в маленькой квартире.\n\nПо выходным мы загораем в парке. Очень приятно быть в Мадриде.',
      audioUrl: '/audio/lesson-2-2-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Hola, me llamo Pedro. Soy estudiante.' },
        { start: 5, end: 10, text: 'Cada mañana yo tomo café con leche en casa.' },
        { start: 10, end: 15, text: 'Después tomo el autobús a la universidad.' },
        { start: 15, end: 20, text: 'En la universidad hablo con mis amigos.' },
        { start: 20, end: 25, text: 'Los fines de semana tomamos el sol en el parque.' }
      ]
    },
    exercises: ['ex-2-2-1', 'ex-2-2-2', 'ex-2-2-3', 'ex-2-2-4']
  },
  'lesson-2-3': {
    id: 'lesson-2-3',
    title: 'Урок 3: Глаголы IR, TENER, OÍR',
    moduleId: 'module-2',
    grammar: {
      title: 'Неправильные глаголы IR, TENER, OÍR',
      content: `
# Глаголы IR, TENER, OÍR

## Глагол IR (идти, ехать)

| Лицо | Форма | Русский |
|------|-------|---------|
| yo | voy | Я иду |
| tú | vas | Ты идешь |
| él/ella/usted | va | Он/она идет |
| nosotros(-as) | vamos | Мы идем |
| vosotros(-as) | vais | Вы идете |
| ellos/ellas/ustedes | van | Они идут |

### Глагол IR с предлогами

**Глагол ir с предлогом а обозначает направление движения вперед от говорящего.**

Определенный артикль мужского рода единственного числа el сливается с предлогом а, образуя форму al:

- ir a la oficina — идти в офис, на работу
- ir al bar — идти в бар
- ir al teatro — идти в театр
- ir al café — идти в кафе
- ir a casa — идти домой
- ir a Rusia — ехать в Россию

**Глагол ir с предлогом en указывает на способ передвижения:**

- ir en coche — ехать на машине
- ir en taxi — ехать на такси
- ir en autobús — ехать на автобусе
- ir en tren — ехать на поезде
- ir en avión — лететь на самолете
- ir en barco — плыть на корабле
- ir a pie / ir andando — идти пешком

**Глагол ir с предлогом de указывает на цель передвижения:**

- ir de compras — идти за покупками
- ir de vacaciones — ехать в отпуск, на каникулы

**Например:**
- Vamos de vacaciones a España en avión. — Мы летим в отпуск в Испанию.
- Yo voy a la oficina a pie y Sergio va en taxi. — Я хожу на работу пешком, а Сергей ездит на такси.

### Конструкция ir + a + инфинитив

Используется для:
- выражения намерения что-то сделать
- выражения ближайшего будущего времени

**Например:**
- Voy a descansar un poco. — Я собираюсь немного отдохнуть.
- ¿Qué vas a tomar, té o café? — Что ты будешь пить, чай или кофе?

## Глагол TENER (иметь)

| Лицо | Форма | Русский |
|------|-------|---------|
| yo | tengo | Я имею |
| tú | tienes | Ты имеешь |
| él/ella/usted | tiene | Он/она имеет |
| nosotros(-as) | tenemos | Мы имеем |
| vosotros(-as) | tenéis | Вы имеете |
| ellos/ellas/ustedes | tienen | Они имеют |

**Выражения:** tener hambre, tener sed, tener años, tener razón

## Глагол OÍR (слышать)

| Лицо | Форма | Русский |
|------|-------|---------|
| yo | oigo | Я слышу |
| tú | oyes | Ты слышишь |
| él/ella/usted | oye | Он/она слышит |
| nosotros(-as) | oímos | Мы слышим |
| vosotros(-as) | oís | Вы слышите |
| ellos/ellas/ustedes | oyen | Они слышат |
      `,
      examples: [
        { spanish: 'Voy al cine', translation: 'Я иду в кино' },
        { spanish: 'Tengo veinte años', translation: 'Мне 20 лет' },
        { spanish: 'Oigo música', translation: 'Я слышу музыку' }
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
      { word: 'té', translation: 'чай', audioUrl: null }
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
    exercises: ['ex-2-3-1', 'ex-2-3-2', 'ex-2-3-3']
  },

  // МОДУЛЬ 3: Повседневная жизнь
  'lesson-3-1': {
    id: 'lesson-3-1',
    title: 'Урок 1',
    moduleId: 'module-3',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },
  'lesson-3-2': {
    id: 'lesson-3-2',
    title: 'Урок 2',
    moduleId: 'module-3',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },
  'lesson-3-3': {
    id: 'lesson-3-3',
    title: 'Урок 3',
    moduleId: 'module-3',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  // МОДУЛЬ 4: Прошедшее время (A2)
  'lesson-4-1': {
    id: 'lesson-4-1',
    title: 'Урок 1',
    moduleId: 'module-4',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-4-2': {
    id: 'lesson-4-2',
    title: 'Урок 2',
    moduleId: 'module-4',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-4-3': {
    id: 'lesson-4-3',
    title: 'Урок 3',
    moduleId: 'module-4',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  // МОДУЛЬ 5: Путешествия и места (A2)
  'lesson-5-1': {
    id: 'lesson-5-1',
    title: 'Урок 1',
    moduleId: 'module-5',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-5-2': {
    id: 'lesson-5-2',
    title: 'Урок 2',
    moduleId: 'module-5',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-5-3': {
    id: 'lesson-5-3',
    title: 'Урок 3',
    moduleId: 'module-5',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  // МОДУЛЬ 6: Будущее время (A2)
  'lesson-6-1': {
    id: 'lesson-6-1',
    title: 'Урок 1',
    moduleId: 'module-6',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-6-2': {
    id: 'lesson-6-2',
    title: 'Урок 2',
    moduleId: 'module-6',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-6-3': {
    id: 'lesson-6-3',
    title: 'Урок 3',
    moduleId: 'module-6',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  // МОДУЛЬ 7: Сослагательное наклонение (B1)
  'lesson-7-1': {
    id: 'lesson-7-1',
    title: 'Урок 1',
    moduleId: 'module-7',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-7-2': {
    id: 'lesson-7-2',
    title: 'Урок 2',
    moduleId: 'module-7',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-7-3': {
    id: 'lesson-7-3',
    title: 'Урок 3',
    moduleId: 'module-7',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  // ============ МОДУЛЬ 8: УСЛОВНЫЕ ПРЕДЛОЖЕНИЯ (B1) ============

  'lesson-8-1': {
    id: 'lesson-8-1',
    title: 'Урок 1',
    moduleId: 'module-8',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-8-2': {
    id: 'lesson-8-2',
    title: 'Урок 2',
    moduleId: 'module-8',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-8-3': {
    id: 'lesson-8-3',
    title: 'Урок 3',
    moduleId: 'module-8',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  // ============ МОДУЛЬ 9: ЛИТЕРАТУРА И КУЛЬТУРА (B1) ============

  'lesson-9-1': {
    id: 'lesson-9-1',
    title: 'Урок 1',
    moduleId: 'module-9',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-9-2': {
    id: 'lesson-9-2',
    title: 'Урок 2',
    moduleId: 'module-9',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
  },

  'lesson-9-3': {
    id: 'lesson-9-3',
    title: 'Урок 3',
    moduleId: 'module-9',
    grammar: {
      title: '',
      content: ``,
      examples: []
    },
    vocabulary: [],
    readingText: {
      title: '',
      content: ``,
      translation: '',
      audioUrl: '',
      subtitles: []
    },
    exercises: []
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
    description: 'Переведите предложения на испанский, используя глаголы SER или ESTAR',
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
    description: 'Переведите словосочетания на испанский язык, используя определенные артикли',
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
    description: 'Переведите предложения на испанский',
    questions: [
      { russian: 'Я врач.', correct: 'Yo soy médico.' },
      { russian: 'Она учитель.', correct: 'Ella es profesora.' },
      { russian: 'Мы из Испании.', correct: 'Nosotros somos de España.' },
      { russian: 'Он испанец.', correct: 'Él es español.' },
      { russian: 'Ты адвокат.', correct: 'Tú eres abogado.' },
      { russian: 'Они журналисты.', correct: 'Ellos son periodistas.' },
      { russian: 'Я в Мадриде (сейчас).', correct: 'Yo estoy en Madrid.' },
      { russian: 'Она довольна.', correct: 'Ella está contenta.' },
      { russian: 'Вы (уваж.) из России.', correct: 'Usted es de Rusia.' },
      { russian: 'Мой друг - инженер.', correct: 'Mi amigo es ingeniero.' },
      { russian: 'Моя сестра - художница.', correct: 'Mi hermana es pintora.' },
      { russian: 'Они повара из Италии.', correct: 'Ellos son cocineros de Italia.' },
      { russian: 'Ты итальянец?', correct: '¿Eres italiano?' },
      { russian: 'Мой отец - строитель.', correct: 'Mi padre es constructor.' },
      { russian: 'Официанты заняты сегодня.', correct: 'Los camareros están ocupados hoy.' },
      { russian: 'Она актриса из Франции.', correct: 'Ella es actriz de Francia.' },
      { russian: 'Вы писатель?', correct: '¿Es usted escritor?' },
      { russian: 'Они немцы из Берлина.', correct: 'Ellos son alemanes de Berlín.' },
      { russian: 'Мы продавцы, мы заняты.', correct: 'Nosotros somos dependientes, estamos ocupados.' },
      { russian: 'Моя мама - медсестра в больнице.', correct: 'Mi madre es enfermera en el hospital.' }
    ]
  },
  'ex-1-4-test': {
    id: 'ex-1-4-test',
    type: 'translation',
    title: 'TEST - Обобщение',
    description: 'Часть 1: Измените род и/или число. Часть 2: SER или ESTAR. Часть 3: Перевод',
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
  'ex-2-2-3': {
    id: 'ex-2-2-3',
    type: 'reading',
    title: 'Чтение: Mi día en Madrid',
    description: 'Ответьте на вопросы о тексте',
    text: 'Hola, me llamo Pedro. Soy estudiante de Rusia. Vivo en Madrid. Cada mañana tomo café con leche y tomo el autobús a la universidad. En la universidad hablo con mis amigos de Italia, Francia y Alemania. Hablamos español en clase. También leemos libros y escribimos textos. A las dos tomo el almuerzo. Como bocadillos y tomo zumo de naranja. Por la tarde leo libros en español y aprendo palabras nuevas. Mi amiga Ana es española. Ella es profesora. Ana toma el tren de Barcelona a Madrid. Los fines de semana tomamos el sol en el parque.',
    questions: [
      { question: '¿Cómo se llama el estudiante?', options: ['Antonio', 'Pedro', 'Pablo', 'Carlos'], correct: 1 },
      { question: '¿De dónde es Pedro?', options: ['De Italia', 'De Francia', 'De Rusia', 'De España'], correct: 2 },
      { question: '¿Dónde vive Pedro?', options: ['En Barcelona', 'En Madrid', 'En Valencia', 'En Moscú'], correct: 1 },
      { question: '¿Qué toma Pedro cada mañana?', options: ['Té', 'Café con leche', 'Zumo', 'Agua'], correct: 1 },
      { question: '¿Cómo va Pedro a la universidad?', options: ['En tren', 'En coche', 'En autobús', 'A pie'], correct: 2 },
      { question: '¿De dónde son los amigos de Pedro?', options: ['De España', 'De Rusia', 'De Italia, Francia y Alemania', 'De Inglaterra'], correct: 2 },
      { question: '¿Qué hacen en clase?', options: ['Juegan', 'Hablan español', 'Duermen', 'Comen'], correct: 1 },
      { question: '¿Qué más hacen en la universidad?', options: ['Leen y escriben', 'Corren', 'Cantan', 'Bailan'], correct: 0 },
      { question: '¿A qué hora toma el almuerzo Pedro?', options: ['A la una', 'A las dos', 'A las tres', 'A las cuatro'], correct: 1 },
      { question: '¿Qué come Pedro?', options: ['Pasta', 'Bocadillos', 'Frutas', 'Pescado'], correct: 1 },
      { question: '¿Qué bebe Pedro con la comida?', options: ['Agua', 'Café', 'Zumo de naranja', 'Leche'], correct: 2 },
      { question: '¿Qué hace Pedro por la tarde?', options: ['Duerme', 'Lee libros', 'Va al cine', 'Juega'], correct: 1 },
      { question: '¿Quién es Ana?', options: ['Hermana de Pedro', 'Profesora española', 'Estudiante italiana', 'Médica francesa'], correct: 1 },
      { question: '¿Cómo va Ana de Barcelona a Madrid?', options: ['En tren', 'En autobús', 'En coche', 'En avión'], correct: 0 },
      { question: '¿Qué hacen los fines de semana?', options: ['Van al cine', 'Toman el sol', 'Van de compras', 'Comen en restaurantes'], correct: 1 }
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

  'ex-2-2-ir-1': {
    id: 'ex-2-2-ir-1',
    type: 'fillblank',
    title: 'Глагол IR: Заполните пропуски',
    description: 'Поставьте глагол ir в соответствующую форму',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Mi padre y yo _____ (ir) a la playa en barco', verb: 'ir', correct: 'vamos' },
      { sentence: '¿Tú _____ (ir) a escribir el libro?', verb: 'ir', correct: 'vas' },
      { sentence: 'Los alumnos _____ (ir) a aprender un tema nuevo', verb: 'ir', correct: 'van' },
      { sentence: 'Ustedes _____ (ir) a casa en taxi', verb: 'ir', correct: 'van' },
      { sentence: 'Yo _____ (ir) de compras a la ciudad', verb: 'ir', correct: 'voy' },
      { sentence: 'Yo _____ (ir) a comer una paella famosa', verb: 'ir', correct: 'voy' },
      { sentence: 'Mi hermana _____ (ir) a tomar un zumo de naranja', verb: 'ir', correct: 'va' },
      { sentence: '¿Vosotras _____ (ir) de vacaciones en tren?', verb: 'ir', correct: 'vais' },
      { sentence: 'Ustedes no _____ (ir) al centro comercial hoy', verb: 'ir', correct: 'van' },
      { sentence: 'Nosotros _____ (ir) a beber agua fría', verb: 'ir', correct: 'vamos' },
      { sentence: 'El periodista _____ (ir) a escribir un artículo largo', verb: 'ir', correct: 'va' },
      { sentence: 'Tú _____ (ir) en autobús a la oficina', verb: 'ir', correct: 'vas' },
      { sentence: 'Yo _____ (ir) a dormir muy tarde', verb: 'ir', correct: 'voy' },
      { sentence: 'Ellos _____ (ir) a tomar el sol a la playa', verb: 'ir', correct: 'van' },
      { sentence: 'Yo no _____ (ir) de compras este sábado', verb: 'ir', correct: 'voy' }
    ]
  },

  'ex-2-2-ir-2': {
    id: 'ex-2-2-ir-2',
    type: 'writing',
    title: 'Глагол IR: Переведите на испанский',
    description: 'Переведите предложения на испанский',
    questions: [
      { russian: 'Я собираюсь поговорить с моим другом', correct: 'voy a hablar con mi amigo' },
      { russian: 'Мы едем в Италию на поезде', correct: 'vamos a italia en tren' },
      { russian: 'Вы (vosotros) идете пешком в teatro?', correct: '¿vais a pie al teatro?' },
      { russian: 'Они (ellas) едут в отпуск на самолете', correct: 'ellas van de vacaciones en avión' },
      { russian: 'Она едет на работу на трамвае', correct: 'ella va al trabajo en tranvía' },
      { russian: 'Ты собираешься взять книги для чтения?', correct: '¿vas a tomar libros para leer?' },
      { russian: 'Мы не едем в Египет, мы едем в Испанию', correct: 'no vamos a egipto, vamos a españa' },
      { russian: 'Я иду в банк пешком', correct: 'voy al banco a pie' },
      { russian: 'Вы (usted) собираетесь позвонить секретарю?', correct: '¿usted va a llamar al secretario?' },
      { russian: 'Они (ellos) идут в кафе есть бутерброды', correct: 'ellos van al café a comer bocadillos' },
      { russian: 'Мой отец собирается загорать', correct: 'mi padre va a tomar el sol' },
      { russian: 'Вы (ustedes) едете на поезде в Мадрид?', correct: '¿ustedes van en tren a madrid?' },
      { russian: 'Он собирается принимать лекарства', correct: 'él va a tomar medicinas' },
      { russian: 'Мои друзья едут на машине в горы', correct: 'mis amigos van en coche a las montañas' },
      { russian: 'Я не собираюсь смотреть этот фильм', correct: 'no voy a ver esta película' }
    ]
  },

  'ex-2-2-ir-3': {
    id: 'ex-2-2-ir-3',
    type: 'fillblank',
    title: 'Глагол IR: Ponga el verbo',
    description: 'Ponga el verbo IR en la forma correcta',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ (ir) a la playa en barco', verb: 'ir', correct: 'voy' },
      { sentence: 'Tú _____ (ir) a escribir una carta', verb: 'ir', correct: 'vas' },
      { sentence: 'El cliente _____ (ir) a la oficina en taxi', verb: 'ir', correct: 'va' },
      { sentence: 'Mi hermana y yo _____ (ir) de compras a la ciudad', verb: 'ir', correct: 'vamos' },
      { sentence: 'Vosotros _____ (ir) a aprender un tema nuevo', verb: 'ir', correct: 'vais' },
      { sentence: 'Ellos _____ (ir) al teatro en metro', verb: 'ir', correct: 'van' },
      { sentence: 'Usted _____ (ir) a tomar un café', verb: 'ir', correct: 'va' },
      { sentence: 'Nosotros _____ (ir) a vivir en España', verb: 'ir', correct: 'vamos' },
      { sentence: 'Mi padre _____ (ir) al bar a leer', verb: 'ir', correct: 'va' },
      { sentence: 'Yo _____ (ir) a tomar el sol ahora', verb: 'ir', correct: 'voy' },
      { sentence: '¿Tú _____ (ir) a pie a casa?', verb: 'ir', correct: 'vas' },
      { sentence: 'El abogado _____ (ir) de vacaciones en avión', verb: 'ir', correct: 'va' },
      { sentence: 'Ustedes _____ (ir) a llamar al policía', verb: 'ir', correct: 'van' },
      { sentence: 'Vosotros _____ (ir) en autobús a la universidad', verb: 'ir', correct: 'vais' },
      { sentence: 'Ella _____ (ir) a comprender el problema', verb: 'ir', correct: 'va' }
    ]
  },

  'ex-2-2-tener-1': {
    id: 'ex-2-2-tener-1',
    type: 'fillblank',
    title: 'Глагол TENER: Заполните пропуски',
    description: 'Поставьте глагол tener в соответствующую форму',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ mucha suerte con el trabajo', verb: 'tener', correct: 'tengo' },
      { sentence: 'Mi amigo y él no _____ miedo al perro', verb: 'tener', correct: 'tienen' },
      { sentence: '¿Vosotros _____ tiempo para leer el libro?', verb: 'tener', correct: 'tenéis' },
      { sentence: 'Ustedes _____ que llamar al médico', verb: 'tener', correct: 'tienen' },
      { sentence: 'Tú _____ que abrir la ventana, hace calor', verb: 'tener', correct: 'tienes' },
      { sentence: 'Nosotros somos jóvenes y no _____ problemas', verb: 'tener', correct: 'tenemos' },
      { sentence: 'La secretaria no _____ tiempo libre hoy', verb: 'tener', correct: 'tiene' },
      { sentence: 'Yo no _____ miedo a las alturas', verb: 'tener', correct: 'tengo' },
      { sentence: 'Vosotras _____ que aprender un idioma nuevo', verb: 'tener', correct: 'tenéis' },
      { sentence: 'Mi primo _____ veintidós años', verb: 'tener', correct: 'tiene' },
      { sentence: 'El periodista y ella _____ que tomar un taxi', verb: 'tener', correct: 'tienen' },
      { sentence: '¿Ustedes _____ mucho dinero en el banco?', verb: 'tener', correct: 'tienen' },
      { sentence: 'Tú y yo _____ una casa en la playa', verb: 'tener', correct: 'tenemos' },
      { sentence: 'Nosotras _____ frío en la nieve', verb: 'tener', correct: 'tenemos' },
      { sentence: 'Ellos _____ que volver a casa temprano', verb: 'tener', correct: 'tienen' }
    ]
  },

  'ex-2-2-tener-2': {
    id: 'ex-2-2-tener-2',
    type: 'fillblank',
    title: 'Глагол TENER: Ponga el verbo',
    description: 'Ponga el verbo TENER en la forma correcta',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ (tener) mucha prisa por la mañana', verb: 'tener', correct: 'tengo' },
      { sentence: 'Mi madre _____ (tener) que tomar medicinas cada día', verb: 'tener', correct: 'tiene' },
      { sentence: 'Nosotros _____ (tener) mucho frío en la casa', verb: 'tener', correct: 'tenemos' },
      { sentence: '¿Tú _____ (tener) razón en el problema difícil?', verb: 'tener', correct: 'tienes' },
      { sentence: 'El guía _____ (tener) un coche nuevo', verb: 'tener', correct: 'tiene' },
      { sentence: 'Vosotros _____ (tener) hambre y sed ahora', verb: 'tener', correct: 'tenéis' },
      { sentence: 'Ellos _____ (tener) quince años', verb: 'tener', correct: 'tienen' },
      { sentence: 'Usted _____ (tener) que escribir la carta al abogado', verb: 'tener', correct: 'tiene' },
      { sentence: 'Mi hermano y yo _____ (tener) suerte con el dinero', verb: 'tener', correct: 'tenemos' },
      { sentence: 'Las chicas _____ (tener) miedo al ruido', verb: 'tener', correct: 'tienen' },
      { sentence: '¿Yo _____ (tener) tiempo para escuchar la radio?', verb: 'tener', correct: 'tengo' },
      { sentence: 'Ustedes _____ (tener) que abrir la cuenta en el banco', verb: 'tener', correct: 'tienen' },
      { sentence: 'El economista no _____ (tener) familia', verb: 'tener', correct: 'tiene' },
      { sentence: 'Tú y él _____ (tener) sueño en la noche', verb: 'tener', correct: 'tenéis' },
      { sentence: 'Vosotros _____ (tener) que aprender las noticias', verb: 'tener', correct: 'tenéis' }
    ]
  },

  'ex-2-2-tener-3': {
    id: 'ex-2-2-tener-3',
    type: 'grammar',
    title: 'Глагол TENER: Выберите правильную форму',
    description: 'Выберите правильную форму глагола TENER',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ mucha prisa', options: ['tienes', 'tiene', 'tengo', 'tienen'], correct: 2 },
      { sentence: 'Tú _____ razón', options: ['tengo', 'tienes', 'tiene', 'tenemos'], correct: 1 },
      { sentence: 'Él _____ veinte años', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 },
      { sentence: 'Nosotros _____ hambre', options: ['tengo', 'tiene', 'tenemos', 'tienen'], correct: 2 },
      { sentence: 'Vosotros _____ sed', options: ['tenéis', 'tienen', 'tenemos', 'tiene'], correct: 0 },
      { sentence: 'Ellos _____ frío', options: ['tengo', 'tiene', 'tenemos', 'tienen'], correct: 3 },
      { sentence: 'Usted _____ que estudiar', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 },
      { sentence: 'Yo _____ sueño', options: ['tengo', 'tienes', 'tiene', 'tenemos'], correct: 0 },
      { sentence: 'Tú _____ miedo', options: ['tengo', 'tienes', 'tiene', 'tenemos'], correct: 1 },
      { sentence: 'Ella _____ suerte', options: ['tengo', 'tienes', 'tiene', 'tienen'], correct: 2 },
      { sentence: 'Nosotras _____ tiempo', options: ['tengo', 'tiene', 'tenemos', 'tienen'], correct: 2 },
      { sentence: 'Ustedes _____ dinero', options: ['tengo', 'tiene', 'tenemos', 'tienen'], correct: 3 },
      { sentence: 'Vosotros _____ familia', options: ['tenéis', 'tienen', 'tenemos', 'tiene'], correct: 0 },
      { sentence: 'Yo _____ calor', options: ['tengo', 'tienes', 'tiene', 'tenemos'], correct: 0 },
      { sentence: 'Ellas _____ prisa', options: ['tengo', 'tiene', 'tenemos', 'tienen'], correct: 3 }
    ]
  },

  'ex-2-2-oir-1': {
    id: 'ex-2-2-oir-1',
    type: 'fillblank',
    title: 'Глагол OÍR: Заполните пропуски',
    description: 'Поставьте глагол oír в соответствующую форму',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'El señor no abre la puerta porque no _____ el teléfono', verb: 'oír', correct: 'oye' },
      { sentence: 'Yo no _____ las palabras de la señora, ella habla muy bajo', verb: 'oír', correct: 'oigo' },
      { sentence: '¿Qué _____ ustedes? — Nosotros _____ un problema en la calle', verb: 'oír', correct: 'oyen, oímos' },
      { sentence: 'Tú no _____ bien a tu amigo', verb: 'oír', correct: 'oyes' },
      { sentence: 'Vosotros _____ las noticias por la radio', verb: 'oír', correct: 'oís' },
      { sentence: 'Nosotros _____ la voz de nuestro amigo', verb: 'oír', correct: 'oímos' },
      { sentence: 'Ellos _____ las noticias del mundo', verb: 'oír', correct: 'oyen' },
      { sentence: 'Yo no _____ bien la radio', verb: 'oír', correct: 'oigo' },
      { sentence: 'Tú _____ al guía hablar de la historia', verb: 'oír', correct: 'oyes' },
      { sentence: 'Ustedes _____ el ruido del metro', verb: 'oír', correct: 'oyen' },
      { sentence: 'Mi madre _____ al vecino cantar', verb: 'oír', correct: 'oye' },
      { sentence: 'Vosotras _____ el concierto en la plaza', verb: 'oír', correct: 'oís' },
      { sentence: 'El perro no _____ las palabras del niño', verb: 'oír', correct: 'oye' },
      { sentence: 'Yo _____ el sonido del piano', verb: 'oír', correct: 'oigo' },
      { sentence: '¿Él _____ el teléfono en el otro cuarto?', verb: 'oír', correct: 'oye' }
    ]
  },

  'ex-2-2-oir-2': {
    id: 'ex-2-2-oir-2',
    type: 'fillblank',
    title: 'Глагол OÍR: Ponga el verbo',
    description: 'Ponga el verbo OÍR en la forma correcta',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ (oír) el teléfono en la oficina', verb: 'oír', correct: 'oigo' },
      { sentence: 'Tú _____ (oír) al guía hablar en voz baja', verb: 'oír', correct: 'oyes' },
      { sentence: 'El abogado no _____ (oír) al juez', verb: 'oír', correct: 'oye' },
      { sentence: 'Nosotros _____ (oír) la radio todas las mañanas', verb: 'oír', correct: 'oímos' },
      { sentence: 'Vosotros _____ (oír) las noticias del país', verb: 'oír', correct: 'oís' },
      { sentence: 'Ellas _____ (oír) la música en el café', verb: 'oír', correct: 'oyen' },
      { sentence: 'Usted _____ (oír) a su hijo llamar a la puerta', verb: 'oír', correct: 'oye' },
      { sentence: 'Mi padre y yo _____ (oír) el tren en la noche', verb: 'oír', correct: 'oímos' },
      { sentence: 'Los clientes no _____ (oír) el problema bien', verb: 'oír', correct: 'oyen' },
      { sentence: '¿Tú _____ (oír) un ruido extraño en casa?', verb: 'oír', correct: 'oyes' },
      { sentence: 'El niño _____ (oír) a su madre cantar', verb: 'oír', correct: 'oye' },
      { sentence: 'Yo _____ (oír) las palabras del policía', verb: 'oír', correct: 'oigo' },
      { sentence: 'Ustedes _____ (oír) las noticias de la ciudad', verb: 'oír', correct: 'oyen' },
      { sentence: 'Mi hermana _____ (oír) mucha gente en la calle', verb: 'oír', correct: 'oye' },
      { sentence: 'Vosotros _____ (oír) bien al profesor?', verb: 'oír', correct: 'oís' }
    ]
  },

  'ex-2-2-oir-3': {
    id: 'ex-2-2-oir-3',
    type: 'grammar',
    title: 'Глагол OÍR: Выберите правильную форму',
    description: 'Выберите правильную форму глагола OÍR',
    showCorrectAnswer: true,
    highlightErrors: true,
    questions: [
      { sentence: 'Yo _____ la radio', options: ['oyes', 'oye', 'oigo', 'oyen'], correct: 2 },
      { sentence: 'Tú _____ música', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 1 },
      { sentence: 'Él _____ las noticias', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 2 },
      { sentence: 'Nosotros _____ el problema', options: ['oigo', 'oye', 'oímos', 'oyen'], correct: 2 },
      { sentence: 'Vosotros _____ la música', options: ['oís', 'oyen', 'oímos', 'oye'], correct: 0 },
      { sentence: 'Ellos _____ ruido', options: ['oigo', 'oye', 'oímos', 'oyen'], correct: 3 },
      { sentence: 'Usted _____ bien', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 2 },
      { sentence: 'Yo no _____ nada', options: ['oigo', 'oyes', 'oye', 'oímos'], correct: 0 },
      { sentence: 'Tú _____ al profesor', options: ['oigo', 'oyes', 'oye', 'oímos'], correct: 1 },
      { sentence: 'Ella _____ el teléfono', options: ['oigo', 'oyes', 'oye', 'oyen'], correct: 2 },
      { sentence: 'Nosotras _____ la voz', options: ['oigo', 'oye', 'oímos', 'oyen'], correct: 2 },
      { sentence: 'Ustedes _____ el concierto', options: ['oigo', 'oye', 'oímos', 'oyen'], correct: 3 },
      { sentence: 'Vosotros _____ el piano', options: ['oís', 'oyen', 'oímos', 'oye'], correct: 0 },
      { sentence: 'Yo _____ al vecino', options: ['oigo', 'oyes', 'oye', 'oímos'], correct: 0 },
      { sentence: 'Ellas _____ al guía', options: ['oigo', 'oye', 'oímos', 'oyen'], correct: 3 }
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
    description: 'Выберите правильный ответ',
    questions: [
      { sentence: 'Son las 10 de la mañana. Digo: ___', options: ['buenas noches', 'buenos días', 'buenas tardes', 'adiós'], correct: 1 },
      { sentence: 'Alguien me ayuda. Digo: ___', options: ['adiós', 'gracias', 'hola', 'no'], correct: 1 },
      { sentence: 'Mi amigo pregunta "¿Cómo estás?". No estoy muy bien. Digo: ___', options: ['Todo va bien', 'Regular', 'Bien, gracias', 'Buenos días'], correct: 1 },
      { sentence: 'Pregunto por la familia de mi amigo: ___', options: ['¿Qué tal la familia?', '¿Qué tal?', 'Muchas gracias', 'De nada'], correct: 0 },
      { sentence: 'Alguien me ayuda mucho. Digo: ___', options: ['Gracias', 'Muchas gracias', 'Por favor', 'Adiós'], correct: 1 },
      { sentence: 'Son las 3 de la tarde. Digo: ___', options: ['buenos días', 'buenas tardes', 'buenas noches', 'hasta luego'], correct: 1 },
      { sentence: 'Son las 10 de la noche. Digo: ___', options: ['buenos días', 'buenas tardes', 'buenas noches', 'hola'], correct: 2 },
      { sentence: 'Veo a mi amigo en la calle. Digo: ___', options: ['adiós', 'hola', 'gracias', 'perdón'], correct: 1 },
      { sentence: 'Me voy de la oficina. Digo a mis compañeros: ___', options: ['hola', 'buenos días', 'hasta luego', 'por favor'], correct: 2 },
      { sentence: 'Alguien me dice "Gracias". Yo respondo: ___', options: ['gracias', 'de nada', 'hola', 'adiós'], correct: 1 },
      { sentence: 'Necesito ayuda. Digo: ___', options: ['gracias', 'adiós', 'por favor', 'buenos días'], correct: 2 },
      { sentence: 'Piso el pie de alguien sin querer. Digo: ___', options: ['hola', 'perdón', 'gracias', 'adiós'], correct: 1 },
      { sentence: 'Mi amigo pregunta "¿Qué tal?". Estoy muy bien. Digo: ___', options: ['regular', 'mal', 'todo va bien', 'adiós'], correct: 2 },
      { sentence: 'Veo a alguien mañana. Al despedirme digo: ___', options: ['adiós para siempre', 'hasta mañana', 'buenos días', 'hola'], correct: 1 },
      { sentence: 'Alguien me pregunta "¿Cómo estás?". Estoy normal. Digo: ___', options: ['excelente', 'así así', 'mal', 'adiós'], correct: 1 }
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
  }
}
