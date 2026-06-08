const courseLevels = [
  {
    code: "A0",
    title: "Полный ноль",
    short: "алфавит и звук",
    description: "Сначала учим письмо, чтение, произношение и самые первые слова. Цель A0 - перестать бояться языка и понимать, как читать.",
    lessons: [
      { id: "alphabet", title: "Алфавит", subtitle: "буквы, знаки, чтение" },
      { id: "pronunciation", title: "Произношение", subtitle: "как звучит язык" },
      { id: "firstWords", title: "Первые 5 слов", subtitle: "слово + чтение + смысл" }
    ]
  },
  {
    code: "A1",
    title: "Первые фразы",
    short: "слова и настоящее",
    description: "Учим ежедневные слова, простые фразы и настоящее время. На этом этапе ученик уже может сказать базовые вещи о себе.",
    lessons: [
      { id: "dailyWords", title: "5 слов в день", subtitle: "минимум на сегодня" },
      { id: "present", title: "Настоящее", subtitle: "как сказать «я делаю»" },
      { id: "practice", title: "Тренировка", subtitle: "проверка фраз" }
    ]
  },
  {
    code: "A2",
    title: "Время и действия",
    short: "прошлое и будущее",
    description: "Добавляем прошедшее и будущее. Ученик начинает говорить: что делал, что делает и что будет делать.",
    lessons: [
      { id: "pastFuture", title: "Прошлое и будущее", subtitle: "3 времени вместе" },
      { id: "dailyWords", title: "Слова в 3 временах", subtitle: "слово сразу в фразе" },
      { id: "practice", title: "Тренировка", subtitle: "выбери правильное время" }
    ]
  },
  {
    code: "A3",
    title: "Разговорный мост",
    short: "вопросы и ответы",
    description: "Учимся связывать фразы: вопросы, ответы, просьбы, объяснение простых причин и короткие диалоги.",
    lessons: [
      { id: "dialogues", title: "Диалоги", subtitle: "магазин, дорога, знакомство" },
      { id: "questionPatterns", title: "Вопросы", subtitle: "как спросить правильно" },
      { id: "practice", title: "Тренировка", subtitle: "мини-диалоги" }
    ]
  },
  {
    code: "B1",
    title: "Разговорный уровень",
    short: "свободная база",
    description: "Ученик говорит о дне, семье, работе, учебе, планах и умеет поддержать простой разговор без подготовки.",
    lessons: [
      { id: "story", title: "Рассказ о себе", subtitle: "прошлое + настоящее + планы" },
      { id: "connectors", title: "Связки речи", subtitle: "потому что, но, потом" },
      { id: "practice", title: "Тренировка", subtitle: "ответы полными фразами" }
    ]
  },
  {
    code: "B2",
    title: "Уверенная речь",
    short: "мнение и детали",
    description: "Добавляем мнение, аргументы, уточнения, более длинные фразы и устойчивые выражения.",
    lessons: [
      { id: "opinion", title: "Мнение", subtitle: "я думаю, мне кажется" },
      { id: "advancedGrammar", title: "Грамматика", subtitle: "сложные формы мягко" },
      { id: "practice", title: "Тренировка", subtitle: "ответ с причиной" }
    ]
  },
  {
    code: "C1",
    title: "Свобода языка",
    short: "почти совершенство",
    description: "Цель - говорить естественно: понимать оттенки, быстро строить речь и не переводить каждую фразу в голове.",
    lessons: [
      { id: "naturalSpeech", title: "Естественная речь", subtitle: "как говорят носители" },
      { id: "fluency", title: "Беглость", subtitle: "скорость и уверенность" },
      { id: "practice", title: "Тренировка", subtitle: "свободный ответ" }
    ]
  }
];

const japaneseHiragana = [
  ["あ", "a", "как короткое «а»"],
  ["い", "i", "как «и»"],
  ["う", "u", "между «у» и слабым «ы»"],
  ["え", "e", "как «э»"],
  ["お", "o", "как «о»"],
  ["か", "ka", "ка"],
  ["き", "ki", "ки"],
  ["く", "ku", "ку"],
  ["け", "ke", "кэ"],
  ["こ", "ko", "ко"],
  ["さ", "sa", "са"],
  ["し", "shi", "мягко, ближе к «щи»"],
  ["す", "su", "су, часто звучит очень кратко"],
  ["せ", "se", "сэ"],
  ["そ", "so", "со"],
  ["た", "ta", "та"],
  ["ち", "chi", "чи"],
  ["つ", "tsu", "цу"],
  ["て", "te", "тэ"],
  ["と", "to", "то"],
  ["な", "na", "на"],
  ["に", "ni", "ни"],
  ["ぬ", "nu", "ну"],
  ["ね", "ne", "нэ"],
  ["の", "no", "но"],
  ["は", "ha/wa", "как частица читается wa"],
  ["ひ", "hi", "хи"],
  ["ふ", "fu", "мягкое фу без сильного f"],
  ["へ", "he/e", "как частица читается e"],
  ["ほ", "ho", "хо"],
  ["ま", "ma", "ма"],
  ["み", "mi", "ми"],
  ["む", "mu", "му"],
  ["め", "me", "мэ"],
  ["も", "mo", "мо"],
  ["や", "ya", "я"],
  ["ゆ", "yu", "ю"],
  ["よ", "yo", "ё"],
  ["ら", "ra", "между r и l"],
  ["り", "ri", "ри"],
  ["る", "ru", "ру"],
  ["れ", "re", "рэ"],
  ["ろ", "ro", "ро"],
  ["わ", "wa", "ва/уа"],
  ["を", "o", "частица объекта"],
  ["ん", "n", "носовой н"]
];

