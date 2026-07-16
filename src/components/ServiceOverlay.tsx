import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    image: string;
    category: 'ai' | 'cloud' | 'marketing' | 'automation' | 'frontend' | 'backend';
    features: string[];
    technologies: string[];
    benefits: string[];
  } | null;
}

const ServiceOverlay: React.FC<ServiceOverlayProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  const getGradientClass = () => {
    switch (service.category) {
      case 'ai':
      case 'automation':
        return 'bg-gradient-ai';
      case 'cloud':
      case 'frontend':
      case 'backend':
        return 'bg-gradient-tech';
      case 'marketing':
        return 'bg-gradient-marketing';
      default:
        return 'bg-gradient-primary';
    }
  };

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500",
      "bg-black/60 backdrop-blur-sm",
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    )}>
      {/* Overlay Content */}
      <Card className={cn(
        "w-full max-w-4xl max-h-[90vh] overflow-y-auto relative transition-all duration-500 transform",
        "glass-card border-2 border-white/20",
        isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
      )}>
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/10 rounded-full"
        >
          <X className="h-6 w-6" />
        </Button>

        <CardContent className="p-0">
          {/* Hero Section */}
          <div className={cn(
            "relative h-80 rounded-t-2xl overflow-hidden",
            getGradientClass()
          )}>
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-4xl font-bold text-white mb-4 title-gradient">
                {service.title}
              </h2>
              <p className="text-xl text-white/90 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* Features Grid */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 text-gradient">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105",
                      "bg-white/5 border border-white/10 hover:border-primary/50"
                    )}
                  >
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 text-gradient">
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      "bg-white/10 text-white border border-white/20",
                      "hover:bg-primary/20 hover:border-primary/50 hover:scale-105"
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 text-gradient">
                Business Benefits
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {service.benefits.map((benefit, index) => (
                  <Card 
                    key={index}
                    className="bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <ArrowRight className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-white/90">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Get in touch with our experts to discuss how {service.title.toLowerCase()} can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="btn-glass">
                  Schedule Consultation
                </Button>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceOverlay;