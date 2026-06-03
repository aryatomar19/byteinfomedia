import type { Metadata } from "next";
import { BrandingServicePage } from "@/components/sections/BrandingServicePage";
import { contentWritingPage } from "@/data/content-writing";

export const metadata: Metadata = {
  title: "Content Writing",
  description: contentWritingPage.hero.description,
  alternates: { canonical: "/content-writing/" },
};

export default function Page() {
  return <BrandingServicePage data={contentWritingPage} />;
}
