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