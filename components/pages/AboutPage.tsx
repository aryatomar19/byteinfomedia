"use client";

import Link from "next/link";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { aboutPage } from "@/data/about";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { HeroCloudScene } from "@/components/visuals/HeroCloudScene";
import { cn } from "@/lib/utils";

function AboutStat({ numeric, suffix, label }: { numeric: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const spring = useSpring(0, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView) spring.set(numeric);
  }, [inView, numeric, spring]);

  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  return (
    <div ref={ref} className="text-center">
      <motion.p className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{display}</motion.p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-base">{label}</p>
    </div>
  );
}

export function AboutPage() {
  const MissionIcon = aboutPage.missionIcon;
  const VisionIcon = aboutPage.visionIcon;

  return (
    <>
      {/* Hero */}
      <section className="mesh-hero relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-[#FF6B2C]/35 bg-[#FF6B2C]/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF9A5C]">
              {aboutPage.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {aboutPage.hero.titleLine1}
              <span className="mt-2 block text-white/90">{aboutPage.hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">{aboutPage.hero.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/book-consultation/">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#assessment">Request Assessment</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <HeroCloudScene />
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mesh-section py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <article className="glass-card flex h-full min-h-[280px] flex-col rounded-[1.75rem] border-t-4 border-[#FF6B2C] p-8 sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FF6B2C]/15 text-[#FF6B2C]">
                  <MissionIcon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h2 className="mt-6 text-2xl font-extrabold text-white">{aboutPage.mission.title}</h2>
                <p className="mt-4 flex-1 text-base leading-8 text-white/65">{aboutPage.mission.body}</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="glass-card flex h-full min-h-[280px] flex-col rounded-[1.75rem] border-t-4 border-[#3884FF] p-8 sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#3884FF]/15 text-[#3884FF]">
                  <VisionIcon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h2 className="mt-6 text-2xl font-extrabold text-white">{aboutPage.vision.title}</h2>
                <p className="mt-4 flex-1 text-base leading-8 text-white/65">{aboutPage.vision.body}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mesh-hero py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-2xl">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Why us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Why Choose BYTEINFOMEDIA</h2>
            <p className="mt-4 text-base leading-7 text-white/60">
              Enterprise-grade consulting with the depth, discipline, and transparency expected from top cloud and security partners.
            </p>
          </Reveal>
          <RevealStagger className="grid gap-6 sm:grid-cols-2">
            {aboutPage.whyChoose.map((item) => (
              <RevealItem key={item.title}>
                <article
                  className={cn(
                    "glass-card group flex h-full min-h-[200px] flex-col rounded-[1.5rem] p-7 transition duration-300",
                    "hover:-translate-y-1.5 hover:border-[#FF6B2C]/35 hover:shadow-[0_28px_70px_rgba(255,107,44,0.12)]",
                  )}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#FF6B2C]/12 text-[#FF6B2C] transition group-hover:bg-[#FF6B2C] group-hover:text-white">
                    <item.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Expertise */}
      <section className="mesh-section py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Capabilities</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Our Expertise</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {aboutPage.expertise.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Link
                  href={item.href}
                  className={cn(
                    "glass-card group flex h-full min-h-[260px] flex-col rounded-[1.75rem] p-7 transition duration-300",
                    "hover:-translate-y-2 hover:border-[#FF6B2C]/30 hover:shadow-[0_32px_80px_rgba(0,0,0,0.35)]",
                  )}
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-[#FF6B2C] transition group-hover:bg-[#FF6B2C] group-hover:text-white">
                    <item.icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold text-white">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/60">{item.description}</p>
                  <span className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#FF6B2C] opacity-0 transition group-hover:opacity-100">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-[#060a14] py-20 sm:py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6B2C]/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Track record</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Results That Matter</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
            {aboutPage.stats.map((stat) => (
              <AboutStat key={stat.label} numeric={stat.numeric} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
