
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const FeaturedProject = () => {
  const features = [
    { label: "View Range", value: "200°" },
    { label: "Temperature", value: "76°" },
    { label: "Starting Price", value: "$1.9M" }
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 shadow-xl shadow-blue/5 bg-gradient-to-br from-black/70 to-black/40"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Desktop Frame with Animation */}
        <div className="relative bg-black/70 p-6 pb-0 border-r border-white/5">
          <motion.div 
            className="absolute top-3 left-3 flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
          </motion.div>
          
          <motion.div 
            className="relative rounded-t-lg overflow-hidden mt-4 shadow-xl shadow-black/50"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10 pointer-events-none"></div>
            <motion.img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Featured Property" 
              className="w-full h-full object-cover" 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div 
              className="absolute top-4 left-4 px-3 py-1 bg-blue text-white text-xs rounded-full shadow-lg shadow-blue/20"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Featured
            </motion.div>
            
            {/* Pulsing highlight effect */}
            <motion.div 
              className="absolute inset-0 border-2 border-blue/30 z-20 rounded-lg pointer-events-none"
              animate={{ 
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
          </motion.div>
          
          <div className="h-3 w-full bg-black/90 rounded-b-xl"></div>
        </div>
        
        {/* Project Details with Animations */}
        <div className="p-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Badge className="mb-2 bg-blue/20 text-blue-light border-0 w-fit">CASE STUDY</Badge>
          </motion.div>
          
          <motion.h3 
            className="text-3xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue to-white bg-clip-text text-transparent">
              FIND YOUR PERFECT HOME TODAY
            </span>
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Modern home with expansive views and cutting-edge smart home technology integrated throughout.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-3 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <motion.span 
                  className="text-blue text-2xl font-bold block"
                  animate={{ 
                    opacity: [0.8, 1, 0.8] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {feature.value}
                </motion.span>
                <p className="text-gray-500 text-sm">{feature.label}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="px-6 py-3 bg-gradient-to-r from-blue to-blue-light text-white hover:bg-blue/80 transition-colors w-full md:w-auto flex items-center gap-2 shadow-lg shadow-blue/20">
              View Property
              <ExternalLink className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
