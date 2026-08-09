import { CheckCircle2, Clock } from "lucide-react";
import { servicesList } from "../../data";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant } from "../../animations/variants";

export default function Services({ openBookingFor }) {
  return (
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
            We offer a complete range of herbal and clinical hair care services
            designed to stop hair fall, promote regrowth, and restore scalp
            health.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {servicesList.map((service) => (

            <motion.div
              key={service.id}
              variants={cardVariant}
              data-testid={`service-card-${service.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col border border-stone-200 group"
            >

              <div className="relative h-52 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3 bg-[#1E4D2B]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {service.category}
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

                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-stone-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{benefit}</span>
                      </li>

                    ))}

                  </ul>

                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">

                  <button
                    data-testid={`book-service-${service.id}`}
                    onClick={() => openBookingFor(service.title)}
                    className="bg-[#1E4D2B] hover:bg-[#163820] text-white px-4 py-2 rounded-lg text-xs font-medium transition-all shadow-sm flex items-center gap-1"
                  >
                    Book Appointment
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}