export const HEADER_SCROLL_OFFSET = 100;

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, behavior });
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
  window.scrollTo({ top: Math.max(0, y), behavior });
}
