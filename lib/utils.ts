import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Secondary CTA styling for dark hero sections (cloud and tech service pages). */
export const darkHeroSecondaryButtonClass =
  "border border-white/20 bg-white/[0.12] text-white backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/[0.18] hover:text-white";
