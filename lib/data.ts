import type { TechKey } from "./tech";

export type Profile = {
  name: string;
  tagline: string;
  location: string;
  email: string;
  pronouns: string;
  bio: string;
  socials: { label: string; href: string }[];
};

export const profile: Profile = {
  name: "Rohit Mishra",
  tagline: "AI at work, UI at heart.",
  location: "New Delhi, India",
  email: "rohit.mishra.x21@gmail.com",
  pronouns: "he/him",
  bio: "I'm an AI Developer building intelligent systems end-to-end — computer vision, LLM-powered features, and voice agents that survive production, not just demos. On the side, I ship web products and freelance work that let me obsess over the details.",
  socials: [
    { label: "X", href: "https://www.x.com/itsrht21" },
    { label: "GitHub", href: "https://github.com/rht-21" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rht21/" },
    { label: "Instagram", href: "https://www.instagram.com/rht21/" },
  ],
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  type: string;
  start: string;
  end: string; // use "Present" for current
  summary: string;
  bullets: string[];
  stack: TechKey[];
  current?: boolean;
};

/** AI/ML focus — Volumetree is the headline role. */
export const experience: Experience[] = [
  {
    role: "AI/ML Engineer",
    company: "Volumetree",
    location: "Delhi, India",
    type: "Full-time",
    start: "Jun 2025",
    end: "Present",
    current: true,
    summary:
      "Building production LLM and real-time voice systems for AI-driven hiring — from proctoring and structured evaluation to LiveKit voice agents, with evaluation and reliability baked in.",
    bullets: [
      "Built an AI video proctoring system for recorded interviews — detecting head-pose changes, eye-visibility issues, low motion, and exposure anomalies — cutting analysis time by ~80%",
      "Designed multiprocessing-safe video pipelines, resolving performance bottlenecks and resource contention during frame-level analysis",
      "Developed an AI interview evaluation system with structured scoring rubrics and schema-enforced outputs, reducing feedback turnaround by ~70%",
      "Built an end-to-end AI hiring pipeline — job extraction, requirement enrichment, screening-question generation, and candidate scoring — cutting setup time by ~70–75%",
      "Integrated LangSmith-based LLM evaluation with rubric-driven graders, regression testing across prompt/model changes, and cost/latency monitoring",
      "Built real-time LiveKit voice agents coordinating streaming ASR → LLM → TTS with sub-second latency, interruption handling, and stateful sessions",
    ],
    stack: ["python", "langchain", "livekit", "fastapi", "openai", "aws"],
  },
];

export type Project = {
  title: string;
  description: string;
  href: string;
  repo?: string;
  image: string;
  stack: TechKey[];
  status?: "live" | "building";
  freelance?: boolean;
  /** Render the logo inverted in dark mode (for dark-on-light marks). */
  invertOnDark?: boolean;
};

/** Featured products first, then freelance work (badged). */
export const projects: Project[] = [
  {
    title: "Mimicr",
    description:
      "An AI digital-twin platform that reads your public online presence to surface your personality, interests, strengths, and career archetype — yourself, seen through the lens of your digital footprint.",
    href: "https://mimicr.rht21.site",
    image: "https://mimicr.rht21.site/logo.webp",
    stack: ["nextjs", "typescript", "gemini", "groq", "websockets"],
    status: "building",
  },
  {
    title: "Zapis",
    description:
      "A quiet, local-first app for notes and todos in one place. No accounts, no cloud — your data stays on your device.",
    href: "https://notes.rht21.site",
    image: "https://notes.rht21.site/logo.png",
    stack: ["react", "tailwind", "typescript"],
    status: "live",
    invertOnDark: true,
  },
  {
    title: "TSC Digital Media",
    description:
      "A fast, conversion-focused site for a digital marketing agency offering advertising, social, web, and video production — built for clarity and speed.",
    href: "https://tscdigitalmedia.com",
    image: "https://www.tscdigitalmedia.com/logo.png",
    stack: ["nextjs", "react", "tailwind"],
    status: "live",
    freelance: true,
  },
  {
    title: "Advinzo",
    description:
      "A performance-marketing agency site built to sell data-driven growth — paid ads, SEO, and automation — with a sharp, conversion-first design.",
    href: "https://advinzo.com",
    image: "https://www.advinzo.com/logo.png",
    stack: ["nextjs", "react", "tailwind"],
    status: "live",
    freelance: true,
  },
];
