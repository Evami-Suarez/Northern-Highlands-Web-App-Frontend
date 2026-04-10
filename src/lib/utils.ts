/**
 * ============================================================
 * EXAMPLE CONTENT - You can delete or modify this file
 * ============================================================
 */

/**
 * Formats a date string to a human-readable format
 * @param date - ISO date string or Date object
 * @returns Formatted date (e.g., "January 1, 2024")
 * @example
 * formatDate('2024-01-01') // "January 1, 2024"
 */
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Combines CSS class names, filtering out falsy values
 * @param classes - Array of class names
 * @returns Combined class string
 * @example
 * cn('text-sm', false && 'hidden', 'font-bold') // "text-sm font-bold"
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}