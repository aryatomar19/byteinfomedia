"use client";

import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, FileText, Heart, Share2 } from "lucide-react";
import { useEffect } from "react";

const WEBSITE_IMG = "/images/digital-marketing/website-development.jpg";
const SOCIAL_IMG = "/images/digital-marketing/social-media-marketing.jpg";

function FloatCard({
  children,
  className,
  delay = 0,
  y = 8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0] }}
      transition={{ duration: 4.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
      whileHover={{ scale: 1.03 }}
    >
      {children}
    </motion.div>
  );
}

function Particle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.span
      className="absolute h-1 w-1 rounded-full bg-[#FF6B2C]/50"
      style={{ left: x, top: y }}
      animate={{ y: [0, -10, 0], opacity: [0.15, 0.55, 0.15] }}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export function HeroBrandingScene() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 42, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 42, damping: 22 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const driftX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const driftY = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="relative aspect-[4/3] w-full min-h-[400px] sm:min-h-[440px] lg:min-h-[500px]"
      style={{ rotateX, rotateY, x: driftX, y: driftY, transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1c2238] via-[#121a2e] to-[#0a0f1c] shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
        <div className="grid-pattern-light absolute inset-0 opacity-50" />
        <div className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-[#FF6B2C]/20 blur-3xl" />
        <div className="absolute -right-12 bottom-4 h-48 w-48 rounded-full bg-[#FF6B2C]/12 blur-3xl" />

        <Particle delay={0} x="12%" y="18%" />
        <Particle delay={0.6} x="82%" y="24%" />
        <Particle delay={1.1} x="68%" y="78%" />

        {/* Design grid accent */}
        <div
          className="pointer-events-none absolute inset-[10%] rounded-xl opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,107,44,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />

        {/* Glowing connection lines */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <linearGradient id="brandLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF6B2C" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 95 95 Q 200 120 200 175"
            stroke="url(#brandLine)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.path
            d="M 305 85 Q 200 110 200 175"
            stroke="url(#brandLine)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.45 }}
          />
          <motion.path
            d="M 85 210 Q 200 190 200 175"
            stroke="url(#brandLine)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.55 }}
          />
          <motion.path
            d="M 310 215 Q 200 195 200 175"
            stroke="url(#brandLine)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.65 }}
          />
        </svg>

        {/* Central monitor — website development */}
        <FloatCard className="absolute left-1/2 top-[42%] z-20 w-[58%] -translate-x-1/2 -translate-y-1/2" delay={0} y={6}>
          <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#2a3048] to-[#1a2035] p-2 shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1c]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#FF6B2C]" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="ml-2 text-[0.5rem] text-white/40">byteinfomedia.com</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={WEBSITE_IMG} alt="" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/30 to-transparent" />
              </div>
            </div>
            <div className="mx-auto mt-1.5 h-7 w-3 rounded-b-md bg-white/10" />
          </div>
        </FloatCard>

        {/* SEO analytics */}
        <FloatCard className="absolute left-4 top-10 w-[38%] max-w-[178px] sm:left-5" delay={0.4} y={5}>
          <div className="glass-card rounded-2xl p-3">
            <div className="mb-2 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-[#FF6B2C]" />
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/80">SEO</span>
            </div>
            <p className="text-xl font-black text-[#FF6B2C]">+180%</p>
            <p className="text-[0.6rem] text-white/50">Organic traffic</p>
            <div className="mt-2 flex h-10 items-end gap-0.5">
              {[42, 58, 50, 72, 64, 88, 78].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/40"
                  animate={{ height: [`${h * 0.7}%`, `${h}%`, `${h * 0.7}%`] }}
                  transition={{ duration: 2.2, delay: i * 0.12, repeat: Infinity }}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </FloatCard>

        {/* Content creation */}
        <FloatCard className="absolute bottom-10 left-5 w-[34%] max-w-[155px]" delay={0.9} y={5}>
          <div className="glass-card rounded-2xl p-3">
            <div className="mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#FF6B2C]" />
              <span className="text-[0.65rem] font-bold text-white/80">Content</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/15" />
              <div className="h-1.5 w-[88%] rounded-full bg-white/10" />
              <div className="h-1.5 w-[72%] rounded-full bg-[#FF6B2C]/35" />
              <div className="h-1.5 w-[95%] rounded-full bg-white/8" />
            </div>
          </div>
        </FloatCard>

        {/* Social media campaign */}
        <FloatCard className="absolute right-4 top-12 w-[36%] max-w-[168px] sm:right-5" delay={0.6} y={6}>
          <div className="glass-card rounded-2xl p-3">
            <div className="mb-2 flex items-center gap-2">
              <Share2 className="h-4 w-4 text-[#FF6B2C]" />
              <span className="text-[0.65rem] font-bold text-white/80">Social</span>
            </div>
            <div className="h-12 overflow-hidden rounded-lg">
              <img src={SOCIAL_IMG} alt="" className="h-full w-full object-cover" />
            </div>
            <p className="mt-2 flex items-center gap-1 text-[0.6rem] font-bold text-[#FF6B2C]">
              <Heart className="h-3 w-3 fill-current" /> 3× engagement
            </p>
          </div>
        </FloatCard>

        {/* Smartphone */}
        <FloatCard className="absolute bottom-12 right-6 w-[13%] min-w-[48px] max-w-[62px]" delay={1.1} y={4}>
          <div className="rounded-[0.85rem] border-2 border-white/20 bg-[#1a2035] p-[2px] shadow-[0_20px_48px_rgba(0,0,0,0.4)]">
            <div className="aspect-[9/18] overflow-hidden rounded-[0.7rem]">
              <img src={SOCIAL_IMG} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </FloatCard>

        {/* Color palette */}
        <FloatCard className="absolute bottom-8 left-[36%] hidden sm:block" delay={1.3} y={3}>
          <div className="glass-card rounded-xl px-2.5 py-2">
            <div className="flex gap-1">
              {["#FF6B2C", "#FFFFFF", "#0A0F1C", "#52647a"].map((c) => (
                <span
                  key={c}
                  className="h-4 w-4 rounded-md border border-white/20"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </FloatCard>

        {/* Typography */}
        <FloatCard className="absolute right-[28%] top-6 hidden md:block" delay={0.2} y={4}>
          <div className="glass-card rounded-xl px-3 py-1.5">
            <span className="font-[family-name:var(--font-inter)] text-lg font-extrabold text-white/90">Aa</span>
          </div>
        </FloatCard>

        {/* Brand mark */}
        <motion.div
          className="absolute left-[44%] top-[16%] z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF6B2C] shadow-[0_8px_24px_rgba(255,107,44,0.45)]"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-black text-white">B</span>
        </motion.div>
      </div>

      <div className="absolute -bottom-3 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-[#FF6B2C]/25 blur-2xl" aria-hidden />
    </motion.div>
  );
}
