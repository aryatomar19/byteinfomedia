"use client";

import { growYourBusinessSection } from "@/data/home";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

export function GrowYourBusiness() {
  return (
    <section
      className="bg-white py-10 md:py-11 lg:py-12"
      aria-labelledby="grow-your-business-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            id="grow-your-business-heading"
            className="font-[family-name:var(--font-inter)] tracking-tight text-[#0A0F1C]"
          >
            <span className="block text-2xl font-semibold sm:text-3xl">{growYourBusinessSection.titleLine1}</span>
            <span className="mt-1 block text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem]">
              {growYourBusinessSection.titleLine2}
            </span>
          </h2>
          <p className="mt-5 text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">
            {growYourBusinessSection.description}
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 md:mt-12 lg:grid-cols-5">
          {growYourBusinessSection.stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#FF6B2C] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-[#0A0F1C] sm:text-base">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
