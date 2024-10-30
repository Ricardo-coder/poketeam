# Header Component

This component is a simple header element for your application.

## Usage

```jsx
import { Header } from './Header';

function App() {
  return (
    <Header className="my-header-class">
      <h1>Welcome to My App</h1>
    </Header>
  );
}
```

## Props

- `children` (optional): The content to be displayed inside the header.
- `className` (optional): A string of one or more class names to apply to the header element.

## Example

```jsx
import { Header } from './Header';

export function Example() {
  return (
    <Header className="example-header">
      <h2>Example Header</h2>
    </Header>
  );
}
```

## Code

```typescript
import { createElement } from 'react';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export function Header({ children, className }: HeaderProps) {
  return createElement('header', {
    className: className,
  }, children);
}
```