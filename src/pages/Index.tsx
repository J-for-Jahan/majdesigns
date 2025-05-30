
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services"; 
import ProjectsShowcase from "../components/ProjectsShowcase";
import WhyChooseMe from "../components/WhyChooseMe";
import Testimonials from "../components/Testimonials";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-darkblue text-white relative overflow-hidden">
      {/* Noise Overlay */}
      <div className="fixed inset-0 noise-texture opacity-5 pointer-events-none z-0"></div>
      <Background />

      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <ProjectsShowcase />
      <WhyChooseMe />
      <Testimonials />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
