import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import log from "../assets/log.svg"; // ✅ Correct import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#001f1f]/90 backdrop-blur-md py-2" : "bg-[#001f1f]/95 py-3"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={log}
              alt="Yurekh Solutions Logo"
              className="h-12 w-12 sm:h-10 sm:w-10 object-contain rounded-lg shadow-md"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-lg font-bold text-white">YUREKH</h1>
              <p className="text-xs sm:text-xs text-gray-400 -mt-1">SOLUTIONS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact Button Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 w-full bg-[#001f1f]/95 backdrop-blur-md shadow-lg border border-white/20 rounded-xl p-6 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 py-2 text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                  <Phone className="h-4 w-4" />
                  <span>9136242706</span>
                </div>
                <Button className="w-full rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
