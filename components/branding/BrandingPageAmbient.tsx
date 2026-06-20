"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function BrandingPageAmbient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="bs-blob bs-blob--1" />
        <div className="bs-blob bs-blob--2" />
        <div className="bs-blob bs-blob--3" />
        <div className="bs-mesh-gradient" />
      </div>
      <motion.div
        className="bs-cursor-glow pointer-events-none fixed z-50 hidden h-64 w-64 rounded-full lg:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(255,107,44,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </>
  );
}
