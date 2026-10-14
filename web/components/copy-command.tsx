import { CopyButton } from "@/components/copy-button";

type CopyCommandProps = {
  command: string;
  label: string;
};

export function CopyCommand({ command, label }: CopyCommandProps) {
  const lines = command.split("\n").filter((line) => line.length > 0);

  return (
    <div className="rounded-xl border border-border bg-background">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2">
        <p className="text-sm text-neutral-400">{label}</p>
        {lines.length === 1 ? <CopyButton text={command} /> : null}
      </div>
      {lines.length === 1 ? (
        <pre className="overflow-x-auto px-4 py-3 text-sm leading-6 text-neutral-100">
          <code className="font-mono">{command}</code>
        </pre>
      ) : (
        <ul>
          {lines.map((line) => (
            <li
              key={line}
              className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5 last:border-b-0"
            >
              <code className="min-w-0 overflow-x-auto font-mono text-sm leading-6 text-neutral-100">
                {line}
              </code>
              <CopyButton text={line} label={`Copy ${line}`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
