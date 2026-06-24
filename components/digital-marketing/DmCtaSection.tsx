"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { darkHeroSecondaryButtonClass } from "@/lib/utils";

export function DmCtaSection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}) {
  return (
    <section
      className="dm-section dm-cta-section relative"
      style={{ background: "#060B23" }}
      aria-labelledby="dm-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,107,44,0.12),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.05]" aria-hidden />

      <div className="dm-container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="dm-cta-heading" className="dm-heading dm-heading--xl text-white">
            {title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">{description}</p>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-[#FF6B2C] px-10 font-bold text-white shadow-[0_12px_40px_rgba(255,107,44,0.35)] hover:bg-[#e85a1c]"
            >
              <Link href="/book-consultation/">
                {primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="dark" className={darkHeroSecondaryButtonClass} asChild>
              <Link href="#dm-services" className="!text-white hover:!text-white">
                {secondaryCta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
