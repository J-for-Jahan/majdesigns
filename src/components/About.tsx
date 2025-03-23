
import { 
  Code, Figma, LayoutDashboard, Lightbulb, MessagesSquare, 
  Palette, PencilRuler, Rocket, Users, Zap 
} from "lucide-react";
import ScrollRevealText from "./ui/scroll-reveal-text";
import FloatingIcons from "./ui/floating-icons";
import HorizontalTimeline from "./ui/horizontal-timeline";

const workflowSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: "I begin with understanding your business goals, audience, and requirements through detailed consultations and research.",
    icon: <Lightbulb size={24} className="text-white" />
  },
  {
    id: 2,
    title: "Client Onboarding",
    description: "Setting up communication channels, project timelines, and deliverables to ensure smooth collaboration throughout the project.",
    icon: <Users size={24} className="text-white" />
  },
  {
    id: 3,
    title: "Wireframing",
    description: "Creating structural blueprints of your website focusing on layout, user flow, and functionality before visual elements are added.",
    icon: <PencilRuler size={24} className="text-white" />
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Developing visually stunning interfaces with intuitive navigation and engaging interactions to captivate users.",
    icon: <Palette size={24} className="text-white" />
  },
  {
    id: 5,
    title: "Development",
    description: "Transforming designs into fully functional websites using modern frameworks and clean code that performs optimally across devices.",
    icon: <Code size={24} className="text-white" />
  },
  {
    id: 6,
    title: "Testing & Refinement",
    description: "Rigorous testing across browsers and devices to ensure performance, responsiveness, and accessibility of your website.",
    icon: <Zap size={24} className="text-white" />
  },
  {
    id: 7,
    title: "Launch & Support",
    description: "Deploying your website and providing ongoing maintenance, updates, and support to ensure continued success.",
    icon: <Rocket size={24} className="text-white" />
  }
];

const About = () => {
  return (
    <section id="about" className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl md:text-9xl font-bold text-white/5 pointer-events-none font-serif">
            ABOUT
          </div>
          <h2 className="text-4xl font-serif font-bold text-center mb-16">About <span className="text-purple">Me</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column with scroll reveal text */}
          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">My Background</h3>
            
            <ScrollRevealText 
              text="With over 5 years of experience in web development, I've partnered with clients across industries to bring their ideas to life. I combine technical expertise with creative design to create innovative, high-performing websites that exceed expectations and drive real business results."
              className="text-xl md:text-2xl text-gray-200 leading-relaxed font-serif"
              threshold={0.1}
            />
            
            <div className="mt-12">
              <h4 className="text-xl font-serif font-bold mb-6 text-purple-light">Tech & Design Tools</h4>
              <FloatingIcons />
            </div>
          </div>
          
          {/* Right column with horizontal timeline */}
          <div>
            <div className="glass-effect p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-serif font-bold mb-6">My Approach</h3>
              <p className="text-gray-300 mb-6">
                I follow a proven process that ensures your project is delivered on time, on budget, and exceeds expectations.
                Swipe through the timeline below to see how we'll work together:
              </p>
              
              <HorizontalTimeline steps={workflowSteps} className="mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
