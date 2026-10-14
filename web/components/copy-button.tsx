"use client";

import { useId, useState } from "react";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const tooltipId = useId();

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? "Copied" : label}
        aria-describedby={tooltipId}
        className="group relative inline-flex size-7 shrink-0 items-center justify-center rounded border border-neutral-700 bg-neutral-800 text-neutral-300 transition hover:bg-neutral-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span
          id={tooltipId}
          role="tooltip"
          className="pointer-events-none absolute top-1/2 right-full z-20 mr-2 -translate-y-1/2 rounded border border-neutral-700 bg-neutral-900 px-1.5 py-0.5 text-xs whitespace-nowrap text-neutral-100 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {copied ? "Copied" : "Copy"}
        </span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5"
      aria-hidden="true"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
