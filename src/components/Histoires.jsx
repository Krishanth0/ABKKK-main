import React, { useState, useEffect, useRef } from 'react';
import bg from '../assets/michel.png';
import bg2 from '../assets/blue6.png';
import bg3 from '../assets/michel.png';

const slides = [
  { image: bg, text: "MICHEL & ODILE", details: { title: "Michel & Odile", description: "This is the story of Michel and Odile." } },
  { image: bg2, text: "Christian & marie-paul", details: { title: "Christian & Marie-Paul", description: "This is the story of Christian and Marie-Paul." } },
  { image: bg3, text: "L'histoire d'Hugette", details: { title: "L'histoire d'Hugette", description: "This is the story of Hugette." } }
];

export default function MO() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [detailedView, setDetailedView] = useState(false);
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsTransitioning(false);
      }, 600); // Matches transition duration
    }, 5000); // Change slide every 5 seconds
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 600);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoplay();
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  const handleEnSavoirPlusClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setDetailedView(true);
      setIsTransitioning(false);
    }, 600);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleBackClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setDetailedView(false);
      setIsTransitioning(false);
      startAutoplay();
    }, 600);
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Slider Container */}
      <div className="w-4/5 h-4/5 relative">
        <div
          className={`w-full h-full bg-cover bg-center flex flex-col items-center justify-center transition-all duration-600 ease-in-out ${
            isTransitioning ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
          }`}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          {/* Top-left text */}
          <h1
            className="absolute top-6 left-6 text-3xl font-bold text-white z-10 uppercase"
            style={{ fontWeight: 400 }}
          >
            Découvrez leurs histoires
          </h1>

          {/* Bottom content */}
          {!detailedView && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-10">
              <h1
                className="text-4xl text-white bg-black/50 p-4 rounded-lg uppercase"
                style={{ fontWeight: 400 }}
              >
                {slides[currentSlide].text}
              </h1>
              <button
                onClick={handleEnSavoirPlusClick}
                className="mt-4 px-6 py-2 text-white uppercase border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                En savoir plus
              </button>
            </div>
          )}

          {/* Slide indicators */}
          {!detailedView && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Navigation Arrows */}
          {!detailedView && (
            <>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10 hover:text-gray-300 transition-colors"
                onClick={prevSlide}
              >
                &#8249;
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10 hover:text-gray-300 transition-colors"
                onClick={nextSlide}
              >
                &#8250;
              </button>
            </>
          )}

          {/* Detailed View */}
          {detailedView && (
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center flex z-20 transition-all duration-600"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="w-1/2 h-full flex flex-col justify-center p-12 bg-black/70">
                <h1
                  className="text-5xl font-bold text-white mb-6 uppercase"
                  style={{ fontWeight: 400 }}
                >
                  {slides[currentSlide].details.title}
                </h1>
                <p className="text-xl text-white mb-8">
                  {slides[currentSlide].details.description}
                </p>
                <button
                  onClick={handleBackClick}
                  className="text-white text-lg uppercase border-b-2 border-white hover:border-opacity-0 transition-all duration-300 w-fit"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        section {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </section>
  );
}