// ============================================================
// EXAMPLE CONTENT - You can delete or modify this file
// ============================================================

import { Card, CardContent, CardTitle } from '@/components/ui';
import { formatDate } from '@/lib/utils';

/**
 * Event card component for the events page
 * Example of a feature-specific component
 * 
 * @example
 * ```tsx
 * import { EventCard } from '@/components/features/events';
 * 
 * <EventCard
 *   title="Summer Music Festival"
 *   description="Live music and food vendors"
 *   date="2024-07-15"
 *   location="Main Lawn"
 * />
 * ```
 */
export function EventCard({
  title,
  description,
  date,
  location,
}: {
  title: string;
  description: string;
  date: string;
  location: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-zinc-100 dark:bg-zinc-800" />
      <CardContent className="p-4">
        <p className="mb-2 text-sm text-zinc-500">{formatDate(date)}</p>
        <CardTitle className="mb-2 text-lg">{title}</CardTitle>
        <p className="mb-2 text-sm text-zinc-500">{description}</p>
        <p className="text-sm font-medium">📍 {location}</p>
      </CardContent>
    </Card>
  );
}

/**
 * Event list component - displays a grid of events
 */
export function EventList({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}