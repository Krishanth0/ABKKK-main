import React, { useState } from 'react';

const MapPage = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  // Legend data organized by categories
  const legendItems = [
    // Points de rencontre
    { title: "Théâtre-Sénart, Scène nationale", description: "A cultural meeting point in Sénart." },
    { title: "Parc Caillebotte", description: "A scenic park for community gatherings." },
    
    // EHPAD
    { title: "Les Cedres Bleus", description: "An EHPAD offering senior care." },
    { title: "Maison de retraite - Ehpad Les Fleurs Bleues", description: "A retirement home with dedicated services." },
    { title: "EHPAD Les Jardins de Thiais", description: "Senior living in Thiais." },
    { title: "EHPAD Résidence Médicis Viry-Châtillon", description: "Care facility in Viry-Châtillon." },
    { title: "Ehpad Association Adef Résidences la Maison du Cèdre Bleu", description: "Adef-managed senior residence." },
    { title: "Clinalliance Ehpad Repotel Savigny-le-Temple", description: "Senior care in Savigny-le-Temple." },
    { title: "Ehpad Association Adef Résidences la Maison des Clématites", description: "Another Adef senior home." },
    { title: "EHPAD La Fontaine Médicis Saint-Germain-lès-Corbeil", description: "Senior living in Saint-Germain-lès-Corbeil." },
    { title: "Clinalliance Ehpad Repotel Lieusaint", description: "EHPAD in Lieusaint." },
    { title: "Ehpad associatif Adef Résidences la Maison du Grand Chêne", description: "Adef’s Grand Chêne residence." },
    { title: "Solemnes Savigny", description: "Senior care facility in Savigny." },
    { title: "EHPAD Les Jardins d'Iroise de Dammarie-les-Lys", description: "Senior residence in Dammarie-les-Lys." },
    
    // Zones
    { title: "Carré Sénart", description: "A vibrant commercial and social hub." },
    
    // Résidences séniors
    { title: "Résidences les Héspérides", description: "Senior living community." },
    { title: "Résidence Château de Champlâtreux - emeis", description: "Luxury senior residence." },
    { title: "Maison d'accueil Galignani", description: "Welcoming home for seniors." },
    
    // Contacts personnels
    { title: "Séniors - Alexandre", description: "Personal contact for senior support." },
    { title: "Résidence Séniors - Clément", description: "Contact for senior residences." },
    
    // Associations
    { title: "Les Petits Frères des Pauvres - Villeneuve-Le-Roi", description: "Support for the elderly in Villeneuve-Le-Roi." },
    { title: "Association Le bel âge", description: "Promoting well-being for seniors." },
  ];

  const handlePointClick = (title, description) => {
    setSelectedPoint({ title, description });
  };

  return (
    <div className="h-screen w-full bg-white text-white flex overflow-hidden relative">
      {/* Ink splash background effect */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="w-80 h-80 bg-gray-300 rounded-full absolute top-1/5 left-1/5 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-ink"></div>
        <div className="w-64 h-64 bg-gray-300 rounded-full absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 blur-2xl animate-ink-delay"></div>
      </div>

      {/* Header */}
      <h1
        className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-black z-10 uppercase"
        style={{ fontWeight: 400 }}
      >
        La Carte
      </h1>

      {/* Left: Map Container */}
      <div className="w-1/2 h-full flex items-center justify-center relative z-10">
        <div className="w-4/5 h-4/5 bg-white/5 backdrop-blur-lg rounded-xl border border-gray-700">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1-YANc3FhyWO529iF795vRe3OINF0pGs&ehbc=2E312F"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.1) brightness(1.2) grayscale(30%)', borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right: Legend Section */}
      <div className="w-1/2 h-full flex items-center justify-center relative z-10">
        <div className="w-4/5 h-4/5 p-8 flex flex-col overflow-y-auto">
          <h2 className="text-2xl font-semibold text-black mb-6">Légende</h2>
          <ul className="space-y-4">
            {legendItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePointClick(item.title, item.description)}
                  className="text-lg text-black hover:text-gray-700 transition-colors duration-300 w-full text-left py-2 px-4 rounded-lg hover:bg-gray-200/50"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
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

        /* Ensure the legend section scrolls if content overflows */
        .overflow-y-auto {
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default MapPage;