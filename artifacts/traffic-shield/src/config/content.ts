export const content = {
  en: {
    nav: {
      problem: "Problem",
      solution: "Solution",
      technology: "Technology",
      performance: "Performance",
      architecture: "Architecture",
      useCases: "Use Cases",
      dashboard: "Dashboard",
      whyUs: "Why Us",
      roadmap: "Roadmap",
      contact: "Contact",
      cta: "Request Demo",
    },
    hero: {
      kicker: "Next-Generation Dynamic Encryption",
      title: "Encryption as fluid as the data it protects.",
      subtitle:
        "Traffic Shield AI turns the physical world into cryptographic material — replacing static keys with live, ephemeral entropy for the modern enterprise.",
      ctaPrimary: "Request a Private Demo",
      ctaSecondary: "Read the Technical Brief",
      tag: "NDA-backed pilots available",
    },
    problem: {
      eyebrow: "01 — The Security Crisis",
      title: "Static encryption is a permanent vulnerability.",
      lead: "Every long-lived key is a long-lived liability. The industry's foundations were built for a world that no longer exists.",
      cards: [
        {
          title: "The Static Key Problem",
          body: "Traditional encryption relies on keys that remain unchanged for months or years. Once compromised, every byte of historical and future traffic is exposed.",
        },
        {
          title: "Single Point of Failure",
          body: "Centralised key storage creates a single high-value target. One breach, one insider, one misconfiguration — and the entire enterprise unwinds.",
        },
        {
          title: "Catastrophic Impact",
          body: "For banks, telcos and governments, a key compromise is no longer a technical incident. It is a total loss of public trust and regulatory standing.",
        },
      ],
      banner: "STATIC ENCRYPTION = PERMANENT VULNERABILITY",
    },
    solution: {
      eyebrow: "02 — Introducing Traffic Shield AI",
      title: "A world where encryption evolves in real time.",
      lead: "We move security off the disk and into the moment — keys that live for milliseconds, derived from inputs that can never be replayed.",
      pillars: [
        {
          title: "Fluid Security",
          body: "Move beyond static secrets to a system that evolves continuously with your environment, not against it.",
        },
        {
          title: "Hybrid Entropy",
          body: "Combine live environmental signals with hardware-grade randomness to forge keys that nothing — and no one — can predict.",
        },
        {
          title: "Zero-Trust by Design",
          body: "No central vault. Every session, every file and every key is independently secured and independently expired.",
        },
      ],
    },
    technology: {
      eyebrow: "03 — The Power of Live Entropy",
      title: "Cryptography drawn from the physical world.",
      lead: "By turning real-world signals into key material, we eliminate the entire class of vulnerabilities that begin with stored secrets.",
      items: [
        {
          title: "Live Inputs",
          body: "Real-time environmental data — including camera frames, sensor noise and system metrics — serves as the source of randomness.",
        },
        {
          title: "Ephemeral Keys",
          body: "Unique keys are derived on the fly and expire almost immediately after use. Nothing is written. Nothing persists.",
        },
        {
          title: "Unpredictable",
          body: "Because the source is transient, keys cannot be pre-calculated, exfiltrated from storage, or reverse-engineered after the fact.",
        },
      ],
      pullquote:
        "By turning the physical world into cryptographic material, we eliminate the vulnerability of static secrets.",
    },
    performance: {
      eyebrow: "04 — Unmatched Security Performance",
      title: "Built for enterprise scale, engineered for the next decade.",
      stats: [
        {
          value: 6000000,
          suffix: "+",
          label: "Keys per minute",
          sub: "Enterprise-grade key generation throughput",
        },
        {
          value: 256,
          suffix: "-bit",
          label: "Effective symmetric key size",
          sub: "AES-grade strength on every session",
        },
        {
          value: 0,
          suffix: "",
          prefix: "Quantum-",
          label: "Quantum-ready",
          sub: "Resilient against Grover's algorithm",
          custom: "Quantum-Ready",
        },
      ],
      footnote:
        "Source: Traffic Shield AI Technical Brief v1.0 — representative key generation rates.",
    },
    architecture: {
      eyebrow: "05 — Enterprise-Grade Architecture",
      title: "Drop-in security for the world's most regulated networks.",
      groups: [
        {
          title: "Hybrid Security Model",
          items: [
            "Symmetric speed combined with hardware-backed protection.",
            "First-class HSM support for sovereign key custody.",
            "Zero-persistence policy for raw entropy and ephemeral keys.",
          ],
        },
        {
          title: "Seamless API Integration",
          items: [
            "Secure RESTful APIs designed for rapid enterprise deployment.",
            "Standardised hooks for existing dashboards and applications.",
            "Mutual TLS (mTLS) for all internal and external traffic.",
          ],
        },
        {
          title: "Flexible Deployment",
          items: [
            "On-premises deployment for maximum data sovereignty.",
            "Secure-enclave support — Intel SGX and AWS Nitro Enclaves.",
            "Isolated appliance mode for critical national infrastructure.",
          ],
        },
      ],
    },
    useCases: {
      eyebrow: "06 — Target Markets",
      title: "Where every millisecond of trust matters.",
      lead: "Traffic Shield AI is engineered for the institutions whose failure is unacceptable.",
      sectors: [
        {
          name: "Banking & Finance",
          points: [
            "High-frequency transaction security",
            "Protection of sensitive customer PII",
            "Secure inter-bank communication",
          ],
        },
        {
          name: "Telecommunications",
          points: [
            "Real-time session encryption at line rate",
            "Global network backbone integrity",
            "5G infrastructure protection",
          ],
        },
        {
          name: "Government & Defense",
          points: [
            "Critical infrastructure protection",
            "Classified state-secret encryption",
            "Secure field communications",
          ],
        },
      ],
    },
    dashboard: {
      eyebrow: "07 — Central Command Interface",
      title: "Security at your fingertips.",
      lead: "A single pane of glass for every key, every policy and every session across your global estate.",
      tiles: [
        {
          title: "Real-Time Monitoring",
          body: "Live key rates and session health across every region of your network.",
        },
        {
          title: "API Management",
          body: "Provision, rotate and retire secure API keys in seconds — with a full audit trail.",
        },
        {
          title: "Centralized Control",
          body: "Set global policies, manage RBAC and review audit logs from one console.",
        },
      ],
      mock: {
        keysLabel: "KEYS / MIN",
        sessionsLabel: "ACTIVE SESSIONS",
        latencyLabel: "AVG LATENCY",
        regionsLabel: "REGIONS ONLINE",
        liveLabel: "LIVE",
        statusOk: "All systems nominal",
        recent: "Recent key rotations",
        events: [
          { region: "Frankfurt", action: "Rotation complete", ts: "00:00:04" },
          { region: "Singapore", action: "Session sealed", ts: "00:00:11" },
          { region: "Riyadh", action: "Entropy refreshed", ts: "00:00:19" },
          { region: "Virginia", action: "Rotation complete", ts: "00:00:27" },
          { region: "São Paulo", action: "Session sealed", ts: "00:00:33" },
        ],
      },
    },
    whyUs: {
      eyebrow: "08 — Why Invest",
      title: "A defensible position in a market that just woke up.",
      cards: [
        {
          title: "Proprietary IP",
          body: "Our entropy-mixing core transforms real-world environmental data into cryptographic strength — a moat that cannot be cloned in a quarter.",
        },
        {
          title: "Market Readiness",
          body: "As quantum computing accelerates, demand for quantum-ready security is exploding. Traffic Shield AI is positioned to lead a multi-billion-dollar transition.",
        },
        {
          title: "Scalable SaaS",
          body: "We are transitioning to a recurring revenue model — high-margin, API-first integrations across global enterprise infrastructure.",
        },
      ],
    },
    roadmap: {
      eyebrow: "09 — The Road Ahead",
      title: "From foundation to global standard.",
      stages: [
        {
          phase: "Current",
          title: "Foundation",
          body: "Technical core complete. Hybrid entropy engine validated. Dashboard and API infrastructure in final development.",
        },
        {
          phase: "Next 6 — 12 Months",
          title: "Market Entry",
          body: "Pilot launches with strategic banking and telecom partners. Expansion of the secure API ecosystem.",
        },
        {
          phase: "Vision",
          title: "Global Standard",
          body: "Becoming the industry standard for dynamic data protection. Transitioning to a global SaaS security model.",
        },
      ],
    },
    contact: {
      eyebrow: "10 — Secure the Future Together",
      title: "Redefine the standards of dynamic data protection.",
      lead: "Request a private demo or technical deep-dive. NDA-backed pilots available for qualifying institutions.",
      ctaPrimary: "Request a Private Demo",
      contactLabel: "Direct line",
      websiteLabel: "Web",
    },
    demoModal: {
      title: "Request a private demo",
      subtitle:
        "Tell us a little about your environment. Our team responds within one business day.",
      fields: {
        name: "Full name",
        email: "Work email",
        company: "Organisation",
        message: "What would you like to discuss?",
      },
      placeholders: {
        name: "Jane Doe",
        email: "jane@bank.com",
        company: "Acme Bank",
        message:
          "We are evaluating dynamic encryption for our payments infrastructure...",
      },
      submit: "Send request",
      submitting: "Sending…",
      success: {
        title: "Request received",
        body: "Thank you. A member of our security team will reach out within one business day to schedule your private session.",
        cta: "Done",
      },
      error: {
        title: "Something went wrong",
        body: "Please try again, or write to us directly at contact@trafficshield.ai.",
      },
      validation: {
        name: "Please enter your full name.",
        email: "Please enter a valid work email.",
        company: "Please enter your organisation.",
        message: "Please add a short message (at least 10 characters).",
      },
    },
    footer: {
      tagline: "Dynamic encryption for the modern enterprise.",
      copyright: `© ${new Date().getFullYear()} Traffic Shield AI. All rights reserved.`,
      links: {
        linkedin: "LinkedIn",
        twitter: "X / Twitter",
        email: "Email",
      },
    },
    misc: {
      langToggle: "العربية",
      langCode: "EN",
    },
  },
  ar: {
    nav: {
      problem: "المشكلة",
      solution: "الحل",
      technology: "التقنية",
      performance: "الأداء",
      architecture: "البنية",
      useCases: "حالات الاستخدام",
      dashboard: "لوحة التحكم",
      whyUs: "لماذا نحن",
      roadmap: "خارطة الطريق",
      contact: "تواصل",
      cta: "اطلب عرضًا توضيحيًا",
    },
    hero: {
      kicker: "تشفير ديناميكي من الجيل الجديد",
      title: "تشفيرٌ بسيولة البيانات التي يحميها.",
      subtitle:
        "Traffic Shield AI تحوّل العالم الحقيقي إلى مادة تشفيرية، وتستبدل المفاتيح الثابتة بمفاتيح حيّة قصيرة العمر مصممة لمؤسسات اليوم.",
      ctaPrimary: "اطلب عرضًا توضيحيًا خاصًا",
      ctaSecondary: "اقرأ الموجز التقني",
      tag: "برامج تجريبية مدعومة باتفاقيات سرية",
    },
    problem: {
      eyebrow: "01 — أزمة الأمن السيبراني",
      title: "التشفير الثابت ثغرةٌ دائمة.",
      lead: "كل مفتاح طويل العمر هو خطرٌ طويل العمر. أُسس هذا القطاع بُنيت لعالمٍ لم يعد قائمًا.",
      cards: [
        {
          title: "إشكالية المفاتيح الثابتة",
          body: "يعتمد التشفير التقليدي على مفاتيح لا تتغيّر لأشهر أو سنوات. وفور اختراق أحدها، تنكشف كل البيانات السابقة واللاحقة.",
        },
        {
          title: "نقطة فشل واحدة",
          body: "تُنشئ خوادم المفاتيح المركزية هدفًا واحدًا عالي القيمة. اختراقٌ واحد، أو خطأ تكوينٍ واحد، يكفي لانهيار المؤسسة بأكملها.",
        },
        {
          title: "أثرٌ كارثي",
          body: "لدى البنوك ومشغلي الاتصالات والحكومات، لم يعد اختراق المفاتيح حادثًا تقنيًا، بل فقدانٌ كامل للثقة العامة وللامتثال التنظيمي.",
        },
      ],
      banner: "التشفير الثابت = ثغرة دائمة",
    },
    solution: {
      eyebrow: "02 — تعرّف على Traffic Shield AI",
      title: "تشفيرٌ يتطوّر معك في الزمن الحقيقي.",
      lead: "ننقل الأمن من القرص إلى اللحظة — مفاتيح تعيش لأجزاء من الثانية، مشتقة من مدخلاتٍ لا يمكن إعادة إنتاجها.",
      pillars: [
        {
          title: "أمنٌ سائل",
          body: "نتجاوز فكرة الأسرار الثابتة إلى منظومةٍ تتطوّر مع بيئتك بدلًا من العمل ضدّها.",
        },
        {
          title: "إنتروبيا هجينة",
          body: "نمزج إشارات بيئية حيّة مع عشوائيةٍ بمستوى الأجهزة لإنتاج مفاتيح لا يمكن لأحدٍ توقّعها.",
        },
        {
          title: "ثقةٌ صفرية بالتصميم",
          body: "لا خزانة مركزية. كل جلسةٍ وكل ملفٍ وكل مفتاحٍ يُؤمَّن وينتهي صلاحيته باستقلالية تامة.",
        },
      ],
    },
    technology: {
      eyebrow: "03 — قوة الإنتروبيا الحيّة",
      title: "تشفيرٌ مستمدٌّ من العالم المادي.",
      lead: "بتحويل الإشارات الواقعية إلى مادةٍ للمفاتيح، نلغي صنفًا كاملًا من الثغرات التي تبدأ بأسرارٍ مخزّنة.",
      items: [
        {
          title: "مدخلاتٌ حيّة",
          body: "بيانات بيئية في الزمن الحقيقي — لقطات الكاميرا، ضجيج المستشعرات، ومقاييس الأنظمة — تُشكّل مصدر العشوائية.",
        },
        {
          title: "مفاتيح قصيرة العمر",
          body: "تُشتقّ مفاتيح فريدة لحظيًا وتنتهي صلاحيتها فور الاستخدام. لا شيء يُكتب. لا شيء يبقى.",
        },
        {
          title: "غير قابلٍ للتنبؤ",
          body: "لأن المصدر عابر، لا يمكن حساب المفاتيح مسبقًا، ولا سرقتها من مخزن، ولا عكس هندستها لاحقًا.",
        },
      ],
      pullquote:
        "بتحويل العالم المادي إلى مادةٍ تشفيرية، نُلغي ثغرة الأسرار الثابتة.",
    },
    performance: {
      eyebrow: "04 — أداء أمنيٌّ لا يُضاهى",
      title: "مصمَّمٌ لاتساع المؤسسات، مهندَسٌ للعقد القادم.",
      stats: [
        {
          value: 6000000,
          suffix: "+",
          label: "مفتاح في الدقيقة",
          sub: "إنتاجية مفاتيح بمستوى المؤسسات",
        },
        {
          value: 256,
          suffix: "-بت",
          label: "حجم المفتاح المتماثل الفعّال",
          sub: "قوّةٌ بمعيار AES في كل جلسة",
        },
        {
          value: 0,
          suffix: "",
          prefix: "",
          label: "جاهزٌ كميًا",
          sub: "صامدٌ أمام خوارزمية Grover",
          custom: "Quantum-Ready",
        },
      ],
      footnote:
        "المصدر: الموجز التقني لـ Traffic Shield AI الإصدار 1.0 — معدلات تمثيلية لتوليد المفاتيح.",
    },
    architecture: {
      eyebrow: "05 — بنيةٌ بمستوى المؤسسات",
      title: "أمنٌ جاهزٌ للدمج في أكثر الشبكات تنظيمًا في العالم.",
      groups: [
        {
          title: "نموذج أمنٍ هجين",
          items: [
            "سرعة التشفير المتماثل مع حماية مدعومة بالعتاد.",
            "دعمٌ من الدرجة الأولى لوحدات HSM لحفظ المفاتيح السيادية.",
            "سياسة عدم الاحتفاظ بالإنتروبيا الخام أو المفاتيح المؤقتة.",
          ],
        },
        {
          title: "تكاملٌ سلس عبر الواجهات",
          items: [
            "واجهات RESTful آمنة مصممة للنشر السريع في المؤسسات.",
            "نقاط ربطٍ معيارية مع لوحات التحكم والتطبيقات القائمة.",
            "TLS متبادلة (mTLS) لكل حركة مرورٍ داخلية وخارجية.",
          ],
        },
        {
          title: "نشرٌ مرن",
          items: [
            "نشرٌ داخل المؤسسة لأقصى سيادةٍ على البيانات.",
            "دعم البيئات الآمنة — Intel SGX و AWS Nitro Enclaves.",
            "وضع الجهاز المعزول للبنى التحتية الحرجة.",
          ],
        },
      ],
    },
    useCases: {
      eyebrow: "06 — الأسواق المستهدفة",
      title: "حيث كل ميلي ثانية من الثقة لها قيمتها.",
      lead: "Traffic Shield AI مصممٌ للمؤسسات التي لا يمكن قبول إخفاقها.",
      sectors: [
        {
          name: "البنوك والتمويل",
          points: [
            "أمن المعاملات عالية التردد",
            "حماية بيانات العملاء الحساسة",
            "اتصالاتٌ آمنة بين البنوك",
          ],
        },
        {
          name: "الاتصالات",
          points: [
            "تشفير الجلسات في الزمن الحقيقي وبسرعة الخط",
            "سلامة العمود الفقري للشبكة العالمية",
            "حماية بنية الجيل الخامس",
          ],
        },
        {
          name: "الحكومة والدفاع",
          points: [
            "حماية البنية التحتية الحرجة",
            "تشفير الأسرار السيادية",
            "اتصالاتٌ ميدانية آمنة",
          ],
        },
      ],
    },
    dashboard: {
      eyebrow: "07 — مركز القيادة",
      title: "الأمن في متناول يدك.",
      lead: "زجاجٌ واحد يضمّ كل مفتاحٍ وكل سياسةٍ وكل جلسةٍ في منظومتك العالمية.",
      tiles: [
        {
          title: "مراقبةٌ آنية",
          body: "معدلات المفاتيح وصحّة الجلسات في كل منطقةٍ من شبكتك مباشرةً.",
        },
        {
          title: "إدارة الواجهات",
          body: "إصدار المفاتيح وتدويرها وإيقافها في ثوانٍ، مع سجلٍّ كاملٍ للتدقيق.",
        },
        {
          title: "تحكمٌ مركزي",
          body: "ضع السياسات العالمية، أدِر الأدوار، وراجع سجلات التدقيق من واجهةٍ واحدة.",
        },
      ],
      mock: {
        keysLabel: "مفتاح/دقيقة",
        sessionsLabel: "جلسات نشطة",
        latencyLabel: "متوسط الاستجابة",
        regionsLabel: "مناطق متصلة",
        liveLabel: "مباشر",
        statusOk: "جميع الأنظمة طبيعية",
        recent: "آخر تدويرات المفاتيح",
        events: [
          { region: "فرانكفورت", action: "اكتمل التدوير", ts: "00:00:04" },
          { region: "سنغافورة", action: "أُغلقت الجلسة", ts: "00:00:11" },
          { region: "الرياض", action: "تجديد الإنتروبيا", ts: "00:00:19" },
          { region: "فيرجينيا", action: "اكتمل التدوير", ts: "00:00:27" },
          { region: "ساو باولو", action: "أُغلقت الجلسة", ts: "00:00:33" },
        ],
      },
    },
    whyUs: {
      eyebrow: "08 — لماذا الاستثمار",
      title: "موقعٌ تنافسيٌّ يصعب اختراقه في سوقٍ بدأ للتو.",
      cards: [
        {
          title: "ملكيةٌ فكرية حصرية",
          body: "محرّك خلط الإنتروبيا لدينا يحوّل البيانات البيئية إلى قوّةٍ تشفيرية — حصنٌ لا يُستنسخ في ربعٍ مالي.",
        },
        {
          title: "جاهزية السوق",
          body: "مع تسارع الحوسبة الكمية، يتفجر الطلب على الأمن الجاهز كميًا. Traffic Shield AI مهيأٌ لقيادة هذا التحول بمليارات الدولارات.",
        },
        {
          title: "نموذج SaaS قابلٌ للتوسع",
          body: "ننتقل إلى نموذج إيراداتٍ متكررة، عالي الهامش، عبر تكاملاتٍ تعتمد على الواجهات في كافة البنى التحتية للمؤسسات حول العالم.",
        },
      ],
    },
    roadmap: {
      eyebrow: "09 — الطريق أمامنا",
      title: "من الأساس إلى المعيار العالمي.",
      stages: [
        {
          phase: "الحالي",
          title: "الأساس",
          body: "اكتمل النواة التقنية. تم التحقق من محرّك الإنتروبيا الهجين. لوحة التحكم وبنية الواجهات في مرحلة التطوير النهائية.",
        },
        {
          phase: "خلال 6 — 12 شهرًا",
          title: "دخول السوق",
          body: "إطلاق برامج تجريبية مع شركاء استراتيجيين في القطاعين المصرفي والاتصالات. توسيع منظومة الواجهات الآمنة.",
        },
        {
          phase: "الرؤية",
          title: "المعيار العالمي",
          body: "أن نصبح المعيار في حماية البيانات الديناميكية، والانتقال إلى نموذج SaaS أمنيٍّ على مستوى العالم.",
        },
      ],
    },
    contact: {
      eyebrow: "10 — لنُؤمّن المستقبل معًا",
      title: "أعِد تعريف معايير حماية البيانات الديناميكية.",
      lead: "اطلب عرضًا خاصًا أو جلسةً تقنية متعمّقة. برامج تجريبية مدعومة باتفاقيات سرّية للمؤسسات المؤهَّلة.",
      ctaPrimary: "اطلب عرضًا خاصًا",
      contactLabel: "اتصال مباشر",
      websiteLabel: "الموقع",
    },
    demoModal: {
      title: "اطلب عرضًا توضيحيًا خاصًا",
      subtitle:
        "أخبرنا قليلًا عن بيئتك. يردّ فريقنا خلال يوم عملٍ واحد.",
      fields: {
        name: "الاسم الكامل",
        email: "البريد المهني",
        company: "المؤسسة",
        message: "ما الذي تودّ مناقشته؟",
      },
      placeholders: {
        name: "محمد العبدالله",
        email: "name@bank.com",
        company: "بنك المثال",
        message: "نقيّم التشفير الديناميكي لبنية المدفوعات لدينا...",
      },
      submit: "إرسال الطلب",
      submitting: "جاري الإرسال…",
      success: {
        title: "تم استلام طلبك",
        body: "شكرًا لك. سيتواصل معك أحد أعضاء فريق الأمن خلال يوم عملٍ واحد لجدولة جلستك الخاصة.",
        cta: "تم",
      },
      error: {
        title: "حدث خطأٌ ما",
        body: "يرجى المحاولة مرة أخرى، أو مراسلتنا مباشرةً عبر contact@trafficshield.ai.",
      },
      validation: {
        name: "يرجى إدخال اسمك الكامل.",
        email: "يرجى إدخال بريدٍ مهنيٍّ صالح.",
        company: "يرجى إدخال اسم مؤسستك.",
        message: "يرجى إضافة رسالة قصيرة (10 أحرف على الأقل).",
      },
    },
    footer: {
      tagline: "تشفيرٌ ديناميكي لمؤسسات اليوم.",
      copyright: `© ${new Date().getFullYear()} Traffic Shield AI. جميع الحقوق محفوظة.`,
      links: {
        linkedin: "لينكدإن",
        twitter: "إكس / تويتر",
        email: "البريد",
      },
    },
    misc: {
      langToggle: "EN",
      langCode: "ع",
    },
  },
} as const;

export type Locale = keyof typeof content;
export type ContentShape = (typeof content)["en"];
