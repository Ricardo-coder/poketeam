import React from 'react';
import { render } from '@testing-library/react';
import { Section } from './index';

describe('Section component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Section />);
    expect(container).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Section>Test Content</Section>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the correct className', () => {
    const { container } = render(<Section />);
    expect(container.firstChild).toHaveClass('section');
  });

  it('has the data-section attribute', () => {
    const { container } = render(<Section />);
    expect(container.firstChild).toHaveAttribute('data-section');
  });
});