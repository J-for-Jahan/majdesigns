import { motion } from "framer-motion";
import profileImage from "../assets/projects/profile image.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue/5 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            I'm a solo designer who works directly with clients to create websites that truly reflect their vision and connect with their audience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image container with effects */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue/10 border border-white/10">
              <div className="w-full h-auto aspect-[4/5]">
                <img 
                  src={profileImage} 
                  alt="Designer at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-darkblue/90 via-darkblue/40 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-blue rounded-full opacity-60 z-[-1]"
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                scale: { duration: 8, repeat: Infinity }
              }}
            />
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue/30 rounded-full opacity-60 z-[-1]"
              animate={{ 
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                scale: { duration: 6, repeat: Infinity }
              }}
            />
            
            {/* Floating dot patterns */}
            <div className="absolute -bottom-10 -right-10 w-20 h-20 grid grid-cols-3 grid-rows-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blue/50"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2 + (i % 3), 
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Your <span className="text-blue">Creative Partner</span></h3>
            <p className="text-gray-300 mb-6">
            Hey, I'm Jillani — a freelance web designer who actually gets what small businesses need. I don't just make websites that look pretty — I build online experiences that turn visitors into paying customers.
            </p>
            <p className="text-gray-300 mb-6">
            I work closely with local business owners, entrepreneurs, and service providers who are done wasting time on generic templates and overpriced agencies. Whether it's a real estate brand that needs trust at first glance, or a coach who wants a site that feels like them, I bring strategy, design, and clarity into one smooth package.
            </p>
            <p className="text-gray-300 mb-8">
            I believe in speed, honesty, and design that converts. You won't deal with fluff or big talk — just clean, high-impact websites that do the job right. This is personal for me: I want you to win, because that's how I grow too.
            </p>
            <p className="text-gray-300 mb-8">
            Let's build something that actually moves your business forward.
            </p>
            
            
            
            <motion.a 
              href="#contact"
              className="px-8 py-3 bg-blue text-white rounded-md font-medium hover:bg-blue/80 transition-all inline-flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,112,243,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Chat About Your Project
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
