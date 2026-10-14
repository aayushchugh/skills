import { codeToHtml } from "shiki";
import { CopyButton } from "@/components/copy-button";
import { skillCodeTheme } from "@/lib/code-theme";

async function highlightMarkdown(source: string) {
  "use cache";
  return codeToHtml(source, {
    lang: "markdown",
    theme: skillCodeTheme,
  });
}

export async function SkillSource({ source }: { source: string }) {
  const html = await highlightMarkdown(source);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2">
        <p className="font-mono text-sm text-neutral-400">SKILL.md</p>
        <CopyButton text={source} />
      </div>
      <div
        className="[&_pre]:overflow-x-auto [&_pre]:!bg-transparent [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
