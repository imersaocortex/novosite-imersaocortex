"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingElements() {
  const { scrollYProgress } = useScroll();

  // Elementos cruzando a tela em diferentes velocidades
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-600%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["100%", "-800%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    // Z-50 coloca este container na FRENTE de todo o conteúdo da página
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      
      {/* HUD Circular Element */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[30%] right-[5%] w-64 h-64 border border-[#6CC417]/10 rounded-full flex items-center justify-center"
      >
        <div className="w-48 h-48 border-[2px] border-dashed border-[#6CC417]/20 rounded-full" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#6CC417]/30 to-transparent" />
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#6CC417]/30 to-transparent" />
      </motion.div>

      {/* Hexagonal Tech Node */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[80%] left-[10%] w-32 h-32"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-transparent stroke-[#6CC417]/30 stroke-[2px] drop-shadow-[0_0_10px_rgba(108,196,23,0.5)]">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
        </svg>
      </motion.div>

      {/* Floating Binary / Data Stream */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[120%] right-[20%] text-[#6CC417]/20 font-mono text-xs tracking-[0.3em] flex flex-col gap-2"
      >
        <span>01001011</span>
        <span>10110100</span>
        <span className="text-[#3a7a0a]/30">00101111</span>
        <span>11001010</span>
      </motion.div>

      {/* Partículas brilhantes voando */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[120%] left-[20%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[180%] left-[70%] w-3 h-3 bg-[#6CC417] rounded-full shadow-[0_0_20px_rgba(108,196,23,1)] blur-[1px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[250%] left-[40%] w-1.5 h-1.5 bg-[#6CC417] rounded-full shadow-[0_0_15px_rgba(108,196,23,1)]"
      />
    </div>
  );
}
