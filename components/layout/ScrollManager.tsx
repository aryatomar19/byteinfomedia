"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { forceScrollToTop, initScrollRestoration, isIntentionalHash, scrollToHash } from "@/lib/scroll";

function runAfterNavigation(callback: () => void) {
  callback();
  const frame = window.requestAnimationFrame(callback);
  const timeout = window.setTimeout(callback, 0);

  return () => {
    window.cancelAnimationFrame(frame);
    window.clearTimeout(timeout);
  };
}

export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    initScrollRestoration();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (isIntentionalHash(hash)) {
      return runAfterNavigation(() => {
        scrollToHash(hash, "instant");
      });
    }

    return runAfterNavigation(() => {
      forceScrollToTop();
    });
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (isIntentionalHash(hash)) {
        scrollToHash(hash, "instant");
        return;
      }

      forceScrollToTop();
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
