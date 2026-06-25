"use client";

import { memo, useEffect, useRef } from "react";

const SPLINE_FAQ_URL = "https://my.spline.design/cubic-TgJVknRbsodiNyHIv8MIwo45/";
const SPLINE_HEIGHT = 1080;

function DmFaqSplineBackgroundInner() {
  const bgRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={bgRef} className="dm-faq-section__bg" aria-hidden>
      <div className="dm-faq-spline__stage">
        <iframe src={SPLINE_FAQ_URL} title="" loading="lazy" className="dm-faq-spline__iframe" />
      </div>
    </div>
  );
}

export const DmFaqSplineBackground = memo(DmFaqSplineBackgroundInner);
