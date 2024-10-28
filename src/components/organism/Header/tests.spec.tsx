import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './index';
import { Section } from '@/components/atoms';
import { Logo } from '@/components/molecules';

jest.mock('../../atoms', () => ({
  Section: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock('../../molecules', () => ({
  Logo: jest.fn(() => <div>Logo</div>),
}));

describe('Header', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Logo')).toBeInTheDocument();
  });

  it('should have the correct class', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('header')).toHaveClass('header');
  });

  it('should contain Section component', () => {
    render(<Header />);
    expect(Section).toHaveBeenCalled();
  });

  it('should contain Logo component', () => {
    render(<Header />);
    expect(Logo).toHaveBeenCalled();
  });
});