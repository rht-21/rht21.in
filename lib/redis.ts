import { Redis } from "@upstash/redis";

/**
 * Shared Upstash Redis client, configured from environment variables:
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 *
 * `Redis.fromEnv()` reads those automatically. Returns null if they're missing
 * so the app degrades gracefully (tracking becomes a no-op) instead of crashing.
 */
export const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

// --- Key helpers -----------------------------------------------------------

export const KEYS = {
  total: "visits:total",
  /** Unique visitors for a given YYYY-MM-DD. */
  day: (date: string) => `visits:day:${date}`,
  /** Sorted set tracking which dates have data, scored by the date. */
  index: "visits:index",
  /** Per-visitor-per-day dedupe marker (expires after 48h). */
  seen: (date: string, hash: string) => `visits:seen:${date}:${hash}`,
} as const;

/** Today's date as YYYY-MM-DD in a fixed timezone (IST, where you are). */
export function today(timeZone = "Asia/Kolkata"): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", { timeZone }).format(new Date());
}

export type VisitStats = {
  total: number;
  days: { date: string; count: number }[];
  configured: boolean;
};

/** Read the total and per-date visit counts, most recent date first. */
export async function getStats(): Promise<VisitStats> {
  if (!redis) return { total: 0, days: [], configured: false };

  const total = (await redis.get<number>(KEYS.total)) ?? 0;

  // Most recent dates first.
  const dates = await redis.zrange<string[]>(KEYS.index, 0, -1, { rev: true });

  let days: { date: string; count: number }[] = [];
  if (dates.length > 0) {
    const counts = await redis.mget<(number | null)[]>(
      ...dates.map((d) => KEYS.day(d)),
    );
    days = dates.map((date, i) => ({ date, count: counts[i] ?? 0 }));
  }

  return { total, days, configured: true };
}
