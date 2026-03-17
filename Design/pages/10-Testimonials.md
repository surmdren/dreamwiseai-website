# Testimonials Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
Testimonials section on white background. Centered headline "What Our Clients Say" Sora 36px bold slate-900.

3-column grid of testimonial cards. Each card: white bg, border border-slate-100, rounded-xl, p-8, shadow-sm. Card structure: top large quote mark " in blue-100 color Sora 72px absolute top-left of card, then quote text Inter 16px slate-700 italic leading-relaxed (3-4 lines), then divider hr border-slate-100 mt-6, then avatar row: circle placeholder avatar (40px, bg-blue-100 with initials in blue-900), name Inter 15px 600 slate-900, role + company Inter 14px slate-500.

### Mobile (375px)
Single column. Cards full width.

---

## 详细设计规格

### 3 个证言内容（占位）
| # | 引用内容 | 姓名 | 职位 | 公司 |
|---|----------|------|------|------|
| 1 | "DreamWise AI helped us identify automation opportunities we didn't even know existed. Within 6 weeks, our customer service team was handling 3x the volume without adding headcount." | Sarah Chen | COO | NovaTech Solutions |
| 2 | "We tried generic AI tools for months with no results. DreamWise built something specifically for our logistics workflow — the difference was night and day." | Marcus Rivera | Operations Director | SwiftMove Logistics |
| 3 | "The ROI was visible within the first month. Our knowledge agent handles 80% of internal questions, freeing our HR team to focus on what really matters." | Priya Patel | CEO | Meridian Consulting |

### 视觉设计
```
┌──────────────────────────────┐
│ "                           │  ← 大引号，blue-100，装饰用
│                             │
│  "DreamWise AI helped us    │  ← italic Inter 16px slate-700
│   identify automation..."  │
│                             │
│ ─────────────────────────   │  ← divider
│                             │
│ [SC]  Sarah Chen            │  ← 首字母头像，Inter 15px 600
│       COO, NovaTech         │  ← slate-500
└──────────────────────────────┘
```

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Quote Mark | Sora 72px, blue-100, absolute top-2 left-6, z-0 | 静态装饰 |
| Quote Text | Inter 16px, italic, slate-700, leading-relaxed, relative z-10 | AnimatedSection |
| Divider | border-t border-slate-100, mt-6 mb-4 | 静态 |
| Avatar | w-10 h-10, rounded-full, bg-blue-100, initials blue-900 font-semibold | 静态 |
| Name | Inter 15px, 600, slate-900 | 静态 |
| Role | Inter 14px, slate-500 | 静态 |

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Headline | What Our Clients Say | 客户怎么说 |
| Quote 1 | "DreamWise AI helped us identify automation opportunities..." | "DreamWise AI 帮我们发现了此前未曾注意到的自动化机会..." |
| Quote 2 | "We tried generic AI tools for months with no results..." | "我们用了好几个月的通用 AI 工具，毫无成效..." |
| Quote 3 | "The ROI was visible within the first month..." | "第一个月就看到了明显的投资回报..." |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥1024px) | 3 列 |
| Tablet (768-1023px) | 2 列（第3个居中）|
| Mobile (<768px) | 1 列 |
