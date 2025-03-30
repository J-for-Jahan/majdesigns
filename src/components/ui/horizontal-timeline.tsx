
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HorizontalTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

const HorizontalTimeline = ({ steps, className }: HorizontalTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  const [isHovering, setIsHovering] = useState(false);

  // Enable wheel scrolling when hovering
  useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;
    
    const handleWheel = (e: WheelEvent) => {
      if (isHovering) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isHovering]);

  return (
    <div 
      className={cn("w-full", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        ref={containerRef} 
        className="overflow-x-auto pb-4 hide-scrollbar" 
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex space-x-6 p-2 min-w-max">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex flex-col items-center min-w-[280px]"
            >
              {/* Timeline icon */}
              <div className="z-10 w-12 h-12 rounded-full bg-purple flex items-center justify-center mb-4">
                {step.icon}
              </div>
              
              {/* Timeline content */}
              <div className="glass-effect rounded-lg p-5 min-h-[150px] w-full">
                <h4 className="text-xl font-serif font-bold text-purple-light mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>

              {/* Step number */}
              <div className="absolute -bottom-8 font-mono text-sm text-gray-400">
                STEP {index + 1}
=======
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    
    if (currentIndex >= steps.length) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
      
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 1000);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;

    if (currentIndex <= 0) {
      setIsTransitioning(true);
      setCurrentIndex(steps.length);
      setTimeout(() => setIsTransitioning(false), 50);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isHovering && !isTransitioning) {
      intervalId = setInterval(() => {
        handleNext();
      }, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovering, isTransitioning, steps.length]);

  return (
    <div className={cn("w-full relative", className)}>
      <div ref={containerRef} className="overflow-hidden">
        <div 
          className={cn(
            "flex transition-transform duration-1000 ease-in-out",
            isTransitioning && "duration-0"
          )}
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {[...steps, ...steps, ...steps.slice(0, 2)].map((step, index) => (
            <motion.div
              key={`${step.id}-${index}`}
              className="timeline-card relative flex-shrink-0 w-1/2 flex flex-col items-center px-6"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="z-10 w-16 h-16 rounded-full bg-purple/30 backdrop-blur-sm flex items-center justify-center mb-6 border-2 border-purple/50 shadow-glow">
                <div className="w-8 h-8 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-6 w-full shadow-lg border border-purple/20 flex flex-col h-[200px]">
                <div className="text-purple-light/50 font-mono text-sm mb-2">
                  STEP {String(((index % steps.length) || steps.length)).padStart(2, '0')}
                </div>
                <h4 className="text-2xl font-serif font-bold text-purple-light mb-3">{step.title}</h4>
                <p className="text-gray-300 text-base leading-relaxed flex-1">{step.description}</p>
>>>>>>> 40f74b4 (Updated after trae)
              </div>
            </motion.div>
          ))}
        </div>
      </div>
<<<<<<< HEAD
=======

      <div className="flex justify-center items-center gap-6 mt-16">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 bg-purple/20 hover:bg-purple/30 rounded-full transition-colors duration-300 group flex items-center justify-center"
        >
          <span className="text-xl group-hover:text-purple-light">←</span>
        </button>

        <div className="flex gap-3">
          {steps.map((_, idx) => (
            <div 
              key={idx} 
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-300",
                currentIndex % steps.length === idx ? "bg-purple" : "bg-purple/30"
              )}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-12 h-12 bg-purple/20 hover:bg-purple/30 rounded-full transition-colors duration-300 group flex items-center justify-center"
        >
          <span className="text-xl group-hover:text-purple-light">→</span>
        </button>
      </div>
>>>>>>> 40f74b4 (Updated after trae)
    </div>
  );
};

export default HorizontalTimeline;
