import { useState, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Download, CheckCircle } from "lucide-react";
import { captureLead } from "@/lib/leadCapture";

const LeadMagnetPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Each page opens its own popup after one second, once per tab session.
  useEffect(() => {
    if (sessionStorage.getItem("leadMagnetShown")) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("leadMagnetShown", "true");
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Deliver the lead to our inbox so the guide can be sent
      captureLead("Market Entry Guide request — yurekh.com", {
        Email: email,
        Page: "/launch-in-india",
        Requested: "Global Market Entry Guide (30-page PDF)",
      });
      setIsSubmitted(true);
      // Popup stays open on success — it never auto-dismisses; only the close button removes it
    }
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      {/* Radix portals to body and locks background wheel/touch scrolling and focus. */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 duration-200" />
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
          <DialogPrimitive.Content
            onPointerDownOutside={(event) => event.preventDefault()}
            onInteractOutside={(event) => event.preventDefault()}
            onEscapeKeyDown={(event) => event.preventDefault()}
            className="relative flex flex-col w-full max-w-lg min-h-0 rounded-3xl border border-[#1BE1D3]/20 overflow-hidden outline-none pointer-events-auto data-[state=open]:animate-in data-[state=open]:fade-in-0 duration-200"
            style={{
              maxHeight: "calc(100dvh - 3rem)",
              background: "linear-gradient(135deg, #0a1a1a 0%, #0b1f1f 50%, #000000 100%)",
            }}
          >
            {/* Close remains visible while the card's contents scroll. */}
            <DialogPrimitive.Close asChild>
              <button
                type="button"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 flex items-center justify-center transition-colors z-20 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BE1D3]"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </DialogPrimitive.Close>

            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1BE1D3]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1BE1D3]/3 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 min-h-0 overflow-y-auto overscroll-contain p-8 md:p-10">
              {!isSubmitted ? (
                <>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mb-6">
                    <Download className="w-8 h-8 text-[#1BE1D3]" />
                  </div>

                  {/* Content */}
                  <DialogPrimitive.Title asChild>
                    <h3
                      className="text-white text-2xl md:text-3xl font-normal mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
                    >
                      Global Market Entry Guide
                    </h3>
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description asChild>
                    <p
                      className="text-white/60 text-sm md:text-base mb-6"
                      style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                    >
                      Get our comprehensive 30-page PDF covering company formation, legal compliance, tax optimization, and go-to-market strategy for India, UAE, USA, UK, Singapore & Australia.
                    </p>
                  </DialogPrimitive.Description>

                  {/* What's included */}
                  <div className="space-y-2 mb-6">
                    {[
                      "Step-by-step entity formation checklist",
                      "Tax optimization strategies for 6 countries",
                      "Market entry timeline & budget planner",
                      "Regulatory compliance roadmap",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1BE1D3] flex-shrink-0" />
                        <span className="text-white/70 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      aria-label="Email address"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#1BE1D3]/50 transition-colors"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-xl text-black font-normal transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,225,211,0.3)]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        backgroundColor: "#1BE1D3",
                        fontWeight: 400,
                      }}
                    >
                      Get Guide
                    </button>
                  </form>

                  <p className="text-white/30 text-xs text-center mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    No spam. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#1BE1D3]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#1BE1D3]" />
                  </div>
                  <DialogPrimitive.Title asChild>
                    <h3
                      className="text-white text-xl font-normal mb-2"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                    >
                      Check Your Email!
                    </h3>
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description asChild>
                    <p
                      className="text-white/60 text-sm"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Your guide will reach your inbox within 24 hours.
                    </p>
                  </DialogPrimitive.Description>
                </div>
              )}
            </div>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default LeadMagnetPopup;
