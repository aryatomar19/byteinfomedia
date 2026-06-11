import type { Metadata } from "next";
import { ContentWritingPage } from "@/components/sections/ContentWritingPage";
import { contentWritingPage } from "@/data/content-writing";

export const metadata: Metadata = {
  title: "Content Writing",
  description: contentWritingPage.hero.description,
  alternates: { canonical: "/content-writing/" },
};

export default function Page() {
  return <ContentWritingPage />;
}
