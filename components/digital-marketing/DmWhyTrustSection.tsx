"use client";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Check,
  LineChart,
  Shield,
  Target,
  Users,
} from "lucide-react";

const trustIcons: LucideIcon[] = [Target, Users, BarChart3, LineChart, Shield];

type WhyByteContent = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  trustIndicators: readonly string[];
};

export function DmWhyTrustSection({
  title,
  description,
  image,
  imageAlt,
  trustIndicators,
}: WhyByteContent) {
  return (
    <section
      id="dm-why"
      className="dm-section dm-why-trust dm-why-trust--compact relative"
      style={{ background: "#060B23" }}
      aria-labelledby="dm-why-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(255,107,53,0.08),transparent_50%)]" aria-hidden />

      <div className="dm-container relative">
        <div className="grid items-center gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="dm-why-image dm-why-image--clear group overflow-hidden rounded-3xl">
            <div className="relative aspect-[4/3] max-h-[358px] overflow-hidden lg:aspect-[5/4] lg:max-h-[403px]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="dm-why-trust__content">
            <h2 id="dm-why-heading" className="dm-why-trust__heading max-w-xl text-white">
              {title}
            </h2>
            <p className="dm-why-trust__desc mt-3 max-w-xl">{description}</p>

            <ul className="dm-why-trust__list mt-4">
              {trustIndicators.map((item, index) => {
                const Icon = trustIcons[index] ?? Check;
                return (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FF6B35]/12">
                      <Icon className="h-4 w-4 text-[#FF6B35]" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-semibold text-white/90">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
