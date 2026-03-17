'use client'
import { useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import Script from 'next/script'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function CTA() {
  const t = useTranslations('cta')
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', challenge: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setFormState(res.ok ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  const inputClass = 'w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 transition-colors duration-200 bg-white'

  return (
    <section id="cta" className="py-24 bg-slate-50">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setCalendlyLoaded(true)}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-slate-900">
            {t('headline')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t('subtext')}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calendly Widget */}
          <AnimatedSection>
            {!calendlyLoaded && (
              <div className="animate-pulse bg-slate-200 rounded-xl h-[650px]" />
            )}
            <div
              className={`calendly-inline-widget rounded-xl overflow-hidden border border-slate-100 shadow-lg ${calendlyLoaded ? 'block' : 'hidden'}`}
              data-url={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/dreamwiseai/30min'}
              style={{ minWidth: '320px', height: '650px' }}
            />
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-6">
                {t('formLabel')}
              </p>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <p className="text-slate-900 font-semibold text-lg leading-snug max-w-xs">
                    {t('successTitle')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder={t('fieldName')}
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder={t('fieldCompany')}
                    required
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder={t('fieldEmail')}
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                  <textarea
                    placeholder={t('fieldChallenge')}
                    rows={3}
                    value={form.challenge}
                    onChange={e => setForm({ ...form, challenge: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />

                  {formState === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                      <AlertCircle size={16} />
                      {t('errorMsg')}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={formState === 'loading'}
                  >
                    {formState === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin mr-2" />{t('loading')}</>
                    ) : t('submit')}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
