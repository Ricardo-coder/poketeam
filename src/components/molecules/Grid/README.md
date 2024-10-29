# Grid Component

The `Grid` component is a React component that conditionally renders its children based on the `isLoading` prop.

## Props

- `isLoading` (boolean): Determines whether the grid is in a loading state.
- `children` (ReactNode): The content to be displayed inside the grid.

## Usage

```jsx
import { Grid } from './Grid';

function App() {
  return (
    <Grid isLoading={true}>
      <div>Your content here</div>
    </Grid>
  );
}
```

## Example

```jsx
import { type ReactNode, Fragment } from "react";
import styles from './styles.module.scss';

interface GridProps {
  isLoading: boolean;
  children: ReactNode;
}

export function Grid({ isLoading, children }: GridProps): JSX.Element {
  return (
    <Fragment>
      {isLoading ? (
        <div />
      ) : (
        <div
          data-grid
          className={`${styles.grid}`}
        >
          {children}
        </div>
      )}
    </Fragment>
  )
}
```

In the example above, when `isLoading` is `true`, an empty `div` is rendered. Otherwise, the `children` are rendered inside a `div` with a `data-grid` attribute and a class name from the imported styles.