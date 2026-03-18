'use client'
import { MapPin, Puzzle, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const CARDS = [
  { icon: MapPin, colorClass: 'text-red-400', key: '1' },
  { icon: Puzzle, colorClass: 'text-amber-400', key: '2' },
  { icon: Users, colorClass: 'text-orange-400', key: '3' },
] as const

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
          {CARDS.map(({ icon: Icon, colorClass, key }, i) => (
            <AnimatedSection key={key} delay={i * 0.1}>
              <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md hover:border-red-100 transition-all duration-200 h-full">
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
