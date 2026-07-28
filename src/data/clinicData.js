export const CLINIC_INFO = {
  name: "Derma Lina Polyclinic LLC",
  shortName: "Derma Lina",
  arabicName: "عيادة ديرما لينا بولي كلينيك",
  tagline: "Premier Dermatology & Aesthetic Excellence in Jumeirah",
  license: "DHA Licensed Facility (Dubai Health Authority)",
  rating: 4.7,
  reviewsCount: 68,
  address: "2nd December Street 16, Jumeirah Terrace Building, Al Hudaiba / Jumeirah 1, Dubai, UAE",
  locationShort: "Jumeirah 1, Dubai",
  phone: "+971 4 236 6371",
  phoneRaw: "+97142366371",
  whatsapp: "+971542366371",
  email: "info@dermalinapolyclinic.ae",
  hours: {
    weekdays: "Saturday – Thursday: 9:00 AM – 9:00 PM",
    friday: "Friday: 2:00 PM – 9:00 PM",
    status: "Confirmed Opening Times • Published Hours"
  },
  paymentMethods: ["Cash", "Credit/Debit Cards", "Tabby (4 Installments 0% Interest)", "Insurance Direct Billing"],
  languages: ["English", "Arabic", "French"],
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.43105470217!2d55.2638843!3d25.2392766!2m3!1f02f00f03f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4305ec7fa7bd%3A0xb36cb7e99708709e!2sJumeirah%20Terrace%20Building!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
};

export const DOCTORS = [
  {
    id: "dr-lina-houssami",
    name: "Dr. Lina Houssami",
    arabicName: "د. لينا حسامي",
    title: "Senior Dermatologist & Aesthetic Specialist",
    degree: "Medical Degree, Faculty of Medicine, Université René Descartes (Paris, France)",
    experience: "30 Years Experience Overall",
    specialties: ["Dermatology", "Medical Chemical Peels", "Jett Plasma Lift", "Anti-Aging Aesthetics", "Laser Dermatology"],
    consultation: "Free Initial Consultation Available",
    availability: "On-Call / By Appointment",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Lina Houssami is a world-renowned Senior Dermatologist with over three decades of clinical practice across Europe and the Middle East. Graduating from the prestigious Université René Descartes in Paris, Dr. Lina specializes in non-surgical facial rejuvenation, customized chemical peels, and advanced laser protocols tailored for all skin types.",
    badges: ["30+ Yrs Exp", "Paris Faculty Alumna", "DHA Licensed"]
  },
  {
    id: "dr-reham-al-hamdullah",
    name: "Dr. Reham Abdullah Al Hamdullah",
    arabicName: "د. ريهام عبد الله الحمد لله",
    title: "General Physician & Internal Medicine Practitioner",
    degree: "MBBS, General Medicine & Public Health Practitioner",
    experience: "4 Years Experience Overall",
    specialties: ["General Physician", "General Practitioner", "Internal Medicine", "Preventative Health", "Skin & Wellness"],
    consultation: "Free Initial Consultation Available",
    availability: "On-Call / By Appointment",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Reham Abdullah Al Hamdullah provides comprehensive medical consultations, general outpatient care, and internal medicine diagnostics. Working closely alongside the aesthetic dermatologists, Dr. Reham ensures patients receive holistic care connecting internal metabolic health with radiant skin wellness.",
    badges: ["Internal Med Specialist", "Multilingual", "DHA Licensed"]
  }
];

