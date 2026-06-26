import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "CJ Labs 的 AI 创业、产品实践与 Build in Public 文章。",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-4 text-muted-foreground">AI 创业、产品、Agent、自动化与实战案例。</p>
        <div className="mt-10 space-y-4">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
            >
              <time className="text-xs text-muted-foreground">{post.date}</time>
              <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
