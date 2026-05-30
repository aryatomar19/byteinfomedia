"use client";

import Link from "next/link";
import { ArrowRight, Eye, Target } from "lucide-react";
import { aboutPreview } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function AboutPreview() {
  return (
    <section className="mesh-hero relative py-20 sm:py-28">
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#FF6B2C]/20 to-[#3884FF]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] rounded-bl-[4rem] border border-white/15 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
            <img src="/images/about-global.svg" alt="Global enterprise connectivity" className="w-full" />
            <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4">
              <p className="text-xs font-bold uppercase text-[#FF6B2C]">Global Delivery</p>
              <p className="mt-1 text-sm text-white/80">Cloud · DevOps · Security · AI</p>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="order-1 space-y-6 lg:order-2">
          <RevealItem>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">{aboutPreview.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{aboutPreview.title}</h2>
          </RevealItem>
          {aboutPreview.paragraphs.map((p) => (
            <RevealItem key={p.slice(0, 24)}>
              <p className="text-base leading-8 text-white/70">{p}</p>
            </RevealItem>
          ))}
          <RevealItem className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-5">
              <Target className="h-6 w-6 text-[#FF6B2C]" />
              <p className="mt-3 text-sm font-bold text-white">Mission</p>
              <p className="mt-2 text-sm leading-6 text-white/60">{aboutPreview.mission}</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <Eye className="h-6 w-6 text-[#FF6B2C]" />
              <p className="mt-3 text-sm font-bold text-white">Vision</p>
              <p className="mt-2 text-sm leading-6 text-white/60">{aboutPreview.vision}</p>
            </div>
          </RevealItem>
          <RevealItem>
            <Link
              href={aboutPreview.cta.href}
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-2 py-2 pr-5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-[#FF6B2C]/50"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FF6B2C] text-white">
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
