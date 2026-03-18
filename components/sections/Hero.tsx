'use client'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Sparkles } from 'lucide-react'
import { HeroBackground } from '@/components/ui/HeroBackground'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
      <HeroBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
        <AnimatedSection delay={0}>
          <Badge className="mb-6">
            <Sparkles size={14} className="mr-1.5" />
            {t('badge')}
          </Badge>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            {t('title')}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('slogan')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('ctaPrimary')}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('ctaSecondary')}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
