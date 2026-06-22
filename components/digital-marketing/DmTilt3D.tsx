"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function DmTilt3D({
  children,
  className,
  max = 10,
  scale = 1,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 22 });
  const springY = useSpring(y, { stiffness: 160, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-max, max]);
  const liftZ = useTransform(springY, [-0.5, 0.5], [8, 14]);

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        className="h-full w-full"
        style={{
          rotateX,
          rotateY,
          z: liftZ,
          scale,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set((event.clientX - rect.left) / rect.width - 0.5);
          y.set((event.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
