
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, 
  SiTypescript, SiFigma, SiAdobephotoshop, 
  SiVercel, SiGithub, SiMiro, SiFramer 
} from "react-icons/si";

interface FloatingIconProps {
  icon: React.ReactNode;
  color: string;
  index: number;
  totalIcons: number;
  radius: number;
  isRotating: boolean;
  setHoveredIndex: (index: number | null) => void;
  hoveredIndex: number | null;
}

const FloatingIcon = ({ 
  icon, 
  color,
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
    iconControls.start({
      x: `${x}%`,
      y: `${y}%`,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  }, [iconControls, x, y, isRotating]);

  return (
    <motion.div
      className={cn(
        "absolute rounded-full p-3",
        "shadow-lg cursor-pointer transition-all duration-300",
        isHovered 
          ? "bg-white scale-150 z-20" 
          : "bg-white/5 backdrop-blur-sm border border-white/10"
      )}
      style={{ 
        width: 50, 
        height: 50,
        left: `calc(${x}% - 25px)`, 
        top: `calc(${y}% - 25px)`,
      }}
      animate={iconControls}
      initial={{ x: `calc(${x}% - 25px)`, y: `calc(${y}% - 25px)`, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex items-center justify-center h-full">
        <div 
          className={cn(
            "transition-colors duration-300 text-xl",
            isHovered ? `text-[${color}]` : "text-gray-400"
          )}
          style={{ color: isHovered ? color : undefined }}
        >
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
    { icon: <SiReact size={24} />, color: "#61DAFB" },
    { icon: <SiNextdotjs size={24} />, color: "#000000" },
    { icon: <SiTailwindcss size={24} />, color: "#06B6D4" },
    { icon: <SiTypescript size={24} />, color: "#3178C6" },
    { icon: <SiFigma size={24} />, color: "#F24E1E" },
    { icon: <SiAdobephotoshop size={24} />, color: "#31A8FF" },
    { icon: <SiVercel size={24} />, color: "#000000" },
    { icon: <SiGithub size={24} />, color: "#181717" },
    { icon: <SiMiro size={24} />, color: "#050038" },
    { icon: <SiFramer size={24} />, color: "#0055FF" },
  ];

  useEffect(() => {
    let animationId: number;
    const rotationSpeed = 0.05; // degrees per frame
    const iconElements = document.querySelectorAll(".floating-icon");
    const centerX = 50;
    const centerY = 50;
    const radius = 35; // percentage of container

    const animate = () => {
      if (isRotating) {
        setRotation(prev => {
          const newRotation = (prev + rotationSpeed) % 360;
          
          // Update each icon position
          iconElements.forEach((element, index) => {
            if (hoveredIndex !== null) return; // Don't update if an icon is hovered
            
            const angle = ((index / icons.length) * 2 * Math.PI) + (newRotation * (Math.PI / 180));
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            const el = element as HTMLElement;
            el.style.left = `calc(${x}% - 25px)`;
            el.style.top = `calc(${y}% - 25px)`;
          });
          
          return newRotation;
        });
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isRotating, icons.length, hoveredIndex]);

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
          color={icon.color}
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
