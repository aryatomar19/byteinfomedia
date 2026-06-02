"use client";

import { aboutPage } from "@/data/about";

/** About Us hero only — same frame as HeroCloudScene, real enterprise photography. */
export function AboutHeroVisual() {
  const { heroImage } = aboutPage;

  return (
    <div className="relative aspect-[4/3] w-full min-h-[420px]">
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="h-full w-full object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0a0f1c]/75 via-[#0a0f1c]/45 to-[#121a2e]/65"
          aria-hidden
        />
      </div>

      <div className="absolute -bottom-3 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-[#FF6B2C]/30 blur-2xl" />
    </div>
  );
}
