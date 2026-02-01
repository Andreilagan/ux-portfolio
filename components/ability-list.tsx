'use client';

export function AbilityList() {
  const abilities = {
    Research: ['User Research', 'Competitive Analysis', 'Usability Testing', 'User Interviews'],
    Design: ['Wireframing', 'Prototyping', 'Visual Design', 'Design Systems'],
    Optimization: ['Conversion Rate Optimization', 'Google Analytics', 'Search Engine Optimization', 'Information Architecture'],
  };

  return (
    <div className="jrpg-container p-4 md:p-6 text-white">
      {/* Title */}
      <div className="border-b-2 border-white mb-4 pb-2">
        <h2 className="text-xs md:text-sm font-bold tracking-wider">
          {'< ABILITY LIST >'}
        </h2>
      </div>

      {/* Ability Groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(abilities).map(([category, skills]) => (
          <div key={category} className="border-l-2 border-cyan-400 pl-3">
            <h3 className="text-xs md:text-sm font-bold text-yellow-300 mb-2">
              {category.toUpperCase()}
            </h3>
            <ul className="space-y-1 text-xs">
              {skills.map((skill, idx) => (
                <li key={idx} className="text-white">
                  {'> '} {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
