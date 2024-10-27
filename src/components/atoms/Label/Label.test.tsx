import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label Component', () => {
  it('renders with default tag (span)', () => {
    const { container } = render(<Label>Test Label</Label>);
    const labelElement = container.querySelector('span');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('Test Label');
  });

  it('renders with specified tag (p)', () => {
    const { container } = render(<Label tag="p">Test Label</Label>);
    const labelElement = container.querySelector('p');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('Test Label');
  });

  it('renders with default tag when invalid tag is provided', () => { // @ts-expect-error Testing invalid tag
    const { container } = render(<Label tag="div" as any>Test Label</Label>);
    const labelElement = container.querySelector('span');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('Test Label');
  });

  it('applies the correct class name', () => {
    const { container } = render(<Label>Test Label</Label>);
    const labelElement = container.querySelector('span');
    expect(labelElement).toHaveClass('label');
  });

  it('renders without children', () => {
    const { container } = render(<Label />);
    const labelElement = container.querySelector('span');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeEmptyDOMElement();
  });
});