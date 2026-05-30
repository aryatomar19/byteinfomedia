"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { serviceOverview } from "@/data/home";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesOverview() {
  return (
    <section className="mesh-section relative py-20 sm:py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B2C]">Enterprise Practices</span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Premium consulting services
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Deep expertise across cloud, operations, security, and AI — each backed by dedicated solution pages.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {serviceOverview.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${service.gradient} p-1 shadow-[0_32px_80px_rgba(0,0,0,0.4)]`}
            >
              <div className="relative overflow-hidden rounded-[1.85rem] bg-[#0a0f1c]/80 p-6 sm:p-8">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#FF6B2C]/20 blur-3xl transition group-hover:bg-[#FF6B2C]/30" />
                <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FF6B2C]/20 text-[#FF6B2C] ring-1 ring-[#FF6B2C]/30">
                        <service.icon className="h-6 w-6" />
                      </span>
                      <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/65">{service.description}</p>
                    <ul className="mt-5 space-y-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm font-medium text-white/80">
                          <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF6B2C] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_40px_rgba(255,107,44,0.35)] transition group-hover:gap-3"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="hidden sm:block">
                    <img
                      src={service.image}
                      alt=""
                      className="h-36 w-36 rounded-2xl border border-white/10 object-cover opacity-90"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
