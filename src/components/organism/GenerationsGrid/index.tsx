'use client';
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
  )
}