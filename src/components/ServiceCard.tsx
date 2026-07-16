import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  category: 'ai' | 'cloud' | 'marketing' | 'automation' | 'frontend' | 'backend';
  features: string[];
  onClick?: () => void;
  isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  image,
  category,
  features,
  onClick,
  isActive = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCardStyles = () => {
    const baseStyles = "premium-card relative overflow-hidden group";
    
    switch (category) {
      case 'ai':
        return cn(baseStyles, "ai-card", isActive && "bg-gradient-ai");
      case 'cloud':
        return cn(baseStyles, "tech-card", isActive && "bg-gradient-tech");
      case 'marketing':
        return cn(baseStyles, "marketing-card", isActive && "bg-gradient-marketing");
      case 'automation':
        return cn(baseStyles, "ai-card", isActive && "bg-gradient-ai");
      case 'frontend':
        return cn(baseStyles, "tech-card", isActive && "bg-gradient-tech");
      case 'backend':
        return cn(baseStyles, "service-card", isActive && "bg-gradient-primary");
      default:
        return cn(baseStyles, "service-card");
    }
  };

  return (
    <Card 
      className={getCardStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CardContent className="p-6 h-full flex flex-col relative z-10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col h-full">
          {/* Icon */}
          <div className={cn(
            "w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
            "bg-white/10 backdrop-blur-sm border border-white/20",
            isHovered && "scale-110 shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
          )}>
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-glow transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/80 text-sm mb-4 flex-grow">
            {description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
                {feature}
              </div>
            ))}
          </div>

          {/* Hover Overlay */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl",
            "opacity-0 group-hover:opacity-100 transition-all duration-500",
            "flex items-center justify-center"
          )}>
            <div className="text-center p-6">
              <div className="text-white font-semibold mb-2">
                Click to explore
              </div>
              <div className="w-8 h-8 border-2 border-white rounded-full animate-pulse mx-auto" />
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-br from-primary/10 to-accent/10",
          "shadow-[0_0_50px_hsl(var(--primary)/0.3)]"
        )} />
      </CardContent>
    </Card>
  );
};

export default ServiceCard;