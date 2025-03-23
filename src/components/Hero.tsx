
import { useEffect, useRef } from "react";
import { TextRotate } from "./ui/text-rotate";

const Hero = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  // Add cursor gradient effect
  useEffect(() => {
    const gradientElement = gradientRef.current;
    if (!gradientElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position
      const x = e.clientX;
      const y = e.clientY;
      
      // Create interactive gradient effect that follows cursor
      gradientElement.style.background = `radial-gradient(circle at ${x}px ${y}px, 
        rgba(139, 92, 246, 0.25) 0%, 
        rgba(147, 197, 253, 0.15) 35%, 
        rgba(15, 15, 26, 0) 70%)`;
    };

    // Add event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative z-10 px-6 py-20 md:py-32 min-h-screen flex items-center justify-center">
      {/* Cursor gradient overlay */}
      <div 
        ref={gradientRef} 
        className="fixed inset-0 pointer-events-none z-[5]"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto w-full text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <p className="text-purple-light font-mono mb-3">Hello, my name is</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              <span className="text-gradient">MA Jillani</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-300 font-serif font-bold mb-6">
              Creating websites that{" "}
              <span className="relative inline-block">
                <TextRotate 
                  texts={["convert", "impress", "perform", "engage", "deliver"]} 
                  rotationInterval={3000}
                  mainClassName="inline-block relative overflow-hidden bg-purple/20 px-3 py-1 rounded"
                  transition={{ 
                    type: "spring",
                    damping: 25,
                    stiffness: 300
                  }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                />
              </span>
              {" "}& grow your business
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              I'm a web developer and designer specializing in building exceptional digital 
              experiences that enhance your business's online presence and drive conversion. 
              My focus is on creating websites that not only look great but deliver real results.
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="#projects" className="px-8 py-3 bg-purple text-white rounded-md font-semibold hover:bg-purple/80 hover:translate-y-[-2px] transition-all">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3 border border-purple text-purple rounded-md font-semibold hover:bg-purple/10 hover:translate-y-[-2px] transition-all">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
