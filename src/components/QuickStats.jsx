import React from 'react';
import { Star, Shield, Award, CreditCard } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function QuickStats({ activeLang = 'en' }) {
  const t = TRANSLATIONS[activeLang]?.quickStats || TRANSLATIONS.en.quickStats;

  const stats = [
    {
      icon: Star,
      value: "4.7 / 5.0",
      label: activeLang === 'ar' ? 'تقييم مرضى جوجل' : 'Google Patient Rating',
      subtext: activeLang === 'ar' ? 'من 68 تقييماً موثقاً' : 'From 68 Verified Reviews'
    },
    {
      icon: Award,
      value: t.expertDoctors,
      label: activeLang === 'ar' ? 'خبرة الطاقم الطبي' : 'Doctor Experience',
      subtext: t.expertDoctorsSub
    },
    {
      icon: Shield,
      value: t.dhaLicensed,
      label: activeLang === 'ar' ? 'منشأة مرخصة رسمياً' : 'Government Facility',
      subtext: t.dhaLicensedSub
    },
    {
      icon: CreditCard,
      value: t.insuranceBilling,
      label: activeLang === 'ar' ? 'تسوية مباشرة' : 'Direct Settlement',
      subtext: t.insuranceBillingSub
    }
  ];

  return (
    <section className="py-10 bg-white border-y border-[#EFECE6] relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-[#FAFAFA] p-5 rounded-2xl border border-[#E5E2DA] flex items-center gap-4 hover:border-[#B08D57] transition-all">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#E5E2DA] text-[#B08D57] shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-serif font-normal text-[#1A1A1A]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#1A1A1A]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#666666]">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
