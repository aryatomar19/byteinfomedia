import type { Metadata } from "next";
import { CyberSecurityPage } from "@/components/sections/CyberSecurityPage";
import { cyberSecurityPageData } from "@/data/cyber-security-page";

export const metadata: Metadata = {
  title: "Cyber Security",
  description: cyberSecurityPageData.hero.description,
  alternates: { canonical: "/cyber-security/" },
};

export default function Page() {
  return <CyberSecurityPage />;
}
