import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, DollarSign, Users, Award, Globe, Building2, Zap } from "lucide-react";

const Impact = () => {
  const metrics = [
    { value: "200+", label: "Brands Built & Scaled", description: "From concept to market leadership" },
    { value: "$500M+", label: "Enterprise Value Created", description: "Cumulative value across portfolio" },
    { value: "6+", label: "Countries Served", description: "India, UAE, US, UK, Singapore, Australia" },
    { value: "50+", label: "Industry Specialists", description: "Senior consultants & technologists" },
  ];

  const successStories = [
    {
      company: "TechStart SaaS",
      metric: "$2.5M ARR in 18 Months",
      description: "Built from scratch: company formation, SaaS platform development, go-to-market strategy, and customer acquisition.",
      source: "Client Report 2024",
    },
    {
      company: "HealthCare CRM",
      metric: "10,000+ Active Users",
      description: "Custom CRM development with HIPAA compliance, integrated with existing hospital management systems across 3 countries.",
      source: "Case Study",
    },
    {
      company: "E-Commerce Platform",
      metric: "$5M GMV in First Year",
      description: "End-to-end e-commerce solution: legal setup, platform development, payment integration, and digital marketing.",
      source: "Client Report 2024",
    },
    {
      company: "FinTech Startup",
      metric: "$8M Series A Funding",
      description: "Complete business infrastructure: regulatory compliance, technology stack, brand identity, and investor pitch preparation.",
      source: "Funding Announcement",
    },
    {
      company: "AI Chatbot SaaS",
      metric: "500+ Enterprise Clients",
      description: "AI-powered customer service platform: product development, API integration, sales strategy, and customer success.",
      source: "Client Report 2024",
    },
    {
      company: "Real Estate Portal",
      metric: "50,000+ Property Listings",
      description: "Full-stack property platform: company registration, technology build, agent onboarding, and market launch.",
      source: "Platform Metrics",
    },
    {
      company: "EdTech Platform",
      metric: "100,000+ Students",
      description: "Online learning ecosystem: curriculum digitization, platform development, content strategy, and user acquisition.",
      source: "Client Report 2024",
    },
    {
      company: "Manufacturing ERP",
      metric: "40% Efficiency Gain",
      description: "Custom ERP system: process automation, inventory management, supply chain optimization, and staff training.",
      source: "Implementation Report",
    },
  ];

  const industries = [
    { name: "SaaS & Technology", value: "$50M+ Portfolio Value" },
    { name: "E-Commerce & Retail", value: "$120M+ GMV Generated" },
    { name: "Healthcare & Pharma", value: "15+ Platforms Launched" },
    { name: "Finance & FinTech", value: "$30M+ Funding Raised" },
    { name: "Real Estate", value: "25+ Projects Delivered" },
    { name: "Education & EdTech", value: "200K+ Users Served" },
    { name: "Manufacturing", value: "30+ ERP Implementations" },
    { name: "Hospitality", value: "10+ Brands Established" },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-28 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-6">
                Our Impact
              </p>
              <h1
                className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.1" }}
              >
                200+ Brands. $500M+ Value Created.
              </h1>
              <p
                className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                From startups to enterprises, we've helped businesses across industries build, launch, and scale. Real results, measurable impact, lasting partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-black py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <p className="text-[#1BE1D3] text-4xl sm:text-5xl font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                    {metric.value}
                  </p>
                  <p className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    {metric.label}
                  </p>
                  <p className="text-white/50 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">
                Success Stories
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                Real Results. Real Impact.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-[#1BE1D3]/20 hover:border-[#1BE1D3]/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-white text-xl font-semibold" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                      {story.company}
                    </h3>
                    <TrendingUp className="w-6 h-6 text-[#1BE1D3] flex-shrink-0" />
                  </div>
                  <p className="text-[#1BE1D3] text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                    {story.metric}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}>
                    {story.description}
                  </p>
                  <p className="text-white/40 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Source: {story.source}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">
                Industry Impact
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                Value Created Across Sectors.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-6 rounded-xl border border-white/10 hover:border-[#1BE1D3]/50 transition-all duration-300"
                >
                  <p className="text-white text-base font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    {industry.name}
                  </p>
                  <p className="text-[#1BE1D3] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {industry.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Globe className="w-16 h-16 text-[#1BE1D3] mx-auto mb-6" />
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                Global Presence. Local Expertise.
              </h2>
              <p className="text-white/70 text-lg mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>
                Operating across 6 countries with deep understanding of local markets, regulations, and business culture.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["India", "UAE", "United States", "United Kingdom", "Singapore", "Australia"].map((country, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-3 rounded-full border border-[#1BE1D3]/30 text-[#1BE1D3] font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {country}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.2" }}
            >
              Ready to Create Your Success Story?
            </h2>
            <p
              className="text-white/70 max-w-2xl mx-auto mb-10 text-base sm:text-lg"
              style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
            >
              Join 200+ businesses that have transformed their vision into reality with Yurekh Solutions.
            </p>
            <Link
              to="/business-consulting"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                backgroundColor: "#1BE1D3",
              }}
            >
              Start Your Journey <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
