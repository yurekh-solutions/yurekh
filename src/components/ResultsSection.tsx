import { motion } from "framer-motion";
import { TrendingUp, Globe, Award, Users } from "lucide-react";

const ResultsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "$500M+",
      label: "Enterprise Value Created",
      description: "Across all client ventures globally",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "200+",
      label: "Brands Built & Scaled",
      description: "From startup to enterprise",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "6+",
      label: "Countries Served",
      description: "India, UAE, USA, UK, Singapore, Australia",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "95%",
      label: "Client Retention Rate",
      description: "Long-term partnerships, not one-off projects",
    },
  ];

  const achievements = [
    "Average 3.2x revenue growth within first 12 months",
    "60% reduction in customer acquisition cost",
    "90-day average time-to-market for new products",
    "24/7 global support across all time zones",
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1BE1D3]/3 rounded-full blur-3xl" />
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
            Proven Track Record
          </p>
          <h2
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-normal"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
          >
            Numbers Don't Lie.
          </h2>
          <p
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
          >
            Measurable impact across every engagement. We don't just promise results — we deliver them consistently.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/30 transition-all duration-500 group"
            >
              <div className="text-[#1BE1D3] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <p
                className="text-[#1BE1D3] text-4xl sm:text-5xl font-normal mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
              >
                {stat.value}
              </p>
              <p
                className="text-white text-base font-normal mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
              >
                {stat.label}
              </p>
              <p
                className="text-white/40 text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="w-6 h-6 rounded-full bg-[#1BE1D3]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#1BE1D3]" />
                </div>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.6" }}
                >
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
