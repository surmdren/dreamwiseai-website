# DreamWise AI 官网 — 开发进度 Checklist

最后更新：2026-03-18

---

## Phase 1: Foundation

### 模块 01 - 项目基础配置
- [ ] next.config.mjs 添加 `output: 'standalone'`
- [ ] tailwind.config.ts 添加 brand 颜色 + fontFamily
- [ ] app/globals.css 清理旧样式，添加基础 CSS 变量
- [ ] next/font 配置 Sora + Inter
- [ ] 安装依赖：next-intl, resend, framer-motion（已安装）
- [ ] 验证：`npm run dev` 正常启动，无报错

### 模块 02 - 共享 UI 组件
- [ ] `components/ui/Button.tsx` — Primary/Secondary/Ghost 变体
- [ ] `components/ui/Card.tsx` — 基础卡片
- [ ] `components/ui/AnimatedSection.tsx` — Framer Motion scroll fade-in，支持 prefers-reduced-motion
- [ ] `components/ui/Badge.tsx` — rounded-full badge
- [ ] **单元测试**：AnimatedSection prefers-reduced-motion 逻辑

### 模块 03 - i18n 多语言设置
- [ ] 安装 next-intl
- [ ] `middleware.ts` — 语言路由检测（zh/en）
- [ ] `i18n.ts` — next-intl 配置
- [ ] `messages/en.json` — 完整英文翻译（所有 12 个 Section 文案）
- [ ] `messages/zh.json` — 完整中文翻译
- [ ] `app/[locale]/layout.tsx` — i18n Provider + 字体 + 基础 metadata
- [ ] `app/[locale]/page.tsx` — 主页组合
- [ ] 验证：访问 /zh 显示中文，/en 显示英文

---

## Phase 2: Backend

### 模块 04 - 联系表单 API
- [ ] `lib/resend.ts` — Resend 客户端初始化
- [ ] `app/api/contact/route.ts` — POST handler
- [ ] 服务端字段验证（name/company/email 必填）
- [ ] Resend 邮件发送（to: CONTACT_EMAIL，from: noreply@dreamwiseai.com）
- [ ] 错误处理（400/500 响应）
- [ ] `.env.local.example` — 环境变量示例
- [ ] **API 测试**：成功提交（200）+ 缺少必填字段（400）+ Resend 失败（500）

---

## Phase 3: Frontend Sections

### 模块 05 - Navbar
- [ ] `components/sections/Navbar.tsx`
- [ ] 文字 Logo "DreamWise AI"（Sora bold, blue-900）
- [ ] 导航链接（平滑滚动到 Section）
- [ ] 语言切换按钮（EN/中文，cookie 持久化）
- [ ] "Book a Free Call" CTA 按钮
- [ ] 粘性顶部（fixed top-0 z-50）
- [ ] 滚动后 bg-white/95 + shadow-lg（useScrolled hook）
- [ ] Mobile hamburger 菜单
- [ ] 双语文案（useTranslations）
- [ ] 验证：Desktop + Mobile 两端正常，滚动行为正确

### 模块 06 - Hero + Trust Logos
- [ ] `components/sections/Hero.tsx`
- [ ] 抽象 SVG 背景（网络节点，右上角）
- [ ] Badge 组件（AI Agent Consulting）
- [ ] 主标题 H1（Sora 72px，slate-900）
- [ ] 副标题 Slogan
- [ ] 双 CTA 按钮
- [ ] AnimatedSection fade-in stagger
- [ ] `components/sections/TrustLogos.tsx`
- [ ] 5 个占位 Logo（文字形式）
- [ ] grayscale hover 效果
- [ ] 双语文案

### 模块 07 - Problem + Services
- [ ] `components/sections/Problem.tsx`
- [ ] 3 个痛点卡片（Lucide 图标）
- [ ] `components/sections/Services.tsx`
- [ ] 3 个服务卡片（Step badge + 图标 + 描述）
- [ ] 双语文案
- [ ] AnimatedSection

### 模块 08 - How It Works + Case Studies
- [ ] `components/sections/HowItWorks.tsx`
- [ ] 3 步流程（连接线 + 步骤圆圈）
- [ ] `components/sections/CaseStudies.tsx`
- [ ] 3 个案例卡片（color banner + 结果数字）
- [ ] 双语文案

### 模块 09 - Stats + Testimonials
- [ ] `components/sections/Stats.tsx`
- [ ] 4 个数字（count-up 动效）
- [ ] 深色背景（bg-blue-900）
- [ ] `components/sections/Testimonials.tsx`
- [ ] 3 个证言卡片（引号装饰 + 头像）
- [ ] 双语文案

### 模块 10 - CTA Section
- [ ] `components/sections/CTA.tsx`
- [ ] Calendly inline widget 嵌入（next/script lazyOnload）
- [ ] 骨架屏（Calendly 加载前）
- [ ] 留资表单（4 字段）
- [ ] 表单验证（前端）
- [ ] 提交调用 `/api/contact`
- [ ] Loading / Success / Error 状态
- [ ] 双语文案
- [ ] **E2E 测试**：填写表单 → 提交 → 显示成功提示（Playwright）

### 模块 11 - About + Footer
- [ ] `components/sections/About.tsx`
- [ ] 两列布局（文字 + 深色卡片）
- [ ] 3 个价值主张（checkmark + 标题 + 描述）
- [ ] `components/sections/Footer.tsx`
- [ ] 深色背景（slate-900）
- [ ] 3 列布局（Logo + Nav + Contact）
- [ ] 双语文案

---

## Phase 4: 上线准备

### 模块 12 - SEO & Metadata
- [ ] `app/[locale]/layout.tsx` 完整 Metadata（title/description/og）
- [ ] 英文 og:image（public/og-image-en.png）
- [ ] 中文 og:image（public/og-image-zh.png，占位）
- [ ] hreflang 标签（next-intl 自动生成）
- [ ] robots.txt / sitemap.xml
- [ ] 验证：Lighthouse SEO 分数 ≥ 90

### 模块 13 - Docker & K8s 配置
- [ ] `Dockerfile`（Node 20 Alpine, standalone 模式）
- [ ] `.dockerignore`
- [ ] `infrastructure/k8s/namespace.yaml`
- [ ] `infrastructure/k8s/deployment.yaml`（2 副本，resource limits）
- [ ] `infrastructure/k8s/service.yaml`
- [ ] `infrastructure/k8s/ingress.yaml`（dreamwiseai.com + www，TLS）
- [ ] `infrastructure/k8s/secret.yaml.example`（不含真实密钥）
- [ ] 验证：`docker build` 成功，`docker run` 可访问

---

## 完成标准

所有 Phase 完成后：
- [ ] `npm run build` 无错误
- [ ] Lighthouse Performance ≥ 85, SEO ≥ 90, Accessibility ≥ 90
- [ ] 中英文双语切换正常
- [ ] 表单提交成功（需真实 RESEND_API_KEY）
- [ ] Calendly widget 正常加载
- [ ] Mobile 响应式正常（375px/768px/1024px）
- [ ] Docker 镜像构建成功
