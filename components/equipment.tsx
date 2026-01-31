'use client';

export function Equipment() {
  const tools = [
    { name: 'Figma', icon: '/figma-logo.png', color: 'text-purple-400', isImage: true },
    { name: 'Wix Studio', icon: '/wix-studio-logo.png', color: 'text-gray-300', isImage: true },
    { name: 'Adobe XD', icon: '★', color: 'text-red-400' },
    { name: 'Webflow', icon: '◈', color: 'text-blue-400' },
    { name: 'VS Code', icon: '◇', color: 'text-cyan-400' },
    { name: 'Git', icon: '◉', color: 'text-orange-400' },
  ];

  return (
    <div className="jrpg-container p-4 md:p-6 text-white">
      {/* Title */}
      <div className="border-b-2 border-white mb-4 pb-2">
        <h2 className="text-xs md:text-sm font-bold tracking-wider">
          {'< EQUIPMENT >'}
        </h2>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="jrpg-container p-3 text-center hover:bg-cyan-900/50 transition-colors cursor-pointer group"
          >
            <div className="mb-2 flex justify-center">
              {tool.isImage ? (
                <img
                  src={tool.icon || "/placeholder.svg"}
                  alt={`${tool.name} logo`}
                  className="w-8 h-8 md:w-10 md:h-10 group-hover:opacity-75 transition-opacity"
                  style={{ imageRendering: 'pixelated' }}
                />
              ) : (
                <div className={`text-2xl md:text-3xl ${tool.color} group-hover:animate-pulse`}>
                  {tool.icon}
                </div>
              )}
            </div>
            <div className="text-xs font-bold">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
