# Stats Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
A stats/metrics band section. Deep Indigo (#1E3A8A) solid background. 4-column flex layout, centered, py-20. Each stat: large number Sora 64px font-weight 800 white, unit/suffix same size but slightly smaller, label Inter 16px font-weight 500 blue-200 below the number. Subtle vertical divider (border-r border-blue-700) between stats (hidden on last). No cards, no shadows — just clean numbers on dark background. Numbers animate count-up on scroll into view.

### Mobile (375px)
2x2 grid. Dividers hidden. Numbers slightly smaller (48px).

---

## 详细设计规格

### 4 个数字内容
| # | 数字 | 单位/后缀 | 标签 |
|---|------|----------|------|
| 1 | 50 | + | SMEs Transformed |
| 2 | 10,000 | + | Hours Automated |
| 3 | 3.2 | x | Average ROI |
| 4 | 8 | wks | Avg. Time to Deploy |

### 布局结构
```
┌─────────────────────────────────────────────────────┐
│ (Deep Indigo #1E3A8A background)                    │
│                                                     │
│  50+        10,000+      3.2x       <8 wks         │
│  SMEs       Hours        Average    Avg. Time        │
│  Transformed Automated   ROI        to Deploy       │
│         │           │          │                   │
│      (dividers)                                     │
└─────────────────────────────────────────────────────┘
```

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Section | bg-blue-900, py-20 | AnimatedSection |
| Number | Sora 64px/48px(mobile), 800, white | count-up 动效（2s，easeOut）|
| Suffix | Sora 40px, 800, blue-300 | 随数字同步 |
| Label | Inter 16px, 500, blue-200 | 静态 |
| Divider | border-r border-blue-700, h-16, hidden on last | 静态，hidden on mobile |

### Count-Up 动效
```typescript
// 使用 framer-motion + useInView
// 数字从 0 增长到目标值
// duration: 2s, ease: easeOut
// 触发：组件进入视口
```

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Stat 1 | 50+ SMEs Transformed | 50+ 中小企业完成转型 |
| Stat 2 | 10,000+ Hours Automated | 10,000+ 小时自动化 |
| Stat 3 | 3.2x Average ROI | 平均 3.2 倍投资回报 |
| Stat 4 | <8 wks Avg. Time to Deploy | 平均 8 周内完成部署 |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥768px) | 4 列横排，dividers 可见 |
| Mobile (<768px) | 2×2 grid，dividers 隐藏 |
