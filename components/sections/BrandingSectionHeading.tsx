"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

const titleClassName =
  "font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl lg:text-[2.125rem] lg:tracking-[-0.03em] xl:text-4xl xl:tracking-[-0.035em]";

type BrandingSectionHeadingProps = {
  children: ReactNode;
};

export function BrandingSectionHeading({ children }: BrandingSectionHeadingProps) {
  return (
    <Reveal className="section-heading mx-auto max-w-2xl text-center sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
      <h2 className={titleClassName}>{children}</h2>
    </Reveal>
  );
}

export function BrandingFaqHeading({ children }: BrandingSectionHeadingProps) {
  return (
    <Reveal className="section-heading text-center">
      <h2 className={titleClassName}>{children}</h2>
    </Reveal>
  );
}
