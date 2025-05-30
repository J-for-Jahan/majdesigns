import React from 'react';
import { motion } from "framer-motion";
import { Palette, Users, Heart, Star, MessageSquareHeart, Smile } from "lucide-react";

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Creative Design",
    description: "Visually stunning, unique designs crafted to make your brand stand out in a crowded digital landscape."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer-Centered Approach",
    description: "Your needs and goals are at the heart of every decision, ensuring the final product truly represents your vision."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Attention to Detail",
    description: "Every pixel matters. I meticulously craft each element to create cohesive and polished user experiences."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Industry Best Practices",
    description: "Designs that follow current trends and accessibility standards while maintaining timeless appeal."
  },
  {
    icon: <MessageSquareHeart className="w-6 h-6" />,
    title: "Client Communication",
    description: "Clear, consistent communication throughout the project ensures your feedback is heard and implemented."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Customer Satisfaction",
    description: "I'm not satisfied until you are. Your happiness with the final product is my ultimate measure of success."
  }
];

const WhyChooseMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="why-me" className="py-20 px-4 sm:px-6 md:py-24 bg-dark relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            x: [0, 30, 0],
            y: [0, -30, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Why Choose <span className="bg-gradient-to-r from-blue via-blue-light to-blue-light bg-clip-text text-transparent">Me</span> As Your Designer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            I create more than just beautiful designs – I craft meaningful digital experiences
            that connect with your audience and help your business achieve its goals.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="tilt-card group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,112,243,0.2)"
              }}
              style={{ transition: 'all 0.3s ease-out' }}
            >
              <div className="relative h-full rounded-xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 sm:p-8 shadow-xl shadow-blue/5 overflow-hidden">
                {/* Simplified background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-transparent rounded-xl -z-10" />
                
                {/* Rest of the card content */}
                <div className="w-12 h-12 md:w-16 md:h-16 backdrop-blur-md bg-gradient-to-br from-blue to-blue-light rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white relative z-10">{feature.title}</h3>
                <p className="text-gray-300 relative z-10 leading-relaxed text-sm md:text-base">{feature.description}</p>
                
                {/* Step number with glow effect */}
                <div className="absolute top-6 right-6 w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur-xl bg-blue/20 border border-blue/30 flex items-center justify-center text-sm font-semibold text-blue">
                  {index + 1}
                </div>
                
                {/* Simplified bottom light streak effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
