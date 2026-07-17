import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Globe, Building2, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Impact = () => {
  const capabilities = [
    { icon: <Building2 className="w-8 h-8" />, label: "Company Formation", description: "Entity setup across India, UAE, US, UK, Singapore & Australia" },
    { icon: <Zap className="w-8 h-8" />, label: "Technology Build", description: "Web, mobile, AI, cloud — full-stack development" },
    { icon: <Users className="w-8 h-8" />, label: "Brand Identity", description: "Logo, guidelines, visual systems, messaging" },
    { icon: <Globe className="w-8 h-8" />, label: "Market Entry", description: "Research, compliance, go-to-market execution" },
  ];

  const whatWeDo = [
    {https://github.com/yurekh-solutions/yurekh push it github      title: "We Build Companies",
      description: "From idea to incorporated entity — company registration, legal structure, tax setup, and compliance. We handle the paperwork so you can focus on your vision.",
      details: ["Private Limited, LLP, LLC formation", "GST, tax & regulatory compliance", "Bank account & licensing setup", "Corporate governance frameworks"],
    },
    {
      title: "We Build Technology",
      description: "Custom websites, mobile apps, SaaS platforms, AI solutions, and cloud infrastructure. Built for scale from day one.",
      details: ["Web & mobile application development", "AI & machine learning integration", "Cloud architecture & DevOps", "E-commerce platforms & ERP systems"],
    },
    {
      title: "We Build Brands",
      description: "Complete brand identity — logo, guidelines, visual language, messaging, and positioning. Your brand should look as good as your product.",
      details: ["Logo & visual identity design", "Brand guidelines & style guides", "Marketing collateral & packaging", "Digital presence & social media"],
    },
    {
      title: "We Build Markets",
      description: "Market research, competitive analysis, go-to-market strategy, and customer acquisition. We don't just launch — we scale.",
      details: ["Market research & competitive analysis", "Go-to-market strategy & execution", "Digital marketing & SEO", "Sales channel & distribution setup"],
    },
  ];

  const industriesServed = [
    "Technology & SaaS",
    "E-Commerce & Retail",
    "Healthcare & Pharma",
    "Finance & FinTech",
    "Real Estate",
    "Education & EdTech",
    "Manufacturing",
    "Hospitality",
    "Media & Entertainment",
    "Professional Services",
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      <SEOHead
        title="Our Impact | What We Build | Yurekh Solutions"
        description="We build companies, technology, brands, and markets. End-to-end business building across India, UAE, USA, UK, Singapore & Australia. Strategy, legal, tech, branding & go-to-market."
        keywords="business building, company formation, technology development, brand building, market entry, Yurekh Solutions impact"
        canonical="https://yurekh.com/impact"
        breadcrumbs={[{ name: "Our Impact", url: "https://yurekh.com/impact" }]}
      />
      {/* Hero Section */}
      <section style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }} className="pt-32 md:pt-40 pb-20 md:pb-28 border-b border-white/10">
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
                className="text-white text-4xl sm:text-5xl lg:text-7xl font-normal mb-6 tracking-normal"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.15" }}
              >
                We Build Businesses.
              </h1>
              <p
                className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                From company formation to global scale — we handle strategy, legal, technology, branding, and go-to-market. One partner, complete execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }} className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[#1BE1D3] mb-4 flex justify-center">{cap.icon}</div>
                  <p className="text-white text-base font-normal mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                    {cap.label}
                  </p>
                  <p className="text-white/50 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
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
                What We Do
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-normal"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
              >
                Four Pillars. One Partner.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatWeDo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/30 transition-all duration-300"
                >
                  <h3 className="text-white text-xl font-normal mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}>
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1BE1D3] mt-2 flex-shrink-0" />
                        <span className="text-white/60 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }} className="py-20 md:py-28">
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
                Industries
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-normal"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
              >
                Sectors We Work In.
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {industriesServed.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="px-5 py-3 rounded-full border border-white/10 hover:border-[#1BE1D3]/40 transition-all duration-300"
                >
                  <p className="text-white/80 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {industry}
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
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-normal"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
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
      <section style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }} className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-normal mb-6 tracking-normal"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.25" }}
            >
              Ready to Create Your Success Story?
            </h2>
            <p
              className="text-white/70 max-w-2xl mx-auto mb-10 text-base sm:text-lg"
              style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
            >
              Join businesses across industries that have built and scaled with Yurekh Solutions.
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
