'use client';

import { MusicPlayer } from './music-player';

export function CharacterStatus() {
  return (
    <div className="sticky top-4 z-30 h-fit w-full md:w-64">
      <div className="jrpg-container p-4 md:p-6 text-white">
        {/* Title */}
        <div className="border-b-2 border-white mb-4 pb-2">
          <h2 className="text-xs md:text-sm font-bold tracking-wider">
            {'< CHARACTER >'}
          </h2>
        </div>

        {/* Pixel Avatar */}
        <div className="mb-4 flex justify-center">
          <img
            src="/profile-avatar.png"
            alt="Zyreel Andre L. Ilagan"
            className="w-32 h-32 md:w-40 md:h-40 border-2 border-white object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Character Info */}
        <div className="space-y-2 text-xs">
          {/* Basic Info */}
          <div className="border-t border-white pt-2 space-y-1">
            <div className="text-white">
              <span className="inline-block w-16">NAME:</span>
              <span className="text-yellow-300 break-words">Zyreel Andre L. Ilagan</span>
            </div>
            <div className="text-white">
              <span className="inline-block w-16">JOB:</span>
              <span className="text-cyan-300">UX Designer</span>
            </div>
          </div>

          {/* Availability */}
          <div className="border-t border-white pt-2 space-y-1">
            <div className="text-white">
              <span className="inline-block w-16">HP:</span>
              <span className="text-lime-300">100%</span>
            </div>
            <div className="text-xs text-gray-200 ml-16 -mt-1">
              Manila / Remote
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-white pt-2">
            <div className="text-white text-xs font-bold mb-1">ORIGIN:</div>
            <div className="text-xs text-gray-200 space-y-1">
              <div>BS Computer Science</div>
              <div className="text-cyan-300">Major: Software Technology</div>
              <div className="text-cyan-300">Minor: Game Design</div>
              <div className="text-yellow-300">De La Salle University</div>
            </div>
          </div>
        </div>

        {/* Music Player */}
        <MusicPlayer />
      </div>
    </div>
  );
}
