import React from 'react';
import { render } from '@testing-library/react';
import { Figure } from './';

describe('Figure', () => {
  it('should render without crashing', () => {
    const { container } = render(<Figure>Content</Figure>);
    expect(container.querySelector('figure')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    const { getByText } = render(<Figure>Content</Figure>);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('should apply the correct className', () => {
    const className = 'test-class';
    const { container } = render(<Figure className={className}>Content</Figure>);
    expect(container.querySelector('figure')).toHaveClass(className);
  });

  it('should render without className', () => {
    const { container } = render(<Figure>Content</Figure>);
    expect(container.querySelector('figure')).not.toHaveAttribute('class');
  });
});