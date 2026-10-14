import Link from "next/link";
import { site } from "@/lib/site";

const focusRing =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400";

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-8">
      <nav aria-label="Main navigation">
        <Link href="/" className={`font-semibold text-white ${focusRing}`}>
          Skills
        </Link>
      </nav>
      <a
        href={site.portfolioUrl}
        className={`rounded-xl border border-border bg-card px-2.5 py-1 font-mono text-xs text-neutral-300 hover:text-white ${focusRing}`}
      >
        ayushchugh.com
      </a>
    </header>
  );
}
