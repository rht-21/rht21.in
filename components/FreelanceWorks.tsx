import { IconLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const freelanceData = [
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
      <div className="grid grid-cols-1 gap-4 p-4 border-vertical align-center md:grid-cols-2">
        {freelanceData.map((item, index) => (
          <div
            className="flex gap-4 p-4 rounded-lg shadow-lg bg-card"
            key={index}
          >
            <div className="flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="w-16 h-16 rounded-lg aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <Link
                key={index}
                href={item.url}
                target="_blank"
                className="flex items-center gap-1 duration-200 hover:text-primary text-neutral-700 dark:text-neutral-400"
              >
                Visit Page <IconLink size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FreelanceWorks;
