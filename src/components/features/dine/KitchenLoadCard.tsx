'use client';

import { Activity } from 'lucide-react';

export function KitchenLoadCard() {
  return (
    <div className="bg-indigo-50/50 dark:bg-indigo-950/10 rounded-2xl p-6 border border-indigo-100/50 dark:border-indigo-900/20">
      <div className="flex items-center gap-2 text-indigo-600/80 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-widest mb-4">
        <Activity className="w-3 h-3" />
        Kitchen Load
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-xl font-serif text-zinc-900 dark:text-zinc-100">Optimal</h4>
          <p className="text-[11px] text-zinc-400 font-medium">Average prep time: 18 mins</p>
        </div>
        
        <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
        </div>
      </div>
    </div>
  );
}
