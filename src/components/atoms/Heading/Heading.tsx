import { createElement } from 'react';

export interface IHeadingProps {
  children: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({ children, tag = 'h1' }: IHeadingProps): JSX.Element {
  return createElement(tag, {}, children);
}