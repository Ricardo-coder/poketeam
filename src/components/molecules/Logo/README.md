# Logo Component

The `Logo` component is a part of the `poketeam` project. It is composed of an icon and two labels derived from the `BRAND` constant.

## Import Statements

```javascript
import { Icon, Label } from "@/components/atoms";
import { BRAND } from "@/CONSTANTS";
import styles from "./styles.module.scss";
```

## Component Definition

```javascript
export function Logo() {
  const [text1, text2] = BRAND.split(" ");
  return (
    <div className={styles.logo}>
      <Label data-logo-text-1>{text1}</Label>
      <Icon icon="Pokeball" sizes={{ width: 60, height: 60 }} />
      <Label>{text2}</Label>
    </div>
  );
}
```

## Props

The `Logo` component does not accept any props.

## Usage

To use the `Logo` component, simply import it and include it in your JSX:

```javascript
import { Logo } from "@/components/molecules/Logo";

function App() {
  return (
    <div>
      <Logo />
    </div>
  );
}
```

## Styling

The component uses styles from `styles.module.scss`. Ensure that the styles are defined appropriately to match the design requirements.

## Dependencies

- `Icon` and `Label` components from `@/components/atoms`
- `BRAND` constant from `@/CONSTANTS`
- SCSS module for styling

## Example

```javascript
import React from 'react';
import { Logo } from "@/components/molecules/Logo";

function Example() {
  return (
    <div>
      <Logo />
    </div>
  );
}

export default Example;
```

This example demonstrates how to include the `Logo` component in a React application.