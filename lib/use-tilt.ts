"use client";

import { useCallback, useRef } from "react";

type TiltOptions = {
  max?: number;
  scale?: number;
};

export function useTilt({ max = 12, scale = 1.02 }: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [max, scale],
  );

  const onLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }, []);

  return { ref, onMove, onLeave };
}
