"use client";

import {
  IconArrowRight,
  IconArrowUpRight,
  IconCalendarEvent,
  IconMail,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { profile } from "@/lib/data";
import Section from "./ui/section";
import Reveal from "./ui/reveal";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <IconMail size={16} />,
  },
  {
    label: "Call",
    value: "Book a 30-min intro",
    href: "https://calendly.com/rohit-mishra-x21/30min",
    icon: <IconCalendarEvent size={16} />,
  },
  {
    label: "X / Twitter",
    value: "@itsrht21",
    href: profile.socials.find((s) => s.label === "X")?.href ?? "#",
    icon: <IconBrandX size={16} />,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      from: String(data.get("from") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <Section label="Get in touch" id="contact">
      {/* Big editorial statement */}
      <Reveal>
        <p className="text-primary mb-4 inline-flex items-center gap-2 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
            <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
          </span>
          Available for new work
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Got a half-baked idea at 2am?{" "}
          <span className="text-muted-foreground">
            That&apos;s usually where the good ones start. Let&apos;s build it.
          </span>
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-5">
        {/* Channels — plain inline list, no boxes */}
        <Reveal className="flex flex-col gap-1 md:col-span-2">
          {channels.map((c, i) => (
            <Link
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-border/60 flex items-center gap-4 border-b py-4 first:border-t"
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:-translate-y-0.5">
                {c.icon}
              </span>
              <span className="flex-1">
                <span className="section-label block">{c.label}</span>
                <span className="group-hover:text-primary mt-0.5 block text-sm transition-colors duration-200">
                  {c.value}
                </span>
              </span>
              <IconArrowUpRight
                size={16}
                className="text-muted-foreground/50 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </Reveal>

        {/* Composer — borderless, underline fields, feels like writing a note */}
        <Reveal delay={120} className="md:col-span-3">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="composer-field">
              <span className="section-label">From</span>
              <input
                name="from"
                type="email"
                required
                disabled={status === "sending"}
                placeholder="your@email.com"
                className="composer-input"
              />
            </label>

            <label className="composer-field">
              <span className="section-label">Message</span>
              <textarea
                name="message"
                rows={4}
                required
                disabled={status === "sending"}
                placeholder="Tell me what you're building…"
                className="composer-input resize-none"
              />
            </label>

            {/* Honeypot — hidden from humans, catches bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="group bg-foreground text-background inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Message sent ✓"
                    : "Send it over"}
                {status !== "sent" && (
                  <IconArrowRight
                    size={16}
                    className={
                      "transition-transform duration-300 group-hover:translate-x-1 " +
                      (status === "sending" ? "animate-pulse" : "")
                    }
                  />
                )}
              </button>

              {status === "sent" && (
                <span className="text-primary text-sm">
                  Thanks — I&apos;ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-destructive text-sm">{errorMsg}</span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
