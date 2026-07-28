import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import Treatments from './components/Treatments';
import Doctors from './components/Doctors';
import BeforeAfter from './components/BeforeAfter';
import InsuranceChecker from './components/InsuranceChecker';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');

  const toggleLang = () => {
    setActiveLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    if (activeLang === 'ar') {
      document.title = "عيادة ديرما لينا بولي كلينيك | عيادة الجلدية والتجميل في جميرا، دبي";
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    } else {
      document.title = "DermaLina PolyClinic | Dermatology & Aesthetic Clinic in Jumeirah, Dubai";
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }
  }, [activeLang]);

  return (
    <div className={`min-h-screen bg-brand-offwhite text-[#1A1A1A] ${activeLang === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={activeLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Sticky Navbar */}
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)} 
        activeLang={activeLang}
        toggleLang={toggleLang}
      />

      <main>
        {/* Hero Banner with Interactive Booking Quick Card & ReactBits Components */}
        <Hero 
          onOpenBooking={() => setIsBookingOpen(true)} 
          activeLang={activeLang}
        />

        {/* Credentials & Metrics Bar */}
        <QuickStats activeLang={activeLang} />

        {/* 6 Surgeries & Treatments Catalog */}
        <Treatments 
          onOpenBooking={() => setIsBookingOpen(true)} 
          activeLang={activeLang}
        />

        {/* Doctor & Specialist Profiles */}
        <Doctors 
          onOpenBooking={() => setIsBookingOpen(true)} 
          activeLang={activeLang}
        />

        {/* Interactive Before & After Result Comparison */}
        <BeforeAfter activeLang={activeLang} />

        {/* 24 Direct Billing Insurance Checker */}
        <InsuranceChecker activeLang={activeLang} />

        {/* 4.7 Google Ratings & Patient Testimonials */}
        <Testimonials activeLang={activeLang} />

        {/* Location Map & Contact Details */}
        <LocationContact activeLang={activeLang} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => setIsBookingOpen(true)} 
        activeLang={activeLang}
      />

      {/* Global Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        activeLang={activeLang}
      />
    </div>
  );
}
