# GenerationsGrid Component

The `GenerationsGrid` component is a React component that displays a grid of Pokémon generations using the `Section`, `Grid`, and `ImageCard` components. It fetches the generation data using the `useGenerations` hook and displays each generation as an image card.

## Code

```tsx
'use client';
import { Section } from "@/components/atoms";
import { Grid, ImageCard } from "@/components/molecules";
import { useGenerations } from "@/hooks";
import { Fragment } from "react";

export function GenerationsGrid(): JSX.Element {
  const { generations, isLoading, isError } = useGenerations();

  if (isError || isLoading) {
    return <Fragment />;
  }

  const { results, count } = generations?.data;

  const gridProps = {
    isLoading,
    totalItens: count,
  }

  return (
    <Section>
      <Grid {...gridProps}>
        {results.map(({ name }, index) => {
          const cardProps = {
            src: `/images/generations/${name}.jpg`,
            alt: name,
            title: `GEN ${index + 1}`,
            link: '',
            sizes: {
              width: 300,
              height: 300 / 1.44,
            }
          }

          return (
            <ImageCard key={index} {...cardProps} />
          )
        })}
      </Grid>
    </Section>
  )
}
```

## Props

The `GenerationsGrid` component does not take any props.

## Hooks

- `useGenerations`: Custom hook to fetch generation data.

## Components Used

- `Section`: A layout component for wrapping sections.
- `Grid`: A layout component for displaying items in a grid.
- `ImageCard`: A component for displaying an image with a title and link.

## Example Usage

```tsx
import { GenerationsGrid } from "@/components/organism/GenerationsGrid";

function App() {
  return (
    <div>
      <GenerationsGrid />
    </div>
  );
}

export default App;
```

## Notes

- Ensure that the images for each generation are available in the `/images/generations/` directory.
- The `useGenerations` hook should handle the fetching and error states appropriately.
- The `ImageCard` component should be used to display each generation as an image card.
- The `Grid` component should be used to display the image cards in a grid layout.
- The `Section` component can be used to wrap the grid of generations.
- The `GenerationsGrid` component should be used to display the grid of Pokémon generations.
- The `GenerationsGrid` component should be used in the main application or page where the grid of generations is required.
- The `GenerationsGrid` component should not be used directly in other components, as it is a top-level component for displaying the grid of generations.