import type { ReactNode } from "react";

export function DmGsapReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return <div className={className}>{children}</div>;
}
