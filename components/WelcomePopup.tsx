"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "byteinfomedia_welcome_popup_dismissed";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 1500;
const CHARACTER_IMAGE = "/images/welcome-popup/character.png";

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type ServiceCard = {
  emoji: string;
  title: string;
  description: string;
  href: string;
  accent: "orange" | "blue" | "purple" | "green";
};

const serviceCards: ServiceCard[] = [
  {
    emoji: "📈",
    title: "Grow My Business",
    description: "SEO • Google Ads • Social Media",
    href: "/digital-marketing/",
    accent: "orange",
  },
  {
    emoji: "☁",
    title: "Cloud & DevOps",
    description: "AWS • Azure • Kubernetes",
    href: "/cloud-services/",
    accent: "blue",
  },
  {
    emoji: "🧠",
    title: "AI Solutions",
    description: "Automation • Chatbots",
    href: "/generative-ai/",
    accent: "purple",
  },
  {
    emoji: "💻",
    title: "Website Development",
    description: "Modern Websites",
    href: "/website-development/",
    accent: "green",
  },
];

const cardAccentClass: Record<ServiceCard["accent"], string> = {
  orange: "welcome-popup-card--orange",
  blue: "welcome-popup-card--blue",
  purple: "welcome-popup-card--purple",
  green: "welcome-popup-card--green",
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

  const handleNavigate = useCallback(() => {
    close();
  }, [close]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="welcome-popup-overlay fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: popupEase }}
          onMouseDown={handleBackdropClick}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-popup-title"
            aria-describedby="welcome-popup-subtitle"
            className="welcome-popup-panel relative flex w-[95%] max-h-[min(620px,92vh)] max-w-[980px] flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_32px_80px_rgba(15,23,42,0.18)] sm:w-[92%] md:max-h-[620px] md:flex-row"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: popupEase }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="welcome-popup-close absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent bg-white text-[#0F172A] shadow-[0_4px_16px_rgba(15,23,42,0.12)] transition duration-200 hover:border-[#FF6A2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A2B]/40"
              aria-label="Close welcome popup"
            >
              <X className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </button>

            <div className="welcome-popup-left flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-7 sm:px-8 sm:py-8 md:w-[55%] md:py-9 md:pl-9 md:pr-5">
              <header>
                <p className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#64748B]">
                  👋 Welcome to
                </p>
                <h2
                  id="welcome-popup-title"
                  className="mt-1 font-[family-name:var(--font-inter)] text-[1.65rem] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[1.85rem]"
                >
                  <span className="text-[#0F172A]">Byte</span>{" "}
                  <span className="text-[#FF6A2B]">Infomedia</span>
                </h2>
                <p id="welcome-popup-subtitle" className="mt-2 text-sm font-medium text-[#64748B] sm:text-[0.95rem]">
                  Building Digital Solutions That Scale.
                </p>
                <div className="welcome-popup-divider mt-4 h-[3px] w-12 rounded-full bg-[#FF6A2B]" aria-hidden />
              </header>

              <h3 className="mt-6 font-[family-name:var(--font-inter)] text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
                Explore Our Services
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
                {serviceCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.05,
                      duration: 0.4,
                      ease: popupEase,
                    }}
                  >
                    <Link
                      href={card.href}
                      onClick={handleNavigate}
                      className={cn(
                        "welcome-popup-card group flex h-full flex-col rounded-2xl bg-white p-3 transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1 sm:p-3.5",
                        cardAccentClass[card.accent],
                      )}
                    >
                      <span className="text-lg leading-none sm:text-xl" aria-hidden>
                        {card.emoji}
                      </span>
                      <h4 className="mt-2.5 font-[family-name:var(--font-inter)] text-[0.72rem] font-bold leading-tight tracking-[-0.02em] text-[#0F172A] sm:text-xs">
                        {card.title}
                      </h4>
                      <p className="mt-1 text-[0.62rem] leading-4 text-[#64748B] sm:text-[0.68rem]">
                        {card.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.4, ease: popupEase }}
              >
                <Link
                  href="/book-consultation/"
                  onClick={handleNavigate}
                  className="welcome-popup-primary-btn inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#FF6A2B] px-5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,106,43,0.32)] transition-[transform,box-shadow] duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(255,106,43,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A2B]/40"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/#our-services"
                  onClick={handleNavigate}
                  className="welcome-popup-secondary-btn inline-flex h-11 items-center justify-center rounded-xl border border-[#0F172A]/12 bg-white px-5 text-sm font-bold text-[#0F172A] transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#0F172A]/20 hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]/15"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.p
                className="mt-5 text-xs font-medium text-[#0F172A] sm:text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.4, ease: popupEase }}
              >
                <span className="tracking-[0.15em] text-[#FF6A2B]" aria-hidden>
                  ★★★★★
                </span>
                <span className="sr-only">5 out of 5 stars. </span>
                <span className="ml-1.5">
                  Trusted by <span className="font-bold text-[#FF6A2B]">100+</span> Businesses
                </span>
              </motion.p>
            </div>

            <div className="welcome-popup-right relative hidden min-h-[280px] overflow-hidden md:flex md:w-[45%]">
              <div className="welcome-popup-right__glow pointer-events-none absolute inset-0" aria-hidden />
              <motion.div
                className="welcome-popup-character relative mx-auto flex h-full w-full items-end justify-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.5, ease: popupEase }}
              >
                <Image
                  src={CHARACTER_IMAGE}
                  alt="Byte Infomedia team member welcoming you"
                  width={520}
                  height={620}
                  priority
                  className="welcome-popup-character__img h-auto max-h-[94%] w-auto max-w-[108%] object-contain object-bottom"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
