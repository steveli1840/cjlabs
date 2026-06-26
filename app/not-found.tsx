import { SiteShell } from "@/components/layout/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-start justify-center px-6 py-20">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="mt-4 text-3xl font-semibold">页面不存在</h1>
        <p className="mt-4 text-muted-foreground">你访问的页面可能已被移动或尚未创建。</p>
      </section>
    </SiteShell>
  );
}
