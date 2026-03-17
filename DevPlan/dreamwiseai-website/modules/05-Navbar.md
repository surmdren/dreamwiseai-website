# 模块 05 — Navbar

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Frontend |
| 优先级 | P0 |
| 预估工时 | 3h |
| 依赖 | 模块 02, 03 |

## 功能清单

1. Logo + 导航链接 + 语言切换 + CTA 按钮
2. 粘性顶部，滚动后背景变白+阴影
3. Mobile hamburger 菜单
4. 平滑滚动到对应 Section
5. 语言切换（cookie 持久化）

## 开发步骤

### Step 1: 核心结构

```tsx
'use client'
import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { key: 'services', href: '#services' },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'caseStudies', href: '#case-studies' },
  { key: 'about', href: '#about' },
]

export function Navbar() {
  const t = useTranslations('navbar')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // 滚动检测
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 语言切换
  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'zh' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`)
    router.push(newPath)
  }

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-sora font-bold text-xl text-blue-900 cursor-pointer"
          >
            {t('logo')}
          </span>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ key, href }) => (
              <button
                key={key}
                onClick={() => scrollToSection(href)}
                className="text-slate-600 hover:text-blue-900 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer text-[15px]"
              >
                {t(key)}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-slate-500 hover:text-blue-900 text-sm font-medium cursor-pointer transition-colors"
            >
              {t('langToggle')}
            </button>
            <Button
              size="sm"
              onClick={() => scrollToSection('#cta')}
            >
              {t('bookCall')}
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2">
          {NAV_LINKS.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => scrollToSection(href)}
              className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
            >
              {t(key)}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button onClick={toggleLocale} className="text-slate-500 text-sm font-medium cursor-pointer">
              {t('langToggle')}
            </button>
            <Button size="sm" onClick={() => scrollToSection('#cta')}>
              {t('bookCall')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
```

## 验收标准

- 初始状态背景透明，滚动后变白+阴影
- 导航链接点击后平滑滚动到对应 Section
- 语言切换按钮正常工作
- Mobile 菜单展开/收起正常
- 所有元素有 cursor-pointer
- focus states 可见
