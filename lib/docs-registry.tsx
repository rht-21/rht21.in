import { CodeBlock } from "@/components/library/codeblock";
import { Password } from "@/components/library/password";
import { ReactNode } from "react";

export interface DocsRegistry {
  [key: string]: {
    name: string;
    description: string[];
    code: string;
    preview: ReactNode;
    previewCode: string;
    packages?: string[];
    props?: IProps[] | undefined;
  };
}

export interface IProps {
  name: string;
  type: string;
  default: string;
  description: string;
}

export const docsRegistry: DocsRegistry = {
  password: {
    name: "Password",
    description: [
      "Password field with show/hide button and a password strength meter.",
    ],
    preview: <Password />,
    previewCode: `import { Password } from '@/components/ui/password'
import React from 'react'

const PasswordDemo = () => {
  return (
    <Password />
  )
}

export default PasswordDemo`,
    code: `import * as React from "react";
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
`,
    props: [
      {
        name: "className",
        type: "string",
        default: "None",
        description: "Additional CSS classes to apply to the link component.",
      },
    ],
  },
  codeblock: {
    name: "CodeBlock",
    description: ["Code block with syntax highlighting."],
    preview: (
      <div className="mx-auto w-full max-w-3xl">
        <CodeBlock
          language="jsx"
          filename="DummyComponent.jsx"
          highlightLines={[9, 13, 14, 18]}
          code={`const DummyComponent = () => {
          const [count, setCount] = React.useState(0);
          
  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="mb-4 text-xl font-bold">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};`}
        />
      </div>
    ),
    previewCode: `"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = \`const DummyComponent = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="mb-4 text-xl font-bold">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};\`;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <CodeBlock
        language="jsx"
        filename="DummyComponent.jsx"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
`,
    code: `
    "use client";

import { cn } from "@/lib/utils";
import { ArrowDownFromLine, ArrowUpFromLine, Check, Copy } from "lucide-react";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  language: string;
  filename?: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [showFullCode, setShowFullCode] = React.useState(false);

  const copyToClipboard = async () => {
    const textToCopy = code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-neutral-900 p-4 font-mono text-sm",
        showFullCode ? "h-full" : "h-96",
      )}
    >
      {!showFullCode && (
        <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-20 bg-gradient-to-t from-black via-black to-transparent">
          <button
            onClick={() => setShowFullCode(!showFullCode)}
            className="duration-200 cursor-pointer text-white/60 hover:text-white"
          >
            Expand
          </button>
        </div>
      )}
      <div className="flex flex-col gap-2">
        {filename && (
          <div className="flex items-center justify-between py-2">
            <div className="font-sans text-zinc-400">{filename}</div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFullCode(!showFullCode)}
                className="flex items-center gap-1 font-sans text-xs transition-colors text-zinc-400 hover:text-zinc-200"
              >
                {showFullCode ? (
                  <ArrowUpFromLine size={14} />
                ) : (
                  <ArrowDownFromLine size={14} />
                )}
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 font-sans text-xs transition-colors text-zinc-400 hover:text-zinc-200"
              >
                {copied ? (
                  <Check className="text-emerald-600" size={14} />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        customStyle={{
          margin: 0,
          padding: 0,
          background: "transparent",
          fontSize: "0.875rem",
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: highlightLines.includes(lineNumber)
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {String(code)}
      </SyntaxHighlighter>
    </div>
  );
};
`,
    packages: ["react-syntax-highlighter", "@types/react-syntax-highlighter"],
    props: [
      {
        name: "language",
        type: "string",
        default: "None",
        description:
          "Programming language for syntax highlighting (e.g. 'tsx', 'js', 'bash').",
      },
      {
        name: "filename",
        type: "string",
        default: "None",
        description: "Optional filename shown at the top of the code block.",
      },
      {
        name: "hideLineNumbers",
        type: "boolean",
        default: "false",
        description: "Whether to hide line numbers in the code block.",
      },
      {
        name: "highlightLines",
        type: "number[]",
        default: "[]",
        description:
          "Array of line numbers to highlight with a background color.",
      },
      {
        name: "code",
        type: "string",
        default: "None",
        description: "Code snippet to display (used in single-code mode).",
      },
    ],
  },
};

export const docsList = Object.entries(docsRegistry)
  .map(([id, doc]) => ({
    id,
    name: doc.name,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
