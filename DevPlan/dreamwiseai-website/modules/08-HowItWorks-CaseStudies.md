# 模块 08 — How It Works + Case Studies

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Frontend |
| 优先级 | P1 |
| 预估工时 | 4h |
| 依赖 | 模块 02, 03 |

## How It Works

```tsx
import { ClipboardCheck, Wrench, Activity } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const STEPS = [
  { icon: ClipboardCheck, key: 'step1', num: '01' },
  { icon: Wrench, key: 'step2', num: '02' },
  { icon: Activity, key: 'step3', num: '03' },
]

export function HowItWorks() {
  const t = useTranslations('howItWorks')

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-slate-900">
            {t('headline')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map(({ icon: Icon, key, num }, i) => (
            <AnimatedSection key={key} delay={i * 0.15} className="relative text-center">
              {/* Step Number Background */}
              <div className="relative mx-auto w-fit">
                <span className="absolute -top-4 -left-4 font-sora text-7xl font-extrabold text-blue-50 select-none z-0">
                  {num}
                </span>
                <div className="relative z-10 w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                  <Icon size={28} className="text-white" />
                </div>
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mt-6">
                {t(`${key}Title`)}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed max-w-xs mx-auto">
                {t(`${key}Desc`)}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## Case Studies

```tsx
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

const CASES = [
  { badgeKey: 'badge1', numberKey: 'result1Number', labelKey: 'result1Label', scenarioKey: 'scenario1', gradient: 'from-blue-500 to-blue-700' },
  { badgeKey: 'badge2', numberKey: 'result2Number', labelKey: 'result2Label', scenarioKey: 'scenario2', gradient: 'from-indigo-500 to-indigo-700' },
  { badgeKey: 'badge3', numberKey: 'result3Number', labelKey: 'result3Label', scenarioKey: 'scenario3', gradient: 'from-violet-500 to-violet-700' },
]

export function CaseStudies() {
  const t = useTranslations('caseStudies')

  return (
    <section id="case-studies" className="py-24 bg-slate-50">
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
          {CASES.map(({ badgeKey, numberKey, labelKey, scenarioKey, gradient }, i) => (
            <AnimatedSection key={badgeKey} delay={i * 0.1}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden">
                <div className={cn('h-2 bg-gradient-to-r', gradient)} />
                <div className="p-6">
                  <span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium uppercase tracking-wide">
                    {t(badgeKey)}
                  </span>
                  <div className="mt-4">
                    <span className="font-sora text-5xl font-extrabold text-blue-900">
                      {t(numberKey)}
                    </span>
                    <p className="text-sm text-slate-600 mt-1">{t(labelKey)}</p>
                  </div>
                  <hr className="my-4 border-slate-100" />
                  <p className="text-slate-700 text-sm leading-relaxed">{t(scenarioKey)}</p>
                  <button className="mt-4 text-blue-600 text-sm hover:underline cursor-pointer">
                    {t('readMore')}
                  </button>
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

- HowItWorks: 3 步骤带圆圈图标 + 背景数字
- CaseStudies: 3 卡片带色带 + 数字 + 行业 badge
- hover 提升效果（-translate-y-1）正常
- Mobile 单列，Desktop 3 列
