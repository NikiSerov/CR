const seasons = {
  1: [
    "Дело браконьеров. Маленькая война за икру",
    "Дело Головкина. Удав",
    "Дело контрабандистов. Иконы из России",
    "Дело Корякина. Прирождённые убийцы",
    "Дело Култашева. Оборотень",
    "Дело Ларионова. Кровавый передел",
    "Дело Мадуева. Приговорённый всеми",
    "Дело Мурылёва. Смерть за квартиры",
    "Дело Ряховского. Молчание ягнят ",
    'Дело химиков. Наркотик "Белый китаец"',
    'Дело Чайки. Операция "Шуба"',
    "Неоконченная война",
    "Свердловское дело. Сатрапы",
  ],
  2: [
    "Афера",
    "Дело Вэпса. Вся бандитская власть",
    "Курганский Терминатор",
    "Ложный курьер",
    "По следу Сатаны. часть 1",
    "По следу Сатаны. часть 2",
    "Синдикат убийц",
  ],
  3: [
    "Брянские волки",
    "Великолукские. От рассвета до заката",
    "Волки по партии",
    "Гангстеры и филантропы",
    'Кооператив "Узник"',
    "Марки из Голландии",
    "Неистовый налётчик",
    "Охота на двойника",
    "Поддельники",
    "Последним не будет",
    "Поцелуй Иуды",
    "Смерть у обочины",
    "Тайна Невского лесопарка",
    "Троих надо убрать",
    "Убийца по объявлению",
    "Убить по-русски. часть 1",
    "Убить по-русски. часть 2",
    "Чёрный героин",
  ],
  4: [
    "Возвращение Терминатора. часть 1",
    "Возвращение Терминатора. часть 2",
    "В сетях дьявола. часть 1",
    "В сетях дьявола. часть 2",
    "Двенадцатый отдел (12 отдел)",
    "Двойное убийство",
    "Деревенский киллер",
    "Десятый отдел (10 отдел)",
    "Как украсть миллиард",
    "Конопляный рейс",
    "Люберецкий изувер",
    "Неуловимый взломщик. часть 1",
    "Неуловимый взломщик. часть 2",
    "Овечкины - Никто не хотел убивать. часть 1",
    "Овечкины - Никто не хотел убивать. часть 2",
    'Операция "Клофелин"',
    'Операция "Ловушка"',
    'Операция "Таджик"',
    "Особенности национальной разборки. часть 1",
    "Особенности национальной разборки. часть 2",
    "Ошибка киллера",
    'Побег из "Крестов". часть 1',
    'Побег из "Крестов". часть 2',
    "Погоня за призраками. часть 1",
    "Погоня за призраками. часть 2",
    'Похищение "Страдивари"',
    "Роковая коллекция. часть 1",
    "Роковая коллекция. часть 2",
    "Спасти любой ценой. часть 1",
    "Спасти любой ценой. часть 2",
    "Схватка на Гончарной (Служили три товарища)",
    "Убийство депутата Скорочкина",
  ],
  5: [
    "Автосервис на крови",
    "Банда неудачников. часть 1",
    "Банда неудачников. часть 2",
    "Бешеное золото. часть 1",
    "Бешеное золото. часть 2",
    "Братья по крови. часть 1",
    "Братья по крови. часть 2",
    "Дневник оборотня. часть 1",
    "Дневник оборотня. часть 2",
    'Заложники "Чёрного золота". часть 1',
    'Заложники "Чёрного золота". часть 2',
    "Месть чемпиона",
    "Охотники на маньяков. часть 1",
    "Охотники на маньяков. часть 2",
    "Последний выстрел",
    "Сибирский потрошитель. часть 1",
    "Сибирский потрошитель. часть 2",
    "ТТ для киллера. часть 1",
    "ТТ для киллера. часть 2",
    "Чума. часть 1",
    "Чума. часть 2",
  ],
  6: [
    "Адская бочка. часть 1",
    "Адская бочка. часть 2",
    "Берегись компаньона. часть 1",
    "Берегись компаньона. часть 2",
    'Доктор "Смерть". часть 1',
    'Доктор "Смерть". часть 2',
    "Домодедовский упырь. часть 1",
    "Домодедовский упырь. часть 2",
    "Лохотронщики. часть 1",
    "Лохотронщики. часть 2",
    "Ночная стая",
    'Операция "Спрут". часть 1',
    'Операция "Спрут". часть 2',
    "Охота на слонов. часть 1",
    "Охота на слонов. часть 2",
    "Убийственная страсть. часть 1",
    "Убийственная страсть. часть 2",
  ],
  7: [
    "Дьявольская сумка",
    "Жигулёвская битва. часть 1",
    "Жигулёвская битва. часть 2",
    "Жигулёвская битва. часть 3",
    "Неутомимый заказчик",
    "Поставщик смерти",
    "Ростовские оборотни. часть 1",
    "Ростовские оборотни. часть 2",
    "Тюремный волк. часть 1",
    "Тюремный волк. часть 2",
    "Убить по-американски. часть 1",
    "Убить по-американски. часть 2",
    "Фальшивомонетчики. часть 1",
    "Фальшивомонетчики. часть 2",
    "Чёрная лента",
  ],
  8: [
    "Безумная семейка",
    "Вкус добычи",
    "Злодей на все руки. часть 1",
    "Злодей на все руки. часть 2",
    "Зомби. часть 1",
    "Зомби. часть 2",
    "Казаки-разбойники. часть 1",
    "Казаки-разбойники. часть 2",
    "Конец бригады",
    "Красавицы и чудовища. часть 1",
    "Красавицы и чудовища. часть 2",
    "Красавицы и чудовища. часть 3",
    "Палачи. часть 1",
    "Палачи. часть 2",
    "Последнее дело Пушкина. часть 1",
    "Последнее дело Пушкина. часть 2",
    "Похитители детства. часть 1",
    "Похитители детства. часть 2",
    "Смертельный звонок. часть 1",
    "Смертельный звонок. часть 2",
    "Смертоносное трио",
    "Тульская бойня. часть 1",
    "Тульская бойня. часть 2",
    "Убийство по объявлению. часть 1",
    "Убийство по объявлению. часть 2",
    "Факультет убийц. часть 1",
    "Факультет убийц. часть 3",
  ],
  9: [
    "Бриллианты для мафии. часть 1",
    "Бриллианты для мафии. часть 2",
    "Дьяволица. часть 1",
    "Дьяволица. часть 2",
    "Евроремонт для убийцы. часть 1",
    "Евроремонт для убийцы. часть 2",
    "Кошмар в семейном общежитии",
    "Крысоловы. часть 1",
    "Крысоловы. часть 2",
    "Люди исчезают в полдень. часть 1",
    "Люди исчезают в полдень. часть 2",
    "Монстр из Старожилово. часть 1",
    "Монстр из Старожилово. часть 2",
    "Неуловимые налётчики. часть 1",
    "Неуловимые налётчики. часть 2",
    "Неуловимый привкус смерти. часть 1",
    "Неуловимый привкус смерти. часть 2",
    "Никита из Подмосковья",
    "Ночные ястребы. часть 1",
    "Ночные ястребы. часть 2",
    "Огненный след. часть 1",
    "Огненный след. часть 2",
    "Опасные праздники. часть 1",
    "Опасные праздники. часть 2",
    "Особенности провинциального сыска. часть 1",
    "Особенности провинциального сыска. часть 2",
    "Осторожно, квартирант! часть 1",
    "Осторожно, квартирант! часть 2",
    "Последний роман обольстителя. часть 1",
    "Последний роман обольстителя. часть 2",
    "По следу сибирского зверя. часть 1",
    "По следу сибирского зверя. часть 2",
    "Предъявите валюту! часть 1",
    "Предъявите валюту! часть 2",
    "Прописка на тот свет. часть 1",
    "Прописка на тот свет. часть 2",
    "Репортаж с того света. часть 1",
    "Репортаж с того света. часть 2",
  ],
  10: [
    "Битва при Жигулях. часть 1",
    "Битва при Жигулях. часть 2",
    "Битва при Жигулях. часть 3",
    "Битва при Жигулях. часть 4",
    "Вези меня, извозчик! часть 1",
    "Вези меня, извозчик! часть 2",
    "Волк в овечьей шкуре",
    "Диагноз - квартира. часть 1",
    "Диагноз - квартира. часть 2",
    "Его звали Никита. часть 1",
    "Его звали Никита. часть 2",
    "Курортный капкан. часть 1",
    "Курортный капкан. часть 2",
    "Последний узел. часть 1",
    "Последний узел. часть 2",
    "Прощай, оружие! часть 1",
    "Прощай, оружие! часть 2",
    "Тварь дрожащая. часть 1",
    "Тварь дрожащая. часть 2",
    "Тринадцатый дракон. часть 1",
    "Тринадцатый дракон. часть 2",
    "Черная маска. часть 1",
    "Черная маска. часть 2",
  ],
  11: [
    "10 лет спустя. часть 1",
    "10 лет спустя. часть 2",
    "Адский телефон. часть 1",
    "Адский телефон. часть 2",
    "Великое противостояние. часть 1",
    "Великое противостояние. часть 2",
    "Великое противостояние. часть 3",
    "Великое противостояние. часть 4",
    "Весенний марафон. часть 1",
    "Весенний марафон. часть 2",
    "Ген убийцы. часть 1",
    "Ген убийцы. часть 2",
    "Камский спрут. часть 1",
    "Камский спрут. часть 2",
    "Кемеровская зачистка. часть 1",
    "Кемеровская зачистка. часть 2",
    "Ловушка для одинокого мужчины. часть 1",
    "Ловушка для одинокого мужчины. часть 2",
    "Любители искусства. часть 1",
    "Любители искусства. часть 2",
    "На дне. часть 1",
    "На дне. часть 2",
    "Обжалованию не подлежит. часть 1",
    "Обжалованию не подлежит. часть 2",
    "Обжалованию не подлежит. часть 3",
    "Обжалованию не подлежит. часть 4",
    "Оперуполномоченный главарь. часть 1",
    "Оперуполномоченный главарь. часть 2",
    "Офицерская рулетка. часть 1",
    "Офицерская рулетка. часть 2",
    "Охотники в парадных. часть 1",
    "Охотники в парадных. часть 2",
    "Погружение в ад. часть 1",
    "Погружение в ад. часть 2",
    "Предатели. часть 1",
    "Предатели. часть 2",
    "Фальшивомонетчики. часть 1",
    "Фальшивомонетчики. часть 2",
    "Чистильщик. часть 1",
    "Чистильщик. часть 2",
  ],
  12: [
    "Затмение",
    "Право на надежду",
    "Романтики с большой дороги. часть 1",
    "Романтики с большой дороги. часть 2",
    "Три товарища. часть 1",
    "Три товарища. часть 2",
  ],
  13: [
    "Банда архивариуса. часть 1",
    "Банда архивариуса. часть 2",
    "Влюблён и очень опасен",
    "В тихом омуте",
    "Дорога в один конец",
    "Жестокий квартирант. часть 1",
    "Жестокий квартирант. часть 2",
    "Заминированный город",
    "Игроки. часть 1",
    "Игроки. часть 2",
    "Идущий по пятам",
    "Леший",
    "Лишняя родня",
    "Необузданный инстинкт. часть 1",
    "Необузданный инстинкт. часть 2",
    "Неолимпийский резерв",
    "Опасное кино",
    "Отравитель",
    "Охота на красоту",
    "Охота на прыгунов",
    "Пропавшие автовладельцы. часть 1",
    "Пропавшие автовладельцы. часть 2",
    "Профессионалы. часть 1",
    "Профессионалы. часть 2",
    "Роковые метры",
    "Семейный подряд",
    "Стальная хватка",
    "Тайна красной машины",
    "Ударная доза",
  ],
  14: [
    "Звериный взгляд",
    "Клетка для слонов",
    "Огненный капкан",
    "Переезд на тот свет",
    "Ребята с одного двора. часть 1",
    "Ребята с одного двора. часть 2",
  ],
  15: ["Генотип зверя"],
};

