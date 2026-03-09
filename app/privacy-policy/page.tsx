"use client"

import { Shield, Lock, Eye, FileText, Mail, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/section"
import { useI18n } from "@/lib/i18n"

const content = {
  ru: {
    title: "Политика конфиденциальности",
    lastUpdated: "Последнее обновление",
    sections: [
      {
        icon: "file",
        title: "Введение",
        content: (
          <>
            <p>
              ООО «ТОРГОВЫЕ ТЕХНОЛОГИИ АС» («мы», «нас», «наш») обязуется защищать вашу
              конфиденциальность. Настоящая Политика конфиденциальности объясняет, как мы
              собираем, используем, раскрываем и защищаем вашу информацию при посещении нашего
              сайта или использовании наших услуг.
            </p>
            <p>
              Пожалуйста, внимательно ознакомьтесь с настоящей политикой. Если вы не согласны с
              её условиями, просим вас не пользоваться сайтом и нашими услугами.
            </p>
          </>
        ),
      },
      {
        icon: "eye",
        title: "Собираемая информация",
        content: (
          <>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Персональные данные</h3>
              <p className="mb-2">
                Мы можем собирать персональные данные, которые вы добровольно предоставляете нам,
                когда:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Заполняете контактные формы или запрашиваете коммерческое предложение</li>
                <li>Подписываетесь на нашу рассылку</li>
                <li>Отправляете резюме</li>
                <li>Связываетесь с нами по электронной почте или телефону</li>
              </ul>
              <p className="mt-3">Эта информация может включать:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Имя и контактные данные (адрес электронной почты, номер телефона)</li>
                <li>Название компании и должность</li>
                <li>Профессиональный опыт и квалификацию (при подаче заявки на работу)</li>
                <li>Любую другую информацию по вашему желанию</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Автоматически собираемая информация
              </h3>
              <p className="mb-2">
                При посещении нашего сайта мы можем автоматически собирать определённую информацию
                о вашем устройстве, включая:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-адрес</li>
                <li>Тип и версию браузера</li>
                <li>Операционную систему</li>
                <li>Посещённые страницы и время на них</li>
                <li>Адреса сайтов-источников</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        icon: "lock",
        title: "Использование информации",
        content: (
          <>
            <p>Мы используем собранную информацию для:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Ответа на ваши запросы и предоставления запрошенных услуг</li>
              <li>Обработки заявок на вакансии и оценки кандидатов</li>
              <li>Направления информации о наших услугах и обновлениях (с вашего согласия)</li>
              <li>Улучшения сайта и пользовательского опыта</li>
              <li>Анализа трафика и паттернов использования</li>
              <li>Предотвращения мошенничества и повышения безопасности</li>
              <li>Выполнения юридических обязательств</li>
            </ul>
          </>
        ),
      },
      {
        icon: "shield",
        title: "Передача информации третьим лицам",
        content: (
          <>
            <p>
              Мы не продаём, не передаём и не сдаём в аренду ваши персональные данные третьим
              лицам. Мы можем передавать информацию только в следующих случаях:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Поставщики услуг:</strong> надёжные сторонние поставщики, помогающие нам в
                работе сайта и ведении бизнеса.
              </li>
              <li>
                <strong>Юридические требования:</strong> если это предусмотрено законом или
                запросом уполномоченных органов.
              </li>
              <li>
                <strong>Реорганизация бизнеса:</strong> при слиянии, поглощении или продаже
                активов ваша информация может быть передана новому владельцу.
              </li>
              <li>
                <strong>С вашего согласия:</strong> при наличии вашего явного согласия.
              </li>
            </ul>
          </>
        ),
      },
      {
        icon: "lock",
        title: "Безопасность данных",
        content: (
          <>
            <p>
              Мы применяем соответствующие технические и организационные меры для защиты ваших
              персональных данных от несанкционированного доступа. Меры включают:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Шифрование данных при передаче и хранении</li>
              <li>Регулярные проверки и обновления безопасности</li>
              <li>Контроль доступа и механизмы аутентификации</li>
              <li>Обучение сотрудников защите данных</li>
            </ul>
            <p className="mt-3">
              Тем не менее ни один метод передачи данных через Интернет не является
              стопроцентно надёжным. Мы не можем гарантировать абсолютную безопасность.
            </p>
          </>
        ),
      },
      {
        icon: "clock",
        title: "Хранение данных",
        content: (
          <p>
            Мы храним ваши персональные данные только в течение времени, необходимого для
            достижения целей, указанных в настоящей Политике. После того как информация больше не
            нужна, мы безопасно удаляем или обезличиваем её.
          </p>
        ),
      },
      {
        icon: "shield",
        title: "Ваши права",
        content: (
          <>
            <p>
              В зависимости от вашего местонахождения вы можете иметь следующие права в отношении
              ваших персональных данных:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Доступ:</strong> запросить доступ к хранимым нами персональным данным</li>
              <li><strong>Исправление:</strong> запросить исправление неточной информации</li>
              <li><strong>Удаление:</strong> запросить удаление ваших персональных данных</li>
              <li><strong>Возражение:</strong> возразить против обработки ваших данных</li>
              <li><strong>Переносимость:</strong> запросить передачу данных другому поставщику</li>
              <li><strong>Отзыв согласия:</strong> отозвать согласие в любое время</li>
            </ul>
            <p className="mt-3">
              Для реализации любого из этих прав свяжитесь с нами, используя контактную
              информацию ниже.
            </p>
          </>
        ),
      },
      {
        icon: "eye",
        title: "Файлы cookie и технологии отслеживания",
        content: (
          <>
            <p>
              Мы можем использовать файлы cookie и аналогичные технологии для сбора информации о
              посещении вами сайта. Файлы cookie — небольшие файлы, хранящиеся на вашем устройстве
              и помогающие нам улучшать услуги.
            </p>
            <p>
              Вы можете настроить браузер так, чтобы отклонять все файлы cookie. Однако это может
              повлиять на работу некоторых функций сайта.
            </p>
          </>
        ),
      },
      {
        icon: "file",
        title: "Ссылки на сторонние сайты",
        content: (
          <p>
            Наш сайт может содержать ссылки на сторонние сайты. Мы не несём ответственности за
            политику конфиденциальности этих ресурсов. Рекомендуем ознакомиться с политикой
            конфиденциальности посещаемых вами сторонних сайтов.
          </p>
        ),
      },
      {
        icon: "shield",
        title: "Защита данных детей",
        content: (
          <p>
            Наши услуги не предназначены для лиц моложе 18 лет. Мы намеренно не собираем
            персональные данные детей. Если вам стало известно, что ребёнок предоставил нам свои
            данные, пожалуйста, свяжитесь с нами.
          </p>
        ),
      },
      {
        icon: "lock",
        title: "Международная передача данных",
        content: (
          <>
            <p>
              Ваша информация может передаваться и храниться на серверах за пределами вашей страны,
              где законодательство о защите данных может отличаться. Отправляя информацию, вы
              соглашаетесь на такую передачу.
            </p>
            <p>
              Мы предпримем все разумно необходимые шаги для безопасной обработки ваших данных в
              соответствии с настоящей Политикой.
            </p>
          </>
        ),
      },
      {
        icon: "file",
        title: "Изменения в Политике конфиденциальности",
        content: (
          <>
            <p>
              Мы можем периодически обновлять настоящую Политику. О любых изменениях мы уведомим
              вас, разместив обновлённую Политику на этой странице.
            </p>
            <p>
              Рекомендуем периодически проверять настоящую Политику. Продолжение использования
              наших услуг после внесения изменений означает ваше согласие с обновлённой Политикой.
            </p>
          </>
        ),
      },
    ],
    contact: {
      title: "Свяжитесь с нами",
      intro: "Если у вас есть вопросы о настоящей Политике или о наших практиках обработки данных, пожалуйста, свяжитесь с нами:",
      address: "Адрес",
      addressValue: "Москва, Россия",
    },
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated",
    sections: [
      {
        icon: "file",
        title: "Introduction",
        content: (
          <>
            <p>
              ООО "ТОРГОВЫЕ ТЕХНОЛОГИИ АС" ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this
              privacy policy, please do not access the site or use our services.
            </p>
          </>
        ),
      },
      {
        icon: "eye",
        title: "Information We Collect",
        content: (
          <>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
              <p className="mb-2">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Fill out contact forms or request quotes</li>
                <li>Subscribe to our newsletter</li>
                <li>Submit a job application</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p className="mt-3">This information may include:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name and contact details (email address, phone number)</li>
                <li>Company name and position</li>
                <li>Professional background and qualifications (for job applications)</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Automatically Collected Information
              </h3>
              <p className="mb-2">
                When you visit our website, we may automatically collect certain information about
                your device, including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        icon: "lock",
        title: "How We Use Your Information",
        content: (
          <>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Process job applications and evaluate candidates</li>
              <li>Send you information about our services and updates (with your consent)</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </>
        ),
      },
      {
        icon: "shield",
        title: "Information Sharing and Disclosure",
        content: (
          <>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Service Providers:</strong> trusted third-party service providers who assist
                us in operating our website and business.
              </li>
              <li>
                <strong>Legal Requirements:</strong> if required by law or in response to valid
                requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> in the event of a merger, acquisition, or sale
                of assets.
              </li>
              <li>
                <strong>With Your Consent:</strong> with your explicit consent.
              </li>
            </ul>
          </>
        ),
      },
      {
        icon: "lock",
        title: "Data Security",
        content: (
          <>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="mt-3">
              However, no method of transmission over the Internet is 100% secure. We cannot
              guarantee absolute security.
            </p>
          </>
        ),
      },
      {
        icon: "clock",
        title: "Data Retention",
        content: (
          <p>
            We retain your personal information only for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy. When your information is no longer needed, we
            will securely delete or anonymize it.
          </p>
        ),
      },
      {
        icon: "shield",
        title: "Your Rights",
        content: (
          <>
            <p>
              Depending on your location, you may have the following rights regarding your personal
              information:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw your consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the information provided
              below.
            </p>
          </>
        ),
      },
      {
        icon: "eye",
        title: "Cookies and Tracking Technologies",
        content: (
          <>
            <p>
              We may use cookies and similar tracking technologies to collect and track information
              about your website usage.
            </p>
            <p>
              You can instruct your browser to refuse all cookies. However, if you do not accept
              cookies, you may not be able to use some portions of our website.
            </p>
          </>
        ),
      },
      {
        icon: "file",
        title: "Third-Party Links",
        content: (
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices or content of these external sites.
          </p>
        ),
      },
      {
        icon: "shield",
        title: "Children's Privacy",
        content: (
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from children.
          </p>
        ),
      },
      {
        icon: "lock",
        title: "International Data Transfers",
        content: (
          <>
            <p>
              Your information may be transferred to and maintained on computers located outside of
              your country where data protection laws may differ.
            </p>
            <p>
              We will take all steps reasonably necessary to ensure that your data is treated
              securely in accordance with this Privacy Policy.
            </p>
          </>
        ),
      },
      {
        icon: "file",
        title: "Changes to This Privacy Policy",
        content: (
          <>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page.
            </p>
            <p>
              Your continued use of our services after any modifications indicates your acceptance of
              the updated Privacy Policy.
            </p>
          </>
        ),
      },
    ],
    contact: {
      title: "Contact Us",
      intro: "If you have any questions about this Privacy Policy or our data practices, please contact us:",
      address: "Address",
      addressValue: "Moscow, Russia",
    },
  },
}

function getIcon(name: string) {
  const cls = "h-5 w-5 text-primary"
  switch (name) {
    case "eye": return <Eye className={cls} />
    case "lock": return <Lock className={cls} />
    case "shield": return <Shield className={cls} />
    case "clock": return <Clock className={cls} />
    default: return <FileText className={cls} />
  }
}

export default function PrivacyPolicyPage() {
  const { locale } = useI18n()
  const c = content[locale] ?? content.ru

  return (
    <>
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary/90 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-background/10 text-background">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl md:text-5xl text-balance">
            {c.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70 text-pretty">
            {c.lastUpdated}: {new Date().toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-8">
          {c.sections.map((section, i) => (
            <Card key={i} className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {getIcon(section.icon)}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                {section.content}
              </CardContent>
            </Card>
          ))}

          <Card className="border-border/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                {c.contact.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>{c.contact.intro}</p>
              <div className="space-y-2">
                <p>
                  <strong className="text-foreground">ООО «ТОРГОВЫЕ ТЕХНОЛОГИИ АС»</strong>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@ptsfs.tech" className="text-primary hover:underline">
                    info@ptsfs.tech
                  </a>
                </p>
                <p>
                  {c.contact.address}: {c.contact.addressValue}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
