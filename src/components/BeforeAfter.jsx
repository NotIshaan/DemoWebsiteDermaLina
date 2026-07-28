import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import TiltedCard from './reactbits/TiltedCard';

export default function BeforeAfter({ activeLang = 'en' }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const t = TRANSLATIONS[activeLang]?.beforeAfter || TRANSLATIONS.en.beforeAfter;

  return (
    <section className="py-20 bg-white border-y border-[#EFECE6] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B08D57] block mb-2">
            {t.badge}
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            {t.titleMain} <span className="italic text-[#B08D57]">{t.titleAccent}</span>
          </h2>
          
          <p className="mt-3 text-sm text-[#555555]">
            {t.subtitle}
          </p>
        </div>

        {/* Slider Container wrapped in ReactBits TiltedCard */}
        <TiltedCard>
          <div className="bg-[#FAFAFA] p-4 sm:p-6 rounded-2xl border border-[#E5E2DA] shadow-xs">
            <div className="relative h-80 sm:h-[420px] rounded-xl overflow-hidden select-none">
              {/* After Image */}
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80" 
                alt="After Clinical Treatment" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#B08D57] text-white px-3 py-1 rounded-full text-xs font-bold shadow-2xs">
                {t.after}
              </div>

              {/* Before Image */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1512290900673-7002fe5cdc6a?auto=format&fit=crop&w=1200&q=80" 
                  alt="Before Clinical Treatment" 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: '100%', maxWidth: 'none' }}
                />
                <div className="absolute top-3 left-3 bg-[#1A1A1A] text-white px-3 py-1 rounded-full text-xs font-bold shadow-2xs">
                  {t.before}
                </div>
              </div>

              {/* Handle */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 shadow-md"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#B08D57] text-white flex items-center justify-center shadow-md border-2 border-white">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </div>
              </div>

              <input 
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-[#666666]">
              <span>{t.caption}</span>
              <span className="text-[#888888]">{t.supervisedBy}</span>
            </div>
          </div>
        </TiltedCard>

      </div>
    </section>
  );
}
