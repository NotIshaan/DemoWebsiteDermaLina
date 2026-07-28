import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, Phone } from 'lucide-react';
import { DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import SpotlightCard from './reactbits/SpotlightCard';

export default function Doctors({ onOpenBooking, activeLang = 'en' }) {
  const t = TRANSLATIONS[activeLang]?.doctors || TRANSLATIONS.en.doctors;

  return (
    <section id="doctors" className="py-20 bg-white border-y border-[#EFECE6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Doctors Grid with ReactBits SpotlightCard */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between h-full bg-[#FAFAFA]">
                <div className="space-y-5">
                  
                  {/* Header Profile Info */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-[#E5E2DA] shrink-0 shadow-2xs">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-1 text-center sm:text-left">
                      <span className="inline-block bg-[#EBF7F4] text-[#006654] text-[11px] font-bold px-2.5 py-0.5 rounded-md mb-1 border border-[#C5E9E2]">
                        {doc.consultation}
                      </span>

                      <h3 className="text-xl font-serif font-normal text-[#1A1A1A]">
                        {activeLang === 'ar' ? doc.arabicName : doc.name}
                      </h3>

                      <div className="text-xs font-semibold text-[#B08D57]">
                        {doc.title}
                      </div>

                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#555555]">
                        <Award className="w-4 h-4 text-[#B08D57]" />
                        <span>{doc.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Degree Callout */}
                  <div className="bg-white p-3.5 rounded-xl border border-[#EFECE6] flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#4A4A4A] leading-snug">
                      <strong className="text-[#1A1A1A] block mb-0.5">{t.qualifications}</strong>
                      {doc.degree}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Specialization Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {doc.specialties.map((s, i) => (
                      <span key={i} className="bg-white text-[#1A1A1A] text-[11px] font-medium px-2.5 py-1 rounded-md border border-[#E5E2DA]">
                        {s}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Actions Footer */}
                <div className="pt-5 mt-5 border-t border-[#EFECE6] flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 bg-[#B08D57] hover:bg-[#9A7947] text-white py-3 rounded-xl font-bold text-xs shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    {t.bookDoctorBtn}
                  </button>

                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="bg-white hover:bg-[#F5F3EE] text-[#1A1A1A] border border-[#E5E2DA] px-4 py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#B08D57]" />
                    {t.contactClinicBtn}
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
