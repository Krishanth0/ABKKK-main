import React from 'react';
import bg from '../assets/wedding.jpeg';

const Christian = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-start pl-12 relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg">
        <h1 className="text-5xl font-bold text-white">Title Here</h1>
        <p className="text-xl text-white mt-4">
          This is some text under the title. It can be a description or anything you want.
        </p>
      </div>

      <button className="absolute bottom-8 right-8 px-6 py-2 text-white text-lg bg-transparent border-none cursor-pointer group">
        <span className="relative inline-block">
          Back
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </span>
      </button>
    </div>
  );
};

export default Christian;