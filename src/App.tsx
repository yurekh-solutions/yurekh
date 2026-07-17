import { lazy, Suspense } from "react";
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
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BookingForm = lazy(() => import("./pages/BookingForm"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Services = lazy(() => import("./pages/Services"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const BlogListing = lazy(() => import("./pages/BlogListing"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const BusinessConsulting = lazy(() => import("./pages/BusinessConsulting"));
const Impact = lazy(() => import("./pages/Impact"));
const FAQ = lazy(() => import("./pages/FAQ"));

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
