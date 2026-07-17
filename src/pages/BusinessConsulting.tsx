import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Building2, Code, Scale, TrendingUp, Users, Zap, Target, Award, CheckCircle, Database, Bot, Cloud, Smartphone } from "lucide-react";

const BusinessConsulting = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90svh] flex items-center justify-center py-16 md:py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/services/website-development.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-6">
                Global Business Consulting
              </p>
              <h1
                className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.1" }}
              >
                We Build Businesses.
              </h1>
              <p
                className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                From concept to global launch. Yurekh Solutions is your end-to-end business building partner—strategy, legal, technology, digital presence, and go-to-market as one integrated system. We help founders and enterprises start, scale, and dominate markets worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/bookingform"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    backgroundColor: "#1BE1D3",
                  }}
                >
                  Start Your Business Journey <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+919136242706"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:bg-white/10"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                >
                  Schedule  Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-black py-12 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60 text-sm tracking-widest uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
              Serving Clients Across
            </p>
            <p className="text-[#1BE1D3] text-2xl sm:text-3xl font-semibold mt-3" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
              IND ⋅ DXB  NYC ⋅ SGP ⋅ LDN ⋅ SYD
            </p>
          </div>
        </div>
      </section>

      {/* For Founders - Start from Scratch */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">
                For Founders
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                Start Your Business From Scratch.
              </h2>
              <p
                className="text-white/70 text-base sm:text-lg max-w-3xl leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                You have a vision and a market opportunity. We become your founding team—handling everything from company registration and legal compliance to brand identity, technology infrastructure, and market launch. One partner, complete execution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Company Formation",
                  description: "Complete business registration, legal structure setup, compliance frameworks, and corporate governance for India, UAE, US, UK, and Singapore markets.",
                },
                {
                  icon: <Scale className="w-8 h-8" />,
                  title: "Legal & Compliance",
                  description: "End-to-end legal support including contracts, IP protection, regulatory compliance, tax structuring, and ongoing legal advisory for global operations.",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Business Strategy",
                  description: "Market research, competitive analysis, business model design, financial planning, and go-to-market strategy tailored to your industry and target markets.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Brand Identity",
                  description: "Complete brand creation from naming and logo design to brand guidelines, visual identity, messaging framework, and brand positioning for global markets.",
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Technology Stack",
                  description: "Custom software development, website creation, mobile apps, cloud infrastructure, AI integration, and complete digital ecosystem built for scale.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Digital Marketing",
                  description: "SEO, social media, content marketing, paid advertising, email campaigns, and performance marketing to acquire customers and build market presence.",
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/50 transition-all duration-300 hover:bg-white/5"
                >
                  <div className="text-[#1BE1D3] mb-5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3
                    className="text-white text-xl font-semibold mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Existing Businesses - Scale & Expand */}
      <section className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">
                For Existing Businesses
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                Scale & Expand Globally.
              </h2>
              <p
                className="text-white/70 text-base sm:text-lg max-w-3xl leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                Your business is ready for the next level. We help established companies transform their brand, enter new markets, launch new products, and build technology infrastructure for global scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Brand Transformation",
                  description: "Complete brand overhaul for companies that have outgrown their current identity. We preserve your equity while building a brand that matches your ambition.",
                  features: ["Brand audit & strategy", "Visual identity redesign", "Messaging framework", "Market repositioning", "Global brand guidelines"],
                },
                {
                  title: "Market Expansion",
                  description: "Enter new geographic markets with confidence. We handle market research, localization, regulatory compliance, and go-to-market execution.",
                  features: ["Market entry strategy", "Localization & translation", "Regulatory compliance", "Partner identification", "Launch execution"],
                },
                {
                  title: "Digital Transformation",
                  description: "Modernize your technology stack and digital presence. From legacy system migration to AI-powered automation and cloud infrastructure.",
                  features: ["Technology audit", "System architecture", "Cloud migration", "AI integration", "Process automation"],
                },
                {
                  title: "Growth Marketing",
                  description: "Scale customer acquisition and revenue with data-driven marketing strategies, performance optimization, and multi-channel campaigns.",
                  features: ["Growth strategy", "Performance marketing", "Conversion optimization", "Customer retention", "Analytics & insights"],
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 md:p-10 rounded-2xl border border-[#1BE1D3]/20 hover:border-[#1BE1D3]/50 transition-all duration-300"
                >
                  <h3
                    className="text-white text-2xl font-semibold mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white/70 text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-white/60 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                        <CheckCircle className="w-4 h-4 text-[#1BE1D3] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
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
                Technology Solutions
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                Build Your Digital Infrastructure.
              </h2>
              <p
                className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                From SaaS platforms to AI-powered chatbots, we build the technology that powers your business. Custom solutions designed for scale, security, and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cloud className="w-10 h-10" />,
                  title: "SaaS Development",
                  description: "End-to-end SaaS platform development with multi-tenancy, subscription management, analytics dashboards, and scalable cloud infrastructure.",
                  features: ["Multi-tenant architecture", "Subscription billing", "User management", "Analytics & reporting", "API development", "Cloud deployment"],
                },
                {
                  icon: <Database className="w-10 h-10" />,
                  title: "Custom CRM Systems",
                  description: "Tailored CRM solutions that fit your business processes. From lead management to customer success, built with your workflow in mind.",
                  features: ["Lead tracking", "Sales pipeline", "Customer support", "Email integration", "Custom workflows", "Mobile access"],
                },
                {
                  icon: <Bot className="w-10 h-10" />,
                  title: "AI Chatbots & Automation",
                  description: "Intelligent chatbots powered by AI for customer service, sales, and support. 24/7 automated engagement with human handoff capabilities.",
                  features: ["Natural language processing", "Multi-channel deployment", "Knowledge base integration", "Analytics dashboard", "Human handoff", "Custom training"],
                },
                {
                  icon: <Code className="w-10 h-10" />,
                  title: "Custom Software",
                  description: "Bespoke software solutions built from scratch to solve your unique business challenges. From concept to deployment and beyond.",
                  features: ["Requirements analysis", "System architecture", "Agile development", "Quality assurance", "Deployment support", "Maintenance & updates"],
                },
                {
                  icon: <Smartphone className="w-10 h-10" />,
                  title: "Mobile Applications",
                  description: "Native and cross-platform mobile apps for iOS and Android. From consumer apps to enterprise solutions with offline capabilities.",
                  features: ["iOS & Android", "Cross-platform", "Offline mode", "Push notifications", "In-app purchases", "App store optimization"],
                },
                {
                  icon: <Zap className="w-10 h-10" />,
                  title: "AI & Machine Learning",
                  description: "Integrate AI capabilities into your business: predictive analytics, recommendation engines, computer vision, and process automation.",
                  features: ["Predictive analytics", "Recommendation systems", "Computer vision", "NLP solutions", "Process automation", "Model training"],
                },
              ].map((solution, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/50 transition-all duration-300 hover:bg-white/5"
                >
                  <div className="text-[#1BE1D3] mb-5">{solution.icon}</div>
                  <h3
                    className="text-white text-xl font-semibold mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                  >
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-white/50 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                        <CheckCircle className="w-3 h-3 text-[#1BE1D3] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/bookingform"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  backgroundColor: "#1BE1D3",
                }}
              >
                Discuss Your Technology Needs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Yurekh Solutions */}
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
                Why Yurekh Solutions
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                One Partner. Complete Execution.
              </h2>
              <p
                className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                Instead of managing multiple vendors for legal, technology, branding, and marketing, work with one integrated team that understands your business holistically and executes with precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Globe className="w-10 h-10" />,
                  title: "Global Reach",
                  stat: "6+ Countries",
                  description: "Registered presence and operational capabilities across India, UAE, US, UK, Singapore, and Australia.",
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Expert Team",
                  stat: "50+ Specialists",
                  description: "Senior consultants, lawyers, developers, designers, and marketers with decades of combined experience.",
                },
                {
                  icon: <Award className="w-10 h-10" />,
                  title: "Proven Track Record",
                  stat: "200+ Projects",
                  description: "Successfully launched and scaled businesses across industries from startups to Fortune 500 companies.",
                },
                {
                  icon: <TrendingUp className="w-10 h-10" />,
                  title: "Measurable Results",
                  stat: "$500M+ Value",
                  description: "Combined enterprise value created for our clients through strategic consulting and execution.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/30 transition-all duration-300"
                >
                  <div className="text-[#1BE1D3] mb-4 flex justify-center">{item.icon}</div>
                  <p className="text-[#1BE1D3] text-2xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                    {item.stat}
                  </p>
                  <h3 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
                Industries
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                We Build Businesses Across Sectors.
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Technology & SaaS",
                "E-Commerce & Retail",
                "Healthcare & Pharma",
                "Finance & FinTech",
                "Real Estate",
                "Education & EdTech",
                "Food & Beverage",
                "Manufacturing",
                "Hospitality",
                "Media & Entertainment",
              ].map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-6 rounded-xl border border-white/10 hover:border-[#1BE1D3]/50 transition-all duration-300 text-center hover:bg-white/5"
                >
                  <p className="text-white text-sm font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {industry}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
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
                Our Process
              </p>
              <h2
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
              >
                From Vision to Reality.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Deep dive into your vision, market, competitors, and goals. We understand your business inside out before making any recommendations.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Comprehensive business plan covering legal structure, technology stack, brand positioning, and go-to-market roadmap.",
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "Parallel execution across all workstreams—legal registration, brand development, technology build, and marketing campaigns.",
                },
                {
                  step: "04",
                  title: "Launch & Scale",
                  description: "Coordinated market launch with ongoing support for optimization, growth, and expansion into new markets.",
                },
              ].map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="text-[#1BE1D3] text-5xl font-bold mb-4 opacity-30" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                    {phase.step}
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    {phase.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}>
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24" style={{ background: "linear-gradient(135deg, #0b1f1f 0%, #0a1a1a 50%, #000000 100%)" }}>
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
              Ready to Build Your Business?
            </h2>
            <p
              className="text-white/70 max-w-2xl mx-auto mb-10 text-base sm:text-lg"
              style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
            >
              Whether you're starting from scratch or scaling globally, we're here to make it happen. Let's discuss your vision and create a roadmap to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/bookingform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  backgroundColor: "#1BE1D3",
                }}
              >
                Book  Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+919136242706"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:bg-white/10"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                Call +91 91362 42706
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;
