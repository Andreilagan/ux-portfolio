'use client';

export function QuestLog() {
  const quests = [
    {
      type: 'MAIN',
      company: 'PRIME Philippines',
      objective: 'Lead end-to-end UI/UX for 3 web projects.',
      achievements: [
        'Case Study on PRIME Philippines Website',
        'Increased client inquiries by 140% for Educo Solutions.',
        'Reduced average clicks to key content by 50% for GreatWork.',
      ],
    },
    {
      type: 'SIDE',
      company: 'Pixel8 Web Solutions',
      objective: 'Serve as Interim Design Lead & build a comprehensive Design System.',
      achievements: [
        'Coordinated weekly UX-to-Dev handoffs for team alignment.',
      ],
    },
  ];

  const experience = quests; // Declare the experience variable

  return (
    <div className="jrpg-container p-4 md:p-6 text-white">
      {/* Title */}
      <div className="jrpg-header mb-4">
        <h2 className="text-xs md:text-sm font-bold tracking-wider">
          {'< QUEST LOG >'}
        </h2>
      </div>

      {/* Quest Entries */}
      <div className="space-y-6">
        {quests.map((quest, idx) => (
          <div
            key={idx}
            className="border-l-4 border-cyan-400 pl-3 py-2"
          >
            {/* Quest Type Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-2 py-1 ${
                quest.type === 'MAIN'
                  ? 'bg-yellow-600/50 text-yellow-300 border border-yellow-400'
                  : 'bg-cyan-600/50 text-cyan-300 border border-cyan-400'
              }`}>
                {'[ ' + quest.type + ' QUEST ]'}
              </span>
            </div>

            {/* Company/Quest Name */}
            <h3 className="text-xs md:text-sm font-bold text-yellow-300 mb-1">
              {quest.company}
            </h3>

            {/* Objective */}
            <div className="text-xs text-cyan-300 mb-2">
              {'> OBJECTIVE: '} <span className="text-lime-300">{quest.objective}</span>
            </div>

            {/* Achievements */}
            <ul className="text-xs text-gray-200 space-y-1 ml-2">
              {quest.achievements.map((achievement, aidx) => (
                <li key={aidx} className="flex gap-2">
                  <span className="text-lime-300 flex-shrink-0">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
