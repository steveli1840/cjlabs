# Cloudflare 自动部署配置

本项目已配置 OpenNext + Wrangler，支持 Git 推送自动构建部署。

## GitHub 仓库

- 账号：`steveli1840`
- 仓库：`https://github.com/steveli1840/cjlabs`

首次推送（需先登录 GitHub CLI）：

```bash
gh auth login
cd /Users/cjlabs/project/LLM/cjlabs
gh repo create steveli1840/cjlabs --public --source=. --remote=origin --push
```

若仓库已存在，只需：

```bash
git remote add origin https://github.com/steveli1840/cjlabs.git
git push -u origin main
```

## 生产 URL

https://cjlabs.steveli1840.workers.dev

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
