"use client";

import { memo } from "react";

const SPLINE_FAQ_URL = "https://my.spline.design/cubic-TgJVknRbsodiNyHIv8MIwo45/";

function DmFaqSplineBackgroundInner() {
  return (
    <div className="dm-faq-section__bg" aria-hidden>
      <iframe
        src={SPLINE_FAQ_URL}
        title=""
        loading="lazy"
        className="dm-faq-spline__iframe"
      />
    </div>
  );
}

export const DmFaqSplineBackground = memo(DmFaqSplineBackgroundInner);
