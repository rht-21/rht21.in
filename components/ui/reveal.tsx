"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay before the reveal animation starts, in ms. */
  delay?: number;
  /** Render as a different element (e.g. "li", "section"). Defaults to "div". */
  as?: React.ElementType;
  /** Only animate the first time the element enters the viewport. */
  once?: boolean;
};

/**
 * Wraps content and eases it into place the first time it scrolls into view.
 * Pairs with the `.reveal` utility in globals.css and respects
 * prefers-reduced-motion (handled globally in CSS).
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback: if IntersectionObserver is unavailable, just show the content.
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setRevealed(false);
        }
      },
      // Trigger as soon as any part enters the viewport, with a small bottom
      // margin so reveals fire slightly before the element is fully in view.
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-revealed={revealed}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
