"use client";

export function GameBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#87CEEB]">
      {/* Awan-awan yang melayang */}
      <div className="absolute top-10 left-10 w-40 h-16 bg-white rounded-full opacity-90 shadow-sm" style={{ animation: 'float-cloud 10s infinite alternate' }}>
         <div className="absolute -top-6 left-6 w-16 h-16 bg-white rounded-full"></div>
         <div className="absolute -top-10 left-16 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="absolute top-24 right-20 w-48 h-20 bg-white rounded-full opacity-90 shadow-sm" style={{ animation: 'float-cloud 14s infinite alternate-reverse' }}>
         <div className="absolute -top-8 left-8 w-20 h-20 bg-white rounded-full"></div>
         <div className="absolute -top-4 right-8 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="absolute top-52 left-1/3 w-32 h-12 bg-white rounded-full opacity-80 shadow-sm" style={{ animation: 'float-cloud 8s infinite alternate' }}>
         <div className="absolute -top-6 left-8 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      {/* Matahari */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.8)] animate-pulse-slow" />
    </div>
  );
}