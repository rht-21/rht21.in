import React from "react";
import InstallationSection from "./InstallationSection";
import { CodeBlock } from "../library/codeblock";

const Installation = ({
  id,
  code,
  packages,
}: {
  id: string;
  code: string;
  packages?: string[];
}) => {
  const extraDependencies = packages?.join(" ") || "";
  return (
    <main className="border-b">
      <div className="border-vertical align-center space-y-4 p-4">
        <InstallationSection
          index={1}
          heading="Install the following dependencies"
        >
          <CodeBlock
            code={`npm install clsx tailwind-merge lucide-react ${extraDependencies}`}
            language="bash"
            hideLineNumbers
          />
        </InstallationSection>
        <InstallationSection index={2} heading="Add util file">
          <CodeBlock
            code={`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`}
            language="ts"
            filename="lib/utils.ts"
            hideLineNumbers
          />
        </InstallationSection>
        <InstallationSection index={3} heading="Copy the source code">
          <CodeBlock
            code={code}
            language="tsx"
            filename={`@/components/ui/${id}.tsx`}
          />
        </InstallationSection>
        <div className="mb-4 flex flex-col">
          <div className="relative flex items-center gap-6">
            <span className="bg-primary flex aspect-square h-8 w-8 items-center justify-center rounded-full font-bold">
              4
            </span>
            <h4 className="flex-1 text-xl font-medium">
              Update the import paths to match your project setup.
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Installation;
