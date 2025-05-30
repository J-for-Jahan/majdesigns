
import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Layout, 
  Smartphone, 
  Server, 
  Database, 
  Terminal
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      title: "Strategic Website Design",
      description: "Not just a pretty site, but a strategic asset that aligns with your business goals and captivates your ideal clients.",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Responsive Development",
      description: "Your site will look and function perfectly on every device — from desktop to mobile — giving your visitors a seamless experience.",
    },
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: "Custom Functionality",
      description: "From contact forms to booking systems, I'll build the features you need to transform your website into a powerful business tool.",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Content Management",
      description: "Take control of your website with a user-friendly system that lets you update content without technical knowledge.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: "Speed Optimization",
      description: "Fast-loading pages that keep visitors engaged and improve your search rankings. No waiting, no bouncing.",
    },
    {
      icon: <Terminal className="w-8 h-8 text-blue-400" />,
      title: "Ongoing Support",
      description: "I don't disappear after launch. Get the help you need with updates, additions, and maintenance as your business grows.",
    },
  ];

  return (
    <section id="services" className="relative z-10 px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="relative text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-wider text-blue-400 uppercase inline-block mb-3 px-3 py-1 border border-blue-500/20 rounded-full"
          >
            What I Offer
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold display-font"
          >
            Building <span className="text-gradient">Stronger Brands</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 bg-blue-gradient mx-auto mt-8 rounded-full"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto mt-4"
          >
            Perfect for small businesses, consultants, local services, and personal brands looking to stand out online and attract more clients.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="modern-card group"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-lg transform -rotate-6 scale-90 group-hover:rotate-3 transition-all duration-300"></div>
                <div className="w-16 h-16 relative bg-blue-500/10 backdrop-blur-lg rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  {React.cloneElement(service.icon, { 
                    className: "w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" 
                  })}
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
              
              <div className="mt-6 flex items-center">
                <a href="#contact" className="text-blue-400 text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Discuss your project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center"
          >
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
