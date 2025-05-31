import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";
import PerformanceToggle from './components/ui/performance-toggle';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Helmet>
            <title>MA Jillani | Web Developer & Designer Portfolio</title>
            <meta name="description" content="Professional web developer and designer specializing in creating exceptional digital experiences with modern technologies. Based in Islamabad, Pakistan." />
            <meta name="keywords" content="web developer, web designer, frontend developer, UI/UX designer, portfolio, React developer, MA Jillani, Islamabad" />
            <meta name="author" content="MA Jillani" />
            <meta property="og:title" content="MA Jillani | Web Developer & Designer Portfolio" />
            <meta property="og:description" content="Professional web developer and designer specializing in creating exceptional digital experiences with modern technologies. Based in Islamabad, Pakistan." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://majdesigns.vercel.app" />
            <meta property="og:image" content="/og-image.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="MA Jillani | Web Developer & Designer Portfolio" />
            <meta name="twitter:description" content="Professional web developer and designer specializing in creating exceptional digital experiences with modern technologies. Based in Islamabad, Pakistan." />
            <meta name="twitter:image" content="/og-image.png" />
          </Helmet>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <PerformanceToggle />
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
