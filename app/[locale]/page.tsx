import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { Problem } from '@/components/sections/Problem'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Stats } from '@/components/sections/Stats'
import { CTA } from '@/components/sections/CTA'
import { Testimonials } from '@/components/sections/Testimonials'
import { About } from '@/components/sections/About'
import { Footer } from '@/components/sections/Footer'
import { JsonLd } from '@/components/JsonLd'
import { getTranslations } from 'next-intl/server'

const BASE_URL = 'https://dreamwiseai.com'

function getServiceJsonLd(locale: string) {
  const isEn = locale === 'en'
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DreamWise AI',
    url: `${BASE_URL}/${locale}`,
    description: isEn
      ? 'AI Agent Consulting for SMEs. Custom AI agent development, readiness assessment, and ongoing optimization.'
      : '专注中小企业的 AI 智能体咨询。提供 AI 就绪评估、定制智能体开发和持续运营优化服务。',
    priceRange: '$$',
    areaServed: {
      '@type': 'GeoShape',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isEn ? 'AI Consulting Services' : 'AI 咨询服务',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isEn ? 'Agent Readiness Assessment' : 'AI 就绪评估',
            description: isEn
              ? 'Audit your processes, identify high-impact automation opportunities, and deliver a clear AI roadmap.'
              : '审计您的业务流程，识别高价值自动化机会，交付清晰的 AI 路线图。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isEn ? 'Custom Agent Development' : '定制 AI 智能体开发',
            description: isEn
              ? 'Design and deploy AI agents tailored to your workflows.'
              : '设计并部署专为您工作流程定制的 AI 智能体。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isEn ? 'Agent Operations & Optimization' : '智能体运营与优化',
            description: isEn
              ? 'Ongoing monitoring, fine-tuning, and iteration for measurable business results.'
              : '持续监控、精细调优和迭代，确保可衡量的业务成果。',
          },
        },
      ],
    },
  }
}

function getFaqJsonLd(locale: string) {
  const isEn = locale === 'en'
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isEn
          ? 'What does DreamWise AI do?'
          : 'DreamWise AI 做什么？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isEn
            ? 'DreamWise AI helps small and medium businesses become agent-driven through custom AI agent development, readiness assessment, and ongoing optimization.'
            : 'DreamWise AI 帮助中小企业实现 AI 智能体驱动转型，提供定制 AI 智能体开发、就绪评估和持续优化服务。',
        },
      },
      {
        '@type': 'Question',
        name: isEn
          ? 'How long does it take to deploy AI agents?'
          : '部署 AI 智能体需要多长时间？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isEn
            ? 'On average, our AI agent deployments take about 8 weeks from assessment to production.'
            : '平均而言，从评估到投产，我们的 AI 智能体部署大约需要 8 周。',
        },
      },
      {
        '@type': 'Question',
        name: isEn
          ? 'What industries do you serve?'
          : '你们服务哪些行业？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isEn
            ? 'We serve SMEs across industries including e-commerce, logistics, professional services, and more.'
            : '我们服务各行业的中小企业，包括电商、物流、专业服务等。',
        },
      },
    ],
  }
}

export default async function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return (
    <main>
      <JsonLd data={getServiceJsonLd(locale)} />
      <JsonLd data={getFaqJsonLd(locale)} />
      <Navbar />
      <Hero />
      <TrustLogos />
      <Problem />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <Stats />
      <Testimonials />
      <CTA />
      <About />
      <Footer />
    </main>
  )
}
