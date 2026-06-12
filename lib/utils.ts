import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Secondary CTA styling for dark hero sections (cloud and tech service pages). */
export const darkHeroSecondaryButtonClass =
  "border border-white/20 bg-white/[0.12] text-white backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/[0.18] hover:text-white";

/** Learn More CTA styling for dark hero sections with high contrast readability. */
export const darkHeroLearnMoreButtonClass =
  "hero-learn-more-btn border-[1.5px] border-white/25 bg-[rgba(30,40,60,0.85)] !text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] transition-all duration-300 hover:border-[#FF6B2C]/70 hover:bg-[rgba(40,52,78,0.92)] hover:!text-white hover:shadow-[0_8px_28px_rgba(0,0,0,0.32)] [&_svg]:!text-white [&_svg]:stroke-white";
