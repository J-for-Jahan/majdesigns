
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Code, Users, Palette, Rocket, Zap, PencilRuler } from "lucide-react";
import HorizontalTimeline from './ui/horizontal-timeline';

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We'll start with a friendly chat about your business goals, target audience, and what makes your brand special.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Design",
    description: "I'll craft a custom design that captures your brand personality and appeals to your ideal clients — with revisions until you love it.",
    icon: <PencilRuler className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Development",
    description: "Your design comes to life with clean code and thoughtful functionality that makes managing your site a breeze.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Refinement",
    description: "We'll review everything together, making sure every detail is perfect and the site works flawlessly on all devices.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Launch",
    description: "Your beautiful new website goes live! I handle all the technical details so your launch is smooth and stress-free.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Support",
    description: "I'm just an email away if you need help, updates, or have questions about managing your new site.",
    icon: <Users className="w-6 h-6" />,
  },
];

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 md:py-24 bg-dark relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Animated grid lines with pulse effect */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-[linear-gradient(to_right,#0070F310_1px,transparent_1px),linear-gradient(to_bottom,#0070F310_1px,transparent_1px)] bg-[size:4rem_4rem]"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.span 
            className="text-xs font-semibold tracking-wider text-blue uppercase inline-block mb-3 px-3 py-1 border border-blue/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Process
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            How We <span className="bg-gradient-to-r from-blue via-blue-light to-blue-light bg-clip-text text-transparent">Collaborate</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            Working with me is simple and transparent. I've refined my process to make our collaboration
            enjoyable while delivering exceptional results for your business.
          </motion.p>
        </div>
        
        {/* Desktop view: Interactive cards */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="tilt-card group"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
              style={{ transition: 'transform 0.3s ease-out' }}
            >
              <div className="relative h-full rounded-xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 sm:p-8 shadow-xl shadow-blue/5 overflow-hidden">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-transparent rounded-xl -z-10"
                  animate={hoveredIndex === index ? { 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  } : {}}
                  transition={{ duration: 2 }}
                />
                
                <div className="w-12 h-12 md:w-16 md:h-16 backdrop-blur-md bg-gradient-to-br from-blue to-blue-light rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white relative z-10">{step.title}</h3>
                <p className="text-gray-300 relative z-10 leading-relaxed text-sm md:text-base">{step.description}</p>
                
                {/* Step number with glow effect */}
                <div className="absolute top-6 right-6 w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur-xl bg-blue/20 border border-blue/30 flex items-center justify-center text-sm font-semibold text-blue">
                  {index + 1}
                </div>
                
                {/* Bottom light streak effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent"
                  animate={{ 
                    x: ["-100%", "100%"],
                  }}
                  transition={{ 
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile view: Horizontal timeline */}
        <div className="lg:hidden">
          <HorizontalTimeline steps={steps} className="mt-8" />
        </div>
        
        {/* Timeline progress indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <div className="h-1 bg-white/5 w-full max-w-lg rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue/70 to-blue-light rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
