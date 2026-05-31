import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/lib/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Where the message lands. Defaults to the public profile email.
const TO = process.env.CONTACT_TO ?? profile.email;
// resend.dev works with no DNS. Swap to your domain later (e.g. contact@rht21.site).
const FROM = process.env.CONTACT_FROM ?? "rht21 contact <onboarding@resend.dev>";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: NextRequest) {
  let body: { from?: string; message?: string; company?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const from = (body.from ?? "").trim();
  const message = (body.message ?? "").trim();
  // Honeypot: real users never fill this hidden field.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!isEmail(from)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }
  if (message.length < 2) {
    return NextResponse.json(
      { error: "Your message looks empty." },
      { status: 400 },
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "That message is a bit too long." },
      { status: 400 },
    );
  }

  if (!resend) {
    return NextResponse.json(
      { error: "Email isn't configured yet. Try again later." },
      { status: 503 },
    );
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: from,
      subject: `New message from ${from}`,
      text: `${message}\n\n— from ${from} (via rht21.site)`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Couldn't send right now. Please email me directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send threw:", err);
    return NextResponse.json(
      { error: "Couldn't send right now. Please email me directly." },
      { status: 502 },
    );
  }
}
