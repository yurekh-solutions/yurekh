import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Lightbulb,
  Rocket,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  ShieldCheck,
  Headphones,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";

const whoWeServe = [
  {
    icon: Lightbulb,
    title: "Startups & Founders",
    description:
      "From idea validation to company formation, product build, and first customers — we help you launch right and grow fast.",
  },
  {
    icon: Building2,
    title: "SMEs & Growing Businesses",
    description:
      "Scale your operations, optimize processes, expand into new markets, and build the technology backbone for sustainable growth.",
  },
  {
    icon: Globe,
    title: "Enterprises & Global Corporations",
    description:
      "Digital transformation, market expansion, process automation, and strategic consulting for large-scale business operations.",
  },
];

const whatWeDeliver = [
  {
    icon: Target,
    title: "Business Strategy & Research",
    description: "Market analysis, competitive research, business modeling, and strategic roadmaps.",
  },
  {
    icon: Rocket,
    title: "Product & Technology Build",
    description: "Custom software, mobile apps, cloud infrastructure, AI integration, and DevOps.",
  },
  {
    icon: BarChart3,
    title: "Marketing & Customer Acquisition",
    description: "SEO, performance marketing, content strategy, social media, and brand positioning.",
  },
  {
    icon: Users,
    title: "Team & Operations Setup",
    description: "Hiring strategy, process design, supply chain optimization, and workflow automation.",
  },
  {
    icon: ShieldCheck,
    title: "Legal & Compliance",
    description: "Company registration, licensing, regulatory compliance, and risk management frameworks.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support & Growth",
    description: "Post-launch optimization, customer support systems, account management, and scaling advisory.",
  },
];

const BusinessSolutions = () => {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1BE1D3]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#1BE1D3]/5 rounded-full blur-3xl" />
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
          <p
            className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Who We Serve & What We Deliver
          </p>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(24px, 3.5vw, 36px)",
              lineHeight: "1.25",
              letterSpacing: "-0.01em",
            }}
          >
            Business Solutions for Every Stage
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 2vw, 16px)",
              lineHeight: "1.7",
            }}
          >
            Whether you're launching your first venture or scaling a global enterprise — we provide end-to-end consulting, technology, and execution to grow your business.
          </p>
        </motion.div>

        {/* Who We Serve */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white/80 mb-10"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(18px, 2.5vw, 22px)",
            }}
          >
            Who We <span className="text-[#1BE1D3]">Serve</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoWeServe.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/40 transition-all duration-500 hover:bg-white/[0.02]"
              >
                <div className="text-[#1BE1D3] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8" strokeWidth={1.6} />
                </div>
                <h4
                  className="text-white mb-3"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(16px, 2vw, 18px)",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What We Deliver */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white/80 mb-10"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(18px, 2.5vw, 22px)",
            }}
          >
            What We <span className="text-[#1BE1D3]">Deliver</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeDeliver.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex items-start gap-4 p-5 rounded-xl border border-white/5 hover:border-[#1BE1D3]/20 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-[#1BE1D3]/20 bg-[#1BE1D3]/5 flex items-center justify-center text-[#1BE1D3] group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div>
                  <h4
                    className="text-white mb-1"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-white/50 text-xs leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/bookingform"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1BE1D3] text-black font-semibold text-sm hover:bg-[#1BE1D3]/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
