import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiVercel,
  SiOpenai,
  SiFramer,
  SiRedis,
  SiDocker,
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiLangchain,
  SiHuggingface,
  SiScikitlearn,
  SiAmazonwebservices,
  SiClerk,
  SiGooglegemini,
} from "react-icons/si";
import { TbBrandMysql, TbDatabase, TbPlugConnected } from "react-icons/tb";

export type TechKey =
  | "typescript"
  | "javascript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "node"
  | "express"
  | "python"
  | "sql"
  | "mongodb"
  | "postgres"
  | "pinecone"
  | "figma"
  | "git"
  | "vercel"
  | "openai"
  | "framer"
  | "redis"
  | "docker"
  | "pytorch"
  | "tensorflow"
  | "fastapi"
  | "langchain"
  | "livekit"
  | "huggingface"
  | "scikit"
  | "aws"
  | "clerk"
  | "gemini"
  | "groq"
  | "websockets";

type TechMeta = { label: string; Icon: IconType; color: string };

/**
 * Official LiveKit mark, recolored to `currentColor` so it stays monochrome at
 * rest and picks up the brand teal on hover like every other icon.
 */
const LiveKitIcon: IconType = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.4004 9.59961H9.59961V14.4004H14.4004V9.59961Z" />
    <path d="M19.2011 4.80078H14.4004V9.60153H19.2011V4.80078Z" />
    <path d="M19.2011 14.4004H14.4004V19.2011H19.2011V14.4004Z" />
    <path d="M24 0H19.1992V4.80075H24V0Z" />
    <path d="M24 19.1992H19.1992V24H24V19.1992Z" />
    <path d="M4.80075 19.1992V14.4004V9.59962V4.80075V0H0V4.80075V9.59962V14.4004V19.1992V24H4.80075H9.59963H14.4004V19.1992H9.59963H4.80075Z" />
  </svg>
);

/** Pinecone has no Simple Icon — use a generic vector-database mark. */
const PineconeIcon: IconType = ({ size = 18, ...props }) => (
  <TbDatabase size={size} {...props} />
);

/** Official Groq mark (no Simple Icon yet). Uses currentColor. */
const GroqIcon: IconType = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    fillRule="evenodd"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.036 2c-3.853-.035-7 3-7.036 6.781-.035 3.782 3.055 6.872 6.908 6.907h2.42v-2.566h-2.292c-2.407.028-4.38-1.866-4.408-4.23-.029-2.362 1.901-4.298 4.308-4.326h.1c2.407 0 4.358 1.915 4.365 4.278v6.305c0 2.342-1.944 4.25-4.323 4.279a4.375 4.375 0 01-3.033-1.252l-1.851 1.818A7 7 0 0012.029 22h.092c3.803-.056 6.858-3.083 6.879-6.816v-6.5C18.907 4.963 15.817 2 12.036 2z" />
  </svg>
);

/** WebSockets isn't a brand — use a bidirectional-connection mark. */
const WebSocketsIcon: IconType = ({ size = 18, ...props }) => (
  <TbPlugConnected size={size} {...props} />
);

/**
 * Single source of truth for tech logos. `color` is the official brand tint,
 * applied on hover; icons render in the current text color at rest so the page
 * stays calm and monochrome until you interact.
 */
export const TECH: Record<TechKey, TechMeta> = {
  typescript: { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  javascript: { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  react: { label: "React", Icon: SiReact, color: "#61DAFB" },
  nextjs: { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  node: { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  express: { label: "Express", Icon: SiExpress, color: "#000000" },
  python: { label: "Python", Icon: SiPython, color: "#3776AB" },
  sql: { label: "SQL", Icon: TbBrandMysql, color: "#4479A1" },
  mongodb: { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  postgres: { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  pinecone: { label: "Pinecone", Icon: PineconeIcon, color: "#1C17FF" },
  figma: { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
  git: { label: "Git", Icon: SiGit, color: "#F05032" },
  vercel: { label: "Vercel", Icon: SiVercel, color: "#000000" },
  openai: { label: "OpenAI", Icon: SiOpenai, color: "#412991" },
  framer: { label: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  redis: { label: "Redis", Icon: SiRedis, color: "#FF4438" },
  docker: { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  pytorch: { label: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  tensorflow: { label: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  fastapi: { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
  langchain: { label: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  livekit: { label: "LiveKit", Icon: LiveKitIcon, color: "#1FD5F9" },
  huggingface: { label: "Hugging Face", Icon: SiHuggingface, color: "#FFD21E" },
  scikit: { label: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
  aws: { label: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
  clerk: { label: "Clerk", Icon: SiClerk, color: "#6C47FF" },
  gemini: { label: "Gemini", Icon: SiGooglegemini, color: "#8E75FF" },
  groq: { label: "Groq", Icon: GroqIcon, color: "#F55036" },
  websockets: { label: "WebSockets", Icon: WebSocketsIcon, color: "#0088CC" },
};
