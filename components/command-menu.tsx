'use client';

import { useState } from 'react';

export function CommandMenu() {
  const [showEmailModal, setShowEmailModal] = useState(false);

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
            href="https://drive.google.com/file/d/1aCrOkiEO2E5RpZzeD0pzYI54pkuLYG7S/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="jrpg-container px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/50 transition-all active:bg-cyan-800 block text-center"
          >
            RESUME
          </a>
          <button
            onClick={() => setShowEmailModal(true)}
            className="jrpg-container px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/50 transition-all active:bg-cyan-800 block text-center w-full"
          >
            EMAIL
          </button>
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="jrpg-container p-6 max-w-sm mx-4">
            <h3 className="text-white text-xs md:text-sm font-bold mb-4 border-b border-white pb-2">
              CONTACT
            </h3>
            <p className="text-white text-xs mb-4">
              Contact Email: zyreelandre.ilagan@gmail.com
            </p>
            <button
              onClick={() => setShowEmailModal(false)}
              className="w-full jrpg-container px-4 py-2 text-xs font-bold text-white hover:border-red-300 hover:bg-red-900/30 transition-all"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
