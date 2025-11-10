<<<<<<< HEAD
// import React, { useState } from 'react';
// import { MapPin, Users, Building2, Mountain, Factory } from 'lucide-react';

// export default function PennsylvaniaMap() {
//   const [selectedRegion, setSelectedRegion] = useState(null);

//   const regions = [
//     {
//       id: 'philadelphia',
//       name: 'Jobs In The Philadelphia Area',
//       color: '#3b82f6',
//       hoverColor: '#2563eb',
//       description: 'Front-end Developer, Machine Learning Assistant, Front-end Intern ',
//       experience: ['React', 'HTML', 'AI Copilot'],
//       icon: <Building2 className="w-5 h-5" />
//     },
//     {
//       id: 'pittsburg ',
//       name: 'Jobs In The Pittsburg',
//       color: '#eab308',
//       hoverColor: '#ca8a04',
//       description: 'Back-end Developer Intern, cybersecurity Analyst Intern,',
//       cities: ['Pittsburgh', 'Altoona', 'Johnstown'],
//       icon: <Factory className="w-5 h-5" />
//     },
//     {
//       id: 'central',
//       name: 'Central Pennsylvania',
//       color: '#10b981',
//       hoverColor: '#059669',
//       description: 'State capital, agricultural heartland, Appalachian valleys',
//       cities: ['Harrisburg', 'State College', 'York'],
//       icon: <MapPin className="w-5 h-5" />
//     },
//     {
//       id: 'northeast',
//       name: 'Northeast (Poconos)',
//       color: '#8b5cf6',
//       hoverColor: '#7c3aed',
//       description: 'Mountain resorts, coal mining history, natural beauty',
//       cities: ['Scranton', 'Wilkes-Barre', 'Stroudsburg'],
//       icon: <Mountain className="w-5 h-5" />
//     },
//     {
//       id: 'northwest',
//       name: 'Northwest (Erie)',
//       color: '#06b6d4',
//       hoverColor: '#0891b2',
//       description: 'Great Lakes access, manufacturing, wine country',
//       cities: ['Erie', 'Meadville', 'Oil City'],
//       icon: <Users className="w-5 h-5" />
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-5xl font-bold text-white mb-3">Pennsylvania Regions</h1>
//           <p className="text-xl text-gray-300">Click on any region to learn more</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 items-start">
//           {/* Map SVG */}
//           <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
//             <svg viewBox="0 0 500 300" className="w-full h-auto">
//               {/* Philadelphia & Southeast */}
//               <path
//                 d="M 380 140 L 480 145 L 475 200 L 420 210 L 380 180 Z"
//                 fill={selectedRegion === 'philadelphia' ? regions[0].hoverColor : regions[0].color}
//                 stroke="#fff"
//                 strokeWidth="2"
//                 className="cursor-pointer transition-all duration-300 hover:opacity-80"
//                 onClick={() => setSelectedRegion('philadelphia')}
//               />
//               <text x="430" y="175" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">SE</text>

//               {/* Pittsburgh & Southwest */}
//               <path
//                 d="M 20 130 L 150 120 L 180 160 L 170 210 L 80 220 L 20 180 Z"
//                 fill={selectedRegion === 'pittsburgh' ? regions[1].hoverColor : regions[1].color}
//                 stroke="#fff"
//                 strokeWidth="2"
//                 className="cursor-pointer transition-all duration-300 hover:opacity-80"
//                 onClick={() => setSelectedRegion('pittsburgh')}
//               />
//               <text x="100" y="170" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">SW</text>

//               {/* Central Pennsylvania */}
//               <path
//                 d="M 150 120 L 380 140 L 380 180 L 300 200 L 180 210 L 170 210 L 180 160 Z"
//                 fill={selectedRegion === 'central' ? regions[2].hoverColor : regions[2].color}
//                 stroke="#fff"
//                 strokeWidth="2"
//                 className="cursor-pointer transition-all duration-300 hover:opacity-80"
//                 onClick={() => setSelectedRegion('central')}
//               />
//               <text x="270" y="170" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Central</text>

//               {/* Northeast (Poconos) */}
//               <path
//                 d="M 300 40 L 460 55 L 480 145 L 380 140 L 300 120 Z"
//                 fill={selectedRegion === 'northeast' ? regions[3].hoverColor : regions[3].color}
//                 stroke="#fff"
//                 strokeWidth="2"
//                 className="cursor-pointer transition-all duration-300 hover:opacity-80"
//                 onClick={() => setSelectedRegion('northeast')}
//               />
//               <text x="380" y="95" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">NE</text>

