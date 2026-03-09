"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Logo } from "@/components/logo"

const navItems = [
  { href: "/", labelKey: "nav.home" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/technologies", labelKey: "nav.technologies" },
  { href: "/careers", labelKey: "nav.careers" },
  { href: "/contacts", labelKey: "nav.contacts" },
]

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-9 w-9" />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Торговые Технологии АС
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t("footer.navigation")}
            </h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t("footer.contacts")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@ptsfs.tech" className="transition-colors hover:text-foreground">
                  info@ptsfs.tech
                </a>
              </li>
              <li>Москва, Россия</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} ООО «ТОРГОВЫЕ ТЕХНОЛОГИИ АС». {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
