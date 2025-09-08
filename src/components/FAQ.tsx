import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqTabs = [
    {
      id: "general",
      label: "General",
      icon: HelpCircle,
      questions: [
        {
          id: "what-services",
          question: "What services does Yurekh Solutions offer?",
          answer: "We offer comprehensive digital solutions including website development, mobile applications, UI/UX design, e-commerce platforms, digital marketing, branding services, SEO, social media management, and custom software development. Our premium services are designed to elevate your business to the next level."
        },
        {
          id: "why-choose-us",
          question: "Why should I choose Yurekh Solutions over other agencies?",
          answer: "Yurekh Solutions stands out with our premium quality approach, cutting-edge technology implementation, 24/7 support, and luxury finishing. We combine technical expertise with creative excellence to deliver solutions that not only meet but exceed expectations. Our 98% client retention rate speaks to our commitment to excellence."
        },
        {
          id: "industries",
          question: "What industries do you work with?",
          answer: "We work across all industries including technology, healthcare, finance, e-commerce, real estate, education, hospitality, manufacturing, and more. Our versatile team adapts our premium solutions to meet the unique needs of each industry and business type."
        },
        {
          id: "project-timeline",
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, complex web applications 8-16 weeks, and mobile apps 12-20 weeks. We provide detailed timelines during consultation and keep you updated throughout the development process."
        }
      ]
    },
    {
      id: "pricing",
      label: "Pricing",
      icon: Zap,
      questions: [
        {
          id: "pricing-model",
          question: "How does your pricing work?",
          answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer packages. Pricing depends on project complexity, timeline, and specific requirements. We provide transparent quotes with no hidden fees. Contact us for a custom quote tailored to your needs."
        },
        {
          id: "payment-terms",
          question: "What are your payment terms?",
          answer: "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we offer milestone-based payments. We accept credit cards, bank transfers, PayPal, and cryptocurrency. All payments are secure and processed through encrypted channels."
        },
        {
          id: "consultation-cost",
          question: "Do you charge for consultations?",
          answer: "Initial consultations (up to 30 minutes) are completely free. For detailed strategy sessions and comprehensive audits, we offer premium consultation packages ranging from $179 to $499, which can be credited toward your project if you proceed with our services."
        },
        {
          id: "maintenance-cost",
          question: "What are the ongoing maintenance costs?",
          answer: "Maintenance packages start at $99/month for basic support and updates. Premium packages include priority support, security monitoring, performance optimization, and content updates. We also offer custom maintenance plans based on your specific needs."
        }
      ]
    },
    {
      id: "process",
      label: "Process",
      icon: Clock,
      questions: [
        {
          id: "project-process",
          question: "What is your project development process?",
          answer: "Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Review & Refinement, 5) Launch & Deployment, 6) Training & Handover, 7) Ongoing Support. We maintain constant communication and provide regular updates throughout each phase."
        },
        {
          id: "client-involvement",
          question: "How involved will I be in the project?",
          answer: "We believe in collaborative development. You'll have regular check-ins, review sessions, and approval stages. We use project management tools to keep you updated and gather feedback. Your input is crucial for ensuring the final product meets your vision and requirements."
        },
        {
          id: "revisions",
          question: "How many revisions are included?",
          answer: "We include up to 3 major revisions in our standard packages. Additional revisions are available at competitive hourly rates. We work closely with you during the design phase to minimize the need for extensive revisions later in the process."
        },
        {
          id: "project-management",
          question: "How do you manage projects and communication?",
          answer: "We use professional project management tools and maintain constant communication via WhatsApp, email, and video calls. You'll have access to a dedicated project manager and can track progress in real-time through our client portal."
        }
      ]
    },
    {
      id: "support",
      label: "Support",
      icon: Shield,
      questions: [
        {
          id: "support-hours",
          question: "What are your support hours?",
          answer: "We offer 24/7 support for critical issues and premium clients. Standard support is available Monday-Friday 9AM-6PM IST, with extended weekend support for ongoing projects. Emergency support is available for all live websites and applications."
        },
        {
          id: "post-launch",
          question: "What happens after my project launches?",
          answer: "We provide 30 days of free post-launch support including bug fixes, minor adjustments, and technical assistance. We also offer training sessions, documentation, and ongoing maintenance packages to ensure your continued success."
        },
        {
          id: "hosting-domain",
          question: "Do you provide hosting and domain services?",
          answer: "Yes, we offer premium hosting solutions with 99.9% uptime guarantee, SSL certificates, daily backups, and security monitoring. We can also help with domain registration and management. Our hosting packages start at $29/month."
        },
        {
          id: "security",
          question: "How do you ensure the security of my project?",
          answer: "We implement enterprise-grade security measures including SSL encryption, secure coding practices, regular security audits, malware protection, and backup systems. All our solutions comply with industry security standards and data protection regulations."
        }
      ]
    }
  ];

  const currentTab = faqTabs.find(tab => tab.id === activeTab);

  return (
    <section id="faq" className="py-20 lg:py-32 relative  bg-gradient-space overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our services, process, and support
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqTabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`glass-card px-6 py-3 ${
                  activeTab === tab.id 
                    ? "bg-primary text-primary-foreground" 
                    : "border-primary/30 hover:border-primary hover:bg-primary/10"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {currentTab?.questions.map((faq, index) => (
              <div 
                key={faq.id}
                className="glass-card rounded-2xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                  onClick={() => toggleQuestion(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-primary transition-transform flex-shrink-0 ${
                      openQuestions[faq.id] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openQuestions[faq.id] && (
                  <div className="px-6 pb-4 animate-fade-in-up">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our expert team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 group"
                onClick={() => window.open('https://wa.me/9136242706', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
              </Button>
              <Button variant="outline" className="glass-card border-primary/30">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;