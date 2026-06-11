"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { brandingServiceNav, company, serviceNav } from "@/data/site";
import { BookConsultationButton } from "@/components/ui/BookConsultationButton";
import { scrollToTop } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const blogsHref = "/blogs/";

const navLinkClass = (active: boolean) =>
  cn(
    "rounded-lg px-4 py-2.5 text-base font-semibold transition",
    active ? "text-[#FF6B2C]" : "text-[#0A0F1C]/80 hover:text-[#0A0F1C]",
  );

function NavDropdown({
  label,
  items,
  isActiveGroup,
  menuRef,
  open,
  onOpenChange,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
  isActiveGroup: boolean;
  menuRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-4 py-2.5 text-base font-semibold transition",
          isActiveGroup || open ? "text-[#FF6B2C]" : "text-[#0A0F1C]/80 hover:text-[#0A0F1C]",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => onOpenChange(!open)}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full z-50 pt-2 transition-all duration-200",
          open ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0",
        )}
      >
        <div
          className="min-w-[260px] rounded-xl border border-[#0A0F1C]/10 bg-white py-2 shadow-[0_12px_40px_rgba(10,15,28,0.12)]"
          role="menu"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll
              role="menuitem"
              className={cn(
                "block px-4 py-2.5 text-base font-semibold transition",
                isActive(item.href) ? "text-[#FF6B2C]" : "text-[#0A0F1C]/80 hover:bg-[#F8F9FC] hover:text-[#0A0F1C]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [brandingOpen, setBrandingOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [mobileBrandingOpen, setMobileBrandingOpen] = useState(false);
  const techMenuRef = useRef<HTMLDivElement>(null);
  const brandingMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const techActive = serviceNav.some((item) => pathname.startsWith(item.href.replace(/\/$/, "")));
  const brandingActive = brandingServiceNav.some((item) =>
    pathname.startsWith(item.href.replace(/\/$/, "")),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setTechOpen(false);
    setBrandingOpen(false);
    setMobileTechOpen(false);
    setMobileBrandingOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!techOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!techMenuRef.current?.contains(event.target as Node)) {
        setTechOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [techOpen]);

  useEffect(() => {
    if (!brandingOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!brandingMenuRef.current?.contains(event.target as Node)) {
        setBrandingOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [brandingOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-[#0A0F1C]/10 bg-white/85 shadow-[0_8px_32px_rgba(10,15,28,0.08)] backdrop-blur-xl"
          : "border-[#0A0F1C]/6 bg-white/95 shadow-[0_4px_24px_rgba(10,15,28,0.04)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[95px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => {
            if (pathname === "/") {
              scrollToTop("smooth");
            }
          }}
        >
          <img src={company.logo} alt={company.name} className="h-[50px] w-auto object-contain" />
        </Link>

        <div className="ml-auto flex items-center gap-6 lg:gap-8 xl:gap-10">
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Main">
            <NavDropdown
              label="Branding Solutions"
              items={brandingServiceNav}
              isActiveGroup={brandingActive}
              menuRef={brandingMenuRef}
              open={brandingOpen}
              onOpenChange={setBrandingOpen}
            />
            <NavDropdown
              label="Tech Solutions"
              items={serviceNav}
              isActiveGroup={techActive}
              menuRef={techMenuRef}
              open={techOpen}
              onOpenChange={setTechOpen}
            />
            <Link href={blogsHref} className={navLinkClass(pathname.startsWith("/blogs"))}>
              Blogs
            </Link>
          </nav>

          <div className="hidden shrink-0 lg:block">
            <BookConsultationButton size="md" />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#0A0F1C]/10 text-[#0A0F1C] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#0A0F1C]/8 bg-white/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            <div className="rounded-xl">
              <button
                type="button"
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold hover:bg-[#F8F9FC]",
                  brandingActive || mobileBrandingOpen ? "text-[#FF6B2C]" : "text-[#0A0F1C]",
                )}
                aria-expanded={mobileBrandingOpen}
                onClick={() => setMobileBrandingOpen((value) => !value)}
              >
                Branding Solutions
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform duration-200", mobileBrandingOpen && "rotate-180")}
                  aria-hidden
                />
              </button>
              {mobileBrandingOpen && (
                <div className="grid gap-0.5 pb-1 pl-2">
                  {brandingServiceNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      scroll
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-4 py-2.5 text-base font-semibold hover:bg-[#F8F9FC]",
                        pathname.startsWith(item.href.replace(/\/$/, "")) ? "text-[#FF6B2C]" : "text-[#0A0F1C]/80",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-xl">
              <button
                type="button"
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold hover:bg-[#F8F9FC]",
                  techActive || mobileTechOpen ? "text-[#FF6B2C]" : "text-[#0A0F1C]",
                )}
                aria-expanded={mobileTechOpen}
                onClick={() => setMobileTechOpen((value) => !value)}
              >
                Tech Solutions
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform duration-200", mobileTechOpen && "rotate-180")}
                  aria-hidden
                />
              </button>
              {mobileTechOpen && (
                <div className="grid gap-0.5 pb-1 pl-2">
                  {serviceNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      scroll
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-4 py-2.5 text-base font-semibold hover:bg-[#F8F9FC]",
                        pathname.startsWith(item.href.replace(/\/$/, "")) ? "text-[#FF6B2C]" : "text-[#0A0F1C]/80",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={blogsHref}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-base font-semibold hover:bg-[#F8F9FC]",
                pathname.startsWith("/blogs") ? "text-[#FF6B2C]" : "text-[#0A0F1C]",
              )}
            >
              Blogs
            </Link>

            <div className="mt-3 border-t border-[#0A0F1C]/8 pt-3">
              <BookConsultationButton className="w-full justify-center" size="md" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
