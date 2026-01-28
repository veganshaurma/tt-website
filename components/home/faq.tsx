"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"

const faqKeys = ["q1", "q2", "q3", "q4", "q5"]

export function FAQ() {
  const { t } = useI18n()

  return (
    <Section className="bg-muted/30">
      <SectionHeader
        title={t("faq.title")}
      />
      
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqKeys.map((key) => (
            <AccordionItem key={key} value={key} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary hover:no-underline">
                {t(`faq.${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {t(`faq.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
