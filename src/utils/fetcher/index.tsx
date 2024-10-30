
/**
 * A fetcher function to be used with SWR (stale-while-revalidate) for data fetching.
 * 
 * @param args - The arguments to be passed to the fetch function, typically the URL and options.
 * @returns A promise that resolves to the JSON-parsed response of the fetch request.
 */
import { Fetcher } from "swr";

export const fetcher: Fetcher<unknown, string> = (...args) => fetch(...args).then((res) => res.json());
