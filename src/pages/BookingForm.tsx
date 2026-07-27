import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, User, Building, Target,
  MessageSquare, CheckCircle, ArrowLeft, ArrowRight, Sparkles,
  Zap, TrendingUp, Bot, Shield, ChevronRight, ChevronLeft,
  Video, Gift, CalendarDays, ClipboardList
} from 'lucide-react';
import SEOHead from "@/components/SEOHead";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [formData, setFormData] = useState({
    firstName: '', phone: '', email: '', companyName: '', website: '',
    industry: '', businessSize: '', goals: [] as string[],
    currentProcess: '', painPoints: '', agreement: false,
  });
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');

  // Professional glass button — no blur, crisp border + soft glow
  const glassBtn = {
    background: "linear-gradient(135deg, rgba(27,225,211,0.12) 0%, rgba(27,225,211,0.05) 100%)",
    border: "1px solid rgba(27,225,211,0.3)",
    boxShadow: "0 4px 20px rgba(27,225,211,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
  };

  // Glass card — crisp, no blur
  const glassCard = {
    background: "linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 60%, rgba(27,225,211,0.02) 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
  };

  const innerCard = {
    background: "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
    border: "1px solid rgba(255,255,255,0.07)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  const generateCalendarDays = () => {
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const days: { day: number; isCurrentMonth: boolean; date: Date }[] = [];

    // Previous month days
    const prevMonth = viewMonth - 1;
    const prevYear = prevMonth < 0 ? viewYear - 1 : viewYear;
    const actualPrevMonth = prevMonth < 0 ? 11 : prevMonth;
    const prevDaysInMonth = new Date(prevYear, actualPrevMonth + 1, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: prevDaysInMonth - i, isCurrentMonth: false, date: new Date(prevYear, actualPrevMonth, prevDaysInMonth - i) });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true, date: new Date(viewYear, viewMonth, day) });
    }

    // Next month days to fill grid
    const remaining = 42 - days.length;
    for (let day = 1; day <= remaining; day++) {
      const nextMonth = viewMonth + 1;
      const nextYear = nextMonth > 11 ? viewYear + 1 : viewYear;
      const actualNextMonth = nextMonth > 11 ? 0 : nextMonth;
      days.push({ day, isCurrentMonth: false, date: new Date(nextYear, actualNextMonth, day) });
    }

    return days;
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const monthName = new Date(viewYear, viewMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const timeSlots = ['06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'];
  const industries = ['Healthcare', 'E-commerce', 'Real Estate', 'Professional Services', 'Technology', 'Education', 'Manufacturing', 'Retail', 'Finance', 'Food & Beverage', 'Fitness & Wellness', 'Other'];
  const businessSizes = ['Solo Entrepreneur', '2-10 Employees', '11-50 Employees', '51-200 Employees', '200+ Employees'];
  const goalOptions = [
    'Get more online reviews for credibility & local ranking',
    'Automate appointment booking after business hours',
    'Reduce missed calls — never lose a customer',
    '24/7 AI assistant — your business works while you sleep',
    'Reduce admin workload for high-value tasks',
    'Increase leads & conversions for real revenue',
  ];

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, goals: checked ? [...prev.goals, goal] : prev.goals.filter(g => g !== goal) }));
  };

  const scrollToBooking = () => {
    setTimeout(() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const generateWhatsAppMessage = () => {
    const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const goalsText = formData.goals.length > 0 ? formData.goals.map(g => `  - ${g}`).join('\n') : '  Not specified';
    return encodeURIComponent(
      `========================================\n  CONSULTATION BOOKING — Yurekh Solutions\n========================================\n\nDATE & TIME:\n  ${dateStr} at ${selectedTime}\n\nGOOGLE MEET:\n  https://meet.google.com/new\n\n----------------------------------------\nCONTACT\n----------------------------------------\n  Name:    ${formData.firstName}\n  Phone:   ${formData.phone}\n  Email:   ${formData.email}\n  Company: ${formData.companyName || '—'}\n  Website: ${formData.website || '—'}\n\n----------------------------------------\nBUSINESS\n----------------------------------------\n  Industry: ${formData.industry || '—'}\n  Size:     ${formData.businessSize || '—'}\n\n----------------------------------------\nGOALS\n----------------------------------------\n${goalsText}\n\n----------------------------------------\nCURRENT PROCESS: ${formData.currentProcess || '—'}\nPAIN POINTS:     ${formData.painPoints || '—'}\n\nCONSULTATION FEE: $100\n========================================`
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
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const details = encodeURIComponent(`Consultation with Yurekh Solutions\nGoogle Meet: https://meet.google.com/new`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation+with+Yurekh+Solutions&dates=${fmt(startDate)}/${fmt(endDate)}&details=${details}&location=https://meet.google.com/new&sf=true&output=xml`;
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.phone || !formData.email || !selectedTime || !formData.agreement) {
      alert('Please fill in all required fields and accept the agreement.');
      return;
    }
    window.open(`https://wa.me/919136242706?text=${generateWhatsAppMessage()}`, '_blank');
    setTimeout(() => window.open(generateGoogleCalendarLink(), '_blank'), 1500);
  };

  const isDatePast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const inputCls = "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white/90 text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1BE1D3]/50 focus:ring-1 focus:ring-[#1BE1D3]/25 focus:bg-white/[0.06] transition-all duration-200";
  const labelCls = "block text-xs text-white/45 mb-1.5 font-medium";

  // Step tabs config
  const tabs = [
    { key: 'calendar' as const, label: 'Date & Time', icon: CalendarDays },
    { key: 'form' as const, label: 'Your Details', icon: ClipboardList },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
    >
      <SEOHead
        title="Book a Consultation | Schedule Your Free Strategy Session | Yurekh Solutions"
        description="Schedule a free consultation with Yurekh Solutions. Discuss your business vision, get expert advice on strategy, technology, branding, and go-to-market. Call +91 91362 42706."
        keywords="book consultation, schedule meeting, free consultation, business strategy session, Yurekh Solutions booking"
        canonical="https://yurekh.com/bookingform"
        breadcrumbs={[{ name: "Book Consultation", url: "https://yurekh.com/bookingform" }]}
      />

      {/* Ambient glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(27,225,211,0.05),transparent_55%)] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-[#1BE1D3]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#1BE1D3]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-20 sm:pb-24 relative z-10">

        {/* ─── Hero ─── */}
        {step === 'calendar' && (
          <div className="text-center mb-14 sm:mb-16">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
              style={{ background: "rgba(27,225,211,0.07)", border: "1px solid rgba(27,225,211,0.2)" }}>
              <Bot className="w-3.5 h-3.5 text-[#1BE1D3]" />
              <span className="text-[#1BE1D3] text-[11px] tracking-wider uppercase font-medium">AI-Powered Business Automation</span>
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-2xl sm:text-3xl lg:text-4xl text-white mb-5 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BE1D3] to-[#5CF5E8]">AI Automation
</span>
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-white/45 max-w-lg mx-auto text-sm leading-relaxed mb-9">
              Our AI Employee handles calls, chats, books appointments, and manages reviews 24/7 — while you focus on growing your business.
            </motion.p>

            {/* Feature pills */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
              {[
                { icon: Zap, text: "24/7 AI Assistant" },
                { icon: TrendingUp, text: "3x More Leads" },
                { icon: Sparkles, text: "Smart Automation" },
                { icon: Video, text: "Google Meet" },
              ].map((f, i) => (
                <div key={i}
                  className="flex items-center gap-2 rounded-full px-4 py-2.5 transition-all duration-300 hover:border-[#1BE1D3]/30 hover:-translate-y-0.5"
                  style={innerCard}>
                  <f.icon className="w-3.5 h-3.5 text-[#1BE1D3]" />
                  <span className="text-white/60 text-[11px] font-medium">{f.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.button variants={fadeUp} initial="hidden" animate="show" custom={4}
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2 text-[#1BE1D3] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_rgba(27,225,211,0.25)] hover:-translate-y-0.5 hover:brightness-125"
              style={glassBtn}>
              Book Free Demo <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}

        {/* ─── Step Tabs ─── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full" style={innerCard}>
            {tabs.map((tab, i) => {
              const isActive = step === tab.key;
              const isLocked = tab.key === 'form' && !selectedTime;
              return (
                <React.Fragment key={tab.key}>
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/20 mx-0.5" />}
                  <button
                    onClick={() => { if (!isLocked) { setStep(tab.key); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
                    disabled={isLocked}
                    className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                      ${isActive ? 'text-black' : isLocked ? 'text-white/25 cursor-not-allowed' : 'text-white/55 hover:text-[#1BE1D3]'}`}
                  >
                    {isActive && (
                      <motion.span layoutId="tab-pill"
                        className="absolute inset-0 rounded-full bg-[#1BE1D3]"
                        style={{ boxShadow: "0 4px 20px rgba(27,225,211,0.35)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                    )}
                    <tab.icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Booking Section ─── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}
          id="booking-section" className="rounded-3xl overflow-hidden" style={glassCard}>

          <AnimatePresence mode="wait">
            {step === 'calendar' ? (
              /* ─── STEP 1: Calendar + Time ─── */
              <motion.div key="calendar"
                initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-6 sm:p-9 lg:p-12">
                {/* Step header */}
                <div className="flex items-center justify-between mb-9">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={glassBtn}>
                      <CalendarDays className="w-5 h-5 text-[#1BE1D3]" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl text-white mb-0.5" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>
                        Select Date & Time
                      </h2>
                      <p className="text-white/35 text-xs sm:text-sm">30-minute consultation via Google Meet</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-[#1BE1D3] text-xs font-medium" style={{ background: "rgba(27,225,211,0.07)", border: "1px solid rgba(27,225,211,0.2)" }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>30 mins</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                  {/* Calendar — 7 cols */}
                  <div className="lg:col-span-7">
                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-5">
                      <button onClick={prevMonth} className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-[#1BE1D3] hover:border-[#1BE1D3]/40 hover:-translate-y-0.5 transition-all duration-200" style={innerCard}>
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <h3 className="text-white text-sm sm:text-base font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {monthName}
                      </h3>
                      <button onClick={nextMonth} className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-[#1BE1D3] hover:border-[#1BE1D3]/40 hover:-translate-y-0.5 transition-all duration-200" style={innerCard}>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Day headers */}
                    <div className="grid grid-cols-7 gap-1.5 mb-2">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                        <div key={d} className="text-center py-2 text-white/35 text-[11px] font-medium uppercase tracking-wider">{d}</div>
                      ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-1.5">
                      {generateCalendarDays().map((day, i) => {
                        const isSelected = selectedDate.toDateString() === day.date.toDateString();
                        const isToday = new Date().toDateString() === day.date.toDateString();
                        const isPast = isDatePast(day.date);
                        return (
                          <button
                            key={i}
                            onClick={() => !isPast && setSelectedDate(day.date)}
                            disabled={isPast}
                            className={`aspect-square flex items-center justify-center rounded-xl text-sm transition-all duration-200
                              ${!day.isCurrentMonth ? 'text-white/10' : isPast ? 'text-white/15 cursor-not-allowed' : 'text-white/70 hover:bg-[#1BE1D3]/[0.08] hover:text-[#1BE1D3] hover:scale-105 cursor-pointer'}
                              ${isSelected ? '!bg-[#1BE1D3] !text-black font-semibold shadow-[0_4px_20px_rgba(27,225,211,0.35)] scale-105' : ''}
                              ${isToday && !isSelected ? 'ring-1 ring-[#1BE1D3]/40 text-[#1BE1D3]' : ''}`}
                          >
                            {day.day}
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected date */}
                    <div className="mt-6 flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs text-white/50" style={innerCard}>
                      <Calendar className="w-4 h-4 text-[#1BE1D3]" />
                      <span>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} · IST (GMT+5:30)</span>
                    </div>
                  </div>

                  {/* Time slots — 5 cols */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="rounded-2xl p-5 sm:p-6" style={innerCard}>
                      <p className="text-xs text-white/45 mb-5 flex items-center gap-2 font-medium uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5 text-[#1BE1D3]" /> Available Time Slots
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map(t => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`py-3 rounded-xl text-sm transition-all duration-200
                              ${selectedTime === t
                                ? 'bg-[#1BE1D3] text-black font-semibold shadow-[0_4px_20px_rgba(27,225,211,0.3)] scale-[1.03]'
                                : 'border border-white/[0.09] bg-white/[0.03] text-white/55 hover:border-[#1BE1D3]/40 hover:text-[#1BE1D3] hover:bg-[#1BE1D3]/[0.06] hover:-translate-y-0.5'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      {selectedTime && (
                        <motion.button
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                          onClick={() => { setStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          className="w-full mt-6 flex items-center justify-center gap-2 text-[#1BE1D3] py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_rgba(27,225,211,0.25)] hover:-translate-y-0.5 hover:brightness-125"
                          style={glassBtn}
                        >
                          Continue <ChevronRight className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>

                    {/* What you get */}
                    <div className="rounded-2xl p-5 sm:p-6" style={innerCard}>
                      <h3 className="text-xs text-white/45 mb-5 flex items-center gap-2 font-medium uppercase tracking-wider">
                        <Gift className="w-3.5 h-3.5 text-[#1BE1D3]" /> What You Get
                      </h3>
                      <div className="space-y-3">
                        {[
                          'Live demo of AI Employee handling calls & chats',
                          'Automatic lead capture & appointment booking',
                          'Reputation & review management walkthrough',
                          'Personalized setup for your business',
                          'Custom pricing for your needs',
                          'Q&A for your unique challenges',
                        ].map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#1BE1D3] flex-shrink-0 mt-0.5" />
                            <span className="text-white/45 text-xs leading-relaxed">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Guarantee */}
                    <div className="rounded-2xl p-4 sm:p-5 flex items-center gap-3.5" style={{ background: "rgba(27,225,211,0.05)", border: "1px solid rgba(27,225,211,0.18)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(27,225,211,0.08)" }}>
                        <Shield className="w-5 h-5 text-[#1BE1D3]" />
                      </div>
                      <div>
                        <p className="text-[#1BE1D3] text-xs font-semibold">100% Money Back Guarantee</p>
                        <p className="text-white/35 text-[11px] mt-0.5">First 7 days free — no risk, no commitment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            ) : (
              /* ─── STEP 2: Form ─── */
              <motion.div key="form"
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-6 sm:p-9 lg:p-12">
                {/* Form header */}
                <div className="flex flex-wrap items-center gap-4 mb-9">
                  <button
                    onClick={() => setStep('calendar')}
                    className="flex items-center gap-1.5 text-white/50 hover:text-[#1BE1D3] hover:border-[#1BE1D3]/40 text-sm transition-all duration-200 px-4 py-2 rounded-full"
                    style={innerCard}
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <div className="h-px flex-1 bg-white/[0.07] hidden sm:block" />
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full text-[#1BE1D3] text-xs font-medium" style={{ background: "rgba(27,225,211,0.07)", border: "1px solid rgba(27,225,211,0.2)" }}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                    <span className="text-white/25">|</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedTime}</span>
                  </div>
                </div>

                <form className="space-y-7" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

                  {/* Contact */}
                  <div className="rounded-2xl p-5 sm:p-7" style={innerCard}>
                    <h3 className="text-sm text-white/70 mb-6 flex items-center gap-2.5 font-medium">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(27,225,211,0.08)", border: "1px solid rgba(27,225,211,0.18)" }}>
                        <User className="w-4 h-4 text-[#1BE1D3]" />
                      </span>
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Full Name <span className="text-[#1BE1D3]/60">*</span></label>
                        <input className={inputCls} value={formData.firstName} onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))} placeholder="John Doe" required />
                      </div>
                      <div>
                        <label className={labelCls}>Phone <span className="text-[#1BE1D3]/60">*</span></label>
                        <input className={inputCls} value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="+91 98765 43210" required />
                      </div>
                      <div>
                        <label className={labelCls}>Email <span className="text-[#1BE1D3]/60">*</span></label>
                        <input type="email" className={inputCls} value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="john@company.com" required />
                      </div>
                      <div>
                        <label className={labelCls}>Company</label>
                        <input className={inputCls} value={formData.companyName} onChange={e => setFormData(p => ({ ...p, companyName: e.target.value }))} placeholder="Your company name" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className={labelCls}>Website</label>
                        <input className={inputCls} value={formData.website} onChange={e => setFormData(p => ({ ...p, website: e.target.value }))} placeholder="https://yourcompany.com" />
                      </div>
                    </div>
                  </div>

                  {/* Business */}
                  <div className="rounded-2xl p-5 sm:p-7" style={innerCard}>
                    <h3 className="text-sm text-white/70 mb-6 flex items-center gap-2.5 font-medium">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(27,225,211,0.08)", border: "1px solid rgba(27,225,211,0.18)" }}>
                        <Building className="w-4 h-4 text-[#1BE1D3]" />
                      </span>
                      Business Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Industry</label>
                        <select value={formData.industry} onChange={e => setFormData(p => ({ ...p, industry: e.target.value }))} className={inputCls}>
                          <option value="" className="bg-[#0b0f0f]">Select industry</option>
                          {industries.map(i => <option key={i} value={i} className="bg-[#0b0f0f]">{i}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Business Size</label>
                        <select value={formData.businessSize} onChange={e => setFormData(p => ({ ...p, businessSize: e.target.value }))} className={inputCls}>
                          <option value="" className="bg-[#0b0f0f]">Select size</option>
                          {businessSizes.map(s => <option key={s} value={s} className="bg-[#0b0f0f]">{s}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Goals */}
                  <div className="rounded-2xl p-5 sm:p-7" style={innerCard}>
                    <h3 className="text-sm text-white/70 mb-6 flex items-center gap-2.5 font-medium">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(27,225,211,0.08)", border: "1px solid rgba(27,225,211,0.18)" }}>
                        <Target className="w-4 h-4 text-[#1BE1D3]" />
                      </span>
                      What would you like to achieve?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {goalOptions.map((goal, i) => (
                        <label key={i} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${formData.goals.includes(goal) ? 'border-[#1BE1D3]/35 bg-[#1BE1D3]/[0.06] shadow-[0_4px_16px_rgba(27,225,211,0.08)]' : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04] hover:-translate-y-0.5'}`}>
                          <input type="checkbox" checked={formData.goals.includes(goal)} onChange={e => handleGoalChange(goal, e.target.checked)}
                            className="w-4 h-4 rounded border-white/20 accent-[#1BE1D3] mt-0.5 flex-shrink-0" />
                          <span className="text-white/55 text-xs leading-relaxed">{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional */}
                  <div className="rounded-2xl p-5 sm:p-7" style={innerCard}>
                    <h3 className="text-sm text-white/70 mb-6 flex items-center gap-2.5 font-medium">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(27,225,211,0.08)", border: "1px solid rgba(27,225,211,0.18)" }}>
                        <MessageSquare className="w-4 h-4 text-[#1BE1D3]" />
                      </span>
                      Additional Context
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Current process for appointments & reviews</label>
                        <textarea className={`${inputCls} resize-none`} rows={3} value={formData.currentProcess} onChange={e => setFormData(p => ({ ...p, currentProcess: e.target.value }))} placeholder="How do you currently manage this?" />
                      </div>
                      <div>
                        <label className={labelCls}>Pain points to focus on</label>
                        <textarea className={`${inputCls} resize-none`} rows={3} value={formData.painPoints} onChange={e => setFormData(p => ({ ...p, painPoints: e.target.value }))} placeholder="What challenges should we address?" />
                      </div>
                    </div>
                  </div>

                  {/* Agreement + Submit */}
                  <div className="rounded-2xl p-5 sm:p-7" style={innerCard}>
                    <label className="flex items-start gap-3 cursor-pointer mb-6">
                      <input type="checkbox" checked={formData.agreement} onChange={e => setFormData(p => ({ ...p, agreement: e.target.checked }))}
                        className="w-4 h-4 rounded border-white/20 accent-[#1BE1D3] mt-0.5 flex-shrink-0" />
                      <span className="text-white/40 text-xs leading-relaxed">I agree to be contacted for the demo and further communication. <Link to="/privacy" className="text-[#1BE1D3]/60 hover:text-[#1BE1D3]">Privacy Policy</Link></span>
                    </label>

                    <button
                      type="submit"
                      disabled={!formData.agreement || !formData.firstName || !formData.phone || !formData.email}
                      className="w-full flex items-center justify-center gap-2 text-[#1BE1D3] py-4 rounded-full text-sm font-semibold disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_8px_30px_rgba(27,225,211,0.25)] hover:-translate-y-0.5 hover:brightness-125"
                      style={glassBtn}
                    >
                      <MessageSquare className="w-4 h-4" /> Book Demo — $100 Consultation
                    </button>
                    <p className="text-center text-white/25 text-[11px] mt-4">WhatsApp message will be sent · Google Calendar event created</p>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust bar */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/30 text-[11px]">
          {[
            { icon: Bot, text: '24/7 AI Availability' },
            { icon: TrendingUp, text: '300% Lead Increase' },
            { icon: Clock, text: '90% Time Saved' },
            { icon: Shield, text: '100% Money Back' },
          ].map((s, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <s.icon className="w-3.5 h-3.5 text-[#1BE1D3]/50" /> {s.text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;
