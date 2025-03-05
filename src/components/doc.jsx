import React, { useRef, useState } from 'react';

function VideoPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === '0');
  };

  return (
    <section className="h-screen bg-black flex items-center justify-center relative">
      <div 
        className="relative w-full max-w-4xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-auto"
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Sample video, replace with your own
          loop
        />

        {/* Hover overlay with title and description */}
        <div 
          className={`absolute inset-0 bg-black/50 flex flex-col justify-center items-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-white text-4xl font-bold uppercase mb-4">
            Video Title
          </h1>
          <p className="text-white text-lg text-center max-w-md">
            This is a brief description of the video content. It appears when you hover over the video.
          </p>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 bg-black/70 p-2 rounded-t-lg mx-4">
          <button
            onClick={togglePlay}
            className="text-white p-2 hover:text-gray-300 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            onClick={toggleMute}
            className="text-white p-2 hover:text-gray-300 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 accent-white"
          />
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        video {
          display: block;
        }

        .accent-white::-webkit-slider-thumb {
          background: white;
        }

        .accent-white::-moz-range-thumb {
          background: white;
        }
      `}</style>
    </section>
  );
}

export default VideoPage;