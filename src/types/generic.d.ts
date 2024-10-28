type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type LabelTag = 'label' | 'legend' | 'span' | 'p';

type Fill = {
  [key: string]: string;
}

type Sizes = {
  width: number | string;
  height: number | string;
}

type ImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: Sizes;
}
