/**
 * Fetches data from the generations API and returns it as a JSON response.
 *
 * @constant {string} dynamic - Indicates the dynamic behavior of the route.
 * @returns {Promise<Response>} A promise that resolves to a Response object containing the fetched data.
 */
import { GENERATIONS_API_URL } from "@/CONSTANTS";

export const dynamic = 'force-static';
export async function GET(): Promise<Response> {
  const res = await fetch(`${GENERATIONS_API_URL}/generation/`)
  const data = await res.json()

  return Response.json({ data })
}
