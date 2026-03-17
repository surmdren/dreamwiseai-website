# Trust Logos Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
A "Trusted by" logo bar section. Light gray background (#F8FAFC). Centered label text "Trusted by innovative companies" in slate-400, Inter 14px uppercase tracking-widest. Below: horizontal row of 5 company logos, grayscale filter applied, opacity 50%. On hover: color restores + opacity 100%, transition 300ms. Logos evenly spaced in a flex row, max-width 900px, centered. Vertical padding 48px. Clean, understated credibility signal.

### Mobile (375px)
Logo row wraps to 2-3 per row in a grid. Label text remains centered above.

---

## 详细设计规格

### 布局结构
```
┌─────────────────────────────────────┐
│  Trusted by innovative companies    │  ← slate-400, 14px, uppercase
│                                     │
│  [Logo] [Logo] [Logo] [Logo] [Logo] │  ← grayscale, hover: color
└─────────────────────────────────────┘
```

### 占位 Logo 方案
初期使用文字 Logo 占位（公司真实 logo 入驻后替换）：
- Acme Corp
- GlobalTech
- NextWave
- PrimeSoft
- FutureGroup

占位样式：`font-sora font-bold text-slate-300 text-xl tracking-tight`

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Section Label | Inter 14px uppercase, slate-400, tracking-widest | 静态 |
| Logo Item | grayscale + opacity-50, max-h-8 | hover: filter-none + opacity-100, transition 300ms |

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Label | Trusted by innovative companies | 深受创新企业信赖 |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥768px) | 5 logo 横排，flex justify-between |
| Mobile (<768px) | grid grid-cols-3，第5个居中 |
