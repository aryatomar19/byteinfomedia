"use client";

import Link from "next/link";
import { ArrowRight, FileText, Globe, Search, Share2 } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { DmGsapReveal } from "@/components/digital-marketing/DmGsapReveal";

const icons: Record<string, LucideIcon> = {
  website: Globe,
  seo: Search,
  content: FileText,
  social: Share2,
};

type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.id] ?? Globe;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 22 });
  const springY = useSpring(y, { stiffness: 200, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const imageX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-14, 14]);
  const iconRotate = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  return (
    <DmGsapReveal delay={index * 0.08} y={44} className="h-full">
      <motion.article
        className="h-full"
        style={{ perspective: 1100 }}
        whileHover={{ y: -12 }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          className="dm-service-card dm-service-card--enterprise group flex h-full min-h-[500px] flex-col overflow-hidden rounded-3xl"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            x.set((event.clientX - rect.left) / rect.width - 0.5);
            y.set((event.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          <div className="relative h-60 shrink-0 overflow-hidden sm:h-64 lg:h-72">
            <motion.div className="absolute inset-0" style={{ x: imageX, y: imageY, scale: 1.14 }}>
              <img
                src={service.image}
                alt={service.imageAlt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/95 via-[#0A0F1C]/50 to-[#0A0F1C]/15" />
            <motion.span
              className="absolute left-6 top-6 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF6B2C] shadow-[0_10px_32px_rgba(255,107,44,0.45)]"
              style={{ rotate: iconRotate }}
            >
              <Icon className="h-7 w-7 text-white" />
            </motion.span>
          </div>
          <div className="dm-glass flex flex-1 flex-col p-7 sm:p-8">
            <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-white/70 sm:text-base">{service.description}</p>
            <Link
              href={service.href}
              scroll
              className="dm-learn-more mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C]"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </motion.div>
      </motion.article>
    </DmGsapReveal>
  );
}

export function DmServiceGrid({ title, items }: { title: string; items: readonly Service[] }) {
  return (
    <section id="dm-services" className="dm-section dm-section--dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(59,130,246,0.1),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-[0.1]" aria-hidden />
      <div className="dm-container relative">
        <DmGsapReveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="dm-eyebrow dm-eyebrow--light">Services</span>
          <h2 className="dm-heading mt-3 text-white">{title}</h2>
        </DmGsapReveal>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
          {items.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
