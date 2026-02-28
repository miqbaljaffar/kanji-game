"use client";

export function GameBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#87CEEB] to-[#e0f2fe]">
      <div className="absolute top-10 left-10 w-40 h-16 bg-white/60 backdrop-blur-md rounded-full shadow-sm animate-float-cloud">
         <div className="absolute -top-6 left-6 w-16 h-16 bg-white/60 rounded-full"></div>
         <div className="absolute -top-10 left-16 w-20 h-20 bg-white/60 rounded-full"></div>
      </div>
      <div className="absolute top-32 right-10 w-48 h-20 bg-white/50 backdrop-blur-md rounded-full shadow-sm animate-float-cloud-reverse">
         <div className="absolute -top-8 left-8 w-20 h-20 bg-white/50 rounded-full"></div>
         <div className="absolute -top-4 right-8 w-16 h-16 bg-white/50 rounded-full"></div>
      </div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.6)] animate-pulse-slow" />
    </div>
  );
}