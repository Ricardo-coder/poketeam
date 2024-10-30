# Main Component

This component is a wrapper for the main content of your application.

## Usage

```jsx
import { Main } from './Main';

function App() {
  return (
    <Main>
      <h1>Welcome to the App</h1>
    </Main>
  );
}
```

## Props

| Name      | Type             | Default       | Description                        |
|-----------|------------------|---------------|------------------------------------|
| children  | React.ReactNode  | `undefined`   | The content to be displayed inside the main element. |
| className | string           | `styles.main` | Additional class names to style the main element.    |

## Example

```jsx
import { Main } from './Main';
import './styles.module.scss';

function Example() {
  return (
    <Main className="custom-class">
      <p>This is an example content inside the Main component.</p>
    </Main>
  );
}
```

## Styling

The default styling for the `Main` component is imported from `styles.module.scss`. You can override this by passing a `className` prop.
