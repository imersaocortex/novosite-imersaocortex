"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Ícones 3D SVG para cada tipo de AR
const ARIcons = {
  store: (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Caixa 3D isométrica - produto em loja */}
      <motion.polygon
        points="50,15 80,32 80,68 50,85"
        fill="rgba(108,196,23,0.15)"
        stroke="rgba(108,196,23,0.8)"
        strokeWidth="1.5"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.polygon
        points="50,15 20,32 20,68 50,85"
        fill="rgba(108,196,23,0.08)"
        stroke="rgba(108,196,23,0.5)"
        strokeWidth="1.5"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.polygon
        points="20,32 50,15 80,32 50,50"
        fill="rgba(108,196,23,0.25)"
        stroke="rgba(108,196,23,0.9)"
        strokeWidth="1.5"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
      />
      {/* Linhas de escaneamento AR */}
      <motion.line x1="20" y1="40" x2="80" y2="40" stroke="rgba(108,196,23,0.4)" strokeWidth="0.8" strokeDasharray="3,3"
        animate={{ x1: [20, 20], y1: [35, 65], x2: [80, 80], y2: [35, 65] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
      />
      {/* Scan corner marks */}
      <motion.path d="M22,22 L22,30 L30,30" stroke="rgba(108,196,23,0.9)" strokeWidth="2" fill="none"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.path d="M78,22 L78,30 L70,30" stroke="rgba(108,196,23,0.9)" strokeWidth="2" fill="none"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      />
      <motion.path d="M22,78 L22,70 L30,70" stroke="rgba(108,196,23,0.9)" strokeWidth="2" fill="none"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
      />
      <motion.path d="M78,78 L78,70 L70,70" stroke="rgba(108,196,23,0.9)" strokeWidth="2" fill="none"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
      />
    </svg>
  ),

  book: (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Livro 3D aberto */}
      <motion.path
        d="M20,25 L50,20 L80,25 L80,75 L50,80 L20,75 Z"
        fill="rgba(108,196,23,0.05)"
        stroke="rgba(108,196,23,0.6)"
        strokeWidth="1.5"
        animate={{ scaleY: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Spine */}
      <motion.line x1="50" y1="20" x2="50" y2="80" stroke="rgba(108,196,23,0.9)" strokeWidth="1.5"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Text lines left page */}
      {[32, 40, 48, 56, 64].map((y, i) => (
        <motion.line key={i} x1="24" y1={y} x2="46" y2={y}
          stroke="rgba(108,196,23,0.3)" strokeWidth="1"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
      {/* AR star burst coming out of right page */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "65px 50px" }}
      >
        {[0, 45, 90, 135].map((angle, i) => (
          <motion.line key={i}
            x1={65 + Math.cos((angle * Math.PI) / 180) * 14}
            y1={50 + Math.sin((angle * Math.PI) / 180) * 14}
            x2={65 + Math.cos(((angle + 180) * Math.PI) / 180) * 14}
            y2={50 + Math.sin(((angle + 180) * Math.PI) / 180) * 14}
            stroke="rgba(108,196,23,0.7)" strokeWidth="1.5"
          />
        ))}
      </motion.g>
      <motion.circle cx="65" cy="50" r="5" fill="rgba(108,196,23,0.4)" stroke="rgba(108,196,23,1)" strokeWidth="1"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  ),

  architecture: (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Prédio 3D simplificado */}
      {/* Front face */}
      <motion.rect x="30" y="35" width="30" height="45" fill="rgba(108,196,23,0.08)" stroke="rgba(108,196,23,0.7)" strokeWidth="1.5"
        animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Top face */}
      <motion.polygon points="30,35 45,22 75,22 60,35" fill="rgba(108,196,23,0.2)" stroke="rgba(108,196,23,0.9)" strokeWidth="1.5"
        animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
      />
      {/* Right face */}
      <motion.polygon points="60,35 75,22 75,67 60,80" fill="rgba(108,196,23,0.05)" stroke="rgba(108,196,23,0.5)" strokeWidth="1.5"
        animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
      />
      {/* Windows */}
      {[[35,42],[35,54],[35,66],[45,42],[45,54],[45,66]].map(([x,y], i) => (
        <motion.rect key={i} x={x} y={y} width="6" height="7" fill="rgba(108,196,23,0.4)"
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {/* Scan plane */}
      <motion.line x1="20" y1="50" x2="80" y2="50" stroke="rgba(108,196,23,0.6)" strokeWidth="0.8" strokeDasharray="4,4"
        animate={{ y1: [28, 82], y2: [28, 82] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
      />
    </svg>
  ),

  event: (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Central orb with orbiting rings */}
      <motion.circle cx="50" cy="50" r="12" fill="rgba(108,196,23,0.2)" stroke="rgba(108,196,23,0.9)" strokeWidth="2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle cx="50" cy="50" r="5" fill="rgba(108,196,23,0.8)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Orbit ring 1 */}
      <motion.ellipse cx="50" cy="50" rx="28" ry="10" stroke="rgba(108,196,23,0.4)" strokeWidth="1.5" fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50px 50px" }}
      />
      {/* Orbit ring 2 - tilted */}
      <motion.ellipse cx="50" cy="50" rx="22" ry="8" stroke="rgba(108,196,23,0.3)" strokeWidth="1.5" fill="none"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50px 50px", transform: "rotateX(60deg)" }}
      />
      {/* Orbiting dots */}
      {[0, 120, 240].map((deg, i) => (
        <motion.circle key={i} cx={50 + 28 * Math.cos((deg * Math.PI) / 180)} cy={50 + 10 * Math.sin((deg * Math.PI) / 180)} r="3"
          fill="rgba(108,196,23,1)"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: (i * 4) / 3 }}
          style={{ transformOrigin: "50px 50px" }}
        />
      ))}
      {/* Radiating lines */}
      {[30, 90, 150, 210, 270, 330].map((angle, i) => (
        <motion.line key={i}
          x1={50 + 15 * Math.cos((angle * Math.PI) / 180)}
          y1={50 + 15 * Math.sin((angle * Math.PI) / 180)}
          x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
          stroke="rgba(108,196,23,0.3)" strokeWidth="1"
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.33 }}
        />
      ))}
    </svg>
  ),
};

