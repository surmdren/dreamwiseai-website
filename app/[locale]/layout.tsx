import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { sora, inter } from '@/app/fonts'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { AnalyticsProvider } from '@/components/AnalyticsProvider'

const BASE_URL = 'https://dreamwiseai.com'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'DreamWise AI' }],
    metadataBase: new URL(BASE_URL),
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: locale === 'zh' ? 'en_US' : 'zh_CN',
      url: `${BASE_URL}/${locale}`,
      siteName: 'DreamWise AI',
      title: t('title'),
      description: t('description'),
      images: [{
        url: `/og-image-${locale}.png`,
        width: 1200,
        height: 630,
        alt: 'DreamWise AI',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`/og-image-${locale}.png`],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'en': `${BASE_URL}/en`,
        'zh': `${BASE_URL}/zh`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DreamWise AI',
    url: BASE_URL,
    logo: `${BASE_URL}/og-image-en.png`,
    email: 'consulting@dreamwiseai.com',
    description: 'AI Agent Consulting for SMEs. Custom AI agent development, readiness assessment, and ongoing optimization.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'consulting@dreamwiseai.com',
      contactType: 'sales',
      availableLanguage: ['English', 'Chinese'],
    },
  }
}

function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DreamWise AI',
    url: BASE_URL,
    inLanguage: ['en', 'zh'],
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${sora.variable} ${inter.variable}`}>
      <head>
        <JsonLd data={getOrganizationJsonLd()} />
        <JsonLd data={getWebSiteJsonLd()} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
