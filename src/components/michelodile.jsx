import React, { useState } from 'react';
import bg from '../assets/michel.png';
import { Fade } from "react-awesome-reveal";

const Michelodile = () => {
  const [isBlurred, setIsBlurred] = useState(true); // State to control blur

  const handleUnblur = () => {
    setIsBlurred(false); // Unblur the background
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-start pl-12 relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Blur overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-500 ${
          isBlurred ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* Content */}
      <div className={`relative z-10 ${isBlurred ? '' : 'hidden'}`}>
        <h1 className="text-5xl font-bold text-white">MICHEL & ODILE</h1>
        <Fade delay={1e3} cascade damping={1e-1} className="text-xl text-white mt-4">
          This is some text under the title. It can be a description or anything you want.
        </Fade>
      </div>

      {/* "Back" button */}
      <button className="absolute bottom-8 right-8 px-6 py-2 text-white text-lg bg-transparent border-none cursor-pointer group">
        <span className="relative inline-block">
          Back
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </span>
      </button>

      {/* "Voir l'illustration" button */}
      <button
        onClick={handleUnblur}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 text-white text-lg bg-transparent border-none cursor-pointer group transition-opacity duration-500 ${
          isBlurred ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span className="relative inline-block">
          Voir l'illustration
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </span>
      </button>
    </div>
  );
};

export default Michelodile;