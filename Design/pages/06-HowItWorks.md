# How It Works Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
"How It Works" section on white background. Centered headline "From Zero to Agent-Driven in 3 Steps" Sora 40px bold slate-900.

Below: 3-column layout connected by horizontal dashed line (#DBEAFE). Each step: large step number (Sora 80px, blue-100, absolute positioned behind), circle icon container (64px, bg-blue-900 rounded-full, white icon inside), step title Sora 20px 700 slate-900 below, description Inter 16px slate-600 leading-relaxed.

Between steps: horizontal arrow connector (→) in blue-300 on desktop.

Step 1: Assess. Step 2: Build. Step 3: Operate.

Bottom CTA link: "Start with Step 1 →" in blue-900, centered.

### Mobile (375px)
Vertical stack. Steps connected by vertical dashed line on left side. Large number hidden.

---

## 详细设计规格

### 3 步流程内容
| Step | 图标 | 标题 | 描述 |
|------|------|------|------|
| 01 | `ClipboardCheck` | Assess | We map your current processes and identify where AI agents create the most value. Output: your AI roadmap. |
| 02 | `Wrench` | Build | We develop and integrate custom agents into your existing systems. No disruption to daily operations. |
| 03 | `Activity` | Operate | We monitor performance, tune your agents, and continuously improve outcomes. Your agents get smarter over time. |

### 视觉设计
```
         "01" (80px Sora blue-100, bg text)
    [✓]                [🔧]               [📊]
  Assess            Build              Operate
We map your...   We develop...     We monitor...

          ─ ─ ─ ─ ─→  ─ ─ ─ ─ ─→
        (连接线，蓝色虚线)
```

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Step Number BG | Sora 80px, blue-100, absolute, z-0 | 静态装饰 |
| Icon Circle | w-16 h-16, bg-blue-900, rounded-full, white icon inside | AnimatedSection |
| Step Title | Sora 20px, 700, slate-900 | 静态 |
| Description | Inter 16px, slate-600, leading-7, max-w-xs | 静态 |
| Connector Arrow | → SVG, blue-300, hidden on mobile | 静态 |

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Headline | From Zero to Agent-Driven in 3 Steps | 三步，从零到 AI 驱动 |
| Step 1 | Assess | 评估 |
| Desc 1 | We map your current processes and identify where AI agents create the most value. | 我们梳理您现有的业务流程，找出 AI 智能体价值最大的切入点。 |
| Step 2 | Build | 构建 |
| Desc 2 | We develop and integrate custom agents into your existing systems. No disruption. | 我们开发并集成定制 AI 智能体，无缝融入您现有系统，不影响日常运营。 |
| Step 3 | Operate | 运营 |
| Desc 3 | We monitor performance and continuously improve outcomes. | 我们持续监控效果、调优智能体，让您的 AI 越用越智能。 |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥768px) | 3 列横排，水平连接线 |
| Mobile (<768px) | 竖排，左侧垂直虚线连接 |
