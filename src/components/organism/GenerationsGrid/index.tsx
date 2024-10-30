
/**
 * Renders a grid of Pokémon generations using the `Section`, `Grid`, and `ImageCard` components.
 * Fetches generation data using the `useGenerations` hook and displays each generation as an image card.
 * 
 * @returns {JSX.Element} A section containing a grid of image cards representing Pokémon generations.
 * 
 * @component
 * @example
 * return (
 *   <GenerationsGrid />
 * )
 * 
 * @remarks
 * - Displays a loading or error state if the data is still being fetched or if there is an error.
 * - Each generation is represented by an image card with a corresponding image and title.
 * 
 * @hook
 * - `useGenerations`: Custom hook to fetch Pokémon generation data.
 * 
 * @dependencies
 * - `Section`: Atom component to wrap the grid.
 * - `Grid`: Molecule component to layout the image cards.
 * - `ImageCard`: Molecule component to display each generation as an image card.
 */
'use client';
import { Section } from "@/components/atoms";
import { Grid, ImageCard } from "@/components/molecules";
import { useGenerations } from "@/hooks";
import { Fragment } from "react";
import styles from './styles.module.scss';

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
    <Section className={styles.generations}>
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
