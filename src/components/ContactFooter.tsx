"use client";

import { Mail, Phone, Camera, Send } from "lucide-react";

import ScrollElementReveal from "./ScrollElementReveal";

export default function ContactFooter() {
  return (
    <>
      <section id="contato" className="relative py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <ScrollElementReveal direction="down" distance={40} className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium tracking-widest mb-6">
              ENTRE EM CONTATO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white/90 mb-4">
              Vamos Conversar
            </h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Estamos prontos para transformar suas ideias em realidade digital
            </p>
          </ScrollElementReveal>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <ScrollElementReveal 
              direction="right"
              distance={60}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Nome *</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6CC417] transition-colors" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Email *</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6CC417] transition-colors" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Telefone</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6CC417] transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Empresa</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6CC417] transition-colors" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Mensagem *</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6CC417] transition-colors" placeholder="Como podemos ajudar?" />
                </div>
                <button className="w-full py-4 rounded-xl bg-[#6CC417] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#5aab12] transition-colors shadow-[0_0_20px_rgba(108,196,23,0.4)]">
                  <span>Inicie Sua Imersão</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </ScrollElementReveal>

            {/* Info Sidebar */}
            <ScrollElementReveal 
              direction="left"
              distance={60}
              className="flex flex-col gap-8"
            >
              <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6CC417]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#6CC417]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">WhatsApp</p>
                    <p className="text-lg text-white/90 font-medium">+55 81 98907-7025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6CC417]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#6CC417]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Email</p>
                    <p className="text-lg text-white/90 font-medium">contato@imersaocortex.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6CC417]/10 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#6CC417]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Instagram</p>
                    <p className="text-lg text-white/90 font-medium">@imersaocortex</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#6CC417]/10 to-transparent border border-[#6CC417]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <img src="/icon.png" alt="" className="w-24 h-24" />
                </div>
                <h4 className="text-lg font-semibold text-white/90 mb-4 relative z-10">Visão e Propósito</h4>
                <p className="text-white/60 font-light italic relative z-10">
                  &ldquo;Acreditamos que cada projeto é uma oportunidade de criar algo extraordinário. Vamos construir o futuro juntos.&rdquo;
                </p>
              </div>

              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 text-white/70 font-medium">
                Atuamos em todo Brasil e projetos internacionais 🌐
              </div>
            </ScrollElementReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020202] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Imersão Córtex" className="h-10 w-auto" />
              </a>
              <p className="text-white/50 font-light leading-relaxed">
                Tecnologia que expande o real. Criando experiências imersivas e soluções inteligentes para o seu negócio.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white/90 mb-6">Serviços</h4>
              <ul className="space-y-4 text-white/50 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Realidade Aumentada</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Inteligência Artificial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aplicativos Web</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Digital</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white/90 mb-6">Empresa</h4>
              <ul className="space-y-4 text-white/50 font-light">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Plataforma GeraAR</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white/90 mb-6">Contato</h4>
              <ul className="space-y-4 text-white/50 font-light">
                <li>+55 81 98907-7025</li>
                <li>contato@imersaocortex.com.br</li>
                <li>@imersaocortex</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© 2026 Imersão Córtex. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
