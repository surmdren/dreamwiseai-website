# Case Studies Section 设计规格

## UX Pilot Prompt

### Desktop (1440px)
Case studies section with light gray background (#F8FAFC). Centered headline "Real Results for Real Businesses" Sora 40px bold slate-900. Subtext "See how companies like yours are transforming with AI agents." Inter 18px slate-600.

3-column grid of case study cards. Each card: white bg, rounded-xl, shadow-sm, hover shadow-md + translate-y-1 (subtle lift). Card structure: top colored banner (h-2, full-width, rounded-top) in blue/indigo/violet gradient per card, then p-6 content: industry badge (rounded-full, slate-100 bg, slate-600 text, text-xs uppercase), company type label, large result metric (Sora 48px bold blue-900), metric description Inter 14px slate-600, divider, scenario description Inter 15px slate-700 leading-relaxed, bottom "Read case study →" blue-600 text (placeholder, no link for now).

### Mobile (375px)
Single column stack. Cards full-width.

---

## 详细设计规格

### 3 个案例内容
| # | 行业 Badge | 结果数字 | 结果标签 | 场景描述 |
|---|-----------|----------|----------|----------|
| 1 | E-Commerce | 70% | Reduction in support tickets | An online retailer deployed a customer service agent that handles returns, tracking, and FAQs — 24/7, in multiple languages. |
| 2 | Logistics | 40% | Faster response time | A regional logistics company automated order tracking and exception handling, freeing ops teams from repetitive queries. |
| 3 | Professional Services | 3x | Faster employee onboarding | A consulting firm built an internal knowledge agent that answers HR, policy, and project questions instantly. |

### 顶部色带颜色
| 卡片 | 色带 |
|------|------|
| Card 1 | bg-gradient-to-r from-blue-500 to-blue-700 |
| Card 2 | bg-gradient-to-r from-indigo-500 to-indigo-700 |
| Card 3 | bg-gradient-to-r from-violet-500 to-violet-700 |

### 组件清单
| 组件 | 规格 | 交互 |
|------|------|------|
| Color Banner | h-2, rounded-t-xl, gradient | 静态 |
| Industry Badge | rounded-full, slate-100, slate-600, text-xs uppercase, px-3 py-1 | 静态 |
| Result Number | Sora 48px, 800, blue-900 | count-up 动效（进入视口时）|
| Result Label | Inter 14px, slate-600 | 静态 |
| Scenario Text | Inter 15px, slate-700, leading-relaxed | 静态 |
| Read More | text-blue-600, text-sm, hover:underline | hover underline |
| Card | white, rounded-xl, shadow-sm | hover: shadow-md + -translate-y-1 |

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Headline | Real Results for Real Businesses | 真实企业，真实成果 |
| Subtext | See how companies like yours are transforming with AI agents. | 看看与您类似的企业如何通过 AI 智能体完成转型。 |
| Badge 1 | E-Commerce | 电商 |
| Result 1 | 70% Reduction in support tickets | 客服工单减少 70% |
| Badge 2 | Logistics | 物流 |
| Result 2 | 40% Faster response time | 响应速度提升 40% |
| Badge 3 | Professional Services | 专业服务 |
| Result 3 | 3x Faster onboarding | 员工入职速度提升 3 倍 |
| Read more | Read case study → | 查看完整案例 → |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥1024px) | 3 列 |
| Tablet (768-1023px) | 2 列（第3个居中）|
| Mobile (<768px) | 1 列 |
