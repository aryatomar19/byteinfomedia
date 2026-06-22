"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BarChart3, LineChart, Target, Users, Wallet, Wrench } from "lucide-react";
import { DmReveal } from "@/components/digital-marketing/DmReveal";
import { DmTilt3D } from "@/components/digital-marketing/DmTilt3D";

const icons: LucideIcon[] = [Users, LineChart, BarChart3, Wallet, Target, Wrench];

export function DmWhySection({
  title,
  image,
  imageAlt,
  features,
}: {
  title: string;
  image: string;
  imageAlt: string;
  features: readonly { title: string; description: string }[];
}) {
  return (
    <section className="dm-section dm-section--dark dm-why-section relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 80% 50%, rgba(255,107,44,0.08), transparent 50%)",
            "radial-gradient(ellipse at 70% 40%, rgba(59,130,246,0.1), transparent 52%)",
            "radial-gradient(ellipse at 80% 50%, rgba(255,107,44,0.08), transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div className="dm-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <DmReveal>
          <DmTilt3D className="dm-image-card group relative" max={9}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.3)] transition-shadow duration-500 group-hover:shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
              <img
                src={image}
                alt={imageAlt}
                className="dm-image-fixed h-[360px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/75 via-[#0A0F1C]/25 to-[#0A0F1C]/10" />
            </div>
          </DmTilt3D>
        </DmReveal>

        <div>
          <DmReveal>
            <span className="dm-eyebrow dm-eyebrow--light">Why Us</span>
            <h2 className="dm-heading mt-3 text-white">{title}</h2>
          </DmReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = icons[index] ?? Users;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -5, 0] }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{
                    opacity: { delay: index * 0.06, duration: 0.5 },
                    y: { delay: 0.8 + index * 0.5, duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="dm-why-card group flex h-full min-h-[168px] flex-col items-center rounded-2xl p-5 text-center"
                >
                  <span className="dm-why-icon flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5 text-[#FF6B2C]" />
                  </span>
                  <h3 className="mt-4 font-extrabold text-white">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/60">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
