// ============================================================
// EXAMPLE CONTENT - You can delete or modify this file
// ============================================================

import { Card, CardContent, CardTitle } from '@/components/ui';

/**
 * Menu item card for the dine page
 * Example of a feature-specific component
 * 
 * @example
 * ```tsx
 * import { MenuCard } from '@/components/features/dine';
 * 
 * <MenuCard
 *   name="Grilled Salmon"
 *   description="Fresh Atlantic salmon with herbs"
 *   price={24.99}
 *   category="Seafood"
 * />
 * ```
 */
export function MenuCard({
  name,
  description,
  price,
  category,
}: {
  name: string;
  description: string;
  price: number;
  category: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-zinc-100 dark:bg-zinc-800" />
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-500">{category}</span>
          <span className="font-semibold">${price.toFixed(2)}</span>
        </div>
        <CardTitle className="mb-2 text-lg">{name}</CardTitle>
        <p className="text-sm text-zinc-500">{description}</p>
      </CardContent>
    </Card>
  );
}

/**
 * Reservation form for the dine page
 * Example of a feature-specific form component
 */
export function ReservationForm() {
  return (
    <form className="space-y-4 rounded-lg border p-6">
      <h3 className="text-lg font-semibold">Make a Reservation</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Date</label>
          <input
            type="date"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
      >
        Reserve Table
      </button>
    </form>
  );
}