export const TREATMENTS = [
  {
    id: "chemical-peel",
    title: "Superficial, Medium & Deep Chemical Peels",
    category: "Dermatology",
    shortDesc: "Medical-grade exfoliative treatment to clear hyperpigmentation, acne scars, fine lines, and uneven tone.",
    fullDesc: "Our chemical peel treatments utilize precise pharmaceutical formulations (Glycolic, TCA, Salicylic, and Jessner solutions) customized for your Fitzpatrick skin type. Supervised by Dr. Lina Houssami to reveal fresh, glowing skin with minimal downtime.",
    duration: "45 Mins",
    downtime: "2-5 Days",
    icon: "Sparkles",
    popular: true,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    benefits: ["Fades melasma & sun spots", "Refines pore texture", "Boosts collagen production", "Safe for sensitive skin"]
  },
  {
    id: "laser-hair-removal",
    title: "GentleMax Pro Laser Hair Removal & Epilation",
    category: "Laser Hair Removal",
    shortDesc: "Pain-free medical laser epilation using dual wavelength technology for all skin tones.",
    fullDesc: "Experience permanent hair reduction with state-of-the-art cooling laser epilation. Target unwanted hair on face, legs, arms, and full body with maximum comfort and zero ingrown hairs.",
    duration: "30 - 60 Mins",
    downtime: "None",
    icon: "Zap",
    popular: true,
    image: "https://images.unsplash.com/photo-1512290900673-7002fe5cdc6a?auto=format&fit=crop&w=800&q=80",
    benefits: ["95%+ permanent hair reduction", "Integrated dynamic cooling device", "Safe for dark & tanned skin", "Quick sessions"]
  },
  {
    id: "jett-plasma-lift",
    title: "Jett Plasma Medical Lift",
    category: "Aesthetics",
    shortDesc: "Non-surgical eyelid tightening, blepharoplasty, and wrinkle smoothing with DC plasma electrical discharge.",
    fullDesc: "Jett Plasma Medical Lift uses direct-current plasma beam discharge to contract collagen fibers and instantly tighten sagging skin. Perfect alternative to surgical blepharoplasty for upper eyelids, crow's feet, and smoker's lines.",
    duration: "60 Mins",
    downtime: "3-7 Days",
    icon: "Activity",
    popular: true,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    benefits: ["Non-surgical eyelid lift", "Zero incisions or sutures", "Instant skin tightening", "Long-lasting 2+ year results"]
  },
  {
    id: "mesotherapy",
    title: "Mesotherapy & Hair Loss Revival",
    category: "Beautician",
    shortDesc: "Micro-injections of potent vitamins, amino acids, and growth factors into skin & scalp.",
    fullDesc: "Stimulate micro-circulation and nourish skin at the cellular level. Scalp mesotherapy halts hair shedding and reactivates dormant hair follicles, while facial mesotherapy imparts deep hydration and immediate glass-skin luminosity.",
    duration: "45 Mins",
    downtime: "Minimal (24 hrs)",
    icon: "Feather",
    popular: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    benefits: ["Stops excessive hair shedding", "Deep cellular hydration", "Custom cocktail formulas", "Enhances skin firmness"]
  },
  {
    id: "dermabrasion",
    title: "Medical Dermabrasion & Diamond Resurfacing",
    category: "Dermatology",
    shortDesc: "Mechanical exfoliation to smooth deep acne scars, surgical marks, and stubborn wrinkles.",
    fullDesc: "A controlled clinical resurfacing technique that gently removes damaged outer skin layers to encourage rapid epidermic renewal. Combined with LED light therapy for accelerated healing.",
    duration: "60 Mins",
    downtime: "3-5 Days",
    icon: "Sun",
    popular: false,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    benefits: ["Smoothes deep acne scarring", "Evens out rough skin texture", "Promotes fresh elastic skin", "Instant clarity"]
  },
  {
    id: "hair-transplant",
    title: "Hair Transplants & Follicular Scalp Therapy",
    category: "General Health",
    shortDesc: "Advanced hair restoration procedures & scalp conditioning for natural density.",
    fullDesc: "Comprehensive hair loss diagnostics and restoration programs. Combining PRP platelet therapy, micro-grafting consultations, and hair health maintenance under specialist guidance.",
    duration: "Consultation Required",
    downtime: "Varies",
    icon: "ShieldCheck",
    popular: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    benefits: ["Natural hair density regrowth", "Permanent follicular restoration", "DHA certified environment", "Comprehensive follow-up"]
  }
];

