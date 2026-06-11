import type { AnchorHTMLAttributes, ReactNode } from "react";

type BlogNavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function resolveBlogHref(href: string): string {
  if (!href.startsWith("/blogs/") || href === "/blogs/" || href.endsWith("index.html")) {
    return href;
  }

  return href.endsWith("/") ? `${href}index.html` : `${href}/index.html`;
}

/** Full-page anchor links for reliable static export navigation on S3/CloudFront. */
export function BlogNavLink({ href, children, ...props }: BlogNavLinkProps) {
  return (
    <a href={resolveBlogHref(href)} {...props}>
      {children}
    </a>
  );
}
