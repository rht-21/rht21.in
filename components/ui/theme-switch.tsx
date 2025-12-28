"use client";

import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import Loader from "./loader";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Kbd, KbdGroup } from "./kbd";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    audioRef.current = new Audio("/sounds/switch.mp3");
    audioRef.current.volume = 0.55;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // ignore typing contexts
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key.toLowerCase() === "d") {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }); // theme needed so toggleTheme stays current

  if (!mounted) {
    return <Loader />;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className="nav-buttons"
          onClick={toggleTheme}
          aria-label="Toggle theme (D)"
        >
          {theme === "light" ? (
            <IconSun stroke={1.5} size={20} />
          ) : (
            <IconMoonStars stroke={1.5} size={20} />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent className="flex items-center justify-center">
        <KbdGroup>
          <p>Toggle Mode</p>
          <Kbd>D</Kbd>
        </KbdGroup>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeSwitch;
