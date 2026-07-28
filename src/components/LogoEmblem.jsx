import React from 'react';

export default function LogoEmblem({ className = "", showText = true, activeLang = 'en' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Flower & Profile Emblem SVG */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A1A1A] text-[#B08D57] flex items-center justify-center p-2 shadow-sm shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          {/* Female Profile Silhouette */}
          <path d="M 42 22 C 34 26 28 35 27 45 C 26 53 29 58 26 64 C 23 70 17 74 15 82 C 24 85 36 84 46 78 C 42 70 41 62 44 54 C 47 48 53 44 56 38 C 58 32 55 25 42 22 Z" opacity="0.9" />
          
          {/* 5-Petal Flower Emblem */}
          <g transform="translate(62, 38)">
            <path d="M 0 0 Q -5 -16 0 -22 Q 5 -16 0 0" fill="#B08D57" />
            <path d="M 0 0 Q 14 -12 20 -7 Q 14 5 0 0" fill="#B08D57" />
            <path d="M 0 0 Q 16 10 14 18 Q 2 15 0 0" fill="#B08D57" />
            <path d="M 0 0 Q -8 16 -16 14 Q -12 2 0 0" fill="#B08D57" />
            <path d="M 0 0 Q -18 -4 -20 -12 Q -7 -14 0 0" fill="#B08D57" />
            <circle cx="0" cy="0" r="3.5" fill="#1A1A1A" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="leading-tight">
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#1A1A1A] block font-sans">
            {activeLang === 'ar' ? 'ديرما لينا' : 'DermaLina'}
          </span>
          <span className="text-xs italic font-serif text-[#B08D57] -mt-1 block font-normal tracking-wide">
            {activeLang === 'ar' ? 'بولي كلينيك' : 'PolyClinic'}
          </span>
        </div>
      )}
    </div>
  );
}
