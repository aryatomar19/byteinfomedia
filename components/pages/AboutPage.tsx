"use client";

import Link from "next/link";
import { aboutPage } from "@/data/about";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { AboutHeroVisual } from "@/components/visuals/AboutHeroVisual";
import { cn } from "@/lib/utils";

function ExpertiseEnterpriseVisual() {
  return (
    <Reveal className="mb-8 sm:mb-10">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
        <img
          src={aboutPage.expertiseBanner.src}
          alt={aboutPage.expertiseBanner.alt}
          className="aspect-[21/9] w-full object-cover object-center sm:aspect-[2.4/1]"
        />
      </div>
    </Reveal>
  );
}

export function AboutPage() {
  const MissionIcon = aboutPage.missionIcon;
  const VisionIcon = aboutPage.visionIcon;

  return (
    <>
      {/* Hero */}
      <section className="mesh-hero relative overflow-hidden py-14 sm:py-16">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-[#FF6B2C]/35 bg-[#FF6B2C]/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF9A5C]">
              {aboutPage.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {aboutPage.hero.titleLine1}
              <span className="mt-2 block text-white/90">{aboutPage.hero.titleLine2}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">{aboutPage.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/book-consultation/#consultation">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#assessment">Request Assessment</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <AboutHeroVisual />
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mesh-section py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <Reveal>
              <article className="glass-card flex h-full min-h-[240px] flex-col rounded-[1.75rem] border-t-4 border-[#FF6B2C] p-7 sm:p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FF6B2C]/15 text-[#FF6B2C]">
                  <MissionIcon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold text-white">{aboutPage.mission.title}</h2>
                <p className="mt-3 flex-1 text-base leading-7 text-white/65">{aboutPage.mission.body}</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="glass-card flex h-full min-h-[240px] flex-col rounded-[1.75rem] border-t-4 border-[#3884FF] p-7 sm:p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#3884FF]/15 text-[#3884FF]">
                  <VisionIcon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold text-white">{aboutPage.vision.title}</h2>
                <p className="mt-3 flex-1 text-base leading-7 text-white/65">{aboutPage.vision.body}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mesh-hero py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 max-w-2xl">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Why us</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Why Choose BYTEINFOMEDIA</h2>
            <p className="mt-3 text-base leading-7 text-white/60">
              Enterprise-grade consulting with the depth, discipline, and transparency expected from top cloud and security partners.
            </p>
          </Reveal>
          <RevealStagger className="grid gap-5 sm:grid-cols-2">
            {aboutPage.whyChoose.map((item) => (
              <RevealItem key={item.title}>
                <article
                  className={cn(
                    "glass-card group flex h-full min-h-[188px] flex-col rounded-[1.5rem] p-6 transition duration-300",
                    "hover:-translate-y-1.5 hover:border-[#FF6B2C]/35 hover:shadow-[0_28px_70px_rgba(255,107,44,0.12)]",
                  )}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#FF6B2C]/12 text-[#FF6B2C] transition group-hover:bg-[#FF6B2C] group-hover:text-white">
                    <item.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{item.description}</p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Expertise — last section before footer */}
      <section className="mesh-section pb-14 pt-14 sm:pb-16 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Capabilities</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Our Expertise</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              End-to-end cloud, security, operations, AI, and digital marketing capabilities for enterprise transformation.
            </p>
          </Reveal>

          <ExpertiseEnterpriseVisual />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aboutPage.expertise.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[1.85rem] border border-white/12 p-8 sm:p-9",
                    "bg-gradient-to-br from-[#121a2e] via-[#0d1424] to-[#060a14]",
                    "shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-300",
                    "hover:-translate-y-2 hover:border-[#FF6B2C]/40 hover:shadow-[0_32px_80px_rgba(255,107,44,0.18)]",
                  )}
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF6B2C]/10 blur-2xl transition group-hover:bg-[#FF6B2C]/20" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#FF6B2C] transition group-hover:border-[#FF6B2C]/40 group-hover:bg-[#FF6B2C] group-hover:text-white">
                    <item.icon className="h-8 w-8" strokeWidth={1.75} />
                  </span>
                  <h3 className="relative mt-7 text-xl font-extrabold text-white sm:text-2xl">{item.title}</h3>
                  <p className="relative mt-4 flex-1 text-base leading-7 text-white/60">{item.description}</p>
                  <span className="relative mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#FF6B2C]">
                    Explore service →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
