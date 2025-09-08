import { useState } from "react";
import { Users, Upload, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    location: "",
    expectedSalary: "",
    portfolio: "",
    skills: "",
    coverLetter: "",
    availability: ""
  });

  const positions = [
    "Frontend Developer",
    "Backend Developer", 
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "Digital Marketing Specialist",
    "SEO Specialist",
    "Social Media Manager",
    "Project Manager",
    "Business Development Executive",
    "Content Writer",
    "Graphic Designer",
    "DevOps Engineer",
    "Quality Assurance Engineer"
  ];

  const experienceLevels = [
    "Entry Level (0-1 years)",
    "Junior (1-3 years)",
    "Mid-Level (3-5 years)", 
    "Senior (5-8 years)",
    "Lead (8+ years)"
  ];

  const availabilities = [
    "Immediately",
    "2 weeks notice",
    "1 month notice",
    "2-3 months"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `🚀 *Career Application* 🚀

👤 *Candidate:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

💼 *Position Applied:* ${formData.position}
⭐ *Experience Level:* ${formData.experience}
📍 *Location:* ${formData.location}
💰 *Expected Salary:* ${formData.expectedSalary}
📅 *Availability:* ${formData.availability}

🔗 *Portfolio/LinkedIn:* ${formData.portfolio}

💡 *Key Skills:*
${formData.skills}

📝 *Cover Letter:*
${formData.coverLetter}

---
*Job Application via Yurekh Solutions Careers*
*Resume attachment will be shared separately*`;

    const whatsappUrl = `https://wa.me/9136242706?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Application sent successfully!", {
      description: "We'll review your application and get back to you soon."
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
        <p className="text-muted-foreground">
          Apply for exciting career opportunities at Yurekh Solutions
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
            <label className="block text-sm font-medium mb-2">Location</label>
            <Input
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              placeholder="City, State/Country"
              className="glass bg-background/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Position Applied For *</label>
            <Select required onValueChange={(value) => handleInputChange("position", value)}>
              <SelectTrigger className="glass bg-background/50">
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Experience Level *</label>
            <Select required onValueChange={(value) => handleInputChange("experience", value)}>
              <SelectTrigger className="glass bg-background/50">
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Expected Salary</label>
            <Input
              value={formData.expectedSalary}
              onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
              placeholder="e.g., $60,000 - $80,000"
              className="glass bg-background/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Availability *</label>
            <Select required onValueChange={(value) => handleInputChange("availability", value)}>
              <SelectTrigger className="glass bg-background/50">
                <SelectValue placeholder="When can you start?" />
              </SelectTrigger>
              <SelectContent>
                {availabilities.map((availability) => (
                  <SelectItem key={availability} value={availability}>
                    {availability}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Portfolio/LinkedIn URL</label>
          <Input
            type="url"
            value={formData.portfolio}
            onChange={(e) => handleInputChange("portfolio", e.target.value)}
            placeholder="https://yourportfolio.com or https://linkedin.com/in/yourname"
            className="glass bg-background/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Key Skills & Technologies *</label>
          <Textarea
            required
            value={formData.skills}
            onChange={(e) => handleInputChange("skills", e.target.value)}
            placeholder="List your key skills, programming languages, frameworks, tools, etc."
            rows={3}
            className="glass bg-background/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cover Letter *</label>
          <Textarea
            required
            value={formData.coverLetter}
            onChange={(e) => handleInputChange("coverLetter", e.target.value)}
            placeholder="Tell us why you're passionate about this role and what makes you a great fit for Yurekh Solutions..."
            rows={4}
            className="glass bg-background/50"
          />
        </div>

        {/* Resume Upload Info */}
        <div className="glass p-4 rounded-xl text-sm text-muted-foreground">
          <Upload className="h-5 w-5 text-primary mb-2" />
          <p>
            <strong>Resume Upload:</strong> After submitting this form, please send your resume via WhatsApp 
            to complete your application.
          </p>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 py-3 text-lg font-semibold group"
        >
          <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Submit Application
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your application will be sent directly to our HR team via WhatsApp
        </p>
      </form>
    </div>
  );
};

export default CareerForm;