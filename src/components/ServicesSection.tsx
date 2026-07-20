import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Cpu, Megaphone, TrendingUp, Rocket, Globe } from "lucide-react";

const services = [
  {
    title: "Business Strategy & Consulting",
    description: "From startups to enterprises, we partner with founders and leadership teams to define strategy, plan growth, and build scalable business models that work in real markets.",
    icon: Briefcase,
  },
  {
    title: "Technology & Product Development",
    description: "Custom software, mobile apps, cloud infrastructure, and AI — we build and deploy the technology your business needs to operate efficiently and compete globally.",
    icon: Cpu,
  },
  {
    title: "Brand, Marketing & Growth",
    description: "We handle end-to-end branding, digital marketing, SEO, and performance campaigns that position your business in front of the right audience and drive measurable results.",
    icon: Megaphone,
  },
  {
    title: "Operations & Process Optimization",
    description: "We streamline your operations — from supply chain and logistics to internal workflows — so your team runs leaner, faster, and more profitably.",
    icon: TrendingUp,
  },
  {
    title: "Go-to-Market & Market Entry",
    description: "Launching a new product or entering a new market? We handle positioning, pricing, distribution, and launch execution — so you go to market with clarity and confidence.",
    icon: Rocket,
  },
  {
    title: "Global Expansion & Partnerships",
    description: "We help businesses scale internationally — handling market research, compliance, partner identification, and localization to grow across borders.",
    icon: Globe,
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
              What We Do
            </p>
            <h2 className="text-[30px] font-semibold text-white mt-4 leading-[1.2]">
              One Partner. Complete Execution.
            </h2>
            <p className="text-white/70 text-[15px] mt-4 leading-[1.7]" style={{ fontFamily: "Poppins, sans-serif" }}>
              From small startups to large enterprises — we consult, build, and grow your business. Strategy, technology, branding, operations — everything under one roof.
            </p>
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
