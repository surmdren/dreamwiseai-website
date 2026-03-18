'use client'
import { CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const VP_KEYS = ['vp1', 'vp2', 'vp3'] as const

export function About() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
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

          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <p className="font-sora font-bold text-xl mb-6">DreamWise AI</p>
              <p className="font-sora text-lg italic leading-relaxed text-blue-100">
                &ldquo;{t('cardQuote')}&rdquo;
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
