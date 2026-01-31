'use client';

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
        <div className="space-y-2 text-xs md:text-sm">
          <div className="border-t border-white pt-2">
            <div className="text-white">
              <span className="inline-block w-20">NAME:</span>
              <span className="text-yellow-300">Zyreel</span>
            </div>
            <div className="text-white text-xs md:text-sm mt-1">
              <span className="inline-block w-20">JOB:</span>
              <span className="text-cyan-300">UX Designer</span>
            </div>
          </div>

          {/* Level and EXP */}
          <div className="border-t border-white pt-2">
            <div className="flex justify-between text-white">
              <span>LV 21</span>
              <span className="text-lime-300">2026</span>
            </div>
            <div className="mt-2">
              <div className="text-xs mb-1">EXP</div>
              <div className="w-full h-3 border-2 border-white bg-black">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: '75%' }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="border-t border-white pt-2 space-y-1 text-xs">
            <div className="flex justify-between">
              <span>ATK:</span>
              <span className="text-red-300">92</span>
            </div>
            <div className="flex justify-between">
              <span>DEF:</span>
              <span className="text-green-300">88</span>
            </div>
            <div className="flex justify-between">
              <span>SPD:</span>
              <span className="text-yellow-300">85</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
