import { motion } from "framer-motion";
import { Shield, Zap, Globe, Target, Clock, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "End-to-End Business Partner",
      description: "We're not just consultants — we're your founding team, growth engine, and execution arm. From day one idea to global scale, we handle everything so you can focus on your vision.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Startups to Enterprise — All Scales",
      description: "Whether you're launching your first startup or scaling an existing enterprise, our frameworks adapt to your stage. We work with founders, SMEs, and large corporations across industries.",
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Complete Execution Under One Roof",
      description: "Strategy, legal, technology, branding, marketing, operations — one partner handles it all. No fragmented vendors, no miscommunication, no delays.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Confidential & Trust-First Approach",
      description: "Your business data, strategy, and IP are protected with strict NDAs. We operate with complete confidentiality because trust is the foundation of every engagement.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Speed Without Compromise",
      description: "Most consulting firms deliver reports. We deliver results. Our integrated team moves fast — from strategy to launch in weeks, not months — without cutting corners.",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Growth-Obsessed Methodology",
      description: "We don't just build businesses — we grow them. Every decision, every execution, every optimization is measured by one thing: your sustainable, long-term growth.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1BE1D3]/3 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#1BE1D3]/5 rounded-full blur-3xl" />
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
            Why Yurekh Solutions
          </p>
          <h2
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-normal"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
          >
            Built Different.
          </h2>
          <p
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
          >
            We're not another consulting firm. We're your founding team, growth partner, and global expansion engine — all in one.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/40 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div className="text-[#1BE1D3] mb-5 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3
                className="text-white text-lg font-normal mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
              >
                {reason.title}
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/bookingform"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-normal transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              backgroundColor: "#1BE1D3",
              fontWeight: 400,
            }}
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
