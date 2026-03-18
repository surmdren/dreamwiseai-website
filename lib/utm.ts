export interface UTMParams {
  source: string
  medium: string
  campaign: string
  term?: string
  content?: string
  referrer?: string
  landingPage: string
  capturedAt: string
}

const UTM_STORAGE_KEY = 'utm_params'

function inferSourceFromReferrer(): Pick<UTMParams, 'source' | 'medium'> {
  if (typeof document === 'undefined' || !document.referrer) {
    return { source: 'direct', medium: 'none' }
  }

  const ref = new URL(document.referrer).hostname.toLowerCase()

  if (/google\./i.test(ref)) return { source: 'google', medium: 'organic' }
  if (/bing\./i.test(ref)) return { source: 'bing', medium: 'organic' }
  if (/baidu\./i.test(ref)) return { source: 'baidu', medium: 'organic' }
  if (/linkedin\./i.test(ref)) return { source: 'linkedin', medium: 'social' }
  if (/twitter\.|x\.com/i.test(ref)) return { source: 'twitter', medium: 'social' }
  if (/facebook\./i.test(ref)) return { source: 'facebook', medium: 'social' }

  return { source: ref, medium: 'referral' }
}

export function captureUTM(): UTMParams | null {
  if (typeof window === 'undefined') return null

  // First-touch model: don't overwrite existing UTM
  const existing = getStoredUTM()
  if (existing) return existing

  const params = new URLSearchParams(window.location.search)
  const utmSource = params.get('utm_source')

  let source: string
  let medium: string

  if (utmSource) {
    source = utmSource
    medium = params.get('utm_medium') || 'unknown'
  } else {
    const inferred = inferSourceFromReferrer()
    source = inferred.source
    medium = inferred.medium
  }

  const utm: UTMParams = {
    source,
    medium,
    campaign: params.get('utm_campaign') || '',
    term: params.get('utm_term') || undefined,
    content: params.get('utm_content') || undefined,
    referrer: typeof document !== 'undefined' ? document.referrer : undefined,
    landingPage: window.location.href,
    capturedAt: new Date().toISOString(),
  }

  try {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm))
  } catch {}

  return utm
}

export function getStoredUTM(): UTMParams | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(UTM_STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}
