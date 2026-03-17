# Problem Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
A "problem statement" section with white background. Centered headline "Why Most SMEs Struggle with AI Adoption" in Sora 40px bold slate-900. Subtext "You're not alone. These are the three barriers we hear every day." in Inter 18px slate-600, centered, margin-top 16px.

Below: 3-column grid of problem cards. Each card: white bg, border border-slate-100, rounded-xl, p-8, shadow-sm, hover shadow-md + border-red-100 transition. Card content: top icon (Lucide icon, 32px, text-red-400 or text-amber-400), headline Inter 20px slate-900 font-semibold margin-top 16px, description Inter 16px slate-600 line-height 1.75 margin-top 8px. No CTA on cards.

Section padding: py-24.

### Mobile (375px)
Single column stack. Cards full-width. Icon centered above text.

---

## 详细设计规格

### 3 个痛点内容
| # | 图标 | 标题 | 描述 |
|---|------|------|------|
| 1 | `MapPin` (red-400) | No Clear Starting Point | AI feels overwhelming without a roadmap. Most companies don't know where to begin. |
| 2 | `Puzzle` (amber-400) | Generic Solutions Don't Fit | Off-the-shelf AI tools miss your specific workflows and create more problems than they solve. |
| 3 | `Users` (orange-400) | No One to Own It | AI projects stall without dedicated expertise. Your team is busy. Who drives this forward? |

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Section Headline | Sora 40px/32px(mobile), 700, slate-900 | AnimatedSection fade-in |
| Section Subtext | Inter 18px, slate-600, max-w-2xl centered | fade-in delay 0.1s |
| Problem Card | white, border-slate-100, rounded-xl, p-8, shadow-sm | hover: shadow-md + border-red-100 |
| Card Icon | Lucide 32px, color per card | 静态 |
| Card Title | Inter 20px, 600, slate-900 | 静态 |
| Card Description | Inter 16px, slate-600, leading-relaxed | 静态 |

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Section Headline | Why Most SMEs Struggle with AI Adoption | 为什么大多数中小企业在 AI 转型中举步维艰 |
| Section Subtext | You're not alone. These are the three barriers we hear every day. | 你并不孤单。以下是我们每天听到的三大障碍。 |
| Card 1 Title | No Clear Starting Point | 不知从何开始 |
| Card 1 Desc | AI feels overwhelming without a roadmap. Most companies don't know where to begin. | 没有路线图，AI 转型令人望而生畏。大多数公司不知道从哪里起步。 |
| Card 2 Title | Generic Solutions Don't Fit | 通用方案无法适配 |
| Card 2 Desc | Off-the-shelf AI tools miss your specific workflows and create more problems. | 现成的 AI 工具无法匹配您的业务流程，往往制造更多问题。 |
| Card 3 Title | No One to Own It | 缺乏专属责任人 |
| Card 3 Desc | AI projects stall without dedicated expertise. Your team is busy. Who drives this? | 没有专属专家，AI 项目很快陷入停滞。您的团队已经很忙——谁来推进？ |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥1024px) | 3 列 grid gap-8 |
| Tablet (768-1023px) | 2 列 grid（第3个居中） |
| Mobile (<768px) | 1 列 stack |
