import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Scale,
  Target,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  MapPin,
  Shield,
  Briefcase,
  Handshake,
  FileText,
  Compass,
  Rocket,
  LineChart,
  Phone,
  Clock,
  Star,
  Sparkles,
  Landmark,
  Cpu,
  BadgeCheck,
  ArrowUpRight,
  ChevronDown,
  Award,
  Zap,
  Lightbulb,
  Mail,
  Calendar,
  DollarSign,
  FileCheck,
  UserCheck,
  Layers,
  Play,
  Quote,
} from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

/* ─── reusable fade-up variant ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

/* ─── section wrapper ─── */
const bg = "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)";

const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => (
  <section id={id} className={`py-14 sm:py-16 lg:py-24 overflow-hidden ${className}`} style={{ background: bg }}>
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  </section>
);

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) => (
  <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16">
    <p className="text-[#1BE1D3] font-semibold text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-3 sm:mb-4">
      {eyebrow}
    </p>
    <h2
      className="text-white"
      style={{
        fontWeight: 600,
        fontSize: "clamp(22px, 3.5vw, 32px)",
        lineHeight: "1.2",
        letterSpacing: "-0.01em",
      }}
    >
      {title}
    </h2>
    <p
      className="text-white/70 text-[14px] sm:text-[15px] mt-3 sm:mt-4"
      style={{ fontWeight: 400, lineHeight: "1.67" }}
    >
      {description}
    </p>
  </div>
);