//               {/* Northwest (Erie) */}
//               <path
//                 d="M 20 30 L 300 40 L 300 120 L 150 120 L 20 130 Z"
//                 fill={selectedRegion === 'northwest' ? regions[4].hoverColor : regions[4].color}
//                 stroke="#fff"
//                 strokeWidth="2"
//                 className="cursor-pointer transition-all duration-300 hover:opacity-80"
//                 onClick={() => setSelectedRegion('northwest')}
//               />
//               <text x="160" y="80" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">NW</text>

//               {/* Major cities markers */}
//               <circle cx="440" cy="175" r="6" fill="#ef4444" stroke="white" strokeWidth="2" />
//               <text x="440" y="195" fill="white" fontSize="11" textAnchor="middle">Philly</text>

//               <circle cx="80" cy="170" r="6" fill="#ef4444" stroke="white" strokeWidth="2" />
//               <text x="80" y="190" fill="white" fontSize="11" textAnchor="middle">Pitt</text>

//               <circle cx="310" cy="165" r="5" fill="#fbbf24" stroke="white" strokeWidth="2" />
//               <text x="310" y="182" fill="white" fontSize="10" textAnchor="middle">HBG</text>
//             </svg>
//           </div>

//           {/* Region Info Panel */}
//           <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 min-h-[400px]">
//             {selectedRegion ? (
//               <div className="space-y-6">
//                 {regions.map(region => 
//                   region.id === selectedRegion && (
//                     <div key={region.id} className="animate-fade-in">
//                       <div className="flex items-center gap-3 mb-4">
//                         <div 
//                           className="p-3 rounded-lg"
//                           style={{ backgroundColor: region.color }}
//                         >
//                           {region.icon}
//                         </div>
//                         <h2 className="text-3xl font-bold text-white">{region.name}</h2>
//                       </div>
                      
//                       <p className="text-gray-300 text-lg mb-6">{region.description}</p>
                      
