import { createHmac, timingSafeEqual } from "crypto";

export const STATS_COOKIE = "stats_auth";

function secret(): string {
  return process.env.STATS_SECRET ?? "";
}

/** Constant-time string comparison. */
function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

/** True if the submitted passphrase matches STATS_SECRET. */
export function checkPassphrase(input: string): boolean {
  const s = secret();
  return s.length > 0 && safeEqual(input, s);
}

/**
 * The cookie value is an HMAC of a fixed marker keyed by the secret. Without
 * the secret it can't be forged, and it reveals nothing about the passphrase.
 */
export function cookieToken(): string {
  return createHmac("sha256", secret()).update("stats-ok").digest("hex");
}

export function isValidToken(token: string | undefined): boolean {
  if (!token || !secret()) return false;
  return safeEqual(token, cookieToken());
}
