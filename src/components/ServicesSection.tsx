import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Sparkles, Bot, LineChart, Eye, Cloud, Database, Shield, Wifi, Glasses, Link2 } from "lucide-react";

const services = [
  {
    title: "Artificial Intelligence",
    description: "AI delivers real value when it aligns with how a business operates. We help organizations use AI to make better decisions, reduce manual work, and support large-scale operations.",
    icon: Brain,
  },
  {
    title: "Generative AI",
    description: "Generative AI works best when it's part of daily workflows. We integrate it into internal systems, customer experiences, and business tools, while maintaining the security and controls enterprises need.",
    icon: Sparkles,
  },
  {
    title: "Agentic AI",
    description: "We support organizations adopting autonomous AI by implementing AI agents that can perform tasks across processes, with proper oversight, transparency, and accountability.",
    icon: Bot,
  },
  {
    title: "Machine Learning",
    description: "In enterprise settings, machine learning needs to be reliable, not experimental. We help teams deploy models that remain accurate, monitored, and compliant in real-world use.",
    icon: LineChart,
  },
  {
    title: "Computer Vision",
    description: "For use cases where speed and accuracy matter, we build computer vision systems that analyze visual data clearly and reliably.",
    icon: Eye,
  },
  {
    title: "Cloud",
    description: "Cloud modernization goes beyond moving systems online. We help teams build secure, resilient cloud infrastructure while optimizing performance and costs.",
    icon: Cloud,
  },
  {
    title: "Data Science and Analytics",
    description: "Data creates value when it's reliable and easy to use. We build data foundations that support analytics and insights across teams without unnecessary complexity.",
    icon: Database,
  },
  {
    title: "Cybersecurity",
    description: "Security is built into the system from the start. We design solutions that address governance, compliance, and risk as part of the core architecture.",
    icon: Shield,
  },
  {
    title: "IoT",
    description: "Connected devices matter when their data can be used effectively. We help organizations connect physical systems to digital platforms, improving visibility and operational control.",
    icon: Wifi,
  },
  {
    title: "AR/VR",
    description: "Immersive technologies are most effective when they address real needs. We use AR and VR to support training, simulations, and remote collaboration in enterprise environments.",
    icon: Glasses,
  },
  {
    title: "Blockchain",
    description: "Blockchain works best when trust needs to be shared across parties. We apply it selectively to ensure traceability, data integrity, and secure data exchange in multi-party systems.",
    icon: Link2,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-10 overflow-hidden" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      <div className="px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase">
              Services
            </p>
            <h2 className="text-[30px] font-semibold text-white mt-4 leading-[1.2]">
              Deep Technical Expertise, Supporting Modern Systems
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-[28px] border border-transparent bg-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1BE1D3]/20 hover:bg-[#0a0a0a] hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
              >
                {/* Hover radial gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,225,211,0.12),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card content */}
                <div className="relative min-h-[220px] space-y-4">
                  <div className="flex flex-col items-start gap-3 text-white">
                    {/* Icon */}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <service.icon className="h-5 w-5 text-[#1BE1D3]" strokeWidth={1.6} />
                    </span>
                    {/* Title */}
                    <h3 className="text-[18px] font-semibold">
                      <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                        {service.title}
                      </span>
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="text-[14px] font-normal leading-6 text-white/70">
                    {service.description}
                  </p>
                </div>              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
