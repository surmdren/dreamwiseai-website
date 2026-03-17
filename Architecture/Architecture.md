# DreamWise AI 官网 — 架构说明文档

**版本**：v1.0
**日期**：2026-03-18
**状态**：已确认

---

## 目录

- [架构背景与目标](#架构背景与目标)
- [架构设计原则与约束](#架构设计原则与约束)
- [业务架构说明](#业务架构说明)
- [系统架构说明](#系统架构说明)
- [技术架构说明](#技术架构说明)
- [模块拆分与职责边界](#模块拆分与职责边界)
- [核心数据流说明](#核心数据流说明)
- [国际化架构说明](#国际化架构说明)
- [API能力暴露方式说明](#api能力暴露方式说明)
- [关键架构决策记录](#关键架构决策记录)
- [架构风险与假设](#架构风险与假设)
- [架构演进方向](#架构演进方向)

---

## 架构背景与目标

DreamWise AI 是一家 AI 咨询公司，专注于帮助中小企业通过 AI Agent 实现数字化转型。官网是公司获客的核心入口，需要在 12 个月内支撑公司实现 $1M ARR 目标。

**架构目标：**
- 快速上线（< 2 周从零到生产）
- 极低运维成本（无服务器，无数据库）
- 高性能（Core Web Vitals 全绿）
- 双语支持（中英文自动检测）
- 表单留资 + Calendly 预约双入口

---

## 架构设计原则与约束

| 原则 | 说明 |
|------|------|
| 极简主义 | 官网是静态内容站，不引入数据库、后端服务 |
| Serverless 优先 | 表单提交使用 Next.js Route Handler + Resend，无需独立后端 |
| 零运维 | 部署在 Vercel，无 K8s，无服务器管理 |
| SEO 优先 | 使用 SSG（静态生成），确保搜索引擎可索引双语内容 |
| 渐进增强 | 动效不影响核心内容加载，Calendly 异步加载 |

**约束：**
- 现有项目基于 Next.js 14 App Router
- 无数据库需求（本次范围内）
- 表单只需前端发送邮件通知，无需持久化

---

## 业务架构说明

> 对应图：`diagrams/01-business-architecture.mmd`

官网业务域分为三个核心域：

**信任建立域**：通过 Case Studies、Testimonials、Stats、Trust Logos 向访客传递公信力。

**服务展示域**：通过 Services、How It Works、Problem Section 向访客清晰传递 DreamWise AI 的价值主张。

**转化域**：通过 CTA Section（Calendly 预约 + 留资表单）、Navbar CTA 按钮将访客转化为潜在客户。

三个域的转化漏斗：**引起兴趣 → 建立信任 → 触发行动**。

---

## 系统架构说明

> 对应图：`diagrams/03-system-architecture.mmd`

系统边界清晰，分为三个部分：

1. **前端系统**：Next.js 静态站点，部署在 Vercel CDN，全球分发
2. **邮件服务**：Resend API，通过 Next.js Route Handler 触发，无独立服务器
3. **预约服务**：Calendly 第三方 SaaS，嵌入前端 inline widget

系统间无同步强依赖，Resend 和 Calendly 均为异步调用，前端不依赖其可用性进行内容渲染。

---

## 技术架构说明

> 对应图：`diagrams/02-technical-architecture.mmd`

| 层次 | 技术选型 | 说明 |
|------|----------|------|
| 前端框架 | Next.js 14 (App Router) | SSG 静态生成，SEO 友好 |
| 样式 | Tailwind CSS | 原子化 CSS，快速开发 |
| 动效 | Framer Motion | scroll fade-in，适度动效 |
| 图标 | Lucide React | 轻量一致的图标库 |
| 字体 | Google Fonts (Sora + Inter) | 通过 next/font 优化加载 |
| 国际化 | next-intl | 双语支持，SSG 兼容 |
| 邮件 | Resend | Route Handler 触发，SMTP 替代 |
| 预约 | Calendly Widget | 嵌入 inline widget，无需后端 |
| 容器化 | Docker (Next.js standalone) | 容器化部署 |
| 编排 | Kubernetes (k3s) | 自托管轻量集群 |
| Ingress | Nginx Ingress + cert-manager | TLS 终止 + Let's Encrypt |
| SEO | Next.js Metadata API | 双语 meta + og:image |

---

## 模块拆分与职责边界

> 对应图：`diagrams/04-module-dependencies.mmd`

前端组件按区块划分，12 个独立 Section 组件：

| 模块 | 职责 |
|------|------|
| `Navbar` | 导航、语言切换、粘性滚动效果 |
| `Hero` | 主标题、slogan、双CTA、SVG背景 |
| `TrustLogos` | 合作伙伴 logo 展示 |
| `Problem` | 3 个痛点卡片 |
| `Services` | 3 个服务卡片 |
| `HowItWorks` | 3 步流程展示 |
| `CaseStudies` | 案例卡片列表 |
| `Stats` | 关键数字展示 |
| `CTA` | Calendly widget + 留资表单 |
| `Testimonials` | 客户证言卡片 |
| `About` | 公司背景介绍 |
| `Footer` | 底部导航和版权 |

共享模块：
- `lib/i18n` — 语言检测与切换逻辑
- `messages/en.json` + `messages/zh.json` — 翻译文案
- `app/api/contact/route.ts` — Resend 邮件发送 Route Handler

---

## 核心数据流说明

> 对应图：`diagrams/05-data-flow.mmd`

**留资表单流：**
```
用户填写表单 → 前端验证 → POST /api/contact → Route Handler → Resend API → 邮件到 consulting@dreamwiseai.com
```

**Calendly 预约流：**
```
用户点击预约 → Calendly inline widget 加载 → 用户选择时间 → Calendly 发送确认邮件（独立处理）
```

**语言检测流：**
```
用户访问 → next-intl 读取 Accept-Language Header → 匹配语言（zh/* → 中文，其余 → 英文）→ 渲染对应语言内容
```

所有数据流均为客户端发起，无服务端状态存储。

---

## 国际化架构说明

> 对应图：`diagrams/05-data-flow.mmd`（语言检测部分）

**语言路由策略：** 使用 next-intl 的 `locale` 路由前缀（`/en/`、`/zh/`），SEO 友好，hreflang 自动生成。

**内容分层模型：**
- UI 文案：静态翻译文件（`messages/en.json`、`messages/zh.json`）
- 无动态 CMS 内容（本次范围外）

**翻译管理架构：** 集中式 JSON 翻译文件，开发者直接维护。

**SEO 多语言策略：**
- `hreflang` 标签自动注入
- 每语言独立 `<title>` 和 `<meta description>`
- `og:image` 双语各一套

**构建方式：** SSG，构建时生成中英文两套静态页面，运行时无额外开销。

| 决策项 | 决策 | 原因 |
|--------|------|------|
| URL 策略 | 路径前缀 `/en/`、`/zh/` | SEO 最优，CDN 缓存友好 |
| 翻译存储 | 代码内 JSON | 内容简单，无需 CMS |
| 默认语言回退 | 回退到英文 | 国际用户为主 |
| 构建方式 | SSG 多语言静态生成 | 性能最优，无运行时开销 |

---

## API能力暴露方式说明

> 对应图：`diagrams/06-api-architecture.mmd`

本项目仅暴露一个内部 API 端点：

| 端点 | 方法 | 作用 |
|------|------|------|
| `/api/contact` | POST | 接收表单数据，通过 Resend 发送邮件通知 |

**请求体：**
```json
{
  "name": "string",
  "company": "string",
  "email": "string",
  "challenge": "string (optional)"
}
```

**外部服务调用：**
- Resend API（`api.resend.com`）：发件
- Calendly（`calendly.com`）：嵌入 widget，前端直接调用，无后端参与

---

## 关键架构决策记录

### ADR-001：选择 K8s 自托管（k3s）而非 Vercel

**决策**：使用 k3s 自托管部署，不使用 Vercel。
**理由**：数据完全自控，基础设施可扩展，月成本固定（$7-13/月），为后续产品上线（SaaS、API 服务）奠定基础，避免未来迁移成本。
**影响**：需要管理服务器，运维复杂度略高于 Vercel；初期通过 k3s 降低 K8s 管理复杂度。

### ADR-002：选择 Resend 而非自建 SMTP

**决策**：使用 Resend API 发送邮件。
**理由**：无需配置邮件服务器，免费套餐 3000 封/月，API 简单，10 分钟接入。
**影响**：依赖 Resend 服务可用性，邮件发件域名需验证。

### ADR-003：选择 next-intl 实现 i18n

**决策**：使用 next-intl 而非 next-i18next 或自定义方案。
**理由**：与 Next.js 14 App Router 原生兼容，支持 SSG，类型安全。
**影响**：需要配置 `middleware.ts` 和 locale routing。

### ADR-004：无数据库

**决策**：本次不引入任何数据库。
**理由**：官网需求只有表单邮件通知，无需持久化。引入数据库会增加复杂度和成本。
**影响**：无法统计表单提交历史，需要 Resend 后台查看。

---

## 架构风险与假设

| 风险 | 概率 | 影响 | 应对 |
|------|------|------|------|
| Resend 邮件到达率低 | 低 | 中 | 验证发件域名，监控 Resend 后台 |
| Calendly 加载慢影响体验 | 中 | 低 | 异步加载，不阻塞主内容 |
| Vercel 免费套餐限制 | 低 | 低 | 官网流量初期极低，免费套餐足够 |
| 中文 SEO 效果差 | 中 | 中 | 正确配置 hreflang，提交 sitemap |

**假设：**
- Resend API Key 由 Rick 配置到 Vercel 环境变量
- Calendly 账号由 Rick 创建并提供嵌入 URL
- 发件域名 `dreamwiseai.com` 完成 DNS 验证

---

## 架构演进方向

**Phase 2（3-6 个月后）：**
- 接入 CMS（Contentful 或 Sanity）管理案例和证言内容
- 添加博客模块，支撑 SEO 长尾流量
- 表单数据持久化到 Supabase，建立 CRM 雏形

**Phase 3（6-12 个月后）：**
- 独立产品页面（SaaS 产品上线）
- 用户注册/登录
- 订阅支付集成
