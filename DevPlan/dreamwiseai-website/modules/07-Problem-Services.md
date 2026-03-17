# 模块 07 — Problem + Services

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Frontend |
| 优先级 | P0 |
| 预估工时 | 4h |
| 依赖 | 模块 02, 03 |

## Problem Section

```tsx
import { MapPin, Puzzle, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const PROBLEM_CARDS = [
  { icon: MapPin, colorClass: 'text-red-400', key: '1' },
  { icon: Puzzle, colorClass: 'text-amber-400', key: '2' },
  { icon: Users, colorClass: 'text-orange-400', key: '3' },
]

export function Problem() {
  const t = useTranslations('problem')

  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-slate-900">
            {t('headline')}
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {t('subtext')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROBLEM_CARDS.map(({ icon: Icon, colorClass, key }, i) => (
            <AnimatedSection key={key} delay={i * 0.1}>
              <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md hover:border-red-100 transition-all duration-200">
                <Icon size={32} className={colorClass} />
                <h3 className="font-inter text-xl font-semibold text-slate-900 mt-4">
                  {t(`card${key}Title`)}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {t(`card${key}Desc`)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## Services Section

```tsx
import { Search, Code2, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'

const SERVICES = [
  { icon: Search, badgeKey: 's1Badge', nameKey: 's1Name', taglineKey: 's1Tagline', descKey: 's1Desc' },
  { icon: Code2, badgeKey: 's2Badge', nameKey: 's2Name', taglineKey: 's2Tagline', descKey: 's2Desc' },
  { icon: TrendingUp, badgeKey: 's3Badge', nameKey: 's3Name', taglineKey: 's3Tagline', descKey: 's3Desc' },
]

export function Services() {
  const t = useTranslations('services')

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-slate-900">
            {t('headline')}
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {t('subtext')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, badgeKey, nameKey, taglineKey, descKey }, i) => (
            <AnimatedSection key={nameKey} delay={i * 0.1}>
              <div className="bg-white rounded-xl border border-slate-100 p-8 hover:border-blue-200 hover:shadow-md transition-all duration-200 h-full flex flex-col">
                <Badge>{t(badgeKey)}</Badge>
                <Icon size={48} className="text-blue-900 mt-6" />
                <h3 className="font-sora text-xl font-bold text-slate-900 mt-4">
                  {t(nameKey)}
                </h3>
                <p className="text-sm italic text-blue-600 mt-1">{t(taglineKey)}</p>
                <p className="mt-3 text-slate-600 leading-relaxed flex-1">
                  {t(descKey)}
                </p>
                <button className="mt-6 text-blue-900 text-sm font-medium hover:underline cursor-pointer text-left">
                  {t('learnMore')}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## 验收标准

- Problem: 3 张卡片，各有不同颜色图标，hover 效果正常
- Services: 3 张卡片，Step badge 正确，图标 + 描述完整
- 双语切换正常
- Mobile 单列，Desktop 3 列
