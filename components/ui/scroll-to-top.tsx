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
      className="animate-scale-in group border-border bg-background/80 text-muted-foreground hover:text-primary hover:border-primary/40 fixed right-5 bottom-5 z-50 flex cursor-pointer items-center justify-center rounded-full border p-2.5 shadow-sm backdrop-blur transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md active:scale-95"
    >
      <IconArrowUp
        size={24}
        className="duration-300 group-hover:-translate-y-0.5"
      />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
};

export default ScrollToTop;
