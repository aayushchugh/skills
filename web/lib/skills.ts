import fs from "node:fs";
import path from "node:path";
import { sampleSkillSources } from "@/lib/sample-skills";

export type Skill = {
  slug: string;
  name: string;
  title: string;
  description: string;
  source: string;
  sample: boolean;
};

const skillsDir = path.join(process.cwd(), "..", "skills");

export function getSkills(): Skill[] {
  const skills = readSkillFiles();
  if (skills.length > 0) {
    return skills;
  }
  return sampleSkillSources.map((source) =>
    parseSkill(source.slug, source.markdown, true),
  );
}

export function getSkill(slug: string): Skill | undefined {
  return getSkills().find((skill) => skill.slug === slug);
}

function readSkillFiles(): Skill[] {
  if (!fs.existsSync(skillsDir)) {
    return [];
  }

  const skills: Skill[] = [];
  for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }
    const filePath = path.join(skillsDir, entry.name, "SKILL.md");
    if (!fs.existsSync(filePath)) {
      continue;
    }
    const markdown = fs.readFileSync(filePath, "utf8");
    skills.push(parseSkill(entry.name, markdown, false));
  }

  return skills.sort((a, b) => a.title.localeCompare(b.title));
}

function parseSkill(slug: string, markdown: string, sample: boolean): Skill {
  const { data, body } = parseFrontmatter(markdown);
  const name = data.name || slug;
  const title = headingTitle(body) ?? titleFromName(name);
  const description = data.description || firstParagraph(body) || "No description yet.";

  return {
    slug,
    name,
    title,
    description,
    source: markdown,
    sample,
  };
}

function parseFrontmatter(markdown: string): {
  data: Record<string, string>;
  body: string;
} {
  if (!markdown.startsWith("---\n")) {
    return { data: {}, body: markdown };
  }

  const end = markdown.indexOf("\n---\n", 4);
  if (end === -1) {
    return { data: {}, body: markdown };
  }

  const data: Record<string, string> = {};
  const lines = markdown.slice(4, end).split("\n");
  let index = 0;

  while (index < lines.length) {
    const match = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(lines[index] ?? "");
    if (!match) {
      index += 1;
      continue;
    }

    const key = match[1] ?? "";
    const rawValue = (match[2] ?? "").trim();
    if (rawValue === ">" || rawValue === ">-" || rawValue === "|" || rawValue === "|-") {
      const parts: string[] = [];
      index += 1;
      while (index < lines.length && /^\s+/.test(lines[index] ?? "")) {
        parts.push((lines[index] ?? "").trim());
        index += 1;
      }
      data[key] = rawValue.startsWith(">")
        ? parts.filter(Boolean).join(" ")
        : parts.join("\n");
      continue;
    }

    data[key] = unquote(rawValue);
    index += 1;
  }

  return { data, body: markdown.slice(end + 5).replace(/^\n/, "") };
}

function unquote(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function headingTitle(body: string): string | undefined {
  const match = /^#\s+(.+)$/m.exec(body);
  const title = match?.[1]?.trim();
  return title || undefined;
}

function titleFromName(name: string): string {
  return name
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function firstParagraph(body: string): string {
  const paragraph = body
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.length > 0 && !line.startsWith("#"));
  return paragraph ?? "";
}
