# Label Component

The `Label` component is a simple React component that renders a text element with specific styles. It supports two HTML tags: `span` and `p`.

## Props

- `children` (optional): The content to be displayed inside the label. It can be any valid React node.
- `tag` (optional): The HTML tag to be used for the label. It can be either `span` or `p`. The default value is `span`.

## Usage

```jsx
import { Label } from './Label';

function App() {
  return (
    <div>
      <Label tag="p">This is a paragraph label</Label>
      <Label>This is a span label</Label>
    </div>
  );
}
```

## Code

```typescript
import { createElement } from "react";
import styles from "./Label.module.scss";

interface LabelProps {
  children?: React.ReactNode;
  tag?: 'span' | 'p';
}

export function Label({ children = "", tag = "span" }: LabelProps): JSX.Element {
  if (
    tag !== 'span' as LabelProps['tag'] &&
    tag !== 'p' as LabelProps['tag']
  ) {
    console.log('if')
    return createElement('span', {
      'data-label': true,
      className: styles.label,
    }, children);
  }

  return createElement(tag, {
    'data-label': true,
    className: styles.label,
  }, children);
}
```

## Notes

- The component uses a CSS module for styling, which is imported as `styles` from `Label.module.scss`.
- The `data-label` attribute is added to the rendered element for potential use in testing or styling.
