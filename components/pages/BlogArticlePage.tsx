"use client";

import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogNavLink } from "@/components/blog/BlogNavLink";
import type { BlogArticleSubsection, BlogArticleTable } from "@/data/blog";
import type { BlogArticle } from "@/data/blog";
import { getBlogNavigation, latestBlogSection } from "@/data/blog";
import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

/** ~20px mobile / ~24px desktop — consistent bullet list indentation */
const bulletListPadding = "pl-5 sm:pl-6";
/** Nested bullets aligned under subheadings within indented sections */
const nestedBulletPadding = "pl-4 sm:pl-5";
/** Nested content blocks under subsection headings */
const sectionContentIndent = "pl-6 sm:pl-7";

function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

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
        "mt-3 space-y-2 text-base leading-7 text-[#334155]",
        nested ? nestedBulletPadding : bulletListPadding,
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

function BlogArticleTable({ table }: { table: BlogArticleTable }) {
  return (
    <div className="blog-article-table-wrap mt-4">
      <table className="blog-article-table">
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
    const hasBullets = Boolean(subsection.bullets);
    const hasSubsections = Boolean(subsection.subsections?.length);

    return (
      <div className="mt-8 first:mt-0">
        <HeadingTag className={headingClassName}>{subsection.heading}</HeadingTag>
        {subsection.body ? (
          <p className="mt-4 text-base leading-7 text-[#334155]">{subsection.body}</p>
        ) : null}
        {hasBullets || hasSubsections ? (
          <div className={cn("mt-4", sectionContentIndent)}>
            {subsection.bullets ? <BlogBulletList items={subsection.bullets} nested /> : null}
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
        <p className="mt-4 text-base leading-7 text-[#334155]">{subsection.body}</p>
      ) : null}
      {subsection.bullets ? <BlogBulletList items={subsection.bullets} nested /> : null}
      {subsection.subsections?.map((child) => (
        <BlogSubsectionBlock key={child.heading} subsection={child} headingLevel="h4" />
      ))}
    </div>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function BlogShareButtons({ title, href }: { title: string; href: string }) {
  const shareUrl = `${company.website.replace(/\/$/, "")}${href}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: LinkedinIcon,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: XIcon,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FacebookIcon,
    },
  ] as const;

  return (
    <div className="blog-article-share">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5F6F86]">Share</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {shareLinks.map(({ label, href: shareHref, icon: Icon }) => (
          <a
            key={label}
            href={shareHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0A0F1C]/10 bg-white text-[#0A0F1C] transition hover:border-[#FF6B2C]/30 hover:text-[#FF6B2C]"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

function BlogTableOfContents({
  headings,
}: {
  headings: readonly { id: string; label: string }[];
}) {
  return (
    <nav className="blog-article-toc" aria-label="Table of contents">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#5F6F86]">On this page</p>
      <ul className="mt-3 space-y-2">
        {headings.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="blog-article-toc__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

type BlogArticlePageProps = {
  article: BlogArticle;
};

export function BlogArticlePage({ article }: BlogArticlePageProps) {
  const { category, title, image, imageAlt, publishedAt, readTime, intro, sections, slug, href } =
    article;
  const subtitle = "subtitle" in article ? article.subtitle : undefined;
  const showTableOfContents = "showTableOfContents" in article && article.showTableOfContents;
  const faqs = "faqs" in article ? article.faqs : undefined;
  const navigation = getBlogNavigation(slug);

  const tocHeadings = [
    ...sections.map((section) => ({
      id: slugifyHeading(section.heading),
      label: section.heading,
    })),
    ...(faqs?.length ? [{ id: "frequently-asked-questions", label: "Frequently Asked Questions" }] : []),
  ];

  const articleBody = (
    <>
      <Reveal>
        <p className="text-lg leading-8 text-[#334155]">{intro}</p>
      </Reveal>

      <div className="mt-10 space-y-8">
        {sections.map((section, index) => (
          <Reveal key={section.heading} delay={index * 0.05}>
            <h2
              id={slugifyHeading(section.heading)}
              className="scroll-mt-28 font-[family-name:var(--font-inter)] text-2xl font-extrabold tracking-tight text-[#0A0F1C]"
            >
              {section.heading}
            </h2>
            {section.body ? (
              <p className="mt-4 text-base leading-7 text-[#334155]">{section.body}</p>
            ) : null}
            {section.bullets ? (
              <div className="mt-4">
                <BlogBulletList items={section.bullets} />
              </div>
            ) : null}
            {"table" in section && section.table ? <BlogArticleTable table={section.table} /> : null}
            {section.subsections?.length ? (
              <div className="mt-6">
                {section.subsections.map((subsection) => (
                  <BlogSubsectionBlock key={subsection.heading} subsection={subsection} headingLevel="h3" />
                ))}
              </div>
            ) : null}
          </Reveal>
        ))}

        {faqs?.length ? (
          <Reveal>
            <h2
              id="frequently-asked-questions"
              className="scroll-mt-28 font-[family-name:var(--font-inter)] text-2xl font-extrabold tracking-tight text-[#0A0F1C]"
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-[family-name:var(--font-inter)] text-lg font-bold text-[#0A0F1C] sm:text-xl">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#334155]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </>
  );

  return (
    <article className="blog-article-page bg-white">
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
        <div className="relative mt-3 h-[240px] w-full overflow-hidden rounded-[1.25rem] shadow-[0_20px_60px_rgba(10,15,28,0.08)] md:h-[320px] lg:mt-4 lg:h-[400px]">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        <div className={cn("blog-article-content py-4 sm:py-6", showTableOfContents && "lg:py-8")}>
          {showTableOfContents ? (
            <div className="mb-8 rounded-2xl border border-[#0A0F1C]/8 bg-[#F7F8FA] p-5 lg:hidden">
              <BlogTableOfContents headings={tocHeadings} />
            </div>
          ) : null}

          {showTableOfContents ? (
            <div className="blog-article-layout lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-10 xl:gap-12">
              <div className="min-w-0">{articleBody}</div>
              <aside className="hidden lg:block">
                <div className="blog-article-toc-sticky">
                  <BlogTableOfContents headings={tocHeadings} />
                  <BlogShareButtons title={title} href={href} />
                </div>
              </aside>
            </div>
          ) : (
            articleBody
          )}

          {showTableOfContents ? (
            <div className="mt-10 border-t border-[#0A0F1C]/8 pt-8 lg:hidden">
              <BlogShareButtons title={title} href={href} />
            </div>
          ) : null}

          {showTableOfContents ? (
            <div className="mt-10 flex flex-col gap-4 border-t border-[#0A0F1C]/8 pt-8 sm:flex-row sm:justify-between">
              {navigation.previous ? (
                <BlogNavLink
                  href={navigation.previous.href}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0A0F1C] transition hover:text-[#FF6B2C]"
                >
                  <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#5F6F86]">
                      Previous
                    </span>
                    {navigation.previous.title}
                  </span>
                </BlogNavLink>
              ) : (
                <span />
              )}
              {navigation.next ? (
                <BlogNavLink
                  href={navigation.next.href}
                  className="group inline-flex items-center gap-2 text-right text-sm font-semibold text-[#0A0F1C] transition hover:text-[#FF6B2C] sm:ml-auto"
                >
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#5F6F86]">
                      Next
                    </span>
                    {navigation.next.title}
                  </span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </BlogNavLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
