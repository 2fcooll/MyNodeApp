'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     const donIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Ясиноватая',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Шахтёрск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Чистяково',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Часов Яр',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Харцызск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Украинск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Угледар',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Углегорск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Торецк',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Соледар',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Снежное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Славянск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Селидово',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Северск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Святогорск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Светлодарск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Родинское',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Покровск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новогродовка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новоазовск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Николаевка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Моспино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мирноград',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Марьинка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мариуполь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Макеевка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лиман',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Курахово',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Крестовка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Красногоровка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Краматорск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Константиновка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Авдеевка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Амвросиевка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бахмут',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Белицкое',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Белозёрское',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бунге',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Волноваха',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Горловка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Горняк',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дебальцево',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Доброполье',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Докучаевск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Донецк',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дружковка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Енакиево',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ждановка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Железное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Зугрэс',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Иловайск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кальмиусское',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const kirovogradIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Светловодск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Помошная',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новоукраинка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новомиргород',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Малая Виска',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кропивницкий',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Александрия',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Благовещенское',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бобринец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Гайворон',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Долинская',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Знаменка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const luganskIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Хрустальный',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Счастье',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Суходольск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Старобельск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сорокино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Северодонецк',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сватово',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Рубежное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ровеньки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Приволье',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Попасная',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Петрово-Красноселье',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Перевальск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Первомайск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новодружеск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Молодогвардейск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Миусинск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лутугино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Луганск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лисичанск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кременная',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кипучее',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Александровск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Алмазная',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Алчевск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Антрацит',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Боково-Хрустальное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Брянка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вознесеновка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Голубовка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Горское',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Должанск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Зимогорье',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Золотое',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ирмино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кадиевка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const khersonIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Херсон',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Таврийск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Скадовск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новая Каховка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Каховка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Алёшки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Берислав',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Геническ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Голая Пристань',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const crimeaIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Ялта',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Щёлкино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Феодосия',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Судак',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Старый Крым',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Симферополь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Севастополь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Саки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Красноперекопск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Керчь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Алупка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Алушта',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Армянск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бахчисарай',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Белогорск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Джанкой',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Евпатория',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Инкерман',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const odessaIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Южное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Черноморск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Теплодар',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Татарбунары',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Рени',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Раздельная',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Подольск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Одесса',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кодыма',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Килия',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ананьев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Арциз',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Балта',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Белгород-Днестровский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Беляевка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Березовка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Болград',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вилково',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Измаил',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const zhytomyrIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Чуднов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Радомышль',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Олевск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Овруч',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новоград-Волынский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Малин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Коростышев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Коростень',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Андрушёвка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Барановка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бердичев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Житомир',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const dnipropetrovskIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Терновка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Синельниково',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Пятихатки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Покров',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Подгородное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Першотравенск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Перещепино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Павлоград',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новомосковск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Никополь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Марганец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кривой Рог',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Апостолово',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Верхнеднепровск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Верховцево',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вольногорск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Днепр',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Жёлтые Воды',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Зеленодольск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Каменское',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const sumyIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Шостка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тростянец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сумы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Середина-Буда',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ромны',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Путивль',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лебедин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кролевец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Конотоп',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ахтырка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Белополье',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бурынь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ворожба',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Глухов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дружба',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const kharkovIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Чугуев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Харьков',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Пивденное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Первомайский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мерефа',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Люботин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лозовая',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Купянск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Красноград',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Балаклея',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Барвенково',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Богодухов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Валки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Волчанск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дергачи',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Змиёв',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Изюм',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const vinnytsiaIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Ямполь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Шаргород',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хмельник',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тульчин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Погребище',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Немиров',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Могилёв-Подольский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Липовец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ладыжин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бар',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бершадь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Винница',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Гайсин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Гнивань',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Жмеринка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ильинцы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Казатин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Калиновка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const chernihivIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Чернигов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сновск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Семёновка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Прилуки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Остёр',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Носовка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новгород-Северский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Нежин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мена',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Корюковка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Батурин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бахмач',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бобровица',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Борзна',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Городня',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ичня',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const nikolaevkskayaIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Южноукраинск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Снигирёвка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Первомайск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новый Буг',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новая Одесса',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Николаев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Баштанка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вознесенск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const kyivIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Яготин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Чернобыль',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Фастов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Украинка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Узин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тетиев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тараща',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Славутич',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сквира',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ржищев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Припять',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Переяслав',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Обухов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мироновка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Киев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Белая Церковь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Березань',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Богуслав',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Борисполь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Боярка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бровары',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Буча',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Васильков',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вишнёвое',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вышгород',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ирпень',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кагарлык',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const lvivIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Яворов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Червоноград',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хыров',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ходоров',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Угнев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Турка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Трускавец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Судовая Вишня',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Стрый',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Стебник',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Старый Самбор',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сосновка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сокаль',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сколе',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Самбор',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Рудки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Радехов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Рава-Русская',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Пустомыты',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Перемышляны',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новый Роздол',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новый Калинов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новояворовск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Николаев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мостиска',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Моршин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Львов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Комарно',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Белз',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бобрка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Борислав',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Броды',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Буск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Великие Мосты',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Винники',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Глиняны',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Городок',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Добромиль',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дрогобыч',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дубляны',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Жидачов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Жолква',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Золочев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Зоринск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Каменка-Бугская',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const zaporozhyeIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Энергодар',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Токмак',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Приморск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Пологи',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Орехов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Молочанск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мелитополь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бердянск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Васильевка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вольнянск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Гуляйполе',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Днепрорудное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Запорожье',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Каменка-Днепровская',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const transcarpathianIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Чоп',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хуст',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ужгород',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тячев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Свалява',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Рахов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Перечин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мукачево',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Берегово',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Виноградов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Иршава',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const ternopilIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Шумск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Чортков',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хоростков',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тернополь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Теребовля',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Скалат',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Почаев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Подгайцы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Монастыриска',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лановцы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кременец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Копычинцы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бережаны',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Борщёв',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бучач',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Залещики',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Збараж',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Зборов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const rivneIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Сарны',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ровно',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Радивилов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Острог',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Костополь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Корец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Березно',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вараш',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дубно',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дубровица',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Здолбунов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const volynIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Устилуг',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Рожище',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Нововолынск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Любомль',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Луцк',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ковель',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Киверцы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Берестечко',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Владимир-Волынский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Горохов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Камень-Каширский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const ivanoFrankivskIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Яремче',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тысменица',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тлумач',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Снятын',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Рогатин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Надворная',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Косов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Коломыя',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Болехов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Бурштын',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Галич',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Городенка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Долина',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ивано-Франковск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Калуш',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const cherkasyIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Шпола',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Чигирин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Черкассы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Христиновка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Умань',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тальное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Смела',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Монастырище',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Корсунь-Шевченковский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Канев',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ватутино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Городище',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Жашков',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Звенигородка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Золотоноша',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Каменка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const chernivtsiIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Черновцы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хотин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сторожинец',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сокиряны',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новоселица',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Новоднестровск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кицмань',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вашковцы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Вижница',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Герца',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Заставна',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const khmelnitskyIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Шепетовка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хмельницкий',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Староконстантинов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Славута',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Полонное',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Нетешин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Красилов',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кобеляки',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Волочиск',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Городок',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Деражня',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Дунаевцы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Изяслав',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Каменец-Подольский',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     const poltavaIds = await queryInterface.bulkInsert('Towns', [
      {
        name: 'Хорол',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Решетиловка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Полтава',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Пирятин',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Миргород',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лубны',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лохвица',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кременчуг',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Карловка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Гадяч',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Глобино',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Горишние Плавни',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Гребёнка',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Заводское',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Зеньков',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], { returning: ["id"] });

     await queryInterface.bulkInsert('Regions', [
      {
        name: 'Донецкая область',
        donIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Кировоградская область',
        kirovogradIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Луганская область',
        luganskIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Херсонская область',
        khersonIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Автономная Республика Крым',
        crimeaIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Одесская область',
        odessaIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Житомирская область',
        zhytomyrIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Днепропетровская область',
        dnipropetrovskIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сумская область',
        sumyIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Харьковская область',
        kharkovIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Винницкая область',
        vinnytsiaIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Черниговская область',
        chernihivIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Николаевская область',
        nikolaevkskayaIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Киевская область',
        kyivIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Львовская область',
        lvivIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Запорожская область',
        zaporozhyeIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Закарпатская область',
        transcarpathianIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тернопольская область',
        ternopilIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ровненская область',
        rivneIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Волынская область',
        volynIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ивано-Франковская область',
        ivanoFrankivskIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Черкасская область',
        cherkasyIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Черновицкая область',
        chernivtsiIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хмельницкая область',
        khmelnitskyIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Полтавская область',
        poltavaIds,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Towns', null, {});
  },
};