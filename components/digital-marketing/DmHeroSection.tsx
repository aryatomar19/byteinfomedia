"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

const DmHeroOrbCanvas = dynamic(() => import("@/components/digital-marketing/DmHeroOrbCanvas"), {
  ssr: false,
  loading: () => <div className="dm-hero-future__canvas dm-hero-future__canvas--fallback" aria-hidden />,
});

type HeroContent = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

const BG_LINES = [
  "BYTE INFOMEDIA",
  "DIGITAL MARKETING",
  "SEO • PPC • SOCIAL MEDIA",
  "LEAD GENERATION",
] as const;

export function DmHeroSection({ hero }: { hero: HeroContent }) {
  const heroRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [quality, setQuality] = useState<"high" | "low">("low");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const updateQuality = () => setQuality(mq.matches ? "high" : "low");
    updateQuality();
    mq.addEventListener("change", updateQuality);
    return () => mq.removeEventListener("change", updateQuality);
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".dm-hero-future__bg-line", { opacity: 0, x: 48 });
      gsap.set(".dm-hero-future__badge", { opacity: 0, y: 18 });
      gsap.set(".dm-hero-future__title-line", { opacity: 0, y: 36 });
      gsap.set(".dm-hero-future__desc", { opacity: 0, y: 24 });
      gsap.set(".dm-hero-future__actions", { opacity: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".dm-hero-future__bg-line", { opacity: 1, x: 0, duration: 1.1, stagger: 0.1 }, 0)
        .to(".dm-hero-future__badge", { opacity: 1, y: 0, duration: 0.7 }, 0.15)
        .to(".dm-hero-future__title-line", { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 }, 0.3)
        .to(".dm-hero-future__desc", { opacity: 1, y: 0, duration: 0.75 }, 0.55)
        .to(".dm-hero-future__actions", { opacity: 1, y: 0, duration: 0.7 }, 0.68);
    }, heroRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      ref={heroRef}
      className="dm-hero-future relative min-h-[100vh] w-full overflow-hidden"
      style={{ background: "#050816" }}
      aria-labelledby="dm-hero-heading"
    >
      <div className="dm-hero-future__scene" aria-hidden>
        {ready ? <DmHeroOrbCanvas mouseRef={mouseRef} quality={quality} /> : null}
      </div>

      <div className="dm-hero-future__bg-text pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {BG_LINES.map((line, index) => (
          <span
            key={line}
            className="dm-hero-future__bg-line"
            style={{ ["--line-index" as string]: index }}
          >
            {line}
          </span>
        ))}
      </div>

      <div className="dm-hero-future__vignette pointer-events-none absolute inset-0 z-[2]" aria-hidden />

      <div className="dm-container pointer-events-none relative z-10 flex min-h-[100vh] items-center py-14 sm:py-16">
        <div className="dm-hero-future__content pointer-events-auto max-w-[650px]">
          <span className="dm-hero-future__badge">{hero.badge}</span>

          <h1 id="dm-hero-heading" className="dm-hero-future__heading">
            <span className="dm-hero-future__title-line block">{hero.titleLine1}</span>
            <span className="dm-hero-future__title-line dm-hero-future__title-line--accent block">
              {hero.titleLine2}
            </span>
          </h1>

          <p className="dm-hero-future__desc">{hero.description}</p>

          <div className="dm-hero-future__actions mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-[#ff6b35] px-8 font-bold text-white shadow-[0_8px_32px_rgba(255,107,53,0.35)] transition-colors hover:bg-[#e85a1c]"
            >
              <Link href="/book-consultation/">
                {hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="dark"
              className={`${darkHeroSecondaryButtonClass} transition-colors`}
              asChild
            >
              <Link href="#dm-services" className="!text-white hover:!text-white">
                {hero.secondaryCta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
