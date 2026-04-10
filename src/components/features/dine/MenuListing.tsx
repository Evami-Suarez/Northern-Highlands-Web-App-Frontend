const MENU_DATA = {
  local: {
    title: 'Local Hilltop Flavors',
    items: [
      { name: 'Highland-caught Tilapia', description: 'Locally sourced, pan-seared with wild garlic and charred valley ramps.', price: '$38' },
      { name: 'Summit Wild Mushroom Risotto', description: 'Foraged porcini, truffle oil, 24-month aged parmesan.', price: '$32' },
      { name: 'Braised Highland Lamb', description: '12-hour slow braise, red wine reduction, parsnip silk.', price: '$45' },
    ]
  },
  international: {
    title: 'International Favorites',
    items: [
      { name: 'Sunset Pasta', description: 'Hand-made pappardelle, saffron cream, roasted cherry tomatoes.', price: '$29' },
      { name: 'Black Angus Fillet', description: 'Center cut, peppercorn crust, fondant potatoes, asparagus.', price: '$58' },
      { name: 'Seared Scallops', description: 'U10 scallops, pea purée, pancetta crisp, mint oil.', price: '$42' },
    ]
  },
  drinks: {
    title: 'Sunset Drinks',
    items: [
      { name: 'The Highland Old Fashioned', description: 'Aged bourbon, maple cedar bitters, smoked orange peel.', price: '$18' },
      { name: 'Twilight Lavender Fizz', description: 'Botanical gin, fresh lavender, lemon, egg white, soda.', price: '$16' },
      { name: 'Estate Reserve Cabernet', description: 'By the glass. Private label from our northern vineyard slopes.', price: '$24' },
    ]
  }
};

export function MenuListing() {
  return (
    <section className="bg-zinc-50 py-24 dark:bg-[#0c0a09]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(MENU_DATA).map(([key, section]) => (
            <div key={key} className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-zinc-200 dark:bg-stone-800" />
                <h3 className="text-2xl font-serif text-brand-sienna dark:text-stone-100 italic">
                  {section.title}
                </h3>
                <div className="h-px flex-grow bg-zinc-200 dark:bg-stone-800" />
              </div>
              
              <div className="space-y-10">
                {section.items.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-lg font-serif text-brand-zinc dark:text-stone-200">
                        {item.name}
                      </h4>
                      <span className="text-sm font-bold text-brand-sienna">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm italic leading-relaxed text-zinc-400 dark:text-stone-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
