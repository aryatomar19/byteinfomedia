"use client";

import type { ComponentType } from "react";
import { Cloud, DollarSign, Headphones, Lock, Monitor, Rocket, Shield, Users } from "lucide-react";
import { whyChooseUs } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  aws: Cloud,
  migrate: Rocket,
  devops: Monitor,
  security: Lock,
  noc: Monitor,
  finops: DollarSign,
  support: Headphones,
  consult: Users,
};

export function WhyByteInfomedia() {
  return (
    <section className="mesh-light relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#FF6B2C]/8 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Why BYTEINFOMEDIA</span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0A0F1C] sm:text-4xl lg:text-5xl">
              Trusted by enterprises that demand excellence
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#52647a]">
              We combine AWS depth, security discipline, and managed operations — the same capabilities global
              consulting firms charge premium rates for.
            </p>
            <div className="mt-8 flex items-center gap-6">
              {["120+", "45+", "98%"].map((stat, i) => (
                <div key={stat}>
                  <p className="text-3xl font-black text-[#FF6B2C]">{stat}</p>
                  <p className="text-xs font-bold uppercase text-[#52647a]">
                    {["Projects", "Migrations", "Satisfaction"][i]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <RevealStagger className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = icons[item.icon] ?? Shield;
              return (
                <RevealItem key={item.title}>
                  <div className="glass-card-light group h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,15,28,0.12)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C] transition group-hover:bg-[#FF6B2C] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-extrabold text-[#0A0F1C]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#52647a]">{item.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
