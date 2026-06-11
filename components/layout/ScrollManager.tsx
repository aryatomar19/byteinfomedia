"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToHash, scrollToTop } from "@/lib/scroll";

export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        scrollToHash(hash, "smooth");
      });
      return () => window.cancelAnimationFrame(frame);
    }

    scrollToTop("instant");
  }, [pathname]);

  return null;
}
