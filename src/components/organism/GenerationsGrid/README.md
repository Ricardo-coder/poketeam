# GenerationsGrid Component

The `GenerationsGrid` component is a React functional component that displays a grid of Pokémon generations using the `Grid` and `ImageCard` components. It fetches the generation data using a custom hook `useGenerations`.

## Usage

```jsx
'use client';
import { Grid, ImageCard } from "@/components/molecules";
import { useGenerations } from "@/hooks";

export function GenerationsGrid(): JSX.Element | null {
  const { generations, isLoading, isError } = useGenerations();

  if (isError || isLoading) {
    return null;
  }

  const { results, count } = generations?.data;

  const gridProps = {
    isLoading,
    totalItens: count,
  };

  return (
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
          },
        };

        return <ImageCard key={index} {...cardProps} />;
      })}
    </Grid>
  );
}
```

## Props

The `GenerationsGrid` component does not accept any props directly. It relies on the `useGenerations` hook to fetch the necessary data.

## Dependencies

- `Grid` component from `@/components/molecules`
- `ImageCard` component from `@/components/molecules`
- `useGenerations` hook from `@/hooks`

## Behavior

- The component fetches generation data using the `useGenerations` hook.
- If there is an error or the data is still loading, the component returns `null`.
- Once the data is successfully fetched, it maps over the results to create `ImageCard` components for each generation.
- Each `ImageCard` displays an image, alt text, title, and has predefined sizes.

## Example

To use the `GenerationsGrid` component, simply import and include it in your JSX:

```jsx
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

- Ensure that the images for each generation are available in the `/images/generations/` directory with the correct naming convention.
- The `useGenerations` hook should handle the API call and return the data in the expected format.
- The `Grid` and `ImageCard` components should be styled appropriately to display the generations grid effectively.
