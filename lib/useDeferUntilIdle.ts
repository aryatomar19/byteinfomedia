"use client";

import { useEffect, useState } from "react";

export function useDeferUntilIdle(timeout = 1200) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const run = () => setReady(true);

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run, { timeout });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(run, 100);
    return () => window.clearTimeout(timer);
  }, [timeout]);

  return ready;
}
