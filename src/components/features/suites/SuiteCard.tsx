import { Suite } from '@/types/suites';

interface SuiteCardProps {
  suite: Suite;
}

export function SuiteCard({ suite }: SuiteCardProps) {
  const isImageLeft = suite.imagePosition === 'left';

  return (
    <div className="mb-20 ">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className={isImageLeft ? 'order-1' : 'order-2 md:order-1'}>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={suite.image} 
              alt={suite.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className={isImageLeft ? 'order-2' : 'order-1'}>
          <h2 className="text-3xl font-serif text-brand-zinc dark:text-stone-100 mb-2">
            {suite.name}
          </h2>
          <p className="text-2xl text-brand-sienna font-semibold mb-4">
            ${suite.price} <span className="text-lg text-brand-zinc/60 dark:text-stone-400">/ night</span>
          </p>
          <p className="text-brand-zinc/70 dark:text-stone-300 mb-6 leading-relaxed">
            {suite.description}
          </p>
          <ul className="space-y-3 mb-8">
            {suite.features?.map((feature, index) => (
              <li key={index} className="flex items-center text-brand-zinc/80 dark:text-stone-200">
                <span className="w-2 h-2 bg-brand-sienna rounded-full mr-3"></span>
                {feature}
              </li>
            )) || null}
          </ul>
          <button className="bg-brand-sienna text-white px-8 py-3 rounded-sm hover:bg-brand-sienna/90 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}