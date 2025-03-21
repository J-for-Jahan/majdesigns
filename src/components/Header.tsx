
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default Header;
