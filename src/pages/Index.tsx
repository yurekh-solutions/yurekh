import { Instagram, Facebook, Linkedin, Globe, MessageSquare, AlertCircle, Twitter, Zap, Sparkles } from 'lucide-react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About"; 
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Video from "@/components/Video";
import Service from "@/components/Service";
import Digital from "@/components/Digital";
import VideoShowcase from '@/components/VideoShowcase';
import AIServices from '@/components/AIServices';
import PremiumTestimonials from '@/components/PremiumTestimonials';
import PremiumFAQ from '@/components/PremiumFAQ';
import ProblemSection from '@/components/ProblemSection';

// Social widgets array
const socialWidgets = [
  { name: "Instagram", url: "https://www.instagram.com/yurekhsolutions?igsh=MTBmZGlvNXlpeGNrcg==" },
  { name: "Facebook", url: "https://www.facebook.com/share/1JzwtyDtAx/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/yurekh-solutions-private-limited/" },
  { name: "Threads", url: "https://www.threads.com/@yurekhsolutions" },
  { name: "Twitter (X)", url: "https://x.com/yurekhsolutions?t=v7z2HSE4ZHo1YGH3PwcBnA&s=09" },
];

// Function to return appropriate icon based on name
const getSocialIcon = (name) => {
  switch(name) {
    case "Instagram": return <Instagram className="w-5 h-5" />;
    case "Facebook": return <Facebook className="w-5 h-5" />;
    case "LinkedIn": return <Linkedin className="w-5 h-5" />;
    case "Website": return <Globe className="w-5 h-5" />;
    case "Threads": return <MessageSquare className="w-5 h-5" />;
    case "Snapchat": return <AlertCircle className="w-5 h-5" />; // placeholder
    case "Twitter (X)": return <Twitter className="w-5 h-5" />;
    case "WhatsApp": return <Zap className="w-5 h-5" />;
        default: return <Sparkles className="w-5 h-5" />;


  }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Video />
     
      <Service />
      <VideoShowcase />
      <AIServices />
      <PremiumTestimonials />
      <Digital />
       <ProblemSection />
            <Services />

      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      <PremiumFAQ />
      {/* <About /> */}
      <Contact />

      {/* Footer */}
     {/* Footer */}
<footer className="relative z-10 py-16 bg-gradient-to-br from-card via-background to-card border-t border-primary/20">
          <div className="container-glass">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white animate-pulse-glow" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">YUREKH SOLUTIONS</h3>
                    <p className="text-primary text-sm font-medium">AI-Powered Digital Excellence</p>
                  </div>
                </div>
                
                <p className="text-white/70 leading-relaxed max-w-md">
                  Transforming businesses with cutting-edge AI technology, intelligent automation, 
                  and data-driven strategies that deliver measurable results and sustainable growth.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/9136242706" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass px-4 py-2 rounded-xl text-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
                  >
                    WhatsApp Chat
                  </a>
                  <a 
                    href="tel:+919136242706"
                    className="glass px-4 py-2 rounded-xl text-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
                  >
                    Call Now
                  </a>
                  <a 
                    href="mailto:info@yurekhsolutions.com"
                    className="glass px-4 py-2 rounded-xl text-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
                  >
                    Email Us
                  </a>
                </div>
              </div>

              {/* AI Services */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gradient mb-6">AI Services</h4>
                <ul className="space-y-3 text-sm">
                  {[
                    "AI Marketing Automation",
                    "Predictive Analytics",
                    "Content Intelligence",
                    "Digital Strategy",
                    "Growth Optimization",
                    "Performance Analytics"
                  ].map((service, index) => (
                    <li key={index}>
                      <a 
                        href="#services" 
                        className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gradient mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  {[
                    { name: "About Us", href: "#home" },
                    { name: "Our Work", href: "#work" },
                    { name: "Success Stories", href: "#testimonials" },
                    { name: "FAQ", href: "#faq" },
                    { name: "Get Started", href: "#contact" },
                    { name: "Free Consultation", href: "#contact" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar with Social Icons */}
            <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <p className="text-white/70 text-sm mb-2">
                  © 2025 Yurekh Solutions. All rights reserved.
                </p>
                <p className="text-white/50 text-xs">
                  Empowering businesses through intelligent technology solutions.
                </p>
              </div>
              
              <div className="flex gap-4">
                {socialWidgets.map((widget) => (
                  <a
                    key={widget.name}
                    href={widget.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                    title={widget.name}
                  >
                    <span className="text-primary group-hover:text-white transition-colors duration-300">
                      {getSocialIcon(widget.name)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* AI Badge */}
            <div className="text-center mt-8">
              <div className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full">
                <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
                <span className="text-primary text-sm font-medium">Powered by Advanced AI Technology</span>
              </div>
            </div>
          </div>
        </footer>

    </div>
  );
};

export default Index;
