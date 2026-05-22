"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollElementRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
}

export default function ScrollElementReveal({ 
  children, 
  className = "", 
  direction = "up",
  distance = 50,
  delay = 0,
  duration = 1.2
}: ScrollElementRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Use Intersection Observer for reliable dynamic layout-shift proof triggering
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-10% 0px -10% 0px" // Trigger when 10% of the element is visible in the viewport
  });

  // Calculate coordinates and subtle 3D pitch/yaw rotations based on direction
  const xOffset = direction === "left" ? distance : direction === "right" ? -distance : 0;
  const yOffset = direction === "up" ? distance : direction === "down" ? -distance : 0;
  
  const rotateXOffset = direction === "up" ? -6 : direction === "down" ? 6 : 0;
  const rotateYOffset = direction === "left" ? -6 : direction === "right" ? 6 : 0;

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.94,
      x: xOffset,
      y: yOffset,
      rotateX: rotateXOffset,
      rotateY: rotateYOffset,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      filter: "blur(0px)",
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Premium cinematic cubic-bezier deceleration curve
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
