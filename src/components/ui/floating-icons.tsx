
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Code, PenTool, Figma, Terminal, 
  FileCode, Palette, LayoutDashboard, 
  MousePointer, Layers, Component 
} from "lucide-react";

interface FloatingIconProps {
  icon: React.ReactNode;
  x: number;
  y: number;
  size?: number;
  delay?: number;
  duration?: number;
  interactive?: boolean;
}

const FloatingIcon = ({ 
  icon, 
  x, 
  y, 
  size = 40, 
  delay = 0, 
  duration = 20,
  interactive = true
}: FloatingIconProps) => {
  const iconRef = useRef<HTMLDivElement>(null);

  // Mouse interactivity
  useEffect(() => {
    if (!interactive || !iconRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!iconRef.current) return;
      
      const rect = iconRef.current.getBoundingClientRect();
      const iconCenterX = rect.left + rect.width / 2;
      const iconCenterY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - iconCenterX;
      const distanceY = e.clientY - iconCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Only apply effect if cursor is within 200px
      if (distance < 200) {
        const strength = 1 - distance / 200; // 0 to 1, inverse of distance
        const moveX = distanceX * strength * 0.4; // Adjust these values to control effect strength
        const moveY = distanceY * strength * 0.4;
        
        iconRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        iconRef.current.style.transform = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  return (
    <motion.div
      ref={iconRef}
      className={cn(
        "absolute rounded-full bg-white/5 backdrop-blur-sm p-3",
        "shadow-lg border border-white/10 cursor-pointer",
        "hover:bg-white/15 transition-colors duration-300"
      )}
      style={{ 
        width: size, 
        height: size,
        left: `${x}%`, 
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
      <div className="flex items-center justify-center h-full text-purple-light">
        {icon}
      </div>
    </motion.div>
  );
};

const FloatingIcons = () => {
  // Define icon positions as percentages
  const icons = [
    { icon: <Code size={24} />, x: 15, y: 20, delay: 0.1 },
    { icon: <PenTool size={24} />, x: 80, y: 25, delay: 0.3 },
    { icon: <Figma size={24} />, x: 25, y: 65, delay: 0.5 },
    { icon: <Terminal size={24} />, x: 70, y: 70, delay: 0.2 },
    { icon: <FileCode size={24} />, x: 40, y: 30, delay: 0.4 },
    { icon: <Palette size={24} />, x: 60, y: 40, delay: 0.6 },
    { icon: <LayoutDashboard size={24} />, x: 30, y: 45, delay: 0.7 },
    { icon: <MousePointer size={24} />, x: 75, y: 55, delay: 0.3 },
    { icon: <Layers size={24} />, x: 50, y: 70, delay: 0.5 },
    { icon: <Component size={24} />, x: 20, y: 80, delay: 0.4 },
  ];

  return (
    <div className="relative w-full h-[400px]">
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          icon={icon.icon}
          x={icon.x}
          y={icon.y}
          delay={icon.delay}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
