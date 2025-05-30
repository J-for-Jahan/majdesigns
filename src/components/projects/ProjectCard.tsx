
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "./types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  hoveredTag: string | null;
  onTagHover: (tag: string | null) => void;
}

export const ProjectCard = ({ project, hoveredTag, onTagHover }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden backdrop-blur-lg bg-black/40 border border-white/10 hover:border-blue/20 transition-all duration-300 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 h-full relative">
          {/* Top curved glow effect */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent"></div>
          
          {/* Device Mockup (3/5 width on desktop) */}
          <div className="lg:col-span-3 p-6 pb-0">
            <div className="relative bg-gradient-to-b from-black/90 to-black/70 rounded-t-xl pt-4 px-3 border border-white/5 overflow-hidden">
              {/* Browser controls */}
              <div className="absolute top-1.5 left-3 flex gap-1">
                <motion.div 
                  className="w-2.5 h-2.5 rounded-full bg-red-500/70"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
                <motion.div 
                  className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
                <motion.div 
                  className="w-2.5 h-2.5 rounded-full bg-green-500/70"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
              </div>
              
              {/* Browser address bar */}
              <div className="mx-16 mb-3">
                <div className="h-5 bg-black/50 border border-white/5 rounded-full flex items-center px-3">
                  <motion.div 
                    className="w-2 h-2 bg-blue/50 rounded-full mr-2"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  <div className="text-[10px] text-white/30 font-mono">www.project-{project.title.toLowerCase().replace(/\s/g, '')}.com</div>
                </div>
              </div>
              
              <AspectRatio ratio={16/9} className="overflow-hidden rounded-t-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 pointer-events-none"></div>
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                />
                {project.isNew && (
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge className="absolute top-4 right-4 bg-blue text-white border-0 z-20 shadow-lg shadow-blue/20">
                      New
                    </Badge>
                  </motion.div>
                )}
              </AspectRatio>
              
              {/* Browser Bottom Bar */}
              <div className="h-3 w-full bg-black/90 rounded-b-xl"></div>
            </div>
          </div>
          
          {/* Project Details (2/5 width on desktop) */}
          <div className="lg:col-span-2 p-6 flex flex-col justify-between">
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-2 text-white bg-gradient-to-r from-blue to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              
              {/* Project Tech Stack Tags */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tagIndex}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="outline"
                      className={cn(
                        "bg-black/50 hover:bg-blue/20 border-white/10 hover:border-blue/30 cursor-pointer transition-all",
                        hoveredTag === tag ? "bg-blue/20 border-blue/30 text-blue-light" : "text-gray-300"
                      )}
                      onMouseEnter={() => onTagHover(tag)}
                      onMouseLeave={() => onTagHover(null)}
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="flex items-center justify-between mt-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Badge className={cn(
                  "px-4 py-1 text-sm rounded-full",
                  project.isNew 
                    ? "bg-blue/20 text-blue-light border border-blue/50" 
                    : "bg-white/5 text-white border border-white/10"
                )}>
                  {project.achievement}
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-white/5 hover:bg-blue/20 text-white hover:text-blue"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom edge glow */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue/30 to-transparent"></div>
        </div>
      </Card>
    </motion.div>
  );
};
