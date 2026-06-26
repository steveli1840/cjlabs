import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "CJ Labs 正在构建与探索的 AI 项目与实践。",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
        <p className="mt-4 text-muted-foreground">真实项目，持续迭代，公开进展。</p>
        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {project.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
