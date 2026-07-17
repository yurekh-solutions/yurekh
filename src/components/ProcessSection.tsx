import { motion } from "framer-motion";
import { Lightbulb, Rocket, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategy",
      description: "We begin by understanding your vision, goals, and market landscape. Deep research, competitive analysis, and a customized roadmap — all within the first 2 weeks.",
      deliverables: ["Market Research", "Competitive Analysis", "Business Model Design", "Go-to-Market Strategy"],
    },
    {
      number: "02",
      icon: <Rocket className="w-8 h-8" />,
      title: "Execution",
      description: "Once strategy is defined, we build everything — company formation, legal compliance, brand identity, technology stack, and digital presence. One team, complete execution.",
      deliverables: ["Company Registration", "Brand Identity", "Technology Build", "Digital Launch"],
    },
    {
      number: "03",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      description: "Post-launch, we focus on scaling — customer acquisition, market expansion, performance optimization, and long-term value creation. Your growth is our mission.",
      deliverables: ["Customer Acquisition", "Market Expansion", "Performance Optimization", "Scale Planning"],
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1BE1D3]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#1BE1D3]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#1BE1D3] font-normal text-[12px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            How We Work
          </p>
          <h2
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-normal"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
          >
            Three Phases. One Partner.
          </h2>
          <p
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
          >
            From idea to global scale — we handle every phase so you can focus on your vision.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-[#1BE1D3]/30 to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* Number + Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl border border-[#1BE1D3]/30 bg-[#1BE1D3]/5 flex items-center justify-center text-[#1BE1D3] relative">
                    {step.icon}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1BE1D3] text-black text-xs flex items-center justify-center font-normal"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/30 transition-all duration-500 bg-white/[0.01]">
                  <h3
                    className="text-white text-xl md:text-2xl font-normal mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm md:text-base leading-relaxed mb-5"
                    style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                  >
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((deliverable, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3 py-1.5 rounded-full text-xs border border-[#1BE1D3]/20 bg-[#1BE1D3]/5 text-[#1BE1D3]"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
