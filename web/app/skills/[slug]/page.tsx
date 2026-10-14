import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyCommand } from "@/components/copy-command";
import { SkillSource } from "@/components/skill-source";
import { getSkill, getSkills } from "@/lib/skills";
import { skillInstallCommand } from "@/lib/site";

export function generateStaticParams() {
  return getSkills().map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata(
  props: PageProps<"/skills/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const skill = getSkill(slug);
  if (!skill) {
    return { title: "Skill not found" };
  }

  return {
    title: skill.title,
    description: skill.description,
    alternates: { canonical: `/skills/${skill.slug}` },
    openGraph: {
      title: skill.title,
      description: skill.description,
      url: `/skills/${skill.slug}`,
    },
  };
}

export default async function SkillPage(props: PageProps<"/skills/[slug]">) {
  const { slug } = await props.params;
  const skill = getSkill(slug);
  if (!skill) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col">
      <Link
        href="/"
        className="w-fit rounded-sm text-sm text-neutral-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
      >
        ← All skills
      </Link>

      <header className="pt-6 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-medium text-white">{skill.title}</h1>
          {skill.sample ? (
            <span className="rounded border border-neutral-700 bg-neutral-800 px-1.5 text-xs text-neutral-300">
              Sample
            </span>
          ) : null}
        </div>
        <p className="mt-3 leading-7">{skill.description}</p>
      </header>

      <section className="border-t border-border py-8">
        <h2 className="mb-4 text-xl font-medium text-white">Install</h2>
        <CopyCommand
          command={skillInstallCommand(skill.slug)}
          label="Install this skill"
        />
      </section>

      <section className="border-t border-border py-8">
        <h2 className="mb-4 text-xl font-medium text-white">Skill file</h2>
        <SkillSource source={skill.source} />
      </section>
    </main>
  );
}
