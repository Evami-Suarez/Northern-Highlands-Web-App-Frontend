'use client';

import { Search, Bell, Settings } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-zinc-100 bg-white/80 px-8 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      {/* Search Bar */}
      <div className="relative w-96 group">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-brand-sienna" />
        <input
          type="text"
          placeholder="Search menu items..."
          className="h-10 w-full rounded-full bg-zinc-50 pl-10 pr-4 text-sm outline-none ring-1 ring-zinc-200 transition-all focus:bg-white focus:ring-2 focus:ring-brand-sienna/20 dark:bg-zinc-900/50 dark:ring-zinc-800 dark:focus:ring-brand-sienna/30"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-zinc-100 pr-6 dark:border-zinc-800">
          <button className="relative rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-zinc-100">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-sienna ring-2 ring-white dark:ring-zinc-950" />
          </button>
          <button className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-zinc-100">
            <Settings className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Alpenglow Estate</span>
        </div>
      </div>
    </header>
  );
}
