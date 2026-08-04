import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import {
  Sparkles,
  Users,
  FileText,
  Briefcase,
  ShieldCheck,
  Boxes,
  Workflow,
  Bot,
  BarChart3,
  LifeBuoy,
  CheckCircle,
  ArrowRight,
  Rocket,
  Zap,
  Crown,
} from "lucide-react";
import yurekhLogo from "../assets/yurekhlog.png";

const modules = [
  { icon: Users, title: "CRM & Sales Pipeline", desc: "Contacts, deals, and follow-ups in one view. Never lose a lead again." },
  { icon: FileText, title: "Invoicing & Billing", desc: "GST-ready invoices, payment tracking, and automatic overdue reminders." },
  { icon: Briefcase, title: "HR & Payroll", desc: "Employees, attendance, leave management, and one-click payroll runs." },
  { icon: ShieldCheck, title: "Compliance Calendar", desc: "Statutory deadlines, filings, and document vault — never miss a due date." },
  { icon: Boxes, title: "Inventory & Orders", desc: "Stock levels, warehouses, and purchase orders synced in real time." },
  { icon: Workflow, title: "Automations", desc: "Trigger-based workflows: payment alerts, follow-up reminders, and more." },
  { icon: Bot, title: "AI Studio", desc: "AI chat, content generation, and media tools built into your workspace." },
  { icon: BarChart3, title: "Reports & Insights", desc: "Revenue, pipeline, and team performance dashboards at a glance." },
  { icon: LifeBuoy, title: "Helpdesk", desc: "Customer tickets and support workflows managed alongside your CRM." },
];

const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "₹1,999",
    tagline: "For solo founders getting organised",
    features: [
      "CRM: Contacts, Deals & Follow-ups",
      "Invoicing & Payment Tracking",
      "Customer Management",
      "Basic Reports",
      "Email Support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    icon: Zap,
    price: "₹4,999",
    tagline: "For teams running daily operations",
    features: [
      "Everything in Starter",
      "HR: Employees, Attendance & Leaves",
      "Payroll Runs",
      "Compliance Calendar & Documents",
      "Workflow Automations",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    icon: Crown,
    price: "₹9,999",
    tagline: "For growing companies that want it all",
    features: [
      "Everything in Growth",
      "AI Studio: Chat, Content & Media",
      "Inventory, Warehouses & Purchase Orders",
      "Helpdesk & Ticketing",
      "Advanced Reports & Insights",
      "Dedicated Account Manager",
    ],
    highlighted: false,
  },
];

const steps = [
  { step: "01", title: "Sign In with Google", desc: "One-click secure sign-in. Your workspace is ready in under a minute." },
  { step: "02", title: "Set Up Your Company", desc: "Add your company details, team members, and products — guided onboarding." },
  { step: "03", title: "Run Your Business", desc: "Send your first invoice, track your first deal, and automate the rest." },
];

