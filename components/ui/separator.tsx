"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Loader from "./loader";

const Separator = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <main
      className="border-b"
      style={{
        backgroundSize: "8px 8px",
        backgroundImage:
          theme === "dark"
            ? "repeating-linear-gradient(45deg, #33333377 0, #33333377 1px, #1a1d23 0, #1a1d23 50%"
            : "repeating-linear-gradient(45deg, #75757533 0, #75757533 1px, #f9f9fa 0, #f9f9fa 50%",
      }}
    >
      <div className="border-vertical align-center flex h-12 items-center" />
    </main>
  );
};

export default Separator;
