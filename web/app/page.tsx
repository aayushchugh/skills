import { CopyCommand } from "@/components/copy-command";
import { SkillCard } from "@/components/skill-card";
import { getSkills } from "@/lib/skills";
import { npmPackageUrl, packageInstallCommand, site } from "@/lib/site";

const textLink =
  "font-medium text-white underline underline-offset-2 hover:text-neutral-300";

const panel = "rounded-xl border border-border bg-card p-5";

function StarBanner() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3">
      <p className="text-sm text-neutral-300">
        Star the repo so other students can find these skills.
      </p>
      <a
        href={site.githubUrl}
        className="inline-flex shrink-0 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
      >
        Star on GitHub
      </a>
    </div>
  );
}

export default function Home() {
  const skills = getSkills();
  const showingSamples = skills.every((skill) => skill.sample);

  return (
    <main className="flex flex-1 flex-col gap-12 pb-16">
      <section className="max-w-2xl pt-4">
        <h1 className="text-3xl font-medium text-white sm:text-4xl">Skills for your agent</h1>
        <p className="mt-4 text-lg leading-8">
          These are the agent skills I write and use while building real
          products. Each one is a <strong className="text-white">SKILL.md</strong>{" "}
          file that teaches your coding agent a repeatable workflow. Install
          the package to use them, or{" "}
          <a href={site.githubUrl} className={textLink}>
            read the source
          </a>{" "}
          and write your own.
        </p>
      </section>

      <StarBanner />

      <section className={panel}>
        <h2 className="text-lg font-medium text-white">Install the npm package</h2>
        <p className="mt-2 mb-4 text-sm leading-6">
          Add the{" "}
          <a href={npmPackageUrl()} className={textLink}>
            package
          </a>
          , then sync its skills into your agent.
        </p>
        <CopyCommand command={packageInstallCommand()} label={site.npmPackage} />
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-medium text-white">All skills</h2>
          {showingSamples ? (
            <p className="text-xs text-neutral-500">
              Samples until real skills are added.
            </p>
          ) : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      </section>

      <StarBanner />
    </main>
  );
}
