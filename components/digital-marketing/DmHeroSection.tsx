"use client";

import Link from "next/link";
import { BarChart3, LineChart, Search, Share2, Sparkles, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { DmHeroStats } from "@/components/digital-marketing/DmHeroStats";
import { DmMagnetic } from "@/components/digital-marketing/DmMagnetic";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

const HERO_IMAGE = "/images/dm-landing/hero-orange-laptop.jpg";

const FLOATING_CARDS = [
  { label: "SEO +24%", x: "58%", y: "22%", delay: 0, depth: 18 },
  { label: "Reach 3.2x", x: "78%", y: "38%", delay: 0.4, depth: 28 },
  { label: "ROI 300%", x: "66%", y: "58%", delay: 0.8, depth: 22 },
] as const;

const FLOATING_ICONS = [
  { Icon: Search, x: "54%", y: "30%", delay: 0 },
  { Icon: Share2, x: "82%", y: "24%", delay: 0.5 },
  { Icon: BarChart3, x: "70%", y: "48%", delay: 1 },
  { Icon: TrendingUp, x: "88%", y: "62%", delay: 0.3 },
  { Icon: LineChart, x: "60%", y: "72%", delay: 0.9 },
] as const;

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

function HeroParticle({
  delay,
  x,
  y,
  size,
  parallaxX,
  parallaxY,
  factor,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
  parallaxX: ReturnType<typeof useSpring>;
  parallaxY: ReturnType<typeof useSpring>;
  factor: number;
}) {
  const dx = useTransform(parallaxX, (v) => v * factor);
  const dy = useTransform(parallaxY, (v) => v * factor);

  return (
    <motion.span
      className="dm-hero-particle absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size, x: dx, y: dy }}
      animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
      transition={{ duration: 4.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    />
  );
}

function FloatingSeoCard({
  label,
  x,
  y,
  delay,
  parallaxX,
  parallaxY,
  depth,
}: {
  label: string;
  x: string;
  y: string;
  delay: number;
  parallaxX: ReturnType<typeof useSpring>;
  parallaxY: ReturnType<typeof useSpring>;
  depth: number;
}) {
  const dx = useTransform(parallaxX, (v) => v * depth);
  const dy = useTransform(parallaxY, (v) => v * depth);

  return (
    <motion.div
      className="dm-hero-float-card pointer-events-none absolute hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md sm:block"
      style={{ left: x, top: y, x: dx, y: dy, transformStyle: "preserve-3d" }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.2 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/50">Analytics</p>
      <p className="mt-1 text-sm font-extrabold text-[#FF6B2C]">{label}</p>
    </motion.div>
  );
}

function FloatingMarketingIcon({
  Icon,
  x,
  y,
  delay,
  parallaxX,
  parallaxY,
  depth,
}: {
  Icon: typeof Search;
  x: string;
  y: string;
  delay: number;
  parallaxX: ReturnType<typeof useSpring>;
  parallaxY: ReturnType<typeof useSpring>;
  depth: number;
}) {
  const dx = useTransform(parallaxX, (v) => v * depth);
  const dy = useTransform(parallaxY, (v) => v * depth);

  return (
    <motion.span
      className="dm-hero-float-icon pointer-events-none absolute hidden items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:flex"
      style={{ left: x, top: y, width: 44, height: 44, x: dx, y: dy }}
      animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <Icon className="h-5 w-5 text-[#FF6B2C]" />
    </motion.span>
  );
}

function HeroBackground({ children }: { children: ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 22 });
  const glowX = useTransform(springX, [-0.5, 0.5], [-50, 50]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-40, 40]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      mouseX.set(nx);
      mouseY.set(ny);

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: nx * 36,
          y: ny * 24,
          rotateY: nx * 4,
          rotateX: -ny * 3,
          duration: 0.9,
          ease: "power3.out",
          overwrite: true,
        });
      }
      if (sceneRef.current) {
        gsap.to(sceneRef.current, {
          rotateY: nx * 2,
          rotateX: -ny * 1.5,
          duration: 1.1,
          ease: "power3.out",
          overwrite: true,
        });
      }
    };

    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: 0,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }
      if (sceneRef.current) {
        gsap.to(sceneRef.current, {
          rotateY: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="dm-hero dm-hero--orange relative min-h-screen overflow-hidden">
      <div ref={sceneRef} className="dm-hero-scene absolute inset-0" style={{ perspective: 1200, transformStyle: "preserve-3d" }}>
        <div
          ref={bgRef}
          className="dm-hero-bg dm-hero-bg--orange absolute inset-[-8%] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundPosition: "62% center",
            transformStyle: "preserve-3d",
          }}
          aria-hidden
        />

        <motion.div
          className="dm-hero-breathe pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_68%_42%,rgba(255,107,44,0.22),transparent_58%)]"
          animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.04, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: glowX, y: glowY }}
          aria-hidden
        />
        <div className="dm-hero-streak pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-[#0A0F1C]/55" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/94 via-[#0A0F1C]/72 to-[#0A0F1C]/20 sm:from-[#0A0F1C]/90 sm:via-[#0A0F1C]/55 sm:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(59,130,246,0.14),transparent_55%)]"
          aria-hidden
        />
        <div className="absolute inset-0 grid-pattern-light opacity-[0.1]" aria-hidden />

        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <HeroParticle delay={0} x="14%" y="20%" size={6} parallaxX={springX} parallaxY={springY} factor={12} />
          <HeroParticle delay={0.6} x="76%" y="16%" size={8} parallaxX={springX} parallaxY={springY} factor={20} />
          <HeroParticle delay={1.2} x="64%" y="70%" size={5} parallaxX={springX} parallaxY={springY} factor={16} />
          <HeroParticle delay={0.3} x="44%" y="54%" size={4} parallaxX={springX} parallaxY={springY} factor={10} />
          <HeroParticle delay={1.8} x="90%" y="44%" size={7} parallaxX={springX} parallaxY={springY} factor={24} />
          {FLOATING_CARDS.map((card) => (
            <FloatingSeoCard key={card.label} {...card} parallaxX={springX} parallaxY={springY} />
          ))}
          {FLOATING_ICONS.map(({ Icon, x, y, delay }) => (
            <FloatingMarketingIcon
              key={`${x}-${y}`}
              Icon={Icon}
              x={x}
              y={y}
              delay={delay}
              parallaxX={springX}
              parallaxY={springY}
              depth={14 + delay * 10}
            />
          ))}
        </div>
      </div>

      {children}
    </section>
  );
}

export function DmHeroSection({ hero }: { hero: HeroContent }) {
  return (
    <HeroBackground>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
            <DmMagnetic className="relative">
              <span
                className="pointer-events-none absolute -inset-2 rounded-xl bg-[#FF6B2C]/40 blur-2xl"
                aria-hidden
              />
              <Button size="lg" asChild className="relative shadow-[0_0_32px_rgba(255,107,44,0.35)]">
                <Link href="/book-consultation/">{hero.primaryCta}</Link>
              </Button>
            </DmMagnetic>
            <DmMagnetic strength={0.2}>
              <Button variant="dark" size="lg" className={darkHeroSecondaryButtonClass} asChild>
                <Link href="#dm-services" className="!text-white hover:!text-white">
                  {hero.secondaryCta}
                </Link>
              </Button>
            </DmMagnetic>
          </motion.div>

          <DmHeroStats stats={hero.stats} />
        </motion.div>
      </div>
    </HeroBackground>
  );
}
