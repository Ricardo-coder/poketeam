import { GENERATIONS_API } from '@/CONSTANTS';
import useSWR, { Fetcher } from 'swr'

interface UseGenerations {
  generations: Generations;
  isLoading: boolean;
  isError: unknown;
}

export function useGenerations(): UseGenerations {
  const fetcher: Fetcher<unknown, string> = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(GENERATIONS_API, fetcher)

  return {
    generations: data as Generations,
    isLoading,
    isError: error,
  }
}