//                       <div className="bg-slate-900/50 p-4 rounded-lg">
//                         <h3 className="text-xl font-semibold text-purple-400 mb-3">Major Cities</h3>
//                         <ul className="space-y-2">
//                           {region.cities.map(city => (
//                             <li key={city} className="text-gray-200 flex items-center gap-2">
//                               <span className="w-2 h-2 rounded-full" style={{ backgroundColor: region.color }}></span>
//                               {city}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>
//             ) : (
//               <div className="flex items-center justify-center h-full">
//                 <div className="text-center text-gray-400">
//                   <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
//                   <p className="text-xl">Select a region on the map to learn more</p>
//                   <p className="text-sm mt-2">Click on any colored area</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
=======
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function PAMap({ jobs, selectedJob, onJobSelect }) {
  const [zoom, setZoom] = useState(1);
  const [hoveredCity, setHoveredCity] = useState(null);

  // Pennsylvania outline coordinates (normalized 0-100)
  const paOutline = "M 20,15 L 25,10 L 35,8 L 45,10 L 55,5 L 70,8 L 80,15 L 85,25 L 82,40 L 80,50 L 70,60 L 50,70 L 30,72 L 15,65 L 10,50 L 8,30 Z";

  // Cities with their approximate locations on PA map
  const cities = [
    { name: 'Philadelphia', x: 60, y: 58, color: '#3b82f6' },
    { name: 'Pittsburgh', x: 15, y: 40, color: '#10b981' },
    { name: 'Allentown', x: 75, y: 25, color: '#8b5cf6' },
    { name: 'Lancaster', x: 65, y: 40, color: '#f59e0b' },
    { name: 'Drexel Hill', x: 40, y: 54, color: '#06b6d4'}
  ];

  const createComputerIcon = (color) => (
    <svg width="30" height="30" viewBox="0 0 30 30" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }}>
      {/* Monitor stand */}
      <rect x="10" y="18" width="10" height="2" fill="#333" />
      {/* Monitor base */}
      <rect x="6" y="20" width="18" height="1" fill="#333" />
      {/* Monitor bezel */}
      <rect x="5" y="4" width="20" height="15" fill="#222" stroke="#444" strokeWidth="1" />
      {/* Monitor screen */}
      <rect x="7" y="6" width="16" height="11" fill={color} opacity="0.8" stroke={color} strokeWidth="1" />
      {/* Screen glow */}
      <circle cx="15" cy="11.5" r="6" fill={color} opacity="0.2" />
    </svg>
  );

  const jobsByCity = jobs.reduce((acc, job) => {
    const city = cities.find(c => job.location.includes(c.name));
    if (city) {
      if (!acc[city.name]) acc[city.name] = [];
      acc[city.name].push(job);
    }
    return acc;
  }, {});

  return (
      <div className="w-full h-[450px] bg-slate-900/50 rounded-lg flex items-center justify-center p-4 overflow-hidden relative">
        <div className="relative" style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}>
          <svg width="600" height="500" viewBox="0 0 100 100" className="drop-shadow-2xl">
            {/* Background */}
            <rect width="100" height="100" fill="#1f2937" />
            
            {/* PA State */}
            <path
              d={paOutline}
              fill="#374151"
              stroke="#6b7280"
              strokeWidth="0.5"
            />

            {/* City markers */}
            {Object.entries(jobsByCity).map(([cityName, cityJobs]) => {
              const city = cities.find(c => c.name === cityName);
              if (!city) return null;
              const isHovered = hoveredCity === cityName;
              const isSelected = cityJobs.some(job => job.id === selectedJob?.id);

              return (
                <g 
                  key={cityName} 
                  onMouseEnter={() => setHoveredCity(cityName)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() => onJobSelect(cityJobs[0])}
                  className="cursor-pointer"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  transform={isHovered || isSelected ? `translate(${city.x}, ${city.y}) scale(1.2) translate(-${city.x}, -${city.y})` : ''}
                >
                  <defs>
                    <filter id={`glow-${city.name}`} x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Main marker dot */}
                  <circle 
                    cx={city.x} 
                    cy={city.y} 
                    r={isSelected ? "2" : "1.5"} 
                    fill={city.color} 
                    stroke="white" 
                    strokeWidth={isSelected ? "0.5" : "0.3"}
                    style={{ filter: (isHovered || isSelected) ? `url(#glow-${city.name})` : 'none' }}
                  />
                  
                  {/* City name */}
                  <text
                    x={city.x}
                    y={city.y + 4}
                    textAnchor="middle"
                    fontSize="1.8"
                    fontWeight="bold"
                    fill="white"
                    stroke="#111827"
                    strokeWidth="0.2"
                    paintOrder="stroke"
                    className="pointer-events-none"
                  >
                    {city.name.split(' ')[0]} ({cityJobs.length})
                  </text>

                  {/* Job list tooltip on hover */}
                  {isHovered && (
                    <g transform={`translate(${city.x > 50 ? city.x - 35 : city.x + 5}, ${city.y - 15})`}>
                      <rect
                        x="0"
                        y="0"
                        width="32"
                        height={Math.min(3, cityJobs.length) * 4 + (cityJobs.length > 3 ? 5 : 2)}
                        fill="rgba(31, 41, 55, 0.9)"
                        rx="1"
                        stroke="#6b7280"
                        strokeWidth="0.3"
                      />
                      {cityJobs.slice(0, 3).map((job, index) => (
                        <text key={job.id} x="1" y={3 + index * 4} fontSize="1.5" fill="#e5e7eb" className="pointer-events-none">
                          - {job.title.length > 18 ? job.title.substring(0, 18) + '…' : job.title}
                        </text>
                      ))}
                      {cityJobs.length > 3 && (
                        <text
                          x="1"
                          y={3 + 3 * 4 + 2}
                          fontSize="1.3"
                          fill="#9ca3af"
                          className="pointer-events-none"
                        >
                          ...and {cityJobs.length - 3} more
                        </text>
                      )}
                    </g>
                  )}
                </g>
              )
            })}

          </svg>
        </div>

        {/* Zoom controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => setZoom(z => Math.min(z + 0.2, 2))}
            className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full shadow-lg transition border border-slate-600"
          >
            <Plus size={20} />
          </button>
          <button
            onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))}
            className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full shadow-lg transition border border-slate-600"
          >
            <Minus size={20} />
          </button>
        </div>
      </div>
    
  );
}
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517
