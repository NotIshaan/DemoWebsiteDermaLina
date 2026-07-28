import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Check, ArrowRight, X, Calendar } from 'lucide-react';
import { TREATMENTS } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import SpotlightCard from './reactbits/SpotlightCard';
import ParticlesBackground from './reactbits/ParticlesBackground';

export default function Treatments({ onOpenBooking, activeLang = 'en' }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const t = TRANSLATIONS[activeLang]?.treatments || TRANSLATIONS.en.treatments;

  const categories = ['All', 'Dermatology', 'Aesthetics', 'Laser Hair Removal', 'Beautician', 'General Health'];

  const filteredTreatments = activeCategory === 'All' 
    ? TREATMENTS 
    : TREATMENTS.filter(item => item.category === activeCategory);

  return (
    <section id="treatments" className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      <ParticlesBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B08D57] block mb-2">
            {t.badge}
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] tracking-tight">
            {t.titleMain} <span className="italic text-[#B08D57]">{t.titleAccent}</span>
          </h2>
          
          <p className="mt-3 text-sm text-[#555555] font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters (Mobile Swipeable) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-10 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'bg-white text-[#4A4A4A] hover:text-[#1A1A1A] border border-[#E5E2DA]'
              }`}
            >
              {t.categories[cat] || cat}
            </button>
          ))}
        </div>

        {/* Treatments Grid with ReactBits SpotlightCard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment) => (
              <motion.div
                key={treatment.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard className="h-full flex flex-col justify-between hover:border-[#D6CEBE]">
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={treatment.image} 
                        alt={treatment.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] uppercase font-bold text-[#1A1A1A] px-2.5 py-0.5 rounded-full border border-[#E5E2DA]">
                        {t.categories[treatment.category] || treatment.category}
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-serif font-normal text-[#1A1A1A]">
                        {treatment.title}
                      </h3>
                      
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {treatment.shortDesc}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-[#666666] pt-2 border-t border-[#F0ECE1]">
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                          {treatment.duration}
                        </span>
                        <span>•</span>
                        <span>{t.downtime}: <strong className="text-[#1A1A1A] font-semibold">{treatment.downtime}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedTreatment(treatment)}
                      className="flex-1 bg-[#FAFAFA] hover:bg-[#F3F0E6] text-[#1A1A1A] py-2.5 rounded-xl text-xs font-semibold border border-[#E5E2DA] transition-colors cursor-pointer"
                    >
                      {t.quickView}
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="bg-[#B08D57] hover:bg-[#9A7947] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      {t.bookConsultation}
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Quick View Treatment Details Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white max-w-lg w-full rounded-2xl overflow-hidden relative border border-[#E5E2DA] shadow-xl p-6 space-y-4">
            <button 
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-4 right-4 bg-[#FAFAFA] p-1.5 rounded-full text-[#1A1A1A] hover:bg-[#E5E2DA] border border-[#E5E2DA]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-44 rounded-xl overflow-hidden">
              <img src={selectedTreatment.image} alt={selectedTreatment.title} className="w-full h-full object-cover" />
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-[#B08D57] tracking-wider block">
                {t.categories[selectedTreatment.category] || selectedTreatment.category}
              </span>
              <h3 className="text-xl font-serif text-[#1A1A1A] mt-0.5">
                {selectedTreatment.title}
              </h3>
              <p className="text-xs text-[#555555] mt-2 leading-relaxed">
                {selectedTreatment.fullDesc}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[#EFECE6]">
              <span className="text-xs font-bold text-[#1A1A1A]">{t.keyBenefits}</span>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-[#4A4A4A]">
                {selectedTreatment.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 flex gap-2">
              <button
                onClick={() => { setSelectedTreatment(null); onOpenBooking(); }}
                className="w-full bg-[#B08D57] hover:bg-[#9A7947] text-white py-3 rounded-xl font-bold text-xs shadow-xs"
              >
                {t.bookConsultation}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
