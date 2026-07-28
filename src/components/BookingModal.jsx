import React, { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { DOCTORS, TREATMENTS, INSURANCES, CLINIC_INFO } from '../data/clinicData';
import { TRANSLATIONS } from '../data/translations';
import SpotlightCard from './reactbits/SpotlightCard';

export default function BookingModal({ isOpen, onClose, activeLang = 'en' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: DOCTORS[0].id,
    treatment: TREATMENTS[0].id,
    date: '',
    time: '10:00 AM',
    insurance: 'None / Self-Pay',
    useTabby: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = TRANSLATIONS[activeLang]?.modal || TRANSLATIONS.en.modal;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const selectedDoctorObj = DOCTORS.find(d => d.id === formData.doctor);
  const selectedTreatmentObj = TREATMENTS.find(t => t.id === formData.treatment);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <SpotlightCard className="bg-white max-w-lg w-full rounded-2xl overflow-hidden relative border border-[#E5E2DA] my-8 shadow-xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#FAFAFA] p-2 rounded-full text-[#1A1A1A] hover:bg-[#E5E2DA] border border-[#E5E2DA] z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-7 space-y-5">
            
            <div className="text-center space-y-1">
              <span className="text-xs uppercase font-bold text-[#B08D57] tracking-wider">
                {t.tag}
              </span>
              <h3 className="text-2xl font-serif font-normal text-[#1A1A1A]">
                {t.title}
              </h3>
              <p className="text-xs text-[#666666]">
                {t.sub}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              
              <div>
                <label className="block font-semibold text-[#1A1A1A] mb-1">{t.practitioner}</label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                >
                  {DOCTORS.map(d => (
                    <option key={d.id} value={d.id}>{activeLang === 'ar' ? d.arabicName : d.name} ({d.title})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#1A1A1A] mb-1">{t.procedure}</label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                >
                  {TREATMENTS.map(tItem => (
                    <option key={tItem.id} value={tItem.id}>{tItem.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1A1A1A] mb-1">{t.preferredDate}</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1A1A1A] mb-1">{t.preferredTime}</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1A1A1A] mb-1">{t.fullName}</label>
                <input
                  type="text"
                  required
                  placeholder={t.fullName}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1A1A1A] mb-1">{t.phone}</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#1A1A1A] mb-1">{t.email}</label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1A1A1A] mb-1">{t.insurance}</label>
                <select
                  value={formData.insurance}
                  onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                  className="w-full bg-[#FAFAFA] border border-[#E5E2DA] rounded-xl px-3 py-2.5 text-[#1A1A1A] focus:border-[#B08D57] focus:outline-none"
                >
                  <option value="Self-Pay">{t.selfPay}</option>
                  {INSURANCES.map((ins, i) => (
                    <option key={i} value={ins.name}>{ins.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="tabbyCheck"
                  checked={formData.useTabby}
                  onChange={(e) => setFormData({ ...formData, useTabby: e.target.checked })}
                  className="accent-[#B08D57]"
                />
                <label htmlFor="tabbyCheck" className="text-[#555555] text-xs">
                  {t.tabbyCheckLabel} <strong>{t.tabbyCheckBold}</strong>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B08D57] hover:bg-[#9A7947] text-white py-3.5 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 mt-3 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                {t.submitBtn}
              </button>
            </form>

          </div>
        ) : (
          <div className="p-7 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#EBF7F4] text-[#006654] border border-[#C5E9E2] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#B08D57] uppercase tracking-wider">{t.requestReceived}</span>
              <h3 className="text-2xl font-serif font-normal text-[#1A1A1A] mt-0.5">
                {t.thankYou} {formData.name}!
              </h3>
              <p className="text-xs text-[#555555] mt-2 max-w-sm mx-auto">
                {t.confirmationMsg} <strong className="text-[#1A1A1A]"><span dir="ltr">{formData.phone}</span></strong> {t.toConfirmSlot} {selectedTreatmentObj?.title} {t.with} {selectedDoctorObj?.name}.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => { setIsSubmitted(false); onClose(); }}
                className="flex-1 bg-[#FAFAFA] hover:bg-[#E5E2DA] text-[#1A1A1A] py-3 rounded-xl font-bold text-xs border border-[#E5E2DA] cursor-pointer"
              >
                {t.closeBtn}
              </button>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20DermaLina%20PolyClinic,%20I%20just%20submitted%20a%20booking%20for%20${encodeURIComponent(formData.name)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#006654] hover:bg-[#005243] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs"
              >
                {t.whatsappBtn}
              </a>
            </div>
          </div>
        )}

      </SpotlightCard>
    </div>
  );
}
