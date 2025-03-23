
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Code, PenTool, Figma, Terminal, 
  FileCode, Palette, LayoutDashboard, 
  MousePointer, Layers, Component 
} from "lucide-react";

interface FloatingIconProps {
  icon: React.ReactNode;
  index: number;
  totalIcons: number;
  radius: number;
  isRotating: boolean;
  setHoveredIndex: (index: number | null) => void;
  hoveredIndex: number | null;
}

const FloatingIcon = ({ 
  icon, 
  index,
  totalIcons,
  radius,
  isRotating,
  setHoveredIndex,
  hoveredIndex
}: FloatingIconProps) => {
  // Calculate position in the circle
  const angle = (index / totalIcons) * 2 * Math.PI;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  
  const isHovered = hoveredIndex === index;
  const iconControls = useAnimation();

  useEffect(() => {
    if (isRotating) {
      iconControls.start({
        x: `${x}%`,
        y: `${y}%`,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
  }, [iconControls, isRotating, x, y]);

  return (
    <motion.div
      className={cn(
        "absolute rounded-full p-3",
        "shadow-lg cursor-pointer transition-all duration-300",
        isHovered 
          ? "bg-purple border border-purple-light scale-125 z-20" 
          : "bg-white/5 backdrop-blur-sm border border-white/10"
      )}
      style={{ 
        width: 50, 
        height: 50,
        left: `${x}%`, 
        top: `${y}%`,
        transform: `translate(-50%, -50%)`,
      }}
      animate={iconControls}
      initial={{ x: `${x}%`, y: `${y}%`, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex items-center justify-center h-full">
        <div className={cn(
          "transition-colors duration-300",
          isHovered ? "text-white" : "text-purple-light"
        )}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

const FloatingIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const icons = [
    { icon: <Code size={24} /> },
    { icon: <PenTool size={24} /> },
    { icon: <Figma size={24} /> },
    { icon: <Terminal size={24} /> },
    { icon: <FileCode size={24} /> },
    { icon: <Palette size={24} /> },
    { icon: <LayoutDashboard size={24} /> },
    { icon: <MousePointer size={24} /> },
    { icon: <Layers size={24} /> },
    { icon: <Component size={24} /> },
  ];

  useEffect(() => {
    let animationId: number;
    const rotationSpeed = 0.05; // degrees per frame

    const animate = () => {
      if (isRotating && containerRef.current) {
        setRotation(prev => (prev + rotationSpeed) % 360);
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isRotating]);

  useEffect(() => {
    setIsRotating(hoveredIndex === null);
  }, [hoveredIndex]);

  // Calculate positions in a circle
  const radius = 35; // percentage of container

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[350px] flex items-center justify-center"
    >
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          icon={icon.icon}
          index={index}
          totalIcons={icons.length}
          radius={radius}
          isRotating={isRotating}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