const alphabets = {
  russian: "А а,Б б,В в,Г г,Д д,Е е,Ё ё,Ж ж,З з,И и,Й й,К к,Л л,М м,Н н,О о,П п,Р р,С с,Т т,У у,Ф ф,Х х,Ц ц,Ч ч,Ш ш,Щ щ,Ъ,Ы ы,Ь,Э э,Ю ю,Я я"
    .split(",")
    .map((symbol) => [symbol, symbol.split(" ")[0].toLowerCase(), "кириллическая буква"]),
  georgian: "ა:a,ბ:b,გ:g,დ:d,ე:e,ვ:v,ზ:z,თ:t,ი:i,კ:k',ლ:l,მ:m,ნ:n,ო:o,პ:p',ჟ:zh,რ:r,ს:s,ტ:t',უ:u,ფ:p,ქ:k,ღ:gh,ყ:q',შ:sh,ჩ:ch,ც:ts,ძ:dz,წ:ts',ჭ:ch',ხ:kh,ჯ:j,ჰ:h"
    .split(",")
    .map((item) => {
      const [symbol, reading] = item.split(":");
      return [symbol, reading, "грузинская буква"];
    }),
  german: "A:a,B:be,C:tse,D:de,E:e,F:ef,G:ge,H:ha,I:i,J:yot,K:ka,L:el,M:em,N:en,O:o,P:pe,Q:ku,R:er,S:es,T:te,U:u,V:fau,W:ve,X:iks,Y:ypsilon,Z:tset,Ä:ae,Ö:oe,Ü:ue,ß:ess-tsett"
    .split(",")
    .map((item) => item.split(":").concat("немецкая буква")),
  danish: "A:a,B:be,C:se,D:de,E:e,F:ef,G:ge,H:ho,I:i,J:jod,K:ko,L:el,M:em,N:en,O:o,P:pe,Q:ku,R:ar,S:es,T:te,U:u,V:ve,W:dobbelt-ve,X:eks,Y:y, Z:set,Æ:ae,Ø:oe,Å:å"
    .replace("Y:y, Z", "Y:y,Z")
    .split(",")
    .map((item) => item.split(":").concat("датская буква")),
  italian: "A:a,B:bi,C:chi,D:di,E:e,F:effe,G:gi,H:acca,I:i,L:elle,M:emme,N:enne,O:o,P:pi,Q:cu,R:erre,S:esse,T:ti,U:u,V:vu,Z:zeta"
    .split(",")
    .map((item) => item.split(":").concat("итальянская буква")),
  english: "A:ei,B:bi,C:si,D:di,E:i,F:ef,G:dji,H:eich,I:ai,J:djei,K:kei,L:el,M:em,N:en,O:ou,P:pi,Q:kyu,R:ar,S:es,T:ti,U:yu,V:vi,W:dabl-yu,X:eks,Y:wai,Z:zed/zi"
    .split(",")
    .map((item) => item.split(":").concat("английская буква"))
};

