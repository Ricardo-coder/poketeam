import { renderHook } from '@testing-library/react';
import useSWR from 'swr';
import { useGenerations } from './index';

jest.mock('swr');

describe('useGenerations', () => {
  it('should return data when the fetch is successful', async () => {
    const mockData = [{ id: 1, name: 'Generation 1' }];
    (useSWR as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });

    const { result } = renderHook(() => useGenerations());

    expect(result.current.generations).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBeNull();
  });

  it('should return an error when the fetch fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useSWR as jest.Mock).mockReturnValue({
      data: null,
      error: mockError,
      isLoading: false,
    });

    const { result } = renderHook(() => useGenerations());

    expect(result.current.generations).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(mockError);
  });

  it('should indicate loading state', async () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    const { result } = renderHook(() => useGenerations());

    expect(result.current.generations).toBeNull();
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBeNull();
  });
});