"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket } from "lucide-react";

import ScrollElementReveal from "./ScrollElementReveal";

export default function AboutSection() {
  const values = [
    {
      title: "Pensamento Criativo",
      description: "Soluções inovadoras e fora da caixa para cada desafio.",
      icon: Lightbulb
    },
    {
      title: "Foco em Resultados",
      description: "Compromisso com entregas que geram valor real.",
      icon: Target
    },
    {
      title: "Inovação Contínua",
      description: "Sempre atualizados com as últimas tecnologias.",
      icon: Rocket
    }
  ];

  return (
    <section id="sobre" className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#6CC417]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <ScrollElementReveal direction="up" distance={30} className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium tracking-widest mb-6">
          SOBRE NÓS
        </ScrollElementReveal>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <ScrollElementReveal direction="right" distance={50}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white/90 mb-6">
              A Inovação Digital
            </h2>
            <h3 className="text-2xl font-light text-white/70 mb-8">
              Conheça nossa história e propósito
            </h3>
            
            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed mb-12">
              <p>
                Somos uma agência de inovação digital especializada em criar experiências únicas através da Realidade Aumentada, Inteligência Artificial e tecnologias web avançadas.
              </p>
              <p>
                Nossa missão é transformar a forma como empresas se conectam com seus clientes, oferecendo soluções tecnológicas que vão além do convencional.
              </p>
            </div>

            <div className="h-64 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 relative overflow-hidden flex items-center justify-center group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#6CC417] shadow-[0_0_20px_rgba(108,196,23,0.8)]" />
              
              {/* Technological Core Element */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Outer rotating dashed ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#6CC417]/30"
                />
                
                {/* Inner counter-rotating ring */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#6CC417]/60 border-b-[#3a7a0a]/60"
                />
                
                {/* Core pulsating orb */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-gradient-to-tr from-[#6CC417] to-[#3a7a0a] rounded-full blur-[8px]"
                />
                <div className="absolute w-8 h-8 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
                </div>
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            </div>
          </ScrollElementReveal>

          <ScrollElementReveal direction="left" distance={50} className="flex flex-col gap-6">
            {values.map((val, i) => (
              <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6CC417]/20 to-[#3a7a0a]/20 border border-[#6CC417]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(108,196,23,0.3)] group-hover:shadow-[0_0_30px_rgba(108,196,23,0.5)]">
                  <val.icon className="w-6 h-6 text-[#6CC417] drop-shadow-[0_0_8px_rgba(108,196,23,0.8)]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white/90 mb-2">{val.title}</h4>
                  <p className="text-white/50">{val.description}</p>
                </div>
              </div>
            ))}
          </ScrollElementReveal>

        </div>
      </div>
    </section>
  );
}
