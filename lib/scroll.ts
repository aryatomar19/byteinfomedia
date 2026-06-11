export const HEADER_SCROLL_OFFSET = 100;

const INTENTIONAL_HASHES = new Set(["consultation", "assessment"]);

let scrollRestorationInitialized = false;

export function initScrollRestoration() {
  if (scrollRestorationInitialized || typeof window === "undefined") return;
  scrollRestorationInitialized = true;

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, left: 0, behavior });
}

export function forceScrollToTop() {
  initScrollRestoration();
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function isIntentionalHash(hash: string) {
  const id = hash.replace(/^#/, "");
  return id.length > 0 && INTENTIONAL_HASHES.has(id);
}

export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  if (!id) {
    scrollToTop(behavior);
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - HEADER_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, y), left: 0, behavior });
}
