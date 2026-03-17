# Hero Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
Full-viewport hero section for an AI agent consulting company. White background with abstract SVG network/nodes pattern in the top-right corner using light blue (#DBEAFE) at 30% opacity — subtle, not distracting. Content centered horizontally. Top padding 140px (accounting for fixed navbar).

Small badge above headline: "AI Agent Consulting" in blue-100 background, blue-900 text, rounded-full, with a small sparkle icon.

Headline: "Your Business, Powered by AI Agents." — Sora 72px, font-weight 800, slate-900, line-height 1.1, max-width 800px, centered.

Subheading: "The Future is Agent-Driven. We'll Get You There." — Inter 20px, slate-600, centered, max-width 600px, margin-top 24px.

Two CTA buttons side by side, margin-top 40px: Primary "Book a Free Assessment" (bg-blue-900, white text, px-8 py-4, rounded-lg, shadow-lg); Secondary "See Case Studies" (border-2 border-blue-900, text-blue-900, px-8 py-4, rounded-lg). Gap 16px between buttons.

Bottom fade to next section. Total section height ~90vh.

### Mobile (375px)
Badge remains. Headline: 40px, centered. Subheading: 18px. Buttons stack vertically, full-width. SVG background pattern hidden on mobile.

---

## 详细设计规格

### 布局结构
```
┌─────────────────────────────────────────────┐
│                SVG Background (top-right)    │
│                                             │
│         [Badge: AI Agent Consulting]         │
│                                             │
│    Your Business, Powered by AI Agents.     │
│   (Sora 72px 800 slate-900, max-w-800px)   │
│                                             │
│  The Future is Agent-Driven. We'll Get      │
│           You There.                        │
│   (Inter 20px slate-600, max-w-600px)      │
│                                             │
│  [Book a Free Assessment] [See Case Studies]│
│                                             │
│                  ↓ scroll                   │
└─────────────────────────────────────────────┘
```

### SVG 背景规格
- 抽象网络节点图（nodes + connecting lines）
- 颜色：`#3B82F6` at 8% opacity for lines，`#1E3A8A` at 15% opacity for nodes
- 位置：绝对定位，右上角
- 尺寸：600×600px，pointer-events: none
- Mobile：隐藏（hidden md:block）

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Badge | bg-blue-100, text-blue-900, rounded-full, px-4 py-1.5 | 静态 |
| Headline H1 | Sora 72px/40px(mobile), 800, slate-900 | fade-in 动效 |
| Subheading | Inter 20px/18px(mobile), 400, slate-600 | fade-in delay 0.1s |
| Primary CTA | bg-blue-900, white, px-8 py-4, rounded-lg, shadow-lg | hover: bg-blue-800 + shadow-xl，点击滚动到 CTA |
| Secondary CTA | border-2 border-blue-900, text-blue-900, px-8 py-4 | hover: bg-blue-900 text-white，点击滚动到 Case Studies |

### 动效
- 内容区：AnimatedSection，fade-in + slide-up 24px，duration 0.6s
- Badge → Headline → Subheading → Buttons：stagger delay 0.1s 每项

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Badge | AI Agent Consulting | AI 智能体咨询 |
| Headline | Your Business, Powered by AI Agents. | 用 AI 智能体，驱动您的业务增长。 |
| Subheading | The Future is Agent-Driven. We'll Get You There. | 未来由智能体驱动。我们助您率先到达。 |
| Primary CTA | Book a Free Assessment | 预约免费评估 |
| Secondary CTA | See Case Studies | 查看案例 |

### 响应式断点
| 断点 | 变化 |
|------|------|
| Desktop (≥1024px) | 标题 72px，按钮横排，SVG 背景可见 |
| Tablet (768-1023px) | 标题 56px，按钮横排 |
| Mobile (<768px) | 标题 40px，按钮竖排全宽，SVG 隐藏 |
