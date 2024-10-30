# Section Component

This component is a simple wrapper around the HTML `<section>` element, created using React's `createElement` function.

## Usage

```jsx
import { Section } from './Section';

function App() {
  return (
    <Section className="my-section">
      <h1>Hello, World!</h1>
      <p>This is a section component.</p>
    </Section>
  );
}
```

## Props

- **children**: `React.ReactNode` - The content to be rendered inside the section.
- **className**: `string` - Optional CSS class to apply to the section.

## Example

```jsx
import { Section } from './Section';

export function Example() {
  return (
    <Section className="example-section">
      <h2>Example Section</h2>
      <p>This is an example of the Section component in use.</p>
    </Section>
  );
}
```

## Code

```typescript
import { createElement } from 'react';

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return createElement('section', {
    className: className,
  }, children);
}
```
