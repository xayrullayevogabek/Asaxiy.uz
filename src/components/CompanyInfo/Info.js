import React,{useState} from 'react';
import "./Info.css"
import { useTranslation, } from 'react-i18next';
export default function Info() {
    const { t } = useTranslation();

    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)
    const openToggle=()=>{
      setOpen(!open)
    }
    const OpenText=()=>{
        setOpen2(!open2)
    }
  return (
<div className='info-main-container'>
    <div className='info-container'>
          <h1>{t('infoCompany.info1')}</h1>
          <p style={{marginTop:"20px"}}>
            {t('infoCompany.info2')}
          </p>
          <p>
            {t('infoCompany.info3')}
          </p>
          <div className="info-item-container">
                <div className="info-item list" onClick={openToggle}>
                    <p>{t('infoCompany.info4')}</p>
                    {open?<div className="info-item-more">
                        <p>Har bir xaridor <a href="#">telefonlar va boshqa gadjetlarni</a>  qulay shart-sharoitlarda, maksimal darajada tez tanlay olishi kerak; shuning uchun biz intuitiv tushunarli menyu yaratganmiz, internetning yangi foydalanuvchilari ham uni o‘zlashtirib olishlari oson. Juda qulay bo‘lishini ko‘zlab biz menyu qismini tegishli bo‘limlarga ajratganmiz, ularda siz 15 ming xildan ortiq orgtexnika va unga yondosh tovarlarni topishingiz mumkin. Ular quyidagicha ko‘rinish olgan:</p>
                        <ul>
                            <li> <a href="#">idish-tovoqlar</a>  – bu yerda siz kundalik turmushimizda ishlatiladigan turli-tuman uy-ro‘zg‘or buyumlarining eng keraklilarini topasiz. Do‘konimiz saytida taqdim etilgan tovarlar yuqori sifatga va mustahkamlikka ega;
                            </li>
                            <li><a href="#">konditsionerlar</a>  va uy iqlimi texnikasi – bu bo‘lim o‘z ehtiyojlaringizga mos tarzda foydali   xaridlar qilishingizda ko‘maklashadi. Har bir tovarning tavsifi berilgan, bu esa to‘g‘ri tanlash imkonini beradi;
                            </li>
                            <li>
                                <a href="">televizorlar, video va audio</a>  tovarlari navbatdagi bo‘limda joylashgan, bu bo‘lim maishiy texnika mahsulotlari nomiga munosib. Bu yerda zamon bilan hamqadam tarzdagi funksiyalarning to‘laqonli ro‘yxatiga ega bo‘lgan eng so‘nggi yangi mahsulotlar va ishlanmalar o‘rin olgan;
                            </li>
                            <li>
                                <a href="#">go‘zallik va salomatlik uchun texnika</a>  – doimiy xaridorlarimiz bo‘lmish ayol-qizlarga eng sevimli bo‘limlardan biri. Zero, ular salomatlikning qadriga yetishadi va to‘g‘ri ovqatlanish yo‘li bilan tabiiy go‘zallikka intilishadi;
                            </li>
                            <li>
                                <a href="#">Kompyuterlar va orgtexnika </a> – eng katta bo‘lim, chunki u kompyuterlashtirish jarayonini osonlashtirishga va ish vaqti sarfini kamaytirishga mo‘ljallangan barcha turdagi aksessuarlar hamda yordamchi butlovchi qismlarni ham o‘z ichiga olgan.
                            </li>
                        </ul>
                            <p>
                                 Shuningdek, Asaxiy.uz kompaniyamiz o‘yin servislari ishqibozlari haqida ham qayg‘uradi,<a href="#">geymerlar uchun </a> bo‘limi buning yaqqol dalilidir. Bu yerda qudratli kompyuter ta’minoti mahsulotlari, o‘yinbop sichqoncha va klaviaturalar taqdim etilgan; ular o‘yin jarayonini maksimal darajada aniq va bexato amalga oshirishga imkon beradi.
                            </p>
                            <p>
                                 Mutolaa ixlosmandlari uchun esa biz audio <a href="#">kitoblar</a>  ko‘rinishida takomillashtirilgan adabiyot namunalarini taqdim etmoqdamiz; ularning janr va mavzulari yetarlicha keng ko‘lamli.
                            </p>
                    </div>:""}
                </div>
                  
                
               
                <div className="info-item" onClick={OpenText} style={{border:"none"}}>
                    <p>{t('infoCompany.info5')}</p>
                    {open2?<div className="info-item-more">
                        <p>
                        Asaxiy.uz kompaniyasi o‘zining barcha imkoniyatlarini shiddat bilan kengaytirmoqda, bugun biz o‘z mijozlarimizga ancha-muncha <a href="#">chegirmalar</a>ni va bir qator shaharlarga tezkor yetkazib berishni taklif etmoqdamiz. Bizning xizmat ko‘rsatish hududimizga Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoiy, Qashqadaryo, Samarqand, Sirdaryo, Surxondaryo va butun Toshkent viloyatidagi, shuningdek, Qoraqalpog‘iston Respublikasidagi shaharlar kiradi. Bu hali biz tovar yetkazib berayotgan hududlarning to‘liq xaritasi emas. Bizning yetkazib berish hududlarimiz bilan batafsil tanishish uchun internet-do‘konimiz mutaxassisiga qo‘ng‘iroq qilishingiz mumkin, u sizni qiziqtiruvchi barcha ma’lumotlarni taqdim etadi.
                        </p>
                        <p>
                        Do‘konimizning har bir xaridori – hurmatli mehmonimizdir, unga biz yoqimli chegirmalar va bonus dasturlarini taklif etamiz. Biz mijoz talablariga mos tovarlarni tanlash jarayonida unga to‘liq hamrohlik qilamiz va istalgan qulay usul bilan yetkazib berishni amalga oshiramiz.
                        </p>
                    </div>:""}
                </div>
          </div>
           <p style={{marginTop:"50px"}}>{t('infoCompany.info6')}<br />{t('infoCompany.info7')}<br />{t('infoCompany.info8')}<br />{t('infoCompany.info9')}</p>
    </div>
</div>
  )
}
