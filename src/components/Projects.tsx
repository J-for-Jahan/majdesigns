import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [projects] = useState([
    {
      title: "Marigold Spa & Wellness",
      description: "Complete rebrand and website for this luxury spa, including online booking and gift card purchases",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Branding", "E-commerce", "Booking System"],
      link: "#"
    },
    {
      title: "Archer Financial",
      description: "Professional advisory firm site with private client portal and appointment scheduling",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Client Portal", "Branding", "SEO"],
      link: "#"
    },
    {
      title: "Green Thumb Landscaping",
      description: "Service showcase site with gallery, testimonials, and quote request system for this local business",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Local SEO", "Portfolio", "Lead Generation"],
      link: "#"
    }
  ]);

  return (
    <section id="projects" className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.span 
            className="text-xs font-semibold tracking-wider text-blue uppercase inline-block mb-3 px-3 py-1 border border-blue/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Websites That <span className="bg-gradient-to-r from-blue via-blue-light to-blue-light bg-clip-text text-transparent">Drive Growth</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto mt-4"
          >
            Custom-crafted web experiences for businesses that want to stand out
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              key={index} 
              className="glass-effect rounded-lg overflow-hidden group hover:border-blue/30 transition-all hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue transition-colors">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-blue/10 text-blue-light rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-gradient text-white rounded-lg hover:shadow-lg hover:shadow-blue/20 transition-all hover:translate-y-[-2px] font-medium"
          >
            Ready to discuss your project?
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;