/**
 * Heading component that renders a heading element with a specified tag.
 *
 * @param {HeadingProps} props - The properties for the Heading component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the heading.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [props.tag='h1'] - The HTML tag to be used for the heading.
 * @returns {JSX.Element} The rendered heading element or a Fragment if no children or invalid tag is provided.
 */
import { createElement, Fragment, type ReactNode } from 'react';

export interface HeadingProps {
  children: ReactNode;
  tag?: HeadingTag;
}

export function Heading({ children, tag = 'h1' }: HeadingProps): JSX.Element {
  if (!children || (tag !== 'h1' && tag !== 'h2' && tag !== 'h3' && tag !== 'h4' && tag !== 'h5' && tag !== 'h6')) {
    return <Fragment />;
  };

  return createElement(tag, {
    'data-heading': true,
  }, children);
}
