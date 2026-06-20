"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

function StudioParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.span
      className="absolute rounded-full bg-[#FF6B2C]/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -10, 0], opacity: [0.15, 0.45, 0.15] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export function BrandingHeroStudio() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const shadowX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const shadowY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const layerDrift = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const deskShadow = useTransform(
    [shadowX, shadowY],
    ([sx, sy]) => `${Number(sx)}px ${Number(sy) + 20}px 60px rgba(17,17,17,0.1)`,
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bs-studio-hero relative mx-auto w-full">
      <StudioParticle delay={0} x="8%" y="12%" size={4} />
      <StudioParticle delay={0.6} x="88%" y="18%" size={3} />
      <StudioParticle delay={1.2} x="72%" y="82%" size={5} />
      <StudioParticle delay={0.3} x="20%" y="78%" size={3} />

      <motion.div
        className="bs-studio-scene relative aspect-[4/3] w-full min-h-[340px] sm:min-h-[400px] lg:min-h-[520px] lg:max-h-[620px]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1400 }}
      >
        {/* Ambient studio lighting */}
        <div className="bs-studio-ambient absolute inset-0 rounded-[2rem]" aria-hidden>
          <div className="absolute inset-[8%] rounded-[1.75rem] bg-[radial-gradient(ellipse_at_55%_45%,rgba(255,107,44,0.14),transparent_65%)]" />
          <div className="absolute bottom-[12%] left-[10%] right-[10%] h-24 rounded-full bg-[#111]/[0.04] blur-2xl" />
        </div>

        <motion.div
          className="bs-studio-desk-shadow absolute bottom-[4%] left-[6%] right-[6%] h-[6%] rounded-[50%] bg-[#111]/[0.06] blur-xl"
          style={{ x: shadowX, y: shadowY }}
          aria-hidden
        />

        {/* Desk surface */}
        <motion.div
          className="bs-studio-desk absolute bottom-[6%] left-[4%] right-[4%] h-[38%] rounded-[1.25rem]"
          style={{ x: layerDrift, boxShadow: deskShadow, transform: "translateZ(20px)" }}
        />

        {/* Desktop monitor */}
        <motion.div
          className="bs-studio-monitor absolute left-[18%] top-[8%] z-20 w-[44%]"
          style={{ transform: "translateZ(80px)" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rounded-2xl border border-white/80 bg-gradient-to-b from-[#f5f5f5] to-[#e8e8e8] p-2 shadow-[0_32px_80px_rgba(17,17,17,0.14)]">
            <div className="overflow-hidden rounded-xl border border-[#111]/5 bg-white">
              <div className="flex items-center gap-1.5 border-b border-[#111]/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#FF6B2C]/80" />
                <span className="h-2 w-2 rounded-full bg-[#111]/8" />
                <span className="h-2 w-2 rounded-full bg-[#111]/8" />
              </div>
              <div className="p-3">
                <div className="h-2 w-2/3 rounded bg-[#111]/8" />
                <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-[#FF6B2C]/12 to-[#111]/4 sm:h-20" />
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  <div className="h-8 rounded bg-[#111]/4" />
                  <div className="h-8 rounded bg-[#111]/4" />
                  <div className="h-8 rounded bg-[#FF6B2C]/15" />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-1 h-8 w-3 rounded-b-lg bg-gradient-to-b from-[#ddd] to-[#ccc]" />
          <div className="mx-auto h-1.5 w-16 rounded-full bg-[#ccc]" />
        </motion.div>

        {/* Laptop */}
        <motion.div
          className="bs-studio-laptop absolute bottom-[22%] left-[6%] z-30 w-[28%]"
          style={{ transform: "rotateY(18deg) rotateX(4deg) translateZ(100px)" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="rounded-lg border border-white/90 bg-[#f0f0f0] p-1 shadow-[0_24px_56px_rgba(17,17,17,0.12)]">
            <div className="aspect-[16/10] overflow-hidden rounded-md bg-white p-2">
              <div className="h-1.5 w-3/4 rounded bg-[#111]/8" />
              <div className="mt-1.5 h-8 rounded bg-[#FF6B2C]/10" />
              <div className="mt-1 grid grid-cols-2 gap-1">
                <div className="h-4 rounded bg-[#111]/4" />
                <div className="h-4 rounded bg-[#111]/4" />
              </div>
            </div>
          </div>
          <div className="mx-2 h-1 rounded-b-md bg-[#d8d8d8]" />
        </motion.div>

        {/* Tablet */}
        <motion.div
          className="bs-studio-tablet absolute bottom-[28%] right-[10%] z-[25] w-[18%]"
          style={{ transform: "rotateY(-12deg) translateZ(90px)" }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="rounded-xl border-2 border-[#111]/8 bg-white p-1 shadow-[0_20px_48px_rgba(17,17,17,0.1)]">
            <div className="aspect-[3/4] rounded-lg bg-gradient-to-b from-[#FAFAFA] to-[#f0f0f0] p-2">
              <div className="grid grid-cols-2 gap-1">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="aspect-square rounded bg-[#111]/5" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Smartphone */}
        <motion.div
          className="bs-studio-phone absolute bottom-[14%] right-[22%] z-40 w-[9%] min-w-[36px]"
          style={{ transform: "translateZ(110px)" }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="rounded-[0.75rem] border-2 border-[#111]/10 bg-white p-0.5 shadow-[0_16px_40px_rgba(17,17,17,0.12)]">
            <div className="aspect-[9/16] overflow-hidden rounded-[0.55rem] bg-[#FAFAFA]">
              <div className="mx-auto mt-2 h-1 w-4 rounded-full bg-[#111]/10" />
              <div className="mt-2 space-y-1 px-1.5">
                <div className="h-6 rounded bg-[#FF6B2C]/12" />
                <div className="h-3 rounded bg-[#111]/5" />
                <div className="h-3 rounded bg-[#111]/5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content documents */}
        <motion.div
          className="absolute bottom-[34%] left-[32%] z-[15] w-[14%]"
          style={{ transform: "rotate(-6deg) translateZ(60px)" }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="rounded-lg border border-white bg-white/95 p-2 shadow-[0_12px_32px_rgba(17,17,17,0.08)] backdrop-blur-sm">
            <div className="space-y-1">
              <div className="h-1 w-full rounded bg-[#111]/10" />
              <div className="h-1 w-4/5 rounded bg-[#111]/6" />
              <div className="h-1 w-3/5 rounded bg-[#111]/6" />
            </div>
          </div>
          <div className="absolute -right-1 top-2 rounded-lg border border-white bg-white/90 p-2 shadow-md" style={{ transform: "rotate(4deg)" }}>
            <div className="space-y-1">
              <div className="h-1 w-8 rounded bg-[#FF6B2C]/20" />
              <div className="h-1 w-6 rounded bg-[#111]/6" />
            </div>
          </div>
        </motion.div>

        {/* Social media card */}
        <motion.div
          className="absolute right-[6%] top-[22%] z-30 w-[16%]"
          style={{ transform: "translateZ(70px)" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <div className="rounded-xl border border-white/60 bg-white/80 p-2.5 shadow-[0_16px_40px_rgba(17,17,17,0.08)] backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full bg-[#FF6B2C]/20" />
              <div className="h-1.5 flex-1 rounded bg-[#111]/8" />
            </div>
            <div className="mt-2 h-10 rounded-lg bg-gradient-to-br from-[#FF6B2C]/10 to-transparent" />
            <div className="mt-1.5 flex gap-2">
              <span className="text-[0.5rem] font-bold text-[#FF6B2C]">♥ 2.4k</span>
              <span className="text-[0.5rem] font-bold text-[#666]">↗ Share</span>
            </div>
          </div>
        </motion.div>

        {/* SEO ranking element */}
        <motion.div
          className="absolute left-[8%] top-[28%] z-10 w-[14%]"
          style={{ transform: "translateZ(50px)" }}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <div className="rounded-xl border border-white/70 bg-white/90 px-2 py-2 shadow-[0_12px_32px_rgba(17,17,17,0.06)] backdrop-blur-sm">
            <p className="text-[0.5rem] font-bold uppercase tracking-wider text-[#666]">Rankings</p>
            <div className="mt-1.5 flex h-8 items-end gap-0.5">
              {[40, 55, 48, 72, 65, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/40"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Brand identity shape */}
        <motion.div
          className="absolute left-[42%] top-[4%] z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B2C] shadow-[0_12px_32px_rgba(255,107,44,0.35)] sm:h-12 sm:w-12"
          style={{ transform: "translateZ(40px)" }}
          animate={{ rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-extrabold text-white sm:text-base">B</span>
        </motion.div>

        {/* Typography element */}
        <motion.div
          className="absolute bottom-[48%] right-[34%] z-10 rounded-lg border border-[#111]/6 bg-white px-2 py-1 shadow-sm"
          style={{ transform: "translateZ(45px)" }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <span className="font-[family-name:var(--font-inter)] text-lg font-extrabold text-[#111]/80">Aa</span>
        </motion.div>

        {/* Design tool — stylus */}
        <motion.div
          className="absolute bottom-[40%] left-[48%] z-[35] h-16 w-1.5 origin-bottom rounded-full bg-gradient-to-t from-[#111]/20 to-[#FF6B2C]/60"
          style={{ transform: "rotate(-35deg) translateZ(85px)" }}
          animate={{ rotate: [-35, -32, -35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glass accent panel */}
        <motion.div
          className="absolute inset-[12%] rounded-[1.5rem] border border-white/40 bg-white/20 backdrop-blur-[2px]"
          style={{ transform: "translateZ(10px)" }}
          aria-hidden
        />
      </motion.div>
    </div>
  );
}
