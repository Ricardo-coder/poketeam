import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GenerationsGrid } from './index';
import { useGenerations } from '@/hooks';

jest.mock('../../../hooks');

describe('GenerationsGrid', () => {
  it('renders null when loading', () => {
    (useGenerations as jest.Mock).mockReturnValue({
      generations: null,
      isLoading: true,
      isError: false,
    });

    const { container } = render(<GenerationsGrid />);
    expect(container.firstChild).toBeNull();
  });

  it('renders null when there is an error', () => {
    (useGenerations as jest.Mock).mockReturnValue({
      generations: null,
      isLoading: false,
      isError: true,
    });

    const { container } = render(<GenerationsGrid />);
    expect(container.firstChild).toBeNull();
  });

  it('renders generations grid correctly', () => {
    const mockGenerations = {
      data: {
        results: [
          { name: 'generation-i' },
          { name: 'generation-ii' },
        ],
        count: 2,
      },
    };

    (useGenerations as jest.Mock).mockReturnValue({
      generations: mockGenerations,
      isLoading: false,
      isError: false,
    });

    render(<GenerationsGrid />);

    expect(screen.getByText('GEN 1')).toBeInTheDocument();
    expect(screen.getByText('GEN 2')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});