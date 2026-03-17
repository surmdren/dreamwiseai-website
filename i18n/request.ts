import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale
  const resolvedLocale = locale ?? 'en'
  const messages = (await import(`../messages/${resolvedLocale}.json`)).default
  return { locale: resolvedLocale, messages }
})
