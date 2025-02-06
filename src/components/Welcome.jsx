import React, { useState, useEffect } from 'react';
import { ReactComponent as Signature } from '../assets/Signature.svg';
import bg from '../assets/image-noir-blanc.png'; // Import the image

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
      className="bg-black h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
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