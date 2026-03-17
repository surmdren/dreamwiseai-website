# About Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
About/Why Us section. Light gray background (#F8FAFC). Two-column layout (60/40 split). Left column: section label "About DreamWise AI" Inter 14px blue-600 uppercase tracking-widest. Headline "Why DreamWise AI?" Sora 40px bold slate-900 mt-2. Then 3-4 paragraphs Inter 17px slate-600 leading-relaxed about the company mission. Below paragraphs: 3 value proposition items, each with checkmark icon (blue-900) + bold statement + brief description.

Right column: decorative card/visual. Dark card (blue-900 bg, rounded-2xl, p-8) with company tagline in white, abstract pattern or stats. Mission statement "We believe every business deserves access to the transformative power of AI — without the complexity." in white italic Sora 20px.

### Mobile (375px)
Single column. Right card first (as visual hook), then text below.

---

## 详细设计规格

### 内容结构
**左列（文字）**：
- Section Label: "About DreamWise AI"
- Headline: "Why DreamWise AI?"
- Mission paragraph (2-3 sentences)
- 3 Value Props with checkmarks

**右列（视觉卡片）**：
- Dark blue card
- Mission quote
- 2-3 micro-stats or tagline

### 3 个价值主张
| # | 图标 | 标题 | 描述 |
|---|------|------|------|
| 1 | `CheckCircle` (blue-900) | Built for SMEs, not enterprises | No bloated implementations. We move fast and focus on what matters. |
| 2 | `CheckCircle` (blue-900) | Practitioners, not consultants | We build the agents ourselves. No outsourcing, no middlemen. |
| 3 | `CheckCircle` (blue-900) | Results-first engagement | We define success metrics upfront. You know exactly what you're getting. |

### 右侧深色卡片设计
```
┌─────────────────────────────┐
│ (bg-blue-900, rounded-2xl)  │
│                             │
│  DreamWise AI               │  ← Sora 20px white font-bold
│                             │
│  "We believe every business │  ← italic white Sora 18px
│   deserves access to AI —  │
│   without the complexity."  │
│                             │
│  ─────────────────          │
│                             │
│  50+ clients  ·  3 yrs exp  │  ← Inter 14px blue-200
└─────────────────────────────┘
```

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Label | About DreamWise AI | 关于 DreamWise AI |
| Headline | Why DreamWise AI? | 为什么选择 DreamWise AI？ |
| Mission | We started DreamWise AI with a simple belief: AI agents shouldn't be reserved for Fortune 500 companies. SMEs deserve the same transformative technology — delivered pragmatically, affordably, and without the consulting-speak. | 我们创立 DreamWise AI 源于一个简单的信念：AI 智能体不应只是大型企业的专利。中小企业同样值得拥有这项变革性技术——以务实、可负担、无废话的方式落地。 |
| VP 1 | Built for SMEs, not enterprises | 专为中小企业设计，而非大型企业 |
| VP 2 | Practitioners, not consultants | 我们是实干者，不是顾问 |
| VP 3 | Results-first engagement | 以结果为导向的合作方式 |
| Card Quote | "We believe every business deserves access to AI — without the complexity." | "我们相信每家企业都应该能用上 AI——不需要复杂。" |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥1024px) | 两列 60/40 |
| Mobile (<1024px) | 单列，卡片在上，文字在下 |
