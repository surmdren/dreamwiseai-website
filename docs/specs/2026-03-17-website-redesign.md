# DreamWise AI 官网 — 产品需求文档

**版本**：v1.5
**日期**：2026-03-17
**状态**：待确认

---

## 1. 项目背景与目标

DreamWise AI 是一家 AI 咨询公司，专注于帮助中小企业通过 AI Agent 实现数字化转型。本次从零重建公司官网，替换现有占位内容。

**业务目标**：
- 获取潜在客户联系方式（留资）
- 通过案例展示建立信任
- 引导访客预约免费咨询

---

## 2. 目标用户

| 用户 | 描述 |
|------|------|
| 主要 | 中小企业决策者（CEO、运营总监、IT 负责人），非技术背景为主 |
| 次要 | 对 AI 转型感兴趣的业务负责人 |

---

## 3. 品牌规格

| 项目 | 规格 |
|------|------|
| 公司名 | DreamWise AI |
| Slogan | The Future is Agent-Driven. We'll Get You There. |
| 主色 | Deep Indigo `#1E3A8A` |
| Accent | Bright Blue `#3B82F6` |
| 背景色 | White `#FFFFFF` / Light Gray `#F8FAFC` |
| Heading 文字色 | `#0F172A` |
| Body 文字色 | `#475569` |
| 字体 | Sora（标题）+ Inter（正文） |
| 风格 | Clean Professional，大量留白，现代感 |

---

## 4. 页面结构 & 内容需求

### 4.1 Navbar
- Logo（文字 Logo：DreamWise AI）
- 导航链接：Services / How It Works / Case Studies / About
- 右侧 CTA 按钮：**Book a Free Call**（跳转到 CTA 表单区）
- 滚动后 Navbar 背景变为白色 + 阴影（粘性顶部）

### 4.2 Hero Section
- 主标题：大字，冲击力强，突出 "Agent-Driven"
- 副标题：slogan — *The Future is Agent-Driven. We'll Get You There.*
- 双 CTA：**Book a Free Assessment**（主）+ **See Case Studies**（次）
- 背景：抽象 Agent/网络节点视觉元素（CSS/SVG 实现，无需外部图片）

### 4.3 Trust Logos Section
- 一行 "Trusted by" 合作伙伴/客户 logo
- 放在 Hero 下方，3-5 个 logo（占位，后续替换真实 logo）
- 灰色调 logo，hover 显示原色

### 4.4 Problem Section
- 标题：*"Why Most SMEs Struggle with AI Adoption"*
- 3 个痛点卡片：
  1. **No Clear Starting Point** — AI feels overwhelming without a roadmap
  2. **Generic Solutions Don't Fit** — Off-the-shelf tools miss your specific workflows
  3. **No One to Own It** — AI projects stall without dedicated expertise

### 4.5 Services Section
- 标题：*"What We Do"*
- 3 个服务卡片：

| 服务 | 副标题 | 描述 |
|------|--------|------|
| Agent Readiness Assessment | *Know where to start* | We audit your processes, identify high-impact automation opportunities, and deliver a clear AI roadmap. |
| Custom Agent Development | *Built for your business* | We design and deploy AI agents tailored to your workflows — from customer service to internal operations. |
| Agent Operations & Optimization | *Keep improving* | Ongoing monitoring, fine-tuning, and iteration to ensure your agents deliver measurable business results. |

### 4.6 How It Works Section
- 标题：*"From Zero to Agent-Driven in 3 Steps"*
- 3 步流程：
  1. **Assess** — We map your current processes and identify where agents create the most value
  2. **Build** — We develop and integrate custom agents into your existing systems
  3. **Operate** — We monitor performance and continuously improve outcomes

### 4.7 Case Studies Section
- 标题：*"Real Results for Real Businesses"*
- 3 个案例卡片（占位内容，结构真实）：

| 行业 | 场景 | 结果 |
|------|------|------|
| E-commerce | Customer service agent | 70% reduction in support tickets |
| Logistics | Order tracking & ops agent | 40% faster response time |
| Professional Services | Internal knowledge agent | 3x faster onboarding |

### 4.8 Stats Section
- 4 个关键数字：
  - **50+** SMEs Transformed
  - **10,000+** Hours Automated
  - **3.2x** Average ROI
  - **< 8 weeks** Average Time to Deploy

### 4.9 CTA Section
- 标题：*"Ready to Become Agent-Driven?"*
- 副标题：*Start with a free 30-minute assessment call.*
- 双入口：
  - **Calendly 嵌入**：直接选择时间预约（主），嵌入 Calendly inline widget
  - **表单留资**：Full Name / Company / Email /（可选）What's your biggest challenge?（备选）
- Resend 邮件通知留资表单提交

### 4.10 Testimonials Section
- 标题：*"What Our Clients Say"*
- 2-3 个客户证言卡片，每张包含：引用内容、客户姓名、职位、公司名
- 占位内容（真实客户入驻后替换）

### 4.11 About Section
- 标题：*"Why DreamWise AI"*
- 内容：团队背景、创立原因、核心理念
- 与 Navbar About 链接锚点对应

### 4.12 Footer
- Logo + slogan
- 导航链接（同 Navbar）
- 版权：© 2026 DreamWise AI. All rights reserved.

---

## 5. 非功能性需求

| 项目 | 要求 |
|------|------|
| 响应式 | 完整支持 Mobile / Tablet / Desktop |
| 性能 | 纯静态渲染，无外部 API 依赖 |
| 动效 | 适度（scroll fade-in，无过度动画） |
| 语言 | 英语（默认）+ 中文，自动检测浏览器语言 |
| 表单 | 接入 Resend，Next.js Route Handler 发送邮件通知到指定邮箱 |
| SEO | 双语 `<title>` + `<meta description>` + `og:image`，Next.js Metadata API 实现 |

---

## 6. 范围说明（Scope）

**本次包含**：单页官网（Landing Page），所有 Section 均在一个页面内。

**本次不包含**：
- 后端 / 数据库
- 博客 / 多页面
- CMS
