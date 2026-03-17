# 模块 10 — CTA Section

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Frontend |
| 优先级 | P0 |
| 预估工时 | 4h |
| 依赖 | 模块 02, 03, 04 |

## 功能清单

1. Calendly inline widget（异步加载 + 骨架屏）
2. 留资表单（4 字段）
3. 表单验证 + 提交状态
4. 调用 /api/contact

## 开发

```tsx
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
      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const inputClass = 'w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 transition-colors duration-200'

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendly */}
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

          {/* Form */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-6">
                {t('formLabel')}
              </p>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <p className="text-slate-900 font-semibold text-lg">{t('successTitle')}</p>
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
```

## E2E 测试（Playwright）

```typescript
// e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test'

test('contact form submission shows success', async ({ page }) => {
  await page.goto('/en')
  await page.locator('#cta').scrollIntoViewIfNeeded()

  await page.fill('input[placeholder*="Full Name"]', 'Test User')
  await page.fill('input[placeholder*="Company"]', 'Test Company')
  await page.fill('input[type="email"]', 'test@example.com')
  await page.click('button[type="submit"]')

  await expect(page.locator('text=Thanks!')).toBeVisible({ timeout: 10000 })
})
```

## 验收标准

- Calendly 异步加载，加载前显示骨架屏
- 表单 4 字段，name/company/email 必填
- 提交后显示 loading spinner，成功后显示 success 状态
- Error 状态显示红色提示
- Mobile 单列（Calendly 在上，表单在下）
