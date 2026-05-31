/**
 * Single source of truth for site-wide SEO/branding constants. Everything that
 * needs the canonical URL (metadata, sitemap, robots, JSON-LD) reads from here.
 */
export const SITE = {
  url: "https://rht21.site",
  name: "Rohit Mishra",
  shortName: "rht21",
  jobTitle: "AI/ML Engineer",
  // Concise, keyword-aware default title + description.
  title: "Rohit Mishra — AI/ML Engineer",
  titleTemplate: "%s — Rohit Mishra",
  description:
    "Rohit Mishra is an AI/ML Engineer in Delhi, India, building production LLM systems, real-time voice agents, and computer-vision pipelines. Available for freelance and full-time work.",
  ogImage: "/rht21-og.png",
  locale: "en_US",
  twitter: "@itsrht21",
  keywords: [
    // Name
    "Rohit Mishra",
    "Rohit Mishra AI Engineer",
    "Rohit Mishra portfolio",
    "rht21",
    // Role
    "AI Engineer",
    "ML Engineer",
    "AI/ML Engineer",
    "LLM Engineer",
    "Machine Learning Engineer",
    "Computer Vision Engineer",
    "Voice AI developer",
    "RAG pipelines",
    "LiveKit voice agent",
    // Freelance / hire
    "hire AI engineer",
    "freelance AI developer",
    "freelance machine learning engineer",
    // Location
    "AI Engineer India",
    "AI Engineer Delhi",
    "ML Engineer India",
  ],
} as const;
