import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Phone, Mail, Globe, Zap, Bot, User, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import aiLogo from '../assets/yurekhlog.png';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: string[];
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Chat opens only when the user clicks the bubble — no auto-open popup

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "Hi! 👋 I'm your Yurekh Concierge. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
            options: [
              'Explore services',
              'AINOS Business Suite',
              'Book consultation',
              'Get in touch'
            ]
          }
        ]);
      }, 500);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): { text: string; options?: string[] } => {
    const message = userMessage.toLowerCase();

    if (message.includes('ainos') || message.includes('business suite') || message.includes('erp') || message.includes('crm')) {
      return {
        text: "**AINOS Business Suite** is our all-in-one platform to run your entire business from a single dashboard:\n\n📇 **CRM** - Contacts, Deals, Customers & Follow-ups\n👥 **HR & Payroll** - Employees, Attendance, Leave & Payroll Runs\n🧾 **Invoicing & Finance** - Invoices, Quotes & Purchase Orders\n📦 **Inventory** - Products, Stock Items & Warehouses\n🎫 **Helpdesk** - Support Tickets & Service Portals\n📣 **Marketing** - Email Campaigns & Blog\n⚖️ **Compliance** - Compliance Task Tracking\n⚙️ **Automation** - Smart Workflow Automation\n🤖 **AI Assistant** - Built-in AI to speed up daily work\n\nIt's a modern, secure suite built to scale with your business. Want to open it?",
        options: ['Open AINOS', 'Book consultation', 'Explore services']
      };
    }

    if (message.includes('service') || message.includes('what do you offer') || message.includes('explore')) {
      return {
        text: "Yurekh Solutions is your end-to-end business partner. Here's what we offer:\n\n🏢 **Business Consulting** - Company formation, legal compliance & market-entry strategy\n📈 **Growth Marketing** - SEO, performance marketing & go-to-market systems\n💻 **Web & Mobile Development** - High-performance websites, e-commerce & mobile apps\n🎨 **Digital Branding** - Brand identity, positioning & creative strategy\n📊 **Data Intelligence** - Analytics, reporting & performance tracking\n **AI-Powered Software** - Custom platforms, intelligent assistants & automation\n🌍 **Market Entry** - Launch & operate in India, UAE & other high-growth markets\n📦 **AINOS Business Suite** - All-in-one CRM, HR, Invoicing & Inventory platform\n\nWhich area interests you?",
        options: ['Business Consulting', 'Web & Mobile Development', 'Digital Branding', 'Growth Marketing', 'Book consultation']
      };
    }

    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return {
        text: "Our pricing is tailored to your specific needs. We offer:\n\n💰 **Consultation** - Strategy session with our team\n **Project-based** - Custom quotes per scope\n🔄 **Retainer** - Monthly engagement packages\n\nFor an accurate quote, I'd recommend booking a consultation. Would you like to proceed?",
        options: ['Book consultation', 'Explore services', 'Contact us']
      };
    }

    if (message.includes('book') || message.includes('consultation') || message.includes('appointment')) {
      return {
        text: "Great choice! You can book a consultation in two ways:\n\n📅 **Online Booking** - Select your preferred time\n📞 **Direct Call** - +91 9136242706\n\nOur consultations are 30 minutes and include:\n✓ Business needs assessment\n✓ Solution recommendations\n✓ Custom pricing discussion\n✓ Q&A with our team\n\nReady to book?",
        options: ['Go to booking page', 'Call now', 'WhatsApp chat']
      };
    }

    if (message.includes('contact') || message.includes('reach') || message.includes('talk') || message.includes('get in touch')) {
      return {
        text: "You can reach us through multiple channels:\n\n📧 **Email**: connect@yurekh.com\n📱 **Phone**: +91 9136242706\n💬 **WhatsApp**: Chat with us directly\n🌐 **Website**: yurekh.com\n\nWhat's your preferred way to connect?",
        options: ['WhatsApp chat', 'Call now', 'Send email']
      };
    }

    if (message.includes('consulting') || message.includes('business consult') || message.includes('company formation') || message.includes('market entry')) {
      return {
        text: "Our **Business Consulting** services cover:\n\n🏢 **Company Formation** - Register your business in India, UAE & beyond\n⚖️ **Legal Compliance** - Regulatory guidance & documentation\n **Market Entry Strategy** - Launch in new markets with confidence\n **Business Planning** - Roadmaps for startups & enterprises\n🤝 **Partnership Advisory** - Strategic alliances & joint ventures\n\nWe've helped businesses across 12+ markets. Want to discuss your goals?",
        options: ['Book consultation', 'Explore services', 'Contact us']
      };
    }

    if (message.includes('branding') || message.includes('brand') || message.includes('design') || message.includes('logo')) {
      return {
        text: "Our **Digital Branding** services include:\n\n **Brand Identity** - Logo, visual systems & brand guidelines\n📣 **Brand Positioning** - Stand out in crowded markets\n🖼️ **Creative Strategy** - Campaigns that resonate\n **Web Design** - Beautiful, conversion-focused websites\n📱 **Social Media Branding** - Consistent presence across platforms\n\nWant to see our work or discuss your brand?",
        options: ['Book consultation', 'Explore services', 'Contact us']
      };
    }

    if (message.includes('web') || message.includes('mobile') || message.includes('app') || message.includes('development') || message.includes('software')) {
      return {
        text: "Our **Web & Mobile Development** services:\n\n💻 **Custom Websites** - High-performance, scalable sites\n **E-commerce** - Online stores that convert\n **Mobile Apps** - iOS & Android development\n⚙️ **Custom Software** - Tailored business platforms\n🔧 **Maintenance & Support** - Ongoing updates & optimization\n\nBuilt for scale, security, and performance. Want to discuss your project?",
        options: ['Book consultation', 'Explore services', 'Contact us']
      };
    }

    if (message.includes('marketing') || message.includes('seo') || message.includes('social media') || message.includes('growth')) {
      return {
        text: "Our **Growth Marketing** services:\n\n📈 **SEO** - Rank higher, drive organic traffic\n📣 **Social Media Marketing** - Engage & grow your audience\n **Performance Marketing** - PPC, paid ads & ROI-focused campaigns\n📊 **Go-to-Market Strategy** - Launch plans that work\n✍️ **Content Marketing** - Blogs, copy & thought leadership\n\nWe turn attention into revenue. Want to grow your business?",
        options: ['Book consultation', 'Explore services', 'Contact us']
      };
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! Great to connect with you! 👋\n\nI'm here to help you explore how Yurekh Solutions can support your business — from strategy and technology to branding and global expansion.\n\nWhat would you like to know about?",
        options: ['Explore services', 'Book consultation', 'Contact us']
      };
    }

    if (message.includes('thank')) {
      return {
        text: "You're welcome! 😊 Is there anything else I can help you with? We're here to support your business growth journey!",
        options: ['Explore services', 'Book consultation', 'Contact us']
      };
    }

    return {
      text: "Thanks for your message! I can help you with:\n\n Business consulting & strategy\n💻 Web & mobile development\n🎨 Digital branding & creative\n📈 Growth marketing & SEO\n📦 AINOS Business Suite\n Booking consultations\n📞 Contact information\n\nWhat would you like to explore?",
      options: ['Explore services', 'Book consultation', 'Contact us']
    };
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        options: response.options
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleOptionClick = (option: string) => {
    if (option === 'Go to booking page') {
      window.location.href = '/bookingform';
    } else if (option === 'Open AINOS' || option === 'AINOS Business Suite') {
      window.open('https://ainos-ywu0.onrender.com', '_blank');
    } else if (option === 'Call now') {
      window.location.href = 'tel:+919136242706';
    } else if (option === 'WhatsApp chat') {
      window.open('https://wa.me/919136242706', '_blank');
    } else if (option === 'Send email') {
      window.location.href = 'mailto:connect@yurekh.com';
    } else {
      handleSendMessage(option);
    }
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line.split('**').map((part, j) => 
          j % 2 === 1 ? <strong key={j} className="text-[#1BE1D3]">{part}</strong> : part
        )}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#1BE1D3] to-[#0fb5a8] shadow-[0_0_30px_rgba(27,225,211,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(27,225,211,0.7)] group animate-bounce"
          aria-label="Open chat"
          style={{ animationDuration: '2s' }}
        >
          <MessageSquare className="w-8 h-8 text-black group-hover:scale-110 transition-transform" strokeWidth={2.5} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-[#0b1f1f]" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:bottom-6 sm:right-6 sm:left-auto sm:inset-auto z-50 w-full sm:w-[90vw] sm:max-w-md h-full sm:h-[600px] sm:max-h-[600px] rounded-none sm:rounded-3xl overflow-hidden shadow-2xl border-0 sm:border border-[#1BE1D3]/30 flex flex-col" style={{ background: 'linear-gradient(135deg, #0b1f1f 0%, #0a2929 50%, #071919 100%)' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1BE1D3]/20 to-[#1BE1D3]/10 border-b border-[#1BE1D3]/30 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1BE1D3]/50 shadow-[0_0_20px_rgba(27,225,211,0.3)]">
                  <img src={aiLogo} alt="Yurekh AI" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0b1f1f]" />
              </div>
              <div>
                <h3 className="text-white text-sm" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Yurekh Concierge</h3>
                <p className="text-[#1BE1D3] text-xs flex items-center gap-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                  <Sparkles className="w-3 h-3" /> Online • Ready to help
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0 scrollbar-hide">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-[#1BE1D3]/30">
                      <img src={aiLogo} alt="Yurekh AI" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-[#1BE1D3] text-black'
                          : 'bg-white/10 text-white border border-[#1BE1D3]/20'
                      }`}
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '1.6' }}
                    >
                      {message.sender === 'bot' ? formatMessage(message.text) : message.text}
                    </div>
                    {message.options && (
                      <div className="mt-2 space-y-2">
                        {message.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left px-4 py-2 rounded-xl bg-white/5 border border-[#1BE1D3]/20 text-[#1BE1D3] hover:bg-[#1BE1D3]/10 hover:border-[#1BE1D3]/40 transition-all duration-300 text-sm flex items-center justify-between group"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                          >
                            <span>{option}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    )}
                    <div className={`text-xs text-white/40 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`} style={{ fontFamily: "Poppins, sans-serif" }}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-[#1BE1D3]/30">
                    <img src={aiLogo} alt="Yurekh AI" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-white/10 border border-[#1BE1D3]/20 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#1BE1D3] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-[#1BE1D3] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-[#1BE1D3] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="border-t border-[#1BE1D3]/20 p-2 sm:p-3 bg-black/20 flex-shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <a href="https://ainos-ywu0.onrender.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1BE1D3]/10 border border-[#1BE1D3]/30 text-[#1BE1D3] hover:bg-[#1BE1D3]/20 transition-all text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                <Bot className="w-3 h-3" /> AINOS Suite
              </a>
              <a href="tel:+919136242706" className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-[#1BE1D3]/20 text-white/70 hover:bg-[#1BE1D3]/10 hover:text-[#1BE1D3] transition-all text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                <Phone className="w-3 h-3" /> Call
              </a>
              <a href="https://wa.me/919136242706" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-[#1BE1D3]/20 text-white/70 hover:bg-[#1BE1D3]/10 hover:text-[#1BE1D3] transition-all text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                <MessageCircle className="w-3 h-3" /> WhatsApp
              </a>
              <a href="mailto:yurekhsolutions@gmail.com" className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-[#1BE1D3]/20 text-white/70 hover:bg-[#1BE1D3]/10 hover:text-[#1BE1D3] transition-all text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                <Mail className="w-3 h-3" /> Email
              </a>
              <a href="/bookingform" className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-[#1BE1D3]/20 text-white/70 hover:bg-[#1BE1D3]/10 hover:text-[#1BE1D3] transition-all text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                <Zap className="w-3 h-3" /> Book Demo
              </a>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-[#1BE1D3]/20 p-3 sm:p-4 bg-black/30 flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-[#1BE1D3]/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#1BE1D3]/50 focus:border-[#1BE1D3]/50 transition-all"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="px-4 py-3 rounded-xl bg-[#1BE1D3] text-black hover:bg-[#1BE1D3]/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-center text-white/30 text-xs mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              Powered by Yurekh Solutions
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
