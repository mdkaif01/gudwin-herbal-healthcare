// import { ArrowRight } from "lucide-react";

// export default function WhyChooseUs() {
//   return (
//     <section className="py-20 bg-[#F4F1EA]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
//             Why Choose Us
//           </span>

//           <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
//             Because your hair deserves the best of nature and science.
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl mb-4">
//               🌿
//             </div>

//             <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">
//               100% Herbal & Safe
//             </h3>

//             <p className="text-stone-600 text-sm">
//               Chemical-free, herbal treatments for effective and long-lasting
//               results.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl mb-4">
//               🔍
//             </div>

//             <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">
//               Personalized Hair Analysis
//             </h3>

//             <p className="text-stone-600 text-sm">
//               Customized plans based on detailed scalp and root diagnosis.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl mb-4">
//               🔬
//             </div>

//             <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">
//               Advanced Hair Solutions
//             </h3>

//             <p className="text-stone-600 text-sm">
//               From PRP therapy to herbal extracts — science meets tradition.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl mb-4">
//               ✨
//             </div>

//             <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">
//               Long-Lasting Results
//             </h3>

//             <p className="text-stone-600 text-sm">
//               Treats the root cause of hair fall for healthier regrowth.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl mb-4">
//               🏥
//             </div>

//             <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">
//               Safe & Comfortable Clinic
//             </h3>

//             <p className="text-stone-600 text-sm">
//               Hygienic environment with modern equipment.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl mb-4">
//               💎
//             </div>

//             <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">
//               Affordable & Transparent
//             </h3>

//             <p className="text-stone-600 text-sm">
//               Premium care at fair prices with no hidden charges.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-all md:col-span-2">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl mb-4">
//               🌟
//             </div>

//             <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">
//               Trusted Transformations
//             </h3>

//             <p className="text-stone-600 text-sm">
//               Thousands of clients have regained confidence with our
//               herbal-scientific approach.
//             </p>
//           </div>

//         </div>

//         <div className="mt-12 text-center">
//           <a
//             href="#consultation"
//             className="inline-flex items-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white px-8 py-4 rounded-xl font-medium shadow-md transition-all"
//           >
//             Enquiry Now
//             <ArrowRight className="w-4 h-4" />
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }

import {
  ArrowRight,
  Leaf,
  ScanSearch,
  Microscope,
  ShieldCheck,
  BadgeIndianRupee,
  Sparkles,
  HeartPulse,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Herbal & Natural Care",
    description:
      "Thoughtfully selected herbal approaches designed around your hair and scalp needs.",
  },
  {
    icon: ScanSearch,
    title: "Personalized Hair Analysis",
    description:
      "Individual assessment to understand your scalp and hair concerns before treatment.",
  },
  {
    icon: Microscope,
    title: "Advanced Hair Solutions",
    description:
      "A combination of modern hair-care techniques and time-tested herbal approaches.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Comfortable Care",
    description:
      "A clean, professional environment with careful attention to your comfort and care.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable & Transparent",
    description:
      "Clear treatment guidance and pricing with no unnecessary surprises.",
  },
  {
    icon: Sparkles,
    title: "Natural-Looking Results",
    description:
      "A personalized approach focused on improving the health and appearance of your hair.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centered Approach",
    description:
      "Dedicated guidance and support throughout your hair-care journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
            Because your hair deserves the best of nature and science.
          </h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#1E4D2B] mb-5 group-hover:bg-[#1E4D2B] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="font-serif font-bold text-lg text-[#1E4D2B] mb-2">
                  {feature.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 bg-[#1E4D2B] hover:bg-[#163820] text-white px-8 py-4 rounded-xl font-medium shadow-md transition-all"
          >
            Enquiry Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}