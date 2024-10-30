import React from 'react';
import { render } from '@testing-library/react';
import { HeaderContent } from './';
import { Section } from '@/components/atoms';
import { Logo } from '@/components/molecules';

jest.mock('../../atoms', () => ({
  Section: jest.fn(({ children }) => <div>{children}</div>),
  Header: jest.fn(({ children, className }) => <header className={className}>{children}</header>),
}));

jest.mock('../../molecules', () => ({
  Logo: jest.fn(() => <div>Logo</div>),
}));

describe('HeaderContent', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<HeaderContent />);
    expect(getByText('Logo')).toBeInTheDocument();
  });

  it('should have the correct class', () => {
    const { container } = render(<HeaderContent />);
    expect(container.querySelector('header')).toHaveClass('header');
  });

  it('should contain Section component', () => {
    render(<HeaderContent />);
    expect(Section).toHaveBeenCalled();
  });

  it('should contain Logo component', () => {
    render(<HeaderContent />);
    expect(Logo).toHaveBeenCalled();
  });

  it('should render Header component with correct class', () => {
    const { container } = render(<HeaderContent />);
    expect(container.querySelector('header')).toHaveClass('header');
  });
});