"use client";

import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, Heart, Search, Share2, TrendingUp } from "lucide-react";
import { useEffect } from "react";

function Float({ children, className, delay = 0, y = 8 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0] }}
      transition={{ duration: 4.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
      whileHover={{ scale: 1.04 }}
    >
      {children}
    </motion.div>
  );
}

export function DmHeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 22 });
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
      className="relative aspect-[4/3] w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]"
      style={{ rotateX, rotateY, x: driftX, y: driftY, transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#1a2238] via-[#121a2e] to-[#0a0f1c] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
        <div className="grid-pattern-light absolute inset-0 opacity-40" />
        <div className="absolute -left-12 top-6 h-52 w-52 rounded-full bg-[#FF6B2C]/20 blur-3xl" />
        <div className="absolute -right-8 bottom-4 h-44 w-44 rounded-full bg-[#FF6B2C]/10 blur-3xl" />

        {/* Central analytics dashboard */}
        <Float className="absolute left-1/2 top-[38%] z-20 w-[56%] -translate-x-1/2 -translate-y-1/2" delay={0}>
          <div className="dm-glass rounded-2xl p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/60">Growth Analytics</span>
              <TrendingUp className="h-4 w-4 text-[#FF6B2C]" />
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {[35, 48, 42, 58, 52, 72, 65, 88, 78, 95].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/40"
                  animate={{ height: [`${h * 0.6}%`, `${h}%`, `${h * 0.6}%`] }}
                  transition={{ duration: 2.5, delay: i * 0.1, repeat: Infinity }}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="mt-2 text-lg font-black text-[#FF6B2C]">+300% ROI</p>
          </div>
        </Float>

        {/* SEO panel */}
        <Float className="absolute left-4 top-10 w-[34%] max-w-[160px]" delay={0.4} y={6}>
          <div className="dm-glass rounded-2xl p-3">
            <Search className="mb-2 h-4 w-4 text-[#FF6B2C]" />
            <p className="text-sm font-black text-white">SEO</p>
            <p className="text-[0.6rem] text-white/50">Top rankings</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[#FF6B2C]"
                animate={{ width: ["60%", "92%", "60%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>
        </Float>

        {/* Social panel */}
        <Float className="absolute right-4 top-12 w-[34%] max-w-[160px]" delay={0.7} y={5}>
          <div className="dm-glass rounded-2xl p-3">
            <Share2 className="mb-2 h-4 w-4 text-[#FF6B2C]" />
            <p className="text-sm font-black text-white">Social</p>
            <p className="flex items-center gap-1 text-[0.6rem] font-bold text-[#FF6B2C]">
              <Heart className="h-3 w-3 fill-current" /> 3× reach
            </p>
          </div>
        </Float>

        {/* Marketing metrics */}
        <Float className="absolute bottom-10 left-5 w-[32%] max-w-[150px]" delay={1} y={5}>
          <div className="dm-glass rounded-2xl p-3">
            <BarChart3 className="mb-2 h-4 w-4 text-[#FF6B2C]" />
            <p className="text-xl font-black text-white">95%</p>
            <p className="text-[0.6rem] text-white/50">Satisfaction</p>
          </div>
        </Float>

        {/* Floating icons orbit */}
        <motion.div
          className="absolute bottom-[22%] right-[18%] flex h-20 w-20 items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[Share2, Search, BarChart3, TrendingUp].map((Icon, i) => (
            <span
              key={i}
              className="absolute flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm"
              style={{ transform: `rotate(${i * 90}deg) translateY(-38px) rotate(-${i * 90}deg)` }}
            >
              <Icon className="h-4 w-4 text-[#FF6B2C]" />
            </span>
          ))}
        </motion.div>
      </div>
      <div className="absolute -bottom-2 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-full bg-[#FF6B2C]/20 blur-2xl" aria-hidden />
    </motion.div>
  );
}
