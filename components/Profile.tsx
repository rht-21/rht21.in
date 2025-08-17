"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loader from "./ui/loader";

const Profile = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <main className="border-b">
      <div className="flex items-center border-vertical align-center">
        <div className="border-r">
          <Image
            src="/rht21.png"
            alt="logo"
            width={200}
            height={200}
            className="aspect-square h-40 w-auto rounded-full border p-0.5"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 w-full space-y-auto">
          <div
            className="flex items-end h-20 px-4 py-1 font-mono"
            style={{
              backgroundSize: "8px 8px",
              backgroundImage:
                theme === "dark"
                  ? "repeating-linear-gradient(45deg, #33333377 0, #33333377 1px, #1a1d23 0, #1a1d23 50%"
                  : "repeating-linear-gradient(45deg, #75757533 0, #75757533 1px, #f9f9fa 0, #f9f9fa 50%",
            }}
          >
            <p className="text-sm text-neutral-400 max-md:hidden dark:text-neutral-600">
              text-3xl font-medium text-neutral-900 dark:text-neutral-200
            </p>
          </div>
          <div className="px-4 py-1 border-horizontal">
            <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-200">
              Rohit M.
            </h2>
          </div>
          <div className="px-4 py-1">
            <h4 className="text-primary">AI at work, UI at heart.</h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
