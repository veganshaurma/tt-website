import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
  id?: string
}

export function Section({ children, className, dark = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-foreground text-background" : "bg-background text-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  dark?: boolean
}

export function SectionHeader({ title, subtitle, centered = true, className, dark = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <h2 className={cn(
        "text-3xl font-bold tracking-tight md:text-4xl text-balance",
        dark ? "text-background" : "text-foreground"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mx-auto mt-4 max-w-2xl text-lg text-pretty",
          dark ? "text-background/70" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
