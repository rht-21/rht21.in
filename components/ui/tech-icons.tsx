import { cn } from "@/lib/utils";
import { TECH, type TechKey } from "@/lib/tech";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

/**
 * A row of tech logos. Monochrome at rest; each icon eases to its brand color
 * and lifts slightly on hover. Sizes: "sm" for inline lists, "md" for the
 * dedicated stack section.
 */
const TechIcons = ({
  items,
  size = "sm",
  className,
}: {
  items: TechKey[];
  size?: "sm" | "md";
  className?: string;
}) => {
  const dimension = size === "md" ? 22 : 18;
  return (
    <ul className={cn("flex flex-wrap items-center gap-3.5", className)}>
      {items.map((key) => {
        const tech = TECH[key];
        if (!tech) return null;
        const { Icon, label, color } = tech;
        return (
          <li key={key}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  className="text-muted-foreground inline-flex transition-[color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:[color:var(--brand)] dark:hover:[color:var(--brand-dark,var(--brand))]"
                  style={
                    {
                      "--brand": color,
                      // pure-black marks read invisibly in dark mode; lift them
                      "--brand-dark":
                        color === "#000000" ? "#e5e5e5" : undefined,
                    } as React.CSSProperties
                  }
                >
                  <Icon size={dimension} aria-hidden />
                  <span className="sr-only">{label}</span>
                </span>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
};

export default TechIcons;
