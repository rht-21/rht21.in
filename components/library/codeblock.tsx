"use client";

import { cn } from "@/lib/utils";
import { ChevronsUpDown, Check, Copy, ChevronsDownUp } from "lucide-react";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  language: string;
  filename?: string;
  hideLineNumbers?: boolean;
  highlightLines?: number[];
  code: string;
};

export const CodeBlock = ({
  language,
  filename,
  code,
  hideLineNumbers = false,
  highlightLines = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [showFullCode, setShowFullCode] = React.useState(false);
  const [showExpand, setShowExpand] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setReady(true);
  }, []);

  React.useEffect(() => {
    setShowExpand((ref.current?.clientHeight ?? 0) > 384);
  }, [code]);

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
      ref={ref}
      className={cn(
        "no-scrollbar relative w-full overflow-hidden rounded-lg bg-neutral-900 p-4 font-mono text-sm",
        showFullCode ? "h-full" : showExpand ? "h-96" : "h-auto",
      )}
    >
      {!showFullCode && showExpand && (
        <div className="absolute bottom-0 left-0 flex h-20 w-full items-center justify-center bg-gradient-to-t from-black via-black to-transparent">
          <button
            onClick={() => setShowFullCode(!showFullCode)}
            className="cursor-pointer text-white/60 duration-200 hover:text-white"
          >
            Expand
          </button>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between py-2">
          {filename ? (
            <div className="font-mono text-zinc-400">{filename}</div>
          ) : (
            language && (
              <div className="font-sans text-zinc-400">{language}</div>
            )
          )}
          <div className="flex w-full items-center justify-end gap-4">
            {showExpand && (
              <button
                onClick={() => setShowFullCode(!showFullCode)}
                className="flex items-center gap-1 font-sans text-xs text-zinc-400 transition-colors hover:text-zinc-200"
              >
                {showFullCode ? (
                  <ChevronsDownUp size={14} />
                ) : (
                  <ChevronsUpDown size={14} />
                )}
              </button>
            )}
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 font-sans text-xs text-zinc-400 transition-colors hover:text-zinc-200"
            >
              {copied ? (
                <Check className="text-emerald-600" size={14} />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        className={cn(!ready && "opacity-0", "no-scrollbar")}
        customStyle={{
          margin: 0,
          padding: 0,
          background: "transparent",
          fontSize: "0.875rem",
        }}
        wrapLines={true}
        showLineNumbers={!hideLineNumbers}
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
