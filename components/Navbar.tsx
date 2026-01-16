"use client";

import ThemeSwitch from "@/components/ui/theme-switch";
import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import PlaySound from "./ui/play-sound";

const navItems = [
  {
    name: "Home",
    href: "",
  },
];

const Navbar = () => {
  const path = usePathname().split("/")[1];
  const [isScrolled, setIsScrolled] = useState(false);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    setIsScrolled(currentScrollY > 0);
  }, [currentScrollY]);

  return (
    <main
      className={cn(
        "border-horizontal bg-background sticky top-0 z-50 duration-200",
        isScrolled ? "shadow-lg" : "",
      )}
    >
      <nav className="border-vertical align-center flex h-14 items-center justify-between px-4 py-2">
        <Link href="/" className="text-lg font-medium">
          <Image
            src="/logo.webp"
            alt="logo"
            width={200}
            height={200}
            className="h-8 w-auto invert-100 transition-colors duration-200 dark:invert-0"
          />
        </Link>
        <div className="flex items-center gap-4 text-sm">
          {navItems.length > 1 &&
            navItems.map((item) => (
              <Link
                key={item.name}
                href={`/${item.href}`}
                className={cn(
                  "hover:text-primary hidden transition-colors duration-200 md:flex",
                  path === item.href ? "text-primary font-medium" : "",
                )}
              >
                {item.name}
              </Link>
            ))}
          <div className="flex items-center gap-4 md:gap-2">
            <Link
              href="https://github.com/rht-21/rht21.in"
              className="nav-buttons"
            >
              <IconBrandGithub
                stroke={1.5}
                size={20}
                className="transition-colors duration-200"
              />
            </Link>
            <ThemeSwitch />
            <PlaySound />
          </div>
        </div>
        {/* <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger className="md:hidden">
            <IconMenu size={20} stroke={1.5} />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 p-6 pt-20 text-lg">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            {navItems.length > 1 &&
              navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`/${item.href}`}
                  onClick={() => setIsSheetOpen(false)}
                  className={cn(
                    "hover:text-primary transition-colors duration-200",
                    path === item.href ? "text-primary font-medium" : "",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            <div className="mt-6 flex items-center gap-4">
              <button className="nav-buttons">
                <Link
                  href="https://github.com/rht-21/rht21.in"
                  className="nav-buttons"
                >
                  <IconBrandGithub
                    stroke={1.5}
                    size={20}
                    className="transition-colors duration-200"
                  />
                </Link>
              </button>
              <ThemeSwitch />
            </div>
          </SheetContent>
        </Sheet> */}
      </nav>
    </main>
  );
};

export default Navbar;
