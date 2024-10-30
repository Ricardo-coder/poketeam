import React from 'react';
import { render } from '@testing-library/react';
import { Main } from './index';

describe('Main component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Main />);
    expect(container).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Main>Test Content</Main>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-class';
    const { container } = render(<Main className={customClass} />);
    expect(container.firstChild).toHaveClass(customClass);
  });
});