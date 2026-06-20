"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, FileText, Globe, Share2 } from "lucide-react";
import { useEffect } from "react";

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.span
      className="bs-particle absolute rounded-full bg-[#FF6B2C]/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export function BrandingHeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none">
      <div className="absolute inset-0 rounded-full bg-[#FF6B2C]/8 blur-3xl" aria-hidden />
      <FloatingParticle delay={0} x="12%" y="18%" size={8} />
      <FloatingParticle delay={0.8} x="78%" y="12%" size={6} />
      <FloatingParticle delay={1.4} x="65%" y="72%" size={10} />
      <FloatingParticle delay={0.4} x="22%" y="80%" size={5} />

      <motion.div
        className="bs-hero-scene relative h-full w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Website mockup */}
        <motion.div
          className="absolute left-[8%] top-[12%] z-20 w-[58%] rounded-xl border border-white/80 bg-white p-2 shadow-[0_32px_80px_rgba(17,17,17,0.12)]"
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-1.5 border-b border-[#111]/5 pb-2">
            <span className="h-2 w-2 rounded-full bg-[#FF6B2C]/80" />
            <span className="h-2 w-2 rounded-full bg-[#111]/10" />
            <span className="h-2 w-2 rounded-full bg-[#111]/10" />
          </div>
          <div className="mt-2 space-y-2 p-1">
            <div className="h-2 w-3/4 rounded bg-[#111]/8" />
            <div className="h-16 rounded-lg bg-gradient-to-br from-[#FF6B2C]/15 to-[#111]/5" />
            <div className="grid grid-cols-3 gap-1">
              <div className="h-6 rounded bg-[#111]/5" />
              <div className="h-6 rounded bg-[#111]/5" />
              <div className="h-6 rounded bg-[#FF6B2C]/20" />
            </div>
          </div>
        </motion.div>

        {/* SEO chart */}
        <motion.div
          className="absolute right-[4%] top-[28%] z-30 w-[42%] rounded-xl border border-white/80 bg-white p-3 shadow-[0_24px_60px_rgba(17,17,17,0.1)]"
          style={{ transform: "translateZ(90px)" }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-[#FF6B2C]">
            <BarChart3 className="h-4 w-4" />
            <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[#666]">SEO Growth</span>
          </div>
          <div className="mt-2 flex h-14 items-end gap-1">
            {[35, 50, 42, 68, 58, 85, 72].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/50"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.6 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Content doc */}
        <motion.div
          className="absolute bottom-[18%] left-[14%] z-10 flex w-[38%] items-center gap-2 rounded-xl border border-white/80 bg-white p-3 shadow-[0_20px_50px_rgba(17,17,17,0.08)]"
          style={{ transform: "translateZ(40px)" }}
          animate={{ y: [0, -5, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <FileText className="h-8 w-8 text-[#FF6B2C]" />
          <div className="space-y-1">
            <div className="h-1.5 w-12 rounded bg-[#111]/15" />
            <div className="h-1.5 w-16 rounded bg-[#111]/8" />
          </div>
        </motion.div>

        {/* Social orbit */}
        <motion.div
          className="absolute bottom-[22%] right-[10%] z-40 flex h-20 w-20 items-center justify-center"
          style={{ transform: "translateZ(70px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[
            { Icon: Share2, angle: 0 },
            { Icon: Globe, angle: 120 },
            { Icon: Share2, angle: 240 },
          ].map(({ Icon, angle }, i) => (
            <motion.span
              key={i}
              className="absolute flex h-9 w-9 items-center justify-center rounded-full border border-[#FF6B2C]/25 bg-white shadow-md"
              style={{
                transform: `rotate(${angle}deg) translateY(-36px) rotate(-${angle}deg)`,
              }}
            >
              <Icon className="h-4 w-4 text-[#FF6B2C]" />
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
