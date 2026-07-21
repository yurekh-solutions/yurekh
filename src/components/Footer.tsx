import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MessageSquare, Twitter, Zap, Phone, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const sitemapData = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Business Consulting", href: "/business-consulting" },
      { name: "Impact", href: "/impact" },
      { name: "FAQ", href: "/faq" },
      { name: "Case Studies", href: "/case-study" },
      { name: "Industries", href: "/industries" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blogs" },
      { name: "Contact", href: "/#contact" },
      { name: "AINOS Business Suite", href: "/ainos", external: true },
    ],
  },
  {
    title: "Development Services",
    links: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Responsive Website", href: "/services/responsive-website" },
      { name: "Web Maintenance", href: "/services/web-maintenance" },
      { name: "Landing Pages", href: "/services/landing-pages" },
      { name: "Mobile Application", href: "/services/mobile-application" },
      { name: "UI/UX Designing", href: "/services/ui-ux-designing" },
      { name: "E-commerce", href: "/services/e-commerce" },
      { name: "Microsite", href: "/services/microsite" },
      { name: "Digital Visiting Card", href: "/services/digital-visiting-card" },
      { name: "Custom QR Code", href: "/services/custom-qr-code" },
      { name: "Custom Software", href: "/services/custom-software" },
      { name: "E-commerce Platform", href: "/services/ecommerce-platform-development" },
      { name: "QA & Testing", href: "/services/quality-assurance-testing" },
    ],
  },
  {
    title: "Digital Branding",
    links: [
      { name: "Elite Website Design", href: "/services/elite-website-design" },
      { name: "Social Media Management", href: "/services/exclusive-social-media" },
      { name: "SEO Strategies", href: "/services/decadent-seo-strategies" },
      { name: "PPC Campaigns", href: "/services/opulent-ppc-campaigns" },
      { name: "Email Marketing", href: "/services/majestic-email-marketing" },
      { name: "Content Creation", href: "/services/sumptuous-content-creation" },
      { name: "Landing Page", href: "/services/tailored-landing-page" },
      { name: "Social Analytics", href: "/services/royal-social-media-analytics" },
      { name: "Mobile Responsive", href: "/services/mobile-responsive-elegance" },
      { name: "Campaign Optimization", href: "/services/regal-campaign-optimization" },
    ],
  },
  {
    title: "Product Launch",
    links: [
      { name: "Market Research", href: "/services/exclusive-market-research" },
      { name: "Launch Blueprint", href: "/services/strategic-launch-blueprint" },
      { name: "Brand Positioning", href: "/services/premium-brand-positioning" },
      { name: "Pricing Consultation", href: "/services/expert-pricing-consultation" },
      { name: "Promotional Materials", href: "/services/bespoke-promotional-materials" },
      { name: "Launch Events", href: "/services/exclusive-launch-events" },
      { name: "Distribution Channels", href: "/services/luxury-distribution-channels" },
      { name: "Celebrity Collaborations", href: "/services/celebrity-collaborations" },
      { name: "Project Timeline", href: "/services/milestone-laden-timeline" },
      { name: "Post-Launch Assessment", href: "/services/post-launch-assessment" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { name: "Social Strategy", href: "/services/bespoke-social-media-strategy" },
      { name: "Content Creation", href: "/services/opulent-content-creation-management" },
      { name: "Influencer Partnerships", href: "/services/royal-influencer-partnerships" },
      { name: "Campaigns & Contests", href: "/services/lavish-social-campaigns-contests" },
      { name: "Analytics & Reporting", href: "/services/exclusive-social-analytics-reporting" },
    ],
  },
  {
    title: "Branding Services",
    links: [
      { name: "Logo Design", href: "/services/luxury-logo-design" },
      { name: "Brand Style Guide", href: "/services/opulent-brand-style-guide" },
      { name: "Brand Collateral", href: "/services/sumptuous-brand-collateral" },
      { name: "Brand Representation", href: "/services/consistent-brand-representation" },
      { name: "Brand Messaging", href: "/services/tailored-brand-messaging" },
      { name: "Brand Voice & Tone", href: "/services/refined-brand-voice-tone" },
      { name: "Tagline Creation", href: "/services/royal-tagline-creation" },
      { name: "Brand Storytelling", href: "/services/exclusive-brand-storytelling" },
      { name: "Presentation Templates", href: "/services/regal-presentation-templates" },
      { name: "Brand Audit", href: "/services/aristocratic-brand-audit" },
      { name: "Packaging Design", href: "/services/high-end-packaging-design" },
      { name: "Stationery Design", href: "/services/luxury-stationery-design" },
      { name: "Product Photography", href: "/services/exquisite-product-photography" },
    ],
  },
  {
    title: "Print & Advertising",
    links: [
      { name: "Print Collateral", href: "/services/luxury-print-collateral" },
      { name: "Magazine Ads", href: "/services/high-end-magazine-ads" },
      { name: "Billboard & Outdoor", href: "/services/opulent-billboard-outdoor" },
      { name: "Direct Mail", href: "/services/aristocratic-direct-mail" },
      { name: "Print Campaigns", href: "/services/bespoke-print-campaigns" },
    ],
  },
  {
    title: "Digital Work",
    links: [
      { name: "Analytics Reports", href: "/services/exclusive-monthly-analytics" },
      { name: "A/B Testing", href: "/services/lavish-ab-testing" },
      { name: "Tracking & Attribution", href: "/services/luxurious-tracking-attribution" },
      { name: "Customer Segmentation", href: "/services/elite-customer-segmentation" },
      { name: "Data Visualization", href: "/services/bespoke-data-visualization" },
      { name: "Competitor Analysis", href: "/services/opulent-competitor-analysis" },
      { name: "Marketing Automation", href: "/services/extravagant-marketing-automation" },
      { name: "Social Listening", href: "/services/decadent-social-listening" },
      { name: "Content Strategy", href: "/services/exclusive-content-strategy" },
      { name: "Training & Support", href: "/services/exclusive-training-support" },
      { name: "Customer Engagement", href: "/services/vip-customer-engagement" },
      { name: "Loyalty Programs", href: "/services/luxury-loyalty-programs" },
      { name: "Service Portals", href: "/services/high-touch-customer-portals" },
      { name: "Web Experiences", href: "/services/interactive-web-experiences" },
    ],
  },
  {
    title: "Public Relations",
    links: [
      { name: "Media Relations", href: "/services/vip-media-relations" },
      { name: "Event Publicity", href: "/services/exquisite-event-publicity" },
      { name: "Brand Ambassador", href: "/services/royal-brand-ambassador" },
      { name: "Brand Partnerships", href: "/services/luxury-brand-partnerships" },
      { name: "Media Placements", href: "/services/high-profile-media-placements" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Finance & Banking", href: "/industries/finance" },
      { name: "Retail & E-commerce", href: "/industries/retail" },
      { name: "Education", href: "/industries/education" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Hospitality", href: "/industries/hospitality" },
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Media & Entertainment", href: "/industries/media" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Book a Demo", href: "/bookingform" },
      { name: "Free Consultation", href: "/bookingform" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

const Footer = () => {
  const socialWidgets = [
    { name: "Instagram", url: "https://www.instagram.com/yurekhsolutions" },
    { name: "Facebook", url: "https://www.facebook.com/share/1JzwtyDtAx/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/yurekh-solutions-private-limited/" },
    { name: "Threads", url: "https://www.threads.com/@yurekhsolutions" },
    { name: "Twitter (X)", url: "https://x.com/yurekhsolutions" },
  ];

  const getSocialIcon = (name) => {
    switch (name) {
      case "Instagram": return <Instagram className="w-5 h-5" />;
      case "Facebook": return <Facebook className="w-5 h-5" />;
      case "LinkedIn": return <Linkedin className="w-5 h-5" />;
      case "Threads": return <MessageSquare className="w-5 h-5" />;
      case "Twitter (X)": return <Twitter className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* SiteMap Section */}
      <section style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10">
            {sitemapData.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-normal text-sm md:text-base mb-4 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          className="text-white/60 text-sm hover:text-[#1BE1D3] transition-colors duration-300"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-white/60 text-sm hover:text-[#1BE1D3] transition-colors duration-300"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="relative z-10 py-12 border-t border-[#1BE1D3]/20" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 overflow-hidden">
                  <img src={logo} alt="Yurekh Solutions" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-[#1BE1D3]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>YUREKH SOLUTIONS</h3>
                  <p className="text-[#1BE1D3]/80 text-sm font-normal" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>AI-Powered Digital Excellence</p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed text-sm max-w-md" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}>
                Transforming businesses with cutting-edge AI technology, intelligent automation,
                and data-driven strategies that deliver measurable results and sustainable growth.
              </p>

              <div className="flex gap-3 flex-wrap">
                <a href="https://wa.me/919136242706" target="_blank" rel="noopener noreferrer" className="glass-btn text-sm px-4 py-2 rounded-lg text-[#1BE1D3]" style={{ fontFamily: "Poppins, sans-serif" }}>WhatsApp Chat</a>
                <a href="tel:+919136242706" className="glass-btn text-sm px-4 py-2 rounded-lg text-[#1BE1D3]" style={{ fontFamily: "Poppins, sans-serif" }}>Call Now</a>
                <a href="mailto:yurekhsolutions@gmail.com" className="glass-btn text-sm px-4 py-2 rounded-lg text-[#1BE1D3]" style={{ fontFamily: "Poppins, sans-serif" }}>Email Us</a>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h4 className="text-base font-normal text-[#1BE1D3] mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>AI Services</h4>
              <ul className="space-y-2 text-sm">
                {["AI Marketing Automation", "Predictive Analytics", "Content Intelligence", "Digital Strategy", "Growth Optimization", "Performance Analytics"].map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/70 hover:text-[#1BE1D3] transition" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1BE1D3]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-normal text-[#1BE1D3] mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Careers", href: "/careers" },
                  { name: "Business Consulting", href: "/business-consulting" },
                  { name: "Impact", href: "/impact" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Blog", href: "/blogs" },
                  { name: "Book Demo", href: "/bookingform" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms & Conditions", href: "/terms" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="flex items-center gap-2 text-white/70 hover:text-[#1BE1D3] transition" style={{ fontFamily: "Poppins, sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1BE1D3]" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider & Social Icons */}
          <div className="border-t border-[#1BE1D3]/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-xs md:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>© 2025 Yurekh Solutions. All rights reserved.</p>
              <p className="text-white/50 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Empowering businesses through intelligent technology solutions.</p>
            </div>

            <div className="flex gap-3">
              {socialWidgets.map((widget) => (
                <a key={widget.name} href={widget.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#1BE1D3]/50 rounded-lg flex items-center justify-center hover:bg-[#1BE1D3]/10 transition" title={widget.name}>
                  {getSocialIcon(widget.name)}
                </a>
              ))}
            </div>
          </div>

          {/* AI Badge */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#1BE1D3]/50 rounded-full">
              <Zap className="w-4 h-4 text-[#1BE1D3]" />
              <span className="text-[#1BE1D3] text-xs md:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Powered by Advanced AI Technology</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
