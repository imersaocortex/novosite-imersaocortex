"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundEffects() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Esfera Verde Principal */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-[#6CC417]/15 rounded-full blur-[150px] mix-blend-screen opacity-70"
      />
      
      {/* Esfera Verde Escuro */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] bg-[#3a7a0a]/20 rounded-full blur-[150px] mix-blend-screen opacity-50"
      />

      {/* Esfera Verde Claro (Aparece mais em baixo) */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[80%] left-[20%] w-[40vw] h-[40vw] bg-[#6CC417]/20 rounded-full blur-[150px] mix-blend-screen opacity-60"
      />
      
      {/* Noise Texture Overlay for Premium Vibe */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz4KPC9zdmc+')]"></div>
    </div>
  );
}
