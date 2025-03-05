import React, { useState } from 'react';

const MapPage = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handlePointClick = (title, description) => {
    setSelectedPoint({ title, description });
  };

  return (
    <div className="h-screen w-full bg-white text-white flex items-center justify-center overflow-hidden relative">
      {/* Ink splash background effect */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="w-80 h-80 bg-gray-300 rounded-full absolute top-1/5 left-1/5 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-ink"></div>
        <div className="w-64 h-64 bg-gray-300 rounded-full absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 blur-2xl animate-ink-delay"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 w-full p-6 z-20">
        <h1 className="text-5xl text-black font-serif font-bold tracking-wider text-center" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)' }}>
          La Carte
        </h1>
      </header>

      {/* Map Container */}
      <div className="relative w-4/5 h-4/5 bg-white/5 backdrop-blur-lg rounded-xl border border-gray-700 shadow-2xl z-10">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1-YANc3FhyWO529iF795vRe3OINF0pGs&ll=48.671302332527866%2C2.5255770999999827&z=11"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'contrast(1.1) brightness(1.2) grayscale(30%)', borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent to-black/40 rounded-xl"></div>
        <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-4 py-1 rounded-full shadow-lg">
          Région Parisienne
        </div>
      </div>

      {/* Sliding Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full w-96 bg-gradient-to-r from-black/95 to-gray-900/85 backdrop-blur-xl transform transition-transform duration-700 ease-in-out z-20 ${
          selectedPoint ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {selectedPoint ? (
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-semibold text-white mb-6 tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                {selectedPoint.title}
              </h2>
              <p className="text-gray-200 text-lg font-light leading-relaxed">
                {selectedPoint.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedPoint(null)}
              className="px-6 py-3 text-white uppercase bg-white/15 hover:bg-white/25 rounded-full transition-all duration-300 w-fit text-sm font-medium shadow-md"
            >
              Fermer
            </button>
          </div>
        ) : null}
      </div>


      {/* CSS Animation */}
      <style jsx>{`
        @keyframes ink {
          0% { transform: scale(0.7) translate(-50%, -50%); opacity: 0.15; }
          50% { transform: scale(1.2) translate(-50%, -50%); opacity: 0.25; }
          100% { transform: scale(0.7) translate(-50%, -50%); opacity: 0.15; }
        }
        
        @keyframes ink-delay {
          0% { transform: scale(0.7) translate(50%, 50%); opacity: 0.15; }
          50% { transform: scale(1.3) translate(50%, 50%); opacity: 0.25; }
          100% { transform: scale(0.7) translate(50%, 50%); opacity: 0.15; }
        }

        .animate-ink {
          animation: ink 7s infinite ease-in-out;
        }

        .animate-ink-delay {
          animation: ink-delay 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MapPage;