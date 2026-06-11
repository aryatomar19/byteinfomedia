"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { BlogNavLink } from "@/components/blog/BlogNavLink";
import { featuredBlog } from "@/data/blog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FeaturedBlogCardProps = {
  index?: number;
};

export function FeaturedBlogCard({ index = 0 }: FeaturedBlogCardProps) {
  const {
    category,
    title,
    excerpt,
    image,
    imageAlt,
    publishedAt,
    readTime,
    href,
    readMoreLabel,
  } = featuredBlog;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.55 }}
      whileHover={{ y: -4 }}
      className="enterprise-card group overflow-hidden rounded-[1.25rem] bg-white shadow-[0_20px_60px_rgba(10,15,28,0.08)] transition duration-300 hover:shadow-[0_28px_72px_rgba(10,15,28,0.12)] sm:rounded-[1.125rem] lg:rounded-[1.25rem]"
    >
      <BlogNavLink href={href} className="block">
        <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/35 via-transparent to-transparent" />
        </div>
      </BlogNavLink>

      <div className="p-6 sm:p-8">
        <span className="inline-flex rounded-full border border-[#FF6B2C]/25 bg-[#FFF7F3] px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#FF6B2C]">
          {category}
        </span>

        <h3 className="mt-4 font-[family-name:var(--font-inter)] text-2xl font-extrabold leading-tight tracking-tight text-[#0A0F1C] sm:text-[1.75rem]">
          <BlogNavLink href={href} className="transition hover:text-[#FF6B2C]">
            {title}
          </BlogNavLink>
        </h3>

        <p className="mt-4 text-base leading-7 text-[#334155]">{excerpt}</p>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-[#5F6F86]">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#FF6B2C]" aria-hidden />
            {publishedAt}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#FF6B2C]" aria-hidden />
            {readTime}
          </span>
        </div>

        <BlogNavLink
          href={href}
          className={cn(buttonVariants({ variant: "outline", size: "default" }), "mt-6")}
        >
          {readMoreLabel}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </BlogNavLink>
      </div>
    </motion.article>
  );
}
