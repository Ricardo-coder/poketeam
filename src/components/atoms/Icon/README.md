# Icon Component

The `Icon` component is a React component that dynamically imports and renders SVG icons based on the provided props.

## Props

### `sizes`
- **Type:** `Sizes`
- **Description:** Specifies the size of the icon.

### `fill`
- **Type:** `Fill | string`
- **Optional**
- **Description:** Specifies the fill color of the icon. It can be a predefined `Fill` type or any valid CSS color string.

### `icon`
- **Type:** `string`
- **Optional**
- **Description:** The name of the icon to be imported and rendered. If not provided, the component will render an empty fragment.

## Usage

```jsx
import { Icon } from './Icon';

function App() {
  return (
    <div>
      <Icon sizes="large" fill="#000" icon="exampleIcon" />
    </div>
  );
}
```

## Notes

- The `Icon` component uses React's `lazy` and `Suspense` for dynamic imports. Ensure that you handle loading states appropriately in your application.
- The `icon` prop should match the filename of the SVG icon in the `./Icons/` directory.

## Example

```jsx
import React, { Suspense } from 'react';
import { Icon } from './Icon';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Icon sizes="medium" fill="red" icon="heart" />
    </Suspense>
  );
}
```

In this example, the `Icon` component will dynamically import and render the `heart` icon with a medium size and red fill color.