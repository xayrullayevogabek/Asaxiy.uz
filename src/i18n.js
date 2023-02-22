import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      uz: {
        translation: {
          navbar:{
            nav1:"Barcha Bo'limlar",
            nav2:"Yangiliklar",
            nav3:"Yangi kelganlar",
            nav4:"Chegirmalar",
            nav5:"Kitoblar",
            nav6:"Telefon va gatjetlar",
            nav7:"Televezor",
            nav8:"Sport buyumlari",
          },
          navbarTop:{
            nav1:"Qidirish...",
            nav2:"Qidirish",
            nav3:"To'lov",
            nav4:"Trek",
            nav5:"Savatcha",
            nav6:"Sevimlilar",
            nav7:"Kabinet",
            nav8:"Biz haqimizda",
            nav9:"Jami",
            nav10:"so'm",
            nav11:"SOTIB OLISH",
            nav12:"SAVATGA O'TISH",
          },
          Cardlang:{
            card1:"Chegirma",
            card2:"ta sharh",
            card3:"so'm",
            card4:"oy",
            card5:"Rassrochka",
            card6:"Bir klikda olish",
            card7:"Yangi chegirmalar",
            card8:"Siz uchun tanladik",
            card9:"Ommabop tovarlar",
            card10:"Yangi kelganlar",
          },
          productDetail:{
            product1:"Brend:",
            product2:"Holati:",
            product3:"Ulashish",
            product4:"Sotuvda bor",
            product5:"Tavsiya",
            product6:"Muddatli to'lov",
            product7:"Savatchaga qo'shish",
            product8:"Bir klikda olish",
            product9:"Samsung Galaxy Buds Live Black, White...",
            product10:"Apple AirPods Pro quloqchini",

          },
          infoCompany:{
            info1:"Asaxiy kompaniyasi haqida",
            info2:"Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.",
            info3:"Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda.",
            info4:"Kompaniyaning ish tamoyili",
            info5:"Bizning afzalliklarimiz",
            info6:`"Asaxiy Books" MCHJ`,
            info7:"Ro'yxatdan o'tish raqami: 646439",
            info8:"INN: 305829008",
            info9:"MCHJ rahbari: Khayrullayev Og'abek",
          },
          footerLang:{
            footer1:"Endi bozorga borishga hojat yo'q",
            footer2:"Tez yetkazib berish",
            footer3:"Siz uchun qulayliklar",
            footer4:"Bo'lib to'lash",
            footer6:"Bizda qulay narxlar va uyga yetkazib berish mavjud",
            footer7:"Bizning xizmatimiz sizni ajablantiradi",
            footer8:"Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati",
            footer9:"3, 6, 9 va 12 oy davomida oldindan to'lovsiz",
            footer10:"Ma'lumotlar",
            footer11:"Muddatli toʻlov shartlari",
            footer12:"Muddatli toʻlov asosida sotib olishning umumiy qoidalari",
            footer13:"Buyurtma qanday beriladi?",
            footer14:"Ommaviy oferta (Foydalanuvchi bitimi)",
            footer15:"Tovarlarni yetkazib berish va toʻlov turlari",
            footer16:"Buyurtmani bekor qilish va tovarni qaytarish",
            footer17:"Biz haqimizda",
            footer18:"Biz bilan aloqa",
            footer19:"Biz ijtimoiy tarmoqlarda :",
            footer20:"To'lov turlari :"
          },
          modalLang:{
            modal1:"Kirish yoki shaxsiy kabinet yaratish",
            modal2:"Telefon",
            modal3:"Faollashtirish kodini olish"
          },
          searchLang:{
            search1:"Qidiruv natijalari",
            search2:"Barcha mahsulotlar"

          }
        }
      },
      ru: {
        translation: {
          navbar:{
            nav1:"Все категории",
            nav2:"Новости",
            nav3:"Новинки",
            nav4:"Скидки",
            nav5:"Книги",
            nav6:"Телефон и гаджеты",
            nav7:"Телевизоры",
            nav8:"Спорт товары",
          },
          navbarTop:{
            nav1:"Поиск...",
            nav2:"Искать",
            nav3:"Оплатит",
            nav4:"Отследить",
            nav5:"Корзинка",
            nav6:"Избранное",
            nav7:"Кабинет",
            nav8:"О нас",
            nav9:"Сумма",
            nav10:"сум",
            nav11:"ОФОРМИТЬ ПОКУПКУ",
            nav12:"ПЕРЕЙТИ В КОРЗИНКУ"
          },
          Cardlang:{
            card1:"Скидка",
            card2:"отзывов",
            card3:"сум",
            card4:"мес",
            card5:"Рассрочка",
            card6:"Купить в 1 клик",
            card7:"Новые скидки",
            card8:"Наша подборка для вас",
            card9:"Популярные товары",
            card10:"Новинки",
          },
          productDetail:{
            product1:"Бренд:",
            product2:"Наличии:",
            product3:"Поделиться:",
            product4:" Есть в наличии",
            product5:"Рекомендуем",
            product6:"Рассрочку",
            product7:"Добавить в корзину",
            product8:"Купить в 1 клик",
            product9:"Наушники Samsung Galaxy Buds Live Black,...",
            product10:"Наушники Apple AirPods Pro ",

          },
          infoCompany:{
            info1:"О компании Asaxiy",
            info2:"Главное преимущество нашей компании, которая занимается поставками бытовой техники и электроники в Узбекистане – многолетний опыт работы и заслуженное доброе имя. С момента своего развития интернет-магазин Asaxiy и его команда неустанно следит за тенденциями спроса потребительского рынка, что дает нам возможность всегда быть в курсе самых последних технологий и инновационных решений. Специалисты компании внимательно изучают желания наших клиентов, поэтому ресурс постоянно обновляется качественными новинками, имеющими доступную стоимость.",
            info3:"Специалисты компании тщательно изучают пожелания наших покупателей, поэтому ресурс постоянно пополняется новыми качественными товарами по доступным ценам.",
            info4:"Принцип работы компани",
            info5:"Наши преимушества",
            info6:`"Asaxiy Books" ООО`,
            info7:"Регистрация: 646439",
            info8:"IНН: 305829008",
            info9:"Директор: Khayrullayev Og'abek",
          },
          footerLang:{
            footer1:"Больше не нужно ходить на базар",
            footer2:"Быстрая доставка",
            footer3:"Удобства для вас",
            footer4:"Рассрочка",
            footer6:"У нас выгодные цены и доставка до дома",
            footer7:"Наш сервис удивит вас",
            footer8:"Быстрое оформление и гарантия на возврат в случае неисправности",
            footer9:"Без предоплаты на 3, 6, 9 и 12 месяцев",
            footer10:"Информация",
            footer11:"Условия рассрочки",
            footer12:"Оферта для покупок в рассрочку",
            footer13:"Как сделать заказ?",
            footer14:"Публичная оферта (Пользовательское соглашение)",
            footer15:"Оплата и доставка товара",
            footer16:"Отмена заказа и возврат товара",
            footer17:"О нас",
            footer18:"Для связи",
            footer19:"Мы в соц. сетях :",
            footer20:"Виды оплаты :"
          },
          modalLang:{
            modal1:"Вход или создать личный кабинет",
            modal2:"Телефон",
            modal3:"ПОЛУЧИТ КОД АКТИВАЧИИ"
          },
          searchLang:{
            search1:"Результаты поиска",
            search2:"Просмотреть все товары"
          }
        }
      }
    }
  });

export default i18n;