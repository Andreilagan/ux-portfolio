'use client';

import { useState } from 'react';

export function CommandMenu() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

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
          <button
            onClick={() => alert('Opening Resume...')}
            className="jrpg-container px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/50 transition-all active:bg-cyan-800"
          >
            RESUME
          </button>
          <button
            onClick={handleContactClick}
            className="jrpg-container px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/50 transition-all active:bg-cyan-800"
          >
            EMAIL
          </button>
        </div>
      </div>
      {showContactForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent! I\'ll get back to you soon.');
            setShowContactForm(false);
          }}
          className="space-y-4"
        >
          <div>
            <label className="text-xs text-white mb-2 block">NAME:</label>
            <input
              type="text"
              required
              className="w-full jrpg-container p-2 text-xs text-white bg-black/40 focus:outline-none focus:border-cyan-300"
            />
          </div>
          <div>
            <label className="text-xs text-white mb-2 block">EMAIL:</label>
            <input
              type="email"
              required
              className="w-full jrpg-container p-2 text-xs text-white bg-black/40 focus:outline-none focus:border-cyan-300"
            />
          </div>
          <div>
            <label className="text-xs text-white mb-2 block">MESSAGE:</label>
            <textarea
              required
              className="w-full jrpg-container p-2 text-xs text-white bg-black/40 focus:outline-none focus:border-cyan-300 h-20 resize-none"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              className="flex-1 jrpg-container px-4 py-2 text-xs font-bold text-white hover:border-lime-300 hover:bg-lime-900/30 transition-all"
            >
              SEND
            </button>
            <button
              type="button"
              onClick={() => setShowContactForm(false)}
              className="flex-1 jrpg-container px-4 py-2 text-xs font-bold text-white hover:border-red-300 hover:bg-red-900/30 transition-all"
            >
              CANCEL
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