export const INSURANCES = [
  { name: "Daman Health Insurance", code: "DAMAN", tier: "Direct Billing", icon: "🛡️" },
  { name: "Thiqa Insurance", code: "THIQA", tier: "Direct Billing", icon: "⭐" },
  { name: "NextCare", code: "NEXTCARE", tier: "Direct Billing", icon: "🏥" },
  { name: "MetLife Gulf", code: "METLIFE", tier: "Direct Billing", icon: "🌐" },
  { name: "Sukoon (Oman Insurance)", code: "SUKOON", tier: "Direct Billing", icon: "💎" },
  { name: "AXA / GIG Gulf", code: "GIG", tier: "Direct Billing", icon: "🤝" },
  { name: "Cigna Middle East", code: "CIGNA", tier: "Direct Billing", icon: "🛡️" },
  { name: "ADNIC (Abu Dhabi National)", code: "ADNIC", tier: "Direct Billing", icon: "🏛️" },
  { name: "Al Koot Insurance", code: "ALKOOT", tier: "Direct Billing", icon: "✨" },
  { name: "Neuron Insurance", code: "NEURON", tier: "Direct Billing", icon: "🧠" },
  { name: "MedNet UAE", code: "MEDNET", tier: "Direct Billing", icon: "➕" },
  { name: "Alliance Insurance", code: "ALLIANCE", tier: "Direct Billing", icon: "🌿" },
  { name: "Aetna International", code: "AETNA", tier: "Direct Billing", icon: "🌍" },
  { name: "Bupa Global", code: "BUPA", tier: "Direct Billing", icon: "👑" },
  { name: "Dubai Insurance", code: "DUBAI_INS", tier: "Direct Billing", icon: "🏙️" },
  { name: "Orient Insurance", code: "ORIENT", tier: "Direct Billing", icon: "☀️" },
  { name: "Saico Health", code: "SAICO", tier: "Direct Billing", icon: "💚" },
  { name: "Warda Healthcare", code: "WARDA", tier: "Direct Billing", icon: "🌸" },
  { name: "MSH International", code: "MSH", tier: "Direct Billing", icon: "✈️" },
  { name: "FMC Network", code: "FMC", tier: "Direct Billing", icon: "🔗" },
  { name: "NAS Administration", code: "NAS", tier: "Direct Billing", icon: "📊" },
  { name: "Inayah TPA", code: "INAYAH", tier: "Direct Billing", icon: "🤍" },
  { name: "MaxCare TPA", code: "MAXCARE", tier: "Direct Billing", icon: "⚡" },
  { name: "Pentacare TPA", code: "PENTACARE", tier: "Direct Billing", icon: "🔮" }
];

export const REVIEWS = [
  {
    id: 1,
    author: "Fatima Al Mansoori",
    rating: 5,
    date: "2 weeks ago",
    service: "Chemical Peel & Aesthetic Consultation",
    comment: "Dr. Lina Houssami is an absolute magician with skin! I had dark spots from sun exposure, and after 2 customized chemical peel sessions my skin looks completely renewed. The staff in Jumeirah are super welcoming and professional.",
    avatar: "FA"
  },
  {
    id: 2,
    author: "Sarah Jenkins",
    rating: 5,
    date: "1 month ago",
    service: "Laser Hair Removal & Epilation",
    comment: "Best laser experience in Dubai! Painless, fast, and the GentleMax Pro machine is top of the line. Also loved that they accept my Daman insurance with Tabby split payments for aesthetic add-ons.",
    avatar: "SJ"
  },
  {
    id: 3,
    author: "Mohammed K. Al-Hashimi",
    rating: 5,
    date: "3 weeks ago",
    service: "Jett Plasma Lift & Skin Tightening",
    comment: "I was skeptical about non-surgical eyelid lifts until I consulted Dr. Lina. The Jett Plasma procedure took under an hour and the tightening effect is incredible without any surgical downtime.",
    avatar: "MK"
  },
  {
    id: 4,
    author: "Elena Rostova",
    rating: 5,
    date: "2 months ago",
    service: "General Outpatient & Mesotherapy",
    comment: "Dr. Reham Al Hamdullah was so thorough with my general health checkup before setting up my scalp mesotherapy routine. Truly caring polyclinic with pristine European standards.",
    avatar: "ER"
  }
];

export const FAQS = [
  {
    question: "Where is Derma Lina Polyclinic located and is parking available?",
    answer: "We are located on 2nd December Street 16 in the Jumeirah Terrace Building, Al Hudaiba / Jumeirah 1, Dubai. Dedicated building parking and street parking are readily accessible."
  },
  {
    question: "Do I need an advance appointment or do you accept walk-ins?",
    answer: "We welcome both walk-in patients and pre-booked appointments. However, to guarantee consultation time with Dr. Lina Houssami, we recommend booking an appointment online or calling +971 4 236 6371."
  },
  {
    question: "Which insurance plans do you accept for direct billing?",
    answer: "Derma Lina Polyclinic accepts over 24 major insurance networks including Daman, Thiqa, NextCare, MetLife, Sukoon, Cigna, ADNIC, and MedNet. You can search your insurance provider in our live insurance tool above."
  },
  {
    question: "Are payment plans like Tabby available for aesthetic procedures?",
    answer: "Yes! We support Tabby, allowing you to split your aesthetic and laser treatment packages into 4 easy monthly installments with 0% interest and zero hidden fees."
  },
  {
    question: "Are your doctors DHA licensed?",
    answer: "Yes, Derma Lina Polyclinic LLC is a fully regulated and licensed healthcare facility by the Dubai Health Authority (DHA), adhering to strict UAE clinical standards."
  }
];
