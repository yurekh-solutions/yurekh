import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, MessageCircle } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const hasSeenExit = sessionStorage.getItem("exitIntentShown");
    if (hasSeenExit) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);
    return () => document.removeEventListener("mouseout", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md rounded-3xl border border-[#1BE1D3]/20 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0a1a1a 0%, #0b1f1f 50%, #000000 100%)" }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20 touch-manipulation"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#1BE1D3]/5 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 md:p-10 text-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-[#1BE1D3]" />
              </div>

              {/* Content */}
              <h3
                className="text-white text-2xl md:text-3xl font-normal mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
              >
                Wait — Let's Talk First.
              </h3>
              <p
                className="text-white/60 text-sm md:text-base mb-6"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                Book a 30-minute strategy call. No commitment, no pressure — just actionable insights for your business.
              </p>

              {/* Options */}
              <div className="space-y-3">
                <a
                  href="/bookingform"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-black font-normal transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,225,211,0.3)]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    backgroundColor: "#1BE1D3",
                    fontWeight: 400,
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Call
                </a>

                <a
                  href="tel:+919136242706"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-normal transition-all duration-300 hover:bg-white/10"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontWeight: 400,
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call +91 91362 42706
                </a>

                <a
                  href="https://wa.me/919136242706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-normal transition-all duration-300 hover:bg-white/10"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontWeight: 400,
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>

              <p className="text-white/30 text-xs mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Consultation. No obligations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
