
import { useState, useEffect } from "react";
import { 
  Code, 
  Compass, 
  Layout, 
  Smartphone, 
  Server, 
  Database, 
  PenTool, 
  Terminal, 
  Layers, 
  Github, 
  Linkedin, 
  Mail, 
  Send
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState([
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

  const services = [
    {
      icon: <Layout className="w-8 h-8 text-purple-light" />,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that delight users and achieve business goals.",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-light" />,
      title: "Frontend Development",
      description: "Building responsive, fast, and accessible web applications with modern frameworks.",
    },
    {
      icon: <Server className="w-8 h-8 text-purple-light" />,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs to power your digital products.",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-light" />,
      title: "Database Design",
      description: "Architecting efficient database structures for optimal performance and scalability.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-light" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile solutions that provide native-like experiences.",
    },
    {
      icon: <Terminal className="w-8 h-8 text-purple-light" />,
      title: "DevOps",
      description: "Implementing CI/CD pipelines and infrastructure as code for seamless deployments.",
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-dark/80 border-b border-white/10">
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:text-purple transition-colors">Home</a>
          <a href="#about" className="hover:text-purple transition-colors">About</a>
          <a href="#projects" className="hover:text-purple transition-colors">Projects</a>
          <a href="#services" className="hover:text-purple transition-colors">Services</a>
        </div>
        
        <div className="font-serif text-3xl font-bold text-center">
          <span className="text-purple">jJ.</span>
        </div>
        
        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2 bg-purple text-white rounded-md hover:bg-purple-dark transition-colors">
            Contact me
          </a>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark backdrop-blur-lg md:hidden">
          <div className="flex flex-col h-full justify-center items-center space-y-8 text-xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-purple transition-colors">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-purple transition-colors">About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-purple transition-colors">Projects</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-purple transition-colors">Services</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-purple transition-colors">Contact</a>
            <button 
              className="absolute top-4 right-6" 
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative z-10 px-6 py-20 md:py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <p className="text-purple-light font-mono mb-3">Hello, my name is</p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                <span className="text-gradient">MA Jillani</span>
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-300 font-serif font-bold mb-6">
                Creating websites that convert & grow your business
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                I'm a web developer and designer specializing in building exceptional digital 
                experiences that enhance your business's online presence and drive conversion. 
                My focus is on creating websites that not only look great but deliver real results.
              </p>
              <div className="flex space-x-4">
                <a href="#projects" className="px-8 py-3 bg-purple text-white rounded-md font-semibold hover:bg-purple/80 hover:translate-y-[-2px] transition-all">
                  View My Work
                </a>
                <a href="#contact" className="px-8 py-3 border border-purple text-purple rounded-md font-semibold hover:bg-purple/10 hover:translate-y-[-2px] transition-all">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-blue-light opacity-20 blur-2xl animate-pulse-slow"></div>
                <div className="absolute inset-0 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-purple to-blue-light p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                        alt="MA Jillani" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-bold text-white/5 pointer-events-none font-serif">
              ABOUT
            </div>
            <h2 className="text-4xl font-serif font-bold text-center mb-16">About <span className="text-purple">Me</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">My Background</h3>
              <p className="text-gray-300 mb-4">
                With over 5 years of experience in web development, I've worked on a wide range of projects from small business websites to large-scale enterprise applications. My passion lies in creating clean, efficient, and user-friendly interfaces that provide exceptional user experiences and drive business growth.
              </p>
              <p className="text-gray-300 mb-6">
                I graduated with a degree in Computer Science and have since dedicated myself to mastering modern web technologies. I believe in continuous learning and staying up-to-date with the latest industry trends and best practices to deliver solutions that truly make a difference.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-purple-light font-bold mb-2 font-serif">Frontend</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript (ES6+)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-purple-light font-bold mb-2 font-serif">Backend</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL / MongoDB</li>
                    <li>REST / GraphQL</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-effect p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-serif font-bold mb-4">My Approach</h3>
                <p className="text-gray-300">
                  I approach each project with a focus on your business goals, user needs, and conversion optimization. My development process emphasizes clean code, performance, and accessibility, ensuring your website not only looks great but also converts visitors into customers. I believe in collaborative development and clear communication throughout the project lifecycle.
                </p>
              </div>
              
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-4">Education & Experience</h3>
                <div className="mb-4">
                  <h4 className="text-purple-light font-semibold font-serif">Senior Frontend Developer | TechCorp</h4>
                  <p className="text-gray-400">2020 - Present</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-purple-light font-semibold font-serif">Web Developer | DigitalAgency</h4>
                  <p className="text-gray-400">2018 - 2020</p>
                </div>
                <div>
                  <h4 className="text-purple-light font-semibold font-serif">BSc Computer Science | Tech University</h4>
                  <p className="text-gray-400">2014 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-bold text-white/5 pointer-events-none font-serif">
              SERVICES
            </div>
            <h2 className="text-4xl font-serif font-bold text-center mb-16">My <span className="text-purple">Services</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg glass-effect hover:border-purple/50 transition-all hover:translate-y-[-5px]"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-bold text-white/5 pointer-events-none font-serif">
              CONTACT
            </div>
            <h2 className="text-4xl font-serif font-bold text-center mb-16">Get In <span className="text-purple">Touch</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-purple mr-4" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:hello@majillani.com" className="text-purple-light hover:text-purple transition-colors">
                      hello@majillani.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="w-6 h-6 text-purple mr-4" />
                  <div>
                    <p className="text-gray-400">LinkedIn</p>
                    <a href="https://linkedin.com/in/majillani" target="_blank" rel="noopener noreferrer" className="text-purple-light hover:text-purple transition-colors">
                      linkedin.com/in/majillani
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Github className="w-6 h-6 text-purple mr-4" />
                  <div>
                    <p className="text-gray-400">GitHub</p>
                    <a href="https://github.com/majillani" target="_blank" rel="noopener noreferrer" className="text-purple-light hover:text-purple transition-colors">
                      github.com/majillani
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full p-3 bg-dark border border-white/10 rounded-md focus:outline-none focus:border-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full p-3 bg-dark border border-white/10 rounded-md focus:outline-none focus:border-purple"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project inquiry"
                    className="w-full p-3 bg-dark border border-white/10 rounded-md focus:outline-none focus:border-purple"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    className="w-full p-3 bg-dark border border-white/10 rounded-md focus:outline-none focus:border-purple"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-purple text-white rounded-md font-semibold hover:bg-purple/80 hover:translate-y-[-2px] transition-all flex items-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-serif text-2xl font-bold mb-4">
                <span className="text-purple">jJ.</span>
              </div>
              <p className="text-gray-400 mb-4">
                Creating exceptional websites that convert visitors into customers and grow your business.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/majillani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/majillani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:hello@majillani.com" className="text-gray-400 hover:text-purple transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-purple transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-purple transition-colors">Projects</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-purple transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-serif font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MA Jillani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
