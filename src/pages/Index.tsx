import { Instagram, Facebook, Linkedin, Globe, MessageSquare, AlertCircle, Twitter, Zap } from 'lucide-react';
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
    default: return <Globe className="w-5 h-5" />;
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
      <Digital />
            <Services />

      <Testimonials />
      <FAQ />
      {/* <About /> */}
      <Contact />

      {/* Footer */}
     {/* Footer */}
<footer className="py-12 border-t border-border bg-background/50 backdrop-blur-lg">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
      {/* Company Info */}
      <div className="md:col-span-2">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-3 mb-4 items-center justify-center md:justify-start">
          <img 
            src="/lovable-uploads/14c6c744-659d-47c1-9cb3-25df4844d747.png" 
            alt="Yurekh Solutions" 
            className="h-10 w-10 mb-2 md:mb-0"
          />
          <div>
            <h3 className="text-lg font-bold text-gradient">YUREKH SOLUTIONS</h3>
            <p className="text-xs text-muted-foreground">Premium Digital Excellence</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 max-w-md mx-auto md:mx-0">
          Transforming businesses with cutting-edge digital solutions, premium design, 
          and innovative technology. Your success is our mission.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a 
            href="https://wa.me/9136242706" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            WhatsApp
          </a>
          <a 
            href="tel:+919136242706"
            className="text-primary hover:text-accent transition-colors"
          >
            Call Us
          </a>
          <a 
            href="mailto:info@yurekhsolutions.com"
            className="text-primary hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
          <li><a href="#services" className="hover:text-primary transition-colors">Mobile Apps</a></li>
          <li><a href="#services" className="hover:text-primary transition-colors">UI/UX Design</a></li>
          <li><a href="#services" className="hover:text-primary transition-colors">Digital Marketing</a></li>
          <li><a href="#services" className="hover:text-primary transition-colors">Branding</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
          <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
          <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Careers</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar with Social Icons */}
    <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
      <p className="text-sm text-muted-foreground mb-4 md:mb-0">
        © 2025 Yurekh Solutions. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {socialWidgets.map((widget) => (
          <a
            key={widget.name}
            href={widget.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#00c8b8] hover:bg-[#00b2a3] text-white rounded flex items-center justify-center transition-colors"
          >
            {getSocialIcon(widget.name)}
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Index;
