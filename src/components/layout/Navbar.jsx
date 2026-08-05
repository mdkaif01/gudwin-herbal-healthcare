import { Calendar, Menu, X } from "lucide-react";

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <>
      {/* STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a data-testid="nav-logo" href="#" className="flex items-center gap-3">
            <a
              data-testid="nav-logo"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="flex items-center"
            >
              <img
                src="/gudwinlogo.webp"
                alt="GUDWIN Herbal Healthcare"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </a>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-[#2C3E35]">
            <a data-testid="nav-home" href="#home" className="hover:text-[#1E4D2B] transition-colors">Home</a>
            <a data-testid="nav-about" href="#about" className="hover:text-[#1E4D2B] transition-colors">About Us</a>
            <a data-testid="nav-services" href="#services" className="hover:text-[#1E4D2B] transition-colors">Service</a>
            <a data-testid="nav-expert" href="#expert" className="hover:text-[#1E4D2B] transition-colors">Dr. Wali Ahad</a>
            <a data-testid="nav-transformations" href="#transformations" className="hover:text-[#1E4D2B] transition-colors">Results</a>
            <a data-testid="nav-testimonials" href="#testimonials" className="hover:text-[#1E4D2B] transition-colors">Testimonial</a>
            <a data-testid="nav-faq" href="#faq" className="hover:text-[#1E4D2B] transition-colors">FAQ</a>
            <a data-testid="nav-contact" href="#contact" className="hover:text-[#1E4D2B] transition-colors">Contact us</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a 
              data-testid="nav-enquiry-btn" 
              href="#consultation" 
              className="bg-[#1E4D2B] hover:bg-[#163820] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Enquiry Drop Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-[#1E4D2B] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div data-testid="mobile-menu" className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl">
            <a onClick={() => setMobileMenuOpen(false)} href="#home" className="block text-base font-medium text-stone-800 hover:text-[#1E4D2B]">Home</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="block text-base font-medium text-stone-800 hover:text-[#1E4D2B]">About Us</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#services" className="block text-base font-medium text-stone-800 hover:text-[#1E4D2B]">Service</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#expert" className="block text-base font-medium text-stone-800 hover:text-[#1E4D2B]">Dr. Wali Ahad</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#transformations" className="block text-base font-medium text-stone-800 hover:text-[#1E4D2B]">Hair Transformation Results</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#testimonials" className="block text-base font-medium text-stone-800 hover:text-[#1E4D2B]">Testimonial</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="block text-base font-medium text-stone-800 hover:text-[#1E4D2B]">FAQ</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block text-base font-medium text-stone-800 hover:text-[#1E4D2B]">Contact us</a>
            <div className="pt-2">
              <a 
                onClick={() => setMobileMenuOpen(false)} 
                href="#consultation" 
                className="w-full text-center block bg-[#1E4D2B] text-white py-3 rounded-xl font-medium shadow"
              >
                Enquiry Drop Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}