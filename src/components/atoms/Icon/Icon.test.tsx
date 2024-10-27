import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  lazy: jest.fn(() => {
    const MockComponent: React.FC<{ name: string; sizes: { width: number; height: number } }> = ({ sizes, ...props }) => (
      <svg {...sizes} {...props} data-testid="icon-svg" />
    );
    MockComponent.displayName = 'MockComponent';
    return MockComponent;
  }),
}));

describe('Icon Component', () => {
  it('should render null if no icon is provided', () => {
    const { container } = render(<Icon sizes={{ width: 24, height: 24 }} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render the icon if icon is provided', async () => {
    render(<Icon sizes={{ width: 24, height: 24 }} icon="test-icon" />);
    const iconElement = await screen.findByTestId('icon-svg');
    expect(iconElement).toBeInTheDocument();
  });

  it('should pass sizes and fill props to the icon', async () => {
    render(<Icon sizes={{ width: 24, height: 24 }} fill="red" icon="test-icon" />);
    const iconElement = await screen.findByTestId('icon-svg');

    expect(iconElement).toHaveAttribute('height', '24');
    expect(iconElement).toHaveAttribute('width', '24');
    expect(iconElement).toHaveAttribute('fill', 'red');
  });
});