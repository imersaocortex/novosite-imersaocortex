"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function SectionReveal({ children, delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Trigger the entrance as soon as 12% of the section is visible in the viewport
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-12% 0px -12% 0px"
  });

  return (
    // No overflow-hidden on wrapper — that breaks fixed children and stacking context
    <div ref={ref} className="relative">
      {/* Zoom + fade + y reveal + cinematic blur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 50, filter: "blur(12px)" }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{
          duration: 1.4,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Cinematic decelerating easing curve
        }}
      >
        {children}
      </motion.div>

      {/* Scan line — sweeps across from left to right when the section enters the screen */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: "2px" }}>
        <motion.div
          initial={{ x: "-100%" }}
          animate={isInView ? { x: "100%" } : {}}
          transition={{
            duration: 1.3,
            delay: delay + 0.15,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6CC417]/70 to-transparent"
        />
      </div>
    </div>
  );
}
