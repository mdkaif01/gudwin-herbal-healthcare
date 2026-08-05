import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqList } from "../../data";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="faq" className="py-20 bg-[#F4F1EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 space-y-4">
          <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            FAQ
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
            Frequently Asked Questions
          </h2>

          <p className="text-stone-600 text-base">
            Find quick answers about our hair treatments and herbal care.
          </p>
        </div>

        <div className="space-y-4">

          {faqList.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
              >

                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-serif font-bold text-base sm:text-lg text-[#1E4D2B]"
                >
                  <span>{faq.question}</span>

                  <span className="p-1 rounded-full bg-emerald-50">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-4 border-t border-stone-100 text-sm text-stone-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}