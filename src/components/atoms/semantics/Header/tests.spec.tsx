import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './index';

describe('Header component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Header>Test Content</Header>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the given className', () => {
    const { container } = render(<Header className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders without children', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});