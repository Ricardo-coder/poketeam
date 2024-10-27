import { render } from '@testing-library/react';
import { Label } from './';

describe('Label component', () => {
  it('renders a span by default', () => {
    const { getByText } = render(<Label>Default Span</Label>);
    const element = getByText('Default Span');
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveAttribute('data-label', 'true');
  });

  it('renders a p tag when specified', () => {
    const { getByText } = render(<Label tag="p">Paragraph Tag</Label>);
    const element = getByText('Paragraph Tag');
    expect(element.tagName).toBe('P');
    expect(element).toHaveAttribute('data-label', 'true');
  });

  it('applies the correct class name', () => {
    const { getByText } = render(<Label>Check Class</Label>);
    const element = getByText('Check Class');
    expect(element).toHaveClass('label');
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Label>Child Content</Label>);
    const element = getByText('Child Content');
    expect(element).toBeInTheDocument();
  });

  it('falls back to span if an invalid tag is provided', () => { // @ts-expect-error Invalid tag
    const { getByText } = render(<Label tag="div" as any>Invalid Tag</Label>);
    const element = getByText('Invalid Tag');
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveAttribute('data-label', 'true');
  });
});