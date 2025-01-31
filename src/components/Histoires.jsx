import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import bg from '../assets/michel.png';
import bg2 from '../assets/blue6.png';
import bg3 from '../assets/michel.png';

const slides = [
  { image: bg, text: "L'histoire de Michel" },
  { image: bg2, text: "L'histoire d'Odile" },
  { image: bg3, text: "L'histoire d'Hugette" }
];

export default function MO() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="h-screen flex items-center justify-center relative">
      <h1 className="absolute top-4 left-4 text-3xl font-bold text-white z-10">
        Découvrez leurs histoires
      </h1>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-full absolute top-0 left-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h1 className="text-5xl font-bold text-white text-center p-4 rounded-lg">
                {slide.text}
              </h1>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
}
