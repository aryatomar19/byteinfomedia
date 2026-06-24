"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef } from "react";
import type { Application } from "@splinetool/runtime";

const SPLINE_SCENE_URL = "/spline/particles-hand.splinecode";
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
  const containerRef = useRef<HTMLDivElement>(null);

  const onLoad = useCallback((spline: Application) => {
    lockSplineCamera(spline);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const blockWheel = (event: WheelEvent) => {
      event.preventDefault();
    };

    container.addEventListener("wheel", blockWheel, { passive: false });
    return () => container.removeEventListener("wheel", blockWheel);
  }, []);

  return (
    <div ref={containerRef} className="dm-hero-spline-bg spline-bg" aria-hidden>
      <Spline
        scene={SPLINE_SCENE_URL}
        onLoad={onLoad}
        renderOnDemand={false}
        className="dm-hero-spline-canvas"
      />
    </div>
  );
}
