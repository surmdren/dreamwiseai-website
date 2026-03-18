import posthog from 'posthog-js'
import { getStoredUTM } from './utm'

let initialized = false

export function initAnalytics(): void {
  if (initialized || typeof window === 'undefined') return

  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

  if (posthogKey) {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: true,
      capture_pageleave: true,
      persistence: 'localStorage+cookie',
    })
  }

  // GA4 gtag
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  if (gaId && !document.querySelector(`script[src*="gtag"]`)) {
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    const gtag = (...args: unknown[]) => {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', gaId)
    window.gtag = gtag
  }

  initialized = true
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, unknown>
): void {
  const utm = getStoredUTM()
  const enriched = {
    ...properties,
    ...(utm
      ? {
          utm_source: utm.source,
          utm_medium: utm.medium,
          utm_campaign: utm.campaign,
          landing_page: utm.landingPage,
        }
      : {}),
  }

  // PostHog
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.capture(eventName, enriched)
  }

  // GA4
  if (window.gtag) {
    window.gtag('event', eventName, enriched)
  }
}

export function identifyUser(
  userId: string,
  traits?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return

  if (posthog.__loaded) {
    posthog.identify(userId, traits)
  }

  if (window.gtag) {
    window.gtag('set', { user_id: userId })
  }
}

// Type augmentation for gtag
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}
