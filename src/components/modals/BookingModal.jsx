import { X } from "lucide-react";
import { toast } from "sonner";

export default function BookingModal({
  bookingModalOpen,
  setBookingModalOpen,
  bookingServiceTitle,
}) {
  if (!bookingModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(
      `Appointment requested for "${bookingServiceTitle}". Our clinic team will call you within 1 hour to confirm.`
    );

    setBookingModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        data-testid="booking-modal"
        className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200"
      >
        <button
          data-testid="close-modal-btn"
          onClick={() => setBookingModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="bg-emerald-100 text-[#1E4D2B] px-3 py-1 rounded-full text-xs font-bold uppercase">
            Appointment Request
          </span>

          <h3 className="font-serif text-2xl font-bold text-[#1E4D2B] mt-2">
            {bookingServiceTitle || "General Hair Treatment"}
          </h3>

          <p className="text-stone-600 text-xs mt-1">
            Book your session with Dr. Wali Ahad at GUDWIN Herbal Healthcare,
            Mau.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
              Your Full Name *
            </label>

            <input
              required
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#1E4D2B]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
              Phone Number *
            </label>

            <input
              required
              type="tel"
              placeholder="+91 9999999999"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#1E4D2B]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
              Preferred Date
            </label>

            <input
              type="date"
              className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#1E4D2B]"
            />
          </div>

          <button
            data-testid="confirm-booking-btn"
            type="submit"
            className="w-full bg-[#1E4D2B] hover:bg-[#163820] text-white py-3.5 rounded-xl font-medium text-sm shadow transition-all"
          >
            Confirm Appointment Request
          </button>
        </form>
      </div>
    </div>
  );
}