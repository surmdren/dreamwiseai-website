'use client'
import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { key: 'services', href: '#services' },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'caseStudies', href: '#case-studies' },
  { key: 'about', href: '#about' },
] as const

export function Navbar() {
  const t = useTranslations('navbar')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-sora font-bold text-xl text-blue-900 cursor-pointer select-none"
          >
            {t('logo')}
          </span>

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

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-slate-500 hover:text-blue-900 text-sm font-medium cursor-pointer transition-colors"
            >
              {t('langToggle')}
            </button>
            <Button size="sm" onClick={() => scrollToSection('#cta')}>
              {t('bookCall')}
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {NAV_LINKS.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => scrollToSection(href)}
              className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
            >
              {t(key)}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-4">
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
