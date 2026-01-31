'use client';

export function QuestLog() {
  const experience = [
    {
      company: 'PRIME Philippines',
      role: 'UX Designer',
      period: '2023 - Present',
      achievements: ['Led 15+ projects', 'Mentored 3 junior designers', 'Increased conversion by 140%'],
    },
    {
      company: 'Pixel8',
      role: 'Product Designer',
      period: '2021 - 2023',
      achievements: ['Built design system', 'Scaled team from 1 to 5 designers', 'Reached 250K+ users'],
    },
  ];

  return (
    <div className="jrpg-container p-4 md:p-6 text-white">
      {/* Title */}
      <div className="border-b-2 border-white mb-4 pb-2">
        <h2 className="text-xs md:text-sm font-bold tracking-wider">
          {'< QUEST LOG >'}
        </h2>
      </div>

      {/* Experience Entries */}
      <div className="space-y-4">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="border-l-4 border-cyan-400 pl-3 py-2"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs md:text-sm font-bold text-yellow-300">
                {exp.company}
              </h3>
              <span className="text-xs text-lime-300">{exp.period}</span>
            </div>
            <div className="text-xs text-cyan-300 mb-2">
              ◆ {exp.role}
            </div>
            <ul className="text-xs text-gray-200 space-y-1">
              {exp.achievements.map((achievement, aidx) => (
                <li key={aidx}>
                  {'→ '} {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
