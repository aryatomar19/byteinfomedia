import type { Metadata } from "next";
import { BlogArticlePage } from "@/components/pages/BlogArticlePage";
import { blogArticles, multiCloudHybridCloudBlog, multiCloudHybridCloudBlogArticle } from "@/data/blog";
import { company } from "@/data/site";

export const dynamic = "force-static";

const siteUrl = "https://www.byteinfomedia.com";
const canonicalUrl = `${siteUrl}${multiCloudHybridCloudBlog.href}`;
const imageUrl = `${siteUrl}${multiCloudHybridCloudBlog.image}`;

export const metadata: Metadata = {
  title: multiCloudHybridCloudBlog.title,
  description: multiCloudHybridCloudBlog.excerpt,
  alternates: { canonical: multiCloudHybridCloudBlog.href },
  openGraph: {
    title: multiCloudHybridCloudBlog.title,
    description: multiCloudHybridCloudBlog.excerpt,
    url: canonicalUrl,
    type: "article",
    publishedTime: "2026-06-30",
    siteName: company.name,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: multiCloudHybridCloudBlog.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: multiCloudHybridCloudBlog.title,
    description: multiCloudHybridCloudBlog.excerpt,
    images: [imageUrl],
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: multiCloudHybridCloudBlog.title,
  description: multiCloudHybridCloudBlog.excerpt,
  image: imageUrl,
  datePublished: "2026-06-30",
  dateModified: "2026-06-30",
  author: {
    "@type": "Organization",
    name: company.legalName,
    url: company.website,
  },
  publisher: {
    "@type": "Organization",
    name: company.legalName,
    url: company.website,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}${company.logo}`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blogs",
      item: `${siteUrl}/blogs/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: multiCloudHybridCloudBlog.title,
      item: canonicalUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: multiCloudHybridCloudBlogArticle.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogArticlePage article={blogArticles[multiCloudHybridCloudBlog.slug]} />
    </>
  );
}
