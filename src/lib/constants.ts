/**
 * ============================================================
 * EXAMPLE CONTENT - You can delete or modify this file
 * ============================================================
 */

/**
 * Application name
 */
export const APP_NAME = 'Northern Highlands';

/**
 * API base URL from environment or default
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Route paths for navigation
 */
export const ROUTES = {
  HOME: '/',
  DINE: '/dine',
  EVENTS: '/events',
  GALLERY: '/gallery',
} as const;