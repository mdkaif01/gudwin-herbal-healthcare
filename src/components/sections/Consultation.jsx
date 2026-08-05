import { Phone, Mail, MapPin, } from "lucide-react";
import { clinicInfo } from "../../data";

export default function Consultation({
  formData,
  handleInputChange,
  handleConsultationSubmit,
  isSubmitting,
}) {
  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left */}

          <div className="lg:col-span-6 space-y-6">

            <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Book Consultation
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
              Book Your Free Hair Consultation
            </h2>

            <p className="text-stone-700 leading-relaxed">
              Get expert advice from Dr. Wali Ahad. Start your journey toward
              healthier hair today.
            </p>

            <div className="space-y-4">

              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex items-center gap-4 bg-[#F4F1EA] rounded-2xl p-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E4D2B] text-[#D4AF37] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-xs uppercase text-stone-500">
                    Helpline
                  </div>

                  <div className="font-bold text-[#1E4D2B]">
                    {clinicInfo.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${clinicInfo.email}`}
                className="flex items-center gap-4 bg-[#F4F1EA] rounded-2xl p-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E4D2B] text-[#D4AF37] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-xs uppercase text-stone-500">
                    Email
                  </div>

                  <div className="font-bold text-[#1E4D2B]">
                    {clinicInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex gap-4 bg-[#F4F1EA] rounded-2xl p-4">

                <div className="w-12 h-12 rounded-xl bg-[#1E4D2B] text-[#D4AF37] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>

                <div>

                  <div className="text-xs uppercase text-stone-500">
                    Address
                  </div>

                  <div className="font-bold text-[#1E4D2B]">
                    {clinicInfo.address}
                  </div>

                </div>

              </div>

            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-stone-200 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.8252120932026!2d83.54420016957198!3d25.958171904382947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918bf08d657cd5%3A0x2ca5aa93f116fefa!2sGoodwin%20herbal%20health%20care!5e0!3m2!1sen!2sin!4v1785899581833!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="GUDWIN Herbal Healthcare Location"
              />
            </div>

          </div>

          {/* Form */}

          <div
            id="contact"
            className="lg:col-span-6 bg-[#FAFAFA] rounded-3xl border border-stone-200 p-8 shadow-xl"
          >

            <h3 className="font-serif text-2xl font-bold text-[#1E4D2B]">
              Enquiry Drop Now
            </h3>

            <p className="text-sm text-stone-600 mb-6">
              Our clinic coordinator will contact you shortly.
            </p>

            <form
              onSubmit={handleConsultationSubmit}
              className="space-y-4"
            >

              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
                className="w-full rounded-xl border p-3"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full rounded-xl border p-3"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
                className="w-full rounded-xl border p-3"
              />

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your hair problem..."
                className="w-full rounded-xl border p-3 resize-none"
              />

              <button
                disabled={isSubmitting}
                className="w-full bg-[#1E4D2B] text-white rounded-xl py-4 font-semibold hover:bg-[#163820]"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}