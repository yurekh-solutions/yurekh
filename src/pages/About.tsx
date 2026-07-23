import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle,
  Compass,
  PenTool,
  Code,
  Rocket,
  Layers,
  Zap,
  BarChart3,
  Building2,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

const BG = "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)";

const aboutSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yurekh.com/#organization",
      name: "Yurekh Solutions",
      url: "https://yurekh.com/",
      logo: "https://yurekh.com/logoyurekh.png",
      image: "https://yurekh.com/og-image.png",
      description:
        "Yurekh Solutions is a senior-led, full-system business building studio delivering AI-powered software, digital branding, and go-to-market strategy as one integrated system across India, UAE, USA, and Singapore.",
      foundingLocation: "India",
      areaServed: ["India", "United Arab Emirates", "United States", "United Kingdom", "Singapore", "Australia"],
      sameAs: [
        "https://www.instagram.com/yurekhsolutions",
        "https://www.facebook.com/share/1JzwtyDtAx/",
        "https://www.linkedin.com/company/yurekh-solutions-private-limited/",
        "https://x.com/yurekhsolutions",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://yurekh.com/about#aboutpage",
      url: "https://yurekh.com/about",
      name: "About Yurekh Solutions",
      description:
        "Learn about Yurekh Solutions — a senior-led business building studio combining strategy, technology, brand, and go-to-market execution to help founders and enterprises start, scale, and dominate markets worldwide.",
      isPartOf: { "@id": "https://yurekh.com/#organization" },
      about: { "@id": "https://yurekh.com/#organization" },
    },
  ],
});

const stats = [
  { number: "125+", label: "Applications Modernized" },
  { number: "500K+", label: "Calls Handled Per Hour" },
  { number: "70%", label: "Average Cost Reduction" },
  { number: "99%", label: "Customer Satisfaction" },
];

const approach = [
  {
    step: "01",
    icon: <Compass className="w-6 h-6" />,
    title: "Discover",
    desc: "We immerse in your market, model, and goals — mapping the opportunity, risks, and the fastest path to traction.",
  },
  {
    step: "02",
    icon: <PenTool className="w-6 h-6" />,
    title: "Design",
    desc: "Strategy, brand, and product architecture are shaped together, so every decision compounds instead of competing.",
  },
  {
    step: "03",
    icon: <Code className="w-6 h-6" />,
    title: "Build",
    desc: "Senior teams ship production-grade software, brand systems, and infrastructure — engineered to scale from day one.",
  },
  {
    step: "04",
    icon: <Rocket className="w-6 h-6" />,
    title: "Scale",
    desc: "We launch, measure, and optimise across markets — turning early momentum into durable, compounding growth.",
  },
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Innovation First",
    description: "We push boundaries with cutting-edge AI and technology that transforms how businesses operate and grow.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Client Success",
    description: "Your growth is our mission. We build partnerships that deliver measurable, lasting results.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaborative Excellence",
    description: "We work as an extension of your team — aligning tightly to your vision and moving as one.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Driven",
    description: "Every solution meets the highest standards of craft, security, and reliability — no shortcuts.",
  },
];

const capabilities = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI-Powered Software",
    desc: "Custom platforms, intelligent assistants, and automation engineered for real business outcomes.",
    href: "/services",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Digital Branding",
    desc: "Identity, positioning, and brand systems that make you unmistakable in crowded markets.",
    href: "/services",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web & Mobile Development",
    desc: "High-performance websites, e-commerce, and mobile apps built to scale across markets and languages.",
    href: "/services",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Business Consulting",
    desc: "Company formation, legal compliance, and market-entry strategy for founders and enterprises.",
    href: "/business-consulting",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Market Entry — India & Beyond",
    desc: "End-to-end support to launch and operate in India, the UAE, and other high-growth markets.",
    href: "/launch-in-india",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Growth Marketing",
    desc: "Performance marketing, SEO, and go-to-market systems that turn attention into revenue.",
    href: "/services",
  },
];

const differentiators = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Senior-Led Teams",
    desc: "You work directly with experienced strategists, engineers, and creatives — never handed off to juniors.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Integrated Execution",
    desc: "Strategy, technology, brand, and marketing under one roof — no gaps, no finger-pointing between vendors.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    desc: "Proven delivery across India, the UAE, the US, the UK, Singapore, and Australia.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Measurable Outcomes",
    desc: "We are accountable to metrics — cost reduction, conversion, and growth, not vanity deliverables.",
  },
];

