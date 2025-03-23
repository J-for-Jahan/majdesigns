
import { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "./scroll-area";
import { cn } from "@/lib/utils";

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

  return (
    <div className={cn("w-full", className)}>
      <ScrollArea className="w-full">
        <div 
          ref={containerRef}
          className="relative flex flex-row items-center px-4 py-6 min-w-max"
          style={{ width: `max(100%, ${steps.length * 350}px)` }}
        >
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10" />
          
          {/* Timeline steps */}
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex-shrink-0 flex flex-col items-center mx-6 w-[300px]"
            >
              {/* Timeline icon */}
              <div className="z-10 w-12 h-12 rounded-full bg-purple flex items-center justify-center mb-4">
                {step.icon}
              </div>
              
              {/* Timeline content */}
              <div className="glass-effect rounded-lg p-5 min-h-[150px]">
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
      </ScrollArea>
    </div>
  );
};

export default HorizontalTimeline;
