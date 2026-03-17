# Services Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
Services section with light gray background (#F8FAFC). Centered headline "What We Do" Sora 40px bold slate-900. Subtext "Three services. One complete journey from AI-curious to agent-driven." Inter 18px slate-600 centered.

3-column grid of service cards below. Each card: white bg, rounded-xl, p-8, shadow-sm, border border-slate-100, hover border-blue-200 + shadow-md. Card structure: top badge (small rounded-full blue-100 text-blue-900 label), then large icon (48px Lucide, blue-900), then service name Sora 22px 700 slate-900, then tagline Inter 14px blue-600 italic, then description Inter 16px slate-600 leading-relaxed, then bottom "Learn more →" text link blue-900. Last card subtly highlighted with left border border-l-4 border-blue-900 to show recommended flow.

### Mobile (375px)
Single column. Cards full-width with consistent padding.

---

## 详细设计规格

### 3 个服务内容
| # | Badge | 图标 | 服务名 | Tagline | 描述 |
|---|-------|------|--------|---------|------|
| 1 | Step 01 | `Search` | Agent Readiness Assessment | Know where to start | We audit your processes, identify high-impact automation opportunities, and deliver a clear AI roadmap. |
| 2 | Step 02 | `Code2` | Custom Agent Development | Built for your business | We design and deploy AI agents tailored to your workflows — from customer service to internal operations. |
| 3 | Step 03 | `TrendingUp` | Agent Operations & Optimization | Keep improving | Ongoing monitoring, fine-tuning, and iteration to ensure your agents deliver measurable business results. |

### 视觉层次
```
[Step 01]  ←badge
🔍         ←icon 48px blue-900
Agent Readiness Assessment  ←Sora 22px 700
"Know where to start"       ←italic 14px blue-600
We audit your processes...  ←Inter 16px slate-600
Learn more →                ←link blue-900
```

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Section Headline | Sora 40px, 700, slate-900 | AnimatedSection |
| Step Badge | blue-100 bg, blue-900 text, rounded-full, text-xs | 静态 |
| Card Icon | Lucide 48px, blue-900 | 静态 |
| Service Name | Sora 22px, 700, slate-900 | 静态 |
| Tagline | Inter 14px, italic, blue-600 | 静态 |
| Description | Inter 16px, slate-600, leading-7 | 静态 |
| Learn More | text-blue-900, hover:underline | hover underline |

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Headline | What We Do | 我们的服务 |
| Subtext | Three services. One complete journey from AI-curious to agent-driven. | 三项服务，一条从 AI 入门到全面落地的完整路径。 |
| Service 1 | Agent Readiness Assessment | AI 就绪评估 |
| Tagline 1 | Know where to start | 找准起点 |
| Service 2 | Custom Agent Development | 定制 AI 智能体开发 |
| Tagline 2 | Built for your business | 专为您的业务打造 |
| Service 3 | Agent Operations & Optimization | 智能体运营与优化 |
| Tagline 3 | Keep improving | 持续优化 |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥1024px) | 3 列 |
| Tablet (768-1023px) | 1 列（服务较长，竖排更清晰）|
| Mobile (<768px) | 1 列 |
