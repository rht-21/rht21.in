import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import Section from "./ui/section";
import Reveal from "./ui/reveal";
import TechIcons from "./ui/tech-icons";

const Projects = () => {
  return (
    <Section
      label="Side Projects"
      intro="Things I build on the side — products I ship for fun and freelance work for clients."
      id="work"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={(index % 2) * 80}
            className="group border-border bg-card/40 hover:border-primary/40 flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Preview */}
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted/40 relative block aspect-[16/10] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className={cn(
                  "object-cover transition-transform duration-500 ease-out group-hover:scale-105",
                  project.invertOnDark && "dark:invert",
                )}
              />
              {project.freelance && (
                <span className="bg-background/90 text-foreground/80 absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] uppercase backdrop-blur">
                  Freelance
                </span>
              )}
            </Link>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold transition-colors duration-200 group-hover:text-primary">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="text-muted-foreground inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase">
                      <span className="relative flex h-1.5 w-1.5">
                        {project.status === "live" && (
                          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                        )}
                        <span
                          className={cn(
                            "relative inline-flex h-1.5 w-1.5 rounded-full",
                            project.status === "live"
                              ? "bg-primary"
                              : "bg-amber-500",
                          )}
                        />
                      </span>
                      {project.status === "live" ? "Live" : "Building"}
                    </span>
                  )}
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  {project.repo && (
                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} repository`}
                      className="hover:text-primary transition-colors"
                    >
                      <IconBrandGithub size={18} />
                    </Link>
                  )}
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="hover:text-primary inline-flex transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <IconArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>

              <TechIcons items={project.stack} className="mt-auto pt-2" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
