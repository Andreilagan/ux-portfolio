'use client';

import { useState, useRef, useEffect } from 'react';
import { CharacterStatus } from '@/components/character-status';
import { AbilityList } from '@/components/ability-list';
import { Equipment } from '@/components/equipment';
import { KeyItems } from '@/components/key-items';
import { QuestLog } from '@/components/quest-log';
import { Inventory } from '@/components/inventory';
import { CommandMenu } from '@/components/command-menu';
import { ProjectModal } from '@/components/project-modal';
import { GalleryModal } from '@/components/gallery-modal';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedGallery, setSelectedGallery] = useState<{ title: string; images: string[] } | null>(null);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const inventoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCommandMenu(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (inventoryRef.current) {
      observer.observe(inventoryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen pt-4 px-4 md:px-8">
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
            <QuestLog />
            <div ref={inventoryRef}>
              <Inventory onGallerySelect={setSelectedGallery} />
            </div>
            {/* Command Menu - Shows below Inventory on scroll */}
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

      {/* Gallery Modal */}
      {selectedGallery && (
        <GalleryModal
          title={selectedGallery.title}
          images={selectedGallery.images}
          onClose={() => setSelectedGallery(null)}
        />
      )}
    </main>
  );
}
