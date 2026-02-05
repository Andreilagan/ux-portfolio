'use client';

export function CommandMenu() {
  return (
    <div className="mt-6">
      <div className="jrpg-container p-4 md:p-6">
        {/* Title */}
        <div className="border-b-2 border-white mb-4 pb-2">
          <h2 className="text-xs md:text-sm font-bold tracking-wider text-white">
            {'< COMMAND >'}
          </h2>
        </div>

        {/* Command Buttons */}
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <a
            href="https://www.linkedin.com/in/zyreel-andre-ilagan-6255a4277/"
            target="_blank"
            rel="noopener noreferrer"
            className="jrpg-container px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/50 transition-all active:bg-cyan-800 block text-center"
          >
            LINKEDIN
          </a>
          <a
            href="https://blobs.vusercontent.net/blob/Ilagan%20-%20UIUX%20Designer-Nkv7FNR8u1uH7dSvsdgS4IC7DuAnNq.pdf"
            download
            className="jrpg-container px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/50 transition-all active:bg-cyan-800 block text-center"
          >
            RESUME
          </a>
          <a
            href="mailto:zyreelandre.ilagan@gmail.com"
            className="jrpg-container px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/50 transition-all active:bg-cyan-800 block text-center"
          >
            EMAIL
          </a>
        </div>
      </div>
    </div>
  );
}
