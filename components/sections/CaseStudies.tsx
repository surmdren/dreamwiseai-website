'use client'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

const CASES = [
  { badgeKey: 'badge1', numberKey: 'result1Number', labelKey: 'result1Label', scenarioKey: 'scenario1', gradient: 'from-blue-500 to-blue-700' },
  { badgeKey: 'badge2', numberKey: 'result2Number', labelKey: 'result2Label', scenarioKey: 'scenario2', gradient: 'from-indigo-500 to-indigo-700' },
  { badgeKey: 'badge3', numberKey: 'result3Number', labelKey: 'result3Label', scenarioKey: 'scenario3', gradient: 'from-violet-500 to-violet-700' },
] as const

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
