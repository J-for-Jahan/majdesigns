
import { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "./scroll-area";
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

  return (
    <div className={cn("w-full", className)}>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {steps.map((step, index) => (
            <CarouselItem key={step.id} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col items-center mx-2"
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HorizontalTimeline;
