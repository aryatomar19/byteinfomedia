"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviceOverview, servicesSection } from "@/data/home";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesOverview() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-lg text-[#5f6f86]">{servicesSection.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {serviceOverview.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="enterprise-card group overflow-hidden rounded-[1.5rem]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/50 via-[#0A0F1C]/10 to-transparent" />
                <h3 className="absolute bottom-5 left-5 text-2xl font-extrabold text-white">{service.title}</h3>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-base leading-7 text-[#5f6f86]">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C] transition group-hover:gap-3"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
