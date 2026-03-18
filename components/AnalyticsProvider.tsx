'use client'

import { useEffect } from 'react'
import { initAnalytics } from '@/lib/analytics'
import { captureUTM } from '@/lib/utm'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initAnalytics()
    captureUTM()
  }, [])

  return <>{children}</>
}
