import { Award, ArrowRight, Phone } from "lucide-react";
import { clinicInfo } from "../../data";
import { useEffect, useState } from "react";

/* =========================================
   Animated Statistic
   ========================================= */
function AnimatedStat({ value }) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const match = String(value).match(/[\d,.]+/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericValue = parseFloat(
      match[0].replace(/,/g, "")
    );

    const suffix = String(value).replace(match[0], "");

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue =
        numericValue * easedProgress;

      const formattedValue =
        numericValue % 1 === 0
          ? Math.floor(currentValue).toLocaleString()
          : currentValue.toFixed(1);

      setDisplayValue(
        `${formattedValue}${suffix}`
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return <>{displayValue}</>;
}

export default function Expert() {
  return (
    <section id="expert" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-gradient-to-br from-[#1E4D2B] to-[#14331d] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">

          {/* Decorative Background Icon */}
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12 pointer-events-none">
            <Award className="w-96 h-96 text-[#D4AF37]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

            {/* =========================================
              Expert Image
              ========================================= */}
            <div className="lg:col-span-4 text-center">

              <div className="relative inline-block">

                <div className="absolute -inset-2 bg-[#D4AF37] rounded-3xl opacity-30 blur"></div>

                <img
                  data-testid="expert-photo"
                  src="/wali/waliahad.webp"
                  alt="Dr. Wali Ahad"
                  loading="lazy"
                  decoding="async"
                  className="relative rounded-2xl w-64 h-72 sm:w-72 sm:h-80 object-cover mx-auto shadow-2xl border-2 border-[#D4AF37]"
                />

              </div>

            </div>
            
            {/* =========================================
              Expert Information
              ========================================= */}
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

              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
                {clinicInfo.expertBio}
              </p>
              
              {/* =========================================
                Expert Stats
                ========================================= */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                {/* Years of Experience */}
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-emerald-800">
                  <div className="text-[#D4AF37] font-serif text-2xl font-bold tabular-nums">
                    <AnimatedStat value="12+" />
                  </div>

                  <div className="text-xs text-emerald-200">
                    Years of Experience
                  </div>
                </div>

                {/* Patients Guided */}
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-emerald-800">
                  <div className="text-[#D4AF37] font-serif text-2xl font-bold tabular-nums">
                    <AnimatedStat value="500+" />
                  </div>

                  <div className="text-xs text-emerald-200">
                    Patients Guided
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-emerald-800">
                  <div className="text-[#D4AF37] font-serif text-2xl font-bold">
                    Mau, UP
                  </div>

                  <div className="text-xs text-emerald-200">
                    Near Faizi Gate
                  </div>
                </div>

              </div>
              
              {/* =========================================
                CTA Buttons
                ========================================= */}
              <div className="pt-4 flex flex-wrap gap-4">

                <a
                  href="#consultation"
                  data-testid="expert-contact-now"
                  className="bg-[#D4AF37] hover:bg-[#c29f2f] text-[#1E4D2B] font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  Contact Now
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${clinicInfo.phone}`}
                  data-testid="expert-call-now"
                  className="bg-white/10 hover:bg-white/20 border border-emerald-700 text-white px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  {clinicInfo.phone}
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}