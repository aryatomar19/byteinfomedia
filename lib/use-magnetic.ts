"use client";

import { useCallback, useRef } from "react";

export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      node.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength],
  );

  const onLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate(0, 0)";
  }, []);

  return { ref, onMove, onLeave };
}
