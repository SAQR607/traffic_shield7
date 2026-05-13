/**
 * ─────────────────────────────────────────────────────────────────────────────
 * FOUNDING TEAM DATA — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * HOW TO MAINTAIN THIS FILE
 * ──────────────────────────
 * • Names / roles / bios → edit the fields below directly.
 * • Photos               → replace the file inside public/team/ with the same
 *                          filename listed in the `image` field, then redeploy.
 * • LinkedIn URLs        → update the `linkedin` field for each member.
 *
 * PHOTO GUIDELINES
 * ─────────────────
 * • Store images in:  artifacts/traffic-shield/public/team/
 * • Recommended size: 400 × 400 px, square crop, JPEG or WebP.
 * • Keep filenames lowercase with hyphens, matching the `image` field below.
 *   e.g.  public/team/abdulrahman-heiba.jpg
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type TeamMember = {
  id: string;
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  bio: { en: string; ar: string };
  /** Path relative to the site root. Files live in public/team/ */
  image: string;
  /** Full LinkedIn profile URL — opens in a new tab */
  linkedin: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "abdulrahman-heiba",
    name: {
      en: "Abdulrahman Heiba",
      ar: "عبدالرحمن هيبة",
    },
    role: {
      en: "Founder & Software Development Lead",
      ar: "المؤسس وقائد تطوير البرمجيات",
    },
    bio: {
      en: "Abdulrahman architects the core of Traffic Shield AI — from the hybrid entropy engine to the real-time key generation pipeline. He drives product vision, technical strategy, and the platform's zero-trust design principles.",
      ar: "يُشكّل عبدالرحمن النواة التقنية لمنصة Traffic Shield AI، من محرك الإنتروبيا الهجين إلى مسار توليد المفاتيح الآني. يقود رؤية المنتج والاستراتيجية التقنية ومبادئ تصميم الثقة المعدومة للمنصة.",
    },
    // ← Replace this file to update the photo: public/team/abdulrahman-heiba.png
    image: "/team/abdulrahman-heiba.png",
    // ← Update this URL to change the LinkedIn link
    linkedin:
      "https://www.linkedin.com/in/abdulrahman-heiba-2a0150403?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    id: "ibrahim-ahmed-saqr",
    name: {
      en: "SAQR",
      ar: "صقر",
    },
    role: {
      en: "Head of Technical Support & Backend Integration",
      ar: "رئيس الدعم التقني وتكاملات الخلفية",
    },
    bio: {
      en: "Ibrahim ensures that Traffic Shield AI integrates smoothly into enterprise environments. He leads backend integration engineering, manages client technical onboarding, and maintains the reliability of core platform infrastructure.",
      ar: "يضمن إبراهيم تكامل منصة Traffic Shield AI بسلاسة في البيئات المؤسسية. يقود هندسة تكامل الخلفية، ويدير الإعداد التقني للعملاء، ويحافظ على موثوقية البنية التحتية الأساسية للمنصة.",
    },
    // ← Replace this file to update the photo: public/team/ibrahim-ahmed-saqr.png
    image: "/team/ibrahim-ahmed-saqr.png",
    // ← Update this URL to change the LinkedIn link
    linkedin: "https://www.linkedin.com/in/ibrahim-ahmed-saqr7",
  },
  {
    id: "ziad-mohamed",
    name: {
      en: "Ziad Mohamed",
      ar: "زياد محمد",
    },
    role: {
      en: "Security Lead & Penetration Tester",
      ar: "قائد الأمن والاختبار الاختراقي",
    },
    bio: {
      en: "Ziad owns the adversarial side of Traffic Shield AI. He designs and executes penetration testing frameworks, validates the resilience of every cryptographic layer, and ensures the platform holds under real-world attack conditions.",
      ar: "يتولى زياد الجانب الهجومي في Traffic Shield AI. يصمم أطر اختبار الاختراق وينفذها، ويتحقق من صمود كل طبقة تشفيرية، ويضمن أداء المنصة تحت ظروف الهجوم الفعلية.",
    },
    // ← Replace this file to update the photo: public/team/ziad-mohamed.png
    image: "/team/ziad-mohamed.png",
    // ← Update this URL to change the LinkedIn link
    linkedin: "https://www.linkedin.com/in/ziadmohamed-tx0",
  },
  {
    id: "sama-diaa",
    name: {
      en: "Sama Diaa",
      ar: "سما ضياء",
    },
    role: {
      en: "Head of Relations & Sales",
      ar: "رئيسة العلاقات والمبيعات",
    },
    bio: {
      en: "Sama leads institutional outreach and strategic partnerships for Traffic Shield AI. She builds and manages relationships with enterprise clients, government bodies, and investment partners, translating technical strengths into tangible business outcomes.",
      ar: "تقود سما مبادرات التواصل المؤسسي والشراكات الاستراتيجية لمنصة Traffic Shield AI. تبني العلاقات مع العملاء المؤسسيين والجهات الحكومية وشركاء الاستثمار، وتحوّل القدرات التقنية إلى نتائج أعمال ملموسة.",
    },
    // ← Replace this file to update the photo: public/team/sama-diaa.png
    image: "/team/sama-diaa.png",
    // ← Update this URL to change the LinkedIn link
    linkedin: "https://www.linkedin.com/in/sama-diaa-010531318",
  },
];
