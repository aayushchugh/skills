import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col py-16">
      <h1 className="text-2xl font-medium text-white">Skill not found</h1>
      <p className="mt-3 leading-7">That skill is not in the catalog.</p>
      <Link
        href="/"
        className="mt-6 w-fit font-medium text-white underline underline-offset-2 hover:text-neutral-300"
      >
        Back to all skills
      </Link>
    </main>
  );
}
