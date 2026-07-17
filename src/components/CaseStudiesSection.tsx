import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      industry: "E-Commerce",
      challenge: "New D2C brand needed company formation, e-commerce platform, and go-to-market strategy across India and UAE.",
      solution: "End-to-end setup: private limited registration, Shopify Plus development, payment gateway integration, and digital marketing campaign.",
      results: [
        { metric: "3.2x", label: "Revenue Growth" },
        { metric: "45%", label: "Lower Acquisition Cost" },
        { metric: "90 days", label: "Time to Market" },
      ],
      services: ["Company Formation", "E-Commerce Development", "Digital Marketing"],
    },
    {
      industry: "Healthcare",
      challenge: "Healthcare startup required HIPAA-compliant CRM system integrated with hospital management systems across 3 countries.",
      solution: "Custom CRM development with cloud infrastructure, API integrations, and compliance documentation for India, UAE, and Singapore.",
      results: [
        { metric: "60%", label: "Faster Patient Onboarding" },
        { metric: "3x", label: "Staff Efficiency" },
        { metric: "99.9%", label: "Uptime" },
      ],
      services: ["CRM Development", "Cloud Architecture", "Compliance Setup"],
    },
    {
      industry: "FinTech",
      challenge: "Financial services startup needed complete business infrastructure for regulatory compliance and technology stack.",
      solution: "Legal entity setup, regulatory licensing, technology platform development, and investor pitch preparation.",
      results: [
        { metric: "Series A", label: "Funding Secured" },
        { metric: "6 months", label: "Concept to Launch" },
        { metric: "100%", label: "Compliance" },
      ],
      services: ["Legal Advisory", "Technology Development", "Brand Identity"],
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[#1BE1D3] font-normal text-[12px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Case Studies
            </p>
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-normal"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
            >
              Real Challenges. Real Solutions.
            </h2>
            <p
              className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
            >
              Anonymous case studies showcasing how we solve complex business problems across industries.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 md:p-10 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full bg-[#1BE1D3]/10 border border-[#1BE1D3]/20">
                    <span className="text-[#1BE1D3] text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {study.industry}
                    </span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#1BE1D3]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Challenge
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}>
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Solution
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}>
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Results
                    </p>
                    <div className="space-y-3">
                      {study.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-baseline gap-2">
                          <span className="text-[#1BE1D3] text-xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                            {result.metric}
                          </span>
                          <span className="text-white/60 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                            {result.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/case-study"
                    className="flex items-center gap-2 text-[#1BE1D3] text-sm hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    View all case studies <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
