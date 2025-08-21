import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BusinessConsulting from "./pages/services/BusinessConsulting";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import WebDevelopment from "./pages/services/WebDevelopment";
import BrandingDesign from "./pages/services/BrandingDesign";
import SEOServices from "./pages/services/SEOServices";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/branding-design" element={<BrandingDesign />} />
          <Route path="/services/seo-services" element={<SEOServices />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
