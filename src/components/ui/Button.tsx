import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "whatsapp" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 font-bold shadow-lg shadow-amber-500/20 border border-amber-400/30 hover:shadow-amber-500/35",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 font-semibold shadow-lg shadow-emerald-500/20 border border-emerald-400/30 hover:shadow-emerald-500/35",
    secondary:
      "bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-white/20 shadow-sm",
    outline:
      "bg-transparent hover:bg-white/5 text-zinc-300 border border-white/15 hover:border-amber-500/40 hover:text-amber-400",
    ghost:
      "bg-transparent hover:bg-white/5 text-zinc-400 hover:text-zinc-200",
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
