"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, X } from "lucide-react";

const SHOW_DELAY_MS = 1500;
const ILLUSTRATION_IMAGE = "/images/welcome-popup/saas-illustration.png";

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const serviceCards = [
  { emoji: "☁️", title: "Cloud & DevOps", description: "Scalable • Secure • Reliable" },
  { emoji: "🤖", title: "AI Solutions", description: "Smart Automation" },
  { emoji: "💻", title: "Website Development", description: "Modern • Responsive" },
  { emoji: "📈", title: "Digital Marketing", description: "Rank • Reach • Grow" },
] as const;

const popupEase = [0, 0, 0.2, 1] as const;

export function WelcomePopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollPositionRef = useRef(0);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

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

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="welcome-popup-overlay fixed inset-0 z-[9999] flex items-center justify-center"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: popupEase }}
          onMouseDown={handleBackdropClick}
        >
          <motion.div
            className="welcome-popup-scale"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: popupEase }}
          >
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="welcome-popup-brand"
              aria-describedby="welcome-popup-description"
              className="welcome-popup-panel welcome-popup-font relative flex w-[1180px] flex-col overflow-hidden rounded-[24px] bg-white p-10 shadow-[0_32px_80px_rgba(15,23,42,0.16)] lg:flex-row"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <motion.button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                className="welcome-popup-close absolute right-5 top-5 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#0F172A] shadow-[0_4px_16px_rgba(15,23,42,0.08)] transition-colors duration-200 hover:border-[#FF6A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]/40"
                aria-label="Close welcome popup"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              </motion.button>

              <div className="welcome-popup-left order-1 flex h-full w-full flex-col justify-center lg:order-none lg:w-[44%] lg:pr-4">
                <header>
                  <p className="text-sm font-medium text-[#64748B]">👋 Welcome to</p>
                  <p id="welcome-popup-brand" className="mt-0.5 text-lg font-extrabold tracking-[-0.03em]">
                    <span className="text-[#0F172A]">Byte</span>{" "}
                    <span className="text-[#FF6A1A]">Infomedia</span>
                  </p>
                </header>

                <h2 className="welcome-popup-heading mt-3 font-extrabold tracking-[-0.03em] text-[#0F172A]">
                  Grow Your Business
                  <br />
                  with <span className="text-[#FF6A1A]">Expert Solutions</span>
                </h2>

                <p id="welcome-popup-description" className="welcome-popup-description max-w-md text-[#64748B]">
                  From Cloud &amp; DevOps to AI, Website Development and Digital Marketing, we help businesses grow
                  with smart technology solutions.
                </p>

                <p className="welcome-popup-services-label text-sm font-semibold text-[#0F172A]">
                  What are you looking for?
                </p>

                <div className="welcome-popup-cards grid grid-cols-2">
                  {serviceCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + index * 0.04, duration: 0.35, ease: popupEase }}
                      whileHover={{ y: -4 }}
                      className="welcome-popup-card flex flex-col justify-center rounded-xl border border-[#E5E7EB] bg-white shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(15,23,42,0.09)]"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-base leading-none" aria-hidden>
                          {card.emoji}
                        </span>
                        <div>
                          <h3 className="text-xs font-bold tracking-[-0.02em] text-[#0F172A] sm:text-[0.8rem]">
                            {card.title}
                          </h3>
                          <p className="mt-0.5 text-[0.68rem] leading-4 text-[#64748B]">{card.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="welcome-popup-cta flex flex-col items-stretch"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.35, ease: popupEase }}
                >
                  <Link
                    href="/book-consultation/"
                    onClick={close}
                    className="welcome-popup-primary-btn inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#FF6A1A] text-base font-bold text-white shadow-[0_12px_28px_rgba(255,106,26,0.32)] transition-[transform,box-shadow] duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(255,106,26,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]/40"
                  >
                    <Calendar className="h-[18px] w-[18px]" aria-hidden />
                    Book Free Consultation
                  </Link>

                  <button
                    type="button"
                    onClick={close}
                    className="welcome-popup-maybe-later text-center text-sm font-medium text-[#64748B] underline decoration-dotted decoration-[#CBD5E1] underline-offset-4 transition-colors duration-200 hover:text-[#0F172A]"
                  >
                    Maybe Later
                  </button>
                </motion.div>

                <p className="welcome-popup-trust text-center font-medium text-[#0F172A]">
                  <span className="tracking-[0.1em] text-[#FF6A1A]" aria-hidden>
                    ⭐⭐⭐⭐⭐
                  </span>
                  <span className="sr-only">5 out of 5 stars. </span>
                  <span className="ml-1">
                    Trusted by <span className="font-bold text-[#FF6A1A]">100+</span> Businesses
                  </span>
                </p>
              </div>

              <div className="welcome-popup-right relative order-2 flex min-h-[200px] w-full flex-shrink-0 items-center justify-center overflow-hidden border-t border-[#E5E7EB] lg:order-none lg:h-full lg:min-h-0 lg:w-[56%] lg:border-l lg:border-t-0">
                <img
                  src={ILLUSTRATION_IMAGE}
                  alt="Modern laptop showing business analytics dashboard with cloud, AI, website, marketing, and security icons"
                  className="welcome-popup-hero-image h-full w-full object-contain"
                  width={720}
                  height={620}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
