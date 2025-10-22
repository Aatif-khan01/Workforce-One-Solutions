import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollTop } from "@/hooks/use-scroll-top";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ProposalDevelopment from "./pages/ProposalDevelopment";
import ClearedRecruitment from "./pages/ClearedRecruitment";
import StaffingServices from "./pages/StaffingServices";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  useScrollTop();
  
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/proposal" element={<ProposalDevelopment />} />
          <Route path="/services/recruitment" element={<ClearedRecruitment />} />
          <Route path="/services/staffing" element={<StaffingServices />} />
          <Route path="/services/software" element={<SoftwareDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

