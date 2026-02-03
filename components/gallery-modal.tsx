'use client';

import { useState } from 'react';

interface GalleryModalProps {
  title: string;
  images: string[];
  onClose: () => void;
}

export function GalleryModal({ title, images, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="jrpg-container p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b-2 border-white mb-4 pb-2 flex justify-between items-center">
          <h2 className="text-xs md:text-sm font-bold tracking-wider text-white">
            {`< ${title.toUpperCase()} >`}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-300 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Image Gallery */}
        <div className="mb-4">
          <div className="relative w-full bg-gray-900 rounded-sm overflow-hidden mb-4">
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full h-auto object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <button
              onClick={goToPrevious}
              className="jrpg-container px-4 py-2 text-xs font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/30 transition-all"
            >
              {'< PREVIOUS'}
            </button>

            {/* Image Counter */}
            <div className="text-xs font-bold text-cyan-300">
              {currentIndex + 1} / {images.length}
            </div>

            <button
              onClick={goToNext}
              className="jrpg-container px-4 py-2 text-xs font-bold text-white hover:border-cyan-300 hover:bg-cyan-900/30 transition-all"
            >
              {'NEXT >'}
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mb-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-gray-500'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Close Button */}
        <div className="border-t border-white pt-4">
          <button
            onClick={onClose}
            className="w-full jrpg-container px-4 py-2 text-xs font-bold text-white hover:border-red-300 hover:bg-red-900/30 transition-all"
          >
            CLOSE GALLERY
          </button>
        </div>
      </div>
    </div>
  );
}
