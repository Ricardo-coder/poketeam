import React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './index';

describe('Grid Component', () => {
  it('should render loading state', () => {
    const { container } = render(<Grid isLoading={true}><div>Child</div></Grid>);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('should render children when not loading', () => {
    const { getByText } = render(<Grid isLoading={false}><div>Child</div></Grid>);
    expect(getByText('Child')).toBeInTheDocument();
  });

  it('should apply grid styles when not loading', () => {
    const { container } = render(<Grid isLoading={false}><div>Child</div></Grid>);
    expect(container.firstChild).toHaveClass('grid');
  });
});