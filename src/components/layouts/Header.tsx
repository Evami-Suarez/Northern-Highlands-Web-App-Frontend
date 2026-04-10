import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-zinc-950/70">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-serif tracking-tight text-brand-zinc dark:text-stone-100">
          NORTHERN HIGHLANDS
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ['THE RESORT', '/resort'],
            ['SUITES', '/suites'],
            ['DINING', '/dine'],
            ['GALLERY', '/gallery'],
            ['REVIEWS', '/reviews'],
          ].map(([label, href]) => (
            <Link 
              key={label} 
              href={href} 
              className="text-xs font-semibold tracking-widest text-zinc-600 transition-colors hover:text-brand-sienna dark:text-zinc-400 dark:hover:text-stone-100"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link 
          href="/book" 
          className="rounded bg-brand-sienna px-6 py-2.5 text-xs font-bold tracking-widest text-white transition-all hover:bg-orange-700 active:scale-95"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}