
const Hero = () => {
  return (
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
  );
};

export default Hero;
