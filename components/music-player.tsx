'use client';

import { useState, useRef, useEffect } from 'react';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Auto-play the audio
    audio.play().catch(() => {
      // Autoplay may be blocked, user can click play button
      setIsPlaying(false);
    });

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = parseFloat(e.target.value);
      setCurrentTime(parseFloat(e.target.value));
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mt-4 border-t border-white pt-4">
      <div className="text-white text-xs font-bold mb-2">♪ BGM</div>
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xDeviruchi%20-%20The%20Final%20of%20The%20Fantasy-bEvb1h71X3QrEm6KL2m0I8bwvGsn8g.wav"
        crossOrigin="anonymous"
      />

      {/* Progress Bar */}
      <div className="mb-2">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-black border border-white cursor-pointer"
          style={{
            background: `linear-gradient(to right, #4a9fd8 0%, #4a9fd8 ${
              duration ? (currentTime / duration) * 100 : 0
            }%, #000 ${duration ? (currentTime / duration) * 100 : 0}%, #000 100%)`
          }}
        />
      </div>

      {/* Time Display */}
      <div className="text-xs text-gray-300 mb-2 flex justify-between">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Play Button */}
      <button
        onClick={togglePlay}
        className="w-full jrpg-container px-3 py-2 text-xs font-bold text-white hover:border-lime-300 hover:bg-lime-900/30 transition-all"
      >
        {isPlaying ? '⏸ PAUSE' : '▶ PLAY'}
      </button>
    </div>
  );
}
