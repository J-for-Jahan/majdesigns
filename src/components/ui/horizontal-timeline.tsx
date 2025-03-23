
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