const seasonsListContainer = document.querySelector(".seasonsListWrapper");
const seriesListContainer = document.querySelector(".seriesListWrapper");
const searchResultsContainer = document.querySelector(
  ".searchResultsContainer"
);
const showSearchBtn = document.querySelector(".showSearchBtn");
const backBtn = document.querySelector(".backBtn");
const searchForm = document.querySelector(".searchForm");
const searchBtn = document.querySelector(".searchBtn");

const rendersSeasonTabs = (seasons) => {
  const seasonTabsHTML = Object.keys(seasons).reduce((acc, cv) => {
    return acc + `<div class='seasonTab' data-season=${cv}>Сезон ${cv}</div>`;
  }, "");
  seasonsListContainer.innerHTML = `<div class="seasonsList">${seasonTabsHTML}</div>`;
};

const renderSeriesList = (seasonNum) => {
  const seriesList = seasons[seasonNum];
  const seriesHTML = seriesList.reduce((acc, cv, i) => {
    return (
      acc +
      `<li class="episode"><a href="https://rezka.ag/series/documentary/51548-kriminalnaya-rossiya-1995.html#t:110-s:${seasonNum}-e:${
        i + 1
      }" class="episodeLink">${cv}</a></li>`
    );
  }, "");
  seriesListContainer.innerHTML = `<ol class="seriesList">${seriesHTML}</ol>`;
};

