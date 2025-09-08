import React, { useState } from "react";
import { 
  Globe, 
  Crown,
  Rocket,
  TrendingUp,
  Award,
  Printer,
  Target,
  Smartphone,
  Palette,
  ShoppingCart,
  Megaphone,
  BarChart3,
  Lightbulb,
  Building,
  Handshake,
  Layout,
  PencilRuler,
  Briefcase,
  Layers,
  Sparkles,
  Search,
  Mail,
  Users,
  Code,
  CheckCircle,
  Shapes,
  Mic,
  Smile,
  Zap,
  Tag,
  BookA,
  Trophy,
  GalleryHorizontal,
  FolderOpen,
  Send,
  Link,
  ShieldCheck,
  Headset,
  SquareDashedKanban,
  Kanban,
  MessageCircle,
  GalleryVerticalEnd,
  ListChecks,
  MonitorCheck,
  ChartPie
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// I'm assuming you have a Button component, which can be a simple div or button with Tailwind classes.
// For this single-file component, I'll create a simple one.
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-6 py-3 rounded-xl font-medium transition-colors duration-200 focus:outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Utility component to handle the glass card style
const GlassCard = ({ children, className, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const servicesData = [
  {
    category: "Development Services",
    icon: Globe,
    description: "Building a robust online presence from the ground up, tailored to your business needs.",
    services: [
      {
        title: "Website Development",
        description: "Crafting custom, high-performance websites optimized for every device and user.",
        icon: Layout,
      },
      {
        title: "Responsive Website",
        description: "Ensuring your site looks flawless and performs perfectly on any screen size.",
        icon: MonitorCheck,
      },
      {
        title: "Web Maintenance",
        description: "Ensuring your website remains secure, updated, and performs flawlessly.",
        icon: Handshake,
      },
      {
        title: "Landing Pages",
        description: "Designing high-converting, targeted landing pages to maximize your campaign ROI.",
        icon: Kanban,
      },
      {
        title: "Mobile Application",
        description: "Developing native and cross-platform mobile apps for iOS and Android.",
        icon: Smartphone,
      },
      {
        title: "UI/UX Designing",
        description: "Creating intuitive and elegant user interfaces for maximum engagement and conversion.",
        icon: Palette,
      },
      {
        title: "E-commerce",
        description: "Building secure, scalable, and feature-rich online stores to boost your sales.",
        icon: ShoppingCart,
      },
      {
        title: "Microsite",
        description: "Creating dedicated, single-purpose websites for special campaigns and events.",
        icon: Lightbulb,
      },
      {
        title: "Digital Visiting Card",
        description: "Crafting interactive digital cards that showcase your professional brand with elegance.",
        icon: Briefcase,
      },
      {
        title: "Custom QR Code",
        description: "Designing unique QR codes that align with your brand identity and campaigns.",
        icon: BarChart3,
      },
      {
        title: "Custom Software",
        description: "Developing bespoke software solutions to streamline your business operations and unique needs.",
        icon: Code,
      },
      {
        title: "E-commerce Platform Development",
        description: "Building a robust and scalable foundation for your online retail business.",
        icon: ShoppingCart,
      },
      {
        title: "Quality Assurance & Testing",
        description: "Ensuring your digital products are flawless, bug-free, and ready for market.",
        icon: CheckCircle,
      },
    ],
  },
  {
    category: "Premium Digital Branding",
    icon: Crown,
    description: "Establishing an elite brand identity that resonates with your target audience and stands out from the competition.",
    services: [
      {
        title: "Elite Website Design & Development",
        description: "Architecting a visually stunning online presence that reflects your brand's luxury and exclusivity.",
        icon: PencilRuler,
      },
      {
        title: "Exclusive Social Media Management",
        description: "Managing your social media presence with sophisticated content and engagement strategies.",
        icon: Megaphone,
      },
      {
        title: "Decadent SEO Strategies",
        description: "Implementing top-tier SEO techniques to ensure your brand dominates search engine rankings.",
        icon: TrendingUp,
      },
      {
        title: "Opulent PPC Advertising Campaigns",
        description: "Designing high-impact pay-per-click campaigns that deliver exceptional ROI.",
        icon: BarChart3,
      },
      {
        title: "Majestic Email Marketing Automation",
        description: "Automating elegant and personalized email campaigns to nurture your customer relationships.",
        icon: Mail,
      },
      {
        title: "Sumptuous Content Creation",
        description: "Producing captivating and high-quality content that tells your brand story.",
        icon: Layers,
      },
      {
        title: "Tailored Landing Page",
        description: "Crafting bespoke landing pages that are perfectly optimized for your specific campaigns.",
        icon: Kanban,
      },
      {
        title: "Royal Social Media Analytics",
        description: "Providing in-depth analysis to measure and optimize your social media performance.",
        icon: BarChart3,
      },
      {
        title: "Mobile Responsive Elegance",
        description: "Designing for a seamless, luxurious user experience on all mobile devices.",
        icon: Smartphone,
      },
      {
        title: "Regal Campaign Optimization",
        description: "Refining your campaigns for peak performance and unparalleled results.",
        icon: Target,
      },
    ],
  },
  {
    category: "Product Launch & Development",
    icon: Rocket,
    description: "From concept to market, we execute a seamless product launch that captivates your audience and drives early adoption.",
    services: [
      {
        title: "Exclusive Market Research & Analysis",
        description: "Conducting in-depth research to identify market gaps and opportunities for your product.",
        icon: Target,
      },
      {
        title: "Strategic Launch Blueprint",
        description: "Developing a comprehensive plan that outlines every step of your product's journey to market.",
        icon: Layout,
      },
      {
        title: "Premium Brand Positioning Strategies",
        description: "Defining a clear and compelling position for your product in a competitive market.",
        icon: Crown,
      },
      {
        title: "Expert Pricing Consultation",
        description: "Providing strategic guidance to establish the optimal pricing for your product.",
        icon: Tag,
      },
      {
        title: "Bespoke Promotional Materials",
        description: "Designing custom promotional assets that create excitement and anticipation.",
        icon: Printer,
      },
      {
        title: "Exclusive Launch Events",
        description: "Planning and executing memorable launch events that generate buzz and media coverage.",
        icon: Building,
      },
      {
        title: "Luxury Distribution Channels",
        description: "Establishing high-end distribution networks to get your product to the right audience.",
        icon: Link,
      },
      {
        title: "Celebrity Collaborations",
        description: "Securing partnerships with influential figures to amplify your brand's reach.",
        icon: Smile,
      },
      {
        title: "Milestone-Laden Timeline",
        description: "Creating a detailed timeline with key milestones for a smooth and successful launch.",
        icon: ListChecks,
      },
      {
        title: "Post-Launch Assessment",
        description: "Analyzing launch performance and providing strategic recommendations for future growth.",
        icon: BarChart3,
      },
    ],
  },
  {
    category: "Social Media Marketing",
    icon: TrendingUp,
    description: "Creating and managing a powerful social media presence that drives engagement and growth.",
    services: [
      {
        title: "Bespoke Social Media Strategy Development",
        description: "Crafting a custom social media roadmap tailored to your unique brand goals.",
        icon: Layers,
      },
      {
        title: "Opulent Content Creation & Management",
        description: "Producing and managing high-end content that captivates your audience.",
        icon: Sparkles,
      },
      {
        title: "Royal Influencer Partnership Collaborations",
        description: "Connecting you with top-tier influencers for authentic brand endorsements.",
        icon: Users,
      },
      {
        title: "Lavish Social Media Campaigns & Contests",
        description: "Designing engaging campaigns that create buzz and drive user participation.",
        icon: Megaphone,
      },
      {
        title: "Exclusive Social Media Analytics & Reporting",
        description: "Providing detailed insights into your social performance to refine your strategy.",
        icon: BarChart3,
      },
    ],
  },
  {
    category: "Elevated Branding Services",
    icon: Award,
    description: "Crafting a sophisticated brand identity that speaks volumes and leaves a lasting impression.",
    services: [
      {
        title: "Luxury Logo Design",
        description: "Creating a timeless and elegant logo that serves as the centerpiece of your brand identity.",
        icon: PencilRuler,
      },
      {
        title: "Opulent Brand Style Guide",
        description: "Developing a comprehensive guide to ensure consistent and luxurious brand representation.",
        icon: BookA,
      },
      {
        title: "Sumptuous Brand Collateral",
        description: "Designing beautiful business cards, letterheads, and other branded materials.",
        icon: Shapes,
      },
      {
        title: "Consistent Brand Representation",
        description: "Ensuring your brand's look and feel are consistent across all channels and platforms.",
        icon: ShieldCheck,
      },
      {
        title: "Tailored Brand Messaging",
        description: "Crafting a unique brand voice and key messages that resonate with your audience.",
        icon: MessageCircle,
      },
      {
        title: "Refined Brand Voice & Tone",
        description: "Defining a distinct tone of voice that communicates your brand's personality and values.",
        icon: Mic,
      },
      {
        title: "Royal Tagline Creation",
        description: "Developing a memorable and powerful tagline that captures your brand's essence.",
        icon: Lightbulb,
      },
      {
        title: "Exclusive Brand Storytelling",
        description: "Crafting a compelling narrative that connects with your audience on an emotional level.",
        icon: Briefcase,
      },
      {
        title: "Regal Presentation Templates",
        description: "Designing sophisticated presentation templates for impactful and professional pitches.",
        icon: Briefcase,
      },
      {
        title: "Aristocratic Brand Audit",
        description: "A deep dive into your brand's performance to identify opportunities for growth and refinement.",
        icon: Search,
      },
      {
        title: "High-End Packaging Design",
        description: "Crafting exquisite packaging designs that elevate the unboxing experience for your customers.",
        icon: GalleryHorizontal,
      },
      {
        title: "Luxury Stationery Design",
        description: "Creating elegant, custom stationery that makes a statement.",
        icon: FolderOpen,
      },
      {
        title: "Exquisite Product Photography",
        description: "Showcasing your products with professional, high-end photography.",
        icon: GalleryVerticalEnd,
      },
    ],
  },
  {
    category: "Print Media & Advertising",
    icon: Printer,
    description: "Bringing your brand to life in the physical world with premium print and outdoor advertising.",
    services: [
      {
        title: "Luxury Print Collateral Design",
        description: "Designing high-quality brochures, flyers, and other materials that reflect your brand's elegance.",
        icon: Layers,
      },
      {
        title: "High-End Magazine Advertisements", 
        description: "Crafting visually stunning ads for top-tier publications to reach your desired audience.",
        icon: Send,
      },
      {
        title: "Opulent Billboard & Outdoor Advertising",
        description: "Creating impactful and memorable outdoor campaigns that capture attention.",
        icon: Building,
      },
      {
        title: "Aristocratic Direct Mail Campaigns",
        description: "Designing personalized, high-touch mailers for exclusive outreach.",
        icon: Mail,
      },
      {
        title: "Bespoke Print Media Campaigns",
        description: "Executing custom print strategies to complement your digital presence.",
        icon: Briefcase,
      },
    ],
  },
  {
    category: "Tailored Digital Work",
    icon: Target,
    description: "Precision-driven digital services designed to optimize performance and achieve your specific goals.",
    services: [
      {
        title: "Exclusive Monthly Analytics Reports",
        description: "Providing detailed, custom reports to track your digital performance and inform strategy.",
        icon: BarChart3,
      },
      {
        title: "Lavish A/B Testing",
        description: "Conducting sophisticated A/B tests to optimize every aspect of your user experience.",
        icon: Kanban,
      },
      {
        title: "Luxurious Tracking & Attribution",
        description: "Implementing advanced tracking to precisely measure the effectiveness of your marketing efforts.",
        icon: Zap,
      },
      {
        title: "Elite Customer Segmentation",
        description: "Dividing your audience into precise segments for highly-targeted marketing campaigns.",
        icon: Users,
      },
      {
        title: "Bespoke Data Visualization",
        description: "Transforming complex data into beautiful, easy-to-understand visuals.",
        icon: ChartPie,
      },
      {
        title: "Opulent Competitor Analysis",
        description: "A detailed analysis of your competitors to identify opportunities and stay ahead.",
        icon: Search,
      },
      {
        title: "Extravagant Marketing Automation",
        description: "Setting up powerful automation flows to nurture leads and convert customers at scale.",
        icon: Briefcase,
      },
      {
        title: "Decadent Social Listening",
        description: "Monitoring social media conversations to understand your brand's perception and public opinion.",
        icon: MessageCircle,
      },
      {
        title: "Exclusive Content Strategy",
        description: "Crafting a content plan that positions your brand as an authority in your industry.",
        icon: ListChecks,
      },
      {
        title: "Exclusive Training & Support",
        description: "Providing dedicated training and ongoing support to your team.",
        icon: Handshake,
      },
      {
        title: "VIP Customer Engagement Programs",
        description: "Designing bespoke programs to foster deep connections and loyalty with your most valuable customers.",
        icon: Award,
      },
      {
        title: "Luxury Loyalty Programs",
        description: "Creating rewarding loyalty programs that incentivize repeat business and brand advocacy.",
        icon: Trophy,
      },
      {
        title: "High-Touch Customer Service Portals",
        description: "Building private, elegant portals to provide personalized and efficient customer support.",
        icon: Headset,
      },
      {
        title: "Interactive Web Experiences",
        description: "Developing dynamic and interactive web elements that captivate and engage your audience.",
        icon: Palette,
      },
    ],
  },
  {
    category: "Public Relations (PR)",
    icon: Megaphone,
    description: "Shaping your brand's public image and building strong relationships with media and key stakeholders.",
    services: [
      {
        title: "VIP Media Relations & Press Releases",
        description: "Cultivating relationships with top-tier media to secure premium placements and press coverage.",
        icon: Users,
      },
      {
        title: "Exquisite Event Publicity & Coverage",
        description: "Ensuring your events receive widespread media attention and are showcased beautifully.",
        icon: Building,
      },
      {
        title: "Royal Brand Ambassador Programs",
        description: "Managing exclusive ambassador programs to promote your brand through trusted voices.",
        icon: Crown,
      },
      {
        title: "Luxury Brand Partnership & Sponsorships",
        description: "Forging strategic partnerships with complementary luxury brands to expand your reach.",
        icon: Handshake,
      },
      {
        title: "High-Profile Media Placements & Features",
        description: "Securing featured articles and mentions in prestigious publications to elevate your brand's status.",
        icon: Send,
      },
    ],
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(servicesData[0]);

  return (
    <section id="services" className="min-h-screen bg-gradient-space  py-20 lg:py-32 relative overflow-hidden text-[#009494] font-sans">
      {/* Background Elements */}
      
        <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-[#009494] bg-gradient-to-r from-[#009494] to-[#4ae0e0]">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From elite web development to luxury branding solutions, we deliver excellence across all digital domains.
          </p>
        </div>

        {/* Tabs and Content Panel */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs Sidebar */}
          <GlassCard className="p-4 md:w-1/3 w-full flex-shrink-0">
            <h3 className="text-xl font-bold mb-4 px-4 hidden md:block">Service Categories</h3>
            <nav className="flex flex-col space-y-2">
              {servicesData.map((category) => {
                const isActive = activeCategory.category === category.category;
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300
                      ${isActive
                        ? "bg-[#009494] text-white border border-[#4ae0e0] transform scale-105"
                        : "bg-transparent text-gray-400 hover:bg-transparent hover:text-[#4ae0e0]"
                      }`}
                  >
                    <IconComponent className="h-5 w-5 flex-shrink-0" />
                    <span className="font-semibold text-left flex-grow">{category.category}</span>
                  </Button>
                );
              })}
            </nav>
          </GlassCard>

          {/* Content Panel */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.category}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <GlassCard className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center glow">
                      <activeCategory.icon className="h-7 w-7 text-[#4ae0e0]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-100 mb-1">
                        {activeCategory.category}
                      </h3>
                      <p className="text-sm text-gray-400 italic max-w-xl">
                        {activeCategory.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {activeCategory.services.slice(0, 9).map((service, index) => {
                      const ServiceIcon = service.icon;
                      return (
                        <div key={index} 
                          className="bg-white/5 border border-white/10 p-5 rounded-xl transition-all duration-300 transform hover:scale-[1.05] hover:border-[#009494] hover:bg-[#009494]/20 hover:shadow-lg hover:shadow-[#4ae0e0]/50"
                        >
                          <div className="w-12 h-12 flex items-center justify-center bg-[#4ae0e0]/20 rounded-full mb-4">
                            <ServiceIcon className="w-6 h-6 text-[#4ae0e0]"/>
                          </div>
                          <h4 className="text-lg font-bold text-gray-100 mb-2">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {service.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-8 text-center">
                    <Button
                      className="px-8 py-3 bg-[#009494] hover:bg-[#4ae0e0] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      <span className="flex items-center">
                        Get Custom Quote
                        <Target className="ml-2 h-5 w-5 transition-transform group-hover:rotate-45" />
                      </span>
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
