"use client";

import { cn } from "@/lib/utils";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const InstallationSection = ({
  children,
  index,
  heading,
}: {
  children?: React.ReactNode;
  index: number;
  heading: string;
}) => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="relative flex items-center gap-6">
        <span className="bg-primary flex aspect-square h-8 w-8 items-center justify-center rounded-full font-bold">
          {index}
        </span>
        <h4 className="flex-1 text-xl font-medium">{heading}</h4>
        <button
          onClick={() => setShow(!show)}
          className="group cursor-pointer rounded-md p-1 duration-200 hover:bg-slate-300 dark:hover:bg-slate-700"
        >
          {show ? <ChevronsDownUp size={20} /> : <ChevronsUpDown size={20} />}
        </button>
      </div>
      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          show
            ? "mt-6 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default InstallationSection;
