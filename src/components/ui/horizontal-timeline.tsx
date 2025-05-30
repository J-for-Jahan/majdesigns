
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HorizontalTimelineProps {
  steps: Step[];
  className?: string;
}

const HorizontalTimeline = ({ steps, className }: HorizontalTimelineProps) => {
  // Add state to track current step
  const [currentStep, setCurrentStep] = React.useState(0);
  
  return (
    <div className={cn("w-full", className)}>
      {/* Main timeline container */}
      <div className="relative">
        {/* Current step display - Full width card for better mobile visibility */}
        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full mx-auto mb-8"
        >
          <div className="relative rounded-xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 shadow-xl shadow-blue/5 overflow-hidden">
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-transparent rounded-xl -z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="w-12 h-12 backdrop-blur-md bg-gradient-to-br from-blue to-blue-light rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10">
              <div className="text-white">
                {steps[currentStep].icon}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white relative z-10">{steps[currentStep].title}</h3>
            <p className="text-gray-300 relative z-10 leading-relaxed text-sm break-words">{steps[currentStep].description}</p>
            
            {/* Step number with glow effect */}
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full backdrop-blur-xl bg-blue/20 border border-blue/30 flex items-center justify-center text-sm font-semibold text-blue">
              {currentStep + 1}
            </div>
            
            {/* Bottom light streak effect - remove animation */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent"
              animate={{ 
                x: ["-100%", "100%"],
              }}
              transition={{ 
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
        
        {/* Navigation dots */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentStep === index 
                  ? "bg-blue w-8" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Optional: Previous/Next buttons for easier navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentStep(prev => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous step"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next step"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
