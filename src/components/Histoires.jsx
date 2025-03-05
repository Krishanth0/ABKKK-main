import React, { useState, useRef, useEffect } from 'react';
import bg from '../assets/michel.png';
import bg2 from '../assets/blue6.png';
import bg3 from '../assets/hug.png';
import audio1 from '../assets/Balenciaga.mp3'; // Example audio files
import audio2 from '../assets/Balenciaga.mp3';
import audio3 from '../assets/Balenciaga.mp3';

const slides = [
  { image: bg, text: "MICHEL & ODILE", details: { title: "Michel & Odile", description: "This is the story of Michel and Odile.", audio: audio1 } },
  { image: bg2, text: "CHRISTIAN & MARIE-PAUL", details: { title: "CHRISTIAN & MARIE-PAUL", description: "This is the story of Christian and Marie-Paul.", audio: audio2 } },
  { image: bg3, text: "FRANCIS & HUGETTE", details: { title: "FRANCIS & HUGETTE", description: "This is the story of Hugette.", audio: audio3 } }
];

export default function MO() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [detailedView, setDetailedView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volume range: 0 to 1
  const [progress, setProgress] = useState(0); // Progress in percentage
  const audioRef = useRef(null);

  // Update progress bar as audio plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const progressPercent = (audio.currentTime / audio.duration) * 100 || 0;
      setProgress(progressPercent);
    };

    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSlide, detailedView]);

  const handleEnSavoirPlusClick = () => {
    setDetailedView(true);
    setIsPlaying(false); // Reset audio state
    setProgress(0); // Reset progress
  };

  const handleBackClick = () => {
    setDetailedView(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
    }
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
    }
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleSlideChange = (index) => {
    setIsTransitioning(true);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
    }
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
      setDetailedView(false);
    }, 300);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (audioRef.current) {
      const newTime = (newProgress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Slider Container */}
      <div className="w-4/5 h-4/5 relative">
        <div
          className={`w-full h-full bg-cover bg-center flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
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

          {/* Slide selectors */}
          {!detailedView && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10 hover:text-gray-300 transition-colors duration-300"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl z-10 hover:text-gray-300 transition-colors duration-300"
              >
                ›
              </button>
            </>
          )}

          {/* Detailed View */}
          {detailedView && (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center flex z-20 transition-opacity duration-500 ease-in-out"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="w-1/2 h-full flex flex-col justify-center p-12 bg-gradient-to-r from-black/80 to-transparent shadow-lg">
                <h1
                  className="text-5xl font-serif text-white mb-6 uppercase tracking-wide"
                  style={{ fontWeight: 600, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  {slides[currentSlide].details.title}
                </h1>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed font-light">
                  {slides[currentSlide].details.description}
                </p>
                {/* Audio Player UI */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={toggleAudio}
                      className="px-4 py-2 text-white uppercase bg-white/20 hover:bg-white/40 rounded-full border border-white/50 transition-all duration-300 text-sm font-medium"
                    >
                      {isPlaying ? 'Pause' : 'Play'}
                    </button>
                    <audio ref={audioRef} src={slides[currentSlide].details.audio} />
                  </div>
                  {/* Timeline Bar */}
                  <div className="w-full">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={handleProgressChange}
                      className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #fff ${progress}%, #888 ${progress}%)`,
                      }}
                    />
                  </div>
                  {/* Volume Slider */}
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">Volume:</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-2 bg-gray-300 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #fff ${volume * 100}%, #888 ${volume * 100}%)`,
                      }}
                    />
                  </div>
                </div>
                <button
                  onClick={handleBackClick}
                  className="px-6 py-2 text-white uppercase bg-white/20 hover:bg-white/40 rounded-full border border-white/50 transition-all duration-300 w-fit text-sm font-medium"
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
        /* Custom range input styling */
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          border: 1px solid #ccc;
        }
        input[type='range']::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          border: 1px solid #ccc;
        }
      `}</style>
    </section>
  );
}