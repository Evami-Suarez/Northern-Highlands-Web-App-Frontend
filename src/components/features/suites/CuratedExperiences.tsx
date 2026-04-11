export function CuratedExperiences() {
  const experiences = [
    {
      id: 'romantic-sunset',
      title: 'Romantic Sunset Stay',
      description: 'Perfect for couples seeking intimacy with breathtaking sunset views from private terraces.',
      icon: '🌅'
    },
    {
      id: 'executive-weekend',
      title: 'Executive Weekend',
      description: 'Designed for business leaders needing luxury accommodations with workspace amenities.',
      icon: '💼'
    },
    {
      id: 'wellness-retreat',
      title: 'Wellness Retreat',
      description: 'Rejuvenate your mind and body with spa services and wellness-focused amenities.',
      icon: '🧘'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-brand-zinc dark:text-stone-100 mb-4">
            Curated Experiences
          </h2>
          <div className="w-24 h-1 bg-brand-sienna mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{experience.icon}</div>
              <h3 className="text-2xl font-serif text-brand-zinc dark:text-stone-100 mb-4">
                {experience.title}
              </h3>
              <p className="text-brand-zinc/70 dark:text-stone-300 mb-6 leading-relaxed">
                {experience.description}
              </p>
              <a 
                href="#"
                className="text-brand-sienna dark:text-brand-sienna font-semibold hover:text-brand-sienna/80 dark:hover:text-brand-sienna/80 transition-colors"
              >
                EXPLORE PACKAGE →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}