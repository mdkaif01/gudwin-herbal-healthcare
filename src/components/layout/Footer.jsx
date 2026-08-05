import { MessageCircle } from "lucide-react";
import { clinicInfo } from "../../data";

export default function Footer() {
  return (
    <footer className="bg-[#14331d] text-emerald-100 pt-16 pb-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-emerald-800">

          {/* Brand */}

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#1E4D2B] flex items-center justify-center font-bold text-xl">
                G
              </div>

              <div>
                <span className="font-serif font-bold text-lg text-white block">
                  GUDWIN
                </span>

                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Herbal Healthcare
                </span>
              </div>

            </div>

            <p className="text-xs text-emerald-200 leading-relaxed">
              GUDWIN Herbal Healthcare is a trusted centre for natural hair
              restoration and scalp care. Guided by Dr. Wali Ahad, we blend
              Ayurvedic wisdom with modern hair treatment methods.
            </p>

          </div>

          {/* Quick Links */}

          <div className="space-y-4">

            <h4 className="font-serif font-bold text-base text-white">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">

              <li><a href="#home" className="hover:text-[#D4AF37]">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37]">About Us</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37]">Services</a></li>
              <li><a href="#expert" className="hover:text-[#D4AF37]">Dr. Wali Ahad</a></li>
              <li><a href="#testimonials" className="hover:text-[#D4AF37]">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37]">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div className="space-y-4">

            <h4 className="font-serif font-bold text-base text-white">
              Contact
            </h4>

            <div className="space-y-3">

              <div>

                <span className="text-xs text-[#D4AF37] uppercase font-semibold">
                  Phone
                </span>

                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="block text-white font-semibold"
                >
                  {clinicInfo.phone}
                </a>

              </div>

              <div>

                <span className="text-xs text-[#D4AF37] uppercase font-semibold">
                  Email
                </span>

                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="block text-white font-semibold"
                >
                  {clinicInfo.email}
                </a>

              </div>

            </div>

          </div>

          {/* Address */}

          <div className="space-y-4">

            <h4 className="font-serif font-bold text-base text-white">
              Location
            </h4>

            <p className="text-sm text-emerald-200">
              {clinicInfo.address}
            </p>

            <a
              href="https://wa.me/919990364288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1E4D2B] px-4 py-2 rounded-lg font-semibold hover:bg-amber-400"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Consult
            </a>

          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-emerald-300">

          <span>
            © 2025 GUDWIN Herbal Healthcare. All Rights Reserved.
          </span>

          <span className="mt-3 sm:mt-0">
            Guided by Dr. Wali Ahad • Mau, Uttar Pradesh
          </span>

        </div>

      </div>
    </footer>
  );
}