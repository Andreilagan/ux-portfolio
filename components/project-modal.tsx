'use client';

import type { Project } from './key-items';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="jrpg-container p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b-2 border-white mb-4 pb-2 flex justify-between items-center">
          <h2 className="text-xs md:text-sm font-bold tracking-wider text-white">
            {'< PROJECT DETAILS >'}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-300 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Project Title and Year */}
        <div className="mb-4">
          <h3 className="text-sm md:text-lg font-bold text-yellow-300 mb-2">
            {project.title}
          </h3>
          <div className="flex gap-4 text-xs">
            <span className="text-cyan-300">
              {'> YEAR: '} <span className="text-lime-300">{project.year}</span>
            </span>
            <span className="text-cyan-300">
              {'> ROLE: '} <span className="text-lime-300">{project.role}</span>
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="border-t border-white pt-4 mb-4">
          <h4 className="text-xs font-bold text-cyan-300 mb-2">SYNOPSIS:</h4>
          <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Metrics/Achievements */}
        <div className="border-t border-white pt-4 mb-6">
          <h4 className="text-xs font-bold text-cyan-300 mb-3">KEY METRICS:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="jrpg-container p-3 border-2 border-cyan-400 bg-cyan-900/20"
              >
                <div className="text-xs md:text-sm font-bold text-lime-300">
                  {metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-white pt-4 flex gap-2">
          <button
            onClick={() => {
              alert(`Interested in ${project.title}? Get in touch through the Save function!`);
            }}
            className="flex-1 jrpg-container px-4 py-2 text-xs font-bold text-white hover:border-lime-300 hover:bg-lime-900/30 transition-all"
          >
            {project.buttonText || 'VIEW PROTOTYPE'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 jrpg-container px-4 py-2 text-xs font-bold text-white hover:border-red-300 hover:bg-red-900/30 transition-all"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
