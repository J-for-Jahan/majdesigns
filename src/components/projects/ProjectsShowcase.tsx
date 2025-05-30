
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectHeader } from "./ProjectHeader";
import { projects } from "./projectsData";
import { ArrowUpRight, X, MousePointer, ChevronDown } from "lucide-react";

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Reset scroll indicator when a new project is viewed
  useEffect(() => {
    setHasScrolled(false);
  }, [hoveredProject]);
  
  // Handle scroll events to hide the scroll indicator once user has scrolled
  const handleScroll = () => {
    const scrollTop = scrollContainerRef.current?.scrollTop || 0;
    if (!hasScrolled && scrollTop > 20) {
      setHasScrolled(true);
    }
  };

  return (
    <motion.div 
      id="projects" 
      className="py-24 px-6 bg-darkblue/30 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated floating particles */}
        {/* Reduce number of animated particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue/20"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.2 + Math.random() * 0.3
            }}
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
        
        {/* Simplified gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue/5 blur-3xl" />
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue/5 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darkblue/50 to-darkblue/80 z-0"></div>
      
      {/* Enlarged Image Overlay - Now Scrollable */}
      <AnimatePresence>
        {hoveredProject !== null && (
          <motion.div 
            className="fixed inset-0 bg-darkblue/80 backdrop-blur-md z-50 flex items-start justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-5xl w-full h-[90vh] rounded-xl overflow-hidden shadow-2xl border border-blue/20 flex flex-col"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Browser chrome */}
              <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-800/50 rounded-md py-1 px-3 text-xs text-center text-gray-400 truncate">
                    {projects[hoveredProject].title} - Portfolio Website
                  </div>
                </div>
                <button 
                  className="text-white p-1 rounded-full hover:bg-blue/30 transition-colors"
                  onClick={() => setHoveredProject(null)}
                >
                  <X size={18} />
                </button>
              </div>
              
              {/* Scrollable website content */}
              <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto custom-scrollbar"
                onScroll={handleScroll}
              >
                <div className="relative">
                  <img 
                    src={projects[hoveredProject].image} 
                    alt={projects[hoveredProject].title}
                    className="w-full object-cover object-top"
                    style={{ minHeight: '150%' }} // Make image taller to enable scrolling
                  />
                  
                  {/* Website-like content overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darkblue/90">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{projects[hoveredProject].title}</h2>
                      <p className="text-gray-300 mb-6 max-w-2xl">{projects[hoveredProject].description}</p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {projects[hoveredProject].tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="bg-blue/20 text-blue-light text-xs px-3 py-1.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Removed the View Project button */}
                    </div>
                  </div>
                </div>
                
                {/* Additional scrollable content to simulate a full website */}
                <div className="bg-darkblue p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                  <p className="text-gray-300 mb-6">
                    This project for {projects[hoveredProject].title} showcases our approach to creating
                    engaging, conversion-focused websites that deliver real results for businesses.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/20 p-6 rounded-lg border border-white/5">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-400">
                        The client needed a website that would stand out in a competitive market
                        while effectively showcasing their services and generating quality leads.
                      </p>
                    </div>
                    <div className="bg-black/20 p-6 rounded-lg border border-white/5">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-400">
                        We created a custom design with strategic CTAs, optimized user flows,
                        and mobile-first responsive layouts to maximize conversions.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
                  <p className="text-blue font-medium text-lg mb-12">{projects[hoveredProject].achievement}</p>
                </div>
              </div>
              
              {/* Scroll indicator */}
              <AnimatePresence>
                {!hasScrolled && (
                  <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronDown className="text-blue" size={24} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Mouse cursor indicator for desktop */}
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white/50"
                >
                  <MousePointer size={24} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Showcase <span className="text-blue">Projects</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProjectHeader />
        </motion.div>
        
        {/* Bento Grid for Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative overflow-hidden rounded-xl backdrop-blur-lg bg-black/40 border border-white/10 cursor-pointer
                ${index === 0 ? 'md:col-span-2 md:row-span-2 lg:col-span-4' : ''}
                ${index === 3 ? 'lg:col-span-4' : ''}
                ${index === 5 || index === 6 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              onClick={() => setHoveredProject(index)}
            >
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full overflow-hidden rounded-t-lg">
                  {/* Browser chrome */}
                  <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-2 flex items-center justify-between border-b border-white/10">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <motion.button
                      className="text-blue-light text-xs flex items-center gap-1 hover:text-blue transition-colors"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Click to View <ArrowUpRight size={12} />
                    </motion.button>
                  </div>
                  
                  {/* Website content */}
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-50 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2 }}
                    onClick={() => setHoveredProject(index)}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue via-darkblue/70 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-6 flex flex-col h-full">
                {project.isNew && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue text-white text-xs px-2 py-1 rounded-full">New</span>
                  </div>
                )}
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span 
                          key={i}
                          className="bg-blue/20 text-blue-light text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="text-gray-400 text-xs">+{project.tags.length - 2}</span>
                      )}
                    </div>
                    
                    {/* Removing the View Image button */}
                  </div>
                  
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <span className="text-blue font-medium">{project.achievement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsShowcase;
