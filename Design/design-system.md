# DreamWise AI — 设计系统规范

**版本**：v1.0
**日期**：2026-03-18
**适用范围**：官网所有页面区块

---

## 1. 色彩体系

### 主色板

| 角色 | 名称 | Hex | Tailwind | 用途 |
|------|------|-----|----------|------|
| 主色 | Deep Indigo | `#1E3A8A` | `blue-900` | 标题、主按钮、强调元素 |
| Accent | Bright Blue | `#3B82F6` | `blue-500` | 链接、hover 状态、图标 |
| 主色深色 | Indigo Dark | `#1E3A8A` | `blue-900` | 文字 + 按钮 hover |
| Accent 浅色 | Blue Light | `#DBEAFE` | `blue-100` | 卡片背景、badge |

### 背景色板

| 角色 | Hex | Tailwind | 用途 |
|------|-----|----------|------|
| 主背景 | `#FFFFFF` | `white` | 页面主背景 |
| 浅灰背景 | `#F8FAFC` | `slate-50` | 交替 Section 背景 |
| 深色背景 | `#0F172A` | `slate-900` | Footer、深色 Section |

### 文字色板

| 角色 | Hex | Tailwind | 用途 |
|------|-----|----------|------|
| Heading | `#0F172A` | `slate-900` | 所有标题 |
| Body | `#475569` | `slate-600` | 正文段落 |
| Muted | `#94A3B8` | `slate-400` | 副文案、占位文字 |
| 反色（深色背景上） | `#F8FAFC` | `slate-50` | Footer 文字 |

### 语义色

| 角色 | Hex | Tailwind | 用途 |
|------|-----|----------|------|
| 成功 | `#22C55E` | `green-500` | 表单提交成功 |
| 错误 | `#EF4444` | `red-500` | 表单验证错误 |
| 警告 | `#F59E0B` | `amber-500` | 提示信息 |

### 对比度合规（WCAG AA）

| 组合 | 对比度 | 合规 |
|------|--------|------|
| `#0F172A` on `#FFFFFF` | 18.1:1 | ✅ AAA |
| `#475569` on `#FFFFFF` | 5.9:1 | ✅ AA |
| `#FFFFFF` on `#1E3A8A` | 9.7:1 | ✅ AAA |
| `#FFFFFF` on `#3B82F6` | 3.9:1 | ⚠️ 仅用于大字体 |

---

## 2. 字体方案

### 字体选型

| 角色 | 字体 | 来源 | 说明 |
|------|------|------|------|
| 标题 | **Sora** | Google Fonts | 几何圆润，现代感强，适合 AI/科技公司 |
| 正文 | **Inter** | Google Fonts | 屏幕可读性最优，企业级标准 |

### 字体规格

```css
/* Heading Scale */
h1: Sora, 56-72px, font-weight: 800, line-height: 1.1, letter-spacing: -0.02em
h2: Sora, 36-48px, font-weight: 700, line-height: 1.2, letter-spacing: -0.01em
h3: Sora, 24-30px, font-weight: 600, line-height: 1.3
h4: Sora, 18-20px, font-weight: 600, line-height: 1.4

/* Body Scale */
body-lg: Inter, 18px, font-weight: 400, line-height: 1.75
body:    Inter, 16px, font-weight: 400, line-height: 1.75  ← 最小移动端字号
small:   Inter, 14px, font-weight: 400, line-height: 1.6
caption: Inter, 12px, font-weight: 500, line-height: 1.5

/* Special */
cta-button:  Inter, 16px, font-weight: 600
nav-link:    Inter, 15px, font-weight: 500
stat-number: Sora, 48-64px, font-weight: 800
```

### Next.js 字体配置

```typescript
import { Sora, Inter } from 'next/font/google'

export const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})
```

---

## 3. 间距系统（8px 基准网格）

| Token | px | Tailwind | 用途 |
|-------|-----|----------|------|
| space-1 | 4px | `p-1` | 内边距极小 |
| space-2 | 8px | `p-2` | 图标间距 |
| space-3 | 12px | `p-3` | 小组件内边距 |
| space-4 | 16px | `p-4` | 标准内边距 |
| space-6 | 24px | `p-6` | 卡片内边距 |
| space-8 | 32px | `p-8` | Section 内边距（移动端） |
| space-12 | 48px | `p-12` | Section 间距 |
| space-16 | 64px | `p-16` | Section 内边距（桌面端） |
| space-24 | 96px | `py-24` | Hero 上下间距 |

### 容器宽度

```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  /* 标准容器：1280px */
max-w-4xl mx-auto                         /* 内容容器：prose 区域 */
max-w-2xl mx-auto                         /* CTA 文字：表单区域 */
```

---

## 4. 圆角规范

| 元素 | 圆角 | Tailwind |
|------|------|----------|
| 按钮 | 8px | `rounded-lg` |
| 卡片 | 12px | `rounded-xl` |
| 输入框 | 8px | `rounded-lg` |
| Badge/Tag | 9999px | `rounded-full` |
| 图片 | 12px | `rounded-xl` |

