"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export type ServiceImageCardData = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type ServiceImageCardProps = ServiceImageCardData & {
  index?: number;
  learnMoreHref?: string;
};

export function ServiceImageCard({
  title,
  description,
  image,
  imageAlt,
  index = 0,
  learnMoreHref,
}: ServiceImageCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="enterprise-card group flex h-full flex-col overflow-hidden rounded-[1.5rem]"
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/55 via-[#0A0F1C]/15 to-transparent" />
        <h3 className="absolute bottom-5 left-5 right-5 text-xl font-extrabold text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="line-clamp-3 flex-1 text-base leading-6 text-[#0A0F1C]">{description}</p>
        {learnMoreHref ? (
          <Link
            href={learnMoreHref}
            scroll
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C] transition group-hover:gap-3"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
