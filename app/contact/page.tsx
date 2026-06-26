import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "联系",
  description: "联系 CJ Labs，交流 AI 产品、创业与合作。",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">联系我</h1>
        <p className="mt-4 text-muted-foreground">欢迎交流 AI 产品、独立开发、创业与合作机会。</p>
        <div className="mt-10 space-y-4 rounded-2xl border border-border bg-card p-6">
          <div>
            <p className="text-sm text-muted-foreground">邮箱</p>
            <a href={`mailto:${siteConfig.links.email}`} className="mt-1 inline-block text-accent hover:opacity-80">
              {siteConfig.links.email}
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">GitHub</p>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-accent hover:opacity-80"
            >
              {siteConfig.links.github}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
