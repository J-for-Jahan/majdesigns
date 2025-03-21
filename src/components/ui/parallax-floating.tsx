
"use client"

import React, { useRef, useState, useEffect, ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingProps {
  children: ReactNode
  className?: string
  sensitivity?: number
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  depth?: number
}

const Floating = ({ 
  children, 
  className,
  sensitivity = 0.1 
}: FloatingProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState({ width: 0, height: 0 })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 90 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (!ref.current) return
    
    const handleResize = () => {
      if (ref.current) {
        setBounds({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        })
      }
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const { left, top } = ref.current.getBoundingClientRect()
    
    const x = (e.clientX - left) / bounds.width - 0.5
    const y = (e.clientY - top) / bounds.height - 0.5
    
    mouseX.set(x * sensitivity)
    mouseY.set(y * sensitivity)
  }

  return (
    <motion.div 
      ref={ref}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingContext.Provider value={{ springX, springY }}>
        {children}
      </FloatingContext.Provider>
    </motion.div>
  )
}

interface FloatingContextProps {
  springX: any
  springY: any
}

const FloatingContext = React.createContext<FloatingContextProps | null>(null)

const FloatingElement = ({ 
  children, 
  className,
  depth = 1 
}: FloatingElementProps) => {
  const context = React.useContext(FloatingContext)
  
  if (!context) {
    throw new Error("FloatingElement must be used within a Floating component")
  }
  
  const { springX, springY } = context
  
  return (
    <motion.div
      className={cn("absolute", className)}
      style={{
        x: springX.to((x: number) => x * 100 * depth),
        y: springY.to((y: number) => y * 100 * depth),
      }}
    >
      {children}
    </motion.div>
  )
}

export { FloatingElement }
export default Floating
