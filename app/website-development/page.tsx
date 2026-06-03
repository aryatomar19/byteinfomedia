import type { Metadata } from "next";
import { BrandingServicePage } from "@/components/sections/BrandingServicePage";
import { websiteDevelopmentPage } from "@/data/website-development";

export const metadata: Metadata = {
  title: "Website Development",
  description: websiteDevelopmentPage.hero.description,
  alternates: { canonical: "/website-development/" },
};

export default function Page() {
  return <BrandingServicePage data={websiteDevelopmentPage} />;
}
