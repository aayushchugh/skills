export const site = {
  name: "Ayush Chugh / Skills",
  author: "Ayush Chugh",
  url: "https://skills.ayushchugh.com",
  description:
    "Agent skills I write and use while building real products. Install the npm package to sync them into your coding agent, or star the repo and learn how they work.",
  npmPackage: "@aayushchugh/skills",
  githubRepo: "aayushchugh/skills",
  githubUrl: "https://github.com/aayushchugh/skills",
  portfolioUrl: "https://ayushchugh.com",
  blogUrl: "https://ayushchugh.com/blog",
  xHandle: "@aayushchugh",
} as const;

export const socialLinks = [
  { label: "Email", href: "mailto:hey@ayushchugh.com" },
  { label: "GitHub", href: "https://github.com/aayushchugh" },
  { label: "X", href: "https://x.com/aayushchugh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aayushchugh/" },
  { label: "Discord", href: "https://discord.gg/wydHwZNu8W" },
] as const;

export function npmPackageUrl(): string {
  return `https://www.npmjs.com/package/${site.npmPackage}`;
}

export function packageInstallCommand(): string {
  return `npm install ${site.npmPackage}\nnpx skills experimental_sync`;
}

export function skillInstallCommand(slug: string): string {
  return `npx skills add ${site.githubRepo} --skill ${slug} -g`;
}
