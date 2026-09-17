import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-28 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--moss)]">404</p>
      <h1 className="mt-4 text-4xl">Stigen tar slut här</h1>
      <p className="mt-3 text-sm text-[var(--needles)]">
        Springa är ett exempelprojekt med en landningssida. Inga fler leder.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[var(--bark)] px-5 py-3 text-sm text-[var(--fog)]"
      >
        Tillbaka mot ljuset
      </Link>
    </div>
  );
}
