# 模块 06 — Hero + Trust Logos

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Frontend |
| 优先级 | P0 |
| 预估工时 | 4h |
| 依赖 | 模块 02, 03, 05 |

## 功能清单

1. Hero：SVG 背景 + Badge + H1 + Slogan + 双 CTA
2. AnimatedSection stagger 动效
3. TrustLogos：5 个占位 Logo，grayscale hover

## Hero 开发

```tsx
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Sparkles } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
      {/* SVG Background */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07]"
          viewBox="0 0 600 600" fill="none">
          {/* Network nodes pattern */}
          <circle cx="300" cy="150" r="6" fill="#1E3A8A"/>
          <circle cx="150" cy="300" r="4" fill="#3B82F6"/>
          <circle cx="450" cy="300" r="5" fill="#1E3A8A"/>
          <circle cx="300" cy="450" r="4" fill="#3B82F6"/>
          <circle cx="200" cy="200" r="3" fill="#3B82F6"/>
          <circle cx="400" cy="200" r="3" fill="#1E3A8A"/>
          <circle cx="200" cy="400" r="3" fill="#3B82F6"/>
          <circle cx="400" cy="400" r="3" fill="#1E3A8A"/>
          <line x1="300" y1="150" x2="150" y2="300" stroke="#3B82F6" strokeWidth="1.5"/>
          <line x1="300" y1="150" x2="450" y2="300" stroke="#3B82F6" strokeWidth="1.5"/>
          <line x1="150" y1="300" x2="300" y2="450" stroke="#3B82F6" strokeWidth="1.5"/>
          <line x1="450" y1="300" x2="300" y2="450" stroke="#3B82F6" strokeWidth="1.5"/>
          <line x1="200" y1="200" x2="300" y2="150" stroke="#1E3A8A" strokeWidth="1"/>
          <line x1="400" y1="200" x2="300" y2="150" stroke="#1E3A8A" strokeWidth="1"/>
          <line x1="200" y1="200" x2="150" y2="300" stroke="#1E3A8A" strokeWidth="1"/>
          <line x1="400" y1="200" x2="450" y2="300" stroke="#1E3A8A" strokeWidth="1"/>
          <line x1="200" y1="400" x2="150" y2="300" stroke="#1E3A8A" strokeWidth="1"/>
          <line x1="400" y1="400" x2="450" y2="300" stroke="#1E3A8A" strokeWidth="1"/>
          <line x1="200" y1="400" x2="300" y2="450" stroke="#1E3A8A" strokeWidth="1"/>
          <line x1="400" y1="400" x2="300" y2="450" stroke="#1E3A8A" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection delay={0}>
          <Badge className="mb-6">
            <Sparkles size={14} className="mr-1.5" />
            {t('badge')}
          </Badge>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            {t('title')}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('slogan')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollTo('#cta')}>
              {t('ctaPrimary')}
            </Button>
            <Button size="lg" variant="secondary" onClick={() => scrollTo('#case-studies')}>
              {t('ctaSecondary')}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
```

## TrustLogos 开发

```tsx
const LOGOS = ['Acme Corp', 'GlobalTech', 'NextWave', 'PrimeSoft', 'FutureGroup']

export function TrustLogos() {
  const t = useTranslations('trustLogos')

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-xs text-slate-400 uppercase tracking-widest font-medium mb-8">
          {t('label')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="font-sora font-bold text-lg text-slate-300 hover:text-slate-500 transition-colors duration-300 cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## 验收标准

- Hero 首屏完整显示（标题/副标题/两个按钮）
- SVG 背景在 desktop 可见，mobile 隐藏
- AnimatedSection stagger 动效正常
- 两个 CTA 按钮分别滚动到正确 Section
- TrustLogos hover 效果正常
- Mobile 按钮竖排全宽
