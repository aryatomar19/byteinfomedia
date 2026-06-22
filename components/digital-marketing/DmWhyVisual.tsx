"use client";

import {
  AtSign,
  BarChart3,
  LineChart,
  MessageCircle,
  Search,
  Share2,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const FLOATING_ELEMENTS = [
  { Icon: Search, label: "SEO", x: "8%", y: "14%", delay: 0, depth: 14 },
  { Icon: BarChart3, label: "Analytics", x: "78%", y: "18%", delay: 0.4, depth: 18 },
  { Icon: LineChart, label: "Growth", x: "84%", y: "52%", delay: 0.8, depth: 16 },
  { Icon: Target, label: "Target", x: "10%", y: "62%", delay: 0.2, depth: 12 },
  { Icon: TrendingUp, label: "ROI", x: "72%", y: "78%", delay: 1, depth: 20 },
] as const;

const SOCIAL_ICONS = [
  { Icon: Share2, x: "18%", y: "28%", delay: 0.3 },
  { Icon: AtSign, x: "62%", y: "8%", delay: 0.7 },
  { Icon: MessageCircle, x: "88%", y: "36%", delay: 1.1 },
] as const;

function FloatingBadge({
  Icon,
  label,
  x,
  y,
  delay,
  parallaxX,
  parallaxY,
  depth,
}: {
  Icon: typeof Search;
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
      className="dm-why-float-badge pointer-events-none absolute flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md"
      style={{ left: x, top: y, x: dx, y: dy }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.2 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF6B2C]/20">
        <Icon className="h-4 w-4 text-[#FF6B2C]" />
      </span>
      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/75">{label}</span>
    </motion.div>
  );
}

function FloatingSocial({
  Icon,
  x,
  y,
  delay,
  parallaxX,
  parallaxY,
}: {
  Icon: typeof Share2;
  x: string;
  y: string;
  delay: number;
  parallaxX: ReturnType<typeof useSpring>;
  parallaxY: ReturnType<typeof useSpring>;
}) {
  const dx = useTransform(parallaxX, (v) => v * 10);
  const dy = useTransform(parallaxY, (v) => v * 10);

  return (
    <motion.span
      className="dm-why-float-social pointer-events-none absolute flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/8 backdrop-blur-md"
      style={{ left: x, top: y, x: dx, y: dy }}
      animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
      transition={{ duration: 3.8 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <Icon className="h-4 w-4 text-[#FF6B2C]" />
    </motion.span>
  );
}

export function DmWhyVisual({ image, imageAlt }: { image: string; imageAlt: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 48, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 48, damping: 24 });
  const illustrationX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const illustrationY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const tiltX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };
    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="dm-why-visual relative" style={{ perspective: 1000 }}>
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FF6B2C]/25 via-transparent to-[#3B82F6]/20 blur-3xl"
        aria-hidden
      />
      <div className="dm-why-visual__frame relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#121a2e] to-[#0A0F1C] p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {FLOATING_ELEMENTS.map((item) => (
            <FloatingBadge key={item.label} {...item} parallaxX={springX} parallaxY={springY} />
          ))}
          {SOCIAL_ICONS.map(({ Icon, x, y, delay }) => (
            <FloatingSocial key={x} Icon={Icon} x={x} y={y} delay={delay} parallaxX={springX} parallaxY={springY} />
          ))}
        </div>

        <motion.div
          className="relative z-10 flex min-h-[360px] items-center justify-center sm:min-h-[420px] lg:min-h-[500px]"
          style={{
            x: illustrationX,
            y: illustrationY,
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="max-h-[420px] w-full object-contain sm:max-h-[460px] lg:max-h-[500px]"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </div>
  );
}
