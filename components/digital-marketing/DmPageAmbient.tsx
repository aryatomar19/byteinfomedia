"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function AmbientParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.span
      className="dm-ambient-particle absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -22, 0], opacity: [0.15, 0.55, 0.15], scale: [1, 1.2, 1] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    />
  );
}

export function DmPageAmbient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 20 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
        <AmbientParticle delay={0} x="8%" y="22%" size={5} />
        <AmbientParticle delay={0.7} x="22%" y="68%" size={4} />
        <AmbientParticle delay={1.4} x="76%" y="34%" size={6} />
        <AmbientParticle delay={0.4} x="88%" y="72%" size={4} />
        <AmbientParticle delay={1.1} x="52%" y="12%" size={3} />
        <AmbientParticle delay={1.8} x="64%" y="88%" size={5} />
      </div>
      <motion.div
        className="dm-cursor-glow pointer-events-none fixed z-[2] hidden h-72 w-72 rounded-full lg:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,107,44,0.09) 0%, rgba(59,130,246,0.05) 42%, transparent 72%)",
        }}
        aria-hidden
      />
    </>
  );
}
