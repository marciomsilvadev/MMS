import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  className,
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/[0.08] p-6 transition-all duration-300 relative overflow-hidden",
        hoverEffect &&
          "hover:border-amber-500/30 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
