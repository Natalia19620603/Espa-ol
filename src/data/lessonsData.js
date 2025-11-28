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
      content: `**Saludos y expresiones**
¡Hola! Buenos días. Buenas tardes. Buenas noches.
Gracias. Muchas gracias. De nada. Por favor.
Adiós. Mucho gusto. Encantado. Encantada.

**La familia**
El padre. La madre. El hermano. La hermana.
Mi padre. Mi madre. Tu hermano. Tu hermana.
Un chico joven. Una chica joven.
El hombre alto. La mujer alta.
Un amigo bueno. Una amiga buena.

**Descripciones**
El libro grande. La casa grande.
Un día bonito. Una ciudad bonita.
El museo interesante. La playa bonita.
Un café caliente. Una noche fría.
El sol blanco. La luz blanca.
Un coche caro. Una flor cara.

**Lugares**
La casa. El museo. La playa. La ciudad.
La calle larga. El día largo.
En casa. En el museo. En la playa. En la ciudad.

**Cualidades y estados**
Feliz. Contento. Alegre. Triste.
Enfermo. Joven. Viejo. Alto. Bajo.
Guapo. Bonito. Feo. Bueno. Malo.
Nuevo. Antiguo. Grande. Pequeño.
Gordo. Delgado. Rico. Pobre.

**Objetos y cosas**
El libro nuevo. La casa nueva.
Un lápiz pequeño. Una mano pequeña.
El coche verde. La flor azul.
Un avión grande. Una estación grande.
El dinero. El amor. La felicidad. La salud.`,
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
    exercises: ['ex-1-3-1', 'ex-1-3-2', 'ex-1-3-3']
  },
  'lesson-1-4': {
    id: 'lesson-1-4',
    title: 'Урок 4: Профессии и национальности',
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

## Примеры использования

1. **Mi hermano es ingeniero.** — Мой брат инженер.
2. **Ellas son periodistas.** — Они (ж.р.) журналистки.
3. **¿Eres tú profesor?** — Ты преподаватель?
4. **Mi madre es médica y mi padre es abogado.** — Моя мама врач, а мой папа адвокат.
5. **Nosotros somos de España, somos españoles.** — Мы из Испании, мы испанцы.
6. **Él es francés, de París.** — Он француз, из Парижа.
7. **¿De dónde eres? Soy ruso, de Moscú.** — Откуда ты? Я русский, из Москвы.
8. **María es italiana, pero vive en Alemania.** — Мария итальянка, но живет в Германии.
9. **Los camareros están ocupados hoy.** — Официанты сегодня заняты.
10. **Mi amiga es pintora, está en Roma ahora.** — Моя подруга художница, она сейчас в Риме.
      `,
      examples: [
        { spanish: 'Yo soy médico', translation: 'Я врач', pronunciation: '[йо сой мэдико]' },
        { spanish: 'Ella es española', translation: 'Она испанка', pronunciation: '[элья эс эспаньола]' },
        { spanish: 'Somos de Rusia', translation: 'Мы из России', pronunciation: '[сомос дэ русиа]' },
        { spanish: 'Estoy en Madrid', translation: 'Я в Мадриде', pronunciation: '[эстой эн мадрид]' },
        { spanish: 'Mi hermano es ingeniero', translation: 'Мой брат инженер', pronunciation: '[ми эрмано эс инхэньеро]' },
        { spanish: 'Ellas son periodistas', translation: 'Они журналистки', pronunciation: '[эльяс сон пэрьодистас]' },
        { spanish: '¿Eres tú profesor?', translation: 'Ты преподаватель?', pronunciation: '[эрэс ту профэсор]' },
        { spanish: 'Él es francés, de París', translation: 'Он француз, из Парижа', pronunciation: '[эль эс франсэс, дэ парис]' },
        { spanish: '¿De dónde eres?', translation: 'Откуда ты?', pronunciation: '[дэ дондэ эрэс]' },
        { spanish: 'Mi amiga es pintora', translation: 'Моя подруга художница', pronunciation: '[ми амига эс пинтора]' }
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
    exercises: ['ex-1-4-1', 'ex-1-4-2', 'ex-1-4-3', 'ex-1-4-5', 'ex-1-4-6']
  },

  // МОДУЛЬ 2: Настоящее время
  'lesson-2-1': {
    id: 'lesson-2-1',
    title: 'Урок 1: Предлоги и числительные',
    moduleId: 'module-2',
    grammar: {
      title: 'Простые предлоги и количественные числительные 0-100',
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
      `,
      examples: [
        { spanish: 'Voy a la escuela', translation: 'Я иду в школу' },
        { spanish: 'Vengo del museo', translation: 'Я прихожу из музея' },
        { spanish: 'Estoy en casa', translation: 'Я дома' },
        { spanish: 'Tengo veinticinco años', translation: 'Мне 25 лет' }
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
      { word: 'diez', translation: 'десять', audioUrl: null },
      { word: 'veinte', translation: 'двадцать', audioUrl: null },
      { word: 'treinta', translation: 'тридцать', audioUrl: null },
      { word: 'cincuenta', translation: 'пятьдесят', audioUrl: null },
      { word: 'cien', translation: 'сто', audioUrl: null }
    ],
    readingText: {
      title: 'Números y lugares',
      content: `Hola, vivo en Madrid. Voy a la universidad en metro. La universidad está en el centro. Voy al museo con mis amigos. El museo está en la calle Principal, número cincuenta.

Mi amigo Pedro viene de Barcelona. Él vive en la calle Mayor, número veinticinco. Vamos al cine por las tardes. El cine está cerca del parque.

Tengo veinte años. Mi hermana tiene treinta años. Mi padre tiene cincuenta y cinco años. Vivimos en un apartamento en el número ciento uno.

Voy a clase en autobús. Vengo de casa a las ocho. Estoy en la universidad hasta las seis. Después voy al café con amigos.`,
      translation: 'Привет, я живу в Мадриде. Я езжу в университет на метро. Университет находится в центре. Я хожу в музей с друзьями. Музей находится на улице Принсипаль, номер 50.\n\nМой друг Педро из Барселоны. Он живет на улице Майор, номер 25. Мы ходим в кино по вечерам. Кино находится рядом с парком.\n\nМне 20 лет. Моей сестре 30 лет. Моему отцу 55 лет. Мы живем в квартире номер 101.\n\nЯ езжу на занятия на автобусе. Я выхожу из дома в 8. Я в университете до шести. Потом иду в кафе с друзьями.',
      audioUrl: '/audio/lesson-2-1-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Hola, vivo en Madrid.' },
        { start: 5, end: 10, text: 'Voy a la universidad en metro.' },
        { start: 10, end: 15, text: 'Mi amigo Pedro viene de Barcelona.' },
        { start: 15, end: 20, text: 'Tengo veinte años.' }
      ]
    },
    exercises: ['ex-2-1-1', 'ex-2-1-2', 'ex-2-1-3', 'ex-2-1-4', 'ex-2-1-5', 'ex-2-1-6-conj', 'ex-2-1-7-err']
  },
  'lesson-2-2': {
    id: 'lesson-2-2',
    title: 'Урок 2: Правильные глаголы в настоящем времени',
    moduleId: 'module-2',
    grammar: {
      title: 'Спряжение правильных глаголов в Presente de Indicativo',
      content: `
# Спряжение правильных глаголов в настоящем времени

Испанские глаголы делятся на три спряжения:
- I спряжение: глаголы на **-ar**
- II спряжение: глаголы на **-er**
- III спряжение: глаголы на **-ir**

## I спряжение (-ar): HABLAR (говорить)

| Лицо | Forma | Русский |
|------|-------|---------|
| yo | hablo | я говорю |
| tú | hablas | ты говоришь |
| él/ella/usted | habla | он/она говорит |
| nosotros(-as) | hablamos | мы говорим |
| vosotros(-as) | habláis | вы говорите |
| ellos/ellas/ustedes | hablan | они говорят |

**Другие глаголы:** llamar, preguntar, escuchar, tomar

## II спряжение (-er): COMER (есть)

| Лицо | Forma | Русский |
|------|-------|---------|
| yo | como | я ем |
| tú | comes | ты ешь |
| él/ella/usted | come | он/она ест |
| nosotros(-as) | comemos | мы едим |
| vosotros(-as) | coméis | вы едите |
| ellos/ellas/ustedes | comen | они едят |

**Другие глаголы:** leer, aprender, comprender

## III спряжение (-ir): VIVIR (жить)

| Лицо | Forma | Русский |
|------|-------|---------|
| yo | vivo | я живу |
| tú | vives | ты живешь |
| él/ella/usted | vive | он/она живет |
| nosotros(-as) | vivimos | мы живем |
| vosotros(-as) | vivís | вы живете |
| ellos/ellas/ustedes | viven | они живут |

**Другие глаголы:** abrir, escribir

## Выражения с глаголом TOMAR

- tomar café — пить кофе
- tomar el bus — сесть на автобус
- tomar una decisión — принять решение
- tomar el sol — загорать
      `,
      examples: [
        { spanish: 'Yo hablo español', translation: 'Я говорю по-испански' },
        { spanish: 'Ellos comen frutas', translation: 'Они едят фрукты' },
        { spanish: 'Nosotros vivimos en Madrid', translation: 'Мы живем в Мадриде' }
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
      { word: 'recibir', translation: 'получать', audioUrl: null },
      { word: 'tomar', translation: 'брать, взять, пить (напитки), принимать', audioUrl: null },
      { word: 'Yo tomo café con leche cada mañana', translation: 'Я пью кофе с молоком каждое утро', audioUrl: null },
      { word: 'Mi hermana toma el autobús a la escuela', translation: 'Моя сестра едет на автобусе в школу', audioUrl: null },
      { word: 'Nosotros tomamos el sol en la playa', translation: 'Мы загораем на пляже', audioUrl: null },
      { word: '¿Tú tomas un bocadillo para el almuerzo?', translation: 'Ты берешь бутерброд на обед?', audioUrl: null },
      { word: 'Los niños toman sus mochilas para salir al recreo', translation: 'Дети берут свои рюкзаки чтобы выйти на перемену', audioUrl: null },
      { word: 'La abuela toma una medicina cada noche', translation: 'Бабушка принимает лекарство каждый вечер', audioUrl: null },
      { word: 'Yo tomo un zumo de naranja en el desayuno', translation: 'Я пью апельсиновый сок на завтрак', audioUrl: null },
      { word: 'Mi padre no toma el tren, él va en coche', translation: 'Мой отец не едет на поезде, он едет на машине', audioUrl: null },
      { word: '¿Ustedes toman agua después de correr?', translation: 'Вы пьете воду после бега?', audioUrl: null },
      { word: 'El profesor toma mi libro para revisarlo', translation: 'Преподаватель берет мою книгу чтобы проверить ее', audioUrl: null }
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
      translation: 'Моя семья\n\nМеня зовут Карлос, и я расскажу о моей семье. Нас всего шесть человек. Мы живем в большом доме на окраине Валенсии.\n\nМоих родителей зовут Хосе и Мария. Мой отец - инженер и работает в строительной компании. Ему очень нравится его работа, потому что он строит важные здания. Моя мать - учительница английского в начальной школе. Она любит учить детей и всегда приходит домой с интересными историями.\n\nУ меня два брата и сестры: мой старший брат Педро, ему 20 лет, и он изучает медицину в университете. Он хочет стать врачом, как наш дедушка. Моей младшей сестре Лауре всего 8 лет. Она очень шаловливая, но очаровательная. Она любит рисовать и играть с нашей собакой Максом.\n\nТакже со мной живет моя бабушка по отцовской линии, мать моего отца. Ей 75 лет, но она очень активна. Она готовит восхитительно и рассказывает нам истории о том, когда была молодой. Каждое воскресенье вся семья ест вместе. Моя бабушка готовит свою знаменитую валенсийскую паэлью.\n\nУ меня много дядей, тетей и двоюродных братьев, но они не живут с нами. Мы видимся на праздниках и каникулах. Мой дядя Альберто живет в Барселоне и работает музыкантом. Когда он приезжает к нам, он играет на гитаре, и мы поем вместе.\n\nЯ чувствую себя очень счастливым иметь такую сплоченную и любящую семью. Мы проводим много времени вместе и поддерживаем друг друга во всем.',
      audioUrl: '/audio/lesson-3-1-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Me llamo Carlos y voy a hablar sobre mi familia.' },
        { start: 5, end: 10, text: 'Somos seis personas en total.' },
        { start: 10, end: 15, text: 'Mis padres se llaman José y María.' },
        { start: 15, end: 20, text: 'Tengo dos hermanos: Pedro y Laura.' },
        { start: 20, end: 25, text: 'También vivo con mi abuela paterna.' }
      ]
    },
    exercises: ['ex-3-1-1', 'ex-3-1-2', 'ex-3-1-3', 'ex-3-1-4', 'ex-3-1-5-def', 'ex-3-1-6-coll']
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
    readingText: {
      title: 'El trabajo de mis padres',
      content: `Mis padres tienen trabajos muy interesantes y diferentes. Mi madre es médica y mi padre es profesor. Los dos aman lo que hacen.

Mi madre trabaja en el Hospital General de Madrid. Es cirujana y opera a pacientes todos los días. Su trabajo es muy difícil y requiere mucha concentración. Se levanta muy temprano, a las seis de la mañana, porque sus operaciones empiezan a las ocho. A veces trabaja hasta tarde por la noche si hay emergencias.

Ella dice que lo mejor de su trabajo es ayudar a las personas. Cuando un paciente se recupera y puede volver a casa con su familia, ella se siente muy feliz. Lo más difícil es trabajar tantas horas y tener poco tiempo libre. Pero está muy orgullosa de su profesión.

Mi padre es profesor de historia en un instituto. Enseña a estudiantes de 15 a 18 años. Le encanta su trabajo porque le gusta compartir su conocimiento con los jóvenes. Prepara sus clases con mucho cuidado para que sean interesantes y divertidas.

Él comienza a trabajar a las ocho y media de la mañana y termina a las tres de la tarde. Después de las clases, a veces ayuda a los estudiantes con sus tareas o prepara exámenes. Los veranos son especiales para él porque tiene dos meses de vacaciones y puede leer y viajar.

Mi padre dice que lo mejor de ser profesor es ver cómo sus estudiantes aprenden y crecen. Muchos de sus antiguos alumnos todavía lo visitan y le cuentan sobre sus vidas. Eso lo hace muy feliz.

Aunque tienen profesiones muy diferentes, mis padres tienen algo en común: los dos trabajan con personas y los dos quieren hacer del mundo un lugar mejor. Estoy muy orgulloso de ellos.`,
      translation: 'Работа моих родителей\n\nУ моих родителей очень интересные и разные работы. Моя мать - врач, а отец - учитель. Оба любят то, что делают.\n\nМоя мать работает в Главной больнице Мадрида. Она хирург и оперирует пациентов каждый день. Ее работа очень сложная и требует большой концентрации. Она встает очень рано, в шесть утра, потому что ее операции начинаются в восемь. Иногда она работает допоздна, если есть чрезвычайные ситуации.\n\nОна говорит, что лучшее в ее работе - помогать людям. Когда пациент выздоравливает и может вернуться домой к семье, она чувствует себя очень счастливой. Самое трудное - работать столько часов и иметь мало свободного времени. Но она очень гордится своей профессией.\n\nМой отец - учитель истории в институте. Он преподает студентам от 15 до 18 лет. Ему нравится его работа, потому что он любит делиться своими знаниями с молодежью. Он тщательно готовит свои уроки, чтобы они были интересными и веселыми.\n\nОн начинает работать в половине девятого утра и заканчивает в три дня. После занятий он иногда помогает студентам с их домашними заданиями или готовит экзамены. Лето для него особенное, потому что у него два месяца отпуска, и он может читать и путешествовать.\n\nМой отец говорит, что лучшее в том, чтобы быть учителем - видеть, как его ученики учатся и растут. Многие его бывшие ученики до сих пор навещают его и рассказывают о своей жизни. Это делает его очень счастливым.\n\nХотя у них очень разные профессии, у моих родителей есть кое-что общее: они оба работают с людьми и оба хотят сделать мир лучше. Я очень горжусь ими.',
      audioUrl: '/audio/lesson-3-2-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Mis padres tienen trabajos muy interesantes y diferentes.' },
        { start: 5, end: 10, text: 'Mi madre es médica y mi padre es profesor.' },
        { start: 10, end: 15, text: 'Mi madre trabaja en el Hospital General de Madrid.' },
        { start: 15, end: 20, text: 'Mi padre es profesor de historia en un instituto.' }
      ]
    },
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
    readingText: {
      title: 'Mis pasatiempos favoritos',
      content: `Me llamo Elena y tengo muchos pasatiempos interesantes. En mi tiempo libre me gusta hacer diferentes actividades porque creo que es importante tener un equilibrio en la vida.

Mi pasatiempo favorito es la lectura. Me encantan los libros, especialmente las novelas de misterio y fantasía. Leo casi todos los días antes de dormir. Tengo una biblioteca grande en mi casa con más de doscientos libros. Mi escritor favorito es Gabriel García Márquez. Sus historias son mágicas y fascinantes.

También me gusta mucho el deporte. Practico natación tres veces por semana en la piscina municipal. La natación me relaja y me ayuda a mantenerme en forma. Los fines de semana juego al tenis con mi hermano. Él es mejor que yo, pero me divierto mucho intentando ganarle.

A mi novio le encanta la música y gracias a él yo también he desarrollado este interés. Vamos juntos a conciertos de música clásica y rock. Él toca la guitarra y a veces me enseña algunas canciones. Me gustaría aprender a tocar el piano algún día.

Otro de mis pasatiempos es la fotografía. Me gusta capturar momentos especiales con mi cámara. Especialmente disfruto fotografiar paisajes naturales y arquitectura antigua. He hecho algunos cursos de fotografía y mis fotos han mejorado mucho. Me gustaría organizar una exposición de mis mejores trabajos.

Los viernes por la noche me encanta ir al cine con mis amigos. Vemos todo tipo de películas: comedias, dramas, películas de acción. Después de la película siempre vamos a tomar algo y comentamos lo que hemos visto.

En verano me apasiona viajar. He visitado muchos países de Europa: Francia, Italia, Portugal, Alemania. Cada lugar tiene su encanto especial. Me gusta conocer nuevas culturas, probar comidas diferentes y practicar idiomas. Mi próximo destino es Grecia. Las islas griegas me parecen increíbles.

Todos estos pasatiempos me hacen feliz y me ayudan a desconectar del estrés diario. Creo que es fundamental dedicar tiempo a las cosas que nos gustan.`,
      translation: 'Мои любимые хобби\n\nМеня зовут Елена, и у меня много интересных хобби. В свободное время мне нравится заниматься разными делами, потому что я считаю, что важно иметь баланс в жизни.\n\nМое любимое хобби - чтение. Я обожаю книги, особенно детективы и фэнтези. Я читаю почти каждый день перед сном. У меня большая библиотека дома с более чем двумястами книг. Мой любимый писатель - Габриэль Гарсия Маркес. Его истории волшебные и захватывающие.\n\nМне также очень нравится спорт. Я занимаюсь плаванием три раза в неделю в муниципальном бассейне. Плавание расслабляет меня и помогает оставаться в форме. По выходным я играю в теннис с моим братом. Он играет лучше меня, но мне очень весело пытаться его победить.\n\nМой парень обожает музыку, и благодаря ему я тоже развила этот интерес. Мы вместе ходим на концерты классической музыки и рока. Он играет на гитаре и иногда учит меня некоторым песням. Я бы хотела научиться играть на пианино когда-нибудь.\n\nЕще одно мое хобби - фотография. Мне нравится запечатлевать особенные моменты с моей камерой. Особенно мне нравится фотографировать природные пейзажи и старинную архитектуру. Я прошла несколько курсов фотографии, и мои фотографии сильно улучшились. Я хотела бы организовать выставку моих лучших работ.\n\nПо пятницам вечером я обожаю ходить в кино с друзьями. Мы смотрим все виды фильмов: комедии, драмы, боевики. После фильма мы всегда идем выпить и обсуждаем то, что посмотрели.\n\nЛетом я увлекаюсь путешествиями. Я посетила много стран Европы: Францию, Италию, Португалию, Германию. Каждое место имеет свое особое очарование. Мне нравится знакомиться с новыми культурами, пробовать разную еду и практиковать языки. Мой следующий пункт назначения - Греция. Греческие острова кажутся мне невероятными.\n\nВсе эти хобби делают меня счастливой и помогают мне отвлечься от повседневного стресса. Я считаю, что очень важно уделять время тому, что нам нравится.',
      audioUrl: '/audio/lesson-3-3-reading.mp3',
      subtitles: [
        { start: 0, end: 5, text: 'Me llamo Elena y tengo muchos pasatiempos interesantes.' },
        { start: 5, end: 10, text: 'Mi pasatiempo favorito es la lectura.' },
        { start: 10, end: 15, text: 'También me gusta mucho el deporte.' },
        { start: 15, end: 20, text: 'Otro de mis pasatiempos es la fotografía.' }
      ]
    },
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
    description: 'Поставьте глагол и прилагательное в нужную форму по образцу',
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
      { spanish: 'pintor', options: ['поэт', 'музыкант', 'художник', 'банкир'], correct: 2 }
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
      { sentence: 'Yo ___ ruso', options: ['soy', 'eres', 'es', 'son'], correct: 0 }
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
    description: 'Выберите правильный ответ',
    questions: [
      { verb: 'estudiar', tense: 'Presente', pronoun: 'nosotros', options: ['estudio', 'estudias', 'estudiamos', 'estudian'], correct: 2 },
      { verb: 'trabajar', tense: 'Presente', pronoun: 'ella', options: ['trabajo', 'trabajas', 'trabaja', 'trabajamos'], correct: 2 }
    ]
  },

  'ex-2-1-7-err': {
    id: 'ex-2-1-7-err',
    type: 'error-correction',
    title: 'Исправьте ошибки',
    description: 'Выберите правильный ответ',
    questions: [
      { sentence: 'Yo estudias español', correct: 'yo estudio español' },
      { sentence: 'Ella trabajan en Madrid', correct: 'ella trabaja en madrid' }
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
