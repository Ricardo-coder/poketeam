import { GENERATIONS_API_URL } from "@/CONSTANTS";

export const dynamic = 'force-static';
export async function GET(): Promise<Response> {
  const res = await fetch(`${GENERATIONS_API_URL}/generation/`)
  const data = await res.json()

  return Response.json({ data })
}