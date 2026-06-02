import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B2C]/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-[#FF6B2C] text-white shadow-[0_16px_40px_rgba(255,107,44,0.28)] hover:-translate-y-0.5 hover:bg-[#e85f24]",
        secondary:
          "border border-[#0A0F1C]/12 bg-white text-[#0A0F1C] hover:-translate-y-0.5 hover:border-[#FF6B2C]/40 hover:bg-[#FFF7F3]",
        outline:
          "border border-[#FF6B2C]/45 bg-transparent text-[#c84a17] hover:bg-[#FFF7F3]",
        ghost: "text-[#0A0F1C] hover:bg-[#F4F6FA]",
        dark: "bg-[#0A0F1C] text-white hover:bg-[#151d30]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
