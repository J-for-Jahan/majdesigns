
import { TextRotate } from "./ui/text-rotate";
import { motion } from "framer-motion";
import Floating, { FloatingElement } from "./ui/parallax-floating";

const Hero = () => {
  return (
    <section id="home" className="relative z-10 px-6 py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-purple-light font-mono mb-3">Hello, my name is</p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                <span className="text-gradient">MA Jillani</span>
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-300 font-serif font-bold mb-6">
                Creating websites that <TextRotate 
                  texts={["convert", "impress", "perform", "engage", "deliver"]} 
                  rotationInterval={3000}
                  mainClassName="text-purple"
                /> & grow your business
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                I'm a web developer and designer specializing in building exceptional digital 
                experiences that enhance your business's online presence and drive conversion. 
                My focus is on creating websites that not only look great but deliver real results.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#projects" 
                  className="px-8 py-3 bg-purple text-white rounded-md font-semibold hover:bg-purple/80 transition-all"
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="px-8 py-3 border border-purple text-purple rounded-md font-semibold hover:bg-purple/10 transition-all"
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <Floating sensitivity={0.2} className="w-full h-full">
              <FloatingElement depth={1.2} className="absolute inset-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-blue-light opacity-20 blur-2xl"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 4,
                      ease: "easeInOut" 
                    }}
                  ></motion.div>
                  <div className="absolute inset-0 rounded-full flex items-center justify-center">
                    <motion.div 
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-purple to-blue-light p-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <motion.img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                          alt="MA Jillani" 
                          className="w-full h-full object-cover"
                          initial={{ filter: "blur(10px)" }}
                          animate={{ filter: "blur(0px)" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FloatingElement>
            </Floating>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
