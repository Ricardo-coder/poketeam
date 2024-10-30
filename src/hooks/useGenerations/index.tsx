/**
 * Custom hook to fetch Pokémon generations data.
 *
 * This hook uses the `useSWR` hook to fetch data from the `GENERATIONS_API` endpoint.
 * It returns the fetched generations data, a loading state, and an error state.
 *
 * @returns {UseGenerations} An object containing:
 * - `generations`: The fetched generations data.
 * - `isLoading`: A boolean indicating if the data is still being loaded.
 * - `isError`: An error object if there was an error fetching the data.
 */
import { GENERATIONS_API } from '@/CONSTANTS';
import { fetcher } from '@/utils';
import useSWR from 'swr';

interface UseGenerations {
  generations: Generations;
  isLoading: boolean;
  isError: unknown;
}

export function useGenerations(): UseGenerations {
  const { data, error, isLoading } = useSWR(GENERATIONS_API, fetcher)

  return {
    generations: data as Generations,
    isLoading,
    isError: error,
  }
}
