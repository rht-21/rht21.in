import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

interface PasswordProps extends Omit<React.ComponentProps<"input">, "type"> {
  className?: string;
}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative w-full max-w-sm">
        <input
          type={showPassword ? "text" : "password"}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 pr-10 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className,
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={cn(
            "text-muted-foreground absolute top-1/2 right-2 h-5 w-5 -translate-y-1/2 transition-colors",
            "hover:text-foreground focus-visible:ring-ring focus-visible:ring-1 focus-visible:outline-none",
            "disabled:pointer-events-none disabled:opacity-50",
            props.disabled && "pointer-events-none opacity-50",
          )}
          disabled={props.disabled}
          aria-label={showPassword ? "Hide password" : "Show password"}
          tabIndex={-1} // Remove from tab order to keep focus flow natural
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>
    );
  },
);

Password.displayName = "Password";

export { Password };
