import React, { useState, useEffect } from 'react';
import './welcome.css';
import { ReactComponent as Signature } from '../assets/Signature.svg';

const Welcome = () => {
  const [fadeText, setFadeText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeText(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-black h-screen flex items-center justify-center">
      <div className="welcome-container text-center">
        <div className="svg-wrapper">
          <Signature className="signature-svg h-auto mx-auto" />
        </div>
        <div className={`fade-text ${fadeText ? 'visible' : ''}`}>
          <button class="animated-link" className="text-[16px] text-white mb-4">COMMENCER</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
