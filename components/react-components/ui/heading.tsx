import { cn } from "@/lib/utils";

const Heading = ({ text, className }: { text: string; className?: string }) => {
  return (
    <main className="border-b">
      <div
        className={cn(
          "border-vertical align-center flex h-16 items-center text-4xl",
          className,
        )}
      >
        <h3 className="p-4 font-medium">{text}</h3>
      </div>
    </main>
  );
};

export default Heading;
