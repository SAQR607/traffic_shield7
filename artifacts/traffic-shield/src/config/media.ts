export const media = {
  social: {
    linkedin: "https://www.linkedin.com/company/trafficshieldai/",
    twitter: "https://x.com/trafficshieldai?s=21",
  },
  contact: {
    email: "contact@trafficshield.cloud",
    website: "www.trafficshield.cloud",
    domain: "trafficshield.cloud",
  },
  brand: {
    wordmark: "TRAFFIC SHIELD AI",
    short: "TS•AI",
  },
} as const;

export type Media = typeof media;
