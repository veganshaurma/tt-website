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
      tagline: "Цифровые решения для роста бизнеса",
      title: "Профессиональная разработка для вашей компании",
      subtitle: "Создаём веб-платформы, мобильные сервисы и чат-ботов для Telegram. Помогаем выстроить IT-стратегию и настроить техническую инфраструктуру в России, СНГ, Азии и Европе.",
      cta: "Обсудить проект",
      ctaSecondary: "Наши услуги",
    },
    whyUs: {
      title: "Почему Dewata Global Group",
      subtitle: "Ориентируемся на качество, открытую коммуникацию и стабильное сотрудничество",
      sla: {
        title: "Контроль сроков",
        description: "Соблюдаем договорённости по времени реагирования и решения проблем согласно SLA.",
      },
      transparency: {
        title: "Открытая коммуникация",
        description: "Подробная отчётность по затраченному времени, понятные отчёты о ходе работ.",
      },
      security: {
        title: "Безопасность с начала",
        description: "Интегрируем защиту на стадии архитектуры, а не как дополнение к готовому продукту.",
      },
      enterprise: {
        title: "Корпоративная экспертиза",
        description: "Знаем особенности работы крупных компаний: процессы, интеграции и нормативные требования.",
      },
      quality: {
        title: "Высокие стандарты кода",
        description: "Ревью кода, авто-тесты, непрерывная интеграция и полная документация — наша норма.",
      },
      support: {
        title: "Круглосуточная поддержка",
        description: "Техническое обслуживание и помощь после запуска вашего проекта в продакшн.",
      },
    },
    process: {
      title: "Этапы сотрудничества",
      subtitle: "Понятный и структурированный путь от идеи до эксплуатации системы",
      steps: {
        discovery: {
          title: "Исследование",
          description: "Изучаем потребности, бизнес-цели и технические возможности вашего проекта.",
        },
        proposal: {
          title: "Предложение",
          description: "Подробная смета, дорожная карта, временные рамки и бюджет.",
        },
        delivery: {
          title: "Реализация",
          description: "Поэтапная разработка с демонстрацией результатов на каждом шаге.",
        },
        qa: {
          title: "Проверка качества",
          description: "Тестируем функционал, интеграции и производительность под нагрузкой.",
        },
        launch: {
          title: "Внедрение",
          description: "Публикация в продакшн и перенос необходимых данных.",
        },
        support: {
          title: "Сопровождение",
          description: "Обслуживание, наблюдение за системой и её улучшение.",
        },
      },
    },
    guarantees: {
      title: "Наши принципы",
      subtitle: "Подходы, гарантирующие качество и защищённость ваших систем",
      codeReview: {
        title: "Ревью кода",
        description: "Каждое изменение проверяется другим разработчиком до публикации в основной код.",
      },
      cicd: {
        title: "Непрерывная интеграция",
        description: "Автоматическая сборка проекта, тесты и публикация на сервер.",
      },
      testing: {
        title: "Многоуровневое тестирование",
        description: "Юнит-тесты, проверка интеграций и сквозное тестирование на каждом этапе.",
      },
      documentation: {
        title: "Полная документация",
        description: "Технические описания, спецификации API и инструкции пользователя.",
      },
      security: {
        title: "Защита данных",
        description: "Следуем рекомендациям OWASP, проверяем библиотеки, используем шифрование.",
      },
      compliance: {
        title: "Нормативное соответствие",
        description: "Учитываем стандарты ISO, GDPR и специфические требования индустрии.",
      },
    },
    industries: {
      title: "Сферы деятельности",
      subtitle: "Реализовали проекты для бизнеса в разных областях",
      finance: "Финансы и банковский сектор",
      retail: "Розничная торговля и онлайн-коммерция",
      logistics: "Логистика и перевозки",
      manufacturing: "Промышленность",
      services: "Сервисные компании",
    },
    faq: {
      title: "Вопросы и ответы",
      q1: {
        question: "Что входит в гарантийное обслуживание?",
        answer: "После завершения разработки действует гарантия, по которой мы безвозмездно устраняем найденные ошибки. Дополнительно можем заключить контракт на техподдержку с зафиксированными SLA.",
      },
      q2: {
        question: "Какая схема расчётов?",
        answer: "Заключаем официальный договор с оплатой по этапам. Обычно это предоплата, платежи за ключевые вехи проекта и окончательный расчёт при приёмке.",
      },
      q3: {
        question: "Готовы подписать соглашение о конфиденциальности?",
        answer: "Конечно, заключаем NDA до начала обсуждения деталей проекта, если это требуется заказчику.",
      },
      q4: {
        question: "Работаете с госструктурами?",
        answer: "Да, у нас есть опыт реализации проектов для государственного сектора с учётом их особенностей.",
      },
      q5: {
        question: "Какие технологии применяете?",
        answer: "Подбираем инструменты под конкретную задачу. Чаще всего используем: React, Next.js, Node.js, Python, PostgreSQL, Docker, Kubernetes. Полный список — в разделе «Технологии».",
      },
    },
    services: {
      title: "Услуги",
      subtitle: "Комплексные IT-сервисы для масштабирования вашего бизнеса",
      discuss: "Обсудить проект",
      webApps: {
        title: "Веб-платформы",
        description: "Реализуем комплексные веб-системы: внутренние порталы предприятий, модули управления, пользовательские кабинеты, панели администрирования и системные интеграции.",
        items: ["Внутренние порталы компаний", "Панели управления", "Системы CRM и ERP", "REST и GraphQL API", "Подключение внешних сервисов", "Микросервисы"],
      },
      mobileApps: {
        title: "Мобильные приложения",
        description: "Создаём приложения для iOS и Android — как нативные, так и кросс-платформенные, с публикацией в магазинах App Store и Google Play.",
        items: ["Приложения для iOS (Swift)", "Приложения для Android (Kotlin)", "Кросс-платформа (Flutter, React Native)", "Размещение в сторах", "Аналитика и пуш-нотификации", "Связь с серверной частью"],
      },
      telegramBots: {
        title: "Чат-боты для Telegram",
        description: "Разрабатываем ботов для автоматизации: клиентский сервис, продажи, связь с CRM и приём онлайн-платежей.",
        items: ["Боты техподдержки", "Автоматизация продаж", "Связь с CRM/ERP", "Онлайн-платежи", "Рассылки и оповещения", "Мини-приложения в Telegram"],
      },
      consulting: {
        title: "Консалтинг",
        description: "Помогаем построить стратегию развития IT, анализируем существующие решения, планируем архитектуру и улучшаем процессы команды.",
        items: ["Аудит систем", "Планирование архитектуры", "Дорожная карта развития IT", "Улучшение процессов", "Технический Due diligence", "Подбор технологий"],
      },
      infrastructure: {
        title: "Инфраструктура",
        description: "Настраиваем и обслуживаем IT-инфраструктуру: облака и собственные серверы, мониторинг, бэкапы, защиту и DevOps-процессы.",
        items: ["Облачные платформы (AWS, GCP, Azure)", "Собственные серверы", "Мониторинг и алерты", "Бэкап данных", "Защита и усиление безопасности", "CI/CD и DevOps"],
      },
    },
    technologies: {
      title: "Технологии",
      subtitle: "Применяем надёжные инструменты корпоративного класса",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      devops: "DevOps и Инфраструктура",
      cloud: "Облачные платформы",
      data: "Базы данных",
      qa: "Тестирование",
      observability: "Мониторинг",
      architecture: {
        title: "Принципы архитектуры",
        subtitle: "Строим системы с прицелом на рост, стабильность и защиту",
        reliability: {
          title: "Стабильность",
          description: "Отказоустойчивая архитектура, плавная деградация функций, самовосстановление.",
        },
        scaling: {
          title: "Рост нагрузки",
          description: "Масштабирование по горизонтали и вертикали, сервисы без состояния.",
        },
        security: {
          title: "Защита",
          description: "Принцип нулевого доверия, шифрование данных, контроль доступа, защита от OWASP Top 10.",
        },
      },
    },
    about: {
      title: "О компании",
      subtitle: "Опытная технологическая компания с глобальной экспертизой",
      mission: {
        title: "Наша миссия",
        description: "Содействовать бизнесу в реализации планов через качественные IT-продукты. Мы разрабатываем решения, приносящие результат.",
      },
      values: {
        title: "Наши ценности",
        items: {
          reliability: {
            title: "Обязательность",
            description: "Выполняем обещанное в установленные сроки.",
          },
          transparency: {
            title: "Открытость",
            description: "Честные отчёты и понятная коммуникация.",
          },
          quality: {
            title: "Стандарты качества",
            description: "Строгие требования к коду и документации.",
          },
          partnership: {
            title: "Партнёрский подход",
            description: "Ориентация на продолжительное взаимодействие.",
          },
        },
      },
      howWeWork: {
        title: "Наш подход",
        description: "Применяем agile-методологии с контрольными точками. За каждым проектом закреплён персональный менеджер, обеспечивающий открытую связь и систематическую отчётность.",
      },
      team: {
        title: "Наша команда",
        description: "Специалисты с практикой реализации корпоративных проектов: разработчики, архитекторы и проектные менеджеры.",
      },
      legal: {
        title: "Юридическое лицо",
        subtitle: "Зарегистрированная компания в Индонезии",
        details: "Реквизиты",
        bali: {
          title: "Индонезия",
          company: "PT Dewata Global Group",
          address: "Jl. Dewi Saraswati No.22, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
          director: "Директор",
          directorName: "Mr. Bambang Irianto",
        },
        phone: "Телефон",
        email: "Email",
        bank: "Банк",
        bankName: "PT. BANK MANDIRI (PERSERO) Tbk",
        bankBranch: "Отделение банка",
        bankBranchValue: "KCP Kerobokan",
        bankAddress: "Адрес банка",
        bankAddressValue: "Jalan Raya Kerobokan No. 104 Kuta Utara 80361",
        bankClearingCode: "Код банка",
        bankClearingCodeValue: "008-3292",
        swiftCode: "SWIFT код",
        swiftCodeValue: "BMRIIDJA",
        accountName: "Владелец счета",
        usdAccount: "Счёт USD",
        usdAccountValue: "1750002363876",
        eurAccount: "Счёт EUR",
        eurAccountValue: "1750002363868",
      },
    },
    careers: {
      title: "Карьера",
      subtitle: "Станьте частью команды экспертов",
      intro: "Ищем талантливых специалистов",
      introDescription: "Если близки наши принципы и интересны сложные задачи — присылайте резюме. Изучим ваш профиль и выйдем на связь, когда откроется релевантная вакансия.",
      benefits: {
        title: "Наши предложения",
        items: {
          growth: {
            title: "Развитие навыков",
            description: "Сложные задачи, курсы, профильные мероприятия.",
          },
          culture: {
            title: "Культура разработки",
            description: "Ревью кода, полная документация, лучшие практики.",
          },
          remote: {
            title: "Формат работы",
            description: "Удалённо или из офиса — на ваш выбор.",
          },
          equipment: {
            title: "Техника",
            description: "Обеспечиваем необходимым оборудованием.",
          },
        },
      },
      openings: {
        title: "Вакансии",
        description: "Актуальные открытые позиции",
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
      subtitle: "Напишите нам, чтобы обсудить ваш проект",
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
        consent: "Даю согласие на обработку персональных данных в соответствии с",
        consentLink: "Политикой конфиденциальности",
        submit: "Отправить заявку",
        success: "Благодарим! Заявка получена. Скоро с вами свяжемся.",
      },
      offices: {
        title: "Наш офис",
      },
    },
    footer: {
      description: "Профессиональные IT-решения для бизнеса",
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
      tagline: "Digital Solutions for Business Growth",
      title: "Professional Development for Your Company",
      subtitle: "We build web platforms, mobile services, and Telegram chatbots. Help establish IT strategy and set up technical infrastructure in Russia, CIS, Asia, and Europe.",
      cta: "Discuss Your Project",
      ctaSecondary: "Our Services",
    },
    whyUs: {
      title: "Why Dewata Global Group",
      subtitle: "We prioritize quality, open communication, and stable collaboration",
      sla: {
        title: "Time Control",
        description: "We meet agreed response and resolution times according to SLA.",
      },
      transparency: {
        title: "Open Communication",
        description: "Detailed time reports and clear progress updates.",
      },
      security: {
        title: "Security from Start",
        description: "We integrate protection at the architecture stage, not as an add-on to finished product.",
      },
      enterprise: {
        title: "Corporate Expertise",
        description: "We know the specifics of large companies: processes, integrations, and regulatory requirements.",
      },
      quality: {
        title: "High Code Standards",
        description: "Code reviews, automated tests, continuous integration, and complete documentation are our norm.",
      },
      support: {
        title: "Round-the-Clock Support",
        description: "Technical maintenance and assistance after your project goes live.",
      },
    },
    process: {
      title: "Collaboration Stages",
      subtitle: "Clear and structured path from concept to system operation",
      steps: {
        discovery: {
          title: "Research",
          description: "We study needs, business objectives, and technical capabilities of your project.",
        },
        proposal: {
          title: "Proposal",
          description: "Detailed estimate, roadmap, timeframes, and budget.",
        },
        delivery: {
          title: "Implementation",
          description: "Phased development with results demonstration at each step.",
        },
        qa: {
          title: "Quality Check",
          description: "We test functionality, integrations, and performance under load.",
        },
        launch: {
          title: "Deployment",
          description: "Production release and necessary data migration.",
        },
        support: {
          title: "Maintenance",
          description: "Service, system monitoring, and improvements.",
        },
      },
    },
    guarantees: {
      title: "Our Principles",
      subtitle: "Approaches guaranteeing quality and security of your systems",
      codeReview: {
        title: "Code Review",
        description: "Every change is checked by another developer before publication to the main code.",
      },
      cicd: {
        title: "Continuous Integration",
        description: "Automatic project build, tests, and server publication.",
      },
      testing: {
        title: "Multi-level Testing",
        description: "Unit tests, integration checks, and end-to-end testing at each stage.",
      },
      documentation: {
        title: "Complete Documentation",
        description: "Technical descriptions, API specifications, and user instructions.",
      },
      security: {
        title: "Data Protection",
        description: "We follow OWASP recommendations, check libraries, use encryption.",
      },
      compliance: {
        title: "Regulatory Compliance",
        description: "We consider ISO, GDPR standards and specific industry requirements.",
      },
    },
    industries: {
      title: "Business Sectors",
      subtitle: "We've delivered projects for businesses in different domains",
      finance: "Finance & Banking Sector",
      retail: "Retail and Online Commerce",
      logistics: "Logistics & Transportation",
      manufacturing: "Manufacturing",
      services: "Service Companies",
    },
    faq: {
      title: "Questions & Answers",
      q1: {
        question: "What's included in warranty service?",
        answer: "After development completion, warranty is in effect, under which we eliminate found errors free of charge. Additionally, we can sign a tech support contract with fixed SLA.",
      },
      q2: {
        question: "What's the payment scheme?",
        answer: "We sign official contract with milestone-based payments. Usually it's advance payment, payments for key project milestones, and final settlement upon acceptance.",
      },
      q3: {
        question: "Ready to sign confidentiality agreement?",
        answer: "Of course, we sign NDA before starting project details discussion, if required by the client.",
      },
      q4: {
        question: "Do you work with government agencies?",
        answer: "Yes, we have experience implementing projects for the government sector considering their specifics.",
      },
      q5: {
        question: "What technologies do you use?",
        answer: "We select tools for the specific task. Most often we use: React, Next.js, Node.js, Python, PostgreSQL, Docker, Kubernetes. Full list is in the Technologies section.",
      },
    },
    services: {
      title: "Services",
      subtitle: "Comprehensive IT services for scaling your business",
      discuss: "Discuss Project",
      webApps: {
        title: "Web Platforms",
        description: "We deliver comprehensive web systems: internal enterprise portals, management modules, user accounts, admin panels, and system integrations.",
        items: ["Corporate internal portals", "Management panels", "CRM and ERP systems", "REST and GraphQL APIs", "External service connections", "Microservices"],
      },
      mobileApps: {
        title: "Mobile Applications",
        description: "We create applications for iOS and Android — both native and cross-platform, with publication in App Store and Google Play stores.",
        items: ["iOS apps (Swift)", "Android apps (Kotlin)", "Cross-platform (Flutter, React Native)", "Store placement", "Analytics and push notifications", "Server-side integration"],
      },
      telegramBots: {
        title: "Telegram Chatbots",
        description: "We develop bots for automation: customer service, sales, CRM connections, and online payments.",
        items: ["Support bots", "Sales automation", "CRM/ERP connections", "Online payments", "Broadcasts and notifications", "Telegram Mini Apps"],
      },
      consulting: {
        title: "Consulting",
        description: "We help build IT development strategy, analyze existing solutions, plan architecture, and improve team processes.",
        items: ["System audit", "Architecture planning", "IT development roadmap", "Process improvement", "Technical due diligence", "Technology selection"],
      },
      infrastructure: {
        title: "Infrastructure",
        description: "We configure and maintain IT infrastructure: clouds and dedicated servers, monitoring, backups, protection, and DevOps processes.",
        items: ["Cloud platforms (AWS, GCP, Azure)", "Dedicated servers", "Monitoring and alerts", "Data backup", "Protection and security hardening", "CI/CD and DevOps"],
      },
    },
    technologies: {
      title: "Technologies",
      subtitle: "We use reliable enterprise-grade tools",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      devops: "DevOps & Infrastructure",
      cloud: "Cloud Platforms",
      data: "Databases",
      qa: "Testing",
      observability: "Monitoring",
      architecture: {
        title: "Architecture Principles",
        subtitle: "We build systems focused on growth, stability, and protection",
        reliability: {
          title: "Stability",
          description: "Fault-tolerant architecture, graceful function degradation, self-recovery.",
        },
        scaling: {
          title: "Load Growth",
          description: "Horizontal and vertical scaling, stateless services.",
        },
        security: {
          title: "Protection",
          description: "Zero-trust principle, data encryption, access control, OWASP Top 10 protection.",
        },
      },
    },
    about: {
      title: "About Company",
      subtitle: "Experienced technology company with global expertise",
      mission: {
        title: "Our Mission",
        description: "To help businesses realize their plans through quality IT products. We develop solutions that deliver results.",
      },
      values: {
        title: "Our Values",
        items: {
          reliability: {
            title: "Commitment",
            description: "We deliver what was promised on agreed timelines.",
          },
          transparency: {
            title: "Openness",
            description: "Honest reports and clear communication.",
          },
          quality: {
            title: "Quality Standards",
            description: "Strict requirements for code and documentation.",
          },
          partnership: {
            title: "Partnership Approach",
            description: "Focus on long-term collaboration.",
          },
        },
      },
      howWeWork: {
        title: "Our Approach",
        description: "We apply agile methodologies with control points. Each project has a dedicated manager ensuring open communication and systematic reporting.",
      },
      team: {
        title: "Our Team",
        description: "Specialists with experience implementing corporate projects: developers, architects, and project managers.",
      },
      legal: {
        title: "Legal Entity",
        subtitle: "Registered company in Indonesia",
        details: "Details",
        bali: {
          title: "Indonesia",
          company: "PT Dewata Global Group",
          address: "Jl. Dewi Saraswati No.22, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
          director: "Director",
          directorName: "Mr. Bambang Irianto",
        },
        phone: "Phone",
        email: "Email",
        bank: "Bank",
        bankName: "PT. BANK MANDIRI (PERSERO) Tbk",
        bankBranch: "Bank Branch",
        bankBranchValue: "KCP Kerobokan",
        bankAddress: "Bank address",
        bankAddressValue: "Jalan Raya Kerobokan No. 104 Kuta Utara 80361",
        bankClearingCode: "Bank Clearing Code",
        bankClearingCodeValue: "008-3292",
        swiftCode: "SWIFT code",
        swiftCodeValue: "BMRIIDJA",
        accountName: "Account name",
        usdAccount: "USD account",
        usdAccountValue: "1750002363876",
        eurAccount: "EUR account",
        eurAccountValue: "1750002363868",
      },
    },
    careers: {
      title: "Careers",
      subtitle: "Become part of expert team",
      intro: "Looking for talented specialists",
      introDescription: "If our principles resonate with you and you're interested in complex challenges — send your resume. We'll review your profile and reach out when a relevant position opens.",
      benefits: {
        title: "Our Offers",
        items: {
          growth: {
            title: "Skill Development",
            description: "Complex tasks, courses, specialized events.",
          },
          culture: {
            title: "Development Culture",
            description: "Code review, complete documentation, best practices.",
          },
          remote: {
            title: "Work Format",
            description: "Remote or from office — your choice.",
          },
          equipment: {
            title: "Equipment",
            description: "We provide necessary equipment.",
          },
        },
      },
      openings: {
        title: "Vacancies",
        description: "Current open positions",
      },
      form: {
        title: "Send Resume",
        name: "Name",
        email: "Email",
        role: "Desired Position",
        message: "Cover Letter",
        file: "Attach Resume",
        fileHint: "PDF, DOC up to 5 MB",
        submit: "Send",
        success: "Thank you! Your application has been sent.",
      },
    },
    contacts: {
      title: "Contacts",
      subtitle: "Write to us to discuss your project",
      form: {
        title: "Submit Request",
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
        consent: "I consent to the processing of personal data in accordance with the",
        consentLink: "Privacy Policy",
        submit: "Send Request",
        success: "Thank you! Request received. We will contact you soon.",
      },
      offices: {
        title: "Our Office",
      },
    },
    footer: {
      description: "Professional IT solutions for business",
      navigation: "Navigation",
      contacts: "Contacts",
      legal: "Legal Information",
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
  const [locale, setLocaleState] = useState<Locale>("en")

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
