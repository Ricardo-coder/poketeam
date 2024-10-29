/**
 * Component that renders a grid of Pokémon generations.
 * 
 * This component fetches the generations data using the `useGenerations` hook
 * and displays them in a grid layout. Each generation is represented by an 
 * `ImageCard` component.
 * 
 * @returns {JSX.Element | null} The rendered component or null if data is loading or an error occurred.
 */
'use client';
import { Section } from "@/components/atoms";
import { Grid, ImageCard } from "@/components/molecules";
import { useGenerations } from "@/hooks";

export function GenerationsGrid(): JSX.Element | null {
  const { generations, isLoading, isError } = useGenerations();

  if (isError || isLoading) {
    return null
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
