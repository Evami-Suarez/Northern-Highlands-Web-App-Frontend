'use client';

import { MoreVertical, Edit2, Trash2, Star } from 'lucide-react';

interface MenuItemProps {
  name: string;
  category: string;
  price: string;
  image: string;
  status: 'Available' | 'Unavailable' | 'Live' | 'Out of Season';
  isTopPerformer?: boolean;
  isLive?: boolean;
  description?: string;
  variant?: 'large' | 'small';
}

export function AdminMenuItemCard({
  name,
  category,
  price,
  image,
  status,
  isTopPerformer,
  isLive,
  description,
  variant = 'small'
}: MenuItemProps) {
  const isLarge = variant === 'large';

  return (
    <div className={`group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/40 ${isLarge ? 'col-span-1 border-brand-sienna/10' : ''}`}>
      {/* Image Section */}
      <div className={`relative ${isLarge ? 'h-56' : 'h-40'} overflow-hidden`}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        
        {isTopPerformer && (
          <div className="absolute top-4 left-4 bg-brand-sienna/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg border border-white/20">
            <Star className="w-3 h-3 fill-current" />
            Top Performer
          </div>
        )}

        {status === 'Out of Season' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <div className="bg-zinc-900/90 text-white px-4 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest border border-white/10">
              Out of Season
            </div>
          </div>
        )}

        {isLarge && (
          <div className="absolute bottom-4 left-6">
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{category}</span>
            <h4 className="text-2xl font-serif text-white mt-1">{name}</h4>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {!isLarge && (
          <div className="mb-4">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{category}</span>
            <h4 className="text-lg font-serif text-zinc-900 dark:text-zinc-100 mt-1">{name}</h4>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-serif text-zinc-900 dark:text-zinc-100">₱{price}</span>
            {description && <p className="text-[11px] text-zinc-500 mt-1">{description}</p>}
          </div>

          <div className="flex items-center gap-3">
             {/* Status Toggle */}
            <div className="flex flex-col items-end gap-1.5 mr-2">
              <span className={`text-[9px] font-bold uppercase tracking-widest ${status === 'Available' || isLive ? 'text-green-500' : 'text-zinc-400'}`}>
                {status}
              </span>
              <button className={`w-10 h-5 rounded-full relative transition-colors ${status === 'Available' || isLive ? 'bg-green-500' : 'bg-zinc-200 dark:bg-zinc-800'}`}>
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${status === 'Available' || isLive ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

            <div className="flex items-center gap-1 opacity-100 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-zinc-400 hover:text-brand-sienna hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                {isLarge ? <MoreVertical className="w-5 h-5" /> : <Edit2 className="w-4 h-4" />}
              </button>
              {!isLarge && (
                <button className="p-2 text-zinc-400 hover:text-red-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
