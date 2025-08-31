
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Diagnostics from "./pages/Diagnostics";
import Repair from "./pages/Repair";
import Maintenance from "./pages/Maintenance";
import Parts from "./pages/Parts";
import Warranty from "./pages/Warranty";
import Emergency from "./pages/Emergency";
import Consultation from "./pages/Consultation";
import Training from "./pages/Training";
import Corporate from "./pages/Corporate";
import Brands from "./pages/Brands";
import Technologies from "./pages/Technologies";
import Prices from "./pages/Prices";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";
import Career from "./pages/Career";
import Partners from "./pages/Partners";
import News from "./pages/News";
import Support from "./pages/Support";
import Delivery from "./pages/Delivery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/training" element={<Training />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/career" element={<Career />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
          <Route path="/delivery" element={<Delivery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
