import { NextRequest, NextResponse } from "next/server";
import { checkPassphrase, cookieToken, STATS_COOKIE } from "@/lib/stats-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const passphrase = String(form.get("passphrase") ?? "");

  const origin = req.nextUrl.origin;

  if (!checkPassphrase(passphrase)) {
    return NextResponse.redirect(new URL("/stats?error=1", origin), {
      status: 303,
    });
  }

  const res = NextResponse.redirect(new URL("/stats", origin), { status: 303 });
  res.cookies.set(STATS_COOKIE, cookieToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(STATS_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
