# 模块 11 — About + Footer

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Frontend |
| 优先级 | P1 |
| 预估工时 | 3h |
| 依赖 | 模块 02, 03 |

## About Section

```tsx
import { CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const VP_KEYS = ['vp1', 'vp2', 'vp3']

export function About() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left: Text (3/5) */}
          <AnimatedSection className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">
              {t('label')}
            </p>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('headline')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">{t('mission')}</p>

            <div className="space-y-5">
              {VP_KEYS.map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-blue-900 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">{t(`${key}Title`)}</p>
                    <p className="text-slate-600 text-sm mt-0.5">{t(`${key}Desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Dark Card (2/5) */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <p className="font-sora font-bold text-xl mb-6">DreamWise AI</p>
              <p className="font-sora text-lg italic leading-relaxed text-blue-100">
                "{t('cardQuote')}"
              </p>
              <hr className="border-blue-700 my-6" />
              <div className="flex gap-6 text-blue-200 text-sm">
                <span>50+ Clients</span>
                <span>·</span>
                <span>3 Yrs Experience</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
```

## Footer

```tsx
import { useTranslations } from 'next-intl'

const NAV_KEYS = ['services', 'howItWorks', 'caseStudies', 'about']

export function Footer() {
  const tFooter = useTranslations('footer')
  const tNavbar = useTranslations('navbar')

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const NAV_LINKS = [
    { key: 'services', href: '#services' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'caseStudies', href: '#case-studies' },
    { key: 'about', href: '#about' },
  ]

  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Tagline */}
          <div>
            <p className="font-sora font-bold text-xl text-white">DreamWise AI</p>
            <p className="mt-2 text-sm text-slate-400">{tFooter('tagline')}</p>
            <p className="mt-6 text-xs text-slate-500">{tFooter('copyright')}</p>
          </div>

          {/* Navigation */}
          <div>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {tNavbar(key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest font-medium text-slate-500 mb-3">
              {tFooter('contactLabel')}
            </p>
            <a
              href={`mailto:${tFooter('email')}`}
              className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
            >
              {tFooter('email')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

## 验收标准

- About: 两列布局，3 个 checkmark 价值主张，右侧深色卡片
- Footer: 深色背景，3 列，导航链接平滑滚动
- 双语切换正常
- Mobile 单列
