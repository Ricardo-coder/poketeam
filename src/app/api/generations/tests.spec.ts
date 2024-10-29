/**
 * @jest-environment node
 */

import { GET } from './route';
import { GENERATIONS_API_URL } from "@/CONSTANTS";

global.fetch = jest.fn();

describe('GET', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data from the generations API and return it as a JSON response', async () => {
    const mockData = { generation: 'test' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const response = await GET();
    const jsonResponse = await response.json();

    expect(fetch).toHaveBeenCalledWith(`${GENERATIONS_API_URL}/generation/`);
    expect(jsonResponse).toEqual({ data: mockData });
  });

  it('should handle fetch errors gracefully', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'));

    await expect(GET()).rejects.toThrow('Fetch error');
  });
});