import { CheckCircle2, Calendar } from "lucide-react";

export default function CourseBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-gradient-to-r from-emerald-900 to-[#1E4D2B] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="space-y-4 max-w-2xl">

            <span className="bg-[#D4AF37] text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Special Program
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              1-Month Herbal Hair Treatment Course
            </h2>

            <p className="text-emerald-100 leading-relaxed">
              Begin your journey to stronger, healthier, and thicker hair with
              Dr. Wali Ahad's specially designed 30-day herbal program.
              Includes root tonic, anti-hair fall herbal packs, and
              personalized diet guidance.
            </p>

            <div className="flex flex-wrap gap-6 pt-2">

              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                30-Day Guaranteed Root Renewal
              </div>

              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                Free Expert Follow-up
              </div>

            </div>

          </div>

          <div className="shrink-0">

            <a
              href="#consultation"
              data-testid="course-enroll-btn"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c29f2f] text-[#1E4D2B] font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              Enroll in 30-Day Course
              <Calendar className="w-5 h-5" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}