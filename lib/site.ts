export const siteConfig = {
  name: "CJ Labs",
  slogan: "Build What's Next.",
  description:
    "帮助更多普通人利用 AI 建立产品、收入、个人品牌与事业。持续分享 AI 产品实践、创业实践与 Build in Public。",
  url: "https://cjlabs.quark-mask-56b.workers.dev",
  locale: "zh-CN",
  links: {
    github: "https://github.com/steveli1840/cjlabs",
    email: "hello@cjlabs.com",
  },
} as const;

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "联系" },
] as const;

export const valueProps = [
  {
    title: "AI 产品实践",
    description: "从 0 到 1 构建可落地的 AI 产品，分享真实开发过程与技术选型。",
  },
  {
    title: "AI 创业",
    description: "探索 AI 时代的独立开发与商业机会，关注收入、增长与可持续模式。",
  },
  {
    title: "Build in Public",
    description: "公开分享做了什么、为什么做、是否赚钱，以及踩过的坑。",
  },
] as const;

export const blogPosts = [
  {
    slug: "welcome-to-cj-labs",
    title: "欢迎来到 CJ Labs",
    excerpt: "这是 CJ Labs 的第一篇文章，记录我们为什么开始，以及接下来要分享什么。",
    date: "2026-06-26",
  },
  {
    slug: "build-in-public-with-ai",
    title: "用 AI 做 Build in Public",
    excerpt: "如何利用 AI 工具加速产品迭代，同时保持透明分享与长期信任。",
    date: "2026-06-20",
  },
] as const;

export const projects = [
  {
    name: "CJ Labs 官网",
    description: "基于 Next.js 与 Cloudflare Workers 的个人品牌官网，支持 SSR 与自动部署。",
    tags: ["Next.js", "Cloudflare", "TypeScript"],
    status: "进行中",
  },
  {
    name: "AI 面试助手",
    description: "面向程序员的 AI 面试准备工具，涵盖架构、算法与系统设计。",
    tags: ["AI Agent", "LLM", "Product"],
    status: "规划中",
  },
] as const;