const languages = [
  {
    id: "japanese",
    name: "Японский",
    nativeName: "日本語",
    script: "хирагана, катакана, кандзи, ромадзи",
    goal: "Если знаний ноль, начинаем с хираганы, коротких звуков и чтения по слогам. Потом добавляем 5 слов в день, три времени и простые разговорные фразы.",
    alphabetIntro: "В японском сначала учим хирагану: это базовая слоговая азбука. Каждый знак обычно читается как один слог.",
    alphabet: japaneseHiragana,
    pronunciation: [
      "Гласные короткие и чистые: a, i, u, e, o. Их не надо сильно тянуть.",
      "R в японском мягкая: звук между русским «р» и «л».",
      "Ударение не такое сильное, как в русском. Лучше говорить ровно и спокойно.",
      "ん читается как носовой n и может звучать чуть по-разному перед разными звуками."
    ],
    words: [
      { term: "こんにちは", reading: "konnichiwa", meaning: "здравствуйте", sound: "ko-n-ni-chi-wa", forms: { present: ["こんにちはと言います", "я говорю «здравствуйте»"], past: ["こんにちはと言いました", "я сказал «здравствуйте»"], future: ["こんにちはと言います", "я скажу «здравствуйте»"] } },
      { term: "ありがとう", reading: "arigato", meaning: "спасибо", sound: "a-ri-ga-to", forms: { present: ["ありがとうと言います", "я говорю «спасибо»"], past: ["ありがとうと言いました", "я сказал «спасибо»"], future: ["ありがとうと言います", "я скажу «спасибо»"] } },
      { term: "水", reading: "mizu", meaning: "вода", sound: "mi-zu", forms: { present: ["水を飲みます", "я пью воду"], past: ["水を飲みました", "я пил воду"], future: ["水を飲みます", "я буду пить воду"] } },
      { term: "食べる", reading: "taberu", meaning: "есть", sound: "ta-be-ru", forms: { present: ["食べます", "я ем"], past: ["食べました", "я ел"], future: ["食べます", "я буду есть"] } },
      { term: "行く", reading: "iku", meaning: "идти", sound: "i-ku", forms: { present: ["行きます", "я иду"], past: ["行きました", "я ходил"], future: ["明日行きます", "я пойду завтра"] } }
    ],
    grammar: {
      present: { title: "Настоящее и ближайшее будущее", rule: "Вежливая форма часто заканчивается на -ます: 食べます, 行きます.", note: "Будущее часто понятно по слову времени: 明日 - завтра." },
      past: { title: "Прошедшее", rule: "Вежливое прошедшее заканчивается на -ました: 食べました.", note: "Отрицательное прошедшее: 食べませんでした." },
      future: { title: "Будущее", rule: "Отдельного будущего времени нет: добавляют 明日, 来週 или выражение намерения.", note: "Для старта достаточно схемы: завтра + форма настоящего." }
    }
  },
  {
    id: "russian",
    name: "Русский",
    nativeName: "Русский",
    script: "кириллица",
    goal: "Начинаем с кириллицы, мягких и твердых звуков, потом учим ежедневные слова, род, число и времена глаголов.",
    alphabetIntro: "Русский алфавит состоит из 33 букв. Важно сразу отличать буквы от звуков: е, ё, ю, я могут давать два звука.",
    alphabet: alphabets.russian,
    pronunciation: [
      "Мягкий знак ь не звучит сам, но смягчает предыдущий согласный.",
      "Ж и ш всегда звучат твердо.",
      "Безударная о часто звучит ближе к а.",
      "Р произносится вибрацией кончика языка."
    ],
    words: [
      { term: "привет", reading: "privet", meaning: "hello", sound: "при-вет", forms: { present: ["я говорю привет", "I say hello"], past: ["я сказал привет", "I said hello"], future: ["я скажу привет", "I will say hello"] } },
      { term: "спасибо", reading: "spasibo", meaning: "thank you", sound: "спа-си-бо", forms: { present: ["я благодарю", "I thank"], past: ["я поблагодарил", "I thanked"], future: ["я поблагодарю", "I will thank"] } },
      { term: "вода", reading: "voda", meaning: "water", sound: "ва-да", forms: { present: ["я пью воду", "I drink water"], past: ["я пил воду", "I drank water"], future: ["я буду пить воду", "I will drink water"] } },
      { term: "есть", reading: "yest", meaning: "to eat", sound: "есть", forms: { present: ["я ем", "I eat"], past: ["я ел / ела", "I ate"], future: ["я буду есть", "I will eat"] } },
      { term: "идти", reading: "idti", meaning: "to go", sound: "ид-ти", forms: { present: ["я иду", "I go"], past: ["я шёл / шла", "I went"], future: ["я пойду", "I will go"] } }
    ],
    grammar: {
      present: { title: "Настоящее", rule: "Глагол меняется по лицам: я говорю, ты говоришь, он говорит.", note: "У «быть» в настоящем обычно нет формы: я дома." },
      past: { title: "Прошедшее", rule: "Форма зависит от рода: говорил, говорила, говорили.", note: "Сначала учим «я + форма»: я был, я ел, я ходил." },
      future: { title: "Будущее", rule: "Можно сказать буду + инфинитив: буду говорить. Или совершенный вид: скажу.", note: "Для новичка удобно начинать с «буду + инфинитив»." }
    }
  },
  {
    id: "georgian",
    name: "Грузинский",
    nativeName: "ქართული",
    script: "грузинское письмо",
    goal: "С полного нуля начинаем с 33 букв, чтения слева направо и звуков, которых нет в русском. Потом учим готовые фразы и формы глаголов.",
    alphabetIntro: "Грузинское письмо читается слева направо. У букв нет заглавной формы, но есть звуки с придыханием и резким произношением.",
    alphabet: alphabets.georgian,
    pronunciation: [
      "Апостроф в чтении показывает резкий звук: k', p', t', ts', ch'.",
      "ყ q' - один из самых трудных звуков; сначала учи его медленно.",
      "Речь может иметь группы согласных подряд, поэтому полезно разбивать слово на части.",
      "Ударение обычно не очень сильное."
    ],
    words: [
      { term: "გამარჯობა", reading: "gamarjoba", meaning: "здравствуйте", sound: "ga-mar-jo-ba", forms: { present: ["მე ვამბობ გამარჯობას", "я говорю здравствуйте"], past: ["მე ვთქვი გამარჯობა", "я сказал здравствуйте"], future: ["მე ვიტყვი გამარჯობას", "я скажу здравствуйте"] } },
      { term: "მადლობა", reading: "madloba", meaning: "спасибо", sound: "mad-lo-ba", forms: { present: ["მე ვამბობ მადლობას", "я говорю спасибо"], past: ["მე ვთქვი მადლობა", "я сказал спасибо"], future: ["მე ვიტყვი მადლობას", "я скажу спасибо"] } },
      { term: "წყალი", reading: "tsq'ali", meaning: "вода", sound: "ts-q'a-li", forms: { present: ["მე წყალს ვსვამ", "я пью воду"], past: ["მე წყალი დავლიე", "я выпил воду"], future: ["მე წყალს დავლევ", "я выпью воду"] } },
      { term: "ჭამა", reading: "ch'ama", meaning: "есть", sound: "ch'a-ma", forms: { present: ["მე ვჭამ", "я ем"], past: ["მე ვჭამე", "я ел"], future: ["მე შევჭამ", "я буду есть"] } },
      { term: "წასვლა", reading: "ts'asvla", meaning: "идти", sound: "ts'as-vla", forms: { present: ["მე მივდივარ", "я иду"], past: ["მე წავედი", "я пошел"], future: ["მე წავალ", "я пойду"] } }
    ],
    grammar: {
      present: { title: "Настоящее", rule: "Глагол часто уже показывает лицо: ვჭამ - я ем.", note: "Местоимение მე можно опускать, но новичку лучше сначала говорить полностью." },
      past: { title: "Прошедшее", rule: "Частые формы лучше учить блоками: წავედი - я пошел.", note: "В грузинском несколько серий времен; на старте берем разговорные формы." },
      future: { title: "Будущее", rule: "Будущее часто имеет отдельную форму: წავალ - пойду.", note: "Приставки сильно меняют смысл, поэтому учим глагол сразу во фразе." }
    }
  },
  {
    id: "german",
    name: "Немецкий",
    nativeName: "Deutsch",
    script: "латиница + ä ö ü ß",
    goal: "Сначала читаем буквы и буквосочетания, потом учим слова с артиклями, настоящее время, Perfekt и будущее.",
    alphabetIntro: "В немецком латинский алфавит плюс ä, ö, ü и ß. Важно отдельно учить ch, sch, ei, ie, eu.",
    alphabet: alphabets.german,
    pronunciation: [
      "sch читается как «ш»: Schule.",
      "ei читается как «ай», а ie как длинное «и».",
      "ch после a/o/u звучит тверже, после i/e мягче.",
      "ß читается как долгий «с»."
    ],
    words: [
      { term: "hallo", reading: "ha-lo", meaning: "привет", sound: "ха-ло", forms: { present: ["ich sage hallo", "я говорю привет"], past: ["ich habe hallo gesagt", "я сказал привет"], future: ["ich werde hallo sagen", "я скажу привет"] } },
      { term: "danke", reading: "dan-ke", meaning: "спасибо", sound: "дан-ке", forms: { present: ["ich danke dir", "я благодарю тебя"], past: ["ich habe dir gedankt", "я поблагодарил тебя"], future: ["ich werde dir danken", "я поблагодарю тебя"] } },
      { term: "Wasser", reading: "vas-ser", meaning: "вода", sound: "вас-сер", forms: { present: ["ich trinke Wasser", "я пью воду"], past: ["ich habe Wasser getrunken", "я пил воду"], future: ["ich werde Wasser trinken", "я буду пить воду"] } },
      { term: "essen", reading: "es-sen", meaning: "есть", sound: "эс-сен", forms: { present: ["ich esse", "я ем"], past: ["ich habe gegessen", "я ел"], future: ["ich werde essen", "я буду есть"] } },
      { term: "gehen", reading: "ge-hen", meaning: "идти", sound: "ге-эн", forms: { present: ["ich gehe", "я иду"], past: ["ich bin gegangen", "я ходил"], future: ["ich werde gehen", "я пойду"] } }
    ],
    grammar: {
      present: { title: "Präsens", rule: "ich gehe, du gehst, er geht. Настоящее часто работает и для ближайшего будущего.", note: "Morgen gehe ich - завтра я иду." },
      past: { title: "Perfekt", rule: "haben/sein + Partizip II: ich habe gegessen, ich bin gegangen.", note: "Движение часто берет sein." },
      future: { title: "Futur I", rule: "werden + инфинитив: ich werde essen.", note: "В разговоре часто используют Präsens + слово времени." }
    }
  },
  {
    id: "danish",
    name: "Датский",
    nativeName: "Dansk",
    script: "латиница + æ ø å",
    goal: "Начинаем с букв æ, ø, å и мягкого произношения. Потом учим простую структуру: глагол почти не меняется по лицам.",
    alphabetIntro: "Датский алфавит имеет 29 букв. Последние три - æ, ø, å. Произношение часто отличается от написания.",
    alphabet: alphabets.danish,
    pronunciation: [
      "Многие окончания звучат слабо или почти исчезают.",
      "R часто горловая и мягкая.",
      "D после гласной может звучать очень мягко.",
      "Stød - особый толчок голоса; сначала просто слушай и повторяй."
    ],
    words: [
      { term: "hej", reading: "hai", meaning: "привет", sound: "хай", forms: { present: ["jeg siger hej", "я говорю привет"], past: ["jeg sagde hej", "я сказал привет"], future: ["jeg vil sige hej", "я скажу привет"] } },
      { term: "tak", reading: "tak", meaning: "спасибо", sound: "так", forms: { present: ["jeg siger tak", "я говорю спасибо"], past: ["jeg sagde tak", "я сказал спасибо"], future: ["jeg vil sige tak", "я скажу спасибо"] } },
      { term: "vand", reading: "van", meaning: "вода", sound: "ван", forms: { present: ["jeg drikker vand", "я пью воду"], past: ["jeg drak vand", "я пил воду"], future: ["jeg vil drikke vand", "я буду пить воду"] } },
      { term: "spise", reading: "spi-se", meaning: "есть", sound: "спи-се", forms: { present: ["jeg spiser", "я ем"], past: ["jeg spiste", "я ел"], future: ["jeg vil spise", "я буду есть"] } },
      { term: "gå", reading: "go", meaning: "идти", sound: "го", forms: { present: ["jeg går", "я иду"], past: ["jeg gik", "я ходил"], future: ["jeg vil gå", "я пойду"] } }
    ],
    grammar: {
      present: { title: "Nutid", rule: "Обычно глагол получает -r: taler, spiser, går.", note: "Форма не меняется по лицам: jeg taler, du taler, vi taler." },
      past: { title: "Datid", rule: "Прошедшие формы надо учить: spiste, gik, drak.", note: "Частые глаголы часто неправильные." },
      future: { title: "Fremtid", rule: "vil/skal + инфинитив или настоящее + слово времени.", note: "Jeg går i morgen - я пойду завтра." }
    }
  },
  {
    id: "italian",
    name: "Итальянский",
    nativeName: "Italiano",
    script: "латиница",
    goal: "Начинаем с простого чтения: в итальянском буквы часто читаются стабильно. Потом учим окончания глаголов и живые фразы.",
    alphabetIntro: "В итальянском базово 21 буква. J, K, W, X, Y встречаются в заимствованных словах.",
    alphabet: alphabets.italian,
    pronunciation: [
      "C перед e/i читается как «ч»: ciao, cena.",
      "G перед e/i читается как «дж»: gelato.",
      "Ch читается как «к»: chi, che.",
      "Двойные согласные произносятся длиннее: acqua, mamma."
    ],
    words: [
      { term: "ciao", reading: "chao", meaning: "привет", sound: "чао", forms: { present: ["dico ciao", "я говорю привет"], past: ["ho detto ciao", "я сказал привет"], future: ["dirò ciao", "я скажу привет"] } },
      { term: "grazie", reading: "grat-tsie", meaning: "спасибо", sound: "гра-цие", forms: { present: ["dico grazie", "я говорю спасибо"], past: ["ho detto grazie", "я сказал спасибо"], future: ["dirò grazie", "я скажу спасибо"] } },
      { term: "acqua", reading: "ak-kwa", meaning: "вода", sound: "ак-ква", forms: { present: ["bevo acqua", "я пью воду"], past: ["ho bevuto acqua", "я пил воду"], future: ["berrò acqua", "я буду пить воду"] } },
      { term: "mangiare", reading: "man-ja-re", meaning: "есть", sound: "ман-джа-ре", forms: { present: ["mangio", "я ем"], past: ["ho mangiato", "я ел"], future: ["mangerò", "я буду есть"] } },
      { term: "andare", reading: "an-da-re", meaning: "идти", sound: "ан-да-ре", forms: { present: ["vado", "я иду"], past: ["sono andato / andata", "я ходил / ходила"], future: ["andrò", "я пойду"] } }
    ],
    grammar: {
      present: { title: "Presente", rule: "Окончание показывает лицо: parlo, mangio, vado.", note: "Местоимение io часто можно опустить." },
      past: { title: "Passato prossimo", rule: "avere/essere + participio: ho mangiato, sono andato.", note: "С essere форма меняется: andato/andata." },
      future: { title: "Futuro semplice", rule: "Отдельная форма будущего: parlerò, mangerò, andrò.", note: "Ближайшее будущее часто говорят настоящим: Domani vado." }
    }
  },
  {
    id: "english",
    name: "Английский",
    nativeName: "English",
    script: "латиница",
    goal: "Начинаем с букв и реального звучания слов, потому что английское написание не всегда совпадает с чтением. Потом учим базовые времена.",
    alphabetIntro: "Английский алфавит имеет 26 букв. Важно учить не только букву, но и звук в слове.",
    alphabet: alphabets.english,
    pronunciation: [
      "Th бывает звонким /ð/ и глухим /θ/: this, think.",
      "W произносится губами, не как русское «в».",
      "R обычно не дрожит, язык не касается неба.",
      "Одна буква может звучать по-разному: a в cat, name, water."
    ],
    words: [
      { term: "hello", reading: "he-lo", meaning: "привет", sound: "хе-лоу", forms: { present: ["I say hello", "я говорю привет"], past: ["I said hello", "я сказал привет"], future: ["I will say hello", "я скажу привет"] } },
      { term: "thank you", reading: "thenk yu", meaning: "спасибо", sound: "сэнк ю", forms: { present: ["I thank you", "я благодарю тебя"], past: ["I thanked you", "я поблагодарил тебя"], future: ["I will thank you", "я поблагодарю тебя"] } },
      { term: "water", reading: "wo-ter", meaning: "вода", sound: "уо-тер", forms: { present: ["I drink water", "я пью воду"], past: ["I drank water", "я пил воду"], future: ["I will drink water", "я буду пить воду"] } },
      { term: "eat", reading: "it", meaning: "есть", sound: "ит", forms: { present: ["I eat", "я ем"], past: ["I ate", "я ел"], future: ["I will eat", "я буду есть"] } },
      { term: "go", reading: "go", meaning: "идти", sound: "гоу", forms: { present: ["I go", "я иду"], past: ["I went", "я ходил"], future: ["I will go", "я пойду"] } }
    ],
    grammar: {
      present: { title: "Present Simple", rule: "I/you/we/they + verb, но he/she/it + verb-s.", note: "I go, she goes." },
      past: { title: "Past Simple", rule: "Обычные глаголы получают -ed, частые надо учить: go - went, eat - ate.", note: "В вопросах появляется did: Did you go?" },
      future: { title: "Future", rule: "will + verb: I will go. Для планов: going to.", note: "После will глагол без окончания." }
    }
  }
];

