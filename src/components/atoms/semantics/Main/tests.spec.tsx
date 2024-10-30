import React from 'react';
import { render } from '@testing-library/react';
import { Main } from './index';
import styles from './styles.module.scss';

describe('Main component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Main />);
    expect(container).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Main>Test Content</Main>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default className from styles', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveClass(styles.main);
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-class';
    const { container } = render(<Main className={customClass} />);
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('has data-main attribute', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveAttribute('data-main', 'true');
  });
});