/* ─── glass card ─── */
const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => (
  <motion.div
    {...fadeUp(delay)}
    className={`group relative overflow-hidden rounded-[20px] sm:rounded-[28px] border border-transparent bg-transparent p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1BE1D3]/20 hover:bg-[#0a0a0a] hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)] ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,225,211,0.12),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    {children}
  </motion.div>
);

/* ════════════════════════════════════════════════════════════════ */
const faqs = [
  {
    q: "What is the best entity type for a foreign business in India?",
    a: "It depends on your business model. A Private Limited Company is the most common and flexible structure for foreign businesses. LLPs suit professional services, while Branch Offices and Liaison Offices serve specific purposes with RBI approval. We assess your goals and recommend the optimal structure.",
  },
  {
    q: "How long does company registration take in India?",
    a: "Typical incorporation through the MCA (Ministry of Corporate Affairs) takes 7\u201314 working days, provided all documents are in order. Additional time may be needed for PAN, TAN, GST registration, and bank account setup \u2014 we handle all of these in parallel to speed up the process.",
  },
  {
    q: "What are the FDI restrictions in India?",
    a: "India allows 100% FDI under the automatic route in most sectors. Some sectors like defence, insurance, and media have caps or require government approval. We provide a sector-specific FDI assessment before you commit to any investment.",
  },
  {
    q: "Do I need to be physically present in India to register a company?",
    a: "No. Company incorporation can be completed remotely with digital signatures. However, you will need at least one resident director on the board. We can assist with nominee director arrangements and help you plan visits for critical stages like bank account opening.",
  },
  {
    q: "What tax obligations will my Indian entity have?",
    a: "Indian companies are subject to corporate tax (22\u201325% depending on structure), GST (18% standard rate for most goods/services), and applicable state-level taxes. Transfer pricing rules apply for related-party transactions. We structure your entity for tax efficiency from day one.",
  },
  {
    q: "How much does it cost to start a business in India?",
    a: "Costs vary by entity type, state of registration, and business complexity. A basic private limited company setup including government fees, registered office, and initial compliance can range from \u20B925,000\u2013\u20B975,000. We provide a transparent cost breakdown before engagement.",
  },
];

const pageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://yurekh.com/launch-in-india#service",
      name: "India Market Entry & Business Setup Services",
      serviceType: "India Market Entry Consulting",
      url: "https://yurekh.com/launch-in-india",
      description:
        "End-to-end India market entry for foreign businesses, startups and NRI entrepreneurs \u2014 company registration, FDI and legal compliance, market research, local partnerships, and go-to-market execution.",
      provider: {
        "@type": "Organization",
        name: "Yurekh Solutions",
        url: "https://yurekh.com",
        logo: "https://yurekh.com/og-image.png",
      },
      areaServed: { "@type": "Country", name: "India" },
      audience: {
        "@type": "BusinessAudience",
        name: "Foreign companies, startups and NRI entrepreneurs entering India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "India Market Entry Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Company Registration & Incorporation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "FDI & Legal Compliance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Market Research & Feasibility" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Partnerships & Distribution" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Go-to-Market Execution" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax Structuring & Ongoing Compliance" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://yurekh.com/launch-in-india#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
});

const BusinessLaunchIndia = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: bg }}>
      <SEOHead
        title="Build Your Business in India | Market Entry Partner | Yurekh Solutions"
        description="Yurekh Solutions helps international businesses enter and build in India. From company registration and legal compliance to market research, local partnerships, and go-to-market execution — one partner for complete market entry."
        keywords="launch business in India, market entry India, company registration India, foreign business India, India market entry consulting, legal compliance India, business setup India, Yurekh Solutions"
        canonical="https://yurekh.com/launch-in-india"
        schema={pageSchema}
        breadcrumbs={[
          { name: "Build Business in India", url: "https://yurekh.com/launch-in-india" },
        ]}
      />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        className="relative min-h-[100svh] flex flex-col items-center justify-center text-white overflow-hidden"
        style={{ background: bg }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glows */}
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, rgba(27,225,211,0.5), transparent 70%)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full blur-3xl opacity-15" style={{ background: "radial-gradient(circle, rgba(27,225,211,0.4), transparent 70%)" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-4 sm:px-8 pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16">
          <motion.div {...fadeUp(0.2)} className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#1BE1D3]/20 bg-[#1BE1D3]/5">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1BE1D3]" strokeWidth={1.8} />
                <span className="text-[#1BE1D3] font-semibold text-[10px] sm:text-[11px] tracking-[0.25em] uppercase">
                  India Market Entry
                </span>
              </span>
            </div>

            <h1
              className="text-white mb-4 sm:mb-6"
              style={{
                fontWeight: 600,
                fontSize: "clamp(28px, 5.5vw, 52px)",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
              }}
            >
              Launch Your Business{" "}
              <span className="text-[#1BE1D3]">in India.</span>
            </h1>

            <p
              className="text-white/70 mb-8 sm:mb-10 max-w-3xl mx-auto"
              style={{
                fontWeight: 400,
                fontSize: "clamp(14px, 2.5vw, 18px)",
                lineHeight: "1.67",
              }}
            >
              India is one of the fastest-growing major economies — with a massive consumer base, a thriving startup
              ecosystem, and sector-level opportunities across technology, manufacturing, retail, and services. Yurekh
              Solutions is your on-ground partner to navigate regulations, establish your presence, and execute your
              market entry — from first consultation to first customer.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto justify-center">
              <Link to="/bookingform" className="w-full sm:w-auto">
                <button
                  style={{
                    fontWeight: 600,
                    fontSize: "clamp(13px, 2vw, 15px)",
                    padding: "0 24px",
                    height: "46px",
                    borderRadius: "10px",
                    backgroundColor: "#1BE1D3",
                    color: "#000",
                    border: "none",
                    boxShadow: "0 0 30px rgba(27,225,211,0.15)",
                  }}
                  className="hover:bg-[#1BE1D3]/90 hover:shadow-[0_0_40px_rgba(27,225,211,0.3)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Start Your India Entry <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:+917044701968" className="w-full sm:w-auto">
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(13px, 2vw, 15px)",
                    padding: "0 24px",
                    height: "46px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(27,225,211,0.08)",
                    color: "#1BE1D3",
                    border: "1px solid rgba(27,225,211,0.3)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 0 30px rgba(27,225,211,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                  className="hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  Schedule Consultation
                </button>
              </a>
            </div>

            <p
              className="text-white/40 text-[11px] sm:text-xs"
              style={{ fontWeight: 400, letterSpacing: "0.05em" }}
            >
              For Foreign Companies, Startups & NRI Entrepreneurs — One Partner. Complete India Entry.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {[
            { value: "1.4B+", label: "Consumers", desc: "Largest young population globally" },
            { value: "7%+", label: "GDP Growth", desc: "Fastest-growing major economy" },
            { value: "800M+", label: "Internet Users", desc: "Digital-first consumer market" },
            { value: "100+", label: "Unicorn Startups", desc: "Thriving innovation ecosystem" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="text-center lg:text-left p-4 sm:p-0"
            >
              <div
                className="text-[#1BE1D3] mb-1"
                style={{
                  fontWeight: 600,
                  fontSize: "clamp(22px, 3vw, 36px)",
                  lineHeight: "1.2",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white text-[13px] sm:text-[14px] font-semibold mb-0.5">
                {stat.label}
              </div>
              <div className="text-white/40 text-[11px] sm:text-[12px]">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ INDIA VS WORLD ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="Global Comparison"
          title={<>Why India Stands Out.</>}
          description="Compared to other emerging and developed markets, India offers a unique combination of scale, growth, and ease of doing business for international companies."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { country: "India", metric: "7%+ GDP Growth", highlight: true },
            { country: "China", metric: "5% GDP Growth", highlight: false },
            { country: "USA", metric: "2.5% GDP Growth", highlight: false },
            { country: "EU", metric: "1.5% GDP Growth", highlight: false },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className={`relative p-6 rounded-2xl border ${
                item.highlight
                  ? "border-[#1BE1D3]/30 bg-[#1BE1D3]/5"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-2 -right-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1BE1D3]">
                    <Award className="w-3 h-3 text-black" />
                  </span>
                </div>
              )}
              <p className={`text-[18px] font-semibold mb-2 ${item.highlight ? "text-[#1BE1D3]" : "text-white"}`}>
                {item.country}
              </p>
              <p className="text-white/60 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                {item.metric}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ WHY INDIA ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="The Opportunity"
          title={<>India Is Ready for Your Business.</>}
          description="From a booming digital economy to sector-specific incentives for foreign businesses, India offers a unique combination of scale, talent, and growth potential. But entering a new market requires local knowledge, regulatory navigation, and an execution partner who understands both your goals and the ground reality."
        />
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: TrendingUp, title: "Economic Growth", description: "India is among the world's fastest-growing major economies, with expanding middle-class consumption and rising demand across sectors." },
            { icon: Users, title: "Massive Consumer Base", description: "Over 1.4 billion people — with increasing digital adoption, disposable income, and appetite for global brands and services." },
            { icon: Globe, title: "Digital Infrastructure", description: "India's digital stack — UPI, Aadhaar, ONDC — creates unmatched fintech, e-commerce, and SaaS opportunities for international businesses." },
            { icon: Briefcase, title: "Skilled Workforce", description: "One of the largest talent pools in technology, engineering, design, and English-speaking professionals for operations and scale." },
            { icon: Shield, title: "Government Incentives", description: "Make in India, PLI schemes, SEZ benefits, and FDI-friendly policies across sectors offer tangible advantages for foreign entrants." },
            { icon: Compass, title: "Sector Diversity", description: "From technology and healthcare to manufacturing, retail, and renewable energy — India's market opportunities span industries." },
          ].map((item, idx) => (
            <GlassCard key={idx} delay={idx * 0.05}>
              <div className="relative min-h-[160px] sm:min-h-[180px] space-y-3 sm:space-y-4">
                <div className="flex flex-col items-start gap-3 text-white">
                  <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#1BE1D3]" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-[16px] sm:text-[18px] font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                      {item.title}
                    </span>
                  </h3>
                </div>
                <p className="text-[13px] sm:text-[14px] font-normal leading-6 text-white/70" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="Your On-Ground Partner"
          title={<>We Handle the Complexity. You Focus on Your Business.</>}
          description="Entering India means navigating company law, tax structures, state-level regulations, cultural nuances, and competitive dynamics. Yurekh Solutions becomes your integrated execution partner — handling every layer of market entry so you can operate with confidence from day one."
        />
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Landmark,
              title: "Company Registration & Legal Setup",
              description: "We register your entity in India — private limited, LLP, branch office, or liaison office — based on your business model and long-term goals.",
              features: ["Entity structure advisory", "MCA & ROC registration", "PAN, TAN, GST registration", "FEMA & RBI compliance"],
            },
            {
              icon: Scale,
              title: "Regulatory & Tax Compliance",
              description: "India's regulatory landscape is multi-layered. We ensure you meet every central, state, and industry-specific compliance requirement.",
              features: ["Tax structuring & advisory", "Import-export licensing", "Industry-specific permits", "Labour law compliance"],
            },
            {
              icon: Target,
              title: "Market Research & Entry Strategy",
              description: "Before you invest, we validate the opportunity. Our market research identifies demand, competition, pricing, and the right entry model.",
              features: ["Market sizing & demand analysis", "Competitive landscape mapping", "Pricing & positioning strategy", "Risk assessment"],
            },
            {
              icon: Handshake,
              title: "Local Partnerships & Networks",
              description: "We connect you with verified local partners — distributors, suppliers, channel partners, and potential JV partners aligned with your objectives.",
              features: ["Partner identification & vetting", "Distributor network setup", "Joint venture facilitation", "Government & industry liaison"],
            },
            {
              icon: Rocket,
              title: "Brand Localization & Go-to-Market",
              description: "India's consumers respond to brands that understand local context. We adapt your messaging, positioning, and GTM for the Indian audience.",
              features: ["Brand messaging localization", "Go-to-market roadmap", "Digital presence setup", "Customer acquisition strategy"],
            },
            {
              icon: Cpu,
              title: "Technology & Operations Setup",
              description: "From setting up your tech infrastructure to building local operations — we ensure your business runs efficiently from the start.",
              features: ["Office & infrastructure setup", "Technology stack deployment", "Hiring & team building support", "Process & workflow design"],
            },
          ].map((service, idx) => (
            <GlassCard key={idx} delay={idx * 0.05}>
              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex flex-col items-start gap-2 sm:gap-3 text-white">
                  <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#1BE1D3]" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-[16px] sm:text-[18px] font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                      {service.title}
                    </span>
                  </h3>
                </div>
                <p className="text-[13px] sm:text-[14px] font-normal leading-6 text-white/70" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {service.description}
                </p>
                <ul className="space-y-2 pt-1 sm:pt-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-white/50 text-[12px] sm:text-[13px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1BE1D3] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* ═══════════════ SECTORS ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="Sectors"
          title={<>High-Opportunity Sectors in India.</>}
          description="India's economy is opening up across sectors. These are the areas where international businesses are finding the strongest growth and government support."
        />
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            { name: "Technology & SaaS", icon: Cpu },
            { name: "E-Commerce & D2C", icon: Globe },
            { name: "Healthcare & Pharma", icon: Shield },
            { name: "FinTech & BFSI", icon: LineChart },
            { name: "Renewable Energy", icon: Sparkles },
            { name: "Manufacturing", icon: Building2 },
            { name: "Food & Agriculture", icon: Compass },
            { name: "Education & EdTech", icon: Users },
            { name: "Real Estate & PropTech", icon: Landmark },
            { name: "Media & Entertainment", icon: Star },
          ].map((sector, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.04)}
              className="group relative overflow-hidden rounded-[14px] sm:rounded-[16px] border border-white/[0.06] bg-[#111] p-4 sm:p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#1BE1D3]/20 hover:bg-[#0a0a0a]"
            >
              <sector.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1BE1D3]/50 group-hover:text-[#1BE1D3] transition-colors mx-auto mb-2 sm:mb-3" strokeWidth={1.6} />
              <p className="text-white text-[12px] sm:text-[13px] font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                {sector.name}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ KEY REGIONS ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="Strategic Locations"
          title={<>Key Business Hubs in India.</>}
          description="India's business landscape is diverse. Each city offers unique advantages depending on your industry, target market, and operational needs."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { city: "Mumbai", state: "Maharashtra", focus: "Financial Capital", desc: "India's financial hub with the Bombay Stock Exchange, RBI headquarters, and major corporate offices. Ideal for fintech, banking, and consumer brands." },
            { city: "Bengaluru", state: "Karnataka", focus: "Tech Capital", desc: "The Silicon Valley of India with a thriving startup ecosystem, tech parks, and R&D centers. Perfect for SaaS, AI, and deep-tech ventures." },
            { city: "Delhi NCR", state: "Delhi", focus: "Political Capital", desc: "India's capital region with access to government bodies, policy makers, and a massive consumer market. Strong for B2B, policy-driven sectors." },
            { city: "Hyderabad", state: "Telangana", focus: "Pharma & IT Hub", desc: "A emerging tech and pharmaceutical hub with excellent infrastructure, lower costs, and strong government support for foreign businesses." },
            { city: "Chennai", state: "Tamil Nadu", focus: "Manufacturing Hub", desc: "India's Detroit with strong automotive, manufacturing, and SaaS presence. Excellent port connectivity for export-oriented businesses." },
            { city: "Pune", state: "Maharashtra", focus: "Education & Auto", desc: "A growing IT and automotive hub with top educational institutions, lower costs than Mumbai, and strong manufacturing ecosystem." },
          ].map((region, idx) => (
            <GlassCard key={idx} delay={idx * 0.05}>
              <div className="relative space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[18px] font-semibold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {region.city}
                    </h3>
                    <p className="text-white/50 text-[12px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {region.state}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#1BE1D3]/10 border border-[#1BE1D3]/20">
                    <span className="text-[#1BE1D3] text-[11px] font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {region.focus}
                    </span>
                  </span>
                </div>
                <p className="text-[13px] font-normal leading-6 text-white/70" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {region.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* ═══════════════ PROCESS — TIMELINE ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="Our Process"
          title={<>From First Call to First Customer.</>}
          description="A clear, structured approach to getting your business operational in India — without the guesswork."
        />

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1BE1D3]/20 to-transparent" />

          <div className="grid grid-cols-4 gap-6">
            {[
              { step: "01", icon: Compass, title: "Discovery & Assessment", description: "We understand your business model, target market, and entry goals. Then we assess feasibility, recommend the right entity structure, and outline the regulatory path.", duration: "Week 1–2" },
              { step: "02", icon: FileText, title: "Strategy & Planning", description: "A comprehensive market entry plan covering legal setup, tax structure, market positioning, local partnerships, and operational requirements.", duration: "Week 2–4" },
              { step: "03", icon: BadgeCheck, title: "Registration & Setup", description: "We execute company registration, obtain licenses, set up compliance frameworks, establish your local presence, and build on-ground infrastructure.", duration: "Week 4–8" },
              { step: "04", icon: Rocket, title: "Launch & Growth", description: "Coordinated market launch with brand localization, customer acquisition campaigns, partner onboarding, and ongoing operational support.", duration: "Week 8–12" },
            ].map((phase, idx) => (
              <motion.div key={idx} {...fadeUp(idx * 0.1)} className="relative">
                {/* Node */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1BE1D3]/30 bg-[#0a1a1a] mb-6 mx-auto">
                  <span className="text-[#1BE1D3] text-xs font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>{phase.step}</span>
                </div>
                {/* Duration badge */}
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1BE1D3]/5 border border-[#1BE1D3]/10">
                    <Clock className="w-3 h-3 text-[#1BE1D3]/60" />
                    <span className="text-[#1BE1D3]/60 text-[11px] font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>{phase.duration}</span>
                  </span>
                </div>
                <phase.icon className="w-6 h-6 text-[#1BE1D3]/40 mx-auto mb-3" strokeWidth={1.4} />
                <h3 className="text-[16px] font-semibold text-white text-center mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {phase.title}
                </h3>
                <p className="text-[13px] font-normal leading-6 text-white/60 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet — vertical timeline */}
        <div className="lg:hidden relative pl-8 sm:pl-12">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-[15px] sm:left-[23px] w-px bg-gradient-to-b from-[#1BE1D3]/30 via-[#1BE1D3]/10 to-transparent" />

          {[
            { step: "01", icon: Compass, title: "Discovery & Assessment", description: "We understand your business model, target market, and entry goals. Then we assess feasibility, recommend the right entity structure, and outline the regulatory path.", duration: "Week 1–2" },
            { step: "02", icon: FileText, title: "Strategy & Planning", description: "A comprehensive market entry plan covering legal setup, tax structure, market positioning, local partnerships, and operational requirements.", duration: "Week 2–4" },
            { step: "03", icon: BadgeCheck, title: "Registration & Setup", description: "We execute company registration, obtain licenses, set up compliance frameworks, establish your local presence, and build on-ground infrastructure.", duration: "Week 4–8" },
            { step: "04", icon: Rocket, title: "Launch & Growth", description: "Coordinated market launch with brand localization, customer acquisition campaigns, partner onboarding, and ongoing operational support.", duration: "Week 8–12" },
          ].map((phase, idx) => (
            <motion.div key={idx} {...fadeUp(idx * 0.1)} className="relative mb-8 last:mb-0">
              {/* Node */}
              <div className="absolute -left-8 sm:-left-12 top-0 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-[#1BE1D3]/30 bg-[#0a1a1a]">
                <span className="text-[#1BE1D3] text-[10px] sm:text-xs font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>{phase.step}</span>
              </div>
              <div className="ml-4 sm:ml-4">
                <div className="flex items-center gap-2 mb-2">
                  <phase.icon className="w-4 h-4 text-[#1BE1D3]/50" strokeWidth={1.6} />
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1BE1D3]/5 border border-[#1BE1D3]/10">
                    <Clock className="w-2.5 h-2.5 text-[#1BE1D3]/60" />
                    <span className="text-[#1BE1D3]/60 text-[10px] font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>{phase.duration}</span>
                  </span>
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {phase.title}
                </h3>
                <p className="text-[13px] font-normal leading-6 text-white/60" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ DOCUMENTS REQUIRED ═══════════════ */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left — text */}
          <motion.div {...fadeUp(0)}>
            <p className="text-[#1BE1D3] font-semibold text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Documentation
            </p>
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(22px, 3.5vw, 30px)",
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
              }}
            >
              Documents You'll Need.
            </h2>
            <p
              className="text-white/70 text-[14px] sm:text-[15px] mb-6"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "1.67" }}
            >
              We handle the paperwork. Here's what you'll need to provide to get started with your India market entry.
            </p>
            <Link to="/bookingform">
              <button
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "0 24px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "#1BE1D3",
                  color: "#000",
                  border: "none",
                }}
                className="hover:bg-[#1BE1D3]/90 transition-all duration-300 flex items-center gap-2"
              >
                Get Document Checklist <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>

          {/* Right — document list */}
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: FileCheck, label: "Passport & ID Proof" },
              { icon: FileText, label: "Address Proof" },
              { icon: Shield, label: "Home Country Registration" },
              { icon: BadgeCheck, label: "Board Resolution" },
              { icon: Layers, label: "Memorandum of Association" },
              { icon: FileCheck, label: "Articles of Association" },
              { icon: UserCheck, label: "Director Consent Letters" },
              { icon: DollarSign, label: "Investment Proof" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 * i)}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#1BE1D3]/15 transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1BE1D3]/5 flex-shrink-0">
                  <item.icon className="h-4 w-4 text-[#1BE1D3]/70" strokeWidth={1.6} />
                </span>
                <span className="text-white/80 text-[13px] font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════ COMPLIANCE CHECKLIST ═══════════════ */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left — text */}
          <motion.div {...fadeUp(0)}>
            <p className="text-[#1BE1D3] font-semibold text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Compliance Framework
            </p>
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(22px, 3.5vw, 30px)",
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
              }}
            >
              Every Regulatory Box. Checked.
            </h2>
            <p
              className="text-white/70 text-[14px] sm:text-[15px] mb-6"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "1.67" }}
            >
              India's compliance landscape spans central laws, state regulations, and industry-specific mandates.
              We manage the full checklist so you never miss a deadline or face a penalty.
            </p>
            <Link to="/bookingform">
              <button
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "0 24px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "#1BE1D3",
                  color: "#000",
                  border: "none",
                }}
                className="hover:bg-[#1BE1D3]/90 transition-all duration-300 flex items-center gap-2"
              >
                Get Compliance Checklist <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>

          {/* Right — checklist grid */}
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: FileCheck, label: "MCA / ROC Filing" },
              { icon: DollarSign, label: "GST Registration" },
              { icon: Shield, label: "FEMA / RBI Reporting" },
              { icon: FileText, label: "PAN & TAN Setup" },
              { icon: Scale, label: "Labour Law Compliance" },
              { icon: BadgeCheck, label: "Import-Export License (IEC)" },
              { icon: Building2, label: "Shop & Establishment Act" },
              { icon: UserCheck, label: "PF & ESI Registration" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 * i)}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#1BE1D3]/15 transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1BE1D3]/5 flex-shrink-0">
                  <item.icon className="h-4 w-4 text-[#1BE1D3]/70" strokeWidth={1.6} />
                </span>
                <span className="text-white/80 text-[13px] font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════ WHO WE HELP ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="Who We Work With"
          title={<>Built for International Businesses.</>}
          description="From Fortune 500 companies to ambitious startups, we serve diverse clients with one goal — successfully building their business in India."
        />
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Globe, title: "Foreign Companies Entering India", description: "Established businesses in the US, UK, UAE, Singapore, or elsewhere looking to set up operations, sell into, or expand within the Indian market." },
            { icon: Rocket, title: "Startups Scaling Internationally", description: "Global startups that see India as their next growth market and need a local team to handle registration, compliance, and launch execution." },
            { icon: Handshake, title: "NRI & Diaspora Entrepreneurs", description: "Indian-origin entrepreneurs and NRIs who want to start or invest in businesses in India and need a trusted partner to manage on-ground operations." },
            { icon: Building2, title: "Enterprises Setting Up GCCs", description: "Large organizations establishing Global Capability Centres or back-office operations in India to leverage local talent and cost advantages." },
            { icon: Briefcase, title: "Brands Testing the Market", description: "International brands that want to validate demand in India before making a full commitment — through pilot launches, pop-ups, or e-commerce entry." },
            { icon: LineChart, title: "Investors & Holding Companies", description: "Foreign investors and holding companies setting up Indian subsidiaries, managing FDI compliance, and structuring their India operations." },
          ].map((item, idx) => (
            <GlassCard key={idx} delay={idx * 0.05}>
              <div className="relative min-h-[160px] sm:min-h-[180px] space-y-3 sm:space-y-4">
                <div className="flex flex-col items-start gap-2 sm:gap-3 text-white">
                  <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#1BE1D3]" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-[16px] sm:text-[18px] font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                      {item.title}
                    </span>
                  </h3>
                </div>
                <p className="text-[13px] sm:text-[14px] font-normal leading-6 text-white/70" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* ═══════════════ WHY YUREKH ═══════════════ */}
      <Section>
        <motion.div
          {...fadeUp()}
          className="rounded-2xl sm:rounded-3xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #0a1a1a 0%, #0b1f1f 50%, #0a1515 100%)",
            border: "1px solid rgba(27,225,211,0.1)",
          }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 opacity-[0.05]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="whyGrid2" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1BE1D3" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#whyGrid2)" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#1BE1D3]/5 rounded-full blur-3xl" />

          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mb-8 sm:mb-12">
              <p className="text-[#1BE1D3] font-semibold text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-3 sm:mb-4">
                Why Yurekh Solutions
              </p>
              <h2
                className="text-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(22px, 3.5vw, 30px)",
                  lineHeight: "1.2",
                }}
              >
                One Partner. Complete India Entry.
              </h2>
              <p
                className="text-white/70 text-[14px] sm:text-[15px] mt-3 sm:mt-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "1.67" }}
              >
                Instead of coordinating separate lawyers, consultants, tax advisors, and marketing agencies — work with
                one integrated team that handles your entire India market entry end to end.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: MapPin, title: "On-Ground Presence", desc: "We operate from India with deep knowledge of local regulations, business culture, and market dynamics across states and sectors." },
                { icon: Scale, title: "Legal & Regulatory Expertise", desc: "End-to-end handling of company law, tax compliance, FDI regulations, licensing, and ongoing statutory requirements." },
                { icon: Target, title: "Execution-First Approach", desc: "We don't just advise — we register your company, set up operations, build your team, and launch your product in market." },
                { icon: Handshake, title: "Integrated Partnership", desc: "Legal, tax, technology, branding, and marketing — under one roof. No coordination gaps, no vendor management overhead." },
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="space-y-2 sm:space-y-3">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1BE1D3]/50" strokeWidth={1.4} />
                  <h3 className="text-white text-[15px] sm:text-[16px] font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-[12px] sm:text-[13px] leading-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════════ ENTRY SCENARIOS ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="Who We Build For"
          title={<>India Entry Scenarios We Handle.</>}
          description="Whatever stage you're at, we map a market entry path built around your specific goals, sector, and risk profile."
        />
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {[
            {
              icon: Globe,
              tag: "Foreign Companies",
              title: "Setting up an Indian subsidiary",
              desc: "Overseas businesses establishing a wholly-owned subsidiary or joint venture to serve Indian customers, hire local talent, or set up a delivery/GCC hub.",
              points: ["Wholly-owned subsidiary & JV structuring", "FDI approval & FEMA compliance", "Local director & registered office"],
            },
            {
              icon: Rocket,
              tag: "Startups & Scale-ups",
              title: "Expanding into the Indian market",
              desc: "Funded startups entering India for its talent pool and consumer scale — from entity setup to a launch-ready go-to-market motion.",
              points: ["Fast-track incorporation", "Go-to-market & pricing strategy", "Hiring, payroll & compliance setup"],
            },
            {
              icon: Landmark,
              tag: "NRI Entrepreneurs",
              title: "Launching a venture back home",
              desc: "Non-resident Indians building or investing in a business in India with full remote onboarding and on-ground execution support.",
              points: ["Remote incorporation & KYC", "Repatriation & tax planning", "On-ground operations partner"],
            },
          ].map((item, i) => (
            <GlassCard key={i} delay={i * 0.1} className="border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#1BE1D3]/10">
                  <item.icon className="w-5 h-5 text-[#1BE1D3]" strokeWidth={1.6} />
                </span>
                <span className="text-[#1BE1D3] text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold">
                  {item.tag}
                </span>
              </div>
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.3" }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/60 text-[13px] sm:text-[14px] mb-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "1.6" }}
              >
                {item.desc}
              </p>
              <ul className="space-y-2">
                {item.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/50 text-[12px] sm:text-[13px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <CheckCircle className="w-3.5 h-3.5 text-[#1BE1D3]/60 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <Section>
        <SectionHeader
          eyebrow="Frequently Asked"
          title={<>Questions About India Market Entry.</>}
          description="Common questions from international businesses considering India expansion."
        />
        <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.04)}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span
                  className="text-white text-[14px] sm:text-[15px] font-medium pr-4"
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[#1BE1D3]/50 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                  strokeWidth={1.8}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === idx ? "auto" : 0, opacity: openFaq === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p
                  className="px-4 sm:px-5 pb-4 sm:pb-5 text-white/60 text-[13px] sm:text-[14px] leading-6"
                >
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <Section>
        <motion.div
          {...fadeUp()}
          className="glass-panel max-w-7xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden relative"
        >
          {/* Grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ctaGrid2" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1BE1D3" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid2)" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#1BE1D3]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#1BE1D3]/3 rounded-full blur-3xl" />

          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            <p className="text-[#1BE1D3] font-semibold text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Let's Talk
            </p>
            <h2
              className="text-white mb-4 sm:mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(22px, 3.5vw, 32px)",
                lineHeight: "1.2",
              }}
            >
              Ready to Enter the <span className="text-[#1BE1D3]">Indian Market?</span>
            </h2>
            <p
              className="text-white/70 text-[14px] sm:text-[15px] max-w-xl mx-auto mb-8 sm:mb-10"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "1.67" }}
            >
              Whether you're exploring India as a new market or ready to register and launch, we're here to make it
              happen. Let's discuss your entry strategy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <Link to="/bookingform" className="w-full sm:w-auto">
                <button
                  style={{
                    fontWeight: 600,
                    fontSize: "clamp(13px, 2vw, 15px)",
                    padding: "0 24px",
                    height: "46px",
                    borderRadius: "10px",
                    backgroundColor: "#1BE1D3",
                    color: "#000",
                    border: "none",
                    boxShadow: "0 0 30px rgba(27,225,211,0.15)",
                  }}
                  className="hover:bg-[#1BE1D3]/90 hover:shadow-[0_0_40px_rgba(27,225,211,0.3)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:+917044701968" className="w-full sm:w-auto">
                <button
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(13px, 2vw, 15px)",
                    padding: "0 24px",
                    height: "46px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(27,225,211,0.08)",
                    color: "#1BE1D3",
                    border: "1px solid rgba(27,225,211,0.3)",
                    backdropFilter: "blur(12px)",
                  }}
                  className="hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  +91 91362 42706
                </button>
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { icon: <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />, text: "Response within 24 hours" },
                { icon: <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />, text: "Confidential consultation" },
                { icon: <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />, text: "No-obligation assessment" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-white/30">
                  <span className="text-[#1BE1D3]/50">{item.icon}</span>
                  <span className="text-[11px] sm:text-[12px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default BusinessLaunchIndia;
