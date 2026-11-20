import { lazy, Suspense, useEffect, useRef, type ComponentType, type ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Floating widgets: never part of the first paint, so keep them out of the
// entry chunk and fetch them after the page is interactive.
const AIChat = lazy(() => import("@/components/AIChat"));
const MobileLeadBar = lazy(() => import("@/components/MobileLeadBar"));

// Lazy load all pages for code splitting
const pageImporters = {
  NotFound: () => import("./pages/NotFound"),
  BookingForm: () => import("./pages/BookingForm"),
  ServiceDetail: () => import("./pages/ServiceDetail"),
  Industries: () => import("./pages/Industries"),
  IndustryDetail: () => import("./pages/IndustryDetail"),
  CaseStudy: () => import("./pages/CaseStudy"),
  Services: () => import("./pages/Services"),
  BlogDetail: () => import("./pages/BlogDetail"),
  BlogListing: () => import("./pages/BlogListing"),
  About: () => import("./pages/About"),
  Careers: () => import("./pages/Careers"),
  PrivacyPolicy: () => import("./pages/PrivacyPolicy"),
  TermsAndConditions: () => import("./pages/TermsAndConditions"),
  BusinessConsulting: () => import("./pages/BusinessConsulting"),
  Impact: () => import("./pages/Impact"),
  FAQ: () => import("./pages/FAQ"),
  Contact: () => import("./pages/Contact"),
  BusinessLaunchIndia: () => import("./pages/BusinessLaunchIndia"),
};

const NotFound = lazy(pageImporters.NotFound);
const BookingForm = lazy(pageImporters.BookingForm);
const ServiceDetail = lazy(pageImporters.ServiceDetail);
const Industries = lazy(pageImporters.Industries);
const IndustryDetail = lazy(pageImporters.IndustryDetail);
const CaseStudy = lazy(pageImporters.CaseStudy);
const Services = lazy(pageImporters.Services);
const BlogDetail = lazy(pageImporters.BlogDetail);
const BlogListing = lazy(pageImporters.BlogListing);
const About = lazy(pageImporters.About);
const Careers = lazy(pageImporters.Careers);
const PrivacyPolicy = lazy(pageImporters.PrivacyPolicy);
const TermsAndConditions = lazy(pageImporters.TermsAndConditions);
const BusinessConsulting = lazy(pageImporters.BusinessConsulting);
const Impact = lazy(pageImporters.Impact);
const FAQ = lazy(pageImporters.FAQ);
const ContactPage = lazy(pageImporters.Contact);
const BusinessLaunchIndia = lazy(pageImporters.BusinessLaunchIndia);

// Download a likely next route only when a visitor points at or focuses its link.
// An idle browser can still be downloading LCP fonts, so idle alone is not a gate.
const PREFETCH_ROUTES = {
  "/about": "About", "/services": "Services", "/contact": "Contact",
  "/bookingform": "BookingForm", "/blogs": "BlogListing",
} as const;

const PrefetchPages = () => {
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) return;
    const started = new Set<string>();
    const prefetch = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.origin !== window.location.origin) return;
      const key = PREFETCH_ROUTES[link.pathname as keyof typeof PREFETCH_ROUTES];
      if (!key || started.has(key)) return;
      started.add(key);
      pageImporters[key]().catch(() => { started.delete(key); });
    };
    document.addEventListener("pointerover", prefetch, { passive: true });
    document.addEventListener("focusin", prefetch);
    return () => {
      document.removeEventListener("pointerover", prefetch);
      document.removeEventListener("focusin", prefetch);
    };
  }, []);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
    <div className="text-center">
      <div className="w-12 h-12 border-2 border-[#1BE1D3]/30 border-t-[#1BE1D3] rounded-full animate-spin mx-auto mb-4" />
      <p className="text-white/40 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Loading...</p>
    </div>
  </div>
);

const AppLayout = ({ children }) => {
  const { pathname } = useLocation();
  const hasPainted = useRef(false);
  useEffect(() => { hasPainted.current = true; }, []);
  return (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main key={pathname} className={`flex-grow${hasPainted.current ? " page-enter" : ""}`}>{children}</main>
    <Footer />
    <Suspense fallback={null}>
      <AIChat />
      <MobileLeadBar />
    </Suspense>
  </div>
  );
};

const App = ({ Router = BrowserRouter }: { Router?: ComponentType<{ children?: ReactNode }> }) => (
  <HelmetProvider>
      <Router>
        <ScrollToTop />
        <PrefetchPages />
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout>
                <Index />
              </AppLayout>
            }
          />
          <Route
            path="/about"
            element={
              <AppLayout>
                <About />
              </AppLayout>
            }
          />
          <Route
            path="/careers"
            element={
              <AppLayout>
                <Careers />
              </AppLayout>
            }
          />
          <Route
            path="/bookingform"
            element={
              <AppLayout>
                <BookingForm />
              </AppLayout>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <AppLayout>
                <ServiceDetail />
              </AppLayout>
            }
          />
          <Route
            path="/industries"
            element={
              <AppLayout>
                <Industries />
              </AppLayout>
            }
          />
          <Route
            path="/industries/:slug"
            element={
              <AppLayout>
                <IndustryDetail />
              </AppLayout>
            }
          />
          <Route
            path="/case-study"
            element={
              <AppLayout>
                <CaseStudy />
              </AppLayout>
            }
          />
          <Route
            path="/services"
            element={
              <AppLayout>
                <Services />
              </AppLayout>
            }
          />
          <Route
            path="/blogs"
            element={
              <AppLayout>
                <BlogListing />
              </AppLayout>
            }
          />
          <Route
            path="/blogs/:slug"
            element={
              <AppLayout>
                <BlogDetail />
              </AppLayout>
            }
          />
          <Route
            path="/privacy"
            element={
              <AppLayout>
                <PrivacyPolicy />
              </AppLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <AppLayout>
                <TermsAndConditions />
              </AppLayout>
            }
          />
          <Route
            path="/business-consulting"
            element={
              <AppLayout>
                <BusinessConsulting />
              </AppLayout>
            }
          />
          <Route
            path="/impact"
            element={
              <AppLayout>
                <Impact />
              </AppLayout>
            }
          />
          <Route
            path="/faq"
            element={
              <AppLayout>
                <FAQ />
              </AppLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <AppLayout>
                <ContactPage />
              </AppLayout>
            }
          />
          <Route
            path="/launch-in-india"
            element={
              <AppLayout>
                <BusinessLaunchIndia />
              </AppLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <AppLayout>
                <NotFound />
              </AppLayout>
            }
          />
        </Routes>
        </Suspense>
      </Router>
  </HelmetProvider>
);

export default App;
