import React from 'react';
import bg from '../assets/watercolor-portep.png';

function Vr() {
  return (
    <section 
      className="h-screen flex flex-col items-center justify-center relative bg-cover" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center text-white">
        <h2 className="text-xl md:text-2xl font-light uppercase" style={{ fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
          VIVEZ Experience
        </h2>
        <h1 className="text-4xl md:text-8xl font-bold uppercase" style={{ fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
          Anne BACK
        </h1>
        <h2 className="text-xl md:text-2xl font-light uppercase" style={{ fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
          En VR
        </h2>
      </div>
      <a 
  href="https://store.steampowered.com/" 
  className="animated-link absolute bottom-10 text-white text-[16px] uppercase no-underline hover:no-underline group"
>
  En savoir plus
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
</a>
      
    </section>
  );
}

export default Vr;