"use client";

import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useRef } from "react";
import type { Application } from "@splinetool/runtime";
import { lockFaqSplineScene } from "@/components/digital-marketing/lockFaqSplineScene";

const SPLINE_SCENE_URL = "/spline/faq-cubic.splinecode";
const SPLINE_HEIGHT = 1080;

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

function DmFaqSplineBackgroundInner() {
  const bgRef = useRef<HTMLDivElement>(null);
  const unlockRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const updateScale = () => {
      const { width, height } = bg.getBoundingClientRect();
      const scale = Math.max(height / SPLINE_HEIGHT, width / 1280);
      bg.style.setProperty("--dm-faq-spline-scale", scale.toFixed(4));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(bg);

    return () => observer.disconnect();
  }, []);

  useEffect(() => () => unlockRef.current?.(), []);

  const onLoad = useCallback((spline: Application) => {
    unlockRef.current?.();
    unlockRef.current = lockFaqSplineScene(spline);
  }, []);

  return (
    <div ref={bgRef} className="dm-faq-section__bg" aria-hidden>
      <div className="dm-faq-spline__stage">
        <Spline
          scene={SPLINE_SCENE_URL}
          onLoad={onLoad}
          renderOnDemand={false}
          className="dm-faq-spline-canvas"
        />
      </div>
    </div>
  );
}

export const DmFaqSplineBackground = memo(DmFaqSplineBackgroundInner);
