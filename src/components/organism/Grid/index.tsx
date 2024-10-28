'use client';
import { useGenerations } from "@/hooks";

export function Grid(): JSX.Element | null {
  const { generations, isLoading, isError } = useGenerations();

  if (isError || isLoading) {
    return null
  }

  const { results } = generations?.data;

  return (
    <div>
      {isLoading ? (
        <div />
      ) : (
        <div>
          {results.map((generation, index) => (
            <div key={index}>
              <h2>{generation.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}