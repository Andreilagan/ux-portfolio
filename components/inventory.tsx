'use client';

export interface InventoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  galleryImages?: string[];
}

interface InventoryProps {
  onItemSelect?: (item: InventoryItem) => void;
  onGallerySelect?: (gallery: { title: string; images: string[] }) => void;
}

export function Inventory({ onItemSelect, onGallerySelect }: InventoryProps) {

  const items: InventoryItem[] = [
    {
      id: '0',
      title: "Pokémon GO's Needfinding Study",
      description: 'UX research and needfinding study on location-based AR games and safety concerns',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide1.JPG-QBUoDiQPWOTaLsshbHZwxMJT2zeCEl.jpeg',
      category: 'UX Research',
      year: '2024',
      galleryImages: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide3.JPG-oj81SwBNBrsw73djsKtjLGTDkovq2r.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide4.JPG-r35jbUPuULbRKPi4AQo7uB2JtqbE3F.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide5.JPG-OguajfchgUA41UXifY8pX7Q0ui56K5.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide13.JPG-YIVfKuh66Ix851D6Rm2TqfHwk3Sc37.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide15.JPG-dEMdhD4aya1HFvhxJ3Aq85DkITttnL.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide17.JPG-4GbK7MJeGPuDtTX2R6oEJLeMFFJui7.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide18.JPG-tJT2z2AGQPTWjECqygD6uLQ6P9x8d4.jpeg',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide21.JPG-gYCTKwCsjatxP1mvjP2jJjAusDICT9.jpeg',
      ],
    },
    {
      id: '1',
      title: 'Mobile App Design',
      description: 'Comprehensive mobile app redesign with focus on user accessibility',
      image: '/inventory-mobile.jpg',
      category: 'Mobile Design',
      year: '2024',
    },
    {
      id: '2',
      title: 'SaaS Dashboard',
      description: 'Data visualization and analytics dashboard for enterprise users',
      image: '/inventory-saas.jpg',
      category: 'Web Design',
      year: '2024',
    },
    {
      id: '3',
      title: 'E-commerce Redesign',
      description: 'Complete platform overhaul with improved conversion optimization',
      image: '/inventory-ecommerce.jpg',
      category: 'Web Design',
      year: '2023',
    },
    {
      id: '4',
      title: 'Brand Identity System',
      description: 'Full design system and brand guidelines package',
      image: '/inventory-branding.jpg',
      category: 'Branding',
      year: '2023',
    },
  ];

  return (
    <div className="jrpg-container p-4 md:p-6 text-white">
      {/* Title */}
      <div className="border-b-2 border-white mb-4 pb-2">
        <h2 className="text-xs md:text-sm font-bold tracking-wider">
          {'< INVENTORY >'}
        </h2>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              if (item.galleryImages) {
                onGallerySelect?.({ title: item.title, images: item.galleryImages });
              } else {
                onItemSelect?.(item);
              }
            }}
            className="jrpg-container p-0 overflow-hidden hover:border-cyan-300 transition-all group cursor-pointer"
          >
            {/* Image Section - Larger than Key Items */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-900">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ imageRendering: 'pixelated' }}
              />
              {/* Category Badge */}
              <div className="absolute top-2 right-2 bg-yellow-300/90 text-blue-900 px-2 py-1 text-xs font-bold">
                {item.category}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 border-t-2 border-white">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xs md:text-sm font-bold text-yellow-300 group-hover:text-cyan-300 flex-1">
                  {item.title}
                </h3>
                <span className="text-xs text-lime-300 ml-2 flex-shrink-0">{item.year}</span>
              </div>
              <p className="text-xs text-gray-200 mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="text-xs text-cyan-300 group-hover:text-lime-300">
                {'[ CLICK FOR DETAILS ]'}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