const iconKeys = ["store", "book", "architecture", "event"] as const;

export default function ARExamples() {
  const examples = [
    {
      title: "AR para Lojas",
      description: "Permita que clientes visualizem produtos em 3D em seus ambientes antes de comprar.",
      bgImage: "bg-gradient-to-br from-[#6CC417]/20 to-black",
      link: "https://wa.me/5581989077025",
      iconKey: "store" as const,
    },
    {
      title: "Livros Interativos",
      description: "Transforme livros em experiências imersivas com conteúdo AR.",
      bgImage: "bg-gradient-to-br from-[#3a7a0a]/30 to-black",
      link: "https://wa.me/5581989077025",
      iconKey: "book" as const,
    },
    {
      title: "AR Arquitetônica",
      description: "Visualize projetos arquitetônicos em escala real no local.",
      bgImage: "bg-gradient-to-br from-[#6CC417]/15 to-black",
      link: "https://wa.me/5581989077025",
      iconKey: "architecture" as const,
    },
    {
      title: "Eventos & Marketing",
      description: "Crie experiências memoráveis em eventos com AR interativa.",
      bgImage: "bg-gradient-to-br from-[#3a7a0a]/25 to-black",
      link: "https://wa.me/5581989077025",
      iconKey: "event" as const,
    },
  ];

  return (
    <section id="exemplos-ar" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium tracking-widest mb-6">
              VEJA EM AÇÃO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white/90 mb-4">
              Exemplos de AR
            </h2>
            <p className="text-xl text-white/50 font-light max-w-2xl">
              Confira alguns exemplos de como a AR pode transformar seu negócio
            </p>
          </div>

          <a
            href="https://wa.me/5581989077025"
            className="px-8 py-4 rounded-full bg-[#6CC417] text-white font-semibold hover:bg-[#5aab12] hover:scale-105 transition-all shadow-[0_0_20px_rgba(108,196,23,0.4)] shrink-0"
          >
            Solicitar Demonstração
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, i) => (
            <motion.a
              href={example.link}
              target="_blank"
              rel="noreferrer"
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative h-80 rounded-3xl overflow-hidden ${example.bgImage} border border-white/10 flex flex-col justify-end p-8 cursor-pointer hover:border-[#6CC417]/50 transition-all hover:shadow-[0_0_40px_rgba(108,196,23,0.15)]`}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-90" />

              {/* 3D Icon — top right, no rotation */}
              <div
                className="absolute top-6 right-6 w-24 h-24 drop-shadow-[0_0_20px_rgba(108,196,23,0.5)]"
              >
                {ARIcons[example.iconKey]}
              </div>

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(108,196,23,0.04) 50%, transparent 100%)",
                  backgroundSize: "100% 60px",
                }}
                animate={{ backgroundPositionY: ["0px", "320px"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Grid overlay — tech feel */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(108,196,23,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,196,23,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-3xl font-bold text-white/90 group-hover:text-white transition-colors">
                    {example.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#6CC417]/20 border border-[#6CC417]/50 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <ExternalLink className="w-5 h-5 text-[#6CC417]" />
                  </div>
                </div>
                <p className="text-white/60 font-light max-w-md">
                  {example.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
