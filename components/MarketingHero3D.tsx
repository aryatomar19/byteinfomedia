"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type SphereConfig = {
  id: string;
  size: number;
  x: string;
  y: string;
  depth: number;
  delay: number;
  tint: "orange" | "blue" | "neutral";
};

const SPHERES: SphereConfig[] = [
  { id: "s1", size: 220, x: "68%", y: "18%", depth: 28, delay: 0, tint: "orange" },
  { id: "s2", size: 160, x: "82%", y: "42%", depth: 36, delay: 0.4, tint: "blue" },
  { id: "s3", size: 120, x: "58%", y: "52%", depth: 22, delay: 0.8, tint: "neutral" },
  { id: "s4", size: 280, x: "74%", y: "68%", depth: 32, delay: 0.2, tint: "orange" },
  { id: "s5", size: 90, x: "88%", y: "24%", depth: 18, delay: 1.1, tint: "blue" },
  { id: "s6", size: 140, x: "52%", y: "78%", depth: 26, delay: 0.6, tint: "neutral" },
  { id: "s7", size: 70, x: "92%", y: "58%", depth: 14, delay: 1.4, tint: "orange" },
];

const tintStyles: Record<SphereConfig["tint"], string> = {
  orange:
    "bg-[radial-gradient(circle_at_30%_25%,rgba(255,107,53,0.35),rgba(255,107,53,0.08)_45%,rgba(255,255,255,0.04)_100%)] shadow-[0_0_60px_rgba(255,107,53,0.18)]",
  blue: "bg-[radial-gradient(circle_at_30%_25%,rgba(59,130,246,0.28),rgba(59,130,246,0.06)_45%,rgba(255,255,255,0.04)_100%)] shadow-[0_0_50px_rgba(59,130,246,0.14)]",
  neutral:
    "bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.02)_100%)] shadow-[0_0_40px_rgba(255,255,255,0.06)]",
};

function GlassSphere({
  sphere,
  parallaxX,
  parallaxY,
}: {
  sphere: SphereConfig;
  parallaxX: ReturnType<typeof useSpring>;
  parallaxY: ReturnType<typeof useSpring>;
}) {
  const x = useTransform(parallaxX, (v) => v * sphere.depth);
  const y = useTransform(parallaxY, (v) => v * sphere.depth);

  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{
        left: sphere.x,
        top: sphere.y,
        width: sphere.size,
        height: sphere.size,
        x,
        y,
        marginLeft: -sphere.size / 2,
        marginTop: -sphere.size / 2,
      }}
      aria-hidden
    >
      <motion.div
        className={`marketing-hero-sphere h-full w-full rounded-full border border-white/15 backdrop-blur-md ${tintStyles[sphere.tint]}`}
        animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
        transition={{
          duration: 5.5 + sphere.delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: sphere.delay,
        }}
      />
    </motion.div>
  );
}

export function MarketingHero3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 24 });

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
    <div className="marketing-hero-3d" aria-hidden>
      {SPHERES.map((sphere) => (
        <GlassSphere key={sphere.id} sphere={sphere} parallaxX={springX} parallaxY={springY} />
      ))}
    </div>
  );
}
