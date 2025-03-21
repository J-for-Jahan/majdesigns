
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
  );
};

export default Services;
