import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, User, Building, Target,
  MessageSquare, CheckCircle, ArrowLeft, ArrowRight, Sparkles,
  Zap, TrendingUp, Bot, Shield, ChevronRight, ChevronLeft,
  Video, Check, Pencil, Globe
} from 'lucide-react';
import SEOHead from "@/components/SEOHead";
import { captureLead } from "@/lib/leadCapture";

const poppins = { fontFamily: "Poppins, sans-serif" };

const BookingForm = () => {
  const today = (() => { const t = new Date(); t.setHours(0, 0, 0, 0); return t; })();

  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '', phone: '', email: '', companyName: '', website: '',
    industry: '', businessSize: '', goals: [] as string[],
    currentProcess: '', painPoints: '', agreement: false,
  });
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [booked, setBooked] = useState(false);

  // 7-day week strip starting from today (past dates never rendered)
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + weekOffset * 7 + i);
    return d;
  });
  const weekLabel = `${weekDays[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${weekDays[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;

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

  const generateWhatsAppMessage = () => {
    const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const goalsText = formData.goals.length > 0 ? formData.goals.map(g => `  - ${g}`).join('\n') : '  Not specified';
    return encodeURIComponent(
      `========================================\n  CONSULTATION BOOKING — Yurekh Solutions\n========================================\n\nDATE & TIME:\n  ${dateStr} at ${selectedTime}\n\nGOOGLE MEET:\n  https://meet.google.com/new\n\n----------------------------------------\nCONTACT\n----------------------------------------\n  Name:    ${formData.firstName}\n  Phone:   ${formData.phone}\n  Email:   ${formData.email}\n  Company: ${formData.companyName || '—'}\n  Website: ${formData.website || '—'}\n\n----------------------------------------\nBUSINESS\n----------------------------------------\n  Industry: ${formData.industry || '—'}\n  Size:     ${formData.businessSize || '—'}\n\n----------------------------------------\nGOALS\n----------------------------------------\n${goalsText}\n\n----------------------------------------\nCURRENT PROCESS: ${formData.currentProcess || '—'}\nPAIN POINTS:     ${formData.painPoints || '—'}\n\nCONSULTATION: COMPLIMENTARY\n========================================`
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
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Consultation with Yurekh Solutions')}&dates=${fmt(startDate)}/${fmt(endDate)}&details=${details}&location=${encodeURIComponent('https://meet.google.com/new')}&sf=true`;
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.phone || !formData.email || !selectedTime || !formData.agreement) {
      alert('Please fill in all required fields and accept the agreement.');
      return;
    }
    // Email delivery — lands in yurekhsolutions@gmail.com inbox
    captureLead('New consultation booking — yurekh.com', {
      Date: selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      Time: `${selectedTime} IST`,
      Name: formData.firstName,
      Phone: formData.phone,
      Email: formData.email,
      Company: formData.companyName || '—',
      Website: formData.website || '—',
      Industry: formData.industry || '—',
      'Business size': formData.businessSize || '—',
      Goals: formData.goals.join('; ') || '—',
      'Current process': formData.currentProcess || '—',
      'Pain points': formData.painPoints || '—',
    });
    // Open Google Calendar so the visitor can add the session to their calendar
    window.open(generateGoogleCalendarLink(), '_blank');
    setBooked(true);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      document.getElementById('booking-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const detailsValid = formData.firstName && formData.phone && formData.email;

  const goTo = (s: 1 | 2 | 3) => {
    setStep(s);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      document.getElementById('booking-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const inputCls = "w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/90 text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#1BE1D3]/50 focus:ring-1 focus:ring-[#1BE1D3]/25 focus:bg-white/[0.06] transition-all duration-200";
  const labelCls = "block text-[12px] text-white/60 mb-2 font-medium";

  const primaryBtn = "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none";
  const primaryStyle = { ...poppins, fontSize: "15px", backgroundColor: "#1BE1D3" };
  const ghostBtn = "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full transition-all duration-300 hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)]";
  const ghostStyle: React.CSSProperties = {
    ...poppins, fontWeight: 600, fontSize: "15px",
    background: "rgba(27,225,211,0.08)", color: "#1BE1D3",
    border: "1px solid rgba(27,225,211,0.25)",
  };

  const stepMeta = [
    { n: 1, title: 'Choose your slot', sub: 'Pick a day and evening time (IST)' },
    { n: 2, title: 'Your details', sub: 'Tell us about you and your business' },
    { n: 3, title: 'Review & confirm', sub: 'Confirm your booking details' },
  ];

  const benefits = [
    { icon: Bot, title: 'Live AI Employee demo', desc: 'Watch it answer calls, chats & book appointments in real time.' },
    { icon: TrendingUp, title: 'Revenue growth plan', desc: 'A roadmap to more leads, reviews and conversions.' },
    { icon: Zap, title: 'Automation blueprint', desc: 'Which tasks to automate first for maximum ROI.' },
    { icon: Shield, title: 'Zero-risk start', desc: 'First 7 days trial — 100% money back guarantee.' },
  ];

  const stats = [
    { value: '300%', label: 'More Leads' },
    { value: '24/7', label: 'AI Availability' },
    { value: '90%', label: 'Time Saved' },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
    >
      <SEOHead
        title="Book a Consultation | Schedule Your Strategy Session | Yurekh Solutions"
        description="Schedule a consultation with Yurekh Solutions. Discuss your business vision, get expert advice on strategy, technology, branding, and go-to-market. Call +91 91362 42706."
        keywords="book consultation, schedule meeting, consultation, business strategy session, Yurekh Solutions booking"
        canonical="https://yurekh.com/bookingform"
        breadcrumbs={[{ name: "Book Consultation", url: "https://yurekh.com/bookingform" }]}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(27,225,211,0.07),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-[#1BE1D3]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">

          {/* ═══════════ LEFT — Pitch panel ═══════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 text-center lg:text-left"
          >
            <div className=" mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1BE1D3]/30 bg-[#1BE1D3]/5 mb-6">
              <Sparkles className="w-4 h-4 text-[#1BE1D3]" />
              <span className="text-[#1BE1D3] text-sm font-medium">AI-Powered Business Automation</span>
            </div>
            <h1 className="text-white text-[30px] sm:text-[36px] lg:text-[40px] font-semibold mb-5 leading-[1.2]">
              Transform Your Business with <span className="text-[#1BE1D3]">AI Automation</span>
            </h1>
            <p className="text-white/70 text-[15px] leading-[1.7] mb-8 max-w-md mx-auto lg:mx-0" style={poppins}>
              Our AI Employee handles calls, chats, books appointments, and manages reviews 24/7 — while you focus on growing your business.
            </p>

            {/* Meeting chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-10" style={poppins}>
              {[
                { icon: Video, text: 'Google Meet' },
                { icon: Clock, text: '30 minutes' },
                { icon: Sparkles, text: 'client Inquiries' },
                { icon: Globe, text: 'English · Hindi' },
              ].map((c, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-[12px]">
                  <c.icon className="w-3.5 h-3.5 text-[#1BE1D3]" /> {c.text}
                </span>
              ))}
            </div>

            {/* Benefits — desktop only (mobile version below the card) */}
            <div className="hidden lg:block space-y-5 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/25 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-[18px] h-[18px] text-[#1BE1D3]" />
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-semibold">{b.title}</p>
                    <p className="text-white/55 text-[13px] leading-[1.6] mt-0.5" style={poppins}>{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats — desktop only */}
            <div className="hidden lg:flex items-center gap-8 border-t border-white/10 pt-7">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-[#1BE1D3] text-[24px] font-semibold leading-none">{s.value}</p>
                  <p className="text-white/45 text-[12px] mt-1.5" style={poppins}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════ RIGHT — Booking card ═══════════ */}
          <motion.div
            id="booking-card"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-[28px] p-[1px] bg-gradient-to-b from-[#1BE1D3]/40 via-white/10 to-transparent scroll-mt-28"
          >
            <div className="rounded-[27px] bg-[#0a1414]/95 overflow-hidden">

              {/* Card header */}
              <div className="px-5 sm:px-8 pt-6 sm:pt-7 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.div key={booked ? 'done' : step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                        <h2 className="text-white text-[18px] sm:text-[20px] font-semibold leading-tight">
                          {booked ? 'Booking confirmed' : stepMeta[step - 1].title}
                        </h2>
                        <p className="text-white/50 text-[12px] mt-1" style={poppins}>{booked ? 'Add the session to your Google Calendar below' : stepMeta[step - 1].sub}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <span className="flex-shrink-0 px-3.5 py-1.5 rounded-full border border-[#1BE1D3]/25 bg-[#1BE1D3]/[0.06] text-[#1BE1D3] text-[12px] font-semibold" style={poppins}>
                    {booked ? '✓ Done' : `${step} / 3`}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#1BE1D3]/60 to-[#1BE1D3] shadow-[0_0_12px_rgba(27,225,211,0.5)]"
                    animate={{ width: booked ? '100%' : `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-8">
                <AnimatePresence mode="wait">

                  {/* ─── SUCCESS · Booking sent ─── */}
                  {booked && (
                    <motion.div key="done"
                      initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35 }}
                      className="text-center py-4 sm:py-6"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-[#1BE1D3]/10 border border-[#1BE1D3]/30 flex items-center justify-center mb-5">
                        <CheckCircle className="w-8 h-8 text-[#1BE1D3]" />
                      </div>
                      <h3 className="text-white text-[20px] sm:text-[22px] font-semibold mb-2">Your booking is on its way!</h3>
                      <p className="text-white/55 text-[13px] sm:text-[14px] leading-[1.7] max-w-md mx-auto mb-6" style={poppins}>
                        Your booking details have been emailed to our team — we'll confirm within 24 hours. Add the session to your calendar so you never miss it.
                      </p>

                      <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 rounded-2xl border border-[#1BE1D3]/25 bg-[#1BE1D3]/[0.05] px-5 py-4 mb-7">
                        <span className="flex items-center gap-2 text-white text-[14px] font-semibold">
                          <Calendar className="w-4 h-4 text-[#1BE1D3]" />
                          {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2 text-white text-[14px] font-semibold">
                          <Clock className="w-4 h-4 text-[#1BE1D3]" /> {selectedTime} IST
                        </span>
                        <span className="flex items-center gap-2 text-white/60 text-[13px]" style={poppins}>
                          <Video className="w-4 h-4 text-[#1BE1D3]" /> Google Meet · 30 mins
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
                        <a
                          href={generateGoogleCalendarLink()}
                          target="_blank" rel="noopener noreferrer"
                          className={`${primaryBtn} w-full sm:w-auto`} style={primaryStyle}
                        >
                          <Calendar className="h-4 w-4 flex-shrink-0" /> Add to Google Calendar
                        </a>
                        <a
                          href={`mailto:yurekhsolutions@gmail.com?subject=${encodeURIComponent('Consultation Booking — ' + formData.firstName)}&body=${encodeURIComponent(generateWhatsAppMessage().replace(/%20/g, ' '))}`}
                          className={`${ghostBtn} w-full sm:w-auto`} style={ghostStyle}
                        >
                          <Mail className="h-4 w-4 flex-shrink-0" /> Send via Email
                        </a>
                      </div>

                      <button
                        onClick={() => { setBooked(false); goTo(1); }}
                        className="mt-6 text-white/40 text-[13px] hover:text-[#1BE1D3] transition-colors duration-200 underline underline-offset-4"
                        style={poppins}
                      >
                        Book another slot
                      </button>
                    </motion.div>
                  )}

                  {/* ─── STEP 1 · When ─── */}
                  {!booked && step === 1 && (
                    <motion.div key="s1"
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Week navigation */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase">
                          {weekLabel}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                            disabled={weekOffset === 0}
                            aria-label="Previous week"
                            className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-[#1BE1D3] hover:border-[#1BE1D3]/40 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setWeekOffset(weekOffset + 1)}
                            aria-label="Next week"
                            className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-[#1BE1D3] hover:border-[#1BE1D3]/40 transition-all duration-200"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Week strip */}
                      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-8">
                        {weekDays.map((d, i) => {
                          const isSelected = selectedDate.toDateString() === d.toDateString();
                          const isToday = d.toDateString() === today.toDateString();
                          return (
                            <button
                              key={i}
                              onClick={() => setSelectedDate(d)}
                              className={`flex flex-col items-center gap-1.5 sm:gap-2 py-3 sm:py-4 rounded-2xl border transition-all duration-200
                                ${isSelected
                                  ? 'bg-[#1BE1D3] border-[#1BE1D3] shadow-[0_8px_26px_rgba(27,225,211,0.35)]'
                                  : 'border-white/10 bg-white/[0.02] hover:border-[#1BE1D3]/40 hover:bg-[#1BE1D3]/[0.05]'}`}
                            >
                              <span className={`text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] ${isSelected ? 'text-black/60' : 'text-white/40'}`} style={poppins}>
                                {d.toLocaleDateString('en-US', { weekday: 'short' })}
                              </span>
                              <span className={`text-[16px] sm:text-[20px] font-semibold leading-none ${isSelected ? 'text-black' : isToday ? 'text-[#1BE1D3]' : 'text-white/85'}`}>
                                {d.getDate()}
                              </span>
                              <span className={`w-1 h-1 rounded-full ${isToday ? (isSelected ? 'bg-black/50' : 'bg-[#1BE1D3]') : 'bg-transparent'}`} />
                            </button>
                          );
                        })}
                      </div>

                      {/* Time slots */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase">
                          EVENING SLOTS
                        </span>
                        <span className="flex items-center gap-1.5 text-white/40 text-[11px]" style={poppins}>
                          <Clock className="w-3.5 h-3.5 text-[#1BE1D3]/60" /> IST (GMT+5:30)
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
                        {timeSlots.map(t => {
                          const isSelected = selectedTime === t;
                          return (
                            <button
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`flex items-center justify-center gap-1.5 py-3.5 rounded-xl text-[13px] transition-all duration-200 ${isSelected
                                ? 'bg-[#1BE1D3] text-black font-semibold shadow-[0_6px_22px_rgba(27,225,211,0.3)]'
                                : 'border border-white/10 bg-white/[0.02] text-white/60 hover:border-[#1BE1D3]/40 hover:text-[#1BE1D3] hover:bg-[#1BE1D3]/[0.05]'}`}
                              style={poppins}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                              {t}
                            </button>
                          );
                        })}
                      </div>

                      {/* Footer summary + CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-white/[0.06] pt-6">
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-[14px] font-semibold truncate">
                            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                          </p>
                          <p className={`text-[12px] mt-0.5 ${selectedTime ? 'text-[#1BE1D3]' : 'text-white/40'}`} style={poppins}>
                            {selectedTime ? `${selectedTime} IST · 30 mins · Google Meet` : 'Select a time slot to continue'}
                          </p>
                        </div>
                        <button
                          onClick={() => goTo(2)}
                          disabled={!selectedTime}
                          className={`${primaryBtn} w-full sm:w-auto sm:min-w-[180px] flex-shrink-0`}
                          style={primaryStyle}
                        >
                          Continue <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* ─── STEP 2 · Details ─── */}
                  {!booked && step === 2 && (
                    <motion.div key="s2"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); if (detailsValid) goTo(3); }}>
                        {/* Contact */}
                        <div>
                          <h3 className="text-white text-[15px] font-semibold mb-4 flex items-center gap-2.5">
                            <User className="w-4 h-4 text-[#1BE1D3]" /> Contact Information
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={labelCls} style={poppins}>Full Name <span className="text-[#1BE1D3]">*</span></label>
                              <input className={inputCls} style={poppins} value={formData.firstName} onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))} placeholder="John Doe" required />
                            </div>
                            <div>
                              <label className={labelCls} style={poppins}>Phone <span className="text-[#1BE1D3]">*</span></label>
                              <input className={inputCls} style={poppins} value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="+91 98765 43210" required />
                            </div>
                            <div>
                              <label className={labelCls} style={poppins}>Email <span className="text-[#1BE1D3]">*</span></label>
                              <input type="email" className={inputCls} style={poppins} value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="john@company.com" required />
                            </div>
                            <div>
                              <label className={labelCls} style={poppins}>Company</label>
                              <input className={inputCls} style={poppins} value={formData.companyName} onChange={e => setFormData(p => ({ ...p, companyName: e.target.value }))} placeholder="Your company name" />
                            </div>
                            <div className="sm:col-span-2">
                              <label className={labelCls} style={poppins}>Website</label>
                              <input className={inputCls} style={poppins} value={formData.website} onChange={e => setFormData(p => ({ ...p, website: e.target.value }))} placeholder="https://yourcompany.com" />
                            </div>
                          </div>
                        </div>

                        {/* Business */}
                        <div>
                          <h3 className="text-white text-[15px] font-semibold mb-4 flex items-center gap-2.5">
                            <Building className="w-4 h-4 text-[#1BE1D3]" /> Business Details
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={labelCls} style={poppins}>Industry</label>
                              <select value={formData.industry} onChange={e => setFormData(p => ({ ...p, industry: e.target.value }))} className={inputCls} style={poppins}>
                                <option value="" className="bg-[#0a1414]">Select industry</option>
                                {industries.map(i => <option key={i} value={i} className="bg-[#0a1414]">{i}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className={labelCls} style={poppins}>Business Size</label>
                              <select value={formData.businessSize} onChange={e => setFormData(p => ({ ...p, businessSize: e.target.value }))} className={inputCls} style={poppins}>
                                <option value="" className="bg-[#0a1414]">Select size</option>
                                {businessSizes.map(s => <option key={s} value={s} className="bg-[#0a1414]">{s}</option>)}
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Goals */}
                        <div>
                          <h3 className="text-white text-[15px] font-semibold mb-4 flex items-center gap-2.5">
                            <Target className="w-4 h-4 text-[#1BE1D3]" /> What would you like to achieve?
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {goalOptions.map((goal, i) => {
                              const checked = formData.goals.includes(goal);
                              return (
                                <label key={i} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${checked ? 'border-[#1BE1D3]/40 bg-[#1BE1D3]/[0.06]' : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'}`}>
                                  <span className={`w-4 h-4 mt-0.5 rounded-[5px] border flex-shrink-0 flex items-center justify-center transition-all duration-200 ${checked ? 'bg-[#1BE1D3] border-[#1BE1D3]' : 'border-white/25'}`}>
                                    {checked && <Check className="w-3 h-3 text-black" />}
                                  </span>
                                  <input type="checkbox" checked={checked} onChange={e => handleGoalChange(goal, e.target.checked)} className="sr-only" />
                                  <span className="text-white/70 text-[13px] leading-[1.7]" style={poppins}>{goal}</span>
                                </label>
                              );
                            })}
                          </div>
                        </div>

                        {/* Context */}
                        <div>
                          <h3 className="text-white text-[15px] font-semibold mb-4 flex items-center gap-2.5">
                            <MessageSquare className="w-4 h-4 text-[#1BE1D3]" /> Additional Context <span className="text-white/40 text-[12px] font-normal" style={poppins}>(optional)</span>
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={labelCls} style={poppins}>Current process for appointments & reviews</label>
                              <textarea className={`${inputCls} resize-none`} style={poppins} rows={3} value={formData.currentProcess} onChange={e => setFormData(p => ({ ...p, currentProcess: e.target.value }))} placeholder="How do you currently manage this?" />
                            </div>
                            <div>
                              <label className={labelCls} style={poppins}>Pain points to focus on</label>
                              <textarea className={`${inputCls} resize-none`} style={poppins} rows={3} value={formData.painPoints} onChange={e => setFormData(p => ({ ...p, painPoints: e.target.value }))} placeholder="What challenges should we address?" />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center border-t border-white/[0.06] pt-6">
                          <button type="button" onClick={() => goTo(1)} className={`${ghostBtn} w-full sm:w-auto sm:min-w-[140px]`} style={ghostStyle}>
                            <ArrowLeft className="h-4 w-4 flex-shrink-0" /> Back
                          </button>
                          <button type="submit" disabled={!detailsValid} className={`${primaryBtn} w-full sm:flex-1 sm:max-w-[320px]`} style={primaryStyle}>
                            Review Booking <ArrowRight className="h-4 w-4 flex-shrink-0" />
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {/* ─── STEP 3 · Confirm ─── */}
                  {!booked && step === 3 && (
                    <motion.div key="s3"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4 mb-8">
                        {/* Meeting recap */}
                        <div className="rounded-2xl border border-[#1BE1D3]/25 bg-[#1BE1D3]/[0.05] p-5">
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <span className="text-[#1BE1D3] font-semibold text-[11px] tracking-[0.3em] uppercase">YOUR SESSION</span>
                            <button onClick={() => goTo(1)} className="flex items-center gap-1.5 text-[#1BE1D3] text-[12px] font-semibold hover:underline" style={poppins}>
                              <Pencil className="w-3 h-3" /> Edit
                            </button>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                            <span className="flex items-center gap-2 text-white text-[14px] font-semibold">
                              <Calendar className="w-4 h-4 text-[#1BE1D3]" />
                              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-2 text-white text-[14px] font-semibold">
                              <Clock className="w-4 h-4 text-[#1BE1D3]" /> {selectedTime} IST
                            </span>
                            <span className="flex items-center gap-2 text-white/60 text-[13px]" style={poppins}>
                              <Video className="w-4 h-4 text-[#1BE1D3]" /> Google Meet · 30 mins
                            </span>
                          </div>
                        </div>

                        {/* Contact recap */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <span className="text-[#1BE1D3] font-semibold text-[11px] tracking-[0.3em] uppercase">YOUR DETAILS</span>
                            <button onClick={() => goTo(2)} className="flex items-center gap-1.5 text-[#1BE1D3] text-[12px] font-semibold hover:underline" style={poppins}>
                              <Pencil className="w-3 h-3" /> Edit
                            </button>
                          </div>
                          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[13px]" style={poppins}>
                            <div className="flex gap-2"><dt className="text-white/40 min-w-[72px]">Name</dt><dd className="text-white/80 break-all">{formData.firstName}</dd></div>
                            <div className="flex gap-2"><dt className="text-white/40 min-w-[72px]">Phone</dt><dd className="text-white/80 break-all">{formData.phone}</dd></div>
                            <div className="flex gap-2"><dt className="text-white/40 min-w-[72px]">Email</dt><dd className="text-white/80 break-all">{formData.email}</dd></div>
                            <div className="flex gap-2"><dt className="text-white/40 min-w-[72px]">Company</dt><dd className="text-white/80 break-all">{formData.companyName || '—'}</dd></div>
                            <div className="flex gap-2"><dt className="text-white/40 min-w-[72px]">Industry</dt><dd className="text-white/80">{formData.industry || '—'}</dd></div>
                            <div className="flex gap-2"><dt className="text-white/40 min-w-[72px]">Size</dt><dd className="text-white/80">{formData.businessSize || '—'}</dd></div>
                          </dl>
                          {formData.goals.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                              {formData.goals.map((g, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#1BE1D3] flex-shrink-0 mt-0.5" />
                                  <span className="text-white/70 text-[13px] leading-[1.7]" style={poppins}>{g}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Agreement */}
                      <label className="flex items-start gap-3 cursor-pointer mb-6">
                        <span className={`w-4 h-4 mt-0.5 rounded-[5px] border flex-shrink-0 flex items-center justify-center transition-all duration-200 ${formData.agreement ? 'bg-[#1BE1D3] border-[#1BE1D3]' : 'border-white/25'}`}>
                          {formData.agreement && <Check className="w-3 h-3 text-black" />}
                        </span>
                        <input type="checkbox" checked={formData.agreement} onChange={e => setFormData(p => ({ ...p, agreement: e.target.checked }))} className="sr-only" />
                        <span className="text-white/60 text-[13px] leading-[1.7]" style={poppins}>
                          I agree to be contacted for the consultation and further communication.
                        </span>
                      </label>

                      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center border-t border-white/[0.06] pt-6">
                        <button onClick={() => goTo(2)} className={`${ghostBtn} w-full sm:w-auto sm:min-w-[140px]`} style={ghostStyle}>
                          <ArrowLeft className="h-4 w-4 flex-shrink-0" /> Back
                        </button>
                        <button onClick={handleSubmit} disabled={!formData.agreement} className={`${primaryBtn} w-full sm:flex-1 sm:max-w-[360px]`} style={primaryStyle}>
                          <Calendar className="h-4 w-4 flex-shrink-0" /> Confirm Booking
                        </button>
                      </div>
                      <p className="text-white/40 text-[12px] mt-4" style={poppins}>
                        Complimentary consultation · Email confirmation · Add to Google Calendar in one tap
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════ Mobile benefits (below card) ═══════════ */}
        <div className="lg:hidden mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/25 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-[18px] h-[18px] text-[#1BE1D3]" />
                </div>
                <div>
                  <p className="text-white text-[14px] font-semibold">{b.title}</p>
                  <p className="text-white/55 text-[13px] leading-[1.6] mt-0.5" style={poppins}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-10 border-t border-white/10 mt-8 pt-7">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-[#1BE1D3] text-[22px] font-semibold leading-none">{s.value}</p>
                <p className="text-white/45 text-[12px] mt-1.5" style={poppins}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="mt-10 sm:mt-14 max-w-2xl mx-auto rounded-3xl border border-[#1BE1D3]/25 bg-[#1BE1D3]/[0.05] p-5 flex items-center justify-center gap-4"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/25 flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-[#1BE1D3]" />
          </div>
          <div>
            <p className="text-[#1BE1D3] text-[13px] font-semibold">100% Money Back Guarantee</p>
            <p className="text-white/55 text-[12px] mt-0.5 leading-[1.6]" style={poppins}>First 7 days trial — no risk, no commitment.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;
