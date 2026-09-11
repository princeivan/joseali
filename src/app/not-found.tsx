import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-900/5 text-forest-900">
        <Compass className="h-8 w-8" aria-hidden="true" />
      </span>
      <p className="mt-6 font-display text-6xl text-forest-950">404</p>
      <h1 className="mt-3 font-display text-2xl text-forest-950">
        Looks like you&apos;ve taken a wrong turn.
      </h1>
      <p className="mt-2 max-w-sm text-sm text-ink-500">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
      >
        Back to Home
      </Link>
    </div>
  );
}
