'use client'
import { ClipboardCheck, Wrench, Activity } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const STEPS = [
  { icon: ClipboardCheck, titleKey: 'step1Title', descKey: 'step1Desc', num: '01' },
  { icon: Wrench, titleKey: 'step2Title', descKey: 'step2Desc', num: '02' },
  { icon: Activity, titleKey: 'step3Title', descKey: 'step3Desc', num: '03' },
] as const

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map(({ icon: Icon, titleKey, descKey, num }, i) => (
            <AnimatedSection key={titleKey} delay={i * 0.15} className="text-center">
              <div className="relative mx-auto w-fit">
                <span className="absolute -top-4 -left-6 font-sora text-8xl font-extrabold text-blue-50 select-none leading-none z-0">
                  {num}
                </span>
                <div className="relative z-10 w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                  <Icon size={28} className="text-white" />
                </div>
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-900 mt-8">
                {t(titleKey)}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed max-w-xs mx-auto">
                {t(descKey)}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
