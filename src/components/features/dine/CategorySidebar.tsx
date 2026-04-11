'use client';

import { Edit3, UtensilsCrossed, ChefHat, Stars, Wine, Plus } from 'lucide-react';

const categories = [
  { icon: UtensilsCrossed, label: 'Appetizers', count: 12, active: true },
  { icon: ChefHat, label: 'Mains', count: 24, active: false },
  { icon: Stars, label: 'Sunset Specials', count: 6, active: false },
  { icon: Wine, label: 'Drinks', count: 18, active: false },
];

export function CategorySidebar() {
  return (
    <div className="w-64 space-y-6">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Categories</h3>
          <button className="text-zinc-400 hover:text-brand-sienna transition-colors">
            <Edit3 className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                cat.active
                  ? 'bg-orange-50 text-brand-sienna dark:bg-orange-950/20 shadow-sm'
                  : 'text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800'
              }`}
            >
              <div className="flex items-center gap-3 text-sm font-semibold">
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </div>
              <span className={`text-[11px] font-bold ${cat.active ? 'text-brand-sienna/60' : 'text-zinc-300'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <button className="w-full mt-6 py-3 border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-zinc-400 hover:border-zinc-200 hover:text-zinc-600 transition-all">
          <Plus className="w-3 h-3" />
          Add Category
        </button>
      </div>
    </div>
  );
}
