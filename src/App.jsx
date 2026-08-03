import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";

import React, { useState } from "react";
import { 
  clinicInfo, 
  servicesList, 
  transformationResults, 
  clientReviews, 
  faqList 
} from "./data/mock";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Calendar, 
  User, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  MessageCircle,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";
import { createConsultation } from "./api/consultation";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState("");
  
  // Consultation Form state
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 180) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast.error("Please fill in all mandatory fields (*)");
      return;
    }

    setIsSubmitting(true);
    try {
        await createConsultation(formData);
        setIsSubmitting(false);
        toast.success("Consultation Request Submitted Successfully! Dr. Wali Ahad's team will call you within 2 hours.");
        setFormData({ firstName: "", email: "", phone: "", message: "" });
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Something went wrong. Please call us directly at +91 9990364288");
    }
  };

  const openBookingFor = (serviceTitle) => {
    setBookingServiceTitle(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2C3E35] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1E4D2B] selection:text-white">
      <TopBar />
      
      <Navbar
  mobileMenuOpen={mobileMenuOpen}
  setMobileMenuOpen={setMobileMenuOpen}/>

      {/* HERO SECTION */}
      <section id="home" className="relative bg-gradient-to-b from-[#F4F1EA] to-[#FAFAFA] pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#1E4D2B] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-[#1E4D2B]" /> 100% Herbal & Chemical-Free Treatments
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E4D2B] leading-tight">
                Welcome to <span className="text-[#D4AF37] drop-shadow-sm">GUDWIN</span> Herbal Healthcare
              </h1>
              
              <p className="text-base sm:text-lg text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Your trusted destination for complete hair treatment and scalp care. We blend herbal medicine, modern hair restoration science, and personalized diagnosis to deliver visible, long-lasting results — without harmful chemicals or side effects.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  data-testid="hero-consultation-btn"
                  href="#consultation"
                  className="w-full sm:w-auto bg-[#1E4D2B] hover:bg-[#163820] text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-base"
                >
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  <span>Book Free Consultation</span>
                </a>
                
                <a 
                  data-testid="hero-chat-whatsapp"
                  href="https://wa.me/919990364288?text=Hello%20Dr.%20Wali%20Ahad,%20I%20would%20like%20to%20chat%20about%20my%20hair%20issues."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white hover:bg-stone-50 text-[#1E4D2B] border-2 border-[#1E4D2B] px-8 py-3.5 rounded-xl font-medium shadow-sm transition-all flex items-center justify-center gap-3 text-base"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Chat With Us</span>
                </a>
              </div>

              {/* Quick stats banner */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-stone-200/80 mt-8">
                {clinicInfo.stats.slice(0, 3).map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E4D2B]">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-stone-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#1E4D2B] to-[#D4AF37] rounded-3xl opacity-20 blur-lg"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    data-testid="hero-image"
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
                    alt="Dr Wali Ahad Herbal Hair Consultation"
                    className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                    <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Expert Care</div>
                    <div className="font-serif text-xl font-bold">Dr. Wali Ahad</div>
                    <p className="text-xs text-stone-200">Hair Restoration & Herbal Specialist</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" 
                  alt="Herbal hair treatment oils"
                  className="rounded-2xl shadow-md object-cover h-64 w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" 
                  alt="Consultation room"
                  className="rounded-2xl shadow-md object-cover h-64 w-full mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1E4D2B] text-white p-6 rounded-2xl shadow-xl hidden sm:block border border-[#D4AF37]">
                <div className="font-serif text-3xl font-bold text-[#D4AF37]">12+</div>
                <div className="text-xs uppercase tracking-wider text-emerald-100">Years Healing Scalp Disorders</div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#F4F1EA] text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                About Us
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B] leading-tight">
                Welcome to GUDWIN Herbal Healthcare
              </h2>
              
              <p className="text-stone-700 text-base leading-relaxed">
                At GUDWIN Herbal Healthcare, we blend herbal medicine, modern hair restoration science, and personalized diagnosis to deliver visible, long-lasting results — without harmful chemicals or side effects.
              </p>

              <p className="text-stone-700 text-base leading-relaxed">
                We understand that every scalp is unique. That’s why our treatments are customized to suit your hair type, scalp condition, and lifestyle. Led by Dr. Wali Ahad, our mission is to revive your confidence naturally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-[#1E4D2B] mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#2C3E35]">Customized Herbal Formulations</h4>
                    <p className="text-xs text-stone-500">Tailored to your specific root cause.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-[#1E4D2B] mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#2C3E35]">Zero Side Effects</h4>
                    <p className="text-xs text-stone-500">Pure natural herbs with no harsh steroids.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  data-testid="about-chat-btn"
                  href="https://wa.me/919990364288?text=Hello%20Dr.%20Wali%20Ahad,%20I%20want%20to%20know%20more%20about%20GUDWIN%20treatments." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white px-6 py-3 rounded-xl font-medium text-sm transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Chat With Us</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section id="services" className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
              Comprehensive Hair Treatment Solutions
            </h2>
            <p className="text-stone-600 text-base">
              We offer a complete range of herbal and clinical hair care services designed to stop hair fall, promote regrowth, and restore scalp health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div 
                key={service.id} 
                data-testid={`service-card-${service.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-stone-200 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1E4D2B]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {service.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#1E4D2B] text-xs font-bold px-2.5 py-1 rounded-md shadow">
                    {service.price}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1E4D2B] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {service.duration}
                    </span>
                    <button 
                      data-testid={`book-service-${service.id}`}
                      onClick={() => openBookingFor(service.title)}
                      className="bg-[#1E4D2B] hover:bg-[#163820] text-white px-4 py-2 rounded-lg text-xs font-medium transition-all shadow-sm flex items-center gap-1"
                    >
                      <span>Book Appointment</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MEET OUR EXPERT - DR. WALI AHAD */}
      <section id="expert" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E4D2B] to-[#14331d] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12 pointer-events-none">
              <Award className="w-96 h-96 text-[#D4AF37]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-4 text-center">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-[#D4AF37] rounded-3xl opacity-30 blur"></div>
                  <img 
                    data-testid="expert-photo"
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" 
                    alt="Dr. Wali Ahad"
                    className="relative rounded-2xl w-64 h-72 sm:w-72 sm:h-80 object-cover mx-auto shadow-2xl border-2 border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#D4AF37]/40">
                  Meet Our Expert
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {clinicInfo.expertName}
                </h2>
                
                <p className="text-[#D4AF37] font-medium text-lg">
                  {clinicInfo.expertTitle}
                </p>

                <p className="text-emerald-100 text-base sm:text-lg leading-relaxed font-normal">
                  {clinicInfo.expertBio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-emerald-800">
                    <div className="text-[#D4AF37] font-serif font-bold text-2xl">100%</div>
                    <div className="text-xs text-emerald-200">Natural & Herbal Safety</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-emerald-800">
                    <div className="text-[#D4AF37] font-serif font-bold text-2xl">500+</div>
                    <div className="text-xs text-emerald-200">Successful Regrowth Cases</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-emerald-800">
                    <div className="text-[#D4AF37] font-serif font-bold text-2xl">Mau, UP</div>
                    <div className="text-xs text-emerald-200">Opp. Faizi Gate Clinic</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    data-testid="expert-contact-now"
                    href="#consultation" 
                    className="bg-[#D4AF37] hover:bg-[#c29f2f] text-[#1E4D2B] font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>Contact Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a 
                    data-testid="expert-call-now"
                    href={`tel:${clinicInfo.phone}`}
                    className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl transition-all border border-emerald-700 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{clinicInfo.phone}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
              Because your hair deserves the best of nature and science.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div data-testid="why-card-1" className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1E4D2B] flex items-center justify-center font-bold text-xl mb-4">
                🌿
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">100% Herbal & Safe</h3>
              <p className="text-stone-600 text-sm">Chemical-free, herbal treatments for effective and long-lasting results.</p>
            </div>

            <div data-testid="why-card-2" className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1E4D2B] flex items-center justify-center font-bold text-xl mb-4">
                🔍
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">Personalized Hair Analysis</h3>
              <p className="text-stone-600 text-sm">Customized plans based on detailed scalp and root diagnosis.</p>
            </div>

            <div data-testid="why-card-3" className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1E4D2B] flex items-center justify-center font-bold text-xl mb-4">
                🔬
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">Advanced Hair Solutions</h3>
              <p className="text-stone-600 text-sm">From PRP therapy to herbal extracts — science meets tradition for natural results.</p>
            </div>

            <div data-testid="why-card-4" className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1E4D2B] flex items-center justify-center font-bold text-xl mb-4">
                ✨
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">Long-Lasting Results</h3>
              <p className="text-stone-600 text-sm">Treats the root cause of hair fall for stronger, healthier regrowth.</p>
            </div>

            <div data-testid="why-card-5" className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1E4D2B] flex items-center justify-center font-bold text-xl mb-4">
                🏥
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">Safe & Comfortable Clinic</h3>
              <p className="text-stone-600 text-sm">Hygienic environment with modern equipment for a stress-free experience.</p>
            </div>

            <div data-testid="why-card-6" className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1E4D2B] flex items-center justify-center font-bold text-xl mb-4">
                💎
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">Affordable & Transparent</h3>
              <p className="text-stone-600 text-sm">Premium care at fair prices with no hidden charges and flexible options.</p>
            </div>

            <div data-testid="why-card-7" className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all md:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1E4D2B] flex items-center justify-center font-bold text-xl mb-4">
                🌟
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">Trusted Transformations</h3>
              <p className="text-stone-600 text-sm">Thousands of clients have regained confidence with our herbal-scientific approach under Dr. Wali Ahad.</p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a 
              data-testid="why-enquiry-btn"
              href="#consultation"
              className="inline-flex items-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white px-8 py-4 rounded-xl font-medium shadow-md transition-all"
            >
              <span>Enquiry Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* 1-MONTH HERBAL HAIR TREATMENT COURSE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-900 to-[#1E4D2B] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="bg-[#D4AF37] text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Special Program
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                1-Month Herbal Hair Treatment Course
              </h2>
              <p className="text-emerald-100 text-base leading-relaxed">
                Begin your journey to stronger, healthier, and thicker hair with Dr. Wali Ahad’s specially designed 30-day herbal program. Includes root tonic, anti-hair fall herbal packs, and personalized diet guidance.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-[#D4AF37] font-semibold">
                  <CheckCircle2 className="w-5 h-5" /> 30-Day Guaranteed Root Renewal
                </div>
                <div className="flex items-center gap-2 text-sm text-[#D4AF37] font-semibold">
                  <CheckCircle2 className="w-5 h-5" /> Free Expert Follow-up
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <a 
                data-testid="course-enroll-btn"
                href="#consultation"
                className="bg-[#D4AF37] hover:bg-[#c29f2f] text-[#1E4D2B] font-bold px-8 py-4 rounded-xl shadow-lg transition-all inline-flex items-center gap-2 text-base"
              >
                <span>Enroll in 30-Day Course</span>
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HAIR TRANSFORMATION RESULTS GALLERY */}
      <section id="transformations" className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Success Stories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
              Hair Transformation Results
            </h2>
            <p className="text-stone-600 text-base">
              Real patients. Real results. Experience the natural regrowth achieved with Dr. Wali Ahad’s expert care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transformationResults.map((res) => (
              <div 
                key={res.id} 
                data-testid={`transformation-${res.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 flex flex-col"
              >
                <div className="grid grid-cols-2 gap-1 bg-stone-100 p-2">
                  <div className="relative">
                    <img src={res.beforeImage} alt="Before treatment" className="w-full h-48 object-cover rounded-lg" />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">BEFORE</span>
                  </div>
                  <div className="relative">
                    <img src={res.afterImage} alt="After treatment" className="w-full h-48 object-cover rounded-lg" />
                    <span className="absolute bottom-2 left-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">AFTER ({res.duration})</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold mb-1">{res.issue}</div>
                    <h3 className="font-serif font-bold text-lg text-[#1E4D2B]">{res.patientName}</h3>
                    <p className="text-stone-600 text-sm mt-2 italic">"{res.testimonial}"</p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Verified Regrowth
                    </span>
                    <span className="text-xs text-stone-500 font-semibold">{res.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLIENT REVIEWS TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Client Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
              See What Our Happy Clients Say About Their Hair Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientReviews.map((rev) => (
              <div 
                key={rev.id} 
                data-testid={`review-card-${rev.id}`}
                className="bg-[#FAFAFA] p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between space-y-4 relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1E4D2B]">{rev.name}</h4>
                    <p className="text-xs text-stone-500">{rev.location}</p>
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section id="faq" className="py-20 bg-[#F4F1EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-base">
              Find quick answers about our hair treatments and herbal care.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  data-testid={`faq-item-${idx}`}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left font-serif font-bold text-base sm:text-lg text-[#1E4D2B] flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-full bg-emerald-50 text-[#1E4D2B] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BOOK YOUR FREE HAIR CONSULTATION & CONTACT FORM */}
      <section id="consultation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Book Consultation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
                Book Your Free Hair Consultation
              </h2>
              <p className="text-stone-700 text-base leading-relaxed">
                Get expert advice from Dr. Wali Ahad — start your journey to natural, healthy hair today! Fill out the form or reach us via phone or email.
              </p>

              <div className="space-y-4 pt-4">
                <a data-testid="contact-phone-link" href={`tel:${clinicInfo.phone}`} className="flex items-center gap-4 p-4 bg-[#F4F1EA] rounded-2xl hover:bg-emerald-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#1E4D2B] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Helpline No.</div>
                    <div className="font-serif font-bold text-lg text-[#1E4D2B]">{clinicInfo.phone}</div>
                  </div>
                </a>

                <a data-testid="contact-email-link" href={`mailto:${clinicInfo.email}`} className="flex items-center gap-4 p-4 bg-[#F4F1EA] rounded-2xl hover:bg-emerald-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#1E4D2B] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Email Us</div>
                    <div className="font-serif font-bold text-lg text-[#1E4D2B]">{clinicInfo.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-[#F4F1EA] rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-[#1E4D2B] text-[#D4AF37] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Location</div>
                    <div className="font-serif font-bold text-sm text-[#1E4D2B] leading-snug mt-0.5">{clinicInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div id="contact" className="lg:col-span-6 bg-[#FAFAFA] p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#1E4D2B] mb-2">Enquiry Drop Now</h3>
              <p className="text-stone-600 text-sm mb-6">Enter your details and our clinic coordinator will call you back shortly.</p>

              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">First Name *</label>
                  <input 
                    data-testid="consultation-firstname-input"
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-[#1E4D2B] bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Email Address *</label>
                  <input 
                    data-testid="consultation-email-input"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-[#1E4D2B] bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Phone Number *</label>
                  <input 
                    data-testid="consultation-phone-input"
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 9999999999"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-[#1E4D2B] bg-white text-sm"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-semibold text-stone-700 uppercase">Message / Hair Concerns</label>
                    <span className="text-xs text-stone-400">{formData.message.length} / 180</span>
                  </div>
                  <textarea 
                    data-testid="consultation-message-input"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Describe your hair fall or scalp problem..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-[#1E4D2B] bg-white text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  data-testid="consultation-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1E4D2B] hover:bg-[#163820] text-white py-4 rounded-xl font-medium text-base shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#14331d] text-emerald-100 pt-16 pb-12 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-emerald-800">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#1E4D2B] flex items-center justify-center font-bold text-xl shadow">
                  G
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-white block">GUDWIN</span>
                  <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold block -mt-1">Herbal Healthcare</span>
                </div>
              </div>
              <p className="text-xs text-emerald-200 leading-relaxed">
                GUDWIN Herbal Healthcare is a trusted centre for natural hair restoration and scalp care. Guided by Dr. Wali Ahad, we blend Ayurvedic wisdom with modern hair treatment methods to help you regain healthy, strong, and beautiful hair — naturally.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Service</a></li>
                <li><a href="#expert" className="hover:text-[#D4AF37] transition-colors">Dr. Wali Ahad</a></li>
                <li><a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Testimonial</a></li>
                <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact us</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-white">Helpline & Email</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-[#D4AF37] font-semibold block uppercase">Helpline No.</span>
                  <a href={`tel:${clinicInfo.phone}`} className="font-bold text-white hover:underline">{clinicInfo.phone}</a>
                </div>
                <div>
                  <span className="text-xs text-[#D4AF37] font-semibold block uppercase">Email Now</span>
                  <a href={`mailto:${clinicInfo.email}`} className="font-bold text-white hover:underline">{clinicInfo.email}</a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-white">Location</h4>
              <p className="text-sm text-emerald-200 leading-relaxed">
                {clinicInfo.address}
              </p>
              <div className="pt-2">
                <a 
                  href="https://wa.me/919990364288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1E4D2B] px-4 py-2 rounded-lg text-xs font-bold hover:bg-amber-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Consult
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300">
            <div>© 2025 GUDWIN Herbal Healthcare. All Rights Reserved.</div>
            <div className="mt-4 sm:mt-0 flex items-center gap-4">
              <span className="text-[#D4AF37]">Guided by Dr. Wali Ahad</span>
              <span>Mau, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </footer>

      {/* SERVICE BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div data-testid="booking-modal" className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              data-testid="close-modal-btn"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="bg-emerald-100 text-[#1E4D2B] px-3 py-1 rounded-full text-xs font-bold uppercase">Appointment Request</span>
              <h3 className="font-serif text-2xl font-bold text-[#1E4D2B] mt-2">{bookingServiceTitle || "General Hair Treatment"}</h3>
              <p className="text-stone-600 text-xs mt-1">Book your session with Dr. Wali Ahad at GUDWIN Herbal Healthcare, Mau.</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              toast.success(`Appointment requested for "${bookingServiceTitle}". Our clinic team will call you within 1 hour to confirm.`);
              setBookingModalOpen(false);
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Your Full Name *</label>
                <input required type="text" placeholder="Enter full name" className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#1E4D2B]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Phone Number *</label>
                <input required type="tel" placeholder="+91 9999999999" className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#1E4D2B]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#1E4D2B]" />
              </div>
              <button 
                data-testid="confirm-booking-btn"
                type="submit" 
                className="w-full bg-[#1E4D2B] hover:bg-[#163820] text-white py-3.5 rounded-xl font-medium text-sm shadow transition-all"
              >
                Confirm Appointment Request
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
