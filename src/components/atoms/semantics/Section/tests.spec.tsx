import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Section } from './index';

describe('Section', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Section>
        <p>Test Content</p>
      </Section>
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    const { container } = render(
      <Section className={customClass}>
        <p>Test Content</p>
      </Section>
    );
    expect(container.firstChild).toHaveClass(customClass);
  });
});