'use client'
import { useTranslations } from 'next-intl'

const LOGOS = ['Acme Corp', 'GlobalTech', 'NextWave', 'PrimeSoft', 'FutureGroup']

export function TrustLogos() {
  const t = useTranslations('trustLogos')

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-xs text-slate-400 uppercase tracking-widest font-medium mb-8">
          {t('label')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="font-sora font-bold text-lg text-slate-300 hover:text-slate-500 transition-colors duration-300 cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
