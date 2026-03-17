import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-slate-100 p-6',
        hover && 'hover:shadow-md hover:border-blue-100 transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
