import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 px-8" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel max-w-7xl mx-auto rounded-3xl overflow-hidden"
      >
        {/* Background wireframe pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1BE1D3" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1BE1D3]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1BE1D3]/3 rounded-full blur-3xl" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-[30px] font-semibold text-white leading-[1.2]">
              Ready to Build or Scale{" "}
              <span className="text-[#1BE1D3]">Your Business?</span>
            </h2>

            <p className="text-[14px] font-normal text-gray-400 leading-[1.7] max-w-lg mt-5">
              From startup launch to enterprise growth — Yurekh Solutions handles strategy, technology, branding, marketing, operations, and global expansion. Book a consultation and let's discuss how we can grow your business.
            </p>

            <Button
              onClick={() => navigate("/bookingform")}
              className="glass-btn text-[#1BE1D3] font-semibold px-6 py-2.5 rounded-full text-[14px] mt-5"
            >
              Get a Quote
            </Button>
          </div>

          {/* Right - Premium Stats Card */}
          <div
            className="relative rounded-3xl border border-[#1BE1D3]/10 bg-gradient-to-br from-[#0b1f1f] via-[#0a1a1a] to-black p-8 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#1BE1D3]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1BE1D3]/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              {/* Header */}
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#1BE1D3]/60 mb-6 font-medium">Why businesses choose us</p>

              {/* Stats */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <p
                    className="text-4xl font-bold text-white"
                  >
                    150+
                  </p>
                  <p className="text-[13px] text-gray-400">projects shipped across 12+ countries</p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div className="flex items-baseline gap-3">
                  <p
                    className="text-4xl font-bold text-white"
                  >
                    3.2x
                  </p>
                  <p className="text-[13px] text-gray-400">average ROI our clients see</p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div className="flex items-baseline gap-3">
                  <p
                    className="text-4xl font-bold text-white"
                  >
                    96%
                  </p>
                  <p className="text-[13px] text-gray-400">client retention year over year</p>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[11px] text-gray-500">Currently serving clients in 12+ markets</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
