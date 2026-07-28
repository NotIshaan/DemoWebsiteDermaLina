import React from 'react';
import { Phone, Clock, Navigation, Building, Car, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import SpotlightCard from './reactbits/SpotlightCard';

export default function LocationContact({ activeLang = 'en' }) {
  const t = TRANSLATIONS[activeLang]?.location || TRANSLATIONS.en.location;

  return (
    <section id="location" className="py-20 bg-white border-t border-[#EFECE6] relative">
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

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          <SpotlightCard className="lg:col-span-5 bg-[#FAFAFA] p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              <div>
                <h3 className="text-xl font-serif font-normal text-[#1A1A1A]">
                  {activeLang === 'ar' ? CLINIC_INFO.arabicName : CLINIC_INFO.name}
                </h3>
                <span className="text-xs text-[#B08D57] font-semibold">{CLINIC_INFO.license}</span>
              </div>

              {/* Address */}
              <div className="bg-white p-4 rounded-xl border border-[#EFECE6] space-y-2 text-xs text-[#333333]">
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block mb-0.5">{t.clinicAddress}</strong>
                    {CLINIC_INFO.address}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#666666] pl-6">
                  <Car className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>{t.parkingNote}</span>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-4 rounded-xl border border-[#EFECE6] text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#1A1A1A] font-bold">
                  <Clock className="w-4 h-4 text-[#B08D57]" />
                  <span>{t.openingHours}</span>
                </div>
                <div className="text-[#555555] pl-6">
                  <div>{CLINIC_INFO.hours.weekdays}</div>
                  <div>{CLINIC_INFO.hours.friday}</div>
                </div>
              </div>

              {/* Contacts */}
              <div className="space-y-2">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E5E2DA] text-xs font-semibold text-[#1A1A1A] hover:border-[#B08D57]"
                >
                  <Phone className="w-4 h-4 text-[#B08D57]" />
                  <span>{t.callReception} <span dir="ltr">{CLINIC_INFO.phone}</span></span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#EBF7F4] border border-[#C5E9E2] text-xs font-semibold text-[#006654]"
                >
                  <MessageSquare className="w-4 h-4 text-[#006654]" />
                  <span>{t.whatsappDesk}</span>
                </a>
              </div>

            </div>

            <a
              href="https://maps.google.com/?q=Derma+Lina+Polyclinic+LLC+Jumeirah+Dubai"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#B08D57] hover:bg-[#9A7947] text-white py-3.5 rounded-xl font-bold text-xs shadow-2xs flex items-center justify-center gap-2 text-center cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              {t.openGoogleMaps}
            </a>
          </SpotlightCard>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E5E2DA] min-h-[380px]">
            <iframe 
              title="DermaLina Location Map"
              src={CLINIC_INFO.googleMapsEmbed}
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
