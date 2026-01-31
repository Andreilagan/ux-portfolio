'use client';

import { useState, useRef, useEffect } from 'react';
import { CharacterStatus } from '@/components/character-status';
import { AbilityList } from '@/components/ability-list';
import { Equipment } from '@/components/equipment';
import { KeyItems } from '@/components/key-items';
import { QuestLog } from '@/components/quest-log';
import { CommandMenu } from '@/components/command-menu';
import { ProjectModal } from '@/components/project-modal';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const questLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCommandMenu(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (questLogRef.current) {
      observer.observe(questLogRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen pt-4 px-4 md:px-8" style={{ backgroundImage: 'linear-gradient(135deg, #0a1b3f 0%, #1a3a5c 50%, #0f2844 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Flex Layout */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Sidebar - Character Status */}
          <div className="w-full md:w-64">
            <CharacterStatus />
          </div>

          {/* Central Content - Main Sections */}
          <div className="flex-1 space-y-6">
            <AbilityList />
            <Equipment />
            <KeyItems onProjectSelect={setSelectedProject} />
            <div ref={questLogRef}>
              <QuestLog />
            </div>
            {/* Command Menu - Shows below Quest Log on scroll */}
            {showCommandMenu && <CommandMenu />}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
