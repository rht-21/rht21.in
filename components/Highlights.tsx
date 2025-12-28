import { IconCode, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

import React from "react";
import SocialLinks from "./SocialLinks";

const Highlights = () => {
  return (
    <main className="border-b">
      <div className="border-vertical align-center flex flex-col gap-2 p-4">
        <div className="flex items-center gap-4">
          <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-xl bg-neutral-300 dark:bg-neutral-700">
            <IconCode size={16} />
          </div>
          <div className="flex flex-col">
            <h4>
              AI/ML Engineer at{" "}
              <Link
                href="https://www.volumetree.com/"
                className="text-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                Volumetree
              </Link>
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-xl bg-neutral-300 dark:bg-neutral-700">
            <IconMapPin size={16} />
          </div>
          <div className="flex flex-col">
            <h4>New Delhi, India</h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-xl bg-neutral-300 dark:bg-neutral-700">
            <IconPhone size={16} />
          </div>
          <div className="flex flex-col">
            <h4>
              <Link
                href="tel:+919934086685"
                className="hover:text-primary transition-colors duration-200"
              >
                +91 99340 86685
              </Link>
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-xl bg-neutral-300 dark:bg-neutral-700">
            <IconMail size={16} />
          </div>
          <div className="flex flex-col">
            <h4>
              <Link
                href="mailto:rohit.mishra.x21@gmail.com"
                className="hover:text-primary transition-colors duration-200"
              >
                rohit.mishra.x21@gmail.com
              </Link>
            </h4>
          </div>
        </div>
        <br />
        <SocialLinks />
      </div>
    </main>
  );
};

export default Highlights;
