import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { transformationResults } from "../../data";

export default function Transformations() {
  return (
    <section id="transformations" className="py-20 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Success Stories
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
            Hair Transformation Results
          </h2>

          <p className="text-stone-600 text-base">
            Real patient transformation results achieved with Dr. Wali
            Ahad&apos;s expert care.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={transformationResults.length > 3}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="transformations-swiper !pb-12"
          >
            {transformationResults.map((res) => (
              <SwiperSlide key={res.id}>
                <div
                  data-testid={`transformation-${res.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 h-full"
                >
                  {/* Combined Before / After Image */}
                  <div className="bg-stone-100 p-2">
                    <img
                      src={res.image}
                      alt="Hair transformation before and after treatment"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-stone-500 mt-6">
          Results may vary from person to person. Individual treatment
          outcomes depend on several factors.
        </p>

      </div>
    </section>
  );
}