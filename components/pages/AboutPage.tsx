"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPage } from "@/data/about";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { HeroCloudScene } from "@/components/visuals/HeroCloudScene";

export function AboutPage() {
  return (
    <>
      <section className="mesh-hero relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-extrabold text-gradient sm:text-5xl lg:text-6xl">{aboutPage.hero.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/70">{aboutPage.hero.description}</p>
            <Button className="mt-8" size="lg" asChild>
              <Link href="/#assessment">Request Assessment</Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <HeroCloudScene />
          </Reveal>
        </div>
      </section>

      <section className="mesh-section relative py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img src="/images/about-global.svg" alt="" className="w-full rounded-[2rem] border border-white/10 shadow-2xl" />
            </Reveal>
            <RevealStagger className="space-y-5">
              <RevealItem>
                <h2 className="text-3xl font-extrabold text-white">{aboutPage.overview.title}</h2>
              </RevealItem>
              {aboutPage.overview.content.map((p) => (
                <RevealItem key={p.slice(0, 20)}>
                  <p className="text-white/65 leading-8">{p}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      <section className="mesh-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="glass-card-light rounded-2xl p-8">
              <p className="text-sm font-bold uppercase text-[#FF6B2C]">Mission</p>
              <p className="mt-3 text-[#52647a] leading-7">{aboutPage.mission}</p>
            </div>
            <div className="glass-card-light rounded-2xl p-8">
              <p className="text-sm font-bold uppercase text-[#FF6B2C]">Vision</p>
              <p className="mt-3 text-[#52647a] leading-7">{aboutPage.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mesh-section py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-3xl font-extrabold text-white">Why Choose BYTEINFOMEDIA</h2>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {aboutPage.whyChoose.map((item) => (
              <Reveal key={item}>
                <li className="glass-card flex items-start gap-3 rounded-2xl px-5 py-4 text-sm text-white/75">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF6B2C]" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mesh-hero py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white">Our Expertise</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPage.expertise.map((item) => (
              <Reveal key={item.title}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <h3 className="font-extrabold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#FF6B2C] to-[#e85f24]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {aboutPage.stats.map((stat) => (
              <Reveal key={stat.label} className="text-center">
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-bold text-white/85">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="dark" size="lg" asChild>
              <Link href="/#assessment">
                Request Free Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
