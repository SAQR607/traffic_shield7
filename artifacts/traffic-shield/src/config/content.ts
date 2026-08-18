export const content = {
  en: {
    nav: {
      problem: "Problem",
      solution: "Solution",
      technology: "How It Works",
      useCases: "Use Cases",
      foundingTeam: "Team",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      kicker: "Cross-Platform File Encryption",
      title: "Encrypt your files. Share them with no one but the person you choose.",
      subtitle:
        "Traffic Shield is a lightweight Windows & Linux application that encrypts files in seconds, keeps their exact original size, and lets you send them securely to anyone else running Traffic Shield — locked to their public key, so only they can ever open them.",
      ctaPrimary: "Get in Touch",
      ctaSecondary: "See How It Works",
      tag: "Built for individuals, professionals, and businesses who value their privacy",
    },
    problem: {
      eyebrow: "01 — The Problem",
      title: "Sharing sensitive files still isn't safe by default.",
      lead: "Email attachments, cloud links, and chat apps were never built to keep files private end-to-end.",
      cards: [
        {
          title: "Files Sit Exposed",
          body: "Uploading a sensitive file to email or a cloud drive means trusting a third-party server — and anyone who gains access to that account — with your data.",
        },
        {
          title: "Anyone With the Link Can Open It",
          body: "Most 'secure sharing' is really just a password on a link. Once it's guessed, forwarded, or intercepted, the file is readable by anyone who has it.",
        },
        {
          title: "Heavy Tools, Slow Workflows",
          body: "Traditional encryption software is either too complicated for daily use, or so slow on large files that people quietly skip it.",
        },
      ],
      banner: "IF ANYONE BUT THE RECIPIENT CAN OPEN IT, IT ISN'T ENCRYPTED.",
    },
    solution: {
      eyebrow: "02 — Introducing Traffic Shield",
      title: "One app. Fast encryption. Files only the right person can open.",
      lead: "Traffic Shield runs quietly on Windows and Linux, turning any file into a locked package in seconds — one that only the intended recipient can ever unlock.",
      pillars: [
        {
          title: "Fast, Size-Preserving Encryption",
          body: "Encrypt files of any size in seconds without bloating them. The encrypted file stays essentially the same size as the original.",
        },
        {
          title: "Public-Key Sharing",
          body: "Send an encrypted file to any other Traffic Shield user by locking it to their public key. Only their private key can open it — not even we can.",
        },
        {
          title: "Cross-Platform by Design",
          body: "One consistent application on Windows and Linux, so your files stay protected no matter which machine you're working from.",
        },
      ],
    },
    technology: {
      eyebrow: "03 — How It Works",
      title: "Built on proven, industry-standard cryptography.",
      lead: "No custom, unproven algorithms — Traffic Shield combines two of the most trusted encryption standards in the world.",
      items: [
        {
          title: "Local Encryption, On Your Device",
          body: "Each file is encrypted locally with a unique symmetric key before it ever leaves your machine. Nothing is transmitted as plaintext.",
        },
        {
          title: "Locked With the Recipient's Public Key",
          body: "That encryption key is then wrapped using the recipient's public key. From that point on, only their matching private key can unlock it.",
        },
        {
          title: "Same Size In, Same Size Out",
          body: "Traffic Shield avoids unnecessary padding and overhead, so an encrypted file takes up virtually the same space as the original.",
        },
      ],
      pullquote:
        "If only the recipient's private key can open it, the file stays safe everywhere else it travels.",
    },
    useCases: {
      eyebrow: "04 — Who It's For",
      title: "For anyone who has a file that shouldn't be public.",
      lead: "Traffic Shield fits into how people already work, without the learning curve of enterprise security software.",
      sectors: [
        {
          name: "Individuals",
          points: [
            "Protect personal documents, photos, and backups",
            "Send sensitive files to family or friends with confidence",
            "Keep files private even if a device is lost or stolen",
          ],
        },
        {
          name: "Freelancers & Professionals",
          points: [
            "Share client files without relying on third-party portals",
            "Deliver contracts and financial documents securely",
            "Give every recipient their own verifiable public key",
          ],
        },
        {
          name: "Small Businesses & Teams",
          points: [
            "Exchange internal documents without a heavyweight security stack",
            "Give every team member their own public/private keypair",
            "Keep sensitive files protected across Windows and Linux alike",
          ],
        },
      ],
    },
    foundingTeam: {
      eyebrow: "The People Behind It",
      title: "The Team",
      subtitle:
        "The people building and hardening Traffic Shield, from the encryption engine to day-to-day support.",
      linkedinLabel: "Connect on LinkedIn",
    },
    contact: {
      eyebrow: "05 — Let's Talk",
      title: "Interested in Traffic Shield?",
      lead: "Reach out to learn more, ask questions, or get set up. Our team typically replies within one business day.",
      ctaPrimary: "Get in Touch",
      contactLabel: "Direct Contact",
      websiteLabel: "Website",
    },
    demoModal: {
      title: "Get in Touch",
      subtitle:
        "Tell us a little about what you need. We typically reply within one business day.",
      fields: {
        name: "Full Name",
        email: "Email",
        company: "Company (optional)",
        message: "What would you like to discuss?",
      },
      placeholders: {
        name: "John Smith",
        email: "name@email.com",
        company: "Company name",
        message: "I'm interested in Traffic Shield for...",
      },
      submit: "Send Message",
      submitting: "Sending…",
      success: {
        title: "Message Received",
        body: "Thanks for reaching out. A member of our team will get back to you within one business day.",
        cta: "Done",
      },
      error: {
        title: "Something Went Wrong",
        body: "Please try again, or email us directly at contact@trafficshield.cloud.",
      },
      validation: {
        name: "Please enter your full name.",
        email: "Please enter a valid email address.",
        company: "Please enter your company name.",
        message: "Please add a short message (at least 10 characters).",
      },
    },
    footer: {
      tagline: "Fast, secure file encryption for Windows and Linux.",
      copyright: `© ${new Date().getFullYear()} Traffic Shield. All rights reserved.`,
      links: {
        linkedin: "LinkedIn",
        twitter: "X / Twitter",
        email: "Email",
      },
    },
    misc: {
      langToggle: "EN",
      langCode: "EN",
    },
  },
} as const;

export type Locale = keyof typeof content;
export type ContentShape = (typeof content)["en"];
