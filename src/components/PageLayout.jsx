import React from 'react';

export default function PageLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {title && (
        <div className="bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
            {subtitle && <p className="text-gray-300 text-lg">{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </div>
    </div>
  );
}