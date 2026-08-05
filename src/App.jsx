import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Expert from "./components/sections/Expert";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import CourseBanner from "./components/sections/CourseBanner";
import Transformations from "./components/sections/Transformations";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Consultation from "./components/sections/Consultation";
import Footer from "./components/layout/Footer";
import BookingModal from "./components/modals/BookingModal";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";

import React, { useState } from "react";
import { toast } from "sonner";
import { createConsultation } from "./api/consultation";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

      toast.success(
        "Consultation Request Submitted Successfully! Dr. Wali Ahad's team will call you shortly."
      );

      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {

      toast.error(
        "Something went wrong. Please call us directly at +91 9990364288"
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  const openBookingFor = (serviceTitle) => {
    setBookingServiceTitle(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2C3E35] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1E4D2B] selection:text-white">
      
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Hero />

      <About />

      <Services openBookingFor={openBookingFor} />

      <Expert />

      <WhyChooseUs />

      <CourseBanner />

      <Transformations />

      <Testimonials />

      <FAQ />

      <Consultation
        formData={formData}
        handleInputChange={handleInputChange}
        handleConsultationSubmit={handleConsultationSubmit}
        isSubmitting={isSubmitting}
      />

      <Footer />

      <BookingModal
        bookingModalOpen={bookingModalOpen}
        setBookingModalOpen={setBookingModalOpen}
        bookingServiceTitle={bookingServiceTitle}
      />

      <FloatingWhatsApp />
      
    </div>
  );
}
