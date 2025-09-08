import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Digital = () => {
  const [activeTab, setActiveTab] = useState('web-development');

  const serviceCategories = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites and web applications',
      services: [
        {
          title: 'Custom Website Design',
          description: 'Stunning, responsive websites tailored to your brand and business needs.',
          features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX']
        },
        {
          title: 'E-commerce Solutions',
          description: 'Powerful online stores with secure payment integration and inventory management.',
          features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Analytics']
        },
        {
          title: 'Progressive Web Apps',
          description: 'Fast, reliable, and engaging web applications that work offline.',
          features: ['Offline Capability', 'Push Notifications', 'App-like Experience', 'Cross-platform']
        }
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      services: [
        {
          title: 'iOS App Development',
          description: 'Native iOS applications optimized for iPhone and iPad.',
          features: ['Native Performance', 'App Store Ready', 'iOS Guidelines', 'Regular Updates']
        },
        {
          title: 'Android App Development',
          description: 'Feature-rich Android applications for all device types.',
          features: ['Material Design', 'Play Store Ready', 'Multi-device Support', 'Performance Optimized']
        },
        {
          title: 'Cross-platform Solutions',
          description: 'Single codebase applications for multiple platforms.',
          features: ['React Native', 'Flutter', 'Cost Effective', 'Faster Deployment']
        }
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions',
      services: [
        {
          title: 'Search Engine Optimization',
          description: 'Improve your website visibility and organic search rankings.',
          features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Analytics Reporting']
        },
        {
          title: 'Social Media Marketing',
          description: 'Engage your audience across all major social platforms.',
          features: ['Content Strategy', 'Campaign Management', 'Audience Analysis', 'Brand Building']
        },
        {
          title: 'Pay-Per-Click Advertising',
          description: 'Targeted advertising campaigns that deliver measurable results.',
          features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'ROI Tracking']
        }
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration',
      services: [
        {
          title: 'Cloud Migration',
          description: 'Seamless transition of your applications and data to the cloud.',
          features: ['AWS Migration', 'Azure Migration', 'Data Security', 'Zero Downtime']
        },
        {
          title: 'DevOps & CI/CD',
          description: 'Streamlined development and deployment processes.',
          features: ['Automated Deployment', 'Monitoring', 'Scalability', 'Version Control']
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Design and manage scalable, secure cloud architectures.',
          features: ['Auto Scaling', 'Load Balancing', 'Security', 'Cost Optimization']
        }
      ]
    }
  ];

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <section id="services" className="relative py-20 bg-gradient-space">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars animate-twinkle"></div>
        <div className="stars2 animate-twinkle"></div>
        <div className="stars3 animate-twinkle"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-glow">
            Comprehensive Technology Solutions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end technology services to help your business thrive in the digital landscape.
            From web development to digital marketing, we've got you covered.
          </p>
        </motion.div>

        {/* Service Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'glass border border-border hover:border-primary/50 hover:bg-primary/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-gradient-primary">
                {activeCategory.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {activeCategory.description}
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-glass card-floating h-full">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                          <div className="w-8 h-8 bg-primary rounded-lg"></div>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-3 text-foreground">
                          {service.title}
                        </h4>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full btn-glass"
                        onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

       

        {/* CTA Section */}
       
      </div>
    </section>
  );
};

export default Digital;