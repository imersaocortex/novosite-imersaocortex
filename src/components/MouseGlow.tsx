"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  // Spring suave com inércia
  const springX = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.4 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const baseStyle = {
    translateX: "-50%",
    translateY: "-50%",
    // Use position: fixed via style so transform doesn't break it
    position: "fixed" as const,
    top: 0,
    left: 0,
    pointerEvents: "none" as const,
  };

  return (
    // z-[55]: above sections, below navbar (z-[60])
    <div className="fixed inset-0 z-[55] pointer-events-none">

      {/* Large outer glow — 700px soft */}
      <motion.div
        style={{
          ...baseStyle,
          x: springX,
          y: springY,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,196,23,0.07) 0%, rgba(108,196,23,0.02) 45%, transparent 70%)",
        }}
      />

      {/* Medium glow — 240px vivid */}
      <motion.div
        style={{
          ...baseStyle,
          x: springX,
          y: springY,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,196,23,0.14) 0%, rgba(108,196,23,0.05) 50%, transparent 75%)",
        }}
      />

      {/* Tiny bright core dot */}
      <motion.div
        style={{
          ...baseStyle,
          x: springX,
          y: springY,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "rgba(108,196,23,0.3)",
          boxShadow: "0 0 16px 6px rgba(108,196,23,0.35)",
        }}
      />
    </div>
  );
}
