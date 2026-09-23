import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "accent" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-zinc-800/80 text-zinc-300 border-white/10",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accent: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    outline: "bg-transparent text-zinc-400 border-zinc-700/60",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
