/**
 * ============================================================
 * EXAMPLE CONTENT - You can delete or modify this file
 * ============================================================
 */
import Link from 'next/link';

/**
 * Site header component with navigation
 * @example
 * <Header />
 */
export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          Northern Highlands
        </Link>
        <nav className="flex gap-6">
          <Link href="/dine" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            Dine
          </Link>
          <Link href="/events" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            Events
          </Link>
          <Link href="/gallery" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}