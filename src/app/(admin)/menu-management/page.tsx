'use client';

import { 
  AdminMenuHeader, 
  CategorySidebar, 
  KitchenLoadCard, 
  AdminMenuItemCard 
} from '@/components/features/dine';
import { ListFilter, ChevronLeft, ChevronRight } from 'lucide-react';

const menuItems = [
  {
    name: 'Braised Highlands Lamb',
    category: 'Sunset Specials',
    price: '1,850',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    status: 'Available' as const,
    isTopPerformer: true,
    description: 'Includes mountain herb jus',
    variant: 'large' as const
  },
  {
    name: 'Lavender Gin Fizz',
    category: 'Drinks',
    price: '450',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
    status: 'Live' as const,
    isLive: true
  },
  {
    name: 'Mountain Burrata',
    category: 'Appetizers',
    price: '680',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    status: 'Live' as const,
    isLive: true
  },
  {
    name: 'Wild Salmon Fillet',
    category: 'Mains',
    price: '1,250',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    status: 'Out of Season' as const,
    description: 'Unavailable'
  }
];

export default function MenuManagementPage() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <AdminMenuHeader />

      <div className="flex gap-10 mt-10">
        {/* Left Side: Categories & Status */}
        <div className="space-y-8">
          <CategorySidebar />
          <KitchenLoadCard />
        </div>

        {/* Right Side: Filters, Grid, Pagination */}
        <div className="flex-1">
          {/* Top Filters & Sort */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
              {['All Items', 'Active', 'Out of Stock', 'Top Performers'].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    i === 0 
                      ? 'bg-zinc-900 text-white shadow-md dark:bg-zinc-100 dark:text-zinc-900' 
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 transition-colors">
              <ListFilter className="w-4 h-4" />
              Sorted by: <span className="text-brand-sienna">Alphabetical</span>
            </button>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <AdminMenuItemCard key={index} {...item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-between border-t border-zinc-100 pt-8 dark:border-zinc-800">
            <p className="text-xs text-zinc-400 font-medium tracking-wide text-center flex-1 ml-28">
              Showing <span className="text-zinc-900 dark:text-zinc-100 font-bold">4</span> of <span className="text-zinc-900 dark:text-zinc-100 font-bold">60</span> menu items
            </p>
            
            <div className="flex items-center gap-2">
              <button className="p-2 text-zinc-300 hover:text-zinc-600 transition-colors disabled:opacity-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    page === 1 
                      ? 'bg-brand-sienna text-white shadow-lg shadow-orange-950/20' 
                      : 'text-zinc-400 hover:text-zinc-900'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
