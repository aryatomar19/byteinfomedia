"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, FileText, Globe, Share2 } from "lucide-react";
import { useEffect } from "react";

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.span
      className="bs-particle absolute rounded-full bg-[#FF6B2C]/25"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -16, 0], opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export function BrandingHeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [14, -14]);

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
    <div className="bs-hero-visual-wrap relative mx-auto h-full w-full min-h-[420px] lg:min-h-[560px]">
      <div className="absolute -inset-8 rounded-[3rem] bg-[#FF6B2C]/12 blur-3xl" aria-hidden />
      <FloatingParticle delay={0} x="8%" y="12%" size={12} />
      <FloatingParticle delay={0.8} x="82%" y="8%" size={8} />
      <FloatingParticle delay={1.4} x="70%" y="78%" size={14} />
      <FloatingParticle delay={0.4} x="18%" y="85%" size={7} />
      <FloatingParticle delay={1} x="50%" y="5%" size={6} />

      <motion.div
        className="bs-hero-scene bs-hero-scene--immersive relative h-full w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Photo layer behind 3D */}
        <motion.div
          className="absolute left-[5%] top-[8%] z-0 w-[55%] overflow-hidden rounded-2xl border-4 border-white shadow-[0_40px_100px_rgba(17,17,17,0.2)]"
          style={{ transform: "translateZ(20px) rotateY(-6deg)" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/images/digital-marketing/hero.jpg"
            alt=""
            className="h-48 w-full object-cover sm:h-56 lg:h-64"
            aria-hidden
          />
        </motion.div>

        {/* Website mockup */}
        <motion.div
          className="absolute left-[2%] top-[28%] z-20 w-[62%] rounded-2xl border border-white/90 bg-white p-3 shadow-[0_40px_100px_rgba(17,17,17,0.15)]"
          style={{ transform: "translateZ(80px) rotateY(-8deg)" }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-1.5 border-b border-[#111]/5 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B2C]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#111]/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#111]/10" />
          </div>
          <div className="mt-3 space-y-2 p-1">
            <div className="h-2.5 w-3/4 rounded bg-[#111]/8" />
            <div className="h-24 rounded-xl bg-gradient-to-br from-[#FF6B2C]/20 to-[#111]/5 sm:h-28" />
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-8 rounded bg-[#111]/5" />
              <div className="h-8 rounded bg-[#111]/5" />
              <div className="h-8 rounded bg-[#FF6B2C]/25" />
            </div>
          </div>
        </motion.div>

        {/* SEO chart */}
        <motion.div
          className="absolute right-[0%] top-[18%] z-30 w-[48%] rounded-2xl border border-white/90 bg-white p-4 shadow-[0_32px_80px_rgba(17,17,17,0.14)]"
          style={{ transform: "translateZ(110px) rotateY(10deg)" }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-[#FF6B2C]">
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#666]">SEO Growth</span>
          </div>
          <div className="mt-3 flex h-20 items-end gap-1.5 sm:h-24">
            {[35, 50, 42, 68, 58, 85, 72, 95].map((h, i) => (
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
          className="absolute bottom-[12%] left-[10%] z-10 flex w-[42%] items-center gap-3 rounded-2xl border border-white/90 bg-white p-4 shadow-[0_28px_70px_rgba(17,17,17,0.12)]"
          style={{ transform: "translateZ(50px) rotate(-3deg)" }}
          animate={{ y: [0, -8, 0], rotate: [-3, 0, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <FileText className="h-10 w-10 text-[#FF6B2C]" />
          <div className="space-y-2">
            <div className="h-2 w-16 rounded bg-[#111]/15" />
            <div className="h-2 w-20 rounded bg-[#111]/8" />
            <div className="h-2 w-12 rounded bg-[#111]/8" />
          </div>
        </motion.div>

        {/* Social orbit */}
        <motion.div
          className="absolute bottom-[16%] right-[6%] z-40 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
          style={{ transform: "translateZ(90px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[
            { Icon: Share2, angle: 0 },
            { Icon: Globe, angle: 90 },
            { Icon: Share2, angle: 180 },
            { Icon: Globe, angle: 270 },
          ].map(({ Icon, angle }, i) => (
            <motion.span
              key={i}
              className="absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FF6B2C]/25 bg-white shadow-[0_12px_32px_rgba(17,17,17,0.12)]"
              style={{
                transform: `rotate(${angle}deg) translateY(-52px) rotate(-${angle}deg)`,
              }}
            >
              <Icon className="h-5 w-5 text-[#FF6B2C]" />
            </motion.span>
          ))}
        </motion.div>

        {/* Orange accent ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#FF6B2C]/20"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
        />
      </motion.div>
    </div>
  );
}
