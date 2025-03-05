import React, { useState, useEffect } from 'react';
import { ReactComponent as Signature } from '../assets/Signature.svg';


const Welcome = ({ onStart }) => { // Accept the `onStart` prop
  const [fadeText, setFadeText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeText(true); // Show the button after 1.5 seconds
    }, 1500);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <section 
      className="bg-white h-screen flex items-center justify-center relative bg-cover bg-center"
    >

      {/* Signature SVG */}
      <div className="welcome-container text-center">
        <div className="svg-wrapper">
          <Signature className="w-[50rem] h-[50rem] mx-auto" />
        </div>
      </div>

      {/* "Commencer" Button */}
      <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${fadeText ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          className="group relative text-[16px] text-black"
          onClick={onStart} // Use the `onStart` prop here
        >
          COMMENCER
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </section>
  );
};

export default Welcome;