---

## 5. 阴影规范

| 层级 | 用途 | Tailwind | 值 |
|------|------|----------|----|
| shadow-sm | 输入框 focus 前 | `shadow-sm` | 默认 |
| shadow | 卡片默认状态 | `shadow` | `0 1px 3px rgba(0,0,0,0.1)` |
| shadow-md | 卡片 hover | `shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` |
| shadow-lg | Navbar 滚动后 | `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` |
| shadow-xl | 重要卡片/模态 | `shadow-xl` | `0 20px 25px rgba(0,0,0,0.1)` |

**品牌阴影（蓝色光晕，用于主 CTA 按钮）：**
```css
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
```

---

## 6. 核心组件规范

### 按钮

```tsx
// Primary Button
<button className="
  bg-blue-900 hover:bg-blue-800
  text-white font-semibold
  px-6 py-3 rounded-lg
  transition-colors duration-200
  cursor-pointer
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Book a Free Assessment
</button>

// Secondary Button
<button className="
  border-2 border-blue-900 text-blue-900
  hover:bg-blue-900 hover:text-white
  font-semibold px-6 py-3 rounded-lg
  transition-all duration-200
  cursor-pointer
">
  See Case Studies
</button>

// Ghost Button (Navbar)
<button className="
  text-slate-600 hover:text-blue-900
  font-medium px-4 py-2 rounded-lg
  hover:bg-blue-50
  transition-colors duration-200
  cursor-pointer
">
  Services
</button>
```

### 卡片

```tsx
// Standard Card
<div className="
  bg-white rounded-xl shadow
  hover:shadow-md
  p-6
  transition-shadow duration-200
  cursor-pointer
">
  {/* content */}
</div>

// Feature Card（Services/Problem）
<div className="
  bg-white rounded-xl
  border border-slate-100
  hover:border-blue-200 hover:shadow-md
  p-6
  transition-all duration-200
">
  {/* icon + title + description */}
</div>
```

### 表单输入

```tsx
<input className="
  w-full px-4 py-3 rounded-lg
  border border-slate-200
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
  text-slate-900 placeholder:text-slate-400
  transition-colors duration-200
  bg-white
" />
```

### Badge/Tag

```tsx
// Service Badge
<span className="
  inline-flex items-center
  px-3 py-1 rounded-full
  bg-blue-100 text-blue-900
  text-sm font-medium
">
  AI Consulting
</span>
```

### Navbar

```tsx
// Sticky Navbar（初始透明，滚动后白色+阴影）
<nav className={`
  fixed top-0 left-0 right-0 z-50
  transition-all duration-300
  ${scrolled
    ? 'bg-white/95 backdrop-blur-sm shadow-lg'
    : 'bg-transparent'
  }
`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo + Nav links + CTA */}
    </div>
  </div>
</nav>
```

---

## 7. 动效规范

### 原则
- 所有动效时长：150-300ms（micro-interaction） / 500-600ms（scroll fade-in）
- 只使用 `transform` 和 `opacity`，不动 `width/height`
- 必须支持 `prefers-reduced-motion`

### Scroll Fade-In（AnimatedSection）

```tsx
// components/ui/AnimatedSection.tsx
import { motion, useReducedMotion } from 'framer-motion'

export function AnimatedSection({ children, delay = 0 }) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

### 计数动效（Stats Section）

```tsx
// 数字从 0 到目标值的 count-up 动画
// 使用 Framer Motion useMotionValue + useTransform
duration: 2s, easing: easeOut
触发时机: 进入视口时
```

### Hover 状态

```css
/* 卡片 hover */
transition: box-shadow 200ms ease, border-color 200ms ease;

/* 按钮 hover */
transition: background-color 200ms ease, color 200ms ease;

/* 导航链接 hover */
transition: color 200ms ease, background-color 200ms ease;
```

---

## 8. 响应式断点

| 断点 | 像素 | 对应设备 |
|------|------|---------|
| base | < 640px | 手机（mobile first） |
| `sm:` | 640px | 大手机/小平板 |
| `md:` | 768px | 平板 |
| `lg:` | 1024px | 小桌面 |
| `xl:` | 1280px | 标准桌面 |

### Section 布局规则

```
Hero:       单列居中（mobile） → 两栏（lg:）
Services:   单列（mobile） → 3列（lg:）
Stats:      2列（mobile） → 4列（lg:）
CaseStudies: 单列（mobile） → 3列（lg:）
CTA:        单列（mobile） → 两栏（lg:）
```

---

## 9. 无障碍规范

- 最小触控目标：44×44px（按钮/链接）
- 所有图片必须有 `alt` 属性
- 图标按钮必须有 `aria-label`
- 表单 input 必须关联 `<label>`
- Tab 键顺序与视觉顺序一致
- Focus ring：`focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
- 支持 `prefers-reduced-motion`

---

## 10. Tailwind 配置（tailwind.config.ts）

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#1E3A8A',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```
