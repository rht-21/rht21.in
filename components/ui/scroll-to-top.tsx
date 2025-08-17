"use client";

import { IconArrowUp } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: currentScrollY } = useWindowScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted || currentScrollY < 100) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 flex items-center justify-center p-2 transition-colors rounded-full shadow-lg cursor-pointer text-primary group right-5 bottom-5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
    >
      <IconArrowUp
        size={24}
        className="duration-200 group-hover:-translate-y-0.5"
      />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
};

export default ScrollToTop;
