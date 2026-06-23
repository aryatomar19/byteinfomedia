"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";
import { Button } from "@/components/ui/button";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  bullets: readonly string[];
};

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <DmGsapReveal delay={index * 0.07} y={32} className="h-full">
      <motion.article
        className="dm-service-light group flex h-full flex-col overflow-hidden rounded-3xl bg-white"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
      >
        <div className="relative h-48 overflow-hidden sm:h-52">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <h3 className="text-xl font-extrabold text-[#0A0F1C] sm:text-2xl">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#0A0F1C]/60 sm:text-base">{item.description}</p>

          <ul className="mt-5 flex-1 space-y-2.5">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2.5 text-sm text-[#0A0F1C]/75">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B35]" />
                {bullet}
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="outline"
            className="mt-6 w-full rounded-xl border-[#0A0F1C]/12 font-bold text-[#0A0F1C] hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/5 hover:text-[#0A0F1C]"
          >
            <Link href={item.href} scroll>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </motion.article>
    </DmGsapReveal>
  );
}

export function DmServicesPremium({
  title,
  subheading,
  items,
}: {
  title: string;
  subheading: string;
  items: readonly ServiceItem[];
}) {
  return (
    <section
      id="dm-services"
      className="dm-section dm-section--xl dm-services-light relative overflow-hidden"
      style={{ background: "#F8F9FC" }}
      aria-labelledby="dm-services-heading"
    >
      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <h2 id="dm-services-heading" className="dm-heading dm-heading--xl text-[#0A0F1C]">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#0A0F1C]/60">{subheading}</p>
        </DmGsapReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
