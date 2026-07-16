import React from 'react';
import { ArrowRight, Sparkles, Zap, Code, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aiHeroImage from '@/assets/ai-hero.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className=" relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-space">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 " />

      <div className="container-glass relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Brand Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-white/90 font-medium">
                YurekhSolutions - Future Technology Today
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="title-gradient">
              Transforming Ideas into
              <span className="block text-gradient animate-gradient">
                Digital Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              We specialize in cutting-edge AI solutions, cloud infrastructure, automation, 
              and digital marketing that propel businesses into the future. Experience 
              innovation that drives real results.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Code className="h-4 w-4" />, text: "Full-Stack Development" },
                { icon: <Zap className="h-4 w-4" />, text: "AI Automation" },
                { icon: <Globe className="h-4 w-4" />, text: "Global SEO" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-primary mr-2">{feature.icon}</span>
                  <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

           
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src={aiHeroImage}
                alt="AI Technology Visualization"
                className="w-full h-auto rounded-2xl glass-card hover-glow"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-60 animate-pulse-glow" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-3xl scale-110" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default HeroSection;