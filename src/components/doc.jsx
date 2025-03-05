import React, { useState, useRef, useEffect } from 'react';

function VideoPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('ended', handleEnded);
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

  return (
    <section className="h-screen w-full bg-white flex items-center justify-center relative overflow-hidden">
            <h1
        className="absolute top-6 left-6 text-3xl font-bold text-black z-10 uppercase"
        style={{ fontWeight: 400 }}
      >
        Découvrez leurs histoires
      </h1>
      
      <div
        className="relative w-4/5 h-4/5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video
          loop
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-white text-5xl font-serif uppercase tracking-wide mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Video Title
          </h1>
          <p className="text-gray-200 text-lg max-w-lg text-center font-light leading-relaxed">
            This is a brief description of the video content. It appears with a smooth fade when you hover over the video.
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
      `}</style>
    </section>
  );
}

export default VideoPage;