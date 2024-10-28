type Generations = {
  data: GenerationData;
}

type GenerationData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: GenerationsResult[];
}

type GenerationsResult = {
  name: string;
  url: string;
}