import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.css"

// Import Swiper styles
import "swiper/css";
import { Autoplay,Mousewheel } from "swiper";

export default function Slide() {
  return (
    <div className="slide-swiper-container">
         <Swiper watchSlidesProgress={true} 
           slidesPerView={2.3}
           centeredSlides={false}
           mousewheel={true}
           autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay,Mousewheel]}
        spaceBetween={0} 
          breakpoints={{
            456:{
              slidesPerView: 3,
              spaceBetween: 20,
            },
            540:{
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4.5,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 5.5,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 50,
            }, 
          }}
         >
            <SwiperSlide className="swiper-slide2" ><img src="https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//603481675b122.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//605036814c07e.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//6067393b94990.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand//6309b524cec23.png" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand//630b04bbdadf4.jpg" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand//630b0f0ed1e2b.png" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand//63b65df2b0896.png" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//6014ffc121fc1.webp" alt="brend-slide" /></SwiperSlide>
            <SwiperSlide className="swiper-slide2"><img src="https://assets.asaxiy.uz/brand/webp//6064cdf0ce901.webp" alt="brend-slide" /></SwiperSlide>
        </Swiper>
    </div>
  )
}
