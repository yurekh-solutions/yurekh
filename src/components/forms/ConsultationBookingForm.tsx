import { useState } from "react";
import { Calendar, CreditCard, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ConsultationBookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    duration: "",
    requirements: "",
    paymentMethod: ""
  });

  const consultationTypes = [
    { name: "Website Strategy", price: "$199", duration: "60 min" },
    { name: "Mobile App Planning", price: "$249", duration: "90 min" },
    { name: "Digital Marketing", price: "$179", duration: "45 min" },
    { name: "Brand Strategy", price: "$299", duration: "120 min" },
    { name: "Technical Architecture", price: "$349", duration: "90 min" },
    { name: "Complete Business Digital Audit", price: "$499", duration: "180 min" }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedConsultation = consultationTypes.find(c => c.name === formData.consultationType);
    
    const whatsappMessage = `💼 *Consultation Booking Request* 💼

👤 *Client:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

🎯 *Consultation Type:* ${formData.consultationType}
💰 *Price:* ${selectedConsultation?.price}
⏱️ *Duration:* ${selectedConsultation?.duration}

📅 *Preferred Date:* ${formData.preferredDate}
🕒 *Preferred Time:* ${formData.preferredTime}

📝 *Requirements:*
${formData.requirements}

💳 *Payment Method:* ${formData.paymentMethod}

---
*Consultation Booking via Yurekh Solutions*
*Payment processing will be handled after confirmation*`;

    const whatsappUrl = `https://wa.me/9136242706?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Booking request sent!", {
      description: "We'll confirm your consultation and send payment details via WhatsApp"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Book Consultation</h3>
        <p className="text-muted-foreground">
          Get expert advice tailored to your business needs
        </p>
        
        {/* Step Indicator */}
        <div className="flex justify-center mt-6 space-x-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= num ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground'
            }`}>
              {step > num ? <CheckCircle className="h-5 w-5" /> : num}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Basic Information */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in-up">
            <h4 className="text-lg font-semibold">Personal Information</h4>
            
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

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <Input
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="glass bg-background/50"
              />
            </div>

            <Button type="button" onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
              Next Step
            </Button>
          </div>
        )}

        {/* Step 2: Consultation Details */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in-up">
            <h4 className="text-lg font-semibold">Consultation Details</h4>
            
            <div>
              <label className="block text-sm font-medium mb-2">Consultation Type *</label>
              <Select required onValueChange={(value) => handleInputChange("consultationType", value)}>
                <SelectTrigger className="glass bg-background/50">
                  <SelectValue placeholder="Select consultation type" />
                </SelectTrigger>
                <SelectContent>
                  {consultationTypes.map((consultation) => (
                    <SelectItem key={consultation.name} value={consultation.name}>
                      <div className="flex justify-between items-center w-full">
                        <span>{consultation.name}</span>
                        <div className="text-right ml-4">
                          <div className="text-primary font-bold">{consultation.price}</div>
                          <div className="text-xs text-muted-foreground">{consultation.duration}</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                <Input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  className="glass bg-background/50"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                <Select required onValueChange={(value) => handleInputChange("preferredTime", value)}>
                  <SelectTrigger className="glass bg-background/50">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Requirements & Goals</label>
              <Textarea
                value={formData.requirements}
                onChange={(e) => handleInputChange("requirements", e.target.value)}
                placeholder="Tell us about your project goals, challenges, and what you hope to achieve from this consultation..."
                rows={4}
                className="glass bg-background/50"
              />
            </div>

            <div className="flex space-x-4">
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
              <Button type="button" onClick={handleNext} className="flex-1 bg-primary hover:bg-primary/90">
                Next Step
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Payment & Confirmation */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in-up">
            <h4 className="text-lg font-semibold">Payment & Confirmation</h4>
            
            {/* Consultation Summary */}
            <div className="glass p-4 rounded-xl">
              <h5 className="font-semibold mb-3">Consultation Summary</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="text-primary">{formData.consultationType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date & Time:</span>
                  <span>{formData.preferredDate} at {formData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{consultationTypes.find(c => c.name === formData.consultationType)?.duration}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total:</span>
                  <span className="text-primary">{consultationTypes.find(c => c.name === formData.consultationType)?.price}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Payment Method *</label>
              <Select required onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                <SelectTrigger className="glass bg-background/50">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-card">Credit/Debit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="crypto">Cryptocurrency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="glass p-4 rounded-xl text-sm text-muted-foreground">
              <CreditCard className="h-5 w-5 text-primary mb-2" />
              <p>
                <strong>Secure Payment Processing:</strong> After submitting this form, you'll receive payment instructions 
                via WhatsApp. Payment is required to confirm your consultation booking.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 group">
                <Clock className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ConsultationBookingForm;