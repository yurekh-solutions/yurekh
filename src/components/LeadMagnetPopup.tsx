import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle } from "lucide-react";

const LeadMagnetPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Show popup after 8 seconds, only once per session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("leadMagnetShown");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("leadMagnetShown", "true");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In production, send to email service
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg rounded-3xl border border-[#1BE1D3]/20 overflow-hidden"
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1BE1D3]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1BE1D3]/3 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 md:p-10">
              {!isSubmitted ? (
                <>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mb-6">
                    <Download className="w-8 h-8 text-[#1BE1D3]" />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-white text-2xl md:text-3xl font-normal mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
                  >
                    Global Market Entry Guide
                  </h3>
                  <p
                    className="text-white/60 text-sm md:text-base mb-6"
                    style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                  >
                    Get our comprehensive 30-page PDF covering company formation, legal compliance, tax optimization, and go-to-market strategy for India, UAE, USA, UK, Singapore & Australia.
                  </p>

                  {/* What's included */}
                  <div className="space-y-2 mb-6">
                    {[
                      "Step-by-step entity formation checklist",
                      "Tax optimization strategies for 6 countries",
                      "Market entry timeline & budget planner",
                      "Regulatory compliance roadmap",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1BE1D3] flex-shrink-0" />
                        <span className="text-white/70 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#1BE1D3]/50 transition-colors"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-xl text-black font-normal transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,225,211,0.3)]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        backgroundColor: "#1BE1D3",
                        fontWeight: 400,
                      }}
                    >
                      Get Guide
                    </button>
                  </form>

                  <p className="text-white/30 text-xs text-center mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    No spam. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#1BE1D3]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#1BE1D3]" />
                  </div>
                  <h3
                    className="text-white text-xl font-normal mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                  >
                    Check Your Email!
                  </h3>
                  <p
                    className="text-white/60 text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Your guide is on its way.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadMagnetPopup;
