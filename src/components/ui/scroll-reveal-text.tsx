
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  threshold?: number;
}

const ScrollRevealText = ({ text, className = "", threshold = 0.1 }: ScrollRevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, disconnect the observer
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold]);

  // Split text into words
  const words = text.split(" ");

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default ScrollRevealText;
