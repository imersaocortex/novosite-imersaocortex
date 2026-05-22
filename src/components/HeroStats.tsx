"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Load shader only on client (WebGL needs browser APIs)
const ShaderBackground = dynamic(
  () => import("@/components/ui/shader-background"),
  { ssr: false }
);

export default function HeroStats() {
  const stats = [
    { value: "100+", label: "Projetos Entregues" },
    { value: "50+",  label: "Clientes Satisfeitos" },
    { value: "24/7", label: "Suporte Disponível" },
    { value: "5+",   label: "Anos de Experiência" },
  ];

  return (
    <section className="relative z-10 bg-[#050505] overflow-hidden">

      {/* ── DESTAQUE SHADER BLOCK ───────────────────────────── */}
      <div className="relative min-h-[70vh] flex items-center justify-center px-6 py-28 overflow-hidden">

        {/* WebGL Shader — fills this block */}
        <ShaderBackground />

        {/* Dark vignette so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60 pointer-events-none" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#6CC417]/30 bg-[#6CC417]/10 text-[#6CC417] text-sm font-medium tracking-widest mb-8 shadow-[0_0_20px_rgba(108,196,23,0.2)]">
            TECNOLOGIA QUE EXPANDE O REAL
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8 leading-tight drop-shadow-2xl">
            Transforme Seu Negócio com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC417] to-[#a8e63d]">
              Realidade Aumentada
            </span>{" "}
            e Automações com IA
          </h2>

          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 drop-shadow">
            Criamos experiências digitais imersivas que conectam marcas aos seus clientes de forma inovadora. Especialistas em AR, Automações com IA e desenvolvimento web.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5581989077025"
              className="px-8 py-4 rounded-full bg-[#6CC417] text-white font-semibold text-lg hover:bg-[#5aab12] hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(108,196,23,0.5)] w-full sm:w-auto"
            >
              Solicitar Proposta
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-[#6CC417]/40 transition-all w-full sm:w-auto"
            >
              Conheça Nossas Soluções
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── STATS GRID ──────────────────────────────────────── */}
      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* separator */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#6CC417]/30 to-transparent mb-16" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-[#6CC417]/5 hover:border-[#6CC417]/20 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#6CC417]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl md:text-5xl font-bold text-[#6CC417] mb-2 relative z-10 drop-shadow-[0_0_20px_rgba(108,196,23,0.5)]">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/50 uppercase tracking-widest text-center font-medium relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
