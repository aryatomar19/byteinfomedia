"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviceOverview } from "@/data/home";
import { Reveal } from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B2C]">Our Services</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-4xl">
            Premium consulting across cloud, security & AI
          </h2>
          <p className="mt-4 text-base leading-7 text-[#52647a]">
            Explore dedicated service pages for detailed capabilities, delivery process, and assessment options.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {serviceOverview.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(10,15,28,0.1)]">
                <div className={`bg-gradient-to-br ${service.accent} p-1`}>
                  <img src={service.image} alt="" className="h-40 w-full object-cover" />
                </div>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFF7F3] text-[#FF6B2C]">
                      <service.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A0F1C]">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-[#52647a]">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C] transition group-hover:gap-3"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
