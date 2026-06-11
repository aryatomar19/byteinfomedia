import type { ReactNode } from "react";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollManager />
      <SiteHeader />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
    </>
  );
}
