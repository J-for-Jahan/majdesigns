import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-me" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-darkblue/95 backdrop-blur-xl py-3 shadow-lg border-b border-white/5" : "bg-transparent py-4 md:py-6"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-darkblue rounded-lg"
          aria-label="Go to homepage"
        >
          <span className="text-2xl md:text-3xl font-bold text-white display-font">
            MA<span className="text-blue-500">Jillani</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-8" role="menubar">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 focus:text-blue-400 transition-colors text-sm uppercase tracking-wider px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-darkblue rounded-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              role="menuitem"
              aria-current={window.location.hash === link.href ? 'page' : undefined}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            className="px-5 py-2.5 bg-blue-gradient text-white rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-darkblue"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            role="menuitem"
          >
            Get In Touch
          </motion.a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-darkblue rounded-lg p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          ref={menuRef}
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-[60px] inset-x-0 w-full bg-darkblue/95 backdrop-blur-xl shadow-xl py-5 border-b border-white/10 z-50 max-h-[80vh] overflow-y-auto"
          role="menu"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 focus:text-blue-400 transition-colors py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-darkblue rounded-lg"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                role="menuitem"
                aria-current={window.location.hash === link.href ? 'page' : undefined}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              className="px-4 py-2.5 bg-blue-gradient text-white rounded-lg font-medium transition-all text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-darkblue"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
              whileTap={{ scale: 0.95 }}
              role="menuitem"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
