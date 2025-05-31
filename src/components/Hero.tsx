import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code, Layout } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

// Import the images from the assets folder
import Site01 from "../assets/projects/stardust-real-estate.jpg";
import Site02 from "../assets/projects/atlas-luxury-mansions.jpg";

// Custom hook for mouse movement with reduced motion
const useMouseMovement = (isMobile: boolean) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;
    
    let timeoutId: number;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isMobile, prefersReducedMotion]);

  return mousePosition;
};

const Hero = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const mousePosition = useMouseMovement(isMobile);
  
  // Simplify movement calculation with reduced motion check
  const calculateMovement = (axis: 'x' | 'y', factor = 40) => {
    if (isMobile || prefersReducedMotion) return 0;
    
    const center = axis === 'x' ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === 'x' ? mousePosition.x : mousePosition.y;
    return (position - center) / factor;
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20"
      aria-label="Hero section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Enhanced glowing orb with better gradient */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent blur-[120px]"
          animate={prefersReducedMotion ? {} : {
            x: calculateMovement('x', -30),
            y: calculateMovement('y', -30),
          }}
          transition={{ type: "spring", stiffness: 10, damping: 20 }}
        />
        
        {/* Refined grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-15" />
      </div>
      
      <div className="max-w-7xl w-full mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
              className="mb-4 md:mb-6"
            >
              <span className="px-3 py-1 text-xs md:text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                Web Designer & Developer
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight display-font tracking-tight"
            >
              Websites that <span className="text-gradient glow-text" aria-label="Convert Visitors Into Clients">Convert Visitors Into Clients</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.4 }}
              className="text-gray-300 text-base md:text-lg mb-6 md:mb-10"
            >
              I craft visually stunning, strategically designed websites that elevate your brand and turn curious visitors into paying customers. No agencies, no middlemen — just you and me creating your perfect digital presence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 md:gap-5"
            >
              <motion.a 
                href="#projects" 
                className="btn-primary flex items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-darkblue rounded-lg"
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                aria-label="View my portfolio projects"
              >
                See My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} aria-hidden="true" />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-outline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-darkblue rounded-lg"
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                aria-label="Start your project with me"
              >
                Start Your Project
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.8 }}
              className="mt-8 md:mt-12 flex items-center space-x-4"
              aria-label="Social proof"
            >
              <div className="flex -space-x-2" role="list" aria-label="Social media platforms">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((platform, i) => (
                  <motion.div 
                    key={platform}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: 0.8 + (i * 0.1) }}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/30 border border-blue-400/20 backdrop-blur-sm flex items-center justify-center text-xs text-white font-medium"
                    role="listitem"
                    aria-label={`${platform} profile`}
                  >
                    {platform.charAt(0)}
                  </motion.div>
                ))}
              </div>
              <span className="text-xs md:text-sm text-gray-400">10+ delighted clients since 2025</span>
            </motion.div>
          </div>
          
          {/* Right showcase section - Simplified and improved */}
          <div className="relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.5 }}
              style={{
                transform: !isMobile && !prefersReducedMotion 
                  ? `perspective(1000px) rotateY(${calculateMovement('x', -80)}deg) rotateX(${-calculateMovement('y', -80)}deg)` 
                  : undefined,
              }}
              className="relative z-20 transform-gpu"
            >
              {/* Main website mockup - Enhanced design */}
              <div className="relative glass-effect rounded-2xl overflow-hidden shadow-2xl mb-4 border border-white/10">
                <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex space-x-2" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="w-4"></div>
                </div>
                <div className="relative aspect-[16/10]">
                  <img 
                    src={Site01} 
                    alt="Modern web design showcase featuring a clean, professional layout with strategic call-to-action placement"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    width={800}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkblue/95 via-darkblue/50 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-sm text-blue-400 font-medium mb-1">Featured Project</p>
                      <h3 className="text-xl font-bold text-white">Modern Web Solutions</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary website mockup - Enhanced positioning */}
              <div className="absolute top-1/3 -right-8 w-2/3 z-10">
                <div className="relative glass-effect rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10">
                    <div className="flex space-x-2" aria-hidden="true">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="w-4"></div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={Site02} 
                      alt="Secondary web design showcase demonstrating responsive design and modern UI elements"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      width={600}
                      height={450}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced floating UI elements */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.8 }}
              className="absolute -top-8 -right-8 glass-effect p-3 md:p-4 rounded-xl flex items-center space-x-3 shadow-lg border border-white/10 z-30 hidden sm:flex"
              style={{
                transform: !isMobile && !prefersReducedMotion 
                  ? `perspective(1000px) rotateY(${calculateMovement('x', 60)}deg) rotateX(${-calculateMovement('y', 60)}deg)` 
                  : undefined,
              }}
              aria-label="Design feature highlight"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-full flex items-center justify-center" aria-hidden="true">
                <Code className="text-blue-400 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Handcrafted design</p>
                <p className="text-xs md:text-sm font-medium">Custom to your brand</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 1 }}
              className="absolute -bottom-8 -left-8 glass-effect p-3 md:p-4 rounded-xl flex items-center space-x-3 shadow-lg border border-white/10 z-30 hidden sm:flex"
              style={{
                transform: !isMobile && !prefersReducedMotion 
                  ? `perspective(1000px) rotateY(${calculateMovement('x', 60)}deg) rotateX(${-calculateMovement('y', 60)}deg)` 
                  : undefined,
              }}
              aria-label="Client focus highlight"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-full flex items-center justify-center" aria-hidden="true">
                <Layout className="text-blue-400 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Client-focused</p>
                <p className="text-xs md:text-sm font-medium">Results-driven design</p>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-32 h-32 md:w-40 md:h-40 rounded-full border border-blue-500/20 animate-pulse-slow" aria-hidden="true"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 md:w-20 md:h-20 rounded-full border border-blue-500/10 animate-pulse-slow" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
