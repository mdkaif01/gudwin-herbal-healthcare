import { clinicInfo } from "../../data";

export default function Footer() {
  return (
    <footer className="bg-[#14331d] text-emerald-100 pt-16 pb-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 border-b border-emerald-800">

          {/* Brand */}

          <div className="space-y-5">

            <div className="flex items-center">
              <img
                src="public/gudwinlogo.webp"
                alt="GUDWIN Herbal Healthcare"
                className="w-40 sm:w-44 h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-xs text-emerald-200 leading-relaxed max-w-sm">
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

          </div>

        </div>

        <div className="pt-6 text-center text-xs text-emerald-300">
          <span>
            © 2026 GUDWIN Herbal Healthcare. All Rights Reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}