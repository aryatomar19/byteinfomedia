"use client";

import Link from "next/link";
import { ArrowRight, Eye, Target } from "lucide-react";
import { aboutPreview } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function AboutPreview() {
  return (
    <section className="section-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#0A0F1C]/8 shadow-[0_24px_64px_rgba(10,15,28,0.1)]">
            <img
              src={aboutPreview.image}
              alt="Enterprise technology partnership"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <RevealStagger className="order-1 space-y-6 lg:order-2">
          <RevealItem>
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
              {aboutPreview.title}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-lg leading-8 text-[#5f6f86]">{aboutPreview.description}</p>
          </RevealItem>
          <RevealItem className="grid gap-4 sm:grid-cols-2">
            <div className="enterprise-card rounded-2xl p-6">
              <Target className="h-6 w-6 text-[#FF6B2C]" />
              <p className="mt-4 text-sm font-bold text-[#0A0F1C]">Mission</p>
              <p className="mt-2 text-sm leading-6 text-[#5f6f86]">{aboutPreview.mission}</p>
            </div>
            <div className="enterprise-card rounded-2xl p-6">
              <Eye className="h-6 w-6 text-[#FF6B2C]" />
              <p className="mt-4 text-sm font-bold text-[#0A0F1C]">Vision</p>
              <p className="mt-2 text-sm leading-6 text-[#5f6f86]">{aboutPreview.vision}</p>
            </div>
          </RevealItem>
          <RevealItem>
            <Link
              href={aboutPreview.cta.href}
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#0A0F1C] transition hover:text-[#FF6B2C]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A0F1C] text-white transition group-hover:bg-[#FF6B2C]">
                <ArrowRight className="h-4 w-4" />
              </span>
              {aboutPreview.cta.label}
            </Link>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
