"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef } from "react";
import type { Application } from "@splinetool/runtime";
import { useDeferUntilIdle } from "@/lib/useDeferUntilIdle";
import { useInView } from "@/lib/useInView";

const SPLINE_SCENE_URL = "/spline/happy-robot.splinecode";
const LOCKED_ZOOM = 1;

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

type OrbitControls = {
  enableZoom?: boolean;
  enableRotate?: boolean;
  enablePan?: boolean;
  enableDamping?: boolean;
  hoverRotatePanMode?: number;
  hoverRotatePanStrength?: number;
  isTouchZoom?: boolean;
  autoRotate?: boolean;
  zoomLimitsEnabled?: boolean;
  zoomLimits?: { min: number; max: number };
};

function lockSplineCamera(spline: Application) {
  spline.setZoom(LOCKED_ZOOM);

  const orbit = spline.controls?.orbitControls as OrbitControls | undefined;
  if (!orbit) return;

  orbit.enableZoom = false;
  orbit.enableRotate = false;
  orbit.enablePan = false;
  orbit.enableDamping = false;
  orbit.hoverRotatePanMode = 0;
  orbit.hoverRotatePanStrength = 0;
  orbit.isTouchZoom = false;
  orbit.autoRotate = false;
  orbit.zoomLimitsEnabled = true;
  orbit.zoomLimits = { min: LOCKED_ZOOM, max: LOCKED_ZOOM };
}

export function MarketingHero3D() {
  const ready = useDeferUntilIdle();
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "0px", threshold: 0 });
  const splineRef = useRef<Application | null>(null);
  const inViewRef = useRef(inView);

  useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);

  useEffect(() => {
    const spline = splineRef.current;
    if (!spline) return;

    if (inView) {
      spline.play?.();
    } else {
      spline.stop?.();
    }
  }, [inView]);

  const onLoad = useCallback((spline: Application) => {
    splineRef.current = spline;
    lockSplineCamera(spline);
    spline.setBackgroundColor("#000000");

    if (!inViewRef.current) {
      spline.stop?.();
    }
  }, []);

  return (
    <div ref={ref} className="dm-hero-spline-bg dm-hero-spline-bg--robot spline-bg" aria-hidden>
      {ready ? (
        <Spline
          scene={SPLINE_SCENE_URL}
          onLoad={onLoad}
          renderOnDemand
          className="dm-hero-spline-canvas dm-hero-spline-canvas--robot"
        />
      ) : null}
    </div>
  );
}
