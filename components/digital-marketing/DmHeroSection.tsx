"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { DmHeroStats } from "@/components/digital-marketing/DmHeroStats";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

const HERO_IMAGE = "/images/dm-landing/hero-visual.png";

type HeroContent = {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: readonly {
    value: number | null;
    suffix?: string;
    display?: string;
    label: string;
  }[];
};

function HeroParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.span
      className="dm-hero-particle absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -18, 0], opacity: [0.25, 0.75, 0.25], scale: [1, 1.15, 1] }}
      transition={{ duration: 4.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    />
  );
}

function HeroBackground({ children }: { children: ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 42, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 42, damping: 24 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-24, 24]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-18, 18]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section className="dm-hero relative min-h-[90vh] overflow-hidden">
      <motion.div
        className="dm-hero-bg absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          x: parallaxX,
          y: parallaxY,
        }}
        aria-hidden
      />

      <div className="absolute inset-0 bg-[#0A0F1C]/60" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/92 via-[#0A0F1C]/68 to-[#0A0F1C]/35 sm:from-[#0A0F1C]/88 sm:via-[#0A0F1C]/58 sm:to-[#0A0F1C]/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_35%,rgba(59,130,246,0.18),transparent_52%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_80%,rgba(255,107,44,0.12),transparent_45%)]"
        aria-hidden
      />
      <div className="absolute inset-0 grid-pattern-light opacity-[0.12]" aria-hidden />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <HeroParticle delay={0} x="12%" y="18%" size={6} />
        <HeroParticle delay={0.6} x="78%" y="14%" size={8} />
        <HeroParticle delay={1.2} x="68%" y="72%" size={5} />
        <HeroParticle delay={0.3} x="42%" y="58%" size={4} />
        <HeroParticle delay={1.8} x="88%" y="48%" size={7} />
        <HeroParticle delay={0.9} x="24%" y="82%" size={5} />
      </div>

      {children}
    </section>
  );
}

export function DmHeroSection({ hero }: { hero: HeroContent }) {
  return (
    <HeroBackground>
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#FF6B2C]/40 bg-[#FF6B2C]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb088] backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-5 font-[family-name:var(--font-inter)] text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.1rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="mt-5 text-base leading-8 text-white/75 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <div className="relative">
              <span
                className="pointer-events-none absolute -inset-1 rounded-xl bg-[#FF6B2C]/35 blur-xl"
                aria-hidden
              />
              <Button size="lg" asChild className="relative transition-transform duration-300 hover:scale-[1.03]">
                <Link href="/book-consultation/">{hero.primaryCta}</Link>
              </Button>
            </div>
            <Button
              variant="dark"
              size="lg"
              className={`${darkHeroSecondaryButtonClass} transition-transform duration-300 hover:scale-[1.03]`}
              asChild
            >
              <Link href="#dm-services" className="!text-white hover:!text-white">
                {hero.secondaryCta}
              </Link>
            </Button>
          </motion.div>

          <DmHeroStats stats={hero.stats} />
        </motion.div>
      </div>
    </HeroBackground>
  );
}
