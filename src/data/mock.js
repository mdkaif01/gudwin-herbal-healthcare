// Mock data contract for GUDWIN Herbal Healthcare
// Future backend endpoints will replace these exports in Phase 2

export const clinicInfo = {
  name: "GUDWIN Herbal Healthcare",
  tagline: "Your trusted destination for complete hair treatment and scalp care",
  expertName: "Dr. Wali Ahad",
  expertTitle: "Hair Restoration & Herbal Care Specialist",
  expertBio: "Dr. Wali Ahad is a highly experienced expert in herbal & PRP care, known for blending natural therapy with modern science. He has successfully treated hundreds of patients suffering from hair loss, dandruff, premature greying, and other scalp disorders.",
  phone: "+91 9990364288",
  email: "gudwin.in@gmail.com",
  address: "Gudwin herbal health care Opp faizi gate , mirzahadipura mau Uttar Pradesh 275101",
  stats: [
    { label: "Client Reviews", value: "10,000+" },
    { label: "Successful Regrowth", value: "98%" },
    { label: "Years of Experience", value: "12+" },
    { label: "Expert Doctors", value: "Dr. Wali Ahad" }
  ]
};

// Replaces GET /api/services
export const servicesList = [
  {
    id: "herbal-hair-fall",
    title: "Herbal Hair Fall Treatment",
    category: "Herbal Therapy",
    description: "A customized herbal therapy to control excessive hair fall, strengthen follicles, and restore hair thickness naturally.",
    duration: "60 mins / session",
    price: "₹1,499 onwards",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    benefits: ["Stoppage of excessive hair fall", "Stronger root anchoring", "Zero chemical side effects"]
  },
  {
    id: "prp-therapy",
    title: "PRP (Platelet-Rich Plasma) Therapy",
    category: "Clinical Science",
    description: "A modern, non-surgical treatment that uses your own platelets to stimulate natural hair growth, improve density, and rejuvenate follicles.",
    duration: "90 mins / session",
    price: "₹3,999 onwards",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    benefits: ["Uses body's natural growth factors", "Stimulates dormant hair follicles", "Noticeable density increase"]
  },
  {
    id: "dandruff-scalp-detox",
    title: "Dandruff & Scalp Detox Treatment",
    category: "Scalp Health",
    description: "Deep-cleansing herbal therapy that removes flakes, oil buildup, and scalp infections — restoring a healthy environment for hair growth.",
    duration: "45 mins / session",
    price: "₹999 onwards",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
    benefits: ["Complete flake elimination", "Relief from itching and redness", "Unclogs scalp pores"]
  },
  {
    id: "ayurvedic-regrowth",
    title: "Ayurvedic & Herbal Regrowth Therapy",
    category: "Ayurvedic Wisdom",
    description: "Uses rare herbs and essential oils to boost blood circulation, nourish roots, and enhance regrowth naturally.",
    duration: "60 mins / session",
    price: "₹1,299 onwards",
    image: "https://images.unsplash.com/photo-1608248597359-9944d34a2f26?auto=format&fit=crop&w=800&q=80",
    benefits: ["Deep root nourishment", "Reverses premature thinning", "Promotes baby hair growth"]
  },
  {
    id: "post-treatment-care",
    title: "Post-Treatment Hair Care Maintenance",
    category: "Maintenance",
    description: "Follow-up sessions, scalp nourishment, and home-care regimens to maintain results and keep your hair strong, shiny, and healthy.",
    duration: "30 mins / session",
    price: "₹799 onwards",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    benefits: ["Long-lasting retention of results", "Personalized home kits", "Regular expert check-ins"]
  }
];

// Replaces GET /api/transformations
export const transformationResults = [
  {
    id: "1",
    patientName: "Rajesh Kumar (Mau)",
    issue: "Stage 3 Receding Hairline & Thinning",
    duration: "3 Months Program",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    testimonial: "Dr. Wali Ahad's herbal treatment worked wonders when conventional oils failed. My hair density is back!"
  },
  {
    id: "2",
    patientName: "Priya Singh (Varanasi)",
    issue: "Severe Hair Fall & Post-Partum Thinning",
    duration: "2 Months Course",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    testimonial: "The scalp detox and herbal therapy stopped my hair fall within 3 weeks. Extremely grateful to GUDWIN."
  },
  {
    id: "3",
    patientName: "Amit Verma (Azamgarh)",
    issue: "Stubborn Dandruff & Scalp Psoriasis",
    duration: "45 Days Detox",
    beforeImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
    testimonial: "No more embarrassing flakes or itching. The natural herbal oils prescribed are exceptionally pure."
  }
];

// Replaces GET /api/testimonials
export const clientReviews = [
  {
    id: "1",
    name: "Dr. Alok Srivastava",
    rating: 5,
    location: "Gorakhpur",
    comment: "As a medical professional, I was skeptical about herbal treatments. But Dr. Wali Ahad's scientific approach and deep knowledge blew me away. Exceptional clinic!",
    date: "12 June 2025"
  },
  {
    id: "2",
    name: "Sunita Devi",
    rating: 5,
    location: "Mau",
    comment: "My daughter had severe hair thinning during college. Within 30 days of Dr. Wali Ahad's herbal course, new baby hairs started sprouting. Truly magical!",
    date: "28 May 2025"
  },
  {
    id: "3",
    name: "Mohd. Tariq",
    rating: 5,
    location: "Lucknow",
    comment: "Best hair clinic in Eastern UP. Very hygienic environment, transparent pricing, and Dr. Wali Ahad gives personal attention to every single patient.",
    date: "15 April 2025"
  }
];

// Replaces GET /api/faqs
export const faqList = [
  {
    question: "What makes GUDWIN Herbal Healthcare different from other hair clinics?",
    answer: "We uniquely combine ancient Ayurvedic herbal wisdom with modern clinical scalp diagnostics (like PRP and root analysis). This ensures 100% natural, side-effect-free treatments that target the root cause of hair loss rather than just temporary masking."
  },
  {
    question: "Are your treatments completely natural?",
    answer: "Yes! Our herbal formulations are 100% chemical-free, prepared from rare Himalayan herbs, essential oils, and organic extracts certified for safety and high efficacy."
  },
  {
    question: "How long does it take to see visible results?",
    answer: "Most patients notice a significant reduction in hair fall within 15 to 21 days. New hair regrowth and scalp density improvements become visibly apparent within 6 to 12 weeks of consistent treatment."
  },
  {
    question: "What is PRP therapy and how does it help with hair growth?",
    answer: "PRP (Platelet-Rich Plasma) therapy is a non-surgical clinical procedure where your blood is centrifuged to extract concentrated growth factors, which are then gently micro-needled into the scalp to awaken dormant follicles."
  },
  {
    question: "Is Hair Transplant painful or risky?",
    answer: "Our advanced hair restoration techniques are performed under local anesthesia in a sterile clinical setup by expert hands, ensuring minimal discomfort, zero scarring, and natural hairline aesthetics."
  },
  {
    question: "Is consultation available online?",
    answer: "Yes! You can share scalp photographs via WhatsApp or our online enquiry form, and Dr. Wali Ahad will provide an initial video consultation and customized prescription."
  }
];
