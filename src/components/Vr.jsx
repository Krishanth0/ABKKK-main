import React from 'react';
import bg from '../assets/watercolor-porte.png';


function Vr() {
  return (
    <section 
      className="h-screen flex flex-col items-center justify-center relative bg-cover bg-center" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center text-white">
        <h2 className="text-xl md:text-2xl font-light uppercase">VIVEZ Experience</h2>
        <h1 className="text-4xl md:text-6xl font-bold">Anne BACK</h1>
        <h2 className="text-xl md:text-2xl font-light uppercase">En VR</h2>
      </div>
      <a 
        href="https://store.steampowered.com/" 
        className="absolute bottom-10 text-white text-lg underline-offset-4 hover:underline"
      >
        En savoir plus
      </a>
    </section>
  );
}

export default Vr;