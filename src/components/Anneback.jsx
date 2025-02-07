import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Anneback = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const characters = text.split('');
  const anneBackText = "- Anne Back";
  const anneBackCharacters = anneBackText.split('');

  return (
    <section
      className="h-[45rem] flex items-center justify-center p-8 overflow-hidden relative object-scale-down"
      style={{
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}
    >
      <div className="w-full max-w-4xl relative z-10">
        {/* Letter-style container */}
        <motion.div
          style={{ fontFamily: "'Bodoni Moda', serif" }} // Apply the font family
          className="text-[24px] leading-relaxed text-black"
        >
          {/* Main text */}
          <motion.div className="text-justify text-black">
            {characters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(5px)' }} // Start with blur and no opacity
                animate={{ opacity: 1, filter: 'blur(0px)' }} // Fade in and remove blur
                transition={{
                  delay: index * 0.02, // Staggered delay
                  duration: 1, // Smooth transition
                  ease: 'easeOut',
                }}
                style={{ display: 'inline-block', color: '#000000' }} // Full black text
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Signature */}
          <motion.div
            className="mt-8 text-right italic text-black"
            style={{ fontFamily: "'Bodoni Moda', serif" }} // Apply the font family
          >
            {anneBackCharacters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(5px)' }} // Start with blur and no opacity
                animate={{ opacity: 1, filter: 'blur(0px)' }} // Fade in and remove blur
                transition={{
                  delay: characters.length * 0.02 + index * 0.02, // Staggered delay after main text
                  duration: 1, // Smooth transition
                  ease: 'easeOut',
                }}
                style={{ display: 'inline-block', color: '#000000' }} // Full black text
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Anneback;