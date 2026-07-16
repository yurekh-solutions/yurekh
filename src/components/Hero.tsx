import React from "react";
import { motion } from "framer-motion";
import widgetCloud from "../assets/widget-cloud.jpg";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-white overflow-hidden" style={{ minHeight: '100vh' }}>
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
          backgroundSize: "60px 60px",
        }}
      />

      {/* Teal Radial Gradient Glows */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(27,225,211,0.5), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(27,225,211,0.4), transparent 70%)",
          }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-8 pt-40 pb-12">
        <motion.h1
          className="text-white mb-8 text-center"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: "1.25",
            letterSpacing: "normal",
            maxWidth: "800px",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Enterprise Business Solutions{" "}
          <span style={{ color: "#1BE1D3" }}>That Drive Growth</span>
        </motion.h1>

        <motion.p
          className="text-white/90 text-center mb-10"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            maxWidth: "768px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We build scalable, secure, and high-performance digital solutions for
          enterprises. From software and app development to AI, cybersecurity,
          and cloud services, we help businesses innovate and scale with
          confidence.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              padding: "0 32px",
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "rgba(27,225,211,0.08)",
              color: "#1BE1D3",
              border: "1px solid rgba(27,225,211,0.3)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 30px rgba(27,225,211,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
            className="hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)] hover:shadow-[0_0_40px_rgba(27,225,211,0.2)] transition-all duration-300"
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Widget Image - Only 20% visible, animated border */}
      <motion.div
        className="relative z-20 w-full flex justify-center"
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
