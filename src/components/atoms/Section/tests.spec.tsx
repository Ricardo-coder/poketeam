import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Section } from './index';
import styles from './styles.module.scss';

describe('Section', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Section>
        <p>Test Content</p>
      </Section>
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default className', () => {
    const { container } = render(
      <Section>
        <p>Test Content</p>
      </Section>
    );
    expect(container.firstChild).toHaveClass(styles.section);
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

  it('has data-section attribute', () => {
    const { container } = render(
      <Section>
        <p>Test Content</p>
      </Section>
    );
    expect(container.firstChild).toHaveAttribute('data-section', 'true');
  });
});