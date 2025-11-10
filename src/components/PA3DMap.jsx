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
