import type { Metadata } from "next";
import { BrandingServicePage } from "@/components/sections/BrandingServicePage";
import { socialMediaMarketingPage } from "@/data/social-media-marketing";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description: socialMediaMarketingPage.hero.description,
  alternates: { canonical: "/social-media-marketing/" },
};

export default function Page() {
  return <BrandingServicePage data={socialMediaMarketingPage} />;
}
