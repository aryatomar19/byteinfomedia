import type { AnchorHTMLAttributes, ReactNode } from "react";

type BlogNavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/** Full-page anchor links for reliable static export navigation on S3/CloudFront. */
export function BlogNavLink({ href, children, ...props }: BlogNavLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
