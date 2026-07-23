import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Cpu, Megaphone, TrendingUp, Rocket, Globe, ArrowRight, Sparkles } from "lucide-react";
import widgetCloud from "../assets/yurekh-dashboard (1).jpg";

const pillars = [
  { icon: Briefcase, label: "Business Strategy" },
  { icon: Cpu, label: "Technology" },
  { icon: Megaphone, label: "Branding & Marketing" },
  { icon: TrendingUp, label: "Operations" },
  { icon: Rocket, label: "Go-to-Market" },
  { icon: Globe, label: "Global Expansion" },
];

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-white overflow-hidden min-h-[100dvh]">
      {/* Dark Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)",
        }}
      />

      {/* Grid Pattern Overlay - mmcgbl style */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Teal Radial Gradient Glows */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(27,225,211,0.5), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full blur-3xl opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(27,225,211,0.4), transparent 70%)",
          }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-5 sm:px-8 pt-20 sm:pt-32 lg:pt-40 pb-8 sm:pb-16">
        {/* Eyebrow */}
        <div className="flex justify-center mt-14 sm:mt-0 mb-5 sm:mb-8 w-full">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#1BE1D3]/20 bg-[#1BE1D3]/5">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1BE1D3] flex-shrink-0" strokeWidth={1.8} />
            <span className="text-[#1BE1D3] font-semibold text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.25em] uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
              Business Partner in Global Growth
            </span>
          </span>
        </div>
      
        <motion.h1
          className="text-white mb-6 sm:mb-8 text-center px-2"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(26px, 5vw, 48px)",
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
            maxWidth: "800px",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          
          Enterprise Business Solutions{" "}
          <span className="text-[#1BE1D3]">That Drive Growth</span>
        </motion.h1>

        <motion.p
          className="text-white/90 text-center mb-8 sm:mb-10 px-1"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 2.5vw, 18px)",
            lineHeight: "1.67",
            maxWidth: "768px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
         We partner with founders and leadership teams to build, launch, and scale businesses globally. From strategy and go-to-market planning to technology, branding, and operations — we deliver integrated solutions that drive real, measurable growth across industries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link to="/bookingform" className="w-full sm:w-auto">
            <button
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(13px, 2vw, 15px)",
                padding: "0 24px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: "#1BE1D3",
                color: "#000",
                border: "none",
                boxShadow: "0 0 30px rgba(27,225,211,0.15)",
              }}
              className="hover:bg-[#1BE1D3]/90 hover:shadow-[0_0_40px_rgba(27,225,211,0.3)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link to="/launch-in-india" className="w-full sm:w-auto">
            <button
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(13px, 2vw, 15px)",
                padding: "0 24px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: "rgba(27,225,211,0.08)",
                color: "#1BE1D3",
                border: "1px solid rgba(27,225,211,0.3)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 30px rgba(27,225,211,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
              className="hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)] transition-all duration-300 w-full sm:w-auto"
            >
             Build Business
            </button>
          </Link>
        </motion.div>

        {/* Business Service Pillars */}
        <motion.div
          className="flex flex-wrap justify-center gap-1.5 sm:gap-3 mb-5 sm:mb-6 px-1"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#1BE1D3]/30 hover:bg-[#1BE1D3]/5 transition-all duration-300"
            >
              <pillar.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1BE1D3]" strokeWidth={1.8} />
              <span
                className="text-white/70 text-[10px] sm:text-xs"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                {pillar.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Trust Line */}
        <motion.p
          className="text-white/40 text-xs text-center"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, letterSpacing: "0.05em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          For Startups, SMEs & Enterprises — One Partner. Complete Execution.
        </motion.p>
      </div>

      {/* Widget Image - Mobile version */}
      <motion.div
        className="relative z-20 w-full flex justify-center md:hidden mt-2 px-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-full">
          <div
            className="relative rounded-xl p-[1.5px]"
            style={{
              background: "linear-gradient(135deg, rgba(27,225,211,0.35), rgba(27,225,211,0.05), rgba(27,225,211,0.35))",
            }}
          >
            <div
              className="relative rounded-xl overflow-hidden bg-[#0a1515]"
              style={{
                boxShadow: "0 -10px 60px rgba(27,225,211,0.08), 0 -5px 30px rgba(0,0,0,0.5)",
              }}
            >
              {/* Browser chrome bar - mobile */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0a1515] border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <div className="flex-1 mx-2">
                  <div className="h-5 bg-white/5 rounded-md max-w-[200px] mx-auto flex items-center justify-center">
                    <span className="text-white/30 text-[10px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      yurekh.com
                    </span>
                  </div>
                </div>
              </div>
              {/* Dashboard image - mobile */}
              <div className="relative overflow-hidden" style={{ maxHeight: '100px' }}>
                <img
                  src={widgetCloud}
                  alt="Yurekh Solutions Dashboard"
                  className="w-full h-auto"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 0%, #0b0f0f 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Widget Image - Desktop version */}
      <motion.div
        className="relative z-20 w-full flex justify-center max-md:hidden"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.8 }}
      >
        <div className="w-full max-w-[1100px] px-4">
          {/* Animated border glow wrapper */}
          <div
            className="relative rounded-2xl p-[2px]"
            style={{
              background: "linear-gradient(135deg, rgba(27,225,211,0.4), rgba(27,225,211,0.05), rgba(27,225,211,0.4))",
              backgroundSize: "200% 200%",
              animation: "borderGlow 4s ease-in-out infinite",
            }}
          >
            <div
              className="relative rounded-2xl overflow-hidden bg-[#0a1515]"
              style={{
                boxShadow:
                  "0 -20px 100px rgba(27,225,211,0.1), 0 -10px 60px rgba(0,0,0,0.6)",
              }}
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#0a1515] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-white/5 rounded-md max-w-md mx-auto flex items-center justify-center">
                    <span className="text-white/30 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                      yurekh.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard image - only 20% visible */}
              <div className="relative overflow-hidden" style={{ maxHeight: '160px' }}>
                <img
                  src={widgetCloud}
                  alt="Yurekh Solutions Dashboard"
                  className="w-full h-auto"
                />
                {/* Fade at bottom of visible area */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 0%, #0b0f0f 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
