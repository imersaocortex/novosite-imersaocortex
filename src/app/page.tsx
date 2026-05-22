import BrainScrollRotate from "@/components/BrainScrollRotate";
import Navbar from "@/components/Navbar";
import HeroStats from "@/components/HeroStats";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ARExamples from "@/components/ARExamples";
import DifferentialsGrid from "@/components/DifferentialsGrid";
import SectorsCarousel from "@/components/SectorsCarousel";
import TestimonialsBlog from "@/components/TestimonialsBlog";
import ContactFooter from "@/components/ContactFooter";
import BackgroundEffects from "@/components/BackgroundEffects";
import FloatingElements from "@/components/FloatingElements";
import MouseGlow from "@/components/MouseGlow";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20 selection:text-white relative">
      <BackgroundEffects />
      <FloatingElements />
      <MouseGlow />
      <Navbar />

      {/* Hero — no reveal (it's the entry point) */}
      <div id="hero">
        <BrainScrollRotate />
        <HeroStats />
      </div>

      <SectionReveal delay={0}>
        <AboutSection />
      </SectionReveal>

      <SectionReveal delay={0}>
        <ServicesSection />
      </SectionReveal>

      <SectionReveal delay={0}>
        <ARExamples />
      </SectionReveal>

      <SectionReveal delay={0}>
        <DifferentialsGrid />
      </SectionReveal>

      <SectionReveal delay={0}>
        <SectorsCarousel />
      </SectionReveal>

      <SectionReveal delay={0}>
        <TestimonialsBlog />
      </SectionReveal>

      <SectionReveal delay={0}>
        <ContactFooter />
      </SectionReveal>
    </main>
  );
}
