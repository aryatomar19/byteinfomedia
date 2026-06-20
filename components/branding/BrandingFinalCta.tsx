"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function CtaParticle({ delay, left, top, size }: { delay: number; left: string; top: string; size: number }) {
  return (
    <motion.span
      className="absolute rounded-full bg-white/20"
      style={{ left, top, width: size, height: size }}
      animate={{ y: [0, -16, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay }}
    />
  );
}

export function BrandingFinalCta({
  title,
  description,
  primaryLabel,
}: {
  title: string;
  description: string;
  primaryLabel: string;
}) {
  return (
    <section className="bs-section pb-24 pt-4">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bs-final-cta relative overflow-hidden rounded-[2rem] px-6 py-16 sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C] via-[#FF6B2C]/90 to-[#111]" />
            <motion.div
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#111]/30 blur-2xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
            <CtaParticle delay={0} left="10%" top="20%" size={8} />
            <CtaParticle delay={0.5} left="80%" top="30%" size={6} />
            <CtaParticle delay={1} left="25%" top="70%" size={10} />
            <CtaParticle delay={1.5} left="70%" top="75%" size={5} />
          </div>

          <div className="relative text-center">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg font-medium text-white/85 sm:text-xl">{description}</p>
            <div className="mt-10">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-10 text-base font-bold text-[#FF6B2C] shadow-[0_16px_48px_rgba(0,0,0,0.2)] hover:bg-white/95"
                asChild
              >
                <Link href="/book-consultation/">
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
