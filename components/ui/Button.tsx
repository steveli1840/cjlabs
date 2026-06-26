import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ variant = "primary", className = "", children, href, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:opacity-90"
      : "border border-border bg-card text-foreground hover:bg-muted";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}
