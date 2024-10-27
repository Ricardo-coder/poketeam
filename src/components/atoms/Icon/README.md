# Icon Component

The `Icon` component is a React component that dynamically imports and renders SVG icons. It accepts properties for sizes, fill, and the icon name.

## Props

### `IconProps`
- **sizes**: An object specifying the width and height of the icon. It can be a number or a string.
- **fill**: An optional property that can be a string or an object specifying the fill colors for the icon.
- **icon**: An optional string that specifies the name of the icon to be imported and rendered.

### `Fill`
- A type defining an object where keys are strings and values are strings representing colors.

### `Sizes`
- A type defining an object with `width` and `height` properties, which can be numbers or strings.

## Usage

```tsx
import { Icon } from './Icon';

const MyComponent = () => (
  <Icon 
    sizes={{ width: 24, height: 24 }} 
    fill="#000" 
    icon="exampleIcon" 
  />
);
```

## Example

```tsx
import { lazy } from "react";

export interface IconProps {
  sizes: Sizes;
  fill?: Fill | string;
  icon?: string;
}

type Fill = {
  [key: string]: string;
}

type Sizes = {
  width: number | string;
  height: number | string;
}

export function Icon({ sizes, fill, icon }: IconProps): JSX.Element | null {
  if (!icon) return null;

  const IconSVG = lazy(() => import(`./Icons/${icon ?? ''}`))

  if (!IconSVG) return null;

  return <IconSVG sizes={sizes} fill={fill} />
}
```

This component uses React's `lazy` function to dynamically import the SVG icon based on the `icon` prop. If the `icon` prop is not provided or the import fails, the component returns `null`.
