import type { Application } from "@splinetool/runtime";

const LOCKED_ZOOM = 1;

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

export function lockFaqSplineScene(spline: Application): {
  setActive: (active: boolean) => void;
  dispose: () => void;
} {
  spline.setZoom(LOCKED_ZOOM);

  const orbit = spline.controls?.orbitControls as OrbitControls | undefined;
  if (orbit) {
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

  const frozenScales = new Map(
    spline.getAllObjects().map((obj) => [
      obj.uuid,
      { x: obj.scale.x, y: obj.scale.y, z: obj.scale.z },
    ]),
  );

  let raf = 0;
  let active = false;

  const pinScales = () => {
    if (!active) {
      raf = 0;
      return;
    }

    for (const obj of spline.getAllObjects()) {
      const base = frozenScales.get(obj.uuid);
      if (!base) continue;

      if (
        Math.abs(obj.scale.x - base.x) > 0.0001 ||
        Math.abs(obj.scale.y - base.y) > 0.0001 ||
        Math.abs(obj.scale.z - base.z) > 0.0001
      ) {
        obj.scale.x = base.x;
        obj.scale.y = base.y;
        obj.scale.z = base.z;
      }
    }

    raf = requestAnimationFrame(pinScales);
  };

  const setActive = (next: boolean) => {
    active = next;

    if (active) {
      spline.play?.();
      if (!raf) {
        raf = requestAnimationFrame(pinScales);
      }
      return;
    }

    spline.stop?.();
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  return {
    setActive,
    dispose: () => setActive(false),
  };
}
