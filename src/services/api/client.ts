/**
 * ============================================================
 * EXAMPLE CONTENT - You can delete or modify this file
 * ============================================================
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Generic fetch wrapper for API calls
 * @param endpoint - API endpoint path
 * @param options - Fetch options (method, headers, body)
 * @returns Parsed JSON response
 * @throws Error if response is not ok
 */
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

/**
 * Pre-configured API client with common HTTP methods
 */
export const apiClient = {
  /**
   * GET request
   * @example apiClient.get<User[]>('/users')
   */
  get: <T>(endpoint: string) => fetchApi<T>(endpoint),
  
  /**
   * POST request
   * @example apiClient.post('/users', { name: 'John' })
   */
  post: <T>(endpoint: string, data: unknown) =>
    fetchApi<T>(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  
  /**
   * PUT request
   * @example apiClient.put('/users/1', { name: 'John' })
   */
  put: <T>(endpoint: string, data: unknown) =>
    fetchApi<T>(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  
  /**
   * DELETE request
   * @example apiClient.delete('/users/1')
   */
  delete: <T>(endpoint: string) =>
    fetchApi<T>(endpoint, { method: 'DELETE' }),
};