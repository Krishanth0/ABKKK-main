import React from 'react';

const MapPage = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden relative">
      {/* Ink splash background effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-white rounded-full absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-ink"></div>
        <div className="w-72 h-72 bg-white rounded-full absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 blur-2xl animate-ink-delay"></div>
      </div>

      {/* Header */}
      <header className="w-full p-6 z-10">
        <h1 className="text-4xl font-bold tracking-wider border-b border-gray-700 pb-2">
          Location Map
        </h1>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-8 z-10">
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-gray-800">
          {/* Map container */}
          <div className="w-full h-[450px] bg-gray-900 rounded overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093715!2d144.9537353153167!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8e4b9b9b9b2!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1677654321987!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-gray-900/20 to-transparent"></div>
          </div>

          {/* Location details */}
          <div className="mt-6 text-gray-300">
            <h2 className="text-2xl font-semibold text-white">Our Venue</h2>
            <p className="mt-2">123 Ink Street</p>
            <p>Melbourne VIC 3000</p>
            <p>Australia</p>
          </div>
        </div>
      </div>

      {/* Back button */}
      <button className="absolute bottom-6 right-6 px-4 py-2 text-white bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 rounded border border-gray-700 z-10">
        <span className="relative">Back</span>
      </button>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes ink {
          0% { transform: scale(0.8) translate(-50%, -50%); opacity: 0.1; }
          50% { transform: scale(1.1) translate(-50%, -50%); opacity: 0.2; }
          100% { transform: scale(0.8) translate(-50%, -50%); opacity: 0.1; }
        }
        
        @keyframes ink-delay {
          0% { transform: scale(0.8) translate(50%, 50%); opacity: 0.1; }
          50% { transform: scale(1.2) translate(50%, 50%); opacity: 0.2; }
          100% { transform: scale(0.8) translate(50%, 50%); opacity: 0.1; }
        }

        .animate-ink {
          animation: ink 8s infinite ease-in-out;
        }

        .animate-ink-delay {
          animation: ink-delay 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MapPage;