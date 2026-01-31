'use client';

export interface Project {
  id: string;
  title: string;
  description: string;
  metrics: string[];
  role: string;
  year: string;
  logo: string;
  buttonText?: string;
}

interface KeyItemsProps {
  onProjectSelect: (project: Project) => void;
}

export function KeyItems({ onProjectSelect }: KeyItemsProps) {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Educo Solutions',
      description: 'Educo enables global companies to hire, manage, and scale world class teams with absolute compliance and efficiency.',
      metrics: ['140% inquiry increase', '45% task completion improvement', '3.2x user retention'],
      role: 'UI/UX Design Intern',
      year: '2025',
      logo: '/logo-educo.jpg',
      buttonText: 'Visit website',
    },
    {
      id: '2',
      title: 'GreatWork',
      description: 'Professional portfolio platform optimizing creator workflows',
      metrics: ['89% feature adoption', '2.5x time-on-site increase', '92% satisfaction score'],
      role: 'UX Lead',
      year: '2023',
      logo: '/logo-greatwork.jpg',
    },
    {
      id: '3',
      title: 'PRIME Philippines',
      description: 'Real Estate Consultancy Website Redesign',
      metrics: ['2 Responsive designs', '120% conversion increase', '4.8/5 usability rating'],
      role: 'UI/UX Design Intern',
      year: '2025',
      logo: '/logo-prime.jpg',
    },
    {
      id: '4',
      title: 'Pixel8 Hub',
      description: 'Community platform for creative professionals',
      metrics: ['250K+ active users', '8M monthly interactions', '4.9 app store rating'],
      role: 'Design Lead',
      year: '2022',
      logo: '/logo-pixel8.jpg',
    },
  ];

  return (
    <div className="jrpg-container p-4 md:p-6 text-white">
      {/* Title */}
      <div className="border-b-2 border-white mb-4 pb-2">
        <h2 className="text-xs md:text-sm font-bold tracking-wider">
          {'< KEY ITEMS >'}
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onProjectSelect(project)}
            className="jrpg-container p-4 text-left hover:border-cyan-300 hover:bg-cyan-900/30 transition-all group cursor-pointer"
          >
            <div className="flex items-start gap-3 mb-2">
              <img
                src={project.logo || "/placeholder.svg"}
                alt={`${project.title} logo`}
                className="w-12 h-12 flex-shrink-0 border border-white"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xs md:text-sm font-bold text-yellow-300 group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-lime-300">{project.year}</span>
                </div>
                <p className="text-xs text-gray-200 mb-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="text-xs text-cyan-300 group-hover:text-lime-300">
                  {'[ ENTER TO VIEW ]'}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
