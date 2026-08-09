import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors disabled:opacity-40 disabled:pointer-events-none tap-highlight-none active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground",
        secondary: "bg-surface-elevated text-foreground border border-border",
        ghost: "bg-transparent text-foreground hover:bg-surface-elevated",
        outline: "bg-transparent text-foreground border border-border",
        danger: "bg-danger/15 text-danger border border-danger/30",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-12 px-5 text-[15px]",
        lg: "h-14 px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
