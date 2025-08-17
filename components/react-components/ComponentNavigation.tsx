import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { docsList } from "@/lib/docs-registry";
import { usePathname } from "next/navigation";

const ComponentNavigation = () => {
  const currentComponentId = usePathname().split("/").pop();

  // Find the index of the current component
  const currentIndex = docsList.findIndex(
    (doc) => doc.id === currentComponentId,
  );

  // Get the previous and next components
  const previousComponent = docsList[currentIndex - 1] || null;
  const nextComponent = docsList[currentIndex + 1] || null;

  return (
    <main className="bg-background sticky top-14 z-50 border-b">
      <div className="border-vertical align-center flex h-12 items-center justify-between px-2">
        <Link
          href="/components"
          className="hover:bg-secondary/20 text-secondary flex cursor-pointer items-center justify-center gap-1 rounded-2xl px-2 py-1 duration-200"
        >
          <IconArrowLeft size={20} />
          Components
        </Link>
        <div className="mr-2 flex items-center gap-4">
          {previousComponent && (
            <Tooltip>
              <TooltipTrigger className="aspect-square cursor-pointer rounded-full bg-neutral-700 p-1 text-white dark:bg-neutral-300 dark:text-black">
                <Link href={`/components/${previousComponent.id}`}>
                  <IconArrowLeft />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{previousComponent.name}</TooltipContent>
            </Tooltip>
          )}
          {nextComponent && (
            <Tooltip>
              <TooltipTrigger className="aspect-square cursor-pointer rounded-full bg-neutral-700 p-1 text-white dark:bg-neutral-300 dark:text-black">
                <Link href={`/components/${nextComponent.id}`}>
                  <IconArrowRight />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{nextComponent.name}</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </main>
  );
};

export default ComponentNavigation;
