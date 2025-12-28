import { IconLink, IconLoader3 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Freelance = {
  name: string;
  url: string;
  image: string;
};

const freelanceData: Freelance[] = [
  {
    name: "TSC Digital Media",
    url: "https://tscdigitalmedia.com/",
    image: "/projects/tsc.webp",
  },
  {
    name: "NeuroFX",
    url: "https://neurofx.in/",
    image: "/projects/neurofx.webp",
  },
  {
    name: "BullsStrategy",
    url: "https://www.bullsstrategy.com/",
    image: "/projects/bullsstrategy.webp",
  },
  {
    name: "Trade with Mohit Agrawal",
    url: "https://tradewithmohitagrawal.com/",
    image: "/projects/mohitagrawal.webp",
  },
];

const FreelanceWorks = () => {
  return (
    <main className="border-b">
      <div className="border-vertical align-center grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        {freelanceData.length > 0 ? (
          freelanceData.map((item, index) => (
            <div
              className="bg-card/40 flex gap-4 rounded-lg p-4 shadow-lg"
              key={index}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="aspect-square h-16 w-16 rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="hover:text-primary flex items-center gap-1 text-neutral-700 duration-200 hover:underline dark:text-neutral-400"
                >
                  Visit Page <IconLink size={14} />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-card/30 flex gap-4 rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-center">
              <IconLoader3 className="animation-iteration-count-infinite text-muted-foreground animate-spin duration-1000" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-semibold">Work in progess...</h4>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default FreelanceWorks;
