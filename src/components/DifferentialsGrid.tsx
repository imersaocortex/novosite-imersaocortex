"use client";

import { motion } from "framer-motion";
import { Users, Zap, Headphones, TrendingUp } from "lucide-react";
import TiltCard from "./TiltCard";

// SVG gráfico: fluxo de automação (nós e conectores)
const AutomationFlowGraphic = () => (
  <svg viewBox="0 0 220 100" className="w-full h-full" fill="none">
    {/* Nodes */}
    {[
      { cx: 20, cy: 50, label: "INPUT" },
      { cx: 80, cy: 25, label: "AI" },
      { cx: 80, cy: 75, label: "RPA" },
      { cx: 145, cy: 50, label: "EXEC" },
      { cx: 200, cy: 50, label: "OUT" },
    ].map((node, i) => (
      <g key={i}>
        <motion.circle
          cx={node.cx} cy={node.cy} r="14"
          fill="rgba(108,196,23,0.1)"
          stroke="rgba(108,196,23,0.7)"
          strokeWidth="1.5"
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
          style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
        />
        <text x={node.cx} y={node.cy + 4} textAnchor="middle"
          fontSize="5.5" fill="rgba(108,196,23,0.9)" fontFamily="monospace" fontWeight="bold">
          {node.label}
        </text>
      </g>
    ))}

    {/* Connectors with animated pulses */}
    {[
      { x1: 34, y1: 44, x2: 66, y2: 29 },
      { x1: 34, y1: 56, x2: 66, y2: 71 },
      { x1: 94, y1: 31, x2: 131, y2: 47 },
      { x1: 94, y1: 69, x2: 131, y2: 53 },
      { x1: 159, y1: 50, x2: 186, y2: 50 },
    ].map((line, i) => (
      <g key={i}>
        <line {...line} stroke="rgba(108,196,23,0.2)" strokeWidth="1.5" strokeDasharray="4,3" />
        <motion.circle r="3" fill="rgba(108,196,23,1)"
          animate={{
            cx: [line.x1, line.x2],
            cy: [line.y1, line.y2],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
        />
      </g>
    ))}
  </svg>
);

// SVG gráfico: rede de pessoas (Time Especializado)
const TeamGraphic = () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
    {/* Central node */}
    <motion.circle cx="40" cy="30" r="10"
      fill="rgba(108,196,23,0.15)" stroke="rgba(108,196,23,0.9)" strokeWidth="1.5"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      style={{ transformOrigin: "40px 30px" }}
    />
    <circle cx="40" cy="26" r="4" fill="rgba(108,196,23,0.5)" />
    <path d="M32,38 Q40,34 48,38" stroke="rgba(108,196,23,0.7)" strokeWidth="1.5" fill="none" />

    {/* Satellite nodes */}
    {[
      { cx: 12, cy: 12 }, { cx: 68, cy: 12 },
      { cx: 12, cy: 50 }, { cx: 68, cy: 50 },
    ].map((n, i) => (
      <g key={i}>
        <motion.line x1={40} y1={30} x2={n.cx} y2={n.cy}
          stroke="rgba(108,196,23,0.25)" strokeWidth="1" strokeDasharray="3,3"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
        <motion.circle cx={n.cx} cy={n.cy} r="7"
          fill="rgba(108,196,23,0.08)" stroke="rgba(108,196,23,0.5)" strokeWidth="1"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        />
        <circle cx={n.cx} cy={n.cy - 2} r="2.5" fill="rgba(108,196,23,0.4)" />
        <path d={`M${n.cx - 4},${n.cy + 4} Q${n.cx},${n.cy + 2} ${n.cx + 4},${n.cy + 4}`}
          stroke="rgba(108,196,23,0.5)" strokeWidth="1" fill="none" />
        {/* Pulse dot on connector */}
        <motion.circle r="2" fill="rgba(108,196,23,0.9)"
          animate={{ cx: [40, n.cx], cy: [30, n.cy], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.45, ease: "linear" }}
        />
      </g>
    ))}
  </svg>
);

// SVG gráfico: foguete / entrega rápida
const SpeedGraphic = () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
    {/* Speed lines */}
    {[10, 18, 26].map((y, i) => (
      <motion.line key={i} x1="5" y1={y} x2={30 - i * 4} y2={y}
        stroke="rgba(108,196,23,0.4)" strokeWidth="1.5"
        animate={{ x2: [30 - i * 4, 5], opacity: [0.8, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeOut" }}
      />
    ))}

    {/* Rocket body */}
    <motion.g
      animate={{ x: [0, 4, 0], y: [0, -3, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M45,30 L55,18 L65,30 L55,42 Z"
        fill="rgba(108,196,23,0.15)" stroke="rgba(108,196,23,0.9)" strokeWidth="1.5" />
      {/* Nose */}
      <path d="M55,18 L60,10 L65,18"
        fill="rgba(108,196,23,0.3)" stroke="rgba(108,196,23,0.8)" strokeWidth="1" />
      {/* Fins */}
      <path d="M46,36 L40,44 L50,40" fill="rgba(108,196,23,0.2)" stroke="rgba(108,196,23,0.6)" strokeWidth="1" />
      <path d="M64,36 L70,44 L60,40" fill="rgba(108,196,23,0.2)" stroke="rgba(108,196,23,0.6)" strokeWidth="1" />
      {/* Window */}
      <motion.circle cx="55" cy="30" r="4"
        fill="rgba(108,196,23,0.2)" stroke="rgba(108,196,23,1)" strokeWidth="1.5"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* Exhaust */}
      <motion.path d="M50,42 Q55,52 60,42"
        stroke="rgba(108,196,23,0.5)" strokeWidth="2" fill="none"
        animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [1, 1.3, 1] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        style={{ transformOrigin: "55px 42px" }}
      />
    </motion.g>
  </svg>
);

// SVG gráfico: headset / suporte (Suporte Contínuo)
const SupportGraphic = () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
    {/* 24/7 pulse ring */}
    <motion.circle cx="40" cy="30" r="24"
      stroke="rgba(108,196,23,0.15)" strokeWidth="1" fill="none"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      style={{ transformOrigin: "40px 30px" }}
    />
    <motion.circle cx="40" cy="30" r="18"
      stroke="rgba(108,196,23,0.3)" strokeWidth="1.5" fill="none"
      animate={{ scale: [1, 1.1, 1], opacity: [0.8, 0.2, 0.8] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
      style={{ transformOrigin: "40px 30px" }}
    />
    {/* Headset */}
    <path d="M26,30 Q26,18 40,18 Q54,18 54,30"
      stroke="rgba(108,196,23,0.8)" strokeWidth="2" fill="none" />
    <rect x="23" y="28" width="6" height="10" rx="3"
      fill="rgba(108,196,23,0.2)" stroke="rgba(108,196,23,0.8)" strokeWidth="1.5" />
    <rect x="51" y="28" width="6" height="10" rx="3"
      fill="rgba(108,196,23,0.2)" stroke="rgba(108,196,23,0.8)" strokeWidth="1.5" />
    {/* Mic boom */}
    <path d="M54,36 Q58,40 56,44" stroke="rgba(108,196,23,0.7)" strokeWidth="1.5" fill="none" />
    <motion.circle cx="56" cy="44" r="2.5"
      fill="rgba(108,196,23,0.6)" stroke="rgba(108,196,23,1)" strokeWidth="1"
      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
    {/* Signal arcs */}
    {[8, 14, 20].map((r, i) => (
      <motion.path key={i}
        d={`M${56 + r * 0.5},${44 - r * 0.3} Q${56 + r},${44} ${56 + r * 0.5},${44 + r * 0.3}`}
        stroke="rgba(108,196,23,0.6)" strokeWidth="1" fill="none"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </svg>
);

// SVG gráfico: gráfico de ROI em alta
const ROIGraphic = () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
    {/* Grid lines */}
    {[15, 25, 35, 45].map((y, i) => (
      <line key={i} x1="10" y1={y} x2="72" y2={y}
        stroke="rgba(108,196,23,0.08)" strokeWidth="1" />
    ))}
    {/* Bar chart */}
    {[
      { x: 15, h: 20, delay: 0 },
      { x: 27, h: 30, delay: 0.1 },
      { x: 39, h: 25, delay: 0.2 },
      { x: 51, h: 38, delay: 0.3 },
      { x: 63, h: 45, delay: 0.4 },
    ].map((bar, i) => (
      <motion.rect key={i}
        x={bar.x} y={55 - bar.h} width="9" height={bar.h} rx="2"
        fill="rgba(108,196,23,0.2)" stroke="rgba(108,196,23,0.8)" strokeWidth="1"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
        style={{ transformOrigin: `${bar.x + 4}px 55px` }}
      />
    ))}
    {/* Trend line */}
    <motion.polyline
      points="19,46 31,37 43,41 55,27 67,20"
      stroke="rgba(108,196,23,1)" strokeWidth="2" fill="none"
      strokeDasharray="60"
      strokeDashoffset="60"
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
    />
    {/* Dots on trend */}
    {[[19,46],[31,37],[43,41],[55,27],[67,20]].map(([x, y], i) => (
      <motion.circle key={i} cx={x} cy={y} r="3"
        fill="rgba(108,196,23,1)"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />
    ))}
    {/* Arrow up */}
    <motion.path d="M67,20 L63,14 M67,20 L71,14"
      stroke="rgba(108,196,23,1)" strokeWidth="2" fill="none"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    {/* Axes */}
    <line x1="10" y1="10" x2="10" y2="55" stroke="rgba(108,196,23,0.3)" strokeWidth="1" />
    <line x1="10" y1="55" x2="75" y2="55" stroke="rgba(108,196,23,0.3)" strokeWidth="1" />
  </svg>
);

import ScrollElementReveal from "./ScrollElementReveal";

export default function DifferentialsGrid() {
  const smallCards = [
    {
      title: "Time Especializado",
      description: "Profissionais experientes em AR, IA e desenvolvimento web.",
      icon: Users,
      Graphic: TeamGraphic,
    },
    {
      title: "Entrega Rápida",
      description: "Metodologia ágil para projetos eficientes e resultados mais rápidos.",
      icon: Zap,
      Graphic: SpeedGraphic,
    },
    {
      title: "Suporte Contínuo",
      description: "Acompanhamento completo antes, durante e após o projeto.",
      icon: Headphones,
      Graphic: SupportGraphic,
    },
    {
      title: "ROI Comprovado",
      description: "Cases de sucesso com resultados mensuráveis.",
      icon: TrendingUp,
      Graphic: ROIGraphic,
    },
  ];

  return (
    <section id="diferenciais" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <ScrollElementReveal direction="down" distance={40} className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium tracking-widest mb-6 relative z-40">
            NOSSOS DIFERENCIAIS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white/90 mb-6 relative z-40">
            Por que escolher a Imersão Córtex
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto relative z-40">
            O que nos torna únicos no mercado de inovação digital
          </p>
        </ScrollElementReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-40">
          {/* HERO CARD — Automações Inteligentes */}
          <ScrollElementReveal
            direction="left"
            distance={80}
            className="md:col-span-2 md:row-span-2 h-full"
          >
            <TiltCard className="h-full min-h-[300px]">
              <div className="h-full bg-gradient-to-br from-[#6CC417]/20 to-black/60 backdrop-blur-md rounded-3xl border border-[#6CC417]/30 p-8 md:p-10 flex flex-col relative overflow-hidden group shadow-xl hover:border-[#6CC417]/60 transition-colors">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6CC417]/10 to-[#3a7a0a]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Icon badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#6CC417]/20 to-[#3a7a0a]/20 border border-[#6CC417]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(108,196,23,0.3)] z-10">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="rgba(108,196,23,1)" strokeWidth="1.8">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                    <circle cx="12" cy="14" r="3" />
                    <path d="M12 11V9M12 17v2M9.17 12H7M15 12h2" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-2 relative z-10">
                  Automações Inteligentes
                </h3>
                <p className="text-[#6CC417] font-semibold text-sm tracking-widest uppercase mb-5 relative z-10">
                  para sua empresa
                </p>

                {/* Highlighted quote */}
                <div className="relative z-10 mb-6 p-5 rounded-2xl bg-[#6CC417]/8 border border-[#6CC417]/20">
                  <div className="absolute -top-2 -left-1 text-[#6CC417] text-4xl leading-none opacity-60">&ldquo;</div>
                  <p className="text-white/80 font-medium text-lg leading-relaxed pl-4">
                    Elimine tarefas repetitivas, reduza erros humanos e escale seu negócio com fluxos de trabalho automáticos movidos por Inteligência Artificial.
                  </p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {["Chatbots 24/7", "Integração de APIs", "Fluxos de IA", "Zero Código", "Notificações Automáticas"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#6CC417]/10 border border-[#6CC417]/30 text-[#6CC417]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Flow Graphic */}
                <div className="relative z-10 mt-auto h-24 opacity-70 group-hover:opacity-100 transition-opacity">
                  <AutomationFlowGraphic />
                </div>
              </div>
            </TiltCard>
          </ScrollElementReveal>

          {/* SMALL CARDS */}
          {smallCards.map((card, i) => (
            <ScrollElementReveal
              key={i}
              direction="up"
              distance={60 + (i * 20)}
              className="h-full"
            >
              <TiltCard className="h-full min-h-[220px]">
                <div className="h-full bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 flex flex-col hover:border-[#6CC417]/50 transition-colors relative overflow-hidden group shadow-xl">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6CC417]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Icon + Mini Graphic row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#6CC417]/20 to-[#3a7a0a]/20 border border-[#6CC417]/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_16px_rgba(108,196,23,0.25)]">
                      <card.icon className="w-5 h-5 text-[#6CC417] drop-shadow-[0_0_6px_rgba(108,196,23,0.8)]" />
                    </div>
                    {/* Mini animated graphic top-right */}
                    <div className="w-20 h-14 opacity-50 group-hover:opacity-90 transition-opacity">
                      <card.Graphic />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white/90 mb-2 relative z-10">{card.title}</h3>
                  <p className="text-white/55 font-light leading-relaxed relative z-10 text-sm">
                    {card.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollElementReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
