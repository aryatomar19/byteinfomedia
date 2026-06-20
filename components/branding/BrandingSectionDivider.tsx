"use client";

type DividerVariant = "wave" | "slant" | "curve" | "notch";

export function BrandingSectionDivider({
  variant = "wave",
  flip = false,
  className = "",
}: {
  variant?: DividerVariant;
  flip?: boolean;
  className?: string;
}) {
  const transform = flip ? "scaleY(-1)" : undefined;

  if (variant === "slant") {
    return (
      <div className={`bs-divider bs-divider--slant ${className}`} aria-hidden style={{ transform }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,80 L1440,0 L1440,80 Z" fill="currentColor" />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`bs-divider bs-divider--curve ${className}`} aria-hidden style={{ transform }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0,60 C360,120 1080,0 1440,50 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  if (variant === "notch") {
    return (
      <div className={`bs-divider bs-divider--notch ${className}`} aria-hidden style={{ transform }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,0 L600,0 L720,60 L840,0 L1440,0 L1440,60 L0,60 Z" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`bs-divider bs-divider--wave ${className}`} aria-hidden style={{ transform }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-full w-full">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
