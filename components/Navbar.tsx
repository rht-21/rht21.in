"use client";

import ThemeSwitch from "@/components/ui/theme-switch";
import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import PlaySound from "./ui/play-sound";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    setIsScrolled(currentScrollY > 8);
  }, [currentScrollY]);

  return (
    <header
      className={cn(
        "bg-background/70 sticky top-0 z-50 backdrop-blur transition-all duration-300",
        isScrolled ? "border-border border-b" : "border-b border-transparent",
      )}
    >
      <nav className="shell flex h-16 items-center justify-between">
        <Link href="/" aria-label="Home" className="inline-flex">
          <Image
            src="/logo.webp"
            alt="Rohit Mishra"
            width={200}
            height={200}
            priority
            className="h-7 w-auto invert transition-transform duration-300 ease-out hover:scale-105 hover:-rotate-3 dark:invert-0"
          />
        </Link>

        <div className="flex items-center gap-1.5">
          <Link
            href="https://github.com/rht-21/rht21.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="nav-buttons"
          >
            <IconBrandGithub stroke={1.5} size={18} />
          </Link>
          <ThemeSwitch />
          <PlaySound />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
