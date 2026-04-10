export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-serif text-brand-zinc dark:text-stone-100 mb-4">
          THE SANCTUARY
        </h1>
        <p className="text-2xl md:text-3xl text-brand-zinc/80 dark:text-stone-200 mb-8">
          Sanctuary Above The Clouds
        </p>
        <p className="max-w-3xl mx-auto text-lg text-brand-zinc/70 dark:text-stone-300 leading-relaxed">
          Experience the ultimate mountain retreat at The Sanctuary, where luxury meets nature. 
          Our carefully curated accommodations offer breathtaking views, world-class amenities, 
          and the perfect escape from the everyday. Nestled high above the clouds, each suite 
          provides an intimate connection with the majestic Northern Highlands while ensuring 
          your complete comfort and relaxation.
        </p>
      </header>

      {/* Accommodation Sections */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        {/* Summit Horizon Suite */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif text-brand-zinc dark:text-stone-100 mb-2">
                Summit Horizon Suite
              </h2>
              <p className="text-2xl text-brand-sienna font-semibold mb-4">
                $450 <span className="text-lg text-brand-zinc/60 dark:text-stone-400">/ night</span>
              </p>
              <p className="text-brand-zinc/70 dark:text-stone-300 mb-6 leading-relaxed">
                Perched at the highest point of our resort, the Summit Horizon Suite offers 
                unparalleled panoramic views of the surrounding mountain peaks. This spacious 
                retreat features floor-to-ceiling windows, a private terrace, and luxurious 
                furnishings designed for the discerning traveler.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  2 Bedrooms, King-sized beds
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Sleeps up to 4 guests
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Private hot tub & terrace
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Gourmet kitchen & wine cellar
                </li>
              </ul>
              <button className="bg-brand-sienna text-white px-8 py-3 rounded-sm hover:bg-brand-sienna/90 transition-colors">
                Book Now
              </button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Summit Horizon Suite" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Valley Vista Villa */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Valley Vista Villa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1">
              <h2 className="text-3xl font-serif text-brand-zinc dark:text-stone-100 mb-2">
                Valley Vista Villa
              </h2>
              <p className="text-2xl text-brand-sienna font-semibold mb-4">
                $380 <span className="text-lg text-brand-zinc/60 dark:text-stone-400">/ night</span>
              </p>
              <p className="text-brand-zinc/70 dark:text-stone-300 mb-6 leading-relaxed">
                Nestled in a secluded valley setting, this villa offers stunning views of 
                the surrounding landscape while providing complete privacy and tranquility. 
                The open-plan design seamlessly blends indoor and outdoor living spaces.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  1 Bedroom, Queen-sized bed
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Sleeps up to 2 guests
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Private deck with outdoor shower
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Full kitchen & fireplace
                </li>
              </ul>
              <button className="bg-brand-sienna text-white px-8 py-3 rounded-sm hover:bg-brand-sienna/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Highland Cloud Loft */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif text-brand-zinc dark:text-stone-100 mb-2">
                Highland Cloud Loft
              </h2>
              <p className="text-2xl text-brand-sienna font-semibold mb-4">
                $320 <span className="text-lg text-brand-zinc/60 dark:text-stone-400">/ night</span>
              </p>
              <p className="text-brand-zinc/70 dark:text-stone-300 mb-6 leading-relaxed">
                A cozy yet sophisticated retreat perfect for couples seeking romance and 
                adventure. The loft features exposed wooden beams, modern amenities, and 
                a private balcony that seems to float among the clouds.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Studio layout with sleeping loft
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Sleeps up to 2 guests
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Private balcony with mountain views
                </li>
                <li className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                  <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                  Kitchenette & stone fireplace
                </li>
              </ul>
              <button className="bg-brand-sienna text-white px-8 py-3 rounded-sm hover:bg-brand-sienna/90 transition-colors">
                Book Now
              </button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Highland Cloud Loft" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}