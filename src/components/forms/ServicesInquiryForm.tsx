import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ServicesInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const services = [
    "Website Development",
    "Mobile Application",
    "UI/UX Design",
    "E-commerce Development", 
    "Digital Marketing",
    "Brand Design",
    "SEO Services",
    "Social Media Marketing",
    "Custom Software",
    "Other"
  ];

  const budgetRanges = [
    "$1,000 - $5,000",
    "$5,000 - $10,000", 
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const timelines = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "2-3 months", 
    "3-6 months",
    "6+ months"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappMessage = `🔥 *New Service Inquiry* 🔥

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🏢 *Company:* ${formData.company}
⚡ *Service:* ${formData.service}
💰 *Budget:* ${formData.budget}
⏰ *Timeline:* ${formData.timeline}

📝 *Message:*
${formData.message}

---
*Sent via Yurekh Solutions Website*`;

    const whatsappUrl = `https://wa.me/9136242706?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp...", {
      description: "Your inquiry will be sent directly to our team!"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Services Inquiry</h3>
        <p className="text-muted-foreground">
          Tell us about your project and get a custom quote
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              className="glass bg-background/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@example.com"
              className="glass bg-background/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Phone *</label>
            <Input
              required
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
              className="glass bg-background/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Company</label>
            <Input
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your company name"
              className="glass bg-background/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Service Needed *</label>
          <Select required onValueChange={(value) => handleInputChange("service", value)}>
            <SelectTrigger className="glass bg-background/50">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Budget Range</label>
            <Select onValueChange={(value) => handleInputChange("budget", value)}>
              <SelectTrigger className="glass bg-background/50">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Timeline</label>
            <Select onValueChange={(value) => handleInputChange("timeline", value)}>
              <SelectTrigger className="glass bg-background/50">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((timeline) => (
                  <SelectItem key={timeline} value={timeline}>
                    {timeline}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Project Details *</label>
          <Textarea
            required
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tell us about your project requirements, goals, and any specific features you need..."
            rows={4}
            className="glass bg-background/50"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 py-3 text-lg font-semibold group"
        >
          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          Send Inquiry via WhatsApp
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your inquiry will be sent directly to our WhatsApp for instant response
        </p>
      </form>
    </div>
  );
};

export default ServicesInquiryForm;