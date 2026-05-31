import React from "react";
import { experience } from "@/lib/data";
import Section from "./ui/section";
import Reveal from "./ui/reveal";
import TechIcons from "./ui/tech-icons";

const Experience = () => {
  return (
    <Section label="Experience" id="experience">
      <div className="relative">
        {/* Vertical rail */}
        <span
          className="bg-border absolute top-2 bottom-2 left-[5px] w-px"
          aria-hidden
        />

        <div className="flex flex-col gap-12">
          {experience.map((job, index) => (
            <Reveal
              key={`${job.company}-${index}`}
              delay={index * 90}
              className="group relative pl-8"
            >
              {/* Dot */}
              <span
                className="absolute top-1.5 left-0 flex h-3 w-3 items-center justify-center"
                aria-hidden
              >
                {job.current ? (
                  <>
                    <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                    <span className="bg-primary relative h-3 w-3 rounded-full" />
                  </>
                ) : (
                  <span className="border-border bg-background group-hover:border-primary h-3 w-3 rounded-full border-2 transition-colors duration-300" />
                )}
              </span>

              {/* Header row */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold">
                  {job.role}
                  <span className="text-muted-foreground font-normal">
                    {"  ·  "}
                    {job.company}
                  </span>
                </h3>
                <span className="text-muted-foreground text-sm tabular-nums">
                  {job.start} — {job.end}
                </span>
              </div>

              <p className="text-muted-foreground mt-0.5 text-sm">
                {job.location} · {job.type}
              </p>

              <p className="text-foreground/80 mt-3 text-[15px] leading-relaxed">
                {job.summary}
              </p>

              {job.bullets.length > 0 && (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed"
                    >
                      <span className="bg-primary/60 mt-2 inline-block h-1 w-1 shrink-0 rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              <TechIcons items={job.stack} className="mt-4" />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
