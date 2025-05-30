
import { motion } from "framer-motion";

export const ProjectHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.span 
        className="text-xs font-semibold tracking-wider text-blue uppercase inline-block mb-3 px-3 py-1 border border-blue/20 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Selected Work
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
      >
        Recent <span className="bg-gradient-to-r from-blue via-blue-light to-blue-light bg-clip-text text-transparent">Client Projects</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto mt-4"
      >
        Custom websites that deliver real results for businesses just like yours
      </motion.p>
    </div>
  );
};
