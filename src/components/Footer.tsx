
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
