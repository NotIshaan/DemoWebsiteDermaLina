import React from 'react';

export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-yellow-600/5 rounded-full blur-[130px]" />
      
      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: `40px 40px`
        }}
      />
    </div>
  );
}
