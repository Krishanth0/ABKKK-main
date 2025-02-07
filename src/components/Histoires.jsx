import React, { useState, useEffect, useRef } from 'react';
import bg from '../assets/michel.png';
import bg2 from '../assets/blue6.png';
import bg3 from '../assets/michel.png';
import bghis from '../assets/bghis.png';

const slides = [
  { image: bg, text: "MICHEL & ODILE" },
  { image: bg2, text: "Christian & marie-paul" },
  { image: bg3, text: "L'histoire d'Hugette" }
];

export default function MO() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blur, setBlur] = useState(false); // Controls the blur animation
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setBlur(true); // Start blur effect
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setBlur(false); // Remove blur effect after slide change
      }, 500); // Wait for the blur effect to complete before changing the slide
    }, 10000); // Change slide every 10 seconds
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setBlur(true); // Start blur effect
    setTimeout(() => {
      setCurrentSlide(index);
      setBlur(false); // Remove blur effect after slide change
    }, 500); // Wait for the blur effect to complete before changing the slide
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoplay();
  };

  return (
    <section
      className="h-[57rem] flex items-center justify-center relative"
      style={{
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}
    >
      {/* Slider Container (smaller size) */}
      <div className="w-[80%] h-3/4 relative"> {/* Adjust the size of the slider */}
        <div
          className={`w-full h-full bg-cover bg-center flex flex-col items-center justify-center transition-all duration-500 ${
            blur ? 'blur-md' : 'blur-0'
          }`}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          {/* "Découvrez leurs histoires" text in the top-left corner */}
          <h1
            className="absolute top-4 left-4 text-3xl font-bold text-white z-10"
            style={{
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              textTransform: 'uppercase'
            }}
          >
            Découvrez leurs histoires
          </h1>

          {/* h1 and button moved to the bottom */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
            <h1
              className="text-3xl text-white p-4 rounded-lg"
              style={{
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                textTransform: 'uppercase'
              }}
            >
              {slides[currentSlide].text}
            </h1>
            <a
              href="#"
              className="mt-2 px-4 py-1 text-sm text-white uppercase border-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              En savoir plus
            </a>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}