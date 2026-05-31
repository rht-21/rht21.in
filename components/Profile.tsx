import {
  IconMapPin,
  IconMail,
  IconUser,
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { profile } from "@/lib/data";
import Reveal from "./ui/reveal";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const socialIcon: Record<string, React.ReactNode> = {
  X: <IconBrandX size={18} stroke={1.6} />,
  GitHub: <IconBrandGithub size={18} stroke={1.6} />,
  LinkedIn: <IconBrandLinkedin size={18} stroke={1.6} />,
  Instagram: <IconBrandInstagram size={18} stroke={1.6} />,
};

const meta = [
  { label: "Location", value: profile.location, icon: <IconMapPin size={16} /> },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <IconMail size={16} />,
  },
  { label: "Pronouns", value: profile.pronouns, icon: <IconUser size={16} /> },
];

const Profile = () => {
  return (
    <header className="shell pt-20 pb-6 sm:pt-28">
      {/* Name + avatar */}
      <div className="flex items-center gap-5">
        <Reveal className="shrink-0">
          <Image
            src="/rht21.png"
            alt={`${profile.name}, AI/ML Engineer`}
            width={120}
            height={120}
            priority
            className="ring-border h-16 w-16 rounded-full object-cover ring-1 sm:h-20 sm:w-20"
          />
        </Reveal>
        <div>
          <Reveal
            as="h1"
            className="flex flex-wrap items-baseline gap-x-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {profile.name}
            <span className="sr-only"> — AI/ML Engineer</span>
            <Link
              href="https://github.com/rht-21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`@${profile.handle} on GitHub`}
              className="text-muted-foreground hover:text-primary text-sm font-normal tracking-normal transition-colors"
            >
              @{profile.handle}
            </Link>
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="text-primary mt-1 text-base sm:text-lg"
          >
            {profile.tagline}
          </Reveal>
        </div>
      </div>

      {/* Meta grid */}
      <Reveal
        delay={120}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {meta.map((item) => (
          <div key={item.label} className="flex flex-col gap-1.5">
            <span className="section-label">{item.label}</span>
            <span className="text-muted-foreground flex items-center gap-2 text-sm">
              <span className="text-foreground/70">{item.icon}</span>
              {item.href ? (
                <Link href={item.href} className="link-underline">
                  {item.value}
                </Link>
              ) : (
                <span>{item.value}</span>
              )}
            </span>
          </div>
        ))}
      </Reveal>

      {/* Bio */}
      <Reveal
        as="p"
        delay={160}
        className="text-foreground/80 mt-10 max-w-2xl text-lg leading-relaxed text-balance"
      >
        {profile.bio}
      </Reveal>

      {/* Socials */}
      <Reveal delay={200} className="mt-8 flex items-center gap-2">
        {profile.socials.map((s) => (
          <Tooltip key={s.label}>
            <TooltipTrigger asChild>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground hover:text-primary hover:border-primary/40 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95"
              >
                {socialIcon[s.label]}
              </Link>
            </TooltipTrigger>
            <TooltipContent>{s.label}</TooltipContent>
          </Tooltip>
        ))}
      </Reveal>
    </header>
  );
};

export default Profile;
