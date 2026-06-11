import type { Metadata } from "next";
import { WebsiteDevelopmentPage } from "@/components/sections/WebsiteDevelopmentPage";
import { websiteDevelopmentPage } from "@/data/website-development";

export const metadata: Metadata = {
  title: "Website Development",
  description: websiteDevelopmentPage.hero.description,
  alternates: { canonical: "/website-development/" },
};

export default function Page() {
  return <WebsiteDevelopmentPage />;
}
