import React, { useState, useRef, useEffect } from 'react';
import PAINT from '../assets/PAINT.MP4'; // Imported MP4 file

function VideoPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progressPercent = (video.currentTime / video.duration) * 100 || 0;
      setProgress(progressPercent);
    };

    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('ended', handleEnded);

    // Listen for fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

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

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (videoRef.current) {
      const newTime = (newProgress / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE11
        video.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE11
        document.msExitFullscreen();
      }
    }
  };

  return (
    <section className="h-screen w-full bg-white flex items-center justify-center relative overflow-hidden">
      <h1
        className="absolute top-6 text-9xl font-bold text-black z-10 uppercase"
        style={{ fontWeight: 400 }}
      >
        Monochromes
      </h1>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-4 right-4 z-10">
        <svg
          className="w-8 h-8 text-black animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <div
        className="relative w-full h-4/5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={PAINT} // Use the imported MP4 file
          loop
        />

        {/* Hover overlay - Bottom Left */}
        <div
          className={`absolute bottom-14 left-4 p-6 transition-opacity duration-500 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1
            className="text-white text-3xl font-bold uppercase tracking-wide mb-4"
            style={{ fontWeight: 400, textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Penser un livre selon Anne BACK
          </h1>
          <p
            className="text-white text-xl font-bold uppercase max-w-md"
            style={{ fontWeight: 100 }}
          >
          </p>
        </div>

        {/* Video Controls */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1 bg-gray-400 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #fff ${progress}%, #666 ${progress}%)`,
              }}
            />

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 text-white bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300"
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
                className="p-2 text-white bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300"
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
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-gray-400 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #fff ${volume * 100}%, #666 ${volume * 100}%)`,
                }}
              />

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="p-2 text-white bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300"
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16h3v3h2v-5H5v2zm8 0h3v2h-5v-5h2v3zm-8-9V5h5v2H7zm8 0h3v5h-2V7z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        video {
          display: block;
        }

        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          border: 1px solid #ccc;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        }
        input[type='range']::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          border: 1px solid #ccc;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}

export default VideoPage;