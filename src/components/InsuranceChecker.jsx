import React, { useState } from 'react';
import { Search, CreditCard } from 'lucide-react';
import { INSURANCES } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import SpotlightCard from './reactbits/SpotlightCard';

export default function InsuranceChecker({ activeLang = 'en' }) {
  const [searchTerm, setSearchTerm] = useState('');

  const t = TRANSLATIONS[activeLang]?.insurance || TRANSLATIONS.en.insurance;

  const filteredInsurances = INSURANCES.filter(ins => 
    ins.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ins.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="insurance" className="py-20 bg-[#FAFAFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
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

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D57]" />
            <input 
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-[#E5E2DA] rounded-full pl-11 pr-4 py-3 text-xs text-[#1A1A1A] placeholder-[#888888] focus:outline-none focus:border-[#B08D57] shadow-2xs"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#888888] hover:text-[#1A1A1A]"
              >
                {t.clear}
              </button>
            )}
          </div>
        </div>

        {/* Insurance Grid with ReactBits SpotlightCard */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {filteredInsurances.map((ins, idx) => (
            <SpotlightCard 
              key={idx}
              className="p-3.5 flex flex-col items-center justify-center text-center space-y-1.5 shadow-2xs hover:border-[#B08D57]"
            >
              <span className="text-xl">{ins.icon}</span>
              <div className="text-xs font-bold text-[#1A1A1A] leading-snug">
                {ins.name}
              </div>
              <span className="text-[10px] bg-[#EBF7F4] text-[#006654] px-2 py-0.5 rounded font-semibold border border-[#C5E9E2]">
                {t.directBilling}
              </span>
            </SpotlightCard>
          ))}
        </div>

        {/* Tabby Payment Highlight */}
        <div className="bg-white p-6 rounded-2xl max-w-3xl mx-auto border border-[#EFECE6] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4F1] border border-[#BDE3DC] text-[#006654] flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#1A1A1A]">
                {t.splitHighlightTitle}
              </div>
              <p className="text-xs text-[#666666] mt-0.5">
                {t.splitHighlightSub}
              </p>
            </div>
          </div>

          <a 
            href="tel:+97142366371"
            className="bg-[#1A1A1A] hover:bg-[#333333] text-white px-5 py-2.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer"
          >
            {t.inquireBtn}
          </a>
        </div>

      </div>
    </section>
  );
}
