const courseLevels = [
  {
    code: "A0",
    title: "Полный ноль",
    short: "алфавит и звук",
    description: "Сначала учим письмо, чтение, произношение и самые первые слова. Цель A0 - перестать бояться языка и понимать, как читать.",
    lessons: [
      { id: "alphabet", title: "Алфавит", subtitle: "буквы, знаки, чтение" },
      { id: "numbers", title: "Цифры", subtitle: "0-10 и десятки до 100" },
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

const numberSets = {
  japanese: {
    basic: [
      ["0", "零 / ゼロ", "rei / zero"], ["1", "一", "ichi"], ["2", "二", "ni"], ["3", "三", "san"], ["4", "四", "yon / shi"], ["5", "五", "go"], ["6", "六", "roku"], ["7", "七", "nana / shichi"], ["8", "八", "hachi"], ["9", "九", "kyuu / ku"], ["10", "十", "juu"]
    ],
    tens: [
      ["10", "十", "juu"], ["20", "二十", "ni-juu"], ["30", "三十", "san-juu"], ["40", "四十", "yon-juu"], ["50", "五十", "go-juu"], ["60", "六十", "roku-juu"], ["70", "七十", "nana-juu"], ["80", "八十", "hachi-juu"], ["90", "九十", "kyuu-juu"], ["100", "百", "hyaku"]
    ]
  },
  russian: {
    basic: [
      ["0", "ноль", "nol"], ["1", "один", "odin"], ["2", "два", "dva"], ["3", "три", "tri"], ["4", "четыре", "chetyre"], ["5", "пять", "pyat"], ["6", "шесть", "shest"], ["7", "семь", "sem"], ["8", "восемь", "vosem"], ["9", "девять", "devyat"], ["10", "десять", "desyat"]
    ],
    tens: [
      ["10", "десять", "desyat"], ["20", "двадцать", "dvadtsat"], ["30", "тридцать", "tridtsat"], ["40", "сорок", "sorok"], ["50", "пятьдесят", "pyatdesyat"], ["60", "шестьдесят", "shestdesyat"], ["70", "семьдесят", "semdesyat"], ["80", "восемьдесят", "vosemdesyat"], ["90", "девяносто", "devyanosto"], ["100", "сто", "sto"]
    ]
  },
  georgian: {
    basic: [
      ["0", "ნული", "nuli"], ["1", "ერთი", "erti"], ["2", "ორი", "ori"], ["3", "სამი", "sami"], ["4", "ოთხი", "otkhi"], ["5", "ხუთი", "khuti"], ["6", "ექვსი", "ekvsi"], ["7", "შვიდი", "shvidi"], ["8", "რვა", "rva"], ["9", "ცხრა", "tskhra"], ["10", "ათი", "ati"]
    ],
    tens: [
      ["10", "ათი", "ati"], ["20", "ოცი", "otsi"], ["30", "ოცდაათი", "otsdaati"], ["40", "ორმოცი", "ormotsi"], ["50", "ორმოცდაათი", "ormotsdaati"], ["60", "სამოცი", "samotsi"], ["70", "სამოცდაათი", "samotsdaati"], ["80", "ოთხმოცი", "otkhmotsi"], ["90", "ოთხმოცდაათი", "otkhmotsdaati"], ["100", "ასი", "asi"]
    ]
  },
  german: {
    basic: [
      ["0", "null", "nul"], ["1", "eins", "ains"], ["2", "zwei", "tsvai"], ["3", "drei", "drai"], ["4", "vier", "fir"], ["5", "fünf", "fuenf"], ["6", "sechs", "zeks"], ["7", "sieben", "zi-ben"], ["8", "acht", "akht"], ["9", "neun", "noyn"], ["10", "zehn", "tseyn"]
    ],
    tens: [
      ["10", "zehn", "tseyn"], ["20", "zwanzig", "tsvan-tsikh"], ["30", "dreißig", "drai-sikh"], ["40", "vierzig", "fir-tsikh"], ["50", "fünfzig", "fuenf-tsikh"], ["60", "sechzig", "zekh-tsikh"], ["70", "siebzig", "zip-tsikh"], ["80", "achtzig", "akh-tsikh"], ["90", "neunzig", "noyn-tsikh"], ["100", "hundert", "hun-dert"]
    ]
  },
  danish: {
    basic: [
      ["0", "nul", "nul"], ["1", "en / et", "en / et"], ["2", "to", "to"], ["3", "tre", "tre"], ["4", "fire", "fi-re"], ["5", "fem", "fem"], ["6", "seks", "seks"], ["7", "syv", "syu"], ["8", "otte", "ot-te"], ["9", "ni", "ni"], ["10", "ti", "ti"]
    ],
    tens: [
      ["10", "ti", "ti"], ["20", "tyve", "ty-ve"], ["30", "tredive", "tre-di-ve"], ["40", "fyrre", "fyr-re"], ["50", "halvtreds", "hal-tres"], ["60", "tres", "tres"], ["70", "halvfjerds", "hal-fjers"], ["80", "firs", "firs"], ["90", "halvfems", "hal-fems"], ["100", "hundrede", "hun-dre-de"]
    ]
  },
  italian: {
    basic: [
      ["0", "zero", "dze-ro"], ["1", "uno", "u-no"], ["2", "due", "du-e"], ["3", "tre", "tre"], ["4", "quattro", "kwat-tro"], ["5", "cinque", "chin-kwe"], ["6", "sei", "sei"], ["7", "sette", "set-te"], ["8", "otto", "ot-to"], ["9", "nove", "no-ve"], ["10", "dieci", "dje-chi"]
    ],
    tens: [
      ["10", "dieci", "dje-chi"], ["20", "venti", "ven-ti"], ["30", "trenta", "tren-ta"], ["40", "quaranta", "kwa-ran-ta"], ["50", "cinquanta", "chin-kwan-ta"], ["60", "sessanta", "ses-san-ta"], ["70", "settanta", "set-tan-ta"], ["80", "ottanta", "ot-tan-ta"], ["90", "novanta", "no-van-ta"], ["100", "cento", "chen-to"]
    ]
  },
  english: {
    basic: [
      ["0", "zero", "zee-ro"], ["1", "one", "wun"], ["2", "two", "too"], ["3", "three", "three"], ["4", "four", "for"], ["5", "five", "faiv"], ["6", "six", "siks"], ["7", "seven", "sev-en"], ["8", "eight", "eit"], ["9", "nine", "nain"], ["10", "ten", "ten"]
    ],
    tens: [
      ["10", "ten", "ten"], ["20", "twenty", "twen-tee"], ["30", "thirty", "thur-tee"], ["40", "forty", "for-tee"], ["50", "fifty", "fif-tee"], ["60", "sixty", "siks-tee"], ["70", "seventy", "sev-en-tee"], ["80", "eighty", "ei-tee"], ["90", "ninety", "nain-tee"], ["100", "one hundred", "wun hun-dred"]
    ]
  }
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

const appVersion = "1.2.1";
const appLanguages = [
  { id: "ru", name: "Русский", html: "ru" },
  { id: "ka", name: "ქართული", html: "ka" },
  { id: "de", name: "Deutsch", html: "de" },
  { id: "da", name: "Dansk", html: "da" },
  { id: "en", name: "English", html: "en" }
];

const ui = {
  ru: {
    appEyebrow: "Полная программа с нуля",
    learningLanguage: "Язык обучения",
    route: "Маршрут",
    dailyWords: "слов сегодня",
    range: "от нуля до свободы",
    tenses: "времени в словах",
    currentStage: "Текущий этап",
    markLevel: "Отметить этап",
    levelDone: "Этап пройден",
    settingsKicker: "Настройки",
    settingsButton: "Настройки",
    settingsTitle: "Настройки приложения",
    appLanguage: "Язык приложения",
    appLanguageHint: "Меняет язык кнопок, меню и подсказок.",
    theme: "Тема",
    themeHint: "Переключает светлый и темный режим.",
    installTitle: "Установка на телефон",
    androidTitle: "Android",
    androidText: "Открой приложение в Chrome, нажми меню ⋮ и выбери “Установить приложение” или “Добавить на главный экран”.",
    iphoneTitle: "iPhone",
    iphoneText: "Открой приложение в Safari, нажми “Поделиться” и выбери “На экран Домой”.",
    update: "Обновить",
    share: "Поделиться",
    aboutTitle: "О приложении",
    aboutText: "Langora помогает учить языки с полного нуля: алфавит, произношение, слова, времена и разговорные уровни.",
    version: "Версия",
    developer: "Разработчик приложения",
    helpKicker: "Подсказка",
    close: "Закрыть",
    learningHelpTitle: "Для чего язык обучения?",
    learningHelpText: "Это язык, который ты хочешь изучать. Если выбрать японский, уроки покажут японскую азбуку, слова, произношение и времена.",
    appHelpTitle: "Для чего язык приложения?",
    appHelpText: "Это язык самого интерфейса: кнопки, настройки, подсказки и меню. Учебный язык от этого не меняется.",
    alphabetNote: "Сначала изучи письмо и чтение. Не спеши: знак, чтение, пример.",
    pronunciationNote: "Сначала произноси медленно: знак или слово, чтение, смысл. Не пытайся сразу говорить быстро.",
    wordsNote: "Минимум на день - 5 слов. У каждого слова есть чтение, понятное произношение и пример в настоящем, прошедшем и будущем.",
    learnedToday: "выучил сегодня",
    sound: "произношение",
    lesson: "Урок",
    soundLabel: "Звук",
    answerPlaceholder: "Напиши ответ здесь",
    check: "Проверить",
    correct: "Правильно",
    notQuite: "Пока не совсем. Правильный пример",
    practicePrompt: "Язык: {language}. Напиши фразу для слова «{word}» в форме: {tense}.",
    shareCopied: "Ссылка скопирована.",
    updated: "Приложение обновляется."
    ,meaning: "значение",
    formMeaning: "{tense}: {meaning}",
    contentGoal: "Ты изучаешь {language}. Начни с письма и произношения, затем каждый день проходи 5 слов и формы настоящего, прошедшего и будущего.",
    contentAlphabetIntro: "Этот урок показывает письмо языка {language}: сначала знак, затем чтение и короткая подсказка.",
    grammarPresentTitle: "Настоящее",
    grammarPresentRule: "Используется для действий сейчас, привычек и простых фактов.",
    grammarPresentNote: "Учись через короткую фразу: я делаю, я говорю, я иду.",
    grammarPastTitle: "Прошедшее",
    grammarPastRule: "Используется для того, что уже произошло.",
    grammarPastNote: "Сравнивай с настоящим, чтобы видеть, как меняется глагол.",
    grammarFutureTitle: "Будущее",
    grammarFutureRule: "Используется для планов и действий позже.",
    grammarFutureNote: "Добавляй слова времени: завтра, потом, на следующей неделе.",
    genericLessonBody: "Тренируй этот урок на языке {language}: сначала короткая фраза, потом вопрос, потом полный ответ."
    ,reading: "чтение",
    alphabetPracticeHint: "Произнеси этот звук медленно и сравни с примером чтения."
  },
  ka: {
    appEyebrow: "სრული პროგრამა ნულიდან",
    learningLanguage: "სასწავლო ენა",
    route: "მარშრუტი",
    dailyWords: "სიტყვა დღეს",
    range: "ნულიდან თავისუფლებამდე",
    tenses: "დრო სიტყვებში",
    currentStage: "მიმდინარე ეტაპი",
    markLevel: "ეტაპის მონიშვნა",
    levelDone: "ეტაპი გავლილია",
    settingsKicker: "პარამეტრები",
    settingsButton: "პარამეტრები",
    settingsTitle: "აპლიკაციის პარამეტრები",
    appLanguage: "აპლიკაციის ენა",
    appLanguageHint: "ცვლის ღილაკების, მენიუებისა და მინიშნებების ენას.",
    theme: "თემა",
    themeHint: "რთავს ნათელ ან ბნელ რეჟიმს.",
    installTitle: "ტელეფონზე დაყენება",
    androidTitle: "Android",
    androidText: "გახსენით Chrome-ში, დააჭირეთ ⋮ მენიუს და აირჩიეთ აპის დაყენება ან მთავარ ეკრანზე დამატება.",
    iphoneTitle: "iPhone",
    iphoneText: "გახსენით Safari-ში, დააჭირეთ გაზიარებას და აირჩიეთ მთავარ ეკრანზე დამატება.",
    update: "განახლება",
    share: "გაზიარება",
    aboutTitle: "აპის შესახებ",
    aboutText: "Langora გეხმარებათ ენის ნულიდან სწავლაში: ანბანი, წარმოთქმა, სიტყვები, დროები და საუბრის დონეები.",
    version: "ვერსია",
    developer: "აპლიკაციის შემქმნელი",
    helpKicker: "მინიშნება",
    close: "დახურვა",
    learningHelpTitle: "რისთვის არის სასწავლო ენა?",
    learningHelpText: "ეს არის ენა, რომელსაც სწავლობთ. მაგალითად, იაპონურის არჩევისას გაჩნდება იაპონური დამწერლობა, სიტყვები, წარმოთქმა და დროები.",
    appHelpTitle: "რისთვის არის აპლიკაციის ენა?",
    appHelpText: "ეს ცვლის მხოლოდ ინტერფეისს: ღილაკებს, პარამეტრებს, მინიშნებებს და მენიუს. სასწავლო ენა არ იცვლება.",
    alphabetNote: "ჯერ ისწავლე დამწერლობა და კითხვა. ნელა: ნიშანი, კითხვა, მაგალითი.",
    pronunciationNote: "ჯერ წარმოთქვი ნელა: ნიშანი ან სიტყვა, კითხვა, მნიშვნელობა. ნუ იჩქარებ.",
    wordsNote: "დღის მინიმუმი არის 5 სიტყვა. თითოეულ სიტყვას აქვს კითხვა, წარმოთქმა და მაგალითი სამ დროში.",
    learnedToday: "დღეს ვისწავლე",
    sound: "წარმოთქმა",
    lesson: "გაკვეთილი",
    soundLabel: "ბგერა",
    answerPlaceholder: "ჩაწერე პასუხი აქ",
    check: "შემოწმება",
    correct: "სწორია",
    notQuite: "ჯერ არა სრულად. სწორი მაგალითია",
    practicePrompt: "ენა: {language}. დაწერე ფრაზა სიტყვისთვის «{word}» დროში: {tense}.",
    shareCopied: "ბმული დაკოპირდა.",
    updated: "აპლიკაცია ახლდება.",
    meaning: "მნიშვნელობა",
    formMeaning: "{tense}: {meaning}",
    contentGoal: "თქვენ სწავლობთ ენას {language}. დაიწყეთ დამწერლობით და წარმოთქმით, შემდეგ ყოველდღე ისწავლეთ 5 სიტყვა და აწმყო, წარსული და მომავალი ფორმები.",
    contentAlphabetIntro: "ეს გაკვეთილი აჩვენებს ენის {language} დამწერლობას: ჯერ ნიშანი, შემდეგ კითხვა და მოკლე მინიშნება.",
    grammarPresentTitle: "აწმყო",
    grammarPresentRule: "გამოიყენება მოქმედებისთვის ახლა, ჩვევებისთვის და მარტივი ფაქტებისთვის.",
    grammarPresentNote: "ისწავლე მოკლე ფრაზით: მე ვაკეთებ, მე ვამბობ, მე მივდივარ.",
    grammarPastTitle: "წარსული",
    grammarPastRule: "გამოიყენება იმისთვის, რაც უკვე მოხდა.",
    grammarPastNote: "შეადარე აწმყოს, რომ დაინახო როგორ იცვლება ზმნა.",
    grammarFutureTitle: "მომავალი",
    grammarFutureRule: "გამოიყენება გეგმებისთვის და მოგვიანებით მოქმედებისთვის.",
    grammarFutureNote: "დაამატე დროის სიტყვები: ხვალ, შემდეგ, მომავალ კვირას.",
    genericLessonBody: "ივარჯიშე ეს გაკვეთილი ენაზე {language}: ჯერ მოკლე ფრაზა, შემდეგ კითხვა, შემდეგ სრული პასუხი.",
    reading: "კითხვა",
    alphabetPracticeHint: "წარმოთქვი ეს ბგერა ნელა და შეადარე კითხვის მაგალითს."
  },
  de: {
    appEyebrow: "Vollständiger Kurs ab null",
    learningLanguage: "Lernsprache",
    route: "Route",
    dailyWords: "Wörter heute",
    range: "von null bis frei",
    tenses: "Zeiten in Wörtern",
    currentStage: "Aktuelle Stufe",
    markLevel: "Stufe markieren",
    levelDone: "Stufe erledigt",
    settingsKicker: "Einstellungen",
    settingsButton: "Einstellungen",
    settingsTitle: "App-Einstellungen",
    appLanguage: "App-Sprache",
    appLanguageHint: "Ändert Buttons, Menüs und Hinweise.",
    theme: "Design",
    themeHint: "Wechselt zwischen hellem und dunklem Modus.",
    installTitle: "Auf dem Telefon installieren",
    androidTitle: "Android",
    androidText: "Öffne die App in Chrome, tippe auf ⋮ und wähle App installieren oder Zum Startbildschirm hinzufügen.",
    iphoneTitle: "iPhone",
    iphoneText: "Öffne die App in Safari, tippe auf Teilen und wähle Zum Home-Bildschirm.",
    update: "Aktualisieren",
    share: "Teilen",
    aboutTitle: "Über die App",
    aboutText: "Langora hilft beim Lernen ab null: Alphabet, Aussprache, Wörter, Zeiten und Gesprächsstufen.",
    version: "Version",
    developer: "App-Entwickler",
    helpKicker: "Hinweis",
    close: "Schließen",
    learningHelpTitle: "Wozu dient die Lernsprache?",
    learningHelpText: "Das ist die Sprache, die du lernst. Wenn du Japanisch wählst, bekommst du japanische Schrift, Wörter, Aussprache und Zeiten.",
    appHelpTitle: "Wozu dient die App-Sprache?",
    appHelpText: "Das ist nur die Sprache der Oberfläche: Buttons, Einstellungen, Hinweise und Menüs. Die Lernsprache bleibt gleich.",
    alphabetNote: "Lerne zuerst Schrift und Lesen. Langsam: Zeichen, Lesung, Beispiel.",
    pronunciationNote: "Sprich zuerst langsam: Zeichen oder Wort, Lesung, Bedeutung. Nicht sofort schnell sprechen.",
    wordsNote: "Das Tagesminimum sind 5 Wörter. Jedes Wort hat Lesung, Aussprache und Beispiele in drei Zeiten.",
    learnedToday: "heute gelernt",
    sound: "Aussprache",
    lesson: "Lektion",
    soundLabel: "Laut",
    answerPlaceholder: "Antwort hier schreiben",
    check: "Prüfen",
    correct: "Richtig",
    notQuite: "Noch nicht ganz. Richtiges Beispiel",
    practicePrompt: "Sprache: {language}. Schreibe einen Satz für «{word}» in der Form: {tense}.",
    shareCopied: "Link kopiert.",
    updated: "App wird aktualisiert.",
    meaning: "Bedeutung",
    formMeaning: "{tense}: {meaning}",
    contentGoal: "Du lernst {language}. Beginne mit Schrift und Aussprache, dann übe täglich 5 Wörter und die Formen für Gegenwart, Vergangenheit und Zukunft.",
    contentAlphabetIntro: "Diese Lektion zeigt die Schrift von {language}: zuerst das Zeichen, dann die Lesung und ein kurzer Hinweis.",
    grammarPresentTitle: "Gegenwart",
    grammarPresentRule: "Wird für Handlungen jetzt, Gewohnheiten und einfache Fakten verwendet.",
    grammarPresentNote: "Lerne mit kurzen Sätzen: ich mache, ich sage, ich gehe.",
    grammarPastTitle: "Vergangenheit",
    grammarPastRule: "Wird für Dinge verwendet, die schon passiert sind.",
    grammarPastNote: "Vergleiche mit der Gegenwart, um die Verbänderung zu sehen.",
    grammarFutureTitle: "Zukunft",
    grammarFutureRule: "Wird für Pläne und spätere Handlungen verwendet.",
    grammarFutureNote: "Füge Zeitwörter hinzu: morgen, später, nächste Woche.",
    genericLessonBody: "Übe diese Lektion in {language}: zuerst ein kurzer Satz, dann eine Frage, dann eine vollständige Antwort.",
    reading: "Lesung",
    alphabetPracticeHint: "Sprich diesen Laut langsam aus und vergleiche ihn mit der Lesung."
  },
  da: {
    appEyebrow: "Fuldt kursus fra nul",
    learningLanguage: "Læringssprog",
    route: "Rute",
    dailyWords: "ord i dag",
    range: "fra nul til frihed",
    tenses: "tider i ord",
    currentStage: "Aktuelt trin",
    markLevel: "Marker trin",
    levelDone: "Trin fuldført",
    settingsKicker: "Indstillinger",
    settingsButton: "Indstillinger",
    settingsTitle: "Appindstillinger",
    appLanguage: "Appens sprog",
    appLanguageHint: "Ændrer knapper, menuer og forklaringer.",
    theme: "Tema",
    themeHint: "Skifter mellem lyst og mørkt tema.",
    installTitle: "Installer på telefon",
    androidTitle: "Android",
    androidText: "Åbn appen i Chrome, tryk på ⋮ og vælg Installer app eller Føj til startskærm.",
    iphoneTitle: "iPhone",
    iphoneText: "Åbn appen i Safari, tryk Del og vælg Føj til hjemmeskærm.",
    update: "Opdater",
    share: "Del",
    aboutTitle: "Om appen",
    aboutText: "Langora hjælper dig med at lære fra nul: alfabet, udtale, ord, tider og samtaleniveauer.",
    version: "Version",
    developer: "Appudvikler",
    helpKicker: "Hjælp",
    close: "Luk",
    learningHelpTitle: "Hvad er læringssprog?",
    learningHelpText: "Det er sproget, du vil lære. Vælger du japansk, får du japansk skrift, ord, udtale og tider.",
    appHelpTitle: "Hvad er appens sprog?",
    appHelpText: "Det ændrer kun grænsefladen: knapper, indstillinger, forklaringer og menuer. Læringssproget ændres ikke.",
    alphabetNote: "Lær først skrift og læsning. Roligt: tegn, læsning, eksempel.",
    pronunciationNote: "Udtal langsomt først: tegn eller ord, læsning, betydning. Tal ikke hurtigt med det samme.",
    wordsNote: "Dagens minimum er 5 ord. Hvert ord har læsning, udtale og eksempler i tre tider.",
    learnedToday: "lært i dag",
    sound: "udtale",
    lesson: "Lektion",
    soundLabel: "Lyd",
    answerPlaceholder: "Skriv svaret her",
    check: "Tjek",
    correct: "Korrekt",
    notQuite: "Ikke helt endnu. Rigtigt eksempel",
    practicePrompt: "Sprog: {language}. Skriv en sætning for «{word}» i formen: {tense}.",
    shareCopied: "Link kopieret.",
    updated: "Appen opdateres.",
    meaning: "betydning",
    formMeaning: "{tense}: {meaning}",
    contentGoal: "Du lærer {language}. Start med skrift og udtale, og øv derefter 5 ord hver dag samt nutid, fortid og fremtid.",
    contentAlphabetIntro: "Denne lektion viser skriften i {language}: først tegn, derefter læsning og en kort forklaring.",
    grammarPresentTitle: "Nutid",
    grammarPresentRule: "Bruges til handlinger nu, vaner og enkle fakta.",
    grammarPresentNote: "Lær med korte sætninger: jeg gør, jeg siger, jeg går.",
    grammarPastTitle: "Fortid",
    grammarPastRule: "Bruges til det, der allerede er sket.",
    grammarPastNote: "Sammenlign med nutid for at se, hvordan verbet ændrer sig.",
    grammarFutureTitle: "Fremtid",
    grammarFutureRule: "Bruges til planer og handlinger senere.",
    grammarFutureNote: "Tilføj tidsord: i morgen, senere, næste uge.",
    genericLessonBody: "Øv denne lektion på {language}: først en kort sætning, derefter et spørgsmål, derefter et fuldt svar.",
    reading: "læsning",
    alphabetPracticeHint: "Udtal lyden langsomt og sammenlign med læsningen."
  },
  en: {
    appEyebrow: "Complete course from zero",
    learningLanguage: "Learning language",
    route: "Route",
    dailyWords: "words today",
    range: "from zero to fluency",
    tenses: "tenses in words",
    currentStage: "Current stage",
    markLevel: "Mark stage",
    levelDone: "Stage complete",
    settingsKicker: "Settings",
    settingsButton: "Settings",
    settingsTitle: "App settings",
    appLanguage: "App language",
    appLanguageHint: "Changes buttons, menus, and helper text.",
    theme: "Theme",
    themeHint: "Switches between light and dark mode.",
    installTitle: "Install on phone",
    androidTitle: "Android",
    androidText: "Open the app in Chrome, tap ⋮, then choose Install app or Add to Home screen.",
    iphoneTitle: "iPhone",
    iphoneText: "Open the app in Safari, tap Share, then choose Add to Home Screen.",
    update: "Update",
    share: "Share",
    aboutTitle: "About",
    aboutText: "Langora helps you learn from zero: alphabet, pronunciation, words, tenses, and conversation levels.",
    version: "Version",
    developer: "App developer",
    helpKicker: "Help",
    close: "Close",
    learningHelpTitle: "What is the learning language?",
    learningHelpText: "This is the language you want to study. If you choose Japanese, lessons show Japanese writing, words, pronunciation, and tenses.",
    appHelpTitle: "What is the app language?",
    appHelpText: "This changes only the interface: buttons, settings, helper text, and menus. The learning language does not change.",
    alphabetNote: "Learn writing and reading first. Go slowly: symbol, reading, example.",
    pronunciationNote: "Pronounce slowly first: symbol or word, reading, meaning. Do not rush into fast speech.",
    wordsNote: "The daily minimum is 5 words. Each word has reading, pronunciation, and examples in three tenses.",
    learnedToday: "learned today",
    sound: "pronunciation",
    lesson: "Lesson",
    soundLabel: "Sound",
    answerPlaceholder: "Write your answer here",
    check: "Check",
    correct: "Correct",
    notQuite: "Not quite yet. Correct example",
    practicePrompt: "Language: {language}. Write a phrase for «{word}» in this form: {tense}.",
    shareCopied: "Link copied.",
    updated: "App is updating.",
    meaning: "meaning",
    formMeaning: "{tense}: {meaning}",
    contentGoal: "You are learning {language}. Start with writing and pronunciation, then practice 5 words every day plus present, past, and future forms.",
    contentAlphabetIntro: "This lesson shows the writing system of {language}: first the symbol, then the reading and a short hint.",
    grammarPresentTitle: "Present",
    grammarPresentRule: "Used for actions now, habits, and simple facts.",
    grammarPresentNote: "Learn through a short phrase: I do, I say, I go.",
    grammarPastTitle: "Past",
    grammarPastRule: "Used for things that already happened.",
    grammarPastNote: "Compare it with the present to see how the verb changes.",
    grammarFutureTitle: "Future",
    grammarFutureRule: "Used for plans and actions later.",
    grammarFutureNote: "Add time words: tomorrow, later, next week.",
    genericLessonBody: "Practice this lesson in {language}: first a short phrase, then a question, then a full answer.",
    reading: "reading",
    alphabetPracticeHint: "Say this sound slowly and compare it with the reading example."
  }
};

const levelUi = {
  ru: {
    A0: ["Полный ноль", "алфавит и звук", "Сначала учим письмо, чтение, произношение и самые первые слова. Цель A0 - перестать бояться языка и понимать, как читать."],
    A1: ["Первые фразы", "слова и настоящее", "Учим ежедневные слова, простые фразы и настоящее время. На этом этапе ученик уже может сказать базовые вещи о себе."],
    A2: ["Время и действия", "прошлое и будущее", "Добавляем прошедшее и будущее. Ученик начинает говорить: что делал, что делает и что будет делать."],
    A3: ["Разговорный мост", "вопросы и ответы", "Учимся связывать фразы: вопросы, ответы, просьбы, объяснение простых причин и короткие диалоги."],
    B1: ["Разговорный уровень", "свободная база", "Ученик говорит о дне, семье, работе, учебе, планах и умеет поддержать простой разговор без подготовки."],
    B2: ["Уверенная речь", "мнение и детали", "Добавляем мнение, аргументы, уточнения, более длинные фразы и устойчивые выражения."],
    C1: ["Свобода языка", "почти совершенство", "Цель - говорить естественно: понимать оттенки, быстро строить речь и не переводить каждую фразу в голове."]
  },
  en: {
    A0: ["Absolute zero", "alphabet and sound", "Start with writing, reading, pronunciation, and first words. The goal is to stop fearing the language."],
    A1: ["First phrases", "words and present", "Learn daily words, simple phrases, and present tense."],
    A2: ["Time and actions", "past and future", "Add past and future so you can say what happened, happens, and will happen."],
    A3: ["Conversation bridge", "questions and answers", "Connect phrases, ask questions, answer, request, and explain simple reasons."],
    B1: ["Conversational level", "free basics", "Talk about your day, family, work, study, and plans."],
    B2: ["Confident speech", "opinions and detail", "Add opinions, arguments, details, longer phrases, and fixed expressions."],
    C1: ["Language freedom", "near mastery", "Speak naturally, understand nuance, and build speech quickly."]
  }
};

levelUi.ka = {
  A0: ["სრული ნული", "ანბანი და ბგერა", "დაიწყე დამწერლობით, კითხვით, წარმოთქმით და პირველი სიტყვებით. მიზანია ენის შიშის გაქრობა."],
  A1: ["პირველი ფრაზები", "სიტყვები და აწმყო", "ისწავლე ყოველდღიური სიტყვები, მარტივი ფრაზები და აწმყო დრო."],
  A2: ["დრო და მოქმედება", "წარსული და მომავალი", "დაამატე წარსული და მომავალი, რომ თქვა რა მოხდა, რა ხდება და რა მოხდება."],
  A3: ["საუბრის ხიდი", "კითხვები და პასუხები", "დააკავშირე ფრაზები, დასვი კითხვები, უპასუხე და ახსენი მარტივი მიზეზები."],
  B1: ["სასაუბრო დონე", "თავისუფალი საფუძველი", "ისაუბრე დღეზე, ოჯახზე, სამსახურზე, სწავლაზე და გეგმებზე."],
  B2: ["დარწმუნებული მეტყველება", "აზრი და დეტალები", "დაამატე აზრები, არგუმენტები, დეტალები და გრძელი ფრაზები."],
  C1: ["ენის თავისუფლება", "თითქმის სრულყოფა", "ილაპარაკე ბუნებრივად, გაიგე ნიუანსები და სწრაფად ააწყვე მეტყველება."]
};

levelUi.de = {
  A0: ["Absoluter Anfang", "Alphabet und Klang", "Beginne mit Schrift, Lesen, Aussprache und den ersten Wörtern. Das Ziel ist, die Angst vor der Sprache zu verlieren."],
  A1: ["Erste Sätze", "Wörter und Gegenwart", "Lerne tägliche Wörter, einfache Sätze und die Gegenwart."],
  A2: ["Zeit und Handlung", "Vergangenheit und Zukunft", "Füge Vergangenheit und Zukunft hinzu, damit du sagen kannst, was war, ist und sein wird."],
  A3: ["Brücke zum Gespräch", "Fragen und Antworten", "Verbinde Sätze, stelle Fragen, antworte und erkläre einfache Gründe."],
  B1: ["Gesprächsniveau", "freie Grundlage", "Sprich über Tag, Familie, Arbeit, Lernen und Pläne."],
  B2: ["Sichere Sprache", "Meinung und Details", "Füge Meinungen, Argumente, Details und längere Sätze hinzu."],
  C1: ["Sprachfreiheit", "fast Meisterschaft", "Sprich natürlich, verstehe Nuancen und baue Sprache schnell auf."]
};

levelUi.da = {
  A0: ["Helt fra nul", "alfabet og lyd", "Start med skrift, læsning, udtale og de første ord. Målet er at fjerne frygten for sproget."],
  A1: ["Første sætninger", "ord og nutid", "Lær daglige ord, enkle sætninger og nutid."],
  A2: ["Tid og handling", "fortid og fremtid", "Tilføj fortid og fremtid, så du kan sige hvad der skete, sker og vil ske."],
  A3: ["Bro til samtale", "spørgsmål og svar", "Forbind sætninger, stil spørgsmål, svar og forklar enkle grunde."],
  B1: ["Samtaleniveau", "fri basis", "Tal om din dag, familie, arbejde, læring og planer."],
  B2: ["Sikker tale", "mening og detaljer", "Tilføj meninger, argumenter, detaljer og længere sætninger."],
  C1: ["Sproglig frihed", "næsten mestring", "Tal naturligt, forstå nuancer og byg sprog hurtigt."]
};

const languageNames = {
  japanese: { ru: "Японский", ka: "იაპონური", de: "Japanisch", da: "Japansk", en: "Japanese" },
  russian: { ru: "Русский", ka: "რუსული", de: "Russisch", da: "Russisk", en: "Russian" },
  georgian: { ru: "Грузинский", ka: "ქართული", de: "Georgisch", da: "Georgisk", en: "Georgian" },
  german: { ru: "Немецкий", ka: "გერმანული", de: "Deutsch", da: "Tysk", en: "German" },
  danish: { ru: "Датский", ka: "დანიური", de: "Dänisch", da: "Dansk", en: "Danish" },
  italian: { ru: "Итальянский", ka: "იტალიური", de: "Italienisch", da: "Italiensk", en: "Italian" },
  english: { ru: "Английский", ka: "ინგლისური", de: "Englisch", da: "Engelsk", en: "English" }
};

const wordMeanings = [
  { ru: "приветствие", ka: "მისალმება", de: "Begrüßung", da: "hilsen", en: "greeting" },
  { ru: "спасибо", ka: "მადლობა", de: "Danke", da: "tak", en: "thank you" },
  { ru: "вода", ka: "წყალი", de: "Wasser", da: "vand", en: "water" },
  { ru: "есть", ka: "ჭამა", de: "essen", da: "spise", en: "to eat" },
  { ru: "идти", ka: "წასვლა", de: "gehen", da: "gå", en: "to go" }
];

const scriptNames = {
  japanese: { ru: "хирагана, катакана, кандзи, ромадзи", ka: "ჰირაგანა, კატაკანა, კანჯი, რომაჯი", de: "Hiragana, Katakana, Kanji, Romaji", da: "hiragana, katakana, kanji, romaji", en: "hiragana, katakana, kanji, romaji" },
  russian: { ru: "кириллица", ka: "კირილიცა", de: "Kyrillisch", da: "kyrillisk", en: "Cyrillic" },
  georgian: { ru: "грузинское письмо", ka: "ქართული დამწერლობა", de: "georgische Schrift", da: "georgisk skrift", en: "Georgian script" },
  german: { ru: "латиница + ä ö ü ß", ka: "ლათინური + ä ö ü ß", de: "Lateinisch + ä ö ü ß", da: "latinsk + ä ö ü ß", en: "Latin + ä ö ü ß" },
  danish: { ru: "латиница + æ ø å", ka: "ლათინური + æ ø å", de: "Lateinisch + æ ø å", da: "latinsk + æ ø å", en: "Latin + æ ø å" },
  italian: { ru: "латиница", ka: "ლათინური", de: "Lateinisch", da: "latinsk", en: "Latin" },
  english: { ru: "латиница", ka: "ლათინური", de: "Lateinisch", da: "latinsk", en: "Latin" }
};

const pronunciationTips = {
  ru: [
    "Слушай звук, потом повторяй его медленно.",
    "Разделяй длинные слова на короткие части.",
    "Сначала важна понятность, потом скорость.",
    "Повторяй вслух: знак, чтение, слово, короткая фраза."
  ],
  ka: [
    "ჯერ მოუსმინე ბგერას, შემდეგ გაიმეორე ნელა.",
    "გრძელი სიტყვები დაყავი მოკლე ნაწილებად.",
    "თავიდან მთავარია გასაგები წარმოთქმა, შემდეგ სიჩქარე.",
    "გაიმეორე ხმამაღლა: ნიშანი, კითხვა, სიტყვა, მოკლე ფრაზა."
  ],
  de: [
    "Höre zuerst den Laut und wiederhole ihn langsam.",
    "Teile lange Wörter in kurze Teile.",
    "Am Anfang zählt Verständlichkeit mehr als Geschwindigkeit.",
    "Sprich laut: Zeichen, Lesung, Wort, kurzer Satz."
  ],
  da: [
    "Lyt først til lyden og gentag langsomt.",
    "Del lange ord i korte dele.",
    "I starten er tydelighed vigtigere end hastighed.",
    "Sig det højt: tegn, læsning, ord, kort sætning."
  ],
  en: [
    "Listen to the sound first, then repeat it slowly.",
    "Split long words into short parts.",
    "Clarity matters before speed.",
    "Say it aloud: symbol, reading, word, short phrase."
  ]
};

const lessonUi = {
  alphabet: { ru: "Алфавит", ka: "ანბანი", de: "Alphabet", da: "Alfabet", en: "Alphabet" },
  numbers: { ru: "Цифры", ka: "რიცხვები", de: "Zahlen", da: "Tal", en: "Numbers" },
  pronunciation: { ru: "Произношение", ka: "წარმოთქმა", de: "Aussprache", da: "Udtale", en: "Pronunciation" },
  firstWords: { ru: "Первые 5 слов", ka: "პირველი 5 სიტყვა", de: "Erste 5 Wörter", da: "Første 5 ord", en: "First 5 words" },
  dailyWords: { ru: "5 слов в день", ka: "5 სიტყვა დღეში", de: "5 Wörter pro Tag", da: "5 ord om dagen", en: "5 words a day" },
  present: { ru: "Настоящее", ka: "აწმყო", de: "Gegenwart", da: "Nutid", en: "Present" },
  practice: { ru: "Тренировка", ka: "ვარჯიში", de: "Übung", da: "Øvelse", en: "Practice" },
  pastFuture: { ru: "Прошлое и будущее", ka: "წარსული და მომავალი", de: "Vergangenheit und Zukunft", da: "Fortid og fremtid", en: "Past and future" },
  dialogues: { ru: "Диалоги", ka: "დიალოგები", de: "Dialoge", da: "Dialoger", en: "Dialogues" },
  questionPatterns: { ru: "Вопросы", ka: "კითხვები", de: "Fragen", da: "Spørgsmål", en: "Questions" },
  story: { ru: "Рассказ о себе", ka: "ჩემ შესახებ", de: "Über mich", da: "Om mig", en: "About me" },
  connectors: { ru: "Связки речи", ka: "დამაკავშირებლები", de: "Verbindungen", da: "Bindeord", en: "Connectors" },
  opinion: { ru: "Мнение", ka: "აზრი", de: "Meinung", da: "Mening", en: "Opinion" },
  advancedGrammar: { ru: "Грамматика", ka: "გრამატიკა", de: "Grammatik", da: "Grammatik", en: "Grammar" },
  naturalSpeech: { ru: "Естественная речь", ka: "ბუნებრივი მეტყველება", de: "Natürliche Sprache", da: "Naturlig tale", en: "Natural speech" },
  fluency: { ru: "Беглость", ka: "თავისუფალი საუბარი", de: "Flüssigkeit", da: "Flydende tale", en: "Fluency" }
};

const tenseUi = {
  present: { ru: "настоящее", ka: "აწმყო", de: "Gegenwart", da: "nutid", en: "present" },
  past: { ru: "прошедшее", ka: "წარსული", de: "Vergangenheit", da: "fortid", en: "past" },
  future: { ru: "будущее", ka: "მომავალი", de: "Zukunft", da: "fremtid", en: "future" }
};

const numberLessonText = {
  ru: {
    intro: "Сначала выучи цифры от 0 до 10, потом десятки: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.",
    basic: "Цифры 0-10",
    tens: "Десятки 10-100",
    reading: "чтение"
  },
  ka: {
    intro: "ჯერ ისწავლე რიცხვები 0-დან 10-მდე, შემდეგ ათეულები: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.",
    basic: "რიცხვები 0-10",
    tens: "ათეულები 10-100",
    reading: "კითხვა"
  },
  de: {
    intro: "Lerne zuerst die Zahlen von 0 bis 10, dann die Zehner: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.",
    basic: "Zahlen 0-10",
    tens: "Zehner 10-100",
    reading: "Lesung"
  },
  da: {
    intro: "Lær først tallene fra 0 til 10, derefter tierne: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.",
    basic: "Tal 0-10",
    tens: "Tiere 10-100",
    reading: "læsning"
  },
  en: {
    intro: "First learn numbers from 0 to 10, then tens: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.",
    basic: "Numbers 0-10",
    tens: "Tens 10-100",
    reading: "reading"
  }
};

let selectedLanguage = localStorage.getItem("lingua-step-language") || "japanese";
let selectedAppLanguage = localStorage.getItem("langora-app-language") || "ru";
let selectedLevel = localStorage.getItem("lingua-step-level") || "A0";
let selectedLesson = "alphabet";
let currentTask = null;

const savedProgress = JSON.parse(localStorage.getItem("lingua-step-progress") || "{}");

const languageToggle = document.querySelector("#language-toggle");
const languageMenu = document.querySelector("#language-menu");
const selectedLanguageName = document.querySelector("#selected-language-name");
const settingsToggle = document.querySelector("#settings-toggle");
const settingsModal = document.querySelector("#settings-modal");
const settingsClose = document.querySelector("#settings-close");
const appLanguageSelect = document.querySelector("#app-language-select");
const themeToggle = document.querySelector("#theme-toggle");
const updateAppButton = document.querySelector("#update-app");
const shareAppButton = document.querySelector("#share-app");
const helpModal = document.querySelector("#help-modal");
const helpClose = document.querySelector("#help-close");
const levelList = document.querySelector("#level-list");
const lessonTabs = document.querySelector("#lesson-tabs");
const lessonContent = document.querySelector("#lesson-content");
const markLevelButton = document.querySelector("#mark-level");

function text(key) {
  return (ui[selectedAppLanguage] && ui[selectedAppLanguage][key]) || ui.ru[key] || key;
}

function getLanguage() {
  return languages.find((language) => language.id === selectedLanguage) || languages[0];
}

function getLanguageName(language = getLanguage()) {
  return languageNames[language.id]?.[selectedAppLanguage] || language.name;
}

function getScriptName(language = getLanguage()) {
  return scriptNames[language.id]?.[selectedAppLanguage] || language.script;
}

function getWordMeaning(index, word) {
  return wordMeanings[index]?.[selectedAppLanguage] || word.meaning;
}

function template(key, replacements) {
  return Object.entries(replacements).reduce((value, [name, replacement]) => {
    return value.replaceAll(`{${name}}`, replacement);
  }, text(key));
}

function getLevel() {
  return courseLevels.find((level) => level.code === selectedLevel) || courseLevels[0];
}

function getLevelText(level) {
  const pack = (levelUi[selectedAppLanguage] || levelUi.ru)[level.code] || [level.title, level.short, level.description];
  return { title: pack[0], short: pack[1], description: pack[2] };
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

function applyTheme() {
  const theme = localStorage.getItem("langora-theme") || "light";
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.checked = theme === "dark";
}

function renderStaticUi() {
  const appLanguage = appLanguages.find((item) => item.id === selectedAppLanguage) || appLanguages[0];
  document.documentElement.lang = appLanguage.html;
  document.querySelector("#app-eyebrow").textContent = text("appEyebrow");
  document.querySelector("#learning-language-label").textContent = text("learningLanguage");
  document.querySelector("#route-title").textContent = text("route");
  document.querySelector("#daily-words-label").textContent = text("dailyWords");
  document.querySelector("#range-label").textContent = text("range");
  document.querySelector("#tenses-label").textContent = text("tenses");
  document.querySelector("#current-stage-label").textContent = text("currentStage");
  document.querySelector("#settings-kicker").textContent = text("settingsKicker");
  document.querySelector("#settings-button-label").textContent = text("settingsButton");
  document.querySelector("#settings-title").textContent = text("settingsTitle");
  document.querySelector("#settings-app-language-label").textContent = text("appLanguage");
  document.querySelector("#settings-app-language-hint").textContent = text("appLanguageHint");
  document.querySelector("#theme-label").textContent = text("theme");
  document.querySelector("#theme-hint").textContent = text("themeHint");
  document.querySelector("#install-title").textContent = text("installTitle");
  document.querySelector("#android-title").textContent = text("androidTitle");
  document.querySelector("#android-text").textContent = text("androidText");
  document.querySelector("#iphone-title").textContent = text("iphoneTitle");
  document.querySelector("#iphone-text").textContent = text("iphoneText");
  updateAppButton.textContent = text("update");
  shareAppButton.textContent = text("share");
  document.querySelector("#about-title").textContent = text("aboutTitle");
  document.querySelector("#about-text").textContent = text("aboutText");
  document.querySelector("#version-label").textContent = text("version");
  document.querySelector("#app-version").textContent = appVersion;
  document.querySelector("#footer-developer-label").textContent = text("developer");
  document.querySelector("#settings-developer-label").textContent = text("developer");
  document.querySelector("#help-kicker").textContent = text("helpKicker");
  document.querySelector("#help-close").setAttribute("aria-label", text("close"));
  document.querySelector("#settings-close").setAttribute("aria-label", text("close"));
  appLanguageSelect.value = selectedAppLanguage;
}

function renderLanguageMenu() {
  const language = getLanguage();
  selectedLanguageName.textContent = `${getLanguageName(language)} - ${language.nativeName}`;
  languageMenu.innerHTML = languages
    .map(
      (item) => `
        <button class="language-option ${item.id === selectedLanguage ? "active" : ""}" data-language="${item.id}" type="button">
          <strong>${getLanguageName(item)}</strong>
          <small>${item.nativeName} · ${getScriptName(item)}</small>
        </button>
      `
    )
    .join("");
}

function renderHero() {
  const language = getLanguage();
  const learnedCount = language.words.reduce((sum, _word, index) => sum + (savedProgress[getWordKey(index)] ? 1 : 0), 0);
  document.querySelector("#language-script").textContent = getScriptName(language);
  document.querySelector("#language-title").textContent = `${getLanguageName(language)} - ${language.nativeName}`;
  document.querySelector("#language-goal").textContent = template("contentGoal", { language: getLanguageName(language) });
  document.querySelector("#daily-count").textContent = `${learnedCount}/5`;
}

function renderLevels() {
  levelList.innerHTML = courseLevels
    .map((level) => {
      const levelText = getLevelText(level);
      return `
        <button class="level-button ${level.code === selectedLevel ? "active" : ""} ${savedProgress[`${selectedLanguage}:level:${level.code}`] ? "done" : ""}" data-level="${level.code}" type="button">
          <span class="level-code">${level.code}</span>
          <span>
            <strong>${levelText.title}</strong>
            <span>${levelText.short}</span>
          </span>
          <span class="done-dot" aria-hidden="true"></span>
        </button>
      `;
    })
    .join("");
}

function renderLevelHeader() {
  const level = getLevel();
  const levelText = getLevelText(level);
  document.querySelector("#level-title").textContent = `${level.code} · ${levelText.title}`;
  document.querySelector("#level-description").textContent = levelText.description;
  markLevelButton.textContent = savedProgress[getLevelKey()] ? text("levelDone") : text("markLevel");
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
          ${lessonUi[lesson.id]?.[selectedAppLanguage] || lesson.title}
        </button>
      `
    )
    .join("");
}

function renderAlphabet() {
  const language = getLanguage();
  lessonContent.innerHTML = `
    <div class="note-box">${template("contentAlphabetIntro", { language: getLanguageName(language) })}</div>
    <div class="alphabet-grid">
      ${language.alphabet
        .map(
          ([symbol, reading, hint]) => `
            <article class="alphabet-card">
              <strong>${symbol}</strong>
              <div class="reading">${reading}</div>
              <p class="hint">${selectedAppLanguage === "ru" ? hint : text("alphabetPracticeHint")}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderNumberGroup(title, numbers) {
  const labels = numberLessonText[selectedAppLanguage] || numberLessonText.ru;
  return `
    <section class="number-section">
      <h4>${title}</h4>
      <div class="alphabet-grid number-grid">
        ${numbers
          .map(
            ([value, term, reading]) => `
              <article class="alphabet-card number-card">
                <span class="lesson-number">${value}</span>
                <strong>${term}</strong>
                <div class="reading">${labels.reading}: ${reading}</div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderNumbers() {
  const language = getLanguage();
  const numbers = numberSets[language.id] || numberSets.english;
  const labels = numberLessonText[selectedAppLanguage] || numberLessonText.ru;
  lessonContent.innerHTML = `
    <div class="note-box">${labels.intro}</div>
    ${renderNumberGroup(labels.basic, numbers.basic)}
    ${renderNumberGroup(labels.tens, numbers.tens)}
  `;
}

function renderPronunciation() {
  const tips = selectedAppLanguage === "ru" ? getLanguage().pronunciation : pronunciationTips[selectedAppLanguage];
  lessonContent.innerHTML = `
    <div class="note-box">${text("pronunciationNote")}</div>
    <div class="pronunciation-grid">
      ${tips
        .map(
          (tip, index) => `
            <article class="lesson-card">
              <span class="lesson-number">${text("soundLabel")} ${index + 1}</span>
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
    <div class="note-box">${text("wordsNote")}</div>
    <div class="word-grid">
      ${language.words
        .map((word, index) => {
          const checked = Boolean(savedProgress[getWordKey(index)]);
          const meaning = getWordMeaning(index, word);
          return `
            <article class="word-card ${checked ? "done" : ""}">
              <h4>${word.term}</h4>
              <div class="reading">${word.reading}</div>
              <p>${text("meaning")}: ${meaning} · ${text("sound")}: ${word.sound}</p>
              <label>
                <input type="checkbox" data-word-index="${index}" ${checked ? "checked" : ""} />
                ${text("learnedToday")}
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
      (word, wordIndex) => `
        <article class="lesson-card">
          <span class="lesson-number">${word.term} · ${word.reading}</span>
          <h4>${getWordMeaning(wordIndex, word)}</h4>
          <div class="tense-examples">
            ${tenseKeys
              .map(
                (tense) => `
                  <div class="example-row">
                    <strong>${getTenseName(tense)}</strong>
                    <span class="phrase">${word.forms[tense][0]}</span>
                    <span>${template("formMeaning", { tense: getTenseName(tense), meaning: getWordMeaning(wordIndex, word) })}</span>
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
  lessonContent.innerHTML = `
    <div class="lesson-grid">
      ${tenseKeys
        .map(
          (tense) => `
            <article class="lesson-card">
              <span class="lesson-number">${getTenseName(tense)}</span>
              <h4>${text(`grammar${capitalize(tense)}Title`)}</h4>
              <p>${text(`grammar${capitalize(tense)}Rule`)}</p>
              <p>${text(`grammar${capitalize(tense)}Note`)}</p>
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
  const cards = [
    [lessonUi[kind]?.[selectedAppLanguage] || text("lesson"), template("genericLessonBody", { language: getLanguageName(language) })],
    [text("lesson") + " 2", text("range")],
    [text("lesson") + " 3", text("currentStage")]
  ];

  lessonContent.innerHTML = `
    <div class="lesson-grid">
      ${cards
        .map(
          ([title, body], index) => `
            <article class="lesson-card">
              <span class="lesson-number">${text("lesson")} ${index + 1}</span>
              <h4>${title}</h4>
              <p>${body}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function getTenseName(tense) {
  return tenseUi[tense]?.[selectedAppLanguage] || tenseUi[tense].ru;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderPractice() {
  makePracticeTask();
  lessonContent.innerHTML = `
    <article class="practice-card">
      <p id="practice-prompt">${currentTask.prompt}</p>
      <div class="answer-row">
        <input id="practice-answer" type="text" autocomplete="off" placeholder="${text("answerPlaceholder")}" />
        <button id="check-answer" class="primary-button" type="button">${text("check")}</button>
      </div>
      <p id="practice-feedback" class="feedback"></p>
    </article>
  `;
}

function makePracticeTask() {
  const language = getLanguage();
  const wordIndex = Math.floor(Math.random() * language.words.length);
  const word = language.words[wordIndex];
  const tenseKeys = ["present", "past", "future"];
  const tense = tenseKeys[Math.floor(Math.random() * tenseKeys.length)];
  currentTask = {
    prompt: text("practicePrompt")
      .replace("{language}", getLanguageName(language))
      .replace("{word}", getWordMeaning(wordIndex, word))
      .replace("{tense}", getTenseName(tense)),
    answer: word.forms[tense][0],
    helper: template("formMeaning", { tense: getTenseName(tense), meaning: getWordMeaning(wordIndex, word) })
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
    feedback.textContent = `${text("correct")}: ${currentTask.answer}`;
    feedback.className = "feedback good";
    return;
  }

  feedback.textContent = `${text("notQuite")}: ${currentTask.answer} - ${currentTask.helper}.`;
  feedback.className = "feedback try";
}

function renderLessonContent() {
  if (selectedLesson === "alphabet") renderAlphabet();
  else if (selectedLesson === "numbers") renderNumbers();
  else if (selectedLesson === "pronunciation") renderPronunciation();
  else if (selectedLesson === "firstWords" || selectedLesson === "dailyWords") renderWords();
  else if (selectedLesson === "present") renderGrammar(["present"]);
  else if (selectedLesson === "pastFuture") renderGrammar(["present", "past", "future"]);
  else if (selectedLesson === "practice") renderPractice();
  else renderGenericLesson(selectedLesson);
}

function renderAll() {
  renderStaticUi();
  renderLanguageMenu();
  renderHero();
  renderLevels();
  renderLevelHeader();
  renderLessonTabs();
  renderLessonContent();
}

function openHelp(kind) {
  const isLearning = kind === "learning";
  document.querySelector("#help-title").textContent = isLearning ? text("learningHelpTitle") : text("appHelpTitle");
  document.querySelector("#help-text").textContent = isLearning ? text("learningHelpText") : text("appHelpText");
  helpModal.hidden = false;
}

function closeHelp() {
  helpModal.hidden = true;
}

function openSettings() {
  settingsModal.hidden = false;
}

function closeSettings() {
  settingsModal.hidden = true;
}

async function updateApp() {
  updateAppButton.textContent = text("updated");
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  }
  if ("caches" in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
  }
  const url = new URL(window.location.href);
  url.searchParams.set("force", `${appVersion}-${Date.now()}`);
  window.location.replace(url.toString());
}

function askWorkerToActivate(worker) {
  if (worker) worker.postMessage({ type: "SKIP_WAITING" });
}

function reloadAfterUpdate() {
  const reloadKey = `langora-reloaded-${appVersion}`;
  if (sessionStorage.getItem(reloadKey)) return;
  sessionStorage.setItem(reloadKey, "true");
  const url = new URL(window.location.href);
  url.searchParams.set("force", `${appVersion}-${Date.now()}`);
  window.location.replace(url.toString());
}

function watchForServiceWorkerUpdate(registration) {
  if (registration.waiting) {
    askWorkerToActivate(registration.waiting);
  }

  registration.addEventListener("updatefound", () => {
    const worker = registration.installing;
    if (!worker) return;
    worker.addEventListener("statechange", () => {
      if (worker.state === "installed" && navigator.serviceWorker.controller) {
        askWorkerToActivate(worker);
      }
    });
  });
}

async function shareApp() {
  const shareData = {
    title: "Langora",
    text: "Langora language learning app",
    url: window.location.href
  };
  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(window.location.href);
    shareAppButton.textContent = text("shareCopied");
    window.setTimeout(() => {
      shareAppButton.textContent = text("share");
    }, 1600);
  }
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

settingsToggle.addEventListener("click", openSettings);
settingsClose.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  closeSettings();
});
helpClose.addEventListener("click", closeHelp);
updateAppButton.addEventListener("click", updateApp);
shareAppButton.addEventListener("click", shareApp);

document.addEventListener("click", (event) => {
  const closeTarget = event.target.closest("[data-close-modal]");
  if (closeTarget) {
    event.preventDefault();
    event.stopPropagation();
    if (closeTarget.dataset.closeModal === "settings") closeSettings();
    return;
  }

  const helpButton = event.target.closest("[data-help]");
  if (helpButton) {
    openHelp(helpButton.dataset.help);
    return;
  }

  if (!event.target.closest(".language-picker")) {
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
  }

  if (event.target === helpModal) closeHelp();
  if (event.target === settingsModal) closeSettings();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!helpModal.hidden) closeHelp();
  if (!settingsModal.hidden) closeSettings();
});

appLanguageSelect.addEventListener("change", () => {
  selectedAppLanguage = appLanguageSelect.value;
  localStorage.setItem("langora-app-language", selectedAppLanguage);
  renderAll();
});

themeToggle.addEventListener("change", () => {
  localStorage.setItem("langora-theme", themeToggle.checked ? "dark" : "light");
  applyTheme();
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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (sessionStorage.getItem("langora-controller-reloaded") === appVersion) return;
    sessionStorage.setItem("langora-controller-reloaded", appVersion);
    reloadAfterUpdate();
  });

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(`sw.js?v=${appVersion}`);
      watchForServiceWorkerUpdate(registration);
      await registration.update();
    } catch (error) {
      console.warn("Langora update check failed", error);
    }
  });
}

applyTheme();
renderAll();
