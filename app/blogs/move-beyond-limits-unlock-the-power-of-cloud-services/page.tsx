import type { Metadata } from "next";
import { BlogArticlePage } from "@/components/pages/BlogArticlePage";
import { blogArticles, cloudServicesBlog } from "@/data/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: cloudServicesBlog.title,
  description: cloudServicesBlog.excerpt,
  alternates: { canonical: cloudServicesBlog.href },
};

export default function Page() {
  return <BlogArticlePage article={blogArticles[cloudServicesBlog.slug]} />;
}
