import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  findServiceBySlug,
  serviceCategories,
  getServiceImage,
} from "@/data/services";
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
          <h1 className="text-4xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
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

  return (
    <div className="min-h-screen bg-[#0b0f0f]">
      {/* Hero Banner */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img
          src={getServiceImage(service.slug)}
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.15" }}
          >
            {service.name}
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 text-white/80 text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <Link to="/" className="hover:text-[#1BE1D3] transition-colors">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-[#1BE1D3]">{category.title}</span>
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
            <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-semibold mb-3 block" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
              OUR SERVICES
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              {category.title} We Provide
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
                <h3 className="text-[#1BE1D3] text-2xl font-bold text-center mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                  {service.name}
                </h3>
                <p className="text-white/70 text-center leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px" }}>
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
                      <h3 className="text-[#1BE1D3] text-2xl font-bold text-center mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                        {rs.name}
                      </h3>
                      <p className="text-white/70 text-center leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px" }}>
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
              <h2 className="text-white text-3xl sm:text-4xl font-bold mb-8 text-center tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                About {service.name}
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.8" }}>
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
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              What We Offer
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px" }}>
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
                <span className="text-white/80 text-base" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
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
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              Why Choose <span className="text-[#1BE1D3]">Yurekh</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Star, title: "Premium Quality", desc: "Every deliverable meets the highest standards of excellence." },
              { icon: Shield, title: "Trusted by 200+", desc: "Businesses across industries trust our expertise." },
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
                <h3 className="text-white text-lg mb-2 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
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
            <h3 className="text-white/40 text-sm uppercase tracking-wider mb-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
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
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>
              Ready to Get Started?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8" style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: "1.7" }}>
              Let's discuss how our {service.name.toLowerCase()} can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/bookingform")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[#1BE1D3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  backgroundColor: "rgba(27,225,211,0.1)",
                  border: "2px solid rgba(27,225,211,0.5)",
                }}
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="tel:+919136242706"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:bg-white/10"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                <Phone className="h-5 w-5" /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
