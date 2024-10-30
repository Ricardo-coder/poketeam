# Logo Component

This component displays the brand logo using the `Figure`, `Heading`, and `Icon` components from the atoms library.

## Usage

```jsx
import { Logo } from "@/components/molecules/Logo";

function App() {
  return (
    <div>
      <Logo />
    </div>
  );
}
```

## Props

This component does not accept any props.

## Implementation

```jsx
import { Figure, Heading, Icon } from "@/components/atoms";
import { BRAND } from "@/CONSTANTS";
import styles from "./styles.module.scss";

export function Logo() {
  const [text1, text2] = BRAND.split(" ");
  return (
    <Figure className={styles.logo}>
      <Heading>{text1}</Heading>
      <Icon icon="Pokeball" sizes={{ width: 60, height: 60 }} />
      <Heading>{text2}</Heading>
    </Figure>
  );
}
```

## Styling

The component uses styles from `styles.module.scss` to apply custom styling.

## Constants

- `BRAND`: A string constant imported from `@/CONSTANTS` which is split into two parts to form the brand name.

## Dependencies

- `Figure`, `Heading`, `Icon` components from `@/components/atoms`
- `BRAND` constant from `@/CONSTANTS`
- `styles.module.scss` for styling