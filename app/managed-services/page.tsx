import type { Metadata } from "next";
import { PremiumServicePage } from "@/components/sections/PremiumServicePage";
import { managedServicesPage } from "@/data/managed-services";

export const metadata: Metadata = {
  title: "Managed Services",
  description: managedServicesPage.hero.description,
  alternates: { canonical: "/managed-services/" },
};

export default function Page() {
  return <PremiumServicePage data={managedServicesPage} />;
}
