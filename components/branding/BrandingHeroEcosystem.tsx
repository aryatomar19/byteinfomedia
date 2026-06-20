"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, FileText, Globe, Heart, Share2 } from "lucide-react";
import { useEffect } from "react";

function Particle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.span
      className="absolute rounded-full bg-[#FF6B2C]/30"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

const nodes = [
  { id: "web", Icon: Globe, label: "Website", x: "18%", y: "22%", z: 80 },
  { id: "seo", Icon: BarChart3, label: "SEO", x: "72%", y: "18%", z: 100 },
  { id: "content", Icon: FileText, label: "Content", x: "22%", y: "68%", z: 60 },
  { id: "social", Icon: Share2, label: "Social", x: "74%", y: "72%", z: 90 },
] as const;

export function BrandingHeroEcosystem() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 16 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 16 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-16, 16]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bs-ecosystem relative mx-auto aspect-square w-full max-w-[620px]">
      <div className="absolute inset-0 rounded-full bg-[#FF6B2C]/10 blur-3xl" aria-hidden />
      <Particle delay={0} x="10%" y="15%" size={10} />
      <Particle delay={0.5} x="85%" y="10%" size={7} />
      <Particle delay={1} x="50%" y="90%" size={8} />
      <Particle delay={1.5} x="30%" y="50%" size={5} />

      <motion.div
        className="bs-ecosystem-scene relative h-full w-full"
        style={{ rotateX, rotateY, x: parallaxX, y: parallaxY, transformStyle: "preserve-3d" }}
      >
        {/* Central hub */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#FF6B2C]/30 bg-white/95 shadow-[0_24px_64px_rgba(255,107,44,0.25)] backdrop-blur-sm sm:h-28 sm:w-28"
          style={{ transform: "translateZ(120px)" }}
          animate={{ scale: [1, 1.06, 1], boxShadow: ["0 24px 64px rgba(255,107,44,0.2)", "0 32px 80px rgba(255,107,44,0.35)", "0 24px 64px rgba(255,107,44,0.2)"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-center text-[0.6rem] font-extrabold uppercase tracking-wider text-[#FF6B2C] sm:text-xs">
            Brand
            <br />
            Hub
          </span>
        </motion.div>

        {/* Connection lines */}
        <svg className="absolute inset-0 z-0 h-full w-full" aria-hidden>
          {nodes.map((node) => (
            <motion.line
              key={node.id}
              x1="50%"
              y1="50%"
              x2={node.x}
              y2={node.y}
              stroke="rgba(255,107,44,0.25)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          ))}
        </svg>

        {/* Four floating service nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            className="absolute z-20"
            style={{ left: node.x, top: node.y, transform: `translate(-50%, -50%) translateZ(${node.z}px)` }}
            animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
            <div className="bs-ecosystem-node flex flex-col items-center gap-2 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_20px_56px_rgba(17,17,17,0.12)] backdrop-blur-sm sm:p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B2C]/12 text-[#FF6B2C] sm:h-14 sm:w-14">
                <node.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <span className="text-xs font-bold text-[#111]">{node.label}</span>
            </div>
          </motion.div>
        ))}

        {/* Orbit ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FF6B2C]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating likes for social accent */}
        <motion.span
          className="absolute right-[8%] top-[42%] flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-bold text-[#FF6B2C] shadow-md"
          animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Heart className="h-3 w-3 fill-current" /> +2.4k
        </motion.span>
      </motion.div>
    </div>
  );
}
