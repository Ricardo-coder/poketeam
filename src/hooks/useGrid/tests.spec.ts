import { useGrid } from './';

describe('useGrid', () => {
  it('should return 2 when totalItens is less than or equal to 6', () => {
    expect(useGrid(6)).toBe(2);
    expect(useGrid(5)).toBe(2);
  });

  it('should return 4 when totalItens is greater than 12', () => {
    expect(useGrid(13)).toBe(4);
    expect(useGrid(20)).toBe(4);
  });

  it('should return 3 when totalItens is divisible by 3 and between 7 and 12', () => {
    expect(useGrid(9)).toBe(3);
    expect(useGrid(12)).toBe(3);
  });

  it('should return 4 when totalItens is not divisible by 3 and between 7 and 12', () => {
    expect(useGrid(10)).toBe(4);
    expect(useGrid(11)).toBe(4);
  });
});