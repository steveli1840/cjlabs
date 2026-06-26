import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="mb-4 inline-flex rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          AI 创业实践平台
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          帮助普通人用 AI
          <span className="block text-accent">建立产品、收入与事业</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/blog">阅读 Blog</Button>
          <Button href="/about" variant="secondary">
            了解我
          </Button>
        </div>
      </div>
    </section>
  );
}
