# Heading Component

This document provides an overview of the `Heading` component used in the project.

## Component Overview

The `Heading` component is a reusable React component that renders a heading element (`h1` to `h6`) with custom styles.

### Props

- `children` (React.ReactNode): The content to be displayed inside the heading.
- `tag` (optional, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): Specifies the heading level. Defaults to 'h1'.

### Usage

```jsx
import { Heading } from './Heading';

<Heading tag="h2">This is a level 2 heading</Heading>
<Heading>This is a level 1 heading by default</Heading>
```

### Implementation

```typescript
import { createElement, Fragment } from 'react';
import styles from './styles.module.scss';

export interface IHeadingProps {
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({ children, tag = 'h1' }: IHeadingProps): JSX.Element {
  if (!children || (tag !== 'h1' && tag !== 'h2' && tag !== 'h3' && tag !== 'h4' && tag !== 'h5' && tag !== 'h6')) {
    return <Fragment />;
  }

  return createElement(tag, {
    'data-heading': true,
    className: styles.heading,
  }, children);
}
```

### Styling

The component uses styles from `styles.module.scss`. Ensure you have the appropriate styles defined in this file.
