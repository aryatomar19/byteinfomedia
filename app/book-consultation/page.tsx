import type { Metadata } from "next";
import { BookConsultationPage } from "@/components/pages/BookConsultationPage";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a discussion with BYTEINFOMEDIA cloud, DevOps, cybersecurity and AI consultants.",
  alternates: { canonical: "/book-consultation/" },
};

export default function Page() {
  return <BookConsultationPage />;
}
