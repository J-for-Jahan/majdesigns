
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>John Doe | Web Developer & Designer Portfolio</title>
        <meta name="description" content="Professional web developer and designer specializing in creating exceptional digital experiences with modern technologies." />
        <meta name="keywords" content="web developer, web designer, frontend developer, UI/UX designer, portfolio, React developer" />
        <meta name="author" content="John Doe" />
        <meta property="og:title" content="John Doe | Web Developer & Designer Portfolio" />
        <meta property="og:description" content="Professional web developer and designer specializing in creating exceptional digital experiences with modern technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johndoe-portfolio.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Doe | Web Developer & Designer Portfolio" />
        <meta name="twitter:description" content="Professional web developer and designer specializing in creating exceptional digital experiences with modern technologies." />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
