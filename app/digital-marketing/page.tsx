import type { Metadata } from "next";
import { DigitalMarketingPage } from "@/components/sections/DigitalMarketingPage";
import { digitalMarketingPage } from "@/data/digital-marketing";

export const metadata: Metadata = {
  title: "Branding Solutions | Digital Marketing",
  description: digitalMarketingPage.hero.description,
  alternates: { canonical: "/digital-marketing/" },
};

export default function Page() {
  return <DigitalMarketingPage />;
}
