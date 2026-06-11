"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { marketingServiceOverview, serviceOverview, servicesSection } from "@/data/home";
import { SectionHeading } from "@/components/sections/SectionHeading";

type ServiceOverviewItem = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  href: string;
};

function ServiceCard({
  service,
  index,
}: {
  service: ServiceOverviewItem;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="enterprise-card group overflow-hidden rounded-[1.5rem]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/55 via-[#0A0F1C]/10 to-transparent" />
        <h3 className="absolute bottom-5 left-5 text-2xl font-extrabold text-white">{service.title}</h3>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-base leading-7 text-[#334155] line-clamp-2">{service.description}</p>
        <Link
          href={service.href}
          scroll
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#FF6B2C] transition group-hover:gap-3"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

export function ServicesOverview() {
  const allServices = [...serviceOverview, ...marketingServiceOverview];

  return (
    <section className="-mt-10 bg-white pb-10 pt-8 md:-mt-11 md:pb-10 md:pt-9 lg:-mt-12 lg:pb-10 lg:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative top-3 md:top-3.5">
          <SectionHeading title={servicesSection.title} compact />
        </div>

        <div className="section-cards !mb-5 mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {allServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
