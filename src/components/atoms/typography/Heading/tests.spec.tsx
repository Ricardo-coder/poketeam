import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Heading } from './index';

describe('Heading', () => {
  it('renders the correct heading tag with children', () => {
    render(<Heading tag="h2">Test Heading</Heading>);
    const headingElement = screen.getByText('Test Heading');
    expect(headingElement.tagName).toBe('H2');
  });

  it('renders with default tag h1 when no tag is provided', () => {
    render(<Heading>Default Heading</Heading>);
    const headingElement = screen.getByText('Default Heading');
    expect(headingElement.tagName).toBe('H1');
  });

  it('renders Fragment when children are not provided', () => { // @ts-expect-error - children are not provided
    const { container } = render(<Heading />);
    expect(container.firstChild).toBeNull();
  });

  it('renders Fragment when invalid tag is provided', () => { // @ts-expect-error - invalid tag is provided
    const { container } = render(<Heading tag="invalid">Invalid Tag Heading</Heading>);
    expect(container.firstChild).toBeNull();
  });
});