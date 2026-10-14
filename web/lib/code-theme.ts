import type { ThemeRegistration } from "shiki";

export const skillCodeTheme: ThemeRegistration = {
  name: "skills-neutral",
  type: "dark",
  colors: {
    "editor.background": "#111010",
    "editor.foreground": "#d4d4d4",
  },
  tokenColors: [
    {
      settings: { foreground: "#d4d4d4" },
    },
    {
      scope: ["markup.heading", "entity.name.section", "punctuation.definition.heading"],
      settings: { foreground: "#ffffff", fontStyle: "bold" },
    },
    {
      scope: ["entity.name.tag.yaml", "entity.name.tag"],
      settings: { foreground: "#a3a3a3" },
    },
    {
      scope: ["string", "string.unquoted"],
      settings: { foreground: "#e5e5e5" },
    },
    {
      scope: [
        "punctuation",
        "meta.separator",
        "markup.list punctuation.definition.list",
        "punctuation.definition.list.begin.markdown",
        "keyword.control.flow.block-scalar",
        "comment",
      ],
      settings: { foreground: "#737373" },
    },
    {
      scope: ["markup.inline.raw", "markup.fenced_code", "markup.raw"],
      settings: { foreground: "#86efac" },
    },
    {
      scope: ["markup.bold"],
      settings: { foreground: "#ffffff", fontStyle: "bold" },
    },
    {
      scope: ["markup.italic"],
      settings: { fontStyle: "italic" },
    },
    {
      scope: ["markup.underline.link", "string.other.link"],
      settings: { foreground: "#a3a3a3", fontStyle: "underline" },
    },
  ],
};
