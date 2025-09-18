import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Globe, 
  MessageSquare, 
  AlertCircle, 
  Twitter, 
  Zap, 
  Sparkles, 
  Phone, 
  ArrowUp 
} from 'lucide-react';

import { useEffect, useState } from "react";

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
import Footer from '@/components/Footer';
import BookingForm from '@/pages/BookingForm';

// Social widgets array

// Floating action icons
const FloatingIcons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9136242706"
        target="_blank"
        rel="noopener noreferrer"
        className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 animate-pulse"
      >
        <Zap className="w-6 h-6 text-primary" />
      </a>

      {/* Call */}
      <a
        href="tel:+919136242706"
        className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 animate-pulse"
      >
        <Phone className="w-6 h-6 text-primary" />
      </a>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 animate-pulse"
        >
          <ArrowUp className="w-6 h-6 text-primary" />
        </button>
      )}
    </div>
  );
};

// Main Page
const Index = () => {
  return (
    <div className="min-h-screen">
      <section id="header">
        <Header />
      </section>

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Video />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="service">
        <VideoShowcase />
      </section>

      <section id="portfolio">
        <AIServices />
      </section>

      <section id="testimonials">
        <PremiumTestimonials />
      </section>

      <section id="digital">
        <Digital />
      </section>

      <section id="problems">
        <ProblemSection />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="faq">
        <PremiumFAQ />
      </section>

      <section id="contact">
        <Contact />
      </section>
    

      {/* Floating Action Buttons */}
      <FloatingIcons />
    </div>
  );
};

export default Index;
