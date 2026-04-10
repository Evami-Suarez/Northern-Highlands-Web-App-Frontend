'use client';

export function ReservationSection() {
  return (
    <section id="reserve" className="relative py-24">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center grayscale brightness-[0.2]"
          aria-hidden="true" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl dark:bg-zinc-900">
          <div className="px-8 py-12 text-center lg:px-16">
            <h2 className="mb-4 text-4xl font-serif text-brand-zinc dark:text-stone-100">
              Dining Reservations
            </h2>
            <p className="mb-10 text-sm leading-6 text-zinc-500 dark:text-stone-400">
              Secure your experience at the edge of the horizon. Tables are limited for the alpenglow seating.
            </p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Date */}
                <div className="text-left">
                  <label className="mb-2 block text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase">
                    Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full rounded bg-zinc-50 px-4 py-3 text-sm text-zinc-800 outline-none transition-all focus:ring-1 focus:ring-brand-sienna dark:bg-stone-800 dark:text-zinc-200 lg:text-base"
                  />
                </div>

                {/* Time */}
                <div className="text-left">
                  <label className="mb-2 block text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase">
                    Time
                  </label>
                  <select className="w-full appearance-none rounded bg-zinc-50 px-4 py-3 text-sm text-zinc-800 outline-none transition-all focus:ring-1 focus:ring-brand-sienna dark:bg-stone-800 dark:text-zinc-200 lg:text-base">
                    <option>18:00 (Sunset Primary)</option>
                    <option>19:30 (Starlight Seating)</option>
                    <option>21:00 (Late Night)</option>
                  </select>
                </div>

                {/* Guests */}
                <div className="text-left">
                  <label className="mb-2 block text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase">
                    Guests
                  </label>
                  <select className="w-full appearance-none rounded bg-zinc-50 px-4 py-3 text-sm text-zinc-800 outline-none transition-all focus:ring-1 focus:ring-brand-sienna dark:bg-stone-800 dark:text-zinc-200 lg:text-base">
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6+ Guests</option>
                  </select>
                </div>

                {/* Special Occasion */}
                <div className="text-left">
                  <label className="mb-2 block text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase">
                    Special Occasion
                  </label>
                  <input 
                    type="text" 
                    placeholder="Birthday, Anniversary..."
                    className="w-full rounded bg-zinc-50 px-4 py-3 text-sm text-zinc-800 outline-none transition-all focus:ring-1 focus:ring-brand-sienna dark:bg-stone-800 dark:text-zinc-200 lg:text-base"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full rounded bg-brand-sienna py-4 text-xs font-bold tracking-widest text-white transition-all hover:bg-orange-700 active:scale-[0.98]"
              >
                RESERVE TABLE
              </button>
              
              <p className="text-[10px] text-zinc-400">
                Cancellations must be made 24 hours prior to reservation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
