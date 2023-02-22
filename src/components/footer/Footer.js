import React from 'react'
import "./Footer.css"
import {HiOutlinePhone,HiOutlineMail,HiOutlineLocationMarker} from "react-icons/hi";
import {FaFacebookF,FaTelegramPlane,FaInstagram,FaYoutube,FaRss} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function FooterTop({image,desc,name}){
  return(
    <div className="footer-top">
      <div className="footer-top-item">
        <img src={image} alt="" />
        <div className="footer-top-item-text">
          <h6>{name}</h6>
          <p>{desc}</p>
        </div>
      </div>
  </div>
  )
}

export default function Footer() {
  const {t} = useTranslation();
  return (
    <div className='footer-container'>
      <div className="footer-top-container">
        <div className="footer-responsive">
          <FooterTop image="https://asaxiy.uz/custom-assets/images/icons/market.svg" name={t('footerLang.footer1')} desc={t('footerLang.footer6')}/>
          <FooterTop image="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" name={t('footerLang.footer2')} desc={t('footerLang.footer7')}/>
        </div>
       <div className="footer-responsive">
          <FooterTop image="https://asaxiy.uz/custom-assets/images/icons/return.svg" name={t('footerLang.footer3')} desc={t('footerLang.footer8')}/>
          <FooterTop image="https://asaxiy.uz/custom-assets/images/icons/card.svg" name={t('footerLang.footer4')} desc={t('footerLang.footer9')}/>
       </div>
      </div>
      <div className="footer-middle-container">
        <div className="footer-middle-item">
          <h5>{t('footerLang.footer10')}</h5>
            <ul>
              <li><a href="#">{t('footerLang.footer11')}</a></li>
              <li><a href="#">{t('footerLang.footer12')}</a></li>
              <li><a href="#">{t('footerLang.footer13')}</a></li>
              <li><a href="#">{t('footerLang.footer14')}</a></li>
              <li><a href="#">{t('footerLang.footer15')}</a></li>
              <li><a href="#">{t('footerLang.footer16')}</a></li>
              <li><a href="#">{t('footerLang.footer17')}</a></li>
            </ul>
        </div>
        <div className="footer-middle-item">
          <h5>{t('footerLang.footer18')}</h5>
            <ul>
              <li><a href="tel:+998901930535"><HiOutlinePhone style={{fontSize:"23px",marginRight:"10px"}}/>+99890 193 05 35</a></li>
              <li><a href="#"><HiOutlineMail style={{fontSize:"23px",marginRight:"10px"}}/>info@asaxiy.uz</a></li>
              <li><a href="#"><HiOutlineLocationMarker style={{fontSize:"23px",marginRight:"10px"}}/>Chilonzor 3,Toshkent</a></li>
            </ul>
        </div>
        <div className="footer-middle-item">
          <h5>{t('footerLang.footer19')}</h5>
           <div className="networks-container">
              <a href="https://www.facebook.com/asaxiyshop/" target="_blank"><FaFacebookF/></a>
              <a href="https://t.me/Khayrullayev_06" target="_blank"><FaTelegramPlane/></a>
              <a href="https://www.instagram.com/_khayrullayev_06" target="_blank"><FaInstagram/></a>
              <a href="https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ" target="_blank"><FaYoutube/></a>
              <a href="https://asaxiy.uz/uz/rss" target="_blank"><FaRss/></a>
           </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <h5>{t('footerLang.footer20')}</h5>
        <img src="https://asaxiy.uz/custom-assets/images/apelsin-logo.svg" alt="" />
        <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" />
        <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" />
        <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="" />
        <img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="" />
        <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="" />
          <div className="footer-middle-item-responsive">
            <h6>Biz ijtimoiy tarmoqlarda:</h6>
                <a href="https://www.facebook.com/asaxiyshop/" target="_blank"><FaFacebookF/></a>
                <a href="https://t.me/Khayrullayev_06" target="_blank"><FaTelegramPlane/></a>
                <a href="https://www.instagram.com/_khayrullayev_06/" target="_blank"><FaInstagram/></a>
                <a href="https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ" target="_blank"><FaYoutube/></a>
                <a href="https://asaxiy.uz/uz/rss" target="_blank"><FaRss/></a>
        </div>
      </div>
      <div className="footer-bootom-responsive">
          <img src="https://asaxiy.uz/custom-assets/images/apelsin-logo.svg" alt="" />
          <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" />
          <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" />
          <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="" />
          <img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="" />
          <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="" />
      </div>

      <p style={{textAlign:"center", color:"#fff",marginTop:"30px"}}>&copy;2023-2030 All right reserved by Khayrullayev Og'abek | Frontend Developer </p>
    </div>
  )
}
