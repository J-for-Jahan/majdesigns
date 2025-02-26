
import { useState } from "react";
import { Plane, Map, Calendar, Hotel, Car, Compass, MessageCircle } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Plane className="w-8 h-8 text-neon" />,
      title: "Flight Planning",
      description: "AI-powered flight routing optimization for the most efficient travel experience.",
    },
    {
      icon: <Hotel className="w-8 h-8 text-neon" />,
      title: "Accommodation",
      description: "Smart hotel recommendations based on your preferences and past stays.",
    },
    {
      icon: <Map className="w-8 h-8 text-neon" />,
      title: "Itinerary Planning",
      description: "Personalized travel schedules crafted by AI for seamless adventures.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-neon" />,
      title: "Smart Scheduling",
      description: "Dynamic travel timing optimization using real-time data and AI predictions.",
    },
    {
      icon: <Car className="w-8 h-8 text-neon" />,
      title: "Transport",
      description: "Integrated transportation solutions for smooth travel connections.",
    },
    {
      icon: <Compass className="w-8 h-8 text-neon" />,
      title: "Local Experiences",
      description: "AI-curated local activities and hidden gems for authentic experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20 animate-grid-fade">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-neon/10" />
        ))}
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />

      {/* Navbar */}
      <nav className="relative z-10 px-6 py-4 flex items-center justify-between backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-2">
          <Compass className="w-8 h-8 text-neon" />
          <span className="text-xl font-bold">TravelAI</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-neon transition-colors">Home</a>
          <a href="#" className="hover:text-neon transition-colors">Services</a>
          <a href="#" className="hover:text-neon transition-colors">About</a>
          <a href="#" className="hover:text-neon transition-colors">Contact</a>
        </div>
        <button className="px-4 py-2 bg-neon text-black rounded-full hover:bg-neon/90 transition-colors">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          AI-Powered
          <span className="text-neon"> Travel Planning</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Experience the future of travel with our AI-driven planning system.
          Perfect itineraries, personalized recommendations, and seamless booking.
        </p>
        <div className="animate-float">
          <button className="px-8 py-3 bg-neon text-black rounded-full text-lg font-semibold hover:bg-neon/90 transition-colors">
            Plan Your Trip
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-bold text-white/5 pointer-events-none">
            SERVICES
          </div>
          <h2 className="text-4xl font-bold text-center mb-16">Our <span className="text-neon">Services</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-neon/50 transition-all hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Let's Plan Your
            <span className="text-neon"> Next Adventure</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of happy travelers who have discovered the power of AI-driven travel planning.
          </p>
          <button className="px-8 py-3 bg-neon text-black rounded-full text-lg font-semibold hover:bg-neon/90 transition-colors flex items-center mx-auto">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Planning
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
