import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectHeader } from "./ProjectHeader";
import { projects } from "./projectsData";
import { ArrowUpRight, X } from "lucide-react";

const ProjectsShowcase = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue/20"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.2 + Math.random() * 0.3
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2 + Math.random() * 0.3, 0.5, 0.2 + Math.random() * 0.3]
            }}
            transition={{ 
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Gradient orbs */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative overflow-hidden rounded-xl backdrop-blur-lg bg-black/40 border border-white/10 
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 3 ? 'lg:col-span-2' : ''}`}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 z-0">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                />
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
                    <button
                      className="text-blue hover:text-blue-light flex items-center gap-1 font-semibold"
                      onClick={() => setOpenIndex(index)}
                    >
                      View <ArrowUpRight size={16} />
                    </button>
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
      {/* Modal for enlarged project image */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-darkblue/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl border border-blue/20 flex flex-col"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10 shrink-0 relative">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-800/50 rounded-md py-1 px-3 text-xs text-center text-gray-400 truncate">
                    {projects[openIndex].title} - Portfolio Website
                  </div>
                </div>
                <button
                  className="absolute top-2 right-2 z-50 text-white bg-blue/80 hover:bg-blue/90 p-2 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                  style={{ minWidth: 40, minHeight: 40 }}
                  onClick={() => setOpenIndex(null)}
                >
                  <X size={28} />
                  <span className="ml-2 text-base font-medium md:hidden">Close</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center justify-start max-h-[80vh] md:max-h-[90vh]">
                <img
                  src={projects[openIndex].image}
                  alt={projects[openIndex].title}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsShowcase;
