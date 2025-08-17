import React, { ReactNode, useState } from "react";
import { CodeBlock } from "../library/codeblock";

const ComponentSection = ({
  code,
  preview,
  name,
}: {
  name: string;
  code: string;
  preview: ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const tabs = ["preview", "code"];

  const changeActiveTab = (tab: "preview" | "code") => {
    setActiveTab(tab);
  };

  return (
    <main className="border-b">
      <div className="border-vertical align-center space-y-4 p-4">
        <div
          role="tablist"
          className="relative flex w-fit gap-2 rounded-xl bg-black/10 p-1 dark:bg-white/20"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() =>
                changeActiveTab(tab === "preview" ? "preview" : "code")
              }
              className={`relative z-10 w-fit flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white text-black shadow-md"
                  : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          className="flex w-full flex-col items-center justify-center rounded-lg border"
        >
          {activeTab === "preview" ? (
            <div className="flex min-h-96 w-full items-center justify-center p-4">
              {preview}
            </div>
          ) : (
            <CodeBlock filename={`${name}.tsx`} language="tsx" code={code} />
          )}
        </div>
      </div>
    </main>
  );
};

export default ComponentSection;
