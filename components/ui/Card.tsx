import type { ReactNode } from "react";

export function Card({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p> : null}
      {children}
    </div>
  );
}
