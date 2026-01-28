"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

interface ServiceCardProps {
  icon: LucideIcon
  titleKey: string
  descriptionKey: string
  items: string[]
  serviceParam: string
}

export function ServiceCard({ icon: Icon, titleKey, descriptionKey, items, serviceParam }: ServiceCardProps) {
  const { t } = useI18n()

  return (
    <Card className="group flex h-full flex-col border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{t(titleKey)}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t(descriptionKey)}</p>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item.trim()}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent">
          <Link href={`/contacts?service=${serviceParam}`}>
            {t("services.discuss")}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
