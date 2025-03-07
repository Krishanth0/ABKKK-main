import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Mentions = () => {
  const [codeInput, setCodeInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const [isInView, setIsInView] = useState(false);
  const [hasStartedScratching, setHasStartedScratching] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const correctCode = 'CLAUDE';

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Setup canvas for scratch effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 400;
    canvas.height = 100;

    // Fill with gray overlay
    ctx.fillStyle = '#a0a0a0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add "Grattez-moi !" text on the overlay
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Bodoni Moda, serif';
    ctx.textAlign = 'center';
    ctx.fillText('Grattez-moi !', canvas.width / 2, canvas.height / 2 + 8);
  }, []);

  const handleScratchStart = (e) => {
    setIsScratching(true);
    setHasStartedScratching(true); // Trigger input fade-in
    handleScratchMove(e);
  };

  const handleScratchMove = (e) => {
    if (!isScratching) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Scratch effect: erase in a circular area
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fill();
  };

  const handleScratchEnd = () => {
    setIsScratching(false);
  };

  const handleCodeSubmit = () => {
    if (codeInput.toUpperCase() === correctCode) {
      setIsValid(true);
      setError('');
    } else {
      setError('Code incorrect. Essayez encore !');
      setIsValid(false);
    }
  };

  // Text content
  const descriptionText =
    "ANNE BACK est un projet universitaire créé par des étudiants en troisième année de MMI (Métiers du Multimédia et de l’Internet) à l’Université Paris-Est Créteil (UPEC). Ce projet reflète notre apprentissage et notre créativité dans le cadre de notre formation.";
  const teamText = "Nom 1 Prénom 1\nNom 2 Prénom 2\nNom 3 Prénom 3"; // Replace with your names
  const thanksText =
    "Nous tenons à remercier nos professeurs pour leur encadrement, nos camarades pour leur soutien, ainsi que l’UPEC pour les ressources mises à disposition. Un grand merci également à nos familles et amis pour leur encouragement tout au long de ce projet.";
  const gameText = "Grattez ici pour révéler une surprise !";

  const descriptionCharacters = descriptionText.split('');
  const teamCharacters = teamText.split('');
  const thanksCharacters = thanksText.split('');
  const gameCharacters = gameText.split('');

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-white flex items-center justify-center relative overflow-hidden"
    >
      <div className="w-full max-w-4xl flex flex-col px-[8rem] py-4">
        {/* Title */}
        <h1
          className="text-2xl font-bold text-black uppercase mb-12"
          style={{ fontWeight: 400 }}
        >
          Mentions
        </h1>

        {/* Project Description */}
        <motion.div
          style={{ fontFamily: "'Bodoni Moda', serif" }}
          className="text-[20px] leading-relaxed text-black mb-12"
        >
          {descriptionCharacters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(5px)' }}
              animate={
                isInView
                  ? { opacity: 1, filter: 'blur(0px)' }
                  : { opacity: 0, filter: 'blur(5px)' }
              }
              transition={{
                delay: index * 0.02,
                duration: 1,
                ease: 'easeOut',
              }}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="mb-12">
          <h2
            className="text-xl font-medium text-black uppercase mb-4"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            Équipe
          </h2>
          <motion.div
            style={{ fontFamily: "'Bodoni Moda', serif" }}
            className="text-[20px] leading-relaxed text-black"
          >
            {teamCharacters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={
                  isInView
                    ? { opacity: 1, filter: 'blur(0px)' }
                    : { opacity: 0, filter: 'blur(5px)' }
                }
                transition={{
                  delay: descriptionCharacters.length * 0.02 + index * 0.02,
                  duration: 1,
                  ease: 'easeOut',
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Acknowledgments */}
        <div className="mb-12">
          <h2
            className="text-xl font-medium text-black uppercase mb-4"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            Remerciements
          </h2>
          <motion.div
            style={{ fontFamily: "'Bodoni Moda', serif" }}
            className="text-[20px] leading-relaxed text-black text-justify"
          >
            {thanksCharacters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={
                  isInView
                    ? { opacity: 1, filter: 'blur(0px)' }
                    : { opacity: 0, filter: 'blur(5px)' }
                }
                transition={{
                  delay:
                    (descriptionCharacters.length + teamCharacters.length) *
                      0.02 +
                    index * 0.02,
                  duration: 1,
                  ease: 'easeOut',
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scratch Game */}
        <div className="mb-12">
          <motion.div
            style={{ fontFamily: "'Bodoni Moda', serif" }}
            className="text-[20px] leading-relaxed text-black"
          >
            {gameCharacters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={
                  isInView
                    ? { opacity: 1, filter: 'blur(0px)' }
                    : { opacity: 0, filter: 'blur(5px)' }
                }
                transition={{
                  delay:
                    (descriptionCharacters.length +
                      teamCharacters.length +
                      thanksCharacters.length) *
                      0.02 +
                    index * 0.02,
                  duration: 1,
                  ease: 'easeOut',
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <div className="relative w-[400px] h-[100px] mt-4 border-2 border-black rounded-md">
            {/* Hidden Code */}
            <div
              className="absolute inset-0 flex items-center justify-center text-black text-3xl font-bold"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              CLAUDE
            </div>
            {/* Canvas for Scratch Effect */}
            <canvas
              ref={canvasRef}
              onMouseDown={handleScratchStart}
              onMouseMove={handleScratchMove}
              onMouseUp={handleScratchEnd}
              onMouseLeave={handleScratchEnd}
              className="absolute inset-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Code Input and Validation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hasStartedScratching ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex items-center space-x-4"
        >
          <input
            type="text"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
            placeholder="Entrez le code"
            className="px-4 py-2 text-black border border-gray-300 rounded-md w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={handleCodeSubmit}
            className="px-6 py-2 text-black uppercase border-2 border-black rounded-md hover:bg-black hover:text-white transition-all duration-300"
          >
            Valider
          </button>
        </motion.div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {isValid && (
          <a
            href="https://online.fliphtml5.com/sofsy/kato/#p=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:text-gray-600 text-sm mt-2"
          >
            Accéder à la prochaine page
          </a>
        )}
      </div>
    </section>
  );
};

export default Mentions;