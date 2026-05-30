import type { Metadata } from "next";
import { CloudServicesPage } from "@/components/sections/CloudServicesPage";
import { cloudServicesPage } from "@/data/cloud-services";

export const metadata: Metadata = {
  title: "Cloud Services",
  description: cloudServicesPage.hero.description,
  alternates: { canonical: "/cloud-services/" },
};

export default function Page() {
  return <CloudServicesPage />;
}
