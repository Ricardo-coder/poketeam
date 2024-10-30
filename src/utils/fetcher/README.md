# Fetcher Utility

This utility provides a fetcher function to be used with the `swr` library for data fetching.

## Installation

First, ensure you have `swr` installed:

```bash
npm install swr
```

## Usage

Import the `fetcher` function from the utility file and use it with `swr`.

```typescript
import useSWR from 'swr';
import { fetcher } from './utils/fetcher';

const { data, error } = useSWR('/api/data', fetcher);
```

## Code

```typescript
import { Fetcher } from "swr";

export const fetcher: Fetcher<unknown, string> = (...args) => fetch(...args).then((res) => res.json());
```

## Explanation

- **Fetcher Function**: The `fetcher` function uses the Fetch API to make HTTP requests and returns the response in JSON format.
- **TypeScript**: The function is typed using TypeScript to ensure type safety.

## License

This project is licensed under the MIT License.