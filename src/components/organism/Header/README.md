# Header Component

The `Header` component is a part of the `poketeam` project. It is located in the `src/components/organism/Header` directory. This component is responsible for rendering the header section of the application, which includes a logo.

## Code

```jsx
import { Section } from "@/components/atoms";
import { Logo } from "@/components/molecules";
import styles from './styles.module.scss';

export function Header() {
  return (
    <header data-header className={styles.header}>
      <Section>
        <Logo />
      </Section>
    </header>
  );
}
```

## Description

- **Section**: A component imported from `@/components/atoms` that wraps the content of the header.
- **Logo**: A component imported from `@/components/molecules` that displays the logo of the application.
- **styles.header**: A CSS module that applies specific styles to the header element.

## Usage

To use the `Header` component, simply import it and include it in your JSX:

```jsx
import { Header } from "@/components/organism/Header";

function App() {
  return (
    <div>
      <Header />
      {/* Other components */}
    </div>
  );
}

export default App;
```

## Styling

The styles for the `Header` component are defined in the `styles.module.scss` file. Ensure that you have the necessary styles defined to make the header look as intended.

## Notes

- Make sure to have the `Section` and `Logo` components properly defined and exported in their respective directories.
- Ensure that the `styles.module.scss` file exists and contains the necessary CSS rules.
