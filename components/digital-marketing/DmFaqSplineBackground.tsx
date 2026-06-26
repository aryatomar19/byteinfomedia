"use client";

import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useRef } from "react";
import type { Application } from "@splinetool/runtime";
import { lockFaqSplineScene } from "@/components/digital-marketing/lockFaqSplineScene";

const SPLINE_SCENE_URL = "/spline/faq-cubic.splinecode";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

function DmFaqSplineBackgroundInner() {
  const coverRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<Application | null>(null);
  const unlockRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const cover = coverRef.current;
    if (!cover) return;

    const syncCanvasSize = () => {
      const { width, height } = cover.getBoundingClientRect();
      if (width > 0 && height > 0) {
        splineRef.current?.setSize(Math.round(width), Math.round(height));
      }
    };

    syncCanvasSize();

    const observer = new ResizeObserver(syncCanvasSize);
    observer.observe(cover);

    return () => observer.disconnect();
  }, []);

  useEffect(() => () => unlockRef.current?.(), []);

  const onLoad = useCallback((spline: Application) => {
    splineRef.current = spline;
    unlockRef.current?.();
    unlockRef.current = lockFaqSplineScene(spline);

    const cover = coverRef.current;
    if (cover) {
      const { width, height } = cover.getBoundingClientRect();
      if (width > 0 && height > 0) {
        spline.setSize(Math.round(width), Math.round(height));
      }
    }
  }, []);

  return (
    <div className="dm-faq-section__bg" aria-hidden>
      <div className="dm-faq-spline__stage">
        <div ref={coverRef} className="dm-faq-spline__cover">
          <Spline
            scene={SPLINE_SCENE_URL}
            onLoad={onLoad}
            renderOnDemand={false}
            className="dm-faq-spline-canvas"
          />
        </div>
      </div>
    </div>
  );
}

export const DmFaqSplineBackground = memo(DmFaqSplineBackgroundInner);
