# Cloudflare 自动部署配置

本项目已配置 OpenNext + Wrangler，支持 Git 推送自动构建部署。

## 生产 URL

https://cjlabs.quark-mask-56b.workers.dev

> 当前通过 `wrangler deploy --temporary` 部署到临时 Cloudflare 账号。若要长期持有，请在 60 分钟内访问 Dashboard Claim URL 认领账号，或使用正式 Cloudflare 账号重新部署。

## Workers Builds（Git 自动部署）

1. 打开 [Cloudflare Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages)
2. 选择 Worker 项目 `cjlabs` → **Settings** → **Builds**
3. **Connect to Git** → 授权 GitHub → 选择 `cjlabs` 仓库
4. 配置：

| 配置项 | 值 |
|--------|-----|
| Production branch | `main` |
| Build command | `npm install && npx opennextjs-cloudflare build` |
| Deploy command | `npx opennextjs-cloudflare deploy` |
| Node version | `22`（环境变量 `NODE_VERSION=22`） |

5. 保存后，每次 push 到 `main` 将自动构建并部署

## 本地命令

```bash
npm run dev       # Next.js 开发
npm run build     # Next.js 构建
npm run preview   # Workers 运行时预览
npm run deploy    # 构建并部署到 Cloudflare
```
