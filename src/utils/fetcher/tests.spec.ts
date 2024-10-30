import { fetcher } from './index';

describe('fetcher', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch data and return JSON', async () => {
    const mockResponse = { data: 'test' };
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetcher('https://api.example.com/data');
    expect(result).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/data');
  });

  it('should handle fetch errors', async () => {
    const mockError = new Error('Fetch error');
    (global.fetch as jest.Mock).mockRejectedValue(mockError);

    await expect(fetcher('https://api.example.com/data')).rejects.toThrow('Fetch error');
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/data');
  });
});