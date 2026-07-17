import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, Building, Globe, Target, MessageSquare, CheckCircle, ArrowLeft, ArrowRight, Sparkles, Zap, TrendingUp, Bot, ArrowUp, Shield, Award, Star } from 'lucide-react';
import SEOHead from "@/components/SEOHead";

const Button = ({ children, onClick, className = '', variant = 'default', disabled = false, type = 'button' }: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit';
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-normal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    default: 'bg-[#1BE1D3] hover:bg-[#1BE1D3]/80 text-black shadow-lg hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]',
    outline: 'border-2 border-[#1BE1D3] text-[#1BE1D3] hover:bg-[#1BE1D3]/10',
    secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Input = ({ value, onChange, placeholder, className = '', type = 'text', id, required = false }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  id?: string;
  required?: boolean;
}) => (
  <input
    type={type} id={id} value={value} onChange={onChange} placeholder={placeholder} required={required}
    className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1BE1D3]/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#1BE1D3]/50 focus:border-[#1BE1D3]/50 transition-all duration-300 ${className}`}
  />
);

const Textarea = ({ value, onChange, placeholder, className = '', id, rows = 3 }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  rows?: number;
}) => (
  <textarea
    id={id} value={value} onChange={onChange} placeholder={placeholder} rows={rows}
    className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1BE1D3]/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#1BE1D3]/50 focus:border-[#1BE1D3]/50 transition-all duration-300 resize-none ${className}`}
  />
);

const Select = ({ value, onChange, children, placeholder, className = '' }: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
  className?: string;
}) => (
  <select
    value={value} onChange={(e) => onChange(e.target.value)}
    className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-[#1BE1D3]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#1BE1D3]/50 focus:border-[#1BE1D3]/50 transition-all duration-300 ${className}`}
  >
    {placeholder && <option value="" className="bg-[#0b0f0f] text-white">{placeholder}</option>}
    {children}
  </select>
);

const Label = ({ children, htmlFor, className = '' }: {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}) => (
  <label htmlFor={htmlFor} className={`block text-sm font-normal text-white/90 mb-2 ${className}`} style={{ fontFamily: "Poppins, sans-serif" }}>
    {children}
  </label>
);

const Checkbox = ({ checked, onChange, id }: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}) => (
  <input
    type="checkbox" id={id} checked={checked} onChange={(e) => onChange(e.target.checked)}
    className="w-5 h-5 rounded border-[#1BE1D3]/30 bg-white/5 text-[#1BE1D3] focus:ring-[#1BE1D3] focus:ring-2 accent-[#1BE1D3]"
  />
);

const SectionIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
    <Icon className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2} />
  </div>
);

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', phone: '', email: '', companyName: '', website: '',
    industry: '', businessSize: '', goals: [] as string[],
    currentProcess: '', painPoints: '', agreement: false,
  });
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const generateCalendarDays = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      const prevMonth = month - 1;
      const prevYear = prevMonth < 0 ? year - 1 : year;
      const actualPrevMonth = prevMonth < 0 ? 11 : prevMonth;
      const prevDaysInMonth = new Date(prevYear, actualPrevMonth + 1, 0).getDate();
      days.push({ day: prevDaysInMonth - i, isCurrentMonth: false, date: new Date(prevYear, actualPrevMonth, prevDaysInMonth - i) });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true, date: new Date(year, month, day) });
    }
    return days;
  };

  const timeSlots = ['06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'];

  const industries = ['Healthcare', 'E-commerce', 'Real Estate', 'Professional Services', 'Technology', 'Education', 'Manufacturing', 'Retail', 'Finance', 'Food & Beverage', 'Fitness & Wellness', 'Other'];
  const businessSizes = ['Solo Entrepreneur', '2-10 Employees', '11-50 Employees', '51-200 Employees', '200+ Employees'];

  const goalOptions = [
    'Get more Online reviews (so that your business looks more credible and ranks higher locally)',
    'Automate Appointment booking (so that leads are captured even after business hours)',
    'Reduce Missed calls (so that you never lose a potential customer)',
    'Use a 24/7 AI Assistant (so that your business works while you sleep)',
    'Reduce Admin workload (so that your team can focus on high-value tasks)',
    'Increase Leads and Conversions (so that marketing efforts result in real revenue)'
  ];

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, goals: checked ? [...prev.goals, goal] : prev.goals.filter(g => g !== goal) }));
  };

  const scrollToBooking = () => {
    setStep('calendar');
    setTimeout(() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const generateWhatsAppMessage = () => {
    const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const goalsText = formData.goals.length > 0 ? formData.goals.map(goal => `  - ${goal}`).join('\n') : '  Not specified';
    return encodeURIComponent(
      `========================================\n  CONSULTATION BOOKING\n  Yurekh Solutions\n========================================\n\nDATE & TIME:\n  ${dateStr} at ${selectedTime}\n\nGOOGLE MEET:\n  https://meet.google.com/new\n\n----------------------------------------\nCONTACT INFORMATION\n----------------------------------------\n  Name:    ${formData.firstName}\n  Phone:   ${formData.phone}\n  Email:   ${formData.email}\n  Company: ${formData.companyName || 'Not provided'}\n  Website: ${formData.website || 'Not provided'}\n\n----------------------------------------\nBUSINESS DETAILS\n----------------------------------------\n  Industry:      ${formData.industry || 'Not specified'}\n  Business Size: ${formData.businessSize || 'Not specified'}\n\n----------------------------------------\nGOALS\n----------------------------------------\n${goalsText}\n\n----------------------------------------\nCURRENT PROCESS\n----------------------------------------\n  ${formData.currentProcess || 'Not specified'}\n\n----------------------------------------\nPAIN POINTS\n----------------------------------------\n  ${formData.painPoints || 'Not specified'}\n\n----------------------------------------\nCONSULTATION FEE: $100\n----------------------------------------\n\nLooking forward to the consultation.\nThank you!`
    );
  };

  const generateGoogleCalendarLink = () => {
    const startDate = new Date(selectedDate);
    const [timeStr, period] = selectedTime.split(' ');
    const [hours, minutes] = timeStr.split(':').map(Number);
    let h = hours;
    if (period === 'PM' && h !== 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    startDate.setHours(h, minutes, 0, 0);
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);
    const formatGCal = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const details = encodeURIComponent(
      `Consultation with Yurekh Solutions\n\nGoogle Meet: https://meet.google.com/new\n\nJoin via: https://meet.google.com/new\n\nBooking details sent via WhatsApp. Looking forward to our consultation!`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+with+Yurekh+Solutions&dates=${formatGCal(startDate)}/${formatGCal(endDate)}&details=${details}&location=https://meet.google.com/new&add=guests&sf=true&output=xml`;
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.phone || !formData.email || !selectedTime || !formData.agreement) {
      alert('Please fill in all required fields and accept the agreement.');
      return;
    }
    const whatsappUrl = `https://wa.me/919136242706?text=${generateWhatsAppMessage()}`;
    const gcalUrl = generateGoogleCalendarLink();
    window.open(whatsappUrl, '_blank');
    setTimeout(() => window.open(gcalUrl, '_blank'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b0f0f] relative overflow-hidden">
      <SEOHead
        title="Book a Consultation | Schedule Your Free Strategy Session | Yurekh Solutions"
        description="Schedule a free consultation with Yurekh Solutions. Discuss your business vision, get expert advice on strategy, technology, branding, and go-to-market. Call +91 91362 42706."
        keywords="book consultation, schedule meeting, free consultation, business strategy session, Yurekh Solutions booking, contact Yurekh"
        canonical="https://yurekh.com/bookingform"
        breadcrumbs={[{ name: "Book Consultation", url: "https://yurekh.com/bookingform" }]}
      />
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1BE1D3]/5 via-transparent to-[#1BE1D3]/3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 relative z-10">

        {/* Hero Section */}
        {step === 'calendar' && (
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#1BE1D3]/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#1BE1D3]/30 mb-6">
              <Bot className="w-5 h-5 text-[#1BE1D3] animate-pulse" />
              <span className="text-[#1BE1D3] font-normal text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>AI-Powered Business Automation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, letterSpacing: "-0.02em" }}>
              <span className="text-white block mb-1">Transform Your Business with</span>
              <span className="text-[#1BE1D3]">AI Automation</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10" style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}>
              Never miss a lead again. Our AI Employee handles calls, chats, books appointments, and manages reviews 24/7 — while you focus on growing your business.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-12">
              {[
                { icon: Zap, title: "24/7 AI Assistant", desc: "Never miss a customer inquiry, even after business hours" },
                { icon: TrendingUp, title: "Boost Conversions", desc: "Convert more leads with intelligent automated responses" },
                { icon: Sparkles, title: "Smart Automation", desc: "Automate repetitive tasks and focus on high-value work" },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#0d2828] to-[#0a1f1f] border-2 border-[#1BE1D3]/20 rounded-2xl p-6 text-center hover:border-[#1BE1D3]/50 hover:shadow-[0_0_30px_rgba(27,225,211,0.15)] transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30 mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-normal text-white mb-2 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-10">
              <Button onClick={scrollToBooking} className="text-lg px-8 py-4">
                Book Free Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4" onClick={() => window.open('https://wa.me/9136242706', '_blank')}>
                Chat on WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14">
              {[
                { value: "24/7", label: "AI Availability" },
                { value: "300%", label: "Lead Increase" },
                { value: "90%", label: "Time Saved" },
                { value: "$100", label: "Starting Price" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl md:text-3xl font-normal text-[#1BE1D3] mb-1" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, letterSpacing: "-0.01em" }}>{stat.value}</div>
                  <div className="text-white/60 text-xs sm:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Content */}
        <div id="booking-section" className="mt-16 sm:mt-20 bg-gradient-to-br from-[#0d2828]/80 to-[#0a1f1f]/80 backdrop-blur-xl border-2 border-[#1BE1D3]/20 rounded-3xl p-6 sm:p-8 lg:p-10">
          {step === 'calendar' ? (
            <div className="space-y-10">
              <div className="text-center space-y-5">
                <div className="flex items-center justify-center gap-3">
                  <SectionIcon icon={Calendar} />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-white tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Select Date & Time</h2>
                </div>
                <div className="flex items-center justify-center gap-2 text-[#1BE1D3]">
                  <Clock className="w-5 h-5" />
                  <span className="font-normal" style={{ fontFamily: "Poppins, sans-serif" }}>30 Mins</span>
                </div>
                <p className="text-[#1BE1D3]/80 font-normal" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Calendar */}
                <div className="space-y-6">
                  <div className="grid grid-cols-7 gap-1">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                      <div key={day} className="text-center py-3 text-white/60 font-normal text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{day}</div>
                    ))}
                    {generateCalendarDays().map((day, index) => (
                      <button key={index} onClick={() => setSelectedDate(day.date)}
                        className={`py-3 text-center rounded-xl font-normal transition-all duration-300 hover:scale-105 ${day.isCurrentMonth ? 'text-white hover:bg-[#1BE1D3]/20' : 'text-white/30'} ${selectedDate.toDateString() === day.date.toDateString() ? 'bg-[#1BE1D3] text-black shadow-[0_0_20px_rgba(27,225,211,0.4)]' : ''}`}
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >{day.day}</button>
                    ))}
                  </div>
                  <div className="bg-white/5 border border-[#1BE1D3]/20 rounded-xl p-4">
                    <div className="text-[#1BE1D3] font-normal mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="text-white/60 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>GMT+05:30 Asia/Calcutta</div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map(time => (
                      <button key={time} onClick={() => setSelectedTime(time)}
                        className={`p-4 rounded-xl font-normal transition-all duration-300 hover:scale-105 ${selectedTime === time ? 'bg-[#1BE1D3] text-black shadow-[0_0_20px_rgba(27,225,211,0.4)]' : 'bg-white/5 border border-[#1BE1D3]/20 text-white hover:bg-[#1BE1D3]/10'}`}
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >{time}</button>
                    ))}
                  </div>
                  {selectedTime && (
                    <Button onClick={() => { setStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="w-full py-4 text-lg">
                      Continue to Form <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Demo Benefits */}
              <div className="bg-white/5 border border-[#1BE1D3]/15 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <SectionIcon icon={Star} />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>What You'll Get in This Demo:</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Live demonstration of AI Employee handling calls and chats',
                    'See how it captures leads and books appointments automatically',
                    'Learn how it manages your reputation and reviews',
                    'Personalized setup walkthrough for your business',
                    'Custom pricing based on your specific needs',
                    'Q&A session to address your unique challenges'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1BE1D3] mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1BE1D3]/10 border border-[#1BE1D3]/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
                      <Target className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-normal text-[#1BE1D3] tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>100% Money Back Guarantee</h4>
                  </div>
                  <p className="text-white/90 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Try AI Employee today — no commitments, just results. See how it can transform your business in just a few days!
                  </p>
                  <div className="bg-white/5 border border-[#1BE1D3]/20 px-4 py-3 rounded-lg">
                    <span className="text-[#1BE1D3] font-normal" style={{ fontFamily: "Poppins, sans-serif" }}>Special Launch Offer: </span>
                    <span className="text-white" style={{ fontFamily: "Poppins, sans-serif" }}>Get your first 7 days free – no risk, no commitment, no pressure to continue.</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
                <Button variant="outline" onClick={() => setStep('calendar')}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Calendar
                </Button>
                <div className="text-center flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-white tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Complete Your Booking</h2>
                  <p className="text-[#1BE1D3] mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} at {selectedTime}
                  </p>
                </div>
              </div>

              <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                {/* Contact Information */}
                <div className="bg-white/5 border border-[#1BE1D3]/15 rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <SectionIcon icon={User} />
                    <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Contact Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName">First Name <span className="text-red-400">*</span></Label>
                      <Input id="firstName" value={formData.firstName} onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))} placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#1BE1D3]" /> Phone <span className="text-red-400">*</span></Label>
                      <Input id="phone" value={formData.phone} onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))} placeholder="Enter your phone number" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#1BE1D3]" /> Email <span className="text-red-400">*</span></Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))} placeholder="Enter your email address" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="companyName" className="flex items-center gap-2"><Building className="w-4 h-4 text-[#1BE1D3]" /> Company Name</Label>
                      <Input id="companyName" value={formData.companyName} onChange={(e) => setFormData(prev => ({...prev, companyName: e.target.value}))} placeholder="Enter your company name" />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <Label htmlFor="website" className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#1BE1D3]" /> Website (if any)</Label>
                      <Input id="website" value={formData.website} onChange={(e) => setFormData(prev => ({...prev, website: e.target.value}))} placeholder="https://your-website.com" />
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="bg-white/5 border border-[#1BE1D3]/15 rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <SectionIcon icon={Building} />
                    <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Business Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label>Industry Type</Label>
                      <Select value={formData.industry} onChange={(value) => setFormData(prev => ({...prev, industry: value}))} placeholder="Select your industry">
                        {industries.map(industry => (<option key={industry} value={industry} className="bg-[#0b0f0f] text-white">{industry}</option>))}
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label>Business Size</Label>
                      <Select value={formData.businessSize} onChange={(value) => setFormData(prev => ({...prev, businessSize: value}))} placeholder="Select business size">
                        {businessSizes.map(size => (<option key={size} value={size} className="bg-[#0b0f0f] text-white">{size}</option>))}
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div className="bg-white/5 border border-[#1BE1D3]/15 rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <SectionIcon icon={Target} />
                    <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>What would you like to achieve?</h3>
                  </div>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Select all that apply</p>
                  <div className="space-y-4">
                    {goalOptions.map((goal, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1BE1D3]/5 transition-colors duration-200">
                        <Checkbox id={`goal-${index}`} checked={formData.goals.includes(goal)} onChange={(checked) => handleGoalChange(goal, checked)} />
                        <Label htmlFor={`goal-${index}`} className="text-white/90 leading-relaxed cursor-pointer text-sm md:text-base">{goal}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white/5 border border-[#1BE1D3]/15 rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <SectionIcon icon={MessageSquare} />
                    <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Additional Information</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="currentProcess">How are you currently managing appointments, reviews, and inquiries?</Label>
                      <Textarea id="currentProcess" value={formData.currentProcess} onChange={(e) => setFormData(prev => ({...prev, currentProcess: e.target.value}))} placeholder="Tell us about your current process..." rows={4} />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="painPoints">What specific pain points would you like us to focus on during the demo?</Label>
                      <Textarea id="painPoints" value={formData.painPoints} onChange={(e) => setFormData(prev => ({...prev, painPoints: e.target.value}))} placeholder="Describe your main challenges..." rows={4} />
                    </div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="bg-white/5 border border-[#1BE1D3]/15 rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <SectionIcon icon={Shield} />
                    <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Agreement</h3>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg">
                    <Checkbox id="agreement" checked={formData.agreement} onChange={(checked) => setFormData(prev => ({...prev, agreement: checked}))} />
                    <Label htmlFor="agreement" className="text-white/90 cursor-pointer">
                      I agree to be contacted for the Demo and further communication.
                    </Label>
                  </div>
                  <p className="text-white/50 text-sm px-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    By submitting this form, you agree to our <Link to="/privacy" className="text-[#1BE1D3] hover:underline">Privacy Policy</Link>.
                  </p>
                  <div className="p-4 md:p-6 bg-[#1BE1D3]/10 border border-[#1BE1D3]/30 rounded-xl">
                    <p className="text-[#1BE1D3] font-normal text-center text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
                      💰 Consultation Fee: $100 — Expert guidance for your business transformation
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col md:flex-row gap-4">
                  <Button type="button" onClick={() => setStep('calendar')} variant="outline" className="flex-1 py-4 text-lg">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Calendar
                  </Button>
                  <Button type="submit" className="flex-1 py-4 text-lg" disabled={!formData.agreement || !formData.firstName || !formData.phone || !formData.email}>
                    Book Demo <MessageSquare className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#1BE1D3] text-black shadow-[0_0_20px_rgba(27,225,211,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(27,225,211,0.6)]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BookingForm;