const team = [
  { name: "Leadership Team", role: "Strategic Vision & Growth", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop" },
  { name: "Development Team", role: "Full-Stack Excellence", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" },
  { name: "Design Team", role: "Creative Innovation", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop" },
  { name: "Marketing Team", role: "Digital Growth Experts", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop" },
];

const About = () => {
  return (
    <div className="min-h-screen" style={{ background: BG }}>
      <SEOHead
        title="About Us | Senior-Led Business Building Studio"
        description="Yurekh Solutions is a senior-led, full-system business building studio delivering AI-powered software, digital branding, and go-to-market strategy as one integrated system. 125+ applications modernized, 70% average cost reduction, serving clients across India, UAE, USA, UK, Singapore & Australia."
        keywords="about Yurekh Solutions, business building studio, senior-led consultants, AI software company, digital branding agency, go-to-market strategy, global technology partner, company story, mission, vision"
        canonical="https://yurekh.com/about"
        schema={aboutSchema}
        breadcrumbs={[{ name: "About Us", url: "https://yurekh.com/about" }]}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[85svh] flex items-center justify-center pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden"
        style={{
          backgroundImage: "url('/services/premium-brand-positioning.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1BE1D3]/30 bg-[#1BE1D3]/5 mb-6">
                <Sparkles className="w-4 h-4 text-[#1BE1D3]" />
                <span className="text-[#1BE1D3] text-sm font-medium">About Yurekh Solutions</span>
              </div>
              <h1
                className="text-white text-4xl sm:text-5xl lg:text-7xl font-normal mb-6 tracking-normal"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.15" }}
              >
                One Partner. <span className="text-[#1BE1D3]">Complete Execution.</span>
              </h1>
              <p
                className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                We are a senior-led business building studio that unites AI-powered software, digital branding, and
                go-to-market strategy into one integrated system. We partner with founders and leadership teams to build
                new ventures — and thoughtfully evolve what already exists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/bookingform"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
                  style={{ fontSize: "15px", backgroundColor: "#1BE1D3" }}
                >
                  Start a Conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/business-consulting"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:bg-white/10"
                  style={{ fontSize: "15px", backgroundColor: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.2)" }}
                >
                  Explore What We Do
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section style={{ background: BG }} className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60 text-sm tracking-widest uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
              Building Businesses Across
            </p>
            <p className="text-[#1BE1D3] text-2xl sm:text-3xl font-normal mt-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              IND ⋅ DXB ⋅ NYC ⋅ SGP ⋅ LDN ⋅ SYD
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: BG }} className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="text-center p-8 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent"
              >
                <div className="text-3xl md:text-5xl font-normal text-[#1BE1D3] mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ background: BG }} className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">Our Story</p>
              <h2
                className="text-white text-2xl sm:text-3xl lg:text-5xl font-normal mb-6 tracking-normal"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
              >
                Built to close the gap between idea and impact.
              </h2>
              <div className="space-y-5 text-white/70 text-base sm:text-lg leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.8" }}>
                <p>
                  Too many businesses stall because strategy, technology, brand, and marketing live in separate silos —
                  each vendor optimising their own piece while the bigger vision fractures. We built Yurekh Solutions to
                  fix exactly that.
                </p>
                <p>
                  As a senior-led studio, we bring strategists, engineers, and creatives under one roof to operate as your
                  founding team. From company formation and product engineering to brand identity and market launch, we
                  own the full system — so momentum never gets lost in the handoffs.
                </p>
                <p>
                  Today we build and scale ventures across India, the UAE, the US, the UK, Singapore, and Australia —
                  helping founders and enterprises move from a first idea to durable, compounding growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: BG }} className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1BE1D3]/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#1BE1D3]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                To empower businesses of all sizes with intelligent technology and integrated execution that drive growth,
                efficiency, and innovation — delivering solutions that meet today's challenges while anticipating
                tomorrow's opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1BE1D3]/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#1BE1D3]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                To be the global partner of choice for AI-powered business building — recognised for craft, integrity, and
                measurable impact, and for a model where technology and strategy combine to create unprecedented value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ background: BG }} className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">How We Work</p>
              <h2
                className="text-white text-2xl sm:text-3xl lg:text-5xl font-normal mb-4 tracking-normal"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
              >
                A single, integrated process.
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
                Four connected stages that take you from opportunity to scale — with one accountable team throughout.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent hover:border-[#1BE1D3]/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1BE1D3]/10 flex items-center justify-center text-[#1BE1D3]">
                      {phase.icon}
                    </div>
                    <span className="text-[#1BE1D3]/40 text-2xl font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>{phase.step}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-normal text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {phase.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: BG }} className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">What Drives Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 tracking-normal" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
              Our Core Values
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
              The principles that guide every decision, every project, every partnership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent hover:border-[#1BE1D3]/40 transition-all duration-300"
              >
                <div className="text-[#1BE1D3] mb-4">{value.icon}</div>
                <h3 className="text-base sm:text-lg font-normal text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do / Capabilities */}
      <section style={{ background: BG }} className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 tracking-normal" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
              What We Do
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
              A complete stack of services designed to work together — so your business grows as one coherent system, not
              a patchwork of disconnected vendors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  to={item.href}
                  className="group block h-full p-6 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent hover:border-[#1BE1D3]/40 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#1BE1D3]/10 text-[#1BE1D3] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-normal text-white mb-2 flex items-center gap-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                    {item.title}
                    <ArrowRight className="w-4 h-4 text-[#1BE1D3] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section style={{ background: BG }} className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">Why Yurekh</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 tracking-normal" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
              Why Partner With Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
              The advantages that make us a genuine building partner — not just another agency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex gap-4 p-6 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1BE1D3]/10 flex items-center justify-center text-[#1BE1D3]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-normal text-white mb-1.5" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ background: BG }} className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">The People</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 tracking-normal" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
              Our Teams
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
              Senior specialists across strategy, engineering, design, and growth — working as one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent overflow-hidden hover:border-[#1BE1D3]/40 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-base sm:text-lg font-normal text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                    {member.name}
                  </h3>
                  <p className="text-[#1BE1D3] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: BG }} className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-10 sm:p-12 rounded-3xl border border-[#1BE1D3]/30 bg-gradient-to-br from-[#1BE1D3]/10 to-transparent max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 tracking-normal" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
              Ready to Build or Scale Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
              Let's discuss how Yurekh Solutions can help you start, scale, and dominate your market — with one integrated
              team behind you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/bookingform"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1BE1D3] text-black font-semibold text-sm sm:text-base hover:bg-[#1BE1D3]/90 transition-colors whitespace-nowrap"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/case-study"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm sm:text-base transition-all duration-300 hover:bg-white/10 whitespace-nowrap"
                style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.2)" }}
              >
                See Our Work
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
