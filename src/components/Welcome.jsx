import React, { useState, useEffect } from 'react';
import { ReactComponent as Signature } from '../assets/Signature.svg';
import inkSprite from '../assets/ink.png'; // Ink transition sprite

const Welcome = ({ onStart }) => {
  const [fadeText, setFadeText] = useState(false);
  const [triggerInk, setTriggerInk] = useState(false); // State to trigger ink animation

  useEffect(() => {
    // Trigger ink animation on page load
    setTriggerInk(true);

    // Show the button and SVG after 1.5 seconds
    const timer = setTimeout(() => {
      setFadeText(true);
    }, 1500);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleButtonClick = () => {
    // Trigger ink animation on button click
    setTriggerInk(false); // Reset to allow re-trigger
    setTimeout(() => setTriggerInk(true), 10); // Small delay to reset animation
    onStart(); // Call the original onStart function
  };

  return (
    <>
      <section
        className="bg-white h-screen flex items-center justify-center relative bg-cover bg-center overflow-hidden"
      >
        {/* Ink Sprite Overlay */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
            triggerInk ? 'ink-active' : ''
          }`}
          style={{
            backgroundImage: `url(${inkSprite})`,
            backgroundSize: '100% 100%',
            height: '100%',
            width: '4000%', // Assuming 40 frames, adjust if different
            left: '50%',
            transform: 'translateX(-1.25%)',
            zIndex: 5,
          }}
        ></div>

        {/* Signature SVG */}
        <div
          className={`welcome-container text-center relative z-10 transition-opacity duration-1000 ${
            fadeText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="svg-wrapper">
            <Signature className="w-[50rem] h-[50rem] mx-auto" />
          </div>
        </div>

        {/* "Commencer" Button */}
        <div
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
            fadeText ? 'opacity-100' : 'opacity-0'
          } z-10`}
        >
          <button
            className="group relative text-[16px] text-black"
            onClick={handleButtonClick}
          >
            COMMENCER
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </section>

      {/* CSS for Ink Sprite Animation */}
      <style jsx>{`
        .ink-active {
          animation: ink-transition 2s steps(39) 0s forwards;
        }

        @keyframes ink-transition {
          0% {
            transform: translateX(-1.25%);
            opacity: 1;
          }
          99% {
            transform: translateX(-98.75%);
            opacity: 1;
          }
          100% {
            transform: translateX(-98.75%);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Welcome;