import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  findServiceBySlug,
  serviceCategories,
} from "@/data/services";
import SEOHead from "@/components/SEOHead";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Layers,
  Share2,
  Code,
  FileText,
  Mail,
  BarChart3,
  Smartphone,
  Target,
  Search,
  Zap,
  Globe,
  Palette,
  Megaphone,
  TrendingUp,
  Users,
  Crown,
  Star,
  Shield,
  Rocket,
  Camera,
  PenTool,
  MessageSquare,
  Award,
  Briefcase,
  Heart,
  Lightbulb,
  Settings,
  BarChart,
  UserCheck,
  Gift,
  Headphones,
  Monitor,
  Printer,
  Newspaper,
  Send,
  Calendar,
  MapPin,
  Video,
  BookOpen,
  HelpCircle,
  Clock,
  DollarSign,
  Package,
  Truck,
  Users2,
  Building,
  ShoppingBag,
  CreditCard,
  Database,
  Cloud,
  Lock,
  Wifi,
  Cpu,
  HardDrive,
  Server,
  Terminal,
  GitBranch,
  Workflow,
  PieChart,
  LineChart,
  Activity,
  Eye,
  MessageCircle,
  ThumbsUp,
  HeartHandshake,
  Handshake,
  Trophy,
  Medal,
  Gem,
  Sparkles,
  Flame,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";

