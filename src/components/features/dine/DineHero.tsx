import Link from 'next/link';

export function DineHero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      {/* Background Image Placeholder - To be replaced by User Asset */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      <div className="container relative z-20 mx-auto flex h-full flex-col justify-center px-6 text-white lg:px-12">
        <div className="max-w-3xl space-y-6">
          <p className="font-sans text-xs font-bold tracking-[0.3em] text-brand-sienna uppercase">
            Savor the Summit
          </p>
          <h1 className="text-5xl font-serif leading-tight md:text-7xl lg:text-8xl">
            An Alpenglow <br />
            Culinary Journey.
          </h1>
          <p className="max-w-xl text-lg font-light leading-relaxed text-stone-200">
            Experience the theater of the highlands through seasonal flavors, where every plate is a tribute to the landscape stretching before you.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 pt-8">
            <Link 
              href="#reserve" 
              className="rounded-sm bg-white px-8 py-4 text-xs font-bold tracking-widest text-brand-zinc transition-all hover:bg-stone-200"
            >
              Secure a Table
            </Link>
            <Link 
              href="#menu" 
              className="group flex items-center gap-2 text-xs font-bold tracking-widest text-white transition-all hover:text-stone-300"
            >
              View Menu Concepts
              <div className="h-px w-12 bg-white/50 transition-all group-hover:w-16 group-hover:bg-white" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-gradient-to-t from-white to-transparent dark:from-[#0c0a09]" />
    </section>
  );
}
