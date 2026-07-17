import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Phone, Mail, Globe, Zap, Bot, User, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import logo from '../assets/logo.jpeg';

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
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open chat after 5 seconds
  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

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
            text: "Hi! 👋 I'm Yurekh AI, your assistant at Yurekh Solutions. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
            options: [
              'Learn about services',
              'Get a quote',
              'Book consultation',
              'Talk to human'
            ]
          }
        ]);
      }, 500);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): { text: string; options?: string[] } => {
    const message = userMessage.toLowerCase();

    if (message.includes('service') || message.includes('what do you offer')) {
      return {
        text: "We offer comprehensive AI-powered solutions:\n\n🚀 **AI Development** - Custom AI/ML solutions\n💻 **Software Development** - Web & Mobile apps\n📱 **Digital Marketing** - SEO, Social Media, PPC\n☁️ **Cloud Solutions** - AWS, Azure, GCP\n🎨 **UI/UX Design** - User-centered design\n📊 **Data Analytics** - Business intelligence\n\nWhich service interests you?",
        options: ['AI Development', 'Software Development', 'Digital Marketing', 'Cloud Solutions', 'Book consultation']
      };
    }

    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return {
        text: "Our pricing is tailored to your specific needs. We offer:\n\n💰 **Consultation**: Starting at $100\n📦 **Project-based**: Custom quotes\n🔄 **Retainer**: Monthly packages\n\nFor an accurate quote, I'd recommend booking a free consultation. Would you like to proceed?",
        options: ['Book consultation', 'Learn about services', 'Contact sales']
      };
    }

    if (message.includes('book') || message.includes('consultation') || message.includes('appointment')) {
      return {
        text: "Great choice! You can book a consultation in two ways:\n\n📅 **Online Booking** - Select your preferred time\n📞 **Direct Call** - +91 9136242706\n\nOur consultations are 30 minutes and include:\n✓ Needs assessment\n✓ Solution recommendations\n✓ Custom pricing\n✓ Q&A session\n\nReady to book?",
        options: ['Go to booking page', 'Call now', 'WhatsApp chat']
      };
    }

    if (message.includes('contact') || message.includes('reach') || message.includes('talk')) {
      return {
        text: "You can reach us through multiple channels:\n\n📧 **Email**: yurekhsolutions@gmail.com\n📱 **Phone**: +91 9136242706\n💬 **WhatsApp**: Chat with us directly\n🌐 **Website**: yurekh.com\n\nWe're available 24/7 via WhatsApp! What's your preferred contact method?",
        options: ['WhatsApp chat', 'Call now', 'Send email']
      };
    }

    if (message.includes('ai') || message.includes('artificial intelligence')) {
      return {
        text: "Our AI solutions include:\n\n🤖 **AI Chatbots** - 24/7 customer support\n📊 **Predictive Analytics** - Data-driven insights\n🎯 **Marketing Automation** - Smart campaigns\n🔍 **Content Intelligence** - AI-powered content\n📈 **Growth Optimization** - AI-driven scaling\n\nWe've helped businesses increase efficiency by 300%! Want to learn more?",
        options: ['AI Chatbots', 'Predictive Analytics', 'Book AI consultation']
      };
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! Great to connect with you! 👋\n\nI'm here to help you explore how Yurekh Solutions can transform your business with AI-powered technology.\n\nWhat would you like to know about?",
        options: ['Learn about services', 'Get a quote', 'Book consultation', 'Contact us']
      };
    }

    if (message.includes('thank')) {
      return {
        text: "You're welcome! 😊 Is there anything else I can help you with? We're here to make your digital transformation journey smooth and successful!",
        options: ['Learn more', 'Book consultation', 'Contact sales']
      };
    }

    return {
      text: "Thanks for your message! I can help you with:\n\n🚀 Our services and solutions\n💰 Pricing and quotes\n📅 Booking consultations\n📞 Contact information\n\nWhat would you like to explore?",
      options: ['Learn about services', 'Get a quote', 'Book consultation', 'Contact us']
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
    } else if (option === 'Call now') {
      window.location.href = 'tel:+919136242706';
    } else if (option === 'WhatsApp chat') {
      window.open('https://wa.me/919136242706', '_blank');
    } else if (option === 'Send email') {
      window.location.href = 'mailto:yurekhsolutions@gmail.com';
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
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-[#1BE1D3]/30 flex flex-col" style={{ background: 'linear-gradient(135deg, #0b1f1f 0%, #0a2929 50%, #071919 100%)' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1BE1D3]/20 to-[#1BE1D3]/10 border-b border-[#1BE1D3]/30 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1BE1D3]/50 shadow-[0_0_20px_rgba(27,225,211,0.3)]">
                  <img src={logo} alt="Yurekh AI" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0b1f1f]" />
              </div>
              <div>
                <h3 className="text-white text-sm" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>Yurekh AI Assistant</h3>
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-[#1BE1D3]/30">
                      <img src={logo} alt="Yurekh AI" className="w-full h-full object-cover" />
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
                    <img src={logo} alt="Yurekh AI" className="w-full h-full object-cover" />
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
          <div className="border-t border-[#1BE1D3]/20 p-3 bg-black/20">
            <div className="flex gap-2 overflow-x-auto pb-2">
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
          <div className="border-t border-[#1BE1D3]/20 p-4 bg-black/30">
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
              Powered by Yurekh AI • Available 24/7
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
