import type { AnchorHTMLAttributes, ReactNode } from "react";

type BlogNavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function resolveBlogHref(href: string): string {
  if (!href || href === "/") {
    return href;
  }

  if (href.endsWith(".html")) {
    return href;
  }

  if (href === "/blogs/" || href === "/blog/") {
    return href.endsWith("/") ? `${href}index.html` : `${href}/index.html`;
  }

  if (href.startsWith("/blog/") || (href.startsWith("/blogs/") && href.length > "/blogs/".length)) {
    const normalized = href.replace(/\/$/, "").replace(/\/index\.html$/, "");
    return `${normalized}.html`;
  }

  return href;
}

/** Full-page anchor links for reliable static export navigation on S3/CloudFront. */
export function BlogNavLink({ href, children, ...props }: BlogNavLinkProps) {
  const resolvedHref = resolveBlogHref(href);

  return (
    <a href={resolvedHref} {...props}>
      {children}
    </a>
  );
}
