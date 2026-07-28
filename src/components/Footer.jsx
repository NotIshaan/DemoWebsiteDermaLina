import React from 'react';
import { ShieldCheck, Phone, MapPin } from 'lucide-react';
import LogoEmblem from './LogoEmblem';
import { CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

export default function Footer({ onOpenBooking, activeLang = 'en' }) {
  const t = TRANSLATIONS[activeLang]?.footer || TRANSLATIONS.en.footer;
  const navT = TRANSLATIONS[activeLang]?.nav || TRANSLATIONS.en.nav;

  return (
    <footer className="bg-[#1A1A1A] text-slate-400 text-xs pt-14 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          
          <div className="lg:col-span-2 space-y-3">
            <LogoEmblem showText={true} activeLang={activeLang} className="[&_span]:text-white [&_span.font-serif]:text-[#B08D57]" />

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm pt-2">
              {t.desc}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 bg-white/10 text-slate-200 px-2.5 py-1 rounded text-[11px] border border-white/10 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B08D57]" />
                {t.dhaRegulated}
              </span>
              <span className="inline-flex items-center gap-1 bg-[#006654] text-white px-2.5 py-1 rounded text-[11px] font-bold">
                {t.tabbyZero}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-3">
              {t.navigationHeader}
            </h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-white transition-colors">{navT.overview}</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">{navT.treatmentsCount}</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">{navT.doctorsCount}</a></li>
              <li><a href="#insurance" className="hover:text-white transition-colors">{navT.insuranceCount}</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">{navT.reviewsRating}</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">{navT.location}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-3">
              {t.servicesHeader}
            </h4>
            <ul className="space-y-2">
              <li><a href="#treatments" className="hover:text-white transition-colors">{activeLang === 'ar' ? 'التقشير الكيميائي' : 'Chemical Peels'}</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">{activeLang === 'ar' ? 'إزالة الشعر بالليزر' : 'Laser Hair Epilation'}</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">{activeLang === 'ar' ? 'شد الوجه ببلازما جيت' : 'Jett Plasma Lift'}</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">{activeLang === 'ar' ? 'ميزوثرابي الشعر والبشرة' : 'Scalp Mesotherapy'}</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">{activeLang === 'ar' ? 'التقشير الألماسي' : 'Dermabrasion'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-3">
              {t.infoHeader}
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <span>2nd December St 16, Jumeirah Terrace Bldg, Dubai</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-white font-bold" dir="ltr">
                  {CLINIC_INFO.phone}
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenBooking}
              className="mt-4 w-full bg-[#B08D57] hover:bg-[#9A7947] text-white py-2.5 rounded-full font-bold text-xs transition-colors cursor-pointer"
            >
              {t.bookOnline}
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {t.rights}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">{t.privacy}</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">{t.directory}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