const selectActiveTab = (e) => {
  const selectedTab = e.target;
  const activeTab = document.querySelector(".activeTab");
  activeTab?.classList.remove("activeTab");
  selectedTab.classList.add("activeTab");
  renderSeriesList(selectedTab.dataset.season);
};

const toggleSearch = () => {
  searchForm.classList.toggle("show");
  backBtn.classList.toggle("show");
  seasonsListContainer.classList.toggle("hide");
  seriesListContainer.classList.toggle("hide");
  showSearchBtn.classList.toggle("hide");
  searchResultsContainer.classList.toggle("show");
};

const renderSearchResults = (results) => {
  const resultHTML = results.reduce((acc, cv) => {
    return (
      acc +
      `<li class="episode"><a href="https://rezka.ag/series/documentary/51548-kriminalnaya-rossiya-1995.html#t:110-s:${cv.season}-e:${cv.episodeNumber}" class="episodeLink">${cv.name}</a></li>`
    );
  }, "");
  searchResultsContainer.innerHTML = `<ol class="seriesList">${resultHTML}</ol>`;
};

const handleSearch = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const value = data.get("inputValue");
  const valueLength = value.length;
  const allSeries = Object.values(seasons);
  const results = [];
  allSeries.forEach((season, seasonIndex) => {
    season.forEach((episode, episodeIndex) => {
      if (episode.toLowerCase().slice(0, valueLength) === value.toLowerCase()) {
        results.push({
          name: episode,
          season: seasonIndex + 1,
          episodeNumber: episodeIndex + 1,
        });
      }
    });
  });
  renderSearchResults(results);
};

rendersSeasonTabs(seasons);

const seasonTabs = document.querySelectorAll(".seasonTab");

seasonTabs.forEach((tab) => {
  tab.addEventListener("click", selectActiveTab);
});
showSearchBtn.addEventListener("click", toggleSearch);
backBtn.addEventListener("click", toggleSearch);
searchForm.addEventListener("submit", handleSearch);
