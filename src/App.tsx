import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Lavori from "./pages/Lavori.tsx";
import ChiSono from "./pages/ChiSono.tsx";
import Contatti from "./pages/Contatti.tsx";
import ProgettoDetail from "./pages/ProgettoDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import CookieBanner from "./components/CookieBanner.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/studioand-lovable">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lavori" element={<Lavori />} />
          <Route path="/lavori/:id" element={<ProgettoDetail />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
