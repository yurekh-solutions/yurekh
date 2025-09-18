import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Building, Globe, Target, MessageSquare, CheckCircle, ArrowLeft, ArrowRight, Sparkles, Zap, TrendingUp, Bot } from 'lucide-react';

// Custom Button Component
const Button = ({ children, onClick, className = '', variant = 'default', disabled = false, type = 'button' }: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit';
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    default: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 backdrop-blur-sm',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Custom Input Component
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
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${className}`}
  />
);

// Custom Textarea Component
const Textarea = ({ value, onChange, placeholder, className = '', id, rows = 3 }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  rows?: number;
}) => (
  <textarea
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${className}`}
  />
);

// Custom Select Component
const Select = ({ value, onChange, children, placeholder, className = '' }: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
  className?: string;
}) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${className}`}
  >
    {placeholder && <option value="" className="bg-gray-800 text-white">{placeholder}</option>}
    {children}
  </select>
);

// Custom Label Component
const Label = ({ children, htmlFor, className = '' }: {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium text-white mb-2 ${className}`}>
    {children}
  </label>
);

// Custom Checkbox Component
const Checkbox = ({ checked, onChange, id }: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={(e) => onChange(e.target.checked)}
    className="w-5 h-5 rounded border-white/20 bg-white/10 text-blue-600 focus:ring-blue-500 focus:ring-2"
  />
);

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    companyName: '',
    website: '',
    industry: '',
    businessSize: '',
    goals: [] as string[],
    currentProcess: '',
    painPoints: '',
    agreement: false,
  });
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Add previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      const prevMonth = month - 1;
      const prevYear = prevMonth < 0 ? year - 1 : year;
      const actualPrevMonth = prevMonth < 0 ? 11 : prevMonth;
      const prevDaysInMonth = new Date(prevYear, actualPrevMonth + 1, 0).getDate();
      days.push({
        day: prevDaysInMonth - i,
        isCurrentMonth: false,
        date: new Date(prevYear, actualPrevMonth, prevDaysInMonth - i),
      });
    }
    
    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(year, month, day),
      });
    }
    
    return days;
  };

  const timeSlots = [
    '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM',
    '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
  ];

  const industries = [
    'Healthcare', 'E-commerce', 'Real Estate', 'Professional Services',
    'Technology', 'Education', 'Manufacturing', 'Retail',
    'Finance', 'Food & Beverage', 'Fitness & Wellness', 'Other'
  ];

  const businessSizes = [
    'Solo Entrepreneur', '2-10 Employees', '11-50 Employees', 
    '51-200 Employees', '200+ Employees'
  ];

  const goalOptions = [
    'Get more Online reviews (so that your business looks more credible and ranks higher locally)',
    'Automate Appointment booking (so that leads are captured even after business hours)', 
    'Reduce Missed calls (so that you never lose a potential customer)',
    'Use a 24/7 AI Assistant (so that your business works while you sleep)',
    'Reduce Admin workload (so that your team can focus on high-value tasks)',
    'Increase Leads and Conversions (so that marketing efforts result in real revenue)'
  ];

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      goals: checked 
        ? [...prev.goals, goal]
        : prev.goals.filter(g => g !== goal)
    }));
  };

  const scrollToBooking = () => {
    setStep('calendar');
  };

  const generateWhatsAppMessage = () => {
    const dateStr = selectedDate.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return encodeURIComponent(
      `🚀 AI AUTOMATION CONSULTATION BOOKING\n\n` +
      `📅 Selected Date & Time:\n${dateStr} at ${selectedTime}\n\n` +
      `👤 Contact Information:\n` +
      `• Name: ${formData.firstName}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email}\n` +
      `• Company: ${formData.companyName || 'Not provided'}\n` +
      `• Website: ${formData.website || 'Not provided'}\n\n` +
      `🏢 Business Details:\n` +
      `• Industry: ${formData.industry}\n` +
      `• Business Size: ${formData.businessSize}\n\n` +
      `🎯 Goals for Demo:\n${formData.goals.map(goal => `• ${goal}`).join('\n')}\n\n` +
      `💼 Current Process:\n${formData.currentProcess}\n\n` +
      `⚡ Pain Points:\n${formData.painPoints}\n\n` +
      `💰 Consultation Fee: ₹4,999\n\n` +
      `Ready to transform your business with AI automation! 🤖✨`
    );
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.phone || !formData.email || !selectedTime || !formData.agreement) {
      alert('Please fill in all required fields and accept the agreement.');
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/9136242706?text=${whatsappMessage}`;
    
    console.log('Booking Data:', {
      date: selectedDate,
      time: selectedTime,
      ...formData
    });

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-space py-40 lg:py-40 relative overflow-hidden text-[#009494] font-sans">
       <div className="absolute inset-0">
          <div className="stars animate-twinkle opacity-20"></div>
          <div className="stars2 animate-twinkle opacity-30"></div>
        </div>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section - Only show on calendar step */}
        {step === 'calendar' && (
          <div className="text-center mb-12 space-y-8">
            {/* Badge */}
            <div className="inline-flex   glass-card items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan/30">
              <Bot className="w-5 h-5 text-primary animate-pulse-glow" />
              <span className="text-primary font-semibold">AI-Powered Business Automation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                Transform Your Business with
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-900 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl p-10   md:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
              Never miss a lead again. Our AI Employee handles calls, chats, books appointments, 
              and manages reviews 24/7 - while you focus on growing your business.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-10">
              <div className="bg-white/10  backdrop-blur-sm border glass-card border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-3">24/7 AI Assistant</h3>
                <p className="text-white/70">Never miss a customer inquiry, even after business hours</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border  glass-card border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-3">Boost Conversions</h3>
                <p className="text-white/70">Convert more leads with intelligent automated responses</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border glass-card  border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-3">Smart Automation</h3>
                <p className="text-white/70">Automate repetitive tasks and focus on high-value work</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col  sm:flex-row gap-4 justify-center items-center mt-8">
              <Button 
                onClick={scrollToBooking}
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-purple-700"
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/9136242706', '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2  glass-card m-10 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center ">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-white/70">AI Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-800  bg-clip-text text-transparent mb-2">300%</div>
                <div className="text-white/70">Lead Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-800  bg-clip-text text-transparent mb-2">90%</div>
                <div className="text-white/70">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-800  bg-clip-text text-transparent mb-2">₹4,999</div>
                <div className="text-white/70">Starting Price</div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Content */}
        <div className="bg-white/10 m-10 glass-card backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 lg:p-12">
          {step === 'calendar' ? (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Select Date & Time</h2>
                <div className="flex items-center justify-center gap-2 text-blue-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">30 Mins</span>
                </div>
                <p className="text-cyan-600 font-medium">
                  {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Calendar */}
                <div className="space-y-6">
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                      <div key={day} className="text-center py-3 text-white/70 font-medium text-sm">
                        {day}
                      </div>
                    ))}
                    {generateCalendarDays().map((day, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(day.date)}
                        className={`
                          py-3 text-center rounded-xl font-medium transition-all duration-300 hover:scale-105
                          ${day.isCurrentMonth 
                            ? 'text-white hover:bg-white/20' 
                            : 'text-white/40'
                          }
                          ${selectedDate.toDateString() === day.date.toDateString()
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                            : ''
                          }
                        `}
                      >
                        {day.day}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                    <div className="text-blue-400 font-semibold mb-2">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="text-white/70 text-sm">GMT+05:30 Asia/Calcutta (GMT+5:30)</div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          p-4 rounded-xl font-medium transition-all duration-300 hover:scale-105
                          ${selectedTime === time
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {selectedTime && (
                    <Button 
                      onClick={() => setStep('form')}
                      className="w-full py-4 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Continue to Form
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Demo Benefits */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-6">What You'll Get in This Demo:</h3>
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
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-xl font-bold text-cyan-400">100% Money Back Guarantee</h4>
                  </div>
                  <p className="text-white/90 mb-4">
                    Try AI Employee today—no commitments, just results. See how it can transform your business in just a few days!
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-lg">
                    <span className="text-cyan-400 font-semibold">Special Launch Offer: </span>
                    <span className="text-white">Get your first 7 days free – no risk, no commitment, no pressure to continue.</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <Button 
                  variant="outline" 
                  onClick={() => setStep('calendar')}
                  className="w-fit"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Calendar
                </Button>
                <div className="text-center flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Complete Your Booking</h2>
                  <p className="text-blue-400 mt-2">
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })} at {selectedTime}
                  </p>
                </div>
              </div>

              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                {/* Contact Information */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-400" />
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName">
                        First Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 " />
                        Phone <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="companyName" className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Company Name
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({...prev, companyName: e.target.value}))}
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <Label htmlFor="website" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Website (if any)
                      </Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData(prev => ({...prev, website: e.target.value}))}
                        placeholder="https://your-website.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Business Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label>Industry Type</Label>
                      <Select 
                        value={formData.industry} 
                        onChange={(value) => setFormData(prev => ({...prev, industry: value}))}
                        placeholder="Select your industry"
                      >
                        {industries.map(industry => (
                          <option key={industry} value={industry} className="bg-gray-800 text-white">
                            {industry}
                          </option>
                        ))}
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Business Size</Label>
                      <Select 
                        value={formData.businessSize} 
                        onChange={(value) => setFormData(prev => ({...prev, businessSize: value}))}
                        placeholder="Select business size"
                      >
                        {businessSizes.map(size => (
                          <option key={size} value={size} className="bg-gray-800 text-white">
                            {size}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">What would you like to achieve from this demo?</h3>
                  <p className="text-white/70">Select all that apply</p>
                  
                  <div className="space-y-4">
                    {goalOptions.map((goal, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
                        <Checkbox
                          id={`goal-${index}`}
                          checked={formData.goals.includes(goal)}
                          onChange={(checked) => handleGoalChange(goal, checked)}
                        />
                        <Label htmlFor={`goal-${index}`} className="text-white/90 leading-relaxed cursor-pointer text-sm md:text-base">
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Additional Information</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="currentProcess">
                        How are you currently managing appointments, reviews, and inquiries?
                      </Label>
                      <Textarea
                        id="currentProcess"
                        value={formData.currentProcess}
                        onChange={(e) => setFormData(prev => ({...prev, currentProcess: e.target.value}))}
                        placeholder="Tell us about your current process..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="painPoints">
                        What specific pain points would you like us to focus on during the demo?
                      </Label>
                      <Textarea
                        id="painPoints"
                        value={formData.painPoints}
                        onChange={(e) => setFormData(prev => ({...prev, painPoints: e.target.value}))}
                        placeholder="Describe your main challenges..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onChange={(checked) => setFormData(prev => ({...prev, agreement: checked}))}
                    />
                    <Label htmlFor="agreement" className="text-white/90 cursor-pointer">
                      I agree to be contacted for the Demo and further communication.
                    </Label>
                  </div>
                  
                  <div className="p-4 md:p-6 bg-blue-500/20 border border-cyan/80 glass-card rounded-xl">
                    <p className="text-cyan-300 font-semibold text-center text-lg">
                      💰 Consultation Fee: ₹4,999 - Expert guidance for your business transformation
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col md:flex-row gap-4">
                  <Button 
                    type="button"
                    onClick={() => setStep('calendar')}
                    variant="outline"
                    className="flex-1 py-4 text-lg"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Calendar
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 py-4 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-800 glass-card"
                    disabled={!formData.agreement || !formData.firstName || !formData.phone || !formData.email}
                  >
                    Book Demo
                    <MessageSquare className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;