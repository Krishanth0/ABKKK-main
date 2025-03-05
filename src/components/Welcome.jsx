import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { ReactComponent as Signature } from '../assets/Signature.svg';
import inktop from '../assets/tlint.png';
import inkbot from '../assets/blink.png';

const Welcome = () => {
  const [fadeText, setFadeText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeText(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="bg-white h-screen flex items-center justify-center relative bg-cover bg-center"
    >
      {/* Top Ink Image */}
      <motion.img
        src={inktop}
        alt="Top Ink"
        className="absolute top-0 left-0 w-full"
        initial={{ opacity: 0, scale: 0.8 }} // Start with low opacity and slightly smaller scale
        animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
        transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }} // Smooth transition with delay
      />

      {/* Bottom Ink Image */}
      <motion.img
        src={inkbot}
        alt="Bottom Ink"
        className="absolute bottom-2 left-0 w-full"
        initial={{ opacity: 0, scale: 0.8 }} // Start with low opacity and slightly smaller scale
        animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
        transition={{ duration: 2, ease: 'easeOut', delay: 1 }} // Smooth transition with delay
      />

      <div className="welcome-container text-center">
        <div className="svg-wrapper">
          <Signature className="w-[50rem] h-[50rem] mx-auto" />
        </div>
      </div>

      <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${fadeText ? 'opacity-100' : 'opacity-0'}`}>
        <button className="group relative text-[16px] text-black">
          COMMENCER
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </section>
  );
};

export default Welcome;