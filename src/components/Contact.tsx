import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import contact from "@/assets/contact.png";
const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/bookingform");
  };

  const categories = [
    "Development Services",
    "Premium Digital Branding",
    "Product Launch & Development Services",
    "Social Media Marketing",
    "Elevated Branding Services",
    "Print Media & Advertising",
    "Tailored Digital Work",
    "Public Relations (PR)",
    "Business Consulting",
    "AI & Machine Learning",
  ];

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
    >
      {/* Teal gradient glow */}
      <div className="absolute top-1/4 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1BE1D3]/5 rounded-full blur-[100px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#1BE1D3]/3 rounded-full blur-[80px] sm:blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Content - Two Column inside rounded container */}
        <div
          className="rounded-[20px] sm:rounded-[28px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(10,26,26,0.8) 0%, rgba(5,15,15,0.95) 100%)",
            border: "1px solid rgba(27,225,211,0.08)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 items-start">
            {/* Left Side - Tell us about your project */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-bold text-white leading-[1.2] mb-4 sm:mb-6 md:mb-8">
                Tell us about your project
              </h2>

              {/* Trust indicators with checkmarks */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#1BE1D3]/15 border border-[#1BE1D3]/25 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1BE1D3]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/80 text-[12px] sm:text-[13px] md:text-[15px]">We will respond to you within 12 hours</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#1BE1D3]/15 border border-[#1BE1D3]/25 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1BE1D3]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/80 text-[12px] sm:text-[13px] md:text-[15px]">We'll sign an NDA if requested</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#1BE1D3]/15 border border-[#1BE1D3]/25 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1BE1D3]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/80 text-[12px] sm:text-[13px] md:text-[15px]">Access to dedicated consultant specialists</span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10">
                <a
                  href="mailto:yurekhsolutions@gmail.com"
                  className="flex items-center gap-3 text-[#1BE1D3] hover:text-white transition-colors duration-300 group"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-[13px] sm:text-[14px] md:text-[16px] font-medium group-hover:underline">yurekhsolutions@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/919136242706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#1BE1D3] transition-colors duration-300"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-[13px] sm:text-[14px] md:text-[16px]">+91 91362 42706</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-[13px] sm:text-[14px] md:text-[16px]">Mumbai, India</span>
                </div>
              </div>

              {/* CTA for busy people */}
             <div className="glass-panel rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
  <img
    src={contact}
    alt="Contact"
    className="w-full max-w-[280px] sm:max-w-[350px] mb-3 sm:mb-4 mx-auto object-contain"
  />
</div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-white mb-1.5 sm:mb-2">
                Get A Free Consultation
              </h3>
              <p className="text-white/50 text-[12px] sm:text-[13px] md:text-[14px] mb-4 sm:mb-6 md:mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-white/80 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase mb-1.5 sm:mb-2 block">
                      First Name <span className="text-[#1BE1D3]">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-2.5 sm:py-3 text-[14px] sm:text-[15px] text-white placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-[#1BE1D3]/60 focus-visible:ring-offset-0 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white/80 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase mb-1.5 sm:mb-2 block">
                      Last Name <span className="text-[#1BE1D3]">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-2.5 sm:py-3 text-[14px] sm:text-[15px] text-white placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-[#1BE1D3]/60 focus-visible:ring-offset-0 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-white/80 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase mb-1.5 sm:mb-2 block">
                    Email <span className="text-[#1BE1D3]">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-3 text-white placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-[#1BE1D3]/60 focus-visible:ring-offset-0 transition-colors duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-white/80 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase mb-1.5 sm:mb-2 block">
                    Phone Number <span className="text-[#1BE1D3]">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <select
                      className="bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-2.5 sm:py-3 text-white/70 text-[13px] sm:text-[14px] focus:outline-none focus:border-[#1BE1D3]/60 cursor-pointer appearance-none w-[120px] sm:w-[140px] flex-shrink-0 transition-colors duration-300"
                    >
                      <option value="+91">India (+91)</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+971">+971</option>
                      <option value="+61">+61</option>
                      <option value="+49">+49</option>
                    </select>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                      className="bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-2.5 sm:py-3 text-[14px] sm:text-[15px] text-white placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-[#1BE1D3]/60 focus-visible:ring-offset-0 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <Label htmlFor="category" className="text-white/80 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase mb-1.5 sm:mb-2 block">
                    Select a Category
                  </Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-2.5 sm:py-3 text-white/70 text-[13px] sm:text-[14px] focus:outline-none focus:border-[#1BE1D3]/60 cursor-pointer appearance-none transition-colors duration-300"
                  >
                    <option value="">Choose a service...</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-white/80 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase mb-1.5 sm:mb-2 block">
                    Describe Your Project Needs
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-2.5 sm:py-3 text-[14px] sm:text-[15px] text-white placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-[#1BE1D3]/60 focus-visible:ring-offset-0 resize-none transition-colors duration-300"
                  />
                </div>

                {/* Privacy */}
                <p className="text-white/40 text-[11px] sm:text-[12px]">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-[#1BE1D3] underline hover:no-underline">
                    Privacy Policy
                  </a>.
                </p>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl text-white text-[14px] sm:text-[16px] font-semibold cursor-pointer transition-all duration-300"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    background: "linear-gradient(90deg, #5f636b, #1be1d3, #345d66, #1c1d20)",
                    backgroundSize: "300% 100%",
                    animation: "gradientBtn 5s ease-in-out infinite",
                  }}
                >
                  Get In Touch
                </motion.button>

                <style>{`
                  @keyframes gradientBtn {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  select option {
                    background: #0a1a1a;
                    color: white;
                  }
                `}</style>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
