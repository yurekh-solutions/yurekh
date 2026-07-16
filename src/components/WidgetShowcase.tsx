import React from "react";
import { motion } from "framer-motion";
import widgetCloud from "../assets/widget-cloud.jpg";

const WidgetShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0f0f] pb-20">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(27,225,211,0.4), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block text-[#1BE1D3] uppercase tracking-[0.2em] text-xs font-semibold mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Work
          </span>
          <h2
            className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              lineHeight: "1.3",
            }}
          >
            Built for Scale.{" "}
            <span className="text-[#1BE1D3]">Designed for Impact.</span>
          </h2>
        </motion.div>

        {/* Widget Image - Partially shown (peek effect) */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Outer glow border */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 0 80px rgba(27,225,211,0.08), 0 0 40px rgba(27,225,211,0.04), 0 20px 60px rgba(0,0,0,0.5)",
              border: "1px solid rgba(27,225,211,0.12)",
            }}
          >
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a1515] border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4">
                <div className="h-6 bg-white/5 rounded-md max-w-sm mx-auto flex items-center justify-center">
                  <span className="text-white/30 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                    yurekh.com
                  </span>
                </div>
              </div>
            </div>

            {/* Image - partially shown with fade at bottom */}
            <div className="relative">
              <img
                src={widgetCloud}
                alt="Yurekh Solutions Dashboard"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "500px", objectPosition: "top center" }}
              />
              {/* Gradient fade at bottom - hides the rest of the image */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, #0b0f0f 100%)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WidgetShowcase;
