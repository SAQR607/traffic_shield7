/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TEAM DATA — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * HOW TO MAINTAIN THIS FILE
 * ──────────────────────────
 * • Names / roles / bios → edit the fields below directly.
 * • Illustrations        → replace the file inside public/team/ with the same
 *                          filename listed in the `image` field, then redeploy.
 * • LinkedIn URLs        → update the `linkedin` field for each member.
 *
 * IMAGE GUIDELINES
 * ─────────────────
 * • Store images in:  artifacts/traffic-shield/public/team/
 * • Recommended size: 800 × 800 px, square, PNG or SVG.
 * • Keep filenames lowercase with hyphens, matching the `image` field below.
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
      en: "Abdulrahman architects the core of Traffic Shield — from the local encryption engine to the public-key exchange that powers secure file transfers. He drives product vision, technical strategy, and the app's cross-platform design.",
      ar: "يُشكّل عبدالرحمن النواة التقنية لتطبيق Traffic Shield، من محرك التشفير المحلي إلى آلية تبادل المفاتيح العامة التي تُشغّل نقل الملفات الآمن. يقود رؤية المنتج والاستراتيجية التقنية وتصميم التطبيق متعدد المنصات.",
    },
    // ← Replace this file to update the illustration: public/team/abdulrahman-heiba.png
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
      en: "Ibrahim ensures Traffic Shield installs smoothly and runs reliably on both Windows and Linux. He leads backend integration, manages user support, and maintains the reliability of the app's core infrastructure.",
      ar: "يضمن إبراهيم تثبيت وتشغيل Traffic Shield بسلاسة وموثوقية على أنظمة Windows وLinux. يقود تكامل الخلفية، ويدير دعم المستخدمين، ويحافظ على موثوقية البنية التحتية الأساسية للتطبيق.",
    },
    // ← Replace this file to update the illustration: public/team/ibrahim-ahmed-saqr.png
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
      en: "Ziad owns the adversarial side of Traffic Shield. He designs and runs penetration testing against the encryption and key-exchange flow, and makes sure the app holds up under real-world attack conditions.",
      ar: "يتولى زياد الجانب الهجومي في Traffic Shield. يصمم وينفذ اختبارات الاختراق على مسار التشفير وتبادل المفاتيح، ويضمن صمود التطبيق تحت ظروف الهجوم الفعلية.",
    },
    // ← Replace this file to update the illustration: public/team/ziad-mohamed.png
    image: "/team/ziad-mohamed.png",
    // ← Update this URL to change the LinkedIn link
    linkedin: "https://www.linkedin.com/in/ziadmohamed-tx0",
  },
];
