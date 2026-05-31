import { cn } from "@/lib/utils";
import Reveal from "./reveal";

/**
 * An airy page section: an uppercase micro-label followed by content, both
 * eased in on scroll. Used across the page for a consistent rhythm.
 */
const Section = ({
  label,
  intro,
  id,
  className,
  children,
}: {
  label?: string;
  intro?: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className={cn("shell scroll-mt-24 py-14 sm:py-20", className)}>
      {label && (
        <Reveal className={cn(intro ? "mb-6" : "mb-8")}>
          <p className="section-label">{label}</p>
          {intro && (
            <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
              {intro}
            </p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
};

export default Section;
