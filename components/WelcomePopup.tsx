"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Brain, Cloud, Code2, TrendingUp, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "byteinfomedia_welcome_popup_dismissed";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 1500;

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type ServiceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accent: "orange" | "blue" | "purple" | "green";
};

const serviceCards: ServiceCard[] = [
  {
    icon: TrendingUp,
    title: "Grow My Business",
    description: "SEO, Google Ads & Social Media",
    href: "/digital-marketing/",
    accent: "orange",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS • Azure • Kubernetes",
    href: "/cloud-services/",
    accent: "blue",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "AI Automation & Chatbots",
    href: "/generative-ai/",
    accent: "purple",
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "Modern websites that convert",
    href: "/website-development/",
    accent: "green",
  },
];

const accentStyles: Record<ServiceCard["accent"], { icon: string; glow: string }> = {
  orange: {
    icon: "welcome-popup-card__icon--orange",
    glow: "hover:shadow-[0_20px_48px_rgba(255,107,44,0.22)]",
  },
  blue: {
    icon: "welcome-popup-card__icon--blue",
    glow: "hover:shadow-[0_20px_48px_rgba(59,130,246,0.22)]",
  },
  purple: {
    icon: "welcome-popup-card__icon--purple",
    glow: "hover:shadow-[0_20px_48px_rgba(168,85,247,0.22)]",
  },
  green: {
    icon: "welcome-popup-card__icon--green",
    glow: "hover:shadow-[0_20px_48px_rgba(34,197,94,0.22)]",
  },
};

function shouldShowPopup(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;

    const parsed = JSON.parse(raw) as { dismissedAt?: number };
    if (typeof parsed.dismissedAt !== "number") return true;

    return Date.now() - parsed.dismissedAt >= THIRTY_DAYS_MS;
  } catch {
    return true;
  }
}

function markDismissed(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedAt: Date.now() }));
  } catch {
    /* storage unavailable */
  }
}

const popupEase = [0, 0, 0.2, 1] as const;

export function WelcomePopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollPositionRef = useRef(0);

  const close = useCallback(() => {
    setIsOpen(false);
    markDismissed();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !shouldShowPopup()) return;

    const timer = window.setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (!isOpen) return;

    scrollPositionRef.current = window.scrollY;
    const { style } = document.body;
    const previous = {
      position: style.position,
      top: style.top,
      width: style.width,
      overflow: style.overflow,
    };

    style.position = "fixed";
    style.top = `-${scrollPositionRef.current}px`;
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      style.position = previous.position;
      style.top = previous.top;
      style.width = previous.width;
      style.overflow = previous.overflow;
      window.scrollTo(0, scrollPositionRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (element) => !element.hasAttribute("disabled") && element.offsetParent !== null,
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, isOpen]);

  const handleBackdropClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) close();
    },
    [close],
  );

  const handleCardNavigate = useCallback(() => {
    close();
  }, [close]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="welcome-popup-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: popupEase }}
          onMouseDown={handleBackdropClick}
        >
          <div className="welcome-popup-particles pointer-events-none" aria-hidden />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-popup-title"
            aria-describedby="welcome-popup-subtitle"
            className="welcome-popup-panel relative w-[95%] max-w-[1000px] rounded-[30px] border border-white/[0.08] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:w-[90%] sm:p-10 lg:w-[960px]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.45, ease: popupEase }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B2C]/50 sm:right-5 sm:top-5"
              aria-label="Close welcome popup"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>

            <header className="text-center">
              <p className="font-[family-name:var(--font-inter)] text-sm font-semibold tracking-[-0.01em] text-white/75 sm:text-base">
                👋 Welcome to
              </p>
              <h2
                id="welcome-popup-title"
                className="mt-1 font-[family-name:var(--font-inter)] text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl"
              >
                <span className="text-white">Byte</span>{" "}
                <span className="text-[#FF6B2C]">Infomedia</span>
              </h2>
              <p id="welcome-popup-subtitle" className="mx-auto mt-3 max-w-md text-sm font-medium text-[#94A3B8] sm:text-base">
                Choose what you&apos;re looking for today.
              </p>
            </header>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;
                const styles = accentStyles[card.accent];

                return (
                  <motion.div
                    key={card.title}
                    custom={index}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.05,
                      duration: 0.5,
                      ease: popupEase,
                    }}
                  >
                    <Link
                      href={card.href}
                      onClick={handleCardNavigate}
                      data-accent={card.accent}
                      className={cn(
                        "welcome-popup-card group relative flex h-full cursor-pointer flex-col rounded-2xl p-4 transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1.5 sm:p-5",
                        styles.glow,
                      )}
                    >
                      <div className="relative flex h-full flex-col">
                        <span
                          className={cn(
                            "welcome-popup-card__icon welcome-popup-card__icon-float inline-flex h-11 w-11 items-center justify-center rounded-xl",
                            styles.icon,
                          )}
                          style={{ animationDelay: `${index * 0.35}s` }}
                        >
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h3 className="mt-4 font-[family-name:var(--font-inter)] text-base font-bold tracking-[-0.02em] text-white">
                          {card.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-white/60">{card.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.5, ease: popupEase }}
            >
              <Link
                href="/book-consultation/"
                onClick={handleCardNavigate}
                className="welcome-popup-primary-btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF6B2C] px-7 text-sm font-bold text-white shadow-[0_16px_40px_rgba(255,107,44,0.35)] transition-[transform,box-shadow] duration-200 will-change-transform hover:scale-[1.02] hover:shadow-[0_20px_52px_rgba(255,107,44,0.48)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B2C]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C] sm:text-base"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/#our-services"
                onClick={handleCardNavigate}
                className="welcome-popup-secondary-btn inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-transparent px-7 text-sm font-bold text-white transition-[background-color,border-color] duration-200 hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C] sm:text-base"
              >
                Explore Our Services
              </Link>
            </motion.div>

            <motion.p
              className="mt-7 text-center text-sm font-medium text-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.5, ease: popupEase }}
            >
              <span className="tracking-[0.2em] text-[#FF6B2C]" aria-hidden>
                ★★★★★
              </span>
              <span className="sr-only">5 out of 5 stars. </span>
              <span className="ml-2">
                Trusted by <span className="font-bold text-[#FF6B2C]">100+</span> Businesses
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
