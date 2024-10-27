import { render } from '@testing-library/react';
import { Heading } from './';

describe('Heading Component', () => {
  it('renders correctly with default tag', () => {
    const { getByText } = render(<Heading>Test Heading</Heading>);
    const headingElement = getByText('Test Heading');
    expect(headingElement.tagName).toBe('H1');
    expect(headingElement).toHaveAttribute('data-heading', 'true');
  });

  it('renders correctly with specified tag', () => {
    const { getByText } = render(<Heading tag="h2">Test Heading</Heading>);
    const headingElement = getByText('Test Heading');
    expect(headingElement.tagName).toBe('H2');
    expect(headingElement).toHaveAttribute('data-heading', 'true');
  });

  it('renders nothing when children is not provided', () => { // @ts-expect-error Testing without children
    const { container } = render(<Heading />);
    expect(container.firstChild).toBeNull();
  });

  it('renders nothing when an invalid tag is provided', () => { // @ts-expect-error Testing invalid tag
    const { container } = render(<Heading tag="invalid">Test Heading</Heading>);
    expect(container.firstChild).toBeNull();
  });

  it('applies the correct className from styles', () => {
    const { getByText } = render(<Heading>Test Heading</Heading>);
    const headingElement = getByText('Test Heading');
    expect(headingElement).toHaveClass('heading');
  });
});