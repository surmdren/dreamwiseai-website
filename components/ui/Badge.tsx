import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full',
      'bg-blue-100 text-blue-900 text-sm font-medium',
      className
    )}>
      {children}
    </span>
  )
}
