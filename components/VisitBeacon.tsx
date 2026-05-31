"use client";

import { useEffect } from "react";

/**
 * Fires a single fire-and-forget POST /api/track per browser session.
 * The server deduplicates uniques per day; this just avoids redundant
 * requests on client-side navigation within the same session.
 */
const VisitBeacon = () => {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("tracked")) return;
      sessionStorage.setItem("tracked", "1");
    } catch {
      // sessionStorage unavailable (private mode) — still track, just no guard.
    }

    fetch("/api/track", { method: "POST", keepalive: true }).catch(() => {});
  }, []);

  return null;
};

export default VisitBeacon;
