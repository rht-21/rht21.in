import { IconLink } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const ProjectData = [
  {
    title: "Intervue",
    description:
      "AI-integrated platform where users can create custom interviews, practice with AI, and receive feedback.",
    link: "https://intervue.rht21.in/",
    isLive: true,
  },
  {
    title: "Snipster",
    description:
      "A platform for developers to easily store, organize, and access their code snippets.",
    link: "https://snipster.rht21.in/",
    isLive: true,
  },
];

const Projects = () => {
  return (
    <main className="border-b">
      <ul className="flex flex-col text-lg border-vertical align-center">
        {ProjectData.map((project, index) => (
          <li key={index} className="border-b last:border-0">
            <div className="flex items-center">
              <div className="flex items-center justify-center border-r aspect-square h-28 w-28">
                <Image
                  src={`/projects/${project.title.toLowerCase()}.webp`}
                  alt={project.title}
                  width={112}
                  height={112}
                  className="object-cover w-auto h-20 invert-100 dark:invert-0"
                />
              </div>
              <div className="flex flex-col flex-1 gap-1 px-4">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-center h-20 w-14">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer">
                    <IconLink />
                  </TooltipTrigger>
                  <TooltipContent>
                    {project.isLive ? "View Page" : "View Repo"}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Projects;
