import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import bookModel from '../assets/book.glb'; // Adjust the path to your model

// Book Component to Load the 3D Model
const Book = ({ isLarge, onClick }) => {
  const { scene } = useGLTF(bookModel);
  // Toggle scale between 1 and 2 when clicked
  const scale = isLarge ? [2, 2, 2] : [1, 1, 1];
  return <primitive object={scene} scale={scale} onClick={onClick} />;
};

const Livre = () => {
  const [isInView, setIsInView] = useState(false);
  const [isLarge, setIsLarge] = useState(false); // State to track book size
  const sectionRef = useRef(null);

  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const characters = text.split('');
  const anneBackText = "- Anne Back";
  const anneBackCharacters = anneBackText.split('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
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

  // Handle click to toggle book size
  const handleBookClick = () => {
    setIsLarge((prev) => !prev);
  };

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Left Side: 3D Book */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={2.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Book isLarge={isLarge} onClick={handleBookClick} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true} // Allow rotation
            minPolarAngle={Math.PI / 2} // Lock vertical rotation (Y-axis)
            maxPolarAngle={Math.PI / 2} // Lock vertical rotation (Y-axis)
          />
        </Canvas>
      </div>

      {/* Right Side: Text and Audio Demo */}
      <div className="w-1/2 flex flex-col px-[8rem]">
        {/* Book Description with Animation */}
        <div className="text-black">
          <h1
            className=" y top-2 text-2xl font-bold text-black z-10 uppercase"
            style={{ fontWeight: 400 }}
          >
            À propos de Monochromes
          </h1>
          <motion.div
            style={{ fontFamily: "'Bodoni Moda', serif" }}
            className="text-[20px] leading-relaxed text-black"
          >
            {/* Main text */}
            <motion.div className="text-justify text-black">
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: 'blur(5px)' }}
                  animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(5px)' }}
                  transition={{
                    delay: index * 0.02,
                    duration: 1,
                    ease: 'easeOut',
                  }}
                  style={{ display: 'inline-block', color: '#000000' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div
              className="mt-8 text-right italic text-black"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              {anneBackCharacters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: 'blur(5px)' }}
                  animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(5px)' }}
                  transition={{
                    delay: characters.length * 0.02 + index * 0.02,
                    duration: 1,
                    ease: 'easeOut',
                  }}
                  style={{ display: 'inline-block', color: '#000000' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Audio Demo */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2">Demo Audible</h3>
          <audio controls className="w-full max-w-md">
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
          <p className="text-sm text-gray-600 mt-2">
            Démo Audible interprétée par Aurélie LACORDE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Livre;