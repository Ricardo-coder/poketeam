export function useGrid(totalItens: number): number {
  if (!totalItens) return 0;

  if (totalItens <= 6) return 2;

  if (totalItens > 12) return 4;

  return totalItens % 3 === 0 ? 3 : 4;
}