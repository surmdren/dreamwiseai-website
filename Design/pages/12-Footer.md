# Footer Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
Dark footer section. Background: deep slate (#0F172A). py-16. Two-row layout: Top row — 3 columns: Left: Logo "DreamWise AI" Sora 20px white bold + tagline "The Future is Agent-Driven." Inter 14px slate-400 mt-2 + copyright "© 2026 DreamWise AI. All rights reserved." Inter 13px slate-500 mt-4. Center: Nav links vertical list "Services / How It Works / Case Studies / About" Inter 14px slate-400 hover:slate-200. Right: "Get in touch" label + email link "consulting@dreamwiseai.com" Inter 14px slate-400 hover:white. Bottom divider + small copyright on mobile.

### Mobile (375px)
Single column stack. Logo/tagline top. Nav links below. Email below. Copyright at bottom.

---

## 详细设计规格

### 布局结构
```
┌─────────────────────────────────────────────────────┐
│ (bg-slate-900)                                      │
│                                                     │
│  DreamWise AI         Services        Get in touch  │
│  The Future is        How It Works    consulting@   │
│  Agent-Driven.        Case Studies    dreamwiseai   │
│                       About           .com          │
│  © 2026 DreamWise AI                               │
│                                                     │
│ ─────────────────────────────────────────────────  │
│  All rights reserved.     Privacy · Terms           │
└─────────────────────────────────────────────────────┘
```

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Logo | Sora 20px, white, font-bold | 点击回顶部 |
| Tagline | Inter 14px, slate-400, mt-2 | 静态 |
| Copyright | Inter 13px, slate-500, mt-4 | 静态 |
| Nav Links | Inter 14px, slate-400, space-y-3 | hover: text-white, transition 200ms |
| Email Link | Inter 14px, slate-400 | hover: text-white, 点击打开邮件客户端 |
| Divider | border-t border-slate-800, mt-12 pt-8 | 静态 |

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Logo | DreamWise AI | DreamWise AI |
| Tagline | The Future is Agent-Driven. | 未来由智能体驱动。 |
| Copyright | © 2026 DreamWise AI. All rights reserved. | © 2026 DreamWise AI. 保留所有权利。 |
| Nav: Services | Services | 服务 |
| Nav: How It Works | How It Works | 工作方式 |
| Nav: Case Studies | Case Studies | 案例 |
| Nav: About | About | 关于我们 |
| Contact Label | Get in touch | 联系我们 |
| Email | consulting@dreamwiseai.com | consulting@dreamwiseai.com |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥768px) | 3 列横排 |
| Mobile (<768px) | 单列竖排，间距 32px |
