"use client";

import { Star } from "lucide-react";

import ScrollElementReveal from "./ScrollElementReveal";

export default function TestimonialsBlog() {
  const testimonials = [
    {
      text: "Trabalhar com a equipe foi excepcional. Eles entenderam perfeitamente nossa necessidade e entregaram uma solução que superou expectativas.",
      author: "Ana Paula",
      role: "Diretora de Marketing - EduTech"
    },
    {
      text: "A plataforma de AR revolucionou a forma como nossos clientes interagem com nossos produtos. Resultados fantásticos logo no primeiro mês.",
      author: "Roberto Santos",
      role: "Fundador - ArqModerna"
    }
  ];

  const blogPosts = [
    {
      category: "Realidade Aumentada",
      date: "30 nov 2025 • 8 min",
      title: "WebAR: Realidade Aumentada Sem Aplicativo",
      excerpt: "Entenda como a tecnologia WebAR elimina barreiras e democratiza o acesso à realidade aumentada diretamente pelo navegador."
    },
    {
      category: "Inteligência Artificial",
      date: "27 nov 2025 • 10 min",
      title: "Chatbots com IA Generativa: O Novo Padrão",
      excerpt: "Como a IA generativa está transformando chatbots em assistentes verdadeiramente inteligentes e contextuais."
    },
    {
      category: "Marketing Digital",
      date: "25 nov 2025 • 7 min",
      title: "Como Medir o ROI de Campanhas com AR",
      excerpt: "Métricas e KPIs essenciais para avaliar o retorno sobre investimento de experiências de realidade aumentada."
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto space-y-40">
        
        {/* Testimonials */}
        <div>
          <ScrollElementReveal direction="down" distance={40} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium tracking-widest mb-6">
              DEPOIMENTOS
            </div>
            <h2 className="text-4xl font-bold tracking-tighter text-white/90 mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Histórias de sucesso de empresas que transformaram seus negócios com nossas soluções
            </p>
          </ScrollElementReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, i) => (
              <ScrollElementReveal 
                key={i}
                direction="up"
                distance={50 + (i * 20)}
                className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-[#6CC417] text-[#6CC417]" />
                  ))}
                </div>
                <p className="text-xl text-white/80 font-light italic leading-relaxed mb-8">
                  &ldquo;{test.text}&rdquo;
                </p>
                <div>
                  <h4 className="font-semibold text-white/90 text-lg">{test.author}</h4>
                  <p className="text-white/50 text-sm">{test.role}</p>
                </div>
              </ScrollElementReveal>
            ))}
          </div>
        </div>

        {/* Blog */}
        <div>
          <ScrollElementReveal direction="down" distance={40} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium tracking-widest mb-6">
                BLOG
              </div>
              <h2 className="text-4xl font-bold tracking-tighter text-white/90 mb-4">
                Últimas Novidades
              </h2>
              <p className="text-xl text-white/50 font-light max-w-2xl">
                Fique por dentro das últimas tendências em tecnologia
              </p>
            </div>
            
            <a href="/blog" className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors shrink-0">
              Ver Todos os Artigos
            </a>
          </ScrollElementReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollElementReveal 
                key={i}
                direction="up"
                distance={50 + (i * 20)}
              >
                <a
                  href="/blog"
                  className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors flex flex-col h-full"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[#6CC417] text-sm font-medium">{post.category}</span>
                    <span className="text-white/40 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white/90 mb-4 group-hover:text-[#6CC417] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {post.excerpt}
                  </p>
                </a>
              </ScrollElementReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
