"use client";

import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BlogNavLink } from "@/components/blog/BlogNavLink";
import type { BlogArticleSubsection } from "@/data/blog";
import { featuredBlogArticle, latestBlogSection } from "@/data/blog";
import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** ~24px mobile / ~28px desktop — nested content under section headings */
const sectionContentIndent = "pl-6 sm:pl-7";
/** Additional indent for bullet lists under subheadings */
const nestedBulletIndent = "pl-5 sm:pl-6";

function BlogBulletList({
  items,
  nested = false,
}: {
  items: readonly string[];
  nested?: boolean;
}) {
  return (
    <ul
      className={cn(
        "mt-3 space-y-2 pl-5 text-base leading-7 text-[#334155]",
        nested && nestedBulletIndent,
      )}
    >
      {items.map((item) => (
        <li key={item} className="list-disc marker:text-[#FF6B2C]">
          {item}
        </li>
      ))}
    </ul>
  );
}

function BlogSubsectionBlock({
  subsection,
  headingLevel,
}: {
  subsection: BlogArticleSubsection;
  headingLevel: "h3" | "h4";
}) {
  const HeadingTag = headingLevel;
  const headingClassName =
    headingLevel === "h3"
      ? "font-[family-name:var(--font-inter)] text-xl font-extrabold tracking-tight text-[#0A0F1C] sm:text-2xl"
      : "font-[family-name:var(--font-inter)] text-lg font-bold tracking-tight text-[#0A0F1C] sm:text-xl";

  if (headingLevel === "h3") {
    return (
      <div className="mt-8 first:mt-0">
        <HeadingTag className={headingClassName}>{subsection.heading}</HeadingTag>
        {(subsection.body || subsection.bullets || subsection.subsections?.length) ? (
          <div className={cn("mt-4", sectionContentIndent)}>
            {subsection.body ? (
              <p className="text-base leading-7 text-[#334155]">{subsection.body}</p>
            ) : null}
            {subsection.bullets ? <BlogBulletList items={subsection.bullets} /> : null}
            {subsection.subsections?.map((child) => (
              <BlogSubsectionBlock key={child.heading} subsection={child} headingLevel="h4" />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mt-5">
      <HeadingTag className={headingClassName}>{subsection.heading}</HeadingTag>
      {subsection.body ? (
        <p className="mt-3 text-base leading-7 text-[#334155]">{subsection.body}</p>
      ) : null}
      {subsection.bullets ? <BlogBulletList items={subsection.bullets} nested /> : null}
      {subsection.subsections?.map((child) => (
        <BlogSubsectionBlock key={child.heading} subsection={child} headingLevel="h4" />
      ))}
    </div>
  );
}

export function BlogArticlePage() {
  const { category, title, subtitle, image, imageAlt, publishedAt, readTime, intro, sections } =
    featuredBlogArticle;

  return (
    <article className="bg-white">
      <section className="border-b border-[#0A0F1C]/6 bg-[#F7F8FA] py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <BlogNavLink
            href={latestBlogSection.viewAllHref}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-6 -ml-2")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </BlogNavLink>

          <Reveal>
            <span className="inline-flex rounded-full border border-[#FF6B2C]/25 bg-white px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#FF6B2C]">
              {category}
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-inter)] text-3xl font-extrabold leading-tight tracking-tight text-[#0A0F1C] sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>
            {subtitle ? (
              <h2 className="mt-3 text-lg font-semibold leading-8 text-[#334155] sm:text-xl">
                {subtitle}
              </h2>
            ) : null}
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
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.25rem] shadow-[0_20px_60px_rgba(10,15,28,0.08)]">
          <img src={image} alt={imageAlt} className="aspect-[16/9] w-full object-cover" />
        </div>

        <div className="py-10 sm:py-12">
          <Reveal>
            <p className="text-lg leading-8 text-[#334155]">{intro}</p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.05}>
                <h2 className="font-[family-name:var(--font-inter)] text-2xl font-extrabold tracking-tight text-[#0A0F1C]">
                  {section.heading}
                </h2>
                {section.body || section.bullets ? (
                  <div className={cn("mt-4", sectionContentIndent)}>
                    {section.body ? (
                      <p className="text-base leading-7 text-[#334155]">{section.body}</p>
                    ) : null}
                    {section.bullets ? <BlogBulletList items={section.bullets} /> : null}
                  </div>
                ) : null}
                {section.subsections?.length ? (
                  <div className="mt-6">
                    {section.subsections.map((subsection) => (
                      <BlogSubsectionBlock key={subsection.heading} subsection={subsection} headingLevel="h3" />
                    ))}
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
