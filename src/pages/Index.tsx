
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Background from "../components/Background";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Noise Overlay */}
      <Background />

      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
