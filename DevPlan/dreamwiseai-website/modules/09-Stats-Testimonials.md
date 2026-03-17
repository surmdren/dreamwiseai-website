# 模块 09 — Stats + Testimonials

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Frontend |
| 优先级 | P1 |
| 预估工时 | 3h |
| 依赖 | 模块 02, 03 |

## Stats Section（count-up 动效）

```tsx
'use client'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOut
      setCount(Math.round(target * eased))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

const STATS = [
  { numberKey: 'stat1Number', suffixKey: 'stat1Suffix', labelKey: 'stat1Label' },
  { numberKey: 'stat2Number', suffixKey: 'stat2Suffix', labelKey: 'stat2Label' },
  { numberKey: 'stat3Number', suffixKey: 'stat3Suffix', labelKey: 'stat3Label' },
  { numberKey: 'stat4Number', suffixKey: 'stat4Suffix', labelKey: 'stat4Label' },
]

export function Stats() {
  const t = useTranslations('stats')

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ numberKey, suffixKey, labelKey }, i) => (
            <AnimatedSection key={labelKey} delay={i * 0.1} className={`text-center ${i < 3 ? 'lg:border-r lg:border-blue-700' : ''}`}>
              <div className="font-sora text-5xl lg:text-6xl font-extrabold text-white">
                <CountUp target={parseFloat(t(numberKey))} />
                <span className="text-blue-300">{t(suffixKey)}</span>
              </div>
              <p className="mt-2 text-blue-200 font-medium text-sm lg:text-base">
                {t(labelKey)}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## Testimonials Section

```tsx
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const TESTIMONIALS = [
  { quoteKey: 'q1', nameKey: 'name1', roleKey: 'role1', initials: 'SC' },
  { quoteKey: 'q2', nameKey: 'name2', roleKey: 'role2', initials: 'MR' },
  { quoteKey: 'q3', nameKey: 'name3', roleKey: 'role3', initials: 'PP' },
]

export function Testimonials() {
  const t = useTranslations('testimonials')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-slate-900">
            {t('headline')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map(({ quoteKey, nameKey, roleKey, initials }, i) => (
            <AnimatedSection key={quoteKey} delay={i * 0.1}>
              <div className="bg-white border border-slate-100 rounded-xl p-8 relative">
                <span className="absolute top-4 left-6 font-sora text-7xl text-blue-100 leading-none select-none">
                  "
                </span>
                <p className="relative z-10 text-slate-700 italic leading-relaxed mt-6">
                  {t(quoteKey)}
                </p>
                <hr className="my-6 border-slate-100" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-semibold text-blue-900 text-sm">{initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-[15px]">{t(nameKey)}</p>
                    <p className="text-slate-500 text-sm">{t(roleKey)}</p>
                  </div>
                </div>
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

- Stats: 深色背景，数字 count-up（进入视口触发）
- Testimonials: 3 张证言卡，引号装饰，首字母头像
- 双语切换正常
- Mobile Stats: 2×2 grid
