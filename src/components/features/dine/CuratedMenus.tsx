import { ShoppingBasket, Wine } from 'lucide-react';

export function CuratedMenus() {
  return (
    <section id="menu" className="container mx-auto px-6 py-24 lg:px-12">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left Side: Text and Categories */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-brand-zinc dark:text-stone-100 lg:text-5xl">
              Our Curated Menus
            </h2>
            <p className="max-w-md leading-relaxed text-zinc-500 dark:text-stone-400">
              We source our ingredients from the highland slopes and valley streams surrounding our estate. Our chefs interpret traditional mountain recipes through a contemporary lens.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-stone-900">
                <ShoppingBasket className="text-zinc-600 dark:text-stone-300" />
              </div>
              <div>
                <h4 className="text-lg font-serif text-brand-zinc dark:text-stone-200">Hilltop To Table</h4>
                <p className="max-w-xs text-sm leading-6 text-zinc-400">
                  Daily harvests from the Highland estates ensure peak freshness and vibrational flavor.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-stone-900">
                <Wine className="text-zinc-600 dark:text-stone-300" />
              </div>
              <div>
                <h4 className="text-lg font-serif text-brand-zinc dark:text-stone-200">The Cellar</h4>
                <p className="max-w-xs text-sm leading-6 text-zinc-400">
                  A collection of 1,200 labels, featuring a selection of high-altitude boutique vineyards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Mosaic */}
        <div className="grid grid-cols-2 gap-4">
          <div className="group relative col-span-2 h-80 overflow-hidden rounded-lg">
             <div className="absolute inset-0 z-10 bg-black/20 transition-opacity group-hover:bg-black/40" />
             <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
              aria-hidden="true" 
            />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-[10px] font-bold tracking-widest text-brand-sienna uppercase">Signature Dish</p>
              <h3 className="text-2xl font-serif text-white">Highland-caught Tilapia</h3>
              <p className="text-xs text-stone-300">Smoked leek emulsion, mountain herbs, crisp skin.</p>
            </div>
          </div>
          
          <div className="group relative h-48 overflow-hidden rounded-lg">
             <div className="absolute inset-0 z-10 bg-black/10 transition-opacity group-hover:bg-black/30" />
             <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
              aria-hidden="true" 
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-lg font-serif text-white">Sunset Pasta</h3>
            </div>
          </div>

          <div className="group relative h-48 overflow-hidden rounded-lg">
             <div className="absolute inset-0 z-10 bg-black/10 transition-opacity group-hover:bg-black/30" />
             <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536935338218-d4135ef95d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
              aria-hidden="true" 
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-lg font-serif text-white">Lavender Mist</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
