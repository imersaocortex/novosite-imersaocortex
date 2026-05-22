"use client";

import { motion } from "framer-motion";

export default function SectorsCarousel() {
  const sectors = [
    { icon: "🏢", name: "Corporativo" },
    { icon: "🛒", name: "E-commerce" },
    { icon: "🎓", name: "Educação" },
    { icon: "🏥", name: "Saúde" },
    { icon: "🏗️", name: "Arquitetura" },
    { icon: "🎨", name: "Arte & Cultura" },
    { icon: "🏭", name: "Indústria" },
    { icon: "📱", name: "Tecnologia" }
  ];

  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl font-medium tracking-tight text-white/80">Setores que Atendemos</h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
        
        {/* Animated Track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-8 w-max px-4"
        >
          {/* Repeat array twice for seamless loop */}
          {[...sectors, ...sectors].map((sector, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 whitespace-nowrap hover:bg-white/10 transition-colors"
            >
              <span className="text-2xl">{sector.icon}</span>
              <span className="text-lg font-medium text-white/90">{sector.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Right fade */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
      </div>
    </section>
  );
}
