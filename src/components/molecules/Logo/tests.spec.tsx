import { render } from '@testing-library/react';
import { Logo } from './';
import { BRAND } from '@/CONSTANTS';

jest.mock('../../atoms', () => ({
  Icon: ({ icon, sizes }: { icon: string; sizes: { width: number; height: number } }) => (
    <div data-testid="icon" data-icon={icon} data-width={sizes.width} data-height={sizes.height}></div>
  ),
  Label: ({ children, ...props }: { children: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
}));

describe('Logo', () => {
  it('should render the Logo component with the correct text and icon', () => {
    const { getByText, getByTestId } = render(<Logo />);
    const [text1, text2] = BRAND.split(" ");

    expect(getByText(text1)).toBeInTheDocument();
    expect(getByText(text2)).toBeInTheDocument();

    const icon = getByTestId('icon');
    expect(icon).toHaveAttribute('data-icon', 'Pokeball');
    expect(icon).toHaveAttribute('data-width', '60');
    expect(icon).toHaveAttribute('data-height', '60');
  });

  it('should have the correct class name', () => {
    const { container } = render(<Logo />);
    expect(container.firstChild).toHaveClass('logo');
  });
});