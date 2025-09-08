// import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import ServicesInquiryForm from "./forms/ServicesInquiryForm";
// import ConsultationBookingForm from "./forms/ConsultationBookingForm";
// import CareerForm from "./forms/CareerForm";
// import { useState } from "react";

// const Contact = () => {
//   const [activeForm, setActiveForm] = useState("services");

 

//   const formOptions = [
//     { id: "services", label: "Services Inquiry", icon: Send },
//     { id: "consultation", label: "Book Consultation", icon: Clock },
//     { id: "career", label: "Join Our Team", icon: MessageCircle }
//   ];

//   return (
//     <section id="contact" className="py-20   bg-gradient-space lg:py-32 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         {/* Header */}
     

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Contact Information */}
          

//           {/* Forms Section */}
//           <div className="lg:col-span-2">
//             {/* Form Selection Tabs */}
//             <div className="flex flex-wrap gap-4 mb-8">
//               {formOptions.map((option) => {
//                 const IconComponent = option.icon;
//                 return (
//                   <Button
//                     key={option.id}
//                     variant={activeForm === option.id ? "default" : "outline"}
//                     className={`glass-card px-4 py-2 ${
//                       activeForm === option.id 
//                         ? "bg-primary text-primary-foreground" 
//                         : "border-primary/30 hover:border-primary hover:bg-primary/10"
//                     }`}
//                     onClick={() => setActiveForm(option.id)}
//                   >
//                     <IconComponent className="h-4 w-4 mr-2" />
//                     {option.label}
//                   </Button>
//                 );
//               })}
//             </div>

//             {/* Active Form */}
//             <div className="animate-fade-in-up">
//               {activeForm === "services" && <ServicesInquiryForm />}
//               {activeForm === "consultation" && <ConsultationBookingForm />}
//               {activeForm === "career" && <CareerForm />}
//             </div>
//           </div>
//         </div>

       
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

