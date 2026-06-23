"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div
      className="dm-spline-hero__loader flex h-full w-full items-center justify-center rounded-3xl"
      aria-hidden
    >
      <div className="h-10 w-10 animate-pulse rounded-full bg-[#ff6b2c]/20" />
    </div>
  ),
});

const SPLINE_SCENE = "https://my.spline.design/distortingtypography-F5otuWlkFseIC0lCp2ZbKUfF/";

export function SplineMarketingHero() {
  return (
    <div className="dm-spline-hero relative h-[400px] w-full lg:h-[650px]">
      <Spline scene={SPLINE_SCENE} className="dm-spline-hero__canvas h-full w-full" />
    </div>
  );
}
