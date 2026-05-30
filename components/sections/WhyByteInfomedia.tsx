"use client";

import { whyChooseUs } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";

export function WhyByteInfomedia() {
  return (
    <section className="bg-[#F4F6FA] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B2C]">Why BYTEINFOMEDIA</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
            Built for enterprise buyers who need outcomes
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <RevealItem key={item.title}>
              <Card className="h-full transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(10,15,28,0.08)]">
                <CardContent>
                  <h3 className="text-base font-extrabold text-[#0A0F1C]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#52647a]">{item.description}</p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
