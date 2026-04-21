'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  BedDouble, 
  Utensils, 
  CreditCard, 
  RotateCcw 
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: BookOpen, label: 'Bookings', href: '/bookings' },
  { icon: BedDouble, label: 'Rooms', href: '/rooms' },
  { icon: Utensils, label: 'Dining', href: '/menu-management' },
  { icon: CreditCard, label: 'Payments', href: '/payments' },
  { icon: RotateCcw, label: 'Refunds', href: '/RefundRequests' },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col h-full px-4 py-8">
        {/* Logo Section */}
        <div className="mb-10 px-2">
          <h1 className="text-xl font-serif italic text-brand-sienna leading-tight tracking-tight">
            Alpenglow Admin
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold mt-0.5">
            Luxury Management Suite
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href) || (item.label === 'Dining' && pathname.includes('menu-management'));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 text-sm font-medium transition-all rounded-lg group relative ${
                  isActive 
                    ? 'text-brand-sienna bg-orange-50/50 dark:bg-orange-950/20' 
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900 dark:hover:text-zinc-300'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-brand-sienna' : 'group-hover:text-zinc-900'}`} />
                {item.label}
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-brand-sienna rounded-l-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="mt-auto border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-100 ring-2 ring-zinc-50">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Admin Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Admin</p>
              <p className="text-[10px] text-zinc-500 font-medium tracking-wide">Shift Manager</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
