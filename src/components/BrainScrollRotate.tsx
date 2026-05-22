"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 40;

const BrainScrollRotate = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out effect when the entire hero container scrolls up out of view
  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"]
  });
  // Fade out during the first 30% of its exit
  const exitOpacity = useTransform(exitProgress, [0, 0.3], [1, 0]);

  // Declare all hooks at the top level to obey Rules of Hooks
  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // 0% - gradual fade out over a long scroll range
  const opacity0 = useTransform(scrollYProgress, [0, 0.05, 0.4], [1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const filter0 = useTransform(scrollYProgress, [0.05, 0.4], ["blur(0px)", "blur(16px)"]);

  // 30%
  const opacity30 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const x30 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [-50, 0, 0, -50]);
  const filter30 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

  // 60%
  const opacity60 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const x60 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [50, 0, 0, 50]);
  const filter60 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

  // 90%
  const opacity90 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const y90 = useTransform(scrollYProgress, [0.75, 0.85], [50, 0]);
  const filter90 = useTransform(scrollYProgress, [0.75, 0.85], ["blur(10px)", "blur(0px)"]);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, "0");
        img.src = `/imgs-hero/ezgif-frame-${frameNumber}.jpg`;
        
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages.push(img);
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
              setImages(loadedImages.sort((a, b) => a.src.localeCompare(b.src)));
              setLoaded(true);
            }
            resolve(null);
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
            resolve(null);
          };
        });
      }
    };
    
    loadImages();
  }, []);

  useEffect(() => {
    if (!loaded || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const render = () => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(currentFrame.get()))
      );
      
      const img = images[frameIndex];
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      const imgRatio = img.width / img.height;
      const canvasRatio = rect.width / rect.height;
      
      let drawWidth = rect.width;
      let drawHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = rect.height * imgRatio;
        offsetX = (rect.width - drawWidth) / 2;
      } else {
        drawHeight = rect.width / imgRatio;
        offsetY = (rect.height - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    render();

    const unsubscribe = currentFrame.on("change", render);
    window.addEventListener("resize", render);
    
    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [loaded, images, currentFrame]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading Overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-50 flex h-screen w-full items-center justify-center bg-[#050505]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#6CC417]/40 border-t-[#6CC417] animate-spin" />
              <div className="text-[#6CC417]/80 animate-pulse text-sm tracking-[0.3em] font-light">
                INICIANDO CORTEX...
              </div>
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Penumbra / Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80 pointer-events-none mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        {/* Wrapped content fading out during exit scroll */}
        <motion.div style={{ opacity: exitOpacity }} className="absolute inset-0">
          {/* 0% Scroll - Centralizado */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: opacity0,
              y: y0,
              filter: filter0
            }}
          >
            <div className="text-center px-4 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-6 drop-shadow-lg">
                IMERSÃO <span className="text-[#6CC417] drop-shadow-[0_0_30px_rgba(108,196,23,0.8)]">CORTEX</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide drop-shadow">
                Automações Inteligentes
              </p>
            </div>
          </motion.div>

          {/* 30% Scroll - Alinhado à esquerda */}
          <motion.div
            className="absolute inset-0 flex items-center justify-start px-8 md:px-24 pointer-events-none"
            style={{
              opacity: opacity30,
              x: x30,
              filter: filter30
            }}
          >
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white/90 leading-tight drop-shadow-lg">
                Oferecemos uma gama completa de serviços tecnológicos para transformar o seu negócio
              </h2>
            </div>
          </motion.div>

          {/* 60% Scroll - Alinhado à direita */}
          <motion.div
            className="absolute inset-0 flex items-center justify-end px-8 md:px-24 pointer-events-none"
            style={{
              opacity: opacity60,
              x: x60,
              filter: filter60
            }}
          >
            <div className="max-w-xl text-right">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white/90 leading-tight drop-shadow-lg">
                Acreditamos que cada projeto é uma oportunidade para criar algo extraordinário. Vamos construir o futuro juntos.
              </h2>
            </div>
          </motion.div>

          {/* 90% Scroll - Centralizado */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: opacity90,
              y: y90,
              filter: filter90
            }}
          >
            <div className="text-center px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white/90 leading-tight mb-8 drop-shadow-lg">
                Nossa missão é transformar a maneira como as empresas se conectam com seus clientes
              </h2>
              <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide max-w-2xl mx-auto drop-shadow">
                oferecendo soluções tecnológicas que vão além do convencional.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrainScrollRotate;
