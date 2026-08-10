// import { Star } from "lucide-react";
// import { clientReviews } from "../../data";

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
//             Client Reviews
//           </span>

//           <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
//             See What Our Happy Clients Say About Their Hair Journey
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {clientReviews.map((rev) => (

//             <div
//               key={rev.id}
//               data-testid={`review-card-${rev.id}`}
//               className="bg-[#FAFAFA] p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between space-y-4 relative"
//             >

//               <div className="space-y-3">

//                 <div className="flex items-center gap-1 text-amber-500">
//                   {[...Array(rev.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-current" />
//                   ))}
//                 </div>

//                 <p className="text-stone-700 text-sm leading-relaxed">
//                   "{rev.comment}"
//                 </p>

//               </div>

//               <div className="pt-4 border-t border-stone-200 flex items-center justify-between">

//                 <div>
//                   <h4 className="font-serif font-bold text-sm text-[#1E4D2B]">
//                     {rev.name}
//                   </h4>

//                   <p className="text-xs text-stone-500">
//                     {rev.location}
//                   </p>
//                 </div>

//                 <span className="text-[11px] text-stone-400">
//                   {rev.date}
//                 </span>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { clientReviews } from "../../data";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="bg-emerald-100 text-[#1E4D2B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Client Reviews
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E4D2B]">
            See What Our Happy Clients Say About Their Hair Journey
          </h2>
        </div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={clientReviews.length > 3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="reviews-swiper !pb-12"
        >
          {clientReviews.map((rev) => (
            <SwiperSlide key={rev.id}>

              <div
                data-testid={`review-card-${rev.id}`}
                className="bg-[#FAFAFA] p-7 sm:p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between min-h-[250px] h-full transition-all duration-300 hover:shadow-md"
              >

                {/* Review */}
                <div className="space-y-4">

                  {/* Stars */}
                  <div
                    className="flex items-center gap-1 text-amber-500"
                    aria-label={`${rev.rating} out of 5 stars`}
                  >
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-stone-700 text-sm leading-relaxed">
                    "{rev.comment}"
                  </p>

                </div>

                {/* Client Information */}
                <div className="pt-4 mt-5 border-t border-stone-200 flex items-center justify-between gap-4">

                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1E4D2B]">
                      {rev.name}
                    </h4>

                    <p className="text-xs text-stone-500 mt-0.5">
                      {rev.location}
                    </p>
                  </div>

                  <span className="text-[11px] text-stone-400 whitespace-nowrap">
                    {rev.date}
                  </span>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}