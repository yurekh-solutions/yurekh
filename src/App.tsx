import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookingForm from "./pages/BookingForm";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import CaseStudy from "./pages/CaseStudy";
import Services from "./pages/Services";
import BlogDetail from "./pages/BlogDetail";
import BlogListing from "./pages/BlogListing";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import BusinessConsulting from "./pages/BusinessConsulting";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AppLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
    <AIChat />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
