import React from 'react';
import bg from '../assets/DOOR.png';

function Vr() {
  return (
    <section 
      className="h-screen flex flex-col items-center justify-center relative bg-cover group" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Watercolor paint animation background */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden -z-10">
        <div className="watercolor watercolor-1 absolute rounded-full mix-blend-lighten animate-watercolor"></div>
        <div className="watercolor watercolor-2 absolute rounded-full mix-blend-lighten animate-watercolor-delay"></div>
        <div className="watercolor watercolor-3 absolute rounded-full mix-blend-lighten animate-watercolor"></div>
      </div>

      <div className="text-center text-black relative z-10">
        <h2 className="text-xl md:text-2xl font-light uppercase transition-colors duration-300 group-hover:text-white" 
            style={{ fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
          VIVEZ Experience
        </h2>
        <h1 className="text-4xl md:text-8xl font-bold uppercase transition-colors duration-300 group-hover:text-white" 
            style={{ fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
          Anne BACK
        </h1>
        <h2 className="text-xl md:text-2xl font-light uppercase transition-colors duration-300 group-hover:text-white" 
            style={{ fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
          En VR
        </h2>
      </div>

      <a 
        href="https://store.steampowered.com/" 
        className="absolute bottom-10 text-black text-[16px] uppercase no-underline hover:no-underline relative z-10"
      >
        En savoir plus
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </a>

      {/* CSS Animation */}
      <style jsx>{`
        .watercolor {
          opacity: 0.3;
          filter: blur(20px);
          transform-origin: center;
        }

        .watercolor-1 {
          width: 300px;
          height: 300px;
          top: 20%;
          left: 15%;
          background: radial-gradient(circle, #ff6b6b, transparent);
        }

        .watercolor-2 {
          width: 400px;
          height: 400px;
          top: 50%;
          right: 20%;
          background: radial-gradient(circle, #4ecdc4, transparent);
        }

        .watercolor-3 {
          width: 250px;
          height: 250px;
          bottom: 15%;
          left: 40%;
          background: radial-gradient(circle, #ffe66d, transparent);
        }

        @keyframes watercolor {
          0% { 
            transform: scale(0.8) translate(-20px, -20px); 
            opacity: 0.2;
          }
          50% { 
            transform: scale(1.1) translate(20px, 20px); 
            opacity: 0.4;
          }
          100% { 
            transform: scale(0.8) translate(-20px, -20px); 
            opacity: 0.2;
          }
        }

        @keyframes watercolor-delay {
          0% { 
            transform: scale(0.9) translate(15px, 15px); 
            opacity: 0.2;
          }
          50% { 
            transform: scale(1.2) translate(-15px, -15px); 
            opacity: 0.4;
          }
          100% { 
            transform: scale(0.9) translate(15px, 15px); 
            opacity: 0.2;
          }
        }

        .animate-watercolor {
          animation: watercolor 6s infinite ease-in-out;
        }

        .animate-watercolor-delay {
          animation: watercolor-delay 5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}

export default Vr;