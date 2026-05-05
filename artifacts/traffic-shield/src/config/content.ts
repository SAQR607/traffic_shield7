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
    whitepaper: {
      eyebrow: "Healthcare Security Brief",
      title:
        "Beyond Passwords: The Era of Biometric Zero-Trust in Healthcare",
      subtitle:
        "Why healthcare security needs a move beyond password-based access.",
      overview:
        "The healthcare sector sits at the intersection of the most sensitive personal data and the most aggressive threat actors. Legacy password and device-based authentication are no longer adequate. This brief outlines a conceptual framework combining AES-256 for high-speed local encryption with RSA-2048 for secure key wrapping — anchored by continuous, local biometric verification and governed by zero-trust principles.",
      concepts: [
        {
          title: "Why Healthcare Is a High-Value Target",
          body: "Medical records command a significant premium in illicit markets. Ransomware groups and state-sponsored actors routinely prioritise healthcare institutions because their operational continuity pressure makes rapid capitulation more likely. A single breach can expose patient histories, imaging data, and insurance information for millions of individuals.",
        },
        {
          title: "The Limits of Password-Based Access",
          body: "Static credentials are inherently vulnerable: they can be phished, leaked in third-party breaches, shared informally among colleagues, or captured through keylogging. Device-based authentication adds a second factor, but a stolen or compromised device removes that assurance. A continuous, local biometric layer closes this gap without requiring centralised storage of identity data.",
        },
        {
          title: "A Hybrid Encryption Architecture",
          body: "AES-256 delivers the throughput necessary to encrypt large DICOM imaging files or bulk patient records in near-real time on the local node. RSA-2048 wraps the per-file symmetric key so that only the verified recipient can unwrap and use it. Together, these two well-established standards provide both performance and rigorous access control.",
        },
        {
          title: "Zero-Trust and Compliance Alignment",
          body: "The zero-trust model demands that no user, device, or network segment is trusted by default, regardless of perimeter position. This aligns closely with HIPAA requirements for minimum necessary access and with the Saudi PDPL's provisions on sensitive personal data. Every access event is independently verified; no implicit trust is carried from one session to the next.",
        },
      ],
      threatModel: {
        title: "Threat Model Summary",
        items: [
          {
            threat: "Laptop Theft",
            mitigation:
              "Local AES-256 encryption renders data unreadable without a successful biometric re-verification on the originating node. A stolen device yields no usable plaintext.",
          },
          {
            threat: "Internal Network Compromise",
            mitigation:
              "Data in transit is already encrypted. An adversary on the network captures only ciphertext bound to a specific recipient's public key.",
          },
          {
            threat: "Malicious Insider",
            mitigation:
              "The kill-switch authority allows administrators to instantly revoke key access for any identity, expiring all active sessions associated with that user across all nodes.",
          },
        ],
      },
      killswitch: {
        title: "Kill-Switch Concept",
        body: "A centralised kill-switch authority holds no medical data — only the authority to invalidate key-wrapping certificates. On activation, any file whose symmetric key was wrapped with the revoked certificate becomes permanently inaccessible, even if an attacker already holds the ciphertext.",
      },
    },
    architectureDiagram: {
      eyebrow: "System Architecture",
      title: "Secure by Design: Our Zero-Trust Architecture",
      caption:
        "A high-level view of how each node operates independently while being governed by a central verification authority.",
      note: "Biometric processing — including face recognition and liveness detection — occurs entirely on the local device. No biometric template or raw biometric data is transmitted to, or stored on, any central server.",
      nodes: [
        {
          label: "Client Node",
          desc: "Local AES-256 encryption · Local Face-ID AI Agent · No plaintext leaves the device",
        },
        {
          label: "Zero-Trust Tunnel",
          desc: "Mutual TLS · Ephemeral session keys · Forward secrecy by design",
        },
        {
          label: "Key Verification & Kill-Switch Authority",
          desc: "Verifies RSA-wrapped key permissions · Issues session grants · Kill-switch activation",
        },
        {
          label: "Central Auth Server",
          desc: "Identity verification · Public key directory · No medical data stored",
        },
      ],
    },
    realUseCase: {
      eyebrow: "Applied Security",
      title: "Securing High-Volume Medical Collaboration",
      lead: "A neurologist at Hospital A needs to share a large MRI or DICOM imaging file with a data scientist at Hospital B for AI-assisted analysis. This is a routine but high-risk operation: the file is large, the network is shared, and the recipient's identity must be guaranteed.",
      steps: [
        {
          step: "01",
          title: "Local Encryption",
          body: "The neurologist's workstation generates a unique AES-256 session key and encrypts the file locally. The plaintext never leaves the originating node.",
        },
        {
          step: "02",
          title: "Key Wrapping",
          body: "The session key is wrapped using the data scientist's RSA-2048 public key, obtained from the verified institutional directory. Only the intended recipient can unwrap it.",
        },
        {
          step: "03",
          title: "Safe Transmission",
          body: "The encrypted file and wrapped key travel over standard hospital or internet infrastructure. An interceptor captures only opaque ciphertext — useless without the private key.",
        },
        {
          step: "04",
          title: "Biometric Gate",
          body: "Before decryption, the data scientist's local node requires a successful biometric verification. A stolen account alone is insufficient; physical presence and a verified biometric match are mandatory.",
        },
        {
          step: "05",
          title: "Secure Access",
          body: "Only after verification does the local agent unwrap the key and decrypt the file in place. The result is strong, end-to-end protection that survives interception at every point.",
        },
      ],
    },
    benchmarks: {
      eyebrow: "Performance Positioning",
      title: "Engineered for Speed: Performance Benchmarks",
      disclaimer:
        "Figures shown are illustrative conceptual benchmarks based on well-established cryptographic literature. They are provided for relative comparison and educational positioning, not as certified laboratory results.",
      metrics: [
        {
          category: "1 GB File Encryption Speed",
          items: [
            {
              label: "Traffic Shield Hybrid (AES-256, local)",
              value: "< 2 seconds",
              highlight: true,
            },
            {
              label: "Pure asymmetric encryption on large data (RSA only)",
              value: "Impractical — minutes to hours",
              highlight: false,
            },
          ],
        },
        {
          category: "Ciphertext Size Overhead",
          items: [
            {
              label: "AES-256 block cipher on bulk data",
              value: "≈ 0% overhead",
              highlight: true,
            },
            {
              label: "Asymmetric padding on large payloads",
              value: "Significant expansion per block",
              highlight: false,
            },
          ],
        },
        {
          category: "Biometric Verification Latency",
          items: [
            {
              label: "Local on-device Face-ID check",
              value: "< 300 ms (conceptual)",
              highlight: true,
            },
            {
              label: "Server round-trip authentication",
              value: "600 ms – 2 s depending on network",
              highlight: false,
            },
          ],
        },
      ],
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
    whitepaper: {
      eyebrow: "موجز أمن الرعاية الصحية",
      title:
        "ما وراء كلمات المرور: عصر الثقة المعدومة البيومترية في الرعاية الصحية",
      subtitle:
        "لماذا تحتاج أمن الرعاية الصحية إلى تجاوز المصادقة المعتمدة على كلمات المرور.",
      overview:
        "يقع قطاع الرعاية الصحية عند تقاطع أكثر البيانات الشخصية حساسيةً وأشد الجهات التهديدية عدوانيةً. لم تعد المصادقة التقليدية بكلمات المرور أو الأجهزة وحدها كافية. يستعرض هذا الموجز إطارًا مفاهيميًا يجمع AES-256 للتشفير المحلي عالي السرعة مع RSA-2048 لتغليف المفاتيح، مُعزَّزًا بتحقق بيومتري محلي مستمر ومحكومًا بمبادئ الثقة المعدومة.",
      concepts: [
        {
          title: "لماذا الرعاية الصحية هدفٌ عالي القيمة",
          body: "تُباع السجلات الطبية بأسعار مرتفعة في الأسواق غير المشروعة. تُعطي مجموعات برامج الفدية والجهات الحكومية المتطورة الأولوية لمؤسسات الرعاية الصحية لأن ضغط استمرارية العمليات يجعل الاستسلام السريع أكثر احتمالًا. خرقٌ واحد قد يكشف تاريخ ملايين المرضى وبيانات التصوير الطبي ومعلومات التأمين.",
        },
        {
          title: "حدود المصادقة بكلمة المرور",
          body: "بيانات الاعتماد الثابتة قابلة للاختراق بطبيعتها: يمكن سرقتها بالتصيد، أو تسريبها في خروقات جهات خارجية، أو مشاركتها غير الرسمية بين الزملاء، أو التقاطها ببرمجيات التسجيل. المصادقة بالجهاز تضيف عاملًا ثانيًا، لكن جهازًا مسروقًا أو مخترقًا يُسقط هذه الضمانة. طبقة بيومترية محلية مستمرة تُغلق هذه الثغرة دون الحاجة إلى تخزين بيانات الهوية مركزيًا.",
        },
        {
          title: "بنية تشفير هجينة",
          body: "يوفر AES-256 الأداء اللازم لتشفير ملفات DICOM الضخمة أو سجلات المرضى المجمعة شبه الآني على العقدة المحلية. يُغلّف RSA-2048 مفتاح التشفير المتماثل الخاص بكل ملف بحيث لا يستطيع فكّه إلا المستلم المتحقق منه، الذي يُوزَّع مفتاحه العام عبر دليل موثوق. معًا، يوفر هذان المعياران الراسخان الأداء والتحكم الصارم في الوصول.",
        },
        {
          title: "الثقة المعدومة والامتثال التنظيمي",
          body: "يفترض نموذج الثقة المعدومة عدم الثقة بأي مستخدم أو جهاز أو شريحة شبكة افتراضيًا بصرف النظر عن موقعه. يتوافق هذا مع متطلبات HIPAA للوصول الضروري الحدّ الأدنى ومع أحكام نظام PDPL السعودي بشأن البيانات الشخصية الحساسة. كل حدثٍ وصول يُتحقق منه بشكل مستقل؛ لا ثقة ضمنية تُنقل من جلسةٍ إلى أخرى.",
        },
      ],
      threatModel: {
        title: "ملخص نموذج التهديد",
        items: [
          {
            threat: "سرقة الحاسوب المحمول",
            mitigation:
              "يجعل تشفير AES-256 المحلي البيانات غير قابلة للقراءة دون إعادة تحقق بيومتري ناجحة على العقدة الأصلية. الجهاز المسروق لا يُنتج أي نصٍّ عادي قابل للاستخدام.",
          },
          {
            threat: "اختراق الشبكة الداخلية",
            mitigation:
              "البيانات أثناء النقل مشفّرة مسبقًا. المهاجم على الشبكة لا يلتقط إلا نصًا مشفرًا مرتبطًا بمفتاح المستلم العام المحدد.",
          },
          {
            threat: "تهديد داخلي خبيث",
            mitigation:
              "تُتيح سلطة مفتاح الإيقاف للمسؤولين إلغاء الوصول لأي هوية فورًا، مما يُنهي جميع الجلسات النشطة المرتبطة بذلك المستخدم عبر جميع العقد.",
          },
        ],
      },
      killswitch: {
        title: "مفهوم مفتاح الإيقاف الطارئ",
        body: "تحتفظ سلطة مفتاح الإيقاف المركزية ببيانات طبية صفرية — فقط صلاحية إبطال شهادات تغليف المفاتيح. عند التفعيل، يُصبح أي ملفٍ تمّ تغليف مفتاحه بالشهادة الملغاة غير قابلٍ للوصول بشكل دائم، حتى لو كان المهاجم يحتفظ بالنص المشفّر.",
      },
    },
    architectureDiagram: {
      eyebrow: "معمارية النظام",
      title: "آمنة بالتصميم: معمارية الثقة المعدومة الخاصة بنا",
      caption:
        "نظرة عامة على مستوى عالٍ توضّح كيف تعمل كل عقدة باستقلالية تحت إشراف سلطة تحقق مركزية.",
      note: "تتم معالجة البيانات البيومترية — بما في ذلك التعرف على الوجه واكتشاف الحيوية — بالكامل على الجهاز المحلي. لا تُنقل أي بيانات بيومترية ولا تُخزَّن على أي خادم مركزي.",
      nodes: [
        {
          label: "العقدة المحلية",
          desc: "تشفير AES-256 محلي · عميل الذكاء الاصطناعي للتعرف على الوجه · لا يغادر الجهاز أي نصٍّ عادي",
        },
        {
          label: "النفق المعدوم الثقة",
          desc: "TLS متبادل · مفاتيح جلسة مؤقتة · سرية إعادة التوجيه بالتصميم",
        },
        {
          label: "سلطة التحقق من المفاتيح ومفتاح الإيقاف",
          desc: "تتحقق من صلاحيات المفتاح الملفوف · تُصدر تفويضات الجلسة · تفعيل مفتاح الإيقاف الطارئ",
        },
        {
          label: "خادم المصادقة المركزي",
          desc: "التحقق من الهوية · دليل المفاتيح العامة · لا بيانات طبية مخزّنة",
        },
      ],
    },
    realUseCase: {
      eyebrow: "أمنٌ مُطبَّق",
      title: "تأمين التعاون الطبي للبيانات الضخمة",
      lead: "طبيب أعصاب في مستشفى (أ) يحتاج إلى إرسال ملف تصوير بالرنين المغناطيسي أو صورة DICOM ضخمة إلى عالم بيانات في مستشفى (ب) للتحليل بالذكاء الاصطناعي. هذه عملية اعتيادية لكنها عالية الخطورة: الملف ضخم، والشبكة مشتركة، وهوية المستلم يجب أن تكون مضمونة.",
      steps: [
        {
          step: "01",
          title: "التشفير المحلي",
          body: "تُولّد محطة الطبيب مفتاح جلسة AES-256 فريدًا وتشفّر الملف محليًا. النص العادي لا يغادر العقدة الأصلية أبدًا.",
        },
        {
          step: "02",
          title: "تغليف المفتاح",
          body: "يُغلَّف مفتاح الجلسة باستخدام المفتاح العام RSA-2048 لعالم البيانات، المأخوذ من الدليل المؤسسي الموثوق. المستلم المقصود وحده يستطيع فكّ التغليف.",
        },
        {
          step: "03",
          title: "النقل الآمن",
          body: "ينتقل الملف المشفّر والمفتاح الملفوف عبر البنية التحتية المعتادة للمستشفى أو الإنترنت. يلتقط المعترض نصًا مشفرًا مبهمًا لا قيمة له دون المفتاح الخاص.",
        },
        {
          step: "04",
          title: "البوابة البيومترية",
          body: "قبل فك التشفير، تشترط العقدة المحلية لعالم البيانات اجتياز التحقق البيومتري بنجاح. حساب مسروق وحده غير كافٍ؛ الحضور الجسدي والمطابقة البيومترية المؤكدة إلزامية.",
        },
        {
          step: "05",
          title: "الوصول الآمن",
          body: "بعد التحقق فقط يفكّ العميل المحلي تغليف المفتاح ويفك تشفير الملف في مكانه. الحصيلة حماية شاملة من طرف إلى طرف تصمد أمام الاعتراض في كل نقطة.",
        },
      ],
    },
    benchmarks: {
      eyebrow: "تموضع الأداء",
      title: "مصمم للسرعة: مقاييس الأداء",
      disclaimer:
        "الأرقام المعروضة هي مقاييس مفاهيمية توضيحية مستندة إلى الأدبيات التشفيرية الراسخة. تُقدَّم للمقارنة النسبية والتثقيف المهني، وليست نتائج مختبرية معتمدة.",
      metrics: [
        {
          category: "سرعة تشفير ملف حجمه 1 جيجابايت",
          items: [
            {
              label: "Traffic Shield الهجين (AES-256، محلي)",
              value: "أقل من ثانيتين",
              highlight: true,
            },
            {
              label: "تشفير غير متماثل بحت (RSA فقط، بيانات كبيرة)",
              value: "غير عملي — دقائق إلى ساعات",
              highlight: false,
            },
          ],
        },
        {
          category: "حجم التوسع في النص المشفّر",
          items: [
            {
              label: "نهج AES-256 بالكتل المتماثلة على البيانات الضخمة",
              value: "≈ 0% زيادة",
              highlight: true,
            },
            {
              label: "مخططات الحشو غير المتماثل على الأحمال الكبيرة",
              value: "توسع ملحوظ لكل كتلة",
              highlight: false,
            },
          ],
        },
        {
          category: "زمن استجابة التحقق البيومتري",
          items: [
            {
              label: "فحص Face-ID محلي على الجهاز",
              value: "أقل من 300 مللي ثانية (مفاهيمي)",
              highlight: true,
            },
            {
              label: "مصادقة عبر رحلة ذهاب وإياب للخادم",
              value: "600 مللي ثانية – 2 ثانية حسب الشبكة",
              highlight: false,
            },
          ],
        },
      ],
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
