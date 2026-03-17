# DreamWise AI 官网 — 技术解决方案总览

**版本**：v1.0
**日期**：2026-03-18
**部署方案**：K8s 自托管

---

## 技术栈总览

| 层级 | 技术选型 | 说明 |
|------|----------|------|
| 前端框架 | Next.js 14 (App Router) | SSR/SSG，支持 standalone 模式打包 |
| 样式 | Tailwind CSS | 原子化 CSS |
| 动效 | Framer Motion | scroll fade-in |
| 图标 | Lucide React | 轻量图标库 |
| 字体 | Google Fonts via next/font | Sora + Inter |
| 国际化 | next-intl | 中英双语 |
| 邮件 | Resend | 表单留资邮件通知 |
| 预约 | Calendly Widget | 嵌入式预约 |
| 容器化 | Docker | Next.js standalone 模式 |
| 编排 | Kubernetes (k3s) | 自托管轻量集群 |
| Ingress | Nginx Ingress Controller | 流量入口 + TLS 终止 |
| TLS | cert-manager + Let's Encrypt | 自动证书 |
| 域名 | Cloudflare（推荐）/ Namecheap DNS | dreamwiseai.com 解析到集群 IP |
| SEO | Next.js Metadata API | 双语 meta + og:image |

## 架构简述

```
用户访问 dreamwiseai.com
    ↓
Cloudflare / DNS（解析到服务器 IP）
    ↓
Nginx Ingress Controller（TLS 终止）
    ↓
K8s Service → Next.js Pod
    ↓
用户交互：
  ├── 留资表单 → POST /api/contact → Resend API → consulting@dreamwiseai.com
  └── Calendly Widget → 预约时间（Calendly 独立处理）
```

## 快速开始

```bash
# 本地开发
npm install
npm run dev

# 构建 Docker 镜像
docker build -t dreamwiseai-website:latest .

# 部署到 K8s
kubectl apply -f infrastructure/k8s/

# 环境变量（K8s Secret）
RESEND_API_KEY=re_xxx
CONTACT_EMAIL=consulting@dreamwiseai.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/dreamwiseai/30min
```

## 目录结构

```
dreamwiseai-website/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # 根布局 + Metadata
│   │   └── page.tsx            # 主页（组合所有 Section）
│   └── api/
│       └── contact/
│           └── route.ts        # Resend Route Handler
├── components/
│   ├── sections/               # 12 个页面区块
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustLogos.tsx
│   │   ├── Problem.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Stats.tsx
│   │   ├── CTA.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   └── ui/                     # 共享 UI 组件
│       ├── Button.tsx
│       ├── Card.tsx
│       └── AnimatedSection.tsx
├── lib/
│   └── resend.ts               # Resend 客户端
├── messages/
│   ├── en.json                 # 英文翻译
│   └── zh.json                 # 中文翻译
├── middleware.ts               # next-intl 语言路由
├── Dockerfile                  # 容器构建文件
├── infrastructure/
│   └── k8s/
│       ├── deployment.yaml
│       ├── service.yaml
│       ├── ingress.yaml
│       └── secret.yaml
└── public/
    └── og-image.png
```

## 详细文档

- [前端技术方案](frontend/tech-stack.md)
- [项目结构说明](frontend/project-structure.md)
- [开发规范](frontend/dev-guide.md)
- [API 设计](backend/api-design.md)
- [K8s 基础设施](infrastructure/architecture.md)
- [成本估算](infrastructure/cost-estimate.md)
