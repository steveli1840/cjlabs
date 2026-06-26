import Link from "next/link";
import { blogPosts } from "@/lib/site";

export function LatestPosts() {
  return (
    <section className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">最新文章</h2>
            <p className="mt-3 text-muted-foreground">Build in Public，从第一篇开始。</p>
          </div>
          <Link href="/blog" className="text-sm text-accent transition-opacity hover:opacity-80">
            查看全部
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
            >
              <time className="text-xs text-muted-foreground">{post.date}</time>
              <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
