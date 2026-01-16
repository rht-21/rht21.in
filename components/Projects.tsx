import { IconLink, IconLoader3 } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Projects = {
  title: string;
  description: string;
  link: string;
  isLive?: boolean;
  isBuilding?: boolean;
  isDark?: boolean;
};

const ProjectData: Projects[] = [
  {
    title: "Intervy",
    description:
      "Practice interviews in real time, without awkward pauses or peers. Just your voice, instant feedback, and conversations that flow.",
    link: "https://intervy.rht21.site",
    isLive: true,
    isBuilding: true,
    isDark: false,
  },
  {
    title: "Zapis",
    description:
      "A simple, local-first app to write notes and keep todos in one quiet place. No accounts, no cloud as your data stays on your device.",
    link: "https://zapis.rht21.site",
    isLive: true,
    isBuilding: false,
    isDark: true,
  },
];

const Projects = () => {
  return (
    <main className="border-b">
      <ul className="border-vertical align-center flex flex-col text-lg">
        {ProjectData.length > 0 ? (
          ProjectData.map((project, index) => (
            <li key={index} className="border-b last:border-0">
              <div className="flex items-center">
                <div className="flex aspect-square h-28 w-28 items-center justify-center border-r">
                  <Image
                    src={`/projects/${project.title.toLowerCase()}.webp`}
                    alt={project.title}
                    width={112}
                    height={112}
                    className={cn(
                      "h-20 w-auto rounded-2xl object-cover",
                      project.isDark && "invert-0 dark:invert-100",
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 px-4">
                  <div className="flex items-center justify-start gap-4">
                    <h4 className="font-semibold">{project.title}</h4>
                    {project.isBuilding ? (
                      <span className="bg-secondary text-secondary-foreground rounded-4xl px-4 py-1 text-xs font-medium tracking-wide uppercase">
                        In Progress
                      </span>
                    ) : (
                      project.isLive && (
                        <span className="bg-primary text-primary-foreground rounded-4xl px-4 py-1 text-xs font-medium tracking-wide uppercase">
                          Live
                        </span>
                      )
                    )}
                  </div>
                  <p className="text-muted-foreground line-clamp-3 text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="flex h-20 w-14 items-center justify-center">
                  <Tooltip>
                    <TooltipTrigger className="cursor-pointer">
                      <Link href={project.link} target="_blank">
                        <IconLink />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      {project.isLive ? "View Page" : "View Repo"}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="border-b last:border-0">
            <div className="flex items-center">
              <div className="flex aspect-square h-28 w-28 items-center justify-center border-r">
                <IconLoader3 className="animation-iteration-count-infinite text-muted-foreground animate-spin duration-1000" />
              </div>
              <div className="flex flex-1 flex-col gap-1 px-4">
                <h4 className="font-semibold">Work in progess...</h4>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  You will see it here soon!
                </p>
              </div>
            </div>
          </li>
        )}
      </ul>
    </main>
  );
};

export default Projects;
