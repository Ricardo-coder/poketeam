# Pokémon Generations API

This document provides information about the Pokémon Generations API endpoint used in the project.

## API Endpoint

The API endpoint for fetching Pokémon generations is defined in the `GENERATIONS_API_URL` constant.

## Code Example

Below is an example of how to fetch Pokémon generations using the API:

```typescript
import { GENERATIONS_API_URL } from "@/CONSTANTS";

export const dynamic = 'force-static';

export async function GET(): Promise<Response> {
  const res = await fetch(`${GENERATIONS_API_URL}/generation/`);
  const data = await res.json();

  return Response.json({ data });
}
```

## Explanation

- **GENERATIONS_API_URL**: This constant holds the base URL for the Pokémon Generations API.
- **dynamic**: This export is set to `'force-static'` to indicate that the response should be statically generated.
- **GET function**: This asynchronous function fetches data from the Pokémon Generations API and returns it as a JSON response.

## Usage

To use this API endpoint, ensure that the `GENERATIONS_API_URL` is correctly set in your constants file and that the endpoint is accessible.

## Notes

- Make sure to handle any potential errors that might occur during the fetch operation.
- Ensure that the API URL is correct and the server is running.