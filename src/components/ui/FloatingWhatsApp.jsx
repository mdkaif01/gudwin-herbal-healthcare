import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919990364288?text=Hello%20Dr.%20Wali%20Ahad,%20I%20would%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
      whileHover={{
        scale: 1.12,
        rotate: 8,
      }}
      whileTap={{
        scale: 0.9,
      }}
      animate={{
        y: [0, -6, 0],
        boxShadow: [
          "0 0 0 rgba(37,211,102,0.4)",
          "0 0 25px rgba(37,211,102,0.8)",
          "0 0 0 rgba(37,211,102,0.4)",
        ],
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
        boxShadow: {
          repeat: Infinity,
          duration: 2,
        },
      }}
    >
      <FaWhatsapp size={34} />
    </motion.a>
  );
}