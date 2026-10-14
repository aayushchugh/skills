import { site, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border py-8 text-sm">
      <nav aria-label="Social links" className="flex flex-wrap gap-x-4 gap-y-2">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-sm text-neutral-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="mt-4 text-xs text-neutral-500">
        Built by{" "}
        <a href={site.portfolioUrl} className="text-neutral-300 underline underline-offset-2 hover:text-white">
          {site.author}
        </a>
        .
      </p>
    </footer>
  );
}
