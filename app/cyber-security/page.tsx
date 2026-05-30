import type { Metadata } from "next";
import { PremiumServicePage } from "@/components/sections/PremiumServicePage";
import { cyberSecurityPage } from "@/data/cyber-security";

export const metadata: Metadata = {
  title: "Cyber Security",
  description: cyberSecurityPage.hero.description,
  alternates: { canonical: "/cyber-security/" },
};

export default function Page() {
  return <PremiumServicePage data={cyberSecurityPage} />;
}
