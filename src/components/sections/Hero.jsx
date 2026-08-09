import { ShieldCheck, Calendar, MessageCircle } from "lucide-react";
import { clinicInfo } from "../../data";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations/variants";
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

      const progress = Math.min(
        elapsed / duration,
        1
      );

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

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative bg-gradient-to-b from-[#F4F1EA] to-[#FAFAFA] pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
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
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  data-testid="hero-consultation-btn"
                  href="#consultation"
                  className="w-full sm:w-auto bg-[#1E4D2B] hover:bg-[#163820] text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-base"
                >
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  <span>Book Free Consultation</span>
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  data-testid="hero-chat-whatsapp"
                  href="https://wa.me/919990364288?text=Hello%20Dr.%20Wali%20Ahad,%20I%20would%20like%20to%20chat%20about%20my%20hair%20issues."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white hover:bg-stone-50 text-[#1E4D2B] border-2 border-[#1E4D2B] px-8 py-3.5 rounded-xl font-medium shadow-sm transition-all flex items-center justify-center gap-3 text-base"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Chat With Us</span>
                </motion.a>
              </div>

              {/* =========================================
                  Animated Quick Stats
                  ========================================= */}

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-stone-200/80 mt-8">

                {clinicInfo.stats.slice(0, 3).map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center lg:text-left"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.8 + idx * 0.15,
                      duration: 0.5,
                    }}
                  >

                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E4D2B] tabular-nums">
                      <AnimatedStat value={stat.value} />
                    </div>

                    <div className="text-xs sm:text-sm text-stone-600 font-medium">
                      {stat.label}
                    </div>

                  </motion.div>
                ))}

              </div>

            </motion.div>

            {/* Hero Image Showcase */}
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.4,
              }}
              className="lg:col-span-5 relative"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#1E4D2B] to-[#D4AF37] rounded-3xl opacity-20 blur-lg"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    data-testid="hero-image"
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
                    alt="Dr Wali Ahad Herbal Hair Consultation"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                    <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Expert Care</div>
                    <div className="font-serif text-xl font-bold">Dr. Wali Ahad</div>
                    <p className="text-xs text-stone-200">Hair Restoration & Herbal Specialist</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}