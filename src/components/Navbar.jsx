import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Globe, Menu, X } from 'lucide-react';
import LogoEmblem from './LogoEmblem';
import { CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';

export default function Navbar({ onOpenBooking, activeLang, toggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const t = TRANSLATIONS[activeLang]?.nav || TRANSLATIONS.en.nav;

  const navLinks = [
    { id: 'overview', label: t.overview, href: '#overview' },
    { id: 'treatments', label: t.treatments, href: '#treatments' },
    { id: 'doctors', label: t.doctors, href: '#doctors' },
    { id: 'insurance', label: t.insurance, href: '#insurance' },
    { id: 'reviews', label: t.reviews, href: '#reviews' },
    { id: 'location', label: t.location, href: '#location' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = ['overview', 'treatments', 'doctors', 'insurance', 'reviews', 'location'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-8">
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border border-[#E5E2DA] shadow-md py-2.5 px-6' 
          : 'bg-white/85 backdrop-blur-md border border-[#EFECE6] py-3 px-6 shadow-xs'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <a href="#overview" className="shrink-0 mr-4">
            <LogoEmblem activeLang={activeLang} />
          </a>

          {/* Dynamic Translated Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 sm:gap-6 text-xs font-semibold tracking-wide text-[#333333]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-[#B08D57] ${
                    isActive ? 'text-[#B08D57] font-bold' : 'text-[#333333]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B08D57] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Clean Right Actions */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Language Switcher Button */}
            <button 
              onClick={toggleLang}
              className="text-xs font-semibold text-[#4A4A4A] hover:text-[#1A1A1A] px-3.5 py-1.5 rounded-full border border-[#E5E2DA] hover:border-[#B08D57] transition-all flex items-center gap-1.5 bg-white shadow-2xs cursor-pointer"
              title={activeLang === 'en' ? 'Switch to Arabic' : 'التحويل إلى الإنجليزية'}
            >
              <Globe className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>{activeLang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Direct Phone Link */}
            <a 
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-xs font-semibold text-[#1A1A1A] hover:text-[#B08D57] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
              <span dir="ltr">{CLINIC_INFO.phone}</span>
            </a>

            {/* Single Accent Warm Gold Button */}
            <button
              onClick={onOpenBooking}
              className="bg-[#B08D57] hover:bg-[#9A7947] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs transform hover:scale-[1.02] cursor-pointer"
            >
              {t.bookConsultation}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#B08D57] rounded-lg border border-[#E5E2DA]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown with full language support */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 mt-3 border-t border-[#EFECE6] space-y-2 text-xs font-semibold text-[#1A1A1A]">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-[#F5F3EE] rounded-lg hover:text-[#B08D57]">{t.overview}</a>
            <a href="#treatments" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-[#F5F3EE] rounded-lg hover:text-[#B08D57]">{t.treatmentsCount}</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-[#F5F3EE] rounded-lg hover:text-[#B08D57]">{t.doctorsCount}</a>
            <a href="#insurance" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-[#F5F3EE] rounded-lg hover:text-[#B08D57]">{t.insuranceCount}</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-[#F5F3EE] rounded-lg hover:text-[#B08D57]">{t.reviewsRating}</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 hover:bg-[#F5F3EE] rounded-lg hover:text-[#B08D57]">{t.location}</a>
            
            <div className="pt-3 flex items-center justify-between gap-3 border-t border-[#EFECE6]">
              <button 
                onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
                className="text-xs font-semibold text-[#1A1A1A] px-4 py-2 rounded-full border border-[#E5E2DA] flex items-center gap-1.5 bg-white"
              >
                <Globe className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>{activeLang === 'en' ? 'العربية' : 'English'}</span>
              </button>
              
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="bg-[#B08D57] text-white px-5 py-2 rounded-full font-bold shadow-xs"
              >
                {t.bookAppointment}
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
