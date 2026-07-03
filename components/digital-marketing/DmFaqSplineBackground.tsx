"use client";

import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useRef } from "react";
import type { Application } from "@splinetool/runtime";
import { lockFaqSplineScene } from "@/components/digital-marketing/lockFaqSplineScene";
import { useInView } from "@/lib/useInView";

const SPLINE_SCENE_URL = "/spline/faq-cubic.splinecode";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

function DmFaqSplineBackgroundInner() {
  const { ref: viewportRef, inView } = useInView<HTMLDivElement>({
    rootMargin: "320px 0px",
    threshold: 0.01,
  });
  const coverRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<Application | null>(null);
  const controllerRef = useRef<ReturnType<typeof lockFaqSplineScene> | null>(null);
  const shouldMount = inView;

  useEffect(() => {
    const cover = coverRef.current;
    if (!cover || !shouldMount) return;

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
  }, [shouldMount]);

  const inViewRef = useRef(inView);

  useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);

  useEffect(() => {
    controllerRef.current?.setActive(inView);
  }, [inView]);

  useEffect(() => () => controllerRef.current?.dispose(), []);

  const onLoad = useCallback((spline: Application) => {
    splineRef.current = spline;
    controllerRef.current?.dispose();
    controllerRef.current = lockFaqSplineScene(spline);
    controllerRef.current.setActive(inViewRef.current);

    const cover = coverRef.current;
    if (cover) {
      const { width, height } = cover.getBoundingClientRect();
      if (width > 0 && height > 0) {
        spline.setSize(Math.round(width), Math.round(height));
      }
    }
  }, []);

  return (
    <div ref={viewportRef} className="dm-faq-section__bg" aria-hidden>
      <div className="dm-faq-spline__stage">
        <div ref={coverRef} className="dm-faq-spline__cover">
          {shouldMount ? (
            <Spline
              scene={SPLINE_SCENE_URL}
              onLoad={onLoad}
              renderOnDemand
              className="dm-faq-spline-canvas"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export const DmFaqSplineBackground = memo(DmFaqSplineBackgroundInner);
