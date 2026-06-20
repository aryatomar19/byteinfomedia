"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, type ReactNode } from "react";

const HOMEPAGE_IMG = "/images/digital-marketing/website-development.jpg";

function Dot({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.span
      className="absolute h-1 w-1 rounded-full bg-[#FF6B2C]/35"
      style={{ left: x, top: y }}
      animate={{ y: [0, -8, 0], opacity: [0.2, 0.55, 0.2] }}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function GlassCard({
  children,
  className = "",
  depth = 60,
  floatDelay = 0,
}: {
  children: ReactNode;
  className?: string;
  depth?: number;
  floatDelay?: number;
}) {
  return (
    <motion.div
      className={`rounded-2xl border border-white/70 bg-white/75 shadow-[0_20px_50px_rgba(17,17,17,0.1)] backdrop-blur-xl ${className}`}
      style={{ transform: `translateZ(${depth}px)` }}
      animate={{ y: [0, floatDelay % 2 === 0 ? -7 : 7, 0] }}
      transition={{ duration: 5 + floatDelay * 0.3, repeat: Infinity, ease: "easeInOut", delay: floatDelay * 0.2 }}
      whileHover={{ scale: 1.04, boxShadow: "0 28px 64px rgba(255,107,44,0.15)" }}
    >
      {children}
    </motion.div>
  );
}

export function BrandingHeroStudio() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 22 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const shadowX = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const shadowY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bs-studio-hero relative w-full">
      <Dot delay={0} x="6%" y="20%" />
      <Dot delay={0.5} x="92%" y="30%" />
      <Dot delay={1} x="78%" y="85%" />

      <motion.div
        className="bs-studio-scene relative mx-auto w-full min-h-[380px] sm:min-h-[480px] lg:min-h-[min(78vh,820px)]"
        style={{ rotateX, rotateY, x: parallaxX, y: parallaxY, transformStyle: "preserve-3d" }}
      >
        {/* Central glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,107,44,0.16),transparent_70%)]"
          aria-hidden
        />

        {/* Monitor shadow */}
        <motion.div
          className="pointer-events-none absolute bottom-[8%] left-[18%] right-[18%] h-8 rounded-[50%] bg-[#111]/[0.07] blur-2xl"
          style={{ x: shadowX, y: shadowY }}
          aria-hidden
        />

        {/* ── Centerpiece monitor ── */}
        <motion.div
          className="absolute left-1/2 top-[6%] z-20 w-[min(92%,520px)] lg:w-[min(88%,580px)]"
          style={{ x: "-50%", translateZ: 100 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rounded-[1.35rem] border border-white/90 bg-gradient-to-b from-[#f8f8f8] to-[#e6e6e6] p-2.5 shadow-[0_40px_100px_rgba(17,17,17,0.16)] sm:p-3">
            <div className="overflow-hidden rounded-xl border border-[#111]/[0.06] bg-white shadow-inner">
              <div className="flex items-center gap-2 border-b border-[#111]/5 bg-[#FAFAFA] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B2C]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#111]/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#111]/10" />
                <span className="ml-3 h-5 flex-1 rounded-md bg-white text-[0.55rem] leading-5 text-[#999] shadow-sm">
                  byteinfomedia.com
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={HOMEPAGE_IMG}
                  alt="Website homepage preview"
                  className="h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-1.5 h-10 w-4 rounded-b-lg bg-gradient-to-b from-[#e0e0e0] to-[#ccc]" />
          <div className="mx-auto h-2 w-20 rounded-full bg-[#d4d4d4] shadow-sm" />
        </motion.div>

        {/* ── SEO analytics panel (left) ── */}
        <div className="absolute left-[0%] top-[38%] z-30 w-[28%] max-w-[160px] sm:left-[2%] sm:max-w-[180px] lg:left-[0%] lg:max-w-[200px]">
          <GlassCard depth={80} floatDelay={1} className="p-3 sm:p-4">
            <p className="text-[0.6rem] font-bold uppercase tracking-widest text-[#666] sm:text-[0.65rem]">SEO</p>
            <p className="mt-1 text-xl font-extrabold text-[#FF6B2C] sm:text-2xl">+180%</p>
            <p className="text-[0.6rem] font-semibold text-[#666]">Organic traffic</p>
            <div className="mt-3 flex h-12 items-end gap-1">
              {[38, 52, 46, 68, 58, 82, 74, 95].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/45"
                  initial={{ height: "30%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
                />
              ))}
            </div>
          </GlassCard>
        </div>

        {/* ── Content card (bottom-left) ── */}
        <div className="absolute bottom-[20%] left-[4%] z-[25] w-[24%] max-w-[140px] sm:max-w-[155px]">
          <GlassCard depth={70} floatDelay={2} className="p-3">
            <p className="text-[0.6rem] font-bold uppercase tracking-widest text-[#666]">Content</p>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-[#111]/10" />
              <div className="h-1.5 w-[85%] rounded-full bg-[#111]/6" />
              <div className="h-1.5 w-[70%] rounded-full bg-[#FF6B2C]/25" />
              <div className="h-1.5 w-[90%] rounded-full bg-[#111]/6" />
            </div>
          </GlassCard>
        </div>

        {/* ── Social panel (top-right) ── */}
        <div className="absolute right-[0%] top-[14%] z-30 w-[26%] max-w-[150px] sm:right-[2%] sm:max-w-[165px]">
          <GlassCard depth={85} floatDelay={0.5} className="p-3 sm:p-4">
            <p className="text-[0.6rem] font-bold uppercase tracking-widest text-[#666]">Social</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#FF6B2C]/15" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-full rounded bg-[#111]/8" />
                <div className="h-1.5 w-2/3 rounded bg-[#111]/5" />
              </div>
            </div>
            <p className="mt-2 text-sm font-extrabold text-[#FF6B2C]">3× Reach</p>
          </GlassCard>
        </div>

        {/* ── Smartphone (bottom-right, overlapping) ── */}
        <motion.div
          className="absolute bottom-[12%] right-[6%] z-40 w-[13%] min-w-[52px] max-w-[72px] sm:max-w-[80px]"
          style={{ transform: "translateZ(120px) rotateY(-8deg)" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          whileHover={{ scale: 1.06 }}
        >
          <div className="rounded-[1rem] border-2 border-white/90 bg-white p-[3px] shadow-[0_24px_56px_rgba(17,17,17,0.14)]">
            <div className="aspect-[9/18] overflow-hidden rounded-[0.8rem] bg-[#FAFAFA]">
              <img
                src="/images/digital-marketing/social-media-marketing.jpg"
                alt="Social feed preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* ── Color palette ── */}
        <motion.div
          className="absolute left-[8%] top-[12%] z-20 hidden sm:block"
          style={{ transform: "translateZ(55px)" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="rounded-xl border border-white/80 bg-white/90 p-2 shadow-[0_12px_32px_rgba(17,17,17,0.08)] backdrop-blur-md">
            <div className="flex gap-1">
              {["#FF6B2C", "#111111", "#FAFAFA", "#E8E8E8"].map((color) => (
                <span
                  key={color}
                  className="h-5 w-5 rounded-md border border-[#111]/8 shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Typography card ── */}
        <motion.div
          className="absolute bottom-[36%] right-[22%] z-20 hidden md:block"
          style={{ transform: "translateZ(65px)" }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="rounded-xl border border-white/80 bg-white/90 px-3 py-2 shadow-[0_12px_32px_rgba(17,17,17,0.08)] backdrop-blur-md">
            <span className="font-[family-name:var(--font-inter)] text-2xl font-extrabold tracking-tight text-[#111]">Aa</span>
            <p className="text-[0.55rem] font-semibold text-[#999]">Brand Type</p>
          </div>
        </motion.div>

        {/* ── Brand mark ── */}
        <motion.div
          className="absolute right-[28%] top-[4%] z-30 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF6B2C] shadow-[0_16px_40px_rgba(255,107,44,0.4)] sm:h-12 sm:w-12"
          style={{ transform: "translateZ(90px)" }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08, rotate: 3 }}
        >
          <span className="text-base font-extrabold text-white sm:text-lg">B</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