let selectedLanguage = localStorage.getItem("lingua-step-language") || "japanese";
let selectedLevel = localStorage.getItem("lingua-step-level") || "A0";
let selectedLesson = "alphabet";
let currentTask = null;

const savedProgress = JSON.parse(localStorage.getItem("lingua-step-progress") || "{}");

const languageToggle = document.querySelector("#language-toggle");
const languageMenu = document.querySelector("#language-menu");
const selectedLanguageName = document.querySelector("#selected-language-name");
const levelList = document.querySelector("#level-list");
const lessonTabs = document.querySelector("#lesson-tabs");
const lessonContent = document.querySelector("#lesson-content");
const markLevelButton = document.querySelector("#mark-level");

function getLanguage() {
  return languages.find((language) => language.id === selectedLanguage) || languages[0];
}

function getLevel() {
  return courseLevels.find((level) => level.code === selectedLevel) || courseLevels[0];
}

function getWordKey(index) {
  const today = new Date().toISOString().slice(0, 10);
  return `${today}:${selectedLanguage}:word:${index}`;
}

function getLevelKey() {
  return `${selectedLanguage}:level:${selectedLevel}`;
}

function saveProgress() {
  localStorage.setItem("lingua-step-progress", JSON.stringify(savedProgress));
}

function renderLanguageMenu() {
  const language = getLanguage();
  selectedLanguageName.textContent = `${language.name} - ${language.nativeName}`;
  languageMenu.innerHTML = languages
    .map(
      (item) => `
        <button class="language-option ${item.id === selectedLanguage ? "active" : ""}" data-language="${item.id}" type="button">
          <strong>${item.name}</strong>
          <small>${item.nativeName} · ${item.script}</small>
        </button>
      `
    )
    .join("");
}

