import React from 'react'
import "./Store.css"

export default function Store() {
  return (
    <div className='store-container'>
        <div className="left-img-container">
            <img src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png" alt="img" />
        </div>
        <div className="right-store-container">
            <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg" alt="" />
            <p>Sizning internet do'koningiz</p>
            <div className="store-button-container">
                <a href="https://apps.apple.com/uz/app/asaxiy-books/id1486109975" target="_blank"><img src="https://asaxiy.uz/custom-assets/images/app-store.svg" alt="app store" /></a> 
                <a href="https://play.google.com/store/apps/details?id=uz.asaxiy.asaxiybooks" target="_blank"><img src="https://asaxiy.uz/custom-assets/images/google-play.svg" alt="play store" /></a>
            </div>
        </div>
    </div>
  )
}