const AinosSuite = () => {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AINOS Business Suite",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: plans.map((p) => ({
      "@type": "Offer",
      name: `AINOS ${p.name}`,
      price: p.price.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
    })),
    publisher: { "@type": "Organization", name: "Yurekh Solutions", url: "https://yurekh.com" },
  });

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      <SEOHead
        title="AINOS Business Suite — CRM, Invoicing, HR & AI in One Platform"
        description="AINOS is the all-in-one business operating system by Yurekh Solutions: CRM, invoicing, HR & payroll, compliance calendar, inventory, automations, and AI tools. Plans from ₹1,999/month."
        keywords="AINOS business suite, CRM software India, invoicing software, HR payroll software, compliance calendar, business management software, all in one business software"
        canonical="https://yurekh.com/ainos-suite"
        schema={schema}
        breadcrumbs={[{ name: "AINOS Business Suite", url: "https://yurekh.com/ainos-suite" }]}
      />

      {/* ===== Hero ===== */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(27,225,211,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(27,225,211,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(27,225,211,0.12)" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[120px]" style={{ background: "rgba(27,225,211,0.08)" }} />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1BE1D3]/30 bg-[#1BE1D3]/5 mb-6">
            <img src={yurekhLogo} alt="" className="w-4 h-4 flex-shrink-0 object-contain" />
            <span className="text-[#1BE1D3] text-xs md:text-sm tracking-wider uppercase" style={{ fontFamily: "Poppins, sans-serif" }}>
              One Platform. Every Department.
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            AINOS Business <span className="text-[#1BE1D3]">Suite</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg font-light max-w-2xl mx-auto mb-10" style={{ fontFamily: "Poppins, sans-serif" }}>
            The operating system for your entire business — CRM, invoicing, HR &amp; payroll, compliance,
            inventory, automations, and AI tools. Everything your company needs from day one, in one login.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ainos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1BE1D3] text-black font-medium text-sm md:text-base hover:bg-[#1BE1D3]/90 transition-all"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Open AINOS <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/bookingform"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-light text-sm md:text-base hover:border-[#1BE1D3]/60 hover:text-[#1BE1D3] transition-all"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Book a Demo
            </Link>
          </div>

          <p className="text-white/40 text-xs mt-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            Included with every Yurekh business launch package · No credit card required to explore
          </p>
        </div>
      </section>

      {/* ===== Modules ===== */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1BE1D3] text-xs md:text-sm tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              Nine Modules
            </p>
            <h2 className="text-2xl md:text-4xl font-light text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Everything Your Business <span className="text-[#1BE1D3]">Runs On</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((m) => (
              <div
                key={m.title}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#1BE1D3]/40 hover:bg-[#1BE1D3]/[0.03] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mb-4">
                  <m.icon className="w-6 h-6 text-[#1BE1D3]" />
                </div>
                <h3 className="text-white text-lg font-light mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {m.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[140px]" style={{ background: "rgba(27,225,211,0.07)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#1BE1D3] text-xs md:text-sm tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              Simple Pricing
            </p>
            <h2 className="text-2xl md:text-4xl font-light text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Plans That Grow <span className="text-[#1BE1D3]">With You</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light max-w-xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
              Launching your company with Yurekh? The Growth plan is included in every launch package for your first 3 months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-[#1BE1D3]/60 bg-[#1BE1D3]/[0.05] shadow-[0_0_40px_rgba(27,225,211,0.15)]"
                    : "border-white/10 bg-white/[0.02] hover:border-[#1BE1D3]/30"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1BE1D3] text-black text-xs font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <plan.icon className="w-6 h-6 text-[#1BE1D3]" />
                  <h3 className="text-white text-xl font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>{plan.name}</h3>
                </div>
                <div className="mb-1">
                  <span className="text-3xl md:text-4xl text-white font-light" style={{ fontFamily: "Montserrat, sans-serif" }}>{plan.price}</span>
                  <span className="text-white/50 text-sm font-light" style={{ fontFamily: "Poppins, sans-serif" }}> /month</span>
                </div>
                <p className="text-white/50 text-xs mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>{plan.tagline}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1BE1D3] mt-0.5 shrink-0" />
                      <span className="text-white/70 text-sm font-light" style={{ fontFamily: "Poppins, sans-serif" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/bookingform"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm transition-all ${
                    plan.highlighted
                      ? "bg-[#1BE1D3] text-black font-medium hover:bg-[#1BE1D3]/90"
                      : "border border-white/20 text-white font-light hover:border-[#1BE1D3]/60 hover:text-[#1BE1D3]"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 text-xs mt-8" style={{ fontFamily: "Poppins, sans-serif" }}>
            All plans billed monthly in INR. Annual billing with 2 months savings — contact us.
          </p>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1BE1D3] text-xs md:text-sm tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              Getting Started
            </p>
            <h2 className="text-2xl md:text-4xl font-light text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Live in <span className="text-[#1BE1D3]">10 Minutes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-[#1BE1D3]/30 text-5xl font-light mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.step}</div>
                <h3 className="text-white text-lg font-light mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.title}</h3>
                <p className="text-white/60 text-sm font-light" style={{ fontFamily: "Poppins, sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[140px]" style={{ background: "rgba(27,225,211,0.1)" }} />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-light text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Stop Juggling Five Tools. <span className="text-[#1BE1D3]">Run Everything in AINOS.</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
            Built by Yurekh Solutions — the team that launches and scales businesses across India, UAE, US, UK, and Singapore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ainos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1BE1D3] text-black font-medium text-sm md:text-base hover:bg-[#1BE1D3]/90 transition-all"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Open AINOS <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-light text-sm md:text-base hover:border-[#1BE1D3]/60 hover:text-[#1BE1D3] transition-all"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AinosSuite;
