import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages for code splitting
const pageImporters = {
  Index: () => import("./pages/Index"),
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
  BusinessLaunchIndia: () => import("./pages/BusinessLaunchIndia"),
};

const Index = lazy(pageImporters.Index);
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
const BusinessLaunchIndia = lazy(pageImporters.BusinessLaunchIndia);

// Prefetch all page chunks during browser idle time so navigation is instant
const PrefetchPages = () => {
  useEffect(() => {
    const prefetch = () => {
      Object.values(pageImporters).forEach((importer) => {
        importer().catch(() => {});
      });
    };
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(prefetch, { timeout: 3000 });
    } else {
      setTimeout(prefetch, 2000);
    }
  }, []);
  return null;
};

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
    <div className="text-center">
      <div className="w-12 h-12 border-2 border-[#1BE1D3]/30 border-t-[#1BE1D3] rounded-full animate-spin mx-auto mb-4" />
      <p className="text-white/40 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Loading...</p>
    </div>
  </div>
);

const AppLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
    <AIChat />
  </div>
);

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
