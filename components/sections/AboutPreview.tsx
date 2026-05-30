"use client";

import Link from "next/link";
import { ArrowRight, Eye, Target } from "lucide-react";
import { aboutPreview } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function AboutPreview() {
  return (
    <section className="bg-[#F4F6FA] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2.5rem] rounded-bl-[5rem] border border-[#0A0F1C]/8 shadow-[0_24px_70px_rgba(10,15,28,0.08)]">
            <img src="/images/about-global.svg" alt="Global technology connectivity" className="w-full object-cover" />
          </div>
        </Reveal>

        <RevealStagger className="space-y-6">
          <RevealItem>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B2C]">{aboutPreview.eyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">{aboutPreview.title}</h2>
          </RevealItem>
          {aboutPreview.paragraphs.map((p) => (
            <RevealItem key={p.slice(0, 24)}>
              <p className="text-base leading-7 text-[#52647a]">{p}</p>
            </RevealItem>
          ))}
          <RevealItem className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#0A0F1C]/8 bg-white p-5">
              <Target className="h-6 w-6 text-[#FF6B2C]" />
              <p className="mt-3 text-sm font-bold text-[#0A0F1C]">Mission</p>
              <p className="mt-2 text-sm leading-6 text-[#52647a]">{aboutPreview.mission}</p>
            </div>
            <div className="rounded-2xl border border-[#0A0F1C]/8 bg-white p-5">
              <Eye className="h-6 w-6 text-[#FF6B2C]" />
              <p className="mt-3 text-sm font-bold text-[#0A0F1C]">Vision</p>
              <p className="mt-2 text-sm leading-6 text-[#52647a]">{aboutPreview.vision}</p>
            </div>
          </RevealItem>
          <RevealItem>
            <Link
              href={aboutPreview.cta.href}
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#0A0F1C] transition hover:text-[#FF6B2C]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0A0F1C] text-white transition group-hover:bg-[#FF6B2C]">
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
