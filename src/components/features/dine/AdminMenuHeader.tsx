'use client';

import { Plus } from 'lucide-react';

export function AdminMenuHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-serif text-zinc-900 dark:text-zinc-50 mb-2">
          Culinary Management
        </h2>
        <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed">
          Refine the gastronomic journey of Alpenglow. Manage seasonal offerings, adjust pricing, and curate the Highlands' finest menu.
        </p>
      </div>
      <button className="flex items-center gap-2 bg-brand-sienna hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg shadow-orange-950/20 active:scale-95">
        <Plus className="w-4 h-4" />
        Add New Dish
      </button>
    </div>
  );
}
