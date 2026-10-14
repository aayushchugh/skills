import Link from "next/link";
import type { Skill } from "@/lib/skills";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition hover:border-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
    >
      <span className="mb-2 flex items-center justify-between gap-3">
        <span className="font-medium text-white">{skill.title}</span>
        {skill.sample ? (
          <span className="rounded border border-neutral-700 bg-neutral-800 px-1.5 text-xs text-neutral-300">
            Sample
          </span>
        ) : null}
      </span>
      <span className="text-sm leading-6 text-neutral-400">{skill.description}</span>
    </Link>
  );
}
