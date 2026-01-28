"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "ru" | "en"

type Dictionary = {
  [key: string]: string | Dictionary
}

const dictionaries: Record<Locale, Dictionary> = {
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      about: "О компании",
      technologies: "Технологии",
      careers: "Карьера",
      contacts: "Контакты",
      requestQuote: "Оставить заявку",
    },
    hero: {
      tagline: "Технологии для бизнеса",
      title: "Надёжные IT-решения для вашего предприятия",
      subtitle: "Разрабатываем веб- и мобильные приложения, Telegram-ботов, консультируем по IT-стратегии и обеспечиваем инфраструктуру для компаний в России, СНГ, Азии и Европе.",
      cta: "Обсудить проект",
      ctaSecondary: "Наши услуги",
    },
    whyUs: {
      title: "Почему Forko IT",
      subtitle: "Мы фокусируемся на качестве, прозрачности и долгосрочном партнёрстве",
      sla: {
        title: "SLA-готовность",
        description: "Гарантированные сроки реагирования и устранения инцидентов по соглашению об уровне обслуживания.",
      },
      transparency: {
        title: "Прозрачная отчётность",
        description: "Регулярные отчёты о прогрессе, детальные таймшиты и полная видимость процессов.",
      },
      security: {
        title: "Security by Design",
        description: "Безопасность закладывается на этапе проектирования, а не добавляется в конце.",
      },
      enterprise: {
        title: "Enterprise-опыт",
        description: "Понимаем специфику корпоративных процессов, интеграций и требований compliance.",
      },
      quality: {
        title: "Качество кода",
        description: "Code review, автоматическое тестирование, CI/CD и документация — стандарт на всех проектах.",
      },
      support: {
        title: "Поддержка 24/7",
        description: "Техническая поддержка и сопровождение после запуска проекта.",
      },
    },
    process: {
      title: "Процесс работы",
      subtitle: "Прозрачный и предсказуемый процесс от первого контакта до сопровождения",
      steps: {
        discovery: {
          title: "Discovery",
          description: "Анализ требований, целей бизнеса и технических ограничений.",
        },
        proposal: {
          title: "Коммерческое предложение",
          description: "Детальная оценка, план работ, сроки и стоимость.",
        },
        delivery: {
          title: "Разработка",
          description: "Итеративная разработка с регулярными демонстрациями прогресса.",
        },
        qa: {
          title: "Тестирование",
          description: "Функциональное, интеграционное и нагрузочное тестирование.",
        },
        launch: {
          title: "Запуск",
          description: "Развёртывание на production-среде и миграция данных.",
        },
        support: {
          title: "Поддержка",
          description: "Сопровождение, мониторинг и развитие системы.",
        },
      },
    },
    guarantees: {
      title: "Гарантии и качество",
      subtitle: "Практики, обеспечивающие надёжность и безопасность решений",
      codeReview: {
        title: "Code Review",
        description: "Обязательная проверка кода коллегами перед слиянием в основную ветку.",
      },
      cicd: {
        title: "CI/CD",
        description: "Автоматизированная сборка, тестирование и деплой.",
      },
      testing: {
        title: "Тестирование",
        description: "Unit, интеграционные и E2E-тесты как часть процесса разработки.",
      },
      documentation: {
        title: "Документация",
        description: "Техническая документация, API-спецификации и руководства.",
      },
      security: {
        title: "Безопасность",
        description: "Практики OWASP, аудит зависимостей, шифрование данных.",
      },
      compliance: {
        title: "Соответствие стандартам",
        description: "Разработка с учётом требований ISO, GDPR и отраслевых стандартов.",
      },
    },
    industries: {
      title: "Отрасли",
      subtitle: "Опыт работы с компаниями из различных секторов экономики",
      finance: "Финансы и банки",
      retail: "Ритейл и e-commerce",
      logistics: "Логистика и транспорт",
      manufacturing: "Производство",
      services: "Услуги и сервис",
    },
    faq: {
      title: "Частые вопросы",
      q1: {
        question: "Какие гарантии вы предоставляете?",
        answer: "Мы предоставляем гарантийный период после сдачи проекта, в течение которого бесплатно исправляем выявленные дефекты. Также предлагаем договоры на техническую поддержку с SLA.",
      },
      q2: {
        question: "Как происходит оплата?",
        answer: "Работаем по договору с поэтапной оплатой. Типичная схема: аванс, промежуточные платежи по milestone, финальный платёж после сдачи.",
      },
      q3: {
        question: "Можете работать по NDA?",
        answer: "Да, подписываем NDA на этапе предпроектного обсуждения по запросу клиента.",
      },
      q4: {
        question: "Работаете ли с государственными заказчиками?",
        answer: "Да, имеем опыт работы с государственными структурами и понимаем специфику таких проектов.",
      },
      q5: {
        question: "Какой стек технологий используете?",
        answer: "Выбираем технологии под задачу клиента. Основной стек: React, Next.js, Node.js, Python, PostgreSQL, Docker, Kubernetes. Подробнее — на странице «Технологии».",
      },
    },
    services: {
      title: "Услуги",
      subtitle: "Полный спектр IT-услуг для развития вашего бизнеса",
      discuss: "Обсудить проект",
      webApps: {
        title: "Разработка веб-приложений",
        description: "Создаём сложные веб-системы: корпоративные порталы, CRM/ERP-модули, личные кабинеты, административные панели и интеграционные решения.",
        items: ["Корпоративные порталы", "Административные панели", "CRM/ERP-модули", "REST и GraphQL API", "Интеграции с внешними системами", "Микросервисная архитектура"],
      },
      mobileApps: {
        title: "Мобильная разработка",
        description: "Разрабатываем мобильные приложения для iOS и Android — нативные и кроссплатформенные решения с поддержкой в App Store и Google Play.",
        items: ["iOS-приложения (Swift)", "Android-приложения (Kotlin)", "Кроссплатформенные решения (Flutter, React Native)", "Публикация и поддержка в сторах", "Аналитика и push-уведомления", "Интеграция с backend"],
      },
      telegramBots: {
        title: "Telegram-боты",
        description: "Создаём Telegram-ботов для автоматизации бизнес-процессов: поддержка клиентов, воронки продаж, интеграции с CRM и платёжными системами.",
        items: ["Боты поддержки клиентов", "Воронки продаж", "Интеграция с CRM/ERP", "Приём платежей", "Уведомления и рассылки", "Mini Apps в Telegram"],
      },
      consulting: {
        title: "IT-консалтинг",
        description: "Помогаем выстроить IT-стратегию, провести аудит текущих систем, спроектировать архитектуру и оптимизировать процессы разработки.",
        items: ["Технический аудит", "Проектирование архитектуры", "IT-стратегия и roadmap", "Оптимизация процессов", "Due diligence", "Выбор технологий"],
      },
      infrastructure: {
        title: "IT-инфраструктура",
        description: "Развёртываем и сопровождаем инфраструктуру: облачные и on-premise решения, мониторинг, резервное копирование, безопасность и DevOps.",
        items: ["Облачная инфраструктура (AWS, GCP, Azure)", "On-premise решения", "Мониторинг и alerting", "Резервное копирование", "Безопасность и hardening", "CI/CD и DevOps"],
      },
    },
    technologies: {
      title: "Технологии",
      subtitle: "Используем проверенные технологии enterprise-уровня",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      devops: "DevOps и Инфраструктура",
      cloud: "Облачные платформы",
      data: "Базы данных",
      qa: "Тестирование",
      observability: "Мониторинг",
      architecture: {
        title: "Подход к архитектуре",
        subtitle: "Проектируем системы с учётом масштабирования, надёжности и безопасности",
        reliability: {
          title: "Надёжность",
          description: "Fault-tolerant архитектура, graceful degradation, автоматическое восстановление.",
        },
        scaling: {
          title: "Масштабирование",
          description: "Горизонтальное и вертикальное масштабирование, stateless-сервисы.",
        },
        security: {
          title: "Безопасность",
          description: "Zero-trust, шифрование, аудит доступа, защита от OWASP Top 10.",
        },
      },
    },
    about: {
      title: "О компании",
      subtitle: "Зрелая IT-компания с международным присутствием",
      mission: {
        title: "Миссия",
        description: "Помогать бизнесу достигать целей с помощью надёжных и эффективных IT-решений. Мы создаём технологии, которые работают.",
      },
      values: {
        title: "Ценности",
        items: {
          reliability: {
            title: "Надёжность",
            description: "Делаем то, что обещаем, в согласованные сроки.",
          },
          transparency: {
            title: "Прозрачность",
            description: "Открытая коммуникация и честная отчётность.",
          },
          quality: {
            title: "Качество",
            description: "Высокие стандарты кода и документации.",
          },
          partnership: {
            title: "Партнёрство",
            description: "Долгосрочные отношения с клиентами.",
          },
        },
      },
      howWeWork: {
        title: "Как мы работаем",
        description: "Используем гибкие методологии разработки с фиксированными milestone. Каждый проект имеет выделенного менеджера, прозрачную коммуникацию и регулярные отчёты о прогрессе.",
      },
      team: {
        title: "Команда",
        description: "Опытные инженеры, архитекторы и менеджеры с опытом работы в enterprise-проектах.",
      },
      legal: {
        title: "Юридические лица",
        subtitle: "Международное присутствие с офисами в двух юрисдикциях",
        details: "Реквизиты",
        hongKong: {
          title: "Гонконг",
          company: "Forko Trade Limited",
          address: "Unit G15, Tin Hau Apple SOLO, 14 Kings Road, Tin Hau, Hong Kong",
        },
        kyrgyzstan: {
          title: "Кыргызстан",
          company: "ООО «Forko IT Technologies»",
          legalAddress: "Юридический адрес",
          address: "Кыргызская Республика, г. Бишкек, Октябрьский район, ул. Куйлючук, дом 145, почтовый индекс 070016",
        },
        phone: "Телефон",
        email: "Email",
        bank: "Банк",
        bankName: "ПАО «Банк ВТБ», филиал «Центральный»",
        bankAddress: "Адрес банка",
        bankAddressValue: "Пресненская наб., 12, Москва, 123112, Россия",
        bic: "БИК",
        corrAccount: "Корр. счёт",
        rubAccount: "Счёт RUB",
      },
    },
    careers: {
      title: "Карьера",
      subtitle: "Присоединяйтесь к команде профессионалов",
      intro: "Мы всегда рады сильным специалистам",
      introDescription: "Если вы разделяете наши ценности и хотите работать над интересными проектами — отправьте нам своё резюме. Мы рассмотрим вашу кандидатуру и свяжемся при появлении подходящей позиции.",
      benefits: {
        title: "Что мы предлагаем",
        items: {
          growth: {
            title: "Профессиональный рост",
            description: "Сложные проекты, обучение, конференции.",
          },
          culture: {
            title: "Инженерная культура",
            description: "Code review, документация, best practices.",
          },
          remote: {
            title: "Гибкий формат",
            description: "Удалённая работа или гибридный формат.",
          },
          equipment: {
            title: "Оборудование",
            description: "Предоставляем всё необходимое для работы.",
          },
        },
      },
      openings: {
        title: "Открытые вакансии",
        description: "Текущие позиции в нашей команде",
      },
      form: {
        title: "Отправить резюме",
        name: "Имя",
        email: "Email",
        role: "Желаемая позиция",
        message: "Сопроводительное письмо",
        file: "Прикрепить резюме",
        fileHint: "PDF, DOC до 5 MB",
        submit: "Отправить",
        success: "Спасибо! Ваша заявка отправлена.",
      },
    },
    contacts: {
      title: "Контакты",
      subtitle: "Свяжитесь с нами для обсуждения вашего проекта",
      form: {
        title: "Оставить заявку",
        name: "Имя",
        company: "Компания",
        email: "Email",
        phone: "Телефон",
        phoneOptional: "опционально",
        service: "Интересующая услуга",
        servicePlaceholder: "Выберите услугу",
        budget: "Бюджет",
        budgetPlaceholder: "Выберите диапазон",
        budgetOptions: {
          small: "До 500 000 ₽",
          medium: "500 000 — 2 000 000 ₽",
          large: "2 000 000 — 5 000 000 ₽",
          enterprise: "Более 5 000 000 ₽",
        },
        message: "Сообщение",
        messagePlaceholder: "Опишите ваш проект или задачу",
        consent: "Даю согласие на обработку персональных данных",
        submit: "Отправить заявку",
        success: "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      },
      offices: {
        title: "Наши офисы",
      },
    },
    footer: {
      description: "Надёжные IT-решения для бизнеса",
      navigation: "Навигация",
      contacts: "Контакты",
      legal: "Правовая информация",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      rights: "Все права защищены.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      technologies: "Technologies",
      careers: "Careers",
      contacts: "Contacts",
      requestQuote: "Request a Quote",
    },
    hero: {
      tagline: "Technology for Business",
      title: "Reliable IT Solutions for Your Enterprise",
      subtitle: "We develop web and mobile applications, Telegram bots, provide IT consulting, and deploy infrastructure for companies in Russia, CIS, Asia, and Europe.",
      cta: "Discuss Your Project",
      ctaSecondary: "Our Services",
    },
    whyUs: {
      title: "Why Forko IT",
      subtitle: "We focus on quality, transparency, and long-term partnership",
      sla: {
        title: "SLA-Ready",
        description: "Guaranteed response and resolution times under service level agreements.",
      },
      transparency: {
        title: "Transparent Reporting",
        description: "Regular progress reports, detailed timesheets, and full process visibility.",
      },
      security: {
        title: "Security by Design",
        description: "Security is built in from the design phase, not added as an afterthought.",
      },
      enterprise: {
        title: "Enterprise Experience",
        description: "We understand corporate processes, integrations, and compliance requirements.",
      },
      quality: {
        title: "Code Quality",
        description: "Code review, automated testing, CI/CD, and documentation are standard on all projects.",
      },
      support: {
        title: "24/7 Support",
        description: "Technical support and maintenance after project launch.",
      },
    },
    process: {
      title: "Our Process",
      subtitle: "Transparent and predictable process from first contact to ongoing support",
      steps: {
        discovery: {
          title: "Discovery",
          description: "Analysis of requirements, business goals, and technical constraints.",
        },
        proposal: {
          title: "Proposal",
          description: "Detailed estimate, project plan, timeline, and pricing.",
        },
        delivery: {
          title: "Development",
          description: "Iterative development with regular progress demonstrations.",
        },
        qa: {
          title: "Testing",
          description: "Functional, integration, and load testing.",
        },
        launch: {
          title: "Launch",
          description: "Production deployment and data migration.",
        },
        support: {
          title: "Support",
          description: "Maintenance, monitoring, and system evolution.",
        },
      },
    },
    guarantees: {
      title: "Guarantees & Quality",
      subtitle: "Practices ensuring reliable and secure solutions",
      codeReview: {
        title: "Code Review",
        description: "Mandatory peer code review before merging to the main branch.",
      },
      cicd: {
        title: "CI/CD",
        description: "Automated build, testing, and deployment pipelines.",
      },
      testing: {
        title: "Testing",
        description: "Unit, integration, and E2E tests as part of the development process.",
      },
      documentation: {
        title: "Documentation",
        description: "Technical documentation, API specifications, and guides.",
      },
      security: {
        title: "Security",
        description: "OWASP practices, dependency audits, data encryption.",
      },
      compliance: {
        title: "Standards Compliance",
        description: "Development aligned with ISO, GDPR, and industry standards.",
      },
    },
    industries: {
      title: "Industries",
      subtitle: "Experience working with companies across various sectors",
      finance: "Finance & Banking",
      retail: "Retail & E-commerce",
      logistics: "Logistics & Transportation",
      manufacturing: "Manufacturing",
      services: "Services",
    },
    faq: {
      title: "FAQ",
      q1: {
        question: "What guarantees do you provide?",
        answer: "We provide a warranty period after project delivery during which we fix identified defects free of charge. We also offer technical support contracts with SLA.",
      },
      q2: {
        question: "How does payment work?",
        answer: "We work under contract with milestone-based payments. Typical scheme: advance payment, interim payments per milestone, final payment upon delivery.",
      },
      q3: {
        question: "Can you work under NDA?",
        answer: "Yes, we sign NDAs at the pre-project discussion stage upon client request.",
      },
      q4: {
        question: "Do you work with government clients?",
        answer: "Yes, we have experience working with government entities and understand the specifics of such projects.",
      },
      q5: {
        question: "What technology stack do you use?",
        answer: "We choose technologies based on client needs. Core stack: React, Next.js, Node.js, Python, PostgreSQL, Docker, Kubernetes. See more on the Technologies page.",
      },
    },
    services: {
      title: "Services",
      subtitle: "Full range of IT services to grow your business",
      discuss: "Discuss Project",
      webApps: {
        title: "Web Application Development",
        description: "We build complex web systems: enterprise portals, CRM/ERP modules, dashboards, admin panels, and integration solutions.",
        items: ["Enterprise portals", "Admin panels", "CRM/ERP modules", "REST and GraphQL APIs", "Third-party integrations", "Microservices architecture"],
      },
      mobileApps: {
        title: "Mobile Development",
        description: "We develop mobile applications for iOS and Android — native and cross-platform solutions with App Store and Google Play support.",
        items: ["iOS applications (Swift)", "Android applications (Kotlin)", "Cross-platform (Flutter, React Native)", "Store publishing and support", "Analytics and push notifications", "Backend integration"],
      },
      telegramBots: {
        title: "Telegram Bots",
        description: "We create Telegram bots for business process automation: customer support, sales funnels, CRM and payment system integrations.",
        items: ["Customer support bots", "Sales funnels", "CRM/ERP integration", "Payment processing", "Notifications and broadcasts", "Telegram Mini Apps"],
      },
      consulting: {
        title: "IT Consulting",
        description: "We help build IT strategy, audit current systems, design architecture, and optimize development processes.",
        items: ["Technical audit", "Architecture design", "IT strategy and roadmap", "Process optimization", "Due diligence", "Technology selection"],
      },
      infrastructure: {
        title: "IT Infrastructure",
        description: "We deploy and maintain infrastructure: cloud and on-premise solutions, monitoring, backup, security, and DevOps.",
        items: ["Cloud infrastructure (AWS, GCP, Azure)", "On-premise solutions", "Monitoring and alerting", "Backup solutions", "Security and hardening", "CI/CD and DevOps"],
      },
    },
    technologies: {
      title: "Technologies",
      subtitle: "We use proven enterprise-grade technologies",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      devops: "DevOps & Infrastructure",
      cloud: "Cloud Platforms",
      data: "Databases",
      qa: "Testing",
      observability: "Monitoring",
      architecture: {
        title: "Architecture Approach",
        subtitle: "We design systems for scalability, reliability, and security",
        reliability: {
          title: "Reliability",
          description: "Fault-tolerant architecture, graceful degradation, automatic recovery.",
        },
        scaling: {
          title: "Scalability",
          description: "Horizontal and vertical scaling, stateless services.",
        },
        security: {
          title: "Security",
          description: "Zero-trust, encryption, access auditing, OWASP Top 10 protection.",
        },
      },
    },
    about: {
      title: "About Us",
      subtitle: "Mature IT company with international presence",
      mission: {
        title: "Mission",
        description: "To help businesses achieve their goals through reliable and effective IT solutions. We build technology that works.",
      },
      values: {
        title: "Values",
        items: {
          reliability: {
            title: "Reliability",
            description: "We deliver what we promise, on time.",
          },
          transparency: {
            title: "Transparency",
            description: "Open communication and honest reporting.",
          },
          quality: {
            title: "Quality",
            description: "High standards for code and documentation.",
          },
          partnership: {
            title: "Partnership",
            description: "Long-term relationships with clients.",
          },
        },
      },
      howWeWork: {
        title: "How We Work",
        description: "We use agile methodologies with fixed milestones. Each project has a dedicated manager, transparent communication, and regular progress reports.",
      },
      team: {
        title: "Team",
        description: "Experienced engineers, architects, and managers with enterprise project experience.",
      },
      legal: {
        title: "Legal Entities",
        subtitle: "International presence with offices in two jurisdictions",
        details: "Details",
        hongKong: {
          title: "Hong Kong",
          company: "Forko Trade Limited",
          address: "Unit G15, Tin Hau Apple SOLO, 14 Kings Road, Tin Hau, Hong Kong",
        },
        kyrgyzstan: {
          title: "Kyrgyzstan",
          company: "Forko IT Technologies LLC",
          legalAddress: "Legal address",
          address: "Kyrgyz Republic, Bishkek city, Oktyabrsky district, Kuilyuchuk street, house 145, postal code 070016",
        },
        phone: "Phone",
        email: "Email",
        bank: "Bank",
        bankName: "VTB Bank (PJSC), Branch 'Centralny'",
        bankAddress: "Bank address",
        bankAddressValue: "Presnenskaya nab., 12, Moscow, 123112, Russia",
        bic: "BIC",
        corrAccount: "Corr. account",
        rubAccount: "RUB account",
      },
    },
    careers: {
      title: "Careers",
      subtitle: "Join our team of professionals",
      intro: "We're always looking for talented people",
      introDescription: "If you share our values and want to work on interesting projects — send us your resume. We'll review your application and contact you when a suitable position becomes available.",
      benefits: {
        title: "What We Offer",
        items: {
          growth: {
            title: "Professional Growth",
            description: "Challenging projects, training, conferences.",
          },
          culture: {
            title: "Engineering Culture",
            description: "Code review, documentation, best practices.",
          },
          remote: {
            title: "Flexible Format",
            description: "Remote or hybrid work options.",
          },
          equipment: {
            title: "Equipment",
            description: "We provide everything you need to work.",
          },
        },
      },
      openings: {
        title: "Open Positions",
        description: "Current openings in our team",
      },
      form: {
        title: "Submit Resume",
        name: "Name",
        email: "Email",
        role: "Desired Position",
        message: "Cover Letter",
        file: "Attach Resume",
        fileHint: "PDF, DOC up to 5 MB",
        submit: "Submit",
        success: "Thank you! Your application has been sent.",
      },
    },
    contacts: {
      title: "Contacts",
      subtitle: "Get in touch to discuss your project",
      form: {
        title: "Request a Quote",
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        phoneOptional: "optional",
        service: "Service of Interest",
        servicePlaceholder: "Select a service",
        budget: "Budget",
        budgetPlaceholder: "Select a range",
        budgetOptions: {
          small: "Up to $5,000",
          medium: "$5,000 — $20,000",
          large: "$20,000 — $50,000",
          enterprise: "More than $50,000",
        },
        message: "Message",
        messagePlaceholder: "Describe your project or task",
        consent: "I consent to the processing of personal data",
        submit: "Submit Request",
        success: "Thank you! Your request has been sent. We will contact you shortly.",
      },
      offices: {
        title: "Our Offices",
      },
    },
    footer: {
      description: "Reliable IT solutions for business",
      navigation: "Navigation",
      contacts: "Contacts",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      rights: "All rights reserved.",
    },
  },
}

function getNestedValue(obj: Dictionary, path: string): string {
  const keys = path.split(".")
  let result: unknown = obj
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Dictionary)[key]
    } else {
      return path
    }
  }
  return typeof result === "string" ? result : path
}

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru")

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale
    }
  }, [])

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(dictionaries[locale], key)
    },
    [locale]
  )

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(dictionaries[locale], key)
      if (Array.isArray(value)) {
        return value
      }
      return []
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tArray }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
