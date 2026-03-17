'use client'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = target * eased
      setCount(Number.isInteger(target) ? Math.round(value) : Math.round(value * 10) / 10)
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

const STATS = [
  { numberKey: 'stat1Number', suffixKey: 'stat1Suffix', labelKey: 'stat1Label' },
  { numberKey: 'stat2Number', suffixKey: 'stat2Suffix', labelKey: 'stat2Label' },
  { numberKey: 'stat3Number', suffixKey: 'stat3Suffix', labelKey: 'stat3Label' },
  { numberKey: 'stat4Number', suffixKey: 'stat4Suffix', labelKey: 'stat4Label' },
] as const

export function Stats() {
  const t = useTranslations('stats')

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATS.map(({ numberKey, suffixKey, labelKey }, i) => (
            <AnimatedSection
              key={labelKey}
              delay={i * 0.1}
              className={cn(
                'text-center py-4',
                i < 3 && 'lg:border-r lg:border-blue-700'
              )}
            >
              <div className="font-sora text-5xl lg:text-6xl font-extrabold text-white">
                <CountUp target={parseFloat(t(numberKey))} />
                <span className="text-blue-300">{t(suffixKey)}</span>
              </div>
              <p className="mt-2 text-blue-200 font-medium text-sm lg:text-base">
                {t(labelKey)}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
