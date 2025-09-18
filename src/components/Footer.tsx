import { useState, useEffect } from 'react';
import { Sparkles, Instagram, Facebook, Linkedin, MessageSquare, Twitter, Zap, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  // Default social widgets
  const socialWidgets = [
    { name: "Instagram", url: "https://www.instagram.com/yurekhsolutions" },
    { name: "Facebook", url: "https://www.facebook.com/share/1JzwtyDtAx/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/yurekh-solutions-private-limited/" },
    { name: "Threads", url: "https://www.threads.com/@yurekhsolutions" },
    { name: "Twitter (X)", url: "https://x.com/yurekhsolutions" },
  ];

  // Function to return appropriate icon
  const getSocialIcon = (name) => {
    switch (name) {
      case "Instagram": return <Instagram className="w-5 h-5" />;
      case "Facebook": return <Facebook className="w-5 h-5" />;
      case "LinkedIn": return <Linkedin className="w-5 h-5" />;
      case "Threads": return <MessageSquare className="w-5 h-5" />;
      case "Twitter (X)": return <Twitter className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  // Floating action icons component
  const FloatingIcons = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
      const handleScroll = () => setShowScroll(window.scrollY > 300);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp */}
        <a href="https://wa.me/9136242706" target="_blank" rel="noopener noreferrer" className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 animate-pulse">
          <Zap className="w-6 h-6 text-primary" />
        </a>

        {/* Call */}
        <a href="tel:+919136242706" className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 animate-pulse">
          <Phone className="w-6 h-6 text-primary" />
        </a>

        {/* Scroll to Top */}
        {showScroll && (
          <button onClick={scrollToTop} className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 animate-pulse">
            <ArrowUp className="w-6 h-6 text-primary" />
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <FloatingIcons />
      <footer className="relative z-10 py-12 bg-gradient-to-br from-card via-background to-card border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white animate-pulse-glow" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">YUREKH SOLUTIONS</h3>
                  <p className="text-primary text-sm font-medium">AI-Powered Digital Excellence</p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed text-sm max-w-md">
                Transforming businesses with cutting-edge AI technology, intelligent automation, 
                and data-driven strategies that deliver measurable results and sustainable growth.
              </p>

              <div className="flex gap-3 flex-wrap">
                <a href="https://wa.me/9136242706" target="_blank" rel="noopener noreferrer" className="border border-primary text-sm px-4 py-2 rounded-lg text-primary hover:bg-primary/20 transition">WhatsApp Chat</a>
                <a href="tel:+919136242706" className="border border-primary text-sm px-4 py-2 rounded-lg text-primary hover:bg-primary/20 transition">Call Now</a>
                <a href="mailto:info@yurekhsolutions.com" className="border border-primary text-sm px-4 py-2 rounded-lg text-primary hover:bg-primary/20 transition">Email Us</a>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">AI Services</h4>
              <ul className="space-y-2 text-sm">
                {["AI Marketing Automation","Predictive Analytics","Content Intelligence","Digital Strategy","Growth Optimization","Performance Analytics"].map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/70 hover:text-primary transition">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[{ name: "About Us", href: "#home" },{ name: "Our Work", href: "#work" },{ name: "Success Stories", href: "#testimonials" },{ name: "FAQ", href: "#faq" },{ name: "Get Started", href: "#contact" },{ name: "Free Consultation", href: "#contact" }].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="flex items-center gap-2 text-white/70 hover:text-primary transition">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider & Social Icons */}
          <div className="border-t border-primary/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left mt-10">
              <p className="text-white/70 text-xs md:text-sm">© 2025 Yurekh Solutions. All rights reserved.</p>
              <p className="text-white/50 text-sm">Empowering businesses through intelligent technology solutions.</p>
            </div>

            <div className="flex gap-3">
              {socialWidgets.map((widget) => (
                <a key={widget.name} href={widget.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-primary rounded-lg flex items-center justify-center hover:bg-primary/20 transition" title={widget.name}>
                  {getSocialIcon(widget.name)}
                </a>
              ))}
            </div>
          </div>

          {/* AI Badge */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-primary rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs md:text-sm">Powered by Advanced AI Technology</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
