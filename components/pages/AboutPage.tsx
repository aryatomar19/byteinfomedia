"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPage } from "@/data/about";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#E8F0FF] via-white to-[#FFF4EC] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-5xl">{aboutPage.hero.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[#52647a]">{aboutPage.hero.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img src="/images/about-global.svg" alt="" className="w-full rounded-[2rem] border border-[#0A0F1C]/8 shadow-lg" />
          </Reveal>
          <RevealStagger className="space-y-6">
            <RevealItem>
              <h2 className="text-2xl font-extrabold text-[#0A0F1C]">{aboutPage.overview.title}</h2>
            </RevealItem>
            {aboutPage.overview.content.map((p) => (
              <RevealItem key={p.slice(0, 20)}>
                <p className="text-base leading-7 text-[#52647a]">{p}</p>
              </RevealItem>
            ))}
            <RevealItem className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent>
                  <p className="text-sm font-bold text-[#0A0F1C]">Mission</p>
                  <p className="mt-2 text-sm leading-6 text-[#52647a]">{aboutPage.mission}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="text-sm font-bold text-[#0A0F1C]">Vision</p>
                  <p className="mt-2 text-sm leading-6 text-[#52647a]">{aboutPage.vision}</p>
                </CardContent>
              </Card>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      <section className="bg-[#F4F6FA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0A0F1C] sm:text-3xl">Why Choose BYTEINFOMEDIA</h2>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {aboutPage.whyChoose.map((item) => (
              <Reveal key={item}>
                <li className="flex items-start gap-3 rounded-2xl border border-[#0A0F1C]/8 bg-white px-5 py-4 text-sm text-[#52647a]">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#FF6B2C]" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0A0F1C] sm:text-3xl">Our Expertise</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPage.expertise.map((item) => (
              <Reveal key={item.title}>
                <Card className="h-full">
                  <CardContent>
                    <h3 className="font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#52647a]">{item.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0F1C] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.stats.map((stat) => (
              <Reveal key={stat.label} className="text-center">
                <p className="text-4xl font-black text-[#FF6B2C]">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild>
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
