import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PrimaryButton from "../ui/PrimaryButton";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

import { CheckCircle2, MessageCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container/>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                alt="Herbal hair treatment oils"
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-md object-cover h-64 w-full"
              />

              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                alt="Consultation room"
                className="rounded-2xl shadow-md object-cover h-64 w-full mt-8"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#1E4D2B] text-white p-6 rounded-2xl shadow-xl hidden sm:block border border-[#D4AF37]">
              <div className="font-serif text-3xl font-bold text-[#D4AF37]">
                12+
              </div>

              <div className="text-xs uppercase tracking-wider text-emerald-100">
                Years Healing Scalp Disorders
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              badge="About Us"
              title="Welcome to GUDWIN Herbal Healthcare"
              center={false}
            />

            <p className="text-stone-700 text-base leading-relaxed">
              At GUDWIN Herbal Healthcare, we blend herbal medicine, modern hair
              restoration science, and personalized diagnosis to deliver
              visible, long-lasting results — without harmful chemicals or side
              effects.
            </p>

            <p className="text-stone-700 text-base leading-relaxed">
              We understand that every scalp is unique. That's why our
              treatments are customized to suit your hair type, scalp
              condition, and lifestyle. Led by Dr. Wali Ahad, our mission is to
              revive your confidence naturally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-[#1E4D2B] mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#2C3E35]">
                    Customized Herbal Formulations
                  </h4>

                  <p className="text-xs text-stone-500">
                    Tailored to your specific root cause.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-[#1E4D2B] mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#2C3E35]">
                    Zero Side Effects
                  </h4>

                  <p className="text-xs text-stone-500">
                    Pure natural herbs with no harsh steroids.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <PrimaryButton
                as="a"
                href="https://wa.me/919990364288?text=Hello%20Dr.%20Wali%20Ahad,%20I%20want%20to%20know%20more%20about%20GUDWIN%20treatments."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Chat With Us</span>
              </PrimaryButton>
            </div>

          </div>

        </motion.div>
    </section>
  );
}