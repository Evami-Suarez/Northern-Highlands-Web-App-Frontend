/**
 * ============================================================
 * EXAMPLE CONTENT - You can delete or modify this file
 * ============================================================
 */
import { useState, useEffect } from 'react';

/**
 * Custom hook for managing localStorage
 * @param key - The localStorage key
 * @param initialValue - Default value if key doesn't exist
 * @returns [storedValue, setStoredValue] tuple
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'dark');
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}