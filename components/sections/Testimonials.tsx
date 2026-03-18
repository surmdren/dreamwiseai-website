'use client'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const TESTIMONIALS = [
  { quoteKey: 'q1', nameKey: 'name1', roleKey: 'role1', initials: 'SC' },
  { quoteKey: 'q2', nameKey: 'name2', roleKey: 'role2', initials: 'MR' },
  { quoteKey: 'q3', nameKey: 'name3', roleKey: 'role3', initials: 'PP' },
] as const

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
              <div className="bg-white border border-slate-100 rounded-xl p-8 relative h-full flex flex-col">
                <span className="absolute top-4 left-6 font-sora text-7xl text-blue-100 leading-none select-none">
                  &ldquo;
                </span>
                <p className="relative z-10 text-slate-700 italic leading-relaxed mt-8 flex-1">
                  {t(quoteKey)}
                </p>
                <hr className="my-6 border-slate-100" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
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
