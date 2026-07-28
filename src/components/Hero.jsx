import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Calendar, ArrowRight, Phone } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, TREATMENTS } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import ShinyText from './reactbits/ShinyText';
import SpotlightCard from './reactbits/SpotlightCard';
import TiltedCard from './reactbits/TiltedCard';
import ParticlesBackground from './reactbits/ParticlesBackground';

export default function Hero({ onOpenBooking, activeLang = 'en' }) {
  const t = TRANSLATIONS[activeLang]?.hero || TRANSLATIONS.en.hero;

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFAFA] overflow-hidden">
      
      {/* ReactBits Ambient Particles & Grid */}
      <ParticlesBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div 
            className="lg:col-span-6 space-y-6 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badges: DHA & Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-white border border-[#E5E2DA] px-3.5 py-1 rounded-full text-xs font-semibold text-[#1A1A1A] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
                {t.dhaBadge}
              </span>

              <span className="inline-flex items-center gap-1 bg-white border border-[#E5E2DA] px-3 py-1 rounded-full text-xs font-semibold text-[#1A1A1A] shadow-2xs">
                <Star className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
                <strong className="text-[#1A1A1A]">{t.ratingBadge}</strong>
              </span>
            </div>

            {/* Headline with ShinyText component from ReactBits */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-serif font-normal text-[#1A1A1A] tracking-tight leading-[1.2]">
              {t.headlinePart1}
              <ShinyText text={t.headlineAccent} className="font-serif italic font-normal text-[#B08D57]" />
              {t.headlinePart2}
            </h1>

            {/* Body Text */}
            <p className="text-sm sm:text-base text-[#4A4A4A] font-normal leading-relaxed max-w-lg">
              {t.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#B08D57] hover:bg-[#9A7947] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2.5 group transform hover:scale-[1.01] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookFreeConsultation}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="bg-white hover:bg-[#F5F3EE] border border-[#E5E2DA] text-[#1A1A1A] px-6 py-3.5 rounded-full font-semibold text-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#B08D57]" />
                <span dir="ltr">{CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Tabby Split Payment Note */}
            <div className="flex items-center gap-2 text-xs text-[#666666] pt-1">
              <span>{t.tabbyNote}</span>
              <span className="bg-[#E6F4F1] text-[#006654] px-2 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wider border border-[#BDE3DC]">
                {t.tabbyBadge}
              </span>
            </div>

          </motion.div>

          {/* Right Column: ReactBits TiltedCard & SpotlightCard */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            
            {/* ReactBits TiltedCard: Pristine Clinic Interior Photo Card */}
            <TiltedCard>
              <div className="bg-white p-3 rounded-2xl border border-[#EFECE6] shadow-sm">
                <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                    alt="DermaLina PolyClinic Reception Room" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-[#1A1A1A] border border-[#E5E2DA] shadow-xs">
                    {t.receptionCaption}
                  </div>
                </div>
              </div>
            </TiltedCard>

            {/* ReactBits SpotlightCard: Standalone Consultation Form Card */}
            <SpotlightCard className="bg-white p-6 rounded-2xl border border-[#EFECE6] shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-serif font-normal text-[#1A1A1A]">
                    {t.fastConsultation}
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5">
                    {t.fastConsultationSub}
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[#333333] font-semibold mb-1">{t.serviceLabel}</label>
                    <select className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3.5 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none">
                      <option value="">{t.selectTreatment}</option>
                      {TREATMENTS.map(tItem => (
                        <option key={tItem.id} value={tItem.id}>{tItem.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#333333] font-semibold mb-1">{t.doctorLabel}</label>
                    <select className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3.5 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none">
                      <option value="">{t.anySpecialist}</option>
                      {DOCTORS.map(d => (
                        <option key={d.id} value={d.id}>{activeLang === 'ar' ? d.arabicName : d.name} ({d.title})</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#1A1A1A] hover:bg-[#333333] text-white py-3 rounded-xl font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#B08D57]" />
                    <span>{t.checkSlotBtn}</span>
                  </button>
                </div>
              </div>
            </SpotlightCard>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
