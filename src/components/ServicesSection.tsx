"use client";

import { View, Cpu, Globe, BarChart } from "lucide-react";
import TiltCard from "./TiltCard";

import ScrollElementReveal from "./ScrollElementReveal";

export default function ServicesSection() {
  const services = [
    {
      title: "Plataforma GeraAR",
      description: "Crie experiências imersivas com nossa plataforma AR proprietária. Reconhecimento de imagens, geolocalização e muito mais.",
      items: ["Reconhecimento de Imagens", "Geolocalização AR", "Sem necessidade de App", "Funciona no navegador"],
      icon: View
    },
    {
      title: "IA Generativa",
      description: "Automatize processos e crie conteúdo inteligente com nossas soluções de IA avançada.",
      items: ["Chatbots Inteligentes", "Análise de Dados", "Automação de Processos", "IA Generativa"],
      icon: Cpu
    },
    {
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
      items: ["React & Next.js", "APIs RESTful", "Design Responsivo", "SEO Otimizado"],
      icon: Globe
    },
    {
      title: "Marketing Digital",
      description: "Estratégias digitais completas para aumentar sua presença online e gerar resultados.",
      items: ["Gestão de Redes Sociais", "Google Ads", "SEO/SEM", "Analytics & Métricas"],
      icon: BarChart
    }
  ];

  return (
    <section id="servicos" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <ScrollElementReveal direction="down" distance={40} className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium tracking-widest mb-6">
            NOSSOS SERVIÇOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white/90 mb-6 relative z-40">
            Soluções Digitais Completas
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de tecnologia para transformar seu negócio
          </p>
        </ScrollElementReveal>

        <div className="grid md:grid-cols-2 gap-8 relative z-40">
          {services.map((service, i) => (
            <ScrollElementReveal
              key={i}
              direction="up"
              distance={80 + (i * 20)}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="group relative p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col h-full hover:border-[#6CC417]/50 transition-colors shadow-xl">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6CC417]/10 to-[#3a7a0a]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6CC417]/20 to-[#3a7a0a]/20 border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(108,196,23,0.3)] group-hover:shadow-[0_0_50px_rgba(108,196,23,0.6)]">
                    <service.icon className="w-8 h-8 text-[#6CC417] drop-shadow-[0_0_8px_rgba(108,196,23,0.8)]" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white/90 mb-4">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6CC417] shadow-[0_0_8px_rgba(108,196,23,0.8)]" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="https://wa.me/5581989077025" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white/90 font-medium hover:bg-[#6CC417] hover:text-white hover:border-[#6CC417] hover:shadow-[0_0_20px_rgba(108,196,23,0.4)] transition-all mt-auto relative z-10"
                  >
                    Saiba Mais
                  </a>
                </div>
              </TiltCard>
            </ScrollElementReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
