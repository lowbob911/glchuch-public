import React from "react";
import {faAngleRight, faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Questions({data}) {
    const questions = [
        {
            title: "Каким нужно быть, чтобы слышать голос Господа?",
            answer: "\"Итак, наблюдайте, как вы слушаете: ибо, кто имеет, тому дано будет, а кто не имеет, у того отнимется и то, что он думает иметь\".(Лк.8:18) \"И сказал им: замечайте, что слышите: какою мерою мерите, такою отмерено будет вам и прибавлено будет вам, слушающим. Ибо кто имеет, тому дано будет, а кто не имеет, у того отнимется и то, что имеет\". (Марк 4:24-25) Когда Иисус Христос был на земле и учил, то одни Ему верили(слышали), а другие не верили(не слышали). Следуя словам Христа в Евангелии от Марка(4:24-25) слушающие оценивали слова Иисуса Христа и, или принимали, или отвергали их. Пророк Исаия говорит, что неспособность слышать происходит из-за огрубевшего сердца Ис.6:9-10). Об этом же говорится и в Новом Завете (Мф.13:15). Апостол Павел говорит, что помрачение разума происходит по причине невежества и ожесточения сердца(Еф.4:18). То, что Господь Бог хотел сказать человекам,записано в Библии. Слово свое Он послал через верных Ему людей. \"Ибо никогда пророчество не было произносимо по воле человеческой, но изрекали его святые Божии человеки, будучи движимы Духом Святым\".(2-е Петра 1:21) Поэтому, желая быть послушным Богу, человеку нужно изучать Библию и жить соответственно учению Библии. \"Слово Господне пребывает вовек; а это есть то слово, которое вам проповедано.(1-е Петра 1:25) \"Что вы зовете Меня: Господи! Господи!-- и не делаете того, что Я говорю?\".(Лк.6:46) \"Иисус сказал ему в ответ: кто любит Меня, тот соблюдет слово Мое; и Отец Мой возлюбит его, и Мы придем к нему и обитель у него сотворим. Нелюбящий Меня не соблюдает слов Моих; слово же, которое вы слышите, не есть Мое, но пославшего Меня Отца\".(Ин.14:23-24) Библия говорит, что нельзя ни прибавлять ни отнимать от слов Писания(см: Вт.12:32; Пр.30:6; От.22:18-19).Это говорит о законченности откровения от Бога для людей. Все, что нужно для спасения их душ сообщено и совершено. Когда вы будете читать и исполнять Библейскую истину в практике жизни, то это будет значить, что вы слышите слова Господа.",
            footer: "Господь Бог да благословит Вас.\nПресвитер церкви, Обровец П.Д."
        },
        {
            title: "Почему Дух Святой в Ветхозаветное время сходил временно?",
            question: "«Скажите пожалуйста, почему Дух Святой в Ветхозаветнее время сходил временно, но не постоянно? И второй вопрос: почему в Израиле не было колена Иосифа, а 2 колена назвали по имени его детей?»",
            answer: "Библия говорит, что мир был создан посредством Сына Божьего, ставшего через рождение от Девы Марии, и Сыном Человеческим. И Он есть цель всего и смысл всего. \"О, бездна богатства и премудрости и ведения Божия! Как непостижимы судьбы Его и неисследимы пути Его! Ибо кто познал ум Господень? Или кто был советником Ему? Или кто дал Ему наперед, чтобы Он должен был воздать? Ибо все из Него, Им и к Нему. Ему слава во веки, аминь\" (Рим.11:33-36) \"Ибо Им создано всё, что на небесах и что на земле, видимое и невидимое: престолы ли, господства ли, начальства ли, власти ли, -- все Им и для Него создано; и Он есть прежде всего, и все Им стоит. (Кол.1:16-17) \"В начале было Слово, и Слово было у Бога, и Слово было Бог. Оно было в начале у Бога. Все чрез Него начало быть, и без Него ничто не начало быть, что начало быть.(Ин.1:1-3) Поэтому и деятельность Духа Святого связана с Личностью Сына Божьего. От начала творения и до воплощения деятельность Духа Святого была связана с откровением о грядущем в мир Мессии и людьми участвовавшими в подготовке и участии в этом великом событии. Ответ собственно содержится в Ин.7:37-39: \"В последний же великий день праздника стоял Иисус и возгласил, говоря: кто жаждет, иди ко Мне и пей. Кто верует в Меня, у того, как сказано в Писании, из чрева потекут реки воды живой. Сие сказал Он о Духе, Которого имели принять верующие в Него: ибо еще не было на них Духа Святаго, потому что Иисус еще не был прославлен\". Благодаря совершенному Сыном Божьим делу искупления, Дух Святой поселяется во всех верующих и любящих Сына Божьего. \"Иисус сказал ему в ответ: кто любит Меня, тот соблюдет слово Мое; и Отец Мой возлюбит его, и Мы придем к нему и обитель у него сотворим. (Ин.14:23)",
            footer: "Господь Бог да благословит Вас.\nПресвитер церкви, Обровец П.Д."
        },
        {
            title: "Куда я иду? Для чего я живу? Какой смысл моего существования?",
            answer: "Вы задали хороший вопрос. Трудно найти человека, перед которым этот вопрос не вставал бы. К сожалению многие заглушили этот внутренний голос погоней за удовольствиями и развлечениями. \n«Куда я иду?» — Человек идет на суд Вечного Святого Бога. Из многих мест Библии, говорящих о суде, мы напомним только три: Евр. 9:27 «Человекам положено однажды умереть, а потом суд». Деяния 17:30-31 «30 Итак, оставляя времена неведения, Бог ныне повелевает людям всем повсюду покаяться, 31 ибо Он назначил день, в который будет праведно судить вселенную, посредством предопределенного Им Мужа, подав удостоверение всем, воскресив Его из мертвых». Откровение 20:11-15. Библия однозначно говорит о том, что Бог будет судить людей. Суд этот будет в конце веков, перед тем как Бог введет спасенных в Вечность. Этот суд заканчивает историю человечества во времени. \nНа этот суд не приходят люди, которые веруют в Иисуса Христа: Ин. 5:24 «Истинно, истинно говорю вам: слушающий слово Мое и верующий в Пославшего Меня имеет жизнь вечную, и на суд не приходит, но перешел от смерти в жизнь». Ин. 3:18 «Верующий в Него не судится, а неверующий уже осужден, потому что не уверовал во имя Единородного Сына Божия». \nГоворя о множестве путей в человеческой жизни Библия говорит: «Есть пути, которые кажутся человеку прямыми; но конец их — путь к смерти». Иисус Христос сказал: «Входите тесными вратами, потому что широки врата и пространен путь, ведущие в погибель, и многие идут ими; 14 потому что тесны врата и узок путь, ведущие в жизнь, и немногие находят их». \nКак бы небольшой итог текстов Библии на вопрос «куда я иду». Можно идти в жизнь вечную и можно идти в вечную погибель (вечная погибель не исчезновение (Отк. 20:14-15). Поэтому Бог и призывает к покаянию и вере в Евангелие (Мрк. 1:14-15) и проявляет великое долготерпение а ожидании обращения грешников.\n\nОтвет на два остальных вопроса можно суммировать: Только в Боге наша жизнь имеет цель смысл и значение.\n\n«Какой смысл моего существования?» — Смысл жизни в том, чтобы искать и найти Бога. \n(Деян.17:26-27) «26 От одной крови Он произвел весь род человеческий для обитания по всему лицу земли, назначив предопределенные времена и пределы их обитанию, 27 дабы они искали Бога, не ощутят ли Его и не найдут ли, хотя Он и недалеко от каждого из нас», возродиться духовно от Духа Святого и наследовать Царство Божие. (Ин. 3:5-7) «5 Иисус отвечал: истинно, истинно говорю тебе, если кто не родится от воды и Духа, не может войти в Царствие Божие. 6 Рожденное от плоти есть плоть, а рожденное от Духа есть дух. 7 Не удивляйся тому, что Я сказал тебе: должно вам родиться свыше». \n«Для чего я живу?» — Библия говорит, что Бог желает чтобы человек творил волю Его. \nВ книге пророка Михея 6:8 написано: «О человек! сказано тебе, что — добро и чего требует от тебя Господь: действовать справедливо, любить дела милосердия и смиренномудренно ходить пред Богом твоим». Также Рим.12:2 «и не сообразуйтесь с веком сим, но преобразуйтесь обновлением ума вашего, чтобы вам познавать, что есть воля Божия, благая, угодная и совершенная». Библия говорит о великой Божьей любви к грешнику и как, ради искупления грешника, Он послал на землю Своего Сына. Бог приготовил для ответивших на Его любовь неисследимое богатство наследия во Христе.\n\nЕсли Вы не верите Библии, то ваша жизнь не имеет того смысла, который вложил в жизнь человека Бог.\n\nЕсли вы не верите Библии, то ваша жизнь не достигает той цели, которую ставит перед человеком Бог.\n\nЕсли Вы не верите Библии, то Вы придете туда , куда не планируете прийти. Я думаю, что все, сидящие в тюрьмах мира, люди не планировали туда попасть, но попали. В ад тоже попадут люди, которые не планировали туда попасть, но ничего не предприняли, чтобы туда не попасть.\nДумается, что Вы сейчас на каком-то перекрестке жизненных дорог. Советую Вам склониться перед Богом в молитве и рассказать ему все, что у Вас на сердце, раскаяться в своих грехах и попросить Его спасти Вас и ввести в Его Божье Царство. Если Вы будете чистосердечны и искренни, то Бог приведет Вас на Путь, ведущий в Жизнь вечную.",
            footer: "Господь Бог да благословит Вас.\nПресвитер церкви, Обровец П.Д."
        },
        {
            title: "Отоношение к деньгам и к своим должникам",
            question: "«Прошу Вас дать совет на сложившуюся у меня ситуацию. Мой одноклассник по школе Владимир занял у меня деньги - 150 тыс. руб. для развития своего бизнеса в середине 2011 г. В начале 2012 г. его компаньон по бизнесу погибла в автоаварии. Весь бизнес оформлен был на погибшую девушку. В результате все имущество отошло к родственникам девушки. Бизнес у него отняли. Мой одноклассник - Владимир просил у меня деньги для открытия нового бизнеса (уже своего), я ему дал. Общая сумма переданная ему составила более 260 тыс. руб. Месяца через три от его друга я узнал, что все полученные деньги он потратил на наркоту и не одной копейки в бизнес он не вложил. Через год, как он говорит, с наркотой он завязал. Сейчас он пытается вернуть долг выплачивая его эпизодически по 5 тыс. руб. (выплатил уже 50 тыс. руб.) деньги я практически получаю от него только после неоднократных бесед. Устраивал его на работу, но работать он не очень то хочет. Работодатель, мягко сказано, от него не в восторге. Недавно уволился, чем занимается не понятно. Живет на пенсию получаемой родной бабушки. Вроде не глупый человек, два высших образования, устроиться на работу не может, хотя мне кажется - не хочет. Жизнь у него сложилась очень суровая. В школе учился - в семье достаток. Семья полная- мать и отец, . Отец занимал высокую должность толи в милиции, толи в КГБ (не знаю). В какой то момент в семье произошло горе. Произошел пожар в котором погибли мать и отец. Из родственников осталась одна бабушка с которой он сейчас живет в 2 комнатной квартире. С женой в разводе. Пытался устроить свою жизнь, но как - то не задалось. Организовал бизнес совместно с девушкой. Деньги бизнес давал не большие (парикмахерская в городе Пермь), а желания были большие. Позднее, при анализе деятельности бизнеса (уже после его отъёма), у меня сложилось мнение, что он занимался хищением денег у своего компаньона. В 2013 г. у него погиб двоюродный брат (сердечная недостаточность) парню было лет 20. \nСкажите правильно ли я заделал что дал ему деньги взаймы? В Библии написано, что просящему у тебя в займы не нужно отказывать. Возможно, что взаймы надо давать, только своим братьям по вере, а остальным следует ли давать? Подскажите как поступить. Оставшиеся деньги он не оказывается отдавать, но реально никаких действий для возврата не предпринимает. Можно ли верующему человеку обращаться в суд при таких обстоятельствах? Либо стоить простить и идти дальше (реально ситуация очень сильно угнетает. Чем больше думаю, тем больше растет к нему злость).»",
            answer: "Да в Библии написано: \"просящему у тебя дай, и от хотящего занять у тебя не отвращайся\".(Мф.5:42) Но также написано: \"Покажите в вере вашей добродетель, в добродетели рассудительность...\" (2 Пет. 1:5), и еще: \"тогда рассудительность будет оберегать тебя, разум будет охранять тебя\"(Пр.2:11). Поскольку \"давать взаймы\" не всегда можно отнести к добродетели, то рассудительность в этом вопросе тем более необходима. Есть просьбы дать денег взаймы, оправданные нуждой, а есть просьбы дать денег взаймы не оправданные нуждой. Луки 11:5-8: \"...друг! дай мне взаймы три хлеба, ибо друг мой с дороги зашел ко мне, и мне нечего предложить ему...\". Иак. 2:15-16: \"если брат или сестра наги и не имеют дневного пропитания,...\"; 1 Тим. 6:8 \" имея пропитание и одежду, будем довольны тем\" Эти тексты, также Вт.15:8, говорят о необходимости помогать человеку, когда он в нужде. Нужда определяется отсутствием пищи и одежды. В этих случаях(когда нет пищи или одежды) и необходимо исполнять слова Иисуса Христа из Мф.5:42. И я думаю, что обоснованность займа или просто помощи только этими нуждами(пропитание, одежда) и обоснованы. Но и здесь требуется и разумность и рассудительность. Например, когда нечего есть, то нельзя ожидать, что тебе дадут пропитание на целый год вперед, а быть благодарным за то немногое, что получил в нужде по милости Бога. Равно и когда у тебя едва \"концы с концами сходятся\" , то тоже требуется рассудительность: можешь ли ты в данных условиях помогать и насколько. Также, если просьба \"дай, дай в долг\" повторяется, то вопрос требует изучения и рассмотрения. \n\nС просьбой занять денег обращаются и по другим нуждам (например нужда в квартире, велосипеде). Но это уже не относится к первостепенной нужде (пропитание, одежда) и требует рассмотрения разумности и обоснованности желания и мотивов просящего. И в нуждах не первостепенной важности возможен отказ в помощи(и в займе), если обнаружится излишняя амбициозность, неоправданность желания( непременно хочу жить в Москве).Конечно при обоснованной( действительной) нужде помогать нужно( делать добро всем, а наипаче своим по вере (Гал.6:10)), но Библия не призывает делать добро сверх сил или помогать человеку в его неразумных желаниях или стремлениях.\n\nВозвращаясь к тексту 1-е Тим.6:7-10 находим, что есть люди, которые попадают в искушение, связанное с желанием стать богаче( обогащаться). Библия призывает быть довольными тем, что нам даровано Богом(1-е Тим.6:8). \"Желающие обогащаться впадают в искушение и в сеть...\"(1-еТим.6:9) В подобных случаях (займи мне денег, я хочу сделать бизнес) почти всегда надо отказывать. Человек должен исходить из своих реальных возможностей и реальных условий. (1-е Кор.7:20-21) Что делать вам? А чем вам поможет суд? Обяжет вашего должника выплачивать процент, установленный судом с зарплаты (будет ли это достаточная зарплата и будет ли она?) Лк. 6;30 \"... от взявшего твое не требуй назад\" \nВидимо надо перестать ожидать возвращения долга. Оставить так, как есть. Напоминать должнику о долге можно, но внутри смириться с мыслью, что может не отдать. Для себя решить, что эта сумма утрачена и продолжать жить и работать, взяв урок из случившегося. Таким образом в сердце вашем водворится мир и злость против должника угаснет. Пусть ответственность будет на совести того, кто взял у вас деньги в долг. Помолитесь о должнике Богу, попросите у Бога для него милости. Предоставьте дело Господу. Ведь Бог может вернуть вам потерю другим путем. Если вы это увидите, то для вас это будет двойной радостью: и о духовном и о материальном.",
            footer: "Господь Бог да благословит Вас.\nПресвитер церкви, Обровец П.Д."
        },
        {
            title: "Почему во всей Библии так много мест о внешней красоте женщины?",
            question: "«Почему во всей Библии так много мест о внешней красоте женщины. О том как они украшали себя в красивые одежды, пурпур, виссон. Сегодня же в церкви негативно относятся к тому, чтобы женщина была красивой. Не из-за этого ли мужчины смотрят на других и уходят к другим? Спасибо.»",
            answer: "Действительно, Библия говорит о красоте немало и не только о красоте женщин, но и мужчин, и о красоте созданного Богом мира. К примеру, об Иосифе, сыне патриарха Иакова, говорится, что он был красив станом и красив лицом (Быт.39:6). Также об Авессаломе, сыне царя Давида, говорится, что «Не было во всем Израиле мужчины столь красивого, как Авессалом, и столько хвалимого, как он; от подошвы ног до верха головы его не было у него недостатка» (2Цар. 14:25). Но, говоря о красоте, Библия более всего обращает внимание на внутреннюю красоту обладателя (обладательницы) красивой внешности. И более всего, в отношении красоты, Библия призывает к украшению внутреннего человека. «Да будет украшением вашим не внешнее плетение волос, не золотые уборы или нарядность в одежде, но сокровенный сердца человек в нетленной красоте кроткого и молчаливого духа, что драгоценно пред Богом. Так некогда и святые жены, уповавшие на Бога, украшали себя, повинуясь своим мужьям» (1Петра3:3-5). «Что золотое кольцо в носу у свиньи, то женщина красивая и — безрассудная» (Пр. 11:22). \nПрактически весь Новый Завет призывает к работе над красотой души, к уподоблению Иисусу Христу. «Итак будьте совершенны, как совершен Отец ваш Небесный» (Мф. 5:48). \nВ отношении, почему мужья уходят, то отсутствие достаточно красивой внешности или отсутствие дорогой косметики и дорогих нарядов не является причиной ухода мужа к другой. Конечно, женщина не должна быть неряшливой. Но при любой одежде умная женщина будет женственной и сумеет подчеркнуть, тонко и изящно, сильные стороны своей внешности. Красивая внешность привлекает только в начале знакомства. При более близком знакомстве при проявлении отрицательных черт характера (сварливость, необузданность, злоречие и т.п.) красивая внешность теряет свою красоту. Библия говорит: «Миловидность обманчива и красота суетна; но жена, боящаяся Господа, достойна хвалы. Также еще: «Кто найдет добродетельную жену? цена ее выше жемчугов». От такой жены уйдет только глупый муж. Тогда как: «Лучше жить в углу на кровле, нежели со сварливою женою в пространном доме« (Пр. 25:24). \n\nНельзя не вспомнить, что при сотворении человека, Бог дал Адаму жену тогда, когда Адам осознал свое одиночество и что подобного ему, с кем бы он мог общаться на своем уровне, нет. Таким образом, жена дана мужу для общения. Общение предполагает способность выслушать и понять и поддержать. Общение предполагает достижение одинакового мировоззрения, системы ценностей, целей («так что они уже не двое, но одна плоть. Итак, что Бог сочетал, того человек да не разлучает», — Мф. 19:6).\n\nПричин ухода мужей от жен много и, далеко не всегда, в этом виновата жена. Христос сказал, что причиной разводов является жестокосердие (Мф 19:8). Если отношение к семье и строительство семьи будет библейским, если вместо гордости и себялюбия будет смирение, кротость и жертвенность и, конечно же, способность любить (не путать с влюбленностью) семья снова станет прочной.",
            footer: "Господь Бог да благословит Вас.\nПресвитер церкви, Обровец П.Д."
        },
        {
            title: "Израиль не единожды подпадал под прицел обвинений за своё жестокосердие",
            question: "«Израиль не единожды подпадал под прицел обвинений за своё жестокосердие. Где значительная часть вины ложится как раз на интеллектуальную элиту; тех, кто был призван к духовному наставничеству. Таковые, чрезмерно увлекшись 'буквой' закона, вдруг, оказались не способны замечать нужды своих менее рассудительных соплеменников. В виду этого, принято стало считать, будто евангельская притча о 'добром самаритянине' вполне содержит в себе данный упрёк. Что якобы, священник и левит, отказавшиеся помочь несчастной жертве разбойного нападения, с позиции нынешней гуманистической морали, подлежат осуждению. То есть, как поступили эти двое, так поступать не следует! \nВ виду этого у меня имеется следующий вопрос. Ведь, осуждая священника и левита за проявленную бесчувственность, соответствующим судом следовало бы сегодня осудить многих христиан. Поскольку, если следовать логике выдвинутой морали, то каждый день мы встречаемся с примерами людских страданий. И что же? Теперь в каждом несчастном нужно увидеть своего ближнего и поспешать ему на помощь? Но это уже выглядит как – сверхзадача, которую многим людям выполнить вряд ли представляется возможным. И получается, что сей самаритянин, будучи по натуре - обычным филантропом, для чего даже не обязательно лично знать Бога, может одной только своей любовью достичь Царства Божьего? Тогда как, священник и левит, олицетворяющих собой - служителя Божьего, из-за своей ревности к долгу, могут в Небесах оказаться даже позади этого невежды - 'добряка' самаритянина? \nПомогите разобраться!» ",
            answer: "Спасибо за интересный вопрос. \nПервое, на что хочется обратить внимание, это то, что притча о милосердном самарянине прозвучала в ответ на вопрос: ‘А кто мой ближний?’ Этой притчей Христос показывает как следует поступать тем, кто желает исполнять заповедь о любви к ближнему. В притче не содержится суда для священника и левита, не указывается никаких деталей и причин их поступка. Цель притчи показать, как поступает ближний, поэтому и ответ звучит не так, как задавался вопрос: «А кто мой ближний?», — вопрошает законник и хочет оправдать себя. Логически следовало бы спросить: «Кому, израненный разбойниками, был ближним?» Но Христос спрашивает у законника наоборот: «Кто был ближним попавшемуся разбойникам?» Христос законнику показывает, как поступает ближний и призывает его поступать таким же образом т. е. самому быть ближним тому, кто рядом с ним и нуждается в его помощи. В Ветхом Завете очень много сказано о ближнем. Уровень любви к ближнему — уровень любви к себе. В Новом Завете это выражено, пожалуй, словами Христа:Мф. 7:12 «Итак во всем, как хотите, чтобы с вами поступали люди, так поступайте и вы с ними, ибо в этом закон и пророки».) Ближний не всегда нуждается в помощи. (читайте Исх.20:16-17; Исх. 22:11,14,26; Лев.19:13-18; Лев.20:10; 24:19; 25:14-15). Ближний — это тот, с кем у тебя в данный момент контакт, или какой-то интерес к нему, или к тому, что у него. В случае, описанном в Евангелии по Луке глава 10, проблема была в том, что фарисеи старались ограничить круг ближних своей партией и этим искажали Писание. Возможно под влиянием этого мнения (ограничение круга ближних) был и законник. Возможно он тоже хотел иметь некий круг ближних, чтобы ограничить любовь свою в их направлении, так как по Писанию ближним мог стать любой человек. И сегодня это мог быть один человек, чей осел тебе нравится, а завтра другой, нанимающийся к тебе на работу, послезавтра третий, нуждающийся в твоей помощи. Ответ Христа: » Ты поступай, как ближний»; ты поступай так, как хочешь, чтобы поступали с тобою. В отношении христиан, не исполняющих заповеди о любви к ближнему, то вы возможно правы (Евангелие не призывает меня судить других), но Писание остается Писанием и слова Христа остаются словами Христа. «Судья же мне Господь», — говорит Апостол (1Кор.4:4). И мыслить так, как говорит Апостол, призывается каждый.",
            footer: "Господь Бог да благословит Вас.\nПресвитер церкви, Обровец П.Д."
        }
    ];

    return (
        <div className="row">
            <div className="col-12">
                <div className="text-center">
                    <img src="/img/question-mark.png" className="header-img" alt="Вопрос пастору"/>
                </div>
                <div className="text-center">
                    <h3>Вопрос пастору</h3>
                    <p>
                        Здесь опубликованы ответы на вопросы заданные пастору нашей церкви.
                    </p>
                </div>
                <div className="text-center my-2">
                    <a href="https://forms.gle/FNRRVfSG9JD8YTFr6" className="btn btn-primary" target="_blank">
                        Задать свой вопрос
                    </a>
                </div>

                <div className="text-center">
                    <h3>Общие вопросы</h3>
                </div>
                <div className="accordion mt-3" id="questionsAccordion">
                    {questions.map((q,index) => (
                        <div className="card">
                            <div className="card-header" id={`header${index}`}>
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse"
                                            data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                        {q.title} <FontAwesomeIcon icon={faAngleRight}/>
                                    </button>
                                </h2>
                            </div>

                            <div id={`collapse${index}`} className="collapse" aria-labelledby={`header${index}`}
                                 data-parent="#questionsAccordion">
                                <div className="card-body">
                                    {q.question && <p><em><b>ВОПРОС:</b> {q.question}</em></p>}
                                    <p style={{"white-space": "pre-wrap"}}><b>ОТВЕТ:</b> {q.answer}</p>

                                    {q.footer && <p className="font-weight-bold" style={{"white-space": "pre-wrap"}}>{q.footer}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