function renderHero() {
  const language = getLanguage();
  const learnedCount = language.words.reduce((sum, _word, index) => sum + (savedProgress[getWordKey(index)] ? 1 : 0), 0);
  document.querySelector("#language-script").textContent = language.script;
  document.querySelector("#language-title").textContent = `${language.name} - ${language.nativeName}`;
  document.querySelector("#language-goal").textContent = language.goal;
  document.querySelector("#daily-count").textContent = `${learnedCount}/5`;
}

function renderLevels() {
  levelList.innerHTML = courseLevels
    .map(
      (level) => `
        <button class="level-button ${level.code === selectedLevel ? "active" : ""} ${savedProgress[`${selectedLanguage}:level:${level.code}`] ? "done" : ""}" data-level="${level.code}" type="button">
          <span class="level-code">${level.code}</span>
          <span>
            <strong>${level.title}</strong>
            <span>${level.short}</span>
          </span>
          <span class="done-dot" aria-hidden="true"></span>
        </button>
      `
    )
    .join("");
}

function renderLevelHeader() {
  const level = getLevel();
  document.querySelector("#level-title").textContent = `${level.code} · ${level.title}`;
  document.querySelector("#level-description").textContent = level.description;
  markLevelButton.textContent = savedProgress[getLevelKey()] ? "Этап пройден" : "Отметить этап";
}

