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

          {/* Right - 3D Bar Chart Visual */}
          <div className="relative flex items-end justify-center lg:justify-end h-64 md:h-80">
            {/* 3D Bar Chart */}
            <div className="flex items-end gap-4 md:gap-6">
              {/* Bar 1 - Tallest */}
              <div className="relative group">
                <div className="w-16 md:w-20 h-48 md:h-64 bg-gradient-to-t from-[#1BE1D3]/80 to-[#1BE1D3] rounded-t-lg shadow-lg shadow-[#1BE1D3]/20 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute -top-1 left-0 right-0 h-3 bg-[#1BE1D3]/60 rounded-t-lg transform -skew-x-12 origin-bottom-left" />
              </div>

              {/* Bar 2 - Medium */}
              <div className="relative group">
                <div className="w-16 md:w-20 h-36 md:h-48 bg-gradient-to-t from-[#1BE1D3]/60 to-[#1BE1D3]/80 rounded-t-lg shadow-lg shadow-[#1BE1D3]/15 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute -top-1 left-0 right-0 h-3 bg-[#1BE1D3]/40 rounded-t-lg transform -skew-x-12 origin-bottom-left" />
              </div>

              {/* Bar 3 - Smallest */}
              <div className="relative group">
                <div className="w-16 md:w-20 h-24 md:h-32 bg-gradient-to-t from-[#1BE1D3]/40 to-[#1BE1D3]/60 rounded-t-lg shadow-lg shadow-[#1BE1D3]/10 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute -top-1 left-0 right-0 h-3 bg-[#1BE1D3]/30 rounded-t-lg transform -skew-x-12 origin-bottom-left" />
              </div>
            </div>

            {/* Wireframe accent lines */}
            <svg className="absolute bottom-0 right-0 w-48 h-48 opacity-20" viewBox="0 0 200 200">
              <path d="M0,200 Q50,150 100,180 T200,100" fill="none" stroke="#1BE1D3" strokeWidth="1" />
              <path d="M0,200 Q80,120 150,160 T200,80" fill="none" stroke="#1BE1D3" strokeWidth="0.5" />
              <path d="M0,200 Q100,100 180,140 T200,60" fill="none" stroke="#1BE1D3" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