// Helper function to format date as YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Helper function to format time as HH:MM
const formatTime = (date) => {
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const DemoBooking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  // Services data
  const services = [
    { id: 'web-dev', name: 'Web Development', description: 'Custom websites & web applications' },
    { id: 'mobile-app', name: 'Mobile App Development', description: 'iOS & Android applications' },
    { id: 'digital-marketing', name: 'Digital Marketing', description: 'SEO, SEM, Social Media Marketing' },
    { id: 'cloud-solutions', name: 'Cloud Solutions', description: 'AWS, Azure, Google Cloud services' },
    { id: 'ai-ml', name: 'AI/ML Solutions', description: 'Machine learning & artificial intelligence' },
    { id: 'cybersecurity', name: 'Cybersecurity', description: 'Security audits & protection services' },
    { id: 'ui-ux', name: 'UI/UX Design', description: 'User interface & experience design' },
    { id: 'consulting', name: 'IT Consulting', description: 'Technology strategy & consulting' }
  ];

  // Base time slots from 9:00 AM to 5:00 PM, every hour
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Effect to generate available dates and times on component mount
  useEffect(() => {
    generateAvailableDates();
  }, []);

  // Effect to update available times whenever the preferred date changes
  useEffect(() => {
    if (formData.preferredDate) {
      updateAvailableTimes(formData.preferredDate);
    }
  }, [formData.preferredDate]);

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    // Generate dates for the next 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: formatDate(date),
        label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }
    setAvailableDates(dates);
    if (dates.length > 0) {
      // Set the default preferred date to the first available date
      setFormData(prev => ({ ...prev, preferredDate: dates[0].value }));
    }
  };

  const updateAvailableTimes = (selectedDate) => {
    const todayFormatted = formatDate(new Date());
    const isToday = selectedDate === todayFormatted;
    const now = new Date();
    const currentHour = now.getHours();

    const newTimes = timeSlots.filter(time => {
      if (isToday) {
        // Convert AM/PM time to 24-hour format for comparison
        const [timePart, modifier] = time.split(' ');
        let [hours, minutes] = timePart.split(':');
        let hour = parseInt(hours, 10);
        if (modifier === 'PM' && hour !== 12) {
          hour += 12;
        } else if (modifier === 'AM' && hour === 12) {
          hour = 0;
        }

        // Only show times that are at least one hour in the future
        return hour > currentHour || (hour === currentHour && parseInt(minutes, 10) > now.getMinutes());
      }
      return true;
    });

    setAvailableTimes(newTimes);
    // Reset preferred time if the previously selected time is no longer available
    if (!newTimes.includes(formData.preferredTime)) {
      setFormData(prev => ({ ...prev, preferredTime: newTimes[0] || '' }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    const service = services.find(s => s.id === serviceId);
    setFormData(prev => ({ ...prev, service: service?.name || '' }));
  };

  const handleBookDemo = () => {
    if (!formData.name || !formData.email || !selectedService || !formData.preferredDate || !formData.preferredTime) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Convert preferred time to 24-hour format
    const convertTo24Hour = (time12h) => {
      const [time, modifier] = time12h.split(' ');
      let [hours, minutes] = time.split(':');
      if (hours === '12') {
        hours = '00';
      }
      if (modifier === 'PM') {
        hours = String(parseInt(hours, 10) + 12);
      }
      return `${hours}:${minutes || '00'}`;
    };

    // Create Google Calendar event URL
    const startDate = new Date(`${formData.preferredDate}T${convertTo24Hour(formData.preferredTime)}`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour duration

    const eventDetails = {
      title: `Demo: ${formData.service} - ${formData.name}`,
      startTime: startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
      endTime: endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
      details: `Demo session with ${formData.name} from ${formData.company}\n\nService: ${formData.service}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`,
      location: 'Google Meet (Link will be shared)'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startTime}/${eventDetails.endTime}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}`;

    // Open Google Calendar in new tab
    window.open(googleCalendarUrl, '_blank');

    toast.success('Demo scheduled! Please check your email for Google Meet link.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      preferredDate: availableDates[0]?.value || '',
      preferredTime: availableTimes[0] || '',
      message: ''
    });
    setSelectedService('');
  };

  return (
    <section id="demo" className="relative py-20 bg-gradient-space">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars animate-twinkle"></div>
        <div className="stars2 animate-twinkle"></div>
        <div className="stars3 animate-twinkle"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/40 mb-8">
            <span className="text-lg font-medium text-gradient-primary">Book Free Demo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-glow">
            See Our Solutions in Action
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Schedule a personalized demo to discover how our technology solutions 
            can transform your business operations and drive growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
              Choose Your Service
            </h3>
            
            <div className="grid gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedService === service.id
                      ? 'border-primary bg-primary/10 shadow-glow'
                      : 'border-border hover:border-primary/50 bg-card/50'
                  }`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedService === service.id
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}>
                        {selectedService === service.id && (
                          <div className="w-2 h-2 bg-background rounded-full m-auto mt-0.5"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{service.name}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-glass p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
              Book Your Demo
            </h3>

            <div className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="demo-name" className="text-sm font-medium mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="demo-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="demo-email" className="text-sm font-medium mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="demo-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="demo-company" className="text-sm font-medium mb-2 block">
                    Company Name
                  </Label>
                  <Input
                    id="demo-company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                    className="form-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="demo-phone" className="text-sm font-medium mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="demo-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Schedule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="demo-date" className="text-sm font-medium mb-2 block">
                    Preferred Date *
                  </Label>
                  <select
                    id="demo-date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full p-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:border-primary/50"
                  >
                    {availableDates.map(date => (
                      <option key={date.value} value={date.value}>{date.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="demo-time" className="text-sm font-medium mb-2 block">
                    Preferred Time *
                  </Label>
                  <select
                    id="demo-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="form-input w-full p-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:border-primary/50"
                  >
                    {availableTimes.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="demo-message" className="text-sm font-medium mb-2 block">
                  Additional Requirements
                </Label>
                <Textarea
                  id="demo-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any specific requirements or questions for the demo?"
                  rows={3}
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleBookDemo}
                disabled={!formData.name || !formData.email || !selectedService || !formData.preferredDate || !formData.preferredTime}
                className="btn-hero w-full"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Free Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Live Demo Session',
              description: 'Interactive 60-minute session with our experts'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Customized Solutions',
              description: 'Tailored demonstration based on your business needs'
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Expert Consultation',
              description: 'Get answers to all your technical questions'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DemoBooking;
