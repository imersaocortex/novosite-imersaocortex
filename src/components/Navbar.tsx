"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "Sobre", href: "sobre" },
    { name: "Serviços", href: "servicos" },
    { name: "Diferenciais", href: "diferenciais" },
    { name: "Contato", href: "contato" },
  ];

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  // Scroll to top
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4, rootMargin: "-80px 0px 0px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Navbar scroll opacity
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(5,5,5,0.3)", "rgba(5,5,5,0.92)"]);
  const navBorder = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0.0)", "rgba(255,255,255,0.06)"]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ backgroundColor: navBg, borderColor: navBorder }}
      className="fixed top-0 left-0 right-0 z-[60] backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center group">
          <img src="/logo.png" alt="Imersão Córtex" className="h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="relative text-sm font-medium tracking-wide transition-colors group"
                style={{ color: isActive ? "#6CC417" : "rgba(255,255,255,0.6)" }}
              >
                {link.name}
                {/* Active underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#6CC417]"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-white/30 group-hover:w-full transition-all duration-300" />
              </a>
            );
          })}
          <a
            href="https://wa.me/5581989077025?text=Olá! Gostaria de solicitar uma proposta."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#6CC417] text-white font-semibold text-sm hover:bg-[#5aab12] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(108,196,23,0.4)]"
          >
            Solicitar Proposta
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/80 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-2 overflow-hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                className="text-lg font-medium py-3 border-b border-white/5 flex items-center justify-between"
                style={{ color: activeSection === link.href ? "#6CC417" : "rgba(255,255,255,0.8)" }}
              >
                {link.name}
                {activeSection === link.href && (
                  <span className="w-2 h-2 rounded-full bg-[#6CC417] shadow-[0_0_8px_rgba(108,196,23,1)]" />
                )}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/5581989077025"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07, duration: 0.3 }}
              className="mt-4 px-6 py-3 text-center rounded-xl bg-[#6CC417] text-white font-semibold shadow-[0_0_20px_rgba(108,196,23,0.4)]"
            >
              Solicitar Proposta
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
