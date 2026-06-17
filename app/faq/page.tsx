import type { Metadata } from "next";
import { FAQPage } from "@/components/pages/FAQPage";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about BYTEINFOMEDIA cloud, DevOps, cybersecurity, AI, and digital marketing services.",
  alternates: { canonical: "/faq/" },
};

export default function Page() {
  return <FAQPage />;
}
