import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { REVIEWS, FAQS } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import SpotlightCard from './reactbits/SpotlightCard';

export default function Testimonials({ activeLang = 'en' }) {
  const [openFaq, setOpenFaq] = useState(null);

  const t = TRANSLATIONS[activeLang]?.testimonials || TRANSLATIONS.en.testimonials;

  return (
    <section id="reviews" className="py-20 bg-[#FAFAFA] relative">
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

        {/* Reviews Grid with ReactBits SpotlightCard */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {REVIEWS.map((rev) => (
            <SpotlightCard 
              key={rev.id}
              className="p-6 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B08D57] text-[#B08D57]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#006654] font-semibold flex items-center gap-1 bg-[#EBF7F4] px-2 py-0.5 rounded border border-[#C5E9E2]">
                    <CheckCircle className="w-3 h-3" />
                    {activeLang === 'ar' ? 'مريض موثق في جوجل' : 'Verified Google Patient'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1A1A1A]">{rev.author}</div>
                  <div className="text-[11px] text-[#B08D57] font-medium">{rev.service}</div>
                </div>
                <span className="text-[11px] text-[#888888]">{rev.date}</span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-normal text-[#1A1A1A]">
              {activeLang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-[#EFECE6] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex justify-between items-center gap-4 hover:bg-[#FAFAFA] cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A]">
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#B08D57]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#888888]" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs text-[#555555] leading-relaxed border-t border-[#F0ECE1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
