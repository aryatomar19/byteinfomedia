"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

function MiniBars({ heights }: { heights: number[] }) {
  return (
    <div className="flex h-14 items-end gap-1" aria-hidden>
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="w-2 rounded-t bg-gradient-to-t from-[#FF6B2C] to-[#FF6B2C]/40"
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 1.2, delay: 0.2 + i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
        />
      ))}
    </div>
  );
}

function MiniLine() {
  return (
    <svg viewBox="0 0 120 48" className="h-12 w-full" aria-hidden>
      <motion.path
        d="M4 40 L28 32 L52 36 L76 18 L96 22 L116 8"
        fill="none"
        stroke="url(#whyLine)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
      />
      <defs>
        <linearGradient id="whyLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B2C" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DashboardPanel({
  children,
  className,
  delay,
  parallaxX,
  parallaxY,
  depth,
}: {
  children: ReactNode;
  className: string;
  delay: number;
  parallaxX: ReturnType<typeof useSpring>;
  parallaxY: ReturnType<typeof useSpring>;
  depth: number;
}) {
  const x = useTransform(parallaxX, (v) => v * depth);
  const y = useTransform(parallaxY, (v) => v * depth);

  return (
    <motion.div
      className={`dm-why-panel absolute rounded-2xl border border-white/12 bg-white/8 p-3 backdrop-blur-xl ${className}`}
      style={{ x, y }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      {children}
    </motion.div>
  );
}

function SceneParticle({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.span
      className="dm-why-particle absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    />
  );
}

export function DmWhyScene({
  backgroundImage,
  imageAlt,
}: {
  backgroundImage: string;
  imageAlt: string;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      mouseX.set(nx);
      mouseY.set(ny);
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: nx * 28,
          y: ny * 18,
          duration: 0.9,
          ease: "power3.out",
          overwrite: true,
        });
      }
    };
    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      if (bgRef.current) {
        gsap.to(bgRef.current, { x: 0, y: 0, duration: 1.1, ease: "power3.out" });
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
    <div
      ref={sceneRef}
      className="dm-why-scene relative min-h-[440px] sm:min-h-[500px] lg:min-h-[580px]"
      role="img"
      aria-label={imageAlt}
    >
      <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FF6B2C]/20 to-[#3B82F6]/15 blur-3xl" aria-hidden />

      <div className="dm-why-scene__frame relative h-full min-h-[inherit] overflow-hidden rounded-3xl border border-white/10">
        <div
          ref={bgRef}
          className="absolute inset-[-6%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden
        />

        <div className="absolute inset-0 bg-[#050B1F]/50" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050B1F]/70 via-[#050B1F]/20 to-[#050B1F]/60" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,107,44,0.14),transparent_55%)]" aria-hidden />

        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden>
          <motion.line x1="22%" y1="28%" x2="48%" y2="42%" stroke="rgba(255,107,44,0.5)" strokeWidth="1" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.line x1="48%" y1="42%" x2="72%" y2="30%" stroke="rgba(59,130,246,0.5)" strokeWidth="1" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />
          <motion.line x1="48%" y1="42%" x2="58%" y2="68%" stroke="rgba(255,107,44,0.4)" strokeWidth="1" animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
          <motion.line x1="72%" y1="30%" x2="82%" y2="58%" stroke="rgba(59,130,246,0.4)" strokeWidth="1" animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }} />
        </svg>

        <motion.div
          className="pointer-events-none absolute left-[42%] top-[32%] z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-32 sm:w-32"
          style={{ x: useTransform(springX, (v) => v * 12), y: useTransform(springY, (v) => v * 10) }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3B82F6]/40 to-[#FF6B2C]/30 blur-md" />
          <div className="absolute inset-2 rounded-full border border-white/20 bg-gradient-to-br from-[#1a3a6b]/80 to-[#0d1f3c]/90 shadow-[0_0_40px_rgba(59,130,246,0.35)]" />
          <div className="absolute inset-4 rounded-full border border-[#FF6B2C]/30 opacity-60" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <SceneParticle x="12%" y="20%" delay={0} size={4} />
          <SceneParticle x="88%" y="18%" delay={0.6} size={5} />
          <SceneParticle x="76%" y="72%" delay={1} size={3} />
          <SceneParticle x="20%" y="78%" delay={0.3} size={4} />

          <DashboardPanel className="left-[6%] top-[12%] w-[34%]" delay={0} parallaxX={springX} parallaxY={springY} depth={16}>
            <MiniBars heights={[45, 72, 58, 88, 65, 95]} />
          </DashboardPanel>

          <DashboardPanel className="right-[6%] top-[10%] w-[32%]" delay={0.4} parallaxX={springX} parallaxY={springY} depth={20}>
            <MiniLine />
          </DashboardPanel>

          <DashboardPanel className="left-[8%] bottom-[14%] w-[30%]" delay={0.8} parallaxX={springX} parallaxY={springY} depth={14}>
            <MiniBars heights={[60, 85, 70, 100, 78]} />
          </DashboardPanel>

          <DashboardPanel className="right-[8%] bottom-[16%] w-[34%]" delay={0.2} parallaxX={springX} parallaxY={springY} depth={18}>
            <MiniLine />
            <div className="mt-2 flex gap-1">
              {[40, 65, 50, 80].map((h, i) => (
                <span key={i} className="flex-1 rounded-t bg-[#3B82F6]/60" style={{ height: `${h * 0.2}px` }} />
              ))}
            </div>
          </DashboardPanel>

          <DashboardPanel className="left-[38%] bottom-[8%] w-[28%]" delay={1} parallaxX={springX} parallaxY={springY} depth={12}>
            <div className="flex items-center justify-center gap-2">
              <span className="h-10 w-10 rounded-full border-2 border-[#FF6B2C]/50" />
              <span className="h-8 w-8 rounded-full border-2 border-[#3B82F6]/50" />
              <span className="h-6 w-6 rounded-full border-2 border-white/30" />
            </div>
          </DashboardPanel>

          <DashboardPanel className="right-[22%] top-[42%] w-[26%]" delay={0.6} parallaxX={springX} parallaxY={springY} depth={22}>
            <MiniBars heights={[55, 68, 92, 74]} />
          </DashboardPanel>
        </div>
      </div>
    </div>
  );
}
