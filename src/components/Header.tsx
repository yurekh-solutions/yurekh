import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, MessageCircle, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { getAllServices } from "@/data/services";
import { getAllIndustries } from "@/data/industries";

// Build name-to-slug map for linking
const serviceNameToSlug: Record<string, string> = {};
getAllServices().forEach((s) => {
  serviceNameToSlug[s.name] = s.slug;
});

// Build industry name-to-slug map
const industryNameToSlug: Record<string, string> = {};
getAllIndustries().forEach((i) => {
  industryNameToSlug[i.name] = i.slug;
});

interface DropdownItem {
  name: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  services: string[];
}

interface IndustryItem {
  name: string;
  description: string;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
  megaMenu?: ServiceCategory[];
  industryMenu?: IndustryItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 const socialWidgets = [
    { name: "Instagram", url: "https://www.instagram.com/yurekhsolutions" },
    { name: "Facebook", url: "https://www.facebook.com/share/1JzwtyDtAx/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/yurekh-solutions-private-limited/" },
    { name: "Threads", url: "https://www.threads.com/@yurekhsolutions" },
    { name: "Twitter (X)", url: "https://x.com/yurekhsolutions" },
  ];

  const navItems: NavItem[] = [
    {
      name: "Services",
      megaMenu: [
        {
          title: "Development Services",
          services: ["Website Development", "Responsive Website", "Web Maintenance", "Landing Pages", "Mobile Application", "UI/UX Designing", "E-commerce", "Microsite", "Digital Visiting Card", "Custom QR Code", "Custom Software", "E-commerce Platform Development", "Quality Assurance & Testing"],
        },
        {
          title: "Premium Digital Branding",
          services: ["Elite Website Design & Development", "Exclusive Social Media Management", "Decadent SEO Strategies", "Opulent PPC Advertising Campaigns", "Majestic Email Marketing Automation", "Sumptuous Content Creation", "Tailored Landing Page", "Royal Social Media Analytics", "Mobile Responsive Elegance", "Regal Campaign Optimization"],
        },
        {
          title: "Product Launch & Development",
          services: ["Exclusive Market Research & Analysis", "Strategic Launch Blueprint", "Premium Brand Positioning Strategies", "Expert Pricing Consultation", "Bespoke Promotional Materials", "Exclusive Launch Events", "Luxury Distribution Channels", "Celebrity Collaborations", "Milestone-Laden Timeline", "Post-Launch Assessment"],
        },
        {
          title: "Social Media Marketing",
          services: ["Bespoke Social Media Strategy Development", "Opulent Content Creation & Management", "Royal Influencer Partnership Collaborations", "Lavish Social Media Campaigns & Contests", "Exclusive Social Media Analytics & Reporting"],
        },
        {
          title: "Elevated Branding Services",
          services: ["Luxury Logo Design", "Opulent Brand Style Guide", "Sumptuous Brand Collateral", "Consistent Brand Representation", "Tailored Brand Messaging", "Refined Brand Voice & Tone", "Royal Tagline Creation", "Exclusive Brand Storytelling", "Regal Presentation Templates", "Aristocratic Brand Audit", "High-End Packaging Design", "Luxury Stationery Design", "Exquisite Product Photography"],
        },
        {
          title: "Print Media & Advertising",
          services: ["Luxury Print Collateral Design", "High-End Magazine Advertisements", "Opulent Billboard & Outdoor Advertising", "Aristocratic Direct Mail Campaigns", "Bespoke Print Media Campaigns"],
        },
        {
          title: "Tailored Digital Work",
          services: ["Exclusive Monthly Analytics Reports", "Lavish A/B Testing", "Luxurious Tracking & Attribution", "Elite Customer Segmentation", "Bespoke Data Visualization", "Opulent Competitor Analysis", "Extravagant Marketing Automation", "Decadent Social Listening", "Exclusive Content Strategy", "Exclusive Training & Support", "VIP Customer Engagement Programs", "Luxury Loyalty Programs", "High-Touch Customer Service Portals", "Interactive Web Experiences"],
        },
        {
          title: "Public Relations (PR)",
          services: ["VIP Media Relations & Press Releases", "Exquisite Event Publicity & Coverage", "Royal Brand Ambassador Programs", "Luxury Brand Partnership & Sponsorships", "High-Profile Media Placements & Features"],
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      industryMenu: [
        { name: "Agriculture", description: "Precision farming and farm-to-market efficiency" },
        { name: "Automotive", description: "Connected vehicle services and operational analytics" },
        { name: "Education", description: "Digital learning ecosystems for modern education" },
        { name: "Energy", description: "Infrastructure visibility and operational resilience" },
        { name: "Fashion", description: "Agile platforms for trend-responsive commerce" },
        { name: "Finance", description: "Secure, compliant finance experiences built to scale" },
        { name: "Food", description: "Ordering, delivery, and kitchen operations unified" },
        { name: "Healthcare", description: "Patient-first systems with secure data flow" },
        { name: "Logistics", description: "End-to-end visibility across the supply chain" },
        { name: "Manufacturing", description: "Smart factories with real-time production insight" },
        { name: "Media & Entertainment", description: "Personalized content delivery at massive scale" },
        { name: "Real Estate", description: "Digital property experiences from search to sale" },
        { name: "Retail", description: "Omnichannel retail journeys that lift conversion" },
        { name: "Sports", description: "Engagement platforms for fans and athletes" },
        { name: "Travel", description: "Seamless booking and experience management" },
      ],
    },
    {
      name: "Company",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Business Consulting", href: "/business-consulting" },
        { name: "Impact", href: "/impact" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    { name: "Case Study", href: "/case-study" },
  ];

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Dark teal gradient matching website theme */}
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)",
          borderBottom: "1px solid rgba(27,225,211,0.12)",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-2">
          {/* Social Icons - Left Side */}
          <div className="flex items-center justify-center gap-2 flex-1">
            <span className="text-white/90 text-sm font-medium">Recognized Among TOP 1% Companies Globally</span>
          </div>

          {/* WhatsApp - Right Side */}
          <a
            href="https://wa.me/9136242706"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 hover:text-[#1BE1D3] transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#1BE1D3]" />
            <span className="text-sm font-medium">WhatsApp Chat</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
        style={{
          background: isScrolled ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Yurekh Brand */}
            <a href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 overflow-hidden">
                <img src={logo} alt="Yurekh Solutions" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-normal text-white tracking-wide" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                  YUREKH
                </h1>
                <p className="text-xs text-gray-400 -mt-1 tracking-widest" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  SOLUTIONS
                </p>
              </div>
            </a>

            {/* Desktop Navigation - Centered with dropdowns */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    (item.dropdown || item.megaMenu || item.industryMenu) && handleDropdownEnter(item.name)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={item.href || "#"}
                    className="flex items-center gap-1.5 text-white/90 hover:text-[#1BE1D3] transition-colors duration-300 py-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                    onClick={(e) => {
                      if (item.dropdown || item.megaMenu || item.industryMenu) e.preventDefault();
                    }}
                  >
                    {item.name}
                    {(item.dropdown || item.megaMenu || item.industryMenu) && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Mega Menu (Services) - Yurekh teal gradient theme */}
                  {item.megaMenu && activeDropdown === item.name && (
                    <div
                      className="fixed left-0 right-0 shadow-2xl z-50"
                      style={{
                        marginTop: '20px',
                        maxHeight: '75vh',
                        overflowY: 'auto',
                        background: 'linear-gradient(135deg, #0b1f1f 0%, #0a2929 50%, #071919 100%)',
                      }}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                          {item.megaMenu.map((category, catIdx) => (
                            <div key={catIdx}>
                              <h4
                                className="text-[#1BE1D3] mb-3 pb-2 border-b border-white/10 sticky top-0 z-10"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontWeight: 600,
                                  fontSize: "11px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.18em",
                                  backgroundColor: "transparent",
                                }}
                              >
                                {category.title}
                              </h4>
                              <ul className="space-y-1.5">
                                {category.services.map((service, sIdx) => (
                                  <li key={sIdx}>
                                    <a
                                      href={serviceNameToSlug[service] ? `/services/${serviceNameToSlug[service]}` : "#services"}
                                      className="text-white/70 hover:text-[#1BE1D3] transition-colors duration-200 block py-0.5"
                                      style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "12px",
                                      }}
                                      onClick={(e) => {
                                        if (serviceNameToSlug[service]) {
                                          e.preventDefault();
                                          navigate(`/services/${serviceNameToSlug[service]}`);
                                          setActiveDropdown(null);
                                        }
                                      }}
                                    >
                                      {service}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Industries Mega Menu - Yurekh teal gradient theme */}
                  {item.industryMenu && activeDropdown === item.name && (
                    <div
                      className="fixed left-0 right-0 shadow-2xl z-50"
                      style={{
                        marginTop: '20px',
                        maxHeight: '75vh',
                        overflowY: 'auto',
                        background: 'linear-gradient(135deg, #0b1f1f 0%, #0a2929 50%, #071919 100%)',
                      }}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                          {item.industryMenu.map((industry, idx) => {
                            const slug = industryNameToSlug[industry.name];
                            return (
                              <a
                                key={idx}
                                href={slug ? `/industries/${slug}` : "/industries"}
                                className="group block p-3 sm:p-4 rounded-xl border border-white/10 hover:border-[#1BE1D3]/40 hover:bg-white/5 transition-all duration-300"
                              >
                                <h4
                                  className="text-white group-hover:text-[#1BE1D3] transition-colors duration-200 mb-1"
                                  style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "13px",
                                  }}
                                >
                                  {industry.name}
                                </h4>
                                <p
                                  className="text-white/50 group-hover:text-white/70 transition-colors duration-200"
                                  style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                  }}
                                >
                                  {industry.description}
                                </p>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Simple Dropdown (Company) - Yurekh teal gradient theme */}
                  {item.dropdown && activeDropdown === item.name && !item.megaMenu && !item.industryMenu && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-56 sm:w-64 shadow-2xl overflow-hidden"
                      style={{
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #0b1f1f 0%, #0a2929 50%, #071919 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {item.dropdown.map((subItem, idx) => (
                        <a
                          key={idx}
                          href={subItem.href}
                          className="block px-5 py-3 text-white/80 hover:text-[#1BE1D3] hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-b-0"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop (Glass feel) */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate("/bookingform")}
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: "rgba(27,225,211,0.08)",
                  color: "#1BE1D3",
                  borderRadius: "999px",
                  padding: "0 24px",
                  height: "42px",
                  border: "1px solid rgba(27,225,211,0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 0 20px rgba(27,225,211,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                }}
                className="hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)] hover:shadow-[0_0_30px_rgba(27,225,211,0.2)] hover:-translate-y-px"
              >
               Get Touch
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 border-t border-white/10 pt-4">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between text-gray-200 hover:text-[#1BE1D3] transition-colors py-3 px-2 text-base font-medium"
                      onClick={() => {
                        if (item.dropdown || item.megaMenu || item.industryMenu) {
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          );
                        } else if (item.href) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                      {(item.dropdown || item.megaMenu || item.industryMenu) && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {/* Mobile mega menu categories */}
                    {item.megaMenu && activeDropdown === item.name && (
                      <div className="ml-4 border-l border-white/10 pl-4 space-y-3 max-h-80 overflow-y-auto scrollbar-hide">
                        {item.megaMenu.map((category, catIdx) => (
                          <div key={catIdx}>
                            <h5 className="text-[#1BE1D3] text-xs font-bold uppercase tracking-wider mb-1">
                              {category.title}
                            </h5>
                            <div className="space-y-1">
                              {category.services.map((service, sIdx) => (
                                <a
                                  key={sIdx}
                                  href="#services"
                                  className="block py-1 text-xs text-gray-400 hover:text-[#1BE1D3] transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {service}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Mobile industries menu */}
                    {item.industryMenu && activeDropdown === item.name && (
                      <div className="ml-4 border-l border-white/10 pl-4 space-y-2 max-h-80 overflow-y-auto scrollbar-hide">
                        {item.industryMenu.map((industry, idx) => {
                          const slug = industryNameToSlug[industry.name];
                          return (
                            <a
                              key={idx}
                              href={slug ? `/industries/${slug}` : "/industries"}
                              className="block py-2"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span
                                className="text-gray-200 hover:text-[#1BE1D3] transition-colors block"
                                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "13px" }}
                              >
                                {industry.name}
                              </span>
                              <span
                                className="text-gray-500 block"
                                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "11px" }}
                              >
                                {industry.description}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                    {/* Mobile simple dropdown */}
                    {item.dropdown && activeDropdown === item.name && !item.megaMenu && !item.industryMenu && (
                      <div className="ml-4 border-l border-white/10 pl-4 space-y-1">
                        {item.dropdown.map((subItem, idx) => (
                          <a
                            key={idx}
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-400 hover:text-[#1BE1D3] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10 mt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-3 px-2">
                    <Phone className="h-4 w-4 text-[#1BE1D3]" />
                    <span>+91 9136242706</span>
                  </div>
                  <button
                    className="w-full py-3 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(27,225,211,0.1)",
                      color: "#1BE1D3",
                      border: "1px solid rgba(27,225,211,0.3)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 0 20px rgba(27,225,211,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate("/bookingform");
                    }}
                  >
                    Get Touch
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