function renderLessonTabs() {
  const level = getLevel();
  if (!level.lessons.some((lesson) => lesson.id === selectedLesson)) {
    selectedLesson = level.lessons[0].id;
  }

  lessonTabs.innerHTML = level.lessons
    .map(
      (lesson) => `
        <button class="lesson-tab ${lesson.id === selectedLesson ? "active" : ""}" data-lesson="${lesson.id}" type="button">
          ${lesson.title}
        </button>
      `
    )
    .join("");
}

function renderAlphabet() {
  const language = getLanguage();
  lessonContent.innerHTML = `
    <div class="note-box">${language.alphabetIntro}</div>
    <div class="alphabet-grid">
      ${language.alphabet
        .map(
          ([symbol, reading, hint]) => `
            <article class="alphabet-card">
              <strong>${symbol}</strong>
              <div class="reading">${reading}</div>
              <p class="hint">${hint}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPronunciation() {
  const language = getLanguage();
  lessonContent.innerHTML = `
    <div class="note-box">Сначала произноси медленно: знак или слово → чтение → смысл. Не пытайся сразу говорить быстро.</div>
    <div class="pronunciation-grid">
      ${language.pronunciation
        .map(
          (tip, index) => `
            <article class="lesson-card">
              <span class="lesson-number">Звук ${index + 1}</span>
              <h4>${tip.split(":")[0]}</h4>
              <p>${tip}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderWords() {
  const language = getLanguage();
  lessonContent.innerHTML = `
    <div class="note-box">Минимум на день - 5 слов. У каждого слова есть чтение, понятное произношение и пример в настоящем, прошедшем и будущем.</div>
    <div class="word-grid">
      ${language.words
        .map((word, index) => {
          const checked = Boolean(savedProgress[getWordKey(index)]);
          return `
            <article class="word-card ${checked ? "done" : ""}">
              <h4>${word.term}</h4>
              <div class="reading">${word.reading}</div>
              <p>${word.meaning} · произношение: ${word.sound}</p>
              <label>
                <input type="checkbox" data-word-index="${index}" ${checked ? "checked" : ""} />
                выучил сегодня
              </label>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderTenseRows(tenseKeys) {
  const language = getLanguage();
  return language.words
    .map(
      (word) => `
        <article class="lesson-card">
          <span class="lesson-number">${word.term} · ${word.reading}</span>
          <h4>${word.meaning}</h4>
          <div class="tense-examples">
            ${tenseKeys
              .map(
                (tense) => `
                  <div class="example-row">
                    <strong>${getTenseName(tense)}</strong>
                    <span class="phrase">${word.forms[tense][0]}</span>
                    <span>${word.forms[tense][1]}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderGrammar(tenseKeys) {
  const language = getLanguage();
  lessonContent.innerHTML = `
    <div class="lesson-grid">
      ${tenseKeys
        .map(
          (tense) => `
            <article class="lesson-card">
              <span class="lesson-number">${getTenseName(tense)}</span>
              <h4>${language.grammar[tense].title}</h4>
              <p>${language.grammar[tense].rule}</p>
              <p>${language.grammar[tense].note}</p>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="lesson-content">${renderTenseRows(tenseKeys)}</div>
  `;
}

function renderGenericLesson(kind) {
  const language = getLanguage();
  const cards = {
    dialogues: [
      ["Знакомство", `Скажи приветствие на языке: ${language.words[0].term}. Потом добавь имя.`],
      ["Просьба", "Научись говорить: пожалуйста, можно, где находится, сколько стоит."],
      ["Ответ", "Тренируй короткую схему: да/нет + причина + спасибо."]
    ],
    questionPatterns: [
      ["Кто?", "Учимся спрашивать о человеке."],
      ["Где?", "Учимся спрашивать место и направление."],
      ["Когда?", "Учимся спрашивать время: сегодня, вчера, завтра."]
    ],
    story: [
      ["Вчера", "1 фраза в прошедшем времени."],
      ["Сегодня", "1 фраза в настоящем времени."],
      ["Завтра", "1 фраза в будущем времени."]
    ],
    connectors: [
      ["и / но", "Соединяй две короткие фразы."],
      ["потому что", "Добавляй простую причину."],
      ["потом", "Рассказывай порядок действий."]
    ],
    opinion: [
      ["Я думаю", "Начни мнение мягко."],
      ["Мне нравится", "Говори о вкусе и выборе."],
      ["Я не согласен", "Учись отвечать спокойно."]
    ],
    advancedGrammar: [
      ["Уточнение", "Добавляй детали: когда, где, почему."],
      ["Вежливость", "Различай дружескую и нейтральную речь."],
      ["Сложная фраза", "Строй фразу из 2-3 частей."]
    ],
    naturalSpeech: [
      ["Носители", "Учись коротким естественным ответам."],
      ["Сокращения", "Замечай, как речь звучит быстрее."],
      ["Оттенки", "Различай прямую и мягкую фразу."]
    ],
    fluency: [
      ["Без перевода", "Думай готовыми блоками."],
      ["Скорость", "Повторяй одну фразу 5 раз быстрее."],
      ["Свободный ответ", "Говори 30 секунд на одну тему."]
    ]
  };

  lessonContent.innerHTML = `
    <div class="lesson-grid">
      ${(cards[kind] || cards.story)
        .map(
          ([title, text], index) => `
            <article class="lesson-card">
              <span class="lesson-number">Урок ${index + 1}</span>
              <h4>${title}</h4>
              <p>${text}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function getTenseName(tense) {
  return {
    present: "настоящее",
    past: "прошедшее",
    future: "будущее"
  }[tense];
}

function renderPractice() {
  makePracticeTask();
  lessonContent.innerHTML = `
    <article class="practice-card">
      <p id="practice-prompt">${currentTask.prompt}</p>
      <div class="answer-row">
        <input id="practice-answer" type="text" autocomplete="off" placeholder="Напиши ответ здесь" />
        <button id="check-answer" class="primary-button" type="button">Проверить</button>
      </div>
      <p id="practice-feedback" class="feedback"></p>
    </article>
  `;
}

function makePracticeTask() {
  const language = getLanguage();
  const word = language.words[Math.floor(Math.random() * language.words.length)];
  const tenseKeys = ["present", "past", "future"];
  const tense = tenseKeys[Math.floor(Math.random() * tenseKeys.length)];
  currentTask = {
    prompt: `Язык: ${language.name}. Напиши фразу для слова «${word.meaning}» в форме: ${getTenseName(tense)}.`,
    answer: word.forms[tense][0],
    helper: word.forms[tense][1]
  };
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function checkPracticeAnswer() {
  const input = document.querySelector("#practice-answer");
  const feedback = document.querySelector("#practice-feedback");
  if (!input || !feedback || !currentTask) return;

  const expected = normalizeAnswer(currentTask.answer.split("/")[0]);
  const given = normalizeAnswer(input.value);
  if (given && expected.includes(given)) {
    feedback.textContent = `Правильно: ${currentTask.answer}`;
    feedback.className = "feedback good";
    return;
  }

  feedback.textContent = `Пока не совсем. Правильный пример: ${currentTask.answer} - ${currentTask.helper}.`;
  feedback.className = "feedback try";
}

function renderLessonContent() {
  if (selectedLesson === "alphabet") renderAlphabet();
  else if (selectedLesson === "pronunciation") renderPronunciation();
  else if (selectedLesson === "firstWords" || selectedLesson === "dailyWords") renderWords();
  else if (selectedLesson === "present") renderGrammar(["present"]);
  else if (selectedLesson === "pastFuture") renderGrammar(["present", "past", "future"]);
  else if (selectedLesson === "practice") renderPractice();
  else renderGenericLesson(selectedLesson);
}

function renderAll() {
  renderLanguageMenu();
  renderHero();
  renderLevels();
  renderLevelHeader();
  renderLessonTabs();
  renderLessonContent();
}

languageToggle.addEventListener("click", () => {
  const isOpen = !languageMenu.hidden;
  languageMenu.hidden = isOpen;
  languageToggle.setAttribute("aria-expanded", String(!isOpen));
});

languageMenu.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (!button) return;
  selectedLanguage = button.dataset.language;
  selectedLevel = "A0";
  selectedLesson = "alphabet";
  localStorage.setItem("lingua-step-language", selectedLanguage);
  localStorage.setItem("lingua-step-level", selectedLevel);
  languageMenu.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
  renderAll();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-picker")) {
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
  }
});

levelList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-level]");
  if (!button) return;
  selectedLevel = button.dataset.level;
  selectedLesson = getLevel().lessons[0].id;
  localStorage.setItem("lingua-step-level", selectedLevel);
  renderAll();
});

lessonTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (!button) return;
  selectedLesson = button.dataset.lesson;
  renderLessonTabs();
  renderLessonContent();
});

lessonContent.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-word-index]");
  if (!checkbox) return;
  savedProgress[getWordKey(checkbox.dataset.wordIndex)] = checkbox.checked;
  saveProgress();
  renderHero();
  renderLessonContent();
});

lessonContent.addEventListener("click", (event) => {
  if (event.target.closest("#check-answer")) {
    checkPracticeAnswer();
  }
});

lessonContent.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches("#practice-answer")) {
    checkPracticeAnswer();
  }
});

markLevelButton.addEventListener("click", () => {
  savedProgress[getLevelKey()] = !savedProgress[getLevelKey()];
  saveProgress();
  renderLevels();
  renderLevelHeader();
});

renderAll();
