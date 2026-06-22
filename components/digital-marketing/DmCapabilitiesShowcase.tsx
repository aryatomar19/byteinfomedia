"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DmCapabilityIllustration } from "@/components/digital-marketing/DmCapabilityIllustrations";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

type Capability = {
  id: string;
  title: string;
  description: string;
  href: string;
};

function CapabilityBlock({ item, index }: { item: Capability; index: number }) {
  return (
    <DmGsapReveal delay={index * 0.07} y={36} className="h-full">
      <motion.article
        className="dm-cap-block group relative flex h-full min-w-[280px] flex-col overflow-hidden rounded-3xl p-5 sm:min-w-0 sm:p-6"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 360, damping: 26 }}
      >
        <span
          className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#FF6B2C]/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <DmCapabilityIllustration id={item.id} />
        <h3 className="mt-5 text-lg font-extrabold text-white sm:text-xl">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-white/55">{item.description}</p>
        <Link
          href={item.href}
          scroll
          className="dm-learn-more mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]"
        >
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
        </Link>
      </motion.article>
    </DmGsapReveal>
  );
}

export function DmCapabilitiesShowcase({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: readonly Capability[];
}) {
  return (
    <section
      id="dm-capabilities"
      className="dm-section dm-capabilities relative overflow-hidden"
      style={{ background: "#050B1F" }}
      aria-labelledby="dm-cap-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,44,0.07),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.04]" aria-hidden />

      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <span className="dm-eyebrow dm-eyebrow--light">{eyebrow}</span>
          <h2 id="dm-cap-heading" className="dm-heading mt-3 text-white">
            {title}
          </h2>
        </DmGsapReveal>

        <div className="dm-cap-scroll flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {items.map((item, index) => (
            <div key={item.id} className="snap-center lg:snap-align-none">
              <CapabilityBlock item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
