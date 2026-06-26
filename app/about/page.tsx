import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于",
  description: `了解 ${siteConfig.name} 的使命、愿景与 Build in Public 理念。`,
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm text-muted-foreground">关于 CJ Labs</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Build in Public 的长期实践</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
          <p>
            CJ Labs 是我的长期创业项目。它不仅仅是一个网站，而是未来个人品牌、AI 产品、AI 创业、AI
            服务和商业生态的起点。
          </p>
          <p>
            我希望分享的不只是 AI 技术，而是真正可以落地、能够赚钱、能够创造价值的方法。持续分享做了什么、为什么做、如何做、是否赚钱，以及踩了哪些坑。
          </p>
          <p>
            网站只是整个生态的入口。未来将逐步扩展 Blog、Projects、AI 工具、课程、社区与 SaaS 产品。
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
