
import { useState } from "react";
import { Github } from "lucide-react";

const Projects = () => {
  const [projects] = useState([
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern UI animations",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["TypeScript", "React", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for SaaS companies with real-time data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["NextJS", "Prisma", "PostgreSQL"],
      link: "#"
    }
  ]);

  return (
    <section id="projects" className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-bold text-white/5 pointer-events-none font-serif">
            WORK
          </div>
          <h2 className="text-4xl font-serif font-bold text-center mb-16">My <span className="text-purple">Projects</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              key={index} 
              className="glass-effect rounded-lg overflow-hidden group hover:border-purple/50 transition-all hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-purple transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-purple/10 text-purple-light rounded-md">
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
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 border border-purple text-purple rounded-md hover:bg-purple/10 hover:translate-y-[-2px] transition-all"
          >
            <Github className="mr-2 h-5 w-5" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
