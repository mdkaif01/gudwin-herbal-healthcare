import { Phone, Mail, Sparkles, MessageCircle } from "lucide-react";
import { clinicInfo } from "../../data/mock";

export default function TopBar() {
  return (
    <>
      {/* TOP EMERGENCY & CONTACT BAR */}
      <div className="bg-[#1E4D2B] text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a data-testid="topbar-phone" href={`tel:${clinicInfo.phone}`} className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Helpline: {clinicInfo.phone}</span>
            </a>
            <span className="hidden md:inline text-emerald-400">|</span>
            <a data-testid="topbar-email" href={`mailto:${clinicInfo.email}`} className="hidden md:flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{clinicInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 bg-emerald-900/60 px-2.5 py-0.5 rounded-full text-xs text-emerald-200 border border-emerald-700">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Guided by Dr. Wali Ahad
            </span>
            <a 
              data-testid="topbar-whatsapp" 
              href={`https://wa.me/919990364288?text=Hello%20Dr.%20Wali%20Ahad,%20I%20want%20to%20consult%20for%20hair%20treatment.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-3 py-1 rounded text-xs flex items-center gap-1 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Chat On WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}