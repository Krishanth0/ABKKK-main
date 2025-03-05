import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // For camera controls
import * as THREE from 'three';

// Simple 3D Book Component
const Book = () => {
  return (
    <mesh>
      {/* Book cover */}
      <boxGeometry args={[2, 3, 0.2]} /> {/* Width: 2, Height: 3, Depth: 0.2 */}
      <meshStandardMaterial color="#4a4a4a" /> {/* Dark gray color */}
      {/* Pages */}
      <mesh position={[0, 0, -0.11]}>
        <boxGeometry args={[1.9, 2.9, 0.18]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </mesh>
  );
};

const Livre = () => {
  return (
    <section className="h-screen w-full bg-white flex items-center justify-center relative overflow-hidden">
      {/* Title */}
      <h1
        className="absolute top-6 text-3xl font-bold text-black z-10 uppercase"
        style={{ fontWeight: 400 }}
      >
        Monochromes
      </h1>

      {/* Left Side: 3D Book */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Book />
          <OrbitControls enablePan={false} enableZoom={false} /> {/* Allows rotation */}
        </Canvas>
      </div>

      {/* Right Side: Text and Audio Demo */}
      <div className="w-1/2 h-full flex flex-col items-start justify-center p-8">
        {/* Book Description */}
        <div className="text-black">
          <h2 className="text-2xl font-semibold mb-4">About Monochromes</h2>
          <p className="text-lg">
            "Monochromes" is an immersive exploration of a world stripped of color, where emotions and stories unfold through shades of gray. This groundbreaking VR experience blends haunting narratives with innovative sound design, perfect for audiobook enthusiasts.
          </p>
        </div>

        {/* Audio Demo */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2">Audible Demo</h3>
          <audio controls className="w-full max-w-md">
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder audio
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
          <p className="text-sm text-gray-600 mt-2">
            *This is a placeholder demo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Livre;