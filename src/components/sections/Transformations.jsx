import { transformationResults } from "../../data";

export default function Transformations() {
  return (
    <section id="transformations" className="py-20 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Success Stories
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
            Hair Transformation Results
          </h2>

          <p className="text-stone-600 text-base">
            Real patients. Real results. Experience the natural regrowth
            achieved with Dr. Wali Ahad's expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {transformationResults.map((res) => (

            <div
              key={res.id}
              data-testid={`transformation-${res.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 flex flex-col"
            >

              <div className="grid grid-cols-2 gap-1 bg-stone-100 p-2">

                <div className="relative">
                  <img
                    src={res.beforeImage}
                    alt="Before treatment"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    BEFORE
                  </span>
                </div>

                <div className="relative">
                  <img
                    src={res.afterImage}
                    alt="After treatment"
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  <span className="absolute bottom-2 left-2 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    AFTER ({res.duration})
                  </span>
                </div>

              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">

                <div>

                  <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold mb-1">
                    {res.issue}
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#1E4D2B]">
                    {res.patientName}
                  </h3>

                  <p className="text-stone-600 text-sm mt-2 italic">
                    "{res.testimonial}"
                  </p>

                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">

                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Verified Regrowth
                  </span>

                  <span className="text-xs text-stone-500 font-semibold">
                    {res.duration}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}