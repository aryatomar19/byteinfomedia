"use client";

export function DmHeroVisual() {
  return (
    <div className="relative mx-auto flex w-full items-center justify-center">
      <div
        className="pointer-events-none absolute inset-[6%] rounded-[22px] bg-gradient-to-br from-[#FF6B2C]/30 via-transparent to-[#3B82F6]/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-[10%] rounded-[22px] shadow-[0_0_70px_rgba(255,107,44,0.22),0_0_100px_rgba(59,130,246,0.18)]"
        aria-hidden
      />

      <div className="relative w-full overflow-hidden rounded-[22px] shadow-[0_28px_80px_rgba(0,0,0,0.45),0_0_48px_rgba(255,107,44,0.16),0_0_64px_rgba(59,130,246,0.14)]">
        <img
          src="/images/dm-landing/hero-visual.png"
          alt="Digital marketing illustration with analytics dashboard, megaphone, target, and social media icons"
          className="block h-auto w-full object-contain"
          width={1536}
          height={1024}
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
