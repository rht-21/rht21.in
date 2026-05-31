import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { profile } from "@/lib/data";

const footerSocials = [
  {
    label: "X",
    href: "https://www.x.com/itsrht21",
    icon: <IconBrandX size={18} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/rht-21",
    icon: <IconBrandGithub size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rht21/",
    icon: <IconBrandLinkedin size={18} />,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: <IconMail size={18} />,
  },
];

const Footer = () => {
  return (
    <footer className="shell border-border/60 mt-10 border-t pt-10 pb-12">
      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://www.x.com/itsrht21"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            Rohit Mishra
          </Link>{" "}
          <span className="text-muted-foreground">(rht21)</span>. Crafted with
          care.
        </p>

        <div className="flex items-center gap-1.5">
          {footerSocials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="nav-buttons"
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
