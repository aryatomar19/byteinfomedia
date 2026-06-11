import type { Metadata } from "next";
import { BlogsPage } from "@/components/pages/BlogsPage";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read the latest technology and digital growth insights from Byte Infomedia.",
  alternates: { canonical: "/blogs/" },
};

export default function Page() {
  return <BlogsPage />;
}
