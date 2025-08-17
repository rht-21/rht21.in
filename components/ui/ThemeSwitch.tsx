"use client";

import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Loader from "./loader";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <button
      className="nav-buttons"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {" "}
      {theme === "light" ? (
        <IconSun stroke={1.5} size={20} />
      ) : (
        <IconMoonStars stroke={1.5} size={20} />
      )}
    </button>
  );
};

export default ThemeSwitch;
