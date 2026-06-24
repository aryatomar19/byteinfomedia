"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeServiceCategories, servicesSection } from "@/data/home";
import { SectionHeading } from "@/components/sections/SectionHeading";

const MotionLink = motion.create(Link);

export function HomeServiceCategories() {
  return (
    <section className="-mt-10 bg-white pb-10 pt-8 md:-mt-11 md:pb-10 md:pt-9 lg:-mt-12 lg:pb-10 lg:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative top-3 md:top-3.5">
          <SectionHeading title={servicesSection.title} compact />
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
          {homeServiceCategories.map((category, index) => (
            <MotionLink
              key={category.title}
              href={category.href}
              scroll
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="enterprise-card group relative z-[1] block overflow-hidden rounded-[1.75rem]"
            >
              <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="pointer-events-none h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07162d]/85 via-[#07162d]/35 to-[#07162d]/10" />
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {category.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                    {category.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ffb088] transition group-hover:gap-3 sm:text-base">
                    {category.cta}
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