// Complete icon mapping for all 75+ services
const serviceIcons: Record<string, LucideIcon> = {
  // Development Services
  "website-development": Globe,
  "responsive-website": Monitor,
  "web-maintenance": Settings,
  "landing-pages": Target,
  "mobile-application": Smartphone,
  "ui-ux-designing": Palette,
  "e-commerce": ShoppingBag,
  "microsite": Globe,
  "digital-visiting-card": CreditCard,
  "custom-qr-code": Code,
  "custom-software": Cpu,
  "ecommerce-platform-development": Database,
  "quality-assurance-testing": CheckCircle,

  // Premium Digital Branding
  "elite-website-design": Layers,
  "exclusive-social-media": Share2,
  "decadent-seo-strategies": Search,
  "opulent-ppc-campaigns": Megaphone,
  "majestic-email-marketing": Mail,
  "sumptuous-content-creation": FileText,
  "tailored-landing-page": Target,
  "royal-social-media-analytics": BarChart3,
  "mobile-responsive-elegance": Smartphone,
  "regal-campaign-optimization": TrendingUp,

  // Product Launch & Development
  "exclusive-market-research": Search,
  "strategic-launch-blueprint": Rocket,
  "premium-brand-positioning": Crown,
  "expert-pricing-consultation": DollarSign,
  "bespoke-promotional-materials": Package,
  "exclusive-launch-events": Calendar,
  "luxury-distribution-channels": Truck,
  "celebrity-collaborations": Users2,
  "milestone-laden-timeline": Clock,
  "post-launch-assessment": BarChart,

  // Social Media Marketing
  "bespoke-social-media-strategy": MessageSquare,
  "opulent-content-creation-management": PenTool,
  "royal-influencer-partnerships": UserCheck,
  "lavish-social-campaigns-contests": Gift,
  "exclusive-social-analytics-reporting": BarChart3,

  // Elevated Branding Services
  "luxury-logo-design": PenTool,
  "opulent-brand-style-guide": BookOpen,
  "sumptuous-brand-collateral": Package,
  "consistent-brand-representation": Shield,
  "tailored-brand-messaging": MessageSquare,
  "refined-brand-voice-tone": MessageCircle,
  "royal-tagline-creation": PenTool,
  "exclusive-brand-storytelling": BookOpen,
  "regal-presentation-templates": FileText,
  "aristocratic-brand-audit": CheckCircle,
  "high-end-packaging-design": Package,
  "luxury-stationery-design": Printer,
  "exquisite-product-photography": Camera,

  // Print Media & Advertising
  "luxury-print-collateral": Printer,
  "high-end-magazine-ads": Newspaper,
  "opulent-billboard-outdoor": Monitor,
  "aristocratic-direct-mail": Mail,
  "bespoke-print-campaigns": Megaphone,

  // Tailored Digital Work
  "exclusive-monthly-analytics": BarChart3,
  "lavish-ab-testing": Activity,
  "luxurious-tracking-attribution": Eye,
  "elite-customer-segmentation": Users,
  "bespoke-data-visualization": PieChart,
  "opulent-competitor-analysis": Search,
  "extravagant-marketing-automation": Workflow,
  "decadent-social-listening": MessageSquare,
  "exclusive-content-strategy": FileText,
  "exclusive-training-support": BookOpen,
  "vip-customer-engagement": HeartHandshake,
  "luxury-loyalty-programs": Gift,
  "high-touch-customer-portals": Headphones,
  "interactive-web-experiences": Monitor,

  // Public Relations
  "vip-media-relations": Newspaper,
  "exquisite-event-publicity": Calendar,
  "royal-brand-ambassador": Award,
  "luxury-brand-partnerships": Handshake,
  "high-profile-media-placements": Megaphone,

  // Start a New Business
  "company-formation": Building,
  "legal-compliance": Shield,
  "business-strategy": Lightbulb,
  "brand-identity": Palette,
  "technology-stack": Server,
  "digital-marketing": Megaphone,

  // Scale Existing Business
  "brand-transformation": Sparkles,
  "market-expansion": Globe,
  "digital-transformation": Cloud,
  "growth-marketing": TrendingUp,
  "operational-excellence": Workflow,
  "customer-experience": HeartHandshake,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const result = slug ? findServiceBySlug(slug) : null;

  useEffect(() => {
    if (!result) {
      navigate("/", { replace: true });
      return;
    }
    document.title = result.service.seoTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", result.service.seoDescription);

    // Add keywords meta
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute("content", result.service.keywords.join(", "));

    window.scrollTo(0, 0);
  }, [result]);

  if (!result) {
    return (
      <div className="min-h-screen bg-[#0b0f0f] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}>
            Redirecting...
          </h1>
          <p className="text-white/60" style={{ fontFamily: "Poppins, sans-serif" }}>
            Taking you to the homepage.
          </p>
        </div>
      </div>
    );
  }

  const { service, category } = result;
  const relatedServices = category.services.filter((s) => s.slug !== service.slug);
  const IconComponent = serviceIcons[service.slug] || Layers;

  // Split service name: first part white, last part teal (e.g. "Decadent" + "SEO Strategies")
  const nameWords = service.name.split(" ");
  const nameSplitAt = Math.max(1, Math.floor(nameWords.length / 2));
  const namePlain = nameWords.slice(0, nameSplitAt).join(" ");
  const nameAccent = nameWords.slice(nameSplitAt).join(" ");

  return (
    <div className="min-h-screen bg-[#0b0f0f]">
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={service.keywords.join(", ")}
        canonical={`https://yurekh.com/services/${service.slug}`}
        breadcrumbs={[
          { name: "Services", url: "https://yurekh.com/services" },
          { name: service.name, url: `https://yurekh.com/services/${service.slug}` },
        ]}
        schema={JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@type": "Organization",
              name: "Yurekh Solutions",
              url: "https://yurekh.com",
              telephone: "+91-9136242706",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            },
            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "United Arab Emirates" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Singapore" },
              { "@type": "Country", name: "Australia" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: category.title,
              itemListElement: category.services.map((s, i) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.name,
                },
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `What is ${service.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: service.description,
                },
              },
              {
                "@type": "Question",
                name: `How much does ${service.name} cost?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Our ${service.name.toLowerCase()} pricing depends on project scope, complexity, and timeline. Contact us for a customized quote tailored to your business needs.`,
                },
              },
              {
                "@type": "Question",
                name: `How long does ${service.name} take?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Timeline for ${service.name.toLowerCase()} varies based on requirements. Typical projects range from 2-12 weeks depending on scope and complexity.`,
                },
              },
              {
                "@type": "Question",
                name: `Which countries does Yurekh Solutions serve for ${service.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide services across India, UAE, USA, UK, Singapore, and Australia with local market expertise in each region.",
                },
              },
            ].map(q => ({
              ...q,
              "@type": "Question",
            })),
          },
        ])}
      />
      {/* Hero Banner */}
      <section
        className="relative h-[460px] sm:h-[520px] overflow-hidden pt-28 sm:pt-32"
        style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
      >
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Teal Radial Gradient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, rgba(27,225,211,0.5), transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full blur-3xl opacity-15"
            style={{ background: "radial-gradient(circle, rgba(27,225,211,0.4), transparent 70%)" }}
          />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1BE1D3]/30 bg-[#1BE1D3]/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1BE1D3]" />
            <span className="text-[#1BE1D3] text-sm font-medium">Services</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white text-[30px] sm:text-[36px] lg:text-[44px] font-semibold mb-4 leading-[1.2]"
          >
            {service.name}
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-white/80 text-sm max-w-full px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <Link to="/" className="hover:text-[#1BE1D3] transition-colors">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
            <span className="text-[#1BE1D3] text-center">{category.title}</span>
          </motion.nav>
        </div>
      </section>

      {/* Section Header */}
      <section className="py-16 sm:py-20 bg-[#0b0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mt-5 mb-3 block">
              OUR SERVICES
            </span>
            <h2 className="text-white text-[26px] sm:text-[30px] font-semibold mb-6 leading-[1.2]">
              {category.title} <span className="text-[#1BE1D3]">We Provide</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
              <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Grid - Premium 3x3 */}
      <section className="pb-20 bg-[#0b0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Current Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-gradient-to-br from-[#0d2828] to-[#0a1f1f] border-2 border-[#1BE1D3]/50 rounded-2xl p-8 hover:border-[#1BE1D3] hover:shadow-[0_0_40px_rgba(27,225,211,0.3)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1BE1D3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-[#1BE1D3] text-[16px] font-semibold text-center mb-4">
                  {service.name}
                </h3>
                <p className="text-white/60 text-center text-[13px] leading-[1.7]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {service.description}
                </p>
              </div>
            </motion.div>

            {/* Related Services Cards */}
            {relatedServices.slice(0, 8).map((rs, idx) => {
              const RelatedIcon = serviceIcons[rs.slug] || Layers;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link
                    to={`/services/${rs.slug}`}
                    className="group block relative bg-gradient-to-br from-[#0d2828]/80 to-[#0a1f1f]/80 border border-white/10 rounded-2xl p-8 hover:border-[#1BE1D3]/50 hover:shadow-[0_0_30px_rgba(27,225,211,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/15 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/20 group-hover:scale-110 transition-transform duration-500">
                          <RelatedIcon className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2} />
                        </div>
                      </div>
                      <h3 className="text-[#1BE1D3] text-[16px] font-semibold text-center mb-4">
                        {rs.name}
                      </h3>
                      <p className="text-white/60 text-center text-[13px] leading-[1.7]" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {rs.description.substring(0, 130)}...
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0b0f0f] to-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <span className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-3 block">
                  ABOUT THIS SERVICE
                </span>
                <h2 className="text-white text-[30px] font-semibold mb-4 leading-[1.2]">
                  About {namePlain}{nameAccent && <> <span className="text-[#1BE1D3]">{nameAccent}</span></>}
                </h2>
                <div className="flex items-center justify-center gap-2 mb-10">
                  <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                  <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
                </div>
              </div>
              <div className="space-y-6 text-white/70" style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: "1.7" }}>
                <p>{service.description}</p>
                <p>
                  At Yurekh Solutions, our {service.name.toLowerCase()} services are designed to help businesses stand out in today's competitive digital landscape. We combine industry expertise with innovative approaches to deliver results that exceed expectations. Whether you're a startup or an established enterprise, our team tailors every solution to your unique needs.
                </p>
                <p>
                  Our approach to {service.name.toLowerCase()} is rooted in deep research, strategic thinking, and meticulous execution. We believe in transparent communication, measurable outcomes, and building long-term partnerships with our clients. Every project we undertake is an opportunity to demonstrate why leading brands trust Yurekh Solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer - 3x3 Grid */}
      <section className="py-16 sm:py-20 bg-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-3 block">
              OUR EXPERTISE
            </span>
            <h2 className="text-white text-[30px] font-semibold mb-4 leading-[1.2]">
              What We <span className="text-[#1BE1D3]">Offer</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
              <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
            </div>
            <p className="text-white/70 text-[15px] leading-[1.7] max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#1BE1D3]/30 hover:bg-[#1BE1D3]/[0.02] transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-[#1BE1D3] mt-1 flex-shrink-0" />
                <span className="text-white/80 text-[15px] leading-[1.7]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Yurekh */}
      <section className="py-16 sm:py-20 bg-[#0b0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-3 block">
              WHY US
            </span>
            <h2 className="text-white text-[30px] font-semibold mb-4 leading-[1.2]">
              Why Choose <span className="text-[#1BE1D3]">Yurekh</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
              <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Star, title: "Premium Quality", desc: "Every deliverable meets the highest standards of excellence." },
              { icon: Shield, title: "Trusted Partner", desc: "Businesses across industries trust our expertise." },
              { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising on quality." },
              { icon: Users, title: "Dedicated Team", desc: "A dedicated team assigned to your project success." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.02]"
              >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30 mx-auto mb-4">
                <item.icon className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2} />
              </div>
                <h3 className="text-white text-[16px] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-[13px] leading-[1.7]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      <section className="py-12 bg-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-white/40 text-sm uppercase tracking-wider mb-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
              Related Keywords
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {service.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-sm border border-white/10 text-white/50 hover:border-[#1BE1D3]/30 hover:text-[#1BE1D3] transition-all duration-300"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0b0f0f] to-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-3 block">
              GET STARTED
            </span>
            <h2 className="text-white text-[30px] font-semibold mb-6 leading-[1.2]">
              Ready to <span className="text-[#1BE1D3]">Get Started?</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10" style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: "1.7" }}>
              Let's discuss how our {service.name.toLowerCase()} can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <button
                onClick={() => navigate("/bookingform")}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)] w-full sm:w-auto sm:min-w-[240px]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  backgroundColor: "#1BE1D3",
                }}
              >
                Get a Quote <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </button>
              <a
                href="tel:+919136242706"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full transition-all duration-300 hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)] hover:shadow-[0_0_30px_rgba(27,225,211,0.2)] hover:-translate-y-px w-full sm:w-auto sm:min-w-[240px]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  background: "rgba(27,225,211,0.08)",
                  color: "#1BE1D3",
                  border: "1px solid rgba(27,225,211,0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 0 20px rgba(27,225,211,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Phone className="h-4 w-4 flex-shrink-0" /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
