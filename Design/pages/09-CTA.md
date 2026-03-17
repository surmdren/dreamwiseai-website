# CTA Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
Main conversion section. Light gray background (#F8FAFC). Centered content max-width 900px.

Top: centered headline "Ready to Become Agent-Driven?" Sora 48px bold slate-900. Subtext "Start with a free 30-minute assessment call." Inter 18px slate-600, centered, margin-top 16px.

Two-column layout below (gap-12): Left column — Calendly inline widget embedded (min-height 650px, rounded-xl overflow-hidden shadow-lg border border-slate-100). Right column — "Or leave your details" label Inter 14px slate-400 uppercase tracking-wider, then contact form with 4 fields (Full Name, Company, Email, What's your biggest challenge? - optional textarea), submit button "Book My Free Assessment" full-width bg-blue-900 white text rounded-lg py-4. After submit: green success state with checkmark icon.

### Mobile (375px)
Single column. Calendly first, form below with "Or" divider. Both full-width.

---

## 详细设计规格

### 布局结构
```
┌─────────────────────────────────────────────────┐
│     Ready to Become Agent-Driven?               │
│   Start with a free 30-minute assessment call.  │
│                                                 │
│  ┌─────────────────┐  ┌─────────────────────┐  │
│  │ Calendly Widget  │  │ Or leave your details│  │
│  │ (inline embed)  │  │ [Full Name_______]  │  │
│  │                 │  │ [Company_________]  │  │
│  │  Book time →    │  │ [Email___________]  │  │
│  │                 │  │ [Challenge (opt)__] │  │
│  │                 │  │ [Book My Free Assess]│  │
│  └─────────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### 表单字段规格
| 字段 | 类型 | 必填 | 验证 |
|------|------|------|------|
| Full Name | text input | ✅ | 非空 |
| Company | text input | ✅ | 非空 |
| Email | email input | ✅ | email 格式 |
| Challenge | textarea (3 rows) | ❌ | - |

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Headline | Sora 48px/36px(mobile), 700, slate-900 | AnimatedSection |
| Calendly Widget | min-h-650px, rounded-xl, shadow-lg | 异步加载，loading 骨架占位 |
| Form Input | rounded-lg, border-slate-200, px-4 py-3, focus:ring-blue-500 | focus ring 动效 |
| Textarea | rounded-lg, border-slate-200, rows-3, resize-none | 同上 |
| Submit Button | bg-blue-900 white, full-width, py-4, rounded-lg | hover: bg-blue-800, loading: spinner + disabled |
| Success State | green-50 bg, green-500 icon + text, replaces form | fade-in |
| Error State | red-100 bg, red-600 text, inline near button | fade-in |

### 表单状态
```
Default → Loading (submit: spinner, button disabled) → Success (green checkmark)
                                                    ↘ Error (red message, re-enable)
```

### Calendly 集成
```tsx
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/[username]/30min

// 懒加载
<Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

// 骨架屏（Calendly 加载前）
<div className="animate-pulse bg-slate-100 rounded-xl h-[650px]" />
```

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Headline | Ready to Become Agent-Driven? | 准备好成为 AI 驱动的企业了吗？ |
| Subtext | Start with a free 30-minute assessment call. | 从一次免费的 30 分钟评估通话开始。 |
| Form Label | Or leave your details | 或留下您的联系方式 |
| Field: Name | Full Name | 姓名 |
| Field: Company | Company | 公司名称 |
| Field: Email | Email | 邮箱 |
| Field: Challenge | What's your biggest challenge? (Optional) | 您最大的挑战是什么？（选填）|
| Submit | Book My Free Assessment | 预约免费评估 |
| Success | Thanks! We'll be in touch within 24 hours. | 感谢您！我们将在 24 小时内与您联系。 |
| Error | Something went wrong. Please try again. | 出现错误，请重试。 |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥1024px) | 两列，Calendly 左，表单右 |
| Mobile (<1024px) | 单列，Calendly 在上，分隔线，表单在下 |
