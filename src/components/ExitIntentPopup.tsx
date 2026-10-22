import { useState, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Calendar, Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink, trackLead } from "../lib/analytics";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exitIntentShown")) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("exitIntentShown", "true");
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      {/* Portal avoids the page transition's transformed containing block.
          The modal overlay owns background scroll locking and focus trapping. */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 duration-200" />
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
          <DialogPrimitive.Content
            onPointerDownOutside={(event) => event.preventDefault()}
            onInteractOutside={(event) => event.preventDefault()}
            onEscapeKeyDown={(event) => event.preventDefault()}
            className="relative flex flex-col w-full max-w-md min-h-0 rounded-3xl border border-[#1BE1D3]/20 overflow-hidden outline-none pointer-events-auto data-[state=open]:animate-in data-[state=open]:fade-in-0 duration-200"
            style={{
              maxHeight: "calc(100dvh - 3rem)",
              background: "linear-gradient(135deg, #0a1a1a 0%, #0b1f1f 50%, #000000 100%)",
            }}
          >
            {/* Close stays outside the scrollable content and is the only dismiss control. */}
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#1BE1D3]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 min-h-0 overflow-y-auto overscroll-contain p-8 md:p-10 text-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-[#1BE1D3]" />
              </div>

              {/* Content */}
              <DialogPrimitive.Title asChild>
                <h3
                  className="text-white text-2xl md:text-3xl font-normal mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
                >
                  Wait — Let's Talk First.
                </h3>
              </DialogPrimitive.Title>
              <DialogPrimitive.Description asChild>
                <p
                  className="text-white/60 text-sm md:text-base mb-6"
                  style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                >
                  Book a 30-minute strategy call. No commitment, no pressure — just actionable insights for your business.
                </p>
              </DialogPrimitive.Description>

              {/* Options */}
              <div className="space-y-3">
                <a
                  href="/bookingform"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-black font-normal transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,225,211,0.3)]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    backgroundColor: "#1BE1D3",
                    fontWeight: 400,
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Call
                </a>

                <a
                  href="tel:+919136242706"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-normal transition-all duration-300 hover:bg-white/10"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontWeight: 400,
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call +91 91362 42706
                </a>

                <a
                  href={getWhatsAppLink('Exit Intent Popup')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLead('Exit Intent WhatsApp Click')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-normal transition-all duration-300 hover:bg-white/10"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontWeight: 400,
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>

              <p className="text-white/30 text-xs mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Consultation. No obligations.
              </p>
            </div>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ExitIntentPopup;
