import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { redis, KEYS, today } from "@/lib/redis";

export const runtime = "nodejs";
// Never cache — this mutates state.
export const dynamic = "force-dynamic";

/** Best-effort client IP from common proxy headers. */
function getIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "0.0.0.0";
}

export async function POST(req: NextRequest) {
  // No store configured → silently succeed so the site never breaks.
  if (!redis) {
    return NextResponse.json({ ok: true, tracked: false });
  }

  const date = today();
  const ip = getIp(req);
  const ua = req.headers.get("user-agent") ?? "";

  // Privacy-friendly: we store only a one-way hash, never the raw IP.
  const visitorHash = createHash("sha256")
    .update(`${ip}|${ua}|${date}`)
    .digest("hex")
    .slice(0, 24);

  try {
    // SET NX: returns "OK" only if this visitor hasn't been seen today.
    const isNew = await redis.set(KEYS.seen(date, visitorHash), 1, {
      nx: true,
      ex: 60 * 60 * 48, // 48h
    });

    if (isNew) {
      await Promise.all([
        redis.incr(KEYS.total),
        redis.incr(KEYS.day(date)),
        // Record the date in a sorted set so the dashboard can list days.
        redis.zadd(KEYS.index, {
          score: Number(date.replaceAll("-", "")),
          member: date,
        }),
      ]);
    }

    return NextResponse.json({ ok: true, tracked: Boolean(isNew) });
  } catch {
    // Don't surface storage errors to visitors.
    return NextResponse.json({ ok: true, tracked: false });
  }
}
