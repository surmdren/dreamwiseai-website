'use client'
import { Search, Code2, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'

const SERVICES = [
  { icon: Search, badgeKey: 's1Badge', nameKey: 's1Name', taglineKey: 's1Tagline', descKey: 's1Desc' },
  { icon: Code2, badgeKey: 's2Badge', nameKey: 's2Name', taglineKey: 's2Tagline', descKey: 's2Desc' },
  { icon: TrendingUp, badgeKey: 's3Badge', nameKey: 's3Name', taglineKey: 's3Tagline', descKey: 's3Desc' },
] as const

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
