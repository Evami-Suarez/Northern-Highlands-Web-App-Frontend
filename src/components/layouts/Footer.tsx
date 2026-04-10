/**
 * ============================================================
 * EXAMPLE CONTENT - You can delete or modify this file
 * ============================================================
 */

/**
 * Site footer component with copyright
 * @example
 * <Footer />
 */
export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
      <div className="container mx-auto px-4 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Northern Highlands. All rights reserved.</p>
      </div>
    </footer>
  );
}