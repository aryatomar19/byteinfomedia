import type { Metadata } from "next";
import { BlogArticlePage } from "@/components/pages/BlogArticlePage";
import { featuredBlog } from "@/data/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: featuredBlog.title,
  description: featuredBlog.excerpt,
  alternates: { canonical: featuredBlog.href },
};

export default function Page() {
  return <BlogArticlePage />;